// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function d(a){return 32+a.length}b.ByteSizeUnit=void 0;(function(a){a[a.KILOBYTES=1024]="KILOBYTES";a[a.MEGABYTES=1048576]="MEGABYTES";a[a.GIGABYTES=1073741824]="GIGABYTES"})(b.ByteSizeUnit||(b.ByteSizeUnit={}));b.estimateAttributesObjectSize=function(a){if(!a)return 0;let c=32;for(const e in a)if(a.hasOwnProperty(e)){const f=a[e];switch(typeof f){case "string":c+=d(f);break;case "number":c+=16;break;case "boolean":c+=4}}return c};b.estimateFixedArraySize=function(a,
c){return 32+a.length*c};b.estimateNumberByteSize=function(){return 16};b.estimateStringByteSize=d;Object.defineProperty(b,"__esModule",{value:!0})});