package com.web.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class JsonDataService {

    private final ObjectMapper mapper = new ObjectMapper();

    private final String dataPath = "src/main/resources/data/";


    public String readFileAsString(String fileName) throws IOException {
        File file = new File(dataPath + fileName);

        // Kiểm tra sự tồn tại của file
        if (!file.exists()) {
            // Tạo thư mục chứa file nếu không tồn tại
            file.getParentFile().mkdirs();
            
            // Tạo file mới nếu chưa tồn tại
            file.createNewFile();
        }

        // Đọc dữ liệu từ file
        return new String(Files.readAllBytes(file.toPath()));
    }
    public Map<String, Object> jsonToMap(String json) throws IOException {
        return mapper.readValue(json, new TypeReference<Map<String, Object>>() {});
    }

    public <T> T mapToObject(Map<String, Object> map, Class<T> clazz) throws IOException {
        String json = mapper.writeValueAsString(map);
        return mapper.readValue(json, clazz);
    }

    public Map<String, Object> objectToMap(Object obj) throws IOException {
        String json = mapper.writeValueAsString(obj);
        return jsonToMap(json);
    }

    public <T> List<T> readData(String fileName, Class<T[]> clazz) {
        try {
            String json = readFileAsString(fileName);
            T[] data = mapper.readValue(json, clazz);
            return new ArrayList<>(List.of(data));
        } catch (IOException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    public <T> void writeData(String fileName, List<Object> updatedEntities, Class<?> clazz) {
        try {
            String json = mapper.writeValueAsString(updatedEntities);
            Files.write(new File(dataPath + fileName).toPath(), json.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
