package com.web.app.orc.a0.modun;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.awt.image.BufferedImage;
import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ORCA0_0100_mod {
    private ITesseract instance;

    public ORCA0_0100_mod() {
        instance = new Tesseract();
        instance.setDatapath("src/main/resources/language"); 
        instance.setLanguage("vie");
    }

    public static void main(String[] args) {

        ITesseract instance = new Tesseract(); // Tạo đối tượng Tesseract

        // Đặt đường dẫn đến thư mục chứa các tệp dữ liệu ngôn ngữ
        instance.setDatapath("src/main/resources/language"); // Thay thế bằng đường dẫn thực tế

        // Đặt ngôn ngữ (ví dụ: 'eng' cho tiếng Anh)
        instance.setLanguage("vie");
        // instance.setVariable("tessedit_char_blacklist", "!@#$%^&*()_+={}[]|:;\"'<>,.?/⁄");
        try {
            String result = instance.doOCR(new File("C:\\Users\\0100644068\\Desktop\\test5.png"));
            System.out.println(result);
            Map<String, String> info = extractInfo(result);

            for (Map.Entry<String, String> entry : info.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        } catch (TesseractException e) {
            e.printStackTrace();
        }
    }

    public String OCR_Form_Image(BufferedImage image) {
        StringBuilder sb= new StringBuilder();
        try {
            String result = instance.doOCR(image);
            Map<String, String> info = extractInfo(result);
            sb.append("===========================================\n");
            sb.append("Dữ liệu có thể phát hiện: \n");
            for (Map.Entry<String, String> entry : info.entrySet()) {
                sb.append(entry.getKey() + ": " + entry.getValue()+"\n");
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
            sb.append("===========================================\n");
            sb.append("Dữ liệu đọc được từ ORC: \n \n");
            sb.append(result+"\n");
            sb.append("===========================================\n");
        } catch (TesseractException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return sb.toString();
    }

    public static Map<String, String> extractInfo(String text) {
        Map<String, String> info = new HashMap<>();

        // Biểu thức chính quy cho các phần thông tin
        // Tìm số chứng minh thư gồm 12 chữ số
        Pattern idPattern = Pattern.compile("\\b\\d{12}\\b");
        // Tìm ngày sinh theo định dạng dd/MM/yyyy
        Pattern datePattern = Pattern.compile("\\b\\d{2}/\\d{2}/\\d{4}\\b");
        // Tìm giới tính có thể là Nam hoặc Nữ
        Pattern genderPattern = Pattern.compile("ex:\\s*(Nam|Nữ)");
        // Tìm tên, có thể có dấu và chữ cái
        Pattern namePattern = Pattern.compile("me:\\s*([\\p{L} \\p{M}]+)");

        // Tìm số chứng minh thư
        Matcher idMatcher = idPattern.matcher(text);
        if (idMatcher.find()) {
            info.put("Số", idMatcher.group());
        }

        // Tìm ngày sinh
        Matcher dateMatcher = datePattern.matcher(text);
        if (dateMatcher.find()) {
            info.put("Ngày sinh", dateMatcher.group());
        }

        // Tìm giới tính
        Matcher genderMatcher = genderPattern.matcher(text);
        if (genderMatcher.find()) {
            info.put("Giới tính", genderMatcher.group(1));
        }

        // Tìm tên
        Matcher nameMatcher = namePattern.matcher(text);
        if (nameMatcher.find()) {
            info.put("Tên", nameMatcher.group(1).trim());
        }

        return info;
    }
}
