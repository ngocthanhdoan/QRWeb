package com.web.app;

import boofcv.abst.fiducial.QrCodeDetector;
import boofcv.alg.fiducial.qrcode.QrCode;
import boofcv.factory.fiducial.ConfigQrCode;
import boofcv.factory.fiducial.FactoryFiducial;
import boofcv.io.image.ConvertBufferedImage;
import boofcv.struct.image.GrayU8;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;

public class Test {
    private static final Logger log = Logger.getLogger(Test.class);
    private ConfigQrCode config;
    private String directoryPath;

    public Test(String directoryPath) {
        this.directoryPath = directoryPath;
        createDirectory(directoryPath);
    }

    public void createDirectory(String directoryPath) {
        File directory = new File(directoryPath);
        if (!directory.exists()) {
            if (directory.mkdirs()) {
                log.debug("Directory created successfully: " + directoryPath);
            } else {
                log.error("Failed to create directory: " + directoryPath);
            }
        } else {
            log.debug("Directory already exists: " + directoryPath);
        }
    }

    public void saveImage(BufferedImage image, String fileName) {
        File outputFile = new File(directoryPath + File.separator + fileName);
        try {
            ImageIO.write(image, "png", outputFile);
            log.debug("Image saved successfully: " + outputFile.getAbsolutePath());
        } catch (IOException e) {
            log.error("Error saving image", e);
        }
    }

    public BufferedImage loadImage(String fileName) {
        File inputFile = new File(directoryPath + File.separator + fileName);
        try {
        	System.out.println("oke");
            return ImageIO.read(inputFile);
        } catch (IOException e) {
            log.error("Error loading image", e);
            return null;
        }
    }

    public String detectQrCode(BufferedImage input) {
        this.config = new ConfigQrCode();
        log.debug("Config: [" + config.considerTransposed + "]");

        GrayU8 gray = ConvertBufferedImage.convertFrom(input, (GrayU8) null);
        QrCodeDetector<GrayU8> detector = FactoryFiducial.qrcode(config, GrayU8.class);
        detector.process(gray);
        List<QrCode> detections = detector.getDetections();
        List<QrCode> failures = detector.getFailures();

        JSONArray jsonDetections = new JSONArray();
        JSONObject result = new JSONObject();

        if (detections.size() > 0) {
            log.debug("Detect: [" + detections.size() + "]");
            for (QrCode qr : detections) {
                log.debug("Message: '" + qr.message + "'");
                JSONObject qrJson = new JSONObject();
                qrJson.put("message", qr.message);
                jsonDetections.put(qrJson);
            }
            result.put("status", "success");
            result.put("detections", jsonDetections);
        } else {
            log.debug("No QR codes detected");
            result.put("status", "failure");
            result.put("message", "No QR codes detected");

            if (failures.size() > 0) {
                log.debug("QrUnKnow: [" + failures.size() + "]");
                result.put("failure_count", failures.size());
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String directoryPath = "images";
        Test manager = new Test(directoryPath);

        // Đường dẫn đầy đủ đến tệp ảnh mã QR
        String fileName = "IMG_8192.JPEG";

        // Đọc tệp ảnh HEIC
        BufferedImage image = manager.loadImage(fileName);

        if (image == null) {
            System.err.println("Không thể đọc tệp ảnh. Kiểm tra lại đường dẫn.");
            return;
        }

        // Phát hiện mã QR
        String result = manager.detectQrCode(image);

        // In kết quả
        System.out.println("Kết quả phát hiện mã QR:");
        System.out.println(result);

        // Lưu ảnh (nếu cần)
        manager.saveImage(image, "output.png");
    }
}
