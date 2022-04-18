// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../chunks/mat2d ../../../../../../chunks/mat2df32 ../../../../../../chunks/vec2 ../../../../../../chunks/vec2f32 ../../../../../../layers/graphics/featureConversionUtils ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper ../../enums ../../number".split(" "),function(w,n,x,q,y,h,r,t,z,A,l){const u=3.14159265359/180;return B=>function(v){function p(...a){a=
v.call(this,...a)||this;a.angle=0;a.xOffset=0;a.yOffset=0;a.width=0;a.height=0;a.boundsType="square";a._anchorX=0;a._anchorY=0;a._computedWidth=0;a._computedHeight=0;a._vertexBoundsScaleX=1;a._vertexBoundsScaleY=1;a._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0};a.geometryType=A.WGLGeometryType.MARKER;return a}w._inheritsLoose(p,v);var k=p.prototype;k._write=function(a,b,d,e){const f=b.getDisplayId();a.recordStart(f,this._materialKey,
this.geometryType,!0);this._writeGeometry(a,b,f,d,e);a.recordEnd()};k._writeGeometry=function(a,b,d,e,f){if(n.isSome(this._markerPlacement))return this._writePlacedMarkers(a,b,e,f);if(!f&&"esriGeometryPoint"===b.geometryType)return e=b.getX(),b=b.getY(),!a.hasAggregates&&a.hasPixelBufferEnabled&&(0>e||513<=e||0>b||513<=b)?void 0:this._writeVertices(a,d,this._getPos(e,b),e,b);b=f?t.deltaDecodeGeometry(t.convertFromGeometry(f),2):"esriGeometryPolygon"===b.geometryType?b.readCentroid():b.readGeometryForDisplay();
if(!n.isNone(b)){if(b.isPoint){const [c,g]=b.coords;return!a.hasAggregates&&a.hasPixelBufferEnabled&&(0>c||512<=c||0>g||512<=g)?void 0:this._writeVertices(a,d,this._getPos(c,g),c,g)}b.forEachVertex((c,g)=>this._writeVertices(a,d,this._getPos(c,g),c,g))}};k._writePlacedMarkers=function(a,b,d,e){e=null!=e?e:b.readLegacyGeometryForDisplay();if(d=z.CIMMarkerPlacementHelper.getPlacement(e,n.unwrap(this._markerPlacement),x.pt2px(1),d.geometryEngine)){b=b.getDisplayId();e=r.create();for(var f=y.create(),
c=d.next();null!=c;){const g=c.tx,m=-c.ty;-128<=g&&640>=g&&-128<=m&&640>=m&&(this._applyTransformation(f,e,-c.getAngle()/u),this._writeVertices(a,b,this._getPos(g,m),g,m));c=d.next()}}};k._writeVertices=function(a,b,d,e,f){const c=a.vertexCount();if(this.angle){const g=Math.max(this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY);a.vertexBounds(e+this.xOffset,f-this.yOffset,g,g)}else a.vertexBounds(e+this.xOffset,f-this.yOffset,this._computedWidth*this._vertexBoundsScaleX,
this._computedHeight*this._vertexBoundsScaleY);a.vertexWrite(d);a.vertexWrite(this._offsetUpperLeft);a.vertexWrite(this._texUpperLeft);a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.vertexWrite(d);a.vertexWrite(this._offsetUpperRight);a.vertexWrite(this._texUpperRight);a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);
a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.vertexWrite(d);a.vertexWrite(this._offsetBottomLeft);a.vertexWrite(this._texBottomLeft);a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.vertexWrite(d);a.vertexWrite(this._offsetBottomRight);a.vertexWrite(this._texBottomRight);
a.vertexWrite(this._bitestAndDistRatio);a.vertexWrite(b);a.vertexWrite(this._fillColor);a.vertexWrite(this._outlineColor);a.vertexWrite(this._sizeOutlineWidth);a.vertexWrite(this._minMaxZoom);a.vertexEnd();a.indexWrite(c+0);a.indexWrite(c+1);a.indexWrite(c+2);a.indexWrite(c+1);a.indexWrite(c+3);a.indexWrite(c+2)};k._applyTransformation=function(a,b,d=0){q.fromTranslation(a,r.fromValues(this.xOffset,-this.yOffset));0!==this.angle+d&&q.rotate(a,a,u*(this.angle+d));d=this._computedWidth;const e=this._computedHeight,
f=(this._anchorX-.5)*d,c=(this._anchorY-.5)*e;h.set(b,f,c);h.transformMat2d(b,b,a);this._offsetUpperLeft=l.i1616to32(16*b[0],16*b[1]);this._offsets.xUpperLeft=b[0];this._offsets.yUpperLeft=b[1];h.set(b,f+d,c);h.transformMat2d(b,b,a);this._offsetUpperRight=l.i1616to32(16*b[0],16*b[1]);this._offsets.xUpperRight=b[0];this._offsets.yUpperRight=b[1];h.set(b,f,c+e);h.transformMat2d(b,b,a);this._offsetBottomLeft=l.i1616to32(16*b[0],16*b[1]);this._offsets.xBottomLeft=b[0];this._offsets.yBottomLeft=b[1];h.set(b,
f+d,c+e);h.transformMat2d(b,b,a);this._offsetBottomRight=l.i1616to32(16*b[0],16*b[1]);this._offsets.xBottomRight=b[0];this._offsets.yBottomRight=b[1]};k._getPos=function(a,b){return l.i1616to32(Math.round(8*a),Math.round(8*b))};return p}(B)});