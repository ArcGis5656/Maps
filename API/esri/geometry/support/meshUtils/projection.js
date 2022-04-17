// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection ../../projectionEllipsoid ../spatialReferenceUtils ../webMercatorUtils ../buffer/BufferView ../../../chunks/vec32".split(" "),function(h,F,x,m,G,H,y,C,p,z,A,I,f,n){function q(a,b,c,g,d,B){if(b){var D=c.count,r=z.getSphericalPCPF(d);if(E(d))for(c=0;c<D;c++)g.getVec(c,t),b.getVec(c,k),p.computeTranslationToOriginAndRotation(r,
t,u,r),m.fromMat4(e,u),1===a&&m.transpose(e,e),y.transformMat3(k,k,e),B.setVec(c,k);else for(d=0;d<D;d++){g.getVec(d,t);b.getVec(d,k);p.computeTranslationToOriginAndRotation(r,t,u,r);m.fromMat4(e,u);var l=I.y2lat(c.get(d,1));l=Math.cos(l);0===a&&(l=1/l);e[0]*=l;e[1]*=l;e[2]*=l;e[3]*=l;e[4]*=l;e[5]*=l;1===a&&m.transpose(e,e);y.transformMat3(k,k,e);y.normalize(k,k);B.setVec(d,k)}return B}}function v(a){return E(a)||a.isWebMercator}function E(a){return a.isWGS84||A.isCGCS2000(a)||A.isMars(a)||A.isMoon(a)}
const w=F.getLogger("esri.geometry.support.meshUtils.normalProjection"),t=C.create(),k=C.create(),u=H.create(),e=G.create();h.projectFromPCPF=function(a,b,c){p.projectBuffer(a,z.getSphericalPCPF(c),0,b,c,0,a.length/3);return b};h.projectNormalFromPCPF=function(a,b,c,g,d){if(!v(g))return w.error("Cannot convert to spatial reference from PCPF"),d;q(1,f.BufferViewVec3f.fromTypedArray(a),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d));
return d};h.projectNormalToPCPF=function(a,b,c,g,d){if(!v(g))return w.error("Cannot convert spatial reference to PCPF"),d;q(0,f.BufferViewVec3f.fromTypedArray(a),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d));return d};h.projectTangentFromPCPF=function(a,b,c,g,d){if(!v(g))return w.error("Cannot convert to spatial reference from PCPF"),d;q(1,f.BufferViewVec3f.fromTypedArray(a,16),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),
g,f.BufferViewVec3f.fromTypedArray(d,16));for(b=3;b<a.length;b+=4)d[b]=a[b];return d};h.projectTangentToPCPF=function(a,b,c,g,d){if(!v(g))return w.error("Cannot convert spatial reference to PCPF"),d;q(0,f.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.BufferViewVec3f64.fromTypedArray(b),f.BufferViewVec3f64.fromTypedArray(c),g,f.BufferViewVec3f.fromTypedArray(d,4*Float32Array.BYTES_PER_ELEMENT));for(b=3;b<a.length;b+=4)d[b]=a[b];return d};h.projectToPCPF=function(a,b,c){p.projectBuffer(a,
b,0,c,z.getSphericalPCPF(b),0,a.length/3);return c};h.transformNormal=function(a,b,c){if(x.isNone(a))return b;m.normalFromMat4(e,c);a=f.BufferViewVec3f.fromTypedArray(a);c=f.BufferViewVec3f.fromTypedArray(b);n.transformMat3(c,a,e);m.isOrthoNormal(e)||n.normalize(c,c);return b};h.transformPosition=function(a,b,c){if(x.isNone(a))return b;a=f.BufferViewVec3f64.fromTypedArray(a);const g=f.BufferViewVec3f64.fromTypedArray(b);n.transformMat4(g,a,c);return b};h.transformTangent=function(a,b,c){if(x.isNone(a))return b;
m.normalFromMat4(e,c);c=f.BufferViewVec3f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);const g=f.BufferViewVec3f.fromTypedArray(b,4*Float32Array.BYTES_PER_ELEMENT);n.transformMat3(g,c,e);m.isOrthoNormal(e)||n.normalize(g,g);if(a!==b)for(c=3;c<a.length;c+=4)b[c]=a[c];return b};Object.defineProperty(h,"__esModule",{value:!0})});