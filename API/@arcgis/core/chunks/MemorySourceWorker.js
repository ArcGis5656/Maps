/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{b as t,i}from"../core/lang.js";import{getJsonType as s,isPoint as r}from"../geometry/support/jsonUtils.js";import{W as o}from"../geometry/SpatialReference.js";import{n,o as a,p}from"./featureConversionUtils.js";import{i as l,f as u}from"./objectIdUtils.js";import{F as m}from"./FeatureStore.js";import{c as d,p as c}from"./projectionSupport.js";import{Q as y}from"./QueryEngine.js";import{b as f,a as j,d as g}from"./clientSideDefaults.js";import{l as h,a as I,m as b,c as F,s as _}from"./sourceUtils.js";import E from"../layers/support/FieldsIndex.js";import{k as x}from"./fieldType.js";import{getFieldDefaultValue as T}from"../layers/support/fieldUtils.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./Evented.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./common.js";import"./PooledRBush.js";import"./quickselect.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"../geometry/projection.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./MemCache.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"../geometry.js";import"./typeUtils.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"./ItemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./utils11.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../symbols/Symbol.js";import"./utils17.js";import"./arcadeOnDemand.js";import"./QueryEngineCapabilities.js";import"./spatialQuerySupport.js";import"./Scheduler.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"../core/reactiveUtils.js";import"./debugFlags.js";import"./defaultsJSON.js";const R=o,q={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:o},S={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function O(e){return r(e)?null!=e.z:!!e.hasZ}function D(e){return r(e)?null!=e.m:!!e.hasM}class U{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(t){const i=[],{features:s}=t,r=this._inferLayerProperties(s,t.fields),o=t.fields||[],n=null!=t.hasM?t.hasM:r.hasM,a=null!=t.hasZ?t.hasZ:r.hasZ,p=!t.spatialReference&&!r.spatialReference,c=p?R:t.spatialReference||r.spatialReference,h=p?q:null,I=t.geometryType||r.geometryType,b=!I;let F=t.objectIdField||r.objectIdField,_=t.timeInfo;if(!b&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!I))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!F)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&F!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${F}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),F=r.objectIdField),F&&!r.objectIdField){let e=null;o.some((t=>t.name===F&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:F,name:F,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of o){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:t});if(t.name===F&&(t.type="esriFieldTypeOID"),-1===x.jsonValues.indexOf(t.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t})}const O={};for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=T(e);void 0!==t&&(O[e.name]=t)}if(this._fieldsIndex=new E(o),this._createDefaultAttributes=f(O,F),_){if(_.startTimeField){const e=this._fieldsIndex.get(_.startTimeField);e?(_.startTimeField=e.name,e.type="esriFieldTypeDate"):_.startTimeField=null}if(_.endTimeField){const e=this._fieldsIndex.get(_.endTimeField);e?(_.endTimeField=e.name,e.type="esriFieldTypeDate"):_.endTimeField=null}if(_.trackIdField){const e=this._fieldsIndex.get(_.trackIdField);e?_.trackIdField=e.name:(_.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:_}}))}_.startTimeField||_.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:_}}),_=null)}const D={warnings:i,featureErrors:[],layerDefinition:{...S,drawingInfo:j(I),templates:g(O),extent:h,geometryType:I,objectIdField:F,fields:o,hasZ:!!a,hasM:!!n,timeInfo:_},assignedObjectIds:{}};if(this._queryEngine=new y({fields:o,geometryType:I,hasM:n,hasZ:a,objectIdField:F,spatialReference:c,featureStore:new m({geometryType:I,hasM:n,hasZ:a}),timeInfo:_,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=l,D;const U=u(F,s);return this._nextObjectId=U+1,await d(s,c),this._loadInitialFeatures(D,s)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([h(t,i),d(e.adds,t),d(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let r,o,n=null,a=null,p=null;for(const i of e){const e=i.geometry;if(!t(e)&&(n||(n=s(e)),a||(a=e.spatialReference),null==r&&(r=O(e)),null==o&&(o=D(e)),n&&a&&null!=r&&null!=o))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(p=e.name)}return{geometryType:n,spatialReference:a,objectIdField:p,hasM:o,hasZ:r}}_loadInitialFeatures(e,t){const{geometryType:r,hasM:o,hasZ:a,objectIdField:p,spatialReference:l,featureStore:u}=this._queryEngine,m=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&r!==s(o.geometry)){e.featureErrors.push(I("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=b(this._fieldsIndex,t,o.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[p]),i(o.geometry)&&(o.geometry=c(o.geometry,o.geometry.spatialReference,l)),m.push(o))}if(u.addMany(n([],m,r,a,o,p)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(F(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:o,hasM:a,hasZ:p,objectIdField:l,spatialReference:u,featureStore:m}=this._queryEngine,d=[];for(const n of t){if(n.geometry&&o!==s(n.geometry)){r.push(I("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=b(this._fieldsIndex,t,n.attributes);if(a)r.push(a);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[l];e.uidToObjectId[n.uid]=t}i(n.geometry)&&(n.geometry=c(_(n.geometry,u),n.geometry.spatialReference,u)),d.push(n),r.push(F(n.attributes[l]))}}m.addMany(n([],d,o,p,a,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:o,hasZ:n,objectIdField:l,spatialReference:u,featureStore:m}=this._queryEngine;for(const d of t){const{attributes:t,geometry:y}=d,f=t&&t[l];if(null==f){e.push(I(`Identifier field ${l} missing`));continue}if(!m.has(f)){e.push(I(`Feature with object id ${f} missing`));continue}const j=a(m.getFeature(f),r,n,o);if(i(y)){if(r!==s(y)){e.push(I("Incorrect geometry type."));continue}j.geometry=c(_(y,u),y.spatialReference,u)}if(t){const i=b(this._fieldsIndex,j.attributes,t);if(i){e.push(i);continue}}m.add(p(j,r,n,o,l)),e.push(F(f))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}export{U as default};
