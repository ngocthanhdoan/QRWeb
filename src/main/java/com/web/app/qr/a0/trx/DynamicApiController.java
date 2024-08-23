package com.web.app.qr.a0.trx;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manager.web.app.plugins.returnObject;
import com.web.app.service.JsonDataService;

@RestController
@RequestMapping("/v1/api")
public class DynamicApiController {
    private final JsonDataService jsonDataService;
    public DynamicApiController(JsonDataService jsonDataService) {
        this.jsonDataService = jsonDataService;
    }
    @GetMapping("/{entityName}")
    public ResponseEntity<returnObject> getEntities(@PathVariable String entityName) {
        try {
            Class<?> clazz = Class.forName("com.web.app.cmi.vo." + capitalize(entityName));
            List<?> entities = jsonDataService.readData(entityName + ".json", (Class<Object[]>) Array.newInstance(clazz, 0).getClass());
            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(0);
            responseObject.setMsgDescs("Success");
            responseObject.setReturnData(entities);
            return ResponseEntity.ok(responseObject); // Return entities as part of the response
        } catch (Exception e) {
            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(1);
            responseObject.setMsgDescs("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body(responseObject);
        }
    }
    @PostMapping("/{entityName}")
    public ResponseEntity<returnObject> addEntity(@PathVariable String entityName, @RequestBody Map<String, Object> entity) {
        try {
            Class<?> clazz = Class.forName("com.web.app.cmi.vo." + capitalize(entityName));

            // Đọc dữ liệu hiện tại từ file JSON
            List<?> entities = jsonDataService.readData(entityName + ".json", (Class<Object[]>) Array.newInstance(clazz, 0).getClass());

            // Chuyển đổi Map thành đối tượng
            Object newEntity = jsonDataService.mapToObject(entity, clazz);

            // Sao chép dữ liệu từ danh sách hiện tại sang danh sách mới có thể thay đổi
            List<Object> updatedEntities = new ArrayList<>(entities);

            // Thêm đối tượng mới vào danh sách
            updatedEntities.add(newEntity);

            // Ghi lại danh sách đã cập nhật vào file JSON
            jsonDataService.writeData(entityName + ".json", updatedEntities, clazz);

            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(0);
            responseObject.setMsgDescs("Success");

            return ResponseEntity.ok(responseObject);
        } catch (Exception e) {
            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(1);
            responseObject.setMsgDescs("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body(responseObject);
        }
    }

    @PutMapping("/{entityName}/{id}")
    public ResponseEntity<returnObject> updateEntity(@PathVariable String entityName, @PathVariable String id, @RequestBody Map<String, Object> entity) {
        try {
            Class<?> clazz = Class.forName("com.web.app.cmi.vo." + capitalize(entityName));

            List<?> entities = jsonDataService.readData(entityName + ".json", (Class<Object[]>) Array.newInstance(clazz, 0).getClass());

            Object updatedEntity = jsonDataService.mapToObject(entity, clazz);

            List<Object> updatedEntities = new ArrayList<>();
            boolean found = false;
            for (Object e : entities) {
                if (getId(e).equals(id)) {
                    updatedEntities.add(updatedEntity);
                    found = true;
                } else {
                    updatedEntities.add(e);
                }
            }

            if (!found) {
                returnObject responseObject = new returnObject();
                responseObject.setReturnCode(1);
                responseObject.setMsgDescs("Entity not found with ID: " + id);
                return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).body(responseObject);
            }

            jsonDataService.writeData(entityName + ".json", updatedEntities, (Class<Object[]>) Array.newInstance(clazz, 0).getClass());

            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(0);
            responseObject.setMsgDescs("Success");

            return ResponseEntity.ok(responseObject);
        } catch (Exception e) {
            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(1);
            responseObject.setMsgDescs("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body(responseObject);
        }
    }

    @DeleteMapping("/{entityName}/{id}")
    public ResponseEntity<returnObject> deleteEntity(@PathVariable String entityName, @PathVariable String id) {
        try {
            Class<?> clazz = Class.forName("com.web.app.cmi.vo." + capitalize(entityName));

            List<?> entities = jsonDataService.readData(entityName + ".json", (Class<Object[]>) Array.newInstance(clazz, 0).getClass());

            List<Object> updatedEntities = new ArrayList<>();
            boolean found = false;
            for (Object e : entities) {
                if (getId(e).equals(id)) {
                    found = true;
                } else {
                    updatedEntities.add(e);
                }
            }

            if (!found) {
                returnObject responseObject = new returnObject();
                responseObject.setReturnCode(1);
                responseObject.setMsgDescs("Entity not found with ID: " + id);
                return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).body(responseObject);
            }

            jsonDataService.writeData(entityName + ".json", updatedEntities, (Class<Object[]>) Array.newInstance(clazz, 0).getClass());

            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(0);
            responseObject.setMsgDescs("Success");

            return ResponseEntity.ok(responseObject);
        } catch (Exception e) {
            returnObject responseObject = new returnObject();
            responseObject.setReturnCode(1);
            responseObject.setMsgDescs("Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body(responseObject);
        }
    }

    // Utility method to get ID from an entity object (Assuming entity has getId method)
    private String getId(Object entity) throws Exception {
        return (String) entity.getClass().getMethod("getId").invoke(entity);
    }

    private String capitalize(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }
        return Character.toUpperCase(str.charAt(0)) + str.substring(1);
    }
}
