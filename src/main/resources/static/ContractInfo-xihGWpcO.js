import{a as g}from"./axios-DsPaXkF5.js";import{r}from"./index-DrVIFePG.js";const N={setup(){const i=r([]),d=r([]),c=r(""),m=async(a,n,l)=>{const t=a.target.files[0];if(t){const e=new FileReader;e.onload=async h=>{i.value[n][l]=h.target.result;const u=new FormData;u.append("file",t);try{const o=await g.post("/api/process-upload",u,{headers:{"Content-Type":"multipart/form-data"}});o.data.status==="success"?s(o.data.detections[0].message,n):o.data.status==="warning"&&s(o.data.new_data,n)}catch(o){console.error("Error uploading file:",o)}},e.readAsDataURL(t)}},p=(a,n)=>a===n?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',D=a=>{const{insured:n,buyer:l,dependents:t}=a;i.value=[{...n,type:"Insured",front:null,back:null},{...l,type:"Buyer",front:null,back:null},...t.map(e=>({...e,type:"Dependent",front:null,back:null}))],d.value=i.value.map(e=>({NationalID:{oldData:e.nationalID,newData:""},CitizenID:{oldData:e.citizenID,newData:""},DateOfBirth:{oldData:e.dateOfBirth,newData:""},FullName:{oldData:e.fullName,newData:""},Address:{oldData:e.address,newData:""},Gender:{oldData:e.gender.name,newData:""}}))},s=(a,n)=>{const l=i.value[n],t={NationalID:{oldData:l.nationalID,newData:a.id_identity_card||""},CitizenID:{oldData:l.citizenID,newData:a.id_passport||""},DateOfBirth:{oldData:l.dateOfBirth,newData:a.birth_date||""},FullName:{oldData:l.fullName,newData:a.fullname||""},Address:{oldData:l.address,newData:a.address||""},Gender:{oldData:l.gender.name,newData:a.gender||""}};d.value[n]=t};return D({id:"64bbc76b-cc55-4afd-a333-c596b9e005d4",insured:{id:"052201011360",type_id:{code:"ID_CARD_1",name:"Căn cước công dân"},nationalID:"052201011360",citizenID:"215561550",fullName:"Đặng Trung Tiến",dateOfBirth:"03/11/2001",gender:{code:"MALE",name:"Nam"},address:"Xóm 1, Thôn Thượng Giang 1, Tây Giang, Tây Sơn, Bình Định",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"23",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:null,name:null},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:"FOR_MALE",name:"Vợ"}},buyer:{id:"049099007188",type_id:{code:"ID_CARD_1",name:"Căn cước công dân"},nationalID:"049099007188",citizenID:"245349072",fullName:"Đoàn Ngọc Thành",dateOfBirth:"28/01/1999",gender:{code:"MALE",name:"Nam"},address:"Thôn Quảng Bình, Nghĩa Thắng, Đắk R'Lấp, Đắk Nông",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:null,education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:null,name:null},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}},dependents:[{id:"",type_id:{code:null,name:null},nationalID:"12313123",citizenID:"12312312123",fullName:"123123123213",dateOfBirth:"",gender:{code:"FEMALE",name:"Nữ"},address:"123123",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:"IT",name:"Công nghệ thông tin"},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}}]}),{people:i,comparisonData:d,notes:c,handleUpload:m,compareFields:p}}};export{N as default};