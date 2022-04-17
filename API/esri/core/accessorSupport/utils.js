// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../handleUtils","../lang","../maybe"],function(g,t,u,v){function p(a){return a?a.__accessor__?a.__accessor__:a.propertyInvalidated?a:null:null}function k(a,b,c){return b?Object.keys(b).reduce(function(d,e){let m=null;var f="merge";c&&(m=c.path?`${c.path}.${e}`:e,f=c.policy(m));if("replace"===f)return d[e]=b[e],d;if(void 0===d[e])return d[e]=u.clone(b[e]),d;let h=d[e];f=b[e];if(h===f)return d;if(Array.isArray(f)||Array.isArray(d))h=h?Array.isArray(h)?d[e]=h.concat():d[e]=[h]:d[e]=
[],f&&(Array.isArray(f)||(f=[f]),f.forEach(l=>{-1===h.indexOf(l)&&h.push(l)}));else if(f&&"object"===typeof f)if(c){const l=c.path;c.path=v.assumeNonNull(m);d[e]=k(h,f,c);c.path=l}else d[e]=k(h,f,null);else if(!d.hasOwnProperty(e)||b.hasOwnProperty(e))d[e]=f;return d},a||{}):a}function n(a){return Array.isArray(a)?a:a.split(".")}function q(a){return-1<a.indexOf(",")?a.split(",").map(b=>b.trim()):[a.trim()]}function r(a){if(Array.isArray(a)){const b=[];for(const c of a)b.push(...q(c));return b}return q(a)}
g.getDependsInfo=function(a,b){const c=p(a);return c?c.getDependsInfo(a,b,""):""};g.getProperties=p;g.isPropertyDeclared=function(a,b){return null!=a&&a.metadatas&&null!=a.metadatas[b]};g.merge=function(a,b,c){return c?k(a,b,{policy:c,path:""}):k(a,b,null)};g.once=function(a){let b=!1;return()=>{b||(b=!0,a())}};g.parse=function(a,b,c,d){b=r(b);return 1!==b.length?(b=b.map(e=>d(a,e,c)),t.handlesGroup(b)):d(a,b[0],c)};g.parseConditionalPath=function(a){if(-1===a.indexOf("?"))return null;a=n(a);const b=
Array(a.length);for(let c=0;c<a.length;c++){const d=a[c];b[c]="?"===d[d.length-1];b[c]&&(a[c]=d.slice(0,-1))}return{fullPath:a.join("."),conditional:b}};g.pathToArray=n;g.pathToStringOrArray=function(a){return!a||"string"===typeof a&&-1===a.indexOf(".")?a:n(a)};g.splitPath=r;Object.defineProperty(g,"__esModule",{value:!0})});