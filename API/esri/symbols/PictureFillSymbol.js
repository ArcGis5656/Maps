// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./FillSymbol ./support/urlUtils".split(" "),function(t,c,m,e,d,b,u,v,w,n){var g;b=g=function(h){function k(...a){a=h.call(this,...a)||this;a.type="picture-fill";a.url=null;a.xscale=1;a.yscale=1;a.width=12;a.height=12;a.xoffset=0;a.yoffset=
0;a.source=null;return a}t._inheritsLoose(k,h);var l=k.prototype;l.normalizeCtorArgs=function(a,p,q,r){if(a&&"string"!==typeof a&&null==a.imageData)return a;const f={};a&&(f.url=a);p&&(f.outline=p);null!=q&&(f.width=e.toPt(q));null!=r&&(f.height=e.toPt(r));return f};l.clone=function(){const a=new g({color:m.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});
a._set("source",m.clone(this.source));return a};l.hash=function(){var a;return`${h.prototype.hash.call(this)}.${null==(a=this.color)?void 0:a.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`};return k}(w);c.__decorate([u.enumeration({esriPFS:"picture-fill"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property(n.urlPropertyDefinition)],b.prototype,"url",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,
"xscale",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],b.prototype,"yscale",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"width",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"height",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0);c.__decorate([d.property(n.sourcePropertyDefinition)],
b.prototype,"source",void 0);return b=g=c.__decorate([v.subclass("esri.symbols.PictureFillSymbol")],b)});