/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{aliasOf as s}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import i from"./Home/HomeViewModel.js";import{a as n}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{v as p}from"../chunks/vmEvent.js";import{t as c}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/watchUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../Viewpoint.js";import"../Camera.js";import"../chunks/JSONSupport.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/mathUtils2.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/GoTo.js";const l="esri-home esri-widget--button esri-widget",a="esri-icon-font-fallback-text",u="esri-icon esri-icon-home",h="esri-icon-loading-indicator",j="esri-rotating",d="esri-icon-home",g="esri-disabled";let k=class extends r{constructor(o,s){super(o,s),this.goToOverride=null,this.iconClass=d,this.label=void 0,this.messages=null,this.messagesCommon=null,this.view=null,this.viewModel=new i,this.viewpoint=null}get homeTitle(){var o;const s=null==(o=this.viewModel)?void 0:o.state,{messagesCommon:e,messages:t}=this;return"going-home"===s?e.cancel:t.title}cancelGo(){return null}go(){return null}render(){var o;const s=null==(o=this.viewModel)?void 0:o.state,{homeTitle:e}=this,t={[g]:"disabled"===s};return c("div",{bind:this,class:this.classes(l,t),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":e,title:e},this.renderIcon(),this.renderText())}renderIcon(){var o;const s=null==(o=this.viewModel)?void 0:o.state,e={[h]:"going-home"===s,[j]:"going-home"===s};return c("span",{"aria-hidden":"true",class:this.classes(u,e)})}renderText(){const{messages:o}=this;return c("span",{class:a},o.button)}_go(){const{viewModel:o}=this;"going-home"===o.state?o.cancelGo():o.go()}};o([s("viewModel.goToOverride")],k.prototype,"goToOverride",void 0),o([e({readOnly:!0})],k.prototype,"homeTitle",null),o([e()],k.prototype,"iconClass",void 0),o([e({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],k.prototype,"label",void 0),o([e(),m("esri/widgets/Home/t9n/Home")],k.prototype,"messages",void 0),o([e(),m("esri/t9n/common")],k.prototype,"messagesCommon",void 0),o([s("viewModel.view")],k.prototype,"view",void 0),o([e({type:i}),p("go")],k.prototype,"viewModel",void 0),o([s("viewModel.viewpoint")],k.prototype,"viewpoint",void 0),o([s("viewModel.cancelGo")],k.prototype,"cancelGo",null),o([s("viewModel.go")],k.prototype,"go",null),o([n()],k.prototype,"_go",null),k=o([t("esri.widgets.Home")],k);const v=k;export{v as default};
