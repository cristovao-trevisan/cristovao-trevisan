import{a as t,b as n,c as e,d as a,e as s,s as i,f as r,S as o,D as c,u as l,F as f,G as v,H as u,x as m,y as h,o as p,I as g,j as $,k as w,A as d,l as _,m as b,p as D,B as k,q as x,P as E,t as T,C as P,M as j,L as I,z as C,E as H,K as M,Q as N}from"./index.64510641.js";import{_ as V}from"./index.es.699a4b2c.js";import{S as y}from"./SocialNetwork.054124fc.js";import{G,L,T as F}from"./index.af33885b.js";function S(t,n,e){var a=Object.create(t);return a.item=n[e],a}function A(t,n){for(var e,a,s=[n.item],i={},r=0;r<s.length;r+=1)i=H(i,s[r]);var o=new y({props:i});return{key:t,first:null,c:function(){e=c(),o.$$.fragment.c(),this.h()},l:function(t){e=c(),o.$$.fragment.l(t),this.h()},h:function(){this.first=e},m:function(t,n){l(t,e,n),f(o,t,n),a=!0},p:function(t,n){var e=t.socialNetworks?v(s,[u(n.item)]):{};o.$set(e)},i:function(t){a||(m(o.$$.fragment,t),a=!0)},o:function(t){h(o.$$.fragment,t),a=!1},d:function(t){t&&p(e),g(o,t)}}}function q(t){var n,e,a,s,i,r,o,c,v,u,C,H,V,L,F,q,z=t.$_("engineerPage.presentation")+"",B=t.$_("engineerPage.Follow me on GitHub!")+"",K=[],O=new Map;document.title=n=" Cristóvão Trevisan - "+t.$_("engineer")+" ";for(var Q=new y({props:{icon:G,title:"cristovao-trevisan",path:"https://github.com/cristovao-trevisan"}}),J=t.socialNetworks,R=function(t){return t.item.path},U=0;U<J.length;U+=1){var W=S(t,J,U),X=R(W);O.set(X,K[U]=A(X,W))}return{c:function(){e=$("meta"),s=w(),i=$("div"),r=$("div"),o=d("Cristóvão Trevisan"),c=w(),v=$("div"),u=w(),C=$("div"),H=d(B),V=w(),Q.$$.fragment.c(),L=w(),F=$("div");for(var t=0;t<K.length;t+=1)K[t].c();this.h()},l:function(t){e=_(t,"META",{name:!0,content:!0},!1),b(e).forEach(p),s=D(t),i=_(t,"DIV",{class:!0},!1);var n=b(i);r=_(n,"DIV",{class:!0},!1);var a=b(r);o=k(a,"Cristóvão Trevisan"),a.forEach(p),c=D(n),v=_(n,"DIV",{class:!0,style:!0},!1),b(v).forEach(p),u=D(n),C=_(n,"DIV",{class:!0,style:!0},!1);var l=b(C);H=k(l,B),l.forEach(p),V=D(n),Q.$$.fragment.l(n),L=D(n),F=_(n,"DIV",{class:!0},!1);for(var f=b(F),m=0;m<K.length;m+=1)K[m].l(f);f.forEach(p),n.forEach(p),this.h()},h:function(){x(e,"name","Description"),x(e,"content",a=t.$_("metaDescription")+", "+t.$_("engineerPage.metaDescription")),x(r,"class","title svelte-1b1opw"),x(v,"class","text svelte-1b1opw"),E(v,"margin-top","40px"),E(v,"margin-bottom","16px"),x(C,"class","subtitle svelte-1b1opw"),E(C,"margin","16px 0"),x(F,"class","social-networks svelte-1b1opw"),x(i,"class","container svelte-1b1opw")},m:function(t,n){T(document.head,e),l(t,s,n),l(t,i,n),T(i,r),T(r,o),T(i,c),T(i,v),v.innerHTML=z,T(i,u),T(i,C),T(C,H),T(i,V),f(Q,i,null),T(i,L),T(i,F);for(var a=0;a<K.length;a+=1)K[a].m(F,null);q=!0},p:function(t,s){q&&!t.$_||n===(n=" Cristóvão Trevisan - "+s.$_("engineer")+" ")||(document.title=n),q&&!t.$_||a===(a=s.$_("metaDescription")+", "+s.$_("engineerPage.metaDescription"))||x(e,"content",a),q&&!t.$_||z===(z=s.$_("engineerPage.presentation")+"")||(v.innerHTML=z),q&&!t.$_||B===(B=s.$_("engineerPage.Follow me on GitHub!")+"")||P(H,B);var i=s.socialNetworks;M(),K=j(K,t,R,1,s,i,O,F,N,A,null,S),I()},i:function(t){if(!q){m(Q.$$.fragment,t);for(var n=0;n<J.length;n+=1)m(K[n]);q=!0}},o:function(t){h(Q.$$.fragment,t);for(var n=0;n<K.length;n+=1)h(K[n]);q=!1},d:function(t){p(e),t&&(p(s),p(i)),g(Q);for(var n=0;n<K.length;n+=1)K[n].d()}}}function z(t,n,e){var a;return C(t,V,(function(t){e("$_",a=t)})),{socialNetworks:[{path:"https://www.linkedin.com/in/cristovao-trevisan",icon:L},{path:"https://twitter.com/cristovao_tre",icon:F}],$_:a}}var B=function(c){function l(t){var o;return n(this,l),o=e(this,a(l).call(this)),s(r(o),t,z,q,i,[]),o}return t(l,o),l}();export default B;
