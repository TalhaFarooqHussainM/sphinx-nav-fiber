import{x as f,bl as m}from"./index-bbc2f482.js";import{D as y}from"./NodeCircleIcon-c4577542.js";const c={data:null,ids:[],loading:!1,total:0,filters:{is_muted:!1,sortBy:y,page:0,pageSize:50}};let r=null;const S=f((a,l)=>({...c,setTopics:async()=>{a({loading:!0}),r&&r.abort();const t=new AbortController,{signal:p}=t;r=t;const{data:d,ids:g,filters:o}=l(),u=T(o);o.page===0&&a({data:null,ids:[],total:0});try{const e=await m(u,p),n=o.page===0?{}:{...d||{}},i=o.page===0?[]:[...g];e.data.forEach(s=>{n[s.ref_id]=s,i.push(s.ref_id)}),a({data:n,ids:i,total:e.totalCount}),a({loading:!1})}catch(e){console.log(e)}},setFilters:t=>a({filters:{...l().filters,page:0,...t}}),terminate:()=>a(c)})),T=a=>({muted:a.is_muted?"True":"False",skip:String(a.page*a.pageSize),limit:String(a.pageSize),sort_by:a.sortBy,...a.search?{search:a.search}:{node_type:"Topic"}});export{S as u};
