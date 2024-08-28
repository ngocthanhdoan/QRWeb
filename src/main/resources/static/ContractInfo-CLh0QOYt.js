import{s as T}from"./index-DI7IjKez.js";import{_ as V,u as z,r as w,k as L,w as j,o as y,a as e,c as g,e as E,t as f,d as M,F as A,l as G,v as H}from"./index-fc9DEobz.js";import{a as x}from"./axios-DsPaXkF5.js";const R={setup(){const n=z(),o=w([]),p=w([]),l=w([]),k=w(""),I=async(t,a,s)=>{const u=t.target.files[0];if(u){const r=new FileReader;r.onload=async m=>{o.value[a][s]=m.target.result;const v=new FormData;v.append("file",u);try{if((await x.post("/api/check-font",v,{headers:{"Content-Type":"multipart/form-data"}})).data.isFont)if(s=="front"){const h=await x.post("/api/process-upload",v,{headers:{"Content-Type":"multipart/form-data"}});h.data.status==="success"?(U(h.data.detections[0].message,a),n.add({severity:"success",summary:"Upload Success",detail:"File uploaded and processed successfully!",life:3e3})):h.data.status==="warning"?(U(h.data.new_data,a),n.add({severity:"warn",summary:"Upload Warning",detail:"File uploaded with warnings. Please check!",life:3e3})):(_(a,s),n.add({severity:"error",summary:"Upload Error",detail:"Vui lòng chọn hình ảnh rõ ràng hơn để đọc chính xác thông tin.!",life:5e3}))}else _(a,s),n.add({severity:"error",summary:"Upload Error",detail:"Hình ảnh mặt sau không phù hợp, vui lòng chọn lại!",life:5e3});else s=="front"&&(_(a,s),n.add({severity:"error",summary:"Upload Error",detail:"Vui lòng chọn hình ảnh rõ ràng hơn để đọc chính xác thông tin.!",life:5e3}))}catch(b){console.error("Error uploading file:",b),_(a,s),n.add({severity:"error",summary:"Upload Failed",detail:"Failed to upload the file. Please try again.",life:3e3})}},r.readAsDataURL(u)}},_=(t,a)=>{o.value[t][a]=null;const s=document.getElementById(`${a}-upload-${t}`);s&&(s.value="")},d=(t,a)=>t===a?'<span class="text-green-500">Match</span>':'<span class="text-red-500">Not Match</span>',c=()=>{let t=!0;for(let a=0;a<o.value.length;a++){const s=o.value[a];(!s.front||!s.back)&&(t=!1,n.add({severity:"warn",summary:"Incomplete Uploads",detail:`Please upload both front and back images for ${s.type} ${a+1}.`,life:5e3}))}t&&n.add({severity:"success",summary:"All Good",detail:"All images are uploaded. You can now proceed.",life:3e3})},i=t=>{const{insured:a,buyer:s,dependents:u}=t;p.value=[{...a,type:"Insured"},{...s,type:"Buyer"},...u.map(r=>({...r,type:"Dependent"}))],o.value=[{...a,type:"Insured",front:null,back:null},{...s,type:"Buyer",front:null,back:null},...u.map(r=>({...r,type:"Dependent",front:null,back:null}))],l.value=o.value.map(r=>{var m;return{NationalID:{oldData:r.nationalID,newData:""},CitizenID:{oldData:r.citizenID,newData:""},DateOfBirth:{oldData:D(r.dateOfBirth),newData:""},FullName:{oldData:r.fullName,newData:""},Address:{oldData:r.address,newData:""},Gender:{oldData:((m=r.gender)==null?void 0:m.name)||"",newData:""}}})},D=t=>{if(!t||t.length!==8)return t;const a=t.slice(0,2),s=t.slice(2,4),u=t.slice(4);return`${a}/${s}/${u}`},U=(t,a)=>{var r,m,v,b,h,C,N,B;const s=o.value[a],u={NationalID:{oldData:((r=p.value[a])==null?void 0:r.nationalID)||"",newData:t.id_identity_card||s.nationalID},CitizenID:{oldData:((m=p.value[a])==null?void 0:m.citizenID)||"",newData:t.id_passport||s.citizenID},DateOfBirth:{oldData:((v=p.value[a])==null?void 0:v.dateOfBirth)||"",newData:D(t.birth_date)||s.dateOfBirth},FullName:{oldData:((b=p.value[a])==null?void 0:b.fullName)||"",newData:t.fullname||s.fullName},Address:{oldData:((h=p.value[a])==null?void 0:h.address)||"",newData:t.address||s.address},Gender:{oldData:((N=(C=p.value[a])==null?void 0:C.gender)==null?void 0:N.name)||"",newData:t.gender||((B=s.gender)==null?void 0:B.name)||""}};l.value[a]=u},O=async()=>{const t=o.value.map(a=>({id:a.id,...l.value[o.value.indexOf(a)].newData}));try{(await x.post("/api/update-data",{updatedData:t,notes:k.value})).data.status==="success"?n.add({severity:"success",summary:"Update Success",detail:"Data updated successfully!",life:3e3}):n.add({severity:"warn",summary:"Update Warning",detail:"Data update with warnings. Please check!",life:3e3})}catch(a){console.error("Error updating data:",a),n.add({severity:"error",summary:"Update Failed",detail:"Failed to update data. Please try again.",life:3e3})}},P=async t=>{try{if(!t)n.add({severity:"warn",summary:"Missing ID",detail:"CMI_ID is missing. Please provide a valid ID.",life:3e3});else{const a=await x.get(`/v4/api/fortest/${t}`);i(a.data)}}catch(a){console.error("Failed to load buyer:",a),n.add({severity:"error",summary:"Data Load Error",detail:"Failed to load data. Please try again later.",life:3e3})}},F=sessionStorage.getItem("CMI_ID");return F&&P(F),{people:o,comparisonData:l,notes:k,handleUpload:I,compareFields:d,validateUploads:c,sendUpdatedData:O}}},W={class:"flex flex-col gap-8"},S={class:"card flex-1 flex flex-col gap-4 p-4"},Y={class:"font-semibold text-xl"},$={class:"font-semibold text-xl"},q={class:"grid grid-cols-2 gap-4"},J={class:"flex flex-col gap-2"},K=["for"],Q=["id","onChange"],X={class:"flex flex-col gap-2"},Z=["for"],aa=["id","onChange"],ea={class:"flex items-center justify-center"},ta={key:0,class:"w-full h-auto"},sa=["src"],oa={class:"flex items-center justify-center"},la={key:0,class:"w-full h-auto"},ra=["src"],da={class:"card flex-1 flex flex-col gap-4 p-4"},na={class:"font-semibold text-xl"},ca={class:"min-w-full mt-4 border-separate border-spacing-2 border border-gray-300"},ia=e("thead",null,[e("tr",null,[e("th",{class:"border border-gray-400 px-4 py-2"},"Field"),e("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),e("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1),ua={class:"border border-gray-300 px-4 py-2"},pa={class:"border border-gray-300 px-4 py-2"},fa={class:"border border-gray-300 px-4 py-2"},ma=["innerHTML"],ha={class:"card flex flex-col gap-4 p-4"},ya=e("div",{class:"font-semibold text-xl"},"Notes",-1),_a={class:"flex flex-col gap-2"},va=e("label",{for:"notes",class:"font-medium"},"Notes",-1),ga={class:"card flex flex-col gap-4 p-4"};function Da(n,o,p,l,k,I){const _=T;return y(),L(_,null,{default:j(()=>[e("div",W,[(y(!0),g(A,null,E(l.people,(d,c)=>(y(),g("div",{key:c,class:"flex flex-col md:flex-row gap-8 mb-8"},[e("div",S,[e("div",Y,f(c+1)+". Upload ID Cards for "+f(d.type),1),e("div",$,f(d.fullName),1),e("div",q,[e("div",J,[e("label",{for:"front-upload-"+c,class:"font-medium"},"Upload Front Side",8,K),e("input",{id:"front-upload-"+c,type:"file",accept:"image/*",onChange:i=>l.handleUpload(i,c,"front"),class:"border rounded p-2"},null,40,Q)]),e("div",X,[e("label",{for:"back-upload-"+c,class:"font-medium"},"Upload Back Side",8,Z),e("input",{id:"back-upload-"+c,type:"file",accept:"image/*",onChange:i=>l.handleUpload(i,c,"back"),class:"border rounded p-2"},null,40,aa)]),e("div",ea,[d.front?(y(),g("div",ta,[e("img",{src:d.front,width:"250",class:"object-cover border rounded"},null,8,sa)])):M("",!0)]),e("div",oa,[d.back?(y(),g("div",la,[e("img",{src:d.back,width:"250",class:"object-cover border rounded"},null,8,ra)])):M("",!0)])])]),e("div",da,[e("div",na,"Compare Data for "+f(d.type)+" "+f(c+1),1),e("table",ca,[ia,e("tbody",null,[(y(!0),g(A,null,E(l.comparisonData[c],(i,D)=>(y(),g("tr",{key:D},[e("td",ua,f(D),1),e("td",pa,f(i.oldData),1),e("td",fa,f(i.newData),1),e("td",{class:"border border-gray-300 px-4 py-2",innerHTML:l.compareFields(i.oldData,i.newData)},null,8,ma)]))),128))])])])]))),128)),e("div",ha,[ya,e("div",_a,[va,G(e("textarea",{id:"notes",rows:"6","onUpdate:modelValue":o[0]||(o[0]=d=>l.notes=d),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[H,l.notes]])])]),e("div",ga,[e("button",{onClick:o[1]||(o[1]=(...d)=>l.validateUploads&&l.validateUploads(...d)),class:"btn btn-primary"},"Cập nhật"),e("button",{onClick:o[2]||(o[2]=(...d)=>l.sendUpdatedData&&l.sendUpdatedData(...d)),class:"btn btn-success"},"Gửi Cập Nhật")])])]),_:1})}const ka=V(R,[["render",Da]]);export{ka as default};