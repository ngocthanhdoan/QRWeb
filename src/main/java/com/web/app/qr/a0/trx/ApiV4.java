package com.web.app.qr.a0.trx;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PutMapping("fortest/{id}/insured")
    public Customer updateInsured(@PathVariable String id, @RequestBody Customer updatedInsured) {
        boolean success = dataForTestService.updateInsured(id, updatedInsured);
        if (success) {
            DataForTesting data = dataForTestService.getDataById(id);
            return data != null ? data.getInsured() : null;
        }
        return null;
    }

    @GetMapping("fortest/{id}/buyer")
    public Customer getBuyer(@PathVariable String id) {
        DataForTesting data = dataForTestService.getDataById(id);
        return data != null ? data.getBuyer() : null;
    }

    @PutMapping("fortest/{id}/buyer")
    public Customer updateBuyer(@PathVariable String id, @RequestBody Customer updatedBuyer) {
        boolean success = dataForTestService.updateBuyer(id, updatedBuyer);
        if (success) {
            DataForTesting data = dataForTestService.getDataById(id);
            return data != null ? data.getBuyer() : null;
        }
        return null;
    }

    @GetMapping("fortest/{id}/dependents")
    public List<Customer> getDependents(@PathVariable String id) {
        DataForTesting data = dataForTestService.getDataById(id);
        return data != null ? data.getDependents() : null;
    }

    @PostMapping("fortest/{id}/dependents")
    public ResponseEntity<Void> updateDependents(@PathVariable String id, @RequestBody List<Customer> updatedDependents) {
        boolean success = dataForTestService.updateDependents(id, updatedDependents);
        return success ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
