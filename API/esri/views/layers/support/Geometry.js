// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "),function(f,c,g,h,r,t,u,l,m,n,a,p,q){var d;g={base:m,key:"type",typeMap:{extent:p,polygon:q}};
a=d=function(k){function b(){var e=k.apply(this,arguments)||this;e.type="geometry";e.geometry=null;return e}f._inheritsLoose(b,k);b.prototype.clone=function(){return new d({geometry:this.geometry.clone()})};f._createClass(b,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return b}(a);c.__decorate([h.property({types:g,json:{read:n.fromJSON,write:!0}})],a.prototype,"geometry",void 0);c.__decorate([h.property({readOnly:!0})],a.prototype,"version",null);return a=d=c.__decorate([l.subclass("esri.views.layers.support.Geometry")],
a)});