package com.web.app.qr.a0.modun;

import java.awt.image.BufferedImage;
import java.util.List;
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

public class QRA0_0100_mod {
    private static final Logger log = Logger.getLogger(QRA0_0100_mod.class);
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
                        IdentityCard newCard = new IdentityCard(
                            jsonData.getString("id_identity_card"),
                            idPassport,
                            jsonData.getString("fullname"),
                            jsonData.getString("birth_date"),
                            jsonData.getString("gender"),
                            jsonData.getString("address"),
                            jsonData.getString("issue_date"),
                            input // Lưu hình ảnh mới
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
            result.put("message", "No QR codes detected");

            if (failures.size() > 0) {
                result.put("failure_count", failures.size());
            }
        }

        return result.toString();
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
}
