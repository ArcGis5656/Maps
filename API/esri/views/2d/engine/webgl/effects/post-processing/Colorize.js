// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/Texture"],function(h,p,b,q){let v=function(){function k(){this._size=[0,0];this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}var f=k.prototype;f.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)};f.draw=function(a,c,d){const {width:l,height:m}=c;this._createOrResizeResources(a,l,m);
const {context:e,painter:r}=a,{materialManager:t}=r,u=this._programDesc,g=this._quad;d=d.colorMatrix;g.bind();const n=this._layerFBOTexture;e.bindFramebuffer(c);c.copyToTexture(0,0,l,m,0,0,n);e.setBlendingEnabled(!1);e.setStencilTestEnabled(!1);a=t.getProgram(a,u);e.useProgram(a);e.bindTexture(n,2);a.setUniformMatrix4fv("u_coefficients",d);a.setUniform1i("u_colorTexture",2);g.draw();e.setBlendingEnabled(!0);e.setBlendFunction(b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA);e.setStencilTestEnabled(!0);
g.unbind()};f._createOrResizeResources=function(a,c,d){({context:a}=a);this._layerFBOTexture&&this._size[0]===c&&this._size[1]===d||(this._size[0]=c,this._size[1]=d,this._layerFBOTexture?this._layerFBOTexture.resize(c,d):this._layerFBOTexture=new q.Texture(a,{target:b.TextureType.TEXTURE_2D,pixelFormat:b.PixelFormat.RGBA,internalFormat:b.PixelFormat.RGBA,dataType:b.PixelType.UNSIGNED_BYTE,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:b.TextureSamplingMode.LINEAR,flipped:!1,width:c,height:d}),
this._quad||(this._quad=new p(a,[-1,-1,1,-1,-1,1,1,1])))};return k}();h.Colorize=v;Object.defineProperty(h,"__esModule",{value:!0})});