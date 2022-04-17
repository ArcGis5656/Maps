"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3439],{22203:(e,t,r)=>{r.d(t,{C:()=>d});var i=r(29768),s=r(15324),o=r(95873),l=r(76506),n=r(21972),a=r(34250),p=(r(91306),r(17533));let y=class extends((0,o.p)(s.Z)){constructor(e){super(e),this.getCollections=null}initialize(){this.handles.add((0,n.a)((()=>this.refresh())))}destroy(){this.getCollections=null}refresh(){const e=(0,l.i)(this.getCollections)?this.getCollections():null;if((0,l.b)(e))return void this.removeAll();let t=0;for(const r of e)(0,l.i)(r)&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new s.Z(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction?this.itemFilterFunction:e=>!!e;for(const i of t)if(i){if(r(i)){const t=this.indexOf(i,e);t>=0?t!==e&&this.reorder(i,e):this.add(i,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(i);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,i._)([(0,a.Cb)()],y.prototype,"getCollections",void 0),(0,i._)([(0,a.Cb)()],y.prototype,"getChildrenFunction",void 0),(0,i._)([(0,a.Cb)()],y.prototype,"itemFilterFunction",void 0),y=(0,i._)([(0,p.j)("esri.core.CollectionFlattener")],y);const d=y},91162:(e,t,r)=>{r.d(t,{a:()=>a,l:()=>n});var i=r(41864),s=r(15324),o=r(22739),l=r(76506);async function n(e,t){return await e.load(),a(e,t)}async function a(e,t){const r=[],n=(...e)=>{for(const t of e)(0,l.b)(t)||(Array.isArray(t)?n(...t):s.Z.isCollection(t)?t.forEach((e=>n(e))):o.L.isLoadable(t)&&r.push(t))};t(n);let a=null;if(await(0,i.m)(r,(async e=>{var t;!1!==(await(0,i.r)((t=e,"loadAll"in t&&"function"==typeof t.loadAll?e.loadAll():e.load()))).ok||a||(a=e)})),a)throw a.loadError;return e}},3439:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Je});var i=r(29768),s=r(15324),o=r(22203),l=r(60991),n=r(76506),a=r(91162),p=r(92143),y=r(54179),d=r(50406),u=r(32101),c=r(34250),h=r(91306),b=r(97714),f=r(17533),g=r(60947),v=r(41617),m=r(86748),_=(r(55306),r(71206),r(51979),r(60698),r(65684),r(86758),r(95310),r(20208)),C=r(82058),w=r(57251),S=r(22739),O=r(20543),j=r(59465),F=r(21801),I=r(68640),L=r(82673),x=r(67541),T=(r(21972),r(23639),r(31450),r(71552),r(40642),r(86656),r(22723),r(91055),r(6906),r(74673)),B=(r(93314),r(35197),r(2906),r(73796),r(91597),r(86787),r(35132),r(89623),r(38742),r(1557),r(47842));r(14249),r(60217),r(74569),r(84069),r(44567),r(98380),r(92896),r(22781),r(32422),r(17298),r(85557),r(53785),r(95587),r(34394);let A=class extends((0,L.I)(y.a)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};(0,i._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],A.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["alias","name"])],A.prototype,"readTitle",null),(0,i._)([(0,c.Cb)()],A.prototype,"layer",void 0),(0,i._)([(0,c.Cb)({type:h.I,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],A.prototype,"id",void 0),(0,i._)([(0,b.r)("service","id")],A.prototype,"readIdOnlyOnce",null),(0,i._)([(0,c.Cb)((0,x.r)(String))],A.prototype,"modelName",void 0),(0,i._)([(0,c.Cb)((0,x.r)(Boolean))],A.prototype,"isEmpty",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],A.prototype,"visible",void 0),(0,i._)([(0,c.Cb)({type:Number,json:{write:!0}})],A.prototype,"opacity",void 0),A=(0,i._)([(0,f.j)("esri.layers.buildingSublayers.BuildingSublayer")],A);const E=A;var q=r(45272),k=r(47346),N=r(1709),P=r(83805),Z=r(69003),R=r(31292),M=r(78893),Q=(r(76996),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(29794),r(63130),r(25696),r(66396)),U=(r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(98402),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(48243),r(34635),r(10401),r(49900),r(88762),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(74071),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(74057),r(23761),r(48190),r(94070),r(43022),r(16218),r(9075),r(89241),r(91700),r(63136),r(32037),r(90811),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(93939),r(238),r(71831),r(82933),r(10691),r(38949),r(71777),r(27371),r(78648),r(87558),r(13063),r(17153),r(35962),r(9252),r(67350),r(11471),r(83748),r(28376),r(9801),r(53523),r(42911),r(46826),r(45433),r(62554),r(29027),r(47628),r(95873),r(39597),r(617),r(65514),r(46987),r(37453),r(73173),r(66284),r(87239),r(55823),r(92847),r(87258),r(97546),r(54732),r(21781)),D=r(75025),K=(r(21132),r(11118),r(92200),r(65949),r(65775),r(5777),r(8547),r(46942),r(6210),r(36231),r(89440)),V=(r(33045),r(62162)),J=(r(41864),r(56420),r(74742),r(28239),r(16647),r(58912));r(19902),r(59765),r(77361),r(83290),r(13322),r(14460),r(77807),r(50203),r(6941),r(46495),r(78303),r(17055),r(68653),r(2180),r(14327),r(69218),r(68714),r(34446),r(46646),r(39210),r(90549),r(27207);const z=p.L.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),H=(0,k.d)();let G=class extends(S.L.LoadableMixin((0,O.a)(E))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new N.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return(0,n.i)(r)&&"number"==typeof i?new I.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return(0,n.i)(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=(0,n.i)(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,P.f)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,z,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,M.eZ)(this,e)}async _fetchService(e){const t=(await(0,C.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,s,o;const l=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(i=r.domains)?void 0:i[e];return l&&"inherited"!==l.type?l:null!=(s=null==(o=this.getField(e))?void 0:o.domain)?s:null}getFeatureType(e){return e&&(0,n.i)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,n.i)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,n.i)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,n.i)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:q.z,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new R.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,n.i)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,n.i)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,n.b)(this.associatedLayer))throw new l.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new l.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"parsedUrl",null),(0,i._)([(0,c.Cb)({type:Z.I,readOnly:!0})],G.prototype,"nodePages",void 0),(0,i._)([(0,c.Cb)({type:[Z.a],readOnly:!0})],G.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[Z.b],readOnly:!0})],G.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.Cb)({type:[Z.c],readOnly:!0})],G.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"store",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],G.prototype,"rootNode",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,c.Cb)(H.fields)],G.prototype,"fields",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],G.prototype,"fieldsIndex",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:I.default})],G.prototype,"associatedLayer",void 0),(0,i._)([(0,b.r)("service","associatedLayer",["associatedLayerID"])],G.prototype,"readAssociatedLayer",null),(0,i._)([(0,c.Cb)(H.outFields)],G.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)({type:String,readOnly:!0})],G.prototype,"objectIdField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{read:!1}})],G.prototype,"displayField",null),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],G.prototype,"apiKey",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:F.Z,aliasOf:"layer.fullExtent"})],G.prototype,"fullExtent",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:g.Z,aliasOf:"layer.spatialReference"})],G.prototype,"spatialReference",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,aliasOf:"layer.version"})],G.prototype,"version",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:B.E,aliasOf:"layer.elevationInfo"})],G.prototype,"elevationInfo",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],G.prototype,"minScale",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],G.prototype,"maxScale",void 0),(0,i._)([(0,c.Cb)({type:["hide","show"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({types:_.w,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],G.prototype,"renderer",void 0),(0,i._)([(0,c.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],G.prototype,"definitionExpression",void 0),(0,i._)([(0,c.Cb)(x.p)],G.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:m.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],G.prototype,"popupTemplate",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],G.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.Cb)()],G.prototype,"types",null),(0,i._)([(0,c.Cb)()],G.prototype,"typeIdField",null),(0,i._)([(0,c.Cb)({json:{write:!1}}),(0,j.e)(new w.J({"3DObject":"3d-object",Point:"point"}))],G.prototype,"layerType",void 0),(0,i._)([(0,c.Cb)()],G.prototype,"geometryType",null),(0,i._)([(0,c.Cb)()],G.prototype,"profile",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"capabilities",null),G=(0,i._)([(0,f.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],G);const W=G;var $;const X={type:s.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:Y}}},read:!1}};function Y(e,t,r){if(e&&Array.isArray(e))return new s.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?ee:W}(e);if(t){const i=new t;return i.read(e,r),i}r&&r.messages&&e&&r.messages.push(new f.W("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let ee=$=class extends E{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,a.a)(this,(e=>$.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var te;(0,i._)([(0,c.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],ee.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)(X)],ee.prototype,"sublayers",void 0),ee=$=(0,i._)([(0,f.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],ee),(te=ee||(ee={})).sublayersProperty=X,te.readSublayers=Y,te.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const re=ee;var ie=r(98412),se=r(10279);let oe=class extends T.a{};(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],oe.prototype,"type",void 0),oe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterMode")],oe);const le=oe;var ne;let ae=ne=class extends le{constructor(){super(...arguments),this.type="solid"}clone(){return new ne}};(0,i._)([(0,c.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],ae.prototype,"type",void 0),ae=ne=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterModeSolid")],ae);const pe=ae;var ye;let de=ye=class extends le{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new ye({edges:(0,n.d9)(this.edges)})}};(0,i._)([(0,j.e)({wireFrame:"wire-frame"})],de.prototype,"type",void 0),(0,i._)([(0,c.Cb)(Q.s)],de.prototype,"edges",void 0),de=ye=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterModeWireFrame")],de);const ue=de;var ce;let he=ce=class extends le{constructor(){super(...arguments),this.type="x-ray"}clone(){return new ce}};(0,i._)([(0,c.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],he.prototype,"type",void 0),he=ce=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterModeXRay")],he);const be=he;var fe;const ge={nonNullable:!0,types:{key:"type",base:le,typeMap:{solid:pe,"wire-frame":ue,"x-ray":be}},json:{read:e=>{switch(e&&e.type){case"solid":return pe.fromJSON(e);case"wireFrame":return ue.fromJSON(e);case"x-ray":return be.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let ve=fe=class extends T.a{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new pe,this.title=""}clone(){return new fe({filterExpression:this.filterExpression,filterMode:(0,n.d9)(this.filterMode),title:this.title})}};(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ve.prototype,"filterExpression",void 0),(0,i._)([(0,c.Cb)(ge)],ve.prototype,"filterMode",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ve.prototype,"title",void 0),ve=fe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterBlock")],ve);const me=ve;let _e=class extends T.a{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,c.Cb)({type:String,readOnly:!0,json:{write:!0}})],_e.prototype,"type",void 0),_e=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfo")],_e);const Ce=_e;var we;let Se=we=class extends T.a{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new we({filterType:this.filterType,filterValues:(0,n.d9)(this.filterValues)})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],Se.prototype,"filterType",void 0),(0,i._)([(0,c.Cb)({type:[String],json:{write:!0}})],Se.prototype,"filterValues",void 0),Se=we=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],Se);const Oe=Se;var je;const Fe=s.Z.ofType(Oe);let Ie=je=class extends T.a{clone(){return new je({filterTypes:(0,n.d9)(this.filterTypes)})}};(0,i._)([(0,c.Cb)({type:Fe,json:{write:!0}})],Ie.prototype,"filterTypes",void 0),Ie=je=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Ie);const Le=Ie;var xe;const Te=s.Z.ofType(Le);let Be=xe=class extends Ce{constructor(){super(...arguments),this.type="checkbox"}clone(){return new xe({filterBlocks:(0,n.d9)(this.filterBlocks)})}};(0,i._)([(0,c.Cb)({type:["checkbox"]})],Be.prototype,"type",void 0),(0,i._)([(0,c.Cb)({type:Te,json:{write:!0}})],Be.prototype,"filterBlocks",void 0),Be=xe=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Be);const Ae=Be;var Ee;const qe=s.Z.ofType(me);let ke=Ee=class extends T.a{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,se.g)(),this.name=null}clone(){return new Ee({description:this.description,filterBlocks:(0,n.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,n.d9)(this.filterAuthoringInfo)})}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],ke.prototype,"description",void 0),(0,i._)([(0,c.Cb)({type:qe,json:{write:{enabled:!0,isRequired:!0}}})],ke.prototype,"filterBlocks",void 0),(0,i._)([(0,c.Cb)({types:{key:"type",base:Ce,typeMap:{checkbox:Ae}},json:{read:e=>"checkbox"===(e&&e.type)?Ae.fromJSON(e):null,write:!0}})],ke.prototype,"filterAuthoringInfo",void 0),(0,i._)([(0,c.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],ke.prototype,"id",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],ke.prototype,"name",void 0),ke=Ee=(0,i._)([(0,f.j)("esri.layers.support.BuildingFilter")],ke);const Ne=ke,Pe=p.L.getLogger("esri.layers.support.BuildingSummaryStatistics");let Ze=class extends T.a{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,i._)([(0,c.Cb)({type:String})],Ze.prototype,"fieldName",void 0),(0,i._)([(0,c.Cb)({type:String})],Ze.prototype,"modelName",void 0),(0,i._)([(0,c.Cb)({type:String})],Ze.prototype,"label",void 0),(0,i._)([(0,c.Cb)({type:Number})],Ze.prototype,"min",void 0),(0,i._)([(0,c.Cb)({type:Number})],Ze.prototype,"max",void 0),(0,i._)([(0,c.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ze.prototype,"mostFrequentValues",void 0),(0,i._)([(0,c.Cb)({type:[Number]})],Ze.prototype,"subLayerIds",void 0),Ze=(0,i._)([(0,f.j)("esri.layers.support.BuildingFieldStatistics")],Ze);let Re=class extends(S.L.LoadableMixin((0,O.a)(T.a))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Pe.error("building summary statistics are not loaded"),null)}load(e){const t=(0,n.i)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,C.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,i._)([(0,c.Cb)({constructOnly:!0,type:String})],Re.prototype,"url",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:[Ze],json:{read:{source:"summary"}}})],Re.prototype,"fields",null),Re=(0,i._)([(0,f.j)("esri.layers.support.BuildingSummaryStatistics")],Re);const Me=Re;var Qe=r(34558);r(46857),r(3754);const Ue=p.L.getLogger("esri.layers.BuildingSceneLayer"),De=s.Z.ofType(Ne),Ke=(0,n.d9)(re.sublayersProperty);Ke.json.origins["web-scene"]={type:[W],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Ke.json.origins["portal-item"]={type:[W],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let Ve=class extends((0,ie.S)((0,D.A)((0,K.O)((0,V.P)((0,J.S)((0,y.M)((0,U.A)(v.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.C({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new De,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const i=re.readSublayers(e,t,r);return re.forEachSublayer(i,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i}applySublayerOverrides(e,{overrides:t,context:r}){re.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?r.set(i.id,i):t.messages.push(new l.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const i=[];re.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,n.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,u.v_)(this.parsedUrl.path,t.statisticsHRef);return new Me({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=(0,n.i)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,a.l)(this,(e=>{re.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new l.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Ue.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Ue.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Qe.F(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){Ue.warn("Associated feature service item could not be loaded",e)}}};(0,i._)([(0,c.Cb)({type:["BuildingSceneLayer"]})],Ve.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],Ve.prototype,"allSublayers",void 0),(0,i._)([(0,c.Cb)(Ke)],Ve.prototype,"sublayers",void 0),(0,i._)([(0,b.r)("service","sublayers")],Ve.prototype,"readSublayers",null),(0,i._)([(0,c.Cb)({type:De,nonNullable:!0,json:{write:!0}})],Ve.prototype,"filters",void 0),(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],Ve.prototype,"activeFilterId",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,type:Me})],Ve.prototype,"summaryStatistics",void 0),(0,i._)([(0,b.r)("summaryStatistics",["statisticsHRef"])],Ve.prototype,"readSummaryStatistics",null),(0,i._)([(0,c.Cb)({type:[String],json:{read:!1}})],Ve.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)(x.s)],Ve.prototype,"fullExtent",void 0),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"]})],Ve.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)((0,x.r)(g.Z))],Ve.prototype,"spatialReference",void 0),(0,i._)([(0,c.Cb)(x.e)],Ve.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],Ve.prototype,"type",void 0),(0,i._)([(0,c.Cb)()],Ve.prototype,"associatedFeatureServiceItem",void 0),Ve=(0,i._)([(0,f.j)("esri.layers.BuildingSceneLayer")],Ve);const Je=Ve}}]);