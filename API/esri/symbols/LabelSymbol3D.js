// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(p,c,b,d,e,v,q,r,t,l,k,u){var f;const m=b.ofType({base:null,key:"type",typeMap:{text:l}});b=f=function(n){function g(a){a=n.call(this,
a)||this;a.verticalOffset=null;a.callout=null;a.styleOrigin=null;a.symbolLayers=new m;a.type="label-3d";return a}p._inheritsLoose(g,n);var h=g.prototype;h.supportsCallout=function(){return!0};h.hasVisibleCallout=function(){return k.hasVisibleCallout(this)};h.hasVisibleVerticalOffset=function(){return k.hasVisibleVerticalOffset(this)};h.clone=function(){return new f({styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail),callout:d.clone(this.callout),
verticalOffset:d.clone(this.verticalOffset)})};g.fromTextSymbol=function(a){return new f({symbolLayers:[l.fromTextSymbol(a)]})};return g}(t);c.__decorate([e.property({type:u.default,json:{write:!0}})],b.prototype,"verticalOffset",void 0);c.__decorate([e.property(k.calloutProperty)],b.prototype,"callout",void 0);c.__decorate([e.property({json:{read:!1,write:!1}})],b.prototype,"styleOrigin",void 0);c.__decorate([e.property({type:m})],b.prototype,"symbolLayers",void 0);c.__decorate([q.enumeration({LabelSymbol3D:"label-3d"},
{readOnly:!0})],b.prototype,"type",void 0);return b=f=c.__decorate([r.subclass("esri.symbols.LabelSymbol3D")],b)});