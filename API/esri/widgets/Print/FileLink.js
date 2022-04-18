// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,k,l,d,n,p,q,m){a=function(g){function e(b){b=g.call(this,b)||this;b._handles=new k;b.state="pending";b.url="";return b}h._inheritsLoose(e,g);var f=e.prototype;f.initialize=function(){this._handles.add([l.init(this,
["extension","name"],()=>this._setFormattedFileName())])};f.destroy=function(){this._handles.destroy()};f._setFormattedFileName=function(){if(this.name&&this.extension){var b=this.name+"."+this.extension;this.count&&(b=this.name+"("+this.count+")."+this.extension);this.formattedName=b}};return e}(a);c.__decorate([d.property()],a.prototype,"count",void 0);c.__decorate([d.property()],a.prototype,"error",void 0);c.__decorate([d.property()],a.prototype,"extension",void 0);c.__decorate([d.property()],
a.prototype,"formattedName",void 0);c.__decorate([d.property()],a.prototype,"name",void 0);c.__decorate([d.property()],a.prototype,"state",void 0);c.__decorate([d.property()],a.prototype,"url",void 0);return a=c.__decorate([m.subclass("esri.widgets.print.FileLink")],a)});