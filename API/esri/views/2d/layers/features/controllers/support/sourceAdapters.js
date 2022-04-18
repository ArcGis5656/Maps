// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/has ../../../../../../core/maybe ../../../../../../core/workers/Connection ../../../../../../geometry/support/quantizationUtils ../../../../../../layers/graphics/featureConversionUtils ../../../../../../layers/ogc/ogcFeatureUtils ../../../../../../rest/query/operations/query ../../support/FeatureSetReaderJSON ../../support/FeatureSetReaderPBF".split(" "),function(p,g,x,m,y,v,q,w,r,h,z){function A(c){return t.apply(this,
arguments)}function t(){t=g._asyncToGenerator(function*(c){const d=new y;yield d.open(c,{});return d});return t.apply(this,arguments)}let k=function(){function c(d){this.service=d}c.prototype.destroy=function(){};return c}(),B=function(c){function d(b){var a=c.call(this,b)||this;a._portsOpen=A(b.source).then(f=>a.client=f);return a}g._inheritsLoose(d,c);var e=d.prototype;e.destroy=function(){this.client.close();this.client=null};e.executeQuery=function(){var b=g._asyncToGenerator(function*(a,f){yield this._portsOpen;
a=yield this.client.invoke("queryFeatures",a.toJSON(),f);return h.FeatureSetReaderJSON.fromFeatureSet(a,this.service)});return function(a,f){return b.apply(this,arguments)}}();return d}(k),C=function(c){function d(){return c.apply(this,arguments)||this}g._inheritsLoose(d,c);d.prototype.executeQuery=function(){var e=g._asyncToGenerator(function*(b,a){({data:a}=yield r.executeQueryPBFBuffer(this.service.source,b,a));return z.FeatureSetReaderPBF.fromBuffer(a,this.service,!b.quantizationParameters)});
return function(b,a){return e.apply(this,arguments)}}();return d}(k),G=function(c){function d(){return c.apply(this,arguments)||this}g._inheritsLoose(d,c);d.prototype.executeQuery=function(){var e=g._asyncToGenerator(function*(b,a){const {source:f,capabilities:n,spatialReference:D,objectIdField:E,geometryType:F}=this.service;if(m.isSome(b.quantizationParameters)&&!n.query.supportsQuantization){b=b.clone();var u=v.toQuantizationTransform(m.unwrap(b.quantizationParameters));b.quantizationParameters=
null;({data:a}=yield r.executeQuery(f,b,D,a));a=q.convertFromFeatureSet(a,E);q.quantizeOptimizedFeatureSet(u,a);return h.FeatureSetReaderJSON.fromOptimizedFeatureSet(a,this.service)}({data:a}=yield r.executeQuery(f,b,this.service.spatialReference,a));"esriGeometryPoint"===F&&(a.features=null==(u=a.features)?void 0:u.filter(l=>m.isSome(l.geometry)?(l=l.geometry,Number.isFinite(l.x)&&Number.isFinite(l.y)):!0));return h.FeatureSetReaderJSON.fromFeatureSet(a,this.service)});return function(b,a){return e.apply(this,
arguments)}}();return d}(k),H=function(c){function d(){return c.apply(this,arguments)||this}g._inheritsLoose(d,c);d.prototype.executeQuery=function(){var e=g._asyncToGenerator(function*(b,a){var {capabilities:f}=this.service;if(b.quantizationParameters&&!f.query.supportsQuantization){const n=b.clone();f=v.toQuantizationTransform(m.unwrap(n.quantizationParameters));n.quantizationParameters=null;b=yield w.queryOptimizedFeatureSet(this.service.source,b,a);q.quantizeOptimizedFeatureSet(f,b);return h.FeatureSetReaderJSON.fromOptimizedFeatureSet(b,
this.service)}b=yield w.queryOptimizedFeatureSet(this.service.source,b,a);return h.FeatureSetReaderJSON.fromOptimizedFeatureSet(b,this.service)});return function(b,a){return e.apply(this,arguments)}}();return d}(k);p.SourceAdapter=k;p.createSourceAdapter=function(c){const {capabilities:d}=c;var e=c.source;return e&&e.capabilities&&e.collection&&e.layerDefinition?new H(c):Array.isArray(c.source)?new B(c):d.query.supportsFormatPBF&&x("featurelayer-pbf")?new C(c):new G(c)};Object.defineProperty(p,"__esModule",
{value:!0})});