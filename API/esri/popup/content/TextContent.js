// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Content".split(" "),function(h,c,f,a,m,n,k,l){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.text=null;b.type="text";return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({text:this.text})};return e}(l);c.__decorate([f.property({type:String,
json:{write:!0}})],a.prototype,"text",void 0);c.__decorate([f.property({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=c.__decorate([k.subclass("esri.popup.content.TextContent")],a)});