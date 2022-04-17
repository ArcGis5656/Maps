/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{i as t}from"../core/lang.js";import{d as e}from"./unitUtils.js";import{f as s,d as i}from"./mat4.js";import{e as r,b as o,d as n,m as a,n as c,a as u}from"./mathUtils.js";import{projectPointToVector as l,projectVectorToVector as m,projectVectorToDehydratedPoint as d,projectVectorToPoint as f}from"../geometry/projection.js";import p from"../geometry/SpatialReference.js";import{a as h,g as v}from"./projectionEllipsoid.js";import{f as S,d as y}from"./boundedPlane.js";import{k as j,s as A}from"./sphere.js";import{h as R}from"./plane.js";import{b as g}from"./vectorStacks.js";import{i as w}from"./ElevationProvider.js";import{i as P}from"./spatialReferenceSupport.js";function x(t,e,s=function(t){return{operations:t,value:t.create()}}(t)){return s.operations=t,t.copy(e,s.value),s}function M(t,e,s,i){return t.operations.setAltitudeAt(t.value,e,s,i)}function _(t,e,s){return t.operations.elevate(t.value,e,s.value)}const C=o();function b(t,e,s,i,r){return r[0]=n(t,e),r[1]=n(t,s),r[2]=n(t,i),r}function B(t,e,s,i,r){a(s,t),a(E,e),c(E,E),u(i,E,s),u(r,i,s)}function U(t,e){return t?h(e):e.isGeographic?p.PlateCarree:e}const E=o();class k{constructor(t,e,s,i){this.viewingMode=t,this.spatialReference=e,this.unitInMeters=s,this.coordinateSystem=i,this._coordinateSystem=function(t){const{value:e,operations:s}=t;return{operations:s,value:s.create(e)}}(i)}set extent(t){t&&function(t,e,s){t.operations.setExtent(t.value,e,s.value)}(this.coordinateSystem,t,this.coordinateSystem)}getAltitude(t){return e=this.coordinateSystem,s=t,e.operations.altitudeAt(e.value,s);var e,s}setAltitude(t,e,s=t){return M(this.coordinateSystem,s,e,t)}setAltitudeOfTransformation(t,e){!function(t,e,i,o){e!==o&&s(o,e),r(C,o[12],o[13],o[14]),M(t,C,i,C),o[12]=C[0],o[13]=C[1],o[14]=C[2]}(this.coordinateSystem,e,t,e)}worldUpAtPosition(t,e){return s=this.coordinateSystem,i=t,r=e,s.operations.axisAt(s.value,i,2,r);var s,i,r}worldBasisAtPosition(t,e,s){return i=this.coordinateSystem,r=t,o=e,n=s,i.operations.axisAt(i.value,r,o,n);var i,r,o,n}basisMatrixAtPosition(t,e){const s=this.worldBasisAtPosition(t,0,g.get()),r=this.worldBasisAtPosition(t,1,g.get()),o=this.worldBasisAtPosition(t,2,g.get());return i(e,s[0],s[1],s[2],0,r[0],r[1],r[2],0,o[0],o[1],o[2],0,0,0,0,1),e}intersectManifoldClosestSilhouette(t,e,s){var i,r,o;return _(this.coordinateSystem,e,this._coordinateSystem),i=this._coordinateSystem,r=t,o=s,i.operations.intersectRayClosestSilhouette(i.value,r,o),s}intersectManifold(t,e,s){_(this.coordinateSystem,e,this._coordinateSystem);const i=g.get();return r=this._coordinateSystem,o=t,n=i,r.operations.intersectRay(r.value,o,n)?a(s,i):null;var r,o,n}intersectInfiniteManifold(t,e,s){if(1===this.viewingMode)return this.intersectManifold(t,e,s);_(this.coordinateSystem,e,this._coordinateSystem);const i=this._coordinateSystem.value,r=g.get();return R(i.plane,t,r)?a(s,r):null}toRenderCoords(t,e,s){return w(t)?l(t,e,this.spatialReference):m(t,e,s,this.spatialReference)}fromRenderCoords(e,s,i=null){return w(s)?(t(i)&&(s.spatialReference=i),d(e,this.spatialReference,s)):s instanceof p?f(e,this.spatialReference,s):m(e,this.spatialReference,s,i)?s:null}static create(t,s){switch(t){case 2:return new k(2,s,e(s),x(y,S([0,0,0],[0x4000000000000,0,0],[0,0x4000000000000,0])));case 1:return new k(1,s,1,function(t){return x(A,j(0,0,0,v(t).radius))}(s))}}static renderUnitScaleFactor(t,e){return I(t)/I(e)}}function I(t){if(P(t,1))return 1;const s=U(!1,t);return e(s)}export{k as R,B as c,U as r,b as v};
