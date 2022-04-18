// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Identifiable ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./interfaces ./graphics/GraphicsProcessor ../../layers/GraphicsView".split(" "),function(g,d,c,n,m,e,v,w,x,p,q,r,t){c=function(h){function f(a){a=h.call(this,a)||this;a.processor=
null;a.slicePlaneEnabled=!1;a.layer=new u;a.drapeSourceType=q.DrapeSourceType.Features;return a}g._inheritsLoose(f,h);var b=f.prototype;b.initialize=function(){this._set("processor",new r.GraphicsProcessor({owner:this}));this.processor.setup()};b.destroy=function(){this._set("processor",m.destroyMaybe(this.processor))};b.getGraphicFromGraphicUid=function(a){return this.processor.getGraphicFromGraphicUid(a)};b.whenGraphicBounds=function(a,k){return this.processor.whenGraphicBounds(a,k)};b.graphicChanged=
function(a){this.processor.graphicsCore.graphicUpdateHandler(a)};b.queryGraphics=function(){var a=g._asyncToGenerator(function*(){return this.loadedGraphics});return function(){return a.apply(this,arguments)}}();b.fetchPopupFeatures=function(){var a=g._asyncToGenerator(function*(k,l){return m.isSome(l)?l.clientGraphics:null});return function(k,l){return a.apply(this,arguments)}}();b.highlight=function(a){return this.processor.highlight(a)};b.maskOccludee=function(a){return this.processor.maskOccludee(a)};
g._createClass(f,[{key:"graphics",get:function(){return this.view.graphics}},{key:"loadedGraphics",get:function(){return this.graphics}},{key:"updating",get:function(){var a;return!(null==(a=this.processor)||!a.updating)}},{key:"symbolUpdateType",get:function(){return this.processor.graphicsCore.symbolUpdateType}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}}]);return f}(t.GraphicsView(c));d.__decorate([e.property({readOnly:!0})],c.prototype,"graphics",
null);d.__decorate([e.property()],c.prototype,"loadedGraphics",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"updating",null);d.__decorate([e.property({constructOnly:!0})],c.prototype,"view",void 0);d.__decorate([e.property()],c.prototype,"processor",void 0);d.__decorate([e.property({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0);d.__decorate([e.property()],c.prototype,"layer",void 0);c=d.__decorate([p.subclass("esri.views.3d.layers.GraphicsView3D")],c);let u=function(h){function f(){var b=
h.call(this)||this;b.type="graphics-view-3d-dummy";b.id=b.uid;return b}g._inheritsLoose(f,h);return f}(n.Identifiable);return c});