// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,h,m,n,p,k,l){var d;a=d=function(f){function e(b){b=f.call(this,b)||this;b.type="foggy";b.fogStrength=.5;return b}g._inheritsLoose(e,f);e.prototype.clone=
function(){return new d({fogStrength:this.fogStrength})};return e}(a);c.__decorate([k.enumeration({foggy:"foggy"})],a.prototype,"type",void 0);c.__decorate([h.property({type:Number,nonNullable:!0,range:{min:0,max:1}})],a.prototype,"fogStrength",void 0);return a=d=c.__decorate([l.subclass("esri.views.3d.environment.FoggyWeather")],a)});