// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../webgl-engine/lib/IntersectorInterfaces","../webgl-engine/lib/intersectorUtils"],function(b,c,d){b.isOverlayIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.OVERLAY&&!!a.target};b.isTerrainIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.TERRAIN&&!!a.target};Object.defineProperty(b,"__esModule",{value:!0})});