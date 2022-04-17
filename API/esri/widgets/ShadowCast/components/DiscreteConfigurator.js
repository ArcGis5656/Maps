// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../intl/duration ../../Widget ../css ./Label ./LabeledColorPicker ../../support/widgetUtils ../../support/decorators/messageBundle ../../../core/Logger ../../support/jsxFactory".split(" "),
function(m,c,q,e,r,n,g,C,D,E,t,u,v,w,x,y,F,z,G,d){c.DiscreteConfigurator=function(p){function h(b){var a=p.call(this,b)||this;a.colorPickerVisible=!0;a._selectId=`select-${n.generateUUID()}`;a._colorPickerId=`color-picker-${n.generateUUID()}`;a._onColorChange=k=>{a.options.color=k};return a}q._inheritsLoose(h,p);var l=h.prototype;l.loadDependencies=function(){return Promise.all([new Promise((b,a)=>m(["../../../chunks/calcite-label"],b,a)),new Promise((b,a)=>m(["../../../chunks/calcite-select"],b,
a))])};l.render=function(){const b=this._messages.discrete,a=b.intervalLabel,{color:k,interval:A,intervalOptions:B}=this.options;return d.tsx("div",{class:w.DISCRETE_CONFIGURATOR_CSS.base},d.tsx(x.Label,{for:this._selectId,label:a},d.tsx("calcite-select",{id:this._selectId,label:a,bind:this,onCalciteSelectChange:this._onIntervalChange},B.toArray().map(f=>d.tsx("calcite-option",{key:f,selected:f===A,value:String(f)},r.unwrapOr(u.formatDuration(f,{round:!0,largest:2}),""))))),this.colorPickerVisible&&
d.tsx(y.LabeledColorPicker,{id:this._colorPickerId,label:b.colorLabel,value:k,onChange:this._onColorChange}))};l._onIntervalChange=function(b){var a;b=parseInt(null==(a=b.target.selectedOption)?void 0:a.value,10);Number.isFinite(b)&&(this.options.interval=b)};return h}(v);e.__decorate([g.property()],c.DiscreteConfigurator.prototype,"options",void 0);e.__decorate([g.property()],c.DiscreteConfigurator.prototype,"colorPickerVisible",void 0);e.__decorate([g.property(),z.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],
c.DiscreteConfigurator.prototype,"_messages",void 0);c.DiscreteConfigurator=e.__decorate([t.subclass("esri.widgets.ShadowCast.components.DiscreteConfigurator")],c.DiscreteConfigurator);Object.defineProperty(c,"__esModule",{value:!0})});