// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../ensureType","../metadata"],function(d,f,e){function g(a){const b="__accessorMetadata__"in a?f.ensureType(a):a;return function(...c){c.push(b);if("number"===typeof c[2])throw Error("Using @cast has parameter decorator is not supported since 4.16");return h.apply(this,c)}}function h(a,b,c,k){e.getOwnPropertyMetadata(a,b).cast=k}function l(a){return function(b,c){e.getOwnPropertyMetadata(b,a).cast=b[c]}}const m=Object.prototype.toString;d.cast=function(...a){if(3!==a.length||"string"!==
typeof a[1]){if(1===a.length&&"[object Function]"===m.call(a[0]))return g(a[0]);if(1===a.length&&"string"===typeof a[0])return l(a[0])}};Object.defineProperty(d,"__esModule",{value:!0})});