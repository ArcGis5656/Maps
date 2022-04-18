/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as e}from"../../geometry.js";import{J as s}from"../../chunks/jsonMap.js";import{a as o}from"../../chunks/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import n from"../../geometry/Polygon.js";import p from"../../geometry/SpatialReference.js";import{getJsonType as m}from"../../geometry/support/jsonUtils.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";const c=new s({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let u=class extends o{constructor(t){super(t),this.bufferSpatialReference=null,this.distances=null,this.geodesic=!1,this.geometries=null,this.outSpatialReference=null,this.unionResults=!1,this.unit=null}toJSON(){const t={unit:c.toJSON(this.unit),unionResults:this.unionResults,geodesic:this.geodesic},e=this.distances,s=this.outSpatialReference,o=this.bufferSpatialReference,r=this.geometries;if(r&&r.length>0){const e=r.map((function(t){return(t="extent"===t.type?n.fromExtent(t):t).toJSON()})),s="extent"===r[0].type?"esriGeometryPolygon":m(r[0]);t.geometries=JSON.stringify({geometryType:s,geometries:e}),t.inSR=r[0].spatialReference.wkid?r[0].spatialReference.wkid:JSON.stringify(r[0].spatialReference.toJSON())}return e&&(t.distances=e.join(",")),s&&(t.outSR=s.wkid?s.wkid:JSON.stringify(s.toJSON())),o&&(t.bufferSR=o.wkid?o.wkid:JSON.stringify(o.toJSON())),t}};t([r({type:p,json:{write:!0}})],u.prototype,"bufferSpatialReference",void 0),t([r({type:[Number],json:{write:!0}})],u.prototype,"distances",void 0),t([r({type:Boolean,json:{write:!0}})],u.prototype,"geodesic",void 0),t([r({types:[e],json:{write:!0}})],u.prototype,"geometries",void 0),t([r({type:p,json:{write:!0}})],u.prototype,"outSpatialReference",void 0),t([r({type:Boolean,json:{write:!0}})],u.prototype,"unionResults",void 0),t([r({type:String,json:{write:!0}})],u.prototype,"unit",void 0),u=t([i("esri.rest.support.BufferParameters")],u);const a=u;export{a as default};
