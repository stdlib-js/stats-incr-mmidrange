// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(o){var m,d,f,l,j;if(!s(o))throw new TypeError(n("0eC8T",o));return m=new i(o),d=e,f=r,j=-1,l=0,function(s){var e,r;if(0===arguments.length)return 0===l?null:(f+d)/2;j=(j+1)%o,0===s&&(s=0);if(t(s))l=o,d=s,f=s;else if(l<o)l+=1,s<d&&(d=s),s>f&&(f=s);else if(m[j]===d&&s>d||m[j]===f&&s<f||t(m[j])){for(d=s,f=s,r=0;r<o;r++)if(r!==j){if(e=m[r],t(e)){d=e,f=e;break}e<d&&(d=e),e>f&&(f=e)}}else s<d?d=s:s>f&&(f=s);return m[j]=s,(f+d)/2}}export{o as default};
//# sourceMappingURL=index.mjs.map