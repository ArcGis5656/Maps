// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(l,n){let t=function(){function p(a,b=null){this.tile=a;n.isSome(b)&&(a=a.extent,this.samplerData={pixelData:b.values,width:b.width,height:b.height,safeWidth:.99999999*(b.width-1),noDataValue:b.noDataValue,dx:(b.width-1)/(a[2]-a[0]),dy:(b.width-1)/(a[3]-a[1]),x0:a[0],y1:a[3]})}p.prototype.sample=function(a,b){if(!n.isNone(this.samplerData)){var {safeWidth:f,width:q,pixelData:g,noDataValue:h,dx:u,dy:v,y1:w,x0:x}=this.samplerData;b=v*(w-b);b=0>b?0:b>f?f:
b;a=u*(a-x);var k=0>a?0:a>f?f:a;a=Math.floor(b);var r=Math.floor(k),c=a*q+r,d=c+q,e=g[c],m=g[d];c=g[c+1];d=g[d+1];if(e!==h&&m!==h&&c!==h&&d!==h)return k-=r,e+=(c-e)*k,e+(m+(d-m)*k-e)*(b-a)}};return p}();l.ElevationTile=t;l.default=t;Object.defineProperty(l,"__esModule",{value:!0})});