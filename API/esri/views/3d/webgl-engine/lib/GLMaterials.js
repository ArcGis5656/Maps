// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe"],function(d,f){function e(c){switch(c){default:case 0:return 0;case 1:return 7;case 4:return 3;case 3:return 2;case 2:return 1;case 5:return 4;case 7:return 3;case 6:return 3}}let h=function(){function c(b,a){this._material=b;this._repository=a;this._map=new Map}var g=c.prototype;g.destroy=function(){this._map.forEach((b,a)=>{f.isSome(b)&&this._repository.release(this._material,e(a))})};g.load=function(b,a){this._map.has(a)||this._map.set(a,this._repository.acquire(this._material,
e(a)));a=this._map.get(a);if(f.isSome(a)){if(2===a.ensureResources(b))return a;this._repository.requestRender()}return null};return c}();d.GLMaterials=h;d.outputFromPass=e;Object.defineProperty(d,"__esModule",{value:!0})});