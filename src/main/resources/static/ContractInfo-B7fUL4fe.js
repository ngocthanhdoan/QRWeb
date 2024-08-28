import{s as g}from"./index-Ca39QGAR.js";import{_ as y,k as D,w as v,o as c,a as o,c as n,e as h,t as i,d as b,F as m,l as w,v as k,p as C,f as U}from"./index-IoMVe8y6.js";const F={data(){return{uploads:[{front:null,back:null}],comparisonData:[{Name:{oldData:"",newData:""},Address:{oldData:"",newData:""}}],notes:""}},methods:{handleUpload(a,s,_){const p=a.target.files[0];if(p){const d=new FileReader;d.onload=r=>{this.uploads[s][_]=r.target.result},d.readAsDataURL(p)}},addUpload(){this.uploads.push({front:null,back:null}),this.comparisonData.push({Name:{oldData:"",newData:""},Address:{oldData:"",newData:""}})},compareFields(a,s){return a===s?"Match":"Different"}}},f=a=>(C("data-v-acff7c7f"),a=a(),U(),a),N={class:"flex flex-col gap-8"},S={class:"card flex-1 flex flex-col gap-4 p-4"},B={class:"font-semibold text-xl"},I={class:"flex flex-col gap-4"},A={class:"flex flex-col gap-2"},P=["for"],V=["id","onChange"],j={key:0,class:"mt-2"},L=["src"],M={class:"flex flex-col gap-2"},R=["for"],E=["id","onChange"],O={key:0,class:"mt-2"},T=["src"],q={class:"card flex-1 flex flex-col gap-4 p-4"},z={class:"font-semibold text-xl"},G={class:"min-w-full mt-4 border-separate border-spacing-2 border border-gray-300"},H=f(()=>o("thead",null,[o("tr",null,[o("th",{class:"border border-gray-400 px-4 py-2"},"Field"),o("th",{class:"border border-gray-400 px-4 py-2"},"Old Data"),o("th",{class:"border border-gray-400 px-4 py-2"},"New Data"),o("th",{class:"border border-gray-400 px-4 py-2"},"Comparison")])],-1)),J={class:"border border-gray-300 px-4 py-2"},K={class:"border border-gray-300 px-4 py-2"},Q={class:"border border-gray-300 px-4 py-2"},W={class:"border border-gray-300 px-4 py-2"},X={class:"card flex flex-col gap-4 p-4"},Y=f(()=>o("div",{class:"font-semibold text-xl"},"Notes",-1)),Z={class:"flex flex-col gap-2"},$=f(()=>o("label",{for:"notes",class:"font-medium"},"Notes",-1));function oo(a,s,_,p,d,r){const x=g;return c(),D(x,null,{default:v(()=>[o("div",N,[(c(!0),n(m,null,h(d.uploads,(t,e)=>(c(),n("div",{key:e,class:"flex flex-col md:flex-row gap-8 mb-8"},[o("div",S,[o("div",B,"Upload ID Cards for Person "+i(e+1),1),o("div",I,[o("div",A,[o("label",{for:"front-upload-"+e,class:"font-medium"},"Upload Front Side",8,P),o("input",{id:"front-upload-"+e,type:"file",accept:"image/*",onChange:l=>r.handleUpload(l,e,"front"),class:"border rounded p-2"},null,40,V),t.front?(c(),n("div",j,[o("img",{src:t.front,alt:"Front Side",class:"w-full h-auto object-cover border rounded"},null,8,L)])):b("",!0)]),o("div",M,[o("label",{for:"back-upload-"+e,class:"font-medium"},"Upload Back Side",8,R),o("input",{id:"back-upload-"+e,type:"file",accept:"image/*",onChange:l=>r.handleUpload(l,e,"back"),class:"border rounded p-2"},null,40,E),t.back?(c(),n("div",O,[o("img",{src:t.back,alt:"Back Side",class:"w-full h-auto object-cover border rounded"},null,8,T)])):b("",!0)])])]),o("div",q,[o("div",z,"Compare Data for Person "+i(e+1),1),o("table",G,[H,o("tbody",null,[(c(!0),n(m,null,h(d.comparisonData[e],(l,u)=>(c(),n("tr",{key:u},[o("td",J,i(u),1),o("td",K,i(l.oldData),1),o("td",Q,i(l.newData),1),o("td",W,i(r.compareFields(l.oldData,l.newData)),1)]))),128))])])])]))),128)),o("button",{onClick:s[0]||(s[0]=(...t)=>r.addUpload&&r.addUpload(...t)),class:"btn btn-primary"},"Add New Person"),o("div",X,[Y,o("div",Z,[$,w(o("textarea",{id:"notes",rows:"6","onUpdate:modelValue":s[1]||(s[1]=t=>d.notes=t),placeholder:"Add any additional notes here",class:"border rounded p-2"},null,512),[[k,d.notes]])])])])]),_:1})}const so=y(F,[["render",oo],["__scopeId","data-v-acff7c7f"]]);export{so as default};
