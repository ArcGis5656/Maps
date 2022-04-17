/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{L as r}from"./Logger.js";import{b as t,u as a,a as o,c as n}from"./quantizationUtils.js";function s(s,u,c,m,p){const g=s.referencesGeometry()&&p?function(s,u,c){const{transform:m,hasZ:p,hasM:g}=c;i.has(u)||i.set(u,function(s){const i={};switch(s){case"esriGeometryPoint":return(e,r,t,a)=>n(r,i,e,t,a);case"esriGeometryPolygon":return(e,r,t,a)=>o(r,i,e,t,a);case"esriGeometryPolyline":return(e,r,t,o)=>a(r,i,e,t,o);case"esriGeometryMultipoint":return(e,r,a,o)=>t(r,i,e,a,o);default:return r.getLogger("esri.views.2d.support.arcadeOnDemand").error(new e("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}(u));const l=i.get(u)(s.geometry,m,p,g);return{...s,geometry:l}}(u,m,p):u,l=s.repurposeFeature(g);try{return s.evaluate({...c,$feature:l})}catch(e){return r.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}const i=new Map;export{s as c};
