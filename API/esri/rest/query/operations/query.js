// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../request ../../../core/maybe ../../../core/urlUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../operations/urlUtils ./pbfQueryUtils ./queryZScale".split(" "),function(f,r,x,e,t,y,z,A,B,C){function u(b,c){if(c&&"extent"===b.type)return`${b.xmin},${b.ymin},${b.xmax},${b.ymax}`;if(c&&"point"===b.type)return`${b.x},${b.y}`;b=b.toJSON();delete b.spatialReference;return JSON.stringify(b)}function v(b,
c){const d=b.geometry,a=b.toJSON();delete a.compactGeometryEnabled;delete a.defaultSpatialReferenceEnabled;const h=b.outSpatialReference;let k,g;e.isSome(d)&&(k=d.spatialReference,g=d.spatialReference.wkid||JSON.stringify(d.spatialReference),a.geometryType=y.getJsonType(d),a.geometry=u(d,b.compactGeometryEnabled),a.inSR=g);a.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(","));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=
a.orderByFields.join(","));!a.outFields||!a.returnDistinctValues&&(null!=c&&c.returnCountOnly||null!=c&&c.returnExtentOnly||null!=c&&c.returnIdsOnly)?delete a.outFields:-1!==a.outFields.indexOf("*")?a.outFields="*":a.outFields=a.outFields.join(",");a.outSR?a.outSR=a.outSR.wkid||JSON.stringify(a.outSR):d&&(a.returnGeometry||a.returnCentroid)&&(a.outSR=a.inSR);a.returnGeometry&&delete a.returnGeometry;a.outStatistics&&(a.outStatistics=JSON.stringify(a.outStatistics));a.pixelSize&&(a.pixelSize=JSON.stringify(a.pixelSize));
a.quantizationParameters&&(b.defaultSpatialReferenceEnabled&&e.isSome(k)&&e.isSome(b.quantizationParameters)&&e.isSome(b.quantizationParameters.extent)&&k.equals(b.quantizationParameters.extent.spatialReference)&&delete a.quantizationParameters.extent.spatialReference,a.quantizationParameters=JSON.stringify(a.quantizationParameters));a.parameterValues&&(a.parameterValues=JSON.stringify(a.parameterValues));a.rangeValues&&(a.rangeValues=JSON.stringify(a.rangeValues));a.dynamicDataSource&&(a.layer=JSON.stringify({source:a.dynamicDataSource}),
delete a.dynamicDataSource);if(a.timeExtent){const {start:m,end:n}=a.timeExtent;if(null!=m||null!=n)a.time=m===n?m:`${null==m?"null":m},${null==n?"null":n}`;delete a.timeExtent}b.defaultSpatialReferenceEnabled&&e.isSome(k)&&e.isSome(h)&&k.equals(h)&&(a.defaultSR=a.inSR,delete a.inSR,delete a.outSR);return a}function p(){p=r._asyncToGenerator(function*(b,c,d,a){b=e.isSome(c.timeExtent)&&c.timeExtent.isEmpty?{data:{features:[]}}:yield l(b,c,"json",a);C.applyFeatureSetZUnitScaling(c,d,b.data);return b});
return p.apply(this,arguments)}function q(){q=r._asyncToGenerator(function*(b,c,d,a){if(e.isSome(c.timeExtent)&&c.timeExtent.isEmpty)return Promise.resolve({data:d.createFeatureResult()});b=yield w(b,c,a);b.data=B.parsePBFFeatureQuery(b.data,d);return b});return q.apply(this,arguments)}function w(b,c,d){return l(b,c,"pbf",d)}function l(b,c,d,a={},h={}){const k="string"===typeof b?t.urlToObject(b):b;b=c.geometry?[c.geometry]:[];a.responseType="pbf"===d?"array-buffer":"json";return z.normalizeCentralMeridian(b,
null,a).then(g=>{g=g&&g[0];e.isSome(g)&&(c=c.clone(),c.geometry=g);g=A.mapParameters({...k.query,f:d,...h,...v(c,h)});return x(t.join(k.path,"query"),{...a,query:{...g,...a.query}})})}f.encodeGeometry=u;f.executeQuery=function(b,c,d,a){return p.apply(this,arguments)};f.executeQueryForCount=function(b,c,d){return e.isSome(c.timeExtent)&&c.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):l(b,c,"json",d,{returnIdsOnly:!0,returnCountOnly:!0})};f.executeQueryForExtent=function(b,c,d){return e.isSome(c.timeExtent)&&
c.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):l(b,c,"json",d,{returnExtentOnly:!0,returnCountOnly:!0}).then(a=>{const h=a.data;if(h.hasOwnProperty("extent"))return a;if(h.features)throw Error("Layer does not support extent calculation.");if(h.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return a})};f.executeQueryForIds=function(b,c,d){return e.isSome(c.timeExtent)&&c.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):l(b,c,"json",d,
{returnIdsOnly:!0})};f.executeQueryPBF=function(b,c,d,a){return q.apply(this,arguments)};f.executeQueryPBFBuffer=w;f.queryToQueryStringParameters=v;f.runQuery=l;Object.defineProperty(f,"__esModule",{value:!0})});