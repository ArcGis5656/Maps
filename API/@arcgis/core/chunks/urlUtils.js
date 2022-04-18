/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{makeData as e,isAbsolute as a,join as r,isDataProtocol as t,dataComponents as i}from"../core/urlUtils.js";import{f as n,w as s}from"./persistableUrlUtils.js";function o(e,t){return function(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}(t)&&!a(e)&&t.layer.parsedUrl?r(t.layer.parsedUrl.path,"images",e):n(e,t)}const l={json:{read:{source:["imageData","url"],reader:function(a,r,t){return r.imageData?e({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):o(r.url,t)}},write:{writer(e,a,r,n){!function(e,a,r,n){if(t(e)){const t=i(e);a.contentType=t.mediaType,a.imageData=t.data,r&&r.imageData===a.imageData&&r.url&&s(r.url,a,"url",n)}else s(e,a,"url",n)}(e,a,this.source,n)}}}},u={readOnly:!0,json:{read:{source:["imageData","url"],reader(e,a,r){const t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=o(a.url,r)),t}}}};export{u as s,l as u};
