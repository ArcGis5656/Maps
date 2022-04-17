/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{L as t}from"./Logger.js";import{i as e,b as i}from"../core/lang.js";import{R as r,T as s,D as h,w as n}from"./Texture.js";import{g as o}from"./Program.js";class c{constructor(t,e){this._context=t,this._desc=e,this._context.instanceCounter.increment(r.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,e.internalFormat,e.width,e.height)}get descriptor(){return this._desc}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(r.Renderbuffer,this),this._context=null)}}const a=t.getLogger("esri.views.webgl.FrameBufferObject");class l{constructor(t,i,h=null,n=null){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...i},t.instanceCounter.increment(r.Framebuffer,this),e(h)){Array.isArray(h)||(h=[h]);for(let e=0;e<h.length;++e){var o,a;const i=h[e];let r;d(i)?(r=i.descriptor,this._colorAttachments.set(36064+e,i)):(r=i,this._colorAttachments.set(36064+e,new s(t,i))),0!==(null==(o=this._desc)?void 0:o.colorTarget)&&2!==(null==(a=this._desc)?void 0:a.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateColorAttachmentPoint(36064+e),this._validateTextureDimensions(r,this._desc)}}if(n instanceof c){var l;const t=null!=(l=this._desc.depthStencilTarget)?l:3;2===t?this._stencilAttachment=n:1===t||3===t?this._depthAttachment=n:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),_(n.descriptor,this._desc)}else if(e(n)){let t;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),d(n)?(this._depthStencilTexture=n,t=n.descriptor):this._depthStencilTexture=new s(this._context,n),this._validateTextureDimensions(t,this._desc)}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();if(this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(r.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&d(t)?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return o(this.colorAttachment)+o(this.depthStencilAttachment)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&d(e)?e:null}framebufferTexture2D(t,e,i=36064,r=3553,s=0){e.framebufferTexture2D(e.FRAMEBUFFER,i,r,t,s)}attachColorTexture(t,e=36064){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDimensions(i,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(t.glName,this._context.gl,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=36064){const e=this._colorAttachments.get(t);if(d(e)){const i=e;return this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,t)),this._colorAttachments.delete(t),i}}attachDepthStencilTexture(t){if(i(t))return;const e=t.descriptor;34041!==e.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==e.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(e,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(t.glName,this._context.gl,h)),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,h)),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(i(t))return;const e=t.descriptor;if(34041!==e.internalFormat&&33189!==e.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),_(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===e.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,e,i,r,h,n,o){(t<0||e<0||h<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const c=this._desc,a=o.descriptor;3553!==o.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>c.width||e+r>c.height||h+i>a.width||n+r>a.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context,d=l.bindTexture(o,s.TEXTURE_UNIT_FOR_UPDATES);l.bindFramebuffer(this),l.gl.copyTexSubImage2D(3553,0,h,n,t,e,i,r),l.bindTexture(d,s.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,h,n){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this);this._context.gl.readPixels(t,e,i,r,s,h,n)}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=3553){var e,i,r,h;const o=this._context.gl;if(this._initialized)return void o.bindFramebuffer(o.FRAMEBUFFER,this.glName);this._glName&&o.deleteFramebuffer(this._glName);const a=this._context,l=o.createFramebuffer(),_=this._desc,u=null!=(e=_.colorTarget)?e:1,f=null!=(i=_.width)?i:1,m=null!=(r=_.height)?r:1;if(o.bindFramebuffer(o.FRAMEBUFFER,l),0===this._colorAttachments.size)if(0===u)this._colorAttachments.set(36064,function(t,e,i){return new s(t,{target:i,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e.width,height:e.height})}(a,_,2===this.descriptor.colorTarget?34067:3553));else{const t=new c(a,{internalFormat:32854,width:f,height:m});this._colorAttachments.set(36064,t)}this._colorAttachments.forEach(((e,i)=>{e&&(d(e)?this.framebufferTexture2D(e.glName,o,i,t):o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,e.glName))}));const T=null!=(h=_.depthStencilTarget)?h:0;switch(T){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new c(a,{internalFormat:1===_.depthStencilTarget?33189:34041,width:f,height:m}));const t=1===T?o.DEPTH_ATTACHMENT:o.DEPTH_STENCIL_ATTACHMENT;o.framebufferRenderbuffer(o.FRAMEBUFFER,t,o.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new c(a,{internalFormat:36168,width:f,height:m})),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.STENCIL_ATTACHMENT,o.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const t={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:f,height:m};this._depthStencilTexture=new s(a,t)}this.framebufferTexture2D(this._depthStencilTexture.glName,o,o.DEPTH_STENCIL_ATTACHMENT,t)}if(n()){o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!")}this._glName=l,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach(((t,e)=>{if(d(t))this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,e)),t.dispose();else if(t instanceof WebGLRenderbuffer){const i=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(i.FRAMEBUFFER,e,i.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t)}})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,t,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateTextureDimensions(t,e){3553!==t.target&&34067!==t.target&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}_validateColorAttachmentPoint(t){if(-1===l._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;l._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else l._MAX_COLOR_ATTACHMENTS=1}const e=t-36064;e+1>l._MAX_COLOR_ATTACHMENTS&&a.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${l._MAX_COLOR_ATTACHMENTS} color attachments`)}}function d(t){return"type"in t&&"texture"===t.type}function _(t,e){void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}l._MAX_COLOR_ATTACHMENTS=-1;export{l as F,c as R};
