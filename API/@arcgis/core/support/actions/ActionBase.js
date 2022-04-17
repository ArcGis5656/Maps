/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{I as i}from"../../chunks/Identifiable.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var e;let c=e=class extends(i(s)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new e({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};t([o()],c.prototype,"active",void 0),t([o()],c.prototype,"className",void 0),t([o()],c.prototype,"disabled",void 0),t([o()],c.prototype,"id",void 0),t([o()],c.prototype,"indicator",void 0),t([o()],c.prototype,"title",void 0),t([o()],c.prototype,"type",void 0),t([o()],c.prototype,"visible",void 0),c=e=t([r("esri.support.actions.ActionBase")],c);const p=c;export{p as default};
