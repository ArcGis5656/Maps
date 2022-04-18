// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Camera ../../../core/Logger ../../../core/mathUtils ../../../core/maybe ../../../core/promiseUtils ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/Point ../../../geometry/projection ../../../geometry/projectionEllipsoid ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../../ViewingMode ../camera/intersectionUtils ../../../chunks/cameraUtilsPlanar ../../../chunks/cameraUtilsSpherical ./earthUtils ./ElevationProvider ./mathUtils ../../support/spatialReferenceSupport".split(" "),
function(l,O,H,Z,D,n,aa,z,r,w,p,ba,A,ca,I,da,P,Q,ea,R,S,fa){function x(a){return"global"===a.viewingMode?Q.cameraUtilsSpherical:P.cameraUtilsPlanar}function T(a,b,c){const d=a.state.camera,e=d.width/2/d.pixelRatio;a.renderCoordsHelper.viewingMode===I.ViewingMode.Global&&null!=c&&(b*=Math.cos(D.deg2rad(c)));b/=a.renderCoordsHelper.unitInMeters;return e/(96*39.37/b)/Math.tan(d.fovX/2)}function U(a,b,c){const d=a.state.camera;b=96*39.37/(d.width/2/d.pixelRatio/(b*Math.tan(d.fovX/2)));a.renderCoordsHelper.viewingMode===
I.ViewingMode.Global&&(b/=Math.cos(D.deg2rad(c)));return b*=a.renderCoordsHelper.unitInMeters}function V(a,b,c,d,e,f){if(B(f)){const h=new J(f.signal);E(a,d.heading,d.tilt,b,c,e,h);h.resolver.promise.then(g=>{g=F(a,g,d.fov);if(n.isNone(g))f.resolver.reject();else return f.resolver.resolve(g)},g=>f.resolver.reject(g))}else return b=E(a,d.heading,d.tilt,b,c,e),F(a,b,d.fov,f)}function W(a,b,c,d,e){return x(a).directionToHeadingTilt(b,c,d,e)}function ha(a,b){return!!(a.basemapTerrain&&a.renderCoordsHelper.fromRenderCoords(b,
y,a.spatialReference)&&n.unwrapOr(R.getElevationAtPoint(a.elevationProvider,y),0)>y.z-1)}function ia(a,b,c){return K.apply(this,arguments)}function K(){K=O._asyncToGenerator(function*(a,b,c){if(!a.renderCoordsHelper.fromRenderCoords(b,y,a.spatialReference))return!1;a=yield a.elevationProvider.queryElevation(y.x,y.y,y.z,y.spatialReference,"ground",c);return n.unwrapOr(a,0)>y.z-1});return K.apply(this,arguments)}function ja(a,b,c){return L.apply(this,arguments)}function L(){L=O._asyncToGenerator(function*(a,
b,c){const d=r.create();b?b instanceof w?(p.projectPointToVector(b,d,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=yield a.elevationProvider.queryElevation(b.x,b.y,b.z,b.spatialReference,"ground",c),n.isSome(b)&&a.renderCoordsHelper.setAltitude(d,b))):z.copy(d,b):z.copy(d,a.state.camera.center);return d});return L.apply(this,arguments)}function ka(a,b){const c=r.create();b&&b instanceof w?(p.projectPointToVector(b,c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=
R.getElevationAtPoint(a.elevationProvider,b),n.isSome(b)&&a.renderCoordsHelper.setAltitude(c,b))):b?z.copy(c,b):z.copy(c,a.state.camera.center);return c}function E(a,b,c,d,e,f,h){const g=d&&d instanceof w?d:null;if(B(h))return ja(a,d,h.signal).then(k=>{M(a,b,c,g,k,e,f,h)},k=>h.resolver.reject(k)),null;d=ka(a,d);return M(a,b,c,g,d,e,f,h)}function M(a,b,c,d,e,f,h,g){if(n.isNone(d)&&(d=p.projectVectorToPoint(e,a.renderSpatialReference,a.spatialReference||A.WGS84),n.isNone(d)))return null;f=Math.max(f,
a.state.constraints.minimumPoiDistance);var k=la(a,b,c,e,f,h);const t=x(a).eyeForCenterWithHeadingTilt,m=t(e,f,k.heading,k.tilt);if(h===l.OrientationMode.ADJUST&&"global"===a.viewingMode&&0<c){const q=()=>{var u=f,v=f;var N=a.state.constraints.tilt(v);v=x(a).eyeTiltToLookAtTilt(c,e,v);v=Math.min(v,.5*Math.PI);N=N.min*(1-.7)+.7*v;u=x(a).lookAtTiltToEyeTilt(N,e,u);h=1>c-u?l.OrientationMode.LOCKED:l.OrientationMode.ADJUST;return M(a,b,u,d,e,f,h,g)};k=a.map.ground.navigationConstraint;if(!k||"stay-above"===
k.type){if(ha(a,m.eye))return q();if(B(g))return ia(a,m.eye,g.signal).then(u=>{if(u)return q();g.resolver.resolve({eye:m.eye,up:m.up,center:r.clone(e),heading:m.heading,tilt:m.tilt});return null}),null}}k=!g||B(g)?{center:r.create(),eye:r.create(),up:r.create(),tilt:0,heading:0}:g;k.eye=m.eye;k.up=m.up;k.center=r.clone(e);k.heading=m.heading;k.tilt=m.tilt;B(g)&&g.resolver.resolve(k);return k}function la(a,b,c,d,e,f){var h=0;if(f=f===l.OrientationMode.ADJUST)if(h=a.pointsOfInterest.centerOnSurfaceFrequent.distance,
8<Math.log(e/h)/Math.LN2)f=!0;else{var g=a.renderSpatialReference,k=a.spatialReference||A.WGS84;f=p.projectVectorToPoint(d,g,k);g=p.projectVectorToPoint(a.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,g,k);n.isNone(f)||n.isNone(g)?f=!1:(h*=Math.tan(.5*a.state.camera.fov),f=5<g.distance(f)/h)}f?(b=0,f=a.state.constraints.tilt(e),f.max=Math.min(f.max,.5*Math.PI),f=f.min*(1-.7)+.7*f.max,c=x(a).eyeTiltToLookAtTilt(c,d,e),h=Math.min(c,f)):h=x(a).eyeTiltToLookAtTilt(c,d,e);c=h=a.state.constraints.clampTilt(e,
h);c=x(a).lookAtTiltToEyeTilt(c,d,e);return{heading:b,tilt:c}}function F(a,b,c,d){if(n.isNone(b))return null;a=p.projectVectorToPoint(b.eye,a.renderSpatialReference,a.spatialReference||A.WGS84);return n.isNone(a)?null:n.isSome(d)?(d.position=a,d.heading=b.heading,d.tilt=b.tilt,d.fov=c,d):new H(a,b.heading,b.tilt,c)}function B(a){return a&&"resolver"in a}const X=Z.getLogger("esri.views.3d.support.cameraUtils"),Y=r.create(),G=r.create(),ma={heading:0,tilt:0},y=new w,na=new S.Cyclical(-2.0037508342788905E7,
2.0037508342788905E7),oa=new S.Cyclical(-180,180);l.OrientationMode=void 0;(function(a){a[a.LOCKED=0]="LOCKED";a[a.ADJUST=1]="ADJUST"})(l.OrientationMode||(l.OrientationMode={}));const C=r.create();let J=function(a){this.signal=a;this.resolver=aa.createResolver()};l.AsyncContext=J;l.computeScale=function(a,b,c){const d=a.renderSpatialReference;b||(b=a.state.camera);var e=A.WGS84;b instanceof H?(e=b.position.latitude,p.projectPointToVector(b.position,Y,d),p.projectPointToVector(c,G,d),b=z.distance(Y,
G)):(p.projectVectorToVector(b.center,d,G,e),e=G[1],b=b.distance);return U(a,b,e)};l.directionToHeadingTilt=W;l.distanceToScale=U;l.externalToInternal=function(a,b){if(n.isNone(b))return null;var c=a.renderSpatialReference;const d=x(a).headingTiltToDirectionUp,e=r.create();if(!p.projectPointToVector(b.position,e,c))return null;c=d(e,b.heading,b.tilt);z.scale(c.direction,c.direction,a.state.camera.distance);z.add(c.direction,c.direction,e);a=da.cameraOnContentAlongViewDirection(a,e,c.direction,c.up);
a.fov=D.deg2rad(b.fov);return a};l.fromCenterDistance=V;l.fromCenterScale=function(a,b,c,d,e,f){c=T(a,c,b.latitude);return V(a,b,c,d,e,f)};l.fromExtent=function(a,b,c,d,e,f=null){var h=null!=b.zmax&&null!=b.zmin;let g;if(a.state.isGlobal){if(!fa.isSpatialReferenceSupported(b.spatialReference,I.ViewingMode.Global))return B(f)&&f.resolver.reject(),null;var k=new w(b.xmin,b.ymin,b.spatialReference);const q=new w(b.xmax,b.ymax,b.spatialReference),u=b.spatialReference.isGeographic?oa:na;var t=new w({x:u.center(k.x,
q.x),y:(q.y+k.y)/2,z:h?(b.zmax+b.zmin)/2:null,spatialReference:b.spatialReference});const v=ba.getReferenceEllipsoid(b.spatialReference);var m=ea.getGreatCircleSpanAt(t,k,q);g=m.lon;m=m.lat;u.diff(k.x,q.x)>u.range/2&&(g+=v.halfCircumference);g=Math.min(g,v.halfCircumference);m=Math.min(m,v.halfCircumference)}else t=n.unwrapOr(a.renderSpatialReference,b.spatialReference),t.equals(b.spatialReference)||(b=p.project(b,t)),g=b.xmax-b.xmin,m=b.ymax-b.ymin,t=new w({x:b.xmin+.5*g,y:b.ymin+.5*m,z:h?(b.zmax+
b.zmin)/2:null,spatialReference:t});k=a.state.camera;b=Math.max(1/Math.tan(k.fovX/2)*g*.5,1/Math.tan(k.fovY/2)*m*.5,1/Math.tan(k.fov/2)*(h?b.zmax-b.zmin:0)*.5)/1;if(B(f))h=new J(f.signal),E(a,c,d,t,b,e,h),h.resolver.promise.then(q=>{q=F(a,q,a.camera.fov);if(n.isNone(q))f.resolver.reject();else return f.resolver.resolve(q)},q=>f.resolver.reject(q));else return c=E(a,c,d,t,b,e),F(a,c,a.camera.fov,f)};l.getObserverForPointAtDistance=E;l.headingTiltToDirectionUp=function(a,b,c,d,e){return x(a).headingTiltToDirectionUp(b,
c,d,e)};l.internalToExternal=function(a,b,c){const d=a.renderSpatialReference,e=W(a,b.eye,b.viewForward,b.up,ma);a=a.spatialReference||A.WGS84;p.projectVectorToVector(b.eye,d,C,a)||(a=A.WGS84,p.projectVectorToVector(b.eye,d,C,a));if(n.isNone(c))return new H(new w(C,a),e.heading,e.tilt,D.rad2deg(b.fov));c.position.x=C[0];c.position.y=C[1];c.position.z=C[2];c.position.spatialReference=a;c.heading=e.heading;c.tilt=e.tilt;c.fov=D.rad2deg(b.fov);return c};l.observerToCamera=F;l.scaleToDistance=T;l.scaleToResolution=
function(a,b){return a.spatialReference?ca.getResolutionForScale(b,a.spatialReference):void 0};l.scaleToZoom=function(a,b){var c;if(a=null==(c=a.basemapTerrain)?void 0:c.tilingScheme)return a.levelAtScale(b);X.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")};l.toExtent=function(a,b,c){const d=p.projectVectorToPoint(c,a.renderSpatialReference,a.spatialReference||A.WGS84);if(n.isNone(d))return null;var e=Math.tan(b.fovX/2),f=Math.tan(b.fovY/2);b=z.dist(b.eye,c);e*=2*
b;f*=2*b;return"global"===a.viewingMode?Q.toExtent(a,d,e,f):P.toExtent(a,d,e,f)};l.zoomToScale=function(a,b){var c;if(a=null==(c=a.basemapTerrain)?void 0:c.tilingScheme)return a.scaleAtLevel(b);X.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")};Object.defineProperty(l,"__esModule",{value:!0})});