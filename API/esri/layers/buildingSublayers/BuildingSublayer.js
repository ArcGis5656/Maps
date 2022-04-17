// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Identifiable ../../core/MultiOriginJSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../support/commonProperties".split(" "),function(m,c,a,n,d,r,t,p,g,q,h){a=function(k){function f(b){b=k.call(this,b)||this;b.title="";b.id=-1;b.modelName=null;
b.isEmpty=null;b.visible=!0;b.opacity=1;return b}m._inheritsLoose(f,k);var l=f.prototype;l.readTitle=function(b,e){return"string"===typeof e.alias?e.alias:"string"===typeof e.name?e.name:""};l.readIdOnlyOnce=function(b){if(-1!==this.id)return this.id;if("number"===typeof b)return b};return f}(a.IdentifiableMixin(n.MultiOriginJSONSupport));c.__decorate([d.property({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],a.prototype,"title",void 0);c.__decorate([g.reader("service",
"title",["alias","name"])],a.prototype,"readTitle",null);c.__decorate([d.property()],a.prototype,"layer",void 0);c.__decorate([d.property({type:p.Integer,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0);c.__decorate([g.reader("service","id")],a.prototype,"readIdOnlyOnce",null);c.__decorate([d.property(h.readOnlyService(String))],a.prototype,"modelName",void 0);c.__decorate([d.property(h.readOnlyService(Boolean))],a.prototype,"isEmpty",void 0);c.__decorate([d.property({type:Boolean,
json:{name:"visibility",write:!0}})],a.prototype,"visible",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"opacity",void 0);return a=c.__decorate([q.subclass("esri.layers.buildingSublayers.BuildingSublayer")],a)});