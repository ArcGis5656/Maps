/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import o from"../request.js";import{e as s}from"./screenUtils.js";import{S as t}from"../symbols/support/symbolUtils.js";import"../config.js";import"../core/lang.js";import"./object.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"./Logger.js";import"./string.js";import"../core/promiseUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"./ensureType.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"./utils6.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"./enumeration.js";import"../layers/support/fieldUtils.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"./Evented.js";import"./shared.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"./Loadable.js";import"./Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./asyncUtils.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./assets.js";import"./ItemCache.js";import"./MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";function r(r,m,i){const e=r.thumbnail&&r.thumbnail.url;return e?o(e,{responseType:"image"}).then((o=>{const r=function(o,r){const m=!/\\.svg$/i.test(o.src)&&r&&r.disableUpsampling,i=Math.max(o.width,o.height);let e=r&&null!=r.maxSize?s(r.maxSize):t.maxSize;m&&(e=Math.min(i,e));const l="number"==typeof(null==r?void 0:r.size)?null==r?void 0:r.size:null,p=Math.min(e,null!=l?s(l):i);if(p!==i){const s=0!==o.width&&0!==o.height?o.width/o.height:1;s>=1?(o.width=p,o.height=p/s):(o.width=p*s,o.height=p)}return o}(o.data,i);return i&&i.node?(i.node.appendChild(r),i.node):r})):r.fetchSymbol().then((o=>m(o,i)))}export{r as previewWebStyleSymbol};
