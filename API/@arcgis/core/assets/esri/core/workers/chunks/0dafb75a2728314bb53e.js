"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[560],{66655:(e,r,t)=>{t.d(r,{A:()=>p});var i=t(29768),n=(t(74569),t(34250)),l=(t(76506),t(91306),t(97714)),a=t(17533),s=t(9411),o=t(60947);const p=e=>{let r=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new s.T({layer:this}):null}};return(0,i._)([(0,n.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,i._)([(0,n.Cb)()],r.prototype,"minScale",void 0),(0,i._)([(0,l.r)("service","minScale")],r.prototype,"readMinScale",null),(0,i._)([(0,n.Cb)()],r.prototype,"maxScale",void 0),(0,i._)([(0,l.r)("service","maxScale")],r.prototype,"readMaxScale",null),(0,i._)([(0,n.Cb)({type:o.Z})],r.prototype,"spatialReference",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],r.prototype,"supportsBlankTile",null),(0,i._)([(0,n.Cb)(s.s)],r.prototype,"tileInfo",void 0),(0,i._)([(0,n.Cb)()],r.prototype,"tilemapCache",void 0),(0,i._)([(0,l.r)("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),(0,i._)([(0,n.Cb)()],r.prototype,"version",void 0),r=(0,i._)([(0,a.j)("esri.layers.mixins.ArcGISCachedService")],r),r}},58142:(e,r,t)=>{function i(e){var r;const t=e.layer;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function n(e,r){var t;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField?a(e,r.floorInfo.floorField):null}function l(e,r){const{definitionExpression:t}=r;return e?t?`(${t}) AND (${e})`:e:t}function a(e,r){if(null==e||!e.length)return null;const t=e.filter((e=>""!==e)).map((e=>`'${e}'`));return t.push("''"),`${r} IN (${t.join(",")}) OR ${r} IS NULL`}t.d(r,{a:()=>i,c:()=>l,g:()=>n})},52228:(e,r,t)=>{var i,n;function l(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function o(e,r){const t=r||s(e),l=e.valueUnit||"unknown";return t===i.Unknown?n.Constant:e.stops?n.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?n.ClampedLinear:"unknown"===l?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?n.Proportional:n.Additive:n.Identity:n.RealWorldSize}t.d(r,{I:()=>i,T:()=>n,a:()=>o,b:()=>a,g:()=>s,i:()=>l}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(n||(n={}))},90611:(e,r,t)=>{t.r(r),t.d(r,{default:()=>U});var i=t(29768),n=t(82058),l=t(60991),a=t(95873),s=t(76506),o=t(54179),p=t(50406),u=t(32101),c=t(34250),d=t(86787),h=t(97714),y=t(17533),f=t(2906),v=t(60947),_=t(41617),m=t(21781),S=t(66655),g=t(81655),b=t(75025),C=t(11118),w=t(8547),T=t(89440),O=t(62162),R=t(16647),k=t(58912),I=t(21132),x=t(67541),D=t(9530);t(31450),t(71552),t(88762),t(92143),t(40642),t(21972),t(23639),t(60474),t(66396),t(22723),t(86656),t(91055),t(6540),t(19657),t(6906),t(91306),t(82933),t(15324),t(76996),t(58085),t(74673),t(74569),t(21801),t(73796),t(91597),t(35132),t(89623),t(84069),t(44567),t(98380),t(92896),t(22781),t(57251),t(32422),t(82673),t(22739),t(20543),t(9411),t(43352),t(53785),t(95587),t(92482),t(82426),t(29794),t(92817),t(79764),t(89241),t(91700),t(10738),t(22203),t(20820),t(92200),t(65949),t(54174),t(22465),t(65775),t(5777),t(41864),t(49900),t(3482),t(67477),t(78533),t(74653),t(91091),t(58943),t(56420),t(73173),t(74742),t(28239),t(38742),t(93314),t(35197),t(1557),t(47842),t(14249),t(60217),t(17298),t(85557),t(34394),t(86748),t(29107),t(30574),t(2157),t(25977),t(58076),t(98242),t(7471),t(54414),t(59465),t(1648),t(8925),t(33921),t(45154),t(16769),t(55531),t(30582),t(593),t(85699),t(96055),t(47776),t(18033),t(6331),t(62048),t(4292),t(75626),t(72652),t(29641),t(30493),t(70821),t(34229),t(37029),t(55306),t(96467),t(63571),t(30776),t(48027),t(63130),t(25696),t(59877),t(42775),t(95834),t(57150),t(76726),t(20444),t(76393),t(78548),t(2497),t(49906),t(46527),t(11799),t(48649),t(94216),t(9960),t(30823),t(53326),t(5853),t(39141),t(48243),t(34635),t(10401),t(70737),t(36834),t(85339),t(8487),t(17817),t(90814),t(15459),t(61847),t(16796),t(16955),t(22401),t(77894),t(55187),t(8586),t(44509),t(69814),t(11305),t(62259),t(44790),t(5909),t(60669),t(48208),t(51589),t(65684),t(12158),t(74864),t(63683),t(94479),t(45702),t(51127),t(74071),t(51723),t(23243),t(51669),t(6090),t(3977),t(36741),t(11253),t(90319),t(38822),t(52228),t(74057),t(23761),t(48190),t(94070),t(43022),t(16218),t(9075),t(71206),t(9352),t(51979),t(63136),t(32037),t(60698),t(90811),t(86758),t(95310),t(93939),t(238),t(71831),t(20208),t(78303),t(9801),t(53523),t(42911),t(46826),t(45433),t(46495),t(97546),t(54732),t(1709),t(77807),t(50203),t(6941),t(2180),t(69218),t(31292),t(27207),t(78893);const L=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let A=class extends((0,C.B)((0,g.S)((0,k.S)((0,T.O)((0,O.P)((0,S.A)((0,g.A)((0,b.A)((0,o.M)((0,a.p)((0,R.R)((0,m.A)((0,w.C)(_.Z)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,s.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(p.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&v.Z.fromJSON(e)}writeSublayers(e,r,t,i){if(!this.loaded||!e)return;const n=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),l=[],a={writeSublayerStructure:!1,...i};n.forEach((e=>{const r=e.write({},a);l.push(r)})),l.some((e=>Object.keys(e).length>1))&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,u.mN)(e).path)):null}fetchTile(e,r,t,i={}){const{signal:l}=i,a=this.getTileUrl(e,r,t),s={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,n.default)(a,s).then((e=>e.data))}getTileUrl(e,r,t){const i=!this.tilemapCache&&this.supportsBlankTile,n=(0,u.B7)({...this.parsedUrl.query,blankTile:!i&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${n?"?"+n:""}`}_fetchService(e){return new Promise(((r,t)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new l.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new l.Z("tile-layer:undefined-url","layer's url is not defined");const i=(0,I.p)(this.parsedUrl.path);if((0,s.i)(i)&&"ImageServer"===i.serverType)throw new l.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,n.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,I.i)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!(0,I.b)(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,n.default)(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new l.Z("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,i=L.length;t<i;t++)if(r=L[t],r.toLowerCase().indexOf(e)>-1)return(0,u.hF)("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,i._)([(0,c.Cb)({readOnly:!0})],A.prototype,"attributionDataUrl",null),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],A.prototype,"isReference",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],A.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({type:Boolean})],A.prototype,"resampling",void 0),(0,i._)([(0,c.Cb)()],A.prototype,"sourceJSON",void 0),(0,i._)([(0,c.Cb)({type:v.Z})],A.prototype,"spatialReference",void 0),(0,i._)([(0,h.r)("spatialReference",["spatialReference","tileInfo"])],A.prototype,"readSpatialReference",null),(0,i._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],A.prototype,"sublayers",void 0),(0,i._)([(0,f.w)("sublayers",{layers:{type:[D.Z]}})],A.prototype,"writeSublayers",null),(0,i._)([(0,c.Cb)({json:{read:!1,write:!1}})],A.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)()],A.prototype,"tileServers",null),(0,i._)([(0,d.p)("tileServers")],A.prototype,"castTileServers",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),(0,i._)([(0,c.Cb)(x.u)],A.prototype,"url",void 0),A=(0,i._)([(0,y.j)("esri.layers.TileLayer")],A),A.prototype.fetchTile.__isDefault__=!0;const U=A}}]);