/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../symbols.js";import{E as i}from"./Evented.js";import s from"../core/Handles.js";import{k as r,clone as e,i as o,b as p}from"../core/lang.js";import{watch as a,whenOnce as n}from"../core/watchUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import c from"../layers/GraphicsLayer.js";import{c as h}from"./drawUtils.js";import{b as j}from"../widgets/Sketch/SketchViewModel.js";import{V as u}from"./InputManager.js";import{G as d}from"./GraphicManipulator.js";import{c as y}from"./screenUtils2.js";import g from"../symbols/SimpleMarkerSymbol.js";import v from"../symbols/SimpleLineSymbol.js";import f from"../symbols/SimpleFillSymbol.js";import"../symbols/CIMSymbol.js";import"./string.js";import"./object.js";import"./enumeration.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"../core/Error.js";import"./Logger.js";import"../config.js";import"./arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./metadata.js";import"./handleUtils.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils2.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"./shared.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"./Loadable.js";import"./Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./GraphicsCollection.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/HandleOwner.js";import"./reactiveUtils.js";import"../layers/Layer.js";import"./BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./ScaleRangeLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./DOMContainer.js";import"./domUtils.js";import"./projector.js";import"./widgetUtils.js";import"../widgets/Popup.js";import"../intl.js";import"./messages.js";import"./assets.js";import"./throttle.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"./jsxWidgetSupport.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"./languageUtils.js";import"./datetime.js";import"./number3.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils3.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./arcgisLayerUrl.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./zscale.js";import"./compilerUtils.js";import"./featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"./executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"../geometry/HeightModelInfo.js";import"./FeatureIndex.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./CustomParametersMixin.js";import"./FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"./OperationalLayer.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./OrderedLayer.js";import"./PortalLayer.js";import"./asyncUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./RefreshableLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./utils4.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils5.js";import"./layerViewUtils.js";import"./actions.js";import"./GoTo.js";import"./Queue.js";import"./elevationInfoUtils.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"./geodesicConstants.js";import"./keybindings.js";import"./vec2.js";import"./vec2f64.js";import"./Settings2.js";import"./RightAngleSnappingHint.js";import"./geometry2dUtils.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../geometry/projection.js";import"./pe.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./drapedUtils.js";class b{constructor(t,i,s,r,e){this.graphic=t,this.index=i,this.x=s,this.y=r,this.viewEvent=e,this.type="graphic-click"}}class w{constructor(t,i,s,r,e){this.graphic=t,this.index=i,this.x=s,this.y=r,this.viewEvent=e,this.type="graphic-double-click"}}class _{constructor(t,i,s,r,e,o,p,a,n,l){this.graphic=t,this.allGraphics=i,this.index=s,this.x=r,this.y=e,this.dx=o,this.dy=p,this.totalDx=a,this.totalDy=n,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class G{constructor(t,i,s,r,e,o,p,a,n,l){this.graphic=t,this.allGraphics=i,this.index=s,this.x=r,this.y=e,this.dx=o,this.dy=p,this.totalDx=a,this.totalDy=n,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class S{constructor(t,i,s,r,e,o,p,a,n,l){this.graphic=t,this.allGraphics=i,this.index=s,this.x=r,this.y=e,this.dx=o,this.dy=p,this.totalDx=a,this.totalDy=n,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class x{constructor(t,i,s,r,e){this.graphic=t,this.index=i,this.x=s,this.y=r,this.viewEvent=e,this.type="graphic-pointer-over"}}class U{constructor(t,i,s,r,e){this.graphic=t,this.index=i,this.x=s,this.y=r,this.viewEvent=e,this.type="graphic-pointer-out"}}class k{constructor(t,i,s,r,e){this.graphic=t,this.index=i,this.x=s,this.y=r,this.viewEvent=e,this.type="graphic-pointer-down"}}class I{constructor(t,i,s,r,e){this.graphic=t,this.index=i,this.x=s,this.y=r,this.viewEvent=e,this.type="graphic-pointer-up"}}let D=class extends i.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new s,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new s,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new c({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){j(this.view,this.layer),this.refresh(),this._handles.add([a(this,["graphics","graphics.length"],(()=>this.refresh())),n(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),u.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),u.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),u.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),u.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),u.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),u.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),u.TOOL)])}))])}destroy(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._handles=r(this._handles),this._viewHandles=r(this._viewHandles)}get state(){const t=!!this.get("view.ready"),i=!!this.get("graphics.length"),s=this._activeGraphic;return t&&i?s?"moving":"active":t?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,i){const s=this.graphics[t];s&&(s.set("geometry",i),this._setUpIndicators())}_clickHandler(t){const i=this._findTargetGraphic(y(t));if(i){const s=new b(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",s),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(s)}}_doubleClickHandler(t){const i=this._findTargetGraphic(y(t));if(i){const s=new w(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",s),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(s)}}_pointerDownHandler(t){const i=this._findTargetGraphic(y(t));if(i){this._activeGraphic=i;const{x:s,y:r}=t,e=new k(i,this.graphics.indexOf(i),s,r,t);this.emit("graphic-pointer-down",e),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(e)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),e=new I(this._activeGraphic,r,i,s,t);this.emit("graphic-pointer-up",e),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(e)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic(y(t));if(i){const{x:s,y:r}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const e=this.graphics.indexOf(this._hoverGraphic),o=new U(this.graphics[e],e,s,r,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",o),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(o)}const e=this.graphics.indexOf(i),o=new x(i,e,s,r,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",o),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(o))}if(this._hoverGraphic){const{x:i,y:s}=t,r=this.graphics.indexOf(this._hoverGraphic),e=new U(this.graphics[r],r,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",e),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(e)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:i,x:s,y:r}=t,o=this.graphics.indexOf(this._activeGraphic),p=this._dragEvent?s-this._dragEvent.x:0,a=this._dragEvent?r-this._dragEvent.y:0,n=s-t.origin.x,l=r-t.origin.y,m="start"===i?this._activeGraphic.geometry:this._initialDragGeometry,c=h(m,n,l,this.view);if(this._activeGraphic.geometry=c,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=h(t.geometry,p,a,this.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=e(m);const i=new _(this._activeGraphic,this.graphics,o,s,r,p,a,n,l,t);this.emit("graphic-move-start",i),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(i),i.defaultPrevented&&this._activeGraphic.set("geometry",m)}else if("update"===i){const i=new G(this._activeGraphic,this.graphics,o,s,r,p,a,n,l,t);this.emit("graphic-move",i),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(i),i.defaultPrevented&&(this._activeGraphic.geometry=m)}else{const i=new S(this._activeGraphic,this.graphics,o,s,r,p,a,n,l,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",i),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(i),i.defaultPrevented&&(this.graphics[o].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){const i=this.view.toMap(t);let s=null,r=Number.MAX_VALUE;this._syncLayerViews();const e=this._layerViews.flatMap((t=>"graphicsViews"in t?Array.from(t.graphicsViews(),(t=>t.hitTest(i))).flat():t.graphicsView.hitTest(i))).filter((t=>this.graphics.indexOf(t)>-1));return e.length?e[0]:(this._manipulators.forEach((i=>{const e=i.intersectionDistance(t);o(e)&&e<r&&(r=e,s=i.graphic)})),s)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const i of this.graphics){const s=this.view.allLayerViews.find((t=>{const s=t.layer;return"sublayers"in s&&o(s.sublayers)&&!!s.sublayers.find((t=>t===i.layer))||s===i.layer}));s&&t.add(s)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=null!=t&&t.length?t.map((t=>new d({graphic:t,view:i}))):[]}_setUpIndicators(){var t;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((t=>{const i=t.clone();return i.symbol=this._getSymbolForIndicator(t),i})))||[],this.layer.addMany(this._indicators))}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if(p(t.symbol))return null;switch(t.symbol.type){case"cim":return new g({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:s,height:r,width:e}=t.symbol,o=r===e?e:Math.max(r,e);return new g({xoffset:i,yoffset:s,size:o,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:s,size:r,style:e}=t.symbol;return new g({xoffset:i,yoffset:s,style:"circle"===e?"circle":"square",size:r+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new f({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new v({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:s}=t.symbol;return new g({xoffset:i,yoffset:s,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};t([l()],D.prototype,"_activeGraphic",void 0),t([l({readOnly:!0})],D.prototype,"type",void 0),t([l()],D.prototype,"callbacks",void 0),t([l()],D.prototype,"enableMoveAllGraphics",void 0),t([l()],D.prototype,"graphics",void 0),t([l()],D.prototype,"indicatorsEnabled",void 0),t([l()],D.prototype,"layer",void 0),t([l({readOnly:!0})],D.prototype,"state",null),t([l()],D.prototype,"view",void 0),D=t([m("esri.views.draw.support.GraphicMover")],D);const M=D;export{M as default};
