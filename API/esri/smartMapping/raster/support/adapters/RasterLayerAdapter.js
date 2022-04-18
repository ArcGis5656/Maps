// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Loadable ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,b,f,g,p,q,r,n){b=function(l){function k(){var d=l.apply(this,arguments)||this;d.type="raster-layer-adapter";return d}h._inheritsLoose(k,l);var m=k.prototype;
m.updateRasterInfo=function(){var d=h._asyncToGenerator(function*(a){this.rasterInfo=yield this.generateRasterInfo(a);this.renderingRule=null==a?void 0:a.renderingRule});return function(a){return d.apply(this,arguments)}}();m.updateRasterInfoWithEstimatedStats=function(){var d=h._asyncToGenerator(function*(a){const e=this.rasterInfo;if(f.isNone(e.histograms)||f.isNone(e.statistics))a=yield this.estimateStatisticsHistograms(a),f.isSome(a)&&(f.isSome(e.statistics)||(e.statistics=a.statistics),f.isSome(e.histograms)||
(e.histograms=a.histograms))});return function(a){return d.apply(this,arguments)}}();return k}(b);c.__decorate([g.property()],b.prototype,"layer",void 0);c.__decorate([g.property()],b.prototype,"rasterInfo",void 0);c.__decorate([g.property()],b.prototype,"renderingRule",void 0);c.__decorate([g.property({readOnly:!0})],b.prototype,"type",void 0);c.__decorate([g.property()],b.prototype,"version",void 0);return b=c.__decorate([n.subclass("esri.smartMapping.support.adapters.RasterLayerAdapter")],b)});