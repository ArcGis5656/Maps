// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../utils"],function(f,k,l,g){f.labelPoints=function(a,h,c){var e=h.map(d=>d.toJSON());const b=h[0].spatialReference;a=g.parseUrl(a);e={...a.query,f:"json",sr:b.wkid?b.wkid:JSON.stringify(b.toJSON()),polygons:JSON.stringify(e)};c=g.asValidOptions(e,c);return k(a.path+"/labelPoints",c).then(({data:d})=>(d.labelPoints||[]).map(m=>l.fromJSON(m).set({spatialReference:b})))};Object.defineProperty(f,"__esModule",{value:!0})});