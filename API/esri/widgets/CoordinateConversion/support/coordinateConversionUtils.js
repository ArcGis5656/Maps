// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry","../../../geometry/Point","../../../geometry/SpatialReference"],function(c,q,n,p){function h(a,b){b=k(b);return[a[0].toFixed(b),a[1].toFixed(b)]}function k(a){return 500<=a?6:500>a&&50<=a?7:50>a&&5<=a?8:9}function d(a){return"number"===typeof a&&isFinite(a)}c.clipLonLat=h;c.fromXY=function(a,b){const f=0<=a.indexOf(",")?",":" ",[e,l,m]=a.split(f).map(g=>(g=g.trim())?Number(g):null);if(!d(e)||!d(l))return null;a=new n({x:e,y:l,spatialReference:b||p.WGS84});m&&
(a.z=m,a.hasZ=!0);return a};c.getDegreePrecision=k;c.isSupportedNotation=function(a){return"dd"===a||"dms"===a||"ddm"===a||"mgrs"===a||"usng"===a||"utm"===a};c.isValidPoint=function(a){return a&&d(a.x)&&d(a.y)};c.pointToCoordinate=function(a,b){if(a.spatialReference.isGeographic&&b){const [f,e]=h([a.x,a.y],b);return`${f}, ${e}`}return`${a.x.toFixed(3)}, ${a.y.toFixed(3)}`};Object.defineProperty(c,"__esModule",{value:!0})});