import{s as i}from"./index-DsJtP7yX.js";import{s as c}from"./index-C6bGSfya.js";import{a as p}from"./axios-DsPaXkF5.js";import{_ as d,u,k as m,w as f,o as h,a as e,b as _,t as g}from"./index-ASawYenC.js";import"./index-MCKgS8NC.js";const x={data(){return{file:null,response:null,toast:null}},methods:{handleFileChange(s){this.file=s.target.files[0]},async uploadImage(){if(!this.file){this.toast.add({severity:"error",summary:"Error",detail:"Vui lòng chọn file!",life:3e3});return}const s=new FormData;s.append("file",this.file);try{const t=await p.post("/api/process-image",s,{headers:{"Content-Type":"multipart/form-data"}});this.response=t.data}catch(t){console.error("Error uploading the image:",t),this.response="Error uploading the image"}}},mounted(){this.toast=u()}},C={class:""},y=e("h2",null,"Upload Image",-1),k=e("br",null,null,-1),w=e("h2",null,"Result",-1),F={class:"card flex flex-col gap-4 w-full mt-8"};function B(s,t,I,T,a,o){const l=c,r=i;return h(),m(r,{class:"flex flex-col"},{default:f(()=>[e("div",C,[y,e("input",{type:"file",onChange:t[0]||(t[0]=(...n)=>o.handleFileChange&&o.handleFileChange(...n))},null,32),k,_(l,{label:"Upload",onClick:o.uploadImage},null,8,["onClick"]),w,e("div",F,[e("pre",null,[e("code",null,g(a.response),1)])])])]),_:1})}const N=d(x,[["render",B]]);export{N as default};
