/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import i from"../../core/Accessor.js";import{HandleOwnerMixin as a}from"../../core/HandleOwner.js";import{init as t}from"../../core/watchUtils.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import r from"./ScaleRanges.js";import n from"../Slider/SliderViewModel.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../core/reactiveUtils.js";let o=class extends(a(i)){constructor(e){super(e),this.layer=null,this.scaleRanges=r.fromScaleRange({minScale:0,maxScale:0}),this.sliderViewModel=(()=>{const{max:e}=this._getSliderIndexRange(this.scaleRanges.length-1);return new n({precision:10,min:0,max:e,values:[0,e]})})()}initialize(){this.handles.add([t(this,"sliderViewModel.values",(()=>{if(!this._hasTiledLayer())return;const[e,i]=this.sliderViewModel.values,a=this.mapScaleToSlider(this._getTiledLayerMaxScale()),t=this.mapScaleToSlider(this._getTiledLayerMinScale());(i>a||e<t)&&(this.sliderViewModel.values=[Math.max(e,t),Math.min(i,a)])})),t(this,"layer.loaded",(async()=>{const{layer:e,view:i}=this;if(e)if(i&&await i.when(),await e.when(),"minScale"in e&&"maxScale"in e){const{minScale:i,maxScale:a}=e;this.set({minScale:i,maxScale:a})}else this.set({minScale:void 0,maxScale:void 0})}))])}get maxScale(){const e=this.mapSliderToScale(this.sliderViewModel.values[1]);return this._normalizeScale("max",e)}set maxScale(e){this._setMaxScaleOnSlider(e)}get maxScaleLimit(){return this.mapSliderToScale(this.sliderViewModel.max)}set maxScaleLimit(e){this._setSliderRange({maxScale:e,minScale:this.minScaleLimit})}get minScale(){const e=this.mapSliderToScale(this.sliderViewModel.values[0]);return this._normalizeScale("min",e)}set minScale(e){this._setMinScaleOnSlider(e)}get minScaleLimit(){return this.mapSliderToScale(this.sliderViewModel.min)}set minScaleLimit(e){this._setSliderRange({maxScale:this.maxScaleLimit,minScale:e})}get state(){const{view:e,layer:i}=this;return!e&&!i||!e&&i&&i.loaded||!i&&e&&e.ready||e&&e.ready&&i&&i.loaded?"ready":"disabled"}set view(e){this._set("view",e)}mapScaleToSlider(e){const i=this.scaleRanges.scaleToRangeIndex(e),a=this.scaleRanges.findScaleRangeByIndex(i),{maxScale:t,minScale:s}=a,{max:l,min:r}=this._getSliderIndexRange(i);return this._mapToRange(e,s,t,r,l)}mapSliderToScale(e){const i=this.scaleRanges.findScaleRangeByIndex(e),{maxScale:a,minScale:t}=i,{max:s,min:l}=this._getSliderIndexRange(e);return this._mapToRange(e,l,s,t,a)}_setSliderRange(e){this.scaleRanges=r.fromScaleRange(e);const{max:i}=this._getSliderIndexRange(this.scaleRanges.length-1);this.sliderViewModel.max=i,this.sliderViewModel.min=0,this.notifyChange("maxScaleLimit"),this.notifyChange("minScaleLimit")}_getSliderIndexRange(e){const i=Math.floor(e);return{min:i,max:i+.99999}}_mapToRange(e,i,a,t,s){return t+(e-i)*(s-t)/(a-i)}_setMaxScaleOnSlider(e){const{scaleRanges:i,sliderViewModel:a}=this;if(void 0!==e){const t=this.mapScaleToSlider(this._constrainMaxScaleToLayer(i.clampMaxScale(e)));a.values=[a.values[0],t]}}_setMinScaleOnSlider(e){const{scaleRanges:i,sliderViewModel:a}=this;if(void 0!==e){const t=this.mapScaleToSlider(this._constrainMinScaleToLayer(i.clampMinScale(e)));a.values=[t,a.values[1]]}}_constrainMinScaleToLayer(e){const{scaleRanges:i}=this;if(this._hasTiledLayer()){const{firstRange:a}=i,t=this._getTiledLayerMinScale(),s=.85;e=this._mapToRange(e,a.maxScale,a.minScale,0,1)>s||e>t?t:e}return e}_constrainMaxScaleToLayer(e){if(this._hasTiledLayer()){const i=this._getTiledLayerMaxScale();e=e<i?i:e}return e}_normalizeScale(e,i){const a="max"===e?"maxScale":"minScale",t=this._hasTiledLayer()?"min"===e?this._getTiledLayerMinScale():this._getTiledLayerMaxScale():this.scaleRanges[a],s=0===i||t===i||Math.abs(t-i)<=1e-6;return Number((s?0:i).toFixed(6))}_getLayerLODS(){var e,i;return"imagery-tile"===(null==(e=this.layer)?void 0:e.type)&&"Raster"===(null==(i=this.layer.raster)?void 0:i.tileType)?null:this.get("layer.tileInfo.lods")}_getTiledLayerMinScale(){const e=this._getLayerLODS();return this.scaleRanges.clampMinScale(e[0].scale)}_getTiledLayerMaxScale(){const e=this._getLayerLODS();return e[e.length-1].scale}_hasTiledLayer(){return!!this._getLayerLODS()}};e([s()],o.prototype,"layer",void 0),e([s()],o.prototype,"maxScale",null),e([s()],o.prototype,"maxScaleLimit",null),e([s()],o.prototype,"minScale",null),e([s()],o.prototype,"minScaleLimit",null),e([s()],o.prototype,"scaleRanges",void 0),e([s()],o.prototype,"sliderViewModel",void 0),e([s({readOnly:!0})],o.prototype,"state",null),e([s()],o.prototype,"view",null),o=e([l("esri.widgets.ScaleRangeSlider.ScaleRangeSliderViewModel")],o);const c=o;export{c as default};
