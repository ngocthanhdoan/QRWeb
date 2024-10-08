import{s as C}from"./index-ggqE4OSR.js";import{s as y}from"./index-Df4H0EM9.js";import{s as f}from"./index-DH0wBUUz.js";import{f as _}from"./fetchOptionsMixin-BlPY6uDo.js";import{a as r}from"./axios-DsPaXkF5.js";import{_ as N,k as E,w as I,o as i,a as o,c,e as O,b as m,t as A,d as D,F as P}from"./index-O2MfTL4f.js";import"./index-Cn5F2VlY.js";import"./index-h4s86q-A.js";import"./index-CyBjhenm.js";import"./index-CmstFZp-.js";import"./index-UcxY3SJ_.js";const V={mixins:[_],data(){return{selectedOptions:{},dynamicOptions:{}}},methods:{async fetchData(){try{const n=await r.get("/v4/api/data"),e=this.extractPrefixes(n.data);await Promise.all(e.map(a=>this.fetchAuto(a)))}catch(n){console.error("Error fetching data:",n)}},extractPrefixes(n){return[...new Set(n.map(e=>e.prefix))]},async fetchAuto(n){try{const e=await r.get(`/v4/api/data/prefix/${n}`);this.dynamicOptions[n]=e.data.map(a=>({code:a.key,name:a.value})),this.selectedOptions[n]=""}catch(e){console.error(`Error fetching options for prefix ${n}:`,e)}},clearCMI(){sessionStorage.setItem("CMI_ID","")}},mounted(){this.fetchData()}},x={class:""},B=o("h2",null,"Select Examples",-1),b={key:0,class:"card flex flex-col gap-4 w-full mt-8"},M=o("h2",null,"DATA TESTING---",-1),S=o("div",{class:"card flex flex-col gap-4 w-full mt-8"},[o("pre",null,[o("code",null,`
[
  {
    "id": "1234567890",
    "insured": {
      "id": "2453494545",
      "type_id": {
        "code": "ID_CARD",
        "name": "Chứng minh nhân dân"
      },
      "nationalID": "123456789",
      "citizenID": "987654321",
      "fullName": "Nguyễn Văn A",
      "dateOfBirth": "01/01/1990",
      "gender": {
        "code": "MALE",
        "name": "Nam"
      },
      "address": "123 Đường ABC, Quận 1, TP.HCM",
      "issuingPlace": "Công an TP.HCM",
      "nationality": {
        "code": "VN",
        "name": "Việt Nam"
      },
      "visaNumber": "VN123456",
      "insuranceRelationship": "Bảo hiểm sức khỏe",
      "mobilePhone": "0901234567",
      "email": "nguyen@example.com",
      "age": "34",
      "education": {
        "code": "BACHELOR",
        "name": "Cử nhân"
      },
      "maritalStatus": {
        "code": "SINGLE",
        "name": "Độc thân"
      },
      "profession": {
        "code": "ENGINEER",
        "name": "Kỹ sư"
      },
      "majorCategory": {
        "code": "IT",
        "name": "Công nghệ thông tin"
      },
      "mediumCategory": {
        "code": "SOFTWARE",
        "name": "Phần mềm"
      },
      "minorCategory": {
        "code": "DEVELOPER",
        "name": "Lập trình viên"
      },
      "companyName": "Công ty ABC",
      "position": "Giám đốc",
      "jobDescription": "Quản lý dự án",
      "monthlyIncome": "10000000",
      "postalCode": "700000",
      "companyPhone": "02812345678",
      "branchNumber": "123"
    },
    "buyer": {
      "id": "2453494545",
      "type_id": {
        "code": "ID_CARD",
        "name": "Chứng minh nhân dân"
      },
      "nationalID": "123456789",
      "citizenID": "987654321",
      "fullName": "Nguyễn Văn A",
      "dateOfBirth": "01/01/1990",
      "gender": {
        "code": "MALE",
        "name": "Nam"
      },
      "address": "123 Đường ABC, Quận 1, TP.HCM",
      "issuingPlace": "Công an TP.HCM",
      "nationality": {
        "code": "VN",
        "name": "Việt Nam"
      },
      "visaNumber": "VN123456",
      "insuranceRelationship": "Bảo hiểm sức khỏe",
      "mobilePhone": "0901234567",
      "email": "nguyen@example.com",
      "age": "34",
      "education": {
        "code": "BACHELOR",
        "name": "Cử nhân"
      },
      "maritalStatus": {
        "code": "SINGLE",
        "name": "Độc thân"
      },
      "profession": {
        "code": "ENGINEER",
        "name": "Kỹ sư"
      },
      "majorCategory": {
        "code": "IT",
        "name": "Công nghệ thông tin"
      },
      "mediumCategory": {
        "code": "SOFTWARE",
        "name": "Phần mềm"
      },
      "minorCategory": {
        "code": "DEVELOPER",
        "name": "Lập trình viên"
      },
      "companyName": "Công ty ABC",
      "position": "Giám đốc",
      "jobDescription": "Quản lý dự án",
      "monthlyIncome": "10000000",
      "postalCode": "700000",
      "companyPhone": "02812345678",
      "branchNumber": "123"
    },
    "dependents": null
  }
]
                `)])],-1);function L(n,e,a,R,s,l){const d=f,p=y,h=C;return i(),E(h,{class:"flex flex-col"},{default:I(()=>[o("div",x,[B,(i(!0),c(P,null,O(s.dynamicOptions,(u,t)=>(i(),c("div",{key:t},[m(d,{modelValue:s.selectedOptions[t],"onUpdate:modelValue":g=>s.selectedOptions[t]=g,options:u,optionLabel:"name",placeholder:"MEMO :"+t},null,8,["modelValue","onUpdate:modelValue","options","placeholder"]),s.selectedOptions[t]?(i(),c("div",b,[o("pre",null,[o("code",null,A(s.selectedOptions[t]),1)])])):D("",!0)]))),128)),m(p,{label:"Clear Cache CMI",onClick:l.clearCMI},null,8,["onClick"]),M,S])]),_:1})}const U=N(V,[["render",L]]);export{U as default};
