// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/events ../../../../core/HandleOwner ../../../../core/maybe ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/aliasOf ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/decorators/subclass ../../../Widget ./ButtonMenuViewModel ../../../support/Popover ../../../support/widgetUtils ../../../../core/Logger ../../../support/jsxFactory".split(" "),
function(p,k,v,f,w,x,q,E,F,G,m,y,z,A,B,r,H,e){f=function(t){function n(a,b){a=t.call(this,a,b)||this;a._menuContentNode=null;a._popover=null;a._rootNode=null;a.iconClass=null;a.items=null;a.label=null;a.open=!1;a.viewModel=new A;a._handleOutsideClick=a._handleOutsideClick.bind(p._assertThisInitialized(a));return a}p._inheritsLoose(n,t);var d=n.prototype;d.postInitialize=function(){this._popover=new B({owner:this,open:!!this.open,placement:r.isRTL(this.container)?"bottom-start":"bottom-end",renderContentFunction:this.renderMenuContent,
anchorElement:this._rootNode});this.handles.add([x.watch(this,"open",a=>this._popover.set("open",a))]);document.addEventListener("click",this._handleOutsideClick)};d.destroy=function(){var a;null==(a=this._popover)?void 0:a.destroy();this._popover=null;document.removeEventListener("click",this._handleOutsideClick)};d._handleOutsideClick=function(a){var b,c;this.open&&this._rootNode&&this._menuContentNode&&(a=a.target,null!=(b=this._menuContentNode)&&b.contains(a)||null!=(c=this._rootNode)&&c.contains(a)||
(this.open=!1))};d.render=function(){return e.tsx("div",{afterCreate:this._afterRootNodeCreate,bind:this,"data-node-ref":"_rootNode",class:this.classes("esri-button-menu","esri-widget"),key:"menu"},this.renderMenuButton())};d.renderMenuButton=function(){const {iconClass:a,id:b,label:c,open:h}=this,g=this.classes(["esri-button-menu__button",a||"esri-icon-menu",h?"esri-button-menu__button--selected":null]);return e.tsx("button",{"aria-pressed":h.toString(),"aria-controls":`${b}-menu`,"aria-expanded":h.toString(),
"aria-haspopup":"true","aria-label":c,bind:this,class:g,id:`${b}-button`,title:c,selected:h,onclick:this._toggleOpen,tabindex:"0",type:"button"})};d.renderMenuContent=function(){var a;const {id:b,open:c}=this;return e.tsx("div",{afterCreate:this._afterMenuContentNodeCreate,bind:this,class:"esri-button-menu__content","data-node-ref":"_menuContentNode",key:"esri-button-menu-content",hidden:!c},e.tsx("ul",{"aria-labelledby":`${b}-button`,bind:this,class:"esri-button-menu__item-wrapper",id:`${b}-menu`,
role:"menu"},(null==(a=this.items)?void 0:a.length)&&this.renderItems()))};d.renderItems=function(){var a;return null==(a=this.items)?void 0:a.map((b,c)=>this.renderItem(b,c))};d.renderItem=function(a,b,c){var h;const g=w.isSome(c)?`${this.id}-menu-item-${b}-${c}`:`${this.id}-menu-item-${b}`,u=`${g}-label`,C=this.classes("esri-button-menu__item",a.selectionEnabled?"esri-button-menu__item--selectable":null,a.selectionEnabled&&a.selected?"esri-button-menu__item--selected":null);return e.tsx("li",{afterCreate:this._afterMenuItemCreate,
bind:this,class:C,"data-item-index":b,"data-item-subIndex":c,for:g,key:g,onkeydown:l=>this._handleMenuItemKeydown(l,a),onclick:l=>this._handleMenuItemInteraction(l,a),role:"menuitem",tabindex:"0"},e.tsx("input",{disabled:!0,checked:a.selected,class:"esri-button-menu__checkbox",id:g,name:g,tabindex:"-1",type:"checkbox"}),e.tsx("label",{bind:this,class:this.classes("esri-button-menu__button","esri-button-menu__item-label"),for:g,id:u},e.tsx("span",{class:this.classes("esri-button-menu__icon",a.iconClass),
"aria-hidden":"true"}),e.tsx("span",{class:"esri-button-menu__item-label-content"},a.label)),e.tsx("ul",{"aria-labelledby":u,class:"esri-button-menu__embedded-content-wrapper",id:`${this.id}-submenu`,role:"menu"},null==a?void 0:null==(h=a.items)?void 0:h.map((l,D)=>this.renderItem(l,b,D))))};d._afterRootNodeCreate=function(a){var b;this._rootNode=a;null==(b=this._popover)?void 0:b.set("anchorElement",()=>a)};d._handleMenuItemInteraction=function(a,b){b.selected=!b.selected;b.open=!(!b.selected||!b.items);
b.autoCloseMenu&&this.set("open",!1);b.clickFunction&&b.clickFunction({event:a,item:b});a.stopPropagation()};d._handleMenuItemKeydown=function(a,b){const c=v.eventKey(a);r.isActivationKey(c)&&this._handleMenuItemInteraction(a,b);"Escape"===c&&(this.open=!1,a.preventDefault(),a.stopPropagation())};d._afterMenuContentNodeCreate=function(a){this._menuContentNode=a;a.focus()};d._toggleOpen=function(){this.open=!this.open};d._afterMenuItemCreate=function(a){0===a["data-item-index"]&&a.focus()};return n}(f.HandleOwnerMixin(z));
k.__decorate([m.property()],f.prototype,"iconClass",void 0);k.__decorate([q.aliasOf("viewModel.items")],f.prototype,"items",void 0);k.__decorate([m.property()],f.prototype,"label",void 0);k.__decorate([q.aliasOf("viewModel.open")],f.prototype,"open",void 0);k.__decorate([m.property()],f.prototype,"viewModel",void 0);return f=k.__decorate([y.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenu")],f)});