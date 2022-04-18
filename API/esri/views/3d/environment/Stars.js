// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../assets ../../../core/Accessor ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/mat4 ../../../chunks/mat4f64 ./StarsTechnique ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/VertexAttribute ../../support/WatchUpdatingTracking ../../webgl/BufferObject ../../webgl/enums ../../webgl/VertexArrayObject".split(" "),
function(g,v,l,E,F,z,G,h,A,H,n,V,W,X,I,q,w,J,K,L,M,x,N,O,B,P){const Q=G.getLogger("esri.views.3d.environment.Stars");g.Stars=function(C){function r(a){a=C.call(this,a)||this;a._loadDataTask=null;a._numPoints=0;a._renderParameter={camera:null,modelMatrix:w.create()};a._updatingTracking=new N.WatchUpdatingTracking;return a}v._inheritsLoose(r,C);var f=r.prototype;f.initialize=function(){this._loadDataTask=this._createLoadDataTask()};f.destroy=function(){this._loadDataTask=h.abortMaybe(this._loadDataTask);
this._updatingTracking.destroy();this._numPoints=0;this._technique=h.releaseMaybe(this._technique);this._vao=h.disposeMaybe(this._vao)};f.render=function(a){const {rctx:c,camera:b}=a;this._ensureResources(c);h.isNone(this._technique)||h.isNone(this._vao)||(a=c.useTechnique(this._technique),this._renderParameter.camera=b,this._technique.bindPass(this._renderParameter),c.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao),c.drawArrays(B.PrimitiveType.POINTS,0,this._numPoints))};
f._ensureResources=function(a){if(!h.isSome(this._technique)&&!h.isNone(m)){this._technique=new J.StarsTechnique({rctx:a,viewingMode:this.view.state.viewingMode});this._numPoints=m.byteLength/9;var c=new Float32Array(m,0,2*this._numPoints),b=new Uint8Array(m,8*this._numPoints,this._numPoints);this._vao=this._createVertexArrayObject(a,c,b,this._numPoints);this._updatingTracking.add(()=>{var d;return null==(d=this.view)?void 0:d.environment.lighting.date},d=>this._update(d),H.initial)}};f._computeDayDuration=
function(a){const c=new Date(a.getFullYear(),0,1,11,58,56),b=new Date(a.getFullYear()+1,0,1,11,58,55);return(+a-+c)/(+b-+c)};f._update=function(a){if(a){var c=a.getHours()/12,b=a.getMinutes()/60*(2/24),d=a.getSeconds()/60*(2/1440);c=(c+b+d-.9972222)%2;a=2*this._computeDayDuration(a);b=this._renderParameter.modelMatrix;q.copy(b,R);q.rotateZ(b,b,-a*Math.PI);q.multiply(b,S,b);q.rotateZ(b,b,-c*Math.PI);this.requestRender()}};f._hexToRGB=function(a){return[parseInt(a.substring(0,2),16),parseInt(a.substring(2,
4),16),parseInt(a.substring(4,6),16)]};f._unpackUint8Attributes=function(a){return 192<=a?[2.9,a-192]:160<=a?[2.5,a-160]:128<=a?[2,a-128]:96<=a?[1.5,a-96]:64<=a?[1,a-64]:32<=a?[.7,a-32]:[.4,a]};f._createVertexArrayObject=function(a,c,b,d){const t=D.createBuffer(d),y=t.position,u=t.color,T=t.size;for(let e=0;e<d;e++){var p=c[2*e],k=c[2*e+1];y.set(e,0,-Math.cos(p)*Math.sin(k));y.set(e,1,-Math.sin(p)*Math.sin(k));y.set(e,2,-Math.cos(k));p=this._unpackUint8Attributes(b[e]);k=this._hexToRGB(U[p[1]]);u.set(e,
0,255*k[0]);u.set(e,1,255*k[1]);u.set(e,2,255*k[2]);u.set(e,3,255);T.set(e,p[0])}return new P.VertexArrayObject(a,M.Default3D,{geometry:K.glLayout(D)},{geometry:O.BufferObject.createVertex(a,B.Usage.STATIC_DRAW,t.buffer)})};f._createLoadDataTask=function(){var a=this;if(h.isSome(m))return null;const c=A.createTask(function(){var b=v._asyncToGenerator(function*(d){({data:d}=yield E.fetchAsset("esri/views/3d/environment/resources/stars.wsv",{responseType:"array-buffer",signal:d}));a._verifyStarData(d);
m=d});return function(d){return b.apply(this,arguments)}}());c.promise.catch(b=>{A.isAbortError(b)||Q.error(b)}).then(()=>{this.destroyed||(this.requestRender(),this.notifyChange("updating"))});return c};f._verifyStarData=function(a){if(!a)throw new z("stars:no-data-received","Failed to create stars because star catalogue is missing");a=a.byteLength/9;if(0!==a%1||5E4<a||5E3>a)throw new z("stars:invalid-data","Failed to create stars because star catalogue data is invalid");};v._createClass(r,[{key:"updating",
get:function(){return this._updatingTracking.updating||this.loading}},{key:"loading",get:function(){return h.isSome(this._loadDataTask)&&!this._loadDataTask.finished}}]);return r}(F);l.__decorate([n.property({constructOnly:!0})],g.Stars.prototype,"view",void 0);l.__decorate([n.property({constructOnly:!0})],g.Stars.prototype,"requestRender",void 0);l.__decorate([n.property({readOnly:!0})],g.Stars.prototype,"updating",null);l.__decorate([n.property()],g.Stars.prototype,"_loadDataTask",void 0);l.__decorate([n.property()],
g.Stars.prototype,"_updatingTracking",void 0);g.Stars=l.__decorate([I.subclass("esri.views.3d.environment.Stars")],g.Stars);const U="9bb2ff;9eb5ff;aabfff;bbccff;ccd8ff ;dae2ff;e4e9ff;eeefff;f8f6ff;fff9fb;fff5ef;fff1e5;ffeddb;ffe9d2;ffe6ca;ffe3c3;ffe0bb;ffddb4;ffdaad;ffd6a5;ffd29c;ffcc8f;ffc178;ffa94b;ff7b00".split(";"),S=w.fromValues(1,0,0,0,0,.9174771405229186,.39778850739794974,0,0,-.39778850739794974,.9174771405229186,0,0,0,0,1),R=w.fromValues(1,0,0,0,0,.9174771405229186,-.39778850739794974,0,
0,.39778850739794974,.9174771405229186,0,0,0,0,1),D=L.newLayout().vec3f(x.VertexAttribute.POSITION).vec4u8(x.VertexAttribute.COLOR).f32(x.VertexAttribute.SIZE);let m=null;Object.defineProperty(g,"__esModule",{value:!0})});