// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/uid ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/projection ./Geometry ./localOrigin ./Object3D ./WebGLLayer ../materials/RibbonLineMaterial".split(" "),function(p,w,x,y,t,z,A,B,r,C,D,E){function u(q){n=q}let F=function(){function q(a,c=125E4){this._originSR=a;this._gridSize=c;this._origins=new Map;this._objects=new Map;this._rootOriginId="root/"+x.generateUID()}var v=q.prototype;v.getOrigin=
function(a){const c=this._origins.get(this._rootOriginId);if(null==c){if(w.isSome(n))return this._origins.set(this._rootOriginId,r.fromValues(n[0],n[1],n[2],this._rootOriginId)),this.getOrigin(a);a=r.fromValues(a[0]+Math.random()-.5,a[1]+Math.random()-.5,a[2]+Math.random()-.5,this._rootOriginId);this._origins.set(this._rootOriginId,a);return a}var e=this._gridSize;const m=Math.round(a[0]/e),l=Math.round(a[1]/e),f=Math.round(a[2]/e),h=`${m}/${l}/${f}`;let g=this._origins.get(h);const k=.5*e;t.subtract(b,
a,c.vec3);b[0]=Math.abs(b[0]);b[1]=Math.abs(b[1]);b[2]=Math.abs(b[2]);if(b[0]<k&&b[1]<k&&b[2]<k)return g&&(e=Math.max(...b),t.subtract(b,a,g.vec3),b[0]=Math.abs(b[0]),b[1]=Math.abs(b[1]),b[2]=Math.abs(b[2]),Math.max(...b)<e)?g:c;g||(g=r.fromValues(m*e,l*e,f*e,h),this._origins.set(h,g));return g};v._drawOriginBox=function(a,c=[1,1,0,1]){const e=window.view,m=e._stage;var l=c.toString();if(!this._objects.has(l)){this._material=new E.RibbonLineMaterial({width:2,color:c});m.add(this._material);c=new D.WebGLLayer({isPickable:!1});
var f=new C.Object3D({castShadow:!1});m.add(f);c.add(f);m.add(c);this._objects.set(l,f)}l=this._objects.get(l);c=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0];f=c.length;const h=Array(3*f),g=new Uint16Array(2*(f-1)),k=.5*this._gridSize;for(let d=0;d<f;d++)h[3*d]=a[0]+(c[d]&1?k:-k),h[3*d+1]=a[1]+(c[d]&2?k:-k),h[3*d+2]=a[2]+(c[d]&4?k:-k),0<d&&(g[2*d]=d-1,g[2*d+1]=d);A.projectBuffer(h,this._originSR,0,h,e.renderSpatialReference,0,f);a=new B.Geometry([["position",{size:3,data:h,exclusive:!0}]],[["position",
g]],2);m.add(a);l.addGeometry(a,this._material,y.IDENTITY)};return q}(),n=null;const b=z.create();p.GridLocalOriginFactory=F;p.default=u;p.setTestRootOrigin=u;Object.defineProperty(p,"__esModule",{value:!0})});