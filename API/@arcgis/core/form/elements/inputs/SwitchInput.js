/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import t from"./Input.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import"../../../chunks/handleUtils.js";import"../../../core/Error.js";import"../../../chunks/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/deprecate.js";import"../../../chunks/ArrayPool.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";var e;let p=e=class extends t{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new e({offValue:this.offValue,onValue:this.onValue})}};o([r({type:[String,Number],json:{write:!0}})],p.prototype,"offValue",void 0),o([r({type:[String,Number],json:{write:!0}})],p.prototype,"onValue",void 0),o([r({type:["switch"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=e=o([s("esri.form.elements.inputs.SwitchInput")],p);const i=p;export{i as default};
