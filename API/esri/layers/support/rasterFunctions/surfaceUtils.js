// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../PixelBlock","./pixelUtils"],function(G,K,H){function J(l){let {altitude:f,azimuth:c}=l;const {hillshadeType:r,pixelSizePower:d,pixelSizeFactor:y,scalingType:F,isGCS:D,resolution:E}=l;var m="multi-directional"===r?2*l.zFactor:l.zFactor;const {x:v,y:u}=E;l=m/(8*v);var w=m/(8*u);D&&.001<m&&(l/=111E3,w/=111E3);"adjusted"===F&&(D?(l=111E3*v,w=111E3*u,l=(m+l**d*y)/(8*l),w=(m+w**d*y)/(8*w)):(l=(m+v**d*y)/(8*v),w=(m+u**d*y)/(8*u)));var k=(90-f)*Math.PI/180;m=Math.cos(k);let g=(360-c+
90)*Math.PI/180,e=Math.sin(k)*Math.cos(g);k=Math.sin(k)*Math.sin(g);const p=[315,270,225,360,180,0],h=[60,60,60,60,60,90];var t=new Float32Array([3,5,3,2,1,4]);const q=t.reduce((n,B)=>n+B);t=t.map(n=>n/q);const z="multi-directional"===r?p.length:1,A=new Float32Array(6),x=new Float32Array(6),C=new Float32Array(6);if("multi-directional"===r)for(let n=0;n<z;n++)f=h[n],c=p[n],k=(90-f)*Math.PI/180,m=Math.cos(k),g=(360-c+90)*Math.PI/180,e=Math.sin(k)*Math.cos(g),k=Math.sin(k)*Math.sin(g),A[n]=m,x[n]=e,
C[n]=k;else A.fill(m),x.fill(e),C.fill(k);return{resolution:E,factor:[l,w],sinZcosA:e,sinZsinA:k,cosZ:m,sinZcosAs:x,sinZsinAs:C,cosZs:A,weights:t,hillshadeType:["traditional","multi-directional"].indexOf(r)}}G.calculateHillshadeParams=J;G.hillshade=function(l,f){if(!H.isValidPixelBlock(l))return l;const {width:c,height:r,mask:d}=l,y=new Uint8Array(c*r);d&&y.set(d);const {factor:F,sinZcosA:D,sinZsinA:E,cosZ:m,sinZcosAs:v,sinZsinAs:u,cosZs:w,weights:k}=J(f),[g,e]=F;var {hillshadeType:p}=f;const h=l.pixels[0];
f=new Uint8Array(c*r);let t;for(let I=1;I<r-1;I++){const b=I*c;for(let a=1;a<c-1;a++)if(d&&!d[b+a])f[b+a]=0;else{var q=8;if(d&&(q=d[b-c+a-1]+d[b-c+a]+d[b-c+a+1]+d[b+a-1]+d[b+a+1]+d[b+c+a-1]+d[b+c+a]+d[b+c+a+1],7>q)){f[b+a]=0;y[b+a]=0;continue}if(7===q){var z=d[b-c+a-1]?h[b-c+a-1]:h[b+a];var A=d[b-c+a]?h[b-c+a]:h[b+a];var x=d[b-c+a+1]?h[b-c+a+1]:h[b+a];q=d[b+a-1]?h[b+a-1]:h[b+a];t=d[b+a+1]?h[b+a+1]:h[b+a];var C=d[b+c+a-1]?h[b+c+a-1]:h[b+a];var n=d[b+c+a]?h[b+c+a]:h[b+a];var B=d[b+c+a+1]?h[b+c+a+1]:
h[b+a]}else z=h[b-c+a-1],A=h[b-c+a],x=h[b-c+a+1],q=h[b+a-1],t=h[b+a+1],C=h[b+c+a-1],n=h[b+c+a],B=h[b+c+a+1];q=(x+t+t+B-(z+q+q+C))*g;z=(C+n+n+B-(z+A+A+x))*e;A=Math.sqrt(1+q*q+z*z);x=0;if("traditional"===p)q=255*(m+E*z-D*q)/A,0>q&&(q=0),x=q;else for(C=u.length,n=0;n<C;n++)B=255*(w[n]+u[n]*z-v[n]*q)/A,0>B&&(B=0),x+=B*k[n];f[b+a]=x&255}}for(p=0;p<r;p++)f[p*c]=f[p*c+1],f[(p+1)*c-1]=f[(p+1)*c-2];for(p=1;p<c-1;p++)f[p]=f[p+c],f[p+(r-1)*c]=f[p+(r-2)*c];return new K({width:c,height:r,pixels:[f],mask:d?y:null,
pixelType:"u8",validPixelCount:l.validPixelCount,statistics:[{minValue:0,maxValue:255}]})};G.tintHillshade=function(l,f,c,r){if(H.isValidPixelBlock(l)&&H.isValidPixelBlock(f)){var {min:d,max:y}=r;r=l.pixels[0];var {pixels:F,mask:D}=f;f=F[0];var E=255.00001/(y-d),m=new Uint8ClampedArray(f.length),v=new Uint8ClampedArray(f.length),u=new Uint8ClampedArray(f.length),w=c.length-1;for(let e=0;e<f.length;e++){if(D&&0===D[e])continue;var k=Math.floor((f[e]-d)*E);const [p,h]=c[0>k?0:k>w?w:k];var g=r[e];k=
g*h;const t=k*(1-Math.abs(p%2-1));g-=k;switch(Math.floor(p)){case 0:m[e]=k+g;v[e]=t+g;u[e]=g;break;case 1:m[e]=t+g;v[e]=k+g;u[e]=g;break;case 2:m[e]=g;v[e]=k+g;u[e]=t+g;break;case 3:m[e]=g;v[e]=t+g;u[e]=k+g;break;case 4:m[e]=t+g;v[e]=g;u[e]=k+g;break;case 5:case 6:m[e]=k+g,v[e]=g,u[e]=t+g}}l.pixels=[m,v,u];l.updateStatistics()}};Object.defineProperty(G,"__esModule",{value:!0})});