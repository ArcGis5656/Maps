/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../core/Accessor.js";import{i as o}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{c as i}from"./queryEngineUtils.js";import"./deprecate.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../widgets/Sketch/SketchViewModel.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"./enumeration.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"./Evented.js";import"./shared.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"./Loadable.js";import"./Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/Handles.js";import"../core/reactiveUtils.js";import"../geometry/projection.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../layers/GraphicsLayer.js";import"./GraphicsCollection.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/HandleOwner.js";import"../layers/Layer.js";import"./BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./DOMContainer.js";import"./domUtils.js";import"./projector.js";import"./widgetUtils.js";import"../widgets/Popup.js";import"../intl.js";import"./messages.js";import"./throttle.js";import"../core/watchUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./jsxWidgetSupport.js";import"./widgetThemeUtils.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"./byteSizeEstimations.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"./languageUtils.js";import"./datetime.js";import"./number3.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./compilerUtils.js";import"./featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"./executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"./FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"./CustomParametersMixin.js";import"./FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"./OperationalLayer.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./OrderedLayer.js";import"./PortalLayer.js";import"./asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./RefreshableLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./versionUtils.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./utils6.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./InputManager.js";import"./Queue.js";import"./layerViewUtils.js";import"./actions.js";import"./GoTo.js";import"./elevationInfoUtils.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"./keybindings.js";import"./vec2.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"../core/sql/WhereClause.js";import"./utils11.js";import"./generateRendererUtils.js";import"./projectionSupport.js";import"./json.js";import"./utils17.js";import"./vec2f64.js";import"./Settings2.js";import"./RightAngleSnappingHint.js";import"./geometry2dUtils.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./screenUtils2.js";import"./PointSnappingHint.js";let p=class extends r{constructor(t){super(t)}get availability(){return 1}refresh(){}async fetchCandidates(t,r){const s=this.layerSource.layer.source;return s.querySnapping?(await s.querySnapping({distance:t.distance,point:t.coordinateHelper.vectorToPoint(t.point).toJSON(),types:t.types,query:o(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},{signal:r})).candidates.map((r=>i(r,t.coordinateHelper))):[]}};t([s({constructOnly:!0})],p.prototype,"layerSource",void 0),t([s({readOnly:!0})],p.prototype,"availability",null),p=t([e("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],p);export{p as FeatureCollectionSnappingSource};
