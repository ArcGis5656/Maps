/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import r from"../geometry/Point.js";import s from"./WebTileLayer.js";import i from"./support/LOD.js";import p from"./support/TileInfo.js";import l from"../portal/PortalItem.js";import n from"../geometry/SpatialReference.js";import a from"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"./Layer.js";import"../chunks/Evented.js";import"../chunks/Identifiable.js";import"../chunks/Loadable.js";import"../chunks/Promise.js";import"../chunks/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../chunks/_commonjsHelpers.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/persistableUrlUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/opacityUtils.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/Portal.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/RefreshableLayer.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/assets.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";let m=class extends s{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.tileInfo=new p({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new r({x:-20037508.342787,y:20037508.342787,spatialReference:n.WebMercator}),spatialReference:n.WebMercator,lods:[new i({level:0,scale:591657527.591555,resolution:156543.033928}),new i({level:1,scale:295828763.795777,resolution:78271.5169639999}),new i({level:2,scale:147914381.897889,resolution:39135.7584820001}),new i({level:3,scale:73957190.948944,resolution:19567.8792409999}),new i({level:4,scale:36978595.474472,resolution:9783.93962049996}),new i({level:5,scale:18489297.737236,resolution:4891.96981024998}),new i({level:6,scale:9244648.868618,resolution:2445.98490512499}),new i({level:7,scale:4622324.434309,resolution:1222.99245256249}),new i({level:8,scale:2311162.217155,resolution:611.49622628138}),new i({level:9,scale:1155581.108577,resolution:305.748113140558}),new i({level:10,scale:577790.554289,resolution:152.874056570411}),new i({level:11,scale:288895.277144,resolution:76.4370282850732}),new i({level:12,scale:144447.638572,resolution:38.2185141425366}),new i({level:13,scale:72223.819286,resolution:19.1092570712683}),new i({level:14,scale:36111.909643,resolution:9.55462853563415}),new i({level:15,scale:18055.954822,resolution:4.77731426794937}),new i({level:16,scale:9027.977411,resolution:2.38865713397468}),new i({level:17,scale:4513.988705,resolution:1.19432856685505}),new i({level:18,scale:2256.994353,resolution:.597164283559817}),new i({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};e([o({type:l,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",void 0),e([o({type:Boolean,json:{read:!1,write:!1}})],m.prototype,"isReference",void 0),e([o({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"refreshInterval",null),e([o({type:p,json:{write:!1}})],m.prototype,"tileInfo",void 0),e([o({type:["show","hide"]})],m.prototype,"listMode",void 0),e([o({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"subDomains",void 0),e([o({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],m.prototype,"fullExtent",void 0),e([o({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"urlTemplate",void 0),e([o({type:["OpenStreetMap"]})],m.prototype,"operationalLayerType",void 0),e([o({json:{read:!1}})],m.prototype,"type",void 0),e([o({json:{read:!1,write:!1}})],m.prototype,"copyright",void 0),e([o({json:{read:!1,write:!1}})],m.prototype,"wmtsInfo",void 0),m=e([t("esri.layers.OpenStreetMapLayer")],m);const c=m;export{c as default};
