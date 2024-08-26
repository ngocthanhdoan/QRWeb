package com.web.app;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

import com.groupdocs.parser.Parser;
import com.groupdocs.parser.data.PageBarcodeArea;

public class QRCodeScanner {
//    public static void main(String[] args) {
//        String imagePath = "D:\\dev\\devhub\\QRWeb\\images\\013241216.png";
//        String pdfPath = "D:\\dev\\devhub\\QRWeb\\images\\output.pdf";
//        try {
//            BufferedImage image = ImageIO.read(new File(imagePath));
//
//            PDDocument document = new PDDocument();
//            PDPage page = new PDPage();
//            document.addPage(page);
//
//            PDPageContentStream contentStream = new PDPageContentStream(document, page);
//            contentStream.drawImage(PDImageXObject.createFromFile(imagePath, document), 0, 0, page.getMediaBox().getWidth(), page.getMediaBox().getHeight());
//            contentStream.close();
//            document.save(pdfPath);
//            document.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        System.out.println("Há Lầu");
//        try (InputStream inputStream = new FileInputStream(new File(pdfPath)); Parser parser = new Parser(inputStream)) {
//            Iterable<PageBarcodeArea> barcodes = parser.getBarcodes();
//            for (PageBarcodeArea barcode : barcodes) {
//                System.out.println("QR Code Value: " + barcode.getValue());
//            }
//            System.out.println("Há Lầu");
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//    }
}
