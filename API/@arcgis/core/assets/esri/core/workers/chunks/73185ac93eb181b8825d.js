"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1861,8642],{69586:(e,a,t)=>{t.d(a,{c:()=>l});var r=t(32101),n=t(49900);function l(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},8642:(e,a,t)=>{t.r(a),t.d(a,{a:()=>m,g:()=>f,l:()=>h,p:()=>p,r:()=>u});var r=t(60991),n=t(67902),l=t(49900),i=t(69586),s=t(68714),o=t(82058);async function u(e){const{data:a}=await(0,o.default)(e,{responseType:"json",query:{f:"json"}});return a}function c(e,a,t){let r=t.layers||[];const n=t.tables||[];"Feature Collection"===e.portalItem.type&&(r.forEach((e=>{var a;"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&n.push(e)})),r=r.filter((e=>{var a;return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)}))),r.reverse().forEach((r=>{const n=y(e,a,t,r);e.add(n)})),n.reverse().forEach((r=>{const n=y(e,a,t,r);e.tables.add(n)}))}function y(e,a,t,r){const n=new a({portalItem:e.portalItem.clone(),layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};n.read(r,a);const i=t.showLegend;null!=i&&n.read({showLegend:i},a)}return n}function d(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",a).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let a,r=!0;return e&&f(e)>0&&(null==t.layerId&&(t.layerId=m(e)),a=function(e,a){const t=e.layers;if(t)for(let e=0;e<t.length;e++)if(t[e].id===a)return t[e];const r=e.tables;if(r)for(let e=0;e<r.length;e++)if(r[e].id===a)return r[e];return null}(e,t.layerId),a&&(1===f(e)&&(r=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),r&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function p(e,a){var t,r;if(null==(null==(t=e)?void 0:t.layers)||null==(null==(r=e)?void 0:r.tables)){const t=await u(a);(e=e||{}).layers=e.layers||(null==t?void 0:t.layers),e.tables=e.tables||(null==t?void 0:t.tables)}return e}function m(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function f(e){var a,t,r,n;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(r=null==e||null==(n=e.tables)?void 0:n.length)?r:0)}const h=Object.freeze({__proto__:null,load:async function(e,a){const t=e.instance.portalItem;return t&&t.id?(await t.load(a),function(e){const a=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(a.type))throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,l=t.portalItem,{url:o,title:y}=l,m=(0,i.c)(l);if("group"===t.type)return t.read({title:y},m),function(e,a){let t;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":t=n.l.FeatureLayer;break;case"Stream Service":t=n.l.StreamLayer;break;case"Scene Service":t=n.l.SceneLayer;break;default:throw new r.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return t().then((e=>(i=e,d(a)))).then((async a=>"Feature Service"===l?(a=await p(a,e.portalItem.url),c(e,i,a)):f(a)>0?c(e,i,a):function(e,a){return e.portalItem.url?u(e.portalItem.url).then((t=>{var r,n;function l(e){return{id:e.id,name:e.name}}t&&c(e,a,{layers:null==(r=t.layers)?void 0:r.map(l),tables:null==(n=t.tables)?void 0:n.map(l)})})):Promise.resolve()}(e,i)))}(t,e);o&&t.read({url:o},m);const h=await d(e,a);return h&&t.read(h,m),t.resourceReferences={portalItem:l,paths:m.readResourcePaths},t.read({title:y},m),(0,s.l)(t,m)}(e,a)):Promise.resolve()},preprocessFSItemData:p,getFirstLayerOrTableId:m,getNumLayersAndTables:f})},67902:(e,a,t)=>{t.d(a,{l:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(949),t.e(7963)]).then(t.bind(t,37963))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(1580),t.e(8640),t.e(4044),t.e(3439)]).then(t.bind(t,3439))).default,CSVLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(1580),t.e(8640),t.e(4004)]).then(t.bind(t,44004))).default,ElevationLayer:async()=>(await Promise.all([t.e(1688),t.e(2204)]).then(t.bind(t,72204))).default,FeatureLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(1580),t.e(8640),t.e(2163)]).then(t.bind(t,68640))).default,GroupLayer:async()=>(await Promise.all([t.e(949),t.e(1128)]).then(t.bind(t,1128))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(2197)]).then(t.bind(t,92197))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(9039)]).then(t.bind(t,99039))).default,ImageryLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(1580),t.e(7195),t.e(5214),t.e(7108)]).then(t.bind(t,77108))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(1623),t.e(1688),t.e(7195),t.e(5214),t.e(4489),t.e(9472)]).then(t.bind(t,79472))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(1623),t.e(4044),t.e(1244)]).then(t.bind(t,21244))).default,KMLLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(1903)]).then(t.bind(t,21903))).default,MapImageLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(3049),t.e(2883),t.e(3706)]).then(t.bind(t,62883))).default,MapNotesLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(1623),t.e(3505),t.e(8957),t.e(1580),t.e(8640),t.e(1135)]).then(t.bind(t,41135))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(3958)]).then(t.bind(t,63958))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(949),t.e(3799),t.e(6043)]).then(t.bind(t,16043))).default,PointCloudLayer:async()=>(await Promise.all([t.e(6748),t.e(4044),t.e(5032)]).then(t.bind(t,25032))).default,RouteLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(1623),t.e(3920),t.e(1892),t.e(5850)]).then(t.bind(t,65850)).then((e=>e.R))).default,SceneLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(1580),t.e(8640),t.e(4044),t.e(3741)]).then(t.bind(t,3741))).default,StreamLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(8957),t.e(8324)]).then(t.bind(t,58324))).default,TileLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(3505),t.e(1688),t.e(3049),t.e(560)]).then(t.bind(t,90611))).default,UnknownLayer:async()=>(await t.e(3117).then(t.bind(t,63117))).default,UnsupportedLayer:async()=>(await t.e(8243).then(t.bind(t,88243))).default,VectorTileLayer:async()=>(await Promise.all([t.e(949),t.e(1688),t.e(5414),t.e(6611),t.e(6491)]).then(t.bind(t,46491))).default,VoxelLayer:async()=>(await Promise.all([t.e(4044),t.e(2241)]).then(t.bind(t,72241))).default,WebTileLayer:async()=>(await Promise.all([t.e(949),t.e(3799)]).then(t.bind(t,3799)).then((e=>e.a))).default,WFSLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(9857),t.e(4057),t.e(208),t.e(1623),t.e(3505),t.e(8957),t.e(4797)]).then(t.bind(t,44797))).default,WMSLayer:async()=>(await Promise.all([t.e(949),t.e(135),t.e(6748),t.e(3561)]).then(t.bind(t,73561))).default,WMTSLayer:async()=>(await Promise.all([t.e(949),t.e(3799),t.e(2790)]).then(t.bind(t,82790))).default}},21861:(e,a,t)=>{t.r(a),t.d(a,{fromItem:()=>o,selectLayerClassPath:()=>u});var r=t(60991),n=t(67902),l=t(56420),i=t(8642);function s(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}function o(e){return!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)}),(a=e.portalItem,a.load().then(u).then(c)).then((a=>{const t={portalItem:e.portalItem,...a.properties},r=a.constructor;return Promise.resolve(new r(t))}));var a}function u(e){switch(e.type){case"Map Service":return function(e){return(0,i.r)(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return y(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){if(await e.load(),s(e,"Map Notes"))return{className:"MapNotesLayer"};if(s(e,"Route Layer"))return{className:"RouteLayer"};const a=await e.fetchData();return 1===(0,i.g)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return y(e).then((a=>{if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r=`${e.url}/layers/${a.id}`):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(-1!==e.typeKeywords.indexOf(t))return{className:a[t]}}return(0,i.r)(r).then((e=>{let a="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(a=r[e.layerType]),{className:a,properties:t}}))}return!1===a?(0,i.r)(e.url).then((e=>"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,t,r;await e.load();const n=null!=(a=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),s=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===s?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===s?{className:"ImageryLayer"}:"map"===(null==(r=(await(0,i.r)(e.url)).cacheType)?void 0:r.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function c(e){return(0,n.l[e.className])().then((a=>({constructor:a,properties:e.properties})))}function y(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async a=>"Feature Service"===e.type?d(a=await(0,i.p)(a,e.url)):(0,i.g)(a)>0?d(a):(0,i.r)(e.url).then(d)))}function d(e){return 1===(0,i.g)(e)&&{id:(0,i.a)(e)}}t(76506),t(92143),t(31450),t(71552),t(40642),t(73173),t(82058),t(88762),t(32101),t(50406),t(74673),t(21972),t(23639),t(60474),t(66396),t(22723),t(17533),t(86656),t(6540),t(91306),t(91055),t(34250),t(19657),t(6906),t(22739),t(20543),t(97714),t(21801),t(73796),t(60947),t(2906),t(91597),t(86787),t(35132),t(89623),t(49900),t(3482),t(67477),t(57251),t(78533),t(74653),t(91091),t(58943),t(74742),t(28239),t(69586),t(68714),t(41864)},68714:(e,a,t)=>{t.d(a,{l:()=>i});var r=t(41864),n=t(50406),l=t(17533);async function i(e,a,t){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(i&&"unique-value"===i.type&&i.styleOrigin){const s=await(0,r.r)(i.populateFromStyle());if((0,n.k_)(t),!1===s.ok){const t=s.error;a&&a.messages&&a.messages.push(new l.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:a})),e.clear("renderer",a.origin)}}}}}]);