import{s as i}from"./index-D78ukbc2.js";import{s as c}from"./index-BFrv1hlM.js";import{a as p}from"./axios-DsPaXkF5.js";import{_ as d,u,k as h,w as m,o as f,a as e,b as _,t as g}from"./index-AsvOEnX4.js";import"./index-CRRyXLhS.js";const x={data(){return{file:null,response:null,toast:null}},methods:{handleFileChange(o){this.file=o.target.files[0]},async uploadImage(){if(!this.file){this.toast.add({severity:"error",summary:"Error",detail:"Vui lòng chọn file!",life:3e3});return}const o=new FormData;o.append("file",this.file);try{const t=await p.post("http://localhost:8082/api/process-image",o,{headers:{"Content-Type":"multipart/form-data"}});this.response=t.data}catch(t){console.error("Error uploading the image:",t),this.response="Error uploading the image"}}},mounted(){this.toast=u()}},C={class:""},y=e("h2",null,"Upload Image",-1),k=e("br",null,null,-1),w=e("h2",null,"Result",-1),F={class:"card flex flex-col gap-4 w-full mt-8"};function B(o,t,I,T,a,s){const l=c,r=i;return f(),h(r,{class:"flex flex-col"},{default:m(()=>[e("div",C,[y,e("input",{type:"file",onChange:t[0]||(t[0]=(...n)=>s.handleFileChange&&s.handleFileChange(...n))},null,32),k,_(l,{label:"Upload",onClick:s.uploadImage},null,8,["onClick"]),w,e("div",F,[e("pre",null,[e("code",null,g(a.response),1)])])])]),_:1})}const N=d(x,[["render",B]]);export{N as default};