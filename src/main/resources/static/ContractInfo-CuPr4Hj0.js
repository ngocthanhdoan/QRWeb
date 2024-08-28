import{s as F}from"./index-DGS8kRY6.js";import{s as B}from"./index-Bo_-cis9.js";import{_ as U,r as b,k as O,w as z,o as p,a as e,c as m,e as w,j as M,t as c,b as k,d as N,F as I,l as T,v as V}from"./index-BbFQF-f9.js";import{a as C}from"./axios-DsPaXkF5.js";import"./index-CCPlWM7P.js";import"./index-C_ZcRfKB.js";const A={setup(){const f=b([]),u=b([]),y=b(""),n=async(a,t,o)=>{const d=a.target.files[0];if(d){const l=new FileReader;l.onload=async i=>{f.value[t][o]=i.target.result;const v=new FormData;v.append("file",d);try{const _=await C.post("/api/process-upload",v,{headers:{"Content-Type":"multipart/form-data"}});_.data.status==="success"?D(_.data.detections[0].message,t):_.data.status==="warning"&&D(_.data.new_data,t)}catch(_){console.error("Error uploading file:",_)}},l.readAsDataURL(d)}},g=(a,t)=>a===t?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',x=a=>{const{insured:t,buyer:o,dependents:d}=a;f.value=[{...t,type:"Insured",front:null,back:null},{...o,type:"Buyer",front:null,back:null},...d.map(l=>({...l,type:"Dependent",front:null,back:null}))],u.value=f.value.map(l=>{var i;return{NationalID:{oldData:l.nationalID,newData:""},CitizenID:{oldData:l.citizenID,newData:""},DateOfBirth:{oldData:h(l.dateOfBirth),newData:""},FullName:{oldData:l.fullName,newData:""},Address:{oldData:l.address,newData:""},Gender:{oldData:((i=l.gender)==null?void 0:i.name)||"",newData:""}}})},h=a=>{if(!a||a.length!==8)return a;const t=a.slice(0,2),o=a.slice(2,4),d=a.slice(4);return`${t}/${o}/${d}`},D=(a,t)=>{var l,i;console.log("Updated Data:",a);const o=f.value[t],d={NationalID:{oldData:o.nationalID,newData:a.id_identity_card||o.nationalID},CitizenID:{oldData:o.citizenID,newData:a.id_passport||o.citizenID},DateOfBirth:{oldData:o.dateOfBirth,newData:h(a.birth_date)||o.dateOfBirth},FullName:{oldData:o.fullName,newData:a.fullname||o.fullName},Address:{oldData:o.address,newData:a.address||o.address},Gender:{oldData:((l=o.gender)==null?void 0:l.name)||"",newData:a.gender||((i=o.gender)==null?void 0:i.name)||""}};u.value[t]=d},r=async a=>{try{if(a===null||a==="")console.warn("Không tìm thấy mã thụ lý.");else{const t=await C.get(`/v4/api/fortest/${a}`);x(t.data)}}catch(t){console.error("Failed to load buyer:",t)}},s=sessionStorage.getItem("CMI_ID");return!s||s==""||r(s),{people:f,comparisonData:u,notes:y,handleUpload:n,compareFields:g}}},L={class:"flex flex-col gap-8"},j={class:"card flex-1 flex flex-col gap-4 p-4"},R={class:"font-semibold text-xl"},E={style:{color:"green"}},G={class:"flex flex-col gap-4"},H={class:"flex flex-col gap-2"},$=["for"],K=["id","onChange"],W={key:0,class:"mt-2"},q={class:"flex flex-col gap-2"},J=["for"],P=["id","onChange"],Q={key:0,class:"mt-2"},X={class:"card flex-1 flex flex-col gap-4 p-4"},Y={class:"font-semibold text-xl"},Z={class:"min-w-full"},S=e("thead",null,[e("tr",null,[e("th",{class:"border border-gray-400 px-4 py-2"},"Field"),e("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1),aa={class:"border border-gray-300 px-4 py-2"},ea={class:"border border-gray-300 px-4 py-2"},ta={class:"border border-gray-300 px-4 py-2"},oa=["innerHTML"],sa={class:"card flex flex-col gap-4 p-4"},la=e("div",{class:"font-semibold text-xl"},"Notes",-1),ra={class:"flex flex-col gap-2"},na=e("label",{for:"notes",class:"font-medium"},"Notes",-1);function da(f,u,y,n,g,x){const h=B,D=F;return p(),O(D,null,{default:z(()=>[e("div",L,[(p(!0),m(I,null,w(n.people,(r,s)=>(p(),m("div",{key:s,class:"flex flex-col md:flex-row gap-8 mb-8"},[e("div",j,[e("div",R,[M(c(s+1)+". Upload ID Cards for "+c(r.type)+" ",1),e("b",E,"["+c(r.fullName)+"]",1)]),e("div",G,[e("div",H,[e("label",{for:"front-upload-"+s,class:"font-medium"},"Upload Front Side",8,$),e("input",{id:"front-upload-"+s,type:"file",accept:"image/*",onChange:a=>n.handleUpload(a,s,"front"),class:"border rounded p-2"},null,40,K),r.front?(p(),m("div",W,[k(h,{src:r.front,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):N("",!0)]),e("div",q,[e("label",{for:"back-upload-"+s,class:"font-medium"},"Upload Back Side",8,J),e("input",{id:"back-upload-"+s,type:"file",accept:"image/*",onChange:a=>n.handleUpload(a,s,"back"),class:"border rounded p-2"},null,40,P),r.back?(p(),m("div",Q,[k(h,{src:r.back,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):N("",!0)])])]),e("div",X,[e("div",Y,"Compare Data for "+c(r.type)+" "+c(s+1),1),e("table",Z,[S,e("tbody",null,[(p(!0),m(I,null,w(n.comparisonData[s],(a,t)=>(p(),m("tr",{key:t},[e("td",aa,c(t),1),e("td",ea,c(a.oldData),1),e("td",ta,c(a.newData),1),e("td",{class:"border border-gray-300 px-4 py-2",innerHTML:n.compareFields(a.oldData,a.newData)},null,8,oa)]))),128))])])])]))),128)),e("div",sa,[la,e("div",ra,[na,T(e("textarea",{id:"notes",rows:"6","onUpdate:modelValue":u[0]||(u[0]=r=>n.notes=r),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[V,n.notes]])])])])]),_:1})}const ma=U(A,[["render",da]]);export{ma as default};