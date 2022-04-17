// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/set ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/accessorSupport/diffUtils ../../../../../renderers/support/heatmapUtils ../../../engine/webgl/definitions ./BaseProcessor ../support/tileUtils".split(" "),
function(l,x,m,n,G,H,I,J,y,z,A,B,C,g){function D(c){const e=c.key,d=new Map,a=B.TILE_SIZE;c=c.tileInfoView.tileInfo.isWrappable;d.set(g.getPow2NeighborKey(e,-1,-1,c).id,new h([-a,-a],[a-256,a-256,a,a]));d.set(g.getPow2NeighborKey(e,0,-1,c).id,new h([0,-a],[0,a-256,a,a]));d.set(g.getPow2NeighborKey(e,1,-1,c).id,new h([a,-a],[0,a-256,256,a]));d.set(g.getPow2NeighborKey(e,-1,0,c).id,new h([-a,0],[a-256,0,a,a]));d.set(g.getPow2NeighborKey(e,1,0,c).id,new h([a,0],[0,0,256,a]));d.set(g.getPow2NeighborKey(e,
-1,1,c).id,new h([-a,a],[a-256,0,a,256]));d.set(g.getPow2NeighborKey(e,0,1,c).id,new h([0,a],[0,0,a,256]));d.set(g.getPow2NeighborKey(e,1,1,c).id,new h([a,a],[0,0,256,256]));return d}let h=function(c,e){this.offset=c;this.extent=e};m=function(c){function e(){var a=c.apply(this,arguments)||this;a.type="heatmap";a._tileKeyToFeatureSets=new Map;return a}l._inheritsLoose(e,c);var d=e.prototype;d.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])};d.update=
function(){var a=l._asyncToGenerator(function*(f,b){b=b.schema.processors[0];"heatmap"===b.type&&z.diff(this._schema,b)&&(f.mesh=!0,this._schema=b)});return function(f,b){return a.apply(this,arguments)}}();d.onTileUpdate=function(a){for(const f of a.removed)this._tileKeyToFeatureSets.delete(f.key.id)};d.onTileClear=function(a){this._tileKeyToFeatureSets.delete(a.key.id);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a.id,data:{clear:!0}})};d.onTileMessage=function(){var a=l._asyncToGenerator(function*(f,
b,u){this._tileKeyToFeatureSets.has(f.key.id)||this._tileKeyToFeatureSets.set(f.key.id,new Map);const E=this._tileKeyToFeatureSets.get(f.key.id);n.isSome(b.addOrUpdate)&&b.addOrUpdate.hasFeatures&&E.set(b.addOrUpdate.instance,b);if(b.end){const p=[],v=D(f);this._tileKeyToFeatureSets.forEach((w,k)=>{if(k===f.key.id)w.forEach(q=>n.andThen(q.addOrUpdate,r=>p.push(r)));else if(v.has(k)){k=v.get(k);const [q,r]=k.offset;w.forEach(F=>n.andThen(F.addOrUpdate,t=>{t=t.transform(q,r,1,1);p.push(t)}))}});b=A.calculateHeatmapIntensityInfoReaders(p,
this._schema.mesh,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:f.key.id,intensityInfo:b},{...u,transferList:[b.matrix]})}});return function(f,b,u){return a.apply(this,arguments)}}();d.onTileError=function(a,f,b){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:a.id,error:f},b)};return e}(C);return m=x.__decorate([y.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],m)});