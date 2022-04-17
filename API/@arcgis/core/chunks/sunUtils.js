/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{e as t,h as n,K as e,c as i,j as a,k as o,q as r,b as c}from"./mathUtils.js";import{i as u,k as s,n as l,j as d}from"./mat4.js";import{c as f}from"./mat4f64.js";var m,h,g={exports:{}};m=g,h=function(){var t=Math.PI,n=Math.sin,e=Math.cos,i=Math.tan,a=Math.asin,o=Math.atan2,r=Math.acos,c=t/180,u=864e5,s=2440588,l=2451545,d={dec:0,ra:0};function f(t){return t.valueOf()/u-.5+s}function m(t){return new Date((t+.5-s)*u)}function h(t){return f(t)-l}var g=23.4397*c;function b(t,a){return o(n(t)*e(g)-i(a)*n(g),e(t))}function A(t,i){return a(n(i)*e(g)+e(i)*n(g)*n(t))}function N(t,a,r){return o(n(t),e(t)*n(a)-i(r)*e(a))}function O(t,i,o){return a(n(i)*n(o)+e(i)*e(o)*e(t))}function P(t,n){return c*(280.16+360.9856235*t)-n}function T(t){return c*(357.5291+.98560028*t)}function M(t){return c*(1.9148*n(t)+.02*n(2*t)+3e-4*n(3*t))}function E(n,e){return n+e+102.9372*c+t}function I(t,n){var e=T(t),i=E(e,M(e));return n||(n={dec:0,ra:0}),n.dec=A(i,0),n.ra=b(i,0),n}var p={POLAR_EXCEPTION:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(t,n,e,i){var a=c*-e,o=c*n,r=h(t),u=I(r,d),s=P(r,a)-u.ra;return i||(i={azimuth:0,altitude:0}),i.azimuth=N(s,o,u.dec),i.altitude=O(s,o,u.dec),i}},v=[[-.83,"sunrise","sunset"]];p.addTime=function(t,n,e){v.push([t,n,e])};var y=9e-4;function L(n,e){return Math.round(n-y-e/(2*t))}function _(n,e,i){return y+(n+e)/(2*t)+i}function R(t,e,i){return l+t+.0053*n(e)-.0069*n(2*i)}function z(t,i,a){return r((n(t)-n(i)*n(a))/(e(i)*e(a)))}function x(t){var i=c*(134.963+13.064993*t),a=c*(93.272+13.22935*t),o=c*(218.316+13.176396*t)+6.289*c*n(i),r=5.128*c*n(a),u=385001-20905*e(i);return{ra:b(o,r),dec:A(o,r),dist:u}}return p.getTimes=function(t,i,a){var o=c*-a,r=c*i,u=L(h(t),o),s=_(0,o,u),l=T(s),d=M(l),f=E(l,d),g=A(f,0),b=R(s,l,f);function N(t){return R(_(z(t,r,g),o,u),l,f)}function O(t){var i=(n(t)-n(r)*n(g))/(e(r)*e(g));return i<-1?p.POLAR_EXCEPTION.MIDNIGHT_SUN:i>1?p.POLAR_EXCEPTION.POLAR_NIGHT:p.POLAR_EXCEPTION.NORMAL}var P,I,y,x,C,D={solarNoon:m(b),nadir:m(b-.5),polarException:p.POLAR_EXCEPTION.NORMAL};for(P=0,I=v.length;P<I;P+=1)C=b-((x=N((y=v[P])[0]*c))-b),D[y[1]]=m(C),D[y[2]]=m(x);return D.polarException=O(v[0][0]*c),D},p.getMoonPosition=function(t,n,e){var a=c*-e,o=c*n,r=h(t),u=x(r),s=P(r,a)-u.ra,l=O(s,o,u.dec);return l+=.017*c/i(l+10.26*c/(l+5.1*c)),{azimuth:N(s,o,u.dec),altitude:l,distance:u.dist}},p.getMoonFraction=function(t){var i=h(t),a=I(i),c=x(i),u=149598e3,s=r(n(a.dec)*n(c.dec)+e(a.dec)*e(c.dec)*e(a.ra-c.ra)),l=o(u*n(s),c.dist-u*e(s));return(1+e(l))/2},p}(),void 0!==h&&(m.exports=h);const b=g.exports,A={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,directAtNoon:.65,directAtTwilight:.7},global:{altitude:8e5,ambient:.015,direct:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}};function N(a,r,c,u,s){const l=r[2];t(u.ambient.color,1,1,1),u.ambient.intensity=A.global.ambient,t(u.direct.color,1,1,1),u.direct.intensity=A.global.direct;const d=i((Math.abs(l)-A.local.altitude)/(A.global.altitude-A.local.altitude),0,1);u.globalFactor=d;const f=b.getTimes(a,r[1],r[0]);if(d<1){const t=function(t,n,e){const i=t.valueOf();let a,r;n.polarException===b.POLAR_EXCEPTION.MIDNIGHT_SUN?(a=i-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,r=a+432e6):n.polarException===b.POLAR_EXCEPTION.POLAR_NIGHT?(a=i-2,r=i-1):(a=n.sunrise.valueOf(),r=n.sunset.valueOf());const c=r-a,u=a+c/2,s=c/4,l=u-s,d=u+s,f=.06*c,m=a-f/2,h=a+f/2,g=r-f/2,N=r+f/2,O=A.local,P=[.01,O.ambientAtNight],T=[.8,.8,1],M=[.01,.01,.01],E=[O.directAtTwilight,O.ambientAtTwilight],I=[1,.6,.5],p=[.8,.8,1],y=[.9*O.directAtNoon,O.ambientAtNoon],L=[1,.98,.98],_=[.98,.98,1],R=[O.directAtNoon,O.ambientAtNoon],z=[1,1,1],x=[1,1,1],C=y,D=L,H=_,X=E,w=I,G=p;let S,j,F=[0,0],U=[0,0,0],k=[0,0,0];i<m||i>N?(F=P,U=M,k=T,j="night"):i<h?(S=h-m,F=v(i-m,S,P,E),U=v(i-m,S,M,I),k=v(i-m,S,T,p),j="sun rising"):i<l?(S=l-h,F=v(i-h,S,E,y),U=v(i-h,S,I,L),k=v(i-h,S,p,_),j="early morning"):i<u?(S=u-l,F=v(i-l,S,y,R),U=v(i-l,S,L,z),k=v(i-l,S,_,x),j="late morning"):i<d?(S=d-u,F=v(i-u,S,R,C),U=v(i-u,S,z,D),k=v(i-u,S,x,H),j="early afternoon"):i<g?(S=g-d,F=v(i-d,S,C,X),U=v(i-d,S,D,w),k=v(i-d,S,H,G),j="late afternoon"):i<N&&(S=N-g,F=v(i-g,S,X,P),U=v(i-g,S,w,M),k=v(i-g,S,G,T),j="sun setting");const q=o(U[0],U[1],U[2]),K=o(k[0],k[1],k[2]),B=function(t){switch(t){case"disabled":case"sunny":return{direct:1,ambient:1};case"cloudy":return{direct:.8,ambient:1.1};case"rainy":return{direct:.4,ambient:1};case"foggy":return{direct:.3,ambient:1.6}}}(e);return{direct:{intensity:F[0]*B.direct,color:q},ambient:{intensity:F[1]*B.ambient,color:K},timeOfDay:j}}(a,f,s);n(u.ambient.color,t.ambient.color,u.ambient.color,d),u.ambient.intensity=e(t.ambient.intensity,u.ambient.intensity,d),n(u.direct.color,t.direct.color,u.direct.color,d),u.direct.intensity=e(t.direct.intensity,u.direct.intensity,d)}u.noonFactor=function(t,n){const e=t.valueOf();let a,o;n.polarException===b.POLAR_EXCEPTION.MIDNIGHT_SUN?(a=e-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,o=a+432e6):n.polarException===b.POLAR_EXCEPTION.POLAR_NIGHT?(a=e-2,o=e-1):(a=n.sunrise.valueOf(),o=n.sunset.valueOf());const r=a+(o-a)/2;return 1-i(Math.abs(e-r)/432e5,0,1)}(a,f),O(a,r,c,u.direct.directionToLightSource)}function O(n,e,o,r){const c=p,f=u(I);if(1===o)b.getPosition(n,0,0,c),t(r,0,0,-1),s(f,f,-c.azimuth),l(f,f,-c.altitude),a(r,r,f);else{const o=A.planarDirection,u=o.globalAngles,l=e[2];let m=(Math.abs(l)-o.localAltitude)/(o.globalAltitude-o.localAltitude);m=i(m,0,1),m<1?(b.getPosition(n,e[1],e[0],c),c.azimuth=(1-m)*c.azimuth+m*u.azimuth,c.altitude=(1-m)*c.altitude+m*u.altitude):(c.azimuth=u.azimuth,c.altitude=u.altitude),t(r,0,-1,0),d(f,f,-c.azimuth),s(f,f,-c.altitude),a(r,r,f)}}function P(t,n){if(1===n)return!0;const e=A.planarDirection;return Math.abs(t)<e.localAltitude}function T(t,n,e,i,a){const o=t.getTime(),r=n.getTime()-o,u=Math.floor(r/e)+1,s=new Array(u);for(let t=0;t<u;++t)y.setTime(o+e*t),s[t]=c(),O(y,i,a,s[t]);return s}const M=o(.5773502691896258,-.5773502691896258,.5773502691896258);class E{constructor(){this.ambient={color:o(1,1,1),intensity:.55},this.direct={color:o(1,1,1),intensity:.55,directionToLightSource:r(M)},this.noonFactor=.5,this.globalFactor=0}}const I=f(),p={azimuth:0,altitude:0};function v(t,n,e,i){const a=[];for(let o=0;o<e.length;o++)a[o]=(i[o]-e[o])*t/n+e[o];return a}const y=new Date(0);export{E as C,b as S,P as a,T as b,N as c};
