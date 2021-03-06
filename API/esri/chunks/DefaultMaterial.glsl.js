// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/ViewingMode ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(k,l,u,v,f,m,w,x,e,y,z,A,B,C,D,E,n,F,G,H,p,I,J,d,K,L,g,M,q,c,N,O){function r(a){const b=new N.ShaderBuilder,P=b.vertex.code,t=b.fragment.code;b.include(M.HeaderComment,{name:"Default Material Shader",output:a.output});b.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const h=a.hasModelTransformation;h&&b.vertex.uniforms.add("model","mat4");b.include(y.PositionAttribute);b.varyings.add("vpos","vec3");b.include(L.VisualVariables,a);
b.include(x.InstancedDoublePrecision,a);b.include(D.VerticalOffset,a);if(a.output===f.ShaderOutput.Color||a.output===f.ShaderOutput.Alpha)b.include(e.NormalAttribute,a),b.include(w.Transform,{linearDepth:!1,hasModelTransformation:h}),a.normalType===e.NormalAttributeType.Attribute&&a.offsetBackfaces&&b.include(v.Offset),b.include(F.ComputeNormalTexture,a),b.include(C.VertexNormal,a),a.instancedColor&&b.attributes.add(O.VertexAttribute.INSTANCECOLOR,"vec4"),b.varyings.add("localvpos","vec3"),b.include(A.TextureCoordinateAttribute,
a),b.include(u.ForwardLinearDepth,a),b.include(z.SymbolColor,a),b.include(B.VertexColor,a),b.vertex.uniforms.add("externalColor","vec4"),b.varyings.add("vcolorExt","vec4"),a.multipassTerrainEnabled&&b.varyings.add("depth","float"),P.add(c.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${a.instancedColor?"vcolorExt *\x3d instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${c.glsl.float(g.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a.normalType===e.NormalAttributeType.Attribute?c.glsl`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${a.vertexTangents?"vTangent \x3d dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
          ${a.normalType===e.NormalAttributeType.Attribute&&a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${a.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `);a.output===f.ShaderOutput.Alpha&&(b.include(m.Slice,a),b.include(g.DiscardOrAdjustAlpha,a),a.multipassTerrainEnabled&&(b.fragment.include(n.ReadLinearDepth),b.include(p.multipassTerrainTest,a)),b.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),a.hasColorTexture&&b.fragment.uniforms.add("tex","sampler2D"),b.fragment.include(q.MixExternalColor),t.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        ${a.attributeColor?c.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `));a.output===f.ShaderOutput.Color&&(b.include(m.Slice,a),b.include(H.EvaluateSceneLighting,a),b.include(G.EvaluateAmbientOcclusion,a),b.include(g.DiscardOrAdjustAlpha,a),a.receiveShadows&&b.include(K.ReadShadowMap,a),a.multipassTerrainEnabled&&(b.fragment.include(n.ReadLinearDepth),b.include(p.multipassTerrainTest,a)),b.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),a.hasColorTexture&&
b.fragment.uniforms.add("tex","sampler2D"),b.include(d.PhysicallyBasedRenderingParameters,a),b.include(J.PhysicallyBasedRendering,a),b.fragment.include(q.MixExternalColor),b.include(I.Normals,a),t.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${a.normalType===e.NormalAttributeType.ScreenDerivative?c.glsl`
        vec3 normal = screenDerivativeNormal(localvpos);`:c.glsl`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${a.pbrMode===d.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":a.viewingMode===l.ViewingMode.Global?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${a.attributeColor?c.glsl`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${a.hasNormalTexture?c.glsl`
              mat3 tangentSpace = ${a.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal \x3d normal;"}
        ${a.pbrMode===d.PBRMode.Normal||a.pbrMode===d.PBRMode.Schematic?a.viewingMode===l.ViewingMode.Global?c.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:c.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:c.glsl``}
        ${a.pbrMode===d.PBRMode.Normal||a.pbrMode===d.PBRMode.Schematic?c.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor \x3d evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));b.include(E.DefaultMaterialAuxiliaryPasses,a);return b}const Q=Object.freeze({__proto__:null,build:r});k.DefaultMaterialShader=Q;k.build=r});