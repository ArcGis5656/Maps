"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6583],{43022:(e,t,s)=>{s.d(t,{a:()=>a,r:()=>u});var i=s(96467),l=s(17533),o=s(16218),n=s(30776),r=s(44790);const a={types:i.QT,json:{write:{writer:o.c},origins:{"web-scene":{types:i.f_,write:{writer:o.c},read:{reader:(0,l.e)({types:i.f_})}}}}},u={types:{base:n.Z,key:"type",typeMap:{"simple-fill":i.LB.typeMap["simple-fill"],"picture-fill":i.LB.typeMap["picture-fill"],"polygon-3d":i.LB.typeMap["polygon-3d"]}},json:{write:{writer:o.c},origins:{"web-scene":{type:r.Z,write:{writer:o.c}}}}}},9075:(e,t,s)=>{s.d(t,{t:()=>m});var i=s(96467),l=s(60991),o=s(51589),n=s(62259),r=s(78548),a=s(77894),u=s(60669),d=s(11305),p=s(5909),c=s(44790),y=s(48208),f=s(48243);const h={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function m(e,t=h){if(!e)return{symbol:null};const{retainId:s=h.retainId,ignoreDrivers:m=h.ignoreDrivers,hasLabelingContext:b=h.hasLabelingContext,retainCIM:g=h.retainCIM}=t;let v;if((0,i.dU)(e)||e instanceof o.Z)v=e.clone();else if("cim"===e.type){var S,I;const t=null==(S=e.data)||null==(I=S.symbol)?void 0:I.type;if("CIMPointSymbol"!==t)return{error:new l.Z("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})};v=g?e.clone():n.Z.fromCIMSymbol(e)}else if(e instanceof r.Z)v=a.Z.fromSimpleLineSymbol(e);else if(e instanceof u.Z)v=n.Z.fromSimpleMarkerSymbol(e);else if(e instanceof d.Z)v=n.Z.fromPictureMarkerSymbol(e);else if(e instanceof p.Z)v=c.Z.fromSimpleFillSymbol(e);else{if(!(e instanceof y.Z))return{error:new l.Z("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};v=b?f.Z.fromTextSymbol(e):n.Z.fromTextSymbol(e)}if(s&&"cim"!==v.type&&(v.id=e.id),m&&(0,i.dU)(v))for(let e=0;e<v.symbolLayers.length;++e)v.symbolLayers.getItemAt(e)._ignoreDrivers=!0;return{symbol:v}}},63136:(e,t,s)=>{s.d(t,{B:()=>l});var i=s(34250);function l(e,t){const s=t?{...t,source:e}:e;return(0,i.Cb)({aliasOf:s})}s(92143),s(31450),s(76506),s(71552),s(40642),s(91306),s(86656),s(22723)},55306:(e,t,s)=>{s.d(t,{Z:()=>C});var i,l=s(29768),o=s(96467),n=s(57251),r=s(76506),a=s(92143),u=s(34250),d=s(86787),p=s(59465),c=s(97714),y=s(17533),f=s(2906),h=s(91306),m=s(14249),b=s(65684),g=s(74071),v=s(94070),S=s(43022),I=s(51669),_=s(60217);s(63571),s(40642),s(71552),s(30776),s(48027),s(54174),s(82426),s(29794),s(31450),s(74673),s(21972),s(23639),s(86656),s(22723),s(91055),s(6906),s(50406),s(60991),s(74569),s(21801),s(73796),s(60947),s(91597),s(35132),s(89623),s(84069),s(44567),s(98380),s(92896),s(22781),s(32422),s(63130),s(25696),s(66396),s(42775),s(95834),s(34394),s(57150),s(76726),s(20444),s(76393),s(78548),s(2497),s(49906),s(46527),s(11799),s(48649),s(98402),s(9960),s(30823),s(53326),s(92482),s(5853),s(39141),s(32101),s(38742),s(48243),s(15324),s(76996),s(34635),s(10401),s(49900),s(88762),s(82058),s(22739),s(20543),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(70737),s(8487),s(17817),s(90814),s(15459),s(61847),s(16796),s(16955),s(22401),s(77894),s(55187),s(8586),s(44509),s(69814),s(11305),s(62259),s(44790),s(5909),s(60669),s(48208),s(51589),s(12158),s(74864),s(63683),s(94479),s(45702),s(51127),s(51723),s(23243),s(6090),s(3977),s(36741),s(11253),s(90319),s(38822),s(74057),s(23761),s(86748),s(29107),s(30574),s(2157),s(25977),s(58076),s(98242),s(7471),s(54414),s(1648),s(8925),s(33921),s(45154),s(16769),s(55531),s(30582),s(593),s(85699),s(96055),s(47776),s(18033),s(6331),s(62048),s(4292),s(75626),s(72652),s(29641),s(30493),s(70821),s(82673),s(34229),s(37029),s(48190),s(85557),s(53785),s(95587),s(16218),s(9075);const w=a.L.getLogger("esri.renderers.ClassBreaksRenderer"),V=new n.J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),x=(0,h.e)(v.Z);let k=i=class extends((0,g.V)(b.Z)){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,t,s){if(!Array.isArray(e))return;let i=t.minValue;return e.map((e=>{const t=new v.Z;return t.read(e,s),null==t.minValue&&(t.minValue=i),null==t.maxValue&&(t.maxValue=t.minValue),i=t.maxValue,t}))}writeClassBreakInfos(e,t,s,i){const l=e.map((e=>e.write({},i)));this._areClassBreaksConsecutive()&&l.forEach((e=>delete e.classMinValue)),t[s]=l}castField(e){return null==e?e:"function"==typeof e?(w.error(".field: field must be a string value"),null):(0,h.n)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const t=!!this.normalizationField,s=null!=this.normalizationTotal;return t||s?(e=(t?"field":s&&"percent-of-total")||null,t&&s&&w.warn("warning: both normalizationField and normalizationTotal are set!")):"field"!==e&&"percent-of-total"!==e||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,s){let i=null;i="number"==typeof e?new v.Z({minValue:e,maxValue:t,symbol:(0,o.se)(s)}):x((0,r.d9)(e)),this.classBreakInfos.push(i),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,t){const s=this.classBreakInfos.length;for(let i=0;i<s;i++){const s=[this.classBreakInfos[i].minValue,this.classBreakInfos[i].maxValue];if(s[0]===e&&s[1]===t){this.classBreakInfos.splice(i,1);break}}}getBreakIndex(e,t){return this.valueExpression&&((0,r.b)(t)||(0,r.b)(t.arcade))&&w.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)}async getClassBreakInfo(e,t){let s=t;this.valueExpression&&((0,r.b)(t)||(0,r.b)(t.arcade))&&(s={...s,arcade:await(0,_.l)()});const i=this.getBreakIndex(e,s);return-1!==i?this.classBreakInfos[i]:null}getSymbol(e,t){if(this.valueExpression&&((0,r.b)(t)||(0,r.b)(t.arcade)))return void w.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this.getBreakIndex(e,t);return s>-1?this.classBreakInfos[s].symbol:this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&((0,r.b)(t)||(0,r.b)(t.arcade))){const e=await(0,_.l)(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this.getBreakIndex(e,s);return i>-1?this.classBreakInfos[i].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach((t=>{t.symbol&&e.push(t.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),s=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${t}.${this.classBreakInfos.reduce(((e,t)=>e+t.getMeshHash()),"")}.${s}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new i({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:(0,r.d9)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:(0,r.d9)(this.visualVariables),legendOptions:(0,r.d9)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),(0,m.io)(e,t,this.valueExpression)];(0,m.AB)(e,t,this.field),(0,m.AB)(e,t,this.normalizationField),await Promise.all(s)}_getBreakIndexForExpression(e,t){const{viewingMode:s,scale:i,spatialReference:l,arcade:o}=(0,r.o)(t,{});let n=this._compiledValueExpression.valueExpression===this.valueExpression?this._compiledValueExpression.compiledFunction:null;const a=(0,r.u)(o).arcadeUtils;if(!n){const e=a.createSyntaxTree(this.valueExpression);n=a.createFunction(e),this._compiledValueExpression.compiledFunction=n}this._compiledValueExpression.valueExpression=this.valueExpression;const u=a.executeFunction(n,a.createExecContext(e,a.getViewInfo({viewingMode:s,scale:i,spatialReference:l})));return this._getBreakIndexfromInfos(u)}_getBreakIndexForField(e){const t=this.field,s=e.attributes,i=this.normalizationType;let l=parseFloat(s[t]);if(i){const e=this.normalizationTotal,t=parseFloat(s[this.normalizationField]);if("log"===i)l=Math.log(l)*Math.LOG10E;else if("percent-of-total"!==i||isNaN(e)){if("field"===i&&!isNaN(t)){if(isNaN(l)||isNaN(t))return-1;l/=t}}else l=l/e*100}return this._getBreakIndexfromInfos(l)}_getBreakIndexfromInfos(e){const t=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let s=0;s<this.classBreakInfos.length;s++){const i=[this.classBreakInfos[s].minValue,this.classBreakInfos[s].maxValue];if(i[0]<=e&&(t?e<=i[1]:e<i[1]))return s}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,t=e.length;for(let s=1;s<t;s++)if(e[s-1].maxValue!==e[s].minValue)return!1;return!0}};(0,l._)([(0,u.Cb)(S.r)],k.prototype,"backgroundFillSymbol",void 0),(0,l._)([(0,u.Cb)({type:[v.Z]})],k.prototype,"classBreakInfos",void 0),(0,l._)([(0,c.r)("classBreakInfos")],k.prototype,"readClassBreakInfos",null),(0,l._)([(0,f.w)("classBreakInfos")],k.prototype,"writeClassBreakInfos",null),(0,l._)([(0,u.Cb)({type:String,json:{write:!0}})],k.prototype,"defaultLabel",void 0),(0,l._)([(0,u.Cb)(S.a)],k.prototype,"defaultSymbol",void 0),(0,l._)([(0,u.Cb)({type:String,json:{write:!0}})],k.prototype,"field",void 0),(0,l._)([(0,d.p)("field")],k.prototype,"castField",null),(0,l._)([(0,u.Cb)({type:Boolean})],k.prototype,"isMaxInclusive",void 0),(0,l._)([(0,u.Cb)({type:I.L,json:{write:!0}})],k.prototype,"legendOptions",void 0),(0,l._)([(0,u.Cb)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],k.prototype,"minValue",null),(0,l._)([(0,u.Cb)({type:String,json:{write:!0}})],k.prototype,"normalizationField",void 0),(0,l._)([(0,u.Cb)({type:Number,cast:e=>(0,h.l)(e),json:{write:!0}})],k.prototype,"normalizationTotal",void 0),(0,l._)([(0,u.Cb)({type:V.apiValues,value:null,json:{type:V.jsonValues,read:V.read,write:V.write}})],k.prototype,"normalizationType",null),(0,l._)([(0,p.e)({classBreaks:"class-breaks"})],k.prototype,"type",void 0),(0,l._)([(0,u.Cb)({type:String,json:{write:!0}})],k.prototype,"valueExpression",void 0),(0,l._)([(0,u.Cb)({type:String,json:{write:!0}})],k.prototype,"valueExpressionTitle",void 0),k=i=(0,l._)([(0,y.j)("esri.renderers.ClassBreaksRenderer")],k);const C=k},95310:(e,t,s)=>{s.d(t,{Z:()=>O});var i,l=s(29768),o=s(96467),n=s(60991),r=s(76506),a=s(92143),u=s(71552),d=s(34250),p=s(86787),c=s(59465),y=s(97714),f=s(17533),h=s(2906),m=s(93939),b=s(91306),g=s(14249),v=s(49900),S=s(65684),I=s(74071),_=s(43022),w=s(51669),V=s(238),x=s(60217),k=s(38742),C=s(71831),F=s(51589);s(63571),s(40642),s(30776),s(48027),s(54174),s(82426),s(29794),s(31450),s(57251),s(74673),s(21972),s(23639),s(86656),s(22723),s(91055),s(6906),s(50406),s(74569),s(21801),s(73796),s(60947),s(91597),s(35132),s(89623),s(84069),s(44567),s(98380),s(92896),s(22781),s(32422),s(63130),s(25696),s(66396),s(42775),s(95834),s(34394),s(57150),s(76726),s(20444),s(76393),s(78548),s(2497),s(49906),s(46527),s(11799),s(48649),s(98402),s(9960),s(30823),s(53326),s(92482),s(5853),s(39141),s(32101),s(48243),s(15324),s(76996),s(34635),s(10401),s(70737),s(8487),s(17817),s(90814),s(15459),s(61847),s(88762),s(82058),s(22739),s(20543),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(16796),s(16955),s(22401),s(77894),s(55187),s(8586),s(44509),s(69814),s(11305),s(62259),s(44790),s(5909),s(60669),s(48208),s(12158),s(74864),s(63683),s(94479),s(45702),s(51127),s(51723),s(23243),s(6090),s(3977),s(36741),s(11253),s(90319),s(38822),s(74057),s(23761),s(86748),s(29107),s(30574),s(2157),s(25977),s(58076),s(98242),s(7471),s(54414),s(1648),s(8925),s(33921),s(45154),s(16769),s(55531),s(30582),s(593),s(85699),s(96055),s(47776),s(18033),s(6331),s(62048),s(4292),s(75626),s(72652),s(29641),s(30493),s(70821),s(82673),s(34229),s(37029),s(48190),s(85557),s(53785),s(95587),s(16218),s(9075);const B=a.L.getLogger("esri.renderers.UniqueValueRenderer"),E=(0,b.e)(V.Z);let q=i=class extends((0,I.V)(S.Z)){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this.type="unique-value",this.backgroundFillSymbol=null,this.field=null,this.field2=null,this.field3=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.fieldDelimiter=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let s=!1;const i={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let l=0;l<t.length;l++){const o=e.find((e=>e.value===t[l].value));o?(0,m.d)(o,t[l])?(i.changed.push({type:"complete",oldValue:o,newValue:t[l]}),s=!0):i.unchanged.push({oldValue:o,newValue:t[l]}):(i.added.push(t[l]),s=!0)}for(let l=0;l<e.length;l++)t.find((t=>t.value===e[l].value))||(i.removed.push(e[l]),s=!0);return s?i:void 0}},this._set("uniqueValueInfos",[])}get _cache(){return{compiledFunc:null}}castField(e){return null==e||"function"==typeof e?e:(0,b.n)(e)}writeField(e,t,s,i){"string"==typeof e?t[s]=e:i&&i.messages?i.messages.push(new n.Z("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):B.error(".field: cannot write field to JSON since it's not a string value")}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}readPortal(e,t,s){return s.portal||v.Z.getDefault()}readStyleOrigin(e,t,s){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=(0,k.f)(t.styleUrl,s);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,s,i){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=(0,k.t)(e.styleUrl,i))}set uniqueValueInfos(e){this.styleOrigin?B.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap())}addUniqueValueInfo(e,t){if(this.styleOrigin)return void B.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let s;s="object"==typeof e?E(e):new V.Z({value:e,symbol:(0,o.se)(t)}),this.uniqueValueInfos.push(s),this._valueInfoMap[s.value]=s}removeUniqueValueInfo(e){if(this.styleOrigin)B.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(let t=0;t<this.uniqueValueInfos.length;t++)if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}}async getUniqueValueInfo(e,t){let s=t;return this.valueExpression&&((0,r.b)(t)||(0,r.b)(t.arcade))&&(s={...s,arcade:await(0,x.l)()}),this._getUniqueValueInfo(e,s)}getSymbol(e,t){if(this.valueExpression&&((0,r.b)(t)||(0,r.b)(t.arcade)))return void B.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this._getUniqueValueInfo(e,t);return s&&s.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&((0,r.b)(s)||(0,r.b)(s.arcade))){const e=await(0,x.l)(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this._getUniqueValueInfo(e,s);return i&&i.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos)t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${JSON.stringify(this.backgroundFillSymbol)}.${JSON.stringify(this.defaultSymbol)}.${this.uniqueValueInfos.reduce(((e,t)=>e+t.getMeshHash()),"")}.${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}.${this.valueExpression}`}clone(){const e=new i({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:(0,r.d9)(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:(0,r.d9)(this.visualVariables),legendOptions:(0,r.d9)(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:(0,r.d9)(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=(0,r.d9)(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze((0,r.d9)(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),(0,g.io)(e,t,this.valueExpression)];(0,g.AB)(e,t,this.field),(0,g.AB)(e,t,this.field2),(0,g.AB)(e,t,this.field3),await Promise.all(s)}populateFromStyle(){return(0,C.f)(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e&&e.data&&Array.isArray(e.data.items)&&e.data.items.forEach((s=>{const i=new F.Z({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:s.name});this.defaultSymbol||s.name!==e.data.defaultItem||(this.defaultSymbol=i,this._isDefaultSymbolDerived=!0);const l=new V.Z({value:s.name,symbol:i});t.push(l),this._valueInfoMap[s.name]=l})),this._set("uniqueValueInfos",Object.freeze(t)),!this.defaultSymbol&&this.uniqueValueInfos.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateValueInfoMap(){this._valueInfoMap={},this.uniqueValueInfos.forEach((e=>this._valueInfoMap[e.value+""]=e))}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:s,scale:i,spatialReference:l,arcade:o}=(0,r.o)(t,{});let n=this._cache.compiledFunc;const a=(0,r.u)(o).arcadeUtils;if(!n){const e=a.createSyntaxTree(this.valueExpression);n=a.createFunction(e),this._cache.compiledFunc=n}const u=a.executeFunction(n,a.createExecContext(e,a.getViewInfo({viewingMode:s,scale:i,spatialReference:l})));return this._valueInfoMap[u+""]}_getUnqiueValueInfoForFields(e){const t=this.field,s=e.attributes;let i;if("function"!=typeof t&&this.field2){const e=this.field2,l=this.field3,o=[];t&&o.push(s[t]),e&&o.push(s[e]),l&&o.push(s[l]),i=o.join(this.fieldDelimiter||"")}else"function"==typeof t?i=t(e):t&&(i=s[t]);return this._valueInfoMap[i+""]}static fromPortalStyle(e,t){const s=new i(t&&t.properties);s._set("styleOrigin",Object.freeze({styleName:e})),s._set("portal",t&&t.portal||v.Z.getDefault());const l=s.populateFromStyle();return l.catch((t=>{B.error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)})),l}static fromStyleUrl(e,t){const s=new i(t&&t.properties);s._set("styleOrigin",Object.freeze({styleUrl:e}));const l=s.populateFromStyle();return l.catch((t=>{B.error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)})),l}};(0,l._)([(0,d.Cb)({readOnly:!0})],q.prototype,"_cache",null),(0,l._)([(0,c.e)({uniqueValue:"unique-value"})],q.prototype,"type",void 0),(0,l._)([(0,d.Cb)(_.r)],q.prototype,"backgroundFillSymbol",void 0),(0,l._)([(0,d.Cb)({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],q.prototype,"field",void 0),(0,l._)([(0,p.p)("field")],q.prototype,"castField",null),(0,l._)([(0,h.w)("field")],q.prototype,"writeField",null),(0,l._)([(0,d.Cb)({type:String,json:{write:!0}})],q.prototype,"field2",void 0),(0,l._)([(0,d.Cb)({type:String,json:{write:!0}})],q.prototype,"field3",void 0),(0,l._)([(0,d.Cb)({type:String,json:{write:!0}})],q.prototype,"valueExpression",void 0),(0,l._)([(0,d.Cb)({type:String,json:{write:!0}})],q.prototype,"valueExpressionTitle",void 0),(0,l._)([(0,d.Cb)({type:w.L,json:{write:!0}})],q.prototype,"legendOptions",void 0),(0,l._)([(0,d.Cb)({type:String,json:{write:!0}})],q.prototype,"defaultLabel",void 0),(0,l._)([(0,d.Cb)((0,u.d)({..._.a},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],q.prototype,"defaultSymbol",null),(0,l._)([(0,d.Cb)({type:String,json:{write:!0}})],q.prototype,"fieldDelimiter",void 0),(0,l._)([(0,d.Cb)({type:v.Z,readOnly:!0})],q.prototype,"portal",void 0),(0,l._)([(0,y.r)("portal",["styleName"])],q.prototype,"readPortal",null),(0,l._)([(0,d.Cb)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],q.prototype,"styleOrigin",void 0),(0,l._)([(0,y.r)("styleOrigin",["styleName","styleUrl"])],q.prototype,"readStyleOrigin",null),(0,l._)([(0,h.w)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],q.prototype,"writeStyleOrigin",null),(0,l._)([(0,d.Cb)({type:[V.Z],json:{write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],q.prototype,"uniqueValueInfos",null),q=i=(0,l._)([(0,f.j)("esri.renderers.UniqueValueRenderer")],q);const O=q},94070:(e,t,s)=>{s.d(t,{Z:()=>d});var i,l=s(29768),o=s(74673),n=s(34250),r=(s(76506),s(91306),s(17533)),a=s(43022);s(21972),s(23639),s(92143),s(31450),s(71552),s(40642),s(86656),s(22723),s(91055),s(6906),s(50406),s(60991),s(96467),s(63571),s(59465),s(57251),s(97714),s(2906),s(14249),s(60217),s(74569),s(21801),s(73796),s(60947),s(91597),s(86787),s(35132),s(89623),s(84069),s(44567),s(98380),s(92896),s(22781),s(32422),s(30776),s(48027),s(54174),s(82426),s(29794),s(63130),s(25696),s(66396),s(42775),s(95834),s(34394),s(57150),s(76726),s(20444),s(76393),s(78548),s(2497),s(49906),s(46527),s(11799),s(48649),s(98402),s(9960),s(30823),s(53326),s(92482),s(5853),s(39141),s(32101),s(38742),s(48243),s(15324),s(76996),s(34635),s(10401),s(49900),s(88762),s(82058),s(22739),s(20543),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(70737),s(8487),s(17817),s(90814),s(15459),s(61847),s(16796),s(16955),s(22401),s(77894),s(55187),s(8586),s(44509),s(69814),s(11305),s(62259),s(44790),s(5909),s(60669),s(48208),s(51589),s(16218),s(9075);let u=i=class extends o.a{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${e}`}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"description",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],u.prototype,"minValue",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],u.prototype,"maxValue",void 0),(0,l._)([(0,n.Cb)(a.a)],u.prototype,"symbol",void 0),u=i=(0,l._)([(0,r.j)("esri.renderers.support.ClassBreakInfo")],u);const d=u},238:(e,t,s)=>{s.d(t,{Z:()=>d});var i,l=s(29768),o=s(74673),n=s(34250),r=(s(76506),s(91306),s(17533)),a=s(43022);s(21972),s(23639),s(92143),s(31450),s(71552),s(40642),s(86656),s(22723),s(91055),s(6906),s(50406),s(60991),s(96467),s(63571),s(59465),s(57251),s(97714),s(2906),s(14249),s(60217),s(74569),s(21801),s(73796),s(60947),s(91597),s(86787),s(35132),s(89623),s(84069),s(44567),s(98380),s(92896),s(22781),s(32422),s(30776),s(48027),s(54174),s(82426),s(29794),s(63130),s(25696),s(66396),s(42775),s(95834),s(34394),s(57150),s(76726),s(20444),s(76393),s(78548),s(2497),s(49906),s(46527),s(11799),s(48649),s(98402),s(9960),s(30823),s(53326),s(92482),s(5853),s(39141),s(32101),s(38742),s(48243),s(15324),s(76996),s(34635),s(10401),s(49900),s(88762),s(82058),s(22739),s(20543),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(70737),s(8487),s(17817),s(90814),s(15459),s(61847),s(16796),s(16955),s(22401),s(77894),s(55187),s(8586),s(44509),s(69814),s(11305),s(62259),s(44790),s(5909),s(60669),s(48208),s(51589),s(16218),s(9075);let u=i=class extends o.a{constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new i({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON());return`${this.value}.${e}`}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"description",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,l._)([(0,n.Cb)(a.a)],u.prototype,"symbol",void 0),(0,l._)([(0,n.Cb)({type:[String,Number],json:{type:String,write:{writer:(e,t)=>{t.value=null==e?void 0:e.toString()}}}})],u.prototype,"value",void 0),u=i=(0,l._)([(0,r.j)("esri.renderers.support.UniqueValueInfo")],u);const d=u},16218:(e,t,s)=>{s.d(t,{i:()=>d,c:()=>u});var i=s(96467),l=s(60991),o=s(76506),n=s(34635),r=s(9075),a=s(51589);function u(e,t,s,i){const u=function(e,t,s){if(!e)return null;if(s&&"web-scene"===s.origin&&!(e instanceof n.Z)&&!(e instanceof a.Z)){const i=(0,r.t)(e,{retainCIM:!0});return(0,o.i)(i.symbol)?i.symbol.write(t,s):(s.messages&&s.messages.push(new l.Z("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:s,error:i.error})),null)}return s&&"web-map"===s.origin&&"web-style"===e.type?(s.messages&&s.messages.push(new l.Z("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:s})),null):e.write(t,s)}(e,{},i);u&&(t[s]=u)}function d(e,t){return(0,i.S9)(e,null,t)}s(91306),s(92143),s(31450),s(71552),s(40642),s(17533),s(86656),s(22723),s(63571),s(34250),s(59465),s(57251),s(97714),s(2906),s(14249),s(60217),s(74569),s(21801),s(73796),s(74673),s(21972),s(23639),s(91055),s(6906),s(50406),s(60947),s(91597),s(86787),s(35132),s(89623),s(84069),s(44567),s(98380),s(92896),s(22781),s(32422),s(30776),s(48027),s(54174),s(82426),s(29794),s(63130),s(25696),s(66396),s(42775),s(95834),s(34394),s(57150),s(76726),s(20444),s(76393),s(78548),s(2497),s(49906),s(46527),s(11799),s(48649),s(98402),s(9960),s(30823),s(53326),s(92482),s(5853),s(39141),s(32101),s(38742),s(48243),s(15324),s(76996),s(90814),s(16796),s(16955),s(22401),s(10401),s(49900),s(88762),s(82058),s(22739),s(20543),s(3482),s(67477),s(78533),s(74653),s(91091),s(58943),s(70737),s(8487),s(17817),s(15459),s(61847),s(77894),s(55187),s(8586),s(44509),s(69814),s(11305),s(62259),s(44790),s(5909),s(60669),s(48208)}}]);