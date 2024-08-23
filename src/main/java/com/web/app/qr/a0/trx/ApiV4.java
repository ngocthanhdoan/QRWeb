package com.web.app.qr.a0.trx;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.app.cmi.vo.Customer;
import com.web.app.cmi.vo.DataForTesting;
import com.web.app.cmi.vo.DataSnapPayLoad;
import com.web.app.service.DataForTestService;
import com.web.app.service.DataService;

@RestController
@RequestMapping("v4/api/")
public class ApiV4 {

    private final DataService dataService;
    private final DataForTestService dataForTestService;

    @Autowired
    public ApiV4(DataService dataService, DataForTestService dataForTestService) {
        this.dataService = dataService;
        this.dataForTestService = dataForTestService;
    }

    @GetMapping("data")
    public List<DataSnapPayLoad> getAllData() {
        try {
            return dataService.getAllData();
        } catch (IOException e) {
            e.printStackTrace();
            return List.of();
        }
    }

    @GetMapping("data/{id}")
    public Optional<DataSnapPayLoad> getDataById(@PathVariable String id) {
        try {
            return dataService.getDataById(id);
        } catch (IOException e) {
            e.printStackTrace();
            return Optional.empty();
        }
    }

    @GetMapping("data/prefix/{prefix}")
    public List<DataSnapPayLoad> getDataByPrefix(@PathVariable String prefix) {
        try {
            return dataService.getDataByPrefix(prefix);
        } catch (IOException e) {
            e.printStackTrace();
            return List.of();
        }
    }
    @GetMapping("fortest")
    public List<DataForTesting> getAllDataForTest() {
        return dataForTestService.getAllData();
    }

    @GetMapping("/fortest/{id}")
    public DataForTesting getDataForTestById(@PathVariable String id) {
        return dataForTestService.getDataById(id);
    }

    @GetMapping("fortest/{id}/insured")
    public Customer getInsured(@PathVariable String id) {
        DataForTesting data = dataForTestService.getDataById(id);
        return data != null ? data.getInsured() : null;
    }

    @GetMapping("fortest/{id}/buyer")
    public Customer getBuyer(@PathVariable String id) {
        DataForTesting data = dataForTestService.getDataById(id);
        return data != null ? data.getBuyer() : null;
    }

    @GetMapping("fortest/{id}/dependents")
    public List<Customer> getDependents(@PathVariable String id) {
        DataForTesting data = dataForTestService.getDataById(id);
        return data != null ? data.getDependents() : null;
    }
}