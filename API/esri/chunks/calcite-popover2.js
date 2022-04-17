// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./resources ./popper ./dom ./calcite-action2 ./calcite-icon2 ./calcite-loader2".split(" "),function(g,d,e,h,m,u,v,w){function q(){["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(a=>{switch(a){case "calcite-popover":customElements.get(a)||customElements.define(a,g.CalcitePopover);break;case "calcite-action":customElements.get(a)||u.defineCustomElement();break;case "calcite-icon":customElements.get(a)||v.defineCustomElement();break;case "calcite-loader":customElements.get(a)||
w.defineCustomElement()}})}const r=(a,b)=>{const c=`h${a.level}`;delete a.level;return d.h(c,Object.assign({},a),b)};g.CalcitePopover=class extends HTMLElement{constructor(){super();this.__registerHost();this.__attachShadow();this.calcitePopoverClose=d.createEvent(this,"calcitePopoverClose",7);this.calcitePopoverOpen=d.createEvent(this,"calcitePopoverOpen",7);this.disablePointer=this.disableFlip=this.dismissible=this.closeButton=!1;this.offsetDistance=h.defaultOffsetDistance;this.offsetSkidding=0;
this.open=!1;this.overlayPositioning="absolute";this.placement="auto";this.intlClose=e.TEXT.close;this.guid=`calcite-popover-${m.guid()}`;this.activeTransitionProp="opacity";this.setUpReferenceElement=()=>{this.removeReferences();this.effectiveReferenceElement=this.getReferenceElement();const {el:a,referenceElement:b,effectiveReferenceElement:c}=this;b&&!c&&console.warn(`${a.tagName}: reference-element id "${b}" was not found.`,{el:a});this.addReferences();this.createPopper()};this.getId=()=>this.el.id||
this.guid;this.setExpandedAttr=()=>{const {effectiveReferenceElement:a,open:b}=this;a&&a.setAttribute(e.ARIA_EXPANDED,b.toString())};this.addReferences=()=>{const {effectiveReferenceElement:a}=this;if(a){var b=this.getId();a.setAttribute(e.POPOVER_REFERENCE,b);a.setAttribute(e.ARIA_CONTROLS,b);this.setExpandedAttr()}};this.removeReferences=()=>{const {effectiveReferenceElement:a}=this;a&&(a.removeAttribute(e.POPOVER_REFERENCE),a.removeAttribute(e.ARIA_CONTROLS),a.removeAttribute(e.ARIA_EXPANDED))};
this.hide=()=>{this.open=!1};this.transitionEnd=a=>{a.propertyName===this.activeTransitionProp&&(this.open?this.calcitePopoverOpen.emit():this.calcitePopoverClose.emit())}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition();this.setExpandedAttr()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences();
this.destroyPopper()}async reposition(){const {popper:a,el:b,placement:c}=this,f=this.getModifiers();a?await h.updatePopper({el:b,modifiers:f,placement:c,popper:a}):this.createPopper()}async setFocus(a){var b;const {closeButtonEl:c}=this;"close-button"===a&&c?(d.forceUpdate(c),c.setFocus()):null===(b=this.el)||void 0===b?void 0:b.focus()}async toggle(a=!this.open){this.open=a}getReferenceElement(){const {referenceElement:a,el:b}=this;return("string"===typeof a?m.queryElementRoots(b,`#${a}`):a)||null}getModifiers(){const {arrowEl:a,
flipPlacements:b,disableFlip:c,disablePointer:f,offsetDistance:k,offsetSkidding:p}=this,n={name:"flip",enabled:!c};b&&(n.options={fallbackPlacements:b});const l={name:"arrow",enabled:!f};a&&(l.options={element:a});return[l,n,{name:"offset",enabled:!0,options:{offset:[p,k]}}]}createPopper(){this.destroyPopper();const {el:a,placement:b,effectiveReferenceElement:c,overlayPositioning:f}=this,k=this.getModifiers();this.popper=h.createPopper({el:a,modifiers:k,overlayPositioning:f,placement:b,referenceEl:c})}destroyPopper(){const {popper:a}=
this;a&&a.destroy();this.popper=null}renderCloseButton(){const {dismissible:a,closeButton:b,intlClose:c}=this;return a||b?d.h("calcite-action",{class:e.CSS.closeButton,onClick:this.hide,ref:f=>this.closeButtonEl=f,text:c},d.h("calcite-icon",{icon:"x",scale:"m"})):null}renderHeader(){const {heading:a,headingLevel:b}=this,c=a?d.h(r,{class:e.CSS.heading,level:b||e.HEADING_LEVEL},a):null;return c?d.h("div",{class:e.CSS.header},c,this.renderCloseButton()):null}render(){const {effectiveReferenceElement:a,
el:b,heading:c,label:f,open:k,disablePointer:p}=this,n="rtl"===m.getElementDir(b),l=a&&k,t=!l,y=p?null:d.h("div",{class:e.CSS.arrow,ref:x=>this.arrowEl=x});return d.h(d.Host,{"aria-hidden":t.toString(),"aria-label":f,"calcite-hydrated-hidden":t,id:this.getId(),role:"dialog"},d.h("div",{class:{[m.CSS_UTILITY.rtl]:n,[h.CSS.animation]:!0,[h.CSS.animationActive]:l},onTransitionEnd:this.transitionEnd},y,d.h("div",{class:{[e.CSS.hasHeader]:!!c,[e.CSS.container]:!0}},this.renderHeader(),d.h("div",{class:e.CSS.content},
d.h("slot",null)),c?null:this.renderCloseButton())))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^\x3dbottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^\x3dtop]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^\x3dleft]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^\x3dright]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^\x3dtop]) .arrow{bottom:-4px}:host([data-popper-placement^\x3dbottom]) .arrow{top:-4px}:host([data-popper-placement^\x3dleft]) .arrow{right:-4px}:host([data-popper-placement^\x3dright]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{border-width:0;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-3);border-style:solid;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex-pack:start;justify-content:flex-start}.heading{display:block;-ms-flex:1 1 auto;flex:1 1 auto;font-weight:var(--calcite-font-weight-medium);margin:0;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size-0);line-height:1.375;white-space:normal;word-wrap:break-word;word-break:break-word}.container{background-color:var(--calcite-ui-foreground-1);position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:row;flex-direction:row;height:100%;color:var(--calcite-ui-text-1);border-radius:0.25rem}.container.has-header{-ms-flex-direction:column;flex-direction:column}.content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-item-align:center;align-self:center;height:100%}.calcite--rtl .close-button{border-radius:0.25rem 0 0 0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}'}};
g.CalcitePopover=d.proxyCustomElement(g.CalcitePopover,[1,"calcite-popover",{closeButton:[516,"close-button"],dismissible:[516],disableFlip:[516,"disable-flip"],disablePointer:[516,"disable-pointer"],flipPlacements:[16],heading:[1],headingLevel:[2,"heading-level"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[1,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],intlClose:[1,"intl-close"],effectiveReferenceElement:[32],
reposition:[64],setFocus:[64],toggle:[64]}]);q();g.CalciteHeading=r;g.defineCustomElement=q});