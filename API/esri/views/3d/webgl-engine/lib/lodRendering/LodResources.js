// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/arrayUtils"],function(d,f){function g(b){const a=[];b.components.forEach(c=>{a.push(c.geometry)});return f.unique(a)}d.computeFaceCount=function(b){return g(b).reduce((a,c)=>a+c.indexCount/3,0)};d.geometriesFromLodLevelResources=g;d.geometriesFromLodResources=function(b){const a=[];b.levels.forEach(c=>{c.components.forEach(e=>{a.push(e.geometry)})});return f.unique(a)};d.materialsFromLodResources=function(b){const a=[];b.levels.forEach(c=>{c.components.forEach(e=>
{a.push(e.material)})});return f.unique(a)};d.texturesFromLodResources=function(b){const a=[];b.levels.forEach(c=>{c.components.forEach(e=>{e.textures&&a.push(...e.textures)})});return f.unique(a)};Object.defineProperty(d,"__esModule",{value:!0})});