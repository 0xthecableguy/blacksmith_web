var Yt=t=>{throw TypeError(t)};var Pe=(t,e,n)=>e.has(t)||Yt("Cannot "+n);var k=(t,e,n)=>(Pe(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{aq as C,F as O,a4 as N,ar as Ce}from"./cnl7iYSF.js";import{w as Ct,o as zt}from"./BEydGIXB.js";new URL("sveltekit-internal://");function Oe(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Ne(t){return t.split("%25").map(decodeURI).join("%25")}function je(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Rt({href:t}){return t.split("#")[0]}function $e(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function De(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Fe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const Ve=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(Ot(t)),Ve(t,e));const W=new Map;function Be(t,e){const n=Ot(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Fe(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function qe(t,e,n){if(W.size>0){const r=Ot(t,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(e,n)}function Ot(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${De(...a)}"]`}return r}const Ge=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Me(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ke(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return It(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return It(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const p=Ge.exec(c),[,u,w,f,m]=p;return e.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return It(c)}).join("")}).join("")}/?$`),params:e}}function He(t){return!/^\([^)]+\)$/.test(t)}function Ke(t){return t.slice(1).split("/").filter(He)}function We(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(p=>p).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const p=e[o+1],u=a[o+1];p&&!p.rest&&p.optional&&u&&c.chained&&(i=0),!p&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function It(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ye({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,p]])=>{const{pattern:u,params:w}=Me(o),f={id:o,exec:m=>{const d=u.exec(m);if(d)return We(d,w,r)},errors:[1,...p||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function fe(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Jt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var oe;const x=((oe=globalThis.__sveltekit_rl4gzf)==null?void 0:oe.base)??"/blacksmith_web";var se;const ze=((se=globalThis.__sveltekit_rl4gzf)==null?void 0:se.assets)??x,Je="1741338433111",ue="sveltekit:snapshot",he="sveltekit:scroll",de="sveltekit:states",Xe="sveltekit:pageurl",G="sveltekit:history",J="sveltekit:navigation",F={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function pe(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Nt(){return{x:pageXOffset,y:pageYOffset}}function q(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Xt={...F,"":F.hover};function ge(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function me(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ge(t)}}function Tt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||vt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ft&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ht(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=q(o,"preload-code")),a===null&&(a=q(o,"preload-data")),e===null&&(e=q(o,"keepfocus")),n===null&&(n=q(o,"noscroll")),s===null&&(s=q(o,"reload")),i===null&&(i=q(o,"replacestate")),o=ge(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xt[r??"off"],preload_data:Xt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Zt(t){const e=Ct(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const we={v:()=>{}};function Ze(){const{set:t,subscribe:e}=Ct(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${ze}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Je;return i&&(t(!0),we.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function vt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Dn(t){}function Qt(t){const e=tn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const Qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function tn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=Qe.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const en=-1,nn=-2,rn=-3,an=-4,on=-5,sn=-6;function cn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===en)return;if(s===rn)return NaN;if(s===an)return 1/0;if(s===on)return-1/0;if(s===sn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const p=new Set;r[s]=p;for(let f=1;f<o.length;f+=1)p.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],d=Qt(m),h=new f(d);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=Qt(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const p=o[l];p!==nn&&(c[l]=a(p))}}else{const c={};r[s]=c;for(const l in o){const p=o[l];c[l]=a(p)}}return r[s]}return a(0)}const ye=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ye];const ln=new Set([...ye]);[...ln];function fn(t){return t.filter(e=>e!=null)}class bt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class jt{constructor(e,n){this.status=e,this.location=n}}class $t extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const un="x-sveltekit-invalidated",hn="x-sveltekit-trailing-slash";function dt(t){return t instanceof bt||t instanceof $t?t.status:500}function dn(t){return t instanceof $t?t.text:"Internal Error"}let U,X,Ut;const pn=zt.toString().includes("$$")||/function \w+\(\) \{\}/.test(zt.toString());var tt,et,nt,rt,at,ot,st,it,ie,ct,ce,lt,le;pn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Ut={current:!1}):(U=new(ie=class{constructor(){P(this,tt,C({}));P(this,et,C(null));P(this,nt,C(null));P(this,rt,C({}));P(this,at,C({id:null}));P(this,ot,C({}));P(this,st,C(-1));P(this,it,C(new URL("https://example.com")))}get data(){return O(k(this,tt))}set data(e){N(k(this,tt),e)}get form(){return O(k(this,et))}set form(e){N(k(this,et),e)}get error(){return O(k(this,nt))}set error(e){N(k(this,nt),e)}get params(){return O(k(this,rt))}set params(e){N(k(this,rt),e)}get route(){return O(k(this,at))}set route(e){N(k(this,at),e)}get state(){return O(k(this,ot))}set state(e){N(k(this,ot),e)}get status(){return O(k(this,st))}set status(e){N(k(this,st),e)}get url(){return O(k(this,it))}set url(e){N(k(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ie),X=new(ce=class{constructor(){P(this,ct,C(null))}get current(){return O(k(this,ct))}set current(e){N(k(this,ct),e)}},ct=new WeakMap,ce),Ut=new(le=class{constructor(){P(this,lt,C(!1))}get current(){return O(k(this,lt))}set current(e){N(k(this,lt),e)}},lt=new WeakMap,le),we.v=()=>Ut.current=!0);function gn(t){Object.assign(U,t)}const mn="/__data.json",wn=".html__data.json";function yn(t){return t.endsWith(".html")?t.replace(/\.html$/,wn):t.replace(/\/$/,"")+mn}const _n=new Set(["icon","shortcut icon","apple-touch-icon"]),B=fe(he)??{},Z=fe(ue)??{},$={url:Zt({}),page:Zt({}),navigating:Ct(null),updated:Ze()};function Dt(t){B[t]=Nt()}function vn(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function _e(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function te(){}let Ft,xt,pt,j,Pt,A;const gt=[],mt=[];let L=null;const ve=new Set,bn=new Set,Y=new Set;let v={branch:[],error:null,url:null},Vt=!1,wt=!1,ee=!0,Q=!1,K=!1,be=!1,Bt=!1,ke,R,T,V;const z=new Set;async function qn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Ft=Ye(t),j=document.documentElement,Pt=e,xt=t.nodes[0],pt=t.nodes[1],xt(),pt(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[J],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[J]:T},""));const r=B[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Pn(Pt,n):await Ln(A.hash?On(new URL(location.href)):location.href,{replaceState:!0}),xn()}function kn(){gt.length=0,Bt=!1}function Ae(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Se(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=mt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ne(){Dt(R),Jt(he,B),Ae(T),Jt(ue,Z)}async function qt(t,e,n,r){return ut({type:"goto",url:pe(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Bt=!0),e.invalidate&&e.invalidate.forEach(Tn)}})}async function An(t){if(t.id!==(L==null?void 0:L.id)){const e={};z.add(e),L={id:t.id,token:e,promise:Re({...t,preload:e}).then(n=>(z.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Lt(t){var n;const e=(n=await At(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Ee(t,e,n){var s;v=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),ke=new A.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Se(T);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),wt=!0}function yt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=Oe(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:fn(n).map(f=>f.node.component),page:Ht(U)}};i!==void 0&&(c.props.form=i);let l={},p=!U,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],d=v.branch[f];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(p=!0),m&&(l={...l,...m.data},p&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||t.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||p)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:p?l:U.data}),c}async function Gt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var p,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((p=l.universal)!=null&&p.load){let f=function(...d){for(const h of d){const{href:y}=new URL(h,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:$e(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},A.hash),async fetch(d,h){let y;d instanceof Request?(y=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):y=d;const S=new URL(y,n);return o&&f(S.href),S.origin===n.origin&&(y=S.href.slice(n.origin.length)),wt?qe(y,S.href,h):Be(y,h)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function re(t,e,n,r,a,s){if(Bt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function Mt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Sn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ae({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Ht(U),constructors:[]}}}async function Re({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return z.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let p=null;const u=v.url?t!==_t(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=Sn(v.url,n);let m=!1;const d=l.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||re(m,w,u,f,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{p=await Le(n,d)}catch(g){const _=await M(g,{url:n,params:r,route:{id:t}});return z.has(s)?ae({error:_,url:n,params:r,route:a}):kt({status:dt(g),error:_,url:n,route:a})}if(p.type==="redirect")return p}const h=p==null?void 0:p.nodes;let y=!1;const S=l.map(async(g,_)=>{var St;if(!g)return;const b=v.branch[_],E=h==null?void 0:h[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!re(y,w,u,f,(St=b.universal)==null?void 0:St.uses,r))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Gt({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Wt;const Kt={};for(let Et=0;Et<_;Et+=1)Object.assign(Kt,(Wt=await S[Et])==null?void 0:Wt.data);return Kt},server_data_node:Mt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await S[g])}catch(_){if(_ instanceof jt)return{type:"redirect",location:_.location};if(z.has(s))return ae({error:await M(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=dt(_),E;if(h!=null&&h.includes(_))b=_.status??b,E=_.error;else if(_ instanceof bt)E=_.body;else{if(await $.updated.check())return await _e(),await H(n);E=await M(_,{params:r,url:n,route:{id:a.id}})}const D=await En(g,I,i);return D?yt({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Ue(n,{id:a.id},E,b)}else I.push(void 0);return yt({url:n,params:r,branch:I,status:200,error:null,route:a,form:e?void 0:null})}async function En(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function kt({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await Le(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Vt)&&await H(n)}try{const o=await Gt({loader:xt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Mt(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return yt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof jt)return qt(new URL(o.location,location.href),{},0);throw o}}async function Rn(t){let e;try{if(e=await A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function At(t,e){if(t&&!vt(t,x,A.hash)){const n=await Rn(t);if(!n)return;const r=In(n);for(const a of Ft){const s=a.exec(r);if(s)return{id:_t(t),invalidating:e,route:a,params:je(s),url:t}}}}function In(t){return Ne(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function _t(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ie({url:t,type:e,intent:n,delta:r}){let a=!1;const s=xe(v,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||ve.forEach(o=>o(i)),a?null:s}async function ut({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=te,block:p=te}){const u=V;V=c;const w=await At(e,!1),f=Ie({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){p(),V===c&&(V=u);return}const m=R,d=T;l(),Q=!0,wt&&$.navigating.set(X.current=f.navigation);let h=w&&await Re(w);if(!h){if(vt(e,x,A.hash))return await H(e);h=await Ue(e,{id:null},await M(new $t(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,V!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await kt({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await qt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await _e(),await H(e));if(kn(),Dt(m),Ae(d),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[G]:R+=g,[J]:T+=g,[de]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||vn(R,T)}if(L=null,h.props.page.state=i,wt){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(bn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{Y.delete(b)})};g.push(_),g.forEach(b=>{Y.add(b)})}ke.$set(h.props),gn(h.props.page),be=!0}else Ee(h,Pt,!1);const{activeElement:y}=document;await Ce();const S=n?n.scroll:a?Nt():null;if(ee){const g=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==y&&document.activeElement!==document.body;!r&&!I&&Cn(),ee=!0,h.props.page&&Object.assign(U,h.props.page),Q=!1,t==="popstate"&&Se(T),f.fulfil(void 0),Y.forEach(g=>g(f.navigation)),$.navigating.set(X.current=null)}async function Ue(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!Vt?await kt({status:r,error:n,url:t,route:e}):await H(t)}function Un(){let t,e,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(t),t=setTimeout(()=>{s(c,F.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],F.tap)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(Lt(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=me(o,j),p=l===e&&c>=n;if(!l||p)return;const{url:u,external:w,download:f}=Tt(l,x,A.hash);if(w||f)return;const m=ht(l),d=u&&_t(v.url)===_t(u);if(!(m.reload||d))if(c<=m.preload_data){e=l,n=F.tap;const h=await At(u,!1);if(!h)return;An(h)}else c<=m.preload_code&&(e=l,n=c,Lt(u))}function i(){a.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:p}=Tt(o,x,A.hash);if(l||p)continue;const u=ht(o);u.reload||(u.preload_code===F.viewport&&a.observe(o),u.preload_code===F.eager&&Lt(c))}}Y.add(i),i()}function M(t,e){if(t instanceof bt)return t.body;const n=dt(t),r=dn(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Ln(t,e={}){return t=new URL(pe(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):qt(t,e,0)}function Tn(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function xn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ne(),!Q){const a=xe(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ve.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ne()}),(e=navigator.connection)!=null&&e.saveData||Un(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=me(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Tt(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[p,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=p===Rt(location);if(s||c.reload&&(!w||!u)){Ie({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Dt(R),t(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await ut({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(vt(o,x,!1))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const p=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&p.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(p).toString(),ut({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(V={},a===R)return;const s=B[a],i=n.state[de]??{},o=new URL(n.state[Xe]??location.href),c=n.state[J],l=v.url?Rt(location)===Rt(v.url):!1;if(c===T&&(be||l)){i!==U.state&&(U.state=i),t(o),B[R]=Nt(),s&&scrollTo(s.x,s.y),R=a;return}const u=a-R;await ut({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=a,T=c},block:()=>{history.go(-u)},nav_token:V})}else if(!K){const a=new URL(location.href);t(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[G]:++R,[J]:T},"",location.href))});for(const n of document.querySelectorAll("link"))_n.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){v.url=U.url=n,$.page.set(Ht(U)),$.page.notify()}}async function Pn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Vt=!0;const l=new URL(location.href);let p;({params:a={},route:s={id:null}}=await At(l,!1)||{}),p=Ft.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(d,h)=>{const y=o[h];return y!=null&&y.uses&&(y.uses=Te(y.uses)),Gt({loader:A.nodes[d],url:l,params:a,route:s,parent:async()=>{const S={};for(let I=0;I<h;I+=1)Object.assign(S,(await f[I]).data);return S},server_data_node:Mt(y)})}),m=await Promise.all(f);if(p){const d=p.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}u=yt({url:l,params:a,branch:m,status:e,error:n,form:c,route:p??null})}catch(f){if(f instanceof jt){await H(new URL(f.location,location.href));return}u=await kt({status:dt(f),error:await M(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Ee(u,t,w)}async function Le(t,e){var s;const n=new URL(t);n.pathname=yn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(hn,"1"),n.searchParams.append(un,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new bt(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function p(f){return cn(f,{...A.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const d=u.indexOf(`
`);if(d===-1)break;const h=JSON.parse(u.slice(0,d));if(u=u.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(w=h.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=Te(y.uses),y.data=p(y.data))}),i(h);else if(h.type==="chunk"){const{id:y,data:S,error:I}=h,g=o.get(y);o.delete(y),I?g.reject(p(I)):g.fulfil(p(S))}}}})}function Te(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Cn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function xe(t,e,n,r){var c,l;let a,s;const i=new Promise((p,u)=>{a=p,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Ht(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function On(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{qn as a,Dn as l,U as p,$ as s};
