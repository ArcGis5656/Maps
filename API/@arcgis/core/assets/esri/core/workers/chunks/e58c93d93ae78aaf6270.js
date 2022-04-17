"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3049],{21781:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(29768),s=r(34250),o=(r(76506),r(91306),r(17533));const l=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?null==(e=this.portalItem)?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,s.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},75025:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(29768),s=r(92143),o=r(76506),l=r(34250),n=(r(91306),r(17533)),a=r(21132);const d=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if((0,o.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.s)(e,s.L.getLogger(this.declaredClass)))}};return(0,i._)([(0,l.Cb)()],t.prototype,"title",null),(0,i._)([(0,l.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},22203:(e,t,r)=>{r.d(t,{C:()=>p});var i=r(29768),s=r(15324),o=r(95873),l=r(76506),n=r(21972),a=r(34250),d=(r(91306),r(17533));let y=class extends((0,o.p)(s.Z)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add((0,n.a)((()=>this.refresh())))}destroy(){this.getCollections=null}refresh(){const e=(0,l.i)(this.getCollections)?this.getCollections():null;if((0,l.b)(e))return void this.removeAll();let t=0;for(const r of e)(0,l.i)(r)&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new s.Z(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e;for(const i of t)if(i){if(r(i)){const t=this.indexOf(i,e);t>=0?t!==e&&this.reorder(i,e):this.add(i,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(i);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,i._)([(0,a.Cb)()],y.prototype,"getCollections",void 0),(0,i._)([(0,a.Cb)()],y.prototype,"getChildrenFunction",void 0),(0,i._)([(0,a.Cb)()],y.prototype,"itemFilterFunction",void 0),y=(0,i._)([(0,d.j)("esri.core.CollectionFlattener")],y);const p=y},81655:(e,t,r)=>{r.d(t,{A:()=>_,S:()=>L});var i=r(29768),s=r(82058),o=r(50406),l=r(32101),n=r(10738),a=r(34250),d=(r(76506),r(91306),r(97714)),y=r(17533),p=r(21801),u=r(60947),c=r(67541),h=r(15324),f=r(22203),b=r(60991),g=r(92143),m=r(86656),v=r(21972),w=r(9530),S=r(20820);const _=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,t){const r=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!r)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const i=this.type,s=-1!==r.indexOf("query"),o=-1!==r.indexOf("map"),l=!!t.exportTilesAllowed,a=-1!==r.indexOf("tilemap"),d="tile"!==i&&!!t.supportsDynamicLayers,y="tile"!==i&&(!t.tileInfo||d),p="tile"!==i&&(!t.tileInfo||d),u="tile"!==i,c=!!t.cimVersion&&n.V.parse(t.cimVersion).since(1,4);return{operations:{supportsQuery:s,supportsExportMap:o,supportsExportTiles:l,supportsTileMap:a},exportMap:o?{supportsArcadeExpressionForLabeling:c,supportsSublayersChanges:u,supportsDynamicLayers:d,supportsSublayerVisibility:y,supportsSublayerDefinitionExpression:p}:null,exportTiles:l?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,s.default)((0,l.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}}),(e=>({error:e}))));const t=await this._allLayersAndTablesPromise;if((0,o.k_)(e),"result"in t)return t.result;throw t.error}};return(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"capabilities",void 0),(0,i._)([(0,d.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),(0,i._)([(0,a.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,i._)([(0,a.Cb)({type:p.Z})],t.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)(c.i)],t.prototype,"id",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)(c.p)],t.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:u.Z})],t.prototype,"spatialReference",void 0),(0,i._)([(0,a.Cb)()],t.prototype,"version",void 0),(0,i._)([(0,d.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=(0,i._)([(0,y.j)("esri.layers.mixins.ArcGISMapService")],t),t},I=g.L.getLogger("esri.layers.TileLayer"),C=h.Z.ofType(w.Z);function x(e,t){e&&e.forEach((e=>{t(e),e.sublayers&&e.sublayers.length&&x(e.sublayers,t)}))}const L=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new f.C({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.handles.add(this.watch("sublayers",((e,t)=>this._handleSublayersChange(e,t)),!0))}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=(0,v.n)(t.origin);if(i<2)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:o}=this.createSublayersForOrigin("web-document"),l=(0,m.g)(this);l.setDefaultOrigin(o),this._set("sublayers",new C(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=(0,v.n)("web-document"===e?"web-map":e);let r=2,i=this.sublayersSourceJSON[2].layers,s=this.sublayersSourceJSON[2].context,o=null;const l=[3,4,5].filter((e=>e<=t));for(const e of l){const t=this.sublayersSourceJSON[e];(0,S.i)(t.layers)&&(r=e,i=t.layers,s=t.context,t.visibleLayers&&(o={visibleLayers:t.visibleLayers,context:t.context}))}const n=[3,4,5].filter((e=>e>r&&e<=t));let a=null;for(const e of n){const{layers:t,visibleLayers:r,context:i}=this.sublayersSourceJSON[e];t&&(a={layers:t,context:i}),r&&(o={visibleLayers:r,context:i})}const d=function(e,t){const r=[],i={};return e?(e.forEach((e=>{const s=new w.Z;if(s.read(e,t),i[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(s)}else r.unshift(s)})),r):r}(i,s),y=new Map,p=new Set;if(a)for(const e of a.layers)y.set(e.id,e);if(o)for(const e of o.visibleLayers)p.add(e);return x(d,(e=>{a&&e.read(y.get(e.id),a.context),o&&e.read({defaultVisibility:p.has(e.id)},o.context)})),{origin:(0,v.c)(r),sublayers:new C({items:d})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{I.error(new b.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"allSublayers",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,type:h.Z.ofType(w.Z)})],t.prototype,"serviceSublayers",void 0),(0,i._)([(0,a.Cb)({value:null,type:C,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=(0,i._)([(0,y.j)("esri.layers.mixins.SublayersOwner")],t),t}},10738:(e,t,r)=>{r.d(t,{V:()=>s});var i=r(60991);class s{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),l=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(l))throw new i.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(l))throw new i.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),a=parseInt(o,10);return new s(n,a,t)}}},6941:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>l,c:()=>n,d:()=>s,e:()=>a,f:()=>d,g:()=>y});const i=[252,146,31,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},l={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},n={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},20820:(e,t,r)=>{function i(e,t,r){const i=t.flatten((({sublayers:e})=>e)).length;return i!==e.length||!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t)}function s(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!o(e,t)}function o(e,t){if(!e||!e.length)return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const s=r.length;for(const{id:t}of e){for(;i<s&&r[i]!==t;)i++;if(i>=s)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}r.d(t,{a:()=>s,i:()=>l,s:()=>i})},46495:(e,t,r)=>{r.d(t,{Z:()=>y});var i=r(29768),s=r(57251),o=r(74673),l=r(34250),n=(r(76506),r(91306),r(17533));r(71552),r(21972),r(23639),r(92143),r(31450),r(40642),r(86656),r(22723),r(91055),r(6906),r(50406),r(60991);const a=new s.J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let d=class extends o.a{constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,i._)([(0,l.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],d.prototype,"description",void 0),(0,i._)([(0,l.Cb)({json:{read:a.read,write:a.write}})],d.prototype,"drawingTool",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],d.prototype,"prototype",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],d.prototype,"thumbnail",void 0),d=(0,i._)([(0,n.j)("esri.layers.support.FeatureTemplate")],d);const y=d},78303:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(29768),s=r(74673),o=r(34250),l=(r(76506),r(91306),r(97714)),n=r(17533),a=r(2906),d=r(9801),y=r(46495);r(21972),r(23639),r(92143),r(31450),r(71552),r(40642),r(86656),r(22723),r(91055),r(6906),r(50406),r(60991),r(53523),r(59465),r(57251),r(42911),r(46826),r(45433);let p=class extends s.a{constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,d.f)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e)){var i;e[t]&&(r[t]=null==(i=e[t])?void 0:i.toJSON())}t.domains=r}};(0,i._)([(0,o.Cb)({json:{write:!0}})],p.prototype,"id",void 0),(0,i._)([(0,o.Cb)({json:{write:!0}})],p.prototype,"name",void 0),(0,i._)([(0,o.Cb)({json:{write:!0}})],p.prototype,"domains",void 0),(0,i._)([(0,l.r)("domains")],p.prototype,"readDomains",null),(0,i._)([(0,a.w)("domains")],p.prototype,"writeDomains",null),(0,i._)([(0,o.Cb)({type:[y.Z],json:{write:!0}})],p.prototype,"templates",void 0),p=(0,i._)([(0,n.j)("esri.layers.support.FeatureType")],p);const u=p},2180:(e,t,r)=>{r.d(t,{Z:()=>y});var i,s=r(29768),o=r(15324),l=r(74673),n=r(34250),a=(r(76506),r(91306),r(17533));r(91055),r(76996),r(21972),r(23639),r(92143),r(31450),r(71552),r(40642),r(86656),r(22723),r(6906),r(50406),r(60991);let d=i=class extends l.a{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],d.prototype,"floorField",void 0),(0,s._)([(0,n.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllMode",void 0),(0,s._)([(0,n.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllLevelIds",void 0),d=i=(0,s._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],d);const y=d},9530:(e,t,r)=>{r.d(t,{Z:()=>B});var i,s=r(29768),o=(r(74569),r(86748)),l=(r(55306),r(71206),r(51979),r(60698),r(65684),r(86758),r(95310),r(20208)),n=r(82058),a=r(96467),d=r(15324),y=r(60991),p=r(95873),u=r(82673),c=r(76506),h=r(22739),f=r(92143),b=r(54179),g=r(32101),m=r(34250),v=r(86656),w=r(86787),S=r(97714),_=r(17533),I=r(2906),C=r(91306),x=r(21972),L=r(78303),O=r(97546),F=r(1709),E=r(77807),j=r(2180),D=r(69218),T=r(31292),P=r(78893),A=r(58142),M=r(21801);function N(e){return e&&"esriSMS"===e.type}function V(e,t,r){var i;const s=this.originIdOf(t)>=(0,x.n)(r.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!r&&"map-image"===(null==(i=r.layer)?void 0:i.type)&&(r.writeSublayerStructure||s)}}function Z(e,t,r){var i;return{enabled:!!r&&"tile"===(null==(i=r.layer)?void 0:i.type)&&this._isOverridden(t)}}function k(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function J(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=(0,x.n)(r.origin))}}r(73796),r(74673),r(60947),r(40642),r(71552),r(23639),r(31450),r(22723),r(91055),r(6906),r(50406),r(84069),r(91597),r(35132),r(89623),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(34229),r(37029),r(76996),r(74071),r(51723),r(23243),r(51669),r(6090),r(48027),r(54174),r(82426),r(29794),r(3977),r(36741),r(34394),r(11253),r(90319),r(38822),r(74057),r(23761),r(63571),r(30776),r(63130),r(25696),r(66396),r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(98402),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(67477),r(78533),r(74653),r(91091),r(58943),r(20543),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(48190),r(85557),r(53785),r(95587),r(94070),r(43022),r(16218),r(9075),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(89241),r(91700),r(63136),r(32037),r(90811),r(93939),r(238),r(71831),r(82933),r(39597),r(617),r(9801),r(53523),r(42911),r(46826),r(45433),r(46495),r(54732),r(50203),r(6941),r(93314),r(35197),r(27207);const $=f.L.getLogger("esri.layers.support.Sublayer");let q=0;const K=new Set;K.add("layer"),K.add("parent"),K.add("loaded"),K.add("loadStatus"),K.add("loadError"),K.add("loadWarnings");let U=i=class extends((0,p.p)((0,b.M)((0,u.I)(h.L)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var t;if(!this.layer&&!this.url)throw new y.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(t=this.source)?void 0:t.type))r=(await(0,n.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var i;let t=this.id;"map-layer"===(null==(i=this.source)?void 0:i.type)&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new F.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?q++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=(0,C.m)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if((0,a.dU)(t)){$.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new D.M({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,C.e)(d.Z.ofType(i),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return null}get url(){var e,t;const r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,i=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null==i?void 0:i.type))return`${r.path}/${i.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${(0,g.B7)(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,v.g)(this),t=new i;return(0,v.g)(t).store=e.clone(K),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return(0,P.eZ)(this,e)}createQuery(){return new T.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,t;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,s=new(0,(await Promise.all([r.e(8957),r.e(9704),r.e(8640),r.e(676)]).then(r.bind(r,68640))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(s.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.floorInfo&&(s.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>2&&(s.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(s.visible=this.visible),this.originIdOf("minScale")>0&&(s.minScale=this.minScale),this.originIdOf("maxScale")>0&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(s.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>2&&(s.renderer=(0,c.d9)(this.renderer)),"data-layer"===(null==(t=this.source)?void 0:t.type)&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(s.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(s.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(s.customParameters=this.layer.customParameters),s}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let s=null;return r.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(s=e),!!s)})),s}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),t){var i,s,o,l;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new y.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:n},{default:a}]=await Promise.all([r.e(9214).then(r.bind(r,49214)).then((e=>e.q)),r.e(7258).then(r.bind(r,87258))]),d=await n(this.url,T.Z.from(e),null!=(i=null==(s=this.layer)?void 0:s.spatialReference)?i:null,{...t,query:{...null==(o=this.layer)?void 0:o.customParameters,token:null==(l=this.layer)?void 0:l.apiKey}}),p=a.fromJSON(d.data);if(null!=p&&p.features)for(const e of p.features)e.sourceLayer=this;return p}toExportImageJSON(e){var t;const r={id:this.id,source:(null==(t=this.source)?void 0:t.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const t=(0,c.i)(e)?(0,A.c)(e,this):this.definitionExpression;r.definitionExpression=t}else(0,c.i)(e)&&(r.definitionExpression=e);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,t)=>(e[t]=this.originIdOf(t),e)),{}),s=Object.keys(i).some((e=>i[e]>2));if(s){const e=r.drawingInfo={};i.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),i.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of r)N(e.symbol)&&t(e.symbol);"symbol"in e&&N(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&N(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let s,o;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",o="supportsModification"}const l=(0,v.g)(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(o&&!1===this.get(`capabilities.exportMap.${o}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${o}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==l&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||($.error(new y.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,t){$.error(new y.Z("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};U.test={isMapImageLayerOverridePolicy:e=>e===k||e===V,isTileImageLayerOverridePolicy:e=>e===Z},(0,s._)([(0,m.Cb)({readOnly:!0})],U.prototype,"capabilities",void 0),(0,s._)([(0,S.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],U.prototype,"readCapabilities",null),(0,s._)([(0,m.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:V}}})],U.prototype,"definitionExpression",null),(0,s._)([(0,m.Cb)({type:[O.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],U.prototype,"fields",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],U.prototype,"fieldsIndex",null),(0,s._)([(0,m.Cb)({type:j.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:V},origins:{"web-scene":{read:!1,write:!1}}}})],U.prototype,"floorInfo",null),(0,s._)([(0,m.Cb)({type:M.Z,json:{read:{source:"layerDefinition.extent"}}})],U.prototype,"fullExtent",void 0),(0,s._)([(0,m.Cb)({type:String})],U.prototype,"globalIdField",void 0),(0,s._)([(0,S.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],U.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,m.Cb)({type:C.I,json:{write:{ignoreOrigin:!0}}})],U.prototype,"id",null),(0,s._)([(0,m.Cb)({value:null,type:[E.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:k}}})],U.prototype,"labelingInfo",null),(0,s._)([(0,I.w)("labelingInfo")],U.prototype,"writeLabelingInfo",null),(0,s._)([(0,m.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:k}}})],U.prototype,"labelsVisible",null),(0,s._)([(0,m.Cb)({value:null})],U.prototype,"layer",null),(0,s._)([(0,m.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:J}}})],U.prototype,"legendEnabled",void 0),(0,s._)([(0,m.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],U.prototype,"listMode",null),(0,s._)([(0,m.Cb)({type:Number,value:0,json:{write:{overridePolicy:k}}})],U.prototype,"minScale",null),(0,s._)([(0,S.r)("minScale",["minScale","layerDefinition.minScale"])],U.prototype,"readMinScale",null),(0,s._)([(0,m.Cb)({type:Number,value:0,json:{write:{overridePolicy:k}}})],U.prototype,"maxScale",null),(0,s._)([(0,S.r)("maxScale",["maxScale","layerDefinition.maxScale"])],U.prototype,"readMaxScale",null),(0,s._)([(0,m.Cb)({type:String})],U.prototype,"objectIdField",void 0),(0,s._)([(0,S.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],U.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,m.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:k}}})],U.prototype,"opacity",null),(0,s._)([(0,S.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],U.prototype,"readOpacity",null),(0,s._)([(0,I.w)("opacity")],U.prototype,"writeOpacity",null),(0,s._)([(0,m.Cb)({json:{type:C.I,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:k}}})],U.prototype,"parent",void 0),(0,s._)([(0,I.w)("parent")],U.prototype,"writeParent",null),(0,s._)([(0,m.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:J,writer(e,t,r){t[r]=!e}}}})],U.prototype,"popupEnabled",void 0),(0,s._)([(0,m.Cb)({type:o.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:J}}})],U.prototype,"popupTemplate",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),(0,s._)([(0,m.Cb)({types:l.r,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:k},origins:{"web-scene":{types:l.w,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:k}}}}})],U.prototype,"renderer",null),(0,s._)([(0,m.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":D.D,"map-layer":D.M}},cast(e){if(e){if("mapLayerId"in e)return(0,C.k)(D.M,e);if("dataSource"in e)return(0,C.k)(D.D,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:k}}})],U.prototype,"source",null),(0,s._)([(0,m.Cb)()],U.prototype,"sourceJSON",void 0),(0,s._)([(0,m.Cb)({value:null,json:{type:[C.I],write:{target:"subLayerIds",allowNull:!0,overridePolicy:k}}})],U.prototype,"sublayers",null),(0,s._)([(0,w.p)("sublayers")],U.prototype,"castSublayers",null),(0,s._)([(0,I.w)("sublayers")],U.prototype,"writeSublayers",null),(0,s._)([(0,m.Cb)({type:String,json:{name:"name",write:{overridePolicy:J}}})],U.prototype,"title",void 0),(0,s._)([(0,m.Cb)({type:String})],U.prototype,"typeIdField",void 0),(0,s._)([(0,S.r)("typeIdField",["layerDefinition.typeIdField"])],U.prototype,"readTypeIdField",null),(0,s._)([(0,m.Cb)({type:[L.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],U.prototype,"types",void 0),(0,s._)([(0,m.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:Z}}})],U.prototype,"url",null),(0,s._)([(0,m.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:k}}})],U.prototype,"visible",null),(0,s._)([(0,I.w)("visible")],U.prototype,"writeVisible",null),U=i=(0,s._)([(0,_.j)("esri.layers.support.Sublayer")],U);const B=U}}]);