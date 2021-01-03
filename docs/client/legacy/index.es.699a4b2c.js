import{s as n,n as r,r as a,i as t,_ as e,g as i}from"./index.64510641.js";function o(n,r){return n(r={exports:{}},r.exports),r.exports}var l=[];function c(n,r){return{subscribe:s(n,r).subscribe}}function s(a){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,i=[];function o(r){if(n(a,r)&&(a=r,t)){for(var e=!l.length,o=0;o<i.length;o+=1){var c=i[o];c[1](),l.push(c,a)}if(e){for(var s=0;s<l.length;s+=2)l[s][0](l[s+1]);l.length=0}}}return{set:o,update:function(n){o(n(a))},subscribe:function(n){var l=[n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return i.push(l),1===i.length&&(t=e(o)||r),n(a),function(){var n=i.indexOf(l);-1!==n&&i.splice(n,1),0===i.length&&(t(),t=null)}}}}function u(n,e,i){var o=!Array.isArray(n),l=o?[n]:n,s=e.length<2;return c(i,(function(n){var i=!1,c=[],u=0,d=r,f=function(){if(!u){d();var a=e(o?c[0]:c,n);s?n(a):d=t(a)?a:r}},h=l.map((function(n,r){return n.subscribe((function(n){c[r]=n,u&=~(1<<r),i&&f()}),(function(){u|=1<<r}))}));return i=!0,f(),function(){a(h),d()}}))}var d=o((function(n,r){var a="{",t="}",e=",",i="#",o="<",l=">",c="</",s="/>",u="'",d="offset:",f=["number","date","time","ordinal","duration","spellout"],h=["plural","select","selectordinal"];function m(n,r){var a=n.pattern,e=a.length,i=[],o=n.index,l=p(n,r);for(l&&i.push(l),l&&n.tokens&&n.tokens.push(["text",a.slice(o,n.index)]);n.index<e;){if(a[n.index]===t){if(!r)throw w(n);break}if(r&&n.tagsType&&a.slice(n.index,n.index+c.length)===c)break;i.push(x(n)),o=n.index,(l=p(n,r))&&i.push(l),l&&n.tokens&&n.tokens.push(["text",a.slice(o,n.index)])}return i}function p(n,r){for(var e=n.pattern,l=e.length,c="plural"===r||"selectordinal"===r,s=!!n.tagsType,d="{style}"===r,f="";n.index<l;){var h=e[n.index];if(h===a||h===t||c&&h===i||s&&h===o||d&&g(h.charCodeAt(0)))break;if(h===u)if((h=e[++n.index])===u)f+=h,++n.index;else if(h===a||h===t||c&&h===i||s&&h===o||d)for(f+=h;++n.index<l;)if((h=e[n.index])===u&&e[n.index+1]===u)f+=u,++n.index;else{if(h===u){++n.index;break}f+=h}else f+=u;else f+=h,++n.index}return f}function g(n){return n>=9&&n<=13||32===n||133===n||160===n||6158===n||n>=8192&&n<=8205||8232===n||8233===n||8239===n||8287===n||8288===n||12288===n||65279===n}function v(n){for(var r=n.pattern,a=r.length,t=n.index;n.index<a&&g(r.charCodeAt(n.index));)++n.index;t<n.index&&n.tokens&&n.tokens.push(["space",n.pattern.slice(t,n.index)])}function x(n){var r=n.pattern;if(r[n.index]===i)return n.tokens&&n.tokens.push(["syntax",i]),++n.index,[i];var u=function(n){var r=n.tagsType;if(!r||n.pattern[n.index]!==o)return;if(n.pattern.slice(n.index,n.index+c.length)===c)throw w(n,null,"closing tag without matching opening tag");n.tokens&&n.tokens.push(["syntax",o]);++n.index;var a=b(n,!0);if(!a)throw w(n,"placeholder id");n.tokens&&n.tokens.push(["id",a]);if(v(n),n.pattern.slice(n.index,n.index+s.length)===s)return n.tokens&&n.tokens.push(["syntax",s]),n.index+=s.length,[a,r];if(n.pattern[n.index]!==l)throw w(n,l);n.tokens&&n.tokens.push(["syntax",l]);++n.index;var t=m(n,r),e=n.index;if(n.pattern.slice(n.index,n.index+c.length)!==c)throw w(n,c+a+l);n.tokens&&n.tokens.push(["syntax",c]);n.index+=c.length;var i=b(n,!0);i&&n.tokens&&n.tokens.push(["id",i]);if(a!==i)throw n.index=e,w(n,c+a+l,c+i+l);if(v(n),n.pattern[n.index]!==l)throw w(n,l);n.tokens&&n.tokens.push(["syntax",l]);return++n.index,[a,r,{children:t}]}(n);if(u)return u;if(r[n.index]!==a)throw w(n,a);n.tokens&&n.tokens.push(["syntax",a]),++n.index,v(n);var h=b(n);if(!h)throw w(n,"placeholder id");n.tokens&&n.tokens.push(["id",h]),v(n);var p=r[n.index];if(p===t)return n.tokens&&n.tokens.push(["syntax",t]),++n.index,[h];if(p!==e)throw w(n,e+" or "+t);n.tokens&&n.tokens.push(["syntax",e]),++n.index,v(n);var g,x=b(n);if(!x)throw w(n,"placeholder type");if(n.tokens&&n.tokens.push(["type",x]),v(n),(p=r[n.index])===t){if(n.tokens&&n.tokens.push(["syntax",t]),"plural"===x||"selectordinal"===x||"select"===x)throw w(n,x+" sub-messages");return++n.index,[h,x]}if(p!==e)throw w(n,e+" or "+t);if(n.tokens&&n.tokens.push(["syntax",e]),++n.index,v(n),"plural"===x||"selectordinal"===x){var M=function(n){var r=n.pattern,a=r.length,t=0;if(r.slice(n.index,n.index+d.length)===d){n.tokens&&n.tokens.push(["offset","offset"],["syntax",":"]),n.index+=d.length,v(n);for(var e=n.index;n.index<a&&((i=r.charCodeAt(n.index))>=48&&i<=57);)++n.index;if(e===n.index)throw w(n,"offset number");n.tokens&&n.tokens.push(["number",r.slice(e,n.index)]),t=+r.slice(e,n.index)}var i;return t}(n);v(n),g=[h,x,M,k(n,x)]}else if("select"===x)g=[h,x,k(n,x)];else if(f.indexOf(x)>=0)g=[h,x,y(n)];else{var j=n.index,D=y(n);v(n),r[n.index]===a&&(n.index=j,D=k(n,x)),g=[h,x,D]}if(v(n),r[n.index]!==t)throw w(n,t);return n.tokens&&n.tokens.push(["syntax",t]),++n.index,g}function b(n,r){for(var c=n.pattern,s=c.length,d="";n.index<s;){var f=c[n.index];if(f===a||f===t||f===e||f===i||f===u||g(f.charCodeAt(0))||r&&(f===o||f===l||"/"===f))break;d+=f,++n.index}return d}function y(n){var r=n.index,a=p(n,"{style}");if(!a)throw w(n,"placeholder style name");return n.tokens&&n.tokens.push(["style",n.pattern.slice(r,n.index)]),a}function k(n,r){for(var a=n.pattern,e=a.length,i={};n.index<e&&a[n.index]!==t;){var o=b(n);if(!o)throw w(n,"sub-message selector");n.tokens&&n.tokens.push(["selector",o]),v(n),i[o]=M(n,r),v(n)}if(!i.other&&h.indexOf(r)>=0)throw w(n,null,null,'"other" sub-message must be specified in '+r);return i}function M(n,r){if(n.pattern[n.index]!==a)throw w(n,a+" to start sub-message");n.tokens&&n.tokens.push(["syntax",a]),++n.index;var e=m(n,r);if(n.pattern[n.index]!==t)throw w(n,t+" to end sub-message");return n.tokens&&n.tokens.push(["syntax",t]),++n.index,e}function w(n,r,a,t){var e=n.pattern,i=e.slice(0,n.index).split(/\r?\n/),o=n.index,l=i.length,c=i.slice(-1)[0].length;return a=a||(n.index>=e.length?"end of message pattern":b(n)||e[n.index]),t||(t=function(n,r){return n?"Expected "+n+" but found "+r:"Unexpected "+r+" found"}(r,a)),new j(t+=" in "+e.replace(/\r?\n/g,"\n"),r,a,o,l,c)}function j(n,r,a,t,e,i){Error.call(this,n),this.name="SyntaxError",this.message=n,this.expected=r,this.found=a,this.offset=t,this.line=e,this.column=i}r=n.exports=function(n,r){return m({pattern:String(n),index:0,tagsType:r&&r.tagsType||null,tokens:r&&r.tokens||null},"")},j.prototype=Object.create(Error.prototype),r.SyntaxError=j})),f=(d.SyntaxError,"long"),h="short",m="numeric",p={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:m,day:m,year:"2-digit"},medium:{month:h,day:m,year:m},long:{month:f,day:m,year:m},full:{month:f,day:m,year:m,weekday:f},default:{month:h,day:m,year:m}},time:{short:{hour:m,minute:m},medium:{hour:m,minute:m,second:m},long:{hour:m,minute:m,second:m,timeZoneName:h},full:{hour:m,minute:m,second:m,timeZoneName:h},default:{hour:m,minute:m,second:m}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(n){if(n){var r={},a=n.match(/\b[A-Z]{3}\b/i),t=n.replace(/[^¤]/g,"").length;if(!t&&a&&(t=1),t?(r.style="currency",r.currencyDisplay=1===t?"symbol":2===t?"code":"name",r.currency=a?a[0].toUpperCase():"USD"):n.indexOf("%")>=0&&(r.style="percent"),!/[@#0]/.test(n))return r.style?r:void 0;if(r.useGrouping=n.indexOf(",")>=0,/E\+?[@#0]+/i.test(n)||n.indexOf("@")>=0){var e=n.replace(/E\+?[@#0]+|[^@#0]/gi,"");r.minimumSignificantDigits=Math.min(Math.max(e.replace(/[^@0]/g,"").length,1),21),r.maximumSignificantDigits=Math.min(Math.max(e.length,1),21)}else{for(var i=n.replace(/[^#0.]/g,"").split("."),o=i[0],l=o.length-1;"0"===o[l];)--l;r.minimumIntegerDigits=Math.min(Math.max(o.length-1-l,1),21);var c=i[1]||"";for(l=0;"0"===c[l];)++l;for(r.minimumFractionDigits=Math.min(Math.max(l,0),20);"#"===c[l];)++l;r.maximumFractionDigits=Math.min(Math.max(l,0),20)}return r}},parseDatePattern:function(n){if(n){for(var r={},a=0;a<n.length;){for(var t=n[a],e=1;n[++a]===t;)++e;switch(t){case"G":r.era=5===e?"narrow":4===e?f:h;break;case"y":case"Y":r.year=2===e?"2-digit":m;break;case"M":case"L":e=Math.min(Math.max(e-1,0),4),r.month=[m,"2-digit",h,f,"narrow"][e];break;case"E":case"e":case"c":r.weekday=5===e?"narrow":4===e?f:h;break;case"d":case"D":r.day=2===e?"2-digit":m;break;case"h":case"K":r.hour12=!0,r.hour=2===e?"2-digit":m;break;case"H":case"k":r.hour12=!1,r.hour=2===e?"2-digit":m;break;case"m":r.minute=2===e?"2-digit":m;break;case"s":case"S":r.second=2===e?"2-digit":m;break;case"z":case"Z":case"v":case"V":r.timeZoneName=1===e?h:f}}return Object.keys(r).length?r:void 0}}},g=function(n,r){if("string"==typeof n&&r[n])return n;for(var a=[].concat(n||[]),t=0,e=a.length;t<e;++t)for(var i=a[t].split("-");i.length;){var o=i.join("-");if(r[o])return o;i.pop()}},v="one",x="two",b="few",y="many",k="other",M=[function(n){return 1===+n?v:k},function(n){var r=+n;return 0<=r&&r<=1?v:k},function(n){return 0===Math.floor(Math.abs(+n))||1===+n?v:k},function(n){var r=+n;return 0===r?"zero":1===r?v:2===r?x:3<=r%100&&r%100<=10?b:11<=r%100&&r%100<=99?y:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length;return 1===r&&0===a?v:k},function(n){var r=+n;return r%10==1&&r%100!=11?v:2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?b:r%10==0||5<=r%10&&r%10<=9||11<=r%100&&r%100<=14?y:k},function(n){var r=+n;return r%10==1&&r%100!=11&&r%100!=71&&r%100!=91?v:r%10==2&&r%100!=12&&r%100!=72&&r%100!=92?x:(3<=r%10&&r%10<=4||r%10==9)&&(r%100<10||19<r%100)&&(r%100<70||79<r%100)&&(r%100<90||99<r%100)?b:0!==r&&r%1e6==0?y:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,t=+(n+".").split(".")[1];return 0===a&&r%10==1&&r%100!=11||t%10==1&&t%100!=11?v:0===a&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)||2<=t%10&&t%10<=4&&(t%100<12||14<t%100)?b:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length;return 1===r&&0===a?v:2<=r&&r<=4&&0===a?b:0!==a?y:k},function(n){var r=+n;return 0===r?"zero":1===r?v:2===r?x:3===r?b:6===r?y:k},function(n){var r=Math.floor(Math.abs(+n)),a=+(""+n).replace(/^[^.]*.?|0+$/g,"");return 1===+n||0!==a&&(0===r||1===r)?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,t=+(n+".").split(".")[1];return 0===a&&r%100==1||t%100==1?v:0===a&&r%100==2||t%100==2?x:0===a&&3<=r%100&&r%100<=4||3<=t%100&&t%100<=4?b:k},function(n){var r=Math.floor(Math.abs(+n));return 0===r||1===r?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,t=+(n+".").split(".")[1];return 0===a&&(1===r||2===r||3===r)||0===a&&r%10!=4&&r%10!=6&&r%10!=9||0!==a&&t%10!=4&&t%10!=6&&t%10!=9?v:k},function(n){var r=+n;return 1===r?v:2===r?x:3<=r&&r<=6?b:7<=r&&r<=10?y:k},function(n){var r=+n;return 1===r||11===r?v:2===r||12===r?x:3<=r&&r<=10||13<=r&&r<=19?b:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length;return 0===a&&r%10==1?v:0===a&&r%10==2?x:0!==a||r%100!=0&&r%100!=20&&r%100!=40&&r%100!=60&&r%100!=80?0!==a?y:k:b},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,t=+n;return 1===r&&0===a?v:2===r&&0===a?x:0===a&&(t<0||10<t)&&t%10==0?y:k},function(n){var r=Math.floor(Math.abs(+n)),a=+(""+n).replace(/^[^.]*.?|0+$/g,"");return 0===a&&r%10==1&&r%100!=11||0!==a?v:k},function(n){var r=+n;return 1===r?v:2===r?x:k},function(n){var r=+n;return 0===r?"zero":1===r?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=+n;return 0===a?"zero":0!==r&&1!==r||0===a?k:v},function(n){var r=+(n+".").split(".")[1],a=+n;return a%10==1&&(a%100<11||19<a%100)?v:2<=a%10&&a%10<=9&&(a%100<11||19<a%100)?b:0!==r?y:k},function(n){var r=(n+".").split(".")[1].length,a=+(n+".").split(".")[1],t=+n;return t%10==0||11<=t%100&&t%100<=19||2===r&&11<=a%100&&a%100<=19?"zero":t%10==1&&t%100!=11||2===r&&a%10==1&&a%100!=11||2!==r&&a%10==1?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,t=+(n+".").split(".")[1];return 0===a&&r%10==1&&r%100!=11||t%10==1&&t%100!=11?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,t=+n;return 1===r&&0===a?v:0!==a||0===t||1!==t&&1<=t%100&&t%100<=19?b:k},function(n){var r=+n;return 1===r?v:0===r||2<=r%100&&r%100<=10?b:11<=r%100&&r%100<=19?y:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length;return 1===r&&0===a?v:0===a&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?b:0===a&&1!==r&&0<=r%10&&r%10<=1||0===a&&5<=r%10&&r%10<=9||0===a&&12<=r%100&&r%100<=14?y:k},function(n){var r=Math.floor(Math.abs(+n));return 0<=r&&r<=1?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length;return 0===a&&r%10==1&&r%100!=11?v:0===a&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?b:0===a&&r%10==0||0===a&&5<=r%10&&r%10<=9||0===a&&11<=r%100&&r%100<=14?y:k},function(n){var r=+n;return 0===Math.floor(Math.abs(+n))||1===r?v:2<=r&&r<=10?b:k},function(n){var r=Math.floor(Math.abs(+n)),a=+(n+".").split(".")[1],t=+n;return 0===t||1===t||0===r&&1===a?v:k},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length;return 0===a&&r%100==1?v:0===a&&r%100==2?x:0===a&&3<=r%100&&r%100<=4||0!==a?b:k},function(n){var r=+n;return 0<=r&&r<=1||11<=r&&r<=99?v:k},function(n){var r=+n;return 1===r||5===r||7===r||8===r||9===r||10===r?v:2===r||3===r?x:4===r?b:6===r?y:k},function(n){var r=Math.floor(Math.abs(+n));return r%10==1||r%10==2||r%10==5||r%10==7||r%10==8||r%100==20||r%100==50||r%100==70||r%100==80?v:r%10==3||r%10==4||r%1e3==100||r%1e3==200||r%1e3==300||r%1e3==400||r%1e3==500||r%1e3==600||r%1e3==700||r%1e3==800||r%1e3==900?b:0===r||r%10==6||r%100==40||r%100==60||r%100==90?y:k},function(n){var r=+n;return r%10!=2&&r%10!=3||r%100==12||r%100==13?k:b},function(n){var r=+n;return 1===r||3===r?v:2===r?x:4===r?b:k},function(n){var r=+n;return 0===r||7===r||8===r||9===r?"zero":1===r?v:2===r?x:3===r||4===r?b:5===r||6===r?y:k},function(n){var r=+n;return r%10==1&&r%100!=11?v:r%10==2&&r%100!=12?x:r%10==3&&r%100!=13?b:k},function(n){var r=+n;return 1===r||11===r?v:2===r||12===r?x:3===r||13===r?b:k},function(n){var r=+n;return 1===r?v:2===r||3===r?x:4===r?b:6===r?y:k},function(n){var r=+n;return 1===r||5===r?v:k},function(n){var r=+n;return 11===r||8===r||80===r||800===r?y:k},function(n){var r=Math.floor(Math.abs(+n));return 1===r?v:0===r||2<=r%100&&r%100<=20||r%100==40||r%100==60||r%100==80?y:k},function(n){var r=+n;return r%10==6||r%10==9||r%10==0&&0!==r?y:k},function(n){var r=Math.floor(Math.abs(+n));return r%10==1&&r%100!=11?v:r%10==2&&r%100!=12?x:r%10!=7&&r%10!=8||r%100==17||r%100==18?k:y},function(n){var r=+n;return 1===r?v:2===r||3===r?x:4===r?b:k},function(n){var r=+n;return 1<=r&&r<=4?v:k},function(n){var r=+n;return 1===r||5===r||7<=r&&r<=9?v:2===r||3===r?x:4===r?b:6===r?y:k},function(n){var r=+n;return 1===r?v:r%10==4&&r%100!=14?y:k},function(n){var r=+n;return r%10!=1&&r%10!=2||r%100==11||r%100==12?k:v},function(n){var r=+n;return r%10==6||r%10==9||10===r?b:k},function(n){var r=+n;return r%10==3&&r%100!=13?b:k}],w={af:{cardinal:M[0]},ak:{cardinal:M[1]},am:{cardinal:M[2]},ar:{cardinal:M[3]},ars:{cardinal:M[3]},as:{cardinal:M[2],ordinal:M[34]},asa:{cardinal:M[0]},ast:{cardinal:M[4]},az:{cardinal:M[0],ordinal:M[35]},be:{cardinal:M[5],ordinal:M[36]},bem:{cardinal:M[0]},bez:{cardinal:M[0]},bg:{cardinal:M[0]},bh:{cardinal:M[1]},bn:{cardinal:M[2],ordinal:M[34]},br:{cardinal:M[6]},brx:{cardinal:M[0]},bs:{cardinal:M[7]},ca:{cardinal:M[4],ordinal:M[37]},ce:{cardinal:M[0]},cgg:{cardinal:M[0]},chr:{cardinal:M[0]},ckb:{cardinal:M[0]},cs:{cardinal:M[8]},cy:{cardinal:M[9],ordinal:M[38]},da:{cardinal:M[10]},de:{cardinal:M[4]},dsb:{cardinal:M[11]},dv:{cardinal:M[0]},ee:{cardinal:M[0]},el:{cardinal:M[0]},en:{cardinal:M[4],ordinal:M[39]},eo:{cardinal:M[0]},es:{cardinal:M[0]},et:{cardinal:M[4]},eu:{cardinal:M[0]},fa:{cardinal:M[2]},ff:{cardinal:M[12]},fi:{cardinal:M[4]},fil:{cardinal:M[13],ordinal:M[0]},fo:{cardinal:M[0]},fr:{cardinal:M[12],ordinal:M[0]},fur:{cardinal:M[0]},fy:{cardinal:M[4]},ga:{cardinal:M[14],ordinal:M[0]},gd:{cardinal:M[15],ordinal:M[40]},gl:{cardinal:M[4]},gsw:{cardinal:M[0]},gu:{cardinal:M[2],ordinal:M[41]},guw:{cardinal:M[1]},gv:{cardinal:M[16]},ha:{cardinal:M[0]},haw:{cardinal:M[0]},he:{cardinal:M[17]},hi:{cardinal:M[2],ordinal:M[41]},hr:{cardinal:M[7]},hsb:{cardinal:M[11]},hu:{cardinal:M[0],ordinal:M[42]},hy:{cardinal:M[12],ordinal:M[0]},ia:{cardinal:M[4]},io:{cardinal:M[4]},is:{cardinal:M[18]},it:{cardinal:M[4],ordinal:M[43]},iu:{cardinal:M[19]},iw:{cardinal:M[17]},jgo:{cardinal:M[0]},ji:{cardinal:M[4]},jmc:{cardinal:M[0]},ka:{cardinal:M[0],ordinal:M[44]},kab:{cardinal:M[12]},kaj:{cardinal:M[0]},kcg:{cardinal:M[0]},kk:{cardinal:M[0],ordinal:M[45]},kkj:{cardinal:M[0]},kl:{cardinal:M[0]},kn:{cardinal:M[2]},ks:{cardinal:M[0]},ksb:{cardinal:M[0]},ksh:{cardinal:M[20]},ku:{cardinal:M[0]},kw:{cardinal:M[19]},ky:{cardinal:M[0]},lag:{cardinal:M[21]},lb:{cardinal:M[0]},lg:{cardinal:M[0]},ln:{cardinal:M[1]},lt:{cardinal:M[22]},lv:{cardinal:M[23]},mas:{cardinal:M[0]},mg:{cardinal:M[1]},mgo:{cardinal:M[0]},mk:{cardinal:M[24],ordinal:M[46]},ml:{cardinal:M[0]},mn:{cardinal:M[0]},mo:{cardinal:M[25],ordinal:M[0]},mr:{cardinal:M[2],ordinal:M[47]},mt:{cardinal:M[26]},nah:{cardinal:M[0]},naq:{cardinal:M[19]},nb:{cardinal:M[0]},nd:{cardinal:M[0]},ne:{cardinal:M[0],ordinal:M[48]},nl:{cardinal:M[4]},nn:{cardinal:M[0]},nnh:{cardinal:M[0]},no:{cardinal:M[0]},nr:{cardinal:M[0]},nso:{cardinal:M[1]},ny:{cardinal:M[0]},nyn:{cardinal:M[0]},om:{cardinal:M[0]},or:{cardinal:M[0],ordinal:M[49]},os:{cardinal:M[0]},pa:{cardinal:M[1]},pap:{cardinal:M[0]},pl:{cardinal:M[27]},prg:{cardinal:M[23]},ps:{cardinal:M[0]},pt:{cardinal:M[28]},"pt-PT":{cardinal:M[4]},rm:{cardinal:M[0]},ro:{cardinal:M[25],ordinal:M[0]},rof:{cardinal:M[0]},ru:{cardinal:M[29]},rwk:{cardinal:M[0]},saq:{cardinal:M[0]},sc:{cardinal:M[4],ordinal:M[43]},scn:{cardinal:M[4],ordinal:M[43]},sd:{cardinal:M[0]},sdh:{cardinal:M[0]},se:{cardinal:M[19]},seh:{cardinal:M[0]},sh:{cardinal:M[7]},shi:{cardinal:M[30]},si:{cardinal:M[31]},sk:{cardinal:M[8]},sl:{cardinal:M[32]},sma:{cardinal:M[19]},smi:{cardinal:M[19]},smj:{cardinal:M[19]},smn:{cardinal:M[19]},sms:{cardinal:M[19]},sn:{cardinal:M[0]},so:{cardinal:M[0]},sq:{cardinal:M[0],ordinal:M[50]},sr:{cardinal:M[7]},ss:{cardinal:M[0]},ssy:{cardinal:M[0]},st:{cardinal:M[0]},sv:{cardinal:M[4],ordinal:M[51]},sw:{cardinal:M[4]},syr:{cardinal:M[0]},ta:{cardinal:M[0]},te:{cardinal:M[0]},teo:{cardinal:M[0]},ti:{cardinal:M[1]},tig:{cardinal:M[0]},tk:{cardinal:M[0],ordinal:M[52]},tl:{cardinal:M[13],ordinal:M[0]},tn:{cardinal:M[0]},tr:{cardinal:M[0]},ts:{cardinal:M[0]},tzm:{cardinal:M[33]},ug:{cardinal:M[0]},uk:{cardinal:M[29],ordinal:M[53]},ur:{cardinal:M[4]},uz:{cardinal:M[0]},ve:{cardinal:M[0]},vo:{cardinal:M[0]},vun:{cardinal:M[0]},wa:{cardinal:M[1]},wae:{cardinal:M[0]},xh:{cardinal:M[0]},xog:{cardinal:M[0]},yi:{cardinal:M[4]},zu:{cardinal:M[2]},lo:{ordinal:M[0]},ms:{ordinal:M[0]},vi:{ordinal:M[0]}},j=o((function(n,r){function a(n,r,i,o,l){var c=n.map((function(n){return function(n,r,i,o,l){if("string"==typeof n){var c=n;return function(){return c}}var u,d=n[0],f=n[1];if(r&&"#"===n[0]){d=r[0];var h=r[2],m=(o.number||s.number)([d,"number"],i);return function(n){return m(t(d,n)-h,n)}}"plural"===f||"selectordinal"===f?(u={},Object.keys(n[3]).forEach((function(r){u[r]=a(n[3][r],n,i,o,l)})),n=[n[0],n[1],n[2],u]):n[2]&&"object"===e(n[2])&&(u={},Object.keys(n[2]).forEach((function(r){u[r]=a(n[2][r],n,i,o,l)})),n=[n[0],n[1],u]);var p=f&&(o[f]||s[f]);if(p){var g=p(n,i);return function(n){return g(t(d,n),n)}}return l?function(n){return String(t(d,n))}:function(n){return t(d,n)}}(n,r,i,o,l)}));return l?1===c.length?c[0]:function(n){for(var r="",a=0;a<c.length;++a)r+=c[a](n);return r}:function(n){return c.reduce((function(r,a){return r.concat(a(n))}),[])}}function t(n,r){if(r&&n in r)return r[n];for(var a=n.split("."),t=r,e=0,i=a.length;t&&e<i;++e)t=t[a[e]];return t}function i(n,r){var a=n[2],t=p.number[a]||p.parseNumberPattern(a)||p.number.default;return new Intl.NumberFormat(r,t).format}function o(n,r){var a=n[1],t=n[2],e=p[a][t]||p.parseDatePattern(t)||p[a].default;return new Intl.DateTimeFormat(r,e).format}function l(n,r){var a,t="selectordinal"===n[1]?"ordinal":"cardinal",e=n[2],i=n[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(r).length>0)a=new Intl.PluralRules(r,{type:t});else{var o=g(r,w),l=o&&w[o][t]||c;a={select:l}}return function(n,r){return(i["="+ +n]||i[a.select(n-e)]||i.other)(r)}}function c(){return"other"}(r=n.exports=function(n,r,t){return a(n,null,r||"en",t||{},!0)}).toParts=function(n,r,t){return a(n,null,r||"en",t||{},!1)};var s={number:i,ordinal:i,spellout:i,duration:function(n,r){var a=n[2],t=p.duration[a]||p.duration.default,e=new Intl.NumberFormat(r,t.seconds).format,i=new Intl.NumberFormat(r,t.minutes).format,o=new Intl.NumberFormat(r,t.hours).format,l=/^fi$|^fi-|^da/.test(String(r))?".":":";return function(n,r){if(n=+n,!isFinite(n))return e(n);var a=~~(n/60/60),t=~~(n/60%60),c=(a?o(Math.abs(a))+l:"")+i(Math.abs(t))+l+e(Math.abs(n%60));return n<0?o(-1).replace(o(1),c):c}},date:o,time:o,plural:l,selectordinal:l,select:function(n,r){var a=n[2];return function(n,r){return(a[n]||a.other)(r)}}};r.types=s})),D=(j.toParts,j.types,o((function(n,r){function a(n,r){return Object.keys(r).forEach((function(a){n[a]=r[a]})),n}n.exports=function n(){var r=a({},p),t="en",i={},o=function(n){return n},l=null,c="warning",s={};function u(n,r,a){var i="string"==typeof n?n:n.default,l=m(i,"object"===e(n)&&n.id||o(i),a||t);return(l.format||(l.format=j(d(l.message),a||t,s)))(r)}u.rich=function(n,r,a){var i="string"==typeof n?n:n.default,l=m(i,"object"===e(n)&&n.id||o(i),a||t);return(l.toParts||(l.toParts=j.toParts(d(l.message,{tagsType:f}),a||t,s)))(r)};var f="<>";function h(n,r){var a=n[2];return function(n,r){var t="object"===e(a)?function(n,r){return Object.keys(n).reduce((function(a,t){return a[t]=n[t](r),a}),{})}(a,r):a;return"function"==typeof n?n(t):n}}function m(n,r,a){var t=g(a,i)||"en",e=i[t]||(i[t]={}),o=e[r];if("string"==typeof o&&(o=e[r]={message:o}),!o){var s='Translation for "'+r+'" in "'+t+'" is missing';if("warning"===c)"undefined"!=typeof console&&console.warn(s);else if("ignore"!==c)throw new Error(s);var u="function"==typeof l?l(n,r,t)||n:l||n;o=e[r]={message:u}}return o}function v(n,r,a,i,o){"object"===e(a)&&"object"!==e(i)&&(o=i,i=a,a=0);var l=g(o||t,w),c=l&&w[l][n]||x;return i["="+ +r]||i[c(r-a)]||i.other}function x(){return"other"}return s[f]=h,u.setup=function(n){return(n=n||{}).locale&&(t=n.locale),"translations"in n&&(i=n.translations||{}),n.generateId&&(o=n.generateId),"missingReplacement"in n&&(l=n.missingReplacement),n.missingTranslation&&(c=n.missingTranslation),n.formats&&(n.formats.number&&a(r.number,n.formats.number),n.formats.date&&a(r.date,n.formats.date),n.formats.time&&a(r.time,n.formats.time)),n.types&&((s=n.types)[f]=h),{locale:t,translations:i,generateId:o,missingReplacement:l,missingTranslation:c,formats:r,types:s}},u.number=function(n,a,e){var i=a&&r.number[a]||r.parseNumberPattern(a)||r.number.default;return new Intl.NumberFormat(e||t,i).format(n)},u.date=function(n,a,e){var i=a&&r.date[a]||r.parseDatePattern(a)||r.date.default;return new Intl.DateTimeFormat(e||t,i).format(n)},u.time=function(n,a,e){var i=a&&r.time[a]||r.parseDatePattern(a)||r.time.default;return new Intl.DateTimeFormat(e||t,i).format(n)},u.select=function(n,r){return r[n]||r.other},u.custom=function(n,r,a,t){return n[1]in s?s[n[1]](n,r)(a,t):a},u.plural=v.bind(null,"cardinal"),u.selectordinal=v.bind(null,"ordinal"),u.namespace=n,u}()}))),O=function(){return(O=Object.assign||function(n){for(var r,a=1,t=arguments.length;a<t;a++)for(var e in r=arguments[a])Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);return n}).apply(this,arguments)},I=function(n,r){return n?n+"."+r:r},P=function(n){return Object.keys(n).reduce((function(r,a){var t,i,o;return O({},r,((t={})[a]=(i=n[a],o={},function n(r,a){Object.keys(r).forEach((function(t){var i=r[t];"object"===e(i)?n(i,I(a,t)):o[I(a,t)]=i}))}(i,""),o),t))}),{})},F=function n(r,a){return void 0===r&&(r={}),Object.keys(a).reduce((function(r,t){return null!==a[t]&&"object"===e(a[t])?r[t]=n(r[t],a[t]):r[t]=a[t],r}),r)};function T(n){var r=s(n),a=r.subscribe,t=r.set,e=r.update;return{set:t,subscribe:a,update:function(n){return e((function(r){return F(r,n)}))}}}var E,z,N,S=T({missingTranslation:"ignore"}),A=T({}),C=u(A,(function(n){return Object.keys(n)})),R=(E=s(""),z=E.subscribe,N=E.set,{subscribe:z,update:E.update,set:function(n){return""===n||i(A)[n]?(N(n),!0):(console.error("[svelte-intl] Couldn't find the \""+n+'" locale.'),!1)}}),Z=u([R,A,S],(function(n){var r=n[0],a=n[1],t=n[2];return D.setup(O({},t,{locale:r,translations:P(a)})),D})),U=function(n){if(void 0===n&&(n="en"),"undefined"==typeof window)return n;var r=window.navigator.language||window.navigator.languages[0];if(r){var a=i(C);if(a.includes(r))return r;var t=a.find((function(n){return r.startsWith(n)}));if(t)return t}return i(R)||n};export{Z as _,C as a,o as c,U as g,R as l,c as r,A as t,s as w};
