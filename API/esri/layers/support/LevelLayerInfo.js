// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,d,k,l,m,h){a=function(e){function f(b){b=e.call(this,b)||this;b.facilityIdField=null;b.layerId=null;b.levelIdField=null;b.levelNumberField=null;b.longNameField=null;b.shortNameField=null;b.sublayerId=null;b.verticalOrderField=
null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"facilityIdField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"layerId",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"levelIdField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"levelNumberField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"longNameField",
void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"shortNameField",void 0);c.__decorate([d.property({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"sublayerId",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"verticalOrderField",void 0);return a=c.__decorate([h.subclass("esri.layers.support.LevelLayerInfo")],a)});