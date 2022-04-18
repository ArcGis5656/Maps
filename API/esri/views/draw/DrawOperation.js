// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Evented ../../core/HandleOwner ../../core/lang ../../core/maybe ../../core/promiseUtils ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../layers/graphics/dehydratedFeatureComparison ../ViewingMode ./DrawManipulator ./DrawingMode ../interactive/coordinateHelper ../interactive/dragEventPipeline ../interactive/editGeometry/EditGeometry ../interactive/editGeometry/EditGeometryOperations ../interactive/snapping/SnappingContext ../interactive/snapping/SnappingDragPipelineStep ../support/Scheduler".split(" "),
function(g,r,k,B,C,D,d,E,F,l,N,G,u,H,I,v,J,t,w,K,x,L,y){g.DrawOperation=function(z){function p(a){var b=z.call(this,a)||this;b._createOperationCompleted=!1;b._pointerDownStates=new Set;b._snappingPipeline=new L.SnappingPipeline;b._snappingTask=null;b._stagedVertex=null;b.snapToSceneEnabled=null;d.isNone(a.elevationInfo)&&(b.elevationInfo={mode:a.hasZ?"absolute-height":"on-the-ground",offset:0});return b}r._inheritsLoose(p,z);var f=p.prototype;f.initialize=function(){var a,b;this.coordinateHelper=
J.createCoordinateHelper(this.hasZ,this.hasM,this.view.spatialReference);const e="3d"===this.view.type?null==(a=this.view)?void 0:null==(b=a.resourceController)?void 0:b.scheduler:null;this._frameTask=e?e.registerTask(y.TaskPriority.SNAPPING):y.ImmediateTask;a="viewingMode"in this.view.state?this.view.state.viewingMode:H.ViewingMode.Local;this._editGeometryOperations=new K.EditGeometryOperations(new w.EditGeometry("segment"===this.geometryType||"multipoint"===this.geometryType?"polyline":this.geometryType,
this.coordinateHelper,a));this._activeComponent=new w.Component(this.spatialReference,a);this._editGeometryOperations.data.components.push(this._activeComponent);this.handles.add(this._editGeometryOperations.on(["vertex-add","vertex-update","vertex-remove"],c=>{const m=c.vertices.map(h=>({componentIndex:0,vertexIndex:h.index,coordinates:this.coordinateHelper.vectorToArray(h.pos)})),n=m.map(h=>h.coordinates);switch(c.type){case "vertex-add":this.emit(c.type,{...c,added:n,vertices:m});break;case "vertex-update":this.emit(c.type,
{...c,updated:n,vertices:m});break;case "vertex-remove":this.emit(c.type,{...c,removed:n,vertices:m})}}));this._manipulator=new I.DrawManipulator({grabbableForEvent:c=>"click"!==this.drawingMode?!0:"touch"===c.pointerType&&this._snappingEnabled&&1===this._pointerDownStates.size});this.manipulators.add(this._manipulator);this._manipulator.grabbable="point"!==this.geometryType;this.handles.add([this._createManipulatorDragPipeline(this._manipulator),this._manipulator.events.on("immediate-click",c=>this._onImmediateClick(c)),
this._manipulator.events.on("immediate-double-click",c=>this._onImmediateDoubleClick(c))])};f.destroy=function(){this._editGeometryOperations=d.destroyMaybe(this._editGeometryOperations);this._frameTask=d.removeMaybe(this._frameTask)};f.cancel=function(){this.complete({aborted:!0})};f.commitStagedVertex=function(){this._snappingTask=d.abortMaybe(this._snappingTask);if(d.isSome(this._stagedVertex)){const a=this._stagedVertex;this._stagedVertex=null;this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(a))}};
f.complete=function(a){a=a&&a.aborted||!1;d.abortMaybe(this._snappingTask);d.isSome(this.snappingManager)&&this.snappingManager.doneSnapping();"segment"===this.geometryType||"point"===this.geometryType?this.commitStagedVertex():this.discardStagedVertex();this._createOperationCompleted=!("multipoint"===this.geometryType&&0===this.numVertices||"polyline"===this.geometryType&&2>this.numVertices||"polygon"===this.geometryType&&3>this.numVertices);(this.isCompleted||a)&&this.emit("complete",{vertices:this.vertices.map((b,
e)=>({componentIndex:0,vertexIndex:e,coordinates:b})),aborted:a,type:"complete"})};f.discardStagedVertex=function(){this._stagedVertex=null};f.onInputEvent=function(a){switch(a.type){case "pointer-down":this._pointerDownStates.add(a.pointerId);break;case "pointer-up":this._pointerDownStates.delete(a.pointerId)}switch(a.type){case "pointer-move":return this._onPointerMove(a);case "hold":return this._onHold(a)}};f.redo=function(){this._editGeometryOperations.redo()};f.undo=function(){d.isSome(this.snappingManager)&&
this.snappingManager.doneSnapping();this._editGeometryOperations.undo()};f._closeOnClickVertexIndex=function(a){const b=this._activeComponent;if("polygon"===this.geometryType&&2<b.vertices.length){if(this._vertexWithinPointerDistance(b.vertices[0].pos,a))return 0;if(this._vertexWithinPointerDistance(b.vertices[b.vertices.length-1].pos,a))return b.vertices.length-1}return null};f._createManipulatorDragPipeline=function(a){switch(this.drawingMode){case "click":return this._createManipulatorDragPipelineClick(a);
case "freehand":return this._createManipulatorDragPipelineFreehand(a);case "hybrid":return this._createManipulatorDragPipelineHybrid(a)}};f._createManipulatorDragPipelineClick=function(a){return t.createManipulatorDragEventPipeline(a,(b,e,c,m)=>{const n="touch"===m&&this._snappingEnabled;!this.isCompleted&&n&&(e.next(this._screenToMapDragEventStep()).next(h=>{"start"===h.action&&(this.stagedVertex=h.mapStart,("segment"===this.geometryType||n&&0===this.numVertices)&&this.commitStagedVertex());return h}).next(this._snappingPipeline.createSnapDragEventPipelineStep({predicate:()=>
n,cancel:c,snappingManager:this.snappingManager,snappingContext:new x.SnappingContext({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:m,visualizer:this.snappingVisualizer}),updatingHandles:this.updatingHandles}),this._snappingPipeline.next).next(h=>{n&&(this.stagedVertex=h.mapEnd,"end"===h.action&&this.commitStagedVertex());return h}).next(h=>{"end"!==h.action||"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete();return h}),c.next(()=>
{n&&d.isSome(this.snappingManager)&&this.snappingManager.doneSnapping()}))})};f._createManipulatorDragPipelineFreehand=function(a){return t.createManipulatorDragEventPipeline(a,(b,e)=>{this.isCompleted||e.next(this._screenToMapDragEventStep()).next(c=>{"start"===c.action&&(d.isNone(this.stagedVertex)&&(this.stagedVertex=c.mapStart),"segment"===this.geometryType&&this.commitStagedVertex());return c}).next(c=>{switch(c.action){case "start":case "update":this.stagedVertex=c.mapEnd;"polygon"!==this.geometryType&&
"polyline"!==this.geometryType||this.commitStagedVertex();break;case "end":this.complete()}return c})})};f._createManipulatorDragPipelineHybrid=function(a){return t.createManipulatorDragEventPipeline(a,(b,e)=>{this.isCompleted||e.next(this._screenToMapDragEventStep()).next(c=>{"start"===c.action&&(d.isNone(this.stagedVertex)&&(this.stagedVertex=c.mapStart),this.commitStagedVertex());return c}).next(c=>{switch(c.action){case "start":case "update":this.stagedVertex=c.mapEnd;"polygon"!==this.geometryType&&
"polyline"!==this.geometryType||this.commitStagedVertex();break;case "end":"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()}return c})})};f._getDrawSurface=function(){if(d.isNone(this.elevationDrawSurface))return this.drawSurface;if(!this.coordinateHelper.hasZ)return this.elevationDrawSurface.defaultZ=null,this.elevationDrawSurface;let a=this.defaultZ,b=!1;d.isSome(this.elevationInfo)&&"absolute-height"===this.elevationInfo.mode&&(b=!0);d.isSome(this.snapToSceneEnabled)&&
(b=this.snapToSceneEnabled);d.isSome(this.elevationInfo)&&"on-the-ground"===this.elevationInfo.mode&&(b=!1);const e=this._activeComponent.vertices.length;("segment"===this.geometryType||"polygon"===this.geometryType)&&0<e&&(a=this.coordinateHelper.getZ(this._activeComponent.vertices[0].pos),b=!1);if(b)return this.drawSurface;this.elevationDrawSurface.defaultZ=a;return this.elevationDrawSurface};f._mapToScreen=function(a){return this._getDrawSurface().mapToScreen(a)};f._onHold=function(a){d.abortMaybe(this._snappingTask);
"click"===this.drawingMode&&"touch"===a.pointerType&&this._snappingEnabled&&(this.stagedVertex=a.mapPoint);a.stopPropagation()};f._onImmediateClick=function(a){if(!("mouse"===a.pointerType&&2===a.button||this._manipulator.dragging)){var b=this._activeComponent,e=this._closeOnClickVertexIndex(a.screenPoint);if(d.isSome(e))a.stopPropagation(),this.discardStagedVertex(),this.complete();else{e=this._screenToMap(a.screenPoint);if(d.isSome(e))switch(this.drawingMode){case "freehand":"point"===this.geometryType&&
(this.hasStagedVertex?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(e)),this.complete());break;case "click":case "hybrid":this._snappingTask=d.abortMaybe(this._snappingTask),this.hasStagedVertex?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(e)),("point"===this.geometryType||"segment"===this.geometryType&&2===b.vertices.length||"segment"===this.geometryType&&"hybrid"===this.drawingMode&&
1===b.vertices.length)&&this.complete()}a.stopPropagation()}}};f._onImmediateDoubleClick=function(a){this._manipulator.dragging||"point"===this.geometryType||(this.complete(),a.stopPropagation())};f._onPointerMove=function(a){var b=this;d.abortMaybe(this._snappingTask);if(!(this._manipulator.dragging||this._pointerDownStates.has(a.pointerId)||this._manipulator.grabbing)&&this._manipulator.interactive){var e=F.createScreenPoint(a.x,a.y),c=this._closeOnClickVertexIndex(e);if(d.isSome(c))this.discardStagedVertex(),
e={componentIndex:0,vertexIndex:c,coordinates:this.coordinateHelper.vectorToArray(this._activeComponent.vertices[c].pos)},this.emit("cursor-update",{updated:null,vertices:[e],operation:"apply",type:"vertex-update"});else{const m=this._screenToMap(e);this._manipulator.cursor=d.isSome(m)?"crosshair":null;if(d.isSome(m))if(d.isSome(this.snappingManager)){const n=this.snappingManager,h=new x.SnappingContext({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:a.pointerType,
visualizer:this.snappingVisualizer});this.stagedVertex=n.update(m,h);this._snappingTask=E.createTask(function(){var M=r._asyncToGenerator(function*(q){const A=yield b._frameTask.schedule(()=>n.snap(m,h,q),q);A.valid&&(yield b._frameTask.schedule(()=>{b.stagedVertex=A.apply()},q))});return function(q){return M.apply(this,arguments)}}());this.updatingHandles.addPromise(this._snappingTask.promise)}else this.stagedVertex=m}a.stopPropagation()}};f._screenToMap=function(a){return this._getDrawSurface().screenToMap(a)};
f._screenToMapDragEventStep=function(){let a=null;return b=>{"start"===b.action&&(a=this._screenToMap(b.screenStart));if(d.isNone(a))return null;const e=this._screenToMap(b.screenEnd);return d.isSome(e)?{...b,mapStart:a,mapEnd:e}:null}};f._vertexWithinPointerDistance=function(a,b){const e=this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(a));d.isSome(e)?(a=e.x-b.x,b=e.y-b.y,b=25>=a*a+b*b):b=!1;return b};r._createClass(p,[{key:"_snappingEnabled",get:function(){return d.isSome(this.snappingManager)&&
this.snappingManager.options.effectiveEnabled}},{key:"canRedo",get:function(){return this._editGeometryOperations.canRedo}},{key:"canUndo",get:function(){return this._editGeometryOperations.canUndo}},{key:"committedVertices",get:function(){return this._activeComponent.vertices.map(a=>this.coordinateHelper.vectorToArray(a.pos))}},{key:"drawingMode",set:function(a){this._set("drawingMode",null!=a?a:v.defaultDrawingMode)}},{key:"hasStagedVertex",get:function(){return d.isSome(this._stagedVertex)}},{key:"interactive",
get:function(){return this._manipulator.interactive},set:function(a){this._manipulator.interactive=a}},{key:"isCompleted",get:function(){return this._createOperationCompleted}},{key:"numCommittedVertices",get:function(){return this._activeComponent.vertices.length}},{key:"numVertices",get:function(){return d.isSome(this._stagedVertex)?this._activeComponent.vertices.length+1:this._activeComponent.vertices.length}},{key:"spatialReference",get:function(){return this.view.spatialReference}},{key:"stagedVertex",
get:function(){return this._stagedVertex},set:function(a){if(d.isNone(a))this.discardStagedVertex();else if(!d.isSome(this._stagedVertex)||!u.pointEquals(this._stagedVertex,a)){if(d.isNone(this._stagedVertex))this._stagedVertex=D.clone(a);else{if(u.pointEquals(this._stagedVertex,a))return;this._stagedVertex.x=a.x;this._stagedVertex.y=a.y;this._stagedVertex.z=a.z;this._stagedVertex.m=a.m;this._stagedVertex.hasZ=a.hasZ;this._stagedVertex.hasM=a.hasM;this._stagedVertex.spatialReference=a.spatialReference}this.emit("cursor-update",
{updated:null,vertices:[{componentIndex:0,vertexIndex:this._activeComponent.vertices.length,coordinates:this.coordinateHelper.pointToArray(a)}],operation:"apply",type:"vertex-update"})}}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"vertices",get:function(){const a=this.committedVertices;d.isSome(this._stagedVertex)&&a.push(this.coordinateHelper.pointToArray(this._stagedVertex));return a}}]);return p}(B.EventedMixin(C.HandleOwner));k.__decorate([l.property()],g.DrawOperation.prototype,
"defaultZ",void 0);k.__decorate([l.property({value:v.defaultDrawingMode})],g.DrawOperation.prototype,"drawingMode",null);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"elevationDrawSurface",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"elevationInfo",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"geometryType",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"hasM",void 0);
k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"hasZ",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"manipulators",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"drawSurface",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"snappingManager",void 0);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"snappingVisualizer",void 0);k.__decorate([l.property()],
g.DrawOperation.prototype,"snapToSceneEnabled",void 0);k.__decorate([l.property({readOnly:!0})],g.DrawOperation.prototype,"updating",null);k.__decorate([l.property({constructOnly:!0})],g.DrawOperation.prototype,"view",void 0);g.DrawOperation=k.__decorate([G.subclass("esri.views.draw.DrawOperation")],g.DrawOperation);Object.defineProperty(g,"__esModule",{value:!0})});