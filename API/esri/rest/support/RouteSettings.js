// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./TravelMode".split(" "),function(g,c,a,d,l,m,n,h,k){a=function(e){function f(b){b=e.call(this,b)||this;b.accumulateAttributes=null;b.directionsLanguage=null;b.findBestSequence=null;b.preserveFirstStop=null;b.preserveLastStop=null;b.startTimeIsUTC=
null;b.timeWindowsAreUTC=null;b.travelMode=null;return b}g._inheritsLoose(f,e);return f}(a.JSONSupport);c.__decorate([d.property({type:[String],json:{read:{source:"accumulateAttributeNames"},write:{target:"accumulateAttributeNames"}}})],a.prototype,"accumulateAttributes",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"directionsLanguage",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"findBestSequence",void 0);c.__decorate([d.property({type:Boolean,
json:{write:!0}})],a.prototype,"preserveFirstStop",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"preserveLastStop",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"startTimeIsUTC",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"timeWindowsAreUTC",void 0);c.__decorate([d.property({type:k,json:{write:!0}})],a.prototype,"travelMode",void 0);return a=c.__decorate([h.subclass("esri.layers.support.RouteSettings")],
a)});