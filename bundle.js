// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmmidrange=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,x=y;var V=E,S=function(r){var e,t,n;if(null==r)return x.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[T]=t:delete r[T],n},A=b()?S:V,k=Number,F=k.prototype.toString;var I=A,R=k,$=function(r){try{return F.call(r),!0}catch(r){return!1}},M=b();var N=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===I(r)))},C=m,B=N;var G=d,L=function(r){return C(r)||B(r)},Z=N;G(L,"isPrimitive",m),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=k.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=d,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>0},pr=fr.isObject;var vr=function(r){return pr(r)&&r.valueOf()>0},gr=lr,dr=vr;var mr=d,hr=function(r){return gr(r)||dr(r)},br=vr;mr(hr,"isPrimitive",lr),mr(hr,"isObject",br);var yr=hr;var wr=function(r){return r!=r},Er=A,jr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null,_r=function(r){return jr&&r instanceof Float64Array||"[object Float64Array]"===Er(r)},Or=Pr;var Tr="function"==typeof Float64Array?Float64Array:void 0,xr=function(){throw new Error("not implemented")},Vr=function(){var r,e;if("function"!=typeof Or)return!1;try{e=new Or([1,3.14,-3.14,NaN]),r=_r(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Tr:xr;var Sr=function(r){return"string"==typeof r},Ar=String.prototype.valueOf;var kr=A,Fr=function(r){try{return Ar.call(r),!0}catch(r){return!1}},Ir=b();var Rr=function(r){return"object"==typeof r&&(r instanceof String||(Ir?Fr(r):"[object String]"===kr(r)))},$r=Sr,Mr=Rr;var Nr=d,Cr=function(r){return $r(r)||Mr(r)},Br=Rr;Nr(Cr,"isPrimitive",Sr),Nr(Cr,"isObject",Br);var Gr=Cr,Lr=Y;var Zr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Lr(r.length)&&r.length>=0&&r.length<=9007199254740991},Wr=W.isPrimitive,Xr=wr;var zr=function(r){return Wr(r)&&Xr(r)},Ur=W.isObject,Yr=wr;var Dr=function(r){return Ur(r)&&Yr(r.valueOf())},qr=zr,Hr=Dr;var Jr=d,Kr=function(r){return qr(r)||Hr(r)},Qr=Dr;Jr(Kr,"isPrimitive",zr),Jr(Kr,"isObject",Qr);var re=Zr,ee=fr.isPrimitive,te=Gr.isPrimitive,ne=Kr.isPrimitive;var ie=function(r,e,t){var n,i,a;if(!re(r)&&!te(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ee(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(te(r)){if(!te(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ne(e)){for(a=i;a<n;a++)if(ne(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},ae=ie,oe=Gr.isPrimitive;var ue=function(r){if(!oe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ce=Gr.isPrimitive;var fe=function(r){if(!ce(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},se=ue,le=fe,pe=Gr.isPrimitive;var ve=function(r){return pe(r)&&r===le(r)&&r!==se(r)},ge=X,de=z;var me=function(r){return r==r&&r>de&&r<ge},he=fr.isPrimitive;var be=function(r){return he(r)&&r>=0},ye=fr.isObject;var we=function(r){return ye(r)&&r.valueOf()>=0},Ee=be,je=we;var Pe=d,_e=function(r){return Ee(r)||je(r)},Oe=we;Pe(_e,"isPrimitive",be),Pe(_e,"isObject",Oe);var Te=_e.isPrimitive,xe=Gr.isPrimitive;var Ve=function(r,e){var t,n;if(!xe(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Te(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Se=fr.isPrimitive,Ae=Gr.isPrimitive;var ke=function(r,e,t){var n,i;if(!Ae(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Se(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Fe=Ve,Ie=ke;var Re=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Ie(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Fe("0",i):Fe("0",i)+r,n&&(r="-"+r)),r},$e=ve,Me=fe,Ne=ue,Ce=me,Be=W.isPrimitive,Ge=Re;var Le=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ce(n)){if(!Be(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ge(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ge(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=$e(r.specifier)?Me(t):Ne(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ze=Gr.isPrimitive,We=/[-\/\\^$*+?.()|[\]{}]/g;var Xe=function(r){var e,t;if(!Ze(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(We,"\\$&"):(e=(e=r.substring(1,t)).replace(We,"\\$&"),r=r[0]+e+r.substring(t))},ze=/./;var Ue=function(r){return"boolean"==typeof r},Ye=Boolean.prototype.toString;var De=A,qe=function(r){try{return Ye.call(r),!0}catch(r){return!1}},He=b();var Je=function(r){return"object"==typeof r&&(r instanceof Boolean||(He?qe(r):"[object Boolean]"===De(r)))},Ke=Ue,Qe=Je;var rt=d,et=function(r){return Ke(r)||Qe(r)},tt=Je;rt(et,"isPrimitive",Ue),rt(et,"isObject",tt);var nt=et;var it=function(){return new Function("return this;")()},at="object"==typeof self?self:null,ot="object"==typeof window?window:null,ut="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ct="object"==typeof ut?ut:null;module.exports=ct;var ft=nt.isPrimitive,st=it,lt=at,pt=ot,vt=r(Object.freeze({__proto__:null}));var gt=function(r){if(arguments.length){if(!ft(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return st()}if(lt)return lt;if(pt)return pt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")},dt=gt(),mt=dt.document&&dt.document.childNodes,ht=Int8Array,bt=ze,yt=mt,wt=ht;var Et=function(){return"function"==typeof bt||"object"==typeof wt||"function"==typeof yt};var jt=function(){return/^\s*function\s*([^(]*)/i},Pt=jt;d(Pt,"REGEXP",jt());var _t=Pt,Ot=A;var Tt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ot(r)};var xt=function(r){return null!==r&&"object"==typeof r};d(xt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Tt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xt));var Vt=xt;var St=A,At=_t.REGEXP,kt=function(r){return Vt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Ft=function(r){var e,t,n;if(("Object"===(t=St(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=At.exec(n.toString()))return e[1]}return kt(r)?"Buffer":t},It=Ft;var Rt=Ft;var $t=function(r){var e;return null===r?"null":"object"===(e=typeof r)?It(r).toLowerCase():e},Mt=function(r){return Rt(r).toLowerCase()},Nt=Et()?Mt:$t;var Ct=function(r){return"function"===Nt(r)},Bt=RegExp.prototype.exec;var Gt=A,Lt=function(r){try{return Bt.call(r),!0}catch(r){return!1}},Zt=b();var Wt=Xe,Xt=Ct,zt=Gr.isPrimitive,Ut=function(r){return"object"==typeof r&&(r instanceof RegExp||(Zt?Lt(r):"[object RegExp]"===Gt(r)))};var Yt=ve,Dt=fe,qt=ue,Ht=function(r,e,t){if(!zt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(zt(e))e=Wt(e),e=new RegExp(e,"g");else if(!Ut(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!zt(t)&&!Xt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Jt=me,Kt=W.isPrimitive,Qt=function(r){return Math.abs(r)},rn=/e\+(\d)$/,en=/e-(\d)$/,tn=/^(\d+)$/,nn=/^(\d+)e/,an=/\.0$/,on=/\.0*e/,un=/(\..*[^0])0*e/;var cn=function(r){var e,t,n=parseFloat(r.arg);if(!Jt(n)){if(!Kt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Qt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ht(t,un,"$1e"),t=Ht(t,on,"e"),t=Ht(t,an,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ht(t,rn,"e+0$1"),t=Ht(t,en,"e-0$1"),r.alternate&&(t=Ht(t,tn,"$1."),t=Ht(t,nn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Yt(r.specifier)?Dt(t):qt(t)},fn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var sn=Ve;var ln=Gr.isPrimitive,pn=ae,vn=wr,gn=Le,dn=cn,mn=function(r){var e,t,n,i,a;for(e=0,n=[],a=fn.exec(r);a;)(t=r.slice(e,fn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=fn.lastIndex,a=fn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},hn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+sn(" ",n):sn(" ",n)+r},bn=Re,yn=String.fromCharCode;var wn=function(r){var e,t,n,i,a,o,u,c,f;if(!ln(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=mn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],ln(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!pn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,vn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,vn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=gn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!vn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=vn(a)?String(n.arg):yn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=dn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=bn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=hn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},En=yr.isPrimitive,jn=wr,Pn=X,_n=z,On=Vr,Tn=wn;var xn=function(r){var e,t,n,i,a;if(!En(r))throw new TypeError(Tn("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new On(r),t=Pn,n=_n,a=-1,i=0,function(o){var u,c;if(0===arguments.length)return 0===i?null:(n+t)/2;a=(a+1)%r,0===o&&(o=0);if(jn(o))i=r,t=o,n=o;else if(i<r)i+=1,o<t&&(t=o),o>n&&(n=o);else if(e[a]===t&&o>t||e[a]===n&&o<n||jn(e[a])){for(t=o,n=o,c=0;c<r;c++)if(c!==a){if(u=e[c],jn(u)){t=u,n=u;break}u<t&&(t=u),u>n&&(n=u)}}else o<t?t=o:o>n&&(n=o);return e[a]=o,(n+t)/2}};return xn}));
//# sourceMappingURL=bundle.js.map
