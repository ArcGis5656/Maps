// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../core/support/OwningCollection ./Layer ./mixins/BlendLayer ./mixins/ScaleRangeLayer ../support/GraphicsCollection ../symbols/support/ElevationInfo".split(" "),function(k,d,e,b,u,v,l,m,n,p,q,h,r){b=function(f){function g(a){a=f.call(this,a)||this;a.elevationInfo=null;a.graphics=new h.GraphicsCollection;
a.screenSizePerspectiveEnabled=!0;a.type="graphics";a.internal=!1;return a}k._inheritsLoose(g,f);var c=g.prototype;c.destroy=function(){this.removeAll();this.graphics.destroy()};c.add=function(a){this.graphics.add(a);return this};c.addMany=function(a){this.graphics.addMany(a);return this};c.removeAll=function(){this.graphics.removeAll();return this};c.remove=function(a){this.graphics.remove(a)};c.removeMany=function(a){this.graphics.removeMany(a)};c.on=function(a,t){return f.prototype.on.call(this,
a,t)};c.graphicChanged=function(a){this.emit("graphic-update",a)};return g}(p.BlendLayer(q.ScaleRangeLayer(n)));d.__decorate([e.property({type:r})],b.prototype,"elevationInfo",void 0);d.__decorate([e.property(m.owningCollectionProperty(h.GraphicsCollection,"graphics"))],b.prototype,"graphics",void 0);d.__decorate([e.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d.__decorate([e.property()],b.prototype,"screenSizePerspectiveEnabled",void 0);d.__decorate([e.property({readOnly:!0})],
b.prototype,"type",void 0);d.__decorate([e.property({constructOnly:!0})],b.prototype,"internal",void 0);return b=d.__decorate([l.subclass("esri.layers.GraphicsLayer")],b)});