package com.web.app.service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.web.app.cmi.vo.DataForTesting;

import jakarta.annotation.PostConstruct;

@Service
public class DataForTestService {

    private List<DataForTesting> data;

    @PostConstruct
    public void init()  {
        ObjectMapper mapper = new ObjectMapper();
        byte[] jsonData;
        try {
            jsonData= Files.readAllBytes(Paths.get("src/main/resources/data/DataForTesting.json"));
            data = mapper.readValue(jsonData, new TypeReference<List<DataForTesting>>() {
            });
        } catch (Exception e) {
            data= new ArrayList<DataForTesting>();
        }
     
    }

    public List<DataForTesting> getAllData() {
        return data;
    }

    public DataForTesting getDataById(String id) {
        return data.stream().filter(d -> d.getId().equals(id)).findFirst().orElse(null);
    }
}