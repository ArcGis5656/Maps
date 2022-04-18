/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{aliasOf as e}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import i from"./Widget.js";import p from"./Slice/SliceViewModel.js";import{H as n}from"../chunks/Heading.js";import"../chunks/widgetUtils.js";import{m}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as l}from"../chunks/jsxFactory.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../analysis/SliceAnalysis.js";import"../chunks/Analysis.js";import"../chunks/Clonable.js";import"../chunks/Identifiable.js";import"../analysis/SlicePlane.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/persistable.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/persistableUrlUtils.js";import"../chunks/mathUtils2.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/collectionUtils.js";import"../chunks/RenderCoordsHelper.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/mat4.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/sphere.js";import"../chunks/vec4f64.js";import"../chunks/ray.js";import"../chunks/vectorStacks.js";import"../chunks/byteSizeEstimations.js";import"../chunks/quatf64.js";import"../chunks/mat4f64.js";import"../chunks/vec2f64.js";import"../chunks/boundedPlane.js";import"../chunks/lineSegment.js";import"../chunks/plane.js";import"../chunks/ElevationProvider.js";import"../chunks/ViewingMode.js";import"../chunks/spatialReferenceSupport.js";import"../chunks/sliceToolUtils.js";import"../chunks/compilerUtils.js";import"../chunks/screenUtils.js";import"../chunks/quat.js";import"../chunks/LineVisualElement.js";import"../chunks/vec4f32.js";import"../chunks/Object3DVisualElement.js";import"../chunks/VisualElement.js";import"../chunks/basicInterfaces.js";import"../chunks/DefaultBufferWriter.js";import"../chunks/Material.js";import"../chunks/VertexAttribute.js";import"../chunks/aaBoundingBox.js";import"../chunks/Util.js";import"../chunks/vec2.js";import"../chunks/utils2.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/frustum.js";import"../chunks/dehydratedFeatures.js";import"../chunks/quantizationUtils.js";import"../layers/support/Field.js";import"../chunks/enumeration.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/glUtil3D.js";import"../chunks/geometryDataUtils.js";import"../chunks/triangle.js";import"../chunks/BufferView.js";import"../chunks/ShaderBuilder.js";import"../chunks/mat4f32.js";import"../chunks/enums.js";import"../chunks/Texture.js";import"../chunks/context-util.js";import"../chunks/VertexElementDescriptor.js";import"../chunks/VertexArrayObject.js";import"../chunks/RenderSlot.js";import"../chunks/InterleavedLayout.js";import"../chunks/types.js";import"../chunks/lineUtils.js";import"../chunks/triangulationUtils.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import"../core/watchUtils.js";import"../chunks/vec2f32.js";import"../chunks/FramebufferObject.js";import"../chunks/NestedMap.js";import"../chunks/Camera.js";import"../chunks/glUtil.js";import"../chunks/OrderIndependentTransparency.js";import"../chunks/VisualVariables.glsl.js";import"../chunks/vec3f32.js";import"../chunks/weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"../chunks/ReadShadowMap.glsl.js";import"../chunks/MemCache.js";import"../chunks/heatmapUtils.js";import"../chunks/ScreenSpacePass.js";import"../chunks/Intersector.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/floatRGBA.js";import"../chunks/Scheduler.js";import"../chunks/debugFlags.js";import"../chunks/manipulatorUtils.js";import"../chunks/ray2.js";import"../chunks/interfaces.js";import"../chunks/GeometryUtil.js";import"../chunks/ColorMaterial.js";import"../chunks/VertexColor.glsl.js";import"../chunks/ImageMaterial.js";import"../chunks/GLMaterialTexture.js";import"../chunks/NativeLineMaterial.js";import"../chunks/Factory.js";import"../chunks/Texture2.js";import"../chunks/requestImageUtils.js";import"../chunks/dragEventPipeline3D.js";import"../chunks/elevationInfoUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/InteractiveToolBase.js";import"../chunks/drawUtils.js";import"../chunks/DOMContainer.js";import"../core/HandleOwner.js";import"./Popup.js";import"../chunks/throttle.js";import"./Feature.js";import"./Attachments.js";import"../chunks/unitFormatUtils.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../chunks/languageUtils.js";import"../chunks/datetime.js";import"../chunks/number3.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"../chunks/executeForTopCount.js";import"../chunks/utils5.js";import"../chunks/scaleUtils.js";import"../chunks/floorFilterUtils.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/_commonjsHelpers.js";import"../chunks/CustomParametersMixin.js";import"../chunks/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/OrderedLayer.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/vmEvent.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils6.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils7.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../chunks/GoTo.js";import"../chunks/screenUtils2.js";import"../chunks/InteractiveAnalysisViewModel.js";import"../chunks/InteractiveToolViewModel.js";const u="esri-slice",a={buttonDisabled:"esri-button--disabled",layerIncludeButton:"esri-slice__cross",widgetIcon:"esri-icon-slice",base:`${u} esri-widget esri-widget--panel`,layerList:`${u}__settings`,layerListHeading:"esri-slice__settings-title",layerItem:`${u}__layer-item`,layerItemTitle:`${u}__layer-item__title`,container:`${u}__container`,actionSection:"esri-slice__actions",hint:`${u}__hint`,hintText:`${u}__hint-text`,panelError:`${u}__panel--error`,newSliceButton:`${u}__clear-button esri-button esri-button--primary`,excludeButton:`${u}__exclude-button esri-button esri-button--secondary`,cancelButton:`${u}__cancel-button esri-button esri-button--secondary`};let c=class extends i{constructor(s,t){super(s,t),this.headingLevel=3,this.iconClass=a.widgetIcon,this.label=void 0,this.messages=null,this.view=null,this.viewModel=new p}loadDependencies(){return Promise.all([import("../chunks/calcite-button.js"),import("../chunks/calcite-icon.js")])}get analysis(){return this.viewModel.analysis}set analysis(s){this.viewModel.analysis=s}render(){const s=this.viewModel.supported,t=this.viewModel.active,e="disabled"===this.viewModel.state,r="ready"===this.viewModel.state,o="slicing"===this.viewModel.state||"sliced"===this.viewModel.state,i="exclude"===this.viewModel.layersMode,{messages:p}=this,m=e&&a.buttonDisabled,u=t&&!o||i?null:l("button",{disabled:e,class:this.classes(a.newSliceButton,m),bind:this,onclick:this._onNewSliceClick,key:"esri-slice__clear",type:"button"},p.newSlice),c=o&&!i?l("button",{class:this.classes(a.excludeButton,m),bind:this,onclick:()=>{this.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude",type:"button"},p.excludeLayer):null,j=t&&i?l("button",{class:this.classes(a.cancelButton,m),bind:this,onclick:()=>{this.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude",type:"button"},p.cancel):null;let h=null;t&&(i?h=p.excludeHint:r&&(h=p.hint));const d=h?l("div",{class:a.hint,key:"esri-slice__hint"},l("p",{class:a.hintText},h)):null,k=this.excludedLayers?this.excludedLayers.toArray().map((s=>this._renderLayerItem({uid:s.uid,title:s.title,onClick:()=>(this.excludedLayers.remove(s),!1)}))):[];this.excludeGroundSurface&&k.push(this._renderLayerItem({uid:"ground",title:p.ground,onClick:()=>(this.excludeGroundSurface=!1,!1)}));const y=!i&&o&&k.length>0?l("div",{class:a.layerList,key:"esri-slice__settings"},l(n,{class:a.layerListHeading,level:this.headingLevel},p.excludedLayers),l("ul",null,k)):null,b=l("div",{class:a.panelError,key:"esri-slice__unsupported"},l("p",null,p.unsupported)),f=l("div",{class:a.actionSection},c,j,u),g=this.visible?l("div",{class:a.container},s?[d,y,f]:b):null;return l("div",{class:a.base,role:"presentation"},g)}_renderLayerItem(s){return l("li",{class:a.layerItem,key:s.uid},l("calcite-button",{appearance:"transparent",class:a.layerIncludeButton,"icon-start":"x",scale:"s",title:this.messages.includeLayer,bind:this,onclick:s.onClick}),l("div",{class:a.layerItemTitle},s.title))}_onNewSliceClick(){t(this.viewModel.start())}};s([e("viewModel.active")],c.prototype,"active",void 0),s([r({constructOnly:!0,nonNullable:!0})],c.prototype,"analysis",null),s([e("viewModel.excludedLayers")],c.prototype,"excludedLayers",void 0),s([e("viewModel.excludeGroundSurface")],c.prototype,"excludeGroundSurface",void 0),s([r()],c.prototype,"headingLevel",void 0),s([r()],c.prototype,"iconClass",void 0),s([r({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0),s([r(),m("esri/widgets/Slice/t9n/Slice")],c.prototype,"messages",void 0),s([e("viewModel.view")],c.prototype,"view",void 0),s([r({type:p})],c.prototype,"viewModel",void 0),s([e("viewModel.visible")],c.prototype,"visible",void 0),c=s([o("esri.widgets.Slice")],c);const j=c;export{j as default};
