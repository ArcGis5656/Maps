// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(b,h,e,k,l,m,n,c,r,t,p){c=a=>{a=function(f){function d(){return f.apply(this,arguments)||this}h._inheritsLoose(d,f);d.prototype.initialize=function(){this.handles.add(m.on(this,
"layer","refresh",q=>{this.doRefresh(q.dataChanged).catch(g=>{l.isAbortError(g)||k.getLogger(this.declaredClass).error(g)})}),"RefreshableLayerView")};return d}(a);e.__decorate([n.property()],a.prototype,"layer",void 0);return a=e.__decorate([p.subclass("esri.layers.mixins.RefreshableLayerView")],a)};b.RefreshableLayerView=c;b.default=c;Object.defineProperty(b,"__esModule",{value:!0})});