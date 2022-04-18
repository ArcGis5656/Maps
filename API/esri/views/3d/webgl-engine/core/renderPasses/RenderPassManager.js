// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/mat3 ../../../../../chunks/mat3f64 ../../../../../chunks/mat4 ../../../../../chunks/vec2 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../chunks/vec4 ../../../../../chunks/boundedPlane ./AllRenderPasses ./RenderPass ../util/TwoVectorPosition ../../lib/depthRange ../../lib/RenderPass ../../lib/RenderSlot".split(" "),function(r,w,t,m,x,y,u,k,z,A,B,d,g,C,D,c,h){let E=
function(){function n(a,b){this.rctx=a;this.shaderTechniqueRepository=b;this.canRender=!0;this._materialPassParams=new d.MaterialPassesParameters;this._shadowPassParams=new d.ShadowMapPassParameters;this._highlightPassParams=new d.HighlightPassParameters;this._systems=new Set;this._passes={materialOpaque:new g.RenderPass(a,this.shaderTechniqueRepository),materialTransparent:new g.RenderPass(a,this.shaderTechniqueRepository,g.RenderPassSorting.BackToFront),materialIntegratedMesh:new g.RenderPass(a,
this.shaderTechniqueRepository),shadowMap:new g.RenderPass(a,this.shaderTechniqueRepository),highlight:new g.RenderPass(a,this.shaderTechniqueRepository),highlightIntegratedMesh:new g.RenderPass(a,this.shaderTechniqueRepository),highlightShadowMap:new g.RenderPass(a,this.shaderTechniqueRepository),defaultShadowMap:new g.RenderPass(a,this.shaderTechniqueRepository)}}var f=n.prototype;f.register=function(a){this._systems.add(a)};f.prepareRender=function(a){if(0!==this._systems.size){for(const b of Object.values(this._passes))b.prepareSubmit();
this._systems.forEach(b=>b.submit(this._passes,{camera:a}));for(const b of Object.values(this._passes))b.finishSubmit();this.shaderTechniqueRepository.frameUpdate()}};f.render=function(a){if(0!==this._systems.size)switch(this._configure(a),a.slot){case h.RenderSlot.OPAQUE_PLUGIN:switch(a.pass){case c.RenderPass.MATERIAL:return this._materialPassParams.subPass=d.MaterialSubPass.Color,this._configureMaterialColorPass(a),this._passes.materialOpaque.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_DEPTH:return this._materialPassParams.subPass=
d.MaterialSubPass.Depth,this._passes.materialOpaque.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_NORMAL:return this._materialPassParams.subPass=d.MaterialSubPass.Normal,this._passes.materialOpaque.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_HIGHLIGHT:return this._passes.highlight.dispatch(this._highlightPassParams);case c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL:return this._passes.shadowMap.dispatch(this._shadowPassParams);case c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT:return this._passes.highlightShadowMap.dispatch(this._shadowPassParams);
case c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT:return this._passes.defaultShadowMap.dispatch(this._shadowPassParams)}break;case h.RenderSlot.TRANSPARENT_PLUGIN:switch(a.pass){case c.RenderPass.MATERIAL:return this._materialPassParams.subPass=d.MaterialSubPass.Color,this._configureMaterialColorPass(a),this._passes.materialTransparent.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_ALPHA:return this._materialPassParams.subPass=d.MaterialSubPass.Alpha,this._configureMaterialColorPass(a),
this._passes.materialTransparent.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_DEPTH:return this._materialPassParams.subPass=d.MaterialSubPass.Depth,this._passes.materialTransparent.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_NORMAL:return this._materialPassParams.subPass=d.MaterialSubPass.Normal,this._passes.materialTransparent.dispatch(this._materialPassParams)}break;case h.RenderSlot.INTEGRATED_MESH:switch(a.pass){case c.RenderPass.MATERIAL:return this._materialPassParams.subPass=
d.MaterialSubPass.Color,this._configureMaterialColorPass(a),this._materialPassParams.ssrParams=a.ssrParams,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_DEPTH:return this._materialPassParams.subPass=d.MaterialSubPass.Depth,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);case c.RenderPass.MATERIAL_NORMAL:return this._materialPassParams.subPass=d.MaterialSubPass.Normal,this._passes.materialIntegratedMesh.dispatch(this._materialPassParams);
case c.RenderPass.MATERIAL_HIGHLIGHT:return this._passes.highlightIntegratedMesh.dispatch(this._highlightPassParams)}}};f.notifyDirty=function(){this._context.requestRender()};f.slots=function(){return[h.RenderSlot.OPAQUE_PLUGIN,h.RenderSlot.TRANSPARENT_PLUGIN,h.RenderSlot.INTEGRATED_MESH]};f.initializeRenderContext=function(a){this._context=a};f.uninitializeRenderContext=function(){};f.queryDepthRange=function(a){const b={near:Infinity,far:-Infinity};this._systems.forEach(e=>{e=e.queryShadowCasterDepthRange(a);
t.isSome(e)&&D.union(b,e,b)});return b};f._configureMaterialColorPass=function(a){this._materialPassParams.bindShadowMap=b=>{a.shadowMap.bind(b);const e=this._materialPassParams.viewTransform;k.add(l,e.transformWorldFromViewTL,e.transformWorldFromViewTH);a.shadowMap.bindView(b,l)};this._materialPassParams.bindAmbientOcclusion=b=>a.ssaoHelper.bind(b,a.camera);this._materialPassParams.ambientOcclusionEnabled=!!a.ssaoHelper&&a.ssaoHelper.ready;this._materialPassParams.sceneHasOcludees=a.hasOccludees};
f._configure=function(a){this._updateParameters(a,a.pass===c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_ALL||a.pass===c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||a.pass===c.RenderPass.MATERIAL_DEPTH_SHADOWMAP_DEFAULT?this._shadowPassParams:a.pass===c.RenderPass.MATERIAL_HIGHLIGHT?this._highlightPassParams:this._materialPassParams)};f._updateParameters=function(a,b){const e=a.camera,p=e.viewInverseTransposeMatrix;k.set(l,p[3],p[7],p[11]);q.set(l);k.copy(b.viewTransform.transformWorldFromViewTH,q.high);
k.copy(b.viewTransform.transformWorldFromViewTL,q.low);m.fromMat4(b.viewTransform.transformViewFromCameraRelativeRS,e.viewMatrix);y.copy(b.viewTransform.transformProjFromView,e.projectionMatrix);b.identifier===d.RenderPassIdentifier.Material?(this._materialPassParams.transparent=a.slot===h.RenderSlot.TRANSPARENT_PLUGIN,this._materialPassParams.integratedMesh=a.slot===h.RenderSlot.INTEGRATED_MESH,this._materialPassParams.lighting=a.scenelightingData,m.transpose(v,b.viewTransform.transformViewFromCameraRelativeRS),
m.invert(b.transformNormalViewFromGlobal,v),u.copy(b.nearFar,e.nearFar)):b.identifier===d.RenderPassIdentifier.ShadowMap?u.copy(b.nearFar,e.nearFar):b.identifier===d.RenderPassIdentifier.Highlight&&(b.highlightDepthTexture=a.highlightDepthTexture,A.copy(b.viewport,e.fullViewport));if(b.identifier===d.RenderPassIdentifier.Material||b.identifier===d.RenderPassIdentifier.Highlight)b.inverseViewport[0]=1/e.fullViewport[2],b.inverseViewport[1]=1/e.fullViewport[3];B.copyWithoutVerify(a.sliceHelper.plane,
b.slicePlane);k.subtract(b.slicePlane.origin,b.slicePlane.origin,l);b.slicePlaneEnabled=a.sliceHelper.isEnabled;this._materialPassParams.slot=a.slot;this._materialPassParams.transparencyPassType=a.transparencyPassType;this._materialPassParams.multipassTerrainParams=a.multipassTerrainParams};w._createClass(n,[{key:"shadowCastingEnabled",get:function(){return this._materialPassParams.shadowsEnabled},set:function(a){this._materialPassParams.shadowsEnabled=a}},{key:"fillLightsEnabled",get:function(){return this._materialPassParams.hasFillLights},
set:function(a){this._materialPassParams.hasFillLights=a}},{key:"screenSpaceReflectionsEnabled",get:function(){return t.isSome(this._materialPassParams.ssrParams.ssrEnabled)},set:function(a){this._materialPassParams.ssrParams.ssrEnabled=!!a}},{key:"needsHighlight",get:function(){return 0<this._passes.highlight.count||0<this._passes.highlightIntegratedMesh.count}},{key:"needsTransparentPass",get:function(){return 0<this._passes.materialTransparent.count}}]);return n}();const l=z.create(),v=x.create(),
q=new C.TwoVectorPosition;r.RenderPassManager=E;Object.defineProperty(r,"__esModule",{value:!0})});