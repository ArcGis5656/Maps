// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],function(c,f,g,h,k){function b(){b=f._asyncToGenerator(function*(a,d,e){a=g.parseUrl(a);return(yield h.executeQueryForTopCount(a,k.from(d),{...e})).data.count});return b.apply(this,arguments)}c.executeForTopCount=function(a,d,e){return b.apply(this,arguments)};Object.defineProperty(c,"__esModule",{value:!0})});