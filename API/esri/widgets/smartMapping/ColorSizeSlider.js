// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/maybe ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../renderers/visualVariables/support/ColorSizeStop ../../renderers/visualVariables/support/ColorStop ../../renderers/visualVariables/support/SizeStop ./SmartMappingSliderBase ./ColorSizeSlider/ColorSizeSliderViewModel ./support/utils ../support/widgetUtils ../support/decorators/messageBundle ../../core/Logger ../support/jsxFactory".split(" "),
function(L,r,F,v,x,q,S,T,D,M,G,H,I,N,O,J,P,Q,U,u){var E;q=E=function(K){function C(a,b){a=K.call(this,a,b)||this;a._bgFillId=null;a._backgroundFillColor="#e0e0e0";a._minRampFillWidth=.2;a._rampFillId=null;a._rampNode=null;a._maxRampFillWidth=1;a.handlesSyncedToPrimary=null;a.label=void 0;a.messages=null;a.persistSizeRangeEnabled=null;a.primaryHandleEnabled=null;a.stops=null;a.viewModel=new O;a.zoomOptions=null;a._bgFillId=`${a.id}-bg-fill`;a._rampFillId=`${a.id}-linear-gradient`;return a}L._inheritsLoose(C,
K);C.fromRendererResult=function(a,b){const {renderer:{authoringInfo:{univariateTheme:g}},color:{visualVariable:{stops:e}},size:{visualVariables:f},statistics:k}=a,{avg:d,stddev:l}=k;if(!e)throw new F("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");const m="above-and-below"===g;var h=a.renderer.authoringInfo.visualVariables[0];a=h.minSliderValue;h=h.maxSliderValue;const n=f.find(c=>"outline"!==(null==c?void 0:c.target)&&!!(null==c||!c.axis||
null!=c&&c.field||null!=c&&c.valueExpression)&&((null==c?void 0:c.field)||(null==c?void 0:c.valueExpression))),p=n.stops,B=e.map((c,t)=>{const {color:y,label:z,value:A}=c;return new G({color:y,label:z,value:A,size:p&&0<p.length?p[t].size:0===t?n.minSize:t===e.length-1?n.maxSize:null})});return new E({max:h,min:a,stops:B,primaryHandleEnabled:m,handlesSyncedToPrimary:m,persistSizeRangeEnabled:m,histogramConfig:{average:d,standardDeviation:l,bins:b?b.bins:[]}})};var w=C.prototype;w.updateFromRendererResult=
function(a,b){const {renderer:{authoringInfo:{univariateTheme:g}},color:{visualVariable:{stops:e}},size:{visualVariables:f},statistics:k}=a,{avg:d,stddev:l}=k;if(!e)throw new F("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");const m="above-and-below"===g;var h=a.renderer.authoringInfo.visualVariables[0];a=h.minSliderValue;h=h.maxSliderValue;const n=f.find(c=>"outline"!==(null==c?void 0:c.target)&&!!(null==c||!c.axis||null!=c&&c.field||null!=
c&&c.valueExpression)&&((null==c?void 0:c.field)||(null==c?void 0:c.valueExpression))),p=n.stops,B=e.map((c,t)=>{const {color:y,label:z,value:A}=c;return new G({color:y,label:z,value:A,size:p&&0<p.length?p[t].size:0===t?n.minSize:t===e.length-1?n.maxSize:null})});this.set({max:h,min:a,stops:B,primaryHandleEnabled:m,handlesSyncedToPrimary:m,persistSizeRangeEnabled:m,histogramConfig:{average:d,standardDeviation:l,bins:b?b.bins:[]}})};w.updateRenderer=function(a){const {stops:b}=this,g=b[0],e=b[b.length-
1];var f=b[Math.floor(b.length/2)];a=a.clone();const k=a.visualVariables.map(d=>{if("size"===d.type){if("outline"===(null==d?void 0:d.target)||!(null==d||!d.axis||null!=d&&d.field||null!=d&&d.valueExpression))return d;v.isSome(d.minSize)&&v.isSome(d.maxSize)?d.set({maxDataValue:e.value,minDataValue:g.value,maxSize:e.size,minSize:g.size}):d.stops&&d.set({stops:b.map(l=>{const {label:m,size:h,value:n}=l;return new I({label:m,size:h,value:n})})})}else"color"===d.type&&d.set({stops:this.stops.map(l=>
{const {color:m,label:h,value:n}=l;return new H({color:m,label:h,value:n})})});return d});a.visualVariables=k;1<a.classBreakInfos.length&&(f=f.value,a.classBreakInfos[0].maxValue=f,a.classBreakInfos[1].minValue=f);return a};w.updateVisualVariables=function(a){return a.map(b=>{const g=b.clone();if("size"===b.type){if("outline"===(null==b?void 0:b.target)||!(null==b||!b.axis||null!=b&&b.field||null!=b&&b.valueExpression))return g;if(v.isSome(b.minSize)&&v.isSome(b.maxSize)){var {stops:e}=this;b=e[0];
e=e[e.length-1];g.set({maxDataValue:e.value,minDataValue:b.value,maxSize:e.size,minSize:b.size})}else b.stops&&g.set({stops:this.stops.map(f=>{const {label:k,size:d,value:l}=f;return new I({label:k,size:d,value:l})})})}else"color"===b.type&&g.set({stops:this.stops.map(f=>{const {color:k,label:d,value:l}=f;return new H({color:k,label:d,value:l})})});return g})};w.render=function(){const {label:a,primaryHandleEnabled:b,state:g,visibleElements:e}=this,f="disabled"===g,k=this.classes("esri-color-size-slider",
"esri-widget","esri-widget--panel",{["esri-disabled"]:f,["esri-color-size-slider--primary-handle"]:b,["esri-color-size-slider--interactive-track"]:e.interactiveTrack});return u.tsx("div",{"aria-label":a,class:k},f?null:this.renderContent(this.renderRamp(),"esri-color-size-slider__slider-container","esri-color-size-slider__histogram-container"))};w.renderRamp=function(){const {_bgFillId:a,_rampFillId:b,viewModel:g,zoomOptions:e}=this,f=g.getStopInfo();return u.tsx("div",{afterCreate:P.storeNode,bind:this,
class:"esri-color-size-slider__ramp","data-node-ref":"_rampNode"},u.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},u.tsx("defs",null,this.renderRampFillDefinition(b,f),this.renderBackgroundFillDefinition(a)),u.tsx("rect",{x:"0",y:"0",fill:this._backgroundFillColor,height:"100%",width:"100%"}),this.renderPaths()),e?this.renderZoomCaps():null)};w.renderPaths=function(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(v.isSome(a)&&v.isSome(b)){var {primaryHandleEnabled:g,stops:e,
values:f,viewModel:{max:k,min:d},_bgFillId:l,_maxRampFillWidth:m,_minRampFillWidth:h,_rampFillId:n}=this,p=[m,h];e[0].size<e[e.length-1].size&&p.reverse();var B=f.slice().sort((A,R)=>A>R?1:-1),[c,t]=p,[y,z]=B;p=g?J.getDynamicPathForSizeStops({max:k,min:d,pathHeight:a,pathWidth:b,stops:e,padding:h}):J.getPathForSizeStops({bottomValue:y,bottomWidth:c,max:k,min:d,pathHeight:a,pathWidth:b,topValue:z,topWidth:t});return[u.tsx("path",{key:"background",d:p,fill:`url(#${l})`}),u.tsx("path",{key:"fill",d:p,
fill:`url(#${n})`})]}}};return C}(N.SmartMappingSliderBase);r.__decorate([x.aliasOf("viewModel.handlesSyncedToPrimary")],q.prototype,"handlesSyncedToPrimary",void 0);r.__decorate([D.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],q.prototype,"label",void 0);r.__decorate([D.property(),Q.messageBundle("esri/widgets/smartMapping/ColorSizeSlider/t9n/ColorSizeSlider")],q.prototype,"messages",void 0);r.__decorate([x.aliasOf("viewModel.persistSizeRangeEnabled")],q.prototype,"persistSizeRangeEnabled",
void 0);r.__decorate([x.aliasOf("viewModel.primaryHandleEnabled")],q.prototype,"primaryHandleEnabled",void 0);r.__decorate([x.aliasOf("viewModel.stops")],q.prototype,"stops",void 0);r.__decorate([D.property()],q.prototype,"viewModel",void 0);r.__decorate([x.aliasOf("viewModel.zoomOptions")],q.prototype,"zoomOptions",void 0);return q=E=r.__decorate([M.subclass("esri.widgets.smartMapping.ColorSizeSlider")],q)});