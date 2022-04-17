/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{g as e}from"../chunks/assets.js";import t from"../core/Handles.js";import{on as r,whenOnce as o}from"../core/watchUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import l from"./Widget.js";import m from"./BasemapGallery/BasemapGalleryViewModel.js";import{H as c}from"../chunks/Heading.js";import{a as n}from"../chunks/accessibleHandler.js";import{m as u}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as h}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../config.js";import"../chunks/object.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../chunks/domUtils.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/Loadable.js";import"../chunks/basemapUtils.js";import"../Basemap.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/loadAll.js";import"../chunks/asyncUtils.js";import"../chunks/writer.js";import"../geometry/SpatialReference.js";import"../portal/Portal.js";import"../chunks/reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/writeUtils.js";import"../chunks/layerUtils.js";import"../chunks/ViewingMode.js";import"../chunks/terrainUtils.js";import"../chunks/Util2.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/vec2.js";import"../chunks/vec2f64.js";import"../chunks/vec4f64.js";import"../chunks/Scheduler.js";import"../chunks/reactiveUtils.js";import"../chunks/debugFlags.js";import"../geometry/projection.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/mat4.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../chunks/pe.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../chunks/spatialReferenceSupport.js";import"./BasemapGallery/support/BasemapGalleryItem.js";import"./BasemapGallery/support/LocalBasemapsSource.js";import"./BasemapGallery/support/PortalBasemapsSource.js";const d="esri-basemap-gallery esri-widget esri-widget--panel-height-only",j="esri-basemap-gallery--source-loading",g="esri-basemap-gallery__loader",k="esri-basemap-gallery__item",y="esri-basemap-gallery__item-container",b="esri-basemap-gallery__item-title",v="esri-basemap-gallery__item-thumbnail",_="esri-basemap-gallery__item--selected",w="esri-basemap-gallery__item--loading",f="esri-basemap-gallery__item--error",B="esri-widget__content--empty",U="esri-icon-basemap",P="esri-disabled";let G=class extends l{constructor(s,e){super(s,e),this._handles=new t,this.activeBasemap=null,this.disabled=!1,this.headingLevel=2,this.iconClass=U,this.label=void 0,this.messages=null,this.source=null,this.view=null,this.viewModel=new m}initialize(){const s=this._handles;this.own([r(this,"viewModel.items","change",(e=>{const t="basemap-gallery-item-changes",{added:r,moved:o}=e;s.remove(t),s.add([...r,...o].map((s=>s.watch("state",(()=>this.scheduleRender())))),t),this.scheduleRender()})),s,o(this,"source",(()=>this.viewModel.load()))])}render(){const s="loading"===this.get("source.state"),e=this.disabled||"disabled"===this.get("viewModel.state"),t=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),r={[j]:s,[P]:e},o=s?h("div",{class:g,key:"esri-basemap-gallery__loader"}):null,i=s?null:t.length>0?h("ul",{class:y,key:"esri-basemap-gallery__item-container",role:"menu"},t):h("div",{class:B,key:"esri-basemap-gallery__empty-message"},h(c,{level:this.headingLevel},this.messages.noBasemaps));return h("div",{class:this.classes(d,r)},o,i)}_handleClick(s){const e=s.currentTarget["data-item"];"ready"===e.state&&(this.activeBasemap=e.basemap)}_renderBasemapGalleryItem(s){const t=s.get("basemap.thumbnailUrl")||e("esri/themes/base/images/basemap-toggle-64.svg"),r=s.get("basemap.title"),o=s.get("basemap.portalItem.snippet"),i=s.get("error.message")||o||r,{viewModel:a}=this,p=!this.disabled&&"ready"===a.state&&"ready"===s.state?0:-1,l=a.basemapEquals(s.basemap,this.activeBasemap),m={[_]:l,[w]:"loading"===s.state,[f]:"error"===s.state};return h("li",{"aria-selected":l.toString(),bind:this,class:this.classes(k,m),"data-item":s,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:p,title:i},h("img",{alt:"",class:v,src:t}),h("div",{class:b},r))}};s([i("viewModel.activeBasemap")],G.prototype,"activeBasemap",void 0),s([a()],G.prototype,"disabled",void 0),s([a()],G.prototype,"headingLevel",void 0),s([a()],G.prototype,"iconClass",void 0),s([a({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],G.prototype,"label",void 0),s([a(),u("esri/widgets/BasemapGallery/t9n/BasemapGallery")],G.prototype,"messages",void 0),s([i("viewModel.source")],G.prototype,"source",void 0),s([i("viewModel.view")],G.prototype,"view",void 0),s([a()],G.prototype,"viewModel",void 0),s([n()],G.prototype,"_handleClick",null),G=s([p("esri.widgets.BasemapGallery")],G);const M=G;export{M as default};
