/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{a as t}from"../../chunks/JSONSupport.js";import{clone as s}from"../../core/lang.js";import{subclass as r,W as o}from"../../core/accessorSupport/decorators/subclass.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{w as p}from"../../chunks/writer.js";import{p as m}from"../../chunks/persistable.js";import{canProjectWithoutEngine as c,projectPolygon as n}from"../../geometry/projection.js";import a from"../../geometry/Polygon.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../core/urlUtils.js";import"../../chunks/uuid.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";var l;let u=l=class extends t{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,s,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!c(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new o("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new a;n(e,i,r.layer.spatialReference),t[s]=i.toJSON(r)}else t[s]=e.toJSON(r);delete t[s].spatialReference}clone(){return new l({geometry:s(this.geometry),type:this.type})}};e([i({type:a}),m()],u.prototype,"geometry",void 0),e([p(["web-scene","portal-item"],"geometry")],u.prototype,"writeGeometry",null),e([i({type:["clip","mask","replace"],nonNullable:!0}),m()],u.prototype,"type",void 0),u=l=e([r("esri.layers.support.SceneModification")],u);const j=u;export{j as default};
