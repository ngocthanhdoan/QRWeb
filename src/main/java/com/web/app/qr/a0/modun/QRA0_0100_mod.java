package com.web.app.qr.a0.modun;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Polygon;
import java.awt.Rectangle;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

import com.web.app.plugins.IdentityCardManager;
import com.web.app.qr.a0.vo.IdentityCard;

import boofcv.abst.fiducial.QrCodeDetector;
import boofcv.alg.fiducial.qrcode.QrCode;
import boofcv.factory.fiducial.ConfigQrCode;
import boofcv.factory.fiducial.FactoryFiducial;
import boofcv.io.image.ConvertBufferedImage;
import boofcv.struct.image.GrayU8;
import georegression.struct.point.Point2D_I32;

public class QRA0_0100_mod {
    private static final Logger log = Logger.getLogger(QRA0_0100_mod.class);
    private UUID uid;
    private IdentityCardManager cardManager = new IdentityCardManager();

    public String detectQrCode(BufferedImage input) {
        ConfigQrCode config = new ConfigQrCode();
        GrayU8 gray = ConvertBufferedImage.convertFrom(input, (GrayU8) null);
        QrCodeDetector<GrayU8> detector = FactoryFiducial.qrcode(config, GrayU8.class);
        detector.process(gray);
        List<QrCode> detections = detector.getDetections();
        List<QrCode> failures = detector.getFailures();

        JSONArray jsonDetections = new JSONArray();
        JSONObject result = new JSONObject();

        if (detections.size() > 0) {
            for (QrCode qr : detections) {
                try {
                    JSONObject jsonData = getJsonData(qr.message.toString());
                    String idPassport = jsonData.getString("id_passport");

                    IdentityCard existingCard = cardManager.getCard(idPassport);
                    if (existingCard != null) {
                        // Trường hợp dữ liệu trùng khớp
                        result.put("status", "warning");
                        result.put("message", "Information matches with an existing customer");
                        result.put("action", "update"); // Tùy chọn hành động
                        result.put("current_data", existingCard.toJson()); // Dữ liệu hiện tại để so sánh
                        result.put("new_data", jsonData); // Dữ liệu mới để so sánh
                    } else {
                        // Tạo đối tượng mới
                        IdentityCard newCard = new IdentityCard(jsonData.getString("id_identity_card"), idPassport, jsonData.getString("fullname"), jsonData.getString("birth_date"), jsonData.getString("gender"), jsonData.getString("address"),
                                jsonData.getString("issue_date"), input // Lưu hình ảnh mới
                        );
                        cardManager.saveImage(idPassport, input);
                        cardManager.addOrUpdateCard(newCard);
                        result.put("status", "success");
                        result.put("message", "New identity card added successfully.");
                    }

                    JSONObject qrJson = new JSONObject();
                    qrJson.put("message", jsonData);
                    jsonDetections.put(qrJson);
                } catch (Exception e) {
                    result.put("status", "error");
                    result.put("message", e.getMessage());
                }
            }
            result.put("detections", jsonDetections);
        } else {
            result.put("status", "failure");
            result.put("message", "["+uid.randomUUID()+"]: No QR codes detected");
            if(failures.size()>0) {
                result.put("message","["+uid.randomUUID()+"]: QR codes detected but decoding failed");
            }
            

            if (failures.size() > 0) {
                List<QrCode> detections_1 = tryWithFlailures(failures, input, config);
                if (detections_1.size() > 0) {
                    for (QrCode qr : detections_1) {
                        try {
                            JSONObject jsonData = getJsonData(qr.message.toString());
                            String idPassport = jsonData.getString("id_passport");

                            IdentityCard existingCard = cardManager.getCard(idPassport);
                            if (existingCard != null) {
                                // Trường hợp dữ liệu trùng khớp
                                result.put("status", "warning");
                                result.put("message", "Information matches with an existing customer");
                                result.put("action", "update"); // Tùy chọn hành động
                                result.put("current_data", existingCard.toJson()); // Dữ liệu hiện tại để so sánh
                                result.put("new_data", jsonData); // Dữ liệu mới để so sánh
                            } else {
                                // Tạo đối tượng mới
                                IdentityCard newCard = new IdentityCard(jsonData.getString("id_identity_card"), idPassport, jsonData.getString("fullname"), jsonData.getString("birth_date"), jsonData.getString("gender"), jsonData.getString("address"),
                                        jsonData.getString("issue_date"), input // Lưu hình ảnh mới
                                );
                                cardManager.saveImage(idPassport, input);
                                cardManager.addOrUpdateCard(newCard);
                                result.put("status", "success");
                                result.put("message", "New identity card added successfully.");
                            }

                            JSONObject qrJson = new JSONObject();
                            qrJson.put("message", jsonData);
                            jsonDetections.put(qrJson);
                        } catch (Exception e) {
                            result.put("status", "error");
                            result.put("message", e.getMessage());
                        }
                    }
                    result.put("detections", jsonDetections);
                }
                result.put("failure_count", failures.size());
            }
        }

        return result.toString();
    }

