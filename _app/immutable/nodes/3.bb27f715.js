import{s as j,e as q,f as E}from"../chunks/scheduler.774070a8.js";import{S as H,i as I,g as _,s as y,h as d,j as N,z as k,c as T,f as C,k as v,a as S,x as p,y as V,d as h,b as z,t as x,A,r as O,u as P,v as U,w as Z,p as F}from"../chunks/index.16e0dac4.js";import{e as L}from"../chunks/each.e59479a4.js";import{b as J}from"../chunks/paths.ec1b6f65.js";import{G as K}from"../chunks/goal.90ffa559.js";import{g as Q,T as R,a as D}from"../chunks/stores.fa39917c.js";function G(r,e,o){const l=r.slice();return l[2]=e[o],l}function B(r){let e,o;return e=new K({props:{goal:r[2]}}),{c(){O(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,i){U(e,l,i),o=!0},p(l,i){const c={};i&1&&(c.goal=l[2]),e.$set(c)},i(l){o||(h(e.$$.fragment,l),o=!0)},o(l){x(e.$$.fragment,l),o=!1},d(l){Z(e,l)}}}function W(r){let e,o,l=`<a class="h-full w-12 aspect-square" href="${J}/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"></path></svg></a> <div class="text-5xl font-bold text-transparent">Test</div>`,i,c,u,w="New Goal",m,g,$,f=L(r[0]),t=[];for(let s=0;s<f.length;s+=1)t[s]=B(G(r,f,s));const M=s=>x(t[s],1,1,()=>{t[s]=null});return{c(){e=_("div"),o=_("div"),o.innerHTML=l,i=y();for(let s=0;s<t.length;s+=1)t[s].c();c=y(),u=_("button"),u.textContent=w,this.h()},l(s){e=d(s,"DIV",{class:!0});var n=N(e);o=d(n,"DIV",{class:!0,"data-svelte-h":!0}),k(o)!=="svelte-130shtk"&&(o.innerHTML=l),i=T(n);for(let a=0;a<t.length;a+=1)t[a].l(n);c=T(n),u=d(n,"BUTTON",{class:!0,"data-svelte-h":!0}),k(u)!=="svelte-70g3e6"&&(u.textContent=w),n.forEach(C),this.h()},h(){v(o,"class","flex flex-row justify-between py-2"),v(u,"class","text-center p-6 text-2xl text-neutral-300 rounded-lg outline outline-1 outline-neutral-400 "),v(e,"class","flex flex-col m-7 gap-4")},m(s,n){S(s,e,n),p(e,o),p(e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);p(e,c),p(e,u),m=!0,g||($=V(u,"click",r[1]),g=!0)},p(s,[n]){if(n&1){f=L(s[0]);let a;for(a=0;a<f.length;a+=1){const b=G(s,f,a);t[a]?(t[a].p(b,n),h(t[a],1)):(t[a]=B(b),t[a].c(),h(t[a],1),t[a].m(e,c))}for(F(),a=f.length;a<t.length;a+=1)M(a);z()}},i(s){if(!m){for(let n=0;n<f.length;n+=1)h(t[n]);m=!0}},o(s){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)x(t[n]);m=!1},d(s){s&&C(e),A(t,s),g=!1,$()}}}function X(r,e,o){let l;q(r,D,c=>o(0,l=c));function i(){E(D,l=[...l,{name:"",lastDown:Q(),amount:2,per:R.Day,time:0}],l)}return[l,i]}class ne extends H{constructor(e){super(),I(this,e,X,W,j,{})}}export{ne as component};