// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/handleUtils ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../Selector2D".split(" "),function(k,d,b,n,l,f,r,t,u,p,q){b=function(m){function g(a){a=m.call(this,a)||this;a._operationHandlesGroup=null;a.activeOperation=null;a.layers=null;
a.selector=new q;return a}k._inheritsLoose(g,m);var e=g.prototype;e.destroy=function(){this._operationHandlesGroup=l.removeMaybe(this._operationHandlesGroup);this.selector.destroy()};e.cancel=function(){"active"===this.state&&(this.activeOperation.cancel(),this.activeOperation=null);this.selector.candidates=null};e.activate=function(a){const {state:c}=this;if("disabled"!==c)return"active"===c&&this.cancel(),this.selector.candidates=this._getCandidates(),a=this.selector.draw(a),this._operationHandlesGroup=
n.handlesGroup([a.once("complete",h=>this._onOperationComplete(h)),a.on("selection-change",h=>this._onOperationSelectionChange(h))]),this.activeOperation=a};e._getCandidates=function(){let a=[];this.layers.forEach(c=>{a=a.concat(...c.graphics.toArray())});return a};e._onOperationSelectionChange=function(a){this.emit("selection-change",a)};e._onOperationComplete=function(a){this._operationHandlesGroup=l.removeMaybe(this._operationHandlesGroup);this.activeOperation=null;this.emit("complete",a)};k._createClass(g,
[{key:"state",get:function(){var a,c;return this.activeOperation?"active":null!=(a=this.view)&&a.ready&&null!=(c=this.layers)&&c.length?"ready":"disabled"}},{key:"view",set:function(a){this.selector.view=a;this._set("view",a)}}]);return g}(b.EventedAccessor);d.__decorate([f.property()],b.prototype,"activeOperation",void 0);d.__decorate([f.property()],b.prototype,"layers",void 0);d.__decorate([f.property({readOnly:!0})],b.prototype,"selector",void 0);d.__decorate([f.property({readOnly:!0})],b.prototype,
"state",null);d.__decorate([f.property()],b.prototype,"view",null);return b=d.__decorate([p.subclass("esri.widgets.support.SelectionToolbar.SelectionToolbarViewModel")],b)});