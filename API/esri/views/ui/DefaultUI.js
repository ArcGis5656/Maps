// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Component ./UI ../../widgets/Attribution ../../widgets/Compass ../../widgets/NavigationToggle ../../widgets/Zoom".split(" "),function(k,h,d,l,e,m,y,z,n,p,q,r,t,u,v){l.getLogger("esri.views.ui.DefaultUI");d=function(f){function g(a){a=
f.call(this,a)||this;a._defaultPositionLookup={attribution:"manual",compass:"top-leading","navigation-toggle":"top-leading",zoom:"top-leading"};a.components=[];return a}k._inheritsLoose(g,f);var c=g.prototype;c.initialize=function(){this._handles.add([e.watch(()=>this.components,this._componentsWatcher.bind(this),e.initial),e.watch(()=>this.view,this._updateViewAwareWidgets.bind(this),e.initial)])};c._add=function(a,b,w,x){if("string"===typeof a&&this._defaultPositionLookup[a]){if(this._find(a))return;
a=this._createComponent(a)}f.prototype._add.call(this,a,b,w,x)};c._removeComponents=function(a){a.forEach(b=>{if(b=this._find(b))this.remove(b),b.destroy()})};c._updateViewAwareWidgets=function(a){this.components.forEach(b=>{(b=(b=this._find(b))&&b.widget)&&void 0!==b.view&&(b.view=a)})};c._componentsWatcher=function(a,b){this._removeComponents(b);this._addComponents(a);this._adjustPadding(a)};c._adjustPadding=function(a){-1!==a.indexOf("attribution")||this._isOverridden("padding")||({top:a}=this.padding,
this.padding=a)};c._addComponents=function(a){this.initialized&&a.forEach(b=>this.add(this._createComponent(b),this._defaultPositionLookup[b]))};c._createComponent=function(a){const b=this._createWidget(a);if(b)return new p({id:a,node:b})};c._createWidget=function(a){if("attribution"===a)return this._createAttribution();if("compass"===a)return this._createCompass();if("navigation-toggle"===a)return this._createNavigationToggle();if("zoom"===a)return this._createZoom()};c._createAttribution=function(){return new r({view:this.view})};
c._createCompass=function(){return new t({view:this.view})};c._createNavigationToggle=function(){return new u({view:this.view})};c._createZoom=function(){return new v({view:this.view})};return g}(q);h.__decorate([m.property()],d.prototype,"components",void 0);return d=h.__decorate([n.subclass("esri.views.ui.DefaultUI")],d)});