/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{a as r}from"../../../chunks/JSONSupport.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";var e;let i=e=class extends r{constructor(s){super(s),this.linkURL=null,this.sourceURL=null}clone(){return new e({linkURL:this.linkURL,sourceURL:this.sourceURL})}};s([o({type:String,json:{write:!0}})],i.prototype,"linkURL",void 0),s([o({type:String,json:{write:!0}})],i.prototype,"sourceURL",void 0),i=e=s([t("esri.popup.content.support.ImageMediaInfoValue")],i);const c=i;export{c as default};
