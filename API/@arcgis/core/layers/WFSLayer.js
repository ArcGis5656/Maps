/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{r,w as s}from"../renderers/support/jsonUtils.js";import{i as o,u as i,h as p}from"../core/lang.js";import{M as n}from"../chunks/MultiOriginJSONSupport.js";import{s as a}from"../chunks/object.js";import{urlToObject as l}from"../core/urlUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import{I as u}from"../chunks/ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{w as y}from"../chunks/writer.js";import{f as d}from"../chunks/typeUtils.js";import j from"./Layer.js";import h from"../core/Error.js";import{HandleOwnerMixin as f}from"../core/HandleOwner.js";import{L as g}from"../chunks/Loadable.js";import{debounce as b,eachAlways as k}from"../core/promiseUtils.js";import{open as S}from"../core/workers/workers.js";import{c as w,a as v}from"../chunks/clientSideDefaults.js";import{getCapabilities as F,getWFSLayerInfo as I,prepareWFSLayerFields as O,findFeatureType as U,WFS_OID_FIELD_NAME as R}from"./ogc/wfsUtils.js";import C from"../rest/support/FeatureSet.js";import P from"../geometry/Extent.js";import{B as x}from"../chunks/BlendLayer.js";import{C as D}from"../chunks/CustomParametersMixin.js";import{F as T}from"../chunks/FeatureEffectLayer.js";import{O as L}from"../chunks/OperationalLayer.js";import{O as E}from"../chunks/OrderedLayer.js";import{P as q}from"../chunks/PortalLayer.js";import{R as V}from"../chunks/RefreshableLayer.js";import{S as M}from"../chunks/ScaleRangeLayer.js";import{T as N}from"../chunks/TemporalLayer.js";import{e as J,l as _,b as W,a as Q,p as X,d as Y,u as B}from"../chunks/commonProperties.js";import{f as A}from"../chunks/featureReductionUtils.js";import G from"./support/Field.js";import{d as z}from"../chunks/fieldProperties.js";import{fixRendererFields as H,fixTimeInfoFields as K}from"./support/fieldUtils.js";import Z from"./support/LabelClass.js";import{r as $}from"../chunks/labelingInfo.js";import ee from"../rest/support/Query.js";import{createPopupTemplate as te}from"../support/popupUtils.js";import re from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/reader.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../geometry/support/jsonUtils.js";import"../chunks/jsonMap.js";import"../core/Collection.js";import"../chunks/Evented.js";import"../chunks/shared.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number.js";import"../chunks/locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/arcadeOnDemand.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils2.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../core/Handles.js";import"../chunks/reactiveUtils.js";import"../core/watchUtils.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/assets.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/QueryEngineCapabilities.js";import"../chunks/defaultsJSON.js";import"../chunks/iteratorUtils.js";import"../geometry/projection.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/geojson.js";import"../chunks/OptimizedFeature.js";import"../chunks/xmlUtils.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/_commonjsHelpers.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"./support/FeatureReductionSelection.js";import"./support/FeatureReductionCluster.js";import"../chunks/labelUtils.js";import"./support/FieldsIndex.js";let se=class extends(f(g)){constructor(){super(...arguments),this.capabilities=w(!1,!1),this.type="wfs",this.refresh=b((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){var t;const r=null!=(t=o(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return C.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:P.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:t,customParameters:r,name:s,namespaceUri:o,spatialReference:p,fields:n,geometryType:a,swapXY:l}=this.layer;if(!t)throw new h("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await F(t,{customParameters:r,...e}));const m=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),u=m?await I(this.wfsCapabilities,s,o,{spatialReference:p,customParameters:r,signal:null==e?void 0:e.signal}):{...O(n),geometryType:a,name:s,namespaceUri:o,spatialReference:p,swapXY:l},c=i(U(this.wfsCapabilities.readFeatureTypes(),u.name,u.namespaceUri)),y=d.toJSON(u.geometryType);return{customParameters:r,featureType:c,fields:u.fields.map((e=>e.toJSON())),geometryField:u.geometryField,geometryType:y,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:u.objectIdField,spatialReference:u.spatialReference.toJSON(),swapXY:u.swapXY}}async _startWorker(e){const[t,r]=await k([this._createLoadOptions(e),S("WFSSourceWorker",{...e,strategy:p("feature-layers-workers")?"dedicated":"local"})]),s=t.error||r.error||null,o=r.value||null;if(s)throw o&&o.close(),s;const i=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",i,e);this.sourceJSON={extent:n,fields:i.fields,geometryType:i.geometryType,objectIdField:i.objectIdField,geometryField:i.geometryField,drawingInfo:v(i.geometryType),name:i.featureType.title,wfsInfo:{name:i.featureType.name,featureUrl:i.getFeatureUrl,maxFeatures:3e3,swapXY:i.swapXY,supportedSpatialReferences:i.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:i.featureType.namespaceUri}}}};e([m()],se.prototype,"capabilities",void 0),e([m({constructOnly:!0})],se.prototype,"layer",void 0),e([m()],se.prototype,"sourceJSON",void 0),e([m()],se.prototype,"type",void 0),e([m()],se.prototype,"wfsCapabilities",void 0),se=e([c("esri.layers.graphics.sources.WFSSource")],se);const oe=se;var ie;const pe=z();let ne=ie=class extends(E(D(T(x(N(V(M(L(q(n(j))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new oe({layer:this}),this.spatialReference=re.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:s,geometryType:o,name:i,namespaceUri:p,objectIdField:n,spatialReference:a,swapXY:l,url:m,wfsCapabilities:u}=e;return new ie({customParameters:t,fields:r,geometryField:s,geometryType:o,name:i,namespaceUri:p,objectIdField:n,spatialReference:a,swapXY:l,url:m,wfsCapabilities:u})}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),H(this.renderer,this.fieldsIndex),K(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const s=e.filter((e=>e.name!==R));this.geometryField&&s.unshift(new G({name:this.geometryField,alias:this.geometryField,type:"geometry"})),a(r,s.map((e=>e.toJSON())),t)}get parsedUrl(){return this.url?l(this.url):null}set renderer(e){H(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return te(this,e)}createQuery(){const e=new ee;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(ee.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(ee.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(ee.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(ee.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return o(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};e([m({readOnly:!0,aliasOf:"source.capabilities"})],ne.prototype,"capabilities",void 0),e([m({type:String})],ne.prototype,"copyright",void 0),e([m({readOnly:!0})],ne.prototype,"createQueryVersion",null),e([m({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],ne.prototype,"customParameters",void 0),e([m({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),e([m({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),e([m({type:String})],ne.prototype,"displayField",void 0),e([m(J)],ne.prototype,"elevationInfo",void 0),e([m(A)],ne.prototype,"featureReduction",void 0),e([m({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"featureUrl",void 0),e([m({type:[G],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],ne.prototype,"fields",void 0),e([y("fields")],ne.prototype,"writeFields",null),e([m(pe.fieldsIndex)],ne.prototype,"fieldsIndex",void 0),e([m({type:P,json:{name:"extent"}})],ne.prototype,"fullExtent",void 0),e([m()],ne.prototype,"geometryField",void 0),e([m({type:String,json:{read:{source:"layerDefinition.geometryType",reader:d.read},write:{target:"layerDefinition.geometryType",writer:d.write,ignoreOrigin:!0},origins:{service:{read:d.read}}}})],ne.prototype,"geometryType",void 0),e([m({type:String})],ne.prototype,"id",void 0),e([m(_)],ne.prototype,"labelsVisible",void 0),e([m({type:[Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:$},write:!0}})],ne.prototype,"labelingInfo",void 0),e([m(W)],ne.prototype,"legendEnabled",void 0),e([m({type:["show","hide"]})],ne.prototype,"listMode",void 0),e([m({type:String})],ne.prototype,"objectIdField",void 0),e([m({type:["WFS"]})],ne.prototype,"operationalLayerType",void 0),e([m({type:u,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"maxFeatures",void 0),e([m({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],ne.prototype,"mode",void 0),e([m({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"name",void 0),e([m({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"namespaceUri",void 0),e([m(Q)],ne.prototype,"opacity",void 0),e([m(pe.outFields)],ne.prototype,"outFields",void 0),e([m({readOnly:!0})],ne.prototype,"parsedUrl",null),e([m(X)],ne.prototype,"popupEnabled",void 0),e([m({type:t,json:{name:"popupInfo",write:!0}})],ne.prototype,"popupTemplate",void 0),e([m({types:r,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:s,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],ne.prototype,"renderer",null),e([m(Y)],ne.prototype,"screenSizePerspectiveEnabled",void 0),e([m({readOnly:!0})],ne.prototype,"source",void 0),e([m({type:re,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],ne.prototype,"spatialReference",void 0),e([m({readOnly:!0,type:[u],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"spatialReferences",void 0),e([m({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"swapXY",void 0),e([m({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],ne.prototype,"title",void 0),e([m({json:{read:!1},readOnly:!0})],ne.prototype,"type",void 0),e([m(B)],ne.prototype,"url",void 0),e([m({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],ne.prototype,"version",void 0),e([m({aliasOf:"source.wfsCapabilities"})],ne.prototype,"wfsCapabilities",void 0),ne=ie=e([c("esri.layers.WFSLayer")],ne);const ae=ne;export{ae as default};
