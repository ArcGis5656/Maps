// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/arrayUtils ../../core/maybe ../../core/reactiveUtils ../../core/Logger ../../core/accessorSupport/ensureType ../../core/has ../../core/accessorSupport/set ../../core/accessorSupport/decorators/subclass ../../views/interactive/snapping/FeatureSnappingLayerSource ./BatchCreateWorkflowData ./Workflow ./workflowUtils".split(" "),function(f,B,y,l,z,w,L,M,N,C,D,E,F,q){var x;w=x=function(A){function u(a){a=A.call(this,a)||this;
a.type="batch-create";a.createFeatureState="create-new";a.featureFormHandle=null;a.visualVariableAttributes={rotation:null,size:null};a.highlightHandles=new Map;a.preventDefaultActionOnCancel=!1;return a}f._inheritsLoose(u,A);var v=u.prototype;v.updatePendingFeature=function(){var a=f._asyncToGenerator(function*(c){this.preventDefaultActionOnCancel=!0;this.data.viewModel.sketchViewModel.cancel();y.remove(this.lastActiveGraphics,c);return this.startUpdating(c)});return function(c){return a.apply(this,
arguments)}}();u.create=function(a,c,d,p){a=new x({data:new E.BatchCreateWorkflowData({creationInfo:c,viewModel:a}),onCommit:function(){var r=f._asyncToGenerator(function*(m){yield p(m.creationInfo.layer,{addFeatures:m.viewModel.sketchViewModel.layer.graphics.toArray()})});return function(m){return r.apply(this,arguments)}}()});a._set("steps",this._createWorkflowSteps(a,d));return a};v.highlight=function(a){const c=this.data.viewModel.view;"3d"===c.type&&this.highlightHandles.set(a,c.highlight(a))};
v.removeHighlight=function(a){l.removeMaybe(this.highlightHandles.get(a));this.highlightHandles.delete(a)};v.startCreating=function(){var a=f._asyncToGenerator(function*(){this.createFeatureState="create-new";return q.startCreatingNewFeature(this.data.viewModel.sketchViewModel,this.data.creationInfo)});return function(){return a.apply(this,arguments)}}();v.startUpdating=function(){var a=f._asyncToGenerator(function*(c){const d=this.data.viewModel,p=d.sketchViewModel,r=this.data.creationInfo.layer,
m=q.findLayerInfo(d.layerInfos,r),n=null==m?void 0:m.formTemplate;d.featureFormViewModel.set({feature:c,fieldConfig:n?null:null==m?void 0:m.fieldConfig,formTemplate:n});l.removeMaybe(this.featureFormHandle);this.featureFormHandle=d.featureFormViewModel.on("value-change",f._asyncToGenerator(function*(){c.attributes=d.featureFormViewModel.getValues();"3d"===p.view.type&&(yield q.updateGraphicSymbolWhenRequired(c))}));this.removeHighlight(c);this.createFeatureState="update-pending";this.visualVariableAttributes=
q.getVisualVariableAttributes(c);return q.startUpdatingFeature(p,c,r,this.visualVariableAttributes)});return function(c){return a.apply(this,arguments)}}();u._createWorkflowSteps=function(a,c="awaiting-feature-creation-info"){const {data:d,handles:p}=a;let r=null,m=!0;c=q.createWorkflowSteps(["awaiting-feature-creation-info","batch-creating-features"],c,{"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",setUp(){var n=this;return f._asyncToGenerator(function*(){d.creationInfo=
null;p.add(d.viewModel.featureTemplatesViewModel.on("select",({item:t})=>{d.creationInfo={layer:t.layer,template:t.template};d.viewModel.activeWorkflow.next()}),n.id)})()},tearDown(){var n=this;return f._asyncToGenerator(function*(){p.remove(n.id)})()}}),"batch-creating-features":()=>({id:"batch-creating-features",setUp(){var n=this;return f._asyncToGenerator(function*(){const t=d.viewModel.view,g=d.viewModel.sketchViewModel;m=g.updateOnGraphicClick;g.updateOnGraphicClick=!1;a.lastActiveGraphics=
[];a.featureFormHandle=l.removeMaybe(a.featureFormHandle);a.visualVariableAttributes={rotation:null,size:null};const G=g.on("create",function(){var h=f._asyncToGenerator(function*(b){if("cancel"===b.state){if(a.preventDefaultActionOnCancel){a.preventDefaultActionOnCancel=!1;return}if(1>a.lastActiveGraphics.length)return a.startCreating();b=a.lastActiveGraphics.pop();return a.startUpdating(b)}if("complete"===b.state)return a.startUpdating(b.graphic)});return function(b){return h.apply(this,arguments)}}()),
H=g.on("update",function(){var h=f._asyncToGenerator(function*(b){var e=b.graphics[0];if("complete"===b.state){e!==r&&(a.lastActiveGraphics.push(e),a.highlight(e));r=null;if(b.aborted&&a.preventDefaultActionOnCancel){a.preventDefaultActionOnCancel=!1;return}return a.startCreating()}"start"===b.state&&a.removeHighlight(e);yield q.visualVariableInteractiveUpdate(t,e,b,a.visualVariableAttributes);b=e.attributes;l.isSome(a.visualVariableAttributes.rotation)&&({field:e}=a.visualVariableAttributes.rotation,
d.viewModel.featureFormViewModel.setValue(e,b[e]));l.isSome(a.visualVariableAttributes.size)&&({field:e}=a.visualVariableAttributes.size,d.viewModel.featureFormViewModel.setValue(e,b[e]))});return function(b){return h.apply(this,arguments)}}()),I=g.on("delete",function(){var h=f._asyncToGenerator(function*(b){b=b.graphics[0];y.remove(a.lastActiveGraphics,b);r=b});return function(b){return h.apply(this,arguments)}}());let k=null;const J=z.react(()=>{var h;const b=g.snappingOptions.featureSources.find(e=>
e.layer===d.creationInfo.layer);return{hasFeatureLayerSource:!!b,enabled:null!=(h=null==b?void 0:b.enabled)?h:!1}},({hasFeatureLayerSource:h,enabled:b})=>{const e=g.snappingOptions.featureSources;h?(l.isNone(k)&&(k=new D({layer:g.layer,enabled:b}),e.add(k)),k.enabled=b):(l.isSome(k)&&e.remove(k),k=l.destroyMaybe(k))},z.syncAndInitial),K=t.on("immediate-click",function(){var h=f._asyncToGenerator(function*(b){b=yield t.hitTest(b,{include:g.layer});0<b.results.length&&(b=b.results[0].graphic,"transform"!==
g.activeTool&&"reshape"!==g.activeTool||g.updateGraphics.getItemAt(0)===b||(yield a.updatePendingFeature(b)))});return function(b){return h.apply(this,arguments)}}());yield a.startCreating();p.add({remove:()=>{l.removeMaybe(a.featureFormHandle);G.remove();H.remove();I.remove();J.remove();l.isSome(k)&&g.snappingOptions.featureSources.remove(k);k=l.destroyMaybe(k);g.cancel();K.remove()}},n.id)})()},tearDown(n){var t=this;return f._asyncToGenerator(function*(){n.cancelled&&d.viewModel.sketchViewModel.layer.removeAll();
p.remove(t.id);d.viewModel.sketchViewModel.updateOnGraphicClick=m})()}})});return q.avoidFeatureTemplateSelectionWithOnlyOneItem(d,c)};f._createClass(u,[{key:"numPendingFeatures",get:function(){return this.data.viewModel.sketchViewModel.layer.graphics.length}},{key:"pendingFeatures",get:function(){return this.data.viewModel.sketchViewModel.layer.graphics}}]);return u}(F);return w=x=B.__decorate([C.subclass("esri.widgets.Editor.BatchCreateWorkflow")],w)});