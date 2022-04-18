/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{g as i}from"./assets.js";import e from"../Graphic.js";import o from"../core/Accessor.js";import s from"../core/Error.js";import{E as r}from"./Evented.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import c from"../symbols/PictureMarkerSymbol.js";import{s as p,p as l}from"./geolocationUtils.js";import{G as d}from"./GoTo.js";let h=class extends(d(r.EventedMixin(o))){constructor(){super(...arguments),this._geolocationUsable=!0,this._iconPath=i("esri/images/support/sdk_gps_location.png"),this.geolocationOptions=null,this.goToLocationEnabled=!0,this.graphic=new e({symbol:new c({url:this._iconPath,width:21,height:21})}),this.scale=null,this.useHeadingEnabled=!0,this.view=null}initialize(){p()||(this._geolocationUsable=!1)}destroy(){this._clear(),this.view=null}_clear(){this.view&&this.view.graphics.remove(this.graphic)}_getScaleWithinConstraints(t,i){if(!i)return t;if("2d"===i.type){const{effectiveMaxScale:e,effectiveMinScale:o}=i.constraints;return Math.min(o,Math.max(e,t))}return t}_getScale(t){const{scale:i}=this,e="number"==typeof i?i:2500;return this._getScaleWithinConstraints(e,t)}_getHeading(t,i){const e=i&&i.spatialReference,o=e&&(e.isWebMercator||e.isGeographic),s=t.coords&&t.coords.heading;if(!(!o||"number"!=typeof s||isNaN(s)||s<0||s>360))return s}_addHeading(t){const{heading:i,target:e,view:o}=t;o&&"number"==typeof i&&!isNaN(i)&&("3d"!==o.type?"2d"===o.type&&(e.rotation=360-i):e.heading=i)}_animatePoint(t,i,e,o){const{view:s}=this;if(!this.goToLocationEnabled||!s)return Promise.resolve(i);const r=this.useHeadingEnabled?this._getHeading(i,s):void 0,a={target:t,scale:e};return this._addHeading({heading:r,target:a,view:s}),this.callGoTo({target:a,options:o}).then((()=>i))}async _setPosition(t,i){try{const e=await l({position:t,view:this.view},i),{graphic:o}=this,{timestamp:s}=t,{coords:r}=t,{accuracy:a,altitude:n,altitudeAccuracy:c,heading:p,latitude:d,longitude:h,speed:g}=r,m={timestamp:s,accuracy:a,altitude:n,altitudeAccuracy:c,heading:p,latitude:d,longitude:h,speed:g};o&&(o.geometry=e,o.attributes=m);const u=this._getScale(this.view);return this._animatePoint(e,t,u,i)}catch(t){throw new s("positioning:invalid-point","Cannot position invalid point",{error:t})}}};t([a()],h.prototype,"_geolocationUsable",void 0),t([a()],h.prototype,"geolocationOptions",void 0),t([a()],h.prototype,"goToLocationEnabled",void 0),t([a()],h.prototype,"graphic",void 0),t([a()],h.prototype,"scale",void 0),t([a()],h.prototype,"useHeadingEnabled",void 0),t([a()],h.prototype,"view",void 0),h=t([n("esri.widgets.support.GeolocationPositioning")],h);const g=h;export{g as G};
