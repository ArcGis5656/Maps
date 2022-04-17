// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports"],function(u){let y=function(){function q(){this._path=[]}var l=q.prototype;l.path=function(){return this._path};l.addPath=function(a,b){b||a.reverse();Array.prototype.push.apply(this._path,a);b||a.reverse()};q.mergePath=function(a,b){b&&Array.prototype.push.apply(a,b)};l.startPath=function(a){this._path.push(a)};l.lineTo=function(a){this._path.push(a)};l.close=function(){const a=this._path;1<a.length&&(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1])&&a.push([a[0][0],a[0][1]])};
return q}(),z=function(){function q(a,b){}var l=q.prototype;l.normalize=function(a){const b=Math.sqrt(a[0]*a[0]+a[1]*a[1]);a[0]/=b;a[1]/=b};l.calculateLength=function(a,b){const e=b[0]-a[0];a=b[1]-a[1];return Math.sqrt(e*e+a*a)};l.calculateSegLength=function(a,b){return this.calculateLength(a[b],a[b+1])};l.calculatePathLength=function(a){let b=0;const e=a?a.length:0;for(let g=0;g<e-1;++g)b+=this.calculateSegLength(a,g);return b};l.calculatePathArea=function(a){let b=0;const e=a?a.length:0;for(let g=
0;g<e-1;++g)b+=(a[g+1][0]-a[g][0])*(a[g+1][1]+a[g][1]);return b/2};l.getCoord2D=function(a,b,e){return[a[0]+(b[0]-a[0])*e,a[1]+(b[1]-a[1])*e]};l.getSegCoord2D=function(a,b,e){return this.getCoord2D(a[b],a[b+1],e)};l.getAngle=function(a,b,e){return Math.atan2(b[1]-a[1],b[0]-a[0])};l.getSegAngle=function(a,b,e){return this.getAngle(a[b],a[b+1],e)};l.getAngleCS=function(a,b,e){e=b[0]-a[0];a=b[1]-a[1];b=Math.sqrt(e*e+a*a);return 0<b?[e/b,a/b]:[1,0]};l.getSegAngleCS=function(a,b,e){return this.getAngleCS(a[b],
a[b+1],e)};l.cut=function(a,b,e,g){e=0>=e?a[b]:this.getSegCoord2D(a,b,e);a=1<=g?a[b+1]:this.getSegCoord2D(a,b,g);return[e,a]};l.addSegment=function(a,b,e){e&&a.push(b[0]);a.push(b[1])};l.getSubCurve=function(a,b,e){const g=[];return this.appendSubCurve(g,a,b,e)?g:null};l.appendSubCurve=function(a,b,e,g){const m=b?b.length-1:0;let k=0,c=!0,h=0;for(;h<m;){const d=this.calculateSegLength(b,h);if(0!==d){if(c){if(k+d>e){var f=(e-k)/d;let p=1,n=!1;k+d>=g&&(p=(g-k)/d,n=!0);(f=this.cut(b,h,f,p))&&this.addSegment(a,
f,c);if(n)break;c=!1}}else{if(k+d>g){(b=this.cut(b,h,0,(g-k)/d))&&this.addSegment(a,b,c);break}this.addSegment(a,[b[h],b[h+1]],c)}k+=d}++h}return!0};l.getCIMPointAlong=function(a,b){const e=a?a.length-1:0;let g=0,m=-1;for(;m<e;){++m;const k=this.calculateSegLength(a,m);if(0!==k){if(g+k>b)return this.getCoord2D(a[m],a[m+1],(b-g)/k);g+=k}}return null};l.isEmpty=function(a,b){if(!a||1>=a.length)return!0;const e=a?a.length-1:0;let g=-1;for(;g<e;)if(++g,a[g+1][0]!==a[g][0]||a[g+1][1]!==a[g][1]||b&&a[g+
1][2]!==a[g][2])return!1;return!0};l.offset=function(a,b,e,g,m){if(!a||2>a.length)return null;var k=0,c=a[k++];for(m=k;k<a.length;){var h=a[k];if(h[0]!==c[0]||h[1]!==c[1])k!==m&&(a[m]=a[k]),c=a[m++];k++}(k=a[0][0]===a[m-1][0]&&a[0][1]===a[m-1][1])&&--m;if(m<(k?3:2))return null;h=[];c=k?a[m-1]:null;let f=a[0];for(let v=0;v<m;v++){const r=v===m-1?k?a[0]:null:a[v+1];if(c)if(r){var d=[r[0]-f[0],r[1]-f[1]];this.normalize(d);c=[f[0]-c[0],f[1]-c[1]];this.normalize(c);var p=c[0]*d[1]-c[1]*d[0],n=c[0]*d[0]+
c[1]*d[1];if(0<=p===0>=b)1>n&&(d=[d[0]-c[0],d[1]-c[1]],this.normalize(d),c=Math.sqrt((1+n)/2),c>1/g&&(c=-Math.abs(b)/c,h.push([f[0]-d[0]*c,f[1]-d[1]*c])));else switch(e){case "Mitered":if(n=Math.sqrt((1+n)/2),0<n&&1/n<g){d=[d[0]-c[0],d[1]-c[1]];this.normalize(d);c=Math.abs(b)/n;h.push([f[0]-d[0]*c,f[1]-d[1]*c]);break}case "Bevelled":h.push([f[0]+c[1]*b,f[1]-c[0]*b]);h.push([f[0]+d[1]*b,f[1]-d[0]*b]);break;case "Rounded":if(1>n){h.push([f[0]+c[1]*b,f[1]-c[0]*b]);n=Math.floor(2.5*(1-n));if(0<n){let t=
p=1/n;for(let x=1;x<n;x++,t+=p){const w=[c[1]*(1-t)+d[1]*t,-c[0]*(1-t)-d[0]*t];this.normalize(w);h.push([f[0]+w[0]*b,f[1]+w[1]*b])}}h.push([f[0]+d[1]*b,f[1]-d[0]*b])}break;default:0>p?(h.push([f[0]+(c[1]+c[0])*b,f[1]+(c[1]-c[0])*b]),h.push([f[0]+(d[1]-d[0])*b,f[1]-(d[0]+d[1])*b])):(n=Math.sqrt((1+Math.abs(n))/2),d=[d[0]-c[0],d[1]-c[1]],this.normalize(d),c=b/n,h.push([f[0]-d[0]*c,f[1]-d[1]*c]))}}else d=[f[0]-c[0],f[1]-c[1]],this.normalize(d),h.push([f[0]+d[1]*b,f[1]-d[0]*b]);else d=[r[0]-f[0],r[1]-
f[1]],this.normalize(d),h.push([f[0]+d[1]*b,f[1]-d[0]*b]);c=f;f=r}if(h.length<(k?3:2))return null;k&&h.push([h[0][0],h[0][1]]);return h};return q}();u.CurveHelper=z;u.PIXEL_TOLERANCE=.03;u.PathHelper=y;Object.defineProperty(u,"__esModule",{value:!0})});