// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../Color","./utils"],function(u,l,p,g,x){function v(a,c){const b=[],d=a.length-1;5===a.length?b.push(0,2,4):b.push(0,d);return a.map((e,h)=>-1<b.indexOf(h)?x.createStopLabel(e,h,d,c):null)}function q(){q=p._asyncToGenerator(function*(a,c,b){let d=!1,e=[],h=[];if(a.stops){var f=a.stops;e=f.map(k=>k.value);(d=f.some(k=>!!k.label))&&(h=f.map(k=>k.label))}f=e[e.length-1];if(null==e[0]&&null==f)return null;const m=d?null:v(e,
b);return(yield Promise.all(e.map(function(){var k=p._asyncToGenerator(function*(n,r){const B="opacity"===a.type?yield y(n,a,c):(yield new Promise((z,A)=>u(["../../../renderers/visualVariables/support/visualVariableUtils"],z,A))).getColor(a,n);return{value:n,color:B,label:d?h[r]:m[r]}});return function(n,r){return k.apply(this,arguments)}}()))).reverse()});return q.apply(this,arguments)}function y(a,c){return t.apply(this,arguments)}function t(){t=p._asyncToGenerator(function*(a,c,b=C){b=new g(b);
a=(yield new Promise((d,e)=>u(["../../../renderers/visualVariables/support/visualVariableUtils"],d,e))).getOpacity(c,a);null!=a&&(b.a=a);return b});return t.apply(this,arguments)}function w(a,c){const {startIndex:b,endIndex:d,weight:e}=D(a,c);if(b===d)return c[b].color;a=g.blendColors(c[b].color,c[d].color,e);return new g(a)}function D(a,c){let b=0,d=c.length-1;c.some((e,h)=>{if(a<e.value)return d=h,!0;b=h;return!1});return{startIndex:b,endIndex:d,weight:(a-c[b].value)/(c[d].value-c[b].value)}}const C=
new g([64,64,64]);l.getColorFromPointCloudStops=w;l.getRampStops=function(a,c,b){return q.apply(this,arguments)};l.getRampStopsForPointCloud=function(a){let c=!1,b=[],d=[];b=a.map(f=>f.value);(c=a.some(f=>!!f.label))&&(d=a.map(f=>f.label));const e=b[b.length-1];if(null==b[0]&&null==e)return null;const h=c?null:v(b,!1);return b.map((f,m)=>{const k=w(f,a);return{value:f,color:k,label:c?d[m]:h[m]}}).reverse()};l.getStrectchRampStops=function(a,c){let b=[];if(a&&"multipart"===a.type)a.colorRamps.reverse().forEach(function(d,
e){0===e?b.push({value:c.max,color:new g(d.toColor),label:"high"}):b.push({value:null,color:new g(d.toColor),label:""});e===a.colorRamps.length-1?b.push({value:c.min,color:new g(d.fromColor),label:"low"}):b.push({value:null,color:new g(d.fromColor),label:""})});else{let d,e;a&&"algorithmic"===a.type?(d=a.fromColor,e=a.toColor):(d=[0,0,0,1],e=[255,255,255,1]);b=[{value:c.max,color:new g(e),label:"high"},{value:c.min,color:new g(d),label:"low"}]}return b};Object.defineProperty(l,"__esModule",{value:!0})});