// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../core/Error ../../core/screenUtils ./gfxUtils ./previewUtils ./renderUtils".split(" "),function(y,z,A,q,v,u,B){function C(f,a){const b=D.getContext("2d"),c=[];a&&(a.weight&&c.push(a.weight),a.size&&c.push(a.size+"px"),a.family&&c.push(a.family));b.font=c.join(" ");return b.measureText(f).width}function E(f){if(0===f.length)return 0;if(2<f.length){const a=q.px2pt(1),b=parseFloat(f);switch(f.slice(-2)){case "px":return b;case "pt":return b*a;case "in":return 72*b*a;
case "pc":return 12*b*a;case "mm":return b*F*a;case "cm":return b*G*a}}return parseFloat(f)}const D=document.createElement("canvas"),F=7.2/2.54,G=72/2.54;y.previewSymbol2D=function(f,a){var b,c,g=null!=(null==a?void 0:a.size)?q.pt2px(a.size):null,h=null!=(null==a?void 0:a.maxSize)?q.pt2px(a.maxSize):null;const H=null!=(null==a?void 0:a.opacity)?a.opacity:null,r=null!=(null==a?void 0:a.rotation)?a.rotation:"angle"in f?f.angle:null,m=v.getFill(f);var k=v.getStroke(f);if(m&&!k){const n="type"in m?null:
new z(m);"#ffffff"===(n?n.toHex():null)&&(k={color:"#bdc3c7",width:.75})}const l={shape:null,fill:null,stroke:k,offset:[0,0]};null!=(b=k)&&b.width&&(k.width=Math.min(k.width,80));b=(null==(c=k)?void 0:c.width)||0;let p=null==g?!1:null!=(null==a?void 0:a.scale)?null==a?void 0:a.scale:!0,d=0,e=0,t=!1;switch(f.type){case "simple-marker":k=f.style;e=d=h=Math.min(null!=g?g:q.pt2px(f.size),h||120);switch(k){case "circle":l.shape={type:"circle",cx:0,cy:0,r:.5*h};p||(d+=b,e+=b);break;case "cross":l.shape=
{type:"path",path:[{command:"M",values:[0,.5*e]},{command:"L",values:[d,.5*e]},{command:"M",values:[.5*d,0]},{command:"L",values:[.5*d,e]}]};break;case "diamond":l.shape={type:"path",path:[{command:"M",values:[0,.5*e]},{command:"L",values:[.5*d,0]},{command:"L",values:[d,.5*e]},{command:"L",values:[.5*d,e]},{command:"Z",values:[]}]};p||(d+=b,e+=b);break;case "square":l.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[d,0]},{command:"L",values:[d,e]},{command:"L",values:[0,
e]},{command:"Z",values:[]}]};p||(d+=b,e+=b);r&&(t=!0);break;case "triangle":l.shape={type:"path",path:[{command:"M",values:[.5*d,0]},{command:"L",values:[d,e]},{command:"L",values:[0,e]},{command:"Z",values:[]}]};p||(d+=b,e+=b);r&&(t=!0);break;case "x":l.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[d,e]},{command:"M",values:[d,0]},{command:"L",values:[0,e]}]};r&&(t=!0);break;case "path":l.shape={type:"path",path:f.path||""},p||(d+=b,e+=b),r&&(t=!0),p=!0}break;case "simple-line":h=
Math.min(null!=g?g:b,h||80);g=22<h?2*h:40;k.width=h;d=g;e=h;l.shape={type:"path",path:[{command:"M",values:[0,e]},{command:"L",values:[d,e]}]};break;case "picture-fill":case "simple-fill":e=d=Math.min(null!=g?g:22,h||120)+b;p=!0;l.shape="object"===typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.isSquareFill?u.shapes.squareFill[0]:u.shapes.fill[0];break;case "picture-marker":k=q.pt2px(f.width);c=q.pt2px(f.height);g=null!=g?g:Math.max(k,c);c=k/c;k=1>=c?Math.ceil(g*c):g;c=1>=c?g:Math.ceil(g/
c);d=Math.min(k,h||120);e=Math.min(c,h||120);l.shape={type:"image",x:-Math.round(d/2),y:-Math.round(e/2),width:d,height:e,src:f.url||""};r&&(t=!0);break;case "text":k=f.text||"Aa",c=f.font,h=Math.min(null!=g?g:q.pt2px(c.size),h||120),b=C(k,{weight:c.weight,size:h,family:c.family}),d=(g=/[\uE600-\uE6FF]/.test(k))?h:b,e=h,b=.25*E((c?h:0).toString()),g&&(b+=5),l.shape={type:"text",text:k,x:0,y:b,align:"middle",decoration:c&&c.decoration,rotated:f.rotated,kerning:f.kerning},l.font=c&&{size:h,style:c.style,
decoration:c.decoration,weight:c.weight,family:c.family}}if(!l.shape)return Promise.reject(new A("symbolPreview: renderPreviewHTML2D","symbol not supported."));h=f.color;g=null;m&&"pattern"===m.type&&h&&"picture-fill"!==f.type?g=v.getPatternUrlWithColor(m.src,h.toCss(!0)).then(n=>{m.src=n;l.fill=m;return l}):(l.fill=m,g=Promise.resolve(l));return g.then(n=>{const w=[[n]];if("object"===typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.applyColorModulation){const x=.6*d;w.unshift([{...n,
offset:[-x,0],fill:u.adjustColorBrightness(m,-.3)}]);w.push([{...n,offset:[x,0],fill:u.adjustColorBrightness(m,.3)}]);d+=2*x}return B.renderSymbol(w,[d,e],{node:a&&a.node,scale:p,opacity:H,rotation:r,useRotationSize:t,effectView:null==a?void 0:a.effectView})})};Object.defineProperty(y,"__esModule",{value:!0})});