// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/Point".split(" "),function(g,b,a,c,l,m,n,h,k){a=function(e){function f(){var d=e.apply(this,arguments)||this;d.blockWidth=void 0;d.blockHeight=void 0;d.compression=null;d.origin=null;d.firstPyramidLevel=null;d.maximumPyramidLevel=
null;d.pyramidScalingFactor=2;d.pyramidBlockWidth=null;d.pyramidBlockHeight=null;d.isVirtualTileInfo=!1;d.tileInfo=null;d.blockBoundary=null;return d}g._inheritsLoose(f,e);return f}(a.JSONSupport);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"blockWidth",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"blockHeight",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"compression",void 0);b.__decorate([c.property({type:k,
json:{write:!0}})],a.prototype,"origin",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"firstPyramidLevel",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maximumPyramidLevel",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"pyramidResolutions",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pyramidScalingFactor",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockWidth",
void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockHeight",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"isVirtualTileInfo",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"tileInfo",void 0);b.__decorate([c.property()],a.prototype,"blockBoundary",void 0);return a=b.__decorate([h.subclass("esri.layers.support.RasterStorageInfo")],a)});