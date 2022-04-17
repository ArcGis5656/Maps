/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import e from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import s from"../../core/Error.js";import{i}from"../../core/lang.js";import{t as o}from"../../chunks/screenUtils.js";import{f as r}from"../../chunks/messages.js";import{substitute as t}from"../../intl.js";import a from"../../renderers/support/AuthoringInfo.js";import n from"../../renderers/support/AuthoringInfoVisualVariable.js";import{s as l}from"../../chunks/utils10.js";import p from"../../renderers/visualVariables/SizeVariable.js";import{a as m}from"../../chunks/ageUnit.js";import{g as u,a as c,o as d,f as y,u as b,v as h,k as j,m as f,p as w,n as v,r as g,q as k}from"../../chunks/utils11.js";import S from"../heuristics/sizeRange.js";import{getAgeExpressions as z,verifyDates as x,supportedAgeUnits as T}from"../statistics/support/ageUtils.js";import{a as V,b as E}from"../../chunks/utils7.js";import{c as U,f as I,g as D}from"../../chunks/layerUtils2.js";import{cloneScheme as O,getSchemes as C}from"../symbology/size.js";import"../../chunks/tslib.es6.js";import"../../symbols.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../symbols/CIMSymbol.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils2.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../chunks/assets.js";import"../../chunks/numberUtils.js";import"../statistics/summaryStatisticsForAge.js";import"../statistics/summaryStatistics.js";import"../../chunks/statsWorker.js";import"../../chunks/utils8.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../core/watchUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/predominanceUtils.js";import"../../chunks/heatmapUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/executeForTopCount.js";import"../../chunks/utils3.js";import"../../chunks/scaleUtils.js";import"../../chunks/floorFilterUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/AttachmentQuery.js";import"../../chunks/featureConversionUtils.js";import"../../rest/support/FeatureSet.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/executeQueryJSON.js";import"../../tasks/Task.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils12.js";function F(e){const s={...e},i=s.symbolType.indexOf("3d-volumetric")>-1,o=s;return o.worldScale=i,i&&(o.axis="3d-volumetric-uniform"===s.symbolType?"all":"height"),delete s.symbolType,delete s.defaultSymbolEnabled,o}async function M(e){let s=e.sizeScheme,o=null,r=null;const t=await k(e.basemap,e.view);if(o=i(t.basemapId)?t.basemapId:null,r=i(t.basemapTheme)?t.basemapTheme:null,s)return{scheme:O(s),basemapId:o,basemapTheme:r};const a=C({basemap:o,basemapTheme:r,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});return a&&(s=a.primaryScheme,o=a.basemapId,r=a.basemapTheme),{scheme:s,basemapId:o,basemapTheme:r}}function R(e,s){let i;switch(s){case"point":case"multipoint":{const s=e;i=[s.minSize,s.maxSize];break}case"polyline":{const s=e;i=[s.minWidth,s.maxWidth];break}case"polygon":{const s=e;i=[s.marker.minSize,s.marker.maxSize];break}}return i}async function P(s,i,o,t,a){const n=await r("esri/smartMapping/t9n/smartMapping"),l=a.layer,p=a.field,m=l.geometryType,u=a.defaultSymbolEnabled,c=O(s.sizeScheme),d="polygon"===m,y=d?c.marker:c,b=d?c.background:null,h=d?"point":m,j=i&&i.opacity,g=s.visualVariables.map((e=>e.clone()));i&&i.visualVariables&&i.visualVariables.length&&g.push(...i.visualVariables.map((e=>e.clone())));return{renderer:new e({backgroundFillSymbol:b&&f(m,{type:a.symbolType,color:b.color,outline:w(b,m,j)}),classBreakInfos:[{minValue:-9007199254740991,maxValue:9007199254740991,symbol:f(h,{type:a.symbolType,color:y.color,size:v(y,h),outline:w(y,h,j)})}],defaultLabel:u?n.other:null,defaultSymbol:u?f(h,{type:a.symbolType,color:y.noDataColor,size:v(y,h,!0),outline:w(y,h,j)}):null,field:p,normalizationField:t,normalizationType:o,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,visualVariables:g,authoringInfo:s.authoringInfo&&s.authoringInfo.clone()}),visualVariables:s.visualVariables.map((e=>e.clone())),statistics:s.statistics,defaultValuesUsed:s.defaultValuesUsed,sizeScheme:O(s.sizeScheme),basemapId:s.basemapId,basemapTheme:s.basemapTheme}}async function q(s,i){const t=await r("esri/smartMapping/t9n/smartMapping"),n=s.layer,p=s.defaultSymbolEnabled,m=n.geometryType,u="polygon"===m,c=s.symbolType.indexOf("3d-volumetric")>-1,d=await M({basemap:s.basemap,geometryType:m,sizeScheme:s.sizeScheme,worldScale:c,view:s.view}),y=d.scheme,{result:b,outlineResult:h}=i,j=b.classBreakInfos,k=s.classificationMethod,S=s.normalizationType,z=u?y.marker:y,x=u?y.background:null,T=u?"point":m,V=R(z,T),E=c&&g({minSize:V[0],maxSize:V[1]},"height"),U=function(e,s){const i=o(e.minSize),r=(o(e.maxSize)-i)/(s>=4?s-1:s),t=[];for(let e=0;e<s;e++)t.push(i+r*e);return t}({minSize:V[0],maxSize:c?E.maxSize:V[1]},j.length),I=h&&h.opacity,D=new e({backgroundFillSymbol:x&&f(m,{type:s.symbolType,color:x.color,outline:w(x,m,I)}),classBreakInfos:j.map(((e,i)=>({minValue:e.minValue,maxValue:e.maxValue,symbol:f(T,{type:s.symbolType,color:z.color,size:U[i],widthAndDepth:E&&E.minSize,outline:w(z,T,I)}),label:e.label}))),defaultLabel:p?t.other:null,defaultSymbol:p?f(T,{type:s.symbolType,color:z.noDataColor,size:v(z,T,!0),widthAndDepth:E&&E.minSize,outline:w(z,T,I)}):null,field:s.field,valueExpression:s.valueExpression,valueExpressionTitle:s.valueExpressionTitle,normalizationType:S,normalizationField:s.normalizationField,normalizationTotal:"percent-of-total"===S?b.normalizationTotal:void 0,legendOptions:s.legendOptions,authoringInfo:new a({type:"class-breaks-size",classificationMethod:k,standardDeviationInterval:s.standardDeviationInterval})});return"standard-deviation"!==k&&l({classBreakInfos:D.classBreakInfos,classificationMethod:k,normalizationType:S,round:!0}),h&&h.visualVariables&&h.visualVariables.length&&(D.visualVariables=h.visualVariables.map((e=>e.clone()))),{renderer:D,sizeScheme:O(y),classBreaksResult:b,defaultValuesUsed:i.defaultValuesUsed,basemapId:d.basemapId,basemapTheme:d.basemapTheme}}async function L(e){const o=await async function(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};if("90-10"===o.theme)throw new s("size-visual-variable:not-supported","Only 'high-to-low', 'above', 'below' themes are supported.");const r=U(o.layer,I);if(o.layer=r,!r)throw new s("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+D(I).join(", "));"height"===o.axis&&(o.sizeOptimizationEnabled=!1);const t=i(o.signal)?{signal:o.signal}:null;await r.load(t);const a=r.geometryType;if("mesh"===a)throw new s("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(o.worldScale){if("polyline"===a||"polygon"===a)throw new s("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers");if(!o.view||"3d"!==o.view.type)throw new s("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true")}const n=await V({field:o.field,normalizationField:o.normalizationField,valueExpression:o.valueExpression}),l=h(r,n,"size-visual-variable:invalid-parameters");if(l)throw l;return o}(e),{view:r,field:t,valueExpression:l,minValue:m,maxValue:d,layer:y,normalizationField:b,signal:f,statistics:w}=o,v=b?"field":void 0,[k,z,x]=await Promise.all([w||u({layer:y,field:t,valueExpression:l,sqlExpression:o.sqlExpression,sqlWhere:o.sqlWhere,normalizationType:v,normalizationField:b,minValue:m,maxValue:d,view:r,signal:f}),"90-10"===o.theme?c({layer:y,field:t,normalizationField:b,valueExpression:l,classificationMethod:"quantile",minValue:m,maxValue:d,view:r,numClasses:10,signal:f}):null,o.sizeOptimizationEnabled?S({view:r,layer:y,signal:f}):null]);return async function(e,i,o,r){const{theme:t,field:l,normalizationField:m,minValue:u,maxValue:c,axis:d}=e,y=e.layer,b=l&&"function"!=typeof l?y.getField(l):null,h=b&&"date"===b.type,f=y.geometryType,w=await M({basemap:e.basemap,geometryType:f,sizeScheme:e.sizeScheme,worldScale:e.worldScale,view:e.view}),v=w.scheme;if(!v)throw new s("size-visual-variable:insufficient-info","Unable to find size scheme");const k=r&&[r.minSize,r.maxSize]||R(v,f),{minDataValue:S,maxDataValue:z,defaultValuesUsed:x}=j(i,o,t,h,"above"===t||"below"===t),T=[],V="height"===d,E=V?d:void 0,U=k[0];let I=k[1];if(V&&"number"==typeof U&&"number"==typeof I){const e=g({minSize:U,maxSize:I},E);T.push(new p({axis:"width-and-depth",minSize:e.minSize})),I=e.maxSize}const D=new p({field:l,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,valueUnit:"unknown",normalizationField:m,axis:E,minSize:U,maxSize:I,minDataValue:S,maxDataValue:z,legendOptions:e.legendOptions});!function(e,s){"clamped-linear"===e.transformationType&&"below"===s&&e.flipSizes()}(D,t),T.unshift(D);const C=new n({type:"size",theme:t,minSliderValue:null!=u?u:i.min,maxSliderValue:null!=c?c:i.max}),F=new a({visualVariables:[C]});return{basemapId:w.basemapId,basemapTheme:w.basemapTheme,visualVariables:T,statistics:i,defaultValuesUsed:x,sizeScheme:O(v),authoringInfo:F}}(o,k,null==z?void 0:z.result,x)}async function A(e){const o=await async function(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled;const r=U(o.layer,I);if(o.layer=r,!r)throw new s("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+D(I).join(", "));const t=i(o.signal)?{signal:o.signal}:null;await r.load(t);const a=r.geometryType,n=o.symbolType.indexOf("3d")>-1;if(o.outlineOptimizationEnabled="polygon"===a&&o.outlineOptimizationEnabled,"mesh"===a)throw new s("size-continuous-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(n&&("polyline"===a||"polygon"===a))throw new s("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(o.symbolType.indexOf("3d-volumetric")>-1&&(!o.view||"3d"!==o.view.type))throw new s("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");const l=await V({field:o.field,normalizationField:o.normalizationField,valueExpression:o.valueExpression}),p=h(r,l,"size-continuous-renderer:invalid-parameters");if(p)throw p;return o}(e),r={layer:o.layer,view:o.view,signal:o.signal},[t,a]=await Promise.all([L(F(o)),o.outlineOptimizationEnabled?d(r):null]),n=o.normalizationField;return P(t,a,n?"field":void 0,n,o)}async function B(e){const o=await async function(e){if(!e||!e.layer||!e.field&&!e.valueExpression)throw new s("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new s("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");const o={...e};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled,o.classificationMethod=o.classificationMethod||"equal-interval",o.normalizationType=E(o);const r=U(o.layer,I);if(o.layer=r,!r)throw new s("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+D(I).join(", "));if(!(null!=o.minValue&&null!=o.maxValue||null==o.minValue&&null==o.maxValue))throw new s("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");const t=i(o.signal)?{signal:o.signal}:null;await r.load(t);const a=r.geometryType,n=o.symbolType.indexOf("3d")>-1;if(o.outlineOptimizationEnabled="polygon"===a&&o.outlineOptimizationEnabled,"mesh"===a)throw new s("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(n&&("polyline"===a||"polygon"===a))throw new s("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(o.symbolType.indexOf("3d-volumetric")>-1&&(!o.view||"3d"!==o.view.type))throw new s("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");const l=await V({field:o.field,normalizationField:o.normalizationField}),p=h(r,l,"size-class-breaks-renderer:invalid-parameters");if(p)throw p;return o}(e),r=await c(function(e){const s={...e};delete s.basemap,delete s.sizeScheme,delete s.legendOptions,delete s.symbolType,delete s.defaultSymbolEnabled;const i=s;return i.analyzeData=!(null!=s.minValue&&null!=s.maxValue),i}(o),o.outlineOptimizationEnabled);return q(o,r)}async function Q(e){const o=await async function(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new s("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required");const o={...e};o.symbolType=o.symbolType||"2d",o.defaultSymbolEnabled=null==o.defaultSymbolEnabled||o.defaultSymbolEnabled;const r=U(o.layer,I);if(o.layer=r,!r)throw new s("size-age-renderer:invalid-parameters","'layer' must be one of these types: "+D(I).join(", "));const t=i(o.signal)?{signal:o.signal}:null;await r.load(t);const a=r.geometryType,n=o.symbolType.indexOf("3d")>-1;if(o.outlineOptimizationEnabled="polygon"===a&&o.outlineOptimizationEnabled,"mesh"===a)throw new s("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(n&&("polyline"===a||"polygon"===a))throw new s("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(o.symbolType.indexOf("3d-volumetric")>-1&&(!o.view||"3d"!==o.view.type))throw new s("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");const l=x(r,o.startTime,o.endTime,"size-age-renderer:invalid-parameters");if(l)throw l;if(o.unit&&-1===T.indexOf(o.unit))throw new s("size-age-renderer:invalid-unit",`Supported units are: ${T.join(", ")}`);return o}(e),{defaultSymbolEnabled:a,view:n,startTime:l,endTime:p,symbolType:u,minValue:c,maxValue:h,signal:j}=o,f=o.layer,w={layer:o.layer,view:o.view,signal:j},[v,g]=await Promise.all([o.unit?{unit:o.unit,statistics:null,valueExpression:null}:await m({view:n,layer:f,startTime:l,endTime:p,minValue:c,maxValue:h,signal:j}),o.outlineOptimizationEnabled?d(w):null]),{unit:k,statistics:S}=v,V=z({layer:f,startTime:l,endTime:p,unit:k}).valueExpression,E=await r("esri/smartMapping/t9n/smartMapping"),O=t(E[`ageInfo_${k}`],{unit:k,startTime:y(l,k,f),endTime:y(p,k,f)}),C=await L(F({layer:f,basemap:o.basemap,valueExpression:V,symbolType:u,statistics:S,legendOptions:{title:O},theme:o.theme,sizeScheme:o.sizeScheme,sizeOptimizationEnabled:o.sizeOptimizationEnabled,view:o.view,minValue:c,maxValue:h,signal:j})),M={layer:f,valueExpression:V,defaultSymbolEnabled:a,symbolType:u},R=await P(C,g,null,null,M);return R.renderer.authoringInfo.visualVariables.forEach((e=>b(e,l,p,k))),{...R,unit:k}}export{Q as createAgeRenderer,B as createClassBreaksRenderer,A as createContinuousRenderer,L as createVisualVariables};
