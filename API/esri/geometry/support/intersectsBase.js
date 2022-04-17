// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./contains"],function(m,n){function z(a,b){return n.extentContainsPoint(a,b)}function A(a,b){var c=a.hasZ&&b.hasZ;if(a.xmin<=b.xmin){var d=b.xmin;if(a.xmax<d)return!1}else if(d=a.xmin,b.xmax<d)return!1;if(a.ymin<=b.ymin){if(d=b.ymin,a.ymax<d)return!1}else if(d=a.ymin,b.ymax<d)return!1;if(c&&b.hasZ)if(a.zmin<=b.zmin){if(c=b.zmin,a.zmax<c)return!1}else if(c=a.zmin,b.zmax<c)return!1;return!0}function B(a,b){const {points:c,hasZ:d}=b;b=d?n.extentContainsCoords3D:n.extentContainsCoords2D;
for(const e of c)if(b(a,e))return!0;return!1}function C(a,b){p[0]=a.xmin;p[1]=a.ymax;q[0]=a.xmax;q[1]=a.ymax;r[0]=a.xmin;r[1]=a.ymin;t[0]=a.xmax;t[1]=a.ymin;for(var c of H)if(n.polygonContainsCoords(b,c))return!0;for(const d of b.rings)if(d.length){b=d[0];if(n.extentContainsCoords2D(a,b))return!0;for(c=1;c<d.length;c++){const e=d[c];if(n.extentContainsCoords2D(a,e)||D(b,e,E))return!0;b=e}}return!1}function F(a,b){p[0]=a.xmin;p[1]=a.ymax;q[0]=a.xmax;q[1]=a.ymax;r[0]=a.xmin;r[1]=a.ymin;t[0]=a.xmax;
t[1]=a.ymin;b=b.paths;for(const c of b){if(!b.length)continue;let d=c[0];if(n.extentContainsCoords2D(a,d))return!0;for(let e=1;e<c.length;e++){const g=c[e];if(n.extentContainsCoords2D(a,g)||D(d,g,E))return!0;d=g}}return!1}function D(a,b,c){for(let d=0;d<c.length;d++)if(x(a,b,c[d][0],c[d][1]))return!0;return!1}function x(a,b,c,d,e){const [g,h]=a,[l,u]=b,[k,w]=c,[I,J]=d;var v=I-k;a=g-k;b=l-g;const G=J-w;c=h-w;d=u-h;const y=G*b-v*d;if(0===y)return!1;v=(v*c-G*a)/y;a=(b*c-d*a)/y;return 0<=v&&1>=v&&0<=
a&&1>=a?(e&&(e[0]=g+v*(l-g),e[1]=h+v*(u-h)),!0):!1}const p=[0,0],q=[0,0],r=[0,0],t=[0,0],H=[p,q,r,t],E=[[r,p],[p,q],[q,t],[t,r]],f=[0,0];m.extentIntersectsExtent=A;m.extentIntersectsMultipoint=B;m.extentIntersectsPoint=z;m.extentIntersectsPolygon=C;m.extentIntersectsPolyline=F;m.getFeatureExtentIntersector=function(a){switch(a){case "esriGeometryEnvelope":case "extent":return A;case "esriGeometryMultipoint":case "multipoint":return B;case "esriGeometryPoint":case "point":return z;case "esriGeometryPolygon":case "polygon":return C;
case "esriGeometryPolyline":case "polyline":return F}};m.isSelfIntersecting=function(a){for(let u=0;u<a.length;u++){const k=a[u];for(var b=0;b<k.length-1;b++){var c=k[b],d=k[b+1];for(var e=u+1;e<a.length;e++)for(var g=0;g<a[e].length-1;g++){var h=a[e][g],l=a[e][g+1];if(x(c,d,h,l,f)&&!(f[0]===c[0]&&f[1]===c[1]||f[0]===h[0]&&f[1]===h[1]||f[0]===d[0]&&f[1]===d[1]||f[0]===l[0]&&f[1]===l[1]))return!0}}b=k.length;if(!(4>=b))for(c=0;c<b-3;c++)for(d=b-1,0===c&&(d=b-2),e=k[c],g=k[c+1],h=c+2;h<d;h++){l=k[h];
const w=k[h+1];if(x(e,g,l,w,f)&&!(f[0]===e[0]&&f[1]===e[1]||f[0]===l[0]&&f[1]===l[1]||f[0]===g[0]&&f[1]===g[1]||f[0]===w[0]&&f[1]===w[1]))return!0}}return!1};m.segmentIntersects=x;Object.defineProperty(m,"__esModule",{value:!0})});