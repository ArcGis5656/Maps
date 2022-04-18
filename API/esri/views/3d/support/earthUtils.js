// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils","../../../geometry/Point","../../../geometry/projectionEllipsoid"],function(d,e,h,p){function k(b,a,c){return n(b,a.longitude,a.latitude,c.longitude,c.latitude)}function n(b,a,c,f,g){c=e.deg2rad(c);g=e.deg2rad(g);a=e.deg2rad(a);const l=e.deg2rad(f);f=Math.sin((c-g)/2);a=Math.sin((a-l)/2);c=2*e.asinClamped(Math.sqrt(f*f+Math.cos(c)*Math.cos(g)*a*a));return Math.round(c*b*1E4)/1E4}function m(b,a){b/=15;a||(b=Math.round(b));return b}d.getGreatCircleDistance=
n;d.getGreatCircleDistanceFromPoints=k;d.getGreatCircleSpanAt=function(b,a,c){const f=a.spatialReference,g=p.getReferenceEllipsoid(f),l=new h(a.x,b.y,f),q=new h(c.x,b.y,f);a=new h(b.x,a.y,f);b=new h(b.x,c.y,f);return{lon:k(g.radius,l,q),lat:k(g.radius,a,b)}};d.getLatDeltaForDistance=function(b,a){return e.rad2deg(b/a)};d.getLonDeltaForDistance=function(b,a,c){a/=c;b=e.deg2rad(b);a=Math.sin(a/2);b=Math.cos(b);b=2*e.asinClamped(Math.sqrt(a*a/(b*b)));return e.rad2deg(b)};d.getMaxCameraAltitude=function(b,
a){b=e.deg2rad(b/2);return(1-Math.sin(b))*a/Math.sin(b)};d.longitudeToTimezone=m;d.pointToTimezone=function(b,a){return m(b.longitude,a)};d.positionToTimezoneInfo=function(b,a){a||(a={hours:0,minutes:0,seconds:0});a.hours=m(b[0],!0);b=a.hours%1;a.hours-=b;a.minutes=60*b;b=a.minutes%1;a.minutes-=b;a.seconds=Math.round(60*b);return a};Object.defineProperty(d,"__esModule",{value:!0})});