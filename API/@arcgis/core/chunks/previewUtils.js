/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import a from"../Color.js";const t={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function e(a,t,e){let m=22,c=22;a<1?m*=.75:a>1&&(c*=1.25);let p=22,L=22;t&&e&&(m=c=p=L=0);return[{type:"path",path:[{command:"M",values:[p,0]},{command:"L",values:[e?p:.875*p,0]},{command:"L",values:[e?m-.5*p:0,c-.5*L]},{command:"L",values:[m-.5*p,c-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[p,0]},{command:"L",values:[p,t?0:.125*L]},{command:"L",values:[m-.5*p,t?c-.5*L:L]},{command:"L",values:[m-.5*p,c-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[m-.5*p,c-.5*L]},{command:"L",values:[e?m-.5*p:0,c-.5*L]},{command:"L",values:[e?m-.5*p:0,t?c-.5*L:L]},{command:"L",values:[m-.5*p,t?c-.5*L:L]},{command:"Z",values:[]}]}]}function m(a){const t=.5*a,e=22,m=22;return[{type:"path",path:[{command:"M",values:[0,.7*m*.5]},{command:"L",values:[6.6,.7*m]},{command:"L",values:[6.6,.7*m+t]},{command:"L",values:[0,.7*m+t-.7*m*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,.7*m]},{command:"L",values:[6.6,.7*m+t]},{command:"L",values:[e,t]},{command:"L",values:[e,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,0]},{command:"L",values:[e,0]},{command:"L",values:[6.6,.7*m]},{command:"L",values:[0,.7*m*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=t?.35*e:.5*e;return[{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,.5*c]},{command:"L",values:[.5*e,c]},{command:"L",values:[0,.5*c]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*c]},{command:"L",values:[.5*e,c]},{command:"L",values:[.5*e,a]},{command:"L",values:[0,a-.5*c]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*e,c]},{command:"L",values:[.5*e,a]},{command:"L",values:[e,a-.5*c]},{command:"L",values:[e,.5*c]},{command:"Z",values:[]}]}]}function L(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.5*e,p=.15*e,L=a-p;return[{type:"ellipse",cx:.5*e,cy:L,rx:c,ry:p},{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[0,L]},{command:"L",values:[e,L]},{command:"L",values:[e,p]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:p,rx:c,ry:p}]}function n(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.15*e,p=a-c;return[{type:"ellipse",cx:.5*e,cy:p,rx:.5*e,ry:c},{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]}]}function s(a){let t=a;t-=t<22?3:6;const e=.15*t;return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,0]},{command:"L",values:[.5*t,a-e]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:0,rx:.5*t,ry:e}]}function l(a){let t=a;const e=a;t-=t<22?2:4;const m=t,c=e,p=Math.floor(a/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*m,0]},{command:"L",values:[m,.5*c-p]},{command:"L",values:[.45*m-p,.5*c+p]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*m,0]},{command:"L",values:[.45*m-p,.5*c+p]},{command:"L",values:[0,.5*c-p]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*c-p]},{command:"L",values:[.45*m-p,.5*c+p]},{command:"L",values:[.45*m,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*m,e]},{command:"L",values:[m,.5*c-p]},{command:"L",values:[.45*m-p,.5*c+p]},{command:"Z",values:[]}]}]}function o(a){let t=a;t-=t<22?1:2;return[{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[a,t]},{command:"L",values:[.45*a,.6*t]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[.45*a,.6*t]},{command:"L",values:[0,t]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,t]},{command:"L",values:[.45*a,.6*t]},{command:"L",values:[a,t]},{command:"Z",values:[]}]}]}function u(a,t){return Math.round(Math.min(Math.max(a+255*t*.75,0),255))}function h(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const m=new a(t);return new a([u(m.r,e),u(m.g,e),u(m.b,e),m.a])}export{u as a,l as b,L as c,p as d,s as e,n as f,o as g,e as h,c as i,m as j,h as k,t as s};
