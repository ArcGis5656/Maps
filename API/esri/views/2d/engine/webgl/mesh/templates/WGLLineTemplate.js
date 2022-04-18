// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/Logger ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../color ../../definitions ../../number ../../Utils ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLMeshTemplate".split(" "),function(G,H,z,C,D,g,y,E,I,u,J,K){const L=H.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");return function(F){function e(a,c,f,d,h,n,k,l,q,r,v,w,m,x,t,p,A,B,M){var b=F.call(this)||this;a=I.LineMaterialKey.load(a);
c&&(a.sdf=c.sdf,a.pattern=!0,a.textureBinding=c.textureBinding);b._capType=d;b._joinType=h;b._miterLimitCosine=u.getLimitCosine(n);b.tessellationProperties._fillColor=k;b.tessellationProperties._tl=l;b.tessellationProperties._br=q;b._hasPattern=r;b._isDashed=v;b._zOrder=p;b._effects=A;b._minMaxZoom=y.i1616to32(Math.round(B*g.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(M*g.MIN_MAX_ZOOM_PRECISION_FACTOR));b._materialKey=a.data;b.tessellationProperties._bitset=(m?g.BITSET_GENERIC_LOCK_COLOR:0)|(x?g.BITSET_TYPE_FILL_OUTLINE:
0)|(w?g.BITSET_LINE_SCALE_DASH:0);b.tessellationProperties._halfWidth=.5*f;b.tessellationProperties._halfReferenceWidth=.5*t;b.tessellationProperties.offset=0;b._initializeTessellator(!1);return b}G._inheritsLoose(e,F);e.fromCIMLine=function(a,c,f){var d=a.color,h=a.scaleFactor||1;const n=!!a.dashTemplate;let k=a.cap;n&&k===C.CapType.ROUND&&(k=C.CapType.SQUARE);const l=a.join;h*=z.pt2px(a.width);const q=z.pt2px(a.referenceWidth),r=z.pt2px(a.miterLimit);d=d&&D.premultiplyAlphaRGBA(d)||0;const [v,w]=
u.getMinMaxZoom(a.scaleInfo,f);if(!c)return new e(a.materialKey,c,h,k,l,r,d,0,0,!1,n,a.scaleDash,a.colorLocked,!1,q,a.zOrder,a.effects,v,w);const {rect:m,width:x,height:t}=c;var p=m.x+g.SPRITE_PADDING;const A=m.y+g.SPRITE_PADDING;f=p+x;const B=A+t;p=y.i1616to32(p,A);f=y.i1616to32(f,B);return new e(a.materialKey,c,h,k,l,r,d,p,f,!0,n,a.scaleDash,a.colorLocked,!1,q,a.zOrder,a.effects,v,w)};e.fromFillOutline=function(a){var c;return a.isOutlinedFill&&a.outline&&"esriSLSSolid"===(null==(c=a.outline)?void 0:
c.style)?e.fromSimpleLine({hash:"",materialKey:a.materialKey,...a.outline},null,!0):null};e.fromSimpleLine=function(a,c,f=!1){var {color:d}=a;const h="esriSLSSolid"!==a.style&&"esriSLSNull"!==a.style,n=E.getCapType(a.cap||"round"),k=E.getJoinType(a.join||"round");d=d&&"esriSLSNull"!==a.style&&D.premultiplyAlphaRGBAArray(d)||0;"esriSLSNull"===a.style&&(d=0);const l=z.pt2px(a.width),q=a.miterLimit;if(!c)return new e(a.materialKey,c,l,n,k,q,d,0,0,!1,h,!0,!1,f,l,0,null,u.DEFAULT_MIN_ZOOM,u.DEFAULT_MAX_ZOOM);
const {rect:r,width:v,height:w}=c;var m=r.x+g.SPRITE_PADDING;const x=r.y+g.SPRITE_PADDING;var t=m+v;const p=x+w;m=y.i1616to32(m,x);t=y.i1616to32(t,p);return new e(a.materialKey,c,l,n,k,q,d,m,t,!0,h,!0,!1,f,l,0,null,u.DEFAULT_MIN_ZOOM,u.DEFAULT_MAX_ZOOM)};e.fromPictureLineSymbol=function(a,c,f,d){L.error("PictureLineSymbol support does not exist!");return null};return e}(J(K))});