// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var m=t.isPrimitive,d=s,o=e,a=i,l=r,f=n;var j=function(t){var s,e,i,r,n;if(!m(t))throw new TypeError(f("invalid argument. Must provide a positive integer. Value: `%s`.",t));return s=new l(t),e=o,i=a,n=-1,r=0,function(m){var o,a;if(0===arguments.length)return 0===r?null:(i+e)/2;n=(n+1)%t,0===m&&(m=0);if(d(m))r=t,e=m,i=m;else if(r<t)r+=1,m<e&&(e=m),m>i&&(i=m);else if(s[n]===e&&m>e||s[n]===i&&m<i||d(s[n])){for(e=m,i=m,a=0;a<t;a++)if(a!==n){if(o=s[a],d(o)){e=o,i=o;break}o<e&&(e=o),o>i&&(i=o)}}else m<e?e=m:m>i&&(i=m);return s[n]=m,(i+e)/2}};export{j as default};
//# sourceMappingURL=index.mjs.map
