import{s as C}from"./index-Dg6Yshyy.js";import{s as D}from"./index-D5bmUgXn.js";import{s as N}from"./index-QtfUWLKY.js";import{s as T}from"./index-BMs1OFWt.js";import{s as k}from"./index-D9MqUSsw.js";import{s as A}from"./index-nknexRlH.js";import{s as E}from"./index-BJHnPeTt.js";import{f as M}from"./fetchOptionsMixin-BlPY6uDo.js";import{a as y}from"./axios-DsPaXkF5.js";import{_ as v,u as P,k as t,w as i,o as a,a as n,j as S,t as f,d as s,c as V,e as x,b as u,F as R,p as L,f as Y}from"./index-BHkq7fOf.js";import"./index-CbmDlL3p.js";import"./index-BHrataVB.js";import"./index-B2BOhcK8.js";import"./index-PFW5jR2N.js";import"./index-D61UxcPj.js";import"./index-C8PO4BWD.js";import"./index-Dv6VC8Fh.js";const G={mixins:[M],data(){return{dependents:[],messenger:null,toast:null,CMI_ID:null,selectedOptions:{},dynamicOptions:{}}},methods:{async fetchData(){try{const d=await y.get("/v4/api/data"),h=this.extractPrefixes(d.data);await Promise.all(h.map(_=>this.fetchAuto(_)))}catch(d){console.error("Error fetching data:",d)}},extractPrefixes(d){return[...new Set(d.map(h=>h.prefix))]},async fetchAuto(d){try{const h=await y.get(`/v4/api/data/prefix/${d}`);this.dynamicOptions[d]=h.data.map(_=>({code:_.key,name:_.value})),this.selectedOptions[d]=""}catch(h){console.error(`Error fetching options for prefix ${d}:`,h)}},async loaddependents(d){try{if(d==null)this.messenger='Không tìm thấy mã thụ lý, vui lòng quay về trang "Danh sách các đơn thụ lý" và chọn đơn xử lý!';else{const h=await y.get(`/v4/api/fortest/${d}/dependents`);h!=null?this.dependents=h.data:this.messenger="Chưa có dữ liệu người phụ thuộc"}}catch(h){console.error("Failed to load dependents:",h),this.toast.add({severity:"error",summary:"Error",detail:"An error occurred while fetching dependents data.",life:3e3})}},async submitForm(){try{console.log(this.dependents);const d=await y.put(`/v4/api/fortest/${this.CMI_ID}/dependents`,this.dependents);d.data?this.toast.add({severity:"success",summary:"Thành công",detail:d.data.message,life:3e3}):this.toast.add({severity:"error",summary:"Lỗi",detail:d.data.message,life:3e3})}catch(d){console.error("Error submitting form:",d),this.toast.add({severity:"error",summary:"Lỗi",detail:"Không thể gửi dữ liệu.",life:3e3})}}},mounted(){this.toast=P(),this.fetchData(),this.CMI_ID=sessionStorage.getItem("CMI_ID"),!this.CMI_ID||this.CMI_ID==""?this.messenger='Không tìm thấy mã thụ lý, vui lòng quay về trang "Danh sách các đơn thụ lý" và chọn đơn xử lý!':this.loaddependents(this.CMI_ID)}},r=d=>(L("data-v-0e3286f7"),d=d(),Y(),d),w={class:""},j={class:"font-semibold text-xl"},F=r(()=>n("label",{for:"CMI_ID"},"Mã thụ lý",-1)),B=r(()=>n("label",{for:"type_id"},"Loại giấy tờ",-1)),J=r(()=>n("label",{for:"nationalID"},"Số chứng minh",-1)),K=r(()=>n("label",{for:"nationalID"},"Số Căn cước",-1)),q=r(()=>n("label",{for:"fullName"},"Họ tên",-1)),z=r(()=>n("label",{for:"dob"},"Ngày tháng năm sinh",-1)),H=r(()=>n("label",{for:"gender"},"Giới tính",-1)),Q=r(()=>n("label",{for:"address"},"Địa chỉ",-1)),W=r(()=>n("label",{for:"issuingPlace"},"Nơi cấp",-1)),X=r(()=>n("label",{for:"nationality"},"Quốc tịch",-1)),Z=r(()=>n("label",{for:"visaNumber"},"Số thị thực nhập cảnh",-1)),$=r(()=>n("label",{for:"mobilePhone"},"Số điện thoại di động",-1)),oo=r(()=>n("label",{for:"email"},"Email",-1)),eo=r(()=>n("label",{for:"age"},"Tuổi",-1)),lo={for:"education"},ao=r(()=>n("label",{for:"maritalStatus"},"Tình trạng hôn nhân",-1)),to=r(()=>n("label",{for:"majorCategory"},"Phân loại lớn",-1)),io=r(()=>n("label",{for:"mediumCategory"},"Phân loại trung",-1)),so=r(()=>n("label",{for:"minorCategory"},"Phân loại nhỏ",-1)),no=r(()=>n("label",{for:"companyName"},"Tên công ty",-1)),mo=r(()=>n("label",{for:"position"},"Chức vụ",-1)),uo=r(()=>n("label",{for:"jobDescription"},"Nội dung nghề nghiệp",-1)),ro=r(()=>n("label",{for:"monthlyIncome"},"Thu nhập tháng",-1)),co=r(()=>n("label",{for:"postalCode"},"Mã vùng",-1)),ho=r(()=>n("label",{for:"companyPhone"},"Điện thoại công ty",-1)),po=r(()=>n("label",{for:"branchNumber"},"Số máy nhánh",-1));function _o(d,h,_,yo,l,g){const b=E,c=A,m=k,p=T,U=N,I=D,O=C;return a(),t(O,{class:"flex flex-col"},{default:i(()=>[n("div",w,[l.messenger!==null?(a(),t(b,{key:0,severity:"error"},{default:i(()=>[S(f(l.messenger),1)]),_:1})):s("",!0),(a(!0),V(R,null,x(l.dependents,o=>(a(),V("div",{class:"card flex flex-col gap-4",key:o.id},[n("div",j,"Người Phụ Thuộc - "+f(o.relationShip.name),1),l.CMI_ID?(a(),t(m,{key:0},{default:i(()=>[u(c,{id:"CMI_ID",modelValue:l.CMI_ID,"onUpdate:modelValue":h[0]||(h[0]=e=>l.CMI_ID=e),readonly:!0},null,8,["modelValue"]),F]),_:1})):s("",!0),l.dynamicOptions.DOCUMENT_TYPE&&l.dynamicOptions.DOCUMENT_TYPE.length?(a(),t(m,{key:1,readonly:""},{default:i(()=>[B,u(p,{modelValue:o.type_id,"onUpdate:modelValue":e=>o.type_id=e,options:l.dynamicOptions.DOCUMENT_TYPE,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),o?(a(),t(m,{key:2},{default:i(()=>[u(c,{id:"nationalID",modelValue:o.citizenID,"onUpdate:modelValue":e=>o.citizenID=e,readonly:!0},null,8,["modelValue","onUpdate:modelValue"]),J]),_:2},1024)):s("",!0),o?(a(),t(m,{key:3},{default:i(()=>[u(c,{id:"nationalID",modelValue:o.nationalID,"onUpdate:modelValue":e=>o.nationalID=e,readonly:!0},null,8,["modelValue","onUpdate:modelValue"]),K]),_:2},1024)):s("",!0),o?(a(),t(m,{key:4},{default:i(()=>[u(c,{id:"fullName",modelValue:o.fullName,"onUpdate:modelValue":e=>o.fullName=e},null,8,["modelValue","onUpdate:modelValue"]),q]),_:2},1024)):s("",!0),o?(a(),t(m,{key:5},{default:i(()=>[u(U,{id:"dob",modelValue:o.dateOfBirth,"onUpdate:modelValue":e=>o.dateOfBirth=e,dateFormat:"mm/dd/yy"},null,8,["modelValue","onUpdate:modelValue"]),z]),_:2},1024)):s("",!0),l.dynamicOptions.GENDER&&l.dynamicOptions.GENDER.length?(a(),t(m,{key:6},{default:i(()=>[H,u(p,{modelValue:o.gender,"onUpdate:modelValue":e=>o.gender=e,options:l.dynamicOptions.GENDER,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),o?(a(),t(m,{key:7},{default:i(()=>[u(c,{id:"address",modelValue:o.address,"onUpdate:modelValue":e=>o.address=e},null,8,["modelValue","onUpdate:modelValue"]),Q]),_:2},1024)):s("",!0),o?(a(),t(m,{key:8},{default:i(()=>[u(c,{id:"issuingPlace",modelValue:o.issuingPlace,"onUpdate:modelValue":e=>o.issuingPlace=e},null,8,["modelValue","onUpdate:modelValue"]),W]),_:2},1024)):s("",!0),l.dynamicOptions.NATIONALITY&&l.dynamicOptions.NATIONALITY.length?(a(),t(m,{key:9},{default:i(()=>[X,u(p,{modelValue:o.nationality,"onUpdate:modelValue":e=>o.nationality=e,options:l.dynamicOptions.NATIONALITY,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),o?(a(),t(m,{key:10},{default:i(()=>[u(c,{id:"visaNumber",modelValue:o.visaNumber,"onUpdate:modelValue":e=>o.visaNumber=e},null,8,["modelValue","onUpdate:modelValue"]),Z]),_:2},1024)):s("",!0),o?(a(),t(m,{key:11},{default:i(()=>[u(c,{id:"mobilePhone",modelValue:o.mobilePhone,"onUpdate:modelValue":e=>o.mobilePhone=e},null,8,["modelValue","onUpdate:modelValue"]),$]),_:2},1024)):s("",!0),o?(a(),t(m,{key:12},{default:i(()=>[u(c,{id:"email",modelValue:o.email,"onUpdate:modelValue":e=>o.email=e},null,8,["modelValue","onUpdate:modelValue"]),oo]),_:2},1024)):s("",!0),o?(a(),t(m,{key:13},{default:i(()=>[u(c,{id:"age",modelValue:o.age,"onUpdate:modelValue":e=>o.age=e},null,8,["modelValue","onUpdate:modelValue"]),eo]),_:2},1024)):s("",!0),l.dynamicOptions.EDUCATION&&l.dynamicOptions.EDUCATION.length?(a(),t(m,{key:14},{default:i(()=>[n("label",lo,"Học lực "+f(o.education),1),u(p,{modelValue:o.education,"onUpdate:modelValue":e=>o.education=e,options:l.dynamicOptions.EDUCATION,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),l.dynamicOptions.MARITAL_STATUS&&l.dynamicOptions.MARITAL_STATUS.length?(a(),t(m,{key:15},{default:i(()=>[ao,u(p,{modelValue:o.maritalStatus,"onUpdate:modelValue":e=>o.maritalStatus=e,options:l.dynamicOptions.MARITAL_STATUS,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),l.dynamicOptions.MAJOR_CATEGORY&&l.dynamicOptions.MAJOR_CATEGORY.length?(a(),t(m,{key:16},{default:i(()=>[to,u(p,{modelValue:o.majorCategory,"onUpdate:modelValue":e=>o.majorCategory=e,options:l.dynamicOptions.MAJOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),l.dynamicOptions.MEDIUM_CATEGORY&&l.dynamicOptions.MEDIUM_CATEGORY.length?(a(),t(m,{key:17},{default:i(()=>[io,u(p,{modelValue:o.mediumCategory,"onUpdate:modelValue":e=>o.mediumCategory=e,options:l.dynamicOptions.MEDIUM_CATEGORY,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),l.dynamicOptions.MINOR_CATEGORY&&l.dynamicOptions.MINOR_CATEGORY.length?(a(),t(m,{key:18},{default:i(()=>[so,u(p,{modelValue:o.minorCategory,"onUpdate:modelValue":e=>o.minorCategory=e,options:l.dynamicOptions.MINOR_CATEGORY,optionLabel:"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024)):s("",!0),o?(a(),t(m,{key:19},{default:i(()=>[u(c,{id:"companyName",modelValue:o.companyName,"onUpdate:modelValue":e=>o.companyName=e},null,8,["modelValue","onUpdate:modelValue"]),no]),_:2},1024)):s("",!0),o?(a(),t(m,{key:20},{default:i(()=>[u(c,{id:"position",modelValue:o.position,"onUpdate:modelValue":e=>o.position=e},null,8,["modelValue","onUpdate:modelValue"]),mo]),_:2},1024)):s("",!0),o?(a(),t(m,{key:21},{default:i(()=>[u(c,{id:"jobDescription",modelValue:o.jobDescription,"onUpdate:modelValue":e=>o.jobDescription=e},null,8,["modelValue","onUpdate:modelValue"]),uo]),_:2},1024)):s("",!0),o?(a(),t(m,{key:22},{default:i(()=>[u(c,{id:"monthlyIncome",modelValue:o.monthlyIncome,"onUpdate:modelValue":e=>o.monthlyIncome=e},null,8,["modelValue","onUpdate:modelValue"]),ro]),_:2},1024)):s("",!0),o?(a(),t(m,{key:23},{default:i(()=>[u(c,{id:"postalCode",modelValue:o.postalCode,"onUpdate:modelValue":e=>o.postalCode=e},null,8,["modelValue","onUpdate:modelValue"]),co]),_:2},1024)):s("",!0),o?(a(),t(m,{key:24},{default:i(()=>[u(c,{id:"companyPhone",modelValue:o.companyPhone,"onUpdate:modelValue":e=>o.companyPhone=e},null,8,["modelValue","onUpdate:modelValue"]),ho]),_:2},1024)):s("",!0),o?(a(),t(m,{key:25},{default:i(()=>[u(c,{id:"branchNumber",modelValue:o.branchNumber,"onUpdate:modelValue":e=>o.branchNumber=e},null,8,["modelValue","onUpdate:modelValue"]),po]),_:2},1024)):s("",!0)]))),128)),l.dependents.length>0?(a(),t(I,{key:1,label:"Submit",icon:"pi pi-check",onClick:g.submitForm},null,8,["onClick"])):s("",!0)])]),_:1})}const So=v(G,[["render",_o],["__scopeId","data-v-0e3286f7"]]);export{So as default};
