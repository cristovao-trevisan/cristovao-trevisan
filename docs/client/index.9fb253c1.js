import{S as t,a as e,s,e as a,b as l,v as r,d as i,f as n,h as o,j as c,w as h,k as v,m as f,l as m,x as u,H as d,n as g,u as p,I as C}from"./index.9b1e5536.js";import{_ as x,l as $}from"./index.es.ba205ebd.js";function y(t,e,s){const a=Object.create(t);return a.image=e[s].image,a.title=e[s].title,a.path=e[s].path,a}function E(t,e){var s,d,g,p,C,x,$,y=e.$_(e.title)+"";return{key:t,first:null,c(){s=a("a"),d=a("img"),p=l(),C=a("div"),x=r(y),$=l(),this.h()},l(t){s=i(t,"A",{rel:!0,href:!0,class:!0},!1);var e=n(s);d=i(e,"IMG",{class:!0,src:!0,alt:!0},!1),n(d).forEach(o),p=c(e),C=i(e,"DIV",{class:!0},!1);var a=n(C);x=h(a,y),a.forEach(o),$=c(e),e.forEach(o),this.h()},h(){v(d,"class","link-image svelte-1h222yx"),v(d,"src",e.image),v(d,"alt",g=e.$_(e.title)),v(C,"class","link-text svelte-1h222yx"),v(s,"rel","prefetch"),v(s,"href",e.path),v(s,"class","link-container svelte-1h222yx"),this.first=s},m(t,e){f(t,s,e),m(s,d),m(s,p),m(s,C),m(C,x),m(s,$)},p(t,e){t.$_&&g!==(g=e.$_(e.title))&&v(d,"alt",g),t.$_&&y!==(y=e.$_(e.title)+"")&&u(x,y)},d(t){t&&o(s)}}}function _(t){var e,s,l,c,u;return{c(){e=a("div"),s=r("Cristóvão is a direct reference to Christopher\n\t\t\t("),l=a("code"),c=r("'Cristóvão Colombo' = 'Christopher Columbus'"),u=r("),\n\t\t\tso feel free to call me Chris."),this.h()},l(t){e=i(t,"DIV",{class:!0},!1);var a=n(e);s=h(a,"Cristóvão is a direct reference to Christopher\n\t\t\t("),l=i(a,"CODE",{class:!0},!1);var r=n(l);c=h(r,"'Cristóvão Colombo' = 'Christopher Columbus'"),r.forEach(o),u=h(a,"),\n\t\t\tso feel free to call me Chris."),a.forEach(o),this.h()},h(){v(l,"class","svelte-1h222yx"),v(e,"class","curiosity svelte-1h222yx")},m(t,a){f(t,e,a),m(e,s),m(e,l),m(l,c),m(e,u)},d(t){t&&o(e)}}}function b(t){var e,s,p,x,$,b,k,I,j,D,V,w,T=t.$_("what are you interested in?")+"",H=[],M=new Map;let O=t.items;const A=t=>t.title;for(let e=0;e<O.length;e+=1){let s=y(t,O,e),a=A(s);M.set(a,H[e]=E(a,s))}var B="en"===t.$locale&&_();return{c(){e=l(),s=a("h1"),p=r("Cristóvão "),x=a("br"),$=r(" Trevisan"),b=l(),k=a("div"),I=a("div"),j=r(T),D=l(),V=a("div");for(let t=0;t<H.length;t+=1)H[t].c();w=l(),B&&B.c(),this.h()},l(t){e=c(t),s=i(t,"H1",{class:!0},!1);var a=n(s);p=h(a,"Cristóvão "),x=i(a,"BR",{},!1),n(x).forEach(o),$=h(a," Trevisan"),a.forEach(o),b=c(t),k=i(t,"DIV",{class:!0},!1);var l=n(k);I=i(l,"DIV",{class:!0},!1);var r=n(I);j=h(r,T),r.forEach(o),D=c(l),V=i(l,"DIV",{class:!0},!1);var v=n(V);for(let t=0;t<H.length;t+=1)H[t].l(v);v.forEach(o),w=c(l),B&&B.l(l),l.forEach(o),this.h()},h(){document.title=" Cristóvão Trevisan ",v(s,"class","title svelte-1h222yx"),v(I,"class","curiosity svelte-1h222yx"),v(V,"class","links svelte-1h222yx"),v(k,"class","container svelte-1h222yx")},m(t,a){f(t,e,a),f(t,s,a),m(s,p),m(s,x),m(s,$),f(t,b,a),f(t,k,a),m(k,I),m(I,j),m(k,D),m(k,V);for(let t=0;t<H.length;t+=1)H[t].m(V,null);m(k,w),B&&B.m(k,null)},p(t,e){t.$_&&T!==(T=e.$_("what are you interested in?")+"")&&u(j,T);const s=e.items;H=d(H,t,A,1,e,s,M,V,C,E,null,y),"en"===e.$locale?B||((B=_()).c(),B.m(k,null)):B&&(B.d(1),B=null)},i:g,o:g,d(t){t&&(o(e),o(s),o(b),o(k));for(let t=0;t<H.length;t+=1)H[t].d();B&&B.d()}}}function k(t,e,s){let a,l;p(t,x,t=>{s("$_",a=t)}),p(t,$,t=>{s("$locale",l=t)});return{items:[{path:"artist",title:"artist",image:"img/main-links/artist.jpg"},{path:"engineer",title:"engineer",image:"img/main-links/engineer.jpg"}],$_:a,$locale:l}}export default class extends t{constructor(t){super(),e(this,t,k,b,s,[])}}
