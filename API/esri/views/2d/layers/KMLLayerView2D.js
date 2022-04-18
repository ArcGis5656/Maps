// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../kernel ../../../request ../../../core/Collection ../../../core/Handles ../../../core/maybe ../../../core/reactiveUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/webMercatorUtils ../../../layers/support/kmlUtils ../../../rest/utils ../../../support/GraphicsCollection ../engine/Bitmap ../engine/BitmapContainer ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),
function(n,p,I,J,K,L,t,M,w,u,m,T,U,N,C,x,D,E,q,O,y,P,Q,R,z,A,S){let F=function(){this.allSublayers=new Map;this.allPoints=[];this.allPolylines=[];this.allPolygons=[];this.allMapImages=[]};m=function(G){function B(){var a=G.apply(this,arguments)||this;a._handles=new L;a._bitmapIndex=new Map;a._mapImageContainer=new Q.BitmapContainer;a._kmlVisualData=new F;a.allVisiblePoints=new y.GraphicsCollection;a.allVisiblePolylines=new y.GraphicsCollection;a.allVisiblePolygons=new y.GraphicsCollection;a.allVisibleMapImages=
new K;return a}n._inheritsLoose(B,G);var e=B.prototype;e.hitTest=function(){var a=n._asyncToGenerator(function*(b,d){var f,l,g;return(yield Promise.all([null==(f=this._pointsView)?void 0:f.hitTest(b),null==(l=this._polylinesView)?void 0:l.hitTest(b),null==(g=this._polygonsView)?void 0:g.hitTest(b)])).flat().filter(c=>c?(c.layer=this.layer,c.sourceLayer=this.layer,!0):!1)});return function(b,d){return a.apply(this,arguments)}}();e.update=function(a){this._polygonsView&&this._polygonsView.processUpdate(a);
this._polylinesView&&this._polylinesView.processUpdate(a);this._pointsView&&this._pointsView.processUpdate(a)};e.attach=function(){this._fetchController=new AbortController;this.container.addChild(this._mapImageContainer);this._polygonsView=new A({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new z(this.view.featuresTilingScheme)});this.container.addChild(this._polygonsView.container);this._polylinesView=new A({view:this.view,graphics:this.allVisiblePolylines,
requestUpdateCallback:()=>this.requestUpdate(),container:new z(this.view.featuresTilingScheme)});this.container.addChild(this._polylinesView.container);this._pointsView=new A({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new z(this.view.featuresTilingScheme)});this.container.addChild(this._pointsView.container);this.handles.add([this.allVisibleMapImages.on("change",a=>{a.added.forEach(b=>this._addMapImage(b));a.removed.forEach(b=>this._removeMapImage(b))}),
M.watch(()=>this.layer.visibleSublayers,a=>{for(const [,b]of this._kmlVisualData.allSublayers)b.visibility=0;for(const b of a)if(a=this._kmlVisualData.allSublayers.get(b.id))a.visibility=1;this._refreshCollections()})]);this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal))};e.detach=function(){this._fetchController.abort();this._fetchController=null;this._handles.removeAll();this._mapImageContainer.removeAllChildren();this.container.removeAllChildren();this._bitmapIndex.clear();
this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null);this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null);this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)};e.moveStart=function(){};e.viewChange=function(){this._polygonsView.viewChange();this._polylinesView.viewChange();this._pointsView.viewChange()};e.moveEnd=function(){};e.isUpdating=function(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating};
e._addMapImage=function(a){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&J(a.href,{responseType:"image"}).then(({data:b})=>{let d=C.fromJSON(a.extent);E.canProject(d,this.view.spatialReference)&&(d=E.project(d,this.view.spatialReference));const f=new P.Bitmap(b,"standard");f.x=d.xmin;f.y=d.ymax;f.resolution=d.width/b.naturalWidth;f.rotation=a.rotation;this._mapImageContainer.addChild(f);this._bitmapIndex.set(a,f)})};e._getViewDependentUrl=function(){var a=n._asyncToGenerator(function*(b,
d){const {viewFormat:f,viewBoundScale:l,httpQuery:g}=b;if(t.isSome(f)){if(t.isNone(d))throw Error("Loading this network link requires a view state.");yield x.load();if(t.isSome(l)&&1!==l){var c=new C(d.extent);c.expand(l)}else c=d.extent;c=x.project(c,D.WGS84);var h=x.project(c,D.WebMercator);h=Math.max(h.width,h.height);const v={"[bboxWest]":c.xmin.toString(),"[bboxEast]":c.xmax.toString(),"[bboxSouth]":c.ymin.toString(),"[bboxNorth]":c.ymax.toString(),"[lookatLon]":c.center.x.toString(),"[lookatLat]":c.center.y.toString(),
"[lookatRange]":h.toString(),"[lookatTilt]":"0","[lookatHeading]":d.rotation.toString(),"[lookatTerrainLon]":c.center.x.toString(),"[lookatTerrainLat]":c.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":c.center.x.toString(),"[cameraLat]":c.center.y.toString(),"[cameraAlt]":h.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":(d.size[0]*d.pixelRatio).toString(),"[vertPixels]":(d.size[1]*d.pixelRatio).toString(),"[terrainEnabled]":"0","[clientVersion]":I.version,"[kmlVersion]":"2.2",
"[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"};h=r=>{for(const k in r)for(const H in v)r[k]=r[k].replace(H,v[H])};d=w.queryToObject(f);h(d);c={};t.isSome(g)&&(c=w.queryToObject(g),h(c));b=O.parseUrl(b.href);b.query={...b.query,...d,...c};return`${b.path}?${w.objectToQuery(d)}`}return b.href});return function(b,d){return a.apply(this,arguments)}}();e._fetchService=function(){var a=n._asyncToGenerator(function*(b){const d=new F;yield this._loadVisualData(this.layer.url,d,b);this._kmlVisualData=
d;this._refreshCollections()});return function(b){return a.apply(this,arguments)}}();e._refreshCollections=function(){this.allVisiblePoints.removeAll();this.allVisiblePolylines.removeAll();this.allVisiblePolygons.removeAll();this.allVisibleMapImages.removeAll();this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a));this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>
a));this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a));this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a))};e._isSublayerVisible=function(a){a=this._kmlVisualData.allSublayers.get(a);return a.visibility?-1===a.parentFolderId?!0:this._isSublayerVisible(a.parentFolderId):!1};e._loadVisualData=function(a,b,d){var f=this;return this._fetchParsedKML(a,
d).then(function(){var l=n._asyncToGenerator(function*(g){for(const c of g.sublayers){b.allSublayers.set(c.id,c);g=c.points?yield q.getGraphics(c.points):[];const h=c.polylines?yield q.getGraphics(c.polylines):[],v=c.polygons?yield q.getGraphics(c.polygons):[],r=c.mapImages||[];b.allPoints.push(...g.map(k=>({item:k,sublayerId:c.id})));b.allPolylines.push(...h.map(k=>({item:k,sublayerId:c.id})));b.allPolygons.push(...v.map(k=>({item:k,sublayerId:c.id})));b.allMapImages.push(...r.map(k=>({item:k,sublayerId:c.id})));
c.networkLink&&(g=yield f._getViewDependentUrl(c.networkLink,f.view.state),yield f._loadVisualData(g,b,d))}});return function(g){return l.apply(this,arguments)}}())};e._fetchParsedKML=function(a,b){return q.fetchService(a,this.view.spatialReference,this.layer.refreshInterval,b).then(d=>q.parseKML(d.data))};e._removeMapImage=function(a){const b=this._bitmapIndex.get(a);b&&(this._mapImageContainer.removeChild(b),this._bitmapIndex.delete(a))};return B}(R.LayerView2DMixin(S));p.__decorate([u.property()],
m.prototype,"_pointsView",void 0);p.__decorate([u.property()],m.prototype,"_polylinesView",void 0);p.__decorate([u.property()],m.prototype,"_polygonsView",void 0);p.__decorate([u.property()],m.prototype,"updating",void 0);return m=p.__decorate([N.subclass("esri.views.2d.layers.KMLLayerView2D")],m)});