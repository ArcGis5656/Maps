/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import t from"../TimeExtent.js";import{u as e,i as s,b as r}from"../core/lang.js";import{eachAlways as o}from"../core/promiseUtils.js";import{o as n}from"../chunks/timeUtils.js";import"../chunks/tslib.es6.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../chunks/ensureType.js";import"../core/Error.js";import"../chunks/ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/reader.js";import"../chunks/writer.js";function i(t){return"feature"===(null==t?void 0:t.type)}function m(t){return"map-image"===(null==t?void 0:t.type)}function c(t){return void 0!==t.timeInfo}async function u(s,n){if(0===s.length)return t.allTime;const u=s.filter(c);await Promise.all(u.map((t=>t.load({signal:n}))));const a=[],p=[];for(const t of u)(i(t)||m(t))&&t.timeInfo.hasLiveData?a.push(t):p.push(t);const f=t=>r(t)||t.isAllTime,l=p.map((t=>t.timeInfo.fullTimeExtent));if(l.some(f))return t.allTime;const j=a.map((async t=>{const{timeExtent:s}=await t.fetchRecomputedExtents({signal:n});return s||e(t.timeInfo.fullTimeExtent)})),h=(await o(j)).map((t=>t.value));if(h.some(f))return t.allTime;return h.concat(l).reduce(((t,e)=>t.union(e)))}function a(e){if(!e)return e;const{start:r,end:o}=e;return new t({start:s(r)?n(r,-r.getTimezoneOffset(),"minutes"):r,end:s(o)?n(o,-o.getTimezoneOffset(),"minutes"):o})}function p(e){if(!e)return e;const{start:r,end:o}=e;return new t({start:s(r)?n(r,r.getTimezoneOffset(),"minutes"):r,end:s(o)?n(o,o.getTimezoneOffset(),"minutes"):o})}export{u as getTimeExtentFromLayers,p as toLocalTimeExtent,a as toUTCTimeExtent};
