// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../renderers/PointCloudClassBreaksRenderer ../../renderers/PointCloudRenderer ../../renderers/PointCloudRGBRenderer ../../renderers/PointCloudStretchRenderer ../../renderers/PointCloudUniqueValueRenderer ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Error ../../core/maybe ../../intl/messages ../../intl/substitute ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/utils ../../renderers/visualVariables/ColorVariable ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ./support/utils ../statistics/support/ageUtils ../support/utils ../support/adapters/support/layerUtils ../../chunks/color".split(" "),
function(y,q,ya,za,ea,fa,Aa,V,Ba,Ca,Da,Ea,Fa,Ga,Ha,l,w,E,ha,W,ia,X,ja,ka,Y,Z,d,B,C,m,x){function la(a){return F.apply(this,arguments)}function F(){F=q._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new l("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new l("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");
a={...a};if("90-10"===a.theme)throw new l("color-visual-variable:not-supported","Only 'high-to-low', 'above-and-below', 'centered-on', 'extremes', 'above', 'below' themes are supported.");var b=m.createLayerAdapter(a.layer,m.featureCapableLayerTypes);a.layer=b;if(!b)throw new l("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(m.featureCapableLayerTypes).join(", "));var c=w.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);if("mesh"!==b.geometryType&&
a.worldScale&&(!a.view||"3d"!==a.view.type))return Promise.reject(d.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"));c=yield C.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(b=d.verifyBasicFieldValidity(b,c,"color-visual-variable:invalid-parameters"))throw b;return a});return F.apply(this,arguments)}function ma(a){return G.apply(this,arguments)}
function G(){G=q._asyncToGenerator(function*(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new l("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new l("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?
!0:a.defaultSymbolEnabled;var b=m.createLayerAdapter(a.layer,m.featureCapableLayerTypes);a.layer=b;if(!b)throw new l("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(m.featureCapableLayerTypes).join(", "));var c=w.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;a.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?a.sizeOptimizationEnabled:
!1;if("mesh"===c)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===a.symbolType&&"point"!==c)throw new l("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new l("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
}c=yield C.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression});if(b=d.verifyBasicFieldValidity(b,c,"color-continuous-renderer:invalid-parameters"))throw b;return a});return G.apply(this,arguments)}function na(a){return H.apply(this,arguments)}function H(){H=q._asyncToGenerator(function*(a){if(!a||!a.layer||!a.field&&!a.valueExpression)throw new l("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");
if(a.valueExpression&&!a.view)throw new l("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.classificationMethod=a.classificationMethod||"equal-interval";a.normalizationType=C.getNormalizationType(a);var b=m.createLayerAdapter(a.layer,m.featureCapableLayerTypes);a.layer=b;if(!b)throw new l("color-class-breaks-renderer:invalid-parameters",
"'layer' must be one of these types: "+m.getLayerTypeLabels(m.featureCapableLayerTypes).join(", "));if(!(null!=a.minValue&&null!=a.maxValue||null==a.minValue&&null==a.maxValue))throw new l("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");var c=w.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;if("mesh"===c)a.symbolType=
"3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===a.symbolType&&"point"!==c)throw new l("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new l("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
}c=yield C.getFieldsList({field:a.field,normalizationField:a.normalizationField});if(b=d.verifyBasicFieldValidity(b,c,"color-class-breaks-renderer:invalid-parameters"))throw b;return a});return H.apply(this,arguments)}function oa(a){a={...a};delete a.basemap;delete a.colorScheme;delete a.legendOptions;delete a.symbolType;delete a.defaultSymbolEnabled;delete a.colorMixMode;delete a.edgesType;a.analyzeData=!(null!=a.minValue&&null!=a.maxValue);return a}function pa(a){if(!a||!a.layer)return Promise.reject(d.createError("color-point-cloud-true-color-renderer:missing-parameters",
"'layer' parameter is required"));const b={...a};var c=[m.LayerType.PointCloudLayer];a=m.createLayerAdapter(b.layer,c);b.layer=a;b.density=b.density||25;b.size=b.size||"100%";if(!d.isValidPointSize(b.size))return Promise.reject(d.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));if(!a)return Promise.reject(d.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+
m.getLayerTypeLabels(c).join(", ")));c=w.isSome(b.signal)?{signal:b.signal}:null;return a.load(c).then(()=>b)}function qa(a){if(!(a&&a.layer&&a.field))return Promise.reject(d.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var b=a.field.toLowerCase();if("intensity"!==b&&"elevation"!==b)return Promise.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));
const c={...a};b=[m.LayerType.PointCloudLayer];a=m.createLayerAdapter(c.layer,b);c.layer=a;c.density=c.density||25;c.size=c.size||"100%";if(!d.isValidPointSize(c.size))return Promise.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));if(!a)return Promise.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(b).join(", ")));
b=w.isSome(c.signal)?{signal:c.signal}:null;return a.load(b).then(()=>c)}function aa(a){a={...a};const b=-1<a.symbolType.indexOf("3d-volumetric");delete a.symbolType;delete a.defaultSymbolEnabled;delete a.colorMixMode;delete a.edgesType;a.worldScale=b;return a}function ra(a){return I.apply(this,arguments)}function I(){I=q._asyncToGenerator(function*(a){if(!(a&&a.layer&&a.view&&a.startTime&&a.endTime))throw new l("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");
a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;var b=m.createLayerAdapter(a.layer,m.featureCapableLayerTypes);a.layer=b;if(!b)throw new l("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(m.featureCapableLayerTypes).join(", "));var c=w.isSome(a.signal)?{signal:a.signal}:null;yield b.load(c);c=b.geometryType;a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:
!1;a.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?a.sizeOptimizationEnabled:!1;if("mesh"===c)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else if("3d-volumetric-uniform"===a.symbolType&&"point"!==c)throw new l("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new l("color-age-renderer:invalid-parameters",
"'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");if(b=B.verifyDates(b,a.startTime,a.endTime,"color-age-renderer:invalid-parameters"))throw b;if(a.unit&&-1===B.supportedAgeUnits.indexOf(a.unit))throw new l("color-age-renderer:invalid-unit",`Supported units are: ${B.supportedAgeUnits.join(", ")}`);return a});return I.apply(this,arguments)}function J(a,b){return K.apply(this,arguments)}function K(){K=q._asyncToGenerator(function*(a,
b){let c=a.colorScheme,f=null;var e=null;e=yield d.getBasemapInfo(a.basemap,a.view);f=w.isSome(e.basemapId)?e.basemapId:null;e=w.isSome(e.basemapTheme)?e.basemapTheme:null;if(c)return{scheme:x.cloneScheme(c),basemapId:f,basemapTheme:e};b=b||a.theme||"high-to-low";const g=x.getSchemes({theme:b,basemap:f,basemapTheme:e,geometryType:a.geometryType,worldScale:a.worldScale,view:a.view});g&&(f=g.basemapId,e=g.basemapTheme,c=a.schemeId?x.getSchemeById({id:b+"/"+f+"/"+a.schemeId,geometryType:a.geometryType}):
g.primaryScheme);return{scheme:c,basemapId:f,basemapTheme:e}});return K.apply(this,arguments)}function sa(a,b){return L.apply(this,arguments)}function L(){L=q._asyncToGenerator(function*(a,b){b=yield J({basemap:b.basemap,colorScheme:b.colorScheme,geometryType:b.layer.geometryType,schemeId:"elevation"===b.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"});const c=b.scheme;if(!c)throw d.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");
const f=d.createColors(c.colors,5);if(5>f.length)throw d.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");const e=d.getDefaultDataRange(a,!1,!0),g=e?d.createDefaultStopValues(e[0],e[1],5):d.createStopValues(a);return{stops:X.createColorStops({values:g,isDate:!1,dateFormatOptions:null,colors:f,labelIndexes:[0,2,4]}),basemapId:b.basemapId,basemapTheme:b.basemapTheme,statistics:a,defaultValuesUsed:!!e,colorScheme:x.cloneScheme(c)}});return L.apply(this,
arguments)}function ta(a,b,c){return M.apply(this,arguments)}function M(){M=q._asyncToGenerator(function*(a,b,c){var f=a.layer;const {field:e,theme:g}=a;var k=e&&"function"!==typeof e?f.getField(e):null,n=k&&"date"===k.type;f=yield J({basemap:a.basemap,theme:a.theme,geometryType:f.geometryType,colorScheme:a.colorScheme,worldScale:a.worldScale,view:a.view});k=f.scheme;if(!k)throw d.createError("color-visual-variable:insufficient-info","Unable to find color scheme");var h=d.createColors(k.colors,5);
if(5>h.length)throw d.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors");const t=-1<k.id.indexOf("seq-");c=d.getDataRange(b,c,g,n,"90-10"!==g);n=d.createDataValues(c,b,g,t);const p=d.createColors(h,5);h=new ja({field:e,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationField:a.normalizationField,stops:n.map((u,r)=>({value:u,color:p[r]})),legendOptions:a.legendOptions});a=new ia({type:"color",minSliderValue:null!=
a.minValue?a.minValue:b.min,maxSliderValue:null!=a.maxValue?a.maxValue:b.max,theme:k.theme});a=new W({visualVariables:[a]});return{basemapId:f.basemapId,basemapTheme:f.basemapTheme,visualVariable:h,statistics:b,defaultValuesUsed:c.defaultValuesUsed,colorScheme:x.cloneScheme(k),authoringInfo:a}});return M.apply(this,arguments)}function ba(a,b,c,f,e,g){return N.apply(this,arguments)}function N(){N=q._asyncToGenerator(function*(a,b,c,f,e,g){const k=yield E.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),
n=g.field,h=g.layer.geometryType,t=g.defaultSymbolEnabled,p=x.cloneScheme(a.colorScheme),u=b&&b.opacity,r=[a.visualVariable.clone()];b&&b.visualVariables&&b.visualVariables.length&&r.push(...b.visualVariables.map(z=>z.clone()));c&&c.minSize&&r.push(c.minSize);return{renderer:new V({classBreakInfos:[{minValue:-ca,maxValue:ca,symbol:d.createSymbol(h,{type:g.symbolType,color:p.noDataColor,size:d.getSymbolSizeFromScheme(p,h),outline:d.getSymbolOutlineFromScheme(p,h,u),meshInfo:{colorMixMode:g.colorMixMode,
edgesType:g.edgesType}})}],defaultLabel:t?k.other:null,defaultSymbol:t?d.createSymbol(h,{type:g.symbolType,color:p.noDataColor,size:d.getSymbolSizeFromScheme(p,h),outline:d.getSymbolOutlineFromScheme(p,h,u),meshInfo:{colorMixMode:g.colorMixMode,edgesType:g.edgesType}}):null,field:n,normalizationType:f,normalizationField:e,valueExpression:g.valueExpression,valueExpressionTitle:g.valueExpressionTitle,visualVariables:r,authoringInfo:a.authoringInfo&&a.authoringInfo.clone()}),visualVariable:a.visualVariable.clone(),
statistics:a.statistics,defaultValuesUsed:a.defaultValuesUsed,colorScheme:x.cloneScheme(a.colorScheme),basemapId:a.basemapId,basemapTheme:a.basemapTheme}});return N.apply(this,arguments)}function O(a){return P.apply(this,arguments)}function P(){P=q._asyncToGenerator(function*(a){a=yield la(a);const {view:b,field:c,valueExpression:f,minValue:e,maxValue:g,layer:k,normalizationField:n,signal:h,statistics:t}=a,[p,u]=yield Promise.all([t?t:d.getSummaryStatistics({layer:k,field:c,valueExpression:f,sqlExpression:a.sqlExpression,
sqlWhere:a.sqlWhere,normalizationType:n?"field":void 0,normalizationField:n,minValue:e,maxValue:g,view:b,signal:h}),"90-10"===a.theme?d.getClassBreaks({layer:k,field:c,normalizationField:n,valueExpression:f,classificationMethod:"quantile",minValue:e,maxValue:g,view:b,numClasses:10,signal:h}):null]);return ta(a,p,null==u?void 0:u.result)});return P.apply(this,arguments)}function ua(a,b){a=a.colorsForClassBreaks;let c;if(a&&0<a.length&&(a.some(e=>{e.numClasses===b&&(c=e.colors);return!!c}),!c)){var f=
a[a.length-1];a=b-f.numClasses;if(0<a){const e=f.colors[f.numClasses-1];c=f.colors.splice(0);for(f=1;f<=a;f++)c.push(e)}}c&&(c=d.createColors(c,c.length));return c}function va(a,b){return Q.apply(this,arguments)}function Q(){Q=q._asyncToGenerator(function*(a,b){var c=yield E.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const f=a.defaultSymbolEnabled,e=a.layer.geometryType,g=a.classificationMethod,k="standard-deviation"===g,n=yield J({basemap:a.basemap,geometryType:e,theme:k?"above-and-below":
null,colorScheme:a.colorScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view}),h=n.scheme,{result:t,outlineResult:p}=b,u=t.classBreakInfos,r=a.normalizationType;if(!h)throw new l("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");const z=ua(h,u.length);if(!z||z.length!==u.length)throw new l("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");const D=p&&p.opacity;c=new V({classBreakInfos:u.map((A,v)=>({minValue:A.minValue,
maxValue:A.maxValue,symbol:d.createSymbol(e,{type:a.symbolType,color:z[v],size:d.getSymbolSizeFromScheme(h,e),outline:d.getSymbolOutlineFromScheme(h,e,D),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}),label:A.label})),defaultLabel:f?c.other:null,defaultSymbol:f?d.createSymbol(e,{type:a.symbolType,color:h.noDataColor,size:d.getSymbolSizeFromScheme(h,e),outline:d.getSymbolOutlineFromScheme(h,e,D),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}):null,field:a.field,valueExpression:a.valueExpression,
valueExpressionTitle:a.valueExpressionTitle,normalizationType:r,normalizationField:a.normalizationField,normalizationTotal:"percent-of-total"===r?t.normalizationTotal:void 0,legendOptions:a.legendOptions,authoringInfo:new W({type:"class-breaks-color",classificationMethod:g,standardDeviationInterval:a.standardDeviationInterval})});k||X.setLabelsForClassBreaks({classBreakInfos:c.classBreakInfos,classificationMethod:g,normalizationType:r,round:!0});p&&p.visualVariables&&p.visualVariables.length&&(c.visualVariables=
p.visualVariables.map(A=>A.clone()));return{renderer:c,colorScheme:x.cloneScheme(h),classBreaksResult:t,defaultValuesUsed:b.defaultValuesUsed,basemapId:n.basemapId,basemapTheme:n.basemapTheme}});return Q.apply(this,arguments)}function R(){R=q._asyncToGenerator(function*(a){a=yield ma(a);const {layer:b,view:c,signal:f}=a,[e,g,k]=yield Promise.all([O(aa(a)),a.outlineOptimizationEnabled?Y({layer:b,view:c,signal:f}):null,a.sizeOptimizationEnabled?Z({layer:b,view:c,signal:f}):null]),n=a.normalizationField;
return ba(e,g,k,n?"field":void 0,n,a)});return R.apply(this,arguments)}function S(){S=q._asyncToGenerator(function*(a){a=yield na(a);const b=yield d.getClassBreaks(oa(a),a.outlineOptimizationEnabled);return va(a,b)});return S.apply(this,arguments)}function T(){T=q._asyncToGenerator(function*(a){a=yield qa(a);var b=a.statistics?a.statistics:yield d.getSummaryStatistics({layer:a.layer,field:a.field,signal:a.signal});b=yield sa(b,a);return{renderer:new fa({field:a.field,pointsPerInch:a.density,pointSizeAlgorithm:d.getPointSizeAlgorithm(a.size),
stops:b.stops}),basemapId:b.basemapId,basemapTheme:b.basemapTheme,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,colorScheme:b.colorScheme}});return T.apply(this,arguments)}function U(){U=q._asyncToGenerator(function*(a){var b=yield E.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const c=yield ra(a),{defaultSymbolEnabled:f,view:e,startTime:g,endTime:k,symbolType:n,colorMixMode:h,edgesType:t,minValue:p,maxValue:u,signal:r}=c;a=c.layer;const [z,D,A]=yield Promise.all([c.unit?
{unit:c.unit,statistics:null}:ka({view:e,layer:a,startTime:g,endTime:k,minValue:p,maxValue:u,signal:r}),c.outlineOptimizationEnabled?Y({layer:a,view:e,signal:r}):null,c.sizeOptimizationEnabled?Z({layer:a,view:e,signal:r}):null]),{unit:v,statistics:wa}=z,da=B.getAgeExpressions({layer:a,startTime:g,endTime:k,unit:v}).valueExpression;b=ha.substitute(b[`ageInfo_${v}`],{unit:v,startTime:d.formatDate(g,v,a),endTime:d.formatDate(k,v,a)});b=yield O(aa({layer:a,basemap:c.basemap,valueExpression:da,symbolType:n,
statistics:wa,legendOptions:{title:b},colorScheme:c.colorScheme,theme:c.theme,view:e,minValue:c.minValue,maxValue:c.maxValue,signal:r}));a=yield ba(b,D,A,null,null,{layer:a,valueExpression:da,defaultSymbolEnabled:f,symbolType:n,colorMixMode:h,edgesType:t});a.renderer.authoringInfo.visualVariables.forEach(xa=>d.updateAgeRendererAuthoringInfoVV(xa,g,k,v));return{...a,unit:v}});return U.apply(this,arguments)}const ca=2**53-1;y.createAgeRenderer=function(a){return U.apply(this,arguments)};y.createClassBreaksRenderer=
function(a){return S.apply(this,arguments)};y.createContinuousRenderer=function(a){return R.apply(this,arguments)};y.createPCContinuousRenderer=function(a){return T.apply(this,arguments)};y.createPCTrueColorRenderer=function(a){return pa(a).then(b=>({renderer:new ea({field:"RGB",pointsPerInch:b.density,pointSizeAlgorithm:d.getPointSizeAlgorithm(b.size)})}))};y.createVisualVariable=O;Object.defineProperty(y,"__esModule",{value:!0})});