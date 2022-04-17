/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{J as r}from"../../chunks/jsonMap.js";import{a as e}from"../../chunks/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/object.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";const i=new r({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let c=class extends e{constructor(s){super(s),this.distance=0,this.units=null}};s([o({json:{write:!0}})],c.prototype,"distance",void 0),s([o({json:{read:i.read,write:i.write}})],c.prototype,"units",void 0),c=s([t("esri/rest/support/LinearUnit")],c);const p=c;export{p as default};
