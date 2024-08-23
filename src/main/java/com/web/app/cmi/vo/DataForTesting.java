package com.web.app.cmi.vo;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DataForTesting {
    private String id;

    private Customer insured;

    private Customer buyer;

    private List<Customer> dependents;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Customer getInsured() {
        return insured;
    }

    public void setInsured(Customer insured) {
        this.insured = insured;
    }

    public Customer getBuyer() {
        return buyer;
    }

    public void setBuyer(Customer buyer) {
        this.buyer = buyer;
    }

    public List<Customer> getDependents() {
        return dependents;
    }

    public void setDependents(List<Customer> dependents) {
        this.dependents = dependents;
    }

    public static void main(String[] args) {
        // Tạo đối tượng Customer cho người được bảo hiểm
        Select documentType = new Select();
        documentType.setCode("ID_CARD");
        documentType.setName("Chứng minh nhân dân");

        Select gender = new Select();
        gender.setCode("MALE");
        gender.setName("Nam");

        Select nationality = new Select();
        nationality.setCode("VN");
        nationality.setName("Việt Nam");

        Select education = new Select();
        education.setCode("BACHELOR");
        education.setName("Cử nhân");

        Select maritalStatus = new Select();
        maritalStatus.setCode("SINGLE");
        maritalStatus.setName("Độc thân");

        Select profession = new Select();
        profession.setCode("ENGINEER");
        profession.setName("Kỹ sư");

        Select majorCategory = new Select();
        majorCategory.setCode("IT");
        majorCategory.setName("Công nghệ thông tin");

        Select mediumCategory = new Select();
        mediumCategory.setCode("SOFTWARE");
        mediumCategory.setName("Phần mềm");

        Select minorCategory = new Select();
        minorCategory.setCode("DEVELOPER");
        minorCategory.setName("Lập trình viên");

        // Tạo đối tượng Customer và thiết lập các thuộc tính
        Customer customer = new Customer();
        customer.setId("2453494545");
        customer.setType_id(documentType);
        customer.setNationalID("123456789");
        customer.setCitizenID("987654321");
        customer.setFullName("Nguyễn Văn A");
        customer.setDateOfBirth("01/01/1990");
        customer.setGender(gender);
        customer.setAddress("123 Đường ABC, Quận 1, TP.HCM");
        customer.setIssuingPlace("Công an TP.HCM");
        customer.setNationality(nationality);
        customer.setVisaNumber("VN123456");
        customer.setInsuranceRelationship("Bảo hiểm sức khỏe");
        customer.setMobilePhone("0901234567");
        customer.setEmail("nguyen@example.com");
        customer.setAge("34");
        customer.setEducation(education);
        customer.setMaritalStatus(maritalStatus);
        customer.setProfession(profession);
        customer.setMajorCategory(majorCategory);
        customer.setMediumCategory(mediumCategory);
        customer.setMinorCategory(minorCategory);
        customer.setCompanyName("Công ty ABC");
        customer.setPosition("Giám đốc");
        customer.setJobDescription("Quản lý dự án");
        customer.setMonthlyIncome("10000000");
        customer.setPostalCode("700000");
        customer.setCompanyPhone("02812345678");
        customer.setBranchNumber("123");
        // Tạo danh sách các người phụ thuộc
        List<Customer> dependents = new ArrayList<>();

        // Tạo đối tượng DataForTesting và thiết lập các giá trị
        DataForTesting data = new DataForTesting();
        data.setId("1234567890");
        data.setInsured(customer);
        data.setBuyer(customer);
        //data.setDependents(customer);

        // Chuyển đối tượng DataForTesting thành chuỗi JSON
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String jsonString = objectMapper.writeValueAsString(data);
            System.out.println(jsonString);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
