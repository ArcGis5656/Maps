/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{a as r}from"../../chunks/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var e;let i=e=class extends r{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};o([s({type:[String],json:{write:!0}})],i.prototype,"groupByFields",void 0),o([s({type:Number,json:{write:!0}})],i.prototype,"topCount",void 0),o([s({type:[String],json:{write:!0}})],i.prototype,"orderByFields",void 0),i=e=o([t("esri.rest.support.TopFilter")],i);const p=i;export{p as default};
