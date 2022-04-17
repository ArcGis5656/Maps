/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{a as o}from"../../chunks/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{e as s}from"../../chunks/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as i}from"../../geometry/support/jsonUtils.js";import p from"../../geometry/Polyline.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";let m=class extends o{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};r([t({type:String,json:{write:!0}})],m.prototype,"extendHow",void 0),r([t({type:[p],json:{read:{reader:r=>r?r.map((r=>i(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()))}}}})],m.prototype,"polylines",void 0),r([t({json:{read:{reader:r=>r?i(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON()}}}})],m.prototype,"trimExtendTo",void 0),m=r([e("esri.rest.support.TrimExtendParameters")],m),m.from=s(m);const n=m;export{n as default};
