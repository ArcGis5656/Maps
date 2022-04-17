/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import s from"../core/Handles.js";import{init as i}from"../core/watchUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{g as o}from"./projectionEllipsoid.js";import{F as a}from"./LayerView3D.js";import{T as l}from"./Scheduler.js";let h=class extends t{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new s,this.layerView=null,this.updating=!0}setup(e){this.layerView=e,this.extentIntersection=new a({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,s=t.basemapTerrain,r=t.resourceController.scheduler;this.handles.add([t.on("resize",(()=>this.viewChange())),t.state.watch("camera",(()=>this.viewChange()),!0),r.registerTask(l.FRUSTUM_VISIBILITY,this),s.on("elevation-bounds-change",(()=>this.elevationBoundsChange()))]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([i(s,["opacity","wireframe"],(()=>this.updateIsVisibleBelowSurface())),i(t,"map.ground.navigationConstraint.type",(()=>this.updateIsVisibleBelowSurface()))])}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}viewChange(){this._setDirty()}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,s="local"===e.viewingMode,i=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=s||!t.opaque||i}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*o(e.spatialReference).radius;else{const{min:s,max:i}=e.basemapTerrain.elevationBounds;t=s-Math.max(1,(i-s)*(1.2-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}get running(){return this.updating}runTask(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=o(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};e([r({readOnly:!0})],h.prototype,"suspended",void 0),e([r({readOnly:!0})],h.prototype,"updating",void 0),h=e([n("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],h);const u=h;export{u as G};
