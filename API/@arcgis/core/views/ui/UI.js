/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{b as e,e as o,i}from"../../chunks/domUtils.js";import{E as n}from"../../chunks/Evented.js";import s from"../../core/Handles.js";import{init as r}from"../../core/watchUtils.js";import{property as d}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{cast as a}from"../../core/accessorSupport/decorators/cast.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import c from"../../core/Accessor.js";import{l,i as h}from"../../chunks/widgetUtils.js";import"../../chunks/handleUtils.js";import"../../core/Collection.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/metadata.js";import"../../chunks/deprecate.js";const u="esri-component";let m=class extends c{constructor(){super(...arguments),this.widget=null}destroy(){this.widget&&this.widget.destroy(),this.node=null}get id(){return this.get("widget.id")||this.get("node.id")}set node(t){const e=this._get("node");t!==e&&(t&&t.classList.add(u),e&&e.classList.remove(u),this._set("node",t))}castNode(t){return t?"string"==typeof t||function(t){return t&&"nodeType"in t}(t)?(this._set("widget",null),e(t)):(function(t){return t&&"function"==typeof t.render}(t)&&!t.domNode&&(t.domNode=document.createElement("div")),this._set("widget",t),t.domNode):(this._set("widget",null),null)}};t([d({dependsOn:[]})],m.prototype,"id",null),t([d()],m.prototype,"node",null),t([a("node")],m.prototype,"castNode",null),t([d({readOnly:!0})],m.prototype,"widget",void 0),m=t([p("esri.views.ui.Component")],m);const g=m,_={left:0,top:0,bottom:0,right:0},f={bottom:30,top:15,right:15,left:15},y="esri-ui",C="esri-ui-corner",v="esri-ui-inner-container",w="esri-ui-manual-container",j="esri-ui-corner-container",L="esri-ui-top-left",P="esri-ui-top-right",b="esri-ui-bottom-left",k="esri-ui-bottom-right";function x(t){const e=t,o="object"==typeof e&&null!==e&&Object.getPrototypeOf(e);return(null===o||o===Object.prototype)&&("component"in e||"index"in e||"position"in e)?t:null}function N(t,{top:e,bottom:o,left:i,right:n}){t.style.top=e,t.style.bottom=o,t.style.left=i,t.style.right=n}let T=class extends n.EventedAccessor{constructor(t){super(t),this._cornerNameToContainerLookup={},this._positionNameToContainerLookup={},this._components=new Array,this._componentToKey=new Map,this._handles=new s,this.view=null,this._initContainers()}initialize(){this._handles.add([r(this,"view.padding, container",this._applyViewPadding.bind(this)),r(this,"padding",this._applyUIPadding.bind(this))])}destroy(){this.container=null;for(const t of this._components)t.destroy();this._components.length=0,this._handles.destroy(),this._componentToKey.clear()}set container(t){const e=this._get("container");t!==e&&(t&&(t.classList.add(y),t.classList.add(l()),this._attachContainers(t)),e&&(e.classList.remove(y),N(e,{top:"",bottom:"",left:"",right:""}),o(e)),this._set("container",t))}get height(){const t=this.get("view.height")||0;if(0===t)return t;const e=this._getViewPadding(),o=e.top+e.bottom;return Math.max(t-o,0)}get padding(){return this._get("padding")}set padding(t){t?this._override("padding",t):this._clearOverride("padding")}castPadding(t){return"number"==typeof t?{bottom:t,top:t,right:t,left:t}:{...f,...t}}get width(){const t=this.get("view.width")||0;if(0===t)return t;const e=this._getViewPadding(),o=e.left+e.right;return Math.max(t-o,0)}add(t,e){let o,i;if(Array.isArray(t))return void t.forEach((t=>this.add(t,e)));const n=x(t);n&&({index:o,position:e,component:t,key:i}=n),e&&"object"==typeof e&&({index:o,key:i,position:e}=e),!t||e&&!this._isValidPosition(e)||this._add(t,e,o,i)}remove(t,e){if(!t)return;if(Array.isArray(t))return t.map((t=>this.remove(t,e)));const o=this._find(t);if(o){const i=this._componentToKey;if(i.has(t)&&i.get(t)!==e)return;const n=this._components.indexOf(o);return o.node.parentNode&&o.node.parentNode.removeChild(o.node),this._componentToKey.delete(t),this._components.splice(n,1)[0]}}empty(t){if(Array.isArray(t))return t.map((t=>this.empty(t))).reduce(((t,e)=>t.concat(e)));if("manual"===(t=t||"manual")){return Array.prototype.slice.call(this._manualContainer.children).filter((t=>!t.classList.contains(C))).map((t=>this.remove(t)))}return this._isValidPosition(t)?Array.prototype.slice.call(this._cornerNameToContainerLookup[t].children).map(this.remove,this):null}move(t,e){if(Array.isArray(t)&&t.forEach((t=>this.move(t,e))),!t)return;let o;const i=x(t)||x(e);if(i&&(o=i.index,e=i.position,t=i.component||t),e&&!this._isValidPosition(e))return;const n=this.remove(t);n&&this.add(n,{position:e,index:o})}find(t){if(!t)return null;const e=this._findById(t);return e&&(e.widget||e.node)}getPosition(t){for(const e in this._positionNameToContainerLookup){if(this._positionNameToContainerLookup[e].contains(t))return e}return null}_add(t,e,o,i){t instanceof g||(t=new g({node:t})),this._place({component:t,position:e,index:o}),this._components.push(t),i&&this._componentToKey.set(t,i)}_find(t){return t?t instanceof g?this._findByComponent(t):"string"==typeof t?this._findById(t):this._findByNode(t.domNode||t):null}_getViewPadding(){return this.get("view.padding")||_}_attachContainers(t){t.appendChild(this._innerContainer),t.appendChild(this._manualContainer)}_initContainers(){const t=document.createElement("div");t.classList.add(v),t.classList.add(j);const e=document.createElement("div");e.classList.add(v),e.classList.add(w);const o=document.createElement("div");o.classList.add(L),o.classList.add(C),t.appendChild(o);const i=document.createElement("div");i.classList.add(P),i.classList.add(C),t.appendChild(i);const n=document.createElement("div");n.classList.add(b),n.classList.add(C),t.appendChild(n);const s=document.createElement("div");s.classList.add(k),s.classList.add(C),t.appendChild(s),this._innerContainer=t,this._manualContainer=e;const r=h();this._cornerNameToContainerLookup={"top-left":o,"top-right":i,"bottom-left":n,"bottom-right":s,"top-leading":r?i:o,"top-trailing":r?o:i,"bottom-leading":r?s:n,"bottom-trailing":r?n:s},this._positionNameToContainerLookup={manual:e,...this._cornerNameToContainerLookup}}_isValidPosition(t){return!!this._positionNameToContainerLookup[t]}_place(t){const e=t.component,o=t.position||"manual",n=t.index,s=this._positionNameToContainerLookup[o],r=n>-1;var d;if((d=e.widget)&&!d._started&&"function"==typeof d.postMixInProperties&&"function"==typeof d.buildRendering&&"function"==typeof d.postCreate&&"function"==typeof d.startup&&e.widget.startup(),!r)return void s.appendChild(e.node);const a=Array.prototype.slice.call(s.children);if(0===n)return void(s.firstChild?i(e.node,s.firstChild):s.appendChild(e.node));n>=a.length?s.appendChild(e.node):i(e.node,a[n])}_applyViewPadding(){const t=this.container;t&&N(t,this._toPxPosition(this._getViewPadding()))}_applyUIPadding(){const t=this._innerContainer;t&&N(t,this._toPxPosition(this.padding))}_toPxPosition(t){return{top:this._toPxUnit(t.top),left:this._toPxUnit(t.left),right:this._toPxUnit(t.right),bottom:this._toPxUnit(t.bottom)}}_toPxUnit(t){return 0===t?"0":t+"px"}_findByComponent(t){let e,o=null;return this._components.some((i=>(e=i===t,e&&(o=i),e))),o}_findById(t){let e,o=null;return this._components.some((i=>(e=i.id===t,e&&(o=i),e))),o}_findByNode(t){let e,o=null;return this._components.some((i=>(e=i.node===t,e&&(o=i),e))),o}};t([d()],T.prototype,"container",null),t([d()],T.prototype,"height",null),t([d({value:f})],T.prototype,"padding",null),t([a("padding")],T.prototype,"castPadding",null),t([d()],T.prototype,"view",void 0),t([d()],T.prototype,"width",null),T=t([p("esri.views.ui.UI")],T);const A=T;export{g as C,A as default};
