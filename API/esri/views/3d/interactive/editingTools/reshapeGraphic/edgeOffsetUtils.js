// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/plane ../../../../../layers/graphics/dehydratedFeatures ../../../../interactive/editGeometry/operations/OffsetEdgeVertex".split(" "),function(g,k,n,q,e,f,l,r,m){function p(a,b,c){c=r.makeDehydratedPoint(b.x+c[0],b.y+c[1],b.z+c[2],b.spatialReference);const h=f.create(),d=f.create();return a.renderCoordsHelper.toRenderCoords(b,
h)&&a.renderCoordsHelper.toRenderCoords(c,d)?e.direction(d,h,d):null}g.createEdgeOffsetIntersectionPlane=function(a,b,c){const h=f.create();if(!a.renderCoordsHelper.toRenderCoords(b,h))return null;var d=p(a,b,l.normal(c.plane));a=p(a,b,c.edgeDirection);if(k.isNone(d)||k.isNone(a))return null;d=e.cross(f.create(),d,a);return l.fromPositionAndNormal(h,d,l.create())};g.createEdgeOffsetOperation=function(a,b,c){return new m.OffsetEdgeVertex(a,"on-the-ground"===c.mode?m.PlaneType.XY:m.PlaneType.XYZ,b,
0)};g.edgeOffsetRotationMatrix=function(a,b,c){a=l.normal(a);b=e.direction(f.create(),b,c);c=e.cross(f.create(),b,a);a=e.cross(f.create(),b,c);return q.fromValues(b[0],b[1],b[2],0,c[0],c[1],c[2],0,a[0],a[1],a[2],0,0,0,0,1)};g.screenEdgeLengthSquared=function(a,b,c){a=c.projectToRenderScreen(a,n.createRenderScreenPointArray3());b=c.projectToRenderScreen(b,n.createRenderScreenPointArray3());return k.isSome(a)&&k.isSome(b)?e.squaredLength(e.subtract(a,a,b)):0};Object.defineProperty(g,"__esModule",{value:!0})});