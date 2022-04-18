// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","./BaseBucket"],function(l,r,t){return function(m){function g(a,c,b,d,k){a=m.call(this,a,c,b)||this;a.type=r.BucketType.CIRCLE;a._circleVertexBuffer=d;a._circleIndexBuffer=k;return a}l._inheritsLoose(g,m);var n=g.prototype;n.processFeatures=function(a){const c=this._circleVertexBuffer,b=this._circleIndexBuffer;this._circleIndexStart=3*b.index;this._circleIndexCount=0;const d=this.layer,k=this.zoom;a&&a.setExtent(this.layerExtent);
for(const p of this._features){var e=p.getGeometry(a);if(!e)continue;const h=d.circleMaterial.encodeAttributes(p,k,d);for(const q of e)if(q)for(const f of q)e=c.index,c.add(f.x,f.y,0,0,h),c.add(f.x,f.y,0,1,h),c.add(f.x,f.y,1,0,h),c.add(f.x,f.y,1,1,h),b.add(e+0,e+1,e+2),b.add(e+1,e+2,e+3),this._circleIndexCount+=6}};n.serialize=function(){var a=6+this.layerUIDs.length;a+=this._circleVertexBuffer.array.length;a+=this._circleIndexBuffer.array.length;a=new Uint32Array(a);var c=new Int32Array(a.buffer);
let b=0;a[b++]=this.type;a[b++]=this.layerUIDs.length;for(var d=0;d<this.layerUIDs.length;d++)a[b++]=this.layerUIDs[d];a[b++]=this._circleIndexStart;a[b++]=this._circleIndexCount;a[b++]=this._circleVertexBuffer.array.length;for(d=0;d<this._circleVertexBuffer.array.length;d++)c[b++]=this._circleVertexBuffer.array[d];a[b++]=this._circleIndexBuffer.array.length;for(c=0;c<this._circleIndexBuffer.array.length;c++)a[b++]=this._circleIndexBuffer.array[c];return a.buffer};l._createClass(g,[{key:"circleIndexStart",
get:function(){return this._circleIndexStart}},{key:"circleIndexCount",get:function(){return this._circleIndexCount}}]);return g}(t)});