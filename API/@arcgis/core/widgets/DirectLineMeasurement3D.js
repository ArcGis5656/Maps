/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{o as e}from"../chunks/unitUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"./Widget.js";import n from"./DirectLineMeasurement3D/DirectLineMeasurement3DViewModel.js";import{a as m}from"../chunks/accessibleHandler.js";import{m as l}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as u}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../core/Error.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../intl.js";import"../chunks/number.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../chunks/uuid.js";import"../core/watchUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/Analysis.js";import"../chunks/Identifiable.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/defaultUnit.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/reactiveUtils.js";import"../chunks/ScreenSpacePass.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../chunks/mat4f64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils.js";import"../chunks/vec4f64.js";import"../geometry/projection.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/aaBoundingBox.js";import"../chunks/dehydratedFeatures.js";import"../chunks/byteSizeEstimations.js";import"../chunks/quantizationUtils.js";import"../layers/support/Field.js";import"../chunks/enumeration.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils2.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/sphere.js";import"../chunks/ray.js";import"../chunks/vectorStacks.js";import"../chunks/quatf64.js";import"../chunks/mathUtils2.js";import"../chunks/StencilUtils.js";import"../chunks/Texture.js";import"../chunks/Program.js";import"../chunks/parser.js";import"../chunks/_commonjsHelpers.js";import"../chunks/Util2.js";import"../chunks/vec2.js";import"../chunks/geometryDataUtils.js";import"../chunks/triangle.js";import"../chunks/lineSegment.js";import"../chunks/utils14.js";import"../chunks/mat3.js";import"../chunks/quat.js";import"../chunks/vec3f32.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/BufferView.js";import"../chunks/frustum.js";import"../chunks/plane.js";import"../chunks/InterleavedLayout.js";import"../chunks/types.js";import"../chunks/dragEventPipeline3D.js";import"../chunks/elevationInfoUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/ray2.js";import"../chunks/Intersector.js";import"../chunks/boundedPlane.js";import"../chunks/InteractiveToolBase.js";import"../chunks/drawUtils.js";import"../chunks/DOMContainer.js";import"../core/HandleOwner.js";import"./Popup.js";import"../chunks/throttle.js";import"./Feature.js";import"./Attachments.js";import"./Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./Feature/FeatureViewModel.js";import"../chunks/languageUtils.js";import"../chunks/datetime.js";import"../chunks/number3.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"../chunks/executeForTopCount.js";import"../chunks/utils3.js";import"../chunks/scaleUtils.js";import"../chunks/floorFilterUtils.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../chunks/compilerUtils.js";import"../chunks/featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"../layers/Layer.js";import"../chunks/FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../chunks/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/CustomParametersMixin.js";import"../chunks/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../chunks/OperationalLayer.js";import"../chunks/commonProperties.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/OrderedLayer.js";import"../chunks/PortalLayer.js";import"../chunks/asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../chunks/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/Heading.js";import"./support/widget.js";import"../chunks/vmEvent.js";import"./Spinner/SpinnerViewModel.js";import"../chunks/AnchorElementViewModel.js";import"./Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"../chunks/utils4.js";import"../chunks/ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils5.js";import"../chunks/InputManager.js";import"../chunks/Queue.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"../chunks/GoTo.js";import"../chunks/manipulatorUtils.js";import"../chunks/ElevationProvider.js";import"../chunks/Camera.js";import"../chunks/ColorMaterial.js";import"../chunks/OrderIndependentTransparency.js";import"../chunks/VertexColor.glsl.js";import"../chunks/viewUtils.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/VisualElement.js";import"../chunks/glUtil.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/measurementUtils.js";import"../geometry/geometryEngine.js";import"../chunks/geometryEngineBase.js";import"../chunks/hydrated.js";import"../geometry/support/geodesicUtils.js";import"../chunks/screenUtils2.js";import"../chunks/InteractiveToolViewModel.js";import"../chunks/interactiveToolUtils.js";const a="esri-direct-line-measurement-3d",c={buttonDisabled:"esri-button--disabled",base:`${a} esri-widget esri-widget--panel`,container:`${a}__container`,hint:`${a}__hint`,hintText:`${a}__hint-text`,panelError:`${a}__panel--error`,measurement:`${a}__measurement`,measurementItem:`${a}__measurement-item`,measurementItemDisabled:`${a}__measurement-item--disabled`,measurementItemTitle:`${a}__measurement-item-title`,measurementItemValue:`${a}__measurement-item-value`,settings:`${a}__settings`,units:`${a}__units`,unitsLabel:`${a}__units-label`,unitsSelect:`${a}__units-select esri-select`,unitsSelectWrapper:`${a}__units-select-wrapper`,actionSection:`${a}__actions`,newMeasurementButton:`${a}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-line"};let j=class extends p{constructor(s,t){super(s,t),this.view=null,this.visible=null,this.iconClass=c.widgetIcon,this.label=void 0,this.messages=null,this.messagesUnits=null,this.viewModel=new n,this.unitOptions=null,this.unit=null}render(){const{supported:s,active:t,state:r,measurement:o,unit:i}=this.viewModel,p="disabled"===r,n="ready"===r,m="measuring"===r||"measured"===r,{messages:l,messagesUnits:a}=this,j=t&&n?u("section",{key:"esri-direct-line-measurement-3d__hint",class:c.hint},u("p",{class:c.hintText},l.hint)):null,h=s?null:u("section",{key:"esri-direct-line-measurement-3d__unsupported",class:c.panelError},u("p",null,l.unsupported)),d=(s,t,e)=>{switch(t.state){case"available":return u("div",{key:`${e}-enabled`,class:c.measurementItem},u("span",{class:c.measurementItemTitle},s),u("span",{class:c.measurementItemValue},t.text));case"unavailable":return u("div",{key:`${e}-disabled`,class:this.classes(c.measurementItem,c.measurementItemDisabled)},u("span",{class:c.measurementItemTitle},s))}},k=m?u("section",{key:"esri-direct-line-measurement-3d__measurement",class:c.measurement},d(l.direct,o.directDistance,"direct"),d(l.horizontal,o.horizontalDistance,"horizontal"),d(l.vertical,o.verticalDistance,"vertical")):null,y=`${this.id}__units`,b=u("label",{class:c.unitsLabel,for:y},l.unit),g=u("div",{class:c.unitsSelectWrapper},u("select",{class:c.unitsSelect,id:y,onchange:this._changeUnit,bind:this,value:i},this.viewModel.unitOptions.map((s=>{var t;return u("option",{key:s,value:s},e(s)?a.systems[s]:null==(t=a.units[s])?void 0:t.pluralCapitalized)})))),f=u("section",{key:"esri-direct-line-measurement-3d__units",class:c.units},b,g),S=m?u("div",{key:"settings",class:c.settings},f):null,v=!s||t&&!m?null:u("div",{class:c.actionSection},u("button",{disabled:p,class:this.classes(c.newMeasurementButton,p&&c.buttonDisabled),bind:this,onclick:this._newMeasurement,type:"button"},l.newMeasurement)),U=this.visible?u("div",{class:c.container},h,j,S,k,v):null;return u("div",{key:this,class:c.base,role:"presentation"},U)}_newMeasurement(){t(this.viewModel.start())}_changeUnit(s){const t=s.target,e=t.options[t.selectedIndex];e&&(this.unit=e.value)}};s([r("viewModel.view")],j.prototype,"view",void 0),s([r("viewModel.visible")],j.prototype,"visible",void 0),s([r("viewModel.active")],j.prototype,"active",void 0),s([o()],j.prototype,"iconClass",void 0),s([o({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],j.prototype,"label",void 0),s([o(),l("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],j.prototype,"messages",void 0),s([o(),l("esri/core/t9n/Units")],j.prototype,"messagesUnits",void 0),s([o()],j.prototype,"uiStrings",void 0),s([o({type:n})],j.prototype,"viewModel",void 0),s([r("viewModel.unitOptions")],j.prototype,"unitOptions",void 0),s([r("viewModel.unit")],j.prototype,"unit",void 0),s([m()],j.prototype,"_newMeasurement",null),s([m()],j.prototype,"_changeUnit",null),j=s([i("esri.widgets.DirectLineMeasurement3D")],j);const h=j;export{h as default};
