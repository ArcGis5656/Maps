// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../chunks/ChapmanAtmosphere.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/renderState".split(" "),function(l,g,h,m,e,n,f,k,p,q,c){f=function(b){function a(){return b.apply(this,
arguments)||this}h._inheritsLoose(a,b);var d=a.prototype;d.initializeProgram=function(r){const t=a.shader.get().build({haze:this.configuration.haze});return new q.Program(r.rctx,t,p.Default3D)};d.initializePipeline=function(){return this.configuration.haze?c.makePipelineState({blending:c.separateBlendingParams(1,0,769,1),colorWrite:c.defaultColorWriteParams}):c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:c.defaultColorWriteParams})};return a}(f.ShaderTechnique);
f.shader=new n.ReloadableShaderModule(e.ChapmanAtmosphereShader,()=>new Promise((b,a)=>l(["./ChapmanAtmosphere.glsl"],b,a)));e=function(b){function a(){var d=b.apply(this,arguments)||this;d.haze=!1;return d}h._inheritsLoose(a,b);return a}(k.ShaderTechniqueConfiguration);m.__decorate([k.parameter()],e.prototype,"haze",void 0);g.ChapmanAtmosphereTechnique=f;g.ChapmanAtmosphereTechniqueConfiguration=e;Object.defineProperty(g,"__esModule",{value:!0})});