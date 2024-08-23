package com.web.app.plugins;

import java.awt.Graphics2D;
import java.awt.Polygon;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.imageio.ImageIO;

import boofcv.abst.fiducial.QrCodeDetector;
import boofcv.alg.fiducial.qrcode.QrCode;
import boofcv.factory.fiducial.ConfigQrCode;
import boofcv.factory.fiducial.FactoryFiducial;
import boofcv.io.image.ConvertBufferedImage;
import boofcv.struct.image.GrayU8;
import georegression.struct.point.Point2D_F64;
import georegression.struct.shapes.Polygon2D_F64;

public class ComplexQrCodeProcessor {

    public static void main(String[] args) {
        try {
            // Đọc hình ảnh từ file
            BufferedImage image = ImageIO.read(new File("D:\\dev\\devhub\\QRWeb\\images\\Screenshot 2024-08-13 155029.png"));

            // Tiền xử lý hình ảnh
            BufferedImage preprocessedImage = preprocessImage(image);

            // Phát hiện mã QR
            List<QrCode> qrCodes = detectQrCodes(preprocessedImage);
            List<QrCode> failures = getFailures(preprocessedImage);
            for (QrCode qrCode : failures) {
                System.out.println(convertQrCodeToPolygon(qrCode));
                BufferedImage image1 = createImageFromPolygon(convertQrCodeToPolygon(qrCode));
                
                // Lưu hình ảnh
                try {
                    File file = new File("polygon_image.png");
                    ImageIO.write(image1, "png", file);
                    System.out.println("Image saved as: " + file.getAbsolutePath());
                } catch (IOException e) {
                    System.err.println("Error saving image: " + e.getMessage());
                }
            }
            System.out.println(failures.size());
            // Xử lý kết quả phát hiện
            for (QrCode qrCode : qrCodes) {
                System.out.println("Detected QR Code with message: " + qrCode.message);
                // Xử lý thêm nếu cần
            }

        } catch (IOException e) {
            System.err.println("Error processing image: " + e.getMessage());
        }
    }

    private static BufferedImage preprocessImage(BufferedImage image) {
        // Chuyển đổi hình ảnh sang đen trắng
        BufferedImage grayImage = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_BYTE_GRAY);
        grayImage.getGraphics().drawImage(image, 0, 0, null);

        // Cải thiện độ tương phản (ví dụ đơn giản)
        BufferedImage contrastImage = improveContrast(grayImage);

        return contrastImage;
    }

    private static BufferedImage improveContrast(BufferedImage image) {
        // Cải thiện độ tương phản với một kỹ thuật đơn giản (ví dụ: độ sáng và độ tối)
        // Cần thêm mã cụ thể cho việc cải thiện độ tương phản
        return image;
    }

    private static List<QrCode> getFailures(BufferedImage image) {
        GrayU8 gray = ConvertBufferedImage.convertFrom(image, (GrayU8) null);

        // Tạo detector cho mã QR
        ConfigQrCode config = new ConfigQrCode();
        QrCodeDetector<GrayU8> detector = FactoryFiducial.qrcode(config, GrayU8.class);

        // Xử lý hình ảnh để phát hiện mã QR
        detector.process(gray);
        return detector.getFailures();
    }

    private static List<QrCode> detectQrCodes(BufferedImage image) {
        GrayU8 gray = ConvertBufferedImage.convertFrom(image, (GrayU8) null);

        // Tạo detector cho mã QR
        ConfigQrCode config = new ConfigQrCode();
        QrCodeDetector<GrayU8> detector = FactoryFiducial.qrcode(config, GrayU8.class);

        // Xử lý hình ảnh để phát hiện mã QR
        detector.process(gray);
        return detector.getDetections();
    }
    
   // Lấy điểm ảnh QRCode 
    public static Polygon2D_F64 convertQrCodeToPolygon(QrCode qrCode) {
        Polygon2D_F64 polygon = new Polygon2D_F64(4); // Tạo Polygon2D_F64 với số điểm tối đa là 4 (QR Code có 4 góc)

        // Lấy các điểm góc từ QrCode
        List<Point2D_F64> corners = qrCode.ppCorner.vertexes.toList();

        // Kiểm tra xem có đủ 4 điểm không
        if (corners != null && corners.size() == 4) {
            // Xóa các điểm cũ (nếu có)
            polygon.zero();
            
            // Thêm tất cả các điểm vào Polygon2D_F64
            polygon.setTo(corners);
        } else {
            throw new IllegalArgumentException("QR code does not have 4 corners");
        }

        return polygon;
    }
    public static BufferedImage createImageFromPolygon(Polygon2D_F64 polygon) {
        // Xác định kích thước hình ảnh (giả sử là 200x200 cho ví dụ)
        int width = 50;
        int height = 50;
        
        // Tạo hình ảnh với kích thước đã xác định
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = image.createGraphics();
        
        // Chuyển đổi Polygon2D_F64 thành Polygon AWT
        int[] xPoints = new int[polygon.vertexes.size()];
        int[] yPoints = new int[polygon.vertexes.size()];

        for (int i = 0; i < polygon.vertexes.size(); i++) {
            Point2D_F64 point = polygon.vertexes.get(i);
            xPoints[i] = (int) point.x;
            yPoints[i] = (int) point.y;
        }
        
        Polygon awtPolygon = new Polygon(xPoints, yPoints, xPoints.length);

        // Vẽ hình nền trắng
        g2d.setBackground(java.awt.Color.WHITE);
        g2d.clearRect(0, 0, width, height);
        
        // Vẽ Polygon
        g2d.setColor(java.awt.Color.RED);
        g2d.drawPolygon(awtPolygon);

        // Giải phóng tài nguyên
        g2d.dispose();
        
        return image;
    }


   
    private static Polygon getPolygonFromQrCode(QrCode qrCode) {
        List<Point2D_F64> points = qrCode.ppCorner.vertexes.toList();
        int[] xPoints = new int[points.size()];
        int[] yPoints = new int[points.size()];

        for (int i = 0; i < points.size(); i++) {
            xPoints[i] = (int) points.get(i).x;
            yPoints[i] = (int) points.get(i).y;
        }

        return new Polygon(xPoints, yPoints, points.size());
    }

    public static Polygon convertToPolygon(Polygon2D_F64 polygon2D) {
        List<Point2D_F64> points = polygon2D.vertexes.toList();
        int[] xPoints = new int[points.size()];
        int[] yPoints = new int[points.size()];

        for (int i = 0; i < points.size(); i++) {
            xPoints[i] = (int) points.get(i).x;
            yPoints[i] = (int) points.get(i).y;
        }

        return new Polygon(xPoints, yPoints, points.size());
    }

    private static void saveImage(BufferedImage image, String filePath) {
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
