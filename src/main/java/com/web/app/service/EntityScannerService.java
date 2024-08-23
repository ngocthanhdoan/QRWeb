package com.web.app.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.Entity;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class EntityScannerService {

    private String dataPath = "src/main/resources/data/";

    private final ObjectMapper mapper = new ObjectMapper();

    @PostConstruct
    public void scanAndCreateFiles() throws IOException, ClassNotFoundException {
        // Tìm tất cả các lớp entity trong các package cụ thể
        List<Class<?>> entityClasses = findEntityClasses("com.web.app.cmi.vo"); // Thay đổi package theo nhu cầu

        // Tạo file JSON cho mỗi lớp entity nếu không tồn tại
        for (Class<?> entityClass : entityClasses) {
            String fileName = entityClass.getSimpleName().toLowerCase() + ".json";
            File file = new File(dataPath + fileName);

            if (!file.exists()) {
                // Tạo file mới và ghi dữ liệu trống
                file.createNewFile();
                writeData(fileName, new ArrayList<>(), entityClass);
            }
        }
    }

    private List<Class<?>> findEntityClasses(String basePackage) throws ClassNotFoundException {
        ClassPathScanningCandidateComponentProvider provider = new ClassPathScanningCandidateComponentProvider(false);
        provider.addIncludeFilter(new AnnotationTypeFilter(Entity.class)); // Hoặc annotation bạn dùng cho entity

        Set<org.springframework.beans.factory.config.BeanDefinition> components = provider.findCandidateComponents(basePackage);
        List<Class<?>> entityClasses = new ArrayList<>();
        for (org.springframework.beans.factory.config.BeanDefinition bd : components) {
            String className = bd.getBeanClassName();
            if (className != null) {
                entityClasses.add(Class.forName(className));
            }
        }
        return entityClasses;
    }

    public <T> void writeData(String fileName, List<T> data, Class<T> clazz) throws IOException {
        File file = new File(dataPath + fileName);
        // Ghi dữ liệu vào file
        mapper.writeValue(file, data);
    }
}
