import{o as v,q,T as F,F as n,r as x,j as e,aU as J,b7 as U,C as K,y as $,b8 as Q,N as D,b2 as O,bj as X,bm as Z}from"./index-b32e1ec4.js";import{h as V,B as E,i as N,F as ee}from"./index-c0312354.js";import{B as te}from"./index-2267143a.js";import{T as re}from"./index-61b17838.js";import{p as G}from"./index-44e303ef.js";import{n as ne,A as W}from"./index-4fdabe4b.js";import{C as Y}from"./ClipLoader-c2d8f3f5.js";import{c as oe}from"./index-64f1c910.js";import"./index.esm-a82cf083.js";import"./InfoIcon-69b32930.js";import"./three.module-2ce81f73.js";import"./index-fea3ec52.js";import"./Stack-87b4f1b9.js";import"./useSlotProps-87521ceb.js";import"./Popover-5c26409a.js";import"./createSvgIcon-ca5f5744.js";import"./TextareaAutosize-d79a72cb.js";const M=s=>s.charAt(0).toUpperCase()+s.slice(1).replace(/_/g," "),k=s=>s?[...s].sort((l,m)=>Number(m.required)-Number(l.required)):[],H=s=>s?s.filter(l=>l.key!=="node_key"):[],se=({handleSelectType:s,skipToStep:l,nodeType:m,selectedValues:r})=>{const[f,w]=x.useState(!1),[h,C]=x.useState(),{watch:j,formState:{isValid:t}}=V();x.useEffect(()=>{(async()=>{w(!0);const o=await U(m),T=G(o),A=H(T);C(A),w(!1)})()},[m,j]);const i=c=>c.charAt(0).toUpperCase()+c.slice(1).replace(/_/g," "),p=(h?[...h].sort((c,o)=>c.required&&!o.required?-1:!c.required&&o.required?1:0):[]).filter(c=>!!(c.required&&!Object.values(r).includes(c.key))),S=()=>{s(""),l("sourceType")},b=!t||f||p.some(c=>{var o;return c.required&&!((o=j(c.key))!=null&&o.trim())});return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(ie,{children:"Required Properties"})})}),e.jsx(ae,{children:f?e.jsx(n,{style:{margin:"auto"},children:e.jsx(Y,{color:q.SECONDARY_BLUE})}):e.jsx(n,{className:"input__wrapper",children:p==null?void 0:p.map(({key:c,required:o})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(F,{children:i(c)}),e.jsx(re,{id:"item-name",maxLength:50,name:c,placeholder:o?"Required":"Optional",rules:{...o?{...J,pattern:{message:"No leading whitespace allowed",value:ne}}:{}}})]})}))})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:S,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:b,onClick:()=>l("createConfirmation"),size:"large",variant:"contained",children:"Next"})})]})]})},ie=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=v(n)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,ce=v(n)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${q.GRAY7};
    -webkit-text-fill-color: ${q.GRAY7};
  }
