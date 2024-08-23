package com.web.app.plugins;

import java.io.*;
import java.util.Properties;

public class PropertiesManager {
    private Properties properties;

    private String filePath;

    // Constructor
    public PropertiesManager(String filePath) {
        this.filePath = filePath;
        properties = new Properties();
        loadProperties();
    }

    // Load properties from file
    private void loadProperties() {
        try (InputStream input = getClass().getClassLoader().getResourceAsStream(filePath)) {
            if (input == null) {
                System.out.println("Sorry, unable to find " + filePath);
                return;
            }
            properties.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Save properties to file
    public void saveProperties() {
        try (OutputStream output = new FileOutputStream(filePath)) {
            properties.store(output, null);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Get a property
    public String getProperty(String key) {
        return properties.getProperty(key);
    }

    // Set a property
    public void setProperty(String key, String value) {
        properties.setProperty(key, value);
    }

    public static void main(String[] args) {
        // Khởi tạo PropertiesManager với đường dẫn tài nguyên
        PropertiesManager pm = new PropertiesManager("application.properties");
        String dbUrl = pm.getProperty("server.port");
        System.out.println(dbUrl);
    }
}
