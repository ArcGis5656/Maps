// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./AuthoringInfoClassBreakInfo".split(" "),function(a,h,c,k,l,d,p,m,n){var e;a.AuthoringInfoFieldInfo=e=function(g){function f(b){b=g.call(this,b)||this;b.field="";b.normalizationField="";b.label="";b.classBreakInfos=[];return b}h._inheritsLoose(f,g);f.prototype.clone=
function(){return new e({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:l.clone(this.classBreakInfos)})};return f}(k.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"field",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"normalizationField",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"label",
void 0);c.__decorate([d.property({type:[n.default],json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"classBreakInfos",void 0);a.AuthoringInfoFieldInfo=e=c.__decorate([m.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],a.AuthoringInfoFieldInfo);a.default=a.AuthoringInfoFieldInfo;Object.defineProperty(a,"__esModule",{value:!0})});