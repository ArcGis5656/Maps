// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/HandleOwner ../../core/Identifiable ../../core/watchUtils ../../core/accessorSupport/decorators/aliasOf ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionSlider ../../support/actions/ActionToggle".split(" "),
function(h,c,b,k,q,r,l,t,m,z,A,d,u,v,w,x,y){var f;m=k.ofType({key:"type",defaultKeyValue:"button",base:v,typeMap:{button:w,toggle:y,slider:x}});const n=k.ofType(m);b=f=function(p){function e(a){a=p.call(this,a)||this;a.actionsSections=new n;a.actionsOpen=!1;a.error=null;a.layer=null;return a}h._inheritsLoose(e,p);var g=e.prototype;g.initialize=function(){this.handles.add([l.init(this,"layer",a=>this._watchLayerProperties(a))])};g.clone=function(){return new f({actionsSections:this.actionsSections.clone(),
actionsOpen:this.actionsOpen,layer:this.layer,title:this.title})};g._watchLayerProperties=function(a){this.handles&&(this.handles.remove("layer"),a&&this.handles.add(l.watch(a,"listMode",()=>this._watchLayerProperties(a)),"layer"))};h._createClass(e,[{key:"title",get:function(){const a=this.get("layer.layer");return(!a||a&&this.get("layer.layer.loaded"))&&this.get("layer.title")||""},set:function(a){void 0===a?this._clearOverride("title"):this._override("title",a)}}]);return e}(r.IdentifiableMixin(q.HandleOwnerMixin(b)));
c.__decorate([d.property({type:n})],b.prototype,"actionsSections",void 0);c.__decorate([d.property()],b.prototype,"actionsOpen",void 0);c.__decorate([t.aliasOf("layer.loadError?")],b.prototype,"error",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],b.prototype,"title",null);return b=f=c.__decorate([u.subclass("esri.widgets.TableList.ListItem")],b)});