`,le=({nodeType:s,onclose:l,selectedNodeType:m})=>e.jsxs(n,{children:[e.jsx(n,{mb:20,children:e.jsx(R,{children:"Confirm Type Change"})}),e.jsx(n,{mb:25,children:e.jsxs(R,{children:["From: ",m]})}),e.jsx(n,{mb:25,children:e.jsxs(R,{children:["To: ",s]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:l,size:"large",variant:"contained",children:"Cancel"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",size:"large",type:"submit",variant:"contained",children:"Confirm"})})]})]}),R=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,pe=({handleSelectType:s,skipToStep:l,selectedNodeType:m,nodeType:r,selectedValues:f,setSelectedValues:w})=>{const[h,C]=x.useState(!1),[j,t]=x.useState(),[i,a]=x.useState(),{watch:p}=V();x.useEffect(()=>{const d=async(u,y)=>{C(!0);const g=await U(u),z=G(g),_=H(z);y(_),C(!1)};r&&d(r,t),m&&d(m,a)},[r,m,p]);const S=x.useMemo(()=>k(j),[j]),b=x.useMemo(()=>k(i),[i]),c=()=>{s(""),l("sourceType")};x.useEffect(()=>{if(j&&i){const d=i.reduce((u,y)=>{const g=j.find(z=>z.key===y.key);return u[y.key]=g?y.key:"none",u},{});w(d)}},[j,i,w]);const o=(d,u)=>{w(y=>({...y,[d]:u}))},T=()=>{const d=S.every(({key:u,required:y})=>!y||y&&f[u]&&f[u]!=="none");l(d?"createConfirmation":"requiredProperties")},A=x.useMemo(()=>b.map(({key:d})=>{const u=f[d]||"none",y=S.filter(g=>!Object.values(f).includes(g.key)||g.key===u).map(g=>({label:M(g.key),value:g.key}));return y.unshift({label:"None",value:"none"}),{key:d,autoCompleteOptions:y,selectedValue:u}}),[b,S,f]);return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(de,{children:"Map Properties"})})}),e.jsx(ue,{children:h?e.jsx(n,{style:{margin:"auto"},children:e.jsx(Y,{color:q.lightGray})}):e.jsxs(me,{children:[e.jsxs(xe,{children:[e.jsx(I,{children:M(m)}),b.map(({key:d})=>e.jsx(fe,{children:e.jsx(F,{children:M(d)})},d))]}),e.jsxs(he,{children:[e.jsx(I,{children:M(r)}),A.map(({key:d,autoCompleteOptions:u,selectedValue:y})=>e.jsx(n,{children:e.jsx(W,{isLoading:h,onSelect:g=>o(d,g?g.value:"none"),options:u,selectedValue:u.find(g=>g.value===y)})},d))]})]})}),e.jsxs(n,{direction:"row",children:[e.jsx(n,{grow:1,children:e.jsx(E,{color:"secondary",onClick:c,size:"large",variant:"contained",children:"Prev"})}),e.jsx(n,{grow:1,ml:20,children:e.jsx(E,{color:"secondary",disabled:h,onClick:T,size:"large",variant:"contained",children:"Next"})})]})]})},de=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ue=v(n)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`,me=v.div`
  display: flex;
  justify-content: space-between;
`,xe=v.div`
  flex: 1;
  margin-right: 16px;
`,fe=v.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`,he=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,I=v.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`,ye={label:"Not Selected",value:"Not Selected"},ge=[{label:"Corporation",value:"Corporation"},{label:"Event",value:"Event"},{label:"Image",value:"Image"},{label:"Organization",value:"Organization"},{label:"Person",value:"Person"},{label:"Place",value:"Place"},{label:"Project",value:"Project"},{label:"Software",value:"Software"},{label:"Topic",value:"Topic"}],je=({skipToStep:s,allowNextStep:l,onSelectType:m,selectedType:r})=>{const[f]=K(a=>[a.customSchemaFeatureFlag]),[w,h]=x.useState(null),[C,j]=x.useState(!1),t=$();x.useEffect(()=>{(async()=>{var p;if(f){j(!0);try{const S=await Q(),b=["about","schema",(p=t==null?void 0:t.node_type)==null?void 0:p.toLowerCase()],c=S.schemas.filter(o=>o.ref_id&&!b.includes(o.type.toLowerCase())&&!o.is_deleted).map(o=>({label:oe(o.type),value:o.type,action:()=>s("mapProperties")}));h(c)}catch(S){console.warn(S)}finally{j(!1)}}else h([...ge,ye])})()},[t==null?void 0:t.node_type,r,f,s]);const i=a=>{m((a==null?void 0:a.label)||"")};return e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(be,{children:"Select Type"})})}),e.jsx(n,{direction:"row",mb:20,children:e.jsx(W,{autoFocus:!0,isLoading:C,onSelect:i,options:w})}),e.jsx(n,{children:e.jsx(E,{color:"secondary",disabled:!l,onClick:()=>s("mapProperties"),size:"large",type:"button",variant:"contained",children:"Next"})})]})},be=v(F)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,we=async(s,l,m,r)=>{const f={},w=[];Object.entries(m).forEach(([t,i])=>{i!=="none"&&(f[i]=t),t!==i&&w.push(t)});const h={};Object.keys(r||{}).forEach(t=>{const i=r==null?void 0:r[t];Object.entries(f).forEach(([a,p])=>{p===t&&(h[f[a]]=i)})}),Object.keys(s).forEach(t=>{t!=="nodeType"&&(h[t]=s[t])});const C=r?r.node_type.charAt(0).toUpperCase()+r.node_type.slice(1):void 0,j={node_type:l,node_data:h,properties_to_be_deleted:w,type_to_be_deleted:C?[C]:[]};try{let t=r==null?void 0:r.ref_id;if((r==null?void 0:r.type)==="topic"){const{data:a}=await X({search:r==null?void 0:r.name}),p=a.find(S=>S.name===r.name);t=p==null?void 0:p.ref_id}const i=t||(r==null?void 0:r.ref_id);i&&await Z(i,j)}catch(t){console.error(t);let i=O;if(t.status===400)try{const a=await t.json();i=a.message||a.errorCode||(a==null?void 0:a.status)||O}catch{i=O}else t instanceof Error&&(i=t.message);throw new Error(i)}},ke=()=>{const[s,l]=x.useState("sourceType"),{close:m,visible:r}=D("changeNodeType"),{open:f}=D("editNodeName"),{open:w}=D("addType"),h=N({mode:"onChange"}),{watch:C,setValue:j,reset:t}=h,[i,a]=x.useState(""),[p,S]=x.useState({});x.useEffect(()=>()=>{l("sourceType"),t()},[r,t]);const b=$(),c=b!=null&&b.node_type?b.node_type.charAt(0).toUpperCase()+b.node_type.slice(1):"",o=C("nodeType");C("title");const T=()=>{m()},A=_=>{l(_)},d=h.handleSubmit(async _=>{try{await we(_,o,p,b),T()}catch(P){let L=O;if(T(),(P==null?void 0:P.status)===400){const B=await P.json();L=B.errorCode||(B==null?void 0:B.status)||O}else P instanceof Error&&(L=P.message);a(String(L))}}),u=_=>{_==="Create custom type"?w():j("nodeType",_)},y={sourceType:e.jsx(je,{allowNextStep:!!o,onSelectType:u,selectedType:o,skipToStep:A}),requiredProperties:e.jsx(se,{handleSelectType:u,nodeType:o,selectedValues:p,skipToStep:A}),createConfirmation:e.jsx(le,{nodeType:o,onclose:T,selectedNodeType:c}),mapProperties:e.jsx(pe,{handleSelectType:u,nodeType:o,selectedNodeType:c,selectedValues:p,setSelectedValues:S,skipToStep:A})},g=s==="mapProperties"?"regular":"small",z=()=>{m(),f()};return e.jsx(te,{id:"changeNodeType",kind:g,onClose:z,preventOutsideClose:!0,children:e.jsx(ee,{...h,children:e.jsx("form",{id:"add-node-form",onSubmit:d,children:y[s]})})})};export{ke as ChangeNodeTypeModal};
