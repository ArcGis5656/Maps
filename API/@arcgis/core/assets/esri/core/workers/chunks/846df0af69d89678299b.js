"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8324],{75025:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(29768),n=r(92143),s=r(76506),o=r(34250),l=(r(91306),r(17533)),a=r(21132);const d=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if((0,s.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.s)(e,n.L.getLogger(this.declaredClass)))}};return(0,i._)([(0,o.Cb)()],t.prototype,"title",null),(0,i._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.ArcGISService")],t),t}},62162:(e,t,r)=>{r.d(t,{P:()=>w});var i=r(29768),n=r(88762),s=r(82058),o=r(41864),l=r(60991),a=r(92143),d=r(76506),p=r(50406),u=r(32101),y=r(34250),c=(r(91306),r(97714)),h=r(17533),m=r(2906),f=r(49900),g=r(56420),b=r(74653);const v=a.L.getLogger("esri.layers.mixins.PortalLayer"),w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8642).then(r.bind(r,8642)).then((e=>e.l));return(0,p.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,p.D_)(e)||v.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?null==n.id?void 0:n.id.findCredential(this.url):null;if(!t)return!0;const r=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=r,(0,d.b)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,r;const i=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user;if(i)return i;const l=n.id.findServerInfo(this.url);if(null==l||!l.owningSystemUrl)return null;const a=`${l.owningSystemUrl}/sharing/rest`,p=f.Z.getDefault();if(p&&p.loaded&&(0,u.Fv)(p.restUrl)===(0,u.Fv)(a))return p.user;const y=`${a}/community/self`,c=(0,d.i)(e)?e.signal:null,h=await(0,o.r)((0,s.default)(y,{authMode:"no-prompt",query:{f:"json"},signal:c}));return h.ok?b.default.fromJSON(h.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&i&&!(0,u.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,y.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,i._)([(0,c.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.w)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,y.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,h.j)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}},52228:(e,t,r)=>{var i,n;function s(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function a(e,t){const r=t||l(e),s=e.valueUnit||"unknown";return r===i.Unknown?n.Constant:e.stops?n.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?n.ClampedLinear:"unknown"===s?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?n.Proportional:n.Additive:n.Identity:n.RealWorldSize}r.d(t,{I:()=>i,T:()=>n,a:()=>a,b:()=>o,g:()=>l,i:()=>s}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(n||(n={}))},68714:(e,t,r)=>{r.d(t,{l:()=>o});var i=r(41864),n=r(50406),s=r(17533);async function o(e,t,r){const o=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(o&&"unique-value"===o.type&&o.styleOrigin){const l=await(0,i.r)(o.populateFromStyle());if((0,n.k_)(r),!1===l.ok){const r=l.error;t&&t.messages&&t.messages.push(new s.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:t})),e.clear("renderer",t.origin)}}}},58324:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var i,n=r(29768),s=(r(74569),r(86748)),o=(r(55306),r(71206),r(51979),r(60698),r(65684),r(86758)),l=r(95310),a=r(20208),d=r(82058),p=r(96467),u=r(60991),y=r(92143),c=r(76506),h=r(54179),m=r(50406),f=r(34250),g=r(91306),b=r(97714),v=r(17533),w=r(22781),I=r(41617),_=r(75025),S=r(11118),C=r(8547),x=r(46942),P=r(89440),F=r(62162),T=r(16647),k=r(58912),R=r(19902),j=r(67541),O=r(83290),E=r(47346),U=r(14249),D=r(77807),L=r(68653),N=r(74673),Z=r(68714),A=r(31292),z=r(78893),V=r(47842),$=r(60947),J=r(21801);r(73796),r(21972),r(23639),r(60474),r(66396),r(22723),r(86656),r(91055),r(6540),r(19657),r(6906),r(31450),r(71552),r(40642),r(2906),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(32422),r(57251),r(15324),r(76996),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(60217),r(74071),r(51723),r(23243),r(51669),r(6090),r(48027),r(54174),r(82426),r(29794),r(3977),r(36741),r(34394),r(11253),r(90319),r(38822),r(52228),r(74057),r(23761),r(85339),r(63571),r(30776),r(63130),r(25696),r(59877),r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(94216),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(48190),r(85557),r(53785),r(95587),r(94070),r(43022),r(16218),r(9075),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(9352),r(89241),r(91700),r(63136),r(32037),r(90811),r(93939),r(238),r(71831),r(21132),r(92200),r(65949),r(22465),r(65775),r(5777),r(6210),r(36231),r(93314),r(35197),r(69218),r(97546),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(27207),r(41864),r(56420),r(73173),r(74742),r(28239),r(59765),r(77361),r(1557),r(13322),r(14460),r(17298),r(50203),r(6941),r(1709);let q=i=class extends N.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,n._)([(0,f.Cb)({type:Number,json:{write:!0}})],q.prototype,"age",void 0),(0,n._)([(0,f.Cb)({type:Number,json:{write:!0}})],q.prototype,"ageReceived",void 0),(0,n._)([(0,f.Cb)({type:Number,json:{write:!0}})],q.prototype,"displayCount",void 0),(0,n._)([(0,f.Cb)({type:Number,json:{write:!0}})],q.prototype,"maxObservations",void 0),q=i=(0,n._)([(0,v.j)("esri.layers.support.PurgeOptions")],q);const G=q,W=y.L.getLogger("esri.layers.StreamLayer"),H=(0,E.d)();let M=class extends((0,x.F)((0,S.B)((0,R.T)((0,k.S)((0,T.R)((0,_.A)((0,P.O)((0,F.P)((0,h.M)((0,C.C)(I.Z))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new G,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=$.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new u.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,c.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,U.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,a.a)(i,t,r)||void 0;return e||W.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new l.Z({defaultSymbol:Q(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:Q(e.symbol,e,r)})))}):new o.Z({symbol:Q(t.defaultSymbol,t,r)})}createPopupTemplate(e){return(0,z.eZ)(this,e)}createQuery(){const e=new A.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new u.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new u.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new u.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new u.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,U.YN)(this.renderer,this.fieldsIndex),(0,U.UF)(this.timeInfo,this.fieldsIndex),(0,Z.l)(this,{origin:"service"})}};(0,n._)([(0,f.Cb)({type:String})],M.prototype,"copyright",void 0),(0,n._)([(0,f.Cb)({readOnly:!0})],M.prototype,"defaultPopupTemplate",null),(0,n._)([(0,f.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],M.prototype,"definitionExpression",void 0),(0,n._)([(0,f.Cb)({type:String})],M.prototype,"displayField",void 0),(0,n._)([(0,f.Cb)({type:V.E})],M.prototype,"elevationInfo",void 0),(0,n._)([(0,f.Cb)(O.f)],M.prototype,"featureReduction",void 0),(0,n._)([(0,f.Cb)(H.fields)],M.prototype,"fields",void 0),(0,n._)([(0,f.Cb)(H.fieldsIndex)],M.prototype,"fieldsIndex",void 0),(0,n._)([(0,f.Cb)({type:J.Z})],M.prototype,"geometryDefinition",void 0),(0,n._)([(0,f.Cb)({type:w.f.apiValues,json:{read:{reader:w.f.read}}})],M.prototype,"geometryType",void 0),(0,n._)([(0,f.Cb)(j.l)],M.prototype,"labelsVisible",void 0),(0,n._)([(0,f.Cb)({type:[D.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:L.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],M.prototype,"labelingInfo",void 0),(0,n._)([(0,f.Cb)(j.b)],M.prototype,"legendEnabled",void 0),(0,n._)([(0,f.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,n._)([(0,f.Cb)({type:g.I})],M.prototype,"maxReconnectionAttempts",void 0),(0,n._)([(0,f.Cb)({type:g.I})],M.prototype,"maxReconnectionInterval",void 0),(0,n._)([(0,f.Cb)(j.c)],M.prototype,"maxScale",void 0),(0,n._)([(0,f.Cb)(j.m)],M.prototype,"minScale",void 0),(0,n._)([(0,f.Cb)({type:String})],M.prototype,"objectIdField",void 0),(0,n._)([(0,f.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],M.prototype,"operationalLayerType",void 0),(0,n._)([(0,f.Cb)(j.p)],M.prototype,"popupEnabled",void 0),(0,n._)([(0,f.Cb)({type:s.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],M.prototype,"popupTemplate",void 0),(0,n._)([(0,f.Cb)({type:G})],M.prototype,"purgeOptions",void 0),(0,n._)([(0,f.Cb)({types:a.r,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:a.w,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],M.prototype,"renderer",null),(0,n._)([(0,b.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,b.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],M.prototype,"readRenderer",null),(0,n._)([(0,f.Cb)(j.d)],M.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,f.Cb)()],M.prototype,"sourceJSON",void 0),(0,n._)([(0,f.Cb)({type:$.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],M.prototype,"spatialReference",void 0),(0,n._)([(0,f.Cb)({json:{read:!1}})],M.prototype,"type",void 0),(0,n._)([(0,f.Cb)(j.u)],M.prototype,"url",void 0),(0,n._)([(0,f.Cb)({type:Number})],M.prototype,"updateInterval",void 0),(0,n._)([(0,f.Cb)({type:String})],M.prototype,"webSocketUrl",void 0),M=(0,n._)([(0,v.j)("esri.layers.StreamLayer")],M);const Q=(0,v.c)({types:p.QT}),Y=M}}]);