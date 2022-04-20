/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{o as t,b as e,i as r}from"../core/lang.js";import{g as s,a as n}from"./unitConversionUtils.js";import{L as i}from"./Logger.js";import{h as a,k as o}from"./DefaultBufferWriter.js";import{l as f}from"./arcadeOnDemand.js";import{g as u}from"./watch.js";import{c as h}from"./mat4.js";import{c,I as l}from"./mat4f64.js";import{v as m}from"./mathUtils.js";import{c as d}from"./vec4f64.js";import{m as p}from"./mathUtils2.js";import{O as g}from"./basicInterfaces.js";import{c as x}from"./geometryDataUtils.js";import{V as _}from"./VertexAttribute.js";import{a as I,r as U}from"./utils2.js";const E=i.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function v(t){const e=t&&t.expression;if("string"==typeof e){const t=R(e);if(null!=t)return{cachedResult:t}}return null}async function O(t,e,r){const s=t&&t.expression;if("string"!=typeof s)return null;const n=R(s);if(null!=n)return{cachedResult:n};const i=await f(),a=i.arcadeUtils,o=a.createSyntaxTree(s);return a.dependsOnView(o)?(null!=r&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:a.createFunction(o),context:a.createExecContext(null,{sr:e}),modules:i}}}function T(t,e,r){return t.arcadeUtils.createFeature(e.attributes,e.geometry,r)}function y(t,e){if(null!=t&&!C(t)){if(!e||!t.arcade)return void E.errorOncePerTick("Arcade support required but not provided");const r=e;r._geometry&&(r._geometry=a(r._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function S(t,e=!1){let r=t&&t.featureExpressionInfo;const s=r&&r.expression;return e||"0"===s||(r=null),r}const b={cachedResult:0};function C(t){return null!=t.cachedResult}function R(t){return"0"===t?0:null}class j{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(t){this._unit=t,this._metersPerElevationInfoUnit=s(t)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(t){this._meterUnitOffset=t,this._renderUnitOffset=0}set offsetElevationInfoUnits(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(t){this._renderUnitOffset+=t}geometryZWithOffset(t,e){const r=this.calculateOffsetRenderUnits(e);return null!=this.featureExpressionInfoContext?r:t+r}calculateOffsetRenderUnits(t){let e=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return null!=r&&(e+=function(t){if(null!=t){if(C(t))return t.cachedResult;const e=t.arcade;let r=t.arcade.modules.arcadeUtils.executeFunction(e.func,e.context);return"number"!=typeof r&&(t.cachedResult=0,r=0),r}return 0}(r)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=n(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=t(e.offset,0)}updateFeatureExpressionInfoContext(t,s,n){if(e(t))return void(this._featureExpressionInfoContext=null);const i=t&&t.arcade;var a;i&&r(s)&&r(n)?(this._featureExpressionInfoContext={cachedResult:(a=t).cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null},y(this._featureExpressionInfoContext,T(i.modules,s,n))):this._featureExpressionInfoContext=t}static fromElevationInfo(t){const e=new j;return r(t)&&e.setFromElevationInfo(t),e}}class w{constructor(){this.visible=!0}}class P{constructor(e,r,s={}){this.data=e,this.material=r,this.boundingSphere=d(),this.instanceParameters=new w,this._transformation=c(),this._shaderTransformationDirty=!0,this.layerUid=t(s.layerUid,null),this.graphicUid=t(s.graphicUid,null),this.id=s.id?s.id:u(),this.boundingInfo=t(s.boundingInfo,null),this.calculateShaderTransformation=t(this.calculateShaderTransformation,null),this.castShadow=!!s.castShadow&&s.castShadow}get transformation(){return this._transformation}updateTransformation(t){t(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)}shaderTransformationChanged(){this._shaderTransformationDirty=!0}computeBoundingSphere(t,r,s=p(t)){e(this.boundingInfo)||(m(r,this.boundingInfo.getCenter(),t),r[3]=this.boundingInfo.getBSRadius()*s)}get hasShaderTransformation(){return r(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return e(this.calculateShaderTransformation)?t(this.transformation,l):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=c()),h(this._shaderTransformation,this.calculateShaderTransformation(t(this.transformation,l))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(t){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,t)&&(r(this._transformation)&&m(t,t,this._transformation),!0);const e=this.indices.get(_.POSITION),s=this.vertexAttributes.get(_.POSITION);return!!x(s,e,t)&&(r(this._transformation)&&m(t,t,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const t=new o(g.Highlight),e=this.instanceParameters;return e.highlights=I(e.highlights,t),t}removeHighlight(t){const e=this.instanceParameters;e.highlights=U(e.highlights,t)}}export{j as E,P as R,O as a,v as b,T as c,S as e,y as s,b as z};