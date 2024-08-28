import{s as N}from"./index-C6gWHiUe.js";import{s as C}from"./index-BGqJ1FTO.js";import{_ as I,r as m,k as F,w as B,o as c,a,c as u,e as x,t as d,b as v,d as w,F as k,l as U,v as O}from"./index-CB5qo_qE.js";import{a as z}from"./axios-DsPaXkF5.js";import"./index-CqeslYL8.js";import"./index-Cs2oiq8s.js";const M={setup(){const i=m([]),p=m([]),h=m(""),r=async(t,o,e)=>{const l=t.target.files[0];if(l){const s=new FileReader;s.onload=async n=>{i.value[o][e]=n.target.result;const y=new FormData;y.append("file",l);try{const f=await z.post("/api/process-upload",y,{headers:{"Content-Type":"multipart/form-data"}});f.data.status==="success"?_(f.data.detections[0].message,o):f.data.status==="warning"&&_(f.data.new_data,o)}catch(f){console.error("Error uploading file:",f)}},s.readAsDataURL(l)}},D=(t,o)=>t===o?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',b=t=>{const{insured:o,buyer:e,dependents:l}=t;i.value=[{...o,type:"Insured",front:null,back:null},{...e,type:"Buyer",front:null,back:null},...l.map(s=>({...s,type:"Dependent",front:null,back:null}))],p.value=i.value.map(s=>{var n;return{NationalID:{oldData:s.nationalID,newData:""},CitizenID:{oldData:s.citizenID,newData:""},DateOfBirth:{oldData:s.dateOfBirth,newData:""},FullName:{oldData:s.fullName,newData:""},Address:{oldData:s.address,newData:""},Gender:{oldData:((n=s.gender)==null?void 0:n.name)||"",newData:""}}})},_=(t,o)=>{var s,n;console.log("Updated Data:",t);const e=i.value[o],l={NationalID:{oldData:e.nationalID,newData:t.id_identity_card||e.nationalID},CitizenID:{oldData:e.citizenID,newData:t.id_passport||e.citizenID},DateOfBirth:{oldData:e.dateOfBirth,newData:t.birth_date||e.dateOfBirth},FullName:{oldData:e.fullName,newData:t.fullname||e.fullName},Address:{oldData:e.address,newData:t.address||e.address},Gender:{oldData:((s=e.gender)==null?void 0:s.name)||"",newData:t.gender||((n=e.gender)==null?void 0:n.name)||""}};p.value[o]=l};return b({}),{people:i,comparisonData:p,notes:h,handleUpload:r,compareFields:D}}},A={class:"flex flex-col gap-8"},L={class:"card flex-1 flex flex-col gap-4 p-4"},T={class:"font-semibold text-xl"},V={class:"font-semibold text-xl"},R={class:"flex flex-col gap-4"},S={class:"flex flex-col gap-2"},j=["for"],E=["id","onChange"],G={key:0,class:"mt-2"},H={class:"flex flex-col gap-2"},W=["for"],q=["id","onChange"],J={key:0,class:"mt-2"},K={class:"card flex-1 flex flex-col gap-4 p-4"},P={class:"font-semibold text-xl"},Q={class:"min-w-full mt-4 border-separate border-spacing-2 border border-gray-300"},X=a("thead",null,[a("tr",null,[a("th",{class:"border border-gray-400 px-4 py-2"},"Field"),a("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),a("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),a("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1),Y={class:"border border-gray-300 px-4 py-2"},Z={class:"border border-gray-300 px-4 py-2"},$={class:"border border-gray-300 px-4 py-2"},aa=["innerHTML"],ea={class:"card flex flex-col gap-4 p-4"},ta=a("div",{class:"font-semibold text-xl"},"Notes",-1),oa={class:"flex flex-col gap-2"},sa=a("label",{for:"notes",class:"font-medium"},"Notes",-1);function la(i,p,h,r,D,b){const _=C,g=N;return c(),F(g,null,{default:B(()=>[a("div",A,[(c(!0),u(k,null,x(r.people,(t,o)=>(c(),u("div",{key:o,class:"flex flex-col md:flex-row gap-8 mb-8"},[a("div",L,[a("div",T,d(o+1)+". Upload ID Cards for "+d(t.type),1),a("div",V,d(t.fullName),1),a("div",R,[a("div",S,[a("label",{for:"front-upload-"+o,class:"font-medium"},"Upload Front Side",8,j),a("input",{id:"front-upload-"+o,type:"file",accept:"image/*",onChange:e=>r.handleUpload(e,o,"front"),class:"border rounded p-2"},null,40,E),t.front?(c(),u("div",G,[v(_,{src:t.front,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):w("",!0)]),a("div",H,[a("label",{for:"back-upload-"+o,class:"font-medium"},"Upload Back Side",8,W),a("input",{id:"back-upload-"+o,type:"file",accept:"image/*",onChange:e=>r.handleUpload(e,o,"back"),class:"border rounded p-2"},null,40,q),t.back?(c(),u("div",J,[v(_,{src:t.back,width:"250",class:"w-full h-auto object-cover border rounded"},null,8,["src"])])):w("",!0)])])]),a("div",K,[a("div",P,"Compare Data for "+d(t.type)+" "+d(o+1),1),a("table",Q,[X,a("tbody",null,[(c(!0),u(k,null,x(r.comparisonData[o],(e,l)=>(c(),u("tr",{key:l},[a("td",Y,d(l),1),a("td",Z,d(e.oldData),1),a("td",$,d(e.newData),1),a("td",{class:"border border-gray-300 px-4 py-2",innerHTML:r.compareFields(e.oldData,e.newData)},null,8,aa)]))),128))])])])]))),128)),a("div",ea,[ta,a("div",oa,[sa,U(a("textarea",{id:"notes",rows:"6","onUpdate:modelValue":p[0]||(p[0]=t=>r.notes=t),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[O,r.notes]])])])])]),_:1})}const fa=I(M,[["render",la]]);export{fa as default};
