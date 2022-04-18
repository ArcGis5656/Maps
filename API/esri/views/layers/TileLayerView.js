// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../renderers/support/clickToleranceUtils".split(" "),function(f,g,p,q,u,v,w,h,B,C,x,y){h=d=>{d=function(r){function k(){return r.apply(this,arguments)||this}g._inheritsLoose(k,r);k.prototype.fetchPopupFeatures=
function(){var A=g._asyncToGenerator(function*(l,m){var z=this,{layer:c}=this;if(!l)return Promise.reject(new q("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:c}));if("tile"!==c.type)return Promise.reject(new q("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:c.type}));const t=this.get("view.scale");c=c.allSublayers.toArray().filter(a=>{const b=0===a.minScale||t<=a.minScale,e=0===a.maxScale||t>=a.maxScale;return a.popupTemplate&&a.popupEnabled&&a.visible&&
b&&e});return v.eachAlways(c.map(function(){var a=g._asyncToGenerator(function*(b){const e=b.createQuery();var n=u.isSome(m)?m.event:null;n=y.calculateTolerance({renderer:b.renderer,event:n});e.geometry=z.createFetchPopupFeaturesQueryGeometry(l,n);e.outFields=yield b.popupTemplate.getRequiredFields();return(yield b.queryFeatures(e)).features});return function(b){return a.apply(this,arguments)}}())).then(a=>[].concat(...a.map(b=>b.value).filter(Boolean)))});return function(l,m){return A.apply(this,
arguments)}}();return k}(d);p.__decorate([w.property()],d.prototype,"layer",void 0);return d=p.__decorate([x.subclass("esri.layers.mixins.TileLayerView")],d)};f.TileLayerView=h;f.default=h;Object.defineProperty(f,"__esModule",{value:!0})});