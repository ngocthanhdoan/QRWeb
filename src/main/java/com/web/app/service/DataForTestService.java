package com.web.app.service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.web.app.cmi.vo.Customer;
import com.web.app.cmi.vo.DataForTesting;

import jakarta.annotation.PostConstruct;

@Service
public class DataForTestService {

    private List<DataForTesting> data;

    private static final String DATA_FILE_PATH = "src/main/resources/data/DataForTesting.json";

    @PostConstruct
    public void init() {
        ObjectMapper mapper = new ObjectMapper();
        byte[] jsonData;
        try {
            jsonData = Files.readAllBytes(Paths.get(DATA_FILE_PATH));
            data = mapper.readValue(jsonData, new TypeReference<List<DataForTesting>>() {});
        } catch (Exception e) {
            data = new ArrayList<>();
        }
    }

    public List<DataForTesting> getAllData() {
        init();
        return data;
    }

    public DataForTesting getDataById(String id) {
        init();
        return data.stream().filter(d -> d.getId().equals(id)).findFirst().orElse(null);
    }

    public boolean updateBuyer(String id, Customer updatedBuyer) {
        init();
        DataForTesting entry = getDataById(id);
        if (entry != null) {
            entry.setBuyer(updatedBuyer);
            return saveDataToFile();
        }
        return false;
    }

    public boolean updateInsured(String id, Customer updatedInsured) {
        
        DataForTesting entry = getDataById(id);
        if (entry != null) {
            entry.setInsured(updatedInsured);
            return saveDataToFile();
        }
        return false;
    }

    public boolean updateDependents(String id, List<Customer> updatedDependents) {
  
        DataForTesting entry = getDataById(id);
        if (entry != null) {
            entry.setDependents(updatedDependents);
            return saveDataToFile();
        }
        return false;
    }

    private boolean saveDataToFile() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            byte[] jsonData = mapper.writeValueAsBytes(data);
            Files.write(Paths.get(DATA_FILE_PATH), jsonData, StandardOpenOption.TRUNCATE_EXISTING);
            init();
            return true;
        } catch (Exception e) {
            // Handle the exception, e.g., logging
            e.printStackTrace();
            return false;
        }
    }
}
