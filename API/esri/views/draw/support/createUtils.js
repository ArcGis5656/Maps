// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/arrayUtils ../../../core/lang ../../../core/maybe ../../../core/unitUtils ../../../geometry/Circle ../../../geometry/geometryEngine ../../../geometry/support/coordsUtils ../../../geometry/support/spatialReferenceUtils ./surfaceCoordinateSystems ../../../geometry/Multipoint ../../../geometry/Point ../../../geometry/Polyline ../../../geometry/Polygon".split(" "),function(l,D,u,v,m,w,x,r,p,t,g,y,z,A,B){function q(a,c){c=new z({x:a[0],y:a[1],spatialReference:c});
2<a.length&&(c.z=a[2]);return c}function n(a,c,d,e=!0){a=v.clone(a);a.forEach(b=>{u.equals(b[0],b[b.length-1])&&1!==b.length||b.push(b[0])});a=new B({rings:a,spatialReference:c});a.rings.forEach(b=>{p.isClockwise(b,!1,!1)||b.reverse()});d&&p.unnormalizeGeometryOnDatelineCrossing(a);e&&a.isSelfIntersecting&&t.isValid(c)&&(a=r.simplify(a));return a}l.SNAPPING_GRAPHICS_LAYER_ID="DrawAction-snapping-graphics-layer";l.createCircle=function(a,c,d,e){var b=c.mapToLocalMultiple(a),f=a=null;d?(a=b[0],f=b[1]):
(a=b[0],d=b[1],f=Math.round(d.x-a.x),d=Math.round(d.y-a.y),b=Math.max(Math.abs(f),Math.abs(d)),a=g.makeSurfacePoint(0<f?a.x+b/2:a.x-b/2,0<d?a.y+b/2:a.y-b/2),f=g.makeSurfacePoint(Math.abs(f)>Math.abs(d)?a.x-b/2:a.x,Math.abs(f)>Math.abs(d)?a.y:a.y-b/2));d=c.localToMap(a);b=c.localToMap(f);if(m.isNone(d)||m.isNone(b))return null;c.doUnnormalization&&p.unnormalizeVerticesOnDatelineCrossing([[d,b]],c.spatialReference);d=q(d,c.spatialReference);var h=q(b,c.spatialReference);b=w.getMetersPerUnitForSR(c.spatialReference);
let k=0;t.isValid(c.spatialReference)?k=b*r.distance(d,h,null):(h=a.x-f.x,a=a.y-f.y,k=b*Math.sqrt(h*h+a*a)*(e||1));c=new x({center:d,radius:k,radiusUnit:"meters",spatialReference:c.spatialReference});return n(c.rings,c.spatialReference,!1)};l.createEllipse=function(a,c,d){var e=c.mapToLocalMultiple(a);a=e[0];var b=e[1];e=Math.round(b.x-a.x);b=Math.round(b.y-a.y);a=g.makeSurfacePoint(d?a.x:a.x+e/2,d?a.y:a.y+b/2);e=d?e:e/2;d=d?b:b/2;b=[];const f=2*Math.PI/60;for(let h=0;60>h;h++){const k=g.makeSurfacePoint(e*
Math.cos(h*f)+a.x,d*Math.sin(h*f)+a.y);b.push(k)}b.push(b[0]);return n([m.filterNones(b.map(h=>c.localToMap(h)))],c.spatialReference,c.doUnnormalization,!1)};l.createMultipoint=function(a,c){return new y({points:a,spatialReference:c})};l.createPoint=q;l.createPolygon=n;l.createPolyline=function(a,c,d){a=new A({paths:a,spatialReference:c});d&&p.unnormalizeGeometryOnDatelineCrossing(a);return a};l.createRectangle=function(a,c,d){var e=c.mapToLocalMultiple(a);1===e.length&&(a=e[0],e=[g.makeSurfacePoint(a.x-
48,a.y+48),g.makeSurfacePoint(a.x+48,a.y-48),g.makeSurfacePoint(a.x+48,a.y-48),g.makeSurfacePoint(a.x-48,a.y+48)]);a=[];var b=e[0].x,f=e[0].y,h=e[1].x;e=e[1].y;if(d){d=Math.round(h-b);const k=Math.round(e-f);a.push(g.makeSurfacePoint(b-d,f-k),g.makeSurfacePoint(h,f-k),g.makeSurfacePoint(h,e),g.makeSurfacePoint(b-d,e))}else a.push(g.makeSurfacePoint(b,f),g.makeSurfacePoint(h,f),g.makeSurfacePoint(h,e),g.makeSurfacePoint(b,e));return n([m.filterNones(a.map(k=>c.localToMap(k)))],c.spatialReference,c.doUnnormalization,
!0)};l.createSquare=function(a,c,d){var e=c.mapToLocalMultiple(a);a=[];var b=e[0].x,f=e[0].y,h=Math.round(e[1].x-b);const k=Math.round(e[1].y-f);e=Math.max(Math.abs(h),Math.abs(k));d?(d=b+e,h=f+e,b-=e,f-=e,a.push(g.makeSurfacePoint(d,f),g.makeSurfacePoint(b,f),g.makeSurfacePoint(b,h),g.makeSurfacePoint(d,h))):(d=0<h?b+e:b-e,e=0<k?f+e:f-e,a.push(g.makeSurfacePoint(b,f),g.makeSurfacePoint(d,f),g.makeSurfacePoint(d,e),g.makeSurfacePoint(b,e)));return n([m.filterNones(a.map(C=>c.localToMap(C)))],c.spatialReference,
c.doUnnormalization,!0)};l.makeMapPoint=function(a,c,d=null){return m.isSome(d)?[a,c,d]:[a,c]};Object.defineProperty(l,"__esModule",{value:!0})});