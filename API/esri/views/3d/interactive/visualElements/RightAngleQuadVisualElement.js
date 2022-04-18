// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Handles ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ../../../../geometry/support/vectorStacks ./Object3DVisualElement ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(l,m,w,x,n,y,d,h,p,q,r,k,z,A,t,u,B,C){k=function(v){function e(b){var a=v.call(this,b)||this;a._handles=new w;a._quadMaterial=null;a._outlineMaterial=null;a._maxSize=0;a._position=h.create();a._up=h.create();a._right=h.create();a._renderOccluded=t.RenderOccludedFlag.OccludeAndTransparent;a._color=q.fromValues(1,0,0,1);a._outlineColor=q.fromValues(0,0,0,1);a._outlineSize=0;a._size=32;a._outlineRenderOccluded=t.RenderOccludedFlag.Opaque;a.applyProps(b);return a}m._inheritsLoose(e,v);var c=e.prototype;
c.createExternalResources=function(){this._quadMaterial=new B.ColorMaterial(this.quadMaterialParameters);this._outlineMaterial=new C.RibbonLineMaterial(this.outlineMaterialParameters);this._handles.add(this.view.state.watch("camera",()=>this._updateTransform()))};c.destroyExternalResources=function(){this._outlineMaterial=this._quadMaterial=null;this._handles.removeAll()};c.forEachExternalMaterial=function(b){b(this._quadMaterial);b(this._outlineMaterial)};c.createGeometries=function(b){this._createQuadGeometry(b);
this._createOutlineGeometry(b);this._updateTransform(b)};c._createQuadGeometry=function(b){const a=this._quadGeometryData(this._up,this._right);b.addGeometry(a,this._quadMaterial)};c._createOutlineGeometry=function(b){if(0!==this._outlineSize){var a=d.add(r.sv3d.get(),this._up,this._right);a=A.createPolylineGeometry([this._up,a,this._right]);b.addGeometry(a,this._outlineMaterial)}};c._updateTransform=function(b=this.object){var a=this._size*this.view.state.camera.computeScreenPixelSizeAt(this._position);
a=Math.min(this._maxSize,a);n.fromTranslation(f,this._position);n.scale(f,f,[a,a,a]);x.isSome(b)&&(b.transformation=f)};c._quadGeometryData=function(b,a){const g=d.add(r.sv3d.get(),b,a);return new z.Geometry([[u.VertexAttribute.POSITION,{size:3,data:[0,0,0,...a,...b,...g],exclusive:!0}]],[[u.VertexAttribute.POSITION,new Uint16Array([0,1,2,1,2,3])]])};c._updateQuadMaterial=function(){this._quadMaterial&&this._quadMaterial.setParameters(this.quadMaterialParameters)};c._updateOutlineMaterial=function(){this._outlineMaterial&&
this._outlineMaterial.setParameters(this.outlineMaterialParameters)};m._createClass(e,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(b){b!==this._renderOccluded&&(this._renderOccluded=b,this._updateQuadMaterial())}},{key:"color",get:function(){return this._color},set:function(b){p.copy(this._color,b);this._updateQuadMaterial()}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(b){p.copy(this._outlineColor,b);this._updateOutlineMaterial()}},
{key:"outlineSize",get:function(){return this._outlineSize},set:function(b){const a=0===this._outlineSize!==(0===b);this._outlineSize=b;a?this.recreateGeometry():this._updateOutlineMaterial()}},{key:"size",get:function(){return this._size},set:function(b){b!==this._size&&(this._size=b,this._updateTransform())}},{key:"outlineRenderOccluded",get:function(){return this._outlineRenderOccluded},set:function(b){this._outlineRenderOccluded=b;this._updateOutlineMaterial()}},{key:"geometry",set:function({previous:b,
center:a,next:g}){this._maxSize=Math.min(d.distance(a,b),d.distance(a,g))/3;d.normalize(this._up,d.subtract(this._up,b,a));d.normalize(this._right,d.subtract(this._right,g,a));d.copy(this._position,a);this.recreateGeometry()}},{key:"quadMaterialParameters",get:function(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}},{key:"outlineMaterialParameters",get:function(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}}]);
return e}(k.Object3DVisualElement);const f=y.create();l.RightAngleQuadVisualElement=k;Object.defineProperty(l,"__esModule",{value:!0})});