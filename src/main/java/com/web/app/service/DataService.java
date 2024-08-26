package com.web.app.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.web.app.cmi.vo.DataSnapPayLoad;

@Service
public class DataService {

    private static final String FILE_PATH = "src/main/resources/data/DataSnapPayLoad.json";

    private final ObjectMapper objectMapper;

    public DataService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public List<DataSnapPayLoad> getAllData() throws IOException {
        return objectMapper.readValue(new File(FILE_PATH), new TypeReference<List<DataSnapPayLoad>>() {
        });
    }

    public Optional<DataSnapPayLoad> getDataById(String id) throws IOException {
        List<DataSnapPayLoad> dataList = getAllData();
        return dataList.stream().filter(data -> data.getId().equals(id)).findFirst(); 
    }

    public List<DataSnapPayLoad> getDataByPrefix(String prefix) throws IOException {
        List<DataSnapPayLoad> dataList = getAllData();
        return dataList.stream()
                       .filter(data -> data.getPrefix().equals(prefix))
                       .collect(Collectors.toList());
    }
}
