// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils","../../../chunks/vec3","../../../chunks/vec3f64"],function(g,u,f,m){function r(a){for(const c in a){const b=a[c];b instanceof Function&&(a[c]=b.bind(a))}return a}let q=function(){function a(b,d){this.min=b;this.max=d;this.range=d-b}var c=a.prototype;c.ndiff=function(b,d=0){return Math.ceil((b-d)/this.range)*this.range+d};c._normalize=function(b,d,e,h=0,k=!1){e-=h;e<b?e+=this.ndiff(b-e):e>d&&(e-=this.ndiff(e-d));k&&e===d&&(e=b);return e+h};c.normalize=function(b,
d=0,e=!1){return this._normalize(this.min,this.max,b,d,e)};c.clamp=function(b,d=0){return u.clamp(b-d,this.min,this.max)+d};c.monotonic=function(b,d,e){return b<d?d:d+this.ndiff(b-d,e)};c.minimalMonotonic=function(b,d,e){return this._normalize(b,b+this.range,d,e)};c.center=function(b,d,e){d=this.monotonic(b,d,e);return this.normalize((b+d)/2,e)};c.diff=function(b,d,e){return this.monotonic(b,d,e)-b};c.shortestSignedDiff=function(b,d){b=this.normalize(b);d=this.normalize(d);const e=d-b;b=d<b?this.minimalMonotonic(b,
d)-b:d-this.minimalMonotonic(d,b);return Math.abs(e)<Math.abs(b)?e:b};c.contains=function(b,d,e){d=this.minimalMonotonic(b,d);e=this.minimalMonotonic(b,e);return e>b&&e<d};return a}();const v=m.create(),w=m.create(),B=r(new q(0,2*Math.PI)),C=r(new q(-Math.PI,Math.PI)),D=r(new q(0,360)),E=m.create(),n=m.create(),p=m.create();g.Cyclical=q;g.angle=function(a,c,b){a=f.normalize(n,a);c=f.normalize(p,c);const d=u.acosClamped(f.dot(a,c));return b&&(a=f.cross(E,a,c),0>f.dot(a,b))?-d:d};g.bilerp=function(a,
c,b,d,e,h){a+=(c-a)*e;return a+(b+(d-b)*e-a)*h};g.cosCapped=function(a,c){return a>c?Math.cos(c):Math.cos(a)};g.cyclical2PI=B;g.cyclicalDeg=D;g.cyclicalPI=C;g.fovx2fovy=function(a,c,b){return 2*Math.atan(b*Math.tan(.5*a)/c)};g.fovy2fovx=function(a,c,b){return 2*Math.atan(c*Math.tan(.5*a)/b)};g.makeOrthonormal=function(a,c,b){b=b||a;const d=f.dot(a,c);f.set(b,a[0]-d*c[0],a[1]-d*c[1],a[2]-d*c[2]);f.normalize(b,b)};g.makePiecewiseLinearFunction=function(a){const c=a.length;return function(b){if(b<=a[0][0])return a[0][1];
if(b>=a[c-1][0])return a[c-1][1];let d=1;for(;b>a[d][0];)d++;const e=a[d][0];b=(e-b)/(e-a[d-1][0]);return b*a[d-1][1]+(1-b)*a[d][1]}};g.maxScale=function(a){return Math.sqrt(Math.max(a[0]*a[0]+a[4]*a[4]+a[8]*a[8],a[1]*a[1]+a[5]*a[5]+a[9]*a[9],a[2]*a[2]+a[6]*a[6]+a[10]*a[10]))};g.moduloPositive=function(a,c){return(a%c+c)%c};g.planeFromPoints=function(a,c,b,d){f.subtract(v,c,a);f.subtract(w,b,a);f.cross(d,v,w);f.normalize(d,d);d[3]=-f.dot(a,d)};g.scaleFromMatrix=function(a,c){f.set(a,Math.sqrt(c[0]*
c[0]+c[4]*c[4]+c[8]*c[8]),Math.sqrt(c[1]*c[1]+c[5]*c[5]+c[9]*c[9]),Math.sqrt(c[2]*c[2]+c[6]*c[6]+c[10]*c[10]));return a};g.slerp=function(a,c,b,d=m.create()){const e=f.length(a);var h=f.length(c),k=f.dot(a,c)/(e*h);if(.9999999999999999>k){k=Math.acos(k);const l=((1-b)*e+b*h)/Math.sin(k);h=l/h*Math.sin(b*k);f.scale(n,a,l/e*Math.sin((1-b)*k));f.scale(p,c,h);return f.add(d,n,p)}return f.lerp(d,a,c,b)};g.slerpTangent=function(a,c,b,d=m.create(),e=m.create()){const h=f.length(a),k=f.length(c);var l=f.dot(a,
c)/(h*k);if(.9999999999999999>l){l=Math.acos(l);const x=Math.sin(l),y=Math.sin(b*l),z=Math.sin((1-b)*l),t=(1-b)*h+b*k;{const A=t/x,F=A/k*y;f.scale(n,a,A/h*z);f.scale(p,c,F);f.add(d,n,p)}f.scale(n,a,1/h*(-Math.cos((1-b)*l)*l*t+z*(-h+k)));f.scale(p,c,1/k*(Math.cos(b*l)*l*t+y*(-h+k)));f.add(e,n,p);f.scale(e,e,1/x);return e}f.lerp(d,a,c,b);f.subtract(e,c,a);f.normalize(e,e);return e};g.tangentFrame=function(a,c,b){Math.abs(a[0])>Math.abs(a[1])?f.set(c,0,1,0):f.set(c,1,0,0);f.cross(b,a,c);f.normalize(c,
c);f.cross(c,b,a);f.normalize(b,b)};Object.defineProperty(g,"__esModule",{value:!0})});