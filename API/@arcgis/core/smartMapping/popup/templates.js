/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import n from"../../PopupTemplate.js";import{f as t}from"../../chunks/messages.js";import{h as r,a as o,b as s,e as i,c as a,g as p}from"../../chunks/utils12.js";import l from"../../popup/ExpressionInfo.js";import m from"../../popup/FieldInfo.js";import{getArcadeForOrderedFields as f,getArcadeForPredominantCategoryAlias as d,getArcadeForPredominantCategoryValue as u,getArcadeForStrengthOfPredominance as c,getArcadeForPredominanceMargin as y,getArcadeForSumOfFields as j}from"../statistics/support/predominanceUtils.js";import{substitute as I}from"../../intl.js";import{createPopupTemplate as h}from"../../support/popupUtils.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/tslib.es6.js";import"../../core/Collection.js";import"../../chunks/ArrayPool.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/shared.js";import"../../chunks/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../chunks/locale.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../chunks/chartMediaInfoUtils.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/TextContent.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../support/actions/ActionBase.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/utils13.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils3.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils4.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../chunks/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../chunks/Thumbnail.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/utils10.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/PortalItem.js";import"../../chunks/assets.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";async function b(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("class-breaks"!==o.type)throw new e("class-breaks-popup:invalid-parameters","renderer.type must be 'class-breaks'");return{layer:t,renderer:o}}async function g(e,t,r="divide"){const{fieldInfos:i,expressionInfos:a}=await o({renderer:e,layer:t,normFieldExpressionTemplate:r});return new n({content:await s(t,{fieldInfos:i,expressionInfos:a}),fieldInfos:i,expressionInfos:a})}async function x(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("dot-density"!==o.type)throw new e("dot-density-popup:invalid-parameters","renderer.type must be 'dot-density'");return{layer:t,renderer:o}}async function w(e,t){const{fieldInfos:r,expressionInfos:i}=await o({renderer:e,layer:t});return new n({content:await s(t,{fieldInfos:r,expressionInfos:i}),expressionInfos:i,fieldInfos:r})}async function k(e,t,r){const{fieldInfos:s,expressionInfos:a}=await o({renderer:e,layer:t}),p=s.filter((e=>-1===e.fieldName.indexOf(i))),d={fieldInfo:new m({fieldName:"expression/dot-density-categories-list"}),expressionInfo:new l({name:"dot-density-categories-list",title:r.listOfCategories,expression:f(p,a)})},u=new n({expressionInfos:[d.expressionInfo],fieldInfos:[d.fieldInfo],title:r.competingFields,content:`{${d.fieldInfo.fieldName}}`});return{name:"dot-density-categories-list",title:r.orderedListOfValues,value:u}}async function v(e,t,r){const{fieldInfos:s,expressionInfos:a}=await o({renderer:e,layer:t}),p=s.filter((e=>-1===e.fieldName.indexOf(i))),f={fieldInfo:new m({fieldName:"expression/dot-density-category"}),expressionInfo:new l({name:"dot-density-category",title:r.predominantCategory,expression:d(p,a)})},u=new n({expressionInfos:[f.expressionInfo,...a],fieldInfos:[f.fieldInfo,...s],content:[{type:"text",text:`<div><b><font size="3">{${f.fieldInfo.fieldName}}</font></b></div>`},{type:"media",mediaInfos:{type:"pie-chart",title:r.competingFields,value:{fields:s.map((e=>e.fieldName))}}}]});return{name:"dot-density-category-chart",title:r.predominantCategoryWithChart,value:u}}async function S(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("heatmap"!==o.type)throw new e("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return{layer:t,renderer:o}}function C(e,n){return e.legendOptions&&e.legendOptions.title?e.legendOptions.title:n.competingFields}function N(e,n){return{fieldInfo:new m({fieldName:"expression/predominant-category"}),expressionInfo:new l({name:"predominant-category",title:n.predominantCategory,expression:d(e)})}}function M(e,n){const t=e.map((e=>e.fieldName));return{fieldInfo:new m({fieldName:"expression/predominant-value",format:{digitSeparator:!0,places:1}}),expressionInfo:new l({name:"predominant-value",title:n.predominantCategoryValue,expression:u(t),returnType:"number"})}}function P(e,n){const t=e.map((e=>e.fieldName));return{fieldInfo:new m({fieldName:"expression/predominant-strength",format:{digitSeparator:!0,places:0}}),expressionInfo:new l({name:"predominant-strength",title:n.strengthOfPredominance,expression:c(t),returnType:"number"})}}function T(e,t){const r=N(e.fieldInfos,t),o=new n({expressionInfos:[r.expressionInfo],fieldInfos:[r.fieldInfo],content:I(t.predominantCategoryContent,{expression:`<b>{${r.fieldInfo.fieldName}}</b>`})});return{name:"predominant-category",title:t.predominantCategory,value:o}}function U(e,t){const{fieldInfos:r}=e,o=N(r,t),s=M(r,t),i=new n({expressionInfos:[s.expressionInfo,o.expressionInfo],fieldInfos:[s.fieldInfo,o.fieldInfo],content:I(t.predominantCategoryValueContent,{expression1:`<b>{${o.fieldInfo.fieldName}}</b>`,expression2:`<b>{${s.fieldInfo.fieldName}}</b>`})});return{name:"predominant-category-value",title:t.predominantCategoryValue,value:i}}function D(e,t){const{fieldInfos:r}=e,o=N(r,t),s=M(r,t),i=function(e,n){const t=e.map((e=>e.fieldName));return{fieldInfo:new m({fieldName:"expression/predominant-margin",format:{digitSeparator:!0,places:0}}),expressionInfo:new l({name:"predominant-margin",title:n.marginOfVictory,expression:y(t),returnType:"number"})}}(r,t),a=new n({expressionInfos:[s.expressionInfo,o.expressionInfo,i.expressionInfo],fieldInfos:[s.fieldInfo,o.fieldInfo,i.fieldInfo],title:I(t.mostCommon,{expression:"{expression/predominant-category}"}),content:I(t.predominantCategoryValueMarginContent,{expression1:`<b>{${o.fieldInfo.fieldName}}</b>`,expression2:`<b>{${s.fieldInfo.fieldName}}</b>`,expression3:`<b>{${i.fieldInfo.fieldName}}</b>`})});return{name:"predominant-category-value-margin",title:t.marginOfVictory,value:a}}function L(e,t){const{fieldInfos:r}=e,o=N(r,t),s=M(r,t),i=P(r,t),a=new n({expressionInfos:[s.expressionInfo,o.expressionInfo,i.expressionInfo],fieldInfos:[s.fieldInfo,o.fieldInfo,i.fieldInfo],content:I(t.predominantCategoryStrengthContent,{expression1:`{${s.fieldInfo.fieldName}}`,expression2:`<b>{${o.fieldInfo.fieldName}}</b>`,expression3:`<b>{${i.fieldInfo.fieldName}}%</b>`})});return{name:"predominant-category-strength",title:t.strengthOfPredominance,value:a}}function F(e,t){const{renderer:r,fieldInfos:o}=e,s=N(o,t),i=M(o,t),a=P(o,t),p=function(e,n){return{fieldInfo:new m({fieldName:"expression/predominant-categories-list"}),expressionInfo:new l({name:"predominant-categories-list",title:n.listOfCategories,expression:f(e)})}}(o,t),d=new n({expressionInfos:[s.expressionInfo,i.expressionInfo,a.expressionInfo,p.expressionInfo],fieldInfos:[s.fieldInfo,i.fieldInfo,a.fieldInfo,p.fieldInfo],title:C(r,t),content:[{type:"text",text:I(t.predominantCategoryStrengthContent,{expression1:`{${i.fieldInfo.fieldName}}`,expression2:`<b>{${s.fieldInfo.fieldName}}</b>`,expression3:`<b>{${a.fieldInfo.fieldName}}%</b>`})},{type:"text",text:`{${p.fieldInfo.fieldName}}`}]});return{name:"predominant-categories-list",title:t.orderedListOfValues,value:d}}function $(e,t){const{fieldInfos:r}=e,o=N(r,t),s=M(r,t),i=P(r,t),a=function(e,n){const t=e.map((e=>e.fieldName));return{fieldInfo:new m({fieldName:"expression/predominant-total",format:{digitSeparator:!0,places:0}}),expressionInfo:new l({name:"predominant-total",title:n.sumOfCategories,expression:j(t),returnType:"number"})}}(r,t),p=new n({expressionInfos:[s.expressionInfo,o.expressionInfo,a.expressionInfo,i.expressionInfo],fieldInfos:[s.fieldInfo,o.fieldInfo,a.fieldInfo,i.fieldInfo],content:I(t.predominantCategoryTotalStrengthContent,{expression1:`{${s.fieldInfo.fieldName}}`,expression2:`<b>{${o.fieldInfo.fieldName}}</b>`,expression3:`<b>{${i.fieldInfo.fieldName}}%</b>`,expression4:`{${a.fieldInfo.fieldName}}`})});return{name:"predominant-category-total-strength",title:t.predominantCategoryWithTotalAndStrength,value:p}}function O(e,t){const{renderer:r,fieldInfos:o}=e,s=N(o,t),i=M(o,t),a=P(o,t),p=new n({expressionInfos:[i.expressionInfo,s.expressionInfo,a.expressionInfo],fieldInfos:[i.fieldInfo,s.fieldInfo,a.fieldInfo],title:C(r,t),content:[{type:"text",text:I(t.predominantCategoryStrengthContent,{expression1:`{${i.fieldInfo.fieldName}}`,expression2:`<b>{${s.fieldInfo.fieldName}}</b>`,expression3:`<b>{${a.fieldInfo.fieldName}}%</b>`})},{type:"media",mediaInfos:{type:"pie-chart",value:{fields:o.map((e=>e.fieldName))}}}]});return{name:"predominant-category-chart",title:t.predominantCategoryWithChart,value:p}}async function E(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("unique-value"!==o.type)throw new e("predmoinance-popup:invalid-parameters","renderer.type must be 'unique-value'");const s=function(n,t){const r=n.authoringInfo,o="predominance"===r.type?r.fields:[];if(!o||!o.length)throw new e("predominance-popup:insufficient-info","unable to find input fields in authoringInfo");return o.map((e=>a(t,e)))}(o,t);return{renderer:o,fieldInfos:s}}async function V(e){const[n,r]=await Promise.all([E(e),t("esri/smartMapping/t9n/smartMapping")]),o=F(n,r),s=await async function(e){const[n,r]=await Promise.all([E(e),t("esri/smartMapping/t9n/smartMapping")]);return[T(n,r),U(n,r),D(n,r),$(n,r),F(n,r),L(n,r),O(n,r)]}(e);return{primaryTemplate:o,secondaryTemplates:s.filter((e=>e.name!==o.name))}}async function q(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("unique-value"!==o.type)throw new e("relationship-popup:invalid-parameters","renderer.type must be 'unique-value'");const s=o.authoringInfo;if(!s||"relationship"!==s.type)throw new e("relationship-popup:invalid-parameters","renderer.authoringInfo.type must be 'relationship'");if(!(s.field1&&s.field1.field&&s.field2&&s.field2.field))throw new e("relationship-popup:invalid-parameters","'field1' and/or 'field2' properties are missing in renderer.authoringInfo");return{layer:t,renderer:o}}async function A(e,t,r="divide"){const{fieldInfos:i,expressionInfos:a}=await o({renderer:e,layer:t,normFieldExpressionTemplate:r});return new n({content:await s(t,{fieldInfos:i,expressionInfos:a}),fieldInfos:i,expressionInfos:a})}async function B(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("simple"!==o.type)throw new e("simple-popup:invalid-parameters","renderer.type must be 'simple'");return{layer:t,renderer:o}}async function R(e,t,r="divide"){const{fieldInfos:i,expressionInfos:a}=await o({renderer:e,layer:t,normFieldExpressionTemplate:r});return new n({content:await s(t,{fieldInfos:i,expressionInfos:a}),expressionInfos:a,fieldInfos:i})}async function z(n){const{layer:t,renderer:r}=n;await t.load();const o=r||t.renderer;if("unique-value"!==o.type)throw new e("unique-values-popup:invalid-parameters","renderer.type must be 'unique-value'");return{layer:t,renderer:o}}async function W(e,t,r="divide"){const{fieldInfos:i,expressionInfos:a}=await o({renderer:e,layer:t,normFieldExpressionTemplate:r});return new n({content:await s(t,{fieldInfos:i,expressionInfos:a}),fieldInfos:i,expressionInfos:a})}async function G(i){const{renderer:a,layer:l}=function(n){const{layer:t}=n,r=n.renderer||t.renderer;if(!r)throw new e("getTemplates:invalid-parameters","'renderer' or 'layer.renderer' must be provided");return{layer:t,renderer:r}}(i);if("simple"===a.type)return async function(e){const[{renderer:n,layer:o},s]=await Promise.all([B(e),t("esri/smartMapping/t9n/smartMapping")]),i=[];if(!p(n).length){const e=h(o);return e?{primaryTemplate:{name:"simple",title:s.simple,value:e},secondaryTemplates:i}:null}const a={name:"simple",title:s.simple,value:await R(n,o)};return r(n)&&i.push({name:"simple-percent",title:s.simpleNormFieldAsPercent,value:await R(n,o,"percentage")}),{primaryTemplate:a,secondaryTemplates:i}}({renderer:a,layer:l});if("class-breaks"===a.type)return async function(e){const[{renderer:n,layer:o},s]=await Promise.all([b(e),t("esri/smartMapping/t9n/smartMapping")]),i={name:"class-breaks",title:s.classBreaks,value:await g(n,o)},a=[];return r(n)&&a.push({name:"class-breaks-percent",title:s.classBreaksNormFieldAsPercent,value:await g(n,o,"percentage")}),{primaryTemplate:i,secondaryTemplates:a}}({renderer:a,layer:l});if("dot-density"===a.type)return async function(e){const[{renderer:n,layer:r},o]=await Promise.all([x(e),t("esri/smartMapping/t9n/smartMapping")]);return{primaryTemplate:{name:"dot-density",title:o.dotDensity,value:await w(n,r)},secondaryTemplates:[await k(n,r,o),await v(n,r,o)]}}({renderer:a,layer:l});if("heatmap"===a.type)return async function(e){const[{renderer:r,layer:i},a]=await Promise.all([S(e),t("esri/smartMapping/t9n/smartMapping")]);if(!r.field)return null;const{fieldInfos:p}=await o({renderer:r,layer:i}),l=new n({content:await s(i,{fieldInfos:p}),fieldInfos:p});return{primaryTemplate:{name:"heatmap",title:a.heatmap,value:l},secondaryTemplates:[]}}({renderer:a,layer:l});if("unique-value"===a.type){const e=a.authoringInfo&&a.authoringInfo.type;return"predominance"===e?V({renderer:a,layer:l}):"relationship"===e?async function(e){const[{renderer:n,layer:r},o]=await Promise.all([q(e),t("esri/smartMapping/t9n/smartMapping")]),s={name:"relationship",title:o.relationshipPopupTitle,value:await A(n,r)},i=[];return function(e){const n=e.authoringInfo;return!(!n.field1.normalizationField&&!n.field2.normalizationField)}(n)&&i.push({name:"relationship-percent",title:o.relationshipNormFieldAsPercent,value:await A(n,r,"percentage")}),{primaryTemplate:s,secondaryTemplates:i}}({renderer:a,layer:l}):async function(e){const[{renderer:n,layer:o},s]=await Promise.all([z(e),t("esri/smartMapping/t9n/smartMapping")]),i={name:"unique-values",title:s.uniqueValues,value:await W(n,o)},a=[];return r(n)&&a.push({name:"unique-values-percent",title:s.uniqueValuesNormFieldAsPercent,value:await W(n,o,"percentage")}),{primaryTemplate:i,secondaryTemplates:a}}({renderer:a,layer:l})}return null}export{G as getTemplates};
