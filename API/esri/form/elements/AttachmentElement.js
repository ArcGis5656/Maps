// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Element ./inputs/AttachmentInput".split(" "),function(h,c,d,a,n,p,k,l,m){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.attachmentKeyword=null;b.editable=!0;b.input=null;b.type="attachment";return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({attachmentKeyword:this.attachmentKeyword,
description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})};return f}(l);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"attachmentKeyword",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"editable",void 0);c.__decorate([d.property({type:m,json:{read:{source:"inputType"},write:{target:"inputType"}}})],a.prototype,"input",void 0);c.__decorate([d.property({type:["attachment"],
json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=e=c.__decorate([k.subclass("esri.form.elements.AttachmentElement")],a)});