// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(c,g,h,k,d,l,e){function f(b){const a=new l.ShaderBuilder;a.extensions.add("GL_OES_standard_derivatives");
a.attributes.add(e.VertexAttribute.POSITION,"vec3");a.attributes.add(e.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.varyings.add("vUV","vec2");b.multipassTerrainEnabled&&a.varyings.add("depth","float");a.vertex.code.add(d.glsl`
    void main(void) {
      vUV = uv0;
      ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `);b.multipassTerrainEnabled&&(a.fragment.include(g.ReadLinearDepth),a.include(h.multipassTerrainTest,b));a.fragment.uniforms.add("size","vec2").add("color1","vec4").add("color2","vec4");a.fragment.include(k.ColorConversion);a.fragment.code.add(d.glsl`
    void main() {
      ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    }
  `);return a}const m=Object.freeze({__proto__:null,build:f});c.CheckerBoardShader=m;c.build=f});