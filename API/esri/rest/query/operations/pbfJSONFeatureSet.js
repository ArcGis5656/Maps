// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/compilerUtils","../../../core/maybe","../../../geometry/support/zscale","../../../layers/graphics/featureConversionUtils"],function(k,n,p,q,l){function r(e,c){return c}function h(e,c,a,b){switch(a){case 0:return g(e,c+b,0);case 1:return"lowerLeft"===e.originPosition?g(e,c+b,1):t(e,c+b,1)}}function m(e,c,a,b){switch(a){case 2:return g(e,c,2);default:return h(e,c,a,b)}}function u(e,c,a,b){switch(a){case 2:return g(e,c,3);default:return h(e,c,a,b)}}function v(e,c,a,b){switch(a){case 3:return g(e,
c,3);default:return m(e,c,a,b)}}function g({translate:e,scale:c},a,b){return e[b]+a*c[b]}function t({translate:e,scale:c},a,b){return e[b]-a*c[b]}let w=function(){function e(a){this.options=a;this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];this.previousCoordinate=[0,0];this.transform=null;this.applyTransform=r;this.lengths=[];this.vertexDimension=this.toAddInCurrentPath=this.currentLengthIndex=0;this.coordinateBuffer=null;this.coordinateBufferPtr=
0;this._attributesConstructor=function(){}}var c=e.prototype;c.createFeatureResult=function(){return{fields:[],features:[]}};c.finishFeatureResult=function(a){this.options.applyTransform&&(a.transform=null);this._attributesConstructor=function(){};this.coordinateBuffer=null;this.lengths.length=0;if(a.hasZ){var b=q.getGeometryZScaler(a.geometryType,this.options.sourceSpatialReference,a.spatialReference);if(!p.isNone(b))for(const d of a.features)b(d.geometry)}};c.createSpatialReference=function(){return{}};
c.addField=function(a,b){a.fields.push(b);const d=a.fields.map(f=>f.name);this._attributesConstructor=function(){for(const f of d)this[f]=null}};c.addFeature=function(a,b){a.features.push(b)};c.prepareFeatures=function(a){this.transform=a.transform;this.options.applyTransform&&a.transform&&(this.applyTransform=this._deriveApplyTransform(a));this.vertexDimension=2;a.hasZ&&this.vertexDimension++;a.hasM&&this.vertexDimension++;switch(a.geometryType){case "esriGeometryPoint":this.addCoordinate=(b,d,f)=>
this.addCoordinatePoint(b,d,f);this.createGeometry=b=>this.createPointGeometry(b);break;case "esriGeometryPolygon":this.addCoordinate=(b,d,f)=>this._addCoordinatePolygon(b,d,f);this.createGeometry=b=>this._createPolygonGeometry(b);break;case "esriGeometryPolyline":this.addCoordinate=(b,d,f)=>this._addCoordinatePolyline(b,d,f);this.createGeometry=b=>this._createPolylineGeometry(b);break;case "esriGeometryMultipoint":this.addCoordinate=(b,d,f)=>this._addCoordinateMultipoint(b,d,f);this.createGeometry=
b=>this._createMultipointGeometry(b);break;default:n.neverReached(a.geometryType)}};c.createFeature=function(){this.currentLengthIndex=this.lengths.length=0;this.previousCoordinate[0]=0;this.previousCoordinate[1]=0;this.coordinateBuffer=null;this.coordinateBufferPtr=0;return{attributes:new this._attributesConstructor}};c.allocateCoordinates=function(){};c.addLength=function(a,b,d){0===this.lengths.length&&(this.toAddInCurrentPath=b);this.lengths.push(b)};c.addQueryGeometry=function(a,b){const {queryGeometry:d,
queryGeometryType:f}=b;b=l.unquantizeOptimizedGeometry(d.clone(),d,!1,!1,this.transform);b=l.convertToGeometry(b,f,!1,!1);a.queryGeometryType=f;a.queryGeometry={...b}};c.createPointGeometry=function(a){const b={x:0,y:0,spatialReference:a.spatialReference};a.hasZ&&(b.z=0);a.hasM&&(b.m=0);return b};c.addCoordinatePoint=function(a,b,d){b=this.applyTransform(this.transform,b,d,0);switch(d){case 0:a.x=b;break;case 1:a.y=b;break;case 2:"z"in a?a.z=b:a.m=b;break;case 3:a.m=b}};c._transformPathLikeValue=
function(a,b){let d=0;1>=b&&(d=this.previousCoordinate[b],this.previousCoordinate[b]+=a);return this.applyTransform(this.transform,a,b,d)};c._addCoordinatePolyline=function(a,b,d){this._dehydratedAddPointsCoordinate(a.paths,b,d)};c._addCoordinatePolygon=function(a,b,d){this._dehydratedAddPointsCoordinate(a.rings,b,d)};c._addCoordinateMultipoint=function(a,b,d){0===d&&a.points.push([]);b=this._transformPathLikeValue(b,d);a.points[a.points.length-1].push(b)};c._createPolygonGeometry=function(a){return{rings:[[]],
spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};c._createPolylineGeometry=function(a){return{paths:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};c._createMultipointGeometry=function(a){return{points:[],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};c._dehydratedAddPointsCoordinate=function(a,b,d){0===d&&0===this.toAddInCurrentPath--&&(a.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=
0,this.previousCoordinate[1]=0);b=this._transformPathLikeValue(b,d);a=a[a.length-1];0===d&&(this.coordinateBufferPtr=0,this.coordinateBuffer=Array(this.vertexDimension),a.push(this.coordinateBuffer));this.coordinateBuffer[this.coordinateBufferPtr++]=b};c._deriveApplyTransform=function(a){const {hasZ:b,hasM:d}=a;return b&&d?v:b?m:d?u:h};return e}();k.JSONFeatureSetParserContext=w;Object.defineProperty(k,"__esModule",{value:!0})});