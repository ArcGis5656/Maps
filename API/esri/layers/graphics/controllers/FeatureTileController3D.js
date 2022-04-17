// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/asyncUtils ../../../core/Collection ../../../core/has ../../../core/Error ../../../core/Handles ../../../core/lang ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../support/arcgisLayerUrl ../../../portal/support/geometryServiceUtils ../../../rest/support/StatisticDefinition ../../../views/3d/layers/support/FeatureTileFetcher3D ../../../views/3d/layers/support/FeatureTileFetcher3DDebugger ../../../views/3d/support/debugFlags ../../../views/support/WatchUpdatingTracking".split(" "),
function(d,t,l,C,y,z,P,D,E,A,F,f,G,v,w,m,Q,H,I,J,K,L,M,N,O){function B(p,u){if(!u)return!1;for(const k of u)if(!p.has(k))return!0;return!1}const x=F.getLogger("esri.layers.graphics.controllers.FeatureTileController3D");d.FeatureTileController3D=function(p){function u(a){a=p.call(this,a)||this;a.type="feature-tile-3d";a.watchUpdatingTracking=new O.WatchUpdatingTracking;a.serviceDataExtent=null;a.serviceDataCount=d.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT;a.vertexLimitExceeded=!1;a.displayFeatureLimit=
null;a.suspended=!1;a.tileFetcher=null;a.handles=new E;a.fetchDataInfoPromise=null;a.fetchDataInfoAbortController=null;a.lifeCycleAbortController=new AbortController;return a}t._inheritsLoose(u,p);var k=u.prototype;k.approximateExtentSizeAtScale=function(a,b){const c=this.layerView.view,e=b.levels[0];return(e.tileSize[0]/(e.scale/a)+e.tileSize[1]/(e.scale/a))/2*Math.ceil((c.width/b.pixelSize+c.height/b.pixelSize)/2)};k.initialize=function(){this.watchUpdatingTracking.add(this,"vertexLimitInfo",()=>
this.watchUpdatingTracking.addPromise(this.updateVertexLimitExceeded(null,this.lifeCycleAbortController.signal)));this.watchUpdatingTracking.add(this,"mode",()=>this.modeChanged(),2);this.addResolvingPromise(Promise.resolve().then(()=>this.verifyCapabilities()).then(()=>this.watchUpdatingTracking.addPromise(this.fetchServiceDataInfo())).then(()=>this.initializeTileFetcher()))};k.verifyCapabilities=function(){const a=this.layerView.layer;if(!a.get("capabilities.operations.supportsQuery")&&"ogc-feature"!==
a.type)throw new D("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:a});};k.destroy=function(){this.cancelFetchServiceDataInfo();this.tileFetcher=f.destroyMaybe(this.tileFetcher);this.handles=f.destroyMaybe(this.handles);this.tilesHandle=f.removeMaybe(this.tilesHandle);this.lifeCycleAbortController&&(this.lifeCycleAbortController.abort(),this.lifeCycleAbortController=null);this.watchUpdatingTracking.destroy();this._set("watchUpdatingTracking",
null)};k.suspend=function(){this.suspended||(this.suspended=!0,f.isSome(this.tileFetcher)&&this.tileFetcher.suspend())};k.resume=function(){this.suspended&&(this.suspended=!1,f.isSome(this.tileFetcher)&&this.tileFetcher.resume())};k.restart=function(){const a=()=>{f.isSome(this.tileFetcher)&&this.tileFetcher.restart()};this.watchUpdatingTracking.addPromise(this.fetchServiceDataInfo().then(a,a))};k.refetch=function(){const a=()=>{f.isSome(this.tileFetcher)&&this.tileFetcher.refetch()};this.watchUpdatingTracking.addPromise(this.fetchServiceDataInfo().then(a,
a))};k.initializeTileFetcher=function(){const a=this.layerView.view;if(a){var b=w.whenOnce(a.featureTiles,"tilingScheme",this.lifeCycleAbortController.signal);this.watchUpdatingTracking.addPromise(b);b.then(()=>{const {layerView:c,tileDescriptors:e}=this,n=c.layer,g=new L.FeatureTileFetcher3D({context:this.context,filterExtent:this.extent,tileDescriptors:e,features:this.graphics});this.tileFetcher=g;this.suspended?this.tileFetcher.suspend():this.tileFetcher.resume();var q=this.layerView.view.resourceController;
q&&(this.handles.add(q.memoryController.events.on("quality-changed",h=>{g.memoryFactor=h})),this.tileFetcher.memoryFactor=q.memoryController.memoryFactor);(q="polygon"===this.context.geometryType?"polygonLodFactor":"polyline"===this.context.geometryType?"polylineLodFactor":null)&&this.handles.add(w.init(this.layerView.view,"qualitySettings.graphics3D."+q,h=>{g.lodFactor=h||1}));this.watchUpdatingTracking.add(n,"createQueryVersion",()=>this.dataFilterChanged());this.watchUpdatingTracking.add(c,"availableFields",
(h,r)=>this.availableFieldsChanged(r,h));this.watchUpdatingTracking.add(c,"requiredFields",(h,r)=>this.requiredFieldsChanged(r,h));this.handles.add([n.on("apply-edits",h=>this.applyEdits(h)),this.watch("extent",h=>g.filterExtent=h,!0),this.watch("tileDescriptors",h=>g.tileDescriptors=h,!0),w.init(this,"maximumNumberOfFeatures",h=>{g.maximumNumberOfFeatures=h;g.useTileCount=this.serviceDataCount>h},!0),w.init(this,"serviceDataCount",h=>g.useTileCount=h>this.maximumNumberOfFeatures,!0),w.init(N,"FEATURE_TILE_FETCH_SHOW_TILES",
h=>{h&&g&&!g.debugger?(g.debugger=new M.FeatureTileFetcher3DDebugger(g,a.featureTiles.tilingScheme.toTileInfo(),a),g.debugger.update()):!h&&this.tileFetcher&&g.debugger&&(g.debugger.destroy(),g.debugger=null)})]);this.supportsExceedsLimitQuery||this.watchUpdatingTracking.add(this,"maxTotalSnapshotVertices",()=>this.watchUpdatingTracking.addPromise(this.updateVertexLimitExceeded(null,this.lifeCycleAbortController.signal)))}).catch(()=>{})}};k.modeChanged=function(){switch(this.mode){case "tiles":this.tilesHandle||
(this.tilesHandle=this.layerView.view.featureTiles.addClient());break;default:x.warn("Unhandled feature layer mode "+this.mode);case "snapshot":f.isSome(this.tilesHandle)&&(this.tilesHandle.remove(),this.tilesHandle=null)}};k.dataFilterChanged=function(){this._set("maxTotalSnapshotVertices",0);this.notifyChange("maxTotalSnapshotVertices");this.refetch()};k.applyEdits=function(a){f.isNone(this.tileFetcher)||this.tileFetcher.applyEdits(a).then(b=>{b&&(b.deletedFeatures.length||b.updatedFeatures.length||
b.addedFeatures.length)&&this.watchUpdatingTracking.addPromise(this.updateServiceDataExtent(this.lifeCycleAbortController.signal))}).catch(b=>{if(!v.isAbortError(b))throw b;})};k.availableFieldsChanged=function(a,b){f.isSome(this.tileFetcher)&&B(this.tileFetcher.availableFields,b)&&this.refetch()};k.requiredFieldsChanged=function(a,b){f.isSome(this.tileFetcher)&&B(this.tileFetcher.availableFields,b)&&this.restart()};k.createVertexLimitExceededQuery=function(a){const b=this.layerView.layer,c=b.createQuery();
c.outStatistics=[new K({statisticType:"exceedslimit",maxVertexCount:a,outStatisticFieldName:"exceedslimit",maxPointCount:1E8,maxRecordCount:1E8})];b.capabilities.query.supportsCacheHint&&(c.cacheHint=!0);return c};k.createDataInfoQuery=function(){const a=this.layerView.layer,b=a.createQuery();b.outSpatialReference=this.layerView.view.spatialReference;a.capabilities.query.supportsCacheHint&&(b.cacheHint=!0);return b};k.fullExtentIsAccurate=function(){const a=this.layerView.layer;if(a.definitionExpression)return!1;
switch(a.type){case "feature":return I.isHostedAgolService(a.url);case "csv":case "geojson":case "ogc-feature":case "wfs":return!0}};k.updateServiceDataExtent=function(){var a=t._asyncToGenerator(function*(b){try{yield this.tryUpdateServiceDataExtent(b)}catch(c){v.isAbortError(c)||this._set("serviceDataExtent",A.clone(this.layerView.fullExtentInLocalViewSpatialReference))}});return function(b){return a.apply(this,arguments)}}();k.tryUpdateServiceDataExtent=function(){var a=t._asyncToGenerator(function*(b){var c=
this.layerView;const e=c.layer,n=e.capabilities.query.supportsExtent,g=A.clone(c.fullExtentInLocalViewSpatialReference),q=e.fullExtent,h=this.fullExtentIsAccurate(),r=this.serviceDataCount;n&&r<=d.FeatureTileController3DConstants.MAX_FEATURE_COUNT_FOR_EXTENT&&(!g||!h)&&"queryExtent"in e?(c=this.createDataInfoQuery(),b=yield e.queryExtent(c,{timeout:d.FeatureTileController3DConstants.QUERY_EXTENT_TIMEOUT,signal:b}),this._set("serviceDataExtent",b.extent)):g?this._set("serviceDataExtent",g):f.isSome(q)?
(b=yield J.projectGeometry(q,c.view.spatialReference,"portalItem"in e?e.portalItem:null,b),this._set("serviceDataExtent",b)):this._set("serviceDataExtent",null)});return function(b){return a.apply(this,arguments)}}();k.updateServiceDataCount=function(){var a=t._asyncToGenerator(function*(b){const c=this.layerView.layer;if("queryFeatureCount"in c)if(b=yield y.result(c.queryFeatureCount(this.createDataInfoQuery(),{timeout:d.FeatureTileController3DConstants.QUERY_STATISTICS_TIMEOUT,signal:b})),!0===
b.ok)this._set("serviceDataCount",b.value);else{if(v.isAbortError(b.error))throw b.error;this._set("serviceDataCount",d.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT)}else this._set("serviceDataCount",d.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT)});return function(b){return a.apply(this,arguments)}}();k.updateVertexLimitExceeded=function(){var a=t._asyncToGenerator(function*(b,c){var e=this.vertexLimitInfo;if(f.isNone(e))this._set("vertexLimitExceeded",!1);else{var n=1<this.minimumNumberOfVerticesForGeometry;
if(0>=e.primitivesPerFeature||n){var {primitivesPerFeature:g,primitivesPerCoordinate:q,maximumTotalNumberOfPrimitives:h}=e;0!==g&&f.isSome(b)&&(yield b);e=this.serviceDataCount;var r=e!==d.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT;b=r?Math.ceil((h-e*g)/(q||1)):Math.ceil(h/(q||1));n&&(b=Math.min(b,5E6));if(r&&this.minimumNumberOfVerticesForGeometry*e>b)this._set("vertexLimitExceeded",!0);else if(this.supportsExceedsLimitQuery)if(c=yield y.result(this.layerView.layer.queryFeatures(this.createVertexLimitExceededQuery(b),
{timeout:d.FeatureTileController3DConstants.QUERY_STATISTICS_TIMEOUT,signal:c})),!1===c.ok){if(v.isAbortError(c.error))throw c.error;this._set("vertexLimitExceeded",!1)}else(c=c.value.features[0])&&c.attributes?this._set("vertexLimitExceeded",!!c.attributes.exceedslimit):this._set("vertexLimitExceeded",!1);else this._set("vertexLimitExceeded",this.maxTotalSnapshotVertices>b)}else this._set("vertexLimitExceeded",!1)}});return function(b,c){return a.apply(this,arguments)}}();k.fetchServiceDataInfo=
function(){var a=t._asyncToGenerator(function*(){this.cancelFetchServiceDataInfo();let b=new AbortController;const c=b.signal;var e=this.updateServiceDataCount(c);e=v.eachAlways([e,this.updateVertexLimitExceeded(e,c)]);const n=e.then(()=>this.updateServiceDataExtent(c)).catch(g=>{v.isAbortError(g)||x.error("#fetchServiceDataInfo()",g)}).then(()=>{n===this.fetchDataInfoPromise&&(this.fetchDataInfoAbortController=this.fetchDataInfoPromise=null);b=null});b&&(this.fetchDataInfoPromise=n);this.fetchDataInfoAbortController=
b;return e.then(()=>{},()=>{})});return function(){return a.apply(this,arguments)}}();k.cancelFetchServiceDataInfo=function(){const a=this.fetchDataInfoAbortController;a&&(this.fetchDataInfoPromise=this.fetchDataInfoAbortController=null,a.abort())};t._createClass(u,[{key:"extent",set:function(a){if(a&&!a.spatialReference.equals(this.layerView.view.spatialReference))x.error("#extent\x3d","extent needs to be in the same spatial reference as the view");else{var b=this._get("extent");b===a||b&&a&&b.equals(a)||
(a=a?a.clone():null,this._set("extent",a))}}},{key:"updating",get:function(){return!!(f.isSome(this.tileFetcher)&&this.tileFetcher.updating||null!=this.fetchDataInfoPromise||"tiles"===this.mode&&this.layerView.view.featureTiles&&this.layerView.view.featureTiles.updating||this.watchUpdatingTracking&&this.watchUpdatingTracking.updating)}},{key:"updatingTotal",get:function(){return this.updating&&f.isSome(this.tileFetcher)?this.tileFetcher.updatingTotal:0}},{key:"updatingRemaining",get:function(){return this.updating&&
f.isSome(this.tileFetcher)?this.tileFetcher.updatingRemaining:0}},{key:"expectedFeatureDiff",get:function(){return this.updating&&f.isSome(this.tileFetcher)?this.tileFetcher.expectedFeatureDiff:0}},{key:"memoryForUnusedFeatures",get:function(){return f.isSome(this.tileFetcher)?this.tileFetcher.memoryForUnusedFeatures:0}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return!(!f.isSome(this.tileFetcher)||!this.tileFetcher.maximumNumberOfFeaturesExceeded)}},{key:"maximumNumberOfFeatures",get:function(){return f.isSome(this.displayFeatureLimit)?
this.displayFeatureLimit.maximumNumberOfFeatures:0},set:function(a){a!==this.maximumNumberOfFeatures&&(null==a?this._clearOverride("maximumNumberOfFeatures"):this._override("maximumNumberOfFeatures",a))}},{key:"hasMaximumNumberOfFeaturesOverride",get:function(){return this._isOverridden("maximumNumberOfFeatures")}},{key:"mode",get:function(){var a,b,c=this.layerView.layer;if("feature"===c.type&&f.isSome(c.infoFor3D))return"snapshot";if(!1===(null==(a=this.layerView.view.qualitySettings)?void 0:null==
(b=a.graphics3D)?void 0:b.snapshotAvailable)||this.serviceDataCount===d.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT||this.vertexLimitExceeded)return"tiles";a=(a=(a=this.layerView.view)&&a.featureTiles)&&a.tilingScheme;return c&&c.minScale&&this.serviceDataExtent&&a&&(c=this.approximateExtentSizeAtScale(c.minScale,a),(this.serviceDataExtent.width/c+this.serviceDataExtent.height/c)/2>d.FeatureTileController3DConstants.MAX_SNAPSHOT_MIN_SCALE_FACTOR)?"tiles":!this.maximumNumberOfFeatures||
this.serviceDataCount<=this.maximumNumberOfFeatures?"snapshot":"tiles"}},{key:"maxTotalSnapshotVertices",get:function(){const a=this._get("maxTotalSnapshotVertices")||0,b="snapshot"===this.mode&&f.isSome(this.tileFetcher)&&this.tileFetcher.totalVertices||0;return Math.max(a,b)}},{key:"tileDescriptors",get:function(){return"snapshot"===this.mode?new z([{id:"dummy-tile-full-extent",lij:[0,0,0]}]):this.layerView.view.featureTiles?this.layerView.view.featureTiles.tiles:new z}},{key:"test",get:function(){return{fetchDataInfoPromise:this.fetchDataInfoPromise,
tileFetcher:this.tileFetcher}}},{key:"vertexLimitInfo",get:function(){if(f.isNone(this.displayFeatureLimit)||f.isNone(this.displayFeatureLimit.averageSymbolComplexity))return null;const {averageSymbolComplexity:a,maximumTotalNumberOfPrimitives:b}=this.displayFeatureLimit,{primitivesPerCoordinate:c,primitivesPerFeature:e}=a,n=this._get("vertexLimitInfo");return f.isNone(n)||n.maximumTotalNumberOfPrimitives!==b||n.primitivesPerCoordinate!==c||n.primitivesPerFeature!==e?{primitivesPerCoordinate:c,primitivesPerFeature:e,
maximumTotalNumberOfPrimitives:b}:n}},{key:"supportsExceedsLimitQuery",get:function(){const a=this.layerView.layer;return a.capabilities&&a.capabilities.operations&&a.capabilities.operations.supportsExceedsLimitStatistics}},{key:"minimumNumberOfVerticesForGeometry",get:function(){switch(this.layerView.layer.geometryType){case "point":return 1;case "multipoint":return 1;case "polygon":return 4;case "polyline":return 2;case "multipatch":case "mesh":return 3;default:return 0}}},{key:"debug",get:function(){return{storedFeatures:f.isSome(this.tileFetcher)?
this.tileFetcher.storedFeatures:0,totalFeatures:f.isSome(this.tileFetcher)?this.tileFetcher.totalFeatures:0,totalVertices:f.isSome(this.tileFetcher)?this.tileFetcher.totalVertices:0}}}]);return u}(G.EsriPromiseMixin(C));l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"type",void 0);l.__decorate([m.property({constructOnly:!0})],d.FeatureTileController3D.prototype,"graphics",void 0);l.__decorate([m.property({constructOnly:!0})],d.FeatureTileController3D.prototype,"layerView",
void 0);l.__decorate([m.property({constructOnly:!0})],d.FeatureTileController3D.prototype,"context",void 0);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"extent",null);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"updating",null);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"watchUpdatingTracking",void 0);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"updatingTotal",null);l.__decorate([m.property()],d.FeatureTileController3D.prototype,
"updatingRemaining",null);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"expectedFeatureDiff",null);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"memoryForUnusedFeatures",null);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"maximumNumberOfFeaturesExceeded",null);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"serviceDataExtent",void 0);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"serviceDataCount",
void 0);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"vertexLimitExceeded",void 0);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"displayFeatureLimit",void 0);l.__decorate([m.property({type:Number})],d.FeatureTileController3D.prototype,"maximumNumberOfFeatures",null);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"mode",null);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"maxTotalSnapshotVertices",
null);l.__decorate([m.property({readOnly:!0,dependsOn:["mode"]})],d.FeatureTileController3D.prototype,"tileDescriptors",null);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"tileFetcher",void 0);l.__decorate([m.property()],d.FeatureTileController3D.prototype,"fetchDataInfoPromise",void 0);l.__decorate([m.property({readOnly:!0})],d.FeatureTileController3D.prototype,"vertexLimitInfo",null);d.FeatureTileController3D=l.__decorate([H.subclass("esri.layers.graphics.controllers.FeatureTileController3D")],
d.FeatureTileController3D);d.FeatureTileController3DConstants=void 0;(function(p){p.NO_SERVICE_DATA_COUNT=Infinity;p.MAX_SNAPSHOT_MIN_SCALE_FACTOR=5;p.reset=function(){p.MAX_FEATURE_COUNT_FOR_EXTENT=1E4;p.QUERY_STATISTICS_TIMEOUT=12E3;p.QUERY_EXTENT_TIMEOUT=1E4}})(d.FeatureTileController3DConstants||(d.FeatureTileController3DConstants={}));d.FeatureTileController3DConstants.reset();Object.defineProperty(d,"__esModule",{value:!0})});