"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3981],{69997:(e,t,r)=>{r.d(t,{g:()=>i});var n=r(53785);function i(e,t){const r=t||e.extent,i=e.width,s=(0,n.g)(r&&r.spatialReference);return r&&i?r.width/i*s*n.i*96:0}},81731:(e,t,r)=>{r.d(t,{a:()=>i,e:()=>o,p:()=>s}),r(76506);var n=r(32101);function i(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function s(e){return"string"==typeof e?(0,n.mN)(e):e}function o(e,t,r){const n={};for(const i in e){if("declaredClass"===i)continue;const s=e[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[i]=[];for(let e=0;e<s.length;e++)n[i][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[i]);n[i]=t?e:JSON.stringify(e)}else n[i]=t?s:JSON.stringify(s);else n[i]=s}return n}r(69997)},3981:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(29768),i=r(34250),s=(r(76506),r(91306)),o=r(17533),a=r(82058),l=r(81731),u=(r(74569),r(32422)),f=r(74673),p=(r(21972),r(23639),r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(22723),r(86656),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(21801),r(73796),r(97714),r(60947),r(2906),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567)),c=(r(98380),r(92896));let N=class extends f.a{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:(0,u.Ji)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};(0,n._)([(0,i.Cb)()],N.prototype,"geometries",void 0),(0,n._)([(0,i.Cb)({json:{read:{source:"outSR"}}})],N.prototype,"outSpatialReference",void 0),(0,n._)([(0,i.Cb)()],N.prototype,"transformation",void 0),(0,n._)([(0,i.Cb)()],N.prototype,"transformForward",void 0),N=(0,n._)([(0,o.j)("esri.rest.support.ProjectParameters")],N);const y=N;function m(e){return{geometryType:(0,u.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}function d(e,t,r){const n=(0,u.q9)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=r,t}))}const _=(0,s.e)(y);var g=r(57251);const S=new g.J({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),T=new g.J({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function I(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),i={maxDeviation:n};return t&&t.length&&(i.geometries=JSON.stringify({geometryType:(0,u.Ji)(t[0]),geometries:t}),i.sr=JSON.stringify(t[0].spatialReference)),T.write(r,i,"deviationUnit"),i}const O=new g.J({preserveShape:"preserve-shape"}),h=new g.J({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),R=new g.J({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function U(e){const{geometries:t,bevelRatio:r,offsetDistance:n,offsetHow:i,offsetUnit:s}=e.toJSON(),o={bevelRatio:r,offsetDistance:n};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:(0,u.Ji)(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),i&&(o.offsetHow=h.toJSON(i)),s&&(o.offsetUnit=R.toJSON(s)),o}const J=new g.J({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"}),E=new g.J({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});let A=class extends f.a{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],A.prototype,"deviationUnit",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,u.im)(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],A.prototype,"geometries",void 0),(0,n._)([(0,i.Cb)({type:Number,json:{write:!0}})],A.prototype,"maxDeviation",void 0),A=(0,n._)([(0,o.j)("esri.rest.support.GeneralizeParameters")],A),A.from=(0,s.e)(A);const C=A;r(22781);let w=class extends f.a{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],w.prototype,"calculationType",void 0),(0,n._)([(0,i.Cb)({type:Boolean,json:{write:!0}})],w.prototype,"geodesic",void 0),(0,n._)([(0,i.Cb)({json:{write:!0}})],w.prototype,"lengthUnit",void 0),(0,n._)([(0,i.Cb)({type:[c.Z],json:{read:{reader:e=>e?e.map((e=>(0,u.im)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],w.prototype,"polylines",void 0),w=(0,n._)([(0,o.j)("esri.rest.support.LengthsParameters")],w),w.from=(0,s.e)(w);const v=w;let j=class extends f.a{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,n._)([(0,i.Cb)({type:Number,json:{write:!0}})],j.prototype,"bevelRatio",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,u.im)(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],j.prototype,"geometries",void 0),(0,n._)([(0,i.Cb)({type:Number,json:{write:!0}})],j.prototype,"offsetDistance",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],j.prototype,"offsetHow",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],j.prototype,"offsetUnit",void 0),j=(0,n._)([(0,o.j)("esri.rest.support.OffsetParameters")],j),j.from=(0,s.e)(j);const b=j;let D=class extends f.a{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,u.im)(e))):null},write:{writer:(e,t)=>{t.geometries1=e.map((e=>e.toJSON()))}}}})],D.prototype,"geometries1",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,u.im)(e))):null},write:{writer:(e,t)=>{t.geometries2=e.map((e=>e.toJSON()))}}}})],D.prototype,"geometries2",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],D.prototype,"relation",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],D.prototype,"relationParameter",void 0),D=(0,n._)([(0,o.j)("esri.rest.support.RelationParameters")],D),D.from=(0,s.e)(D);const L=D;var M=r(32101);let q=class extends f.a{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],q.prototype,"extendHow",void 0),(0,n._)([(0,i.Cb)({type:[c.Z],json:{read:{reader:e=>e?e.map((e=>(0,u.im)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],q.prototype,"polylines",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?(0,u.im)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],q.prototype,"trimExtendTo",void 0),q=(0,n._)([(0,o.j)("esri.rest.support.TrimExtendParameters")],q),q.from=(0,s.e)(q);const x=q;async function G(e,t,r){const n=function(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:i}=e.toJSON(),s={};s.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return s.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),r&&(s.lengthUnit=r),n&&(s.geodesic=n),i&&(s.calculationType=O.toJSON(i)),s}(t=v.from(t)),i=(0,l.p)(e),s={...i.query,f:"json",...n},o=(0,l.a)(s,r);return(0,a.default)(i.path+"/lengths",o).then((({data:e})=>e))}var H=r(658);r(88762),r(69997),r(53785),r(95587);let k=class extends H.Z{constructor(e){super(e),this.url=null}areasAndLengths(e,t){return async function(e,t,r){const n=(0,l.p)(e),i={...n.query,f:"json",...t.toJSON()},s=(0,l.a)(i,r);return(0,a.default)(n.path+"/areasAndLengths",s).then((e=>e.data))}(this.url,e,t)}autoComplete(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=(0,l.p)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),polygons:JSON.stringify(m(t).geometries),polylines:JSON.stringify(m(r).geometries)},u=(0,l.a)(o,n);return(0,a.default)(s.path+"/autoComplete",u).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new p.Z({spatialReference:i,rings:e})))))}(this.url,e,t,r)}buffer(e,t){return async function(e,t,r){const n=(0,l.p)(e),i={...n.query,f:"json",...t.toJSON()},s=t.outSpatialReference||t.geometries[0].spatialReference,o=(0,l.a)(i,r);return(0,a.default)(n.path+"/buffer",o).then((e=>(e.data.geometries||[]).map((({rings:e})=>new p.Z({spatialReference:s,rings:e})))))}(this.url,e,t)}convexHull(e,t){return async function(e,t,r){const n=t[0].spatialReference,i=(0,l.p)(e),s={...i.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(m(t))},o=(0,l.a)(s,r);return(0,a.default)(i.path+"/convexHull",o).then((({data:e})=>(0,u.im)(e.geometry).set({spatialReference:n})))}(this.url,e,t)}cut(e,t,r){return async function(e,t,r,n){const i=(0,l.p)(e),s=t[0].spatialReference,o={...n,query:{...i.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,u.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},f=await(0,a.default)(i.path+"/cut",o),{cutIndexes:p,geometries:c=[]}=f.data;return{cutIndexes:p,geometries:c.map((e=>{const t=(0,u.im)(e);return t.spatialReference=s,t}))}}(this.url,e,t,r)}densify(e,t){return async function(e,t,r){const n=t.geometries[0].spatialReference,i=(0,l.p)(e),s={...i.query,f:"json",...t.toJSON()},o=(0,l.a)(s,r);return(0,a.default)(i.path+"/densify",o).then((({data:e})=>(e.geometries||[]).map((e=>(0,u.im)(e).set({spatialReference:n})))))}(this.url,e,t)}difference(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=(0,l.p)(e);let o={query:{...s.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(m(t)),geometry:JSON.stringify({geometryType:(0,u.Ji)(r),geometry:r.toJSON()})}};return n&&(o={...n,...o}),(0,a.default)(s.path+"/difference",o).then((({data:e})=>(e.geometries||[]).map((e=>(0,u.im)(e).set({spatialReference:i})))))}(this.url,e,t,r)}distance(e,t){return async function(e,t,r){const n=(0,l.p)(e),i={...n.query,f:"json",...t.toJSON()},s=(0,l.a)(i,r);return(0,a.default)(n.path+"/distance",s).then((({data:e})=>e&&e.distance))}(this.url,e,t)}fromGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.strings=JSON.stringify(t.strings);const i=t.conversionType||"mgrs";n.conversionType=S.toJSON(i),n.conversionMode=t.conversionMode;const s=(0,l.p)(e),o={...s.query,f:"json",...n},u=(0,l.a)(o,r);return(0,a.default)(s.path+"/fromGeoCoordinateString",u).then((({data:e})=>e.coordinates))}(this.url,e,t)}generalize(e,t){return async function(e,t,r){const n=(t=C.from(t)).toJSON(),i=I(t),s=(0,l.p)(e),o={...s.query,f:"json",...i},f=n.geometries[0].spatialReference,p=(0,l.a)(o,r);return(0,a.default)(s.path+"/generalize",p).then((({data:e})=>(e.geometries||[]).map((e=>(0,u.im)(e).set({spatialReference:f})))))}(this.url,e,t)}intersect(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=(0,l.p)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(m(t)),geometry:JSON.stringify({geometryType:(0,u.Ji)(r),geometry:r.toJSON()})},f=(0,l.a)(o,n);return(0,a.default)(s.path+"/intersect",f).then((({data:e})=>(e.geometries||[]).map((e=>(0,u.im)(e).set({spatialReference:i})))))}(this.url,e,t,r)}labelPoints(e,t){return function(e,t,r){const n=t.map((e=>e.toJSON())),i=t[0].spatialReference,s=(0,l.p)(e),o={...s.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(n)},f=(0,l.a)(o,r);return(0,a.default)(s.path+"/labelPoints",f).then((({data:e})=>(e.labelPoints||[]).map((e=>(0,u.im)(e).set({spatialReference:i})))))}(this.url,e,t)}lengths(e,t){return G(this.url,e,t)}offset(e,t){return async function(e,t,r){const n=U(t=b.from(t)),i=(0,l.p)(e),s={...i.query,f:"json",...n},o=t.geometries[0].spatialReference,f=(0,l.a)(s,r);return(0,a.default)(i.path+"/offset",f).then((({data:e})=>(e.geometries||[]).map((e=>(0,u.im)(e).set({spatialReference:o})))))}(this.url,e,t)}project(e,t){return async function(e,t,r){t=_(t);const n=(0,l.p)(e),i={...n.query,f:"json",...t.toJSON()},s=t.outSpatialReference,o=(0,u.Ji)(t.geometries[0]),f=(0,l.a)(i,r);return(0,a.default)(n.path+"/project",f).then((({data:{geometries:e}})=>d(e,o,s)))}(this.url,e,t)}relation(e,t){return async function(e,t,r){const n=function(e){const{geometries1:t,geometries2:r,relation:n,relationParameter:i}=e.toJSON(),s={};if(t&&t.length){s.geometries1=JSON.stringify({geometryType:(0,u.Ji)(t[0]),geometries:t});const e=t[0].spatialReference;s.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(s.geometries2=JSON.stringify({geometryType:(0,u.Ji)(r[0]),geometries:r})),n&&(s.relation=J.toJSON(n)),i&&(s.relationParam=i),s}(t=L.from(t)),i=(0,l.p)(e),s={...i.query,f:"json",...n},o=(0,l.a)(s,r);return(0,a.default)(i.path+"/relation",o).then((({data:e})=>e.relations))}(this.url,e,t)}reshape(e,t,r){return async function(e,t,r,n){const i=t.spatialReference,s=(0,l.p)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:(0,u.Ji)(t),geometry:t.toJSON()}),reshaper:JSON.stringify(r.toJSON())},f=(0,l.a)(o,n);return(0,a.default)(s.path+"/reshape",f).then((({data:e})=>(0,u.im)(e.geometry).set({spatialReference:i})))}(this.url,e,t,r)}simplify(e,t){return async function(e,t,r){const n="string"==typeof e?(0,M.mN)(e):e,i=t[0].spatialReference,s=(0,u.Ji)(t[0]),o={...r,query:{...n.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(m(t))}},{data:l}=await(0,a.default)(n.path+"/simplify",o);return d(l.geometries,s,i)}(this.url,e,t)}toGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.coordinates=JSON.stringify(t.coordinates);const i=t.conversionType||"mgrs";n.conversionType=S.toJSON(i),n.conversionMode=t.conversionMode,n.numOfDigits=t.numOfDigits,n.rounding=t.rounding,n.addSpaces=t.addSpaces;const s=(0,l.p)(e),o={...s.query,f:"json",...n},u=(0,l.a)(o,r);return(0,a.default)(s.path+"/toGeoCoordinateString",u).then((({data:e})=>e.strings))}(this.url,e,t)}trimExtend(e,t){return async function(e,t,r){const n=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),i={};return i.extendHow=E.toJSON(t),r&&r.length&&(i.polylines=JSON.stringify(r),i.sr=JSON.stringify(r[0].spatialReference)),n&&(i.trimExtendTo=JSON.stringify(n)),i}(t=x.from(t)),i=(0,l.p)(e),s={...i.query,f:"json",...n},o=t.sr,u=(0,l.a)(s,r);return(0,a.default)(i.path+"/trimExtend",u).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new c.Z({spatialReference:o,paths:e})))))}(this.url,e,t)}union(e,t){return async function(e,t,r){const n=t[0].spatialReference,i=(0,l.p)(e),s={...i.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(m(t))},o=(0,l.a)(s,r);return(0,a.default)(i.path+"/union",o).then((({data:e})=>(0,u.im)(e.geometry).set({spatialReference:n})))}(this.url,e,t)}};k.UNIT_METER=9001,k.UNIT_GERMAN_METER=9031,k.UNIT_FOOT=9002,k.UNIT_SURVEY_FOOT=9003,k.UNIT_CLARKE_FOOT=9005,k.UNIT_FATHOM=9014,k.UNIT_NAUTICAL_MILE=9030,k.UNIT_SURVEY_CHAIN=9033,k.UNIT_SURVEY_LINK=9034,k.UNIT_SURVEY_MILE=9035,k.UNIT_KILOMETER=9036,k.UNIT_CLARKE_YARD=9037,k.UNIT_CLARKE_CHAIN=9038,k.UNIT_CLARKE_LINK=9039,k.UNIT_SEARS_YARD=9040,k.UNIT_SEARS_FOOT=9041,k.UNIT_SEARS_CHAIN=9042,k.UNIT_SEARS_LINK=9043,k.UNIT_BENOIT_1895A_YARD=9050,k.UNIT_BENOIT_1895A_FOOT=9051,k.UNIT_BENOIT_1895A_CHAIN=9052,k.UNIT_BENOIT_1895A_LINK=9053,k.UNIT_BENOIT_1895B_YARD=9060,k.UNIT_BENOIT_1895B_FOOT=9061,k.UNIT_BENOIT_1895B_CHAIN=9062,k.UNIT_BENOIT_1895B_LINK=9063,k.UNIT_INDIAN_FOOT=9080,k.UNIT_INDIAN_1937_FOOT=9081,k.UNIT_INDIAN_1962_FOOT=9082,k.UNIT_INDIAN_1975_FOOT=9083,k.UNIT_INDIAN_YARD=9084,k.UNIT_INDIAN_1937_YARD=9085,k.UNIT_INDIAN_1962_YARD=9086,k.UNIT_INDIAN_1975_YARD=9087,k.UNIT_FOOT_1865=9070,k.UNIT_RADIAN=9101,k.UNIT_DEGREE=9102,k.UNIT_ARCMINUTE=9103,k.UNIT_ARCSECOND=9104,k.UNIT_GRAD=9105,k.UNIT_GON=9106,k.UNIT_MICRORADIAN=9109,k.UNIT_ARCMINUTE_CENTESIMAL=9112,k.UNIT_ARCSECOND_CENTESIMAL=9113,k.UNIT_MIL6400=9114,k.UNIT_BRITISH_1936_FOOT=9095,k.UNIT_GOLDCOAST_FOOT=9094,k.UNIT_INTERNATIONAL_CHAIN=109003,k.UNIT_INTERNATIONAL_LINK=109004,k.UNIT_INTERNATIONAL_YARD=109001,k.UNIT_STATUTE_MILE=9093,k.UNIT_SURVEY_YARD=109002,k.UNIT_50KILOMETER_LENGTH=109030,k.UNIT_150KILOMETER_LENGTH=109031,k.UNIT_DECIMETER=109005,k.UNIT_CENTIMETER=109006,k.UNIT_MILLIMETER=109007,k.UNIT_INTERNATIONAL_INCH=109008,k.UNIT_US_SURVEY_INCH=109009,k.UNIT_INTERNATIONAL_ROD=109010,k.UNIT_US_SURVEY_ROD=109011,k.UNIT_US_NAUTICAL_MILE=109012,k.UNIT_UK_NAUTICAL_MILE=109013,k.UNIT_SQUARE_INCHES="esriSquareInches",k.UNIT_SQUARE_FEET="esriSquareFeet",k.UNIT_SQUARE_YARDS="esriSquareYards",k.UNIT_ACRES="esriAcres",k.UNIT_SQUARE_MILES="esriSquareMiles",k.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",k.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",k.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",k.UNIT_SQUARE_METERS="esriSquareMeters",k.UNIT_ARES="esriAres",k.UNIT_HECTARES="esriHectares",k.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,n._)([(0,i.Cb)()],k.prototype,"url",void 0),k=(0,n._)([(0,o.j)("esri.tasks.GeometryService")],k);const F=k},658:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(29768),i=r(21972),s=r(32101),o=r(34250),a=(r(76506),r(91306),r(17533));r(23639),r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(22723),r(86656),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);let l=class extends i.Z{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,s.mN)(e):null}_encode(e,t,r){const n={};for(const i in e){if("declaredClass"===i)continue;const s=e[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[i]=[];for(let e=0;e<s.length;e++)n[i][e]=this._encode(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[i]);n[i]=t?e:JSON.stringify(e)}else n[i]=t?s:JSON.stringify(s);else n[i]=s}return n}};(0,n._)([(0,o.Cb)({readOnly:!0})],l.prototype,"parsedUrl",null),(0,n._)([(0,o.Cb)()],l.prototype,"requestOptions",void 0),(0,n._)([(0,o.Cb)({type:String})],l.prototype,"url",void 0),l=(0,n._)([(0,a.j)("esri.tasks.Task")],l);const u=l}}]);