// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../intl","../../intl/number"],function(h,A,r){function t(a,b){return a-b}function u(a,b){let c;c=Number(a.toFixed(b));c<a?a=c+1/10**b:(a=c,c-=1/10**b);c=Number(c.toFixed(b));a=Number(a.toFixed(b));return[c,a]}function v(a,b,c,f,d){a=p(a,b,c,f);b=null==a.next||a.next<=d;return(null==a.previous||a.previous<=d)&&b||a.previous+a.next<=2*d}function l(a){a=String(a);var b=a.match(w);if(b&&b[1])return{integer:b[1].split("").length,fractional:b[3]?b[3].split("").length:0};if(-1<a.toLowerCase().indexOf("e")&&
(b=a.split("e"),a=b[0],b=b[1],a&&b)){a=Number(a);b=Number(b);const c=0<b;c||(b=Math.abs(b));a=l(a);c?(a.integer+=b,a.fractional=b>a.fractional?0:a.fractional-b):(a.fractional+=b,a.integer=b>a.integer?1:a.integer-b);return a}return{integer:0,fractional:0}}function p(a,b,c,f){const d={previous:null,next:null};if(null!=c){const e=a-c;d.previous=Math.floor(Math.abs(100*(b-c-e)/e))}null!=f&&(a=f-a,d.next=Math.floor(Math.abs(100*(f-b-a)/a)));return d}const w=/^-?(\d+)(\.(\d+))?$/i,x={maximumFractionDigits:20};
h.format=function(a){return r.formatNumber(a,x)};h.numDigits=l;h.percentChange=p;h.round=function(a,b={}){a=a.slice(0);const {tolerance:c=2,strictBounds:f=!1,indexes:d=a.map((g,k)=>k)}=b;d.sort(t);for(b=0;b<d.length;b++){const g=d[b],k=a[g],y=0===g?null:a[g-1],z=g===a.length-1?null:a[g+1],q=l(k).fractional;if(q){let m=0,n=!1;for(var e=void 0;m<=q&&!n;)e=u(k,m),e=f&&0===b?e[1]:e[0],n=v(k,e,y,z,c),m++;n&&(a[g]=e)}}return a};Object.defineProperty(h,"__esModule",{value:!0})});