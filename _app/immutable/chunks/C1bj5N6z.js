import{n as c,k as a,B as p,j as d,i as l,C as m}from"./0iZ-Qd5K.js";function g(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function h(e,n,s){if(e==null)return n(void 0),c;const u=a(()=>e.subscribe(n,s));return u.unsubscribe?()=>u.unsubscribe():u}const i=[];function k(e,n=c){let s=null;const u=new Set;function r(o){if(p(e,o)&&(e=o,s)){const f=!i.length;for(const t of u)t[1](),i.push(t,e);if(f){for(let t=0;t<i.length;t+=2)i[t][0](i[t+1]);i.length=0}}}function b(o){r(o(e))}function _(o,f=c){const t=[o,f];return u.add(t),u.size===1&&(s=n(r,b)||c),o(e),()=>{u.delete(t),u.size===0&&s&&(s(),s=null)}}return{set:r,update:b,subscribe:_}}function q(e){let n;return h(e,s=>n=s)(),n}function x(e){l===null&&g(),m&&l.l!==null?w(l).m.push(e):d(()=>{const n=a(e);if(typeof n=="function")return n})}function w(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{q as g,x as o,h as s,k as w};
