import{s as N,T as B,j as e,F as a,h as C,r as s,b as L}from"./index-bf74149a.js";import{B as b}from"./index-70c12bfe.js";import{u as x}from"./index-a6c4785f.js";import{t as v,R as F,F as R,B as k,C as z,q as D,w as I}from"./react-toastify.esm-e3832827.js";import{u as M}from"./index-dc3ba428.js";import{T as _}from"./index-3e40747b.js";import{S as q}from"./Skeleton-a61be43f.js";import"./index.esm-18be29a9.js";import"./InfoIcon-52c678b1.js";const A=()=>e.jsxs(a,{children:[e.jsx(a,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(a,{align:"center",direction:"row",children:e.jsx(P,{children:"Edit node name"})})}),e.jsx(a,{mb:12,children:e.jsx(_,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...C}})})]}),P=N(B)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,V=()=>{const{close:i}=x("editNodeName"),[h]=M(r=>[r.data]),c=v({mode:"onChange"}),{watch:j,setValue:d,reset:l}=c,[m,p]=s.useState(!1),[f,u]=s.useState(!1),[t,y]=s.useState(),o=F();s.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{l()}),[t,d,l]),s.useEffect(()=>{(async()=>{if(o){u(!0);try{const{data:n}=await D({search:o==null?void 0:o.name}),w=n.find(E=>E.topic===o.name);y(w)}catch(n){console.error(n)}finally{u(!1)}}})()},[o]);const S=j("topic"),g=()=>{i()},T=async()=>{p(!0);try{await I((t==null?void 0:t.ref_id)||"",{topic:S.trim()}),g()}catch(r){console.warn(r)}finally{p(!1)}};return e.jsxs(R,{...c,children:[f?e.jsx(a,{my:24,children:e.jsx(q,{})}):e.jsx(A,{}),e.jsxs(k,{color:"secondary",disabled:m||f,onClick:T,size:"large",variant:"contained",children:["Save",m&&e.jsx(z,{color:L.BLUE_PRESS_STATE,size:10})]})]})},Y=()=>{const{close:i}=x("editNodeName");return e.jsx(b,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(V,{})})};export{Y as EditNodeNameModal};
