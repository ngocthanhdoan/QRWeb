import{a as g}from"./axios-DsPaXkF5.js";import{r}from"./index-CO8i33zr.js";const b={setup(){const i=r([]),d=r([]),c=r(""),m=async(e,l,a)=>{const t=e.target.files[0];if(t){const n=new FileReader;n.onload=async h=>{i.value[l][a]=h.target.result;const u=new FormData;u.append("file",t);try{const o=await g.post("/api/process-upload",u,{headers:{"Content-Type":"multipart/form-data"}});o.data.status==="success"?s(o.data.detections[0].message,l):o.data.status==="warning"&&s(o.data.new_data,l)}catch(o){console.error("Error uploading file:",o)}},n.readAsDataURL(t)}},p=(e,l)=>e===l?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',D=e=>{const{insured:l,buyer:a,dependents:t}=e;i.value=[{...l,type:"Insured",front:null,back:null},{...a,type:"Buyer",front:null,back:null},...t.map(n=>({...n,type:"Dependent",front:null,back:null}))],d.value=i.value.map(n=>({NationalID:{oldData:n.nationalID,newData:""},CitizenID:{oldData:n.citizenID,newData:""},DateOfBirth:{oldData:n.dateOfBirth,newData:""},FullName:{oldData:n.fullName,newData:""},Address:{oldData:n.address,newData:""},Gender:{oldData:n.gender.name,newData:""}}))},s=(e,l)=>{const a=i.value[l],t={NationalID:{oldData:a.nationalID,newData:e.id_identity_card||a.nationalID},CitizenID:{oldData:a.citizenID,newData:e.id_passport||a.citizenID},DateOfBirth:{oldData:a.dateOfBirth,newData:e.birth_date||a.dateOfBirth},FullName:{oldData:a.fullName,newData:e.fullname||a.fullName},Address:{oldData:a.address,newData:e.address||a.address},Gender:{oldData:a.gender.name,newData:e.gender||a.gender.name}};d.value[l]=t};return D({id:"64bbc76b-cc55-4afd-a333-c596b9e005d4",insured:{id:"052201011360",type_id:{code:"ID_CARD_1",name:"Căn cước công dân"},nationalID:"052201011360",citizenID:"215561550",fullName:"Đặng Trung Tiến",dateOfBirth:"03/11/2001",gender:{code:"MALE",name:"Nam"},address:"Xóm 1, Thôn Thượng Giang 1, Tây Giang, Tây Sơn, Bình Định",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"23",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:null,name:null},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:"FOR_MALE",name:"Vợ"}},buyer:{id:"049099007188",type_id:{code:"ID_CARD_1",name:"Căn cước công dân"},nationalID:"049099007188",citizenID:"245349072",fullName:"Đoàn Ngọc Thành",dateOfBirth:"28/01/1999",gender:{code:"MALE",name:"Nam"},address:"Thôn Quảng Bình, Nghĩa Thắng, Đắk R'Lấp, Đắk Nông",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:null,education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:null,name:null},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}},dependents:[{id:"",type_id:{code:null,name:null},nationalID:"12313123",citizenID:"12312312123",fullName:"123123123213",dateOfBirth:"",gender:{code:"FEMALE",name:"Nữ"},address:"123123",issuingPlace:"",nationality:{code:null,name:null},visaNumber:"",insuranceRelationship:null,mobilePhone:"",email:"",age:"",education:{code:null,name:null},maritalStatus:{code:null,name:null},profession:{code:null,name:null},majorCategory:{code:"IT",name:"Công nghệ thông tin"},mediumCategory:{code:null,name:null},minorCategory:{code:null,name:null},companyName:"",position:"",jobDescription:"",monthlyIncome:"",postalCode:"",companyPhone:"",branchNumber:"",relationShip:{code:null,name:null}}]}),{people:i,comparisonData:d,notes:c,handleUpload:m,compareFields:p}}};export{b as default};