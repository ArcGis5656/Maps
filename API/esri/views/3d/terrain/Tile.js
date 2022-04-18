// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/ObjectPool ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projectionEllipsoid ../../../geometry/support/aaBoundingRect ../../../chunks/sphere ../../2d/engine/vectorTiles/VectorTile ../support/StreamDataLoader ./ElevationBounds ./ElevationTileAgent ./interfaces ./LayerClass ./MapTileAgent ./RasterTile ./TerrainConst ./terrainUtils ./TileAgent ./TilePerLayerInfo ./TileTexture ./TileUpdate ./tileUtils ../../webgl/Util".split(" "),
function(n,U,V,w,L,D,W,g,u,X,E,Y,M,N,O,P,v,k,Q,R,B,z,t,F,S,h,G,H){function C(r){r.dispose();r instanceof P.ElevationTileAgent?I.release(r):r instanceof Q.MapTileAgent&&J.release(r)}const K=u.create(),x=u.create(),p=u.create();let aa=function(){function r(){this.lij=[0,0,0];this._children=[null,null,null,null];this._pendingUpdates=0;this._dirty=!0;this._previouslyRendered=!1;this.extent=E.create();this._elevationBounds=W.create();this.layerInfo=[[],[]];this.extentInRadians=E.create();this.centerAtSeaLevel=
u.create();this._center=[u.create(),Y.create(),u.create()];this.up=u.unitZ();this._intersectsClippingArea=this._isWithinClippingArea=!0;this._maxTesselation=0;this._usedMemory=-1;this._curvatureHeight=this._edgeLen2=this._edgeLen=this.renderOrder=this._screenDepth=this._mapDataRefCount=this._mapTileMemory=0}r.prune=function(){J.prune(0);I.prune(0);F.TilePerLayerInfo.prune()};var e=r.prototype;e.computeVisibility=function(){this._dirty=!1;const a=this._intersectsClippingArea&&this._isVisible(this.surface.frustum);
a!==this._visible&&(this._visible=a,this._surface.emit("tiles-visibility-changed"),this._surface.renderer.setNeedsRender(),this.updateAgentSuspension());return this._visible};e.init=function(a,b,c){this.lij[0]=a[0];this.lij[1]=a[1];this.lij[2]=a[2];this.ellipsoid=X.getReferenceEllipsoid(c.tilingScheme.spatialReference);c.tilingScheme.getExtent(a[0],a[1],a[2],this.extent);c.tilingScheme.convertExtentToRadians(this.extent,this.extentInRadians);this._intersectsClippingArea=this._isWithinClippingArea=
!0;this._clippingArea=null;this._mapDataRefCount=0;c.upsampleMapCache.pop(this.key);this._edgeLen2=this._edgeLen=0;this._center[n.CenterPosition.MIDDLE][3]=0;this.vlevel=a?a[0]:0;b&&b.elevationBounds?D.copy(this._elevationBounds,b.elevationBounds):D.set(this._elevationBounds,0,0);this._pendingUpdates=0;this.renderData=null;this._screenDepth=0;this._previouslyRendered=this._visible=!1;this._parent=b;this.unsetChildren();this._surface=c;this.updateVisibility();for(const d of k.LayerClasses){a=c.numLayers(d);
b=this.layerInfo[d];for(const f of b)f.release();b.length=a;for(let f=0;f<a;f++)b[f]=F.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool),d===k.LayerClass.ELEVATION&&this.findElevationBoundsForLayer(f,-1)}this.computeElevationBounds();this._maxTesselation=Math.min(c.tilingScheme.pixelSize,B.MAX_PATCH_TESSELATION)};e.release=function(){z.weakAssert(!this.renderData,"tile.renderData was not unloaded");this._surface.upsampleMapCache.pop(this.key);for(const a of k.LayerClasses){for(const b of this.layerInfo[a])b.release();
this.layerInfo[a].length=0}this._surface=this._parent=null;this._usedMemory=-1};e.refMapData=function(){++this._mapDataRefCount;this.isCached||this._surface.upsampleMapCache.pop(this.key)};e.unrefMapData=function(){--this._mapDataRefCount;if(this.isCached){const a=this.cachedMemory;0<a&&(this._surface.upsampleMapCache.put(this.key,this,a),this.setMemoryDirty())}};e.setMemoryDirty=function(){this._usedMemory=-1};e._updateMemoryUsed=function(){this._mapTileMemory=this._usedMemory=0;const a=this.cpuImageMemorySize;
for(const {data:b}of this.layerInfo[k.LayerClass.MAP])b instanceof S?this._mapTileMemory+=H.getGpuMemoryUsage(b.texture):b instanceof HTMLImageElement||b instanceof N.ImageWithType?this._mapTileMemory+=a:b instanceof R.RasterTile&&(this._mapTileMemory+=b.memoryUsage);for(const b of this.layerInfo[k.LayerClass.ELEVATION])this._usedMemory+=b.data?a:0;this.renderData&&(this._usedMemory+=this.renderData.estimatedGeometryMemoryUsage,this._mapTileMemory+=H.getGpuMemoryUsage(this.renderData.textureDescriptor));
this.isCached&&this._surface.upsampleMapCache.updateSize(this.key,this,this.cachedMemory)};e.getUsedMemoryForLayer=function(a,b){b=this.layerInfo[a][b];if(!b||!b.data)return 0;if(a===k.LayerClass.MAP&&!this.isCached){a=b.data;if(a instanceof S)return H.getGpuMemoryUsage(a.texture);if(a instanceof HTMLImageElement||a instanceof N.ImageWithType)return this.cpuImageMemorySize;if(a instanceof M.VectorTile||a instanceof R.RasterTile)return a.memoryUsage}else if(a===k.LayerClass.ELEVATION)return this.cpuImageMemorySize;
return 0};e.updateScreenDepth=function(a){var b=this._center[n.CenterPosition.MIDDLE];const c=b[0],d=b[1];b=b[2];const f=a[2]*c+a[6]*d+a[10]*b+a[14];this._screenDepth=0>f?0:f/(a[3]*c+a[7]*d+a[11]*b+a[15])};e.shouldSplit=function(a,b,c){if(w.isSome(a.frustum)&&(!this._intersectsClippingArea||!this._isVisible(a.frustum)))return h.TileUpdate.NONE;const d=this.level;g.subtract(K,this._center[n.CenterPosition.MIDDLE],b);var f=g.squaredLength(K);let q=n.CenterPosition.MIDDLE;g.subtract(x,this._center[n.CenterPosition.TOP],
b);var l=g.squaredLength(x);l<f&&(f=l,q=n.CenterPosition.TOP);g.subtract(x,this._center[n.CenterPosition.BOTTOM],b);l=g.squaredLength(x);l<f&&(f=l,q=n.CenterPosition.BOTTOM);if(this._edgeLen2>f&&d<a.maxLod)return h.TileUpdate.SPLIT;f=Math.sqrt(f);const m=this._edgeLen/(a.fovX*f*2);l=()=>{const T=d+Math.ceil(-Math.log2(a.relativeWidthLimit/m));return T!==this.vlevel?(this.vlevel=T,h.TileUpdate.VSPLITMERGE):h.TileUpdate.NONE_HIT_MAXLOD};if(c===v.LODSnapping.ON&&1===this._surface.snapLevel-d)return d>=
a.maxLod?l():h.TileUpdate.SPLIT;const y=g.dot(this.up,K);c=this._elevationBounds[1]-this._elevationBounds[0];const A=c/this.edgeLen;return a.aboveGround&&0<y&&.001>A&&0<y/f-Math.sin(this._curvatureHeight/(this.edgeLen*Math.SQRT1_2)*Math.PI)-A?h.TileUpdate.NONE:m<a.relativeWidthLimit?this.vlevel!==this.level?(this.vlevel=this.level,h.TileUpdate.VSPLITMERGE):h.TileUpdate.NONE:d>=a.maxLod?l():6<d&&(g.subtract(x,this._center[q],b),g.scale(p,this.up,y),g.subtract(p,p,x),l=g.squaredLength(p),l>this.radius*
this.radius&&(g.scale(p,p,this.radius/Math.sqrt(l)),g.add(p,p,this._center[q]),g.subtract(p,b,p),Math.min(1,(Math.abs(g.dot(p,this.up))+.5*c+this._curvatureHeight)/g.length(p))*(this._edgeLen/(a.fovY*f*2))<.1/a.angledSplitBias*a.relativeHeightLimit))?h.TileUpdate.NONE:h.TileUpdate.SPLIT};e.setChildren=function(a,b,c,d){z.weakAssert(!!(a&&b&&c&&d),"Null child passed");this._children[0]=a;this._children[1]=b;this._children[2]=c;this._children[3]=d};e.unsetChildren=function(){this._children[0]=null;
this._children[1]=null;this._children[2]=null;this._children[3]=null};e.load=function(a){this.refMapData();for(const b of k.LayerClasses)this._createOrUpdateAgents(0,b);a.loadTile(this)};e.unload=function(a){a.unloadTile(this);for(const b of k.LayerClasses){a=this.layerInfo[b];for(const c of a)c.loadingAgent&&c.loadingAgent!==t.TILE_AGENT_DONE&&(C(c.loadingAgent),c.loadingAgent=null),c.pendingUpdates=0}this.resetPendingUpdate(h.TileUpdate.GEOMETRY);this.resetPendingUpdate(h.TileUpdate.TEXTURE_NOFADING);
this.resetPendingUpdate(h.TileUpdate.TEXTURE_FADING);this.unrefMapData()};e.unloadMapData=function(){const a=this.layerInfo[k.LayerClass.MAP];for(const b of a)b.loadingAgent&&b.loadingAgent!==t.TILE_AGENT_DONE&&(C(b.loadingAgent),b.loadingAgent=null),b.pendingUpdates=0;this.renderData&&this.renderData.releaseTexture();this.setMemoryDirty()};e.updateClippingStatus=function(a){if(E.equals(a,this._clippingArea))return!1;var b=this._intersectsClippingArea;const c=this._isWithinClippingArea;w.isSome(a)?
(this._intersectsClippingArea=this.intersectsExtent(a),this._isWithinClippingArea=this._isWithinExtent(a)):this._isWithinClippingArea=this._intersectsClippingArea=!0;this._clippingArea=a;this.updateVisibility();a=c&&this._isWithinClippingArea;b=!c&&!b&&!this._isWithinClippingArea&&!this._intersectsClippingArea;!this.renderData||a||b||this.setPendingUpdate(h.TileUpdate.GEOMETRY);return!0};e.updateVisibility=function(){this._dirty=!0;this._surface.setTileTreeDirty()};e.getLayerInfo=function(a,b){return this.layerInfo[b][a]};
e.hasLayerData=function(a,b){a=this.layerInfo[b][a];return!(!a||!a.data||a.dataInvalidated)};e._isSuspended=function(a){return this.hasPendingUpdate(h.TileUpdate.SPLIT)?!0:a===k.LayerClass.ELEVATION?!1:!this.loadable};e.hasPendingUpdate=function(a){return(this._pendingUpdates&a)===a};e.setPendingUpdate=function(a){this._pendingUpdates|=a;a===h.TileUpdate.SPLIT||a===h.TileUpdate.MERGE?this._surface.setTileTreeDirty():this._surface.requestUpdate()};e.resetPendingUpdate=function(a){return this.hasPendingUpdate(a)?
(this._pendingUpdates&=~a,!0):!1};e.requestLayerData=function(a,b,c){const d=this.layerInfo[b][a];if(d.waitingAgents.has(c))return console.warn("agent already requested this piece of map data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),c.tile.lij.toString(),b,a),!0;d.waitingAgents.push(c);if(d.data&&!d.dataInvalidated)return console.warn("agent requested existing data (tile %s, agent tile %s, layer: %d/%d)",this.lij.toString(),c.tile.lij.toString(),b,a),c.dataArrived(this),!0;if(d.requestPromise)return!0;
w.abortMaybe(d.requestAbort);d.requestAbort=new AbortController;const f=this._surface.requestTileData(this,a,b,d.requestAbort);if(!f)return d.requestAbort=null,!1;a=()=>{d.requestPromise===f&&(d.requestPromise=null,d.requestAbort=null)};d.requestPromise=f;f.then(a,a);return!0};e.hasLij=function(a){return this.lij[0]===a[0]&&this.lij[1]===a[1]&&this.lij[2]===a[2]};e.findByLij=function(a){return this.hasLij(a)?this:this.isLeaf?null:(a=this._children[0].findByLij(a)||this._children[1].findByLij(a)||
this._children[2].findByLij(a)||this._children[3].findByLij(a))?a:null};e.distanceToSquared=function(a){return g.squaredLength(g.subtract(p,this._center[n.CenterPosition.MIDDLE],a))};e.containsPoint=function(a){const b=this.extent;return a[0]>=b[0]&&a[1]>=b[1]&&a[0]<=b[2]&&a[1]<=b[3]};e.unrequestLayerData=function(a,b,c){a=this.layerInfo[b][a];b=a.waitingAgents;c=null!=b.removeUnordered(c);z.weakAssert(c,"agent has not requested this piece of map data");1>b.length&&(a.abortRequest(),this._updateMemoryUsed())};
e.dataArrived=function(a,b,c){a=this.layerInfo[b][a];a.data=c;a.dataInvalidated=!1;a.waitingAgents.forAll(d=>d.dataArrived(this));a.waitingAgents.clear();this._updateMemoryUsed()};e.dataMissing=function(a,b,c){c.notInTilemap||console.error(`Tile ${this.lij.toString()} layer ${b}/${a} error ${c}`);a=this.layerInfo[b][a];a.dataMissing=!0;a.waitingAgents.forAll(d=>d.dataMissing());a.waitingAgents.clear();this._updateMemoryUsed()};e.updateRenderData=function(a,b){switch(a){case k.LayerClass.MAP:return this._updateTexture(b);
case k.LayerClass.ELEVATION:return this._updateGeometry()}};e._updateTexture=function(a){this.renderData&&(this.resetPendingUpdate(a===v.TextureUpdate.FADING?h.TileUpdate.TEXTURE_NOFADING:h.TileUpdate.TEXTURE_FADING),this.setPendingUpdate(a===v.TextureUpdate.FADING?h.TileUpdate.TEXTURE_FADING:h.TileUpdate.TEXTURE_NOFADING))};e._updateGeometry=function(){this.setPendingUpdate(h.TileUpdate.GEOMETRY);for(const a of this.layerInfo[k.LayerClass.ELEVATION])a.pendingUpdates|=h.TileUpdate.GEOMETRY};e.invalidateLayerData=
function(a,b){this.layerInfo[b][a].invalidateSourceData();this.restartAgents(b)};e.computeElevationBounds=function(){D.set(this._elevationBounds,Number.MAX_VALUE,-Number.MAX_VALUE);const a=this.layerInfo[k.LayerClass.ELEVATION];let b=!0;for(const c of a)w.isSome(c.elevationBounds)&&(this._elevationBounds[0]=Math.min(this._elevationBounds[0],c.elevationBounds.min),this._elevationBounds[1]=Math.max(this._elevationBounds[1],c.elevationBounds.max),c.elevationBounds.hasNoDataValues||(b=!1));b&&(this._elevationBounds[0]=
Math.min(this._elevationBounds[0],0),this._elevationBounds[1]=Math.max(this._elevationBounds[1],0));this.updateRadiusAndCenter();this._surface.setTileTreeDirty()};e._updateCenter=function(){g.scale(p,this.up,.5*(this._elevationBounds[0]+this._elevationBounds[1]));g.add(this._center[n.CenterPosition.MIDDLE],this.centerAtSeaLevel,p);g.scale(p,this.up,this._elevationBounds[0]);g.add(this._center[n.CenterPosition.TOP],this.centerAtSeaLevel,p);g.scale(p,this.up,this._elevationBounds[1]);g.add(this._center[n.CenterPosition.BOTTOM],
this.centerAtSeaLevel,p)};e.findElevationBoundsForLayer=function(a,b){const c=this.layerInfo[k.LayerClass.ELEVATION][a];if(!(w.isSome(c.elevationBounds)&&c.elevationBounds.level>=b)&&(b=this._surface.layerViewByIndex(a,k.LayerClass.ELEVATION),b=z.getLayerWithExtentRange(b),G.fallsWithinLayer(this,b,!1))){b=Z;var d=!1;if(c.data)a=c.data,b.min=a.bounds[0],b.max=a.bounds[1],b.hasNoDataValues=a.hasNoDataValues,b.level=this.lij[0],d=!0;else{let f=0,q,l;for(let m=this._parent;m&&(!l||f<B.getElevationDesiredResolutionLevel(this.level))&&
!(f=this.vlevel-m.level,q=l||q,l=m.layerInfo[k.LayerClass.ELEVATION][a].data,!l&&q&&f>=B.getElevationDesiredResolutionLevel(this.level));m=m.parent);if(l=l||q)l.computeMinMaxValue(this.lij[0],this.lij[1],this.lij[2],b),Infinity!==b.min&&(b.level=l.level,d=!0)}d&&(w.isNone(c.elevationBounds)&&(c.elevationBounds=new O.ElevationBounds),c.elevationBounds.copyFrom(b))}};e.modifyLayers=function(a,b,c){c=this.layerInfo[c];for(var d of c)d.loadingAgent&&d.loadingAgent!==t.TILE_AGENT_DONE&&(C(d.loadingAgent),
d.loadingAgent=null),d.waitingAgents.clear();for(d=0;d<c.length;++d)void 0===a[d]&&c[d].release();a=Array(...c);d=b.length;c.length=d;for(let f=0;f<d;f++){const q=b[f];c[f]=-1<q?a[q]:F.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool)}this._updateMemoryUsed()};e.restartAgents=function(a){this.renderData&&(this._createOrUpdateAgents(0,a),this.updateRenderData(a,v.TextureUpdate.FADING))};e.updateAgents=function(a){if(this.renderData){const b=this.layerInfo[a];for(const c of b)c.loadingAgent===
t.TILE_AGENT_DONE&&(c.loadingAgent=null);this._createOrUpdateAgents(0,a)}};e.updateAgentSuspension=function(){for(const a of k.LayerClasses){const b=this._isSuspended(a);for(const c of this.layerInfo[a])c.loadingAgent&&c.loadingAgent!==t.TILE_AGENT_DONE&&(c.loadingAgent.setSuspension(b),c.loadingAgent===t.TILE_AGENT_DONE&&this.updateRenderData(a,v.TextureUpdate.FADING))}};e.removeLayerAgent=function(a,b){a=this.layerInfo[b][a];a.loadingAgent&&a.loadingAgent!==t.TILE_AGENT_DONE&&a.loadingAgent.dispose();
a.loadingAgent=null};e.agentDone=function(a,b){const c=this.layerInfo[b][a];c.loadingAgent=t.TILE_AGENT_DONE;c.data||c.upsampleInfo||this._createOrUpdateAgents(a+1,b)};e._createOrUpdateAgents=function(a,b){const c=this._isSuspended(b),d=this.layerInfo[b];for(;a<d.length;++a){const m=d[a];var f=!1;const y=this._surface.layerViewByIndex(a,b);var q=z.getLayerWithExtentRange(y);if(m.loadingAgent)G.fallsWithinLayer(this,q,!1)?(m.loadingAgent!==t.TILE_AGENT_DONE&&m.loadingAgent.setSuspension(c),m.loadingAgent!==
t.TILE_AGENT_DONE&&(f=m.loadingAgent.update())):m.dispose();else if(G.fallsWithinLayer(this,q,!1)){{f=a;q=b;var l=c;const A=q===k.LayerClass.ELEVATION?I.acquire():J.acquire();A.init(this,f,q,l);f=A}m.loadingAgent=f;(f=m.loadingAgent.startLoading())?m.loadingAgent===t.TILE_AGENT_DONE&&this.setPendingUpdate(h.TileUpdate.GEOMETRY):(C(m.loadingAgent),m.loadingAgent=t.TILE_AGENT_DONE)}m.loadingAgent===t.TILE_AGENT_DONE&&this.updateRenderData(b,v.TextureUpdate.FADING);if(f&&y.isOpaque)break}};e._isWithinExtent=
function(a){const b=this.extent;return b[0]>=a[0]&&a[2]>=b[2]&&b[1]>=a[1]&&a[3]>=b[3]};e.intersectsExtent=function(a){const b=this.extent;return b[2]>=a[0]&&a[2]>=b[0]&&b[3]>=a[1]&&a[3]>=b[1]};e.getElevationBasedVerticesPerRow=function(a){const b=this.vlevel-this.level;a=Math.max(this.level-a,B.getElevationDesiredResolutionLevel(this.level)-b);return V.clamp((this.maxTesselation>>a)+1,2,this.maxTesselation+1)};U._createClass(r,[{key:"usedMemory",get:function(){-1===this._usedMemory&&this._updateMemoryUsed();
return this._usedMemory+(this.isCached?0:this.mapTileMemory)}},{key:"cachedMemory",get:function(){return this.isCached?this.mapTileMemory:0}},{key:"mapTileMemory",get:function(){-1===this._usedMemory&&this._updateMemoryUsed();let a=this._mapTileMemory;for(const {data:b}of this.layerInfo[k.LayerClass.MAP])b instanceof M.VectorTile&&(a+=b.memoryUsage);return a}},{key:"isCached",get:function(){return!this.shouldLoad&&0>=this._mapDataRefCount}},{key:"maxTesselation",get:function(){return this._maxTesselation}},
{key:"isWithinClippingArea",get:function(){return this._isWithinClippingArea}},{key:"intersectsClippingArea",get:function(){return this._intersectsClippingArea}},{key:"clippingArea",get:function(){return this._clippingArea}},{key:"parent",get:function(){return this._parent}},{key:"children",get:function(){return this._children}},{key:"surface",get:function(){return this._surface}},{key:"elevationBounds",get:function(){return this._elevationBounds}},{key:"level",get:function(){return this.lij[0]}},
{key:"key",get:function(){return`${this.lij[0]}/${this.lij[1]}/${this.lij[2]}`}},{key:"edgeLen",get:function(){return this._edgeLen}},{key:"radius",get:function(){return this._center[n.CenterPosition.MIDDLE][3]}},{key:"screenDepth",get:function(){return this._screenDepth}},{key:"visible",get:function(){this._dirty&&this.computeVisibility();return this._visible}},{key:"loadable",get:function(){return this.visible||this._surface.view.state.fixedContentCamera}},{key:"rendered",get:function(){const a=
!!this.renderData;a!==this._previouslyRendered&&(this._surface.emit("tiles-visibility-changed"),this._previouslyRendered=a,this._surface.renderer.setNeedsRender());return a}},{key:"shouldLoad",get:function(){if(!this.loadable)return!1;if(this._surface.lodSnapping===v.LODSnapping.ON){const a=this.level-this._surface.snapLevel;if(0===a)return!0;if(1===a)return!1}return this.isLeaf}},{key:"cpuImageMemorySize",get:function(){const a=this._surface.tilingScheme.pixelSize;return a*a*4}},{key:"updating",
get:function(){if(this.hasPendingUpdates)return!0;for(const a of k.LayerClasses){const b=this.layerInfo[a];for(const c of b)if(c.loadingAgent&&c.loadingAgent!==t.TILE_AGENT_DONE&&c.loadingAgent.updating)return!0}return!1}},{key:"hasPendingUpdates",get:function(){return 0!==this._pendingUpdates}},{key:"isLeaf",get:function(){return null==this._children[0]}},{key:"test",get:function(){return{cachedMemory:this.cachedMemory}}}]);return r}();const J=new L(Q.MapTileAgent),I=new L(P.ElevationTileAgent),
Z=new O.ElevationBounds;n.CenterPosition=void 0;(function(r){r[r.TOP=0]="TOP";r[r.MIDDLE=1]="MIDDLE";r[r.BOTTOM=2]="BOTTOM"})(n.CenterPosition||(n.CenterPosition={}));n.SplitLimits=function(){this.angledSplitBias=this.maxLod=this.relativeHeightLimit=this.relativeWidthLimit=this.fovY=this.fovX=0;this.aboveGround=!0};n.Tile=aa;Object.defineProperty(n,"__esModule",{value:!0})});