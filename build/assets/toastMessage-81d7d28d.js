import{s as a,c as s,j as r,aP as c,T as p,af as i,d}from"./index-89a3f7cf.js";import{M as u,j as l}from"./index.esm-fe20163c.js";import{ah as t}from"./react-toastify.esm-2901fbc8.js";const x=async()=>{try{const o=await d.topup();if(!o)throw new Error("Topup failed");if(o.budget<5)throw new Error("You set a budget of less than 5 sats");t(r.jsx(e,{message:`You set a budget of ${o.budget} sats`}),{icon:!1,position:"bottom-center",type:"success"})}catch(o){o instanceof Error&&t(r.jsx(e,{message:o.message}),{icon:!1,position:"bottom-center",type:"error"})}},e=({message:o})=>o===c?r.jsxs("div",{children:[o,r.jsx(f,{onClick:x,type:"button",children:r.jsx(p,{color:"white",kind:"medium",children:"Topup"})})]}):r.jsx("div",{children:o}),j=(o,n)=>{t(r.jsx(e,{message:o}),{icon:o===i?r.jsx(u,{color:s.primaryGreen}):r.jsx(l,{color:s.primaryRed}),position:"bottom-center",type:n||o===i?"success":"error"})},f=a.button`
  background: ${s.gray200};
  border: 1px solid ${s.white};
  border-radius: 2px;
  margin: 10px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${s.gray300};
  }
`;export{e as T,j as n};
