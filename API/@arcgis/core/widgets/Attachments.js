/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Error.js";import{e as s}from"../chunks/unitFormatUtils.js";import{on as i,init as o}from"../core/watchUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import{cast as n}from"../core/accessorSupport/decorators/cast.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import l from"./Widget.js";import p from"./Attachments/AttachmentsViewModel.js";import{g as c}from"../chunks/assets.js";import{s as h,f as d,i as u}from"../chunks/widgetUtils.js";import{m as b}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as j}from"../chunks/jsxFactory.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";import"../chunks/byteSizeEstimations.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../chunks/JSONSupport.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/ensureType.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../chunks/number.js";import"../chunks/locale.js";import"../intl.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../chunks/chartMediaInfoUtils.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils3.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils4.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../chunks/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../chunks/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/HandleOwner.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";const g={addButton:!0,addSubmitButton:!0,cancelAddButton:!0,cancelUpdateButton:!0,deleteButton:!0,errorMessage:!0,progressBar:!0,updateButton:!0},y="esri-attachments",f="esri-attachments__loader-container",_="esri-attachments__loader",k="esri-attachments__container",v="esri-attachments__container--list",w="esri-attachments__container--preview",A="esri-attachments__actions",S="esri-attachments__delete-button",M="esri-attachments__add-attachment-button",x="esri-attachments__error-message",I="esri-attachments__items",D="esri-attachments__item",F="esri-attachments__item-button",U="esri-attachments__item-mask",C="esri-attachments__item-mask--icon",E="esri-attachments__image",L="esri-attachments__image--resizable",O="esri-attachments__label",B="esri-attachments__filename",P="esri-attachments__item-chevron-icon",T="esri-attachments__item-link",z="esri-attachments__item-link-overlay",$="esri-attachments__item-link-overlay-icon",R="esri-attachments__item-add-icon",V="esri-attachments__form-node",H="esri-attachments__file-fieldset",W="esri-attachments__file-label",G="esri-attachments__file-name",Q="esri-attachments__file-input",q="esri-attachments__metadata",J="esri-attachments__metadata-fieldset",N="esri-attachments__progress-bar",X="esri-widget",K="esri-button",Y="esri-button--disabled",Z="esri-button--secondary",tt="esri-button--tertiary",et="esri-button--third",st="esri-button--small",it="esri-button--half",ot="esri-widget__content--empty",rt="esri-icon-right",nt="esri-icon-left",at="esri-icon-plus",mt=window.CSS;let lt=class extends l{constructor(t,e){super(t,e),this.abilities=null,this.displayType="auto",this.graphic=null,this.label=void 0,this.messages=null,this.messagesUnits=null,this.selectedFile=null,this.submitting=!1,this.viewModel=new p,this.visibleElements={...g},this._supportsImageOrientation=mt&&mt.supports&&mt.supports("image-orientation","from-image"),this._addAttachmentForm=null,this._updateAttachmentForm=null}initialize(){this.own(i(this,"viewModel.attachmentInfos","change",(()=>this.scheduleRender())),o(this,"viewModel.mode",(()=>this._modeChanged())))}get effectiveDisplayType(){const{displayType:t}=this;return t&&"auto"!==t?t:this.viewModel.supportsResizeAttachments?"preview":"list"}castVisibleElements(t){return{...g,...t}}addAttachment(){const{_addAttachmentForm:t,viewModel:s}=this;return this._set("submitting",!0),this._set("error",null),s.addAttachment(t).then((t=>(this._set("submitting",!1),this._set("error",null),s.mode="view",t))).catch((t=>{throw this._set("submitting",!1),this._set("error",new e("attachments:add-attachment",this.messages.addErrorMessage,t)),t}))}deleteAttachment(t){const{viewModel:s}=this;return this._set("submitting",!0),this._set("error",null),s.deleteAttachment(t).then((t=>(this._set("submitting",!1),this._set("error",null),s.mode="view",t))).catch((t=>{throw this._set("submitting",!1),this._set("error",new e("attachments:delete-attachment",this.messages.deleteErrorMessage,t)),t}))}updateAttachment(){const{viewModel:t}=this,{_updateAttachmentForm:s}=this;return this._set("submitting",!0),this._set("error",null),t.updateAttachment(s).then((e=>(this._set("submitting",!1),this._set("error",null),t.mode="view",e))).catch((t=>{throw this._set("submitting",!1),this._set("error",new e("attachments:update-attachment",this.messages.updateErrorMessage,t)),t}))}render(){const{submitting:t,viewModel:e}=this,{state:s}=e;return j("div",{class:this.classes(y,X)},t?this.renderProgressBar():null,"loading"===s?this.renderLoading():this.renderAttachments(),this.renderErrorMessage())}renderErrorMessage(){const{error:t,visibleElements:e}=this;return t&&e.errorMessage?j("div",{key:"error-message",class:x},t.message):null}renderAttachments(){const{mode:t,activeAttachmentInfo:e}=this.viewModel;return"add"===t?this.renderAddForm():"edit"===t?this.renderDetailsForm(e):this.renderAttachmentContainer()}renderLoading(){return j("div",{class:f,key:"loader"},j("div",{class:_}))}renderProgressBar(){return this.visibleElements.progressBar?j("div",{class:N,key:"progress-bar"}):null}renderAddForm(){const{submitting:t,selectedFile:e}=this,s=t||!e,i=this.visibleElements.cancelAddButton?j("button",{type:"button",bind:this,disabled:t,onclick:this._cancelForm,class:this.classes(K,tt,st,it,t&&Y)},this.messages.cancel):null,o=this.visibleElements.addSubmitButton?j("button",{type:"submit",disabled:s,class:this.classes(K,Z,st,it,{[Y]:s})},this.messages.add):null,r=e?j("span",{key:"file-name",class:G},e.name):null,n=j("form",{bind:this,afterCreate:h,afterRemoved:d,"data-node-ref":"_addAttachmentForm",onsubmit:this._submitAddAttachment},j("fieldset",{class:H},r,j("label",{class:this.classes(W,K,Z)},e?this.messages.changeFile:this.messages.selectFile,j("input",{class:Q,type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))),o,i);return j("div",{key:"add-form-container",class:V},n)}renderDetailsForm(t){const{visibleElements:e,viewModel:i,selectedFile:o,submitting:r}=this,{contentType:n,size:a,url:m}=t,{abilities:l}=i,p=r||!o,c=l.editing&&l.operations.delete&&e.deleteButton?j("button",{key:"delete-button",type:"button",disabled:r,bind:this,onclick:e=>this._submitDeleteAttachment(e,t),class:this.classes(K,st,tt,S,{[Y]:r})},this.messages.delete):null,u=l.editing&&l.operations.update&&e.updateButton?j("button",{disabled:p,key:"update-button",type:"submit",class:this.classes(K,st,et,{[Y]:p})},this.messages.update):null,b=this.visibleElements.cancelUpdateButton?j("button",{disabled:r,key:"cancel-button",type:"button",bind:this,onclick:this._cancelForm,class:this.classes(K,st,tt,et,{[Y]:r})},this.messages.cancel):null,g=o?j("span",{key:"file-name",class:G},o.name):null,y=l.editing&&l.operations.update?j("fieldset",{key:"file",class:H},g,j("label",{class:this.classes(W,K,Z)},this.messages.changeFile,j("input",{class:Q,type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))):null,f=j("fieldset",{key:"size",class:J},j("label",null,s(this.messagesUnits,a))),_=j("fieldset",{key:"content-type",class:J},j("label",null,n)),k=j("form",{bind:this,afterCreate:h,afterRemoved:d,"data-node-ref":"_updateAttachmentForm",onsubmit:this._submitUpdateAttachment},j("div",{class:q},f,_),y,j("div",{class:A},c,b,u));return j("div",{key:"edit-form-container",class:V},j("a",{class:T,href:m,rel:"noreferrer",target:"_blank"},this.renderImageMask({attachmentInfo:t,size:400}),j("div",{class:z},j("span",{class:$},j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},j("path",{d:"M28 13h1v16H3V3h16v1H4v24h24zm-5-9h4.293L15.646 15.638l.707.707L28 4.707V9h1V3h-6z"}),j("path",{fill:"none",d:"M0 0h32v32H0z"}))))),k)}renderImageMask({attachmentInfo:t,size:e}){const{supportsResizeAttachments:s}=this.viewModel,{contentType:i,name:o,url:r}=t,n=s&&function(t){const e=t.toLowerCase();return"image/bmp"===e||"image/emf"===e||"image/exif"===e||"image/gif"===e||"image/x-icon"===e||"image/jpeg"===e||"image/png"===e||"image/tiff"===e||"image/x-wmf"===e}(i),a=this._getCSSTransform(t,n),m=a?{transform:a,"image-orientation":"none"}:{},l=-1===r.indexOf("?")?"?":"&",p=n?`${r}${l}w=${e}`:function(t){const e=c("esri/themes/base/images/files/");return t?"text/plain"===t?`${e}text-32.svg`:"application/pdf"===t?`${e}pdf-32.svg`:"text/csv"===t?`${e}csv-32.svg`:"application/gpx+xml"===t?`${e}gpx-32.svg`:"application/x-dwf"===t?`${e}cad-32.svg`:"application/postscript"===t||"application/json"===t||"text/xml"===t||"model/vrml"===t?`${e}code-32.svg`:"application/x-zip-compressed"===t||"application/x-7z-compressed"===t||"application/x-gzip"===t||"application/x-tar"===t||"application/x-gtar"===t||"application/x-bzip2"===t||"application/gzip"===t||"application/x-compress"===t||"application/x-apple-diskimage"===t||"application/x-rar-compressed"===t||"application/zip"===t?`${e}zip-32.svg`:-1!==t.indexOf("image/")?`${e}image-32.svg`:-1!==t.indexOf("audio/")?`${e}sound-32.svg`:-1!==t.indexOf("video/")?`${e}video-32.svg`:-1!==t.indexOf("msexcel")||-1!==t.indexOf("ms-excel")||-1!==t.indexOf("spreadsheetml")?`${e}excel-32.svg`:-1!==t.indexOf("msword")||-1!==t.indexOf("ms-word")||-1!==t.indexOf("wordprocessingml")?`${e}word-32.svg`:-1!==t.indexOf("powerpoint")||-1!==t.indexOf("presentationml")?`${e}report-32.svg`:`${e}generic-32.svg`:`${e}generic-32.svg`}(i),h={[C]:!n},d={[L]:s};return j("div",{class:this.classes(h,U)},j("img",{styles:m,alt:o,src:p,class:this.classes(d,E)}))}renderAttachmentInfo({attachmentInfo:t,displayType:e}){const{viewModel:s}=this,{abilities:i}=s,{name:o,url:r}=t,n=this.renderImageMask({attachmentInfo:t,size:"list"===e?48:400}),a=i.editing?j("span",{"aria-hidden":"true",class:this.classes(P,u(this.container)?nt:rt)}):null,m=[n,j("label",{class:O},j("span",{class:B},o||this.messages.noTitle),a)],l=i.editing?j("button",{key:"details-button",bind:this,class:F,title:this.messages.attachmentDetails,"aria-label":this.messages.attachmentDetails,"data-attachment-info-id":t.id,onclick:()=>this._startEditAttachment(t),type:"button"},m):j("a",{key:"details-link",class:F,href:r,target:"_blank"},m);return j("li",{class:D,key:t},l)}renderAttachmentContainer(){const{effectiveDisplayType:t,viewModel:e,visibleElements:s}=this,{attachmentInfos:i,abilities:o}=e,r=i&&i.length,n={[v]:"preview"!==t,[w]:"preview"===t},a=o.editing&&o.operations.add&&s.addButton?j("button",{bind:this,onclick:()=>this._startAddAttachment(),class:this.classes(K,tt,M),type:"button"},j("span",{"aria-hidden":"true",class:this.classes(R,at)}),this.messages.add):null,m=r?j("ul",{class:I},i.toArray().map((e=>this.renderAttachmentInfo({attachmentInfo:e,displayType:t})))):j("div",{class:ot},this.messages.noAttachments);return j("div",{key:"attachments-container",class:this.classes(k,n)},m,a)}_modeChanged(){this._set("error",null),this._set("selectedFile",null)}_handleFileInputChange(t){const e=t.target,s=e&&e.files&&e.files.item(0);this._set("selectedFile",s)}_submitDeleteAttachment(t,e){t.preventDefault(),this.deleteAttachment(e)}_submitAddAttachment(t){t.preventDefault(),this.addAttachment()}_submitUpdateAttachment(t){t.preventDefault(),this.updateAttachment()}_startEditAttachment(t){const{viewModel:e}=this;e.activeAttachmentInfo=t,e.mode="edit"}_startAddAttachment(){this.viewModel.mode="add"}_cancelForm(t){t.preventDefault(),this.viewModel.mode="view"}_getCSSTransform(t,e){const{orientationInfo:s}=t;return!this._supportsImageOrientation&&e&&s?[s.rotation?`rotate(${s.rotation}deg)`:"",s.mirrored?"scaleX(-1)":""].join(" "):""}};t([r("viewModel.abilities")],lt.prototype,"abilities",void 0),t([a()],lt.prototype,"displayType",void 0),t([a({readOnly:!0})],lt.prototype,"effectiveDisplayType",null),t([r("viewModel.graphic")],lt.prototype,"graphic",void 0),t([a({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],lt.prototype,"label",void 0),t([a(),b("esri/widgets/Attachments/t9n/Attachments")],lt.prototype,"messages",void 0),t([a(),b("esri/core/t9n/Units")],lt.prototype,"messagesUnits",void 0),t([a({readOnly:!0})],lt.prototype,"selectedFile",void 0),t([a({readOnly:!0})],lt.prototype,"submitting",void 0),t([a({readOnly:!0})],lt.prototype,"error",void 0),t([a({type:p})],lt.prototype,"viewModel",void 0),t([a()],lt.prototype,"visibleElements",void 0),t([n("visibleElements")],lt.prototype,"castVisibleElements",null),lt=t([m("esri.widgets.Attachments")],lt);const pt=lt;export{pt as default};
