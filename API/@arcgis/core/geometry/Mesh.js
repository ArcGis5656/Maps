/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Error.js";import{HandleOwnerMixin as r}from"../core/HandleOwner.js";import{L as n}from"../chunks/Loadable.js";import{L as o}from"../chunks/Logger.js";import{i as s,b as i}from"../core/lang.js";import{a}from"../chunks/Promise.js";import{whenOrAbort as l,eachAlwaysValues as c,isAborted as p,throwIfAborted as u}from"../core/promiseUtils.js";import{r as f}from"../chunks/reactiveUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{b as g,g as d,t as x,n as y,e as v,s as w,Z as j,j as b,f as A,k}from"../chunks/mathUtils.js";import M from"./Extent.js";import R from"./Geometry.js";import F from"./Point.js";import P from"./Polygon.js";import{c as O,a as U,b as z,d as L,f as C}from"../chunks/axisAngleDegrees.js";import S,{M as $,a as T}from"./support/MeshComponent.js";import{i as I,u as B,g as E,a as G,M as Z}from"../chunks/georeference.js";import{t as q}from"../chunks/triangulationUtils.js";import{projectPointToVector as D,computeTranslationToOriginAndRotation as V}from"./projection.js";import{makeRelative as H,removeFile as N}from"../core/urlUtils.js";import{f as W}from"../chunks/mat3.js";import{c as _}from"../chunks/quatf64.js";import{c as J}from"../chunks/mat4f64.js";import{a as K}from"../chunks/projectionEllipsoid.js";import{p as Q,a as X,b as Y,c as tt,d as et,e as rt}from"../chunks/projection.js";import{i as nt,r as ot}from"../chunks/mat4.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../core/watchUtils.js";import"../chunks/common.js";import"./SpatialReference.js";import"../chunks/JSONSupport.js";import"../chunks/writer.js";import"./support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/extentUtils.js";import"../chunks/zmUtils.js";import"../chunks/quat.js";import"./support/MeshMaterial.js";import"../Color.js";import"../chunks/colorUtils.js";import"./support/MeshTexture.js";import"../chunks/persistableUrlUtils.js";import"../chunks/screenshotUtils.js";import"./support/MeshMaterialMetallicRoughness.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/vec3.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import"./Multipoint.js";import"../chunks/pe.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"./Polyline.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"./support/GeographicTransformation.js";import"./support/GeographicTransformationStep.js";import"../chunks/zscale.js";const st=o.getLogger("esri.geometry.support.meshUtils.centerAt");function it(t,e,r){var n;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const o=null!=(n=null==r?void 0:r.origin)?n:t.origin;if(s(t.transform))null!=(null==r?void 0:r.geographic)&&r.geographic!==t.transform.geographic&&st.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function(t,e,r){const n=e.x-r.x,o=e.y-r.y,s=e.hasZ&&r.hasZ?e.z-r.z:0,i=t.origin;t.origin=[i[0]+n,i[1]+o,i[2]+s]}(t.transform,e,o);else{I(t.spatialReference,r)?function(t,e,r){const n=B(t.vertexAttributes,r,{geographic:!0}),{position:o,normal:s,tangent:i}=E(n,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}(t,e,o):function(t,e,r){const n=lt,o=at;if(!D(e,o,t.spatialReference))return void st.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`);if(!D(r,n,t.spatialReference)){const e=t.origin;n[0]=e.x,n[1]=e.y,n[2]=e.z,st.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}(function(t,e,r){if(!t)return;for(let n=0;n<t.length;n+=3)for(let o=0;o<3;o++)t[n+o]+=e[o]-r[o]})(t.vertexAttributes.position,o,n),t.vertexAttributesChanged()}(t,e,o)}}const at=g(),lt=g();function ct(t){const e=N(t.url);return r=>{var n;const o=H(r,e,e),s=o?o.replace(/^ *\.\//,""):null;return null!=(n=t.files.get(s))?n:r}}async function pt(t,r){return t instanceof Blob?ut.fromBlob(t):"string"==typeof t?new ut(t):Array.isArray(t)?async function(t,r){const n=new Map;let o=null;const s=await c(t.map((async t=>({name:t.name,source:await pt(t instanceof Blob?t:t.source,r)})))),a=[];for(const t of s)t&&(p(r)?t.source.dispose():a.push(t));u(r);for(const{name:t,source:e}of a)(i(o)||/\.(gltf|glb)/i.test(t))&&(o=e.url),n.set(t,e.url),e.files&&e.files.forEach(((t,e)=>n.set(e,t)));if(i(o))throw new e("mesh-load-external:missing-files","Missing files to load external mesh source");return new ut(o,(()=>a.forEach((({source:t})=>t.dispose()))),n)}(t,r):async function(t,e){const{default:r}=await l(import("../request.js").then((t=>t.r)),e),n="string"==typeof t.multipart[0]?await Promise.all(t.multipart.map((async t=>(await r(t,{responseType:"array-buffer"})).data))):t.multipart;return ut.fromBlob(new Blob(n))}(t,r)}class ut{constructor(t,e=(()=>{}),r=new Map){this.url=t,this.dispose=e,this.files=r}static fromBlob(t){const e=URL.createObjectURL(t);return new ut(e,(()=>URL.revokeObjectURL(e)))}}const ft=o.getLogger("esri.geometry.support.meshUtils.offset");function ht(t,e,r){if(t.vertexAttributes&&t.vertexAttributes.position)if(s(t.transform))null!=(null==r?void 0:r.geographic)&&r.geographic!==t.transform.geographic&&ft.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function(t,e){const r=t.origin;t.origin=d(g(),r,e)}(t.transform,e);else{I(t.spatialReference,r)?function(t,e){const r=t.spatialReference,n=t.vertexAttributes.position,o=t.vertexAttributes.normal,i=t.vertexAttributes.tangent,a=new Float64Array(n.length),l=s(o)?new Float32Array(o.length):null,c=s(i)?new Float32Array(i.length):null,p=t.extent.center,u=gt;V(r,[p.x,p.y,p.z],dt,K(r)),W(xt,dt),x(u,e,xt),Q(n,r,a),s(o)&&X(o,n,a,r,l);s(i)&&Y(i,n,a,r,c);mt(a,u),tt(a,n,r),s(o)&&et(l,n,a,r,o);s(i)&&rt(c,n,a,r,i);t.vertexAttributesChanged()}(t,e):function(t,e){mt(t.vertexAttributes.position,e),t.vertexAttributesChanged()}(t,e)}}function mt(t,e){if(t)for(let r=0;r<t.length;r+=3)for(let n=0;n<3;n++)t[r+n]+=e[n]}const gt=g(),dt=J(),xt=_();const yt={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function vt(t,e,r){!function(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}(t),function(t,e){if(null==e)return;const r="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];At[0]=r[0],At[4]=r[1],At[8]=r[2];for(let e=0;e<t.position.length;e+=3){for(let r=0;r<3;r++)bt[r]=t.position[e+r];x(bt,bt,At);for(let r=0;r<3;r++)t.position[e+r]=bt[r]}if(r[0]!==r[1]||r[1]!==r[2]){At[0]=1/r[0],At[4]=1/r[1],At[8]=1/r[2];for(let e=0;e<t.normal.length;e+=3){for(let r=0;r<3;r++)bt[r]=t.normal[e+r];x(bt,bt,At),y(bt,bt);for(let r=0;r<3;r++)t.normal[e+r]=bt[r]}}}(t,r&&r.size);const{vertexAttributes:n,transform:o}=G(t,e,r);return{vertexAttributes:new $({...n,uv:t.uv}),transform:o,components:[new S({faces:t.faces,material:r&&r.material||null})],spatialReference:e.spatialReference}}const wt={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},jt={south:0,east:1,north:2,west:3,up:4,down:5},bt=g(),At=_(),kt=o.getLogger("esri.geometry.support.meshUtils.rotate");function Mt(t,e,r){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const n=t.spatialReference;if(s(t.transform)){var o;null!=(null==r?void 0:r.geographic)&&r.geographic!==t.transform.geographic&&kt.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=null!=(o=null==r?void 0:r.origin)?o:t.transform.getOriginPoint(n);!function(t,e,r){const n=v(Ft,r.x,r.y,r.z),o=w(Ft,n,t.origin);t.applyLocalInverse(o,Pt),t.rotation=U(t.rotation,e,O()),t.applyLocalInverse(o,o),w(o,o,Pt),t.translation=d(g(),t.translation,o)}(t.transform,e,s)}else{var i;const n=null!=(i=null==r?void 0:r.origin)?i:t.origin;I(t.spatialReference,r)?function(t,e,r){const n=t.spatialReference,o=K(n),i=Lt;D(r,i,o)||D(t.origin,i,o);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,p=new Float64Array(a.length),u=s(l)?new Float32Array(l.length):null,f=s(c)?new Float32Array(c.length):null;V(o,i,Ut,o),W(zt,Ut);const h=Ot;x(z(Ot),z(e),zt),h[3]=e[3],Q(a,n,p),s(l)&&X(l,a,p,n,u);s(c)&&Y(c,a,p,n,f);Rt(p,h,3,i),tt(p,a,n),s(l)&&(Rt(u,h,3),et(u,a,p,n,l));s(c)&&(Rt(f,h,4),rt(f,a,p,n,c));t.vertexAttributesChanged()}(t,e,n):function(t,e,r){const n=Lt;if(!D(r,n,t.spatialReference)){const e=t.origin;n[0]=e.x,n[1]=e.y,n[2]=e.z,kt.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Rt(t.vertexAttributes.position,e,3,n),Rt(t.vertexAttributes.normal,e,3),Rt(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}(t,e,n)}}function Rt(t,e,r,n=j){if(!i(t)){nt(Ut),ot(Ut,Ut,L(e),z(e));for(let e=0;e<t.length;e+=r){for(let r=0;r<3;r++)Ft[r]=t[e+r]-n[r];b(Ft,Ft,Ut);for(let r=0;r<3;r++)t[e+r]=Ft[r]+n[r]}}}const Ft=g(),Pt=g(),Ot=O(),Ut=J(),zt=_(),Lt=g(),Ct=o.getLogger("esri.geometry.support.meshUtils.scale");function St(t,e,r){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const n=t.spatialReference;if(s(t.transform)){var o;null!=(null==r?void 0:r.geographic)&&r.geographic!==t.transform.geographic&&Ct.warn(`Specifying the 'geographic' parameter (${r.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=null!=(o=null==r?void 0:r.origin)?o:t.transform.getOriginPoint(n);!function(t,e,r){const n=v(Tt,r.x,r.y,r.z),o=w(Tt,n,t.origin);t.applyLocalInverse(o,It);const s=A(g(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),w(o,o,It),t.translation=d(g(),t.translation,o)}(t.transform,e,s)}else{const n=I(t.spatialReference,r),o=r&&r.origin||t.origin;n?function(t,e,r){const n=t.spatialReference,o=K(n),i=Bt;D(r,i,o)||D(t.origin,i,o);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,p=new Float64Array(a.length),u=s(l)?new Float32Array(l.length):null,f=s(c)?new Float32Array(c.length):null;Q(a,n,p),s(l)&&X(l,a,p,n,u);s(c)&&Y(c,a,p,n,f);$t(p,e,i),tt(p,a,n),s(l)&&et(u,a,p,n,l);s(c)&&rt(f,a,p,n,c);t.vertexAttributesChanged()}(t,e,o):function(t,e,r){const n=Bt;if(!D(r,n,t.spatialReference)){const e=t.origin;n[0]=e.x,n[1]=e.y,n[2]=e.z,Ct.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}$t(t.vertexAttributes.position,e,n),t.vertexAttributesChanged()}(t,e,o)}}function $t(t,e,r=j){if(t)for(let n=0;n<t.length;n+=3){for(let e=0;e<3;e++)Tt[e]=t[n+e]-r[e];A(Tt,Tt,e);for(let e=0;e<3;e++)t[n+e]=Tt[e]+r[e]}}const Tt=g(),It=g(),Bt=g();var Et;const Gt=o.getLogger("esri.geometry.Mesh");let Zt=Et=class extends(r(n.LoadableMixin(a(R)))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new T,this.type="mesh"}initialize(){(i(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add(f((()=>{var t;return{vertexAttributes:this.vertexAttributes,components:null==(t=this.components)?void 0:t.map((t=>t.clone())),transform:s(this.transform)?this.transform.clone():null}}),(()=>this._set("external",null)),{once:!0,sync:!0}))}))}get hasExtent(){return!this.loaded&&s(this.external)&&s(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(0===t.length||this.components&&0===this.components.length)return{extent:new M({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new F({x:0,y:0,z:0,spatialReference:e})};const r=s(this.transform)?this.transform.project(t,e):t;let n=1/0,o=1/0,i=1/0,a=-1/0,l=-1/0,c=-1/0,p=0,u=0,f=0;const h=r.length,m=1/(h/3);let g=0;for(;g<h;){const t=r[g++],e=r[g++],s=r[g++];n=Math.min(n,t),o=Math.min(o,e),i=Math.min(i,s),a=Math.max(a,t),l=Math.max(l,e),c=Math.max(c,s),p+=m*t,u+=m*e,f+=m*s}return{extent:new M({xmin:n,ymin:o,zmin:i,xmax:a,ymax:l,zmax:c,spatialReference:e}),center:new F({x:p,y:u,z:f,spatialReference:e})}}get anchor(){if(s(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new F({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return s(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&s(this.external)&&s(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(S.from(t)),this.notifyChange("components")):Gt.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(-1!==e)return this.components.splice(e,1),void this.notifyChange("components")}Gt.error("removeComponent()","Provided component is not part of the list of components")}else Gt.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,r,n){return C(qt.x,t,Dt),C(qt.y,e,Vt),C(qt.z,r,Ht),U(Dt,Vt,Dt),U(Dt,Ht,Dt),Mt(this,Dt,n),this}offset(t,e,r,n){return this.loaded?(Nt[0]=t,Nt[1]=e,Nt[2]=r,ht(this,Nt,n),this):(Gt.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(St(this,t,e),this):(Gt.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(it(this,t,e),this):(Gt.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return s(this.external)&&this.addResolvingPromise(async function(t,e,r){const{loadGLTFMesh:n}=await l(import("../chunks/loadGLTFMesh.js"),r),o=await pt(e,r),i=n(new F({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:ct(o),useTransform:!0,signal:s(r)?r.signal:null});i.then((()=>o.dispose()),(()=>o.dispose()));const{vertexAttributes:a,components:c}=await i;t.vertexAttributes=a,t.components=c}(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,r={components:this.components?this.components.map((r=>r.cloneWithDeduplication(t,e))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:s(this.transform)?this.transform.clone():null,external:s(this.external)?{source:this.external.source,extent:s(this.external.extent)?this.external.extent.clone():null}:null};return new Et(r)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await import("../chunks/gltfexport.js");return e(this,t)}static createBox(t,e){if(!(t instanceof F))return Gt.error(".createBox()","expected location to be a Point instance"),null;const r=new Et(vt(function(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=wt,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),i=new Float32Array(2*n),a=new Uint32Array(2*t.length*3);let l=0,c=0,p=0,u=0;for(let n=0;n<t.length;n++){const f=t[n],h=l/3;for(const t of e)a[u++]=h+t;const m=f.corners;for(let t=0;t<4;t++){const e=m[t];let n=0;i[p++]=.25*r[t][0]+f.uvOrigin[0],i[p++]=f.uvOrigin[1]-.25*r[t][1];for(let t=0;t<3;t++)0!==f.axis[t]?(o[l++]=.5*f.axis[t],s[c++]=f.axis[t]):(o[l++]=.5*e[n++],s[c++]=0)}}return{position:o,normal:s,uv:i,faces:a}}(),t,e));return e&&e.imageFace&&"all"!==e.imageFace?function(t,e){const r=t.components[0],n=r.faces,o=jt[e],i=6*o,a=new Uint32Array(6),l=new Uint32Array(n.length-6);let c=0,p=0;for(let t=0;t<n.length;t++)t>=i&&t<i+6?a[c++]=n[t]:l[p++]=n[t];if(s(t.vertexAttributes.uv)){const e=new Float32Array(t.vertexAttributes.uv),r=4*o*2,n=[0,1,1,1,1,0,0,0];for(let t=0;t<n.length;t++)e[r+t]=n[t];t.vertexAttributes.uv=e}return t.components=[new S({faces:a,material:r.material}),new S({faces:l})],t}(r,e.imageFace):r}static createSphere(t,e){return t instanceof F?new Et(vt(function(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),i=new Float32Array(2*n),a=new Uint32Array((e-1)*r*2*3);let l=0,c=0,p=0,u=0;for(let t=0;t<=e;t++){const n=t/e*Math.PI+.5*Math.PI,f=Math.cos(n),h=Math.sin(n);bt[2]=h;const m=0===t||t===e,g=m?r-1:r;for(let n=0;n<=g;n++){const h=n/g*2*Math.PI;bt[0]=-Math.sin(h)*f,bt[1]=Math.cos(h)*f;for(let t=0;t<3;t++)o[l]=.5*bt[t],s[l]=bt[t],++l;i[c++]=(n+(m?.5:0))/r,i[c++]=t/e,0!==t&&n!==r&&(t!==e&&(a[p++]=u,a[p++]=u+1,a[p++]=u-r),1!==t&&(a[p++]=u,a[p++]=u-r,a[p++]=u-r-1)),u++}}return{position:o,normal:s,uv:i,faces:a}}(e&&e.densificationFactor||0),t,e)):(Gt.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof F?new Et(vt(function(t=0){const e=Math.round(16*2**t),r=4*(e+1)+2*e,n=new Float64Array(3*r),o=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(4*e*3);let a=0,l=0,c=0,p=0,u=0;for(let t=0;t<=5;t++){const r=0===t||5===t,f=t<=1||t>=4,h=2===t||4===t,m=r?e-1:e;for(let g=0;g<=m;g++){const d=g/m*2*Math.PI,x=r?0:.5;bt[0]=x*Math.sin(d),bt[1]=x*-Math.cos(d),bt[2]=t<=2?.5:-.5;for(let e=0;e<3;e++)n[a++]=bt[e],o[l++]=f?2===e?t<=1?1:-1:0:2===e?0:bt[e]/x;s[c++]=(g+(r?.5:0))/e,s[c++]=t<=1?1*t/3:t<=3?1*(t-2)/3+1/3:1*(t-4)/3+2/3,h||0===t||g===e||(5!==t&&(i[p++]=u,i[p++]=u+1,i[p++]=u-e),1!==t&&(i[p++]=u,i[p++]=u-e,i[p++]=u-e-1)),u++}}return{position:n,normal:o,uv:s,faces:i}}(e&&e.densificationFactor||0),t,e)):(Gt.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){var r;if(!(t instanceof F))return Gt.error(".createPlane()","expected location to be a Point instance"),null;const n=null!=(r=null==e?void 0:e.facing)?r:"up",o=function(t,e){const r="number"==typeof e?e:null!=e?e.width:1,n="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}(n,null==e?void 0:e.size);return new Et(vt(function(t){const e=yt.facingAxisOrderSwap[t],r=yt.position,n=yt.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let i=0;for(let t=0;t<4;t++){const t=i;for(let a=0;a<3;a++){const l=e[a],c=Math.abs(l)-1,p=l>=0?1:-1;o[i]=r[t+c]*p,s[i]=n[t+c]*p,i++}}return{position:o,normal:s,uv:new Float32Array(yt.uv),faces:new Uint32Array(yt.faces)}}(n),t,{...e,size:o}))}static createFromPolygon(t,e){if(!(t instanceof P))return Gt.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const r=q(t);return new Et({vertexAttributes:new T({position:r.position}),components:[new S({faces:r.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,r,n){if(!(t instanceof F))throw Gt.error(".createfromGLTF()","expected location to be a Point instance"),new e("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:o}=await l(import("../chunks/loadGLTFMesh.js"),n);return new Et(await o(t,r,n))}static createWithExternalSource(t,e,r){var n,o,s;const i=null!=(n=null==r?void 0:r.extent)?n:null,a=null!=(o=null==r?void 0:r.transform.clone())?o:new Z;a.origin=[t.x,t.y,null!=(s=t.z)?s:0];const l=t.spatialReference;return new Et({external:{source:e,extent:i},transform:a,spatialReference:l})}static createIncomplete(t,r){var n,o;const s=null!=(n=null==r?void 0:r.transform.clone())?n:new Z;s.origin=[t.x,t.y,null!=(o=t.z)?o:0];const i=t.spatialReference,a=new Et({transform:s,spatialReference:i});return a.addResolvingPromise(Promise.reject(new e("mesh-incomplete","Mesh resources are not complete"))),a}};t([h({type:[S],json:{write:!0}})],Zt.prototype,"components",void 0),t([h({type:Z,json:{write:!0}})],Zt.prototype,"transform",void 0),t([h({constructOnly:!0})],Zt.prototype,"external",void 0),t([h({readOnly:!0})],Zt.prototype,"hasExtent",null),t([h({readOnly:!0})],Zt.prototype,"boundingInfo",null),t([h({readOnly:!0})],Zt.prototype,"anchor",null),t([h({readOnly:!0})],Zt.prototype,"origin",null),t([h({readOnly:!0,json:{read:!1}})],Zt.prototype,"extent",null),t([h({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Zt.prototype,"hasZ",void 0),t([h({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Zt.prototype,"hasM",void 0),t([h({type:T,nonNullable:!0,json:{write:!0}})],Zt.prototype,"vertexAttributes",void 0),Zt=Et=t([m("esri.geometry.Mesh")],Zt);const qt={x:k(1,0,0),y:k(0,1,0),z:k(0,0,1)},Dt=O(),Vt=O(),Ht=O(),Nt=g(),Wt=Zt;export{Wt as default};
