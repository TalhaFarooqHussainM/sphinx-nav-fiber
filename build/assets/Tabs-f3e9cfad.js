import{g as ft,d as pt,s as O,i as Pt,a as b,r as c,u as ht,b as rt,c as L,j as v,h as vt,ai as Zt,ao as Lt,am as Nt,al as $t,av as lt,f as ut,aj as te}from"./index-0dcb7501.js";import{w as kt}from"./index-ddd5f17c.js";import{c as Ft}from"./createSvgIcon-7d7f89cc.js";let U;function At(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function ee(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(At()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}function oe(t){return pt("MuiTab",t)}const le=ft("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),A=le,re=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ne=t=>{const{classes:e,textColor:r,fullWidth:a,wrapped:n,icon:d,label:h,selected:p,disabled:u}=t,m={root:["root",d&&h&&"labelIcon",`textColor${Pt(r)}`,a&&"fullWidth",n&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return vt(m,oe,e)},se=O(kt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Pt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${A.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${A.selected}`]:{opacity:1},[`&.${A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${A.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${A.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${A.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),ae=c.forwardRef(function(e,r){const a=ht({props:e,name:"MuiTab"}),{className:n,disabled:d=!1,disableFocusRipple:h=!1,fullWidth:p,icon:u,iconPosition:m="top",indicator:w,label:T,onChange:y,onClick:x,onFocus:j,selected:I,selectionFollowsFocus:g,textColor:H="inherit",value:C,wrapped:nt=!1}=a,D=rt(a,re),Y=b({},a,{disabled:d,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:m,label:!!T,fullWidth:p,textColor:H,wrapped:nt}),X=ne(Y),N=u&&T&&c.isValidElement(u)?c.cloneElement(u,{className:L(X.iconWrapper,u.props.className)}):u,J=R=>{!I&&y&&y(R,C),x&&x(R)},_=R=>{g&&!I&&y&&y(R,C),j&&j(R)};return v.jsxs(se,b({focusRipple:!h,className:L(X.root,n),ref:r,role:"tab","aria-selected":I,disabled:d,onClick:J,onFocus:_,ownerState:Y,tabIndex:I?0:-1},D,{children:[m==="top"||m==="start"?v.jsxs(c.Fragment,{children:[N,T]}):v.jsxs(c.Fragment,{children:[T,N]}),w]}))}),ke=ae,ie=Ft(v.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),ce=Ft(v.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function de(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ue(t,e,r,a={},n=()=>{}){const{ease:d=de,duration:h=300}=a;let p=null;const u=e[t];let m=!1;const w=()=>{m=!0},T=y=>{if(m){n(new Error("Animation cancelled"));return}p===null&&(p=y);const x=Math.min(1,(y-p)/h);if(e[t]=d(x)*(r-u)+u,x>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(T)};return u===r?(n(new Error("Element already at target position")),w):(requestAnimationFrame(T),w)}const be=["onChange"],fe={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function pe(t){const{onChange:e}=t,r=rt(t,be),a=c.useRef(),n=c.useRef(null),d=()=>{a.current=n.current.offsetHeight-n.current.clientHeight};return Zt(()=>{const h=Lt(()=>{const u=a.current;d(),u!==a.current&&e(a.current)}),p=Nt(n.current);return p.addEventListener("resize",h),()=>{h.clear(),p.removeEventListener("resize",h)}},[e]),c.useEffect(()=>{d(),e(a.current)},[e]),v.jsx("div",b({style:fe,ref:n},r))}function he(t){return pt("MuiTabScrollButton",t)}const ve=ft("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Se=ve,me=["className","slots","slotProps","direction","orientation","disabled"],xe=t=>{const{classes:e,orientation:r,disabled:a}=t;return vt({root:["root",r,a&&"disabled"]},he,e)},ge=O(kt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${Se.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),ye=c.forwardRef(function(e,r){var a,n;const d=ht({props:e,name:"MuiTabScrollButton"}),{className:h,slots:p={},slotProps:u={},direction:m}=d,w=rt(d,me),y=$t().direction==="rtl",x=b({isRtl:y},d),j=xe(x),I=(a=p.StartScrollButtonIcon)!=null?a:ie,g=(n=p.EndScrollButtonIcon)!=null?n:ce,H=lt({elementType:I,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x}),C=lt({elementType:g,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x});return v.jsx(ge,b({component:"div",className:L(j.root,h),ref:r,role:null,ownerState:x,tabIndex:null},w,{children:m==="left"?v.jsx(I,b({},H)):v.jsx(g,b({},C))}))}),Ce=ye;function Be(t){return pt("MuiTabs",t)}const we=ft("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),bt=we,Te=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Rt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,zt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,ot=(t,e,r)=>{let a=!1,n=r(t,e);for(;n;){if(n===t.firstChild){if(a)return;a=!0}const d=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||d)n=r(t,n);else{n.focus();return}}},Ie=t=>{const{vertical:e,fixed:r,hideScrollbar:a,scrollableX:n,scrollableY:d,centered:h,scrollButtonsHideMobile:p,classes:u}=t;return vt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",a&&"hideScrollbar",n&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},Be,u)},Ee=O("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${bt.scrollButtons}`]:e.scrollButtons},{[`& .${bt.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${bt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Me=O("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Re=O("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),ze=O("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),We=O(pe)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Wt={},Pe=c.forwardRef(function(e,r){const a=ht({props:e,name:"MuiTabs"}),n=$t(),d=n.direction==="rtl",{"aria-label":h,"aria-labelledby":p,action:u,centered:m=!1,children:w,className:T,component:y="div",allowScrollButtonsMobile:x=!1,indicatorColor:j="primary",onChange:I,orientation:g="horizontal",ScrollButtonComponent:H=Ce,scrollButtons:C="auto",selectionFollowsFocus:nt,slots:D={},slotProps:Y={},TabIndicatorProps:X={},TabScrollButtonProps:N={},textColor:J="primary",value:_,variant:R="standard",visibleScrollbar:st=!1}=a,Ot=rt(a,Te),E=R==="scrollable",B=g==="vertical",K=B?"scrollTop":"scrollLeft",Q=B?"top":"left",Z=B?"bottom":"right",at=B?"clientHeight":"clientWidth",V=B?"height":"width",$=b({},a,{component:y,allowScrollButtonsMobile:x,indicatorColor:j,orientation:g,vertical:B,scrollButtons:C,textColor:J,variant:R,visibleScrollbar:st,fixed:!E,hideScrollbar:E&&!st,scrollableX:E&&!B,scrollableY:E&&B,centered:m&&!E,scrollButtonsHideMobile:!x}),W=Ie($),jt=lt({elementType:D.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:$}),Ht=lt({elementType:D.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:$}),[St,Dt]=c.useState(!1),[k,mt]=c.useState(Wt),[xt,Xt]=c.useState(!1),[gt,_t]=c.useState(!1),[yt,Ut]=c.useState(!1),[Ct,Yt]=c.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,z=c.useRef(null),F=c.useRef(null),wt=()=>{const o=z.current;let l;if(o){const s=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ee(o,n.direction),scrollWidth:o.scrollWidth,top:s.top,bottom:s.bottom,left:s.left,right:s.right}}let i;if(o&&_!==!1){const s=F.current.children;if(s.length>0){const f=s[Bt.get(_)];i=f?f.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},q=ut(()=>{const{tabsMeta:o,tabMeta:l}=wt();let i=0,s;if(B)s="top",l&&o&&(i=l.top-o.top+o.scrollTop);else if(s=d?"right":"left",l&&o){const S=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(d?-1:1)*(l[s]-o[s]+S)}const f={[s]:i,[V]:l?l[V]:0};if(isNaN(k[s])||isNaN(k[V]))mt(f);else{const S=Math.abs(k[s]-f[s]),M=Math.abs(k[V]-f[V]);(S>=1||M>=1)&&mt(f)}}),it=(o,{animation:l=!0}={})=>{l?ue(K,z.current,o,{duration:n.transitions.duration.standard}):z.current[K]=o},Tt=o=>{let l=z.current[K];B?l+=o:(l+=o*(d?-1:1),l*=d&&At()==="reverse"?-1:1),it(l)},It=()=>{const o=z.current[at];let l=0;const i=Array.from(F.current.children);for(let s=0;s<i.length;s+=1){const f=i[s];if(l+f[at]>o){s===0&&(l=o);break}l+=f[at]}return l},Kt=()=>{Tt(-1*It())},Vt=()=>{Tt(It())},qt=c.useCallback(o=>{Yt({overflow:null,scrollbarWidth:o})},[]),Gt=()=>{const o={};o.scrollbarSizeListener=E?v.jsx(We,{onChange:qt,className:L(W.scrollableX,W.hideScrollbar)}):null;const i=E&&(C==="auto"&&(xt||gt)||C===!0);return o.scrollButtonStart=i?v.jsx(H,b({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:jt},orientation:g,direction:d?"right":"left",onClick:Kt,disabled:!xt},N,{className:L(W.scrollButtons,N.className)})):null,o.scrollButtonEnd=i?v.jsx(H,b({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ht},orientation:g,direction:d?"left":"right",onClick:Vt,disabled:!gt},N,{className:L(W.scrollButtons,N.className)})):null,o},Et=ut(o=>{const{tabsMeta:l,tabMeta:i}=wt();if(!(!i||!l)){if(i[Q]<l[Q]){const s=l[K]+(i[Q]-l[Q]);it(s,{animation:o})}else if(i[Z]>l[Z]){const s=l[K]+(i[Z]-l[Z]);it(s,{animation:o})}}}),tt=ut(()=>{E&&C!==!1&&Ut(!yt)});c.useEffect(()=>{const o=Lt(()=>{z.current&&q()});let l;const i=S=>{S.forEach(M=>{M.removedNodes.forEach(G=>{var P;(P=l)==null||P.unobserve(G)}),M.addedNodes.forEach(G=>{var P;(P=l)==null||P.observe(G)})}),o(),tt()},s=Nt(z.current);s.addEventListener("resize",o);let f;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(F.current.children).forEach(S=>{l.observe(S)})),typeof MutationObserver<"u"&&(f=new MutationObserver(i),f.observe(F.current,{childList:!0})),()=>{var S,M;o.clear(),s.removeEventListener("resize",o),(S=f)==null||S.disconnect(),(M=l)==null||M.disconnect()}},[q,tt]),c.useEffect(()=>{const o=Array.from(F.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&E&&C!==!1){const i=o[0],s=o[l-1],f={root:z.current,threshold:.99},S=dt=>{Xt(!dt[0].isIntersecting)},M=new IntersectionObserver(S,f);M.observe(i);const G=dt=>{_t(!dt[0].isIntersecting)},P=new IntersectionObserver(G,f);return P.observe(s),()=>{M.disconnect(),P.disconnect()}}},[E,C,yt,w==null?void 0:w.length]),c.useEffect(()=>{Dt(!0)},[]),c.useEffect(()=>{q()}),c.useEffect(()=>{Et(Wt!==k)},[Et,k]),c.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:tt}),[q,tt]);const Mt=v.jsx(ze,b({},X,{className:L(W.indicator,X.className),ownerState:$,style:b({},k,X.style)}));let et=0;const Jt=c.Children.map(w,o=>{if(!c.isValidElement(o))return null;const l=o.props.value===void 0?et:o.props.value;Bt.set(l,et);const i=l===_;return et+=1,c.cloneElement(o,b({fullWidth:R==="fullWidth",indicator:i&&!St&&Mt,selected:i,selectionFollowsFocus:nt,onChange:I,textColor:J,value:l},et===1&&_===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Qt=o=>{const l=F.current,i=te(l).activeElement;if(i.getAttribute("role")!=="tab")return;let f=g==="horizontal"?"ArrowLeft":"ArrowUp",S=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&d&&(f="ArrowRight",S="ArrowLeft"),o.key){case f:o.preventDefault(),ot(l,i,zt);break;case S:o.preventDefault(),ot(l,i,Rt);break;case"Home":o.preventDefault(),ot(l,null,Rt);break;case"End":o.preventDefault(),ot(l,null,zt);break}},ct=Gt();return v.jsxs(Ee,b({className:L(W.root,T),ownerState:$,ref:r,as:y},Ot,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,v.jsxs(Me,{className:W.scroller,ownerState:$,style:{overflow:Ct.overflow,[B?`margin${d?"Left":"Right"}`:"marginBottom"]:st?void 0:-Ct.scrollbarWidth},ref:z,children:[v.jsx(Re,{"aria-label":h,"aria-labelledby":p,"aria-orientation":g==="vertical"?"vertical":null,className:W.flexContainer,ownerState:$,onKeyDown:Qt,ref:F,role:"tablist",children:Jt}),St&&Mt]}),ct.scrollButtonEnd]}))}),Fe=Pe;export{Fe as T,ke as a};
