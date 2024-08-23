package com.web.app.qr.a0.trx;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Collection;

import javax.imageio.ImageIO;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.manager.web.app.analyzer.MetricsAnalyzer;
import com.manager.web.app.plugins.returnObject;
import com.web.app.plugins.IdentityCardManager;
import com.web.app.qr.a0.modun.QRA0_0100_mod;
import com.web.app.qr.a0.vo.IdentityCard;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
public class QRA0_0100 {
    public QRA0_0100() {
        // TODO Auto-generated constructor stub
        responseObject = new returnObject();
        responseObject.setReturnCode(0);
        responseObject.setMsgDescs("Success");
    }

    private QRA0_0100_mod qrProcessor = new QRA0_0100_mod();

    private IdentityCardManager cardManager = new IdentityCardManager();

    @Autowired
    private com.web.app.config.MetricsLogger metricsLogger;

    @PostMapping("/process-upload")
    @ResponseBody
    public String processUpload(@RequestParam("file") MultipartFile file) {
        JSONObject response = new JSONObject();
        long startTime = System.currentTimeMillis();
        try {
            BufferedImage image = ImageIO.read(file.getInputStream());
            String result = qrProcessor.detectQrCode(image);
            response = new JSONObject(result);

            // Kiểm tra nếu cần cập nhật
            if (response.has("action") && response.getString("action").equals("update")) {
                String idPassport = response.getJSONObject("new_data").getString("id_passport");
                IdentityCard existingCard = cardManager.getCard(idPassport);

                if (existingCard != null) {
                    response.put("message", "Information matches with an existing customer.");
                    response.put("update_required", true); // Indicate that update is required
                    response.put("existing_data", existingCard.toJson()); // Trả về dữ liệu cũ
                }
            } else {
                response.put("update_required", false); // Indicate that no update is required
            }
            //			metricsLogger.logHttpMetrics("/api/process-upload", "POST", "200", System.currentTimeMillis() - startTime,
            //					true);

        } catch (IOException e) {
            response.put("status", "error");
            response.put("message", "Failed to process image: " + e.getMessage());
            //			metricsLogger.logHttpMetrics("/api/process-upload", "POST", "500", System.currentTimeMillis() - startTime,
            //					false);
        }

        return response.toString();
    }

    @PostMapping("/update-card")
    @ResponseBody
    public String updateCard(@RequestBody JSONObject updateRequest) {
        JSONObject response = new JSONObject();
        long startTime = System.currentTimeMillis();

        try {
            String idPassport = updateRequest.getString("id_passport");
            IdentityCard newCard = new IdentityCard(updateRequest.getString("id_identity_card"), idPassport, updateRequest.getString("fullname"), updateRequest.getString("birth_date"), updateRequest.getString("gender"),
                    updateRequest.getString("address"), updateRequest.getString("issue_date"));

            cardManager.addOrUpdateCard(newCard);
            response.put("status", "success");
            response.put("message", "Identity card updated successfully.");
            //			metricsLogger.logHttpMetrics("/api/update-card", "POST", "200", System.currentTimeMillis() - startTime,
            //					true);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Failed to update card: " + e.getMessage());
            //			metricsLogger.logHttpMetrics("/api/update-card", "POST", "500", System.currentTimeMillis() - startTime,
            //					false);
        }

        return response.toString();
    }

    @GetMapping("/cards")
    @ResponseBody
    public Collection<IdentityCard> getAllCards() {
        long startTime = System.currentTimeMillis();
        //		metricsLogger.logHttpMetrics("/api/card-image", "GET", "200", System.currentTimeMillis() - startTime, true);
        return cardManager.getAllCards();
    }

