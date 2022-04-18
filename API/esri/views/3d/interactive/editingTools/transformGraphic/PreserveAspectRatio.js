// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../analysisTools/slice/sliceToolUtils","../../../../interactive/dragEventPipeline"],function(d,f,g,h,k){let l=function(){function c(){this.lastDragEvent=null;this.next=new k.EventPipeline;this._enabled=!1}var e=c.prototype;e.createDragEventPipelineStep=function(){this.lastDragEvent=null;return a=>{this.lastDragEvent="end"!==a.action?{...a}:null;this._enabled&&this._adjustScaleFactors(a);return a}};
e._adjustScaleFactors=function(a){const b=h.isDiagonalResizeHandle(a.handle)?Math.max(Math.abs(a.factor1),Math.abs(a.factor2)):0===a.handle.direction[0]?Math.abs(a.factor2):Math.abs(a.factor1);a.factor1=0>a.factor1?-b:b;a.factor2=0>a.factor2?-b:b};f._createClass(c,[{key:"enabled",get:function(){return this._enabled},set:function(a){if(this._enabled!==a&&g.isSome(this.lastDragEvent)){const b={...this.lastDragEvent,action:"update"};a&&this._adjustScaleFactors(b);this.next.execute(b)}this._enabled=a}},
{key:"test",get:function(){return{_adjustScaleFactors:a=>this._adjustScaleFactors(a)}}}]);return c}();d.PreserveAspectRatio=l;Object.defineProperty(d,"__esModule",{value:!0})});