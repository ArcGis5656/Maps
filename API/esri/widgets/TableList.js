// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/events ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../core/Logger ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils ./TableList/ListItem ./TableList/TableListViewModel ./TableList/support/tableListUtils ../chunks/sortable.esm".split(" "),
function(D,l,g,E,F,q,r,M,N,O,m,G,H,t,w,P,I,h,Q,J,x,u,K){const L=g.ofType(J);g=function(y){function v(a,b){a=y.call(this,a,b)||this;a._handles=new F;a._sortable=null;a._sortableNode=null;a._focusSortUid=null;a.visibleItems=null;a.iconClass="esri-icon-table";a.label=void 0;a.listItemCreatedFunction=null;a.map=null;a.messages=null;a.messagesCommon=null;a.multipleSelectionEnabled=!1;a.selectionEnabled=!1;a.selectedItems=new L;a.tableItems=null;a.viewModel=new x;return a}D._inheritsLoose(v,y);var e=v.prototype;
e.initialize=function(){this._setVisibleItems(this.tableItems);this.own(q.on(this.viewModel,"tableItems","change",()=>this._itemsChanged()),q.init(this,"selectionEnabled",()=>this._toggleSorting()))};e.destroy=function(){this._destroySortable();this._handles.destroy();this._handles=null};e.triggerAction=function(a,b){this.viewModel.triggerAction(a,b)};e.render=function(){var a;const {visibleItems:b}=this,c=null==(a=this.viewModel)?void 0:a.state;return h.tsx("div",{class:this.classes("esri-table-list",
"esri-widget","esri-widget--panel",{["esri-hidden"]:"loading"===c,["esri-disabled"]:"disabled"===c})},null!=b&&b.length?this.renderList():this.renderNoItems())};e.renderNoItems=function(){return h.tsx("div",{class:"esri-table-list__no-items"},this.messages.noItemsToDisplay)};e.renderList=function(){const {visibleItems:a,messages:b,selectionEnabled:c}=this;return h.tsx("ul",{"aria-label":b.widgetLabel,role:c?"listbox":void 0,afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",
bind:this,class:this.classes("esri-table-list__list","esri-table-list__list--root")},a.map(d=>this.renderItem(d)).toArray())};e.renderItem=function(a){const {id:b,selectionEnabled:c,selectedItems:d}=this,f=`${`${b}_${a.uid}`}__title`,n={["esri-table-list__item--error"]:!!a.error,["esri-table-list__item--selectable"]:c};if(c){var k;const p={["data-layer-uid"]:null==(k=a.layer)?void 0:k.uid};return h.tsx("li",{key:`item-with-selection-${a.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,
class:this.classes("esri-table-list__item",n),"aria-labelledby":f,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":a,tabIndex:0,"aria-selected":u.findSelectedItem(a,d)?"true":"false",role:"option",...p},this.renderItemContent(a,f))}return h.tsx("li",{key:`item-no-selection-${a.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes("esri-table-list__item",n),"aria-labelledby":f},this.renderItemContent(a,f))};e.renderActionsMenuIcon=
function(a,b){const {messagesCommon:c}=this;return h.tsx("div",{key:"actions-menu-toggle","data-item":a,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes("esri-table-list__item-actions-menu-item",{["esri-table-list__item-actions-menu-item--active"]:a.actionsOpen}),tabindex:"0",role:"button","aria-controls":b,"aria-label":c.options,title:c.options},h.tsx("span",{"aria-hidden":"true",class:"esri-icon-handle-horizontal"}))};e.renderActionsMenu=function(a,
b,c,d){const f=(b=1===c&&this._getSingleActionButton(b))?this.renderAction({item:a,action:b,singleAction:!0}):null;return(a=!b&&c?this.renderActionsMenuIcon(a,d):null)||b?h.tsx("div",{key:"actions-menu",class:"esri-table-list__item-actions-menu"},f,a):null};e.renderError=function(a){return a.error?h.tsx("div",{key:"error",class:"esri-table-list__item-error-message",role:"alert"},h.tsx("span",null,this.messages.tableError)):null};e.renderItemContent=function(a,b){var {id:c}=this;c=`${`${c}_${a.uid}`}_actions`;
const d=this._filterActions(a.actionsSections),f=this._countActions(d);return[h.tsx("div",{key:"list-item-container",class:"esri-table-list__item-container"},this.renderLabel(a,b),this.renderActionsMenu(a,d,f,c)),this.renderError(a),f?this.renderActionsSections(a,d,c):null]};e.renderTitle=function(a,b){const {messages:c}=this;return h.tsx("span",{key:"layer-title-container",id:b,class:"esri-table-list__item-title"},a.title||c.untitledTable)};e.renderItemError=function(a){return a.error?h.tsx("span",
{key:"notice-triangle","aria-hidden":"true",class:"esri-icon-notice-triangle"}):null};e.renderLabel=function(a,b){return a.error?[this.renderItemError(a),this.renderTitle(a,b)]:this.renderTitle(a,b)};e.renderActionsSections=function(a,b,c){b=b.toArray().map((d,f)=>h.tsx("ul",{key:`${a}-action-section-${f}`,class:"esri-table-list__item-actions-list"},this.renderActionSection(a,d)));return h.tsx("div",{role:"group","aria-expanded":a.actionsOpen?"true":"false",key:"actions-section",id:c,class:"esri-table-list__item-actions",
hidden:a.actionsOpen?null:!0},b)};e.renderActionSection=function(a,b){return(b&&b.toArray()).map(c=>this.renderAction({item:a,action:c}))};e.renderActionIcon=function(a){const {active:b,className:c}=a,d=this._getIconImageStyles(a);a="button"!==a.type||a.image||c?c:"esri-icon-default-action";const f={["esri-table-list__item-action-image"]:!b&&!!d["background-image"],["esri-icon-loading-indicator"]:b,["esri-rotating"]:b};a&&!b&&(f[a]=!0);return h.tsx("span",{key:"action-icon","aria-hidden":"true",class:this.classes("esri-table-list__item-action-icon",
f),styles:d})};e.renderActionTitle=function(a,b){return b?null:h.tsx("span",{key:"action-title",class:"esri-table-list__item-action-title"},a)};e.renderAction=function(a){const {item:b,action:c,singleAction:d}=a,{active:f,disabled:n,title:k}=c;a={["esri-table-list__item-actions-menu-item"]:d&&"button"===c.type,["esri-table-list__item-action"]:f||!d&&"toggle"!==c.type,["esri-table-list__action-toggle"]:!f&&"toggle"===c.type,["esri-table-list__action-toggle--on"]:!f&&"toggle"===c.type&&c.value,["esri-disabled-element"]:n};
const p=[this.renderActionIcon(c),this.renderActionTitle(k,d)];return d?h.tsx("div",{bind:this,"data-item":b,"data-action":c,role:"button",key:`single-action-${c.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",title:k,"aria-label":k},p):h.tsx("li",{bind:this,"data-item":b,"data-action":c,key:`action-${c.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",role:"button",title:k,"aria-label":k},p)};e._filterActions=function(a){return a.map(b=>
b.filter(c=>c.visible))};e._setVisibleItems=function(a){this.visibleItems=null==a?void 0:a.filter(b=>this.errorsVisible||!b.error)};e._destroySortable=function(){const {_sortable:a}=this;a&&a.destroy();this._sortable=null};e._toggleSorting=function(){const {_sortable:a,_sortableNode:b,selectionEnabled:c}=this;if(b)if(a)a.option("disabled",!c);else{const d=K.Sortable.create(b,{dataIdAttr:"data-layer-uid",group:"root-tables",fallbackTolerance:4,disabled:!c,onSort:()=>this._sortTablesToItems(d.toArray()),
chosenClass:"esri-table-list__item--chosen"});this._sortable=d}};e._sortNodeCreated=function(a){this._sortableNode=a;this._toggleSorting()};e._sortTablesToItems=function(a){var b;const c=null==(b=this.map)?void 0:b.tables;c&&c.sort((d,f)=>{d=a.indexOf(d.uid);f=a.indexOf(f.uid);return d>f?-1:d<f?1:0})};e._getSingleActionButton=function(a){return a.reduce(b=>b).filter(b=>b&&"button"===b.type).getItemAt(0)};e._focusListItem=function(a){var b;const {_focusSortUid:c}=this;a&&c&&(null==(b=a["data-item"].layer)?
void 0:b.uid)===c&&(a.focus(),this._focusSortUid=null)};e._watchActionSectionChanges=function(a,b){const c="action-section"+b;this._handles.add(a.on("change",()=>this.scheduleRender()),c);a.forEach(d=>this._renderOnActionChanges(d,b))};e._renderOnActionChanges=function(a,b){b="actions"+b;const c=()=>this.scheduleRender();"toggle"===a.type?this._handles.add([q.init(a,"className image id title visible value".split(" "),c)],b):"slider"===a.type?this._handles.add([q.init(a,"className id title visible value displayValueEnabled max min step".split(" "),
c)],b):this._handles.add([q.init(a,["className","image","id","title","visible"],c)],b)};e._renderOnItemChanges=function(a){const b=a.uid,c="items"+b,d=()=>this.scheduleRender();this._handles.add([q.init(a,["actionsOpen","open","title","error"],d),a.actionsSections.on("change",d)],c);a.actionsSections.forEach(f=>this._watchActionSectionChanges(f,b))};e._itemsChanged=function(){const {tableItems:a}=this.viewModel;this._setVisibleItems(a);this._handles.removeAll();a.forEach(b=>this._renderOnItemChanges(b));
this.scheduleRender()};e._countActions=function(a){return a.reduce((b,c)=>b+c.length,0)};e._getIconImageStyles=function(a){a="esri.support.Action.ActionButton"===a.declaredClass||"esri.support.Action.ActionToggle"===a.declaredClass?a.image:null;return{"background-image":a?`url("${a}")`:null}};e._selectionKeydown=function(a){var b=E.eventKey(a);if(-1===["ArrowDown","ArrowUp"].indexOf(b))this._toggleSelection(a);else{a.stopPropagation();var c=a.currentTarget["data-item"],{_sortable:d,selectedItems:f}=
this,n=u.findSelectedItem(c,f),k=d.toArray();a=k.indexOf(a.target.dataset.layerUid);if(-1!==a){if("ArrowDown"===b){const z=a+1;if(z>=k.length)return;if(n){var p;k.splice(z,0,k.splice(a,1)[0]);d.sort(k);this._sortTablesToItems(d.toArray());this._focusSortUid=null==(p=c.layer)?void 0:p.uid}else{var A;this._focusSortUid=null==(A=c.layer)?void 0:A.uid;this.scheduleRender()}}if("ArrowUp"===b&&(b=a-1,!(-1>=b)))if(n){var B;k.splice(b,0,k.splice(a,1)[0]);d.sort(k);this._sortTablesToItems(d.toArray());this._focusSortUid=
null==(B=c.layer)?void 0:B.uid}else{var C;this._focusSortUid=null==(C=c.layer)?void 0:C.uid;this.scheduleRender()}}}};e._toggleActionsOpen=function(a){const b=a.currentTarget["data-item"];var {actionsOpen:c}=b;(c=!c)&&this.tableItems.forEach(d=>{{const {actionsOpen:f}=d;f&&(d.actionsOpen=!1)}});b.actionsOpen=c;a.stopPropagation()};e._triggerAction=function(a){var b=a.currentTarget;const c=b["data-action"];b=b["data-item"];"toggle"===c.type&&(c.value=!c.value);this.triggerAction(c,b);a.stopPropagation()};
e._toggleSelection=function(a){a.stopPropagation();const {multipleSelectionEnabled:b,selectedItems:c}=this,d=b&&(a.metaKey||a.ctrlKey);a=a.currentTarget["data-item"];const f=u.findSelectedItem(a,c),{length:n}=c,k=f&&1===n;d?f?c.remove(f):c.add(a):n&&!k?(c.removeAll(),c.add(a)):f?c.remove(f):c.add(a)};return v}(H);l.__decorate([m.property()],g.prototype,"visibleItems",void 0);l.__decorate([m.property()],g.prototype,"iconClass",void 0);l.__decorate([m.property()],g.prototype,"errorsVisible",void 0);
l.__decorate([m.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0);l.__decorate([r.aliasOf("viewModel.listItemCreatedFunction")],g.prototype,"listItemCreatedFunction",void 0);l.__decorate([r.aliasOf("viewModel.map")],g.prototype,"map",void 0);l.__decorate([m.property(),w.messageBundle("esri/widgets/TableList/t9n/TableList")],g.prototype,"messages",void 0);l.__decorate([m.property(),w.messageBundle("esri/t9n/common")],g.prototype,"messagesCommon",void 0);
l.__decorate([m.property()],g.prototype,"multipleSelectionEnabled",void 0);l.__decorate([m.property()],g.prototype,"selectionEnabled",void 0);l.__decorate([m.property()],g.prototype,"selectedItems",void 0);l.__decorate([r.aliasOf("viewModel.tableItems")],g.prototype,"tableItems",void 0);l.__decorate([I.vmEvent("trigger-action"),m.property({type:x})],g.prototype,"viewModel",void 0);l.__decorate([r.aliasOf("viewModel.triggerAction")],g.prototype,"triggerAction",null);l.__decorate([t.accessibleHandler()],
g.prototype,"_toggleActionsOpen",null);l.__decorate([t.accessibleHandler()],g.prototype,"_triggerAction",null);l.__decorate([t.accessibleHandler()],g.prototype,"_toggleSelection",null);return g=l.__decorate([G.subclass("esri.widgets.TableList")],g)});