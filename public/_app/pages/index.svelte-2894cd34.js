import{S as Z,i as J,s as Q,e as w,t as A,k as D,c as x,a as S,h as M,d as g,m as V,b as l,g as H,K as c,j as L,L as z,N as se,F as U,G as X,I as ne,l as ve,w as O,x as R,y as Y,q as N,o as B,B as K,n as Pe,Y as je,p as He,Z as Ne,M as te,H as ze}from"../chunks/vendor-3129e329.js";import{m as F,a as Be,b as Le,c as Te,d as qe,t as We,h as Ge}from"../chunks/settings-e23a3c89.js";import{F as Fe}from"../chunks/FaIcon-49f777b3.js";import{C as Oe}from"../chunks/Cta-fc675088.js";import"../chunks/stores-40c4df82.js";function ge(d,e,t){const s=d.slice();return s[2]=e[t],s}function pe(d){let e,t,s=d[2][0]+"",i,a,E,b,h,_,f=d[2][1]+"",r,p;return{c(){e=w("tr"),t=w("td"),i=A(s),a=A(":"),b=D(),h=w("td"),_=w("span"),r=A(f),p=D(),this.h()},l(u){e=x(u,"TR",{class:!0});var m=S(e);t=x(m,"TD",{class:!0});var n=S(t);i=M(n,s),a=M(n,":"),n.forEach(g),b=V(m),h=x(m,"TD",{});var o=S(h);_=x(o,"SPAN",{class:!0});var v=S(_);r=M(v,f),v.forEach(g),o.forEach(g),p=V(m),m.forEach(g),this.h()},h(){l(t,"class",E=d[0].colorScheme+" text-white rounded px-2 py-1 capitalize"),l(_,"class","ml-10"),l(e,"class","mb-2")},m(u,m){H(u,e,m),c(e,t),c(t,i),c(t,a),c(e,b),c(e,h),c(h,_),c(_,r),c(e,p)},p(u,m){m&2&&s!==(s=u[2][0]+"")&&L(i,s),m&1&&E!==(E=u[0].colorScheme+" text-white rounded px-2 py-1 capitalize")&&l(t,"class",E),m&2&&f!==(f=u[2][1]+"")&&L(r,f)},d(u){u&&g(e)}}}function Re(d){let e,t,s,i,a,E,b,h,_=d[1].description+"",f,r,p,u,m,n=Object.entries(d[1].details),o=[];for(let v=0;v<n.length;v+=1)o[v]=pe(ge(d,n,v));return{c(){e=w("div"),t=w("h2"),s=w("span"),i=A("About"),E=A(" Me"),b=D(),h=w("p"),f=A(_),r=D(),p=w("div"),u=w("table"),m=w("tbody");for(let v=0;v<o.length;v+=1)o[v].c();this.h()},l(v){e=x(v,"DIV",{class:!0});var k=S(e);t=x(k,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var y=S(t);s=x(y,"SPAN",{class:!0});var I=S(s);i=M(I,"About"),I.forEach(g),E=M(y," Me"),y.forEach(g),b=V(k),h=x(k,"P",{"data-sal":!0,"data-sal-duration":!0});var P=S(h);f=M(P,_),P.forEach(g),r=V(k),p=x(k,"DIV",{class:!0,"data-sal":!0,"data-sal-duration":!0});var j=S(p);u=x(j,"TABLE",{class:!0});var $=S(u);m=x($,"TBODY",{});var C=S(m);for(let T=0;T<o.length;T+=1)o[T].l(C);C.forEach(g),$.forEach(g),j.forEach(g),k.forEach(g),this.h()},h(){l(s,"class",a=d[0].textColorScheme),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"data-sal","slide-up"),l(h,"data-sal-duration","800"),l(u,"class","svelte-a9nfoe"),l(p,"class","details mt-3 md:mt-6"),l(p,"data-sal","slide-up"),l(p,"data-sal-duration","800"),l(e,"class","about mb-8 md:mb-16 relative z-20")},m(v,k){H(v,e,k),c(e,t),c(t,s),c(s,i),c(t,E),c(e,b),c(e,h),c(h,f),c(e,r),c(e,p),c(p,u),c(u,m);for(let y=0;y<o.length;y+=1)o[y].m(m,null)},p(v,[k]){if(k&1&&a!==(a=v[0].textColorScheme)&&l(s,"class",a),k&2&&_!==(_=v[1].description+"")&&L(f,_),k&3){n=Object.entries(v[1].details);let y;for(y=0;y<n.length;y+=1){const I=ge(v,n,y);o[y]?o[y].p(I,k):(o[y]=pe(I),o[y].c(),o[y].m(m,null))}for(;y<o.length;y+=1)o[y].d(1);o.length=n.length}},i:z,o:z,d(v){v&&g(e),se(o,v)}}}function Ye(d,e,t){let{mainSettings:s,about:i}=e;return d.$$set=a=>{"mainSettings"in a&&t(0,s=a.mainSettings),"about"in a&&t(1,i=a.about)},[s,i]}class Ke extends Z{constructor(e){super();J(this,e,Ye,Re,Q,{mainSettings:0,about:1})}}function Ze(d){let e,t,s,i,a,E,b,h,_,f,r=d[0].skillLevel+"",p,u,m,n,o,v,k=d[0].name+"",y;return{c(){e=w("div"),t=U("svg"),s=U("circle"),i=U("circle"),a=U("circle"),h=U("g"),_=U("text"),f=U("tspan"),p=A(r),u=A("%"),n=D(),o=U("text"),v=U("tspan"),y=A(k),this.h()},l(I){e=x(I,"DIV",{class:!0,"data-sal":!0,"data-sal-duration":!0});var P=S(e);t=X(P,"svg",{width:!0,height:!0,viewBox:!0,class:!0});var j=S(t);s=X(j,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0}),S(s).forEach(g),i=X(j,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0}),S(i).forEach(g),a=X(j,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,"stroke-dasharray":!0,"stroke-dashoffset":!0});var $=S(a);$.forEach(g),h=X(j,"g",{class:!0});var C=S(h);_=X(C,"text",{y:!0,transform:!0});var T=S(_);f=X(T,"tspan",{x:!0,"text-anchor":!0,class:!0});var q=S(f);p=M(q,r),u=M(q,"%"),q.forEach(g),n=V(T),T.forEach(g),o=X(C,"text",{y:!0,transform:!0});var ee=S(o);v=X(ee,"tspan",{x:!0,"text-anchor":!0,class:!0});var le=S(v);y=M(le,k),le.forEach(g),ee.forEach(g),C.forEach(g),j.forEach(g),P.forEach(g),this.h()},h(){l(s,"class","donut-hole"),l(s,"cx","20"),l(s,"cy","20"),l(s,"r","15.91549430918954"),l(s,"fill","#fff"),l(i,"class","donut-ring svelte-1p01tcy"),l(i,"cx","20"),l(i,"cy","20"),l(i,"r","15.91549430918954"),l(i,"fill","transparent"),l(i,"stroke-width","3.5"),l(a,"class",E=ne(`${d[0].color} stroke-current donut-segment donut-segment-${d[1]}`)+" svelte-1p01tcy"),l(a,"cx","20"),l(a,"cy","20"),l(a,"r","15.91549430918954"),l(a,"fill","transparent"),l(a,"stroke-width","3.5"),l(a,"stroke-dasharray",b=`${d[0].skillLevel} ${100-d[0].skillLevel}`),l(a,"stroke-dashoffset","25"),l(f,"x","50%"),l(f,"text-anchor","middle"),l(f,"class",m=ne(`${d[0].color} donut-percent`)+" svelte-1p01tcy"),l(_,"y","50%"),l(_,"transform","translate(0, 2)"),l(v,"x","50%"),l(v,"text-anchor","middle"),l(v,"class","text-gray-800 font-light donut-data svelte-1p01tcy"),l(o,"y","60%"),l(o,"transform","translate(0, 2)"),l(h,"class","fill-current"),l(t,"width","100%"),l(t,"height","100%"),l(t,"viewBox","0 0 40 40"),l(t,"class","donut"),l(e,"class","svg-item svelte-1p01tcy"),l(e,"data-sal","slide-up"),l(e,"data-sal-duration","800")},m(I,P){H(I,e,P),c(e,t),c(t,s),c(t,i),c(t,a),c(t,h),c(h,_),c(_,f),c(f,p),c(f,u),c(_,n),c(h,o),c(o,v),c(v,y)},p(I,[P]){P&3&&E!==(E=ne(`${I[0].color} stroke-current donut-segment donut-segment-${I[1]}`)+" svelte-1p01tcy")&&l(a,"class",E),P&1&&b!==(b=`${I[0].skillLevel} ${100-I[0].skillLevel}`)&&l(a,"stroke-dasharray",b),P&1&&r!==(r=I[0].skillLevel+"")&&L(p,r),P&1&&m!==(m=ne(`${I[0].color} donut-percent`)+" svelte-1p01tcy")&&l(f,"class",m),P&1&&k!==(k=I[0].name+"")&&L(y,k)},i:z,o:z,d(I){I&&g(e)}}}function Je(d,e,t){let{item:s,index:i}=e;return d.$$set=a=>{"item"in a&&t(0,s=a.item),"index"in a&&t(1,i=a.index)},[s,i]}class Qe extends Z{constructor(e){super();J(this,e,Je,Ze,Q,{item:0,index:1})}}function be(d,e,t){const s=d.slice();return s[2]=e[t],s[4]=t,s}function $e(d,e){let t,s,i;return s=new Qe({props:{item:e[2],index:e[4]}}),{key:d,first:null,c(){t=ve(),O(s.$$.fragment),this.h()},l(a){t=ve(),R(s.$$.fragment,a),this.h()},h(){this.first=t},m(a,E){H(a,t,E),Y(s,a,E),i=!0},p(a,E){e=a;const b={};E&1&&(b.item=e[2]),E&1&&(b.index=e[4]),s.$set(b)},i(a){i||(N(s.$$.fragment,a),i=!0)},o(a){B(s.$$.fragment,a),i=!1},d(a){a&&g(t),K(s,a)}}}function Ue(d){let e,t,s,i,a,E,b,h,_=[],f=new Map,r,p=d[0];const u=m=>m[2].color;for(let m=0;m<p.length;m+=1){let n=be(d,p,m),o=u(n);f.set(o,_[m]=$e(o,n))}return{c(){e=w("div"),t=w("h2"),s=A("My "),i=w("span"),a=A("Skills"),b=D(),h=w("div");for(let m=0;m<_.length;m+=1)_[m].c();this.h()},l(m){e=x(m,"DIV",{class:!0});var n=S(e);t=x(n,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var o=S(t);s=M(o,"My "),i=x(o,"SPAN",{class:!0});var v=S(i);a=M(v,"Skills"),v.forEach(g),o.forEach(g),b=V(n),h=x(n,"DIV",{class:!0});var k=S(h);for(let y=0;y<_.length;y+=1)_[y].l(k);k.forEach(g),n.forEach(g),this.h()},h(){l(i,"class",E=d[1].textColorScheme),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"class","grid grid-cols-2 md:grid-cols-3 gap-4 py-3 items-center"),l(e,"class","works mb-8 md:mb-16")},m(m,n){H(m,e,n),c(e,t),c(t,s),c(t,i),c(i,a),c(e,b),c(e,h);for(let o=0;o<_.length;o+=1)_[o].m(h,null);r=!0},p(m,[n]){(!r||n&2&&E!==(E=m[1].textColorScheme))&&l(i,"class",E),n&1&&(p=m[0],Pe(),_=je(_,n,u,1,m,p,f,h,Ne,$e,null,be),He())},i(m){if(!r){for(let n=0;n<p.length;n+=1)N(_[n]);r=!0}},o(m){for(let n=0;n<_.length;n+=1)B(_[n]);r=!1},d(m){m&&g(e);for(let n=0;n<_.length;n+=1)_[n].d()}}}function Xe(d,e,t){let{skills:s,mainSettings:i}=e;return d.$$set=a=>{"skills"in a&&t(0,s=a.skills),"mainSettings"in a&&t(1,i=a.mainSettings)},[s,i]}class et extends Z{constructor(e){super();J(this,e,Xe,Ue,Q,{skills:0,mainSettings:1})}}function ke(d,e,t){const s=d.slice();return s[2]=e[t],s}function Ee(d){let e,t,s,i,a,E,b,h=d[2].title+"",_,f,r,p=d[2].description+"",u,m,n;return s=new Fe({props:{icon:d[2].icon,class:"text-white text-xl"}}),{c(){e=w("div"),t=w("div"),O(s.$$.fragment),a=D(),E=w("div"),b=w("h2"),_=A(h),f=D(),r=w("p"),u=A(p),m=D(),this.h()},l(o){e=x(o,"DIV",{class:!0,"data-sal":!0,"data-sal-duration":!0});var v=S(e);t=x(v,"DIV",{class:!0});var k=S(t);R(s.$$.fragment,k),k.forEach(g),a=V(v),E=x(v,"DIV",{class:!0});var y=S(E);b=x(y,"H2",{class:!0});var I=S(b);_=M(I,h),I.forEach(g),f=V(y),r=x(y,"P",{class:!0});var P=S(r);u=M(P,p),P.forEach(g),y.forEach(g),m=V(v),v.forEach(g),this.h()},h(){l(t,"class",i=`grid justify-items-center items-center icon w-12 h-12 rounded-full ${d[1].colorScheme} mb-2`),l(b,"class","font-bold mb-2"),l(r,"class","text-center mb-2"),l(E,"class","grid justify-items-center"),l(e,"class","grid border justify-items-center rounded py-4 px-2"),l(e,"data-sal","slide-up"),l(e,"data-sal-duration","800")},m(o,v){H(o,e,v),c(e,t),Y(s,t,null),c(e,a),c(e,E),c(E,b),c(b,_),c(E,f),c(E,r),c(r,u),c(e,m),n=!0},p(o,v){const k={};v&1&&(k.icon=o[2].icon),s.$set(k),(!n||v&2&&i!==(i=`grid justify-items-center items-center icon w-12 h-12 rounded-full ${o[1].colorScheme} mb-2`))&&l(t,"class",i),(!n||v&1)&&h!==(h=o[2].title+"")&&L(_,h),(!n||v&1)&&p!==(p=o[2].description+"")&&L(u,p)},i(o){n||(N(s.$$.fragment,o),n=!0)},o(o){B(s.$$.fragment,o),n=!1},d(o){o&&g(e),K(s)}}}function tt(d){let e,t,s,i,a,E,b,h,_,f=d[0],r=[];for(let u=0;u<f.length;u+=1)r[u]=Ee(ke(d,f,u));const p=u=>B(r[u],1,1,()=>{r[u]=null});return{c(){e=w("div"),t=w("h2"),s=A("My "),i=w("span"),a=A("Services"),b=D(),h=w("div");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=x(u,"DIV",{class:!0});var m=S(e);t=x(m,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var n=S(t);s=M(n,"My "),i=x(n,"SPAN",{class:!0});var o=S(i);a=M(o,"Services"),o.forEach(g),n.forEach(g),b=V(m),h=x(m,"DIV",{class:!0});var v=S(h);for(let k=0;k<r.length;k+=1)r[k].l(v);v.forEach(g),m.forEach(g),this.h()},h(){l(i,"class",E=`${d[1].textColorScheme}`),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"class","grid md:grid-cols-2 grid-cols-1 gap-4 mb-3 md:mb-5"),l(e,"class","services mb-8 md:mb-16")},m(u,m){H(u,e,m),c(e,t),c(t,s),c(t,i),c(i,a),c(e,b),c(e,h);for(let n=0;n<r.length;n+=1)r[n].m(h,null);_=!0},p(u,[m]){if((!_||m&2&&E!==(E=`${u[1].textColorScheme}`))&&l(i,"class",E),m&3){f=u[0];let n;for(n=0;n<f.length;n+=1){const o=ke(u,f,n);r[n]?(r[n].p(o,m),N(r[n],1)):(r[n]=Ee(o),r[n].c(),N(r[n],1),r[n].m(h,null))}for(Pe(),n=f.length;n<r.length;n+=1)p(n);He()}},i(u){if(!_){for(let m=0;m<f.length;m+=1)N(r[m]);_=!0}},o(u){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)B(r[m]);_=!1},d(u){u&&g(e),se(r,u)}}}function lt(d,e,t){let{services:s,mainSettings:i}=e;return d.$$set=a=>{"services"in a&&t(0,s=a.services),"mainSettings"in a&&t(1,i=a.mainSettings)},[s,i]}class st extends Z{constructor(e){super();J(this,e,lt,tt,Q,{services:0,mainSettings:1})}}function Se(d,e,t){const s=d.slice();return s[2]=e[t].metadata,s[3]=e[t].path,s}function we(d){let e,t,s,i,a,E,b,h=d[2].title+"",_,f,r,p=d[2].description+"",u,m,n;return{c(){e=w("a"),t=w("div"),s=w("img"),E=D(),b=w("h3"),_=A(h),f=D(),r=w("p"),u=A(p),m=D(),this.h()},l(o){e=x(o,"A",{href:!0});var v=S(e);t=x(v,"DIV",{"data-sal":!0,"data-sal-duration":!0});var k=S(t);s=x(k,"IMG",{width:!0,height:!0,loading:!0,class:!0,src:!0,alt:!0}),E=V(k),b=x(k,"H3",{class:!0});var y=S(b);_=M(y,h),y.forEach(g),f=V(k),r=x(k,"P",{class:!0});var I=S(r);u=M(I,p),I.forEach(g),k.forEach(g),m=V(v),v.forEach(g),this.h()},h(){l(s,"width","200"),l(s,"height","150"),l(s,"loading","lazy"),l(s,"class","lazyload h-44 w-full object-cover object-center rounded"),te(s.src,i=d[2].image)||l(s,"src",i),l(s,"alt",a=d[2].title),l(b,"class","font-semibold text-center"),l(r,"class","text-sm text-center"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(e,"href",n=d[3].replace(".md",""))},m(o,v){H(o,e,v),c(e,t),c(t,s),c(t,E),c(t,b),c(b,_),c(t,f),c(t,r),c(r,u),c(e,m)},p(o,v){v&2&&!te(s.src,i=o[2].image)&&l(s,"src",i),v&2&&a!==(a=o[2].title)&&l(s,"alt",a),v&2&&h!==(h=o[2].title+"")&&L(_,h),v&2&&p!==(p=o[2].description+"")&&L(u,p),v&2&&n!==(n=o[3].replace(".md",""))&&l(e,"href",n)},d(o){o&&g(e)}}}function at(d){let e,t,s,i,a,E,b,h,_,f,r,p,u,m=d[1],n=[];for(let o=0;o<m.length;o+=1)n[o]=we(Se(d,m,o));return{c(){e=w("div"),t=w("h2"),s=A("My "),i=w("span"),a=A("Works"),b=D(),h=w("div");for(let o=0;o<n.length;o+=1)n[o].c();_=D(),f=w("p"),r=w("a"),p=A("All Works"),this.h()},l(o){e=x(o,"DIV",{class:!0});var v=S(e);t=x(v,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var k=S(t);s=M(k,"My "),i=x(k,"SPAN",{class:!0});var y=S(i);a=M(y,"Works"),y.forEach(g),k.forEach(g),b=V(v),h=x(v,"DIV",{class:!0});var I=S(h);for(let $=0;$<n.length;$+=1)n[$].l(I);I.forEach(g),_=V(v),f=x(v,"P",{class:!0});var P=S(f);r=x(P,"A",{"sveltekit:prefetch":!0,"sveltekit:noscroll":!0,class:!0,href:!0});var j=S(r);p=M(j,"All Works"),j.forEach(g),P.forEach(g),v.forEach(g),this.h()},h(){l(i,"class",E=`${d[0].textColorScheme}`),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"class","grid grid-cols-1 md:grid-cols-2 gap-6 py-3"),l(r,"sveltekit:prefetch",""),l(r,"sveltekit:noscroll",""),l(r,"class",u=`${d[0].textColorScheme} underline hover:text-blue-600`),l(r,"href","/works/"),l(f,"class","text-center py-2"),l(e,"class","works mb-8 md:mb-16")},m(o,v){H(o,e,v),c(e,t),c(t,s),c(t,i),c(i,a),c(e,b),c(e,h);for(let k=0;k<n.length;k+=1)n[k].m(h,null);c(e,_),c(e,f),c(f,r),c(r,p)},p(o,[v]){if(v&1&&E!==(E=`${o[0].textColorScheme}`)&&l(i,"class",E),v&2){m=o[1];let k;for(k=0;k<m.length;k+=1){const y=Se(o,m,k);n[k]?n[k].p(y,v):(n[k]=we(y),n[k].c(),n[k].m(h,null))}for(;k<n.length;k+=1)n[k].d(1);n.length=m.length}v&1&&u!==(u=`${o[0].textColorScheme} underline hover:text-blue-600`)&&l(r,"class",u)},i:z,o:z,d(o){o&&g(e),se(n,o)}}}function rt(d,e,t){let{mainSettings:s,works:i}=e;return d.$$set=a=>{"mainSettings"in a&&t(0,s=a.mainSettings),"works"in a&&t(1,i=a.works)},[s,i]}class it extends Z{constructor(e){super();J(this,e,rt,at,Q,{mainSettings:0,works:1})}}function xe(d,e,t){const s=d.slice();return s[2]=e[t],s}function ye(d){let e,t,s,i,a,E;return{c(){e=w("a"),t=w("img"),a=D(),this.h()},l(b){e=x(b,"A",{href:!0});var h=S(e);t=x(h,"IMG",{width:!0,height:!0,loading:!0,class:!0,src:!0,alt:!0,"data-sal":!0,"data-sal-duration":!0}),a=V(h),h.forEach(g),this.h()},h(){l(t,"width","120"),l(t,"height","50"),l(t,"loading","lazy"),l(t,"class","lazyload w-full"),te(t.src,s=d[2].image)||l(t,"src",s),l(t,"alt",i=d[2].name),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(e,"href",E=d[2].link)},m(b,h){H(b,e,h),c(e,t),c(e,a)},p(b,h){h&2&&!te(t.src,s=b[2].image)&&l(t,"src",s),h&2&&i!==(i=b[2].name)&&l(t,"alt",i),h&2&&E!==(E=b[2].link)&&l(e,"href",E)},d(b){b&&g(e)}}}function nt(d){let e,t,s,i,a,E,b,h,_=d[1],f=[];for(let r=0;r<_.length;r+=1)f[r]=ye(xe(d,_,r));return{c(){e=w("div"),t=w("h2"),s=A("My "),i=w("span"),a=A("Clients"),b=D(),h=w("div");for(let r=0;r<f.length;r+=1)f[r].c();this.h()},l(r){e=x(r,"DIV",{class:!0});var p=S(e);t=x(p,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var u=S(t);s=M(u,"My "),i=x(u,"SPAN",{class:!0});var m=S(i);a=M(m,"Clients"),m.forEach(g),u.forEach(g),b=V(p),h=x(p,"DIV",{class:!0});var n=S(h);for(let o=0;o<f.length;o+=1)f[o].l(n);n.forEach(g),p.forEach(g),this.h()},h(){l(i,"class",E=d[0].textColorScheme),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"class","grid grid-cols-2 md:grid-cols-4 gap-4 py-3 items-center"),l(e,"class","works mb-8 md:mb-16")},m(r,p){H(r,e,p),c(e,t),c(t,s),c(t,i),c(i,a),c(e,b),c(e,h);for(let u=0;u<f.length;u+=1)f[u].m(h,null)},p(r,[p]){if(p&1&&E!==(E=r[0].textColorScheme)&&l(i,"class",E),p&2){_=r[1];let u;for(u=0;u<_.length;u+=1){const m=xe(r,_,u);f[u]?f[u].p(m,p):(f[u]=ye(m),f[u].c(),f[u].m(h,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=_.length}},i:z,o:z,d(r){r&&g(e),se(f,r)}}}function ot(d,e,t){let{mainSettings:s,clients:i}=e;return d.$$set=a=>{"mainSettings"in a&&t(0,s=a.mainSettings),"clients"in a&&t(1,i=a.clients)},[s,i]}class ct extends Z{constructor(e){super();J(this,e,ot,nt,Q,{mainSettings:0,clients:1})}}function Ie(d,e,t){const s=d.slice();return s[2]=e[t].metadata,s[3]=e[t].path,s}function De(d){let e,t,s,i,a,E,b,h=d[2].title+"",_,f,r,p=d[2].description+"",u,m,n;return{c(){e=w("a"),t=w("div"),s=w("img"),E=D(),b=w("h3"),_=A(h),f=D(),r=w("p"),u=A(p),m=D(),this.h()},l(o){e=x(o,"A",{href:!0});var v=S(e);t=x(v,"DIV",{"data-sal":!0,"data-sal-duration":!0});var k=S(t);s=x(k,"IMG",{width:!0,height:!0,loading:!0,class:!0,src:!0,alt:!0}),E=V(k),b=x(k,"H3",{class:!0});var y=S(b);_=M(y,h),y.forEach(g),f=V(k),r=x(k,"P",{class:!0});var I=S(r);u=M(I,p),I.forEach(g),k.forEach(g),m=V(v),v.forEach(g),this.h()},h(){l(s,"width","200"),l(s,"height","150"),l(s,"loading","lazy"),l(s,"class","lazyload h-44 w-full object-cover object-center rounded"),te(s.src,i=d[2].image)||l(s,"src",i),l(s,"alt",a=d[2].title),l(b,"class","font-semibold text-center"),l(r,"class","text-sm text-center"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(e,"href",n=d[3].replace(".md",""))},m(o,v){H(o,e,v),c(e,t),c(t,s),c(t,E),c(t,b),c(b,_),c(t,f),c(t,r),c(r,u),c(e,m)},p(o,v){v&2&&!te(s.src,i=o[2].image)&&l(s,"src",i),v&2&&a!==(a=o[2].title)&&l(s,"alt",a),v&2&&h!==(h=o[2].title+"")&&L(_,h),v&2&&p!==(p=o[2].description+"")&&L(u,p),v&2&&n!==(n=o[3].replace(".md",""))&&l(e,"href",n)},d(o){o&&g(e)}}}function ut(d){let e,t,s,i,a,E,b,h,_,f,r,p,u,m=d[1],n=[];for(let o=0;o<m.length;o+=1)n[o]=De(Ie(d,m,o));return{c(){e=w("div"),t=w("h2"),s=A("My "),i=w("span"),a=A("Blog"),b=D(),h=w("div");for(let o=0;o<n.length;o+=1)n[o].c();_=D(),f=w("p"),r=w("a"),p=A("All Posts"),this.h()},l(o){e=x(o,"DIV",{class:!0});var v=S(e);t=x(v,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var k=S(t);s=M(k,"My "),i=x(k,"SPAN",{class:!0});var y=S(i);a=M(y,"Blog"),y.forEach(g),k.forEach(g),b=V(v),h=x(v,"DIV",{class:!0});var I=S(h);for(let $=0;$<n.length;$+=1)n[$].l(I);I.forEach(g),_=V(v),f=x(v,"P",{class:!0});var P=S(f);r=x(P,"A",{"sveltekit:prefetch":!0,"sveltekit:noscroll":!0,class:!0,href:!0});var j=S(r);p=M(j,"All Posts"),j.forEach(g),P.forEach(g),v.forEach(g),this.h()},h(){l(i,"class",E=`${d[0].textColorScheme}`),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"class","grid grid-cols-1 md:grid-cols-2 gap-6 py-3"),l(r,"sveltekit:prefetch",""),l(r,"sveltekit:noscroll",""),l(r,"class",u=`${d[0].textColorScheme} underline hover:text-blue-600`),l(r,"href","/blog/"),l(f,"class","text-center py-2"),l(e,"class","blogs mb-8 md:mb-16")},m(o,v){H(o,e,v),c(e,t),c(t,s),c(t,i),c(i,a),c(e,b),c(e,h);for(let k=0;k<n.length;k+=1)n[k].m(h,null);c(e,_),c(e,f),c(f,r),c(r,p)},p(o,[v]){if(v&1&&E!==(E=`${o[0].textColorScheme}`)&&l(i,"class",E),v&2){m=o[1];let k;for(k=0;k<m.length;k+=1){const y=Ie(o,m,k);n[k]?n[k].p(y,v):(n[k]=De(y),n[k].c(),n[k].m(h,null))}for(;k<n.length;k+=1)n[k].d(1);n.length=m.length}v&1&&u!==(u=`${o[0].textColorScheme} underline hover:text-blue-600`)&&l(r,"class",u)},i:z,o:z,d(o){o&&g(e),se(n,o)}}}function dt(d,e,t){let{mainSettings:s,posts:i}=e;return d.$$set=a=>{"mainSettings"in a&&t(0,s=a.mainSettings),"posts"in a&&t(1,i=a.posts)},[s,i]}class ft extends Z{constructor(e){super();J(this,e,dt,ut,Q,{mainSettings:0,posts:1})}}function Ve(d,e,t){const s=d.slice();return s[2]=e[t],s}function Ce(d){let e,t,s,i,a,E,b,h,_,f,r,p,u,m=d[2].review+"",n,o,v,k,y,I,P,j=d[2].name+"",$,C,T,q,ee=d[2].social+"",le,oe;return{c(){e=w("div"),t=w("div"),s=w("div"),i=w("div"),a=w("img"),h=D(),_=w("div"),f=w("div"),r=w("i"),p=D(),u=w("p"),n=A(m),o=D(),v=w("div"),k=w("i"),y=D(),I=w("div"),P=w("p"),$=A(j),T=D(),q=w("p"),le=A(ee),oe=D(),this.h()},l(W){e=x(W,"DIV",{class:!0,"data-sal":!0,"data-sal-duration":!0});var G=S(e);t=x(G,"DIV",{class:!0});var ae=S(t);s=x(ae,"DIV",{class:!0});var ce=S(s);i=x(ce,"DIV",{class:!0});var ue=S(i);a=x(ue,"IMG",{width:!0,height:!0,loading:!0,class:!0,src:!0,alt:!0}),ue.forEach(g),ce.forEach(g),h=V(ae),_=x(ae,"DIV",{class:!0});var re=S(_);f=x(re,"DIV",{class:!0});var de=S(f);r=x(de,"I",{class:!0}),S(r).forEach(g),de.forEach(g),p=V(re),u=x(re,"P",{class:!0});var fe=S(u);n=M(fe,m),fe.forEach(g),o=V(re),v=x(re,"DIV",{class:!0});var he=S(v);k=x(he,"I",{class:!0}),S(k).forEach(g),he.forEach(g),re.forEach(g),y=V(ae),I=x(ae,"DIV",{class:!0});var ie=S(I);P=x(ie,"P",{class:!0});var me=S(P);$=M(me,j),me.forEach(g),T=V(ie),q=x(ie,"P",{class:!0});var _e=S(q);le=M(_e,ee),_e.forEach(g),ie.forEach(g),ae.forEach(g),oe=V(G),G.forEach(g),this.h()},h(){l(a,"width","65"),l(a,"height","65"),l(a,"loading","lazy"),l(a,"class","w-full"),te(a.src,E=d[2].image)||l(a,"src",E),l(a,"alt",b=d[2].name),l(i,"class","overflow-hidden rounded-full w-16 h-16 mx-auto shadow-lg"),l(s,"class","w-full pt-1 pb-3"),l(r,"class","fas fa-quote-left"),l(f,"class","text-3xl text-gray-300 text-left leading-tight h-3"),l(u,"class","text-sm md:text-base italic text-gray-600 text-center px-5"),l(k,"class","fas fa-quote-right"),l(v,"class","text-3xl text-gray-300 text-right leading-tight h-3 -mt-3"),l(_,"class","w-full mb-10"),l(P,"class",C=`text-md ${d[0].textColorScheme} font-bold text-center`),l(q,"class","text-xs text-gray-500 text-center"),l(I,"class","w-full"),l(t,"class","w-full mx-auto rounded-lg bg-white border shadow-lg px-5 pt-5 pb-10 text-gray-800"),l(e,"class","min-w-screen flex items-center justify-center mb-5"),l(e,"data-sal","slide-up"),l(e,"data-sal-duration","800")},m(W,G){H(W,e,G),c(e,t),c(t,s),c(s,i),c(i,a),c(t,h),c(t,_),c(_,f),c(f,r),c(_,p),c(_,u),c(u,n),c(_,o),c(_,v),c(v,k),c(t,y),c(t,I),c(I,P),c(P,$),c(I,T),c(I,q),c(q,le),c(e,oe)},p(W,G){G&2&&!te(a.src,E=W[2].image)&&l(a,"src",E),G&2&&b!==(b=W[2].name)&&l(a,"alt",b),G&2&&m!==(m=W[2].review+"")&&L(n,m),G&2&&j!==(j=W[2].name+"")&&L($,j),G&1&&C!==(C=`text-md ${W[0].textColorScheme} font-bold text-center`)&&l(P,"class",C),G&2&&ee!==(ee=W[2].social+"")&&L(le,ee)},d(W){W&&g(e)}}}function ht(d){let e,t,s,i,a,E,b,h=d[1],_=[];for(let f=0;f<h.length;f+=1)_[f]=Ce(Ve(d,h,f));return{c(){e=w("div"),t=w("h2"),s=w("span"),i=A("Testimonials"),E=D(),b=w("div");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){e=x(f,"DIV",{class:!0});var r=S(e);t=x(r,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var p=S(t);s=x(p,"SPAN",{class:!0});var u=S(s);i=M(u,"Testimonials"),u.forEach(g),p.forEach(g),E=V(r),b=x(r,"DIV",{class:!0});var m=S(b);for(let n=0;n<_.length;n+=1)_[n].l(m);m.forEach(g),r.forEach(g),this.h()},h(){l(s,"class",a=d[0].textColorScheme),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(b,"class","py-3"),l(e,"class","testimonials mb-8 md:mb-16")},m(f,r){H(f,e,r),c(e,t),c(t,s),c(s,i),c(e,E),c(e,b);for(let p=0;p<_.length;p+=1)_[p].m(b,null)},p(f,[r]){if(r&1&&a!==(a=f[0].textColorScheme)&&l(s,"class",a),r&3){h=f[1];let p;for(p=0;p<h.length;p+=1){const u=Ve(f,h,p);_[p]?_[p].p(u,r):(_[p]=Ce(u),_[p].c(),_[p].m(b,null))}for(;p<_.length;p+=1)_[p].d(1);_.length=h.length}},i:z,o:z,d(f){f&&g(e),se(_,f)}}}function mt(d,e,t){let{mainSettings:s,testimonials:i}=e;return d.$$set=a=>{"mainSettings"in a&&t(0,s=a.mainSettings),"testimonials"in a&&t(1,i=a.testimonials)},[s,i]}class _t extends Z{constructor(e){super();J(this,e,mt,ht,Q,{mainSettings:0,testimonials:1})}}function Ae(d,e,t){const s=d.slice();return s[2]=e[t],s}function Me(d){let e,t=d[2].hobby+"",s,i,a;return{c(){e=w("p"),s=A(t),i=D(),this.h()},l(E){e=x(E,"P",{class:!0,"data-sal":!0,"data-sal-duration":!0});var b=S(e);s=M(b,t),i=V(b),b.forEach(g),this.h()},h(){l(e,"class",a=`inline-block rounded-full text-white ${d[2].color} duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100`),l(e,"data-sal","slide-up"),l(e,"data-sal-duration","800")},m(E,b){H(E,e,b),c(e,s),c(e,i)},p(E,b){b&2&&t!==(t=E[2].hobby+"")&&L(s,t),b&2&&a!==(a=`inline-block rounded-full text-white ${E[2].color} duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100`)&&l(e,"class",a)},d(E){E&&g(e)}}}function vt(d){let e,t,s,i,a,E,b,h,_=d[1],f=[];for(let r=0;r<_.length;r+=1)f[r]=Me(Ae(d,_,r));return{c(){e=w("div"),t=w("h2"),s=A("My "),i=w("span"),a=A("Hobbies"),b=D(),h=w("div");for(let r=0;r<f.length;r+=1)f[r].c();this.h()},l(r){e=x(r,"DIV",{class:!0});var p=S(e);t=x(p,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var u=S(t);s=M(u,"My "),i=x(u,"SPAN",{class:!0});var m=S(i);a=M(m,"Hobbies"),m.forEach(g),u.forEach(g),b=V(p),h=x(p,"DIV",{});var n=S(h);for(let o=0;o<f.length;o+=1)f[o].l(n);n.forEach(g),p.forEach(g),this.h()},h(){l(i,"class",E=d[0].textColorScheme),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(e,"class","works mb-8 md:mb-16")},m(r,p){H(r,e,p),c(e,t),c(t,s),c(t,i),c(i,a),c(e,b),c(e,h);for(let u=0;u<f.length;u+=1)f[u].m(h,null)},p(r,[p]){if(p&1&&E!==(E=r[0].textColorScheme)&&l(i,"class",E),p&2){_=r[1];let u;for(u=0;u<_.length;u+=1){const m=Ae(r,_,u);f[u]?f[u].p(m,p):(f[u]=Me(m),f[u].c(),f[u].m(h,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=_.length}},i:z,o:z,d(r){r&&g(e),se(f,r)}}}function gt(d,e,t){let{mainSettings:s,hobbies:i}=e;return d.$$set=a=>{"mainSettings"in a&&t(0,s=a.mainSettings),"hobbies"in a&&t(1,i=a.hobbies)},[s,i]}class pt extends Z{constructor(e){super();J(this,e,gt,vt,Q,{mainSettings:0,hobbies:1})}}function bt(d){let e,t,s,i,a,E,b,h,_,f;return{c(){e=w("div"),t=w("h2"),s=w("span"),i=A("Hire"),E=A(" Me"),b=D(),h=w("a"),_=A("Hire Me"),this.h()},l(r){e=x(r,"DIV",{class:!0});var p=S(e);t=x(p,"H2",{class:!0,"data-sal":!0,"data-sal-duration":!0});var u=S(t);s=x(u,"SPAN",{class:!0});var m=S(s);i=M(m,"Hire"),m.forEach(g),E=M(u," Me"),u.forEach(g),b=V(p),h=x(p,"A",{class:!0,href:!0});var n=S(h);_=M(n,"Hire Me"),n.forEach(g),p.forEach(g),this.h()},h(){l(s,"class",a=d[0].textColorScheme),l(t,"class","font-bold text-xl pb-3 mb-3 border-b"),l(t,"data-sal","slide-up"),l(t,"data-sal-duration","800"),l(h,"class",f=`grid ${d[0].colorScheme} rounded px-4 py-3 text-center text-white font-bold hover:${d[0].colorAccent} transform duration-300`),l(h,"href","/contact/"),l(e,"class","hire mb-8 md:mb-16")},m(r,p){H(r,e,p),c(e,t),c(t,s),c(s,i),c(t,E),c(e,b),c(e,h),c(h,_)},p(r,[p]){p&1&&a!==(a=r[0].textColorScheme)&&l(s,"class",a),p&1&&f!==(f=`grid ${r[0].colorScheme} rounded px-4 py-3 text-center text-white font-bold hover:${r[0].colorAccent} transform duration-300`)&&l(h,"class",f)},i:z,o:z,d(r){r&&g(e)}}}function $t(d,e,t){let{mainSettings:s}=e;return d.$$set=i=>{"mainSettings"in i&&t(0,s=i.mainSettings)},[s]}class kt extends Z{constructor(e){super();J(this,e,$t,bt,Q,{mainSettings:0})}}function Et(d){let e,t,s,i,a,E,b,h,_,f,r,p,u,m,n,o,v,k,y,I,P,j;return e=new Ke({props:{mainSettings:F,about:Be}}),s=new et({props:{mainSettings:F,skills:Le}}),a=new st({props:{mainSettings:F,services:Te}}),b=new it({props:{mainSettings:F,works:d[0]}}),_=new ct({props:{mainSettings:F,clients:qe}}),r=new ft({props:{mainSettings:F,posts:d[1]}}),u=new _t({props:{mainSettings:F,testimonials:We}}),n=new pt({props:{mainSettings:F,hobbies:Ge}}),v=new kt({props:{mainSettings:F}}),y=new Oe({props:{mainSettings:F}}),document.title=P=F.title,{c(){O(e.$$.fragment),t=D(),O(s.$$.fragment),i=D(),O(a.$$.fragment),E=D(),O(b.$$.fragment),h=D(),O(_.$$.fragment),f=D(),O(r.$$.fragment),p=D(),O(u.$$.fragment),m=D(),O(n.$$.fragment),o=D(),O(v.$$.fragment),k=D(),O(y.$$.fragment),I=D()},l($){R(e.$$.fragment,$),t=V($),R(s.$$.fragment,$),i=V($),R(a.$$.fragment,$),E=V($),R(b.$$.fragment,$),h=V($),R(_.$$.fragment,$),f=V($),R(r.$$.fragment,$),p=V($),R(u.$$.fragment,$),m=V($),R(n.$$.fragment,$),o=V($),R(v.$$.fragment,$),k=V($),R(y.$$.fragment,$),I=V($),ze('[data-svelte="svelte-1j466cl"]',document.head).forEach(g)},m($,C){Y(e,$,C),H($,t,C),Y(s,$,C),H($,i,C),Y(a,$,C),H($,E,C),Y(b,$,C),H($,h,C),Y(_,$,C),H($,f,C),Y(r,$,C),H($,p,C),Y(u,$,C),H($,m,C),Y(n,$,C),H($,o,C),Y(v,$,C),H($,k,C),Y(y,$,C),H($,I,C),j=!0},p($,[C]){const T={};C&1&&(T.works=$[0]),b.$set(T);const q={};C&2&&(q.posts=$[1]),r.$set(q),(!j||C&0)&&P!==(P=F.title)&&(document.title=P)},i($){j||(N(e.$$.fragment,$),N(s.$$.fragment,$),N(a.$$.fragment,$),N(b.$$.fragment,$),N(_.$$.fragment,$),N(r.$$.fragment,$),N(u.$$.fragment,$),N(n.$$.fragment,$),N(v.$$.fragment,$),N(y.$$.fragment,$),j=!0)},o($){B(e.$$.fragment,$),B(s.$$.fragment,$),B(a.$$.fragment,$),B(b.$$.fragment,$),B(_.$$.fragment,$),B(r.$$.fragment,$),B(u.$$.fragment,$),B(n.$$.fragment,$),B(v.$$.fragment,$),B(y.$$.fragment,$),j=!1},d($){K(e,$),$&&g(t),K(s,$),$&&g(i),K(a,$),$&&g(E),K(b,$),$&&g(h),K(_,$),$&&g(f),K(r,$),$&&g(p),K(u,$),$&&g(m),K(n,$),$&&g(o),K(v,$),$&&g(k),K(y,$),$&&g(I)}}}const Vt=({stuff:d})=>{const{allPosts:e,allWorks:t}=d;return{props:{posts:e,works:t}}};function St(d,e,t){let{works:s,posts:i}=e;return d.$$set=a=>{"works"in a&&t(0,s=a.works),"posts"in a&&t(1,i=a.posts)},[s,i]}class Ct extends Z{constructor(e){super();J(this,e,St,Et,Q,{works:0,posts:1})}}export{Ct as default,Vt as load};