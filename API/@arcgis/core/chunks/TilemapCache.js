/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import e from"../layers/support/TileInfo.js";import{_ as t}from"./tslib.es6.js";import i from"../request.js";import l from"../core/Accessor.js";import a from"../core/Error.js";import{HandleOwnerMixin as r}from"../core/HandleOwner.js";import{L as s}from"./Logger.js";import{L as o}from"./LRUCache.js";import{waitTicks as n,P as c}from"../core/scheduling.js";import{onAbort as h,isAbortError as p,isAborted as m,createAbortError as f}from"../core/promiseUtils.js";import{objectToQuery as u}from"../core/urlUtils.js";import{init as v}from"../core/watchUtils.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import{q as y,clone as b}from"../core/lang.js";import{cast as w}from"../core/accessorSupport/decorators/cast.js";import{subclass as g}from"../core/accessorSupport/decorators/subclass.js";const _={type:e,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:S}}}}};function S(t,i,l,a){if(!t)return null;const{minScale:r,maxScale:s,minLOD:o,maxLOD:n}=i;if(null!=o&&null!=n)return a&&a.ignoreMinMaxLOD?e.fromJSON(t):e.fromJSON({...t,lods:t.lods.filter((({level:e})=>null!=e&&e>=o&&e<=n))});if(0!==r&&0!==s){const i=e=>Math.round(1e4*e)/1e4,l=r?i(r):1/0,a=s?i(s):-1/0;return e.fromJSON({...t,lods:t.lods.filter((e=>{const t=i(e.scale);return t<=l&&t>=a}))})}return e.fromJSON(t)}class A{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%8,a=i>>3,r=this._tileAvailabilityBitSet;return a<0||a>r.length?"unknown":r[a]&1<<l?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let l=!0,a=!0;const r=Math.ceil(t*i/8),s=new Uint8Array(r);let o=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(a=!1,s[o]|=1<<i):l=!1,7===i&&++o}a?this._allAvailability="unavailable":l?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=s,this.byteSize+=s.length)}static fromDefinition(e,t){const l=e.service.request||i,{row:r,col:s,width:o,height:n}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,l(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;i&&(t=`${t}?${i}`);return t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:s,width:o,height:n},valid:!0,data:y(o*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==s||e.location.width!==o||e.location.height!==n))throw new a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:s,width:o,height:n}});return A.fromJSON(e)}))}static fromJSON(e){A.validateJSON(e);const t=new A;return t.location=Object.freeze(b(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var j;const L=s.getLogger("esri.layers.support.TilemapCache");let $=j=class extends(r(l)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=i,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new o(this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],(()=>this._initializeTilemapDefinition())),v(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(L.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l){if(!this._availableLevels[e])return Promise.reject(new a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,r);if(s)return Promise.resolve(s);const o=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{h(o,(()=>t(f())));const i=T(r);let a=this._pendingTilemapRequests[i];if(!a){a=A.fromDefinition(r,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof A){const r=l.getAvailability(t,i);return"unavailable"===r?Promise.reject(new a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(p(l))throw l;return"unknown"})):Promise.reject(new a("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,l,a){l.level=e,l.row=t,l.col=i;const r=this.layer.tileInfo;r.updateTileInfo(l);const s=this.fetchAvailability(e,t,i,a).catch((e=>{if(p(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,a,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,a,r){if(!this._prefetchingEnabled)return;const s=`prefetch-${e}`;if(this.handles.has(s))return;const o=new AbortController;r.then((()=>o.abort()),(()=>o.abort()));let c=!1;const h={remove(){c||(c=!0,o.abort())}};if(this.handles.add(h,s),await n(10,o.signal).catch((()=>{})),c||(c=!0,this.handles.remove(s)),m(o))return;const p={id:e,level:t,row:i,col:l},f={...a,signal:o.signal},u=this.layer.tileInfo;for(let e=0;j._prefetches.length<j._maxPrefetch&&u.upsampleTile(p);++e){const e=this.fetchAvailability(p.level,p.row,p.col,f);j._prefetches.push(e);const t=()=>{j._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:l}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:u({...t.query,...l,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const a=T(l);return this._tilemapCache.get(a)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};$._maxPrefetch=4,$._prefetches=new c({initialSize:j._maxPrefetch}),t([d({constructOnly:!0,type:Number})],$.prototype,"levels",void 0),t([w("levels")],$.prototype,"castLevels",null),t([d({readOnly:!0,type:Number})],$.prototype,"size",null),t([d({constructOnly:!0,type:Number})],$.prototype,"cacheByteSize",void 0),t([d({constructOnly:!0})],$.prototype,"layer",void 0),t([d({constructOnly:!0})],$.prototype,"request",void 0),$=j=t([g("esri.layers.support.TilemapCache")],$);export{$ as T,S as r,_ as s};
