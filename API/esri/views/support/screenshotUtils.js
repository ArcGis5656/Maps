// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/mathUtils"],function(p,W,D){function E(a,b){const {format:d,quality:k,rotation:f,disableDecorations:h}=a||{};var c=B(a,b.padding);var e=b.width-c.left-c.right;b=b.height-c.top-c.bottom;c={x:0,y:0,width:e,height:b};if(a&&a.area){null!=a.area.x&&(c.x=Math.floor(a.area.x));null!=a.area.y&&(c.y=Math.floor(a.area.y));var g=null!=a.area.width?Math.floor(a.area.width):null,m=null!=a.area.height?Math.floor(a.area.height):null;c.width=e-c.x;c.height=b-c.y;null!=
g&&null!=m?(c.width=Math.min(c.width,g),c.height=Math.min(c.height,m)):null==g&&null!=m?(g=Math.min(c.width,g),c.height*=g/c.width,c.width=g):null!=g&&null==m&&(g=Math.min(c.height,m),c.width*=g/c.height,c.height=g)}c=O(c,a);g=Math.floor(Math.max(c.x,0));m=Math.floor(Math.max(c.y,0));e={x:g,y:m,width:Math.floor(Math.min(c.width,e-g)),height:Math.floor(Math.min(c.height,b-m))};b=e.width/e.height;c=c.width/c.height;c!==b&&(c>b?(b=Math.floor(e.width/c),e={x:e.x,y:Math.floor(e.y+(e.height-b)/2),width:e.width,
height:b}):(b=Math.floor(e.height*c),e={x:Math.floor(e.x+(e.width-b)/2),y:e.y,width:b,height:e.height}));const {width:n,height:r}=P(a,e);b=F(d);c=G[b];c=D.clamp(null!=k?k:c,0,100);return{format:b,quality:c,area:e,width:n,height:r,rotation:f,disableDecorations:!!h,ignoreBackground:!(!a||!a.ignoreBackground),ignorePadding:!(!a||!a.ignorePadding)}}function H(a,b){return a.toDataURL(Q[b.format],b.quality/100)}function I(a,b,d){d||(v||(v=document.createElement("canvas"),v.width=1,v.height=1),d=v);return d.getContext("2d").createImageData(a,
b)}function P(a,b){if(!a)return b;const d=a.width;a=a.height;if(null!=d&&null!=a)return{width:Math.floor(d),height:Math.floor(a)};if(null==d&&null==a)return b;b=b.width/b.height;return null==a?{width:Math.floor(d),height:Math.floor(d/b)}:{width:Math.floor(a*b),height:Math.floor(a)}}function O(a,b){if(!b||null==b.width||null==b.height)return a;b=b.width/b.height;const d=a.width/a.height;if(d===b)return a;if(d<b)return b=Math.floor(a.height*b),a.x-=(b-a.width)/2,a.width=b,a;b=Math.floor(a.width/b);
a.y-=(b-a.height)/2;a.height=b;return a}function B(a,b){return!b||a&&a.ignorePadding?R:b}function F(a){switch(a){case "png":case "jpg":case "jpeg":return a;case null:case void 0:return"png";default:return"png"}}let v=null,w=!0;const Q={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},G={png:100,jpg:98,jpeg:98},R={top:0,right:0,bottom:0,left:0};p.completeUserSettings=E;p.createEmptyImageData=function(a,b,d){if(!a||!b)throw Error("Cannot construct image data without dimensions");if(w)try{return new ImageData(a,
b)}catch(k){w=!1}return I(a,b,d)};p.encodeResult=function(a,b,d,k){if(k.premultipliedAlpha){{var f=a.data;const c=f.length;for(let e=0;e<c;e+=4){var h=f[e+3];0<h&&(h/=255,f[e+0]/=h,f[e+1]/=h,f[e+2]/=h)}}}d.width=a.width;d.height=a.height;f=d.getContext("2d");f.putImageData(a,0,0);k.flipY&&(f.save(),f.globalCompositeOperation="copy",f.scale(1,-1),f.translate(0,-f.canvas.height),f.drawImage(f.canvas,0,0),f.restore());a=f.getImageData(0,0,a.width,a.height);b=H(d,b);d.width=0;d.height=0;return{dataUrl:b,
data:a}};p.getFormatAndQuality=function(a,b){a=F(a);const d=G[a];b=D.clamp(null!=b?b:d,0,100);return{format:a,quality:b}};p.getMaximumResolutionScale=function(a,b){return b/Math.max(a[0],a[1])};p.resampleHermite=function(a,b,d,k=0,f=0,h=a.width-k,c=a.height-f,e=!1){const {data:g}=a,{width:m,height:n,data:r}=b;h/=m;c/=n;const S=Math.ceil(h/2),T=Math.ceil(c/2);a=a.width;for(let q=0;q<n;q++)for(let t=0;t<m;t++){const x=4*(t+(e?n-q-1:q)*m);let y=0,J=0,K=0,L=0,M=0,N=0;const U=(q+.5)*c;for(let z=Math.floor(q*
c);z<(q+1)*c;z++){var C=Math.abs(U-(z+.5))/T;const V=(t+.5)*h;C*=C;for(let A=Math.floor(t*h);A<(t+1)*h;A++){var l=Math.abs(V-(A+.5))/S;l=Math.sqrt(C+l*l);if(1<=l)continue;l=2*l*l*l-3*l*l+1;const u=4*(k+A+(f+z)*a);N+=l*g[u+3];J+=l;!d&&255>g[u+3]&&(l=l*g[u+3]/255);K+=l*g[u];L+=l*g[u+1];M+=l*g[u+2];y+=l}}r[x]=K/y;r[x+1]=L/y;r[x+2]=M/y;r[x+3]=N/J}return b};p.screenshotSuperSampleSettings=function(a,b,d){if(!b)return a;const {framebufferWidth:k,framebufferHeight:f,pixelRatio:h,region:c}=a;b=B(a,d);d=b.left+
b.right;const e=b.top+b.bottom,g=k-d,m=f-e,n=Math.min(8,Math.min((2048-d)/g,(2048-e)/m));return 1.5>n?a:{...a,framebufferWidth:Math.round(g*n)+d,framebufferHeight:Math.round(m*n)+e,pixelRatio:h*n,resample:{region:{x:Math.round((c.x-b.left)*n)+b.left,y:Math.round((c.y-b.top)*n)+b.top,width:Math.round(c.width*n),height:Math.round(c.height*n)},width:k,height:f}}};p.toDataUrl=H;p.toRenderSettings=function(a,b){const d=E(a,b),k=d.area,f=d.width/k.width,h=B(d,b.padding),c=h.left+h.right,e=h.top+h.bottom;
return{framebufferWidth:Math.floor((b.width-c)*f+c),framebufferHeight:Math.floor((b.height-e)*f+e),region:{x:Math.floor(k.x*f)+h.left,y:Math.floor(k.y*f)+h.top,width:d.width,height:d.height},format:d.format,quality:d.quality,rotation:d.rotation,pixelRatio:f,layers:a&&a.layers?a.layers:[],disableDecorations:d.disableDecorations,ignoreBackground:d.ignoreBackground,ignorePadding:d.ignorePadding}};p.wrapImageData=function(a,b,d,k){if(!b||!d)throw Error("Cannot construct image data without dimensions");
if(w)try{return new ImageData(a,b,d)}catch(f){w=!1}b=I(b,d,k);b.data.set(a,0);return b};Object.defineProperty(p,"__esModule",{value:!0})});