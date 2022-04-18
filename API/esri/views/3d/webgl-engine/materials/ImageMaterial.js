// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderLibrary/ShaderOutputOptions ../lib/basicInterfaces ../lib/GLMaterials ../lib/GLMaterialTexture ../lib/Material ../lib/OrderIndependentTransparency ../lib/RenderSlot ./internal/DefaultBufferWriter ./internal/MaterialUtil ../shaders/ImageMaterialTechnique".split(" "),function(h,k,e,p,q,r,l,t,f,m,u,n){let B=function(g){function d(a){a=g.call(this,a,v)||this;a.supportsEdges=!0;a.techniqueConfig=new n.ImageMaterialTechniqueConfiguration;
return a}k._inheritsLoose(d,g);var c=d.prototype;c.getTechniqueConfig=function(a,b){this.techniqueConfig.output=a;this.techniqueConfig.cullFace=this.parameters.cullFace;this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled;this.techniqueConfig.transparent=this.parameters.transparent;this.techniqueConfig.writeDepth=this.parameters.writeDepth;this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees;this.techniqueConfig.transparencyPassType=b.transparencyPassType;this.techniqueConfig.enableOffset=
b.camera.relativeElevation<t.OITPolygonOffsetLimit;this.techniqueConfig.multipassTerrainEnabled=b.multipassTerrainEnabled;this.techniqueConfig.cullAboveGround=b.cullAboveGround;return this.techniqueConfig};c.intersect=function(a,b,C,w,x,y,z){u.intersectTriangleGeometry(a,b,w,x,y,void 0,z)};c.requiresSlot=function(a,b){return a===f.RenderSlot.DRAPED_MATERIAL?!0:q.outputFromPass(b)===e.ShaderOutput.Highlight?a===f.RenderSlot.OPAQUE_MATERIAL:a===(this.parameters.transparent?this.parameters.writeDepth?
f.RenderSlot.TRANSPARENT_MATERIAL:f.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:f.RenderSlot.OPAQUE_MATERIAL)};c.createGLMaterial=function(a){return a.output===e.ShaderOutput.Color||a.output===e.ShaderOutput.Alpha||a.output===e.ShaderOutput.Highlight?new A(a):void 0};c.createBufferWriter=function(){return new m.DefaultBufferWriter(m.PositionUVLayout)};return d}(l.Material),A=function(g){function d(a){return g.call(this,{...a,...a.material.parameters})||this}k._inheritsLoose(d,g);var c=d.prototype;
c.updateParameters=function(a){this.updateTexture(this._material.parameters.textureId);return this.ensureTechnique(n.ImageMaterialTechnique,a)};c._updateOccludeeState=function(a){a.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:a.hasOccludees}),this.updateParameters(a))};c.beginSlot=function(a){this._output!==e.ShaderOutput.Color&&this._output!==e.ShaderOutput.Alpha||this._updateOccludeeState(a);return this.updateParameters(a)};c.bind=function(a,
b){this.bindTextures(b.program);this.bindTextureScale(b.program);b.bindPass(this._material.parameters,a)};return d}(r);const v={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:p.CullFaceOptions.None,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...l.DefaultMaterialParameters};h.ImageMaterial=B;Object.defineProperty(h,"__esModule",{value:!0})});