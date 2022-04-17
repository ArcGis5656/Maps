// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/lang ../../../core/maybe ../../../core/MemCache ../../../core/unitUtils ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ./attributeSupport ./projectionSupport ./QueryEngineCapabilities ./QueryEngineResult ./spatialQuerySupport ./timeSupport ./utils ../../support/FieldsIndex ../../../support/arcadeOnDemand ../../../views/support/Scheduler".split(" "),
function(L,m,x,C,u,R,M,F,N,U,H,S,O,y,D,V,w,E,W,q,X,Y,T){function Z(A){return A.every(l=>"exceedslimit"!==l.statisticType)}const I=new Set,aa=new R.MemCacheStorage(2E6);let ba=0,ea=function(){function A(e){this.capabilities={query:V.queryCapabilities};this.geometryType=e.geometryType;this.hasM=e.hasM;this.hasZ=e.hasZ;this.objectIdField=e.objectIdField;this.spatialReference=e.spatialReference;this.definitionExpression=e.definitionExpression;this.featureStore=e.featureStore;this.aggregateAdapter=e.aggregateAdapter;
this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache());this.timeInfo=e.timeInfo;e.cacheSpatialQueries&&(this._geometryQueryCache=new R.MemCache(ba++ +"$$",aa));this.fieldsIndex=new X(e.fields);e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}var l=A.prototype;l.destroy=function(){this._frameTask=u.removeMaybe(this._frameTask);this.clearCache();u.destroyMaybe(this._geometryQueryCache);this._changeHandle=u.removeMaybe(this._changeHandle);u.destroyMaybe(this.fieldsIndex)};
l.clearCache=function(){this._geometryQueryCache&&this._geometryQueryCache.clear();this._timeExtent=this._allItems=null};l.executeQuery=function(){var e=m._asyncToGenerator(function*(a={},b){let d=C.clone(a),c;try{d=yield this._schedule(()=>q.normalizeQuery(d,this.definitionExpression,this.spatialReference),b),d=yield this._reschedule(()=>this._checkQuerySupport(d),b),c=yield this._reschedule(()=>this._executeGeometryQuery(d,b),b),c=yield this._reschedule(()=>c.executeAggregateIdsQuery(d),b),c=yield this._reschedule(()=>
c.executeObjectIdsQuery(d),b),c=yield this._reschedule(()=>c.executeTimeQuery(d),b),c=yield this._reschedule(()=>c.executeAttributesQuery(d),b)}catch(g){if(g!==q.QUERY_ENGINE_EMPTY_RESULT)throw g;c=new w([],null,this)}return c.createQueryResponse(d)});return function(){return e.apply(this,arguments)}}();l.executeQueryForCount=function(){var e=m._asyncToGenerator(function*(a={},b){let d=C.clone(a);d.returnGeometry=!1;d.returnCentroid=!1;d.outSR=null;try{d=yield this._schedule(()=>q.normalizeQuery(d,
this.definitionExpression,this.spatialReference),b);d=yield this._reschedule(()=>this._checkQuerySupport(d),b);let c=yield this._reschedule(()=>this._executeGeometryQuery(d,b),b);c=yield this._reschedule(()=>c.executeAggregateIdsQuery(d),b);c=yield this._reschedule(()=>c.executeObjectIdsQuery(d),b);c=yield this._reschedule(()=>c.executeTimeQuery(d),b);c=yield this._reschedule(()=>c.executeAttributesQuery(d),b);return c.createQueryResponseForCount(d)}catch(c){if(c!==q.QUERY_ENGINE_EMPTY_RESULT)throw c;
return 0}});return function(){return e.apply(this,arguments)}}();l.executeQueryForExtent=function(){var e=m._asyncToGenerator(function*(a={},b){let d=C.clone(a),c;a=d.outSR;try{d=yield this._schedule(()=>q.normalizeQuery(d,this.definitionExpression,this.spatialReference),b);d=yield this._reschedule(()=>this._checkQuerySupport(d),b);d.returnGeometry=!0;d.returnCentroid=!1;d.outSR=null;c=yield this._reschedule(()=>this._executeGeometryQuery(d,b),b);c=yield this._reschedule(()=>c.executeAggregateIdsQuery(d),
b);c=yield this._reschedule(()=>c.executeObjectIdsQuery(d),b);c=yield this._reschedule(()=>c.executeTimeQuery(d),b);c=yield this._reschedule(()=>c.executeAttributesQuery(d),b);const g=c.size;if(!g)return{count:g,extent:null};F.set(v,F.NEGATIVE_INFINITY);this.featureStore.forEachBounds(c.items,h=>F.expandWithAABB(v,h),ca);const k={xmin:v[0],ymin:v[1],xmax:v[3],ymax:v[4],spatialReference:q.cleanFromGeometryEngine(this.spatialReference)};this.hasZ&&isFinite(v[2])&&isFinite(v[5])&&(k.zmin=v[2],k.zmax=
v[5]);const f=D.project(k,c.spatialReference,a);f.spatialReference=q.cleanFromGeometryEngine(a||this.spatialReference);if(0===f.xmax-f.xmin){const h=M.getMetersPerUnitForSR(f.spatialReference);f.xmin-=h;f.xmax+=h}if(0===f.ymax-f.ymin){const h=M.getMetersPerUnitForSR(f.spatialReference);f.ymin-=h;f.ymax+=h}if(this.hasZ&&null!=f.zmin&&null!=f.zmax&&0===f.zmax-f.zmin){const h=M.getMetersPerUnitForSR(f.spatialReference);f.zmin-=h;f.zmax+=h}return{count:g,extent:f}}catch(g){if(g===q.QUERY_ENGINE_EMPTY_RESULT)return{count:0,
extent:null};throw g;}});return function(){return e.apply(this,arguments)}}();l.executeQueryForIds=function(){var e=m._asyncToGenerator(function*(a={},b){return this.executeQueryForIdSet(a,b).then(d=>Array.from(d))});return function(){return e.apply(this,arguments)}}();l.executeQueryForIdSet=function(){var e=m._asyncToGenerator(function*(a={},b){let d=C.clone(a),c;d.returnGeometry=!1;d.returnCentroid=!1;d.outSR=null;try{d=yield this._schedule(()=>q.normalizeQuery(d,this.definitionExpression,this.spatialReference),
b);d=yield this._reschedule(()=>this._checkQuerySupport(d),b);c=yield this._reschedule(()=>this._executeGeometryQuery(d,b),b);c=yield this._reschedule(()=>c.executeAggregateIdsQuery(d),b);c=yield this._reschedule(()=>c.executeObjectIdsQuery(d),b);c=yield this._reschedule(()=>c.executeTimeQuery(d),b);c=yield this._reschedule(()=>c.executeAttributesQuery(d),b);const g=c.items,k=new Set;yield this._reschedule(()=>{for(const f of g)k.add(c.featureAdapter.getObjectId(f))},b);return k}catch(g){if(g===q.QUERY_ENGINE_EMPTY_RESULT)return new Set;
throw g;}});return function(){return e.apply(this,arguments)}}();l.executeQueryForSnapping=function(){var e=m._asyncToGenerator(function*(a,b){const {point:d,distance:c,types:g}=a;if(0===g)return{candidates:[]};const k=yield this._reschedule(()=>this._checkQuerySupport(a.query),b),f=!O.equals(d.spatialReference,this.spatialReference);f&&(yield D.checkProjectionSupport(d.spatialReference,this.spatialReference));var h="number"===typeof c?c:c.x,p="number"===typeof c?c:c.y;h={xmin:d.x-h,xmax:d.x+h,ymin:d.y-
p,ymax:d.y+p,spatialReference:d.spatialReference};h=f?D.project(h,this.spatialReference):h;if(!h)return{candidates:[]};p=(yield S.normalizeCentralMeridian(H.fromJSON(d),null,{signal:b}))[0];const z=(yield S.normalizeCentralMeridian(H.fromJSON(h),null,{signal:b}))[0];if(u.isNone(p)||u.isNone(z))return{candidates:[]};let n=new w(this._searchFeatures(this._getQueryBBoxes(z.toJSON())),null,this);n=yield this._reschedule(()=>n.executeObjectIdsQuery(k),b);n=yield this._reschedule(()=>n.executeTimeQuery(k),
b);n=yield this._reschedule(()=>n.executeAttributesQuery(k),b);b=p.toJSON();b=f?D.project(b,this.spatialReference):b;return n.createSnappingResponse({...a,point:b,distance:f?Math.max(h.xmax-h.xmin,h.ymax-h.ymin)/2:c},d.spatialReference)});return function(a,b){return e.apply(this,arguments)}}();l.executeQueryForLatestObservations=function(){var e=m._asyncToGenerator(function*(a={},b){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new x("feature-store:unsupported-query","Missing timeInfo or timeInfo.trackIdField",
{query:a,timeInfo:this.timeInfo});let d=C.clone(a),c;try{d=yield this._schedule(()=>q.normalizeQuery(d,this.definitionExpression,this.spatialReference),b),d=yield this._reschedule(()=>this._checkQuerySupport(d),b),c=yield this._reschedule(()=>this._executeGeometryQuery(d,b),b),c=yield this._reschedule(()=>c.executeAggregateIdsQuery(d),b),c=yield this._reschedule(()=>c.executeObjectIdsQuery(d),b),c=yield this._reschedule(()=>c.executeTimeQuery(d),b),c=yield this._reschedule(()=>c.executeAttributesQuery(d),
b),c=yield this._reschedule(()=>c.filterLatest(),b)}catch(g){if(g!==q.QUERY_ENGINE_EMPTY_RESULT)throw g;c=new w([],null,this)}return c.createQueryResponse(d)});return function(){return e.apply(this,arguments)}}();l.executeQueryForSummaryStatistics=function(){var e=m._asyncToGenerator(function*(a={},b,d){const {field:c,normalizationField:g,valueExpression:k}=b;return(yield this._getQueryEngineResultForStats(a,{field:c,normalizationField:g,valueExpression:k},d)).createSummaryStatisticsResponse(a,b)});
return function(){return e.apply(this,arguments)}}();l.executeQueryForUniqueValues=function(){var e=m._asyncToGenerator(function*(a={},b,d){const {field:c,valueExpression:g}=b;return(yield this._getQueryEngineResultForStats(a,{field:c,valueExpression:g},d)).createUniqueValuesResponse(a,b)});return function(){return e.apply(this,arguments)}}();l.executeQueryForClassBreaks=function(){var e=m._asyncToGenerator(function*(a={},b,d){const {field:c,normalizationField:g,valueExpression:k}=b;return(yield this._getQueryEngineResultForStats(a,
{field:c,normalizationField:g,valueExpression:k},d)).createClassBreaksResponse(a,b)});return function(){return e.apply(this,arguments)}}();l.executeQueryForHistogram=function(){var e=m._asyncToGenerator(function*(a={},b,d){const {field:c,normalizationField:g,valueExpression:k}=b;return(yield this._getQueryEngineResultForStats(a,{field:c,normalizationField:g,valueExpression:k},d)).createHistogramResponse(a,b)});return function(){return e.apply(this,arguments)}}();l._schedule=function(){var e=m._asyncToGenerator(function*(a,
b){return u.isSome(this._frameTask)?this._frameTask.schedule(a,b):a(T.noBudget)});return function(a,b){return e.apply(this,arguments)}}();l._reschedule=function(){var e=m._asyncToGenerator(function*(a,b){return u.isSome(this._frameTask)?this._frameTask.reschedule(a,b):a(T.noBudget)});return function(a,b){return e.apply(this,arguments)}}();l._getAll=function(){if(!this._allItems){const e=[];this.featureStore.forEach(a=>e.push(a));this._allItems=new w(e,null,this)}return this._allItems};l._executeGeometryQuery=
function(){var e=m._asyncToGenerator(function*(a,b){var d=this;const {geometry:c,outSR:g,spatialRel:k,returnGeometry:f,returnCentroid:h}=a,p=f||h,z=O.isValid(g)&&!O.equals(this.spatialReference,g),n=this._geometryQueryCache?z&&p?JSON.stringify({geometry:c,spatialRelationship:k,outSpatialReference:g}):JSON.stringify({geometry:c,spatialRelationship:k}):null;if(n){var r=this._geometryQueryCache.get(n);if(!u.isUndefined(r))return r}r=function(){var B=m._asyncToGenerator(function*(t){if(z&&p)return t=
yield t.project(g),n&&d._geometryQueryCache.put(n,t,t.size||1),t;n&&d._geometryQueryCache.put(n,t,t.size||1);return t});return function(t){return B.apply(this,arguments)}}();if(!c)return r(this._getAll());const J=this.featureAdapter;if("esriSpatialRelDisjoint"===k){a=this._searchFeatures(this._getQueryBBoxes(c));if(!a.length)return r(this._getAll());let B,t;const P=new Set;for(var G of a)P.add(J.getObjectId(G));yield this._reschedule(()=>{let Q=0;B=Array(P.size);this.featureStore.forEach(K=>B[Q++]=
K);t=P},b);a=yield this._reschedule(m._asyncToGenerator(function*(){const Q=yield E.getSpatialQueryOperator(k,c,d.geometryType,d.hasZ,d.hasM);return new w(yield d._runSpatialFilter(B,K=>!t.has(J.getObjectId(K))||Q(J.getGeometry(K)),b),c,d)}),b);return r(a)}G=this._searchFeatures(this._getQueryBBoxes(c));if(!G.length)return r=new w([],c,this),n&&this._geometryQueryCache.put(n,r,r.size||1),r;if(this._canExecuteSoloPass(c,a))return r(new w(G,c,this));const da=yield E.getSpatialQueryOperator(k,c,this.geometryType,
this.hasZ,this.hasM);a=yield this._runSpatialFilter(G,B=>da(J.getGeometry(B)),b);return r(new w(a,c,this))});return function(a,b){return e.apply(this,arguments)}}();l._runSpatialFilter=function(){var e=m._asyncToGenerator(function*(a,b,d){var c=this;if(!b)return a;if(u.isNone(this._frameTask))return a.filter(h=>b(h));let g=0;const k=[],f=function(){var h=m._asyncToGenerator(function*(p){for(;g<a.length;){const z=a[g++];b(z)&&(k.push(z),p.madeProgress());p.done&&(yield c._reschedule(n=>f(n),d))}});
return function(p){return h.apply(this,arguments)}}();return this._reschedule(h=>f(h),d).then(()=>k)});return function(a,b,d){return e.apply(this,arguments)}}();l._canExecuteSoloPass=function(e,a){const {geometryType:b}=this;({spatialRel:a}=a);return E.canQueryWithRBush(e)&&("esriSpatialRelEnvelopeIntersects"===a||"esriGeometryPoint"===b&&("esriSpatialRelIntersects"===a||"esriSpatialRelContains"===a||"esriSpatialRelWithin"===a))};l._getQueryBBoxes=function(e){if(E.canQueryWithRBush(e)){if(H.isExtent(e))return[N.fromValues(e.xmin,
e.ymin,e.xmax,e.ymax)];if(H.isPolygon(e))return e.rings.map(a=>N.fromValues(Math.min(a[0][0],a[2][0]),Math.min(a[0][1],a[2][1]),Math.max(a[0][0],a[2][0]),Math.max(a[0][1],a[2][1])))}return[U.getBoundsXY(N.create(),e)]};l._searchFeatures=function(e){for(const d of e)this.featureStore.forEachInBounds(d,c=>{I.add(c)});const a=Array(I.size);let b=0;I.forEach(d=>a[b++]=d);I.clear();return a};l._checkStatisticsSupport=function(){var e=m._asyncToGenerator(function*(a,b){if(0>a.distance||null!=a.geometryPrecision||
a.multipatchOption||a.pixelSize||a.relationParam||a.text||a.outStatistics||a.groupByFieldsForStatistics||a.having||a.orderByFields)throw new x("feature-store:unsupported-query","Unsupported query options",{query:a});return Promise.all([this._checkAttributesQuerySupport(a),this._checkStatisticsParamsSupport(b),E.checkSpatialQuerySupport(a,this.geometryType,this.spatialReference),D.checkProjectionSupport(this.spatialReference,a.outSR)]).then(()=>a)});return function(a,b){return e.apply(this,arguments)}}();
l._checkStatisticsParamsSupport=function(){var e=m._asyncToGenerator(function*(a){var b=[];a.valueExpression&&({arcadeUtils:b}=yield Y.loadArcade(),b=b.extractFieldNames(a.valueExpression));a.field&&b.push(a.field);a.normalizationField&&b.push(a.normalizationField);if(!b.length)throw new x("feature-store:unsupported-query","params should have at least a field or valueExpression",{params:a});y.validateFields(this.fieldsIndex,b,"params contains missing fields")});return function(a){return e.apply(this,
arguments)}}();l._checkQuerySupport=function(){var e=m._asyncToGenerator(function*(a){if(0>a.distance||null!=a.geometryPrecision||a.multipatchOption||a.pixelSize||a.relationParam||a.text)throw new x("feature-store:unsupported-query","Unsupported query options",{query:a});return Promise.all([this._checkAttributesQuerySupport(a),this._checkStatisticsQuerySupport(a),E.checkSpatialQuerySupport(a,this.geometryType,this.spatialReference),D.checkProjectionSupport(this.spatialReference,a.outSR)]).then(()=>
a)});return function(a){return e.apply(this,arguments)}}();l._checkAttributesQuerySupport=function(e){const {outFields:a,orderByFields:b,returnDistinctValues:d,outStatistics:c}=e,g=c?c.map(k=>k.outStatisticFieldName&&k.outStatisticFieldName.toLowerCase()):[];if(b&&0<b.length){const k=b.map(f=>{const h=f.toLowerCase();return-1<h.indexOf(" asc")?h.split(" asc")[0]:-1<h.indexOf(" desc")?h.split(" desc")[0]:f}).filter(f=>-1===g.indexOf(f));y.validateFields(this.fieldsIndex,k,"orderByFields contains missing fields")}if(a&&
0<a.length)y.validateFields(this.fieldsIndex,a,"outFields contains missing fields");else if(d)throw new x("feature-store:unsupported-query","outFields should be specified for returnDistinctValues",{query:e});y.validateWhere(this.fieldsIndex,e.where)};l._checkStatisticsQuerySupport=function(){var e=m._asyncToGenerator(function*(a){const {outStatistics:b,groupByFieldsForStatistics:d,having:c}=a;var g=d&&d.length,k=b&&b.length;if(c){if(!g||!k)throw new x("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",
{query:a});y.validateHaving(this.fieldsIndex,c,b)}if(k&&Z(b)){k=b.map(f=>f.onStatisticField);y.validateFields(this.fieldsIndex,k,"onStatisticFields contains missing fields");g&&y.validateFields(this.fieldsIndex,d,"groupByFieldsForStatistics contains missing fields");for(const f of b){const {onStatisticField:h,statisticType:p}=f;if(("percentile_disc"===p||"percentile_cont"===p)&&"statisticParameters"in f){if({statisticParameters:g}=f,!g)throw new x("feature-store:unsupported-query","statisticParamters should be set for percentile type",
{definition:f,query:a});}else if("count"!==p&&h&&y.hasInvalidFieldType(h,this.fieldsIndex))throw new x("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:f,query:a});}}});return function(a){return e.apply(this,arguments)}}();l._getQueryEngineResultForStats=function(){var e=m._asyncToGenerator(function*(a={},b,d){a=C.clone(a);let c;try{a=yield this._schedule(()=>q.normalizeQuery(a,this.definitionExpression,this.spatialReference),d),a=yield this._reschedule(()=>
this._checkStatisticsSupport(a,b),d),c=yield this._reschedule(()=>this._executeGeometryQuery(a,d),d),c=yield this._reschedule(()=>c.executeAggregateIdsQuery(a),d),c=yield this._reschedule(()=>c.executeObjectIdsQuery(a),d),c=yield this._reschedule(()=>c.executeTimeQuery(a),d),c=yield this._reschedule(()=>c.executeAttributesQuery(a),d)}catch(g){if(g!==q.QUERY_ENGINE_EMPTY_RESULT)throw g;c=new w([],null,this)}return c});return function(){return e.apply(this,arguments)}}();m._createClass(A,[{key:"featureAdapter",
get:function(){return this.featureStore.featureAdapter}},{key:"fullExtent",get:function(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:q.cleanFromGeometryEngine(this.spatialReference)}:null}},{key:"timeExtent",get:function(){return this.timeInfo?this._timeExtent?this._timeExtent:this._timeExtent=W.getTimeExtent(this.timeInfo,this.featureStore):null}}]);return A}();const ca=F.create(),v=F.create();L.Feature=function(A,l=null,e,a,b){this.attributes=
A;this.geometry=e;this.centroid=a;this.filterFlags=b;this.groupId=-1;this.displayId=l};L.default=ea;Object.defineProperty(L,"__esModule",{value:!0})});