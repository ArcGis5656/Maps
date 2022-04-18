// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../vectorTiles/style/StyleDefinition ../definitions ../enums ../number ./WGLBrush ../../../../webgl/enums".split(" "),function(B,I,t,J,u,K,L,y,l){y=function(C){function z(){var b=C.apply(this,arguments)||this;b._programOptions={id:!1,pattern:!1,sdf:!1};return b}I._inheritsLoose(z,C);var D=z.prototype;D.dispose=function(){};D.drawMany=function(b,e){const {context:g,displayLevel:m,state:A,drawPhase:M,painter:N,
pixelRatio:E,spriteMosaic:n,styleLayerUID:v}=b;if(e.some(f=>{var p,q;return null!=(p=null==(q=f.layerData.get(v))?void 0:q.lineIndexCount)?p:!1})){b=b.styleLayer;var F=b.lineMaterial,O=N.vectorTilesMaterialManager,d=b.getPaintValue("line-translate",m),c=b.getPaintValue("line-translate-anchor",m),h=b.getPaintProperty("line-pattern"),w=void 0!==h,G=w&&h.isDataDriven;if(w&&!G){h=h.getValue(m);var k=n.getMosaicItemPosition(h)}var a;h=!1;if(!w){var r=b.getPaintProperty("line-dasharray");h=(a=void 0!==
r)&&r.isDataDriven;a&&!h&&(k=r.getValue(m),k=b.getDashKey(k,b.getLayoutValue("line-cap",m)),k=n.getMosaicItemPosition(k))}r=1/E;var H=M===K.WGLDrawPhase.HITTEST,x=this._programOptions;x.id=H;x.pattern=w;x.sdf=a;a=O.getMaterialProgram(g,F,x);g.useProgram(a);a.setUniformMatrix3fv("u_displayViewMat3",A.displayViewMat3);a.setUniformMatrix3fv("u_displayMat3",c===J.TranslateAnchor.VIEWPORT?A.displayMat3:A.displayViewMat3);a.setUniform2fv("u_lineTranslation",d);a.setUniform1f("u_depth",b.z);a.setUniform1f("u_antialiasing",
r);H&&(d=L.u32to4Xu8(v+1),a.setUniform4fv("u_id",d));k&&t.isSome(k)&&({page:d}=k,c=n.getPageSize(d),t.isSome(c)&&(n.bind(g,l.TextureSamplingMode.LINEAR,d,u.VTL_TEXTURE_BINDING_UNIT_SPRITES),a.setUniform2fv("u_mosaicSize",c),a.setUniform1i("u_texture",u.VTL_TEXTURE_BINDING_UNIT_SPRITES)));d=-1;for(const f of e)if(f.layerData.has(v)&&(f.key.level!==d&&(d=f.key.level,F.setDataUniforms(a,m,b,d,n)),a.setUniform1f("u_zoomFactor",2**(m-d)/E),e=f.layerData.get(v),e.lineIndexCount&&(e.prepareForRendering(g),
c=e.lineVertexArrayObject,!t.isNone(c)))){g.bindVAO(c);a.setUniformMatrix3fv("u_dvsMat3",f.transforms.dvs);g.setStencilFunction(l.CompareFunction.EQUAL,f.stencilRef,255);if(G||h){c=e.patternMap;if(!c)continue;for(const [p,q]of c)c=n.getPageSize(p),t.isSome(c)&&(n.bind(g,l.TextureSamplingMode.LINEAR,p,u.VTL_TEXTURE_BINDING_UNIT_SPRITES),a.setUniform2fv("u_mosaicSize",c),a.setUniform1i("u_texture",u.VTL_TEXTURE_BINDING_UNIT_SPRITES),g.drawElements(l.PrimitiveType.TRIANGLES,q[1],l.DataType.UNSIGNED_INT,
Uint32Array.BYTES_PER_ELEMENT*q[0]))}else g.drawElements(l.PrimitiveType.TRIANGLES,e.lineIndexCount,l.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e.lineIndexStart);f.triangleCount+=e.lineIndexCount/3}}};return z}(y);B.WGLBrushVTLLine=y;Object.defineProperty(B,"__esModule",{value:!0})});