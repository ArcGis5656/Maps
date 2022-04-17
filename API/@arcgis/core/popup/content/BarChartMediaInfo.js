/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{c as o,C as e}from"../../chunks/chartMediaInfoUtils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../core/Error.js";import"../../chunks/MediaInfo.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"./support/ChartMediaInfoValue.js";import"./support/ChartMediaInfoValueSeries.js";import"../../chunks/jsonMap.js";var i;let p=i=class extends e{constructor(r){super(r),this.type="bar-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};r([t({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:o.write}})],p.prototype,"type",void 0),p=i=r([s("esri.popup.content.BarChartMediaInfo")],p);const c=p;export{c as default};
