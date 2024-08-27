package com.web.app.cmi.vo;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

public class DataSnapPayLoad {
    private String id;

    private String key;

    private String value;

    private String desc;

    private String prefix;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }
    public static void main(String[] args) {
        ObjectMapper obj = new ObjectMapper();
        File file = new File("src/main/resources/data/DataSnapPayLoad.json");
        List<DataSnapPayLoad> dataList;

        try {
            // Read existing data from file
            if (file.exists()) {
                CollectionType listType = obj.getTypeFactory().constructCollectionType(List.class, DataSnapPayLoad.class);
                dataList = obj.readValue(file, listType);
            } else {
                // If file does not exist, initialize an empty list
                dataList = new ArrayList<>();
            }

            // Add new options for Selects
            // Document Types
//            dataList.add(createDataSnapPayLoad("Chứng minh nhân dân", "ID_CARD", "Chứng minh nhân dân", "DOCUMENT_TYPE"));
//            dataList.add(createDataSnapPayLoad("Hộ chiếu", "PASSPORT", "Hộ chiếu", "DOCUMENT_TYPE"));
//
//            // Genders
//            dataList.add(createDataSnapPayLoad("Nam", "MALE", "Nam", "GENDER"));
//            dataList.add(createDataSnapPayLoad("Nữ", "FEMALE", "Nữ", "GENDER"));
//
//            // Nationalities
//            dataList.add(createDataSnapPayLoad("Việt Nam", "VN", "Việt Nam", "NATIONALITY"));
//            dataList.add(createDataSnapPayLoad("Mỹ", "US", "Mỹ", "NATIONALITY"));
//
//            // Education Levels
//            dataList.add(createDataSnapPayLoad("Cấp 3", "HIGH_SCHOOL", "Cấp 3", "EDUCATION"));
//            dataList.add(createDataSnapPayLoad("Đại học", "BACHELOR", "Đại học", "EDUCATION"));
//            dataList.add(createDataSnapPayLoad("Thạc sĩ", "MASTER", "Thạc sĩ", "EDUCATION"));
//            dataList.add(createDataSnapPayLoad("Tiến sĩ", "PHD", "Tiến sĩ", "EDUCATION"));
//
//            // Marital Status
//            dataList.add(createDataSnapPayLoad("Độc thân", "SINGLE", "Độc thân", "MARITAL_STATUS"));
//            dataList.add(createDataSnapPayLoad("Kết hôn", "MARRIED", "Kết hôn", "MARITAL_STATUS"));
//
//            // Professions
//            dataList.add(createDataSnapPayLoad("Kỹ sư", "ENGINEER", "Kỹ sư", "PROFESSION"));
//            dataList.add(createDataSnapPayLoad("Bác sĩ", "DOCTOR", "Bác sĩ", "PROFESSION"));
//
//            // Major Categories
//            dataList.add(createDataSnapPayLoad("Công nghệ thông tin", "IT", "Công nghệ thông tin", "MAJOR_CATEGORY"));
//            dataList.add(createDataSnapPayLoad("Kinh tế", "ECONOMICS", "Kinh tế", "MAJOR_CATEGORY"));
//
//            // Medium Categories
//            dataList.add(createDataSnapPayLoad("Phần mềm", "SOFTWARE", "Phần mềm", "MEDIUM_CATEGORY"));
//            dataList.add(createDataSnapPayLoad("Phần cứng", "HARDWARE", "Phần cứng", "MEDIUM_CATEGORY"));
//
//            // Minor Categories
//            dataList.add(createDataSnapPayLoad("Lập trình viên", "DEVELOPER", "Lập trình viên", "MINOR_CATEGORY"));
//            dataList.add(createDataSnapPayLoad("Quản lý dự án", "PROJECT_MANAGER", "Quản lý dự án", "MINOR_CATEGORY"));
            
            dataList.add(createDataSnapPayLoad("Vợ", "FOR_MALE", "Vợ", "RELATIONSHIP"));
            dataList.add(createDataSnapPayLoad("Chồng", "FOR_FEMALE", "Chồng", "RELATIONSHIP"));
            dataList.add(createDataSnapPayLoad("Con", "CHILD", "Con", "RELATIONSHIP"));
          //  dataList.add(createDataSnapPayLoad("Nghề nghiệp loại 3", "type3", "Nghề nghiệp loại 3", "JOBS_TYPE"));
           // dataList.add(createDataSnapPayLoad("Nghề nghiệp loại 4", "type4", "Nghề nghiệp loại 4", "JOBS_TYPE"));

            // Write the updated list back to the file
            obj.writeValue(file, dataList);
            System.out.println("Data updated successfully!");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static DataSnapPayLoad createDataSnapPayLoad(String desc, String key, String value, String prefix) {
        DataSnapPayLoad payload = new DataSnapPayLoad();
        payload.setDesc(desc);
        payload.setId(UUID.randomUUID().toString());
        payload.setKey(key);
        payload.setValue(value);
        payload.setPrefix(prefix);
        return payload;
    }
  
}
