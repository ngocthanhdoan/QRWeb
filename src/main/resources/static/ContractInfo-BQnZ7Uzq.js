import{s as F}from"./index-DK3lUNOA.js";import{s as B}from"./index-C9M_Tfvv.js";import{_ as U,r as D,k as O,w as z,o as p,a as e,c as _,e as w,t as c,b as k,d as I,F as N,l as M,v as A}from"./index-DxpSriz-.js";import{a as C}from"./axios-DsPaXkF5.js";import"./index-CRC1Pxqc.js";import"./index-Ch2Mhx4X.js";const L={setup(){const f=D([]),u=D([]),y=D(""),d=async(a,t,o)=>{const n=a.target.files[0];if(n){const l=new FileReader;l.onload=async i=>{f.value[t][o]=i.target.result;const v=new FormData;v.append("file",n);try{const m=await C.post("/api/process-upload",v,{headers:{"Content-Type":"multipart/form-data"}});m.data.status==="success"?b(m.data.detections[0].message,t):m.data.status==="warning"&&b(m.data.new_data,t)}catch(m){console.error("Error uploading file:",m)}},l.readAsDataURL(n)}},g=(a,t)=>a===t?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',x=a=>{const{insured:t,buyer:o,dependents:n}=a;f.value=[{...t,type:"Insured",front:null,back:null},{...o,type:"Buyer",front:null,back:null},...n.map(l=>({...l,type:"Dependent",front:null,back:null}))],u.value=f.value.map(l=>{var i;return{NationalID:{oldData:l.nationalID,newData:""},CitizenID:{oldData:l.citizenID,newData:""},DateOfBirth:{oldData:h(l.dateOfBirth),newData:""},FullName:{oldData:l.fullName,newData:""},Address:{oldData:l.address,newData:""},Gender:{oldData:((i=l.gender)==null?void 0:i.name)||"",newData:""}}})},h=a=>{if(!a||a.length!==8)return a;const t=a.slice(0,2),o=a.slice(2,4),n=a.slice(4);return`${t}/${o}/${n}`},b=(a,t)=>{var l,i;console.log("Updated Data:",a);const o=f.value[t],n={NationalID:{oldData:o.nationalID,newData:a.id_identity_card||o.nationalID},CitizenID:{oldData:o.citizenID,newData:a.id_passport||o.citizenID},DateOfBirth:{oldData:o.dateOfBirth,newData:h(a.birth_date)||o.dateOfBirth},FullName:{oldData:o.fullName,newData:a.fullname||o.fullName},Address:{oldData:o.address,newData:a.address||o.address},Gender:{oldData:((l=o.gender)==null?void 0:l.name)||"",newData:a.gender||((i=o.gender)==null?void 0:i.name)||""}};u.value[t]=n},r=async a=>{try{if(a===null||a==="")console.warn("Không tìm thấy mã thụ lý.");else{const t=await C.get(`/v4/api/fortest/${a}`);x(t.data)}}catch(t){console.error("Failed to load buyer:",t)}},s=sessionStorage.getItem("CMI_ID");return!s||s==""||r(s),{people:f,comparisonData:u,notes:y,handleUpload:d,compareFields:g}}},T={class:"flex flex-col gap-8"},V={class:"card flex-1 flex flex-col gap-4 p-4"},R={class:"font-semibold text-xl"},j={class:"font-semibold text-xl"},E={class:"flex flex-col gap-4"},G={class:"flex flex-col gap-2"},H=["for"],$=["id","onChange"],K={key:0,class:"mt-2"},W={class:"flex flex-col gap-2"},q=["for"],J=["id","onChange"],P={key:0,class:"mt-2"},Q={class:"card flex-1 flex flex-col gap-4 p-4"},X={class:"font-semibold text-xl"},Y={class:"min-w-full mt-4 border-separate border-spacing-2 border border-gray-300"},Z=e("thead",null,[e("tr",null,[e("th",{class:"border border-gray-400 px-4 py-2"},"Field"),e("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1),S={class:"border border-gray-300 px-4 py-2"},aa={class:"border border-gray-300 px-4 py-2"},ea={class:"border border-gray-300 px-4 py-2"},ta=["innerHTML"],oa={class:"card flex flex-col gap-4 p-4"},sa=e("div",{class:"font-semibold text-xl"},"Notes",-1),la={class:"flex flex-col gap-2"},ra=e("label",{for:"notes",class:"font-medium"},"Notes",-1);function da(f,u,y,d,g,x){const h=B,b=F;return p(),O(b,null,{default:z(()=>[e("div",T,[(p(!0),_(N,null,w(d.people,(r,s)=>(p(),_("div",{key:s,class:"flex flex-col md:flex-row gap-8 mb-8"},[e("div",V,[e("div",R,c(s+1)+". Upload ID Cards for "+c(r.type),1),e("div",j,c(r.fullName),1),e("div",E,[e("div",G,[e("label",{for:"front-upload-"+s,class:"font-medium"},"Upload Front Side",8,H),e("input",{id:"front-upload-"+s,type:"file",accept:"image/*",onChange:a=>d.handleUpload(a,s,"front"),class:"border rounded p-2"},null,40,$),r.front?(p(),_("div",K,[k(h,{src:r.front,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):I("",!0)]),e("div",W,[e("label",{for:"back-upload-"+s,class:"font-medium"},"Upload Back Side",8,q),e("input",{id:"back-upload-"+s,type:"file",accept:"image/*",onChange:a=>d.handleUpload(a,s,"back"),class:"border rounded p-2"},null,40,J),r.back?(p(),_("div",P,[k(h,{src:r.back,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):I("",!0)])])]),e("div",Q,[e("div",X,"Compare Data for "+c(r.type)+" "+c(s+1),1),e("table",Y,[Z,e("tbody",null,[(p(!0),_(N,null,w(d.comparisonData[s],(a,t)=>(p(),_("tr",{key:t},[e("td",S,c(t),1),e("td",aa,c(a.oldData),1),e("td",ea,c(a.newData),1),e("td",{class:"border border-gray-300 px-4 py-2",innerHTML:d.compareFields(a.oldData,a.newData)},null,8,ta)]))),128))])])])]))),128)),e("div",oa,[sa,e("div",la,[ra,M(e("textarea",{id:"notes",rows:"6","onUpdate:modelValue":u[0]||(u[0]=r=>d.notes=r),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[A,d.notes]])])])])]),_:1})}const ma=U(L,[["render",da]]);export{ma as default};