// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../core/Logger ../core/object ../core/string ./date ./number".split(" "),function(k,n,p,q,e,f){function g(c){switch(typeof c){case "string":return c;case "number":return f.formatNumber(c);case "boolean":return""+c;default:return c instanceof Date?e.formatDate(c):""}}const l=n.getLogger("esri.intl");k.substitute=function(c,r,t={}){const {format:m={}}=t;return q.replace(c,b=>{{const h=b.indexOf(":");if(-1===h)var d=b.trim();else{d=b.slice(0,h).trim();var a=b.slice(h+1).trim()}if(d)if(b=
p.getDeepValue(d,r),null==b)a="";else if(d=m[a]||m[d])b:switch(d.type){case "date":a=e.formatDate(b,d.intlOptions);break b;case "number":a=f.formatNumber(b,d.intlOptions);break b;default:l.warn("missing format descriptor for key {key}"),a=g(b)}else if(a)b:switch(a.toLowerCase()){case "dateformat":a=e.formatDate(b);break b;case "numberformat":a=f.formatNumber(b);break b;default:l.warn(`inline format is unsupported since 4.12: ${a}`),a=/^(dateformat|datestring)/i.test(a)?e.formatDate(b):/^numberformat/i.test(a)?
f.formatNumber(b):g(b)}else a=g(b);else a=""}return a})};Object.defineProperty(k,"__esModule",{value:!0})});