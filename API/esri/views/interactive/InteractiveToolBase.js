// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../DOMContainer ./interfaces ./ManipulatorCollection".split(" "),function(c,h,d,m,n,p,k,e,w,x,y,q,r,f,t){const u=n.getLogger("esri.views.interactive.InteractiveToolBase");c.InteractiveToolBase=
function(l){function g(a){a=l.call(this,a)||this;a.manipulators=new t.ManipulatorCollection;a.updating=!1;a.automaticManipulatorSelection=!0;a._editableFlags=new Map([[f.EditableFlag.MANAGER,!0],[f.EditableFlag.USER,!0]]);a._creationStartedResolver=k.createResolver();a._creationFinishedResolver=k.createResolver();return a}h._inheritsLoose(g,l);var b=g.prototype;b.initialize=function(){this._syncVisible()};b.destroy=function(){this.manipulators.destroy();this._set("view",null)};b.activate=function(){p.isNone(this.view)?
u.error("Can't activate tool if view is not defined."):(r.isDOMContainer(this.view)&&this.view.focus(),this.onActivate())};b.deactivate=function(){this.onDeactivate()};b.handleInputEvent=function(a){this.onInputEvent(a)};b.handleInputEventAfter=function(a){this.onInputEventAfter(a)};b.setEditableFlag=function(a,v){this._editableFlags.set(a,v);this.manipulators.isToolEditable=this.internallyEditable;this._updateManipulatorAttachment();a===f.EditableFlag.USER&&this.notifyChange("editable");this.onEditableChange()};
b.getEditableFlag=function(a){return this._editableFlags.get(a)};b.whenCreationStarted=function(){return this._creationStartedResolver.promise};b.whenCreated=function(){return this._creationFinishedResolver.promise};b.rejectCreation=function(a){"pending"!==this.toolState&&"creating"!==this.toolState||this._creationStartedResolver.resolve(this);this._creationFinishedResolver.reject(a)};b.onActivate=function(){};b.onDeactivate=function(){};b.onShow=function(){};b.onHide=function(){};b.onEditableChange=
function(){};b.onInputEvent=function(a){};b.onInputEventAfter=function(a){};b.startToolCreation=function(){if("pending"===this.toolState)this._creationStartedResolver.resolve(this),this.toolState="creating";else throw Error(`Unexpected tool state ${this.toolState}`);};b.finishToolCreation=function(){switch(this.toolState){case "pending":this.startToolCreation();case "creating":this.created||this._creationFinishedResolver.resolve(this);this.toolState="created";break;case "created":break;default:throw Error(`Unexpected tool state ${this.toolState}`);
}};b._syncVisible=function(){"pending"!==this.toolState&&(this.visible?this._show():(this._hide(),this.active&&(this.view.activeTool=null)))};b._show=function(){this._updateManipulatorAttachment();this.onShow()};b._hide=function(){this._updateManipulatorAttachment();this.onHide()};b._updateManipulatorAttachment=function(){this.visible?this.manipulators.attach():this.manipulators.detach()};h._createClass(g,[{key:"toolState",set:function(a){this._set("toolState",a);this._syncVisible()}},{key:"active",
get:function(){return null!=this.view&&this.view.activeTool===this}},{key:"visible",set:function(a){this._get("visible")!==a&&(this._set("visible",a),this._syncVisible())}},{key:"editable",get:function(){return this.getEditableFlag(f.EditableFlag.USER)},set:function(a){this.setEditableFlag(f.EditableFlag.USER,a)}},{key:"created",get:function(){return"created"===this.toolState}},{key:"cursor",get:function(){return null}},{key:"internallyEditable",get:function(){return this.getEditableFlag(f.EditableFlag.USER)&&
this.getEditableFlag(f.EditableFlag.MANAGER)}}]);return g}(m);d.__decorate([e.property({value:"pending"})],c.InteractiveToolBase.prototype,"toolState",null);d.__decorate([e.property({constructOnly:!0})],c.InteractiveToolBase.prototype,"view",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"active",null);d.__decorate([e.property({value:!0})],c.InteractiveToolBase.prototype,"visible",null);d.__decorate([e.property({value:!0})],c.InteractiveToolBase.prototype,"editable",
null);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"created",null);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"manipulators",void 0);d.__decorate([e.property({readOnly:!0})],c.InteractiveToolBase.prototype,"updating",void 0);d.__decorate([e.property()],c.InteractiveToolBase.prototype,"cursor",null);d.__decorate([e.property()],c.InteractiveToolBase.prototype,"automaticManipulatorSelection",void 0);c.InteractiveToolBase=d.__decorate([q.subclass("esri.views.interactive.InteractiveToolBase")],
c.InteractiveToolBase);Object.defineProperty(c,"__esModule",{value:!0})});