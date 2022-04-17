// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Viewpoint ../../core/Error ../../core/Evented ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../support/GoTo".split(" "),function(e,c,l,m,b,d,q,r,t,n,p){b=function(h){function f(a){a=h.call(this,a)||this;a._initialViewpoint=null;a._goingHomeController=null;a.go=a.go.bind(e._assertThisInitialized(a));return a}
e._inheritsLoose(f,h);var g=f.prototype;g.destroy=function(){this._cancelGo();this.view=null};g.go=function(){var a=e._asyncToGenerator(function*(){if(!this.get("view.ready"))throw new m("home:disabled-state","Cannot go when disabled.");this._cancelGo();this.emit("go");const k=new AbortController;this._goingHomeController=k;try{yield this.view.when(),yield this.callGoTo({target:this.viewpoint,options:{signal:k.signal}})}catch(u){}this._goingHomeController=null});return function(){return a.apply(this,
arguments)}}();g.cancelGo=function(){this._cancelGo()};g._cancelGo=function(){const {_goingHomeController:a}=this;a&&a.abort();this._goingHomeController=null};e._createClass(f,[{key:"state",get:function(){return this.get("view.ready")?this._goingHomeController?"going-home":"ready":"disabled"}},{key:"view",set:function(a){this._initialViewpoint=null;this._set("view",a);a&&a.when().then(()=>{this.view===a&&(this._initialViewpoint=a.viewpoint.clone(),this.notifyChange("viewpoint"))})}},{key:"viewpoint",
get:function(){return this._get("viewpoint")||this._initialViewpoint},set:function(a){this._set("viewpoint",a)}}]);return f}(p.GoToMixin(b.EventedAccessor));c.__decorate([d.property()],b.prototype,"_goingHomeController",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:l})],b.prototype,"viewpoint",null);c.__decorate([d.property()],b.prototype,"go",null);c.__decorate([d.property()],b.prototype,
"cancelGo",null);return b=c.__decorate([n.subclass("esri.widgets.Home.HomeViewModel")],b)});