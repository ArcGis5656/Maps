// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../attributes/VertexColor.glsl","../util/MixExternalColor.glsl","../../shaderModules/interfaces"],function(c,e,f,b){c.ComputeMaterialColor=function(a,d){a.include(e.VertexColor,d);a.fragment.include(f.MixExternalColor);a=a.fragment;a.uniforms.add("baseColor","vec4");a.uniforms.add("objectOpacity","float");d.attributeColor?a.code.add(b.glsl`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`):a.code.add(b.glsl`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`);a.code.add(b.glsl`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)};Object.defineProperty(c,"__esModule",{value:!0})});