    public List<QrCode> tryWithFlailures(List<QrCode> failures, BufferedImage input, ConfigQrCode config) {

        for (QrCode failure : failures) {

            // Cắt vùng chứa mã QR từ hình ảnh gốc
            BufferedImage failureRegion = extractFailureRegion(input, failure);

            // Chuyển đổi hình ảnh cắt ra thành GrayU8
            GrayU8 grayFailure = ConvertBufferedImage.convertFrom(failureRegion, (GrayU8) null);

            // Xử lý lại vùng chứa mã QR
            QrCodeDetector<GrayU8> retryDetector = FactoryFiducial.qrcode(config, GrayU8.class);
            retryDetector.process(grayFailure);

            // Kiểm tra kết quả phát hiện lại
            
            List<QrCode> retryDetections = retryDetector.getDetections();
            if (failureRegion != null) {
                saveImage(failureRegion, "images/failure_region_" + System.currentTimeMillis() + ".png");
            }
            if (!retryDetections.isEmpty()) {
                return retryDetections;
            } else {
                return new ArrayList<QrCode>();
            }
            
        }
        return null;
    }

    private JSONObject getJsonData(String input) throws Exception {
        String[] parts = input.split("\\|");
        if (parts.length != 7) {
            throw new IllegalArgumentException("Invalid input format");
        }

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id_identity_card", parts[0]); // ID căn cước công dân
        jsonObject.put("id_passport", parts[1]); // ID chứng minh nhân dân
        jsonObject.put("fullname", parts[2]);
        jsonObject.put("birth_date", parts[3]);
        jsonObject.put("gender", parts[4]);
        jsonObject.put("address", parts[5]);
        jsonObject.put("issue_date", parts[6]);
        return jsonObject;
    }

    private BufferedImage extractFailureRegion(BufferedImage image, QrCode qrCode) {
        // Lấy các điểm vị trí từ mã QR
        List<Point2D_I32> points = getQrCodePoints(qrCode);

        // Nếu không có điểm hoặc số điểm không đủ, trả về null
        if (points.size() < 4) {
            System.err.println("Not enough points to define a polygon.");
            return null;
        }

        // Chuyển đổi danh sách điểm thành Polygon
        int[] xPoints = points.stream().mapToInt(p -> p.x).toArray();
        int[] yPoints = points.stream().mapToInt(p -> p.y).toArray();
        Polygon polygon = new Polygon(xPoints, yPoints, points.size());

        // Tạo hình ảnh kết quả với vùng cần thiết
        BufferedImage result = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = result.createGraphics();
        g2d.drawImage(image, 0, 0, null);

        // Cắt vùng hình chữ nhật bao quanh polygon
        Rectangle bounds = polygon.getBounds();
        BufferedImage croppedImage = result.getSubimage(bounds.x, bounds.y, bounds.width, bounds.height);
        g2d.dispose();

        // Làm việc với hình ảnh đã cắt để cải thiện chất lượng
        return improveImageQuality(croppedImage);
    }

    // Hàm để lấy danh sách các điểm vị trí từ mã QR
    private List<Point2D_I32> getQrCodePoints(QrCode qrCode) {
        List<Point2D_I32> points = new ArrayList<>();

        // Ví dụ về cách lấy các điểm từ LOCATION_BITS
        for (int i = 0; i < qrCode.LOCATION_BITS.length; i++) {
            List<Point2D_I32> bitPoints = qrCode.LOCATION_BITS[i];
            if (bitPoints != null) {
                points.addAll(bitPoints);
            }
        }

        return points;
    }

    private BufferedImage improveImageQuality(BufferedImage image) {
        // Thực hiện các bước làm mịn, tăng độ tương phản, hoặc các thao tác xử lý ảnh khác
        // Ví dụ đơn giản: Chuyển đổi hình ảnh sang định dạng grayscale
        BufferedImage result = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_BYTE_GRAY);
        Graphics g = result.getGraphics();
        g.drawImage(image, 0, 0, null);
        g.dispose();
        return result;
    }

    private void saveImage(BufferedImage image, String filePath) {
        try {
            // Tạo đối tượng File cho đường dẫn lưu
            File outputfile = new File(filePath);
            // Tạo thư mục nếu chưa tồn tại
            outputfile.getParentFile().mkdirs();
            // Lưu hình ảnh vào file
            ImageIO.write(image, "png", outputfile);
            System.out.println("Image saved as: " + filePath);
        } catch (IOException e) {
            System.err.println("Error saving image: " + e.getMessage());
        }
    }
}
