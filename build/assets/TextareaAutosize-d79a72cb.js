import{r as o,a as L,j as v,_ as b,h as I}from"./index-b32e1ec4.js";import{d as D,e as T}from"./index-c0312354.js";import{a as F,d as P}from"./useSlotProps-87521ceb.js";const U=["onChange","maxRows","minRows","style","value"];function w(r){return parseInt(r,10)||0}const V={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function M(r){return r==null||Object.keys(r).length===0||r.outerHeightStyle===0&&!r.overflow}const J=o.forwardRef(function(l,O){const{onChange:R,maxRows:x,minRows:h=1,style:S,value:y}=l,k=L(l,U),{current:A}=o.useRef(y!=null),p=o.useRef(null),N=D(O,p),H=o.useRef(null),c=o.useRef(0),[z,E]=o.useState({outerHeightStyle:0}),f=o.useCallback(()=>{const e=p.current,n=F(e).getComputedStyle(e);if(n.width==="0px")return{outerHeightStyle:0};const t=H.current;t.style.width=n.width,t.value=e.value||l.placeholder||"x",t.value.slice(-1)===`
`&&(t.value+=" ");const g=n.boxSizing,m=w(n.paddingBottom)+w(n.paddingTop),a=w(n.borderBottomWidth)+w(n.borderTopWidth),u=t.scrollHeight;t.value="x";const d=t.scrollHeight;let s=u;h&&(s=Math.max(Number(h)*d,s)),x&&(s=Math.min(Number(x)*d,s)),s=Math.max(s,d);const j=s+(g==="border-box"?m+a:0),B=Math.abs(s-u)<=1;return{outerHeightStyle:j,overflow:B}},[x,h,l.placeholder]),C=(e,i)=>{const{outerHeightStyle:n,overflow:t}=i;return c.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==t)?(c.current+=1,{overflow:t,outerHeightStyle:n}):e},W=o.useCallback(()=>{const e=f();M(e)||E(i=>C(i,e))},[f]);T(()=>{const e=()=>{const u=f();M(u)||I.flushSync(()=>{E(d=>C(d,u))})},i=()=>{c.current=0,e()};let n;const t=P(i),g=p.current,m=F(g);m.addEventListener("resize",t);let a;return typeof ResizeObserver<"u"&&(a=new ResizeObserver(i),a.observe(g)),()=>{t.clear(),cancelAnimationFrame(n),m.removeEventListener("resize",t),a&&a.disconnect()}},[f]),T(()=>{W()}),o.useEffect(()=>{c.current=0},[y]);const _=e=>{c.current=0,A||W(),R&&R(e)};return v.jsxs(o.Fragment,{children:[v.jsx("textarea",b({value:y,onChange:_,ref:N,rows:h,style:b({height:z.outerHeightStyle,overflow:z.overflow?"hidden":void 0},S)},k)),v.jsx("textarea",{"aria-hidden":!0,className:l.className,readOnly:!0,ref:H,tabIndex:-1,style:b({},V.shadow,S,{paddingTop:0,paddingBottom:0})})]})});export{J as T};
