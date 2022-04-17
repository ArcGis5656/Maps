/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import"../geometry.js";import{open as r}from"../core/workers/workers.js";import t from"./Point.js";import{fromJSON as n}from"./support/jsonUtils.js";import"../chunks/ensureType.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"./Extent.js";import"../chunks/tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../core/Error.js";import"./Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"./SpatialReference.js";import"../chunks/writer.js";import"./support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"./Multipoint.js";import"../chunks/zmUtils.js";import"./Polygon.js";import"../chunks/extentUtils.js";import"./Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../request.js";import"../intl.js";import"../chunks/number.js";import"../chunks/locale.js";import"../chunks/messages.js";function e(r){var t;return Array.isArray(r)?null==(t=r[0])?void 0:t.spatialReference:null==r?void 0:r.spatialReference}function o(r){return r?Array.isArray(r)?r.map(o):r.toJSON?r.toJSON():r:r}function i(r){return Array.isArray(r)?r.map((r=>n(r))):n(r)}let s;async function c(t,n){return(await async function(){return s||(s=r("geometryEngineWorker",{strategy:"distributed"})),s}()).invoke("executeGEOperation",{operation:t,parameters:o(n)})}function a(r){return c("extendedSpatialReferenceInfo",[r])}async function u(r,t){return i(await c("clip",[e(r),r,t]))}async function p(r,t){return i(await c("cut",[e(r),r,t]))}function f(r,t){return c("contains",[e(r),r,t])}function l(r,t){return c("crosses",[e(r),r,t])}function m(r,t,n){return c("distance",[e(r),r,t,n])}function j(r,t){return c("equals",[e(r),r,t])}function y(r,t){return c("intersects",[e(r),r,t])}function w(r,t){return c("touches",[e(r),r,t])}function h(r,t){return c("within",[e(r),r,t])}function d(r,t){return c("disjoint",[e(r),r,t])}function k(r,t){return c("overlaps",[e(r),r,t])}function g(r,t,n){return c("relate",[e(r),r,t,n])}function S(r){return c("isSimple",[e(r),r])}async function A(r){return i(await c("simplify",[e(r),r]))}async function x(r,t=!1){return i(await c("convexHull",[e(r),r,t]))}async function E(r,t){return i(await c("difference",[e(r),r,t]))}async function O(r,t){return i(await c("symmetricDifference",[e(r),r,t]))}async function R(r,t){return i(await c("intersect",[e(r),r,t]))}async function J(r,t=null){const n=function(r,t){let n;return Array.isArray(r)?n=r:(n=[],n.push(r),null!=t&&n.push(t)),n}(r,t);return i(await c("union",[e(n),n]))}async function N(r,t,n,o,s,a){return i(await c("offset",[e(r),r,t,n,o,s,a]))}async function v(r,t,n,o=!1){const s=[e(r),r,t,n,o];return i(await c("buffer",s))}async function U(r,t,n,o,s,a){const u=[e(r),r,t,n,o,s,a];return i(await c("geodesicBuffer",u))}async function b(r,n,o=!0){const i=await c("nearestCoordinate",[e(r),r,n,o]);return{...i,coordinate:t.fromJSON(i.coordinate)}}async function I(r,n){const o=await c("nearestVertex",[e(r),r,n]);return{...o,coordinate:t.fromJSON(o.coordinate)}}async function P(r,n,o,i){return(await c("nearestVertices",[e(r),r,n,o,i])).map((r=>({...r,coordinate:t.fromJSON(r.coordinate)})))}function z(r){return"xmin"in r?r.center:"x"in r?r:r.extent.center}async function C(r,t,n){var e;if(null==r)throw new Error("Illegal Argument Exception");const o=r.spatialReference;n=null!=(e=n)?e:z(r);const i=r.constructor.fromJSON(await c("rotate",[o,r,t,n]));return i.spatialReference=o,i}async function L(r,t){var n;if(null==r)throw new Error("Illegal Argument Exception");const e=r.spatialReference;t=null!=(n=t)?n:z(r);const o=r.constructor.fromJSON(await c("flipHorizontal",[e,r,t]));return o.spatialReference=e,o}async function M(r,t){var n;if(null==r)throw new Error("Illegal Argument Exception");const e=r.spatialReference;t=null!=(n=t)?n:z(r);const o=r.constructor.fromJSON(await c("flipVertical",[e,r,t]));return o.spatialReference=e,o}async function V(r,t,n,o){return i(await c("generalize",[e(r),r,t,n,o]))}async function q(r,t,n){return i(await c("densify",[e(r),r,t,n]))}async function D(r,t,n,o=0){return i(await c("geodesicDensify",[e(r),r,t,n,o]))}function G(r,t){return c("planarArea",[e(r),r,t])}function H(r,t){return c("planarLength",[e(r),r,t])}function T(r,t,n){return c("geodesicArea",[e(r),r,t,n])}function B(r,t,n){return c("geodesicLength",[e(r),r,t,n])}export{v as buffer,u as clip,f as contains,x as convexHull,l as crosses,p as cut,q as densify,E as difference,d as disjoint,m as distance,j as equals,a as extendedSpatialReferenceInfo,L as flipHorizontal,M as flipVertical,V as generalize,T as geodesicArea,U as geodesicBuffer,D as geodesicDensify,B as geodesicLength,R as intersect,y as intersects,S as isSimple,b as nearestCoordinate,I as nearestVertex,P as nearestVertices,N as offset,k as overlaps,G as planarArea,H as planarLength,g as relate,C as rotate,A as simplify,O as symmetricDifference,w as touches,J as union,h as within};
