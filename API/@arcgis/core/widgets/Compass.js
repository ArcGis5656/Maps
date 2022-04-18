/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{aliasOf as o}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import i from"./Compass/CompassViewModel.js";import{a as c}from"../chunks/accessibleHandler.js";import{m as p}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as a}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../core/watchUtils.js";import"../chunks/GoTo.js";const n="esri-compass esri-widget--button esri-widget",m="esri-icon-font-fallback-text",l="esri-compass__icon",u="esri-icon-dial",d="esri-icon-compass",j="esri-icon-locate-circled",h="esri-interactive",k="esri-disabled";let g=class extends r{constructor(s,o){super(s,o),this.goToOverride=null,this.iconClass=j,this.label=void 0,this.messages=null,this.view=null,this.viewModel=new i}reset(){return this.viewModel.reset()}render(){const{orientation:s,state:o}=this.viewModel,t="disabled"===o,e="compass"===("rotation"===o?"rotation":"compass"),r=t?-1:0,i={[k]:t,[h]:!t},c={[d]:e,[u]:!e},{messages:p}=this;return a("div",{bind:this,class:this.classes(n,i),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:r,"aria-label":p.reset,title:p.reset},a("span",{"aria-hidden":"true",class:this.classes(l,c),styles:this._toRotationTransform(s)}),a("span",{class:m},p.reset))}_reset(){this.viewModel.reset()}_toRotationTransform(s){return{transform:`rotateZ(${s.z}deg)`}}};s([o("viewModel.goToOverride")],g.prototype,"goToOverride",void 0),s([t()],g.prototype,"iconClass",void 0),s([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0),s([t(),p("esri/widgets/Compass/t9n/Compass")],g.prototype,"messages",void 0),s([o("viewModel.view")],g.prototype,"view",void 0),s([t({type:i})],g.prototype,"viewModel",void 0),s([c()],g.prototype,"_reset",null),g=s([e("esri.widgets.Compass")],g);const v=g;export{v as default};
