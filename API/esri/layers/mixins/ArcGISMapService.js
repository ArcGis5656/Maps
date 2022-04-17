// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../request ../../core/promiseUtils ../../core/urlUtils ../../core/Version ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/SpatialReference ../support/commonProperties".split(" "),function(p,l,e,v,w,x,y,g,G,H,I,q,z,A,B,
r){p.ArcGISMapService=c=>{c=function(t){function m(){var b=t.apply(this,arguments)||this;b.capabilities=void 0;b.copyright=null;b.fullExtent=null;b.legendEnabled=!0;b.spatialReference=null;b.version=null;return b}l._inheritsLoose(m,t);var k=m.prototype;k.readCapabilities=function(b,a){var d=a.capabilities&&a.capabilities.split(",").map(C=>C.toLowerCase().trim());if(!d)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};
var f=this.type;b=-1!==d.indexOf("query");const h=-1!==d.indexOf("map"),u=!!a.exportTilesAllowed;d=-1!==d.indexOf("tilemap");const n="tile"!==f&&!!a.supportsDynamicLayers,D="tile"!==f&&(!a.tileInfo||n),E="tile"!==f&&(!a.tileInfo||n);f="tile"!==f;const F=a.cimVersion?y.Version.parse(a.cimVersion).since(1,4):!1;return{operations:{supportsQuery:b,supportsExportMap:h,supportsExportTiles:u,supportsTileMap:d},exportMap:h?{supportsArcadeExpressionForLabeling:F,supportsSublayersChanges:f,supportsDynamicLayers:n,
supportsSublayerVisibility:D,supportsSublayerDefinitionExpression:E}:null,exportTiles:u?{maxExportTilesCount:+a.maxExportTilesCount}:null}};k.readVersion=function(b,a){(b=a.currentVersion)||(b=a.hasOwnProperty("capabilities")||a.hasOwnProperty("tables")?10:a.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3);return b};k.fetchSublayerInfo=function(){var b=l._asyncToGenerator(function*(a,d){yield this.fetchAllLayersAndTables(d);return this._allLayersAndTablesMap.get(a)});return function(a,d){return b.apply(this,
arguments)}}();k.fetchAllLayersAndTables=function(){var b=l._asyncToGenerator(function*(a){yield this.load(a);this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=v(x.urlToObject(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(f=>{this._allLayersAndTablesMap=new Map;for(const h of f.data.layers)this._allLayersAndTablesMap.set(h.id,h);return{result:f.data}},f=>({error:f})));const d=yield this._allLayersAndTablesPromise;w.throwIfAborted(a);
if("result"in d)return d.result;throw d.error;});return function(a){return b.apply(this,arguments)}}();return m}(c);e.__decorate([g.property({readOnly:!0})],c.prototype,"capabilities",void 0);e.__decorate([q.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],c.prototype,"readCapabilities",null);e.__decorate([g.property({json:{read:{source:"copyrightText"}}})],c.prototype,"copyright",void 0);e.__decorate([g.property({type:A})],
c.prototype,"fullExtent",void 0);e.__decorate([g.property(r.id)],c.prototype,"id",void 0);e.__decorate([g.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],c.prototype,"legendEnabled",void 0);e.__decorate([g.property(r.popupEnabled)],c.prototype,"popupEnabled",void 0);e.__decorate([g.property({type:B})],c.prototype,"spatialReference",void 0);e.__decorate([g.property()],c.prototype,"version",void 0);e.__decorate([q.reader("version",
["currentVersion","capabilities","tables","supportedImageFormatTypes"])],c.prototype,"readVersion",null);return c=e.__decorate([z.subclass("esri.layers.mixins.ArcGISMapService")],c)};Object.defineProperty(p,"__esModule",{value:!0})});