package com.web.app.cmi.vo;

public class Customer {
    private String id;

    private Select type_id; // Loại giấy tờ (documentType)

    private String nationalID; //Số Căn cước

    private String citizenID; // Số Chứng minh

    private String fullName; // Họ tên (fullName)

    private String dateOfBirth; // Ngày tháng năm sinh (dob)

    private Select gender; // Giới tính (gender)

    private String address; // Địa chỉ (permanentAddress hoặc contactAddress)

    private String issuingPlace; // Nơi cấp (issuingPlace)

    private Select nationality; // Quốc tịch (nationality)

    private String visaNumber; // Số thị thực nhập cảnh (visaNumber)

    private String insuranceRelationship; // Quan hệ bảo hiểm (insuranceRelationship)

    private String mobilePhone; // Số điện thoại di động (mobilePhone)

    private String email; // Email (email)

    private String age; // Tuổi (age)

    private Select education; // Học lực (education)

    private Select maritalStatus; // Tình trạng hôn nhân (maritalStatus)

    private Select profession; // Nghề nghiệp (profession)

    private Select majorCategory; // Phân loại lớn (majorCategory)

    private Select mediumCategory; // Phân loại trung (mediumCategory)

    private Select minorCategory; // Phân loại nhỏ (minorCategory)

    private String companyName; // Tên công ty (companyName)

    private String position; // Chức vụ (position)

    private String jobDescription; // Nội dung nghề nghiệp (jobDescription)

    private String monthlyIncome; // Thu nhập tháng (monthlyIncome)

    private String postalCode; // Mã vùng (postalCode)

    private String companyPhone; // Điện thoại công ty (companyPhone)

    private String branchNumber; // Số máy nhánh (branchNumber)

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Select getType_id() {
        return type_id;
    }

    public void setType_id(Select type_id) {
        this.type_id = type_id;
    }

    public String getNationalID() {
        return nationalID;
    }

    public void setNationalID(String nationalID) {
        this.nationalID = nationalID;
    }

    public String getCitizenID() {
        return citizenID;
    }

    public void setCitizenID(String citizenID) {
        this.citizenID = citizenID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Select getGender() {
        return gender;
    }

    public void setGender(Select gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIssuingPlace() {
        return issuingPlace;
    }

    public void setIssuingPlace(String issuingPlace) {
        this.issuingPlace = issuingPlace;
    }

    public Select getNationality() {
        return nationality;
    }

    public void setNationality(Select nationality) {
        this.nationality = nationality;
    }

    public String getVisaNumber() {
        return visaNumber;
    }

    public void setVisaNumber(String visaNumber) {
        this.visaNumber = visaNumber;
    }

    public String getInsuranceRelationship() {
        return insuranceRelationship;
    }

    public void setInsuranceRelationship(String insuranceRelationship) {
        this.insuranceRelationship = insuranceRelationship;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public Select getEducation() {
        return education;
    }

    public void setEducation(Select education) {
        this.education = education;
    }

    public Select getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(Select maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public Select getProfession() {
        return profession;
    }

    public void setProfession(Select profession) {
        this.profession = profession;
    }

    public Select getMajorCategory() {
        return majorCategory;
    }

    public void setMajorCategory(Select majorCategory) {
        this.majorCategory = majorCategory;
    }

    public Select getMediumCategory() {
        return mediumCategory;
    }

    public void setMediumCategory(Select mediumCategory) {
        this.mediumCategory = mediumCategory;
    }

    public Select getMinorCategory() {
        return minorCategory;
    }

    public void setMinorCategory(Select minorCategory) {
        this.minorCategory = minorCategory;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getMonthlyIncome() {
        return monthlyIncome;
    }

    public void setMonthlyIncome(String monthlyIncome) {
        this.monthlyIncome = monthlyIncome;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCompanyPhone() {
        return companyPhone;
    }

    public void setCompanyPhone(String companyPhone) {
        this.companyPhone = companyPhone;
    }

    public String getBranchNumber() {
        return branchNumber;
    }

    public void setBranchNumber(String branchNumber) {
        this.branchNumber = branchNumber;
    }

}
