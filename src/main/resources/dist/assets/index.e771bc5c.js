import{u as V,a as d,k as U,_ as B}from"./index.3b366cce.js";/* empty css               *//* empty css              *//* empty css               */import{d as I,a as S,r as k,aI as C,A as L,B as E,aF as r,E as c,aE as t,aK as f,aL as y,u as F,aQ as N,aX as T,aY as M,a$ as R,b1 as q}from"./arco.f2670ebc.js";import{u as A}from"./loading.e9d2a33f.js";import{u as D}from"./user.5fc1e945.js";import{m as K}from"./crypto.edefa411.js";import"./vue.758b0c86.js";const Q={class:"container"},X={class:"system-user-div"},Y={class:"system-user-action"},j=I({__name:"index",setup(z){const{logout:_}=D(),w=S(),{t:u}=V(),{loading:g,setLoading:p}=A(),s=k({username:d().$state.username,password1:"",password2:""}),h=()=>{s.username=d().$state.username,s.password1="",s.password2=""},$=(e,a)=>{(s.password1||e)&&e!==s.password1?a(u("system.user.password2.error")):a()},b=async({values:e,errors:a})=>{if(!a){if(e.username===d().$state.username&&!e.password1)return;p(!0);const n={username:s.username,password:s.password2?K(s.password2):""};await U(n).then(()=>{N.success(u("system.user.save.success")),localStorage.setItem("login-config",""),setTimeout(()=>{_()},1500)}).finally(()=>{setTimeout(()=>{p(!1)},500)})}};return(e,a)=>{const n=C("Breadcrumb"),l=T,m=M,i=R,v=q;return L(),E("div",Q,[r(n,{items:["menu.system","menu.system.user"]},null,8,["items"]),c("div",X,[r(v,{ref_key:"systemUserRef",ref:w,model:s,"label-col-props":{span:6},"wrapper-col-props":{span:16},class:"system-user-form",onSubmit:b},{default:t(()=>[r(m,{field:"username",label:e.$t("system.user.username"),rules:[{required:!0,minLength:6,message:e.$t("system.user.username.error")}],"validate-trigger":["change","input"]},{default:t(()=>[r(l,{modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=o=>s.username=o),placeholder:e.$t("system.user.username.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(m,{field:"password1",label:e.$t("system.user.password1"),rules:[{minLength:8,message:e.$t("system.user.password1.error")}],"validate-trigger":["change","input"]},{default:t(()=>[r(l,{modelValue:s.password1,"onUpdate:modelValue":a[1]||(a[1]=o=>s.password1=o),type:"password",placeholder:e.$t("system.user.password1.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),r(m,{field:"password2",label:e.$t("system.user.password2"),rules:[{validator:$,message:e.$t("system.user.password2.error")}],"validate-trigger":["change","input"]},{default:t(()=>[r(l,{modelValue:s.password2,"onUpdate:modelValue":a[2]||(a[2]=o=>s.password2=o),type:"password",placeholder:e.$t("system.user.password2.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),c("div",Y,[r(i,{type:"secondary",onClick:h},{default:t(()=>[f(y(e.$t("system.user.reset")),1)]),_:1}),r(i,{"html-type":"submit",type:"primary",loading:F(g)},{default:t(()=>[f(y(e.$t("system.user.save")),1)]),_:1},8,["loading"])])]),_:1},8,["model"])])])}}});const se=B(j,[["__scopeId","data-v-4cf4fcce"]]);export{se as default};
