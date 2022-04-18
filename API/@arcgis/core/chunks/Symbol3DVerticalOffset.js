/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import t from"../symbols/callouts/Callout3D.js";import r from"../symbols/callouts/LineCallout3D.js";import{_ as e}from"./tslib.es6.js";import{a as o}from"./JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{s as i}from"./materialUtils.js";function l(t){if(!t)return!1;const r=t.verticalOffset;return!!r&&!(r.screenLength<=0||r.maxWorldLength<=0)}function p(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const r=t.callout;return!!r&&(!!r.visible&&!!l(t))}function a(t){return"point-3d"===t.type||"label-3d"===t.type}function c(t){const{horizontalAlignment:r}=t;return"center"===r||"justify"===r}const u={types:{key:"type",base:t,typeMap:{line:r}},json:{write:!0}};var m;let f=m=class extends o{constructor(){super(...arguments),this.screenLength=0,this.minWorldLength=0}clone(){return new m({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}};e([s(i)],f.prototype,"screenLength",void 0),e([s({type:Number,json:{write:!0,default:0}})],f.prototype,"minWorldLength",void 0),e([s({type:Number,json:{write:!0}})],f.prototype,"maxWorldLength",void 0),f=m=e([n("esri.symbols.support.Symbol3DVerticalOffset")],f);export{f as S,l as a,a as b,u as c,p as h,c as t};
