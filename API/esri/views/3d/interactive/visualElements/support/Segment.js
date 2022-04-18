// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/projection ../../../../../geometry/projectionEllipsoid ../../../../../geometry/support/vectorStacks ../../../support/mathUtils".split(" "),function(r,d,h,n,y,z,u){let w=function(){function k(c=h.create(),a=h.create()){this.startRenderSpace=c;this.endRenderSpace=a;this.type="euclidean"}var e=k.prototype;e.eval=function(c,a,b){d.lerp(a,this.startRenderSpace,this.endRenderSpace,c);b&&(d.subtract(b,this.endRenderSpace,
this.startRenderSpace),d.normalize(b,b));return a};e.createRenderGeometry=function(c,a){const b=[],g=[],m=(p,l)=>{const f=t;d.subtract(f,p,c);b.push([f[0],f[1],f[2]]);g.push([l[0],l[1],l[2]])};a=a.worldUpAtPosition(this.eval(.5,v),z.sv3d.get());m(this.startRenderSpace,a);m(this.endRenderSpace,a);return{points:b,normals:g}};return k}(),x=function(){function k(c,a,b){this.startRenderSpace=c;this.endRenderSpace=a;this.renderSpatialReference=b;this.type="geodesic";this._start=h.create();this._end=h.create();
this._pcpf=y.getSphericalPCPF(b);this._project=n.canProjectWithoutEngine(b,this._pcpf);this._projectIn(c,this._start);this._projectIn(a,this._end)}var e=k.prototype;e._projectIn=function(c,a){this._project?n.projectVectorToVector(c,this.renderSpatialReference,a,this._pcpf):d.copy(a,c)};e.eval=function(c,a,b){if(this._project)if(b){const g=t;u.slerpTangent(this._start,this._end,c,a,g);d.add(q,a,g);n.projectVectorToVector(a,this._pcpf,a,this.renderSpatialReference);n.projectVectorToVector(q,this._pcpf,
q,this.renderSpatialReference);d.subtract(b,q,a);d.normalize(b,b)}else u.slerp(this._start,this._end,c,a),n.projectVectorToVector(a,this._pcpf,a,this.renderSpatialReference);else d.lerp(a,this._start,this._end,c),b&&(d.subtract(b,this._end,this._start),d.normalize(b,b));return a};e.createRenderGeometry=function(c,a){const b=[],g=[];for(let p=0;128>p;++p){const l=v;var m=t;this.eval(p/127,l);a.worldUpAtPosition(l,m);{const f=q;d.subtract(f,l,c);b.push([f[0],f[1],f[2]]);g.push([m[0],m[1],m[2]])}}return{points:b,
normals:g}};return k}();const v=h.create(),t=h.create(),q=h.create();r.EuclideanSegment=w;r.GeodesicSegment=x;r.createSegment=function(k,e,c,a){switch(k){case "euclidean":return new w(e,c);case "geodesic":return new x(e,c,a)}};Object.defineProperty(r,"__esModule",{value:!0})});