/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import t from"./Accessor.js";import e from"./Handles.js";import{property as n}from"./accessorSupport/decorators/property.js";import{subclass as i}from"./accessorSupport/decorators/subclass.js";import{b as r}from"./lang.js";import{watch as a,when as d,on as o,sync as h}from"./reactiveUtils.js";import{schedule as l}from"./scheduling.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../chunks/ensureType.js";import"./Error.js";import"../chunks/nextTick.js";import"./promiseUtils.js";import"./Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";let c=class extends t{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new e,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(s,t,e={}){return this._installWatch(s,t,e,a)}addWhen(s,t,e={}){return this._installWatch(s,t,e,d)}addOnCollectionChange(s,t,{initial:e=!1}={}){const n=++this.handleId;return this.handles.add([o(s,"after-changes",this._createSyncUpdatingCallback(),h),o(s,"change",t,{onListenerAdd:e?s=>t({added:s.toArray(),removed:[]}):void 0})],n),{remove:()=>this.handles.remove(n)}}addPromise(s){if(r(s))return s;const t=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(s)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1))}},t),this.pendingPromises.add(s),this._set("updating",!0);const e=()=>this.handles.remove(t);return s.then(e,e),s}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}_installWatch(s,t,e={},n){const i=++this.handleId;e.sync||this._installSyncUpdatingWatch(s,i);const r=n(s,t,e);return this.handles.add(r,i),{remove:()=>this.handles.remove(i)}}_installSyncUpdatingWatch(s,t){const e=this._createSyncUpdatingCallback(),n=a(s,e,{sync:!0,equals:()=>!1});return this.handles.add(n,t),n}_createSyncUpdatingCallback(){return()=>{this.handles.remove(p),++this.scheduleHandleId;const s=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(l((()=>{s===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p))})),p)}}};s([n({readOnly:!0})],c.prototype,"updating",void 0),c=s([i("esri.views.support.WatchUpdatingTracking")],c);const p=-42;var u;!function(s){s[s.NONE=0]="NONE",s[s.SYNC=1]="SYNC",s[s.INIT=2]="INIT"}(u||(u={}));const m=t=>{let r=class extends t{destroy(){var s,t;this.destroyed||(null==(s=this._get("handles"))||s.destroy(),null==(t=this._get("updatingHandles"))||t.destroy())}get handles(){return this._get("handles")||new e}get updatingHandles(){return this._get("updatingHandles")||new c}};return s([n({readOnly:!0})],r.prototype,"handles",null),s([n({readOnly:!0})],r.prototype,"updatingHandles",null),r=s([i("esri.core.HandleOwner")],r),r};let g=class extends(m(t)){};g=s([i("esri.core.HandleOwner")],g);export{g as HandleOwner,m as HandleOwnerMixin,c as W};
