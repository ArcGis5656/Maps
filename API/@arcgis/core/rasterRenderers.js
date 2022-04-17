/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{W as s}from"./core/accessorSupport/decorators/subclass.js";import r from"./renderers/AnimatedFlowRenderer.js";export{default as AnimatedFlowRenderer}from"./renderers/AnimatedFlowRenderer.js";import o from"./renderers/ClassBreaksRenderer.js";export{default as ClassBreaksRenderer}from"./renderers/ClassBreaksRenderer.js";import e from"./renderers/RasterColormapRenderer.js";export{default as RasterColormapRenderer}from"./renderers/RasterColormapRenderer.js";import t from"./renderers/RasterShadedReliefRenderer.js";export{default as RasterShadedReliefRenderer}from"./renderers/RasterShadedReliefRenderer.js";import i from"./renderers/RasterStretchRenderer.js";export{default as RasterStretchRenderer}from"./renderers/RasterStretchRenderer.js";import p from"./renderers/UniqueValueRenderer.js";export{default as UniqueValueRenderer}from"./renderers/UniqueValueRenderer.js";import m from"./renderers/VectorFieldRenderer.js";export{default as VectorFieldRenderer}from"./renderers/VectorFieldRenderer.js";import"./core/lang.js";import"./chunks/metadata.js";import"./chunks/handleUtils.js";import"./chunks/Logger.js";import"./config.js";import"./chunks/object.js";import"./chunks/string.js";import"./chunks/ensureType.js";import"./core/Error.js";import"./chunks/tslib.es6.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./chunks/common.js";import"./chunks/JSONSupport.js";import"./core/Accessor.js";import"./chunks/deprecate.js";import"./core/accessorSupport/decorators/property.js";import"./chunks/ArrayPool.js";import"./core/scheduling.js";import"./chunks/nextTick.js";import"./core/promiseUtils.js";import"./chunks/screenUtils.js";import"./chunks/enumeration.js";import"./chunks/jsonMap.js";import"./symbols.js";import"./symbols/CIMSymbol.js";import"./chunks/reader.js";import"./chunks/writer.js";import"./layers/support/fieldUtils.js";import"./chunks/arcadeOnDemand.js";import"./geometry.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/SpatialReference.js";import"./geometry/Point.js";import"./core/accessorSupport/decorators/cast.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/Ellipsoid.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/extentUtils.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./symbols/Symbol.js";import"./symbols/ExtrudeSymbol3DLayer.js";import"./symbols/Symbol3DLayer.js";import"./chunks/utils.js";import"./symbols/edges/Edges3D.js";import"./chunks/materialUtils.js";import"./chunks/opacityUtils.js";import"./symbols/edges/SketchEdges3D.js";import"./symbols/edges/SolidEdges3D.js";import"./chunks/Symbol3DMaterial.js";import"./symbols/FillSymbol.js";import"./symbols/SimpleLineSymbol.js";import"./symbols/LineSymbol.js";import"./symbols/LineSymbolMarker.js";import"./symbols/FillSymbol3DLayer.js";import"./symbols/patterns/LineStylePattern3D.js";import"./symbols/patterns/StylePattern3D.js";import"./chunks/utils2.js";import"./chunks/colors.js";import"./chunks/symbolLayerUtils3D.js";import"./chunks/aaBoundingBox.js";import"./chunks/aaBoundingRect.js";import"./symbols/Font.js";import"./symbols/IconSymbol3DLayer.js";import"./core/urlUtils.js";import"./chunks/persistableUrlUtils.js";import"./symbols/LabelSymbol3D.js";import"./core/Collection.js";import"./chunks/Evented.js";import"./chunks/shared.js";import"./symbols/Symbol3D.js";import"./chunks/collectionUtils.js";import"./portal/Portal.js";import"./kernel.js";import"./request.js";import"./chunks/Loadable.js";import"./chunks/Promise.js";import"./chunks/locale.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalGroup.js";import"./symbols/LineSymbol3DLayer.js";import"./symbols/ObjectSymbol3DLayer.js";import"./symbols/PathSymbol3DLayer.js";import"./symbols/TextSymbol3DLayer.js";import"./symbols/WaterSymbol3DLayer.js";import"./chunks/Thumbnail.js";import"./chunks/Symbol3DVerticalOffset.js";import"./symbols/callouts/Callout3D.js";import"./symbols/callouts/LineCallout3D.js";import"./symbols/LineSymbol3D.js";import"./symbols/MarkerSymbol.js";import"./symbols/MeshSymbol3D.js";import"./symbols/PictureFillSymbol.js";import"./chunks/urlUtils.js";import"./symbols/PictureMarkerSymbol.js";import"./symbols/PointSymbol3D.js";import"./symbols/PolygonSymbol3D.js";import"./symbols/SimpleFillSymbol.js";import"./symbols/SimpleMarkerSymbol.js";import"./symbols/TextSymbol.js";import"./symbols/WebStyleSymbol.js";import"./renderers/Renderer.js";import"./renderers/support/AuthoringInfo.js";import"./renderers/support/AuthoringInfoVisualVariable.js";import"./chunks/colorRamps.js";import"./rest/support/AlgorithmicColorRamp.js";import"./rest/support/ColorRamp.js";import"./rest/support/MultipartColorRamp.js";import"./chunks/VisualVariablesMixin.js";import"./renderers/visualVariables/ColorVariable.js";import"./renderers/visualVariables/VisualVariable.js";import"./chunks/LegendOptions.js";import"./renderers/visualVariables/support/ColorStop.js";import"./renderers/visualVariables/OpacityVariable.js";import"./renderers/visualVariables/support/OpacityStop.js";import"./renderers/visualVariables/RotationVariable.js";import"./renderers/visualVariables/SizeVariable.js";import"./renderers/visualVariables/support/SizeStop.js";import"./chunks/sizeVariableUtils.js";import"./chunks/visualVariableUtils.js";import"./Graphic.js";import"./PopupTemplate.js";import"./popup/content.js";import"./popup/content/AttachmentsContent.js";import"./popup/content/Content.js";import"./popup/content/CustomContent.js";import"./popup/content/ExpressionContent.js";import"./popup/ElementExpressionInfo.js";import"./popup/content/FieldsContent.js";import"./popup/FieldInfo.js";import"./popup/support/FieldInfoFormat.js";import"./chunks/date.js";import"./chunks/number.js";import"./popup/content/MediaContent.js";import"./popup/content/BarChartMediaInfo.js";import"./chunks/chartMediaInfoUtils.js";import"./chunks/MediaInfo.js";import"./popup/content/support/ChartMediaInfoValue.js";import"./popup/content/support/ChartMediaInfoValueSeries.js";import"./popup/content/ColumnChartMediaInfo.js";import"./popup/content/ImageMediaInfo.js";import"./popup/content/support/ImageMediaInfoValue.js";import"./popup/content/LineChartMediaInfo.js";import"./popup/content/PieChartMediaInfo.js";import"./popup/content/TextContent.js";import"./popup/ExpressionInfo.js";import"./popup/LayerOptions.js";import"./popup/RelatedRecordsInfo.js";import"./popup/support/RelatedRecordsInfoFieldOrder.js";import"./support/actions/ActionBase.js";import"./chunks/Identifiable.js";import"./support/actions/ActionButton.js";import"./support/actions/ActionToggle.js";import"./chunks/compilerUtils.js";import"./chunks/lengthUtils.js";import"./chunks/unitUtils.js";import"./chunks/projectionEllipsoid.js";import"./renderers/support/ClassBreakInfo.js";import"./chunks/commonProperties2.js";import"./symbols/support/jsonUtils.js";import"./chunks/symbolConversion.js";import"./renderers/support/ColormapInfo.js";import"./chunks/colorRampUtils.js";import"./chunks/colorUtils2.js";import"./chunks/diffUtils.js";import"./renderers/support/UniqueValueInfo.js";import"./chunks/styleUtils.js";import"./geometry/support/normalizeUtils.js";import"./chunks/normalizeUtilsCommon.js";import"./chunks/vectorFieldUtils.js";import"./layers/support/PixelBlock.js";import"./chunks/pixelUtils.js";import"./chunks/utils4.js";import"./chunks/asyncUtils.js";import"./chunks/jsonUtils.js";import"./chunks/parser.js";import"./chunks/mat4.js";import"./chunks/_commonjsHelpers.js";import"./chunks/assets.js";import"./chunks/ItemCache.js";import"./chunks/MemCache.js";import"./symbols/support/cimSymbolUtils.js";import"./chunks/utils5.js";const n={key:"type",base:null,typeMap:{"unique-value":p,"class-breaks":o,"raster-colormap":e,"raster-stretch":i,"vector-field":m,"raster-shaded-relief":t,"animated-flow":r}},l={...n,typeMap:{...n.typeMap}};delete l.typeMap["vector-field"],delete l.typeMap["animated-flow"];const a={uniqueValue:p,classBreaks:o,rasterStretch:i,rasterColormap:e,vectorField:m,rasterShadedRelief:t,animatedFlow:r};function u(r,o){if(!r)return null;if("classBreaks"===r.type&&r.classificationMethod){const s=r.authoringInfo||{classificationMethod:""};s.classificationMethod=r.classificationMethod,r.authoringInfo=s}const e=function(s){return s&&a[s.type]||null}(r);if(e){const s=new e;return s.read(r,o),s}return o&&o.messages&&r&&o.messages.push(new s("renderer:unsupported","Renderers of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:o})),null}function j(s,r){return u(s,r)}export{j as fromJSON,n as rasterRendererTypes,u as read,l as websceneRasterRendererTypes};
