// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../core/compilerUtils ../../../core/Evented ../../../core/mathUtils ../../../core/maybe ../../../core/screenUtils ../../../core/accessorSupport/utils ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projection ../../../geometry/projectionEllipsoid ../../../geometry/support/aaBoundingRect ../../../geometry/support/lineSegment ../../../geometry/support/plane ../../../geometry/support/ray ../../../geometry/support/vectorStacks ../../../layers/graphics/hydratedFeatures ../support/ElevationProvider ../support/geometryUtils/ray ../webgl-engine/lib/Camera ../webgl-engine/lib/Object3D ../webgl-engine/lib/WebGLLayer ../../../geometry/Point".split(" "),
function(I,V,J,W,X,K,k,r,Y,L,Z,t,x,aa,l,p,y,ba,ca,u,v,da,z,M,F,G,ea,fa,ha,A){function N(q){return 0!==q[12]||0!==q[13]||0!==q[14]}J=function(){function q(a){this.camera=new ea;this._elevation={offset:0,override:null};this.collisionType={type:"point"};this.collisionPriority=0;this._renderObjects=[];this._available=this.autoScaleRenderObjects=!0;this._noDisplayCount=0;this._radius=10;this._worldSized=!1;this.focusMultiplier=2;this.touchMultiplier=2.5;this.worldOriented=!1;this._modelTransform=x.create();
this._worldFrame=null;this._renderLocation=p.create();this._renderLocationDirty=!0;this._location=new A({x:0,y:0,z:0});this._elevationAlignedLocation=new A;this.interactive=this._elevationAlignedLocationDirty=!0;this.selectable=!1;this.grabbable=!0;this.cursor=null;this._selected=this._hovering=this.dragging=this._grabbing=!1;this._state=0;this._focused=!1;this.events=new X.EventEmitter;this._screenLocation={screenPointArray:r.createScreenPointArray(),renderScreenPointArray:r.createRenderScreenPointArray3(),
pixelSize:0};this._screenLocationDirty=!0;this._applyObjectTransform=null;this._engineResourcesAddedToStage=!1;this._engineResources=null;this._attached=!1;this._materialIdReferences=this._engineLayer=null;this._location.spatialReference=a.view.spatialReference;for(const b in a)this[b]=a[b];this.view.state&&this.view.state.camera&&this.camera.copyFrom(this.view.state.camera)}var h=q.prototype;h.destroy=function(){this._removeResourcesFromStage();this.camera=this.view=this._engineResources=null};h.disableDisplay=
function(){this._noDisplayCount++;1===this._noDisplayCount&&this._updateEngineObject();return{remove:Y.once(()=>{this._noDisplayCount--;0===this._noDisplayCount&&this._updateEngineObject()})}};h._updateElevationAlignedLocation=function(){this._elevationAlignedLocation.x=this.location.x;this._elevationAlignedLocation.y=this.location.y;const a=k.isSome(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=a+this._elevation.offset;this._elevationAlignedLocation.spatialReference=
this.location.spatialReference;this._screenLocationDirty=this._renderLocationDirty=!0;this._elevationAlignedLocationDirty=!1};h.grabbableForEvent=function(){return!0};h.updateStateEnabled=function(a,b){this.state=b?this.state|a:this.state&~a};h._setFocused=function(a){a!==this._focused&&(this._focused=a,this.events.emit("focus-changed",{action:!0===a?"focus":"unfocus"}))};h.ensureScreenLocation=function(){if(this._screenLocationDirty){this._screenLocation.pixelSize=this.camera.computeScreenPixelSizeAt(this.renderLocation);
this._screenLocationDirty=!1;if(N(this._modelTransform)){var a=this._calculateModelTransformOffset(ia);a=l.add(a,a,this.renderLocation)}else a=this.renderLocation;this.camera.projectToRenderScreen(a,this._screenLocation.renderScreenPointArray);this.camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}};h.intersectionDistance=function(a,b){if(!this.available)return null;a=r.screenPointObjectToArray(a,ja);var f=this._getCollisionRadius(b);b=-1*this.collisionPriority;
switch(this.collisionType.type){case "point":if(aa.squaredDistance(this.screenLocation.screenPointArray,a)<f*f)return this.screenLocation.renderScreenPointArray[2]+b;break;case "line":var d=this.collisionType.paths,c=this._getWorldToScreenObjectScale();c=this._calculateObjectTransform(c,B);f*=this.screenLocation.pixelSize;a=G.fromScreen(this.camera,a,H);if(k.isNone(a))break;for(var g of d)if(0!==g.length){d=l.transformMat4(w,g[0],c);for(var e=1;e<g.length;e++){var m=l.transformMat4(O,g[e],c),n=u.closestRayDistance2(u.fromPoints(d,
m,P),a);if(null!=n&&n<f*f)return c=l.add(z.sv3d.get(),d,m),l.scale(c,c,.5),a=r.castRenderScreenPointArray(z.sv3d.get()),this.camera.projectToRenderScreen(c,a),a[2]+b;l.copy(d,m)}}break;case "disc":g=this.collisionType.direction;c=null!=(d=this.collisionType.offset)?d:p.ZEROS;d=this._getWorldToScreenObjectScale();d=this._calculateObjectTransform(d,B);f*=this.screenLocation.pixelSize;a=G.fromScreen(this.camera,a,H);if(k.isNone(a))break;e=L.fromMat4(Q,d);g=l.transformMat3(R,g,e);c=l.transformMat4(S,
c,d);v.fromPositionAndNormal(c,g,C);g=T;if(v.intersectRay(C,a,g)&&l.squaredDistance(g,c)<f*f)return this.screenLocation.renderScreenPointArray[2]+b;break;case "ribbon":{const {paths:D,direction:E}=this.collisionType;g=this._getWorldToScreenObjectScale();g=this._calculateObjectTransform(g,B);f*=this.camera.computeScreenPixelSizeAt(this.renderLocation);d=G.fromScreen(this.camera,a,H);if(k.isNone(d))break;a=L.fromMat4(Q,g);a=l.transformMat3(R,E,a);e=this._calculateModelTransformPosition(S);v.fromPositionAndNormal(e,
a,C);a=T;if(!v.intersectRay(C,d,a))break;for(c of D)if(0!==c.length)for(d=l.transformMat4(w,c[0],g),e=1;e<c.length;e++){m=l.transformMat4(O,c[e],g);n=u.distance2(u.fromPoints(d,m,P),a);if(null!=n&&n<f*f)return c=l.add(z.sv3d.get(),d,m),l.scale(c,c,.5),a=r.castRenderScreenPointArray(z.sv3d.get()),this.camera.projectToRenderScreen(c,a),a[2]+b;l.copy(d,m)}break}default:W.neverReached(this.collisionType)}return null};h.attach=function(a={manipulator3D:{}}){if(this.view._stage){a=a.manipulator3D;if(k.isNone(a.engineLayerId)){var b=
new ha.WebGLLayer({isPickable:!1,updatePolicy:1});this.view._stage.add(b);a.engineLayerId=b.id;this._engineLayer=b}else null!=(b=this.view._stage)&&b.getObject&&(this._engineLayer=this.view._stage.getObject(a.engineLayerId));a.engineLayerReferences=(a.engineLayerReferences||0)+1;this._materialIdReferences=a.materialIdReferences;k.isNone(this._materialIdReferences)&&(this._materialIdReferences=new Map,a.materialIdReferences=this._materialIdReferences);this.camera.copyFrom(this.view.state.camera);this._attached=
!0;this._updateEngineObject();y.canProjectWithoutEngine(this._location.spatialReference,this.view.spatialReference)||(this.location=new A({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}};h.detach=function(a={manipulator3D:{}}){a=a.manipulator3D;a.engineLayerReferences--;const b=0===a.engineLayerReferences;b&&(a.engineLayerId=null);this._removeResourcesFromStage(b);this._materialIdReferences=this._engineLayer=this._engineResources=null;this._attached=!1};h.onViewChange=function(){this.camera.copyFrom(this.view.state.camera);
this._screenLocationDirty=!0;this._updateEngineObject()};h.onElevationChange=function(a){y.projectPoint(this.location,U,a.spatialReference);ca.containsPointObject(a.extent,U)&&(this.location=this._location)};h._evaluateElevationAlignment=function(a=this.location){if(k.isNone(this.elevationInfo))return!1;let b=null,f=0;const d=k.unwrapOr(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case "on-the-ground":b=k.unwrapOr(F.getElevationAtPoint(this.view.elevationProvider,a,"ground"),0);break;
case "relative-to-ground":f=k.unwrapOr(F.getElevationAtPoint(this.view.elevationProvider,a,"ground"),0)+d;break;case "relative-to-scene":f=k.unwrapOr(F.getElevationAtPoint(this.view.elevationProvider,a,"scene"),0)+d;break;case "absolute-height":f=d}return f!==this._elevation.offset||b!==this._elevation.override?(this._elevation.offset=f,this._elevation.override=b,!0):!1};h._updateEngineObject=function(){if(this._attached)if(this.available){var a=this._getWorldToScreenObjectScale(),b=B;!0===this.autoScaleRenderObjects?
(a*=this._getFocusedSize(this._radius,this.focused),this._calculateObjectTransform(a,b)):this._calculateObjectTransform(a,b);var {objectsByState:f}=this._ensureEngineResources();a=(this.focused?2:1)|(this.selected?8:4);var d=0<this._noDisplayCount;for(const {stateMask:c,objects:g}of f)if(d)for(const e of g)e.setVisible(!1);else if(f=0===(c&65520)||(this.state&c)===(c&65520),0!==(c&15)&&(a&c)!==(c&15)||!f)for(const e of g)e.setVisible(!1);else for(const e of g)e.setVisible(!0),e.transformation=b}else this._removeResourcesFromStage()};
h._ensureEngineResources=function(){if(k.isNone(this._engineResources)){const a=k.unwrap(this._engineLayer),b=[],f=new Set;this.renderObjects.forEach(({material:e})=>{f.has(e)||(b.push(e),f.add(e))});const d=(e,m)=>{const {geometry:n,material:D,transform:E}=m;Array.isArray(n)?n.forEach(ka=>e.addGeometry(ka,D,E)):e.addGeometry(n,D,E)},c=new Map;this._renderObjects.forEach(e=>{const m=new fa.Object3D({castShadow:!1});d(m,e);e=e.stateMask||0;const n=c.get(e)||[];n.push(m);c.set(e,n)});const g=[];c.forEach((e,
m)=>g.push({stateMask:m,objects:e}));this._engineResources={objectsByState:g,layer:a,materials:b}}this._addResourcesToStage();return this._engineResources};h._addResourcesToStage=function(){if(!this._engineResourcesAddedToStage&&!k.isNone(this._engineResources)){var {objectsByState:a,layer:b,materials:f}=this._engineResources;f.forEach(d=>{const c=k.unwrap(this._materialIdReferences),g=c.get(d.id)||0;0===g&&this.view._stage.add(d);c.set(d.id,g+1)});a.forEach(({objects:d})=>{b.addMany(d);this.view._stage.addMany(d)});
this._engineResourcesAddedToStage=!0}};h._removeResourcesFromStage=function(a=!1){if(this._engineResourcesAddedToStage&&!k.isNone(this._engineResources)){var {objectsByState:b,layer:f,materials:d}=this._engineResources;b.forEach(({objects:c})=>{f.removeMany(c);this.view._stage.removeMany(c)});d.forEach(c=>{const g=k.unwrap(this._materialIdReferences),e=g.get(c.id);1===e?(this.view._stage.remove(c),g.delete(c.id)):g.set(c.id,e-1)});a&&this.view._stage.remove(f);this._engineResourcesAddedToStage=!1}};
h._getCollisionRadius=function(a){return this._getFocusedSize(this.radius,!0)*("touch"===a?this.touchMultiplier:1)};h._getFocusedSize=function(a,b){return a*(b?this.focusMultiplier:1)};h._getWorldToScreenObjectScale=function(){return this._worldSized?1:this.screenLocation.pixelSize};h._calculateModelTransformPosition=function(a){var b=this._getWorldToScreenObjectScale();b=this._calculateObjectTransform(b,la);return l.set(a,b[12],b[13],b[14])};h._calculateModelTransformOffset=function(a){const b=this._calculateModelTransformPosition(a);
return l.subtract(a,b,this.renderLocation)};h._calculateObjectTransform=function(a,b){t.set(b,a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1);this._worldFrame&&t.multiply(b,b,this._worldFrame);t.multiply(b,b,this._modelTransform);b[12]+=this.renderLocation[0];b[13]+=this.renderLocation[1];b[14]+=this.renderLocation[2];b[15]=1;k.isSome(this._applyObjectTransform)&&this._applyObjectTransform(b);return b};V._createClass(q,[{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=
a;this._renderLocationDirty=this._elevationAlignedLocationDirty=!0;this._updateEngineObject()}},{key:"renderObjects",get:function(){return this._renderObjects},set:function(a){this._removeResourcesFromStage();this._engineResources=null;this._renderObjects=a.slice();this._updateEngineObject()}},{key:"available",get:function(){return this._available},set:function(a){a!==this._available&&(this._available=a,this._updateEngineObject())}},{key:"radius",get:function(){return this._radius},set:function(a){a!==
this._radius&&(this._radius=a,this._updateEngineObject())}},{key:"worldSized",get:function(){return this._worldSized},set:function(a){a!==this._worldSized&&(this._worldSized=a,this._updateEngineObject())}},{key:"modelTransform",get:function(){return this._modelTransform},set:function(a){N(a)&&(this._screenLocationDirty=!0);t.copy(this._modelTransform,a);this._updateEngineObject()}},{key:"renderLocation",get:function(){if(this._renderLocationDirty)if(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,
this._renderLocation),this.worldOriented){this._worldFrame||(this._worldFrame=x.create());a:{var a=this.view,b=this._renderLocation,f=this._worldFrame;switch(a.viewingMode){case "local":t.identity(f);break a;case "global":a=ba.getReferenceEllipsoid(a.renderCoordsHelper.spatialReference),y.sphericalPCPFtoLonLatElevation(b,0,w,0,a.radius),y.computeENUToSphericalPCPFLocalRotation(K.deg2rad(w[0]),K.deg2rad(w[1]),f)}}}else this._worldFrame&&(this._worldFrame=null);return this._renderLocation},set:function(a){this.view.renderCoordsHelper.fromRenderCoords(a,
this._location);this.elevationAlignedLocation=this._location}},{key:"location",get:function(){return this._location},set:function(a){M.clonePoint(a,this._location);this._elevationAlignedLocationDirty=this._screenLocationDirty=this._renderLocationDirty=!0;this._updateEngineObject();this.events.emit("location-update",{location:this._location})}},{key:"elevationAlignedLocation",get:function(){if(!this._elevationAlignedLocationDirty)return this._elevationAlignedLocation;this._evaluateElevationAlignment();
this._updateElevationAlignedLocation();return this._elevationAlignedLocation},set:function(a){M.clonePoint(a,this._location);this._evaluateElevationAlignment();this._location.z-=this._elevation.offset;this._updateElevationAlignedLocation();this._updateEngineObject();this.events.emit("location-update",{location:this._location})}},{key:"grabbing",get:function(){return this._grabbing},set:function(a){a!==this._grabbing&&(this._grabbing=a,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}},
{key:"hovering",get:function(){return this._hovering},set:function(a){a!==this._hovering&&(this._hovering=a,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}},{key:"selected",get:function(){return this._selected},set:function(a){a!==this._selected&&(this._selected=a,this._updateEngineObject(),this.events.emit("select-changed",{action:a?"select":"deselect"}))}},{key:"state",get:function(){return this._state},set:function(a){a!==this._state&&(this._state=a,this._updateEngineObject())}},
{key:"focused",get:function(){return this._focused}},{key:"screenLocation",get:function(){this.ensureScreenLocation();return this._screenLocation}},{key:"applyObjectTransform",get:function(){return this._applyObjectTransform},set:function(a){this._applyObjectTransform=a;this._screenLocationDirty=!0;this._updateEngineObject()}},{key:"test",get:function(){let a=!1;if(k.isSome(this._engineResources))for(const b in this._engineResources.objectsByState){const f=this._engineResources.objectsByState[b];
for(const d of f.objects)if(d.isVisible){a=!0;break}if(a)break}return{areAnyResourcesVisible:a}}}]);return q}();const ja=r.createScreenPointArray(),P=u.create(),H=da.create(),Q=Z.create(),la=x.create(),B=x.create(),C=v.create(),w=p.create(),O=p.create(),T=p.create(),R=p.create(),S=p.create(),ia=p.create(),U=new A({x:0,y:0,z:0,spatialReference:null});I.Manipulator3D=J;Object.defineProperty(I,"__esModule",{value:!0})});