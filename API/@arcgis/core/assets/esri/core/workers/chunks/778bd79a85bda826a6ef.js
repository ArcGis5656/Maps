"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5196],{15215:(e,t,r)=>{r.d(t,{n:()=>s});var i=r(40167),o=r(27726);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i.e,t),this}vec2f64(e,t){return this.appendField(e,i.t,t),this}vec3f(e,t){return this.appendField(e,i.a,t),this}vec3f64(e,t){return this.appendField(e,i.B,t),this}vec4f(e,t){return this.appendField(e,i.g,t),this}vec4f64(e,t){return this.appendField(e,i.f,t),this}mat3f(e,t){return this.appendField(e,i.d,t),this}mat3f64(e,t){return this.appendField(e,i.i,t),this}mat4f(e,t){return this.appendField(e,i.u,t),this}mat4f64(e,t){return this.appendField(e,i.c,t),this}vec4u8(e,t){return this.appendField(e,i.b,t),this}f32(e,t){return this.appendField(e,i.v,t),this}f64(e,t){return this.appendField(e,i.w,t),this}u8(e,t){return this.appendField(e,i.h,t),this}u16(e,t){return this.appendField(e,i.k,t),this}i8(e,t){return this.appendField(e,i.x,t),this}vec2i8(e,t){return this.appendField(e,i.s,t),this}vec2i16(e,t){return this.appendField(e,i.q,t),this}vec2u8(e,t){return this.appendField(e,i.r,t),this}vec4u16(e,t){return this.appendField(e,i.l,t),this}u32(e,t){return this.appendField(e,i.j,t),this}appendField(e,t,r){const i=t.ElementCount*(0,o.e)(t.ElementType),n=this.stride;this.fields.set(e,{size:i,constructor:t,offset:n,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},10638:(e,t,r)=>{r.d(t,{D:()=>m,R:()=>u,T:()=>p,a:()=>l,c:()=>d,i:()=>f,w:()=>c});var i=r(82426),o=r(76506),n=r(60991);const a=r(92143).L.getLogger("esri/views/webgl"),s=!!(0,o.h)("enable-feature:webgl-debug");function l(){return s}function c(){return s}function d(e){if(l()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),i=(new Error).stack;a.error(new n.Z("webgl-error","WebGL error occured",{message:r,stack:i}))}}}var u,h;(h=u||(u={}))[h.Texture=0]="Texture",h[h.Buffer=1]="Buffer",h[h.VAO=2]="VAO",h[h.VertexShader=3]="VertexShader",h[h.FragmentShader=4]="FragmentShader",h[h.Program=5]="Program",h[h.Framebuffer=6]="Framebuffer",h[h.Renderbuffer=7]="Renderbuffer",h[h.COUNT=8]="COUNT";const m=33306;function f(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}class p{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,e.instanceCounter.increment(u.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...t},34067===this._descriptor.target?this.setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(u.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;r.width===e&&r.height===t||(r.width=e,r.height=t,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(e=null){for(let t=34069;t<=34074;t++)this.setData(e,t)}setData(e,t=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES),n=this._descriptor;p._validateTexture(this._context,n),r.pixelStorei(r.UNPACK_ALIGNMENT,n.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);const a=n.pixelFormat;let s=n.internalFormat?n.internalFormat:this._deriveInternalFormat(a,n.dataType);if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let i=e.width,o=e.height;e instanceof HTMLVideoElement&&(i=e.videoWidth,o=e.videoHeight),n.width&&n.height,r.texImage2D(t,0,s,a,n.dataType,e),d(r),n.hasMipmap&&this.generateMipmap(),void 0===n.width&&(n.width=i),void 0===n.height&&(n.height=o)}else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&s===r.DEPTH_STENCIL&&(s=r.DEPTH24_STENCIL8);let i=n.width,l=n.height;if(function(e){return(0,o.i)(e)&&"type"in e&&"compressed"===e.type}(e)){const o=Math.round(Math.log(Math.max(i,l))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&o===e.levels.length;for(let o=0;;++o){const a=e.levels[Math.min(o,e.levels.length-1)];if(r.compressedTexImage2D(t,o,s,i,l,0,a),1===i&&1===l||!n.hasMipmap)break;i=Math.max(1,i>>1),l=Math.max(1,l>>1)}}else if((0,o.i)(e))r.texImage2D(t,0,s,i,l,0,a,n.dataType,e),d(r),n.hasMipmap&&this.generateMipmap();else for(let e=0;r.texImage2D(t,e,s,i,l,0,a,n.dataType,null),d(r),(1!==i||1!==l)&&n.hasMipmap;++e)i=Math.max(1,i>>1),l=Math.max(1,l>>1)}p._applySamplingMode(r,this._descriptor),p._applyWrapMode(r,this._descriptor),p._applyAnisotropicFilteringParameters(this._context,this._descriptor),d(r),this._context.bindTexture(i,p.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,o,n,a=3553){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,l=this._descriptor,c=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>l.width||o>l.height||t+i>l.width||r+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),s.pixelStorei(s.UNPACK_ALIGNMENT,l.unpackAlignment),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,l.flipped?1:0),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.preMultiplyAlpha?1:0),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?s.texSubImage2D(a,e,t,r,l.pixelFormat,l.dataType,n):s.texSubImage2D(a,e,t,r,i,o,l.pixelFormat,l.dataType,n),this._context.bindTexture(c,p.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;e.hasMipmap||(e.hasMipmap=!0,this._samplingModeDirty=!0,p._validateTexture(this._context,e)),9729===e.samplingMode?(this._samplingModeDirty=!0,e.samplingMode=9985):9728===e.samplingMode&&(this._samplingModeDirty=!0,e.samplingMode=9984);const t=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,p.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,p._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(p._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(p._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if("webgl"===this._context.webglVersion)return e;if(5126===t)switch(e){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return e}static _validateTexture(e,t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=(0,i.C)(t.width)&&(0,i.C)(t.height);f(e.gl)||r||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;9985===r||9987===r?(r=9729,t.hasMipmap||(i=9729)):9984!==r&&9986!==r||(r=9728,t.hasMipmap||(i=9728)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}p.TEXTURE_UNIT_FOR_UPDATES=0},49500:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))}))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{a:()=>o,i:()=>i});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},55196:(e,t,r)=>{r.r(t),r.d(t,{C:()=>Si,D:()=>bi,E:()=>oi,H:()=>Pi,M:()=>Fi,N:()=>Ci,P:()=>mi,T:()=>ri,V:()=>Ti,a:()=>ii,b:()=>Ai,c:()=>yi,d:()=>ui,e:()=>di,f:()=>fi,g:()=>ai,h:()=>ni,i:()=>Ni,j:()=>Vi,k:()=>ro,l:()=>Ki,m:()=>xi,n:()=>Mi,o:()=>hi,p:()=>no});var i=r(49500),o=r(76506),n=r(26923),a=r(45087),s=r(65775),l=r(57532),c=r(82426),d=r(53326),u=r(40167),h=r(72836),m=r(90779),f=r(82058),p=r(41864),g=r(60991),v=r(92143),x=r(50406),b=r(10738);async function _(e,t){const{data:r}=await(0,f.default)(e,{responseType:"image",...t});return r}var T=r(6906),y=r(10638);const w=v.L.getLogger("esri.views.webgl.BufferObject");class S{constructor(e,t,r,i,o){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(y.R.Buffer,this),this._glName=this._context.gl.createBuffer(),(0,y.c)(this._context.gl),i&&this.setData(i,o)}static createIndex(e,t,r,i){return new S(e,34963,t,r,i)}static createVertex(e,t,r){return new S(e,34962,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){var e;null!=(e=this._context)&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(y.R.Buffer,this),this._context=null):this._glName&&w.warn("Leaked WebGL buffer object")}setData(e,t){if(!e)return;if("number"==typeof e){if(e<0&&w.error("Buffer size cannot be negative!"),this._size=e,34963===this.bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{let t=e.byteLength;(0,o.w)(e)&&(t/=2,this._indexType=5123),(0,o.x)(e)&&(t/=4,this._indexType=5125),this._size=t}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;i.bufferData(this.bufferType,e,this.usage),(0,y.c)(i),this._context.bindVAO(r)}setSubData(e,t=0,r=0,i=e.byteLength){if(!e)return;(t<0||t>=this._size)&&w.error("offset is out of range!");let n=t,a=r,s=i,l=e.byteLength;(0,o.w)(e)?(l/=2,n*=2,a*=2,s*=2):(0,o.x)(e)&&(l/=4,n*=4,a*=4,s*=4),void 0===i&&(i=l-1),r>=i&&w.error("end must be bigger than start!"),t+r-i>this._size&&w.error("An attempt to write beyond the end of the buffer!");const c=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const d=this._context.gl,u=ArrayBuffer.isView(e)?e.buffer:e,h=0===a&&s===e.byteLength?u:u.slice(a,s);d.bufferSubData(this.bufferType,n,h),(0,y.c)(d),this._context.bindVAO(c)}setSubDataFromView(e,t,r,i){if(!e)return;(t<0||t>=this._size)&&w.error("offset is out of range!"),r>=i&&w.error("end must be bigger than start!"),t+r-i>this._size&&w.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl,a=0===r&&i===e.length?e:e.subarray(r,i);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,a),(0,y.c)(n),this._context.bindVAO(o)}}function M(e,t,r,i,o){const n=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`),e.baseInstance&&!e.divisor&&console.error(`Vertex attribute '${e.name}' uses baseInstanceOffset without divisor.`);const i=(o||(0+e.baseInstance?e.baseInstance:0))*e.stride;if(e.count<=4)n.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),n.enableVertexAttribArray(r),e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)n.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)n.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function A(e,t,r,i){const o=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);if(e.count<=4)o.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)o.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)o.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(34962)}function C(e){switch(e){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34837:return 12;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5}return 0}function P(e){if((0,o.b)(e))return 0;if("descriptor"in e)return e.glName?P(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const r="hasMipmap"in e&&e.hasMipmap?1.3:1,i=e.width*e.height;return C(t)*i*r}const F=v.L.getLogger("esri.views.webgl.VertexArrayObject");class E{constructor(e,t,r,i,o=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment(y.R.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].size),(0,o.i)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(this._context){if(this._glName){var t,r;const e=null==(t=this._context)||null==(r=t.capabilities)?void 0:r.vao;e?(e.deleteVertexArray(this._glName),this._glName=null):F.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e].dispose(),delete this._buffers[e];this._indexBuffer=(0,o.y)(this._indexBuffer)}this._context.instanceCounter.decrement(y.R.VAO,this),this._context=null}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&F.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||F.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const r in e){const i=e[r];i||F.error("Vertex buffer is uninitialized!");const o=t[r];o||F.error("Vertex element descriptor is empty!"),M(this._context,this._locations,i,o)}(0,o.i)(r)&&(this._context.capabilities.vao?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:t}=this;e||F.error("Vertex buffer dictionary is empty!");for(const r in e){const i=e[r];i||F.error("Vertex buffer is uninitialized!");const o=t[r];A(this._context,this._locations,i,o)}(0,o.i)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}const D=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var O,R={exports:{}};void 0!==(O=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(R.exports=O);const L=R.exports;var z,N={exports:{}};void 0!==(z=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(N.exports=z);const I=N.exports;var B,U,V={exports:{}};B=V,void 0!==(U=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(B.exports=U);const H=V.exports;var k=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];const G=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function $(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function W(e,t,r,i){i=i||r;for(const o of e)if("ident"===o.type&&o.data===r)return i in t?t[i]++:t[i]=0,W(e,t,i+"_"+t[i],i);return r}function q(e,t,r="afterVersion"){function i(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}const o={data:"\n",type:"whitespace"},n=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let a=function(e){let t=-1,o=0,n=-1;for(let a=0;a<e.length;a++){const s=e[a];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++o:s.data.match(/\#endif\s*.*/)&&--o),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(n=Math.max(n,a)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=i(e,a);if(null===t)throw new Error("precision statement not followed by any semicolons!");n=Math.max(n,t)}t<n&&0===o&&(t=a)}return t+1}(e);n(a-1)&&e.splice(a++,0,o);for(const r of t)e.splice(a++,0,r);n(a-1)&&n(a)&&e.splice(a,0,o)}function j(e,t,r,i="lowp"){q(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function X(e,t,r,i,o="lowp"){q(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function K(e,t){let r,i,o=-1;for(let n=t;n<e.length;n++){const t=e[n];if("operator"===t.type&&("["===t.data&&(r=n),"]"===t.data)){i=n;break}"integer"===t.type&&(o=parseInt(t.data,10))}return r&&i&&e.splice(r,i-r+1),o}function Y(e,t){if((0,o.b)(e)||e.length!==t.length)return!0;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!0;return!1}function Z(e,t,r){const i="webgl2"===e.webglVersion?function(e,t){if((0,o.i)(null))return null;const r=function(e){return t=e,r=function(){var e,t,r,i=0,o=0,n=999,a=[],s=[],l=1,c=0,d=0,u=!1,h=!1,m="";return function(t){return s=[],null!==t?function(t){var a;for(i=0,r=(m+=t).length;e=m[i],i<r;){switch(a=i,n){case 0:i=x();break;case 1:case 2:i=v();break;case 3:i=b();break;case 4:i=y();break;case 11:i=T();break;case 5:i=w();break;case 9999:i=S();break;case 9:i=g();break;case 999:i=p()}a!==i&&("\n"===m[a]?(c=0,++l):++c)}return o+=i,m=m.slice(i),s}(t.replace?t.replace(/\r\n/g,"\n"):t):(a.length&&f(a.join("")),n=10,f("(eof)"),s)};function f(e){e.length&&s.push({type:k[n],data:e,position:d,line:l,column:c})}function p(){return a=a.length?[]:a,"/"===t&&"*"===e?(d=o+i-1,n=0,t=e,i+1):"/"===t&&"/"===e?(d=o+i-1,n=1,t=e,i+1):"#"===e?(n=2,d=o+i,i):/\s/.test(e)?(n=9,d=o+i,i):(u=/\d/.test(e),h=/[^\w_]/.test(e),d=o+i,n=u?4:h?3:9999,i)}function g(){return/[^\s]/g.test(e)?(f(a.join("")),n=999,i):(a.push(e),t=e,i+1)}function v(){return"\r"!==e&&"\n"!==e||"\\"===t?(a.push(e),t=e,i+1):(f(a.join("")),n=999,i)}function x(){return"/"===e&&"*"===t?(a.push(e),f(a.join("")),n=999,i+1):(a.push(e),t=e,i+1)}function b(){if("."===t&&/\d/.test(e))return n=5,i;if("/"===t&&"*"===e)return n=0,i;if("/"===t&&"/"===e)return n=1,i;if("."===e&&a.length){for(;_(a););return n=5,i}if(";"===e||")"===e||"("===e){if(a.length)for(;_(a););return f(e),n=999,i+1}var r=2===a.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;_(a););return n=999,i}return a.push(e),t=e,i+1}function _(e){for(var t,r,i=0;;){if(t=I.indexOf(e.slice(0,e.length+i).join("")),r=I[t],-1===t){if(i--+e.length>0)continue;r=e.slice(0,1).join("")}return f(r),d+=r.length,(a=a.slice(r.length)).length}}function T(){return/[^a-fA-F0-9]/.test(e)?(f(a.join("")),n=999,i):(a.push(e),t=e,i+1)}function y(){return"."===e||/[eE]/.test(e)?(a.push(e),n=5,t=e,i+1):"x"===e&&1===a.length&&"0"===a[0]?(n=11,a.push(e),t=e,i+1):/[^\d]/.test(e)?(f(a.join("")),n=999,i):(a.push(e),t=e,i+1)}function w(){return"f"===e&&(a.push(e),t=e,i+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(a.push(e),t=e,i+1):/[^\d]/.test(e)?(f(a.join("")),n=999,i):(a.push(e),t=e,i+1)}function S(){if(/[^\d\w_]/.test(e)){var r=a.join("");return n=L.indexOf(r)>-1?8:H.indexOf(r)>-1?7:6,f(a.join("")),n=999,i}return a.push(e),t=e,i+1}}(),[].concat(r(t)).concat(r(null));var t,r}(e);if("300 es"===function(e,t="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const o of e)if("preprocessor"===o.type){const e=i.exec(o.data);if(e){const i=e[1].replace(/\s\s+/g," ");if(i===r)return i;if(i===t)return o.data="#version "+r,t;throw new Error("unknown glsl version: "+i)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let i=null,n=null;const a={},s={};for(let e=0;e<r.length;++e){const o=r[e];switch(o.type){case"keyword":35633===t&&"attribute"===o.data?o.data="in":"varying"===o.data&&(o.data=35633===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(o.data.trim())&&(o.data=o.data.replace(/(2D|Cube|EXT)/g,"")),35632===t&&"gl_FragColor"===o.data&&(i||(i=W(r,a,"fragColor"),j(r,i,"vec4")),o.data=i),35632===t&&"gl_FragData"===o.data){const t=K(r,e+1),i=W(r,a,"fragData");X(r,i,"vec4",t,"mediump"),o.data=i}else 35632===t&&"gl_FragDepthEXT"===o.data&&(n||(n=W(r,a,"gl_FragDepth")),o.data=n);break;case"ident":if(D.indexOf(o.data)>=0){if(35633===t&&$(r,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");o.data in s||(s[o.data]=W(r,a,o.data)),o.data=s[o.data]}}}for(let e=r.length-1;e>=0;--e){const t=r[e];if("preprocessor"===t.type){const i=t.data.match(/\#extension\s+(.*)\:/);if(i&&i[1]&&G.indexOf(i[1].trim())>=0){const t=r[e+1];r.splice(e,t&&"whitespace"===t.type?2:1)}const o=t.data.match(/\#ifdef\s+(.*)/);o&&o[1]&&G.indexOf(o[1].trim())>=0&&(t.data="#if 1");const n=t.data.match(/\#ifndef\s+(.*)/);n&&n[1]&&G.indexOf(n[1].trim())>=0&&(t.data="#if 0")}}return l=function(e){return e.map((e=>"eof"!==e.type?e.data:"")).join("")}(r),l;var l}(r,t):r,n=e.gl,a=n.createShader(t);return n.shaderSource(a,i),n.compileShader(a),(0,y.w)()&&!n.getShaderParameter(a,n.COMPILE_STATUS)&&(console.error("Compile error in ".concat(35633===t?"vertex":"fragment"," shader")),console.error(n.getShaderInfoLog(a)),console.error(function(e){let t=2;return e.replace(/\n/g,(()=>"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":"))}(i)),"webgl2"===e.webglVersion&&(console.log("Shader source before transpilation:"),console.log(r))),a}function Q(e,t){for(let r=0;r<e.length;++r)t[r]=e[r]}var J=r(65949),ee=r(68681);(0,ee.c)();class te{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function re(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new te(t)}}var ie=r(14049),oe=r(21972),ne=r(35861),ae=r(56697),se=r(2484);new se.O((function(){return{origin:null,direction:null}})),(0,c.b)(),(0,c.b)();const le=v.L.getLogger("esri.geometry.support.sphere");function ce(){return(0,ee.c)()}function de(e,t=ce()){return(0,c.w)(t,e)}function ue(e){return Array.isArray(e)?e[3]:e}function he(e){return Array.isArray(e)?e:Te}function me(e,t,r){if((0,o.b)(t))return!1;const{origin:i,direction:n}=t,a=fe;a[0]=i[0]-e[0],a[1]=i[1]-e[1],a[2]=i[2]-e[2];const s=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],l=2*(n[0]*a[0]+n[1]*a[1]+n[2]*a[2]),c=l*l-4*s*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-e[3]*e[3]);if(c<0)return!1;const d=Math.sqrt(c);let u=(-l-d)/(2*s);const h=(-l+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0||(r&&(r[0]=i[0]+n[0]*u,r[1]=i[1]+n[1]*u,r[2]=i[2]+n[2]*u),0))}const fe=(0,c.b)();function pe(e,t,r){const i=se.b.get(),o=se.s.get();(0,c.a)(i,t.origin,t.direction);const n=ue(e);(0,c.a)(r,i,t.origin),(0,c.f)(r,r,1/(0,c.l)(r)*n);const a=ve(e,t.origin),l=function(e,t){const r=(0,c.d)(e,t)/((0,c.l)(e)*(0,c.l)(t));return-(0,c.i)(r)}(t.origin,r);return(0,s.i)(o),(0,s.r)(o,o,l+a,i),(0,c.j)(r,r,o),r}function ge(e,t,r){const i=(0,c.s)(se.b.get(),t,he(e)),o=(0,c.f)(se.b.get(),i,e[3]/(0,c.l)(i));return(0,c.g)(r,o,he(e))}function ve(e,t){const r=(0,c.s)(se.b.get(),t,he(e)),i=(0,c.l)(r),o=ue(e),n=o+Math.abs(o-i);return(0,c.i)(o/n)}const xe=(0,c.b)();function be(e,t,r,i){const o=(0,c.s)(xe,t,he(e));switch(r){case 0:{const e=(0,c.N)(o,xe)[2];return(0,c.e)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=(0,c.N)(o,xe),t=e[1],r=e[2],n=Math.sin(t);return(0,c.e)(i,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case 2:return(0,c.n)(i,o);default:return}}function _e(e,t){const r=(0,c.s)(ye,t,he(e));return(0,c.l)(r)-e[3]}const Te=(0,c.b)(),ye=(0,c.b)();function we(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}Object.freeze({__proto__:null,create:ce,copy:de,fromCenterAndRadius:function(e,t){return(0,ee.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:ue,getCenter:he,fromValues:function(e,t,r,i){return(0,ee.f)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&(0,c.m)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return le.error("sphere.setExtent is not yet supported"),e===r?r:de(e,r)},intersectRay:me,intersectsRay:function(e,t){return me(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(me(e,t,r))return r;const i=pe(e,t,se.b.get());return(0,c.g)(r,t.origin,(0,c.f)(se.b.get(),t.direction,(0,c.E)(t.origin,i)/(0,c.l)(t.direction))),r},closestPointOnSilhouette:pe,closestPoint:function(e,t,r){return me(e,t,r)?r:(function(e,t,r){const i=(0,c.d)(e.direction,(0,c.s)(r,t,e.origin));(0,c.g)(r,e.origin,(0,c.f)(r,e.direction,i))}(t,he(e),r),ge(e,r,r))},projectPoint:ge,distanceToSilhouette:function(e,t){const r=(0,c.s)(se.b.get(),t,he(e)),i=(0,c.M)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:ve,axisAt:be,altitudeAt:_e,setAltitudeAt:function(e,t,r,i){const o=_e(e,t),n=be(e,t,2,ye),a=(0,c.f)(ye,n,r-o);return(0,c.g)(i,t,a)}});const Se=new Float64Array(1),Me=new Float32Array(2),Ae=new class{constructor(e=0){this.offset=e,this.sphere=ce(),this.tmpVertex=(0,c.b)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,c.b)(),this.mbs=(0,ee.c)(),this.obb={center:(0,c.b)(),halfSize:(0,ae.b)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(o*o+n*n+a*a);return e[3]+=o*l,e[4]+=n*l,e[5]+=a*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,c.T)(this.obb.halfSize,e.halfSize,e.quaternion),(0,c.g)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,(0,c.s)(this.obb.halfSize,this.obb.halfSize,e.center),(0,ne.c)(Ce,e.quaternion),(0,c.T)(this.obb.halfSize,this.obb.halfSize,Ce),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.b)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],o=e[3]+this.localOrigin[0],n=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(o*o+n*n+a*a);return e[3]+=o*l,e[4]+=n*l,e[5]+=a*l,e}};const Ce=(0,a.a)();function Pe(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function Fe(e){e.code.add(Pe`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ee(e){e.include(Fe),e.code.add(Pe`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}new Float64Array(3),new Float32Array(6),(0,l.c)(),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(Pe||(Pe={}));const De=v.L.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Oe{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&De.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class Re extends Oe{constructor(){super(...arguments),this.vertex=new Ne,this.fragment=new Ne,this.attributes=new Ie,this.varyings=new Be,this.extensions=new Ue,this.constants=new Ve}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?ke:He,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class Le{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>{return`uniform ${e.type} ${e.name}${t=e.arraySize,t?`[${t}]`:""};`;var t}))}get entries(){return Array.from(this._entries.values())}}class ze{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Ne extends Oe{constructor(){super(...arguments),this.uniforms=new Le,this.code=new ze,this.constants=new Ve}get builder(){return this}}class Ie{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class Be{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class Ue{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?Ue.ALLOWLIST_VERTEX:Ue.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}Ue.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Ue.ALLOWLIST_VERTEX=[];class Ve{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=Ve.numberToFloatStr(r);break;case"int":i=Ve.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${Ve.numberToFloatStr(r[0])},                            ${Ve.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${Ve.numberToFloatStr(r[0])},                            ${Ve.numberToFloatStr(r[1])},                            ${Ve.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${Ve.numberToFloatStr(r[0])},                            ${Ve.numberToFloatStr(r[1])},                            ${Ve.numberToFloatStr(r[2])},                            ${Ve.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${Ve.numberToIntStr(r[0])},                             ${Ve.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${Ve.numberToIntStr(r[0])},                             ${Ve.numberToIntStr(r[1])},                             ${Ve.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${Ve.numberToIntStr(r[0])},                             ${Ve.numberToIntStr(r[1])},                             ${Ve.numberToIntStr(r[2])},                             ${Ve.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>Ve.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const He="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",ke="precision highp float;\nprecision highp sampler2D;";class Ge{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function $e(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Math.log2(a)),l=null!=(o=t._parameterBits)?o:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const d=l[c],u=(1<<s)-1<<d;l[c]+=s,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}const We=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);class qe extends class{constructor(e,t,r,i){this._context=e,this._locations=i,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),this._vShader=Z(this._context,35633,t),this._fShader=Z(this._context,35632,r),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(y.R.VertexShader,this),this._context.instanceCounter.increment(y.R.FragmentShader,this)}get glName(){if((0,o.i)(this._glName))return this._glName;if((0,o.b)(this._vShader))return null;const e=this._context.gl,t=e.createProgram();return e.attachShader(t,this._vShader),e.attachShader(t,this._fShader),this._locations.forEach(((r,i)=>e.bindAttribLocation(t,r,i))),e.linkProgram(t),(0,y.w)()&&!e.getProgramParameter(t,e.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${e.getProgramParameter(t,e.VALIDATE_STATUS)}, gl error ${e.getError()}, vertex: ${e.getShaderParameter(this._vShader,e.COMPILE_STATUS)}, fragment: ${e.getShaderParameter(this._fShader,e.COMPILE_STATUS)}, info log: ${e.getProgramInfoLog(t)}`),this._glName=t,this._context.instanceCounter.increment(y.R.Program,this),t}dispose(){const e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(y.R.VertexShader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null,this._context.instanceCounter.decrement(y.R.FragmentShader,this)),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(y.R.Program,this))}_getUniformLocation(e){return void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this._getUniformLocation(e)}setUniform1i(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.useProgram(this),this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){const r=this._nameToUniform1v[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform1iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=Array.from(t):Q(t,r))}setUniform2iv(e,t){const r=this._nameToUniform2[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform2iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=Array.from(t):Q(t,r))}setUniform3iv(e,t){const r=this._nameToUniform3[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform3iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=Array.from(t):Q(t,r))}setUniform4iv(e,t){const r=this._nameToUniform4[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform4iv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=Array.from(t):Q(t,r))}setUniform1f(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.useProgram(this),this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){const r=this._nameToUniform1v[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform1fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=Array.from(t):Q(t,r))}setUniform2f(e,t,r){const i=this._nameToUniform2[e];void 0!==i&&t===i[0]&&r===i[1]||(this._context.useProgram(this),this._context.gl.uniform2f(this._getUniformLocation(e),t,r),void 0===i?this._nameToUniform2[e]=[t,r]:(i[0]=t,i[1]=r))}setUniform2fv(e,t){const r=this._nameToUniform2[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform2fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=Array.from(t):Q(t,r))}setUniform3f(e,t,r,i){const o=this._nameToUniform3[e];void 0!==o&&t===o[0]&&r===o[1]&&i===o[2]||(this._context.useProgram(this),this._context.gl.uniform3f(this._getUniformLocation(e),t,r,i),void 0===o?this._nameToUniform3[e]=[t,r,i]:(o[0]=t,o[1]=r,o[2]=i))}setUniform3fv(e,t){const r=this._nameToUniform3[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform3fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=Array.from(t):Q(t,r))}setUniform4f(e,t,r,i,o){const n=this._nameToUniform4[e];void 0!==n&&t===n[0]&&r===n[1]&&i===n[2]&&o===n[3]||(this._context.useProgram(this),this._context.gl.uniform4f(this._getUniformLocation(e),t,r,i,o),void 0===n?this._nameToUniform4[e]=[t,r,i,o]:(n[0]=t,n[1]=r,n[2]=i,n[3]=o))}setUniform4fv(e,t){const r=this._nameToUniform4[e];Y(r,t)&&(this._context.useProgram(this),this._context.gl.uniform4fv(this._getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=Array.from(t):Q(t,r))}setUniformMatrix3fv(e,t,r=!1,i=!1){const n=this._nameToUniformMatrix3[e],a=i?n!==t:function(e,t){return!!(0,o.b)(e)||(9!==e.length?Y(e,t):9!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8])}(n,t);a&&(this._context.useProgram(this),this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),r,t),void 0===n?this._nameToUniformMatrix3[e]=Array.from(t):Q(t,n))}setUniformMatrix4fv(e,t,r=!1){const i=this._nameToUniformMatrix4[e];(function(e,t){return!!(0,o.b)(e)||(16!==e.length?Y(e,t):16!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8]||e[9]!==t[9]||e[10]!==t[10]||e[11]!==t[11]||e[12]!==t[12]||e[13]!==t[13]||e[14]!==t[14]||e[15]!==t[15])})(i,t)&&(this._context.useProgram(this),this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),r,t),void 0===i?this._nameToUniformMatrix4[e]=Array.from(t):Q(t,i))}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){}}{constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new T.P({deallocator:null}),this._fragmentUniforms=(0,y.a)()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,o.b)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,o.i)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const je=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Xe=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];function Ke(e){e.code.add(Pe`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Ye(e,t){t.linearDepth?e.vertex.code.add(Pe`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(Pe`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const Ze=(0,J.a)();class Qe{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,c.b)(),re(e.length>=1),re(r.length%this._numIndexPerPrimitive==0),re(r.length>=e.length*this._numIndexPerPrimitive),re(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];Je.clear(),Je.push(s),this.bbMin=(0,c.k)(o[s],o[s+1],o[s+2]),this.bbMax=(0,c.q)(this.bbMin);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],Je.push(s);let t=o[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,c.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let e=0;e<Je.length;++e){s=Je.getItemAt(e);const t=o[s]-this.center[0],r=o[s+1]-this.center[1],i=o[s+2]-this.center[2],n=t*t+r*r+i*i;if(n<=l)continue;const a=Math.sqrt(n),c=.5*(a-this.radius);this.radius=this.radius+c,l=this.radius*this.radius;const d=c/a;this.center[0]+=t*d,this.center[1]+=r*d,this.center[2]+=i*d}Je.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c._)(this.bbMin,this.bbMax)>1){const e=(0,c.h)((0,c.b)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n*this.indices[s],c=o[l],d=o[l+1],u=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new Qe(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Je.prune()}}const Je=new T.P({deallocator:null});class et{constructor(){this.id=(0,oe.g)()}unload(){}}class tt extends et{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,ie.g)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,rt(r)),"position"===e&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.b)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return(0,ie.a)(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return(0,ie.b)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;re(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,ie.g)(e.length/t),i=this.vertexAttributes.get("position");return new Qe(r,t,e,i)}}function rt(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}(0,c.o)(10),(0,c.o)(12),(0,c.o)(70),(0,c.o)(40);const it={scale:0,factor:0,minPixelSize:0,paddingPixels:0},ot=(0,d.c)();function nt(e,t,r,i,n,a,s){if(!function(e){return!!(0,o.i)(e)&&!e.visible}(t))if(e.boundingInfo){re(0===e.primitiveType);const t=r.tolerance;st(e.boundingInfo,i,n,t,a,s)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");ct(i,n,0,t.length/3,t,r,void 0,a,s)}}const at=(0,c.b)();function st(e,t,r,i,n,a){if((0,o.b)(e))return;const s=function(e,t,r){return(0,c.e)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,at);if((0,d.j)(ot,e.getBBMin()),(0,d.k)(ot,e.getBBMax()),(0,o.i)(n)&&n.applyToAabb(ot),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(ot,t,s,i)){const{primitiveIndices:o,indices:s,position:l}=e,c=o?o.length:s.length/3;if(c>gt){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&st(o[e],t,r,i,n,a);return}}ct(t,r,0,c,s,l,o,n,a)}}const lt=(0,c.b)();function ct(e,t,r,i,n,a,s,l,c){if(s)return function(e,t,r,i,n,a,s,l,c){const d=a.data,u=a.stride||a.size,h=e[0],m=e[1],f=e[2],p=t[0]-h,g=t[1]-m,v=t[2]-f;for(let e=r;e<i;++e){const t=s[e];let r=3*t,i=u*n[r++],a=d[i++],x=d[i++],b=d[i];i=u*n[r++];let _=d[i++],T=d[i++],y=d[i];i=u*n[r];let w=d[i++],S=d[i++],M=d[i];(0,o.i)(l)&&([a,x,b]=l.applyToVertex(a,x,b,e),[_,T,y]=l.applyToVertex(_,T,y,e),[w,S,M]=l.applyToVertex(w,S,M,e));const A=_-a,C=T-x,P=y-b,F=w-a,E=S-x,D=M-b,O=g*D-E*v,R=v*F-D*p,L=p*E-F*g,z=A*O+C*R+P*L;if(Math.abs(z)<=Number.EPSILON)continue;const N=h-a,I=m-x,B=f-b,U=N*O+I*R+B*L;if(z>0){if(U<0||U>z)continue}else if(U>0||U<z)continue;const V=I*P-C*B,H=B*A-P*N,k=N*C-A*I,G=p*V+g*H+v*k;if(z>0){if(G<0||U+G>z)continue}else if(G>0||U+G<z)continue;const $=(F*V+E*H+D*k)/z;$>=0&&c($,ht(A,C,P,F,E,D,lt),t,!1)}}(e,t,r,i,n,a,s,l,c);const d=a.data,u=a.stride||a.size,h=e[0],m=e[1],f=e[2],p=t[0]-h,g=t[1]-m,v=t[2]-f;for(let e=r,t=3*r;e<i;++e){let r=u*n[t++],i=d[r++],a=d[r++],s=d[r];r=u*n[t++];let x=d[r++],b=d[r++],_=d[r];r=u*n[t++];let T=d[r++],y=d[r++],w=d[r];(0,o.i)(l)&&([i,a,s]=l.applyToVertex(i,a,s,e),[x,b,_]=l.applyToVertex(x,b,_,e),[T,y,w]=l.applyToVertex(T,y,w,e));const S=x-i,M=b-a,A=_-s,C=T-i,P=y-a,F=w-s,E=g*F-P*v,D=v*C-F*p,O=p*P-C*g,R=S*E+M*D+A*O;if(Math.abs(R)<=Number.EPSILON)continue;const L=h-i,z=m-a,N=f-s,I=L*E+z*D+N*O;if(R>0){if(I<0||I>R)continue}else if(I>0||I<R)continue;const B=z*A-M*N,U=N*S-A*L,V=L*M-S*z,H=p*B+g*U+v*V;if(R>0){if(H<0||I+H>R)continue}else if(H>0||I+H<R)continue;const k=(C*B+P*U+F*V)/R;k>=0&&c(k,ht(S,M,A,C,P,F,lt),e,!1)}}const dt=(0,c.b)(),ut=(0,c.b)();function ht(e,t,r,i,o,n,a){return(0,c.e)(dt,e,t,r),(0,c.e)(ut,i,o,n),(0,c.a)(a,dt,ut),(0,c.n)(a,a),a}function mt(e,t){const r=t?mt(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=ft(i)),null==i&&t in r||(r[t]=i)}return r}function ft(e){const t=[];return e.forEach((e=>t.push(e))),t}const pt={multiply:1,ignore:2,replace:3,tint:4},gt=1e3;class vt extends et{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=We,this._parameters=mt(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,o.i)(this.repository)&&this.repository.materialChanged(this)}}function xt(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function bt(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function _t(e,t,r,i,o,n=1){if(!r)return void bt(e,t,i,o,n);const a=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],h=r[4],m=r[5],f=r[6],p=r[8],g=r[9],v=r[10],x=r[12],b=r[13],_=r[14];if(o*=s,1===n)for(let r=0;r<l;++r){const i=3*e[r],n=t[i],l=t[i+1],T=t[i+2];a[o]=c*n+h*l+p*T+x,a[o+1]=d*n+m*l+g*T+b,a[o+2]=u*n+f*l+v*T+_,o+=s}else for(let r=0;r<l;++r){const i=3*e[r],l=t[i],T=t[i+1],y=t[i+2],w=c*l+h*T+p*y+x,S=d*l+m*T+g*y+b,M=u*l+f*T+v*y+_;for(let e=0;e<n;++e)a[o]=w,a[o+1]=S,a[o+2]=M,o+=s}}function Tt(e,t,r,i,o,n=1){if(!r)return void bt(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],m=a[2],f=a[4],p=a[5],g=a[6],v=a[8],x=a[9],b=a[10],_=!(0,s.u)(a),T=1e-6,y=.999999;if(o*=c,1===n)for(let r=0;r<d;++r){const i=3*e[r],n=t[i],a=t[i+1],s=t[i+2];let d=u*n+f*a+v*s,w=h*n+p*a+x*s,S=m*n+g*a+b*s;if(_){const e=d*d+w*w+S*S;if(e<y&&e>T){const t=1/Math.sqrt(e);d*=t,w*=t,S*=t}}l[o+0]=d,l[o+1]=w,l[o+2]=S,o+=c}else for(let r=0;r<d;++r){const i=3*e[r],a=t[i],s=t[i+1],d=t[i+2];let w=u*a+f*s+v*d,S=h*a+p*s+x*d,M=m*a+g*s+b*d;if(_){const e=w*w+S*S+M*M;if(e<y&&e>T){const t=1/Math.sqrt(e);w*=t,S*=t,M*=t}}for(let e=0;e<n;++e)l[o+0]=w,l[o+1]=S,l[o+2]=M,o+=c}}function yt(e,t,r,i,o,n=1){if(!r)return void function(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],m=a[2],f=a[4],p=a[5],g=a[6],v=a[8],x=a[9],b=a[10],_=!(0,s.u)(a),T=1e-6,y=.999999;if(o*=c,1===n)for(let r=0;r<d;++r){const i=4*e[r],n=t[i],a=t[i+1],s=t[i+2],d=t[i+3];let w=u*n+f*a+v*s,S=h*n+p*a+x*s,M=m*n+g*a+b*s;if(_){const e=w*w+S*S+M*M;if(e<y&&e>T){const t=1/Math.sqrt(e);w*=t,S*=t,M*=t}}l[o+0]=w,l[o+1]=S,l[o+2]=M,l[o+3]=d,o+=c}else for(let r=0;r<d;++r){const i=4*e[r],a=t[i],s=t[i+1],d=t[i+2],w=t[i+3];let S=u*a+f*s+v*d,M=h*a+p*s+x*d,A=m*a+g*s+b*d;if(_){const e=S*S+M*M+A*A;if(e<y&&e>T){const t=1/Math.sqrt(e);S*=t,M*=t,A*=t}}for(let e=0;e<n;++e)l[o+0]=S,l[o+1]=M,l[o+2]=A,l[o+3]=w,o+=c}}function wt(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===n){if(4===r)for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else if(4===r)for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}function St(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=Pe`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=Pe`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?Pe`#define highlightSlice(_color_, _pos_) (_color_)`:Pe`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=Pe`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}const Mt=(0,c.b)(),At=(0,ee.f)(1,1,0,1),Ct=(0,ee.f)(1,0,1,1);function Pt(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",At).add("unoccludedHighlightFlag","vec4",Ct),e.fragment.code.add(Pe`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function Ft(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(Pe`
        #define discardOrAdjustAlpha(color) { if (color.a < ${Pe.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(Pe`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(Pe`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(Pe`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Et(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(Pe`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function Dt(e,t){e.fragment.include(Fe),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Pe`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(Pe`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}const Ot={mask:255},Rt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Lt={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var zt=r(48190),Nt=r(76996),It=r(32101),Bt=r(73173);class Ut{constructor(e,t){this._context=e,this._desc=t,this._context.instanceCounter.increment(y.R.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,t.internalFormat,t.width,t.height)}get descriptor(){return this._desc}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(y.R.Renderbuffer,this),this._context=null)}}const Vt=v.L.getLogger("esri.views.webgl.FrameBufferObject");class Ht{constructor(e,t,r=null,i=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(y.R.Framebuffer,this),(0,o.i)(r)){Array.isArray(r)||(r=[r]);for(let t=0;t<r.length;++t){var n,a;const i=r[t];let o;kt(i)?(o=i.descriptor,this._colorAttachments.set(36064+t,i)):(o=i,this._colorAttachments.set(36064+t,new y.T(e,i))),0!==(null==(n=this._desc)?void 0:n.colorTarget)&&2!==(null==(a=this._desc)?void 0:a.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateColorAttachmentPoint(36064+t),this._validateTextureDimensions(o,this._desc)}}if(i instanceof Ut){var s;const e=null!=(s=this._desc.depthStencilTarget)?s:3;2===e?this._stencilAttachment=i:1===e||3===e?this._depthAttachment=i:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),Gt(i.descriptor,this._desc)}else if((0,o.i)(i)){let e;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),kt(i)?(this._depthStencilTexture=i,e=i.descriptor):this._depthStencilTexture=new y.T(this._context,i),this._validateTextureDimensions(e,this._desc)}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(y.R.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(36064);return e&&kt(e)?e:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return P(this.colorAttachment)+P(this.depthStencilAttachment)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&kt(t)?t:null}framebufferTexture2D(e,t,r=36064,i=3553,o=0){t.framebufferTexture2D(t.FRAMEBUFFER,r,i,e,o)}attachColorTexture(e,t=36064){if(!e)return;this._validateColorAttachmentPoint(t);const r=e.descriptor;this._validateTextureDimensions(r,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(e.glName,this._context.gl,t)),this._colorAttachments.set(t,e)}detachColorTexture(e=36064){const t=this._colorAttachments.get(e);if(kt(t)){const r=t;return this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,e)),this._colorAttachments.delete(e),r}}attachDepthStencilTexture(e){if((0,o.b)(e))return;const t=e.descriptor;34041!==t.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==t.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(t,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(e.glName,this._context.gl,y.D)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,y.D)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if((0,o.b)(e))return;const t=e.descriptor;if(34041!==t.internalFormat&&33189!==t.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),Gt(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===t.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,t,r,i,o,n,a){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,l=a.descriptor;3553!==a.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(e+r>s.width||t+i>s.height||o+r>l.width||n+i>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,d=c.bindTexture(a,y.T.TEXTURE_UNIT_FOR_UPDATES);c.bindFramebuffer(this),c.gl.copyTexSubImage2D(3553,0,o,n,e,t,r,i),c.bindTexture(d,y.T.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,n,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,n,a)}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=3553){var t,r,i,o;const n=this._context.gl;if(this._initialized)return void n.bindFramebuffer(n.FRAMEBUFFER,this.glName);this._glName&&n.deleteFramebuffer(this._glName);const a=this._context,s=n.createFramebuffer(),l=this._desc,c=null!=(t=l.colorTarget)?t:1,d=null!=(r=l.width)?r:1,u=null!=(i=l.height)?i:1;if(n.bindFramebuffer(n.FRAMEBUFFER,s),0===this._colorAttachments.size)if(0===c)this._colorAttachments.set(36064,function(e,t,r){return new y.T(e,{target:r,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:t.width,height:t.height})}(a,l,2===this.descriptor.colorTarget?34067:3553));else{const e=new Ut(a,{internalFormat:32854,width:d,height:u});this._colorAttachments.set(36064,e)}this._colorAttachments.forEach(((t,r)=>{t&&(kt(t)?this.framebufferTexture2D(t.glName,n,r,e):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,t.glName))}));const h=null!=(o=l.depthStencilTarget)?o:0;switch(h){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new Ut(a,{internalFormat:1===l.depthStencilTarget?33189:34041,width:d,height:u}));const e=1===h?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT;n.framebufferRenderbuffer(n.FRAMEBUFFER,e,n.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new Ut(a,{internalFormat:36168,width:d,height:u})),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.STENCIL_ATTACHMENT,n.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:d,height:u};this._depthStencilTexture=new y.T(a,e)}this.framebufferTexture2D(this._depthStencilTexture.glName,n,n.DEPTH_STENCIL_ATTACHMENT,e)}(0,y.w)()&&n.checkFramebufferStatus(n.FRAMEBUFFER)!==n.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=s,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach(((e,t)=>{if(kt(e))this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,t)),e.dispose();else if(e instanceof WebGLRenderbuffer){const r=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),r.framebufferRenderbuffer(r.FRAMEBUFFER,t,r.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(e)}})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,e,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateTextureDimensions(e,t){3553!==e.target&&34067!==e.target&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}_validateColorAttachmentPoint(e){if(-1===Ht._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;Ht._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else Ht._MAX_COLOR_ATTACHMENTS=1}const t=e-36064;t+1>Ht._MAX_COLOR_ATTACHMENTS&&Vt.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${Ht._MAX_COLOR_ATTACHMENTS} color attachments`)}}function kt(e){return"type"in e&&"texture"===e.type}function Gt(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}Ht._MAX_COLOR_ATTACHMENTS=-1;let $t,Wt=null,qt=null;async function jt(){return(0,o.b)(qt)&&(qt=function(){if((0,o.b)($t)){const e=e=>(0,Bt.g)(`esri/libs/basisu/${e}`);$t=r.e(3786).then(r.bind(r,73786)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return $t}(),Wt=await qt),qt}function Xt(e,t,r,i,o){const n=C(t?37496:37492),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Kt(e){return e.getNumImages()>=1&&!e.isUASTC()}function Yt(e){return e.getFaces()>=1&&e.isETC1S()}function Zt(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[1,37496]:[0,37492]:c?i?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);const f=m.length>1,p=f?9987:9729,g={...t,samplingMode:p,hasMipmap:f,internalFormat:u,width:o,height:n};return new y.T(e,g,{type:"compressed",levels:m})}const Qt=v.L.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Jt(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const er=Jt("DXT1"),tr=Jt("DXT3"),rr=Jt("DXT5");class ir extends et{constructor(e,t){super(),this.data=e,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Nt.E,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=ir.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,o.b)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,It.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,It.HK)(e.src)||(0,It.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,o.b)(e))return 0;if((0,o.L)(e)||(0,o.K)(e))return t.encoding===ir.KTX2_ENCODING?function(e,t){if((0,o.b)(Wt))return e.byteLength;const r=new Wt.KTX2File(new Uint8Array(e)),i=Yt(r)?Xt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===ir.BASIS_ENCODING?function(e,t){if((0,o.b)(Wt))return e.byteLength;const r=new Wt.BasisFile(new Uint8Array(e)),i=Kt(r)?Xt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ir.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if((0,o.i)(this._glTexture))return this._glTexture;if((0,o.i)(this._loadingPromise))return this._loadingPromise;const r=this.data;return(0,o.b)(r)?(this._glTexture=new y.T(e,this.createDescriptor(e),null),this._glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,o.L)(r)||(0,o.K)(r))&&this.params.encoding===ir.DDS_ENCODING?this.loadFromDDSData(e,r):((0,o.L)(r)||(0,o.K)(r))&&this.params.encoding===ir.KTX2_ENCODING?this.loadFromKTX2(e,r):((0,o.L)(r)||(0,o.K)(r))&&this.params.encoding===ir.BASIS_ENCODING?this.loadFromBasis(e,r):(0,o.K)(r)?this.loadFromPixelData(e,r):(0,o.L)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,o.b)(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,o.i)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const{textureData:i,internalFormat:o,width:n,height:a}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Qt.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Qt.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case er:o=8,n=33776;break;case tr:o=16,n=33778;break;case rr:o=16,n=33779;break;default:return Qt.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,l=r[4],d=r[3];0==(3&l)&&0==(3&d)||(Qt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const u=l,h=d;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,c.C)(l)&&(0,c.C)(d)||(Qt.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let m,f,p=r[1]+4;const g=[];for(let t=0;t<s;++t)f=(l+3>>2)*(d+3>>2)*o,m=new Uint8Array(e,p,f),g.push(m),p+=f,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:g},internalFormat:n,width:u,height:h}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=n,t.height=a,new y.T(e,t,i)}(e,this.createDescriptor(e),t),this._glTexture}loadFromKTX2(e,t){return this.loadAsync((()=>async function(e,t,r){(0,o.b)(Wt)&&(Wt=await jt());const i=new Wt.KTX2File(new Uint8Array(r));if(!Yt(i))return null;i.startTranscoding();const n=Zt(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this.createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){(0,o.b)(Wt)&&(Wt=await jt());const i=new Wt.BasisFile(new Uint8Array(r));if(!Kt(i))return null;i.startTranscoding();const n=Zt(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this.createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}loadFromPixelData(e,t){re(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new y.T(e,r,t),this._glTexture}loadFromURL(e,t,r){return this.loadAsync((async i=>{const o=await _(r,{signal:i});return this.loadFromImage(e,o,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const o=await(0,f.l)(r,r.src,!1,i);return this.loadFromImage(e,o,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,o.r)(d)},l=()=>{r.readyState>=2&&(s(),n(this.loadFromImage(e,r,t)))},c=e=>{s(),a(e||new g.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=(0,x.fu)(i,(()=>c((0,x.zE)())))}))))}loadFromImage(e,t,r){const i=ir.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||(0,c.C)(i.width)&&(0,c.C)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new y.T(e,o,t),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,y.i)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,c.A)(n),l=(0,c.A)(a);let d;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[n/s,a/l],d=new y.T(e,i),d.updateData(0,0,0,n,a,t);break;case 1:case null:case void 0:d=this.stretchToPowerOfTwo(e,t,i,o());break;default:(0,zt.n)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&d.generateMipmap(),d}stretchToPowerOfTwo(e,t,r,i){const o=new y.T(e,r),n=new Ht(e,{colorTarget:0,depthStencilTarget:0},o),a=new y.T(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=je,r=We,i=-1,o=1){let n=null;return n=t===Xe?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new E(e,r,{geometry:t},{geometry:S.createVertex(e,35044,n)})}(e),l=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),o}drawStretchedTexture(e,t,r,i,o,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(i),t.bindPipelineState(e),e.drawArrays(5,0,function(e,t){return e.vertexBuffers[t].size/e.layout[t][0].stride}(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,o.i)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.i)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.i)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}ir.DDS_ENCODING="image/vnd-ms.dds",ir.KTX2_ENCODING="image/ktx2",ir.BASIS_ENCODING="image/x.basis";var or=r(15215);function nr(e,t,r=32774,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}const ar={face:1029,mode:2305},sr={face:1028,mode:2305},lr=e=>2===e?ar:1===e?sr:null,cr={zNear:0,zFar:1},dr={r:!0,g:!0,b:!0,a:!0};function ur(e){return Tr.intern(e)}function hr(e){return wr.intern(e)}function mr(e){return Mr.intern(e)}function fr(e){return Cr.intern(e)}function pr(e){return Fr.intern(e)}function gr(e){return Dr.intern(e)}function vr(e){return Rr.intern(e)}function xr(e){return zr.intern(e)}class br{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function _r(e){return"["+e.join(",")+"]"}const Tr=new br(yr,(e=>({__tag:"Blending",...e})));function yr(e){return e?_r([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const wr=new br(Sr,(e=>({__tag:"Culling",...e})));function Sr(e){return e?_r([e.face,e.mode]):null}const Mr=new br(Ar,(e=>({__tag:"PolygonOffset",...e})));function Ar(e){return e?_r([e.factor,e.units]):null}const Cr=new br(Pr,(e=>({__tag:"DepthTest",...e})));function Pr(e){return e?_r([e.func]):null}const Fr=new br(Er,(e=>({__tag:"StencilTest",...e})));function Er(e){return e?_r([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const Dr=new br(Or,(e=>({__tag:"DepthWrite",...e})));function Or(e){return e?_r([e.zNear,e.zFar]):null}const Rr=new br(Lr,(e=>({__tag:"ColorWrite",...e})));function Lr(e){return e?_r([e.r,e.g,e.b,e.a]):null}const zr=new br(Nr,(e=>({__tag:"StencilWrite",...e})));function Nr(e){return e?_r([e.mask]):null}const Ir=new br((function(e){return e?_r([yr(e.blending),Sr(e.culling),Ar(e.polygonOffset),Pr(e.depthTest),Er(e.stencilTest),Or(e.depthWrite),Lr(e.colorWrite),Nr(e.stencilWrite)]):null}),(e=>({blending:ur(e.blending),culling:hr(e.culling),polygonOffset:mr(e.polygonOffset),depthTest:fr(e.depthTest),stencilTest:pr(e.stencilTest),depthWrite:gr(e.depthWrite),colorWrite:vr(e.colorWrite),stencilWrite:xr(e.stencilWrite)}))),Br=function(e,t,r,i,o=32774,n=32774,a=[0,0,0,0]){return{srcRgb:770,srcAlpha:1,dstRgb:771,dstAlpha:771,opRgb:o,opAlpha:n,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}(),Ur=nr(1,1),Vr=nr(0,771);function Hr(e){return 2===e?null:1===e?Vr:Ur}const kr={factor:-1,units:-2};function Gr(e){return e?kr:null}function $r(e){return 3===e||2===e?513:515}var Wr=r(29768);function qr(e){e.vertex.code.add(Pe`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(Pe`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Pe`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(Pe`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(Pe`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Pe`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(Pe`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function jr(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(qr),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(Pe`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?Pe`vec3 worldNormal = normalize(worldPos + localOrigin);`:Pe`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?Pe`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Pe`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(Pe`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Xr={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};function Kr(e){e.vertex.code.add(Pe`const float PI = 3.141592653589793;`),e.fragment.code.add(Pe`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Yr(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(Pe`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(Pe`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?Pe`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(Pe`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(Pe`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?Pe`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(Pe`vec4 vvColor() { return vec4(1.0); }`)}function Zr(e){e.fragment.include(Fe),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(Pe`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function Qr(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(Pe`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(Pe`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(Pe`void forwardLinearDepth() {}`)}function Jr(e){const t=e.fragment.code;t.add(Pe`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Pe`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Pe`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ei(e,t){const r=e.fragment.code;e.include(Kr),3===t.pbrMode||4===t.pbrMode?(r.add(Pe`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(Pe`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(Pe`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(Pe`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(Pe`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(Jr),r.add(Pe`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(Pe`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(Pe`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(Pe`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(Pe`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(Pe`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ti(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Pe`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Pe`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Pe`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function ri(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(Pe`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(Pe`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(Pe`void forwardTextureCoordinates() {}`)}function ii(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(Pe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(Pe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(Pe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(Pe`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function oi(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(Pe`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function ni({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Pe`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(Pe`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function ai(e){return!!(0,o.h)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}function si(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(ni,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[Pe`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,Pe`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?Pe`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,Pe`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,Pe`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?Pe`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:Pe``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,t){(function(e,t,r,i){for(let i=0;i<3;++i)Se[0]=e[i],we(Se,Me,1),t[i]=Me[0],r[i]=Me[1]})(t,li,ci),e.setUniform3fv("viewOriginHi",li),e.setUniform3fv("viewOriginLo",ci)}}(si||(si={}));const li=(0,c.b)(),ci=(0,c.b)();function di(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Pe`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ui(e,t){e.include(ri,t),e.fragment.code.add(Pe`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(Pe`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(di),e.fragment.code.add(Pe`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}const hi=(0,ae.f)(0,.6,.2);function mi(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(ui,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(Pe`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(Pe`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(Pe`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(Pe`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(Pe`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(Pe`float getBakedOcclusion() { return 1.0; }`),r.code.add(Pe`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(Pe`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function fi(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}function pi(e){e.vertex.code.add(Pe`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function gi(e){const t=Pe`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function vi(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(Pe`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(gi),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(Pe`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Pe`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function xi(e){e.attributes.add("position","vec3"),e.vertex.code.add(Pe`vec3 positionModel() { return position; }`)}function bi(e){e.vertex.code.add(Pe`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Pe.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Pe.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Pe.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Pe.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function _i(e,t){t.symbolColor?(e.include(bi),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(Pe`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(Pe`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Ti(e,t){e.include(xi),e.vertex.include(ni,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(Pe`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(Pe`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function yi(e,t){0===t.normalType||1===t.normalType?(e.include(vi,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(Pe`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(Ti,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Pe`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?Pe`normalize(vPositionWorldCameraRelative);`:Pe`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(Pe`void forwardNormal() {}`)}function wi(e,t){const r=e.vertex.code,i=e.fragment.code;1!==t.output&&3!==t.output||(e.include(Ye,{linearDepth:!0}),e.include(ri,t),e.include(Yr,t),e.include(Dt,t),e.include(St,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Pe`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(Ft,t),i.add(Pe`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(Ye,{linearDepth:!1}),e.include(vi,t),e.include(yi,t),e.include(ri,t),e.include(Yr,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(Pe`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?Pe`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(St,t),e.include(Ft,t),i.add(Pe`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?Pe`
            vec3 normal = screenDerivativeNormal(vPositionView);`:Pe`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(Ye,{linearDepth:!1}),e.include(ri,t),e.include(Yr,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Pe`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(St,t),e.include(Ft,t),e.include(Pt),i.add(Pe`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Si(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(Pe`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(Pe`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(Pe`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(ui,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(Pe`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Mi(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(Pe`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(Pe`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function Ai(e,t){const r=e.fragment;e.include(oi),e.include(Mi,t),0!==t.pbrMode&&e.include(ei,t),e.include(ii,t),t.receiveShadows&&e.include(Zr,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(Kr),r.code.add(Pe`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(Pe`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?Pe`normalize(vPosWorld)`:Pe`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(Pe`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(Pe`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(Pe`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(Pe`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(Pe`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(Pe`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(Pe`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?Pe`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Pe`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Ci(e,t){const r=e.fragment;r.code.add(Pe`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(Pe`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(Pe`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(Pe`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function Pi(e,t){const r=Pe`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;(0,y.w)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}function Fi(e){e.include(Ke),e.code.add(Pe`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Pe.int(1)}) {
        return allMixed;
      }
      else if (mode == ${Pe.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Pe.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Pe.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Pe.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=(0,a.c)(),this.worldFromModel_TH=(0,c.b)(),this.worldFromModel_TL=(0,c.b)()}},e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,c.b)(),this.worldFromView_TL=(0,c.b)(),this.viewFromCameraRelative_RS=(0,a.c)(),this.projFromView=(0,l.c)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Ti||(Ti={})),function(e){e.bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}}(yi||(yi={}));const Ei=Object.freeze({__proto__:null,build:function(e){const t=new Re,r=t.vertex.code,i=t.fragment.code;return t.include(Pi,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(xi),t.varyings.add("vpos","vec3"),t.include(Yr,e),t.include(si,e),t.include(jr,e),0!==e.output&&7!==e.output||(t.include(vi,e),t.include(Ye,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(pi),t.include(Si,e),t.include(yi,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(ri,e),t.include(Qr,e),t.include(_i,e),t.include(ti,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(Pe`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Pe.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?Pe`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(St,e),t.include(Ft,e),e.multipassTerrainEnabled&&(t.fragment.include(Ee),t.include(Et,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Fi),i.add(Pe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Pe`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Pe`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Pe`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(St,e),t.include(Ai,e),t.include(Mi,e),t.include(Ft,e),e.receiveShadows&&t.include(Zr,e),e.multipassTerrainEnabled&&(t.fragment.include(Ee),t.include(Et,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(mi,e),t.include(ei,e),t.fragment.include(Fi),t.include(Ci,e),i.add(Pe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Pe`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?Pe`
        vec3 normal = screenDerivativeNormal(localvpos);`:Pe`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Pe`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Pe`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?Pe`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Pe`vec3 normalGround = normalize(vpos + localOrigin);`:Pe`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Pe``}
        ${1===e.pbrMode||2===e.pbrMode?Pe`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(wi,e),t}});class Di extends class{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=(0,o.y)(this._program),this._pipeline=this._config=null}reload(e){(0,o.y)(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=Di.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:ai(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new qe(e.rctx,i,We)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),function(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}(this.program,t)),7===o&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",pt[e.colorMixMode])),0===o?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",pt[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&fi(this.program,e,this.configuration.isSchematic)):4===o&&function(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}(this.program,t),function(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}(this.program,e),function(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=Xr){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}(this.program,e,t),function(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f("screenSizePerspectiveAlignment",i.divisor,i.offset,i.minPixelSize,o)}(e.screenSizePerspective,this.program),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,c.k)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,r){(0,s.t)(Ze,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Ze)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&si.bindCustomOrigin(this.program,t),function(e,t,r,i){t.slicePlaneEnabled&&((0,o.i)(r)?(i?((0,c.s)(Mt,r.origin,i),e.setUniform3fv("slicePlaneOrigin",Mt)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",c.Z),e.setUniform3fv("slicePlaneBasis2",c.Z),e.setUniform3fv("slicePlaneOrigin",c.Z)))}(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return function(e){return Ir.intern(e)}({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Br:Hr(e),culling:Oi(r)&&lr(r.cullFace),depthTest:{func:$r(e)},depthWrite:i||o?r.writeDepth&&cr:null,colorWrite:dr,stencilWrite:r.sceneHasOcludees?Ot:null,stencilTest:r.sceneHasOcludees?t?Lt:Rt:null,polygonOffset:i||o?null:Gr(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Oi(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Di.shader=new Ge(Ei,(()=>Promise.resolve().then((()=>Ei))));class Ri extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,Wr._)([$e({count:8})],Ri.prototype,"output",void 0),(0,Wr._)([$e({count:4})],Ri.prototype,"alphaDiscardMode",void 0),(0,Wr._)([$e({count:3})],Ri.prototype,"doubleSidedMode",void 0),(0,Wr._)([$e()],Ri.prototype,"isSchematic",void 0),(0,Wr._)([$e()],Ri.prototype,"vertexColors",void 0),(0,Wr._)([$e()],Ri.prototype,"offsetBackfaces",void 0),(0,Wr._)([$e()],Ri.prototype,"symbolColors",void 0),(0,Wr._)([$e()],Ri.prototype,"vvSize",void 0),(0,Wr._)([$e()],Ri.prototype,"vvColor",void 0),(0,Wr._)([$e()],Ri.prototype,"verticalOffset",void 0),(0,Wr._)([$e()],Ri.prototype,"receiveShadows",void 0),(0,Wr._)([$e()],Ri.prototype,"slicePlaneEnabled",void 0),(0,Wr._)([$e()],Ri.prototype,"sliceHighlightDisabled",void 0),(0,Wr._)([$e()],Ri.prototype,"receiveAmbientOcclusion",void 0),(0,Wr._)([$e()],Ri.prototype,"screenSizePerspective",void 0),(0,Wr._)([$e()],Ri.prototype,"textureAlphaPremultiplied",void 0),(0,Wr._)([$e()],Ri.prototype,"hasColorTexture",void 0),(0,Wr._)([$e()],Ri.prototype,"usePBR",void 0),(0,Wr._)([$e()],Ri.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,Wr._)([$e()],Ri.prototype,"hasEmissionTexture",void 0),(0,Wr._)([$e()],Ri.prototype,"hasOcclusionTexture",void 0),(0,Wr._)([$e()],Ri.prototype,"hasNormalTexture",void 0),(0,Wr._)([$e()],Ri.prototype,"instanced",void 0),(0,Wr._)([$e()],Ri.prototype,"instancedColor",void 0),(0,Wr._)([$e()],Ri.prototype,"instancedDoublePrecision",void 0),(0,Wr._)([$e()],Ri.prototype,"vertexTangents",void 0),(0,Wr._)([$e()],Ri.prototype,"normalsTypeDerivate",void 0),(0,Wr._)([$e()],Ri.prototype,"writeDepth",void 0),(0,Wr._)([$e()],Ri.prototype,"sceneHasOcludees",void 0),(0,Wr._)([$e()],Ri.prototype,"transparent",void 0),(0,Wr._)([$e()],Ri.prototype,"enableOffset",void 0),(0,Wr._)([$e({count:3})],Ri.prototype,"cullFace",void 0),(0,Wr._)([$e({count:4})],Ri.prototype,"transparencyPassType",void 0),(0,Wr._)([$e()],Ri.prototype,"multipassTerrainEnabled",void 0),(0,Wr._)([$e()],Ri.prototype,"cullAboveGround",void 0);const Li=Object.freeze({__proto__:null,build:function(e){const t=new Re,r=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(xi),t.varyings.add("vpos","vec3"),t.include(Yr,e),t.include(si,e),t.include(jr,e),0!==e.output&&7!==e.output||(t.include(vi,e),t.include(Ye,{linearDepth:!1}),e.offsetBackfaces&&t.include(pi),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(ri,e),t.include(Qr,e),t.include(_i,e),t.include(ti,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(Pe`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Pe.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?Pe`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(St,e),t.include(Ft,e),e.multipassTerrainEnabled&&(t.fragment.include(Ee),t.include(Et,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(Fi),i.add(Pe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Pe`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Pe`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Pe`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Pe`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(St,e),t.include(Ai,e),t.include(Mi,e),t.include(Ft,e),e.receiveShadows&&t.include(Zr,e),e.multipassTerrainEnabled&&(t.fragment.include(Ee),t.include(Et,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(mi,e),t.include(ei,e),t.fragment.include(Fi),i.add(Pe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Pe`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Pe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Pe`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Pe`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Pe`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Pe`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Pe`vec3 normalGround = normalize(vpos + localOrigin);`:Pe`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Pe``}
        ${1===e.pbrMode||2===e.pbrMode?Pe`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(wi,e),t}});class zi extends Di{initializeProgram(e){const t=zi.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:ai(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new qe(e.rctx,i,We)}}zi.shader=new Ge(Li,(()=>Promise.resolve().then((()=>Li))));class Ni extends vt{constructor(e){super(e,Bi),this.supportsEdges=!0,this.techniqueConfig=new Ri,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,or.n)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}(this.parameters),this.instanceBufferLayout=e.instanced?Vi(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(o||n||i)?!!a||s:r?a?l:s:o||n||i?!!a||s:a?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,n,a,s){if(null!==this.parameters.verticalOffset){const e=i.camera;(0,c.e)(qi,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=(0,c.n)($i,qi);break;case 2:t=(0,c.m)($i,Gi)}let o=0;if(null!==this.parameters.verticalOffset){const r=(0,c.s)(ji,qi,e.eye),i=(0,c.l)(r),n=(0,c.f)(r,r,1/i);let a=null;this.parameters.screenSizePerspective&&(a=(0,c.d)(t,n)),o+=function(e,t,r,i,o){let n=(r.screenLength||0)*e.pixelRatio;o&&(n=function(e,t,r,i){return function(e,t){return Math.max((0,c.K)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return it.scale=Math.min(i.divisor/(t-i.offset),1),it.factor=function(e){return Math.abs(e*e*e)}(e),it.minPixelSize=i.minPixelSize,it.paddingPixels=o,it}(t,r,i))}(n,i,t,o));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,c.c)(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.parameters.verticalOffset,a,this.parameters.screenSizePerspective)}(0,c.f)(t,t,o),(0,c.t)(Wi,t,i.transform.inverseRotation),n=(0,c.s)(Hi,n,Wi),a=(0,c.s)(ki,a,Wi)}var l;nt(e,t,i,n,a,(l=i.verticalOffset,(0,o.i)(l)?(Ae.offset=l,Ae):null),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new Ii(e):null}createBufferWriter(){return new Ui(this.vertexBufferLayout,this.instanceBufferLayout)}}class Ii extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return 2}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,o.p)(this._texture),this._textureNormal=(0,o.p)(this._textureNormal),this._textureEmissive=(0,o.p)(this._textureEmissive),this._textureOcclusion=(0,o.p)(this._textureOcclusion),this._textureMetallicRoughness=(0,o.p)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(e){((0,o.b)(this._texture)||e!==this._texture.id)&&(this._texture=(0,o.p)(this._texture),this._textureId=e,this._acquire(this._textureId).then((e=>this._texture=e)))}bindTextures(e){(0,o.i)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,o.i)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,o.i)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,o.i)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,o.i)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,o.i)(this._texture)?this._texture.glTexture:null;(0,o.i)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return(0,o.b)(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).then((e=>this._disposed?((0,o.p)(e),null):e)).finally((()=>--this._numLoading)))}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?zi:Di,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Bi={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,a.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class Ui{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,o,n){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case"position":{re(3===t.size);const e=o.getField(a,u.a);e&&_t(s,t.data,r,e,n);break}case"normal":{re(3===t.size);const e=o.getField(a,u.a);e&&Tt(s,t.data,i,e,n);break}case"uv0":{re(2===t.size);const e=o.getField(a,u.e);e&&xt(s,t.data,e,n);break}case"color":{re(3===t.size||4===t.size);const e=o.getField(a,u.b);e&&wt(s,t.data,t.size,e,n);break}case"symbolColor":{re(3===t.size||4===t.size);const e=o.getField(a,u.b);e&&wt(s,t.data,t.size,e,n);break}case"tangent":{re(4===t.size);const e=o.getField(a,u.g);e&&yt(s,t.data,i,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}function Vi(e){let t=(0,or.n)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const Hi=(0,c.b)(),ki=(0,c.b)(),Gi=(0,c.k)(0,0,1),$i=(0,c.b)(),Wi=(0,c.b)(),qi=(0,c.b)(),ji=(0,c.b)(),Xi=v.L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ki(e,t){const r=await async function(e,t){const r=(0,o.i)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,p.r)(t.request(e,"json",r));return!0===i.ok?i.value:((0,x.r9)(i.error),void Yi(i.error.details.url))}(e,r,t);const i=await(0,p.r)((0,f.default)(e,(0,o.u)(t)));return!0===i.ok?i.value.data:((0,x.r9)(i.error),void Yi(i.error))}(e,t),i=await async function(e,t){const r=[];for(const i in e){const n=e[i],a=n.images[0].data;if(!a){Xi.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+a,l="/textureDefinitions/"+i,c="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Ji(c)},u=(0,o.i)(t)&&t.disableTextures?Promise.resolve(null):_(s,t);r.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}(r.textureDefinitions,t);return{resource:r,textures:i}}function Yi(e){throw new g.Z("",`Request for object resource failed: ${e}`)}function Zi(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Xi.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Xi.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Xi.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Xi.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Xi.warn("Indexed geometries must specify faces"),i=!1;break}default:Xi.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Xi.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Xi.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Qi(e){const t=(0,d.b)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.i)(r)&&((0,d.u)(t,r.getBBMin()),(0,d.u)(t,r.getBBMax()))})),t}function Ji(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function eo(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const to=new b.V(1,2,"wosr");async function ro(e,t){const r=io((0,i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Ki(r.url,t)),i=function(e,t){const r=[],i=[],n=[],a=[],s=e.resource,l=b.V.parse(s.version||"1.0","wosr");to.validate(l);const d=s.model.name,u=s.model.geometries,h=s.materialDefinitions,m=e.textures;let f=0;const p=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!Zi(s))continue;const l=eo(s),d=s.params.vertexAttributes,g=[];for(const e in d){const t=d[e],r=t.values;g.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const v=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)v.push([t,new Uint32Array(e[t].values)])}const x=m&&m[l.texture];if(x&&!p.has(l.texture)){const{image:e,params:t}=x,r=new ir(e,t);a.push(r),p.set(l.texture,r)}const b=p.get(l.texture),_=b?b.id:void 0;let T=n[l.material]?n[l.material][l.texture]:null;if(!T){const e=h[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=x?Ji(x.alphaChannelUsage):void 0,s={ambient:(0,c.U)(e.diffuse),diffuse:(0,c.U)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.i)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),T=new Ni(s),n[l.material]||(n[l.material]={}),n[l.material][l.texture]=T}i.push(T);const y=new tt(g,v);f+=v.position?v.position.length:0,r.push(y)}return{name:d,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:Qi(r),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,m.l)(new m.D(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,o.j)(n.model.meta,"ESRI_proxyEllipsoid");n.meta.isEsriSymbolResource&&(0,o.i)(a)&&-1!==n.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const n of i.parts){const i=n.attributes.normal;if((0,o.b)(i))return;const a=n.attributes.position,d=a.count,h=(0,c.b)(),f=(0,c.b)(),p=(0,c.b)(),g=(0,m.c)(u.b,d),v=(0,m.c)(u.a,d),x=(0,s.a)((0,l.c)(),n.transform);for(let o=0;o<d;o++){a.getVec(o,f),i.getVec(o,h),(0,c.j)(f,f,n.transform),(0,c.s)(p,f,t.center),(0,c.aa)(p,p,t.radius);const s=p[2],l=(0,c.l)(p),d=Math.min(.45+.55*l*l,1);(0,c.aa)(p,p,t.radius),(0,c.j)(p,p,x),(0,c.n)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(p,p,h,s>-1?.2:Math.min(-4*s-3.8,1)),v.setVec(o,p),g.set(o,0,255*d),g.set(o,1,255*d),g.set(o,2,255*d),g.set(o,3,255)}n.attributes.normal=v,n.attributes.color=g}}}(n,a);const d=n.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:n.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:n.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=oo(n,d,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=oo(n,d,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}const f=oo(n,d,h);return{lods:f,referenceBoundingBox:f[0].boundingBox,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}function io(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function oo(e,t,r,i){const s=e.model,l=(0,a.c)(),c=new Array,f=new Map,p=new Map;return s.lods.forEach(((e,a)=>{if(void 0!==i&&a!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,o.i)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,d.b)()};c.push(g),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=s.materials.get(e.material),c=(0,o.i)(e.attributes.texCoord0),v=(0,o.i)(e.attributes.normal),x=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(a.alphaMode);if(!f.has(i)){if(c){if((0,o.i)(a.textureColor)&&!p.has(a.textureColor)){const e=s.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==x};p.set(a.textureColor,new ir(e.data,t))}if((0,o.i)(a.textureNormal)&&!p.has(a.textureNormal)){const e=s.textures.get(a.textureNormal);p.set(a.textureNormal,new ir(e.data,e.parameters))}if((0,o.i)(a.textureOcclusion)&&!p.has(a.textureOcclusion)){const e=s.textures.get(a.textureOcclusion);p.set(a.textureOcclusion,new ir(e.data,e.parameters))}if((0,o.i)(a.textureEmissive)&&!p.has(a.textureEmissive)){const e=s.textures.get(a.textureEmissive);p.set(a.textureEmissive,new ir(e.data,e.parameters))}if((0,o.i)(a.textureMetallicRoughness)&&!p.has(a.textureMetallicRoughness)){const e=s.textures.get(a.textureMetallicRoughness);p.set(a.textureMetallicRoughness,new ir(e.data,e.parameters))}}const n=a.color[0]**(1/m.C),l=a.color[1]**(1/m.C),d=a.color[2]**(1/m.C),u=a.emissiveFactor[0]**(1/m.C),h=a.emissiveFactor[1]**(1/m.C),g=a.emissiveFactor[2]**(1/m.C),b=(0,o.i)(a.textureColor)&&c?p.get(a.textureColor):null;f.set(i,new Ni({...t,transparent:0===x,textureAlphaMode:x,textureAlphaCutoff:a.alphaCutoff,diffuse:[n,l,d],ambient:[n,l,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:v?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.i)(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,o.i)(a.textureNormal)&&c?p.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.i)(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:(0,o.i)(a.textureOcclusion)&&c?p.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,o.i)(a.textureEmissive)&&c?p.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.i)(a.textureMetallicRoughness)&&c?p.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[u,h,g],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const b=function(e,t){switch(t){case 4:return(0,m.e)(e);case 5:return(0,m.d)(e);case 6:return(0,m.b)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),_=e.attributes.position.count,T=(0,m.c)(u.a,_);(0,h.t)(T,e.attributes.position,e.transform);const y=[["position",{data:T.typedBuffer,size:T.elementCount,exclusive:!0}]],w=[["position",b]];if((0,o.i)(e.attributes.normal)){const t=(0,m.c)(u.a,_);(0,n.n)(l,e.transform),(0,h.a)(t,e.attributes.normal,l),y.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["normal",b])}if((0,o.i)(e.attributes.tangent)){const t=(0,m.c)(u.g,_);(0,n.n)(l,e.transform),(0,m.t)(t,e.attributes.tangent,l),y.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["tangent",b])}if((0,o.i)(e.attributes.texCoord0)){const t=(0,m.c)(u.e,_);(0,m.n)(t,e.attributes.texCoord0),y.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["uv0",b])}if((0,o.i)(e.attributes.color)){const t=(0,m.c)(u.b,_);if(4===e.attributes.color.elementCount)e.attributes.color instanceof u.g?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof u.b?(0,m.a)(t,e.attributes.color):e.attributes.color instanceof u.l&&(0,m.s)(t,e.attributes.color,1/256);else{(0,m.f)(t,255,255,255,255);const r=new u.m(t.buffer,0,4);e.attributes.color instanceof u.a?(0,h.s)(r,e.attributes.color,255):e.attributes.color instanceof u.m?(0,h.c)(r,e.attributes.color):e.attributes.color instanceof u.n&&(0,h.s)(r,e.attributes.color,1/256)}y.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push(["color",b])}const S=new tt(y,w);g.stageResources.geometries.push(S),g.stageResources.materials.push(f.get(i)),c&&((0,o.i)(a.textureColor)&&g.stageResources.textures.push(p.get(a.textureColor)),(0,o.i)(a.textureNormal)&&g.stageResources.textures.push(p.get(a.textureNormal)),(0,o.i)(a.textureOcclusion)&&g.stageResources.textures.push(p.get(a.textureOcclusion)),(0,o.i)(a.textureEmissive)&&g.stageResources.textures.push(p.get(a.textureEmissive)),(0,o.i)(a.textureMetallicRoughness)&&g.stageResources.textures.push(p.get(a.textureMetallicRoughness))),g.numberOfVertices+=_;const M=S.boundingInfo;(0,o.i)(M)&&((0,d.u)(g.boundingBox,M.getBBMin()),(0,d.u)(g.boundingBox,M.getBBMax()))}))})),c}const no=Object.freeze({__proto__:null,fetch:ro,parseUrl:io,gltfToEngineResources:oo})},56697:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}r.d(t,{b:()=>i,f:()=>o}),o(1,1,1),o(1,0,0),o(0,1,0),o(0,0,1)}}]);