// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/HandleOwner ../../../../core/handleUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D ../../../3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D ./queryEngineUtils ./WorkerTileTreeDebugger ./featureServiceSource/FeatureServiceSnappingSourceWorkerHandle ./featureServiceSource/FeatureServiceTilesSimple ../../../support/debugFlags".split(" "),
function(c,l,d,r,t,n,p,f,e,C,D,E,u,v,w,x,y,m,z,A){c.FeatureServiceSnappingSource=function(q){function g(b){return q.call(this,b)||this}l._inheritsLoose(g,q);var h=g.prototype;h.initialize=function(){const b=this.view;if(p.isSome(b))switch(b.type){case "2d":this.tilesOfInterest=new v.FeatureServiceTiles2D({view:b,layer:this.layer});this.workerHandle=new m.FeatureServiceSnappingSourceWorkerHandle;break;case "3d":{const a=b.resourceController;this.tilesOfInterest=new w.FeatureServiceTiles3D({view:b});
this.workerHandle=new m.FeatureServiceSnappingSourceWorkerHandle({schedule:k=>a.schedule(k)})}}else this.tilesOfInterest=new z.FeatureServiceTilesSimple({layer:this.layer}),this.workerHandle=new m.FeatureServiceSnappingSourceWorkerHandle;this.handles.add([n.destroyHandle(this.workerHandle)]);this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null);this.updatingHandles.add(()=>this.updateTilesParameters,()=>this.workerHandle.updateTiles(this.updateTilesParameters,
null),f.initial);this.handles.add([f.watch(()=>this.configuration,a=>this.workerHandle.configure(a,null),f.sync)]);p.isSome(b)&&this.handles.add(f.watch(()=>A.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,a=>{a&&!this.debug?(this.debug=new y.WorkerTileTreeDebugger({view:b,handle:this.workerHandle}),this.handles.add(n.destroyHandle(this.debug),"debug")):!a&&this.debug&&this.handles.remove("debug")},f.initial));this.handles.add(this.layerSource.layer.on("apply-edits",a=>{this.workerHandle.applyEdits(a,
null)}))};h.refresh=function(){this.workerHandle.refresh(null)};h.fetchCandidates=function(){var b=l._asyncToGenerator(function*(a,k){this.tilesOfInterest.pointOfInterest=a.coordinateHelper.vectorToPoint(a.point);return(yield this.workerHandle.fetchCandidates({...a,filter:null},k)).candidates.map(B=>x.convertSnappingCandidate(B,a.coordinateHelper))});return function(a,k){return b.apply(this,arguments)}}();h.getDebugInfo=function(b){return this.workerHandle.getDebugInfo(b)};l._createClass(g,[{key:"updateTilesParameters",
get:function(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}},{key:"updating",get:function(){return this.workerHandle.updating||this.updatingHandles.updating}},{key:"configuration",get:function(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}},{key:"availability",get:function(){return this.workerHandle.availability}},{key:"layer",get:function(){return this.layerSource.layer}}]);return g}(t.HandleOwnerMixin(r));
d.__decorate([e.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"spatialReference",void 0);d.__decorate([e.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"layerSource",void 0);d.__decorate([e.property({constructOnly:!0})],c.FeatureServiceSnappingSource.prototype,"view",void 0);d.__decorate([e.property()],c.FeatureServiceSnappingSource.prototype,"tilesOfInterest",void 0);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,
"updateTilesParameters",null);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"updating",null);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"configuration",null);d.__decorate([e.property({readOnly:!0})],c.FeatureServiceSnappingSource.prototype,"availability",null);c.FeatureServiceSnappingSource=d.__decorate([u.subclass("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],c.FeatureServiceSnappingSource);
Object.defineProperty(c,"__esModule",{value:!0})});