// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./maybe","./RandomLCG"],function(h,m,y){function q(a){return a}function r(a,c=q){if(a&&0!==a.length){var b=a[0],d=c(b);for(let e=1;e<a.length;++e){const f=a[e],g=Number(c(f));g>d&&(d=g,b=f)}return b}}function t(a,c,b,d){d=d||u;var e=Math.max(0,d.last-10);for(let f=e;f<b;++f)if(a[f]===c)return d.last=f;b=Math.min(e,b);for(e=0;e<b;++e)if(a[e]===c)return d.last=e;return-1}function v(a){return a?(w.seed=a,()=>w.getFloat()):Math.random}const z=!!Array.prototype.fill;let x=function(){this.last=
0};const u=new x,k=new Set,w=new y;h.PositionHint=x;h.binaryFindClosest=function(a,c,b){if(a&&0!==a.length){var d=a.length-1,e=a[0];if(c<=b(e))return e;e=a[d];if(c>=b(e))return e;var f=0;e=0;for(var g=d;f<g;){e=f+Math.floor((g-f)/2);const n=a[e],p=b(n);if(p===c)return n;if(c<p){if(0<e){g=a[e-1];var l=b(g);if(c>l)return c-l>=p-c?n:g}g=e}else{if(e<d&&(f=a[e+1],l=b(f),c<l))return c-p>=l-c?f:n;f=e+1}}return a[e]}};h.binaryIndexOf=function(a,c,b){const d=a.length;let e=0;for(var f=d-1;e<f;){const g=e+
Math.floor((f-e)/2);c>a[g]?e=g+1:f=g}f=a[e];return b?c>=a[d-1]?-1:f===c?e:e-1:f===c?e:-1};h.constant=function(a,c){if(z)return Array(a).fill(c);const b=Array(a);for(let d=0;d<a;d++)b[d]=c;return b};h.difference=function(a,c,b){let d,e;b?(d=c.filter(f=>!a.some(g=>b(g,f))),e=a.filter(f=>!c.some(g=>b(g,f)))):(d=c.filter(f=>!a.includes(f)),e=a.filter(f=>!c.includes(f)));return{added:d,removed:e}};h.equals=function(a,c,b){if(m.isNone(a)&&m.isNone(c))return!0;if(m.isNone(a)||m.isNone(c)||a.length!==c.length)return!1;
if(b)for(let d=0;d<a.length;d++){if(!b(a[d],c[d]))return!1}else for(b=0;b<a.length;b++)if(a[b]!==c[b])return!1;return!0};h.first=function(a){if(a)return 0<a.length?a[0]:void 0};h.flatten=function(a){return a.reduce((c,b)=>c.concat(b||[]),[])};h.indexOf=t;h.intersect=function(a,c,b){return a&&c?b?a.filter(function(d){return-1<c.findIndex(function(e){return b(d,e)})}):a.filter(function(d){return-1<c.indexOf(d)}):[]};h.isArrayLike=function(a){return a&&"number"===typeof a.length};h.last=function(a){if(a){var c=
a.length;return 0<c?a[c-1]:void 0}};h.max=r;h.min=function(a,c=q){return r(a,b=>-c(b))};h.pickRandom=function(a,c,b){const d=a.length;if(c>=d)return a.slice(0);b=v(b);const e=new Set,f=[];for(;f.length<c;){const g=Math.floor(b()*d);e.has(g)||(e.add(g),f.push(a[g]))}return f};h.range=function(a,c){void 0===c&&(c=a,a=0);const b=Array(c-a);for(let d=a;d<c;d++)b[d-a]=d;return b};h.remove=function(a,c){const b=a.indexOf(c);return-1!==b?(a.splice(b,1),c):null};h.removeUnordered=function(a,c,b,d){const e=
null==b?a.length:b;d=t(a,c,e,d);if(-1!==d)return a[d]=a[e-1],null==b&&a.pop(),c};h.removeUnorderedMany=function(a,c,b=a.length,d=c.length,e,f){if(0===d||0===b)return b;k.clear();for(let g=0;g<d;++g)k.add(c[g]);e=e||u;c=Math.max(0,e.last-10);for(d=c;d<b;++d)if(k.has(a[d])&&(f&&f.push(a[d]),k.delete(a[d]),a[d]=a[b-1],--b,--d,0===k.size||0===b))return k.clear(),b;for(d=0;d<c;++d)if(k.has(a[d])&&(f&&f.push(a[d]),k.delete(a[d]),a[d]=a[b-1],--b,--d,0===k.size||0===b))return k.clear(),b;k.clear();return b};
h.shuffle=function(a,c){c=v(c);for(let b=a.length-1;0<b;b--){const d=Math.floor(c()*(b+1)),e=a[b];a[b]=a[d];a[d]=e}return a};h.splitIntoChunks=function(a,c){const b=a.length;if(0===b)return[];const d=[];for(let e=0;e<b;e+=c)d.push(a.slice(e,e+c));return d};h.unique=function(a,c){return c?a.filter((b,d,e)=>e.findIndex(c.bind(null,b))===d):a.filter((b,d,e)=>e.indexOf(b)===d)};Object.defineProperty(h,"__esModule",{value:!0})});