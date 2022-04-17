/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{a as n}from"./aaBoundingRect.js";import{c as t}from"./extentUtils.js";import{a as i}from"../geometry/Extent.js";import{isPoint as s,isMultipoint as m,isExtent as e,isPolygon as x,isPolyline as a}from"../geometry/support/jsonUtils.js";import{c as o,g as r,o as f}from"./normalizeUtilsCommon.js";import{g as c,i as l}from"../geometry/SpatialReference.js";function u(n){if(!n)return null;let u=null;const d=n.spatialReference,j=c(d);if(!j)return"toJSON"in n?n.toJSON():n;const S=l(d)?102100:4326,v=o[S].maxX,J=o[S].minX,M=o[S].plus180Line,N=o[S].minus180Line;let O;const P="toJSON"in n?n.toJSON():n;if(s(P))O=y(P,v,J);else if(m(P))P.points=P.points.map((n=>y(n,v,J))),O=P;else if(e(P))O=function(n,t){if(!t)return n;const i=function(n,t){const i=[],{ymin:s,ymax:m}=n,e=n.xmax-n.xmin,x=n.xmin,a=n.xmax;let o;const[r,f]=t.valid;o=p(n.xmin,t);const c=o.x,l=o.frameId;o=p(n.xmax,t);const u=o.x,y=o.frameId,d=c===u&&e>0;if(e>2*f){const n={xmin:x<a?c:u,ymin:s,xmax:f,ymax:m},t={xmin:r,ymin:s,xmax:x<a?u:c,ymax:m},e={xmin:0,ymin:s,xmax:f,ymax:m},o={xmin:r,ymin:s,xmax:0,ymax:m},p=[],d=[];h(n,e)&&p.push(l),h(n,o)&&d.push(l),h(t,e)&&p.push(y),h(t,o)&&d.push(y);for(let n=l+1;n<y;n++)p.push(n),d.push(n);i.push({extent:n,frameIds:[l]},{extent:t,frameIds:[y]},{extent:e,frameIds:p},{extent:o,frameIds:d})}else c>u||d?i.push({extent:{xmin:c,ymin:s,xmax:f,ymax:m},frameIds:[l]},{extent:{xmin:r,ymin:s,xmax:u,ymax:m},frameIds:[y]}):i.push({extent:{xmin:c,ymin:s,xmax:u,ymax:m},frameIds:[l]});return i}(n,t).map((n=>n.extent));if(i.length<2)return i[0]||n;if(i.length>2)return n.xmin=t.valid[0],n.xmax=t.valid[1],n;return{rings:i.map((n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]))}}(P,j);else if(x(P)||a(P)){const n=I;t(n,P);const s={xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3]},m=f(s.xmin,J)*(2*v),e=0===m?P:function(n,t){const i=r(n);for(const n of i)for(const i of n)i[0]+=t;return n}(P,m);s.xmin+=m,s.xmax+=m,i(s,M)&&s.xmax!==v||i(s,N)&&s.xmin!==J?u=e:O=e}else O=P;if(null!==u){return(new g).cut(u,v)}return O}function y(n,t,i){if(Array.isArray(n)){const s=n[0];if(s>t){const i=f(s,t);n[0]=s+i*(-2*t)}else if(s<i){const t=f(s,i);n[0]=s+t*(-2*i)}}else{const s=n.x;if(s>t){const i=f(s,t);n.x+=i*(-2*t)}else if(s<i){const t=f(s,i);n.x+=t*(-2*i)}}return n}function p(n,t){const[i,s]=t.valid,m=2*s;let e,x=0;return n>s?(e=Math.ceil(Math.abs(n-s)/m),n-=e*m,x=e):n<i&&(e=Math.ceil(Math.abs(n-i)/m),n+=e*m,x=-e),{x:n,frameId:x}}function h(n,t){const{xmin:i,ymin:s,xmax:m,ymax:e}=t;return d(n,i,s)&&d(n,i,e)&&d(n,m,e)&&d(n,m,s)}function d(n,t,i){return t>=n.xmin&&t<=n.xmax&&i>=n.ymin&&i<=n.ymax}class g{cut(n,t){let i;if(n.rings)this.closed=!0,i=n.rings,this.minPts=4;else{if(!n.paths)return null;this.closed=!1,i=n.paths,this.minPts=2}const s=i.length,m=-2*t;for(let n=0;n<s;n++){const t=i[n];if(t&&t.length>=this.minPts){const n=[];for(const i of t)n.push([i[0]+m,i[1]]);i.push(n)}}return this.closed?n.rings=i:n.paths=i,n}}const I=n();export{u as n};
