package com.web.app.qr;

import java.awt.image.BufferedImage;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import boofcv.abst.fiducial.QrCodeDetector;
import boofcv.alg.fiducial.qrcode.QrCode;
import boofcv.factory.fiducial.ConfigQrCode;
import boofcv.factory.fiducial.FactoryFiducial;
import boofcv.io.image.ConvertBufferedImage;
import boofcv.struct.image.GrayU8;

public class QrCodeProcessor {

    public String detectQrCode(BufferedImage input) {
        ConfigQrCode config = new ConfigQrCode();
        GrayU8 gray = ConvertBufferedImage.convertFrom(input, (GrayU8) null);
        QrCodeDetector<GrayU8> detector = FactoryFiducial.qrcode(config, GrayU8.class);
        detector.process(gray);

        List<QrCode> detections = detector.getDetections();
        List<QrCode> failures = detector.getFailures();

        JSONArray jsonDetections = new JSONArray();
        JSONObject result = new JSONObject();

        try {
            if (!detections.isEmpty()) {
                for (QrCode qr : detections) {
                    JSONObject jsonData = getJsonData(qr.message.toString());
                    JSONObject qrJson = new JSONObject();
                    qrJson.put("message", jsonData);
                    jsonDetections.put(qrJson);
                }
                result.put("status", "success");
                result.put("message", "QR codes detected successfully.");
                result.put("detections", jsonDetections);
            } else if (!failures.isEmpty()) {
                // Attempt to process failures if necessary
                List<QrCode> detections_1 = tryWithFailures(failures, input, config);
                if (!detections_1.isEmpty()) {
                    for (QrCode qr : detections_1) {
                        JSONObject jsonData = getJsonData(qr.message.toString());
                        JSONObject qrJson = new JSONObject();
                        qrJson.put("message", jsonData);
                        jsonDetections.put(qrJson);
                    }
                    result.put("status", "success");
                    result.put("message", "QR codes detected successfully after retry.");
                    result.put("detections", jsonDetections);
                } else {
                    result.put("status", "failure");
                    result.put("message", "QR codes detected but decoding failed.");
                }
            } else {
                result.put("status", "failure");
                result.put("message", "No QR codes detected.");
            }
        } catch (Exception e) {
            result.put("status", "error");
            result.put("message", e.getMessage());
        }

        return result.toString();
    }

    private JSONObject getJsonData(String message) {
        // Your implementation to convert QR code message to JSON
        return new JSONObject(message);
    }

    private List<QrCode> tryWithFailures(List<QrCode> failures, BufferedImage input, ConfigQrCode config) {
        // Your implementation to attempt alternative decoding
        // Return processed list of QR codes
        return List.of();
    }
}
