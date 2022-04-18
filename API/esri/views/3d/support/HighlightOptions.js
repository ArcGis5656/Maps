// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Color ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec4f32".split(" "),function(n,c,d,b,p,e,r,t,u,q,k){b=function(m){function l(){var a=m.apply(this,arguments)||this;a.color=new d([0,255,255]);a.haloColor=null;a.haloOpacity=
1;a.fillOpacity=.25;a.shadowOpacity=.4;a.shadowColor=new d([0,0,0]);a.shadowDifference=.2;return a}n._inheritsLoose(l,m);l.toEngineOptions=function(a){const f=d.toUnitRGBA(a.color),g=p.isSome(a.haloColor)?d.toUnitRGBA(a.haloColor):f,h=d.toUnitRGBA(a.shadowColor);return{color:k.fromValues(f[0],f[1],f[2],f[3]),haloColor:k.fromValues(g[0],g[1],g[2],g[3]),haloOpacity:a.haloOpacity,haloOpacityOccluded:.25*a.haloOpacity,fillOpacity:a.fillOpacity,fillOpacityOccluded:.25*a.fillOpacity,shadowOpacity:a.shadowOpacity,
shadowColor:k.fromValues(h[0],h[1],h[2],h[3]),occludedShadowOpacity:a.shadowOpacity*(1-a.shadowDifference)}};return l}(b);c.__decorate([e.property({type:d})],b.prototype,"color",void 0);c.__decorate([e.property({type:d})],b.prototype,"haloColor",void 0);c.__decorate([e.property()],b.prototype,"haloOpacity",void 0);c.__decorate([e.property()],b.prototype,"fillOpacity",void 0);c.__decorate([e.property()],b.prototype,"shadowOpacity",void 0);c.__decorate([e.property({type:d})],b.prototype,"shadowColor",
void 0);c.__decorate([e.property()],b.prototype,"shadowDifference",void 0);return b=c.__decorate([q.subclass("esri.views.3d.support.HighlightOptions")],b)});