// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../FieldInfo ./Content".split(" "),function(k,c,l,d,b,m,n,p,q){var e;b=e=function(g){function f(a){a=g.call(this,a)||this;a.attributes=null;a.description=null;a.fieldInfos=null;a.title=null;a.type="fields";return a}k._inheritsLoose(f,g);var h=
f.prototype;h.writeFieldInfos=function(a,r){r.fieldInfos=a&&a.map(t=>t.toJSON())};h.clone=function(){return new e(l.clone({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))};return f}(q);c.__decorate([d.property({type:Object,json:{write:!0}})],b.prototype,"attributes",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"description",void 0);c.__decorate([d.property({type:[p]})],b.prototype,"fieldInfos",void 0);c.__decorate([n.writer("fieldInfos")],
b.prototype,"writeFieldInfos",null);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"title",void 0);c.__decorate([d.property({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0);return b=e=c.__decorate([m.subclass("esri.popup.content.FieldsContent")],b)});