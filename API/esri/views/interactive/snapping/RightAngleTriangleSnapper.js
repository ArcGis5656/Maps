// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ./SnappingAlgorithm ./snappingUtils ./candidates/RightAngleTriangleSnappingCandidate ../../support/geometry2dUtils".split(" "),function(n,t,u,p,q,h,k,v,w){h=function(r){function l(){return r.apply(this,arguments)||this}t._inheritsLoose(l,r);var m=l.prototype;m.snapNewVertex=function(d,c){const b=c.editGeometryOperations.data.components[0],a=[],e=b.vertices.length;if("polygon"!==
c.editGeometryOperations.data.type||2>e)return a;this._processCandidateProposal(b.vertices[0].pos,b.vertices[e-1].pos,d,c,a);return a};m.snapExistingVertex=function(d,c){const b=[],a=u.unwrap(c.vertexHandle),e=a.component;if(2>e.edges.length||"polyline"===c.editGeometryOperations.data.type&&(0===a.index||a.index===e.vertices.length-1))return b;this._processCandidateProposal(a.leftEdge.leftVertex.pos,a.rightEdge.rightVertex.pos,d,c,b);return b};m._processCandidateProposal=function(d,c,b,a,e){if(this.exceedsShortLineThreshold(d,
c,a)){var f=p.lerp(q.create(),d,c,.5),g=.5*p.distance(d,c);g=w.projectPointToCircle(q.create(),b,f,g);f=a.coordinateHelper;g=f.fromXYZ(g,f.getZ(b,0));b=k.anyMapPointToScreenPoint(b,f,a.elevationInfo,this.view);k.squareDistance(b,k.anyMapPointToScreenPoint(g,f,a.elevationInfo,this.view))<this.squaredProximityTreshold(a.pointer)&&e.push(new v.RightAngleTriangleSnappingCandidate({coordinateHelper:f,targetPoint:g,point1:d,point2:c}))}};return l}(h.SnappingAlgorithm);n.RightAngleTriangleSnapper=h;Object.defineProperty(n,
"__esModule",{value:!0})});