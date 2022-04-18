/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as a}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{r as e}from"./reader.js";import{subclass as s,W as i}from"../core/accessorSupport/decorators/subclass.js";import{w as t}from"./writer.js";import{collectField as o,collectArcadeFieldNames as l}from"../layers/support/fieldUtils.js";import n from"../renderers/visualVariables/ColorVariable.js";import u from"../renderers/visualVariables/OpacityVariable.js";import V from"../renderers/visualVariables/RotationVariable.js";import p from"../renderers/visualVariables/SizeVariable.js";import b from"../renderers/visualVariables/VisualVariable.js";import c from"../core/Accessor.js";import{J as h}from"./jsonMap.js";import{L as y}from"./Logger.js";const f=y.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),v={color:n,size:p,opacity:u,rotation:V},m=new h({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),d=/^\[([^\]]+)\]$/i;let g=class extends c{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(a){if(this._resetVariables(),(a=a&&a.filter((a=>!!a)))&&a.length){for(const r of a)switch(r.type){case"color":this.colorVariables.push(r);break;case"opacity":this.opacityVariables.push(r);break;case"rotation":this.rotationVariables.push(r);break;case"size":this.sizeVariables.push(r)}if(this.sizeVariables.length){this.sizeVariables.some((a=>!!a.target))&&a.sort(((a,r)=>{let e=null;return e=a.target===r.target?0:a.target?1:-1,e}))}for(let r=0;r<a.length;r++){a[r].index=r}this._set("visualVariables",a)}else this._set("visualVariables",a)}readVariables(a,r,e){const{rotationExpression:s,rotationType:t}=r,o=s&&s.match(d),l=o&&o[1];if(l&&(a||(a=[]),a.push({type:"rotationInfo",rotationType:t,field:l})),a)return a.map((a=>{const r=m.read(a.type),s=v[r];s||(f.warn(`Unknown variable type: ${r}`),e&&e.messages&&e.messages.push(new i("visual-variable:unsupported",`visualVariable of type '${r}' is not supported`,{definition:a,context:e})));const t=new s;return t.read(a,e),t}))}writeVariables(a,r){const e=[];for(const s of a){const a=s.toJSON(r);a&&e.push(a)}return e}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};a([r()],g.prototype,"visualVariables",null),g=a([s("esri.renderers.visualVariables.VisualVariableFactory")],g);const j=g,F={base:b,key:"type",typeMap:{opacity:u,color:n,rotation:V,size:p}},w=i=>{let n=class extends i{constructor(){super(...arguments),this._vvFactory=new j}set visualVariables(a){this._vvFactory.visualVariables=a,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(a,r,e){return this._vvFactory.readVariables(a,r,e)}writeVisualVariables(a,r,e,s){r[e]=this._vvFactory.writeVariables(a,s)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const a of this.visualVariables)if(a.arcadeRequired)return!0;return!1}hasVisualVariables(a,r){return a?this.getVisualVariablesForType(a,r).length>0:this.getVisualVariablesForType("size",r).length>0||this.getVisualVariablesForType("color",r).length>0||this.getVisualVariablesForType("opacity",r).length>0||this.getVisualVariablesForType("rotation",r).length>0}getVisualVariablesForType(a,r){const e=this.visualVariables;return e?e.filter((e=>e.type===a&&("string"==typeof r?e.target===r:!1!==r||!e.target))):[]}async collectVVRequiredFields(a,r){let e=[];this.visualVariables&&(e=e.concat(this.visualVariables));for(const s of e)s&&(s.field&&o(a,r,s.field),s.normalizationField&&o(a,r,s.normalizationField),s.valueExpression&&await l(a,r,s.valueExpression))}};return a([r({types:[F],value:null,json:{write:!0}})],n.prototype,"visualVariables",null),a([e("visualVariables",["visualVariables","rotationType","rotationExpression"])],n.prototype,"readVisualVariables",null),a([t("visualVariables")],n.prototype,"writeVisualVariables",null),n=a([s("esri.renderers.mixins.VisualVariablesMixin")],n),n};export{w as V};