    @PostMapping("/add-card")
    @ResponseBody
    public String addCard(@RequestBody String cardData) {
        JSONObject response = new JSONObject();
        long startTime = System.currentTimeMillis();

        try {
            JSONObject cardDataJson = new JSONObject(cardData);
            String idIdentityCard = cardDataJson.optString("id_identity_card");
            String idPassport = cardDataJson.optString("id_passport");
            String fullname = cardDataJson.optString("fullname");
            String birthDate = cardDataJson.optString("birth_date");
            String gender = cardDataJson.optString("gender");
            String address = cardDataJson.optString("address");
            String issueDate = cardDataJson.optString("issue_date");

            IdentityCard newCard = new IdentityCard(idIdentityCard, idPassport, fullname, birthDate, gender, address, issueDate);
            cardManager.addOrUpdateCard(newCard);

            response.put("status", "success");
            response.put("message", "Identity card added or updated successfully.");
            //			metricsLogger.logHttpMetrics("/api/add-card", "POST", "200", System.currentTimeMillis() - startTime, true);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Failed to add or update card: " + e.getMessage());
            //			metricsLogger.logHttpMetrics("/api/add-card", "POST", "500", System.currentTimeMillis() - startTime, false);
        }

        return response.toString();
    }

    @PostMapping("/delete-card/{idPassport}")
    @ResponseBody
    public String deleteCard(@PathVariable("idPassport") String idPassport) {
        JSONObject response = new JSONObject();
        long startTime = System.currentTimeMillis();

        try {
            IdentityCard existingCard = cardManager.getCard(idPassport);
            if (existingCard != null) {
                cardManager.removeCard(idPassport);
                response.put("status", "success");
                response.put("message", "Identity card deleted successfully.");
                //				metricsLogger.logHttpMetrics("/api/delete-card", "POST", "200", System.currentTimeMillis() - startTime,
                //						true);
            } else {
                response.put("status", "error");
                response.put("message", "Identity card not found.");
                metricsLogger.logHttpMetrics("/api/delete-card", "POST", "404", System.currentTimeMillis() - startTime, false);
            }
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Failed to delete card: " + e.getMessage());
            //			metricsLogger.logHttpMetrics("/api/delete-card", "POST", "500", System.currentTimeMillis() - startTime,
            //					false);
        }
        return response.toString();
    }

    @GetMapping("/card-image/{idPassport}")
    public void getCardImage(@PathVariable("idPassport") String idPassport, HttpServletResponse response) {
        long startTime = System.currentTimeMillis();
        try {
            // Giả sử hình ảnh được lưu trữ với tên tệp là ID của căn cước công dân
            File imageFile = new File("images/" + idPassport + ".png");

            if (imageFile.exists()) {
                response.setContentType("image/jpeg");
                FileInputStream inputStream = new FileInputStream(imageFile);
                OutputStream outputStream = response.getOutputStream();
                byte[] buffer = new byte[8192];
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
                inputStream.close();
                outputStream.close();
                //				metricsLogger.logHttpMetrics("/api/card-image", "GET", "200", System.currentTimeMillis() - startTime,
                //						true);
            } else {
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                response.getWriter().write("Image not found");
                //metricsLogger.logHttpMetrics("/api/card-image", "GET", "500", System.currentTimeMillis() - startTime,
                //		false);
            }
        } catch (IOException e) {
            try {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                response.getWriter().write("Failed to retrieve image: " + e.getMessage());
            } catch (IOException ex) {
                //				metricsLogger.logHttpMetrics("/api/card-image", "GET", "500", System.currentTimeMillis() - startTime,
                //						false);
                ex.printStackTrace();
            }
            //			metricsLogger.logHttpMetrics("/api/card-image", "GET", "500", System.currentTimeMillis() - startTime,
            //					false);

        }
    }

    @GetMapping("/card-info-passport/{idPassport}")
    public String getCardPassport(@PathVariable("idPassport") String idPassport, HttpServletResponse response) {
        return cardManager.getCard(idPassport).toJson().toString();
    }

    @GetMapping("/card-info-identity/{idIdentityCard}")
    public String getCardIdentity(@PathVariable("idIdentityCard") String idIdentityCard, HttpServletResponse response) {
        return cardManager.getIdentityCard(idIdentityCard).toJson().toString();
    }

    private returnObject responseObject;

    @GetMapping("/logs")
    @ResponseBody
    public returnObject getSummary() {
        long startTime = System.currentTimeMillis();
        try {
            MetricsAnalyzer analyzer = new MetricsAnalyzer();
            responseObject.setReturnData(analyzer.getSummary());
            return responseObject;
        } catch (Exception e) {
            // logger.error("Error handling request to /api/endpoint", e);
            responseObject.setReturnCode(-1);
            return responseObject;
        }
    }
}