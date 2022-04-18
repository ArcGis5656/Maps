// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/heightModelInfoUtils ../ViewingMode ./projectionUtils".split(" "),function(u,h,e,z,g,v,k,D,E,F,A,w,r,B){const x=z.getLogger("esri.views.support.DefaultsFromMap");
x.level="info";e=function(y){function t(a){a=y.call(this,a)||this;a.required={tileInfo:!1,heightModelInfo:!1,extent:!1};a.defaultSpatialReference=null;a.userSpatialReference=null;a.sourcePreloadCount=10;a.priorityCollection=null;a.logDebugInformation=!1;a.requiresExtentInSpatialReference=!0;a.suspended=!1;a._projectExtentTask={task:null,input:null,output:null,spatialReference:null};return a}u._inheritsLoose(t,y);var p=t.prototype;p.destroy=function(){this._projectExtentTask.task&&(this._debug("Aborting project extent task"),
this._projectExtentTask.task=g.abortMaybe(this._projectExtentTask.task));this._set("map",null)};p._processSpatialReferenceCandidates=function(a,b){var d;const f=this._getSupportedSpatialReferences(a);if(0!==f.length)if(this._debug("Spatial reference candidates from",null!=(d=a.title)?d:a.id,":",f.map(c=>`${c.spatialReference.wkid}:${g.isSome(c.viewingMode)?r.stringFromViewingMode(c.viewingMode):"global/local"}`).join(", ")),b.candidates){a=[];d=(c,l)=>g.isNone(c.viewingMode)?l.viewingMode:g.isNone(l.viewingMode)?
c.viewingMode:c.viewingMode===l.viewingMode?c.viewingMode:!1;for(const c of b.candidates)for(const l of f){if(!c.spatialReference.equals(l.spatialReference))continue;const m=d(c,l);if(!1!==m){a.push({spatialReference:c.spatialReference,viewingMode:m});break}}0<a.length&&(b.candidates=a)}else b.candidates=f};p._pickSpatialReferenceCandidate=function(a){const b=this.defaultSpatialReference;if(!a||1>a.length)return g.isSome(b)?{spatialReference:b,viewingMode:null}:null;g.isSome(b)&&1<a.length&&a.some(({spatialReference:d})=>
d.equals(b))&&(a=a.filter(({spatialReference:d})=>d.equals(b)));1<a.length&&a.some(({viewingMode:d})=>d!==r.ViewingMode.Local)&&(a=a.filter(({viewingMode:d})=>d!==r.ViewingMode.Local));return a[0]};p._getSupportedSpatialReferences=function(a){var b="supportedSpatialReferences"in a&&a.supportedSpatialReferences||(a.spatialReference?[a.spatialReference]:[]);if(0===b.length)return[];const d=[];for(const f of b)if(b=this.getSpatialReferenceSupport({spatialReference:f,layer:a}),g.isSome(b)){b=g.isSome(b.constraints)?
b.constraints:[{spatialReference:f}];for(const {spatialReference:c,viewingMode:l}of b)(!this.requiresExtentInSpatialReference||g.isNone(this.userSpatialReference)||c.equals(this.userSpatialReference))&&d.push({spatialReference:c,viewingMode:l})}return d};p._pickExtentCandidate=function(a){const b=this.spatialReference;return a.find(({extent:d})=>b.equals(d.spatialReference))||a[0]};p._collectLayers=function(a){var b;if("loaded"!==this._loadMaybe(null==(b=this.map)?void 0:b.call(this)))return{layers:[],
updating:!0};b={layers:[],preloading:-1,updating:!1};for(const d of a)if(this._collectCollection(d,b),b.preloading===this.sourcePreloadCount)break;return{layers:b.layers,updating:b.updating}};p._collectCollection=function(a,b){if(a.layers){switch(this._loadMaybe(a.parent)){case "loading":b.updating=!0;++b.preloading;return;case "failed":return}for(const c of a.layers){switch(this._loadMaybe(c)){case "failed":continue;case "loading":b.updating=!0;++b.preloading;break;case "loaded":if(!b.updating){var d,
f;this._debug("Considering layer",null!=(d=null!=(f=c.title)?f:c.id)?d:c.declaredClass);b.layers.push(c)}"layers"in c&&this._collectCollection({layers:c.layers},b)}if(b.preloading===this.sourcePreloadCount)break}}};p._loadMaybe=function(a){if(!(a&&"loadStatus"in a))return"loaded";if("not-loaded"===a.loadStatus){var b,d;this._debug("Triggering load",null!=(b=null!=(d=a.title)?d:a.id)?b:a.declaredClass);a.load();return"loading"}return a.loadStatus};p._debug=function(...a){this.logDebugInformation&&
x.info(...a)};u._createClass(t,[{key:"ready",get:function(){return!this._spatialReferenceTask.updating&&!this._tileInfoTask.updating&&!this._extentTask.updating}},{key:"heightModelInfoReady",get:function(){return!this._heightModelInfoTask.updating}},{key:"spatialReference",get:function(){return g.isSome(this.userSpatialReference)?this.userSpatialReference:g.unwrap(this._spatialReferenceTask.spatialReference)}},{key:"extent",get:function(){return g.unwrap(this._extentTask.extent)}},{key:"heightModelInfo",
get:function(){return g.unwrap(this._heightModelInfoTask.heightModelInfo)}},{key:"vcsWkid",get:function(){return g.unwrap(this._heightModelInfoTask.vcsWkid)}},{key:"latestVcsWkid",get:function(){return g.unwrap(this._heightModelInfoTask.latestVcsWkid)}},{key:"viewingMode",get:function(){return g.isNone(this.userSpatialReference)||this.userSpatialReference.equals(g.unwrap(this._spatialReferenceTask.spatialReference))?g.unwrap(this._spatialReferenceTask.viewingMode):null}},{key:"tileInfo",get:function(){return g.unwrap(this._tileInfoTask.tileInfo)}},
{key:"mapCollections",get:function(){var a,b,d,f;const c=null==(a=this.map)?void 0:a.call(this);a=[];g.isSome(this.priorityCollection)&&a.push(this.priorityCollection);a.push({parent:null==c?void 0:c.basemap,layers:null==c?void 0:null==(b=c.basemap)?void 0:b.baseLayers},{layers:null==c?void 0:c.layers},{parent:null==c?void 0:c.ground,layers:null==c?void 0:null==(d=c.ground)?void 0:d.layers},{parent:null==c?void 0:c.basemap,layers:null==c?void 0:null==(f=c.basemap)?void 0:f.referenceLayers});return a}},
{key:"_allLayers",get:function(){var a,b;const d=this._collectLayers(this.mapCollections);this._debug("Collected",null!=(a=null==(b=d.layers)?void 0:b.length)?a:0,"layers, updating",d.updating);return d}},{key:"_spatialReferenceTask",get:function(){var a;if(this.suspended){var b;return null!=(b=this._get("_spatialReferenceTask"))?b:{updating:!1}}const {layers:d,updating:f}=this._allLayers;b={candidates:null};for(const c of d)if(this._processSpatialReferenceCandidates(c,b),b.candidates&&1===b.candidates.length)break;
if(1!==(null==(a=b.candidates)?void 0:a.length)&&f)return{updating:!0};a=this._pickSpatialReferenceCandidate(b.candidates);this._debug("Finished spatial reference",g.isSome(a)?`${a.spatialReference.wkid}:${g.isSome(a.viewingMode)?r.stringFromViewingMode(a.viewingMode):"global/local"}`:"none available");return{spatialReference:g.isSome(a)?a.spatialReference:null,viewingMode:g.isSome(a)?a.viewingMode:null,updating:!1}}},{key:"_tileInfoTask",get:function(){var a,b,d,f,c,l,m;if(!this.required.tileInfo){var q;
return null!=(q=this._get("_tileInfoTask"))?q:{updating:!1}}if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};const {layers:n,updating:C}=this._collectLayers([{parent:null==(a=this.map)?void 0:null==(b=a.call(this))?void 0:b.basemap,layers:null==(d=this.map)?void 0:null==(f=d.call(this))?void 0:null==(c=f.basemap)?void 0:c.baseLayers},{layers:null==(l=this.map)?void 0:null==(m=l.call(this))?void 0:m.layers}]);return n&&0<n.length&&"tileInfo"in n[0]?(a=n[0].tileInfo,{tileInfo:a&&
a.spatialReference.equals(this.spatialReference)?a:null,updating:!1}):{updating:C}}},{key:"_heightModelInfoTask",get:function(){var a;if(!this.required.heightModelInfo||this.suspended&&null!=(a=this._get("_heightModelInfoTask"))&&a.heightModelInfo){var b;return null!=(b=this._get("_heightModelInfoTask"))?b:{updating:!1}}const {layers:d,updating:f}=this._allLayers;for(const n of d){var c,l;this._debug("Considering",null!=(c=null!=(l=n.title)?l:n.id)?c:n.declaredClass,"for height model info");if(w.mayHaveHeightModelInfo(n)&&
(a=w.deriveHeightModelInfoFromLayer(n))){var m,q;this._debug("Derived height model info",a);return{heightModelInfo:a,vcsWkid:null==(m=n.spatialReference)?void 0:m.vcsWkid,latestVcsWkid:null==(q=n.spatialReference)?void 0:q.latestVcsWkid,updating:!1}}this._debug("Layer does not support height models")}this._debug("No height model info found,","updating",f);return{updating:f}}},{key:"_extentCandidatesTask",get:function(){if(this.suspended||!this.required.extent){var a;return null!=(a=this._get("_extentCandidatesTask"))?
a:{updating:!1}}if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};var b=this._allLayers;a=b.updating;const d=[];for(const l of b.layers){var f;b="fullExtents"in l&&l.fullExtents||(g.isSome(l.fullExtent)?[l.fullExtent]:[]);var c=this.requiresExtentInSpatialReference?null:b[0];if(c=null!=(f=b.find(m=>m.spatialReference.equals(this.spatialReference)))?f:c)return{candidates:[{extent:c,layer:l}],updating:!1};if(0<this._getSupportedSpatialReferences(l).length)for(const m of b)d.push({extent:m,
layer:l})}return{candidates:d,updating:a}}},{key:"_extentTask",get:function(){var a=this;const {candidates:b,updating:d}=this._extentCandidatesTask;if(d)return{updating:d};if(g.isNone(b)||0===b.length)return{updating:!1};if(!this.spatialReference)return{updating:this._spatialReferenceTask.updating};const f=this._pickExtentCandidate(b),c=this.spatialReference;if(f.extent.equals(this._projectExtentTask.input)&&c.equals(this._projectExtentTask.spatialReference))return{extent:this._projectExtentTask.output,
updating:g.isSome(this._projectExtentTask.task)&&!this._projectExtentTask.task.finished};g.isSome(this._projectExtentTask.task)&&(this._debug("Aborting project extent task"),this._projectExtentTask.task=g.abortMaybe(this._projectExtentTask.task));this._debug("Starting project extent task for",f.extent);this._projectExtentTask={input:f.extent.clone(),output:null,spatialReference:c.clone(),task:v.createTask(function(){var l=u._asyncToGenerator(function*(m){try{const q=yield B.projectWithEngineOrService(f.extent,
c,f.layer.portalItem,m);a._debug("Project extent task finished",q);a._projectExtentTask={...a._projectExtentTask,task:null,output:q}}catch(q){v.isAborted(m)||(a._projectExtentTask={...a._projectExtentTask,task:null})}});return function(m){return l.apply(this,arguments)}}())};return{updating:!0}}}]);return t}(e);h.__decorate([k.property()],e.prototype,"required",void 0);h.__decorate([k.property({constructOnly:!0})],e.prototype,"map",void 0);h.__decorate([k.property({constructOnly:!0})],e.prototype,
"getSpatialReferenceSupport",void 0);h.__decorate([k.property()],e.prototype,"defaultSpatialReference",void 0);h.__decorate([k.property()],e.prototype,"userSpatialReference",void 0);h.__decorate([k.property()],e.prototype,"sourcePreloadCount",void 0);h.__decorate([k.property()],e.prototype,"priorityCollection",void 0);h.__decorate([k.property()],e.prototype,"logDebugInformation",void 0);h.__decorate([k.property()],e.prototype,"requiresExtentInSpatialReference",void 0);h.__decorate([k.property()],
e.prototype,"suspended",void 0);h.__decorate([k.property({readOnly:!0})],e.prototype,"ready",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"heightModelInfoReady",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"spatialReference",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"extent",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"heightModelInfo",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"vcsWkid",null);h.__decorate([k.property({readOnly:!0})],
e.prototype,"latestVcsWkid",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"viewingMode",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"tileInfo",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"mapCollections",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"_allLayers",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"_spatialReferenceTask",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"_tileInfoTask",null);h.__decorate([k.property({readOnly:!0})],
e.prototype,"_heightModelInfoTask",null);h.__decorate([k.property({readOnly:!0})],e.prototype,"_extentCandidatesTask",null);h.__decorate([k.property()],e.prototype,"_extentTask",null);h.__decorate([k.property()],e.prototype,"_projectExtentTask",void 0);return e=h.__decorate([A.subclass("esri.views.support.DefaultsFromMap")],e)});