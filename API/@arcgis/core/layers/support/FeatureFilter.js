/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{geometryTypes as t}from"../../geometry.js";import s from"../../TimeExtent.js";import{J as i}from"../../chunks/jsonMap.js";import{a as r}from"../../chunks/JSONSupport.js";import{i as o,clone as n}from"../../core/lang.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import l from"../../rest/support/Query.js";import"../../geometry/Extent.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../chunks/enumeration.js";import"../../chunks/DataLayerSource.js";import"./Field.js";import"../../chunks/domains.js";import"./CodedValueDomain.js";import"./Domain.js";import"./InheritedDomain.js";import"./RangeDomain.js";import"../../chunks/fieldType.js";import"../../rest/support/StatisticDefinition.js";var m;const c=new i({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new i({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=m=class extends r{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:s,spatialRelationship:i,timeExtent:r,objectIds:o,units:p,distance:a}=this;return new l({geometry:n(s),objectIds:n(o),spatialRelationship:i,timeExtent:n(r),where:t,units:p,distance:a,...e})}clone(){const{where:e,geometry:t,spatialRelationship:s,timeExtent:i,objectIds:r,units:o,distance:p}=this;return new m({geometry:n(t),objectIds:n(r),spatialRelationship:s,timeExtent:n(i),where:e,units:o,distance:p})}};e([p({type:String,json:{write:!0}})],j.prototype,"where",void 0),e([p({types:t,json:{write:!0}})],j.prototype,"geometry",void 0),e([p({type:c.apiValues,json:{name:"spatialRel",read:{reader:c.read},write:{allowNull:!1,writer:c.write,overridePolicy(){return{enabled:o(this.geometry)}}}}})],j.prototype,"spatialRelationship",void 0),e([p({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],j.prototype,"distance",void 0),e([p({type:[Number],json:{write:!0}})],j.prototype,"objectIds",void 0),e([p({type:u.apiValues,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],j.prototype,"units",void 0),e([p({type:s,json:{write:!0}})],j.prototype,"timeExtent",void 0),j=m=e([a("esri.layers.support.FeatureFilter")],j);const h=j;export{h as default};
