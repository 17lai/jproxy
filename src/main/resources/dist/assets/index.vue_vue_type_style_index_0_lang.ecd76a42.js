import{h as tr,u as ar}from"./index.3b366cce.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import{l as L,d as nr,a as H,w as or,A as sr,aD as ir,aE as y,aF as g,u as T,bE as lr,aY as ur,bx as cr,aX as fr,bF as pr,b1 as vr,bG as gr}from"./arco.f2670ebc.js";function dr(e){return tr.get("/rule/test",{params:e})}function br(){this.__data__=[],this.size=0}var $r=br;function yr(e,r){return e===r||e!==e&&r!==r}var Ve=yr,hr=Ve;function _r(e,r){for(var t=e.length;t--;)if(hr(e[t][0],r))return t;return-1}var k=_r,mr=k,Tr=Array.prototype,jr=Tr.splice;function Ar(e){var r=this.__data__,t=mr(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():jr.call(r,t,1),--this.size,!0}var Or=Ar,Cr=k;function Sr(e){var r=this.__data__,t=Cr(r,e);return t<0?void 0:r[t][1]}var wr=Sr,Ir=k;function xr(e){return Ir(this.__data__,e)>-1}var Pr=xr,Mr=k;function Er(e,r){var t=this.__data__,a=Mr(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}var Vr=Er,Dr=$r,Lr=Or,Fr=wr,Ur=Pr,kr=Vr;function S(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}S.prototype.clear=Dr;S.prototype.delete=Lr;S.prototype.get=Fr;S.prototype.has=Ur;S.prototype.set=kr;var G=S,Gr=G;function Br(){this.__data__=new Gr,this.size=0}var Nr=Br;function Kr(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var Rr=Kr;function Hr(e){return this.__data__.get(e)}var zr=Hr;function qr(e){return this.__data__.has(e)}var Wr=qr,Yr=typeof L=="object"&&L&&L.Object===Object&&L,De=Yr,Jr=De,Xr=typeof self=="object"&&self&&self.Object===Object&&self,Zr=Jr||Xr||Function("return this")(),_=Zr,Qr=_,et=Qr.Symbol,Q=et,ue=Q,Le=Object.prototype,rt=Le.hasOwnProperty,tt=Le.toString,M=ue?ue.toStringTag:void 0;function at(e){var r=rt.call(e,M),t=e[M];try{e[M]=void 0;var a=!0}catch{}var o=tt.call(e);return a&&(r?e[M]=t:delete e[M]),o}var nt=at,ot=Object.prototype,st=ot.toString;function it(e){return st.call(e)}var lt=it,ce=Q,ut=nt,ct=lt,ft="[object Null]",pt="[object Undefined]",fe=ce?ce.toStringTag:void 0;function vt(e){return e==null?e===void 0?pt:ft:fe&&fe in Object(e)?ut(e):ct(e)}var B=vt;function gt(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var V=gt,dt=B,bt=V,$t="[object AsyncFunction]",yt="[object Function]",ht="[object GeneratorFunction]",_t="[object Proxy]";function mt(e){if(!bt(e))return!1;var r=dt(e);return r==yt||r==ht||r==$t||r==_t}var Fe=mt,Tt=_,jt=Tt["__core-js_shared__"],At=jt,z=At,pe=function(){var e=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ot(e){return!!pe&&pe in e}var Ct=Ot,St=Function.prototype,wt=St.toString;function It(e){if(e!=null){try{return wt.call(e)}catch{}try{return e+""}catch{}}return""}var Ue=It,xt=Fe,Pt=Ct,Mt=V,Et=Ue,Vt=/[\\^$.*+?()[\]{}|]/g,Dt=/^\[object .+?Constructor\]$/,Lt=Function.prototype,Ft=Object.prototype,Ut=Lt.toString,kt=Ft.hasOwnProperty,Gt=RegExp("^"+Ut.call(kt).replace(Vt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Bt(e){if(!Mt(e)||Pt(e))return!1;var r=xt(e)?Gt:Dt;return r.test(Et(e))}var Nt=Bt;function Kt(e,r){return e==null?void 0:e[r]}var Rt=Kt,Ht=Nt,zt=Rt;function qt(e,r){var t=zt(e,r);return Ht(t)?t:void 0}var O=qt,Wt=O,Yt=_,Jt=Wt(Yt,"Map"),ee=Jt,Xt=O,Zt=Xt(Object,"create"),N=Zt,ve=N;function Qt(){this.__data__=ve?ve(null):{},this.size=0}var ea=Qt;function ra(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var ta=ra,aa=N,na="__lodash_hash_undefined__",oa=Object.prototype,sa=oa.hasOwnProperty;function ia(e){var r=this.__data__;if(aa){var t=r[e];return t===na?void 0:t}return sa.call(r,e)?r[e]:void 0}var la=ia,ua=N,ca=Object.prototype,fa=ca.hasOwnProperty;function pa(e){var r=this.__data__;return ua?r[e]!==void 0:fa.call(r,e)}var va=pa,ga=N,da="__lodash_hash_undefined__";function ba(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ga&&r===void 0?da:r,this}var $a=ba,ya=ea,ha=ta,_a=la,ma=va,Ta=$a;function w(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}w.prototype.clear=ya;w.prototype.delete=ha;w.prototype.get=_a;w.prototype.has=ma;w.prototype.set=Ta;var ja=w,ge=ja,Aa=G,Oa=ee;function Ca(){this.size=0,this.__data__={hash:new ge,map:new(Oa||Aa),string:new ge}}var Sa=Ca;function wa(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var Ia=wa,xa=Ia;function Pa(e,r){var t=e.__data__;return xa(r)?t[typeof r=="string"?"string":"hash"]:t.map}var K=Pa,Ma=K;function Ea(e){var r=Ma(this,e).delete(e);return this.size-=r?1:0,r}var Va=Ea,Da=K;function La(e){return Da(this,e).get(e)}var Fa=La,Ua=K;function ka(e){return Ua(this,e).has(e)}var Ga=ka,Ba=K;function Na(e,r){var t=Ba(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}var Ka=Na,Ra=Sa,Ha=Va,za=Fa,qa=Ga,Wa=Ka;function I(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}I.prototype.clear=Ra;I.prototype.delete=Ha;I.prototype.get=za;I.prototype.has=qa;I.prototype.set=Wa;var Ya=I,Ja=G,Xa=ee,Za=Ya,Qa=200;function en(e,r){var t=this.__data__;if(t instanceof Ja){var a=t.__data__;if(!Xa||a.length<Qa-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new Za(a)}return t.set(e,r),this.size=t.size,this}var rn=en,tn=G,an=Nr,nn=Rr,on=zr,sn=Wr,ln=rn;function x(e){var r=this.__data__=new tn(e);this.size=r.size}x.prototype.clear=an;x.prototype.delete=nn;x.prototype.get=on;x.prototype.has=sn;x.prototype.set=ln;var un=x;function cn(e,r){for(var t=-1,a=e==null?0:e.length;++t<a&&r(e[t],t,e)!==!1;);return e}var fn=cn,pn=O,vn=function(){try{var e=pn(Object,"defineProperty");return e({},"",{}),e}catch{}}(),gn=vn,de=gn;function dn(e,r,t){r=="__proto__"&&de?de(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var ke=dn,bn=ke,$n=Ve,yn=Object.prototype,hn=yn.hasOwnProperty;function _n(e,r,t){var a=e[r];(!(hn.call(e,r)&&$n(a,t))||t===void 0&&!(r in e))&&bn(e,r,t)}var Ge=_n,mn=Ge,Tn=ke;function jn(e,r,t,a){var o=!t;t||(t={});for(var n=-1,s=r.length;++n<s;){var u=r[n],v=a?a(t[u],e[u],u,t,e):void 0;v===void 0&&(v=e[u]),o?Tn(t,u,v):mn(t,u,v)}return t}var R=jn;function An(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var On=An;function Cn(e){return e!=null&&typeof e=="object"}var D=Cn,Sn=B,wn=D,In="[object Arguments]";function xn(e){return wn(e)&&Sn(e)==In}var Pn=xn,be=Pn,Mn=D,Be=Object.prototype,En=Be.hasOwnProperty,Vn=Be.propertyIsEnumerable,Dn=be(function(){return arguments}())?be:function(e){return Mn(e)&&En.call(e,"callee")&&!Vn.call(e,"callee")},Ln=Dn,Fn=Array.isArray,re=Fn,U={exports:{}};function Un(){return!1}var kn=Un;(function(e,r){var t=_,a=kn,o=r&&!r.nodeType&&r,n=o&&!0&&e&&!e.nodeType&&e,s=n&&n.exports===o,u=s?t.Buffer:void 0,v=u?u.isBuffer:void 0,f=v||a;e.exports=f})(U,U.exports);var Gn=9007199254740991,Bn=/^(?:0|[1-9]\d*)$/;function Nn(e,r){var t=typeof e;return r=r==null?Gn:r,!!r&&(t=="number"||t!="symbol"&&Bn.test(e))&&e>-1&&e%1==0&&e<r}var Kn=Nn,Rn=9007199254740991;function Hn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rn}var Ne=Hn,zn=B,qn=Ne,Wn=D,Yn="[object Arguments]",Jn="[object Array]",Xn="[object Boolean]",Zn="[object Date]",Qn="[object Error]",eo="[object Function]",ro="[object Map]",to="[object Number]",ao="[object Object]",no="[object RegExp]",oo="[object Set]",so="[object String]",io="[object WeakMap]",lo="[object ArrayBuffer]",uo="[object DataView]",co="[object Float32Array]",fo="[object Float64Array]",po="[object Int8Array]",vo="[object Int16Array]",go="[object Int32Array]",bo="[object Uint8Array]",$o="[object Uint8ClampedArray]",yo="[object Uint16Array]",ho="[object Uint32Array]",p={};p[co]=p[fo]=p[po]=p[vo]=p[go]=p[bo]=p[$o]=p[yo]=p[ho]=!0;p[Yn]=p[Jn]=p[lo]=p[Xn]=p[uo]=p[Zn]=p[Qn]=p[eo]=p[ro]=p[to]=p[ao]=p[no]=p[oo]=p[so]=p[io]=!1;function _o(e){return Wn(e)&&qn(e.length)&&!!p[zn(e)]}var mo=_o;function To(e){return function(r){return e(r)}}var te=To,E={exports:{}};(function(e,r){var t=De,a=r&&!r.nodeType&&r,o=a&&!0&&e&&!e.nodeType&&e,n=o&&o.exports===a,s=n&&t.process,u=function(){try{var v=o&&o.require&&o.require("util").types;return v||s&&s.binding&&s.binding("util")}catch{}}();e.exports=u})(E,E.exports);var jo=mo,Ao=te,$e=E.exports,ye=$e&&$e.isTypedArray,Oo=ye?Ao(ye):jo,Co=Oo,So=On,wo=Ln,Io=re,xo=U.exports,Po=Kn,Mo=Co,Eo=Object.prototype,Vo=Eo.hasOwnProperty;function Do(e,r){var t=Io(e),a=!t&&wo(e),o=!t&&!a&&xo(e),n=!t&&!a&&!o&&Mo(e),s=t||a||o||n,u=s?So(e.length,String):[],v=u.length;for(var f in e)(r||Vo.call(e,f))&&!(s&&(f=="length"||o&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Po(f,v)))&&u.push(f);return u}var Ke=Do,Lo=Object.prototype;function Fo(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Lo;return e===t}var ae=Fo;function Uo(e,r){return function(t){return e(r(t))}}var Re=Uo,ko=Re,Go=ko(Object.keys,Object),Bo=Go,No=ae,Ko=Bo,Ro=Object.prototype,Ho=Ro.hasOwnProperty;function zo(e){if(!No(e))return Ko(e);var r=[];for(var t in Object(e))Ho.call(e,t)&&t!="constructor"&&r.push(t);return r}var qo=zo,Wo=Fe,Yo=Ne;function Jo(e){return e!=null&&Yo(e.length)&&!Wo(e)}var He=Jo,Xo=Ke,Zo=qo,Qo=He;function es(e){return Qo(e)?Xo(e):Zo(e)}var ne=es,rs=R,ts=ne;function as(e,r){return e&&rs(r,ts(r),e)}var ns=as;function os(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var ss=os,is=V,ls=ae,us=ss,cs=Object.prototype,fs=cs.hasOwnProperty;function ps(e){if(!is(e))return us(e);var r=ls(e),t=[];for(var a in e)a=="constructor"&&(r||!fs.call(e,a))||t.push(a);return t}var vs=ps,gs=Ke,ds=vs,bs=He;function $s(e){return bs(e)?gs(e,!0):ds(e)}var oe=$s,ys=R,hs=oe;function _s(e,r){return e&&ys(r,hs(r),e)}var ms=_s,q={exports:{}};(function(e,r){var t=_,a=r&&!r.nodeType&&r,o=a&&!0&&e&&!e.nodeType&&e,n=o&&o.exports===a,s=n?t.Buffer:void 0,u=s?s.allocUnsafe:void 0;function v(f,i){if(i)return f.slice();var l=f.length,h=u?u(l):new f.constructor(l);return f.copy(h),h}e.exports=v})(q,q.exports);function Ts(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var js=Ts;function As(e,r){for(var t=-1,a=e==null?0:e.length,o=0,n=[];++t<a;){var s=e[t];r(s,t,e)&&(n[o++]=s)}return n}var Os=As;function Cs(){return[]}var ze=Cs,Ss=Os,ws=ze,Is=Object.prototype,xs=Is.propertyIsEnumerable,he=Object.getOwnPropertySymbols,Ps=he?function(e){return e==null?[]:(e=Object(e),Ss(he(e),function(r){return xs.call(e,r)}))}:ws,se=Ps,Ms=R,Es=se;function Vs(e,r){return Ms(e,Es(e),r)}var Ds=Vs;function Ls(e,r){for(var t=-1,a=r.length,o=e.length;++t<a;)e[o+t]=r[t];return e}var qe=Ls,Fs=Re,Us=Fs(Object.getPrototypeOf,Object),We=Us,ks=qe,Gs=We,Bs=se,Ns=ze,Ks=Object.getOwnPropertySymbols,Rs=Ks?function(e){for(var r=[];e;)ks(r,Bs(e)),e=Gs(e);return r}:Ns,Ye=Rs,Hs=R,zs=Ye;function qs(e,r){return Hs(e,zs(e),r)}var Ws=qs,Ys=qe,Js=re;function Xs(e,r,t){var a=r(e);return Js(e)?a:Ys(a,t(e))}var Je=Xs,Zs=Je,Qs=se,ei=ne;function ri(e){return Zs(e,ei,Qs)}var ti=ri,ai=Je,ni=Ye,oi=oe;function si(e){return ai(e,oi,ni)}var ii=si,li=O,ui=_,ci=li(ui,"DataView"),fi=ci,pi=O,vi=_,gi=pi(vi,"Promise"),di=gi,bi=O,$i=_,yi=bi($i,"Set"),hi=yi,_i=O,mi=_,Ti=_i(mi,"WeakMap"),ji=Ti,W=fi,Y=ee,J=di,X=hi,Z=ji,Xe=B,P=Ue,_e="[object Map]",Ai="[object Object]",me="[object Promise]",Te="[object Set]",je="[object WeakMap]",Ae="[object DataView]",Oi=P(W),Ci=P(Y),Si=P(J),wi=P(X),Ii=P(Z),A=Xe;(W&&A(new W(new ArrayBuffer(1)))!=Ae||Y&&A(new Y)!=_e||J&&A(J.resolve())!=me||X&&A(new X)!=Te||Z&&A(new Z)!=je)&&(A=function(e){var r=Xe(e),t=r==Ai?e.constructor:void 0,a=t?P(t):"";if(a)switch(a){case Oi:return Ae;case Ci:return _e;case Si:return me;case wi:return Te;case Ii:return je}return r});var ie=A,xi=Object.prototype,Pi=xi.hasOwnProperty;function Mi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Pi.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Ei=Mi,Vi=_,Di=Vi.Uint8Array,Li=Di,Oe=Li;function Fi(e){var r=new e.constructor(e.byteLength);return new Oe(r).set(new Oe(e)),r}var le=Fi,Ui=le;function ki(e,r){var t=r?Ui(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Gi=ki,Bi=/\w*$/;function Ni(e){var r=new e.constructor(e.source,Bi.exec(e));return r.lastIndex=e.lastIndex,r}var Ki=Ni,Ce=Q,Se=Ce?Ce.prototype:void 0,we=Se?Se.valueOf:void 0;function Ri(e){return we?Object(we.call(e)):{}}var Hi=Ri,zi=le;function qi(e,r){var t=r?zi(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Wi=qi,Yi=le,Ji=Gi,Xi=Ki,Zi=Hi,Qi=Wi,el="[object Boolean]",rl="[object Date]",tl="[object Map]",al="[object Number]",nl="[object RegExp]",ol="[object Set]",sl="[object String]",il="[object Symbol]",ll="[object ArrayBuffer]",ul="[object DataView]",cl="[object Float32Array]",fl="[object Float64Array]",pl="[object Int8Array]",vl="[object Int16Array]",gl="[object Int32Array]",dl="[object Uint8Array]",bl="[object Uint8ClampedArray]",$l="[object Uint16Array]",yl="[object Uint32Array]";function hl(e,r,t){var a=e.constructor;switch(r){case ll:return Yi(e);case el:case rl:return new a(+e);case ul:return Ji(e,t);case cl:case fl:case pl:case vl:case gl:case dl:case bl:case $l:case yl:return Qi(e,t);case tl:return new a;case al:case sl:return new a(e);case nl:return Xi(e);case ol:return new a;case il:return Zi(e)}}var _l=hl,ml=V,Ie=Object.create,Tl=function(){function e(){}return function(r){if(!ml(r))return{};if(Ie)return Ie(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}(),jl=Tl,Al=jl,Ol=We,Cl=ae;function Sl(e){return typeof e.constructor=="function"&&!Cl(e)?Al(Ol(e)):{}}var wl=Sl,Il=ie,xl=D,Pl="[object Map]";function Ml(e){return xl(e)&&Il(e)==Pl}var El=Ml,Vl=El,Dl=te,xe=E.exports,Pe=xe&&xe.isMap,Ll=Pe?Dl(Pe):Vl,Fl=Ll,Ul=ie,kl=D,Gl="[object Set]";function Bl(e){return kl(e)&&Ul(e)==Gl}var Nl=Bl,Kl=Nl,Rl=te,Me=E.exports,Ee=Me&&Me.isSet,Hl=Ee?Rl(Ee):Kl,zl=Hl,ql=un,Wl=fn,Yl=Ge,Jl=ns,Xl=ms,Zl=q.exports,Ql=js,eu=Ds,ru=Ws,tu=ti,au=ii,nu=ie,ou=Ei,su=_l,iu=wl,lu=re,uu=U.exports,cu=Fl,fu=V,pu=zl,vu=ne,gu=oe,du=1,bu=2,$u=4,Ze="[object Arguments]",yu="[object Array]",hu="[object Boolean]",_u="[object Date]",mu="[object Error]",Qe="[object Function]",Tu="[object GeneratorFunction]",ju="[object Map]",Au="[object Number]",er="[object Object]",Ou="[object RegExp]",Cu="[object Set]",Su="[object String]",wu="[object Symbol]",Iu="[object WeakMap]",xu="[object ArrayBuffer]",Pu="[object DataView]",Mu="[object Float32Array]",Eu="[object Float64Array]",Vu="[object Int8Array]",Du="[object Int16Array]",Lu="[object Int32Array]",Fu="[object Uint8Array]",Uu="[object Uint8ClampedArray]",ku="[object Uint16Array]",Gu="[object Uint32Array]",c={};c[Ze]=c[yu]=c[xu]=c[Pu]=c[hu]=c[_u]=c[Mu]=c[Eu]=c[Vu]=c[Du]=c[Lu]=c[ju]=c[Au]=c[er]=c[Ou]=c[Cu]=c[Su]=c[wu]=c[Fu]=c[Uu]=c[ku]=c[Gu]=!0;c[mu]=c[Qe]=c[Iu]=!1;function F(e,r,t,a,o,n){var s,u=r&du,v=r&bu,f=r&$u;if(t&&(s=o?t(e,a,o,n):t(e)),s!==void 0)return s;if(!fu(e))return e;var i=lu(e);if(i){if(s=ou(e),!u)return Ql(e,s)}else{var l=nu(e),h=l==Qe||l==Tu;if(uu(e))return Zl(e,u);if(l==er||l==Ze||h&&!o){if(s=v||h?{}:iu(e),!u)return v?ru(e,Xl(s,e)):eu(e,Jl(s,e))}else{if(!c[l])return o?e:{};s=su(e,l,u)}}n||(n=new ql);var b=n.get(e);if(b)return b;n.set(e,s),pu(e)?e.forEach(function($){s.add(F($,r,t,$,e,n))}):cu(e)&&e.forEach(function($,m){s.set(m,F($,r,t,m,e,n))});var C=f?v?au:tu:v?gu:vu,j=i?void 0:C(e);return Wl(j||e,function($,m){j&&(m=$,$=e[m]),Yl(s,m,F($,r,t,m,e,n))}),s}var Bu=F,Nu=Bu,Ku=1,Ru=4;function Hu(e){return Nu(e,Ku|Ru)}var zu=Hu;const ac=nr({__name:"index",props:{tokenList:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})},title:{type:String,default:()=>""}},emits:["save"],setup(e,{emit:r}){const t=e,a=H(),{t:o}=ar(),n=H(),s=async i=>{var h;await((h=a.value)==null?void 0:h.validate())||await new Promise(b=>{r("save",n.value,C=>{b(C)})})&&i(!0),i(!1)},u=H(!0),v=i=>{i==="season"||i==="episode"?u.value=!1:(n.value.offset=0,u.value=!0)},f=()=>{n.value.replacement&&(!n.value.remark&&n.value.token&&n.value.token!=="season"&&n.value.token!=="episode"&&n.value.replacement.indexOf("$")===-1&&(n.value.remark=n.value.replacement.replaceAll(/(\[|\])/g,"").trim()),n.value.regex&&n.value.example&&dr({regex:n.value.regex,replacement:n.value.replacement,example:n.value.example,offset:n.value.offset}).then(i=>{n.value.result=i.data}))};return or(()=>t.data,i=>{n.value=zu(i),f()},{immediate:!0,deep:!0}),(i,l)=>{const h=lr,b=ur,C=cr,j=fr,$=pr,m=vr,rr=gr;return sr(),ir(rr,{title:t.title,onBeforeOk:s},{default:y(()=>[g(m,{ref_key:"ruleRef",ref:a,class:"rule-form",model:n.value,"label-col-props":{span:3},"wrapper-col-props":{span:20}},{default:y(()=>[g(b,{field:"token",label:T(o)("rule.form.token"),rules:[{required:!0,message:i.$t("rule.form.token.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g(h,{modelValue:n.value.token,"onUpdate:modelValue":l[0]||(l[0]=d=>n.value.token=d),data:t.tokenList,"allow-clear":"",placeholder:i.$t("rule.form.token.placeholder"),onChange:v},null,8,["modelValue","data","placeholder"])]),_:1},8,["label","rules"]),g(b,{field:"priority",label:T(o)("rule.form.priority"),rules:[{required:!0,message:i.$t("rule.form.priority.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g(C,{modelValue:n.value.priority,"onUpdate:modelValue":l[1]||(l[1]=d=>n.value.priority=d),min:0,max:999999,placeholder:i.$t("rule.form.priority.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),g(b,{field:"regex",label:T(o)("rule.form.regex"),rules:[{required:!0,message:i.$t("rule.form.regex.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g(j,{modelValue:n.value.regex,"onUpdate:modelValue":l[2]||(l[2]=d=>n.value.regex=d),"allow-clear":"",placeholder:i.$t("rule.form.regex.placeholder"),onChange:f},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),g(b,{field:"replacement",label:T(o)("rule.form.replacement")},{default:y(()=>[g(j,{modelValue:n.value.replacement,"onUpdate:modelValue":l[3]||(l[3]=d=>n.value.replacement=d),"allow-clear":"",placeholder:i.$t("rule.form.replacement.placeholder"),onChange:f},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),g(b,{field:"offset",label:T(o)("rule.form.offset"),rules:[{required:!0,message:i.$t("rule.form.offset.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g(C,{modelValue:n.value.offset,"onUpdate:modelValue":l[4]||(l[4]=d=>n.value.offset=d),disabled:u.value,min:-999999,max:999999,placeholder:i.$t("rule.form.offset.placeholder"),onChange:f},null,8,["modelValue","disabled","placeholder"])]),_:1},8,["label","rules"]),g(b,{field:"example",label:T(o)("rule.form.example"),rules:[{required:!0,message:i.$t("rule.form.example.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g($,{modelValue:n.value.example,"onUpdate:modelValue":l[5]||(l[5]=d=>n.value.example=d),"auto-size":{minRows:2,maxRows:5},"allow-clear":"",placeholder:i.$t("rule.form.example.placeholder"),onChange:f},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),g(b,{field:"result",label:T(o)("rule.form.result")},{default:y(()=>[g($,{modelValue:n.value.result,"onUpdate:modelValue":l[6]||(l[6]=d=>n.value.result=d),"auto-size":{minRows:1,maxRows:5},readonly:""},null,8,["modelValue"])]),_:1},8,["label"]),g(b,{field:"remark",label:T(o)("rule.form.remark"),rules:[{required:!0,message:i.$t("rule.form.remark.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g(j,{modelValue:n.value.remark,"onUpdate:modelValue":l[7]||(l[7]=d=>n.value.remark=d),"allow-clear":"",placeholder:i.$t("rule.form.remark.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),g(b,{field:"author",label:T(o)("rule.form.author"),rules:[{required:!0,message:i.$t("rule.form.author.error")}],"validate-trigger":["change","input"]},{default:y(()=>[g(j,{modelValue:n.value.author,"onUpdate:modelValue":l[8]||(l[8]=d=>n.value.author=d),"allow-clear":"",placeholder:i.$t("rule.form.author.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["title"])}}});export{ac as _};
