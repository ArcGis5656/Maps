// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/mat4 ../../../../chunks/mat4f64 ./VisualElement ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/WebGLLayer".split(" "),function(h,k,d,m,n,g,p,q){g=function(l){function f(a){a=l.call(this,a.view)||this;a._resources=null;a._transform=n.create();return a}k._inheritsLoose(f,l);var e=f.prototype;e.recreate=function(){this.attached&&this.createResources()};e.recreateGeometry=function(){if(!d.isNone(this._resources)){var a=
this._resources.object,b=this.view._stage;b.removeMany(a.geometries);a.removeAllGeometries();this.createGeometries(a);this.visible||a.setVisible(this.visible);b.addMany(a.geometries)}};e.createResources=function(){this.destroyResources();const a=this.view._stage;if(a){var b=new q.WebGLLayer({isPickable:!1,updatePolicy:1});a.add(b);var c=new p.Object3D({castShadow:!1});c.transformation=this._transform;this.createExternalResources();this.createGeometries(c);a.addMany(c.geometries);this.forEachExternalMaterial(r=>
a.add(r));a.add(c);b.add(c);this.visible||c.setVisible(!1);this._resources={layer:b,object:c}}};e.destroyResources=function(){const a=this.view._stage;!d.isNone(this._resources)&&a&&(a.remove(this._resources.object),a.remove(this._resources.layer),this.forEachExternalMaterial(b=>{a.remove(b);b.dispose()}),a.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)};e.updateVisibility=function(a){d.isNone(this._resources)||
this._resources.object.setVisible(a)};k._createClass(f,[{key:"object",get:function(){return d.isSome(this._resources)?this._resources.object:null}},{key:"transform",get:function(){return this._transform},set:function(a){m.copy(this._transform,a);d.isSome(this._resources)&&(this._resources.object.transformation=this._transform)}}]);return f}(g.VisualElement);h.Object3DVisualElement=g;Object.defineProperty(h,"__esModule",{value:!0})});