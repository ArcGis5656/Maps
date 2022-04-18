// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../symbols/support/svgUtils ../../../../symbols/support/utils ../../../support/widgetUtils ../../../../core/has ../../../../core/Logger ../../../support/jsxFactory".split(" "),function(w,k,B,q,G,H,a){function x(e,g,c){const l=`${c}_arrowStart`;c=`${c}_arrowEnd`;e="left"===e;const f={markerStart:null,markerEnd:null};switch(g){case "HL":e?f.markerStart=`url(#${c})`:f.markerEnd=`url(#${l})`;break;case "LL":f.markerStart=`url(#${c})`;break;case "LH":e?f.markerEnd=`url(#${l})`:
f.markerStart=`url(#${c})`;break;default:f.markerEnd=`url(#${l})`}return f}function C(e,g,c,l,f=60){const {focus:d,numClasses:r,colors:D,rotation:E}=e;e=!!d;const p=Math.sqrt(f**2+f**2)+(e?0:5),y=[],z=[];var t=[],m=(f||75)/r;for(var n=0;n<r;n++){var u=n*m;for(var h=0;h<r;h++){var v=h*m;const A=k.generateFillAttributes(D[n][h]),F=k.generateStrokeAttributes(null);v={type:"rect",x:v,y:u,width:m,height:m};y.push(k.renderDef(A));z.push(k.renderShape(v,A.fill,F,null));t.push(k.getBoundingBox(v))}}m=null;
e||(m="margin: -15px -15px -18px -15px");n=x("left",d,g);u=x("right",d,g);h=k.computeBBox(t);t=k.getTransformMatrix(h,p,p,0,!1,E,!1);h=k.getTransformMatrix(h,p,p,0,!1,e?-45:null,!1);c={filter:B.getCSSFilterFromEffectList(l),opacity:null==c?null:`${c}`};return a.tsx("div",{styles:c,class:e?b.diamondMidColRamp:b.squareTableCell},a.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:p,height:p,style:m},a.tsx("defs",null,a.tsx("marker",{id:`${g}_arrowStart`,markerWidth:"10",markerHeight:"10",refX:"5",
refY:"5",markerUnits:"strokeWidth",orient:"auto"},a.tsx("polyline",{points:"0,0 5,5 0,10",fill:"none",stroke:"#555555","stroke-width":"1"})),a.tsx("marker",{id:`${g}_arrowEnd`,markerWidth:"10",markerHeight:"10",refX:"0",refY:"5",markerUnits:"strokeWidth",orient:"auto"},a.tsx("polyline",{points:"5,0 0,5 5,10",fill:"none",stroke:"#555555","stroke-width":"1"})),y),a.tsx("g",{transform:t},z),a.tsx("g",{transform:h},a.tsx("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":n.markerStart,
"marker-end":n.markerEnd,x1:-10,y1:f-15,x2:-10,y2:15}),a.tsx("line",{fill:"none",stroke:"#555555","stroke-width":"1","marker-start":u.markerStart,"marker-end":u.markerEnd,x1:15,y1:f+10,x2:f-15,y2:f+10}))))}const b={diamondContainer:"esri-relationship-ramp--diamond__container",diamondLeftCol:"esri-relationship-ramp--diamond__left-column",diamondRightCol:"esri-relationship-ramp--diamond__right-column",diamondMidCol:"esri-relationship-ramp--diamond__middle-column",diamondMidColLabel:"esri-relationship-ramp--diamond__middle-column--label",
diamondMidColRamp:"esri-relationship-ramp--diamond__middle-column--ramp",squareTable:"esri-relationship-ramp--square__table",squareTableRow:"esri-relationship-ramp--square__table-row",squareTableCell:"esri-relationship-ramp--square__table-cell",squareTableLabel:"esri-relationship-ramp--square__table-label",squareTableLabelLeftBottom:"esri-relationship-ramp--square__table-label--left-bottom",squareTableLabelRightBottom:"esri-relationship-ramp--square__table-label--right-bottom",squareTableLabelLeftTop:"esri-relationship-ramp--square__table-label--left-top",
squareTableLabelRightTop:"esri-relationship-ramp--square__table-label--right-top"};w.renderRelationshipRamp=function(e,g,c,l){const {focus:f,labels:d}=e,r=!!f;e=C(e,g,c,l);g={justifyContent:"center"};c=q.isRTL();return r?a.tsx("div",{class:b.diamondContainer,styles:g},a.tsx("div",{class:b.diamondLeftCol},c?d.right:d.left),a.tsx("div",{class:b.diamondMidCol},a.tsx("div",{class:b.diamondMidColLabel},d.top),e,a.tsx("div",{class:b.diamondMidColLabel},d.bottom)),a.tsx("div",{class:b.diamondRightCol},c?
d.left:d.right)):a.tsx("div",{class:b.squareTable},a.tsx("div",{class:b.squareTableRow},a.tsx("div",{class:q.classes(b.squareTableCell,b.squareTableLabel,b.squareTableLabelRightBottom)},c?d.top:d.left),a.tsx("div",{class:b.squareTableCell}),a.tsx("div",{class:q.classes(b.squareTableCell,b.squareTableLabel,b.squareTableLabelLeftBottom)},c?d.left:d.top)),a.tsx("div",{class:b.squareTableRow},a.tsx("div",{class:b.squareTableCell}),e,a.tsx("div",{class:b.squareTableCell})),a.tsx("div",{class:b.squareTableRow},
a.tsx("div",{class:q.classes(b.squareTableCell,b.squareTableLabel,b.squareTableLabelRightTop)},c?d.right:d.bottom),a.tsx("div",{class:b.squareTableCell}),a.tsx("div",{class:q.classes(b.squareTableCell,b.squareTableLabel,b.squareTableLabelLeftTop)},c?d.bottom:d.right)))};Object.defineProperty(w,"__esModule",{value:!0})});