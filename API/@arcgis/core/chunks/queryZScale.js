/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{b as e}from"../core/lang.js";import{g as o}from"./zscale.js";function r(r,t,a){if(!a||!a.features||!a.hasZ)return;const s=o(a.geometryType,t,r.outSpatialReference);if(!e(s))for(const e of a.features)s(e.geometry)}export{r as a};
