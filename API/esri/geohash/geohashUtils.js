// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(r){function w(a){return 57>=a?a-48:104>=a?a-88:107>=a?a-89:110>=a?a-90:a-91}function x(a,e,g){a[0]=e;a[1]=g;return a}function t(a,e){const g=(a[0]+a[1])/2,f=!e;a[0]=f*a[0]+e*g;a[1]=f*g+e*a[1]}function u(a,e){e=e>(a[0]+a[1])/2;t(a,e);return e}function C(a,e){const g=x(D,-90,90),f=x(E,-180,180);for(let c=0;c<e.length;c++){var d=e.charCodeAt(c);d=w(d);0===c%2?(t(f,!!(16&d)),t(f,!!(4&d)),t(f,!!(1&d)),t(g,!!(8&d)),t(g,!!(2&d))):(t(g,!!(16&d)),t(g,!!(4&d)),t(g,!!(1&d)),t(f,!!(8&
d)),t(f,!!(2&d)))}a[0]=(g[0]+g[1])/2;a[1]=(f[0]+f[1])/2;return a}function z(a,e,g){let f="";const d=x(D,-90,90),c=x(E,-180,180);for(let h=0;h<g;h++){let b=0;h%2?(b|=u(d,a)<<4,b|=u(c,e)<<3,b|=u(d,a)<<2,b|=u(c,e)<<1,b|=u(d,a)<<0):(b|=u(c,e)<<4,b|=u(d,a)<<3,b|=u(c,e)<<2,b|=u(d,a)<<1,b|=u(c,e)<<0);f+="0123456789bcdefghjkmnpqrstuvwxyz"[b]}return f}function A(a){return 180/2**Math.floor(5*a/2)}function B(a){return 360/2**Math.ceil(5*a/2)}function F(a,e){return e?1&a|(4&a)>>1|(16&a)>>2:(2&a)>>1|(8&a)>>2}
function G(a,e){return e?(2&a)>>1|(8&a)>>2:1&a|(4&a)>>1|(16&a)>>2}function y(a,e,g){var f=!((a.length-1)%2);const d=a.substring(0,a.length-1);var c=w(a.charCodeAt(a.length-1)),h=0,b=0;let k=0;var l=0;f?(h=8,b=4,k=1&c|(4&c)>>1|(16&c)>>2,l=(2&c)>>1|(8&c)>>2):(h=4,b=8,l=1&c|(4&c)>>1|(16&c)>>2,k=(2&c)>>1|(8&c)>>2);e=k+e;c=l+g;g=Math.floor(e/h);l=Math.floor(c/b);h=e-g*h;b=c-l*b;f="0123456789bcdefghjkmnpqrstuvwxyz"[f?h&1|(b&1)<<1|(h&2)<<1|(b&2)<<2|(h&4)<<2:b&1|(h&1)<<1|(b&2)<<1|(h&2)<<2|(b&4)<<2];return 1<
a.length&&(g||l)?y(d,g,l)+f:d+f}const D=new Float64Array(2),E=new Float64Array(2);r.convertGeohash32ToXY=function(a,e){let g=a=0,f=30,d=30;for(let b=0;b<e.length;b++){var c=e.charCodeAt(b),h=w(c);c=0===b%2;const k=F(h,c);h=G(h,c);f-=c?3:2;d-=c?2:3;a|=k<<f;g|=h<<d}return{geohashX:a,geohashY:g}};r.decodeBase32Char=w;r.decodeGeohash=C;r.decodeGeohashXY=function(a,e){let g=-90,f=90,d=-180,c=180;for(let n=0;n<e;n++){var h=Math.ceil((n+1)/2),b=Math.floor((n+1)/2),k=1-n%2,l=30-(3*h+2*b),p=30-(2*h+3*b);b=
3*k+2*(1-k);h=2*k+3*(1-k);l=(7*k+3*(1-k)<<l&a.geohashX)>>l;k=(3*k+7*(1-k)<<p&a.geohashY)>>p;for(--b;0<=b;b--){p=(d+c)/2;const m=l&1<<b?1:0;d=(1-m)*d+m*p;c=(1-m)*p+m*c}for(--h;0<=h;h--)l=(g+f)/2,b=k&1<<h?1:0,g=(1-b)*g+b*l,f=(1-b)*l+b*f}return[d,g,c,f]};r.encodeBase32Char=function(a){return"0123456789bcdefghjkmnpqrstuvwxyz"[a]};r.encodeGeohash=z;r.forEachIntersectingGeohash=function(a,e,g,f,d,c){var h=Math.abs(g-a),b=Math.abs(f-e);const k=A(d),l=B(d);b=Math.ceil(b/l);h=Math.ceil(h/k);d=z(a,e,d);for(let p=
0;p<b;p++)for(let n=0;n<h;n++){const m=y(d,p,n),[q,v]=C([0,0],m);c(m,Math.abs((Math.min(g,q+k/2)-Math.max(a,q-k/2))*(Math.min(f,v+l/2)-Math.max(e,v-l/2)))/(k*l))}};r.getIntersectingGeohashes=function(a,e,g,f,d){g=Math.abs(g-a);f=Math.abs(f-e);var c=A(d);const h=B(d);f=Math.ceil(f/h);g=Math.ceil(g/c);a=z(a,e,d);e=[];for(d=0;d<f;d++)for(c=0;c<g;c++)e.push(y(a,d,c));return e};r.getRelativeGeohash=y;r.latDistPerGeohash=A;r.lonDistPerGeohash=B;r.setGeohashBuf=function(a,e,g,f,d){d%2&&(d+=1);let c=0,h=
0,b=-90,k=90,l=-180,p=180;for(let v=0;v<d/2;v++){for(var n=0;5>n;n++){var m=(l+p)/2,q=f>m?1:0;c|=q<<29-(n+5*v);l=(1-q)*l+q*m;p=(1-q)*m+q*p}for(n=0;5>n;n++)m=(b+k)/2,q=g>m?1:0,h|=q<<29-(n+5*v),b=(1-q)*b+q*m,k=(1-q)*m+q*k}a[2*e]=c;a[2*e+1]=h};r.setGeohashXY=function(a,e,g,f){f%2&&(f+=1);let d=0,c=0,h=-90,b=90,k=-180,l=180;for(let q=0;q<f/2;q++){for(var p=0;5>p;p++){var n=(k+l)/2,m=g>n?1:0;d|=m<<29-(p+5*q);k=(1-m)*k+m*n;l=(1-m)*n+m*l}for(p=0;5>p;p++)n=(h+b)/2,m=e>n?1:0,c|=m<<29-(p+5*q),h=(1-m)*h+m*n,
b=(1-m)*n+m*b}a.geohashX=d;a.geohashY=c};r.unpackXBits=F;r.unpackYBits=G;Object.defineProperty(r,"__esModule",{value:!0})});