// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/uuid ../../../layers/support/BuildingFilterBlock ../../../layers/support/BuildingFilterModeSolid ../../../layers/support/BuildingFilterModeXRay".split(" "),function(e,g,n,k,p,q){function h(a){a="string"===typeof a?a:a.id;return!!a&&-1!==a.indexOf("__BUILDING_EXPLORER_FILTER__")}function r(a,c){const d=c.length;if(g.isNone(a)||a.length!==d)return!1;for(let b=0;b<d;++b){const f=c.getItemAt(b).toJSON(),l=a.getItemAt(b).toJSON();f.id="";l.id="";if(JSON.stringify(f)!==
JSON.stringify(l))return!1}return!0}function m(a){return a.filter(c=>!!c).map(c=>`(${c})`).join(" AND ")}e.generateFilterId=function(){return`${n.generateUUID()}${"__BUILDING_EXPLORER_FILTER__"}`};e.getFilterBlockSolid=function(a){return(a=m(a))?new k({filterExpression:a,filterMode:new p}):null};e.getFilterBlockXRay=function(a){return(a=m(a))?new k({filterExpression:a,filterMode:new q}):null};e.getValueFromFilters=function(a,c){for(const d of a.items)for(const b of d.filters.items)if(h(b)&&(a=c(b),
g.isSome(a)))return a;return null};e.isBuildingExplorerFilter=h;e.setFilterOnLayers=function(a,c){a.forEach(d=>{var b=d.filters.filter(f=>!h(f));g.isSome(c)&&b.push(c);r(d.filters,b)||(d.filters=b);b=d.filters.find(f=>h(f));d.activeFilterId=g.isSome(b)?b.id:null})};Object.defineProperty(e,"__esModule",{value:!0})});