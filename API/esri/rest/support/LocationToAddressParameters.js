// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./commonProperties ../../geometry/Point ../../geometry/SpatialReference".split(" "),function(g,d,a,h,e,q,r,k,l,m,n,p){a=function(b){function f(c){c=b.call(this,c)||this;c.apiKey=null;c.location=null;c.locationType=null;c.outSpatialReference=
null;return c}g._inheritsLoose(f,b);return f}(h.JSONSupport);d.__decorate([e.property(m.apiKey)],a.prototype,"apiKey",void 0);d.__decorate([e.property({type:n,json:{write:{writer:(b,f)=>{b=b?b.clone().normalize():null;f.location="undefined"!==typeof b?b:null}}}})],a.prototype,"location",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"locationType",void 0);d.__decorate([e.property({type:p,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",
void 0);a=d.__decorate([l.subclass("esri.rest.support.LocationToAddressParameters")],a);a.from=k.ensureType(a);return a});