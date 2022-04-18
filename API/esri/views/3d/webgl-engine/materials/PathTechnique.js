// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutputOptions ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/attributes/PathVertexPosition.glsl ../core/shaderLibrary/attributes/VertexNormal.glsl ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/VertexAttribute ../../../../chunks/Path.glsl ../../../webgl/renderState".split(" "),
function(A,q,x,g,h,B,C,D,E,v,F,G,w,e,r,f,m,t,H,y,n,I,u){const z=new Map([[n.VertexAttribute.POSITION,0],[n.VertexAttribute.PROFILERIGHT,1],[n.VertexAttribute.PROFILEUP,2],[n.VertexAttribute.PROFILEVERTEXANDNORMAL,3],[n.VertexAttribute.FEATUREVALUE,4]]);r=function(l){function k(){return l.apply(this,arguments)||this}x._inheritsLoose(k,l);var c=k.prototype;c.initializeProgram=function(b){var a=k.shader.get();const d=this.configuration;a=a.build({oitEnabled:d.transparencyPassType===m.TransparencyPassType.Color,
output:d.output,viewingMode:b.viewingMode,slicePlaneEnabled:d.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:d.receiveShadows,vvSize:d.vvSize,vvColor:d.vvColor,vvInstancingEnabled:!0,vvOpacity:d.vvOpacity,pbrMode:F.PBRMode.Disabled,useCustomDTRExponentForWater:!1,receiveAmbientOcclusion:d.receiveSSAO,doubleSidedMode:d.doubleSidedMode,multipassTerrainEnabled:d.multipassTerrainEnabled,cullAboveGround:d.cullAboveGround});return new H.Program(b.rctx,a,z)};
c.bindPass=function(b,a){var d,p;w.bindProjectionMatrix(this.program,a.camera.projectionMatrix);this.program.setUniform3fv("size",b.size);a.multipassTerrainEnabled&&(this.program.setUniform2fv("nearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",a.inverseViewport),E.bindMultipassTerrainTexture(this.program,a));this.configuration.output!==h.ShaderOutput.Color&&this.configuration.output!==h.ShaderOutput.Alpha||this.program.setUniform1f("opacity",b.opacity);this.configuration.output===
h.ShaderOutput.Color?(a.lighting.setUniforms(this.program,!1,!1),this.program.setUniform3fv("ambient",b.ambient),this.program.setUniform3fv("diffuse",b.diffuse),this.program.setUniform3fv("specular",b.specular),this.program.setUniform1f("opacity",b.opacity)):this.configuration.output!==h.ShaderOutput.Depth&&this.configuration.output!==h.ShaderOutput.Shadow||this.program.setUniform2fv("nearFar",a.camera.nearFar);C.setVVUniforms(this.program,b);null==(d=a.shadowMap)?void 0:d.bind(this.program);null==
(p=a.ssaoHelper)?void 0:p.bind(this.program,a.camera)};c.bindDraw=function(b){w.bindView(this.program,b);B.bindSliceUniformsWithOrigin(this.program,this.configuration,b);this.program.rebindTextures();this.configuration.output!==h.ShaderOutput.Color&&this.configuration.output!==h.ShaderOutput.Alpha||w.bindCameraPosition(this.program,b.origin,b.camera.viewInverseTransposeMatrix);this.configuration.output===h.ShaderOutput.Color&&G.bindReadShadowMapView(this.program,b);this.configuration.output===h.ShaderOutput.Normal&&
D.bindVertexNormalUniforms(this.program,b.camera.viewInverseTransposeMatrix)};c._setPipelineState=function(b){const a=this.configuration,d=b===m.TransparencyPassType.NONE,p=b===m.TransparencyPassType.FrontFace;return u.makePipelineState({blending:a.output!==h.ShaderOutput.Color&&a.output!==h.ShaderOutput.Alpha||!a.transparent?null:d?t.blendingDefault:t.oitBlending(b),culling:(a.slicePlaneEnabled?!1:!a.transparent&&a.doubleSidedMode!==v.NormalsDoubleSidedMode.None)&&u.frontFaceCullingParams,depthTest:{func:t.oitDepthTest(b)},
depthWrite:d||p?u.defaultDepthWriteParams:null,colorWrite:u.defaultColorWriteParams,stencilWrite:a.sceneHasOcludees?y.stencilWriteMaskOn:null,stencilTest:a.sceneHasOcludees?y.stencilBaseAllZerosParams:null,polygonOffset:d||p?null:t.OITPolygonOffset})};c.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return k}(r.ShaderTechnique);r.shader=new e.ReloadableShaderModule(I.PathShader,()=>new Promise((l,k)=>A(["../shaders/Path.glsl"],l,k)));e=function(l){function k(){var c=
l.apply(this,arguments)||this;c.output=h.ShaderOutput.Color;c.doubleSidedMode=v.NormalsDoubleSidedMode.None;c.receiveShadows=!1;c.receiveSSAO=!1;c.vvSize=!1;c.vvColor=!1;c.vvOpacity=!1;c.slicePlaneEnabled=!1;c.transparent=!1;c.sceneHasOcludees=!1;c.transparencyPassType=m.TransparencyPassType.NONE;c.multipassTerrainEnabled=!1;c.cullAboveGround=!1;return c}x._inheritsLoose(k,l);return k}(f.ShaderTechniqueConfiguration);g.__decorate([f.parameter({count:h.ShaderOutput.COUNT})],e.prototype,"output",void 0);
g.__decorate([f.parameter({count:v.NormalsDoubleSidedMode.COUNT})],e.prototype,"doubleSidedMode",void 0);g.__decorate([f.parameter()],e.prototype,"receiveShadows",void 0);g.__decorate([f.parameter()],e.prototype,"receiveSSAO",void 0);g.__decorate([f.parameter()],e.prototype,"vvSize",void 0);g.__decorate([f.parameter()],e.prototype,"vvColor",void 0);g.__decorate([f.parameter()],e.prototype,"vvOpacity",void 0);g.__decorate([f.parameter()],e.prototype,"slicePlaneEnabled",void 0);g.__decorate([f.parameter()],
e.prototype,"transparent",void 0);g.__decorate([f.parameter()],e.prototype,"sceneHasOcludees",void 0);g.__decorate([f.parameter({count:m.TransparencyPassType.COUNT})],e.prototype,"transparencyPassType",void 0);g.__decorate([f.parameter()],e.prototype,"multipassTerrainEnabled",void 0);g.__decorate([f.parameter()],e.prototype,"cullAboveGround",void 0);q.PathTechnique=r;q.PathTechniqueConfiguration=e;q.pathVertexAttributeLocations=z;Object.defineProperty(q,"__esModule",{value:!0})});