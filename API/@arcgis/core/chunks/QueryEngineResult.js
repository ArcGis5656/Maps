/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as e,i as t}from"../core/lang.js";import{e as s,f as i}from"../geometry/Polygon.js";import{g as a,e as r}from"./extentUtils.js";import{t as n}from"./quantizationUtils.js";import{j as o,e as l}from"../geometry/SpatialReference.js";import{b as u}from"./featureConversionUtils.js";import c from"../core/Error.js";import{I as d}from"./ItemCache.js";import{WhereClause as h}from"../core/sql/WhereClause.js";import{b as m,i as f,d as g,e as p,p as y,f as I,c as x,h as F,r as v,j as T,k as _,l as V}from"./utils11.js";import{p as A,a as b}from"./projectionSupport.js";import{c as w,g as z,a as S,t as E}from"./utils17.js";import{isStringField as D}from"../layers/support/fieldUtils.js";import{l as C}from"./arcadeOnDemand.js";const R=new class{constructor(e,t){this._cache=new d(e),this._invalidCache=new d(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(void 0!==this._invalidCache.get(s))return null;try{const i=h.create(e,t);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}(50,500),N="feature-store:unsupported-query",j=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function G(e,t){if(!t)return!0;const s=R.get(t,e);if(!s)throw new c(N,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new c(N,"where clause is not standard",{where:t});return q(e,s.fieldNames,"where clause contains missing fields"),!0}function M(e,t,s){if(!t)return!0;const i=R.get(t,e);if(!i)throw new c(N,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new c(N,"having does not contain a valid aggregate function",{having:t});const a=i.fieldNames;q(e,a,"having contains missing fields");if(!i.getExpressions().every((t=>{const{aggregateType:i,field:a}=t,r=e.has(a)&&e.get(a).name;return s.some((t=>{const{onStatisticField:s,statisticType:a}=t;return(e.has(s)&&e.get(s).name)===r&&a.toLowerCase().trim()===i}))})))throw new c(N,"expressions in having should also exist in outStatistics",{having:t});return!0}function P(e,t){return e?R.get(e,t):null}function q(e,t,s,i=!0){const a=[];for(const s of t)if("*"!==s&&!e.has(s))if(i){const t=O(s);try{const s=P(t,e);if(!s)throw new c(N,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new c(N,"expression is not standard",{clause:s});q(e,s.fieldNames,"expression contains missing fields")}catch(e){const t=e&&e.details;if(t&&(t.clause||t.where))throw e;t&&t.missingFields?a.push(...t.missingFields):a.push(s)}}else a.push(s);if(a.length)throw new c(N,s,{missingFields:a})}function O(e){return e.split(" as ")[0]}function Q(e,t){const s=t.get(e);return!!s&&!j.has(s.type)}class Z{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&-1===i.indexOf("*")){this.outFields=i;let e=0;for(const t of i){const i=O(t),a=this.fieldsIndex.get(i),r=a?null:P(i,s),n=a?a.name:t.split(" as ")[1]||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:n,clause:r})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=this._fieldDataCache.get(i).clause:s||(a=P(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let a=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(a)){const r=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);a=m(a,s,r,i)}return a}getExpressionValue(e,t,s){const i={attributes:this.featureAdapter.getAttributes(e)},a=s.createExecContext(i,t.viewInfo);return s.executeFunction(t.compiledFunc,a)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:P(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:P(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:t,clause:a}=this._fieldDataCache.get(i);s[t]=a?a.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return s}_processAttributesForDistinctValues(t){if(e(t)||!this.returnDistinctValues)return t;const s=this.outFields,i=[];if(s)for(const e of s){const{alias:s}=this._fieldDataCache.get(e);i.push(t[s])}else for(const e in t)i.push(t[e]);const a=`${(s||["*"]).join(",")}=${i.join(",")}`;let r=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++r),r>1?null:t}}class L{constructor(e,t,s){this.items=e,this.queryGeometry=t,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new Z(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:i}=e;if(!!!(null==s?void 0:s.length))return 1;const a=new Map,r=new Map,n=new Set,o=e.outStatistics;for(const e of o){const{statisticType:o}=e,l="exceedslimit"!==o?e.onStatisticField:void 0;if(!r.has(l)){const e=[];for(const i of s){const s=this._getAttributeValues(t,i,a);e.push(s)}r.set(l,this._calculateUniqueValues(e,t.returnDistinctValues))}const u=r.get(l);for(const e in u){const{data:s,items:a}=u[e],r=s.join(",");i&&!t.validateItems(a,i)||n.add(r)}}return n.size}async createQueryResponse(e){let t;if(e.outStatistics){t=e.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(e):await this._createStatisticsQueryResponse(e)}else t=this._createFeatureQueryResponse(e);return e.returnQueryGeometry&&(o(e.outSR)&&!l(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=w({spatialReference:e.outSR,...A(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR)}):t.queryGeometry=w({spatialReference:e.outSR,...this.queryGeometry})),t}createSnappingResponse(t,s){const i=this.featureAdapter,a=(r=this.hasZ,n=this.hasM,r?n?4:3:n?3:2);var r,n;const{x:o,y:l}=t.point,u="number"==typeof t.distance?t.distance:t.distance.x,c="number"==typeof t.distance?t.distance:t.distance.y,d={candidates:[]},h="esriGeometryPolygon"===this.geometryType,m=this._getPointCreator(t.point,this.spatialReference,s);for(const s of this.items){const r=i.getGeometry(s);if(e(r))continue;const{coords:n,lengths:f}=r;if(t.types&U.EDGE){let e=0;for(let t=0;t<f.length;t++){const r=f[t];for(let t=0;t<r;t++,e+=a){const h=n[e],f=n[e+1];if(t!==r-1){const t=n[e+a],r=n[e+a+1],{x:g,y:p}=B(o,l,h,f,t,r),y=(o-g)/u,I=(l-p)/c,x=y*y+I*I;x<=1&&d.candidates.push({type:"edge",objectId:i.getObjectId(s),distance:Math.sqrt(x),target:m(g,p),start:m(h,f),end:m(t,r)})}}}}if(t.types&U.VERTEX){const e=h?n.length-a:n.length;for(let t=0;t<e;t+=a){const e=n[t],a=n[t+1],r=(o-e)/u,h=(l-a)/c,f=r*r+h*h;f<=1&&d.candidates.push({type:"vertex",objectId:i.getObjectId(s),distance:Math.sqrt(f),target:m(e,a)})}}}return d.candidates.sort(((e,t)=>e.distance-t.distance)),d}_getPointCreator(e,s,i){const a=t(i)&&!l(s,i)?e=>A(e,s,i):e=>e;return null!=e.z&&null!=e.m?(t,s)=>a({x:t,y:s,z:e.z,m:e.m}):null!=e.z?(t,s)=>a({x:t,y:s,z:e.z}):null!=e.m?(t,s)=>a({x:t,y:s,m:e.m}):(e,t)=>a({x:e,y:t})}executeAttributesQuery(e){const t=P(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let s=0;const i=[];for(const e of this.items)t.testFeature(e,this.featureAdapter)&&(i[s++]=e);const a=new L(i,this.queryGeometry,this);return a.definitionExpression=e.where,Promise.resolve(a)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(t){if(!t.aggregateIds||!t.aggregateIds.length||e(this.aggregateAdapter))return Promise.resolve(this);const s=new Set;for(const e of t.aggregateIds){this.aggregateAdapter.getFeatureObjectIds(e).forEach((e=>s.add(e)))}const i=this.featureAdapter.getObjectId;return Promise.resolve(new L(this.items.filter((e=>s.has(i(e)))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),s=this.featureAdapter.getObjectId;return Promise.resolve(new L(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeTimeQuery(e){const s=z(this.timeInfo,e.timeExtent,this.featureAdapter);if(!t(s))return Promise.resolve(this);const i=this.items.filter(s);return Promise.resolve(new L(i,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:s}=this.timeInfo,i=s||t,a=new Map,r=this.featureAdapter.getAttribute;for(const t of this.items){const s=r(t,e),n=r(t,i),o=a.get(s);(!o||n>r(o,i))&&a.set(s,t)}const n=Array.from(a.values());return Promise.resolve(new L(n,this.queryGeometry,this))}async project(e){if(!e||l(this.spatialReference,e))return this;const t=this.featureAdapter,s=(await b(this.items.map((e=>S(this.geometryType,this.hasZ,this.hasM,t.getGeometry(e)))),this.spatialReference,e)).map(((e,s)=>t.cloneWithGeometry(this.items[s],u(e,this.hasZ,this.hasM))));return new L(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:n,minValue:o,maxValue:l,scale:u}=t,c=this.fieldsIndex.isDateField(s),d=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:n,scale:u}),h=f({normalizationType:r,normalizationField:a,minValue:o,maxValue:l}),m=this.fieldsIndex.get(s),I={value:.5,fieldType:null==m?void 0:m.type},x=D(m)?g({values:d,supportsNullCount:h,percentileParams:I}):p({values:d,minValue:o,maxValue:l,useSampleStdDev:!r,supportsNullCount:h,percentileParams:I});return y(x,c)}async createUniqueValuesResponse(e,t){const{field:s,valueExpression:i,domain:a,returnAllCodedValues:r,scale:n}=t,o=await this._getDataValues(e,{field:s,valueExpression:i,scale:n}),l=I(o);return x(l,a,r)}async createClassBreaksResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:d,scale:h}=t,m=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:n,scale:h}),f=F(m,{field:s,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:d});return v(f,o)}async createHistogramResponse(e,t){const{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:d,scale:h}=t,m=await this._getDataValues(e,{field:s,valueExpression:i,normalizationField:a,normalizationType:r,normalizationTotal:n,scale:h});return T(m,{field:s,normalizationField:a,normalizationType:r,normalizationTotal:n,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:d})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const t=i.split(" "),a=t[0],r=this.fieldsIndex.get(a),n=t[1]&&"desc"===t[1].toLowerCase(),o=_(null==r?void 0:r.type,n);e.sort(((e,t)=>{const i=s(e,a,r),n=s(t,a,r);return o(i,n)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:o}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:d,resultOffset:h,returnZ:m,returnM:f}=e,g=null!=d&&t.length>(h||0)+d,p=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:g,features:this._createFeatures(e,t),fields:p,geometryType:s,hasM:i&&f,hasZ:a&&m,objectIdFieldName:r,spatialReference:w(u||o),transform:c&&n(c)||null}}_createFeatures(e,t){const s=new Z(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:o,returnGeometry:l,returnCentroid:u,maxAllowableOffset:c,resultOffset:d,resultRecordCount:h,returnZ:m=!1,returnM:f=!1}=e,g=a&&m,p=i&&f;let y=[],I=0;const x=[...t];if(this._sortFeatures(x,r,((e,t,i)=>s.getFieldValue(e,t,i))),l||u){const e=n(o);if(l&&!u)for(const t of x)y[I++]={attributes:s.getAttributes(t),geometry:S(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),c,e,g,p)};else if(!l&&u)for(const t of x)y[I++]={attributes:s.getAttributes(t),centroid:E(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of x)y[I++]={attributes:s.getAttributes(t),centroid:E(this,this.featureAdapter.getCentroid(t,this),e),geometry:S(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),c,e,g,p)}}else for(const e of x){const t=s.getAttributes(e);t&&(y[I++]={attributes:t})}const F=d||0;if(null!=h){const e=F+h;y=y.slice(F,Math.min(y.length,e))}return y}_createExceedsLimitQueryResponse(e){let s=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY;for(const t of e.outStatistics)if("exceedslimit"===t.statisticType){i=null!=t.maxPointCount?t.maxPointCount:Number.POSITIVE_INFINITY,a=null!=t.maxRecordCount?t.maxRecordCount:Number.POSITIVE_INFINITY,r=null!=t.maxVertexCount?t.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)s=this.items.length>i;else if(this.items.length>a)s=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,i=this.featureAdapter;s=this.items.reduce(((e,s)=>{const a=i.getGeometry(s);return e+(t(a)&&a.coords.length||0)}),0)/e>r}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(s)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,n=new Map,o=new Z(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:c,orderByFields:d}=e,h=u&&u.length,m=!!h,f=m&&u[0],g=m&&!this.fieldsIndex.get(f);for(const e of l){const{outStatisticFieldName:l,statisticType:d}=e,p=e,y="exceedslimit"!==d?e.onStatisticField:void 0,I="percentile_disc"===d||"percentile_cont"===d,x="EnvelopeAggregate"===d||"CentroidAggregate"===d||"ConvexHullAggregate"===d,F=m&&1===h&&(y===f||g)&&"count"===d;if(m){if(!r.has(y)){const e=[];for(const t of u){const s=this._getAttributeValues(o,t,i);e.push(s)}r.set(y,this._calculateUniqueValues(e,o.returnDistinctValues))}const e=r.get(y);for(const t in e){const{count:s,data:a,items:r,itemPositions:d}=e[t],h=a.join(",");if(!c||o.validateItems(r,c)){const e=n.get(h)||{attributes:{}};if(x){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:t,outStatisticFieldName:s}=await this._getAggregateGeometry(p,r);e.aggregateGeometries[s]=t}else{let t=null;if(F)t=s;else{const e=this._getAttributeValues(o,y,i),s=d.map((t=>e[t]));t=I&&"statisticParameters"in p?this._getPercentileValue(p,s):this._getStatisticValue(p,s,null,o.returnDistinctValues)}e.attributes[l]=t}u.forEach(((t,s)=>e.attributes[this.fieldsIndex.get(t)?t:`EXPR_${s+1}`]=a[s])),n.set(h,e)}}}else if(x){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:s}=await this._getAggregateGeometry(p,this.items);t.aggregateGeometries[s]=e}else{const e=this._getAttributeValues(o,y,i);t.attributes[l]=I&&"statisticParameters"in p?this._getPercentileValue(p,e):this._getStatisticValue(p,e,a,o.returnDistinctValues)}s.push({name:l,alias:l,type:"esriFieldTypeDouble"})}const p=m?Array.from(n.values()):[t];return this._sortFeatures(p,d,((e,t)=>e.attributes[t])),{fields:s,features:p}}async _getAggregateGeometry(e,t){const n=await import("./geometryEngineJSON.js").then((e=>e.g)),{statisticType:o,outStatisticFieldName:l}=e,{featureAdapter:u,spatialReference:c,geometryType:d,hasZ:h,hasM:m}=this,f=t.map((e=>S(d,h,m,u.getGeometry(e)))),g=n.convexHull(c,f,!0)[0],p={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===o){const e=g?a(g):r(n.union(c,f));p.aggregateGeometries={...e,spatialReference:c},p.outStatisticFieldName=l||"extent"}else if("CentroidAggregate"===o){const e=g?s(g):i(r(n.union(c,f)));p.aggregateGeometries={x:e[0],y:e[1],spatialReference:c},p.outStatisticFieldName=l||"centroid"}else"ConvexHullAggregate"===o&&(p.aggregateGeometries=g,p.outStatisticFieldName=l||"convexHull");return p}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let n=null;n=null!=s&&s.has(a)?s.get(a):D(this.fieldsIndex.get(a))?g({values:t,returnDistinct:i}):p({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,n);return n["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:n}=i,o=this.fieldsIndex.get(s),l={value:r,orderBy:n,fieldType:null==o?void 0:o.type,isDiscrete:"percentile_disc"===a};return V(t,l)}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map((s=>e.getFieldValue(s,t,i)));return s.set(t,a),a}_getAttributeNormalizedValues(e,t){return this.items.map((s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await C(),a=i.createFunction(t),r=s&&i.getViewInfo(s);return this.items.map((t=>e.getExpressionValue(t,{compiledFunc:a,viewInfo:r},i)))}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const a=i[r],n=[];for(const t of e)n.push(t[r]);const o=n.join(",");t?null==s[o]&&(s[o]={count:1,data:n,items:[a],itemPositions:[r]}):null==s[o]?s[o]={count:1,data:n,items:[a],itemPositions:[r]}:(s[o].count++,s[o].items.push(a),s[o].itemPositions.push(r))}return s}async _getDataValues(e,t){const s=new Z(e,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:a,normalizationField:r,normalizationType:n,normalizationTotal:o,scale:l}=t,u=i?{viewingMode:"map",scale:l,spatialReference:e.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(s,i,u):this._getAttributeNormalizedValues(s,{field:a,normalizationField:r,normalizationType:n,normalizationTotal:o})}}function B(e,t,s,i,a,r){const n=a-s,o=r-i,l=n*n+o*o,u=(e-s)*n+(t-i)*o,c=Math.min(1,Math.max(0,u/l));return{x:s+n*c,y:i+o*c}}var U;!function(e){e[e.NONE=0]="NONE",e[e.EDGE=1]="EDGE",e[e.VERTEX=2]="VERTEX"}(U||(U={}));export{L as Q,U as S,G as a,M as b,Q as h,q as v};
