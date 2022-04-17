// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ../../../renderers/support/renderingInfoUtils ../../../rest/support/Query ./graphics/Graphics3DFeatureLikeLayerView ./graphics/QueryEngine ./support/projectExtentUtils ../../support/Scheduler".split(" "),
function(p,k,e,q,g,u,f,D,E,F,v,w,x,r,y,z,A,B,C){p.FeatureLikeLayerView3D=d=>{d=function(m){function n(){var a=m.apply(this,arguments)||this;a.controller=null;a.updatePolicy=1;a.suspendResumeExtentMode="computed";a.slicePlaneEnabled=!1;a.drapeSourceType=1;a.fullExtentInLocalViewSpatialReference=null;a.suspendResumeExtent=null;a._controllerCreated=!1;a.clippingExtent=null;a.supportsHeightUnitConversion=!0;a.pendingController=null;a.queryEngine=null;return a}k._inheritsLoose(n,m);var c=n.prototype;c.initialize=
function(){const a=this.layer;"isTable"in a&&a.isTable?this.addResolvingPromise(Promise.reject(new q("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:a}))):(this._set("graphics3d",new z({owner:this,layer:a,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,preferredUpdatePolicy:this.updatePolicy,suspendResumeExtentMode:this.suspendResumeExtentMode,
updateClippingExtent:b=>this.updateClippingExtent(b)})),this.updatingHandles.add(this,"updatePolicy",b=>this.graphics3d.graphicsCore.preferredUpdatePolicy=b),this.updatingHandles.add(this,"suspendResumeExtentMode",b=>{this.graphics3d.suspendResumeExtentMode=b}),this.addResolvingPromise(this.graphics3d.setup().then(()=>this.validateGeometryType()).then(()=>this.queryEngine=new A.default({layerView:this,priority:C.TaskPriority.FEATURE_QUERY_ENGINE})).then(()=>B.toViewIfLocal(this)).then(b=>this.fullExtentInLocalViewSpatialReference=
b).then(()=>this.initializeController())),this.notifyChange("updating"))};c.destroy=function(){this.destroyPendingController();this.controller=g.destroyMaybe(this.controller);this._set("graphics3d",g.destroyMaybe(this.graphics3d));this.queryEngine=g.destroyMaybe(this.queryEngine);this.loadedGraphics=null};c.destroyPendingController=function(){this.pendingController&&(this.pendingController.destroy(),this.pendingController=null)};c.notifyGraphicGeometryChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(a)};
c.notifyGraphicVisibilityChanged=function(a){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(a)};c.getRenderingInfo=function(a,b,h){a=r.getRenderingInfo(a,{renderer:b,arcade:h});g.isSome(a)&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};c.getRenderingInfoAsync=function(){var a=k._asyncToGenerator(function*(b,h,l,t){return r.getRenderingInfoAsync(b,{renderer:h,arcade:l,...t})});return function(b,h,l,t){return a.apply(this,arguments)}}();c.getGraphicFromGraphicUid=function(a){var b;
let h=null;null==(b=this.loadedGraphics)?void 0:b.forEach(l=>{l.uid===a&&(h=w.hydrateGraphic(l,this.layer))});return h};c.whenGraphicBounds=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.whenGraphicBounds(a,b):null};c.computeAttachmentOrigin=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(a,b):null};c.getSymbolLayerSize=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.getSymbolLayerSize(a,b):null};c.queryFeatures=function(a,
b){return this.queryEngine.executeQuery(this._ensureQuery(a),g.get(b,"signal"))};c.queryObjectIds=function(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),g.get(b,"signal"))};c.queryFeatureCount=function(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),g.get(b,"signal"))};c.queryExtent=function(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),g.get(b,"signal"))};c._ensureQuery=function(a){return g.isNone(a)?this.createQuery():y.from(a)};
c.highlight=function(a){return this.graphics3d.highlight(a,this.layer.objectIdField)};c.maskOccludee=function(a){return this.graphics3d.maskOccludee(a)};c.canResume=function(){return m.prototype.canResume.call(this)&&(!this.graphics3d||!this.graphics3d.suspended)};c.getSuspendInfo=function(){const a=m.prototype.getSuspendInfo.call(this);return this.graphics3d?{...a,...this.graphics3d.suspendInfo}:a};c.isUpdating=function(){var a,b;return!this.graphics3d||this.graphics3d.destroyed?!1:!(this._controllerCreated&&
(null==(a=this.controller)||!a.updating)&&null!=(b=this.view.basemapTerrain)&&b.ready&&!this.graphics3d.updating)};c.initializeController=function(){var a=k._asyncToGenerator(function*(){const b=this.createController();this.pendingController=b;yield b.when();this.setControllerWhenInitialized(b)});return function(){return a.apply(this,arguments)}}();c.setControllerWhenInitialized=function(){var a=k._asyncToGenerator(function*(b){try{yield this.when()}catch(h){}this._controllerCreated=!0;this.notifyChange("updating");
!this.isResolved()||this.destroyed?this.destroyPendingController():(yield u.whenTrueOnce(this.view,"basemapTerrain.ready"),this.beforeSetController(b),this.pendingController=null,this.controller=b,this.loadedGraphics=b.graphics,this.notifyChange("updating"))});return function(b){return a.apply(this,arguments)}}();c.updateClippingExtent=function(a){this.clippingExtent=a;if(!this.controller)return!1;switch(this.controller.type){case "stream":return!1;case "feature-tile-3d":return this.controller.extent=
a,!0}};c.validateGeometryType=function(){switch(this.layer.geometryType){case "multipatch":case "multipoint":return Promise.reject(new q("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ${geometryType}",{geometryType:this.layer.geometryType}))}};c._getResourceInfo=function(){const a=this.controller&&this.controller instanceof x.FeatureTileController3D?this.controller:null;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:a?a.maximumNumberOfFeatures:
-1,totalNumberOfFeatures:a?a.serviceDataCount:-1,nodes:0,core:this.graphics3d.graphicsCore.performanceInfo,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.graphics3d.frustumVisibility.suspended,visibilityScale:!this.graphics3d.scaleVisibility.suspended}};k._createClass(n,[{key:"legendEnabled",get:function(){var a,b;return this.canResume()&&!(null!=(a=this.graphics3d)&&null!=(b=a.frustumVisibility)&&b.suspended)}},{key:"graphics3DGraphics",get:function(){return this.graphics3d?
this.graphics3d.graphicsCore.graphics3DGraphics:null}},{key:"graphics3DGraphicsByObjectID",get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null}},{key:"symbolUpdateType",get:function(){return this.graphics3d?this.graphics3d.graphicsCore.symbolUpdateType:null}},{key:"performanceInfo",get:function(){return this._getResourceInfo()}}]);return n}(d);e.__decorate([f.property()],d.prototype,"loadedGraphics",void 0);e.__decorate([f.property()],d.prototype,"suspended",
void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"legendEnabled",null);e.__decorate([f.property()],d.prototype,"updating",void 0);e.__decorate([f.property()],d.prototype,"controller",void 0);e.__decorate([f.property()],d.prototype,"graphics3d",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"updatePolicy",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"suspendResumeExtentMode",void 0);e.__decorate([f.property({type:Boolean})],d.prototype,"slicePlaneEnabled",
void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"suspendInfo",void 0);return d=e.__decorate([v.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],d)};Object.defineProperty(p,"__esModule",{value:!0})});