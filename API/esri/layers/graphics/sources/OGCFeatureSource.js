// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/Loadable ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../ogc/ogcFeatureUtils ../../../rest/support/FeatureSet ../../../geometry/SpatialReference ../../../geometry/support/typeUtils".split(" "),function(h,
z,r,O,A,F,t,v,P,Q,R,G,g,H,w,I){h.OGCFeatureSource=function(B){function x(){var b=B.apply(this,arguments)||this;b.featureDefinition=null;b.type="ogc-feature";return b}z._inheritsLoose(x,B);var e=x.prototype;e.load=function(b){this.addResolvingPromise(this._loadOGCServices(this.layer,b));return this.when()};e.getFeatureDefinition=function(){const {featureDefinition:{collection:b,layerDefinition:a,spatialReference:c,supportedCrs:d},layer:{apiKey:f,capabilities:k,customParameters:l}}=this;return{capabilities:k,
collection:b,layerDefinition:a,queryParameters:{apiKey:f,customParameters:l},spatialReference:c,supportedCrs:d}};e.queryExtent=function(b,a){return null};e.queryFeatureCount=function(b,a){return null};e.queryFeatures=function(b,a={}){return this.queryFeaturesJSON(b,a).then(c=>H.fromJSON(c))};e.queryFeaturesJSON=function(b,a={}){const c=this.getFeatureDefinition();return this.load(a).then(()=>g.queryFeatureSetJSON(c,b,a))};e.queryObjectIds=function(b,a){return null};e.serviceSupportsSpatialReference=
function(b){return b.isWGS84||b.isWebMercator?!0:!!this.featureDefinition.supportedCrs[b.wkid]};e._conformsToType=function(b,a){var c;const d=new RegExp(`^${a}$`,"i");return null!=(c=b.conformsTo.some(f=>d.test(f)))?c:!1};e._getCapabilities=function(b,a){var c,d,f,k,l,p,u;a=t.isSome(a)?null==(c=a.components)?void 0:c.parameters:null;c=null!=(d=null!=(f=null==a?void 0:null==(k=a.limit)?void 0:null==(l=k.schema)?void 0:l.maximum)?f:null==a?void 0:null==(p=a.limitFeatures)?void 0:null==(u=p.schema)?
void 0:u.maximum)?d:5E3;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:b},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:c,maxRecordCountFactor:void 0,
standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,
supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,
supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}};e._getExtent=function(b){var a;b=null==(a=b.extent)?void 0:a.spatial;if(!b)return null;var c=b.bbox[0],d=4===c.length;a=c[0];b=c[1];const f=d?void 0:c[2],k=d?c[2]:c[3],l=d?c[3]:c[4];c=d?void 0:c[5];d=w.WGS84.toJSON();return{xmin:a,ymin:b,xmax:k,ymax:l,zmin:f,zmax:c,spatialReference:d}};e._getStorageSpatialReference=function(b){var a;b=null!=(a=b.storageCrs)?
a:g.crsDefault;a=g.getSpatialReferenceWkid(b);return t.isNone(a)?w.WGS84:new w({wkid:a})};e._getSupportedSpatialReferences=function(b,a){var c;b=null!=(c=b.crs)?c:[g.crsDefault];const d=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return(b.includes("#/crs")?b.filter(f=>"#/crs"!==f).concat(a.crs):b).filter(f=>!d.test(f))};e._loadOGCServices=function(){var b=z._asyncToGenerator(function*(a,c){var d=t.isSome(c)?c.signal:null;const {apiKey:f,collectionId:k,customParameters:l,fields:p,geometryType:u,
hasZ:J,objectIdField:K,timeInfo:C,url:L}=a;c={fields:null==p?void 0:p.map(n=>n.toJSON()),geometryType:I.typeKebabDictionary.toJSON(u),hasZ:J,objectIdField:K,timeInfo:null==C?void 0:C.toJSON()};d={apiKey:f,customParameters:l,signal:d};var m=yield g.getServerLandingPage(L,d);const [D,E]=yield Promise.all([g.getServerConformance(m,d),g.getServerCollections(m,d)]);if(!this._conformsToType(D,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new A("ogc-feature-layer:no-geojson-support",
"Server does not support geojson");a=E.collections.find(n=>n.id===k);if(!a)throw new A("ogc-feature-layer:collection-not-found","Server does not contain the named collection");m=this._conformsToType(D,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?yield g.getServerOpenApi(m,d):null;c=yield g.getCollectionDefinition(a,c,d);d=this._getCapabilities(c.hasZ,m);m=this._getExtent(a);const M=this._getStorageSpatialReference(a).toJSON();var q=this._getSupportedSpatialReferences(a,E);const N=
new RegExp(`^${g.crsPrefix}`,"i"),y={};for(const n of q)q=g.getSpatialReferenceWkid(n),t.isSome(q)&&(y[q]||(y[q]=n.replace(N,"")));c.extent=m;this.featureDefinition={capabilities:d,collection:a,layerDefinition:c,queryParameters:{},spatialReference:M,supportedCrs:y}});return function(a,c){return b.apply(this,arguments)}}();return x}(F);r.__decorate([v.property()],h.OGCFeatureSource.prototype,"featureDefinition",void 0);r.__decorate([v.property({constructOnly:!0})],h.OGCFeatureSource.prototype,"layer",
void 0);r.__decorate([v.property()],h.OGCFeatureSource.prototype,"type",void 0);h.OGCFeatureSource=r.__decorate([G.subclass("esri.layers.graphics.sources.OGCFeatureSource")],h.OGCFeatureSource);h.default=h.OGCFeatureSource;Object.defineProperty(h,"__esModule",{value:!0})});