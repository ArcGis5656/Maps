// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../core/Clonable ../core/JSONSupport ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./support/lineMarkers".split(" "),function(k,c,l,b,m,d,e,q,r,n,p,g){b=function(h){function f(a){a=h.call(this,a)||this;a.type="style";a.placement="begin-end";a.style="arrow";a.color=null;return a}k._inheritsLoose(f,h);f.prototype.equals=
function(a){return d.isSome(a)&&a.placement===this.placement&&a.style===this.style&&(d.isNone(this.color)&&d.isNone(a.color)||d.isSome(this.color)&&d.isSome(a.color)&&this.color.toJSON()===a.color.toJSON())};return f}(b.ClonableMixin(m.JSONSupport));c.__decorate([e.property({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],b.prototype,"type",void 0);c.__decorate([e.property({type:g.lineMarkerPlacements,json:{default:"begin-end",write:!0}})],b.prototype,"placement",void 0);c.__decorate([e.property({type:g.lineMarkerStyles,
json:{default:"arrow",write:!0}})],b.prototype,"style",void 0);c.__decorate([e.property({type:l,json:{type:[n.Integer],default:null,write:!0}})],b.prototype,"color",void 0);return b=c.__decorate([p.subclass("esri.symbols.LineStyleMarker3D")],b)});