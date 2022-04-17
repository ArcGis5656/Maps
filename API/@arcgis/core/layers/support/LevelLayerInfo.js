/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{a as r}from"../../chunks/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";let s=class extends r{constructor(e){super(e),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null}};e([t({type:String,json:{write:!0}})],s.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"levelIdField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"levelNumberField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"longNameField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"shortNameField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"verticalOrderField",void 0),s=e([o("esri.layers.support.LevelLayerInfo")],s);const i=s;export{i as default};
