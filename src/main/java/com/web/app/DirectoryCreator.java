package com.web.app;

import java.io.File;

public class DirectoryCreator {
    public static void createDirectory(String directoryPath) {
        File directory = new File(directoryPath);
        if (!directory.exists()) {
            if (directory.mkdirs()) {
                System.out.println("Directory created successfully: " + directoryPath);
            } else {
                System.out.println("Failed to create directory: " + directoryPath);
            }
        } else {
            System.out.println("Directory already exists: " + directoryPath);
        }
    }

    public static void main(String[] args) {
        // Đường dẫn đến thư mục cần tạo
        String directoryPath = "images";
        createDirectory(directoryPath);
    }
}
