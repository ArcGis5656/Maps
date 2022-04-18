// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../PopupTemplate ../../core/Error ../../intl/messages ../../popup/ExpressionInfo ../../popup/FieldInfo ./support/utils ../statistics/support/predominanceUtils".split(" "),function(r,g,k,w,x,t,u,e,v){function y(a){return l.apply(this,arguments)}function l(){l=g._asyncToGenerator(function*(a){const {layer:b,renderer:c}=a;yield b.load();a=c||b.renderer;if("dot-density"!==a.type)throw new w("dot-density-popup:invalid-parameters","renderer.type must be 'dot-density'");
return{layer:b,renderer:a}});return l.apply(this,arguments)}function z(a,b){return m.apply(this,arguments)}function m(){m=g._asyncToGenerator(function*(a,b){const {fieldInfos:c,expressionInfos:d}=yield e.getFieldAndExpressionInfos({renderer:a,layer:b});return new k({content:yield e.getContentFromFieldInfos(b,{fieldInfos:c,expressionInfos:d}),expressionInfos:d,fieldInfos:c})});return m.apply(this,arguments)}function A(a,b,c){return n.apply(this,arguments)}function n(){n=g._asyncToGenerator(function*(a,
b,c){const {fieldInfos:d,expressionInfos:f}=yield e.getFieldAndExpressionInfos({renderer:a,layer:b});b=d.filter(h=>-1===h.fieldName.indexOf(e.expressionFieldPrefix));a=new u({fieldName:"expression/dot-density-categories-list"});b=new t({name:"dot-density-categories-list",title:c.listOfCategories,expression:v.getArcadeForOrderedFields(b,f)});a=new k({expressionInfos:[b],fieldInfos:[a],title:c.competingFields,content:`{${a.fieldName}}`});return{name:"dot-density-categories-list",title:c.orderedListOfValues,
value:a}});return n.apply(this,arguments)}function B(a,b,c){return p.apply(this,arguments)}function p(){p=g._asyncToGenerator(function*(a,b,c){const {fieldInfos:d,expressionInfos:f}=yield e.getFieldAndExpressionInfos({renderer:a,layer:b});b=d.filter(h=>-1===h.fieldName.indexOf(e.expressionFieldPrefix));a=new u({fieldName:"expression/dot-density-category"});b=new t({name:"dot-density-category",title:c.predominantCategory,expression:v.getArcadeForPredominantCategoryAlias(b,f)});a=new k({expressionInfos:[b,
...f],fieldInfos:[a,...d],content:[{type:"text",text:`<div><b><font size="3">{${a.fieldName}}</font></b></div>`},{type:"media",mediaInfos:{type:"pie-chart",title:c.competingFields,value:{fields:d.map(h=>h.fieldName)}}}]});return{name:"dot-density-category-chart",title:c.predominantCategoryWithChart,value:a}});return p.apply(this,arguments)}function q(){q=g._asyncToGenerator(function*(a){const [{renderer:b,layer:c},d]=yield Promise.all([y(a),x.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);
a={name:"dot-density",title:d.dotDensity,value:yield z(b,c)};const f=[yield A(b,c,d),yield B(b,c,d)];return{primaryTemplate:a,secondaryTemplates:f}});return q.apply(this,arguments)}r.getTemplates=function(a){return q.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0})});