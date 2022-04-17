"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4486],{74486:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S});var i=t(29768),s=t(34250),a=t(76506),o=(t(91306),t(17533)),n=t(82058),l=t(62206),u=t(95533),p=t(45937),c=t(59877),y=(t(74569),t(23761)),f=t(74673),d=t(97714),m=t(60947),B=t(8021),b=t(87258),g=t(37265),h=t(91597),C=t(92896),_=t(44567);function v(e){return b.default.fromJSON(e).features.map((e=>e.geometry))}t(21801),t(40642),t(71552),t(73796),t(21972),t(23639),t(92143),t(31450),t(86656),t(22723),t(91055),t(6906),t(50406),t(60991),t(2906),t(35132),t(89623),t(86787),t(84069),t(22781),t(57251),t(32422),t(98380),t(86748),t(15324),t(76996),t(14249),t(60217),t(29107),t(30574),t(2157),t(25977),t(58076),t(98242),t(7471),t(54414),t(59465),t(1648),t(8925),t(33921),t(3482),t(45154),t(16769),t(55531),t(30582),t(593),t(85699),t(96055),t(47776),t(18033),t(6331),t(62048),t(4292),t(75626),t(72652),t(29641),t(30493),t(70821),t(82673),t(34229),t(37029),t(96467),t(63571),t(30776),t(48027),t(54174),t(82426),t(29794),t(63130),t(25696),t(66396),t(42775),t(95834),t(34394),t(57150),t(76726),t(20444),t(76393),t(78548),t(2497),t(49906),t(46527),t(11799),t(48649),t(98402),t(9960),t(30823),t(53326),t(92482),t(5853),t(39141),t(32101),t(38742),t(48243),t(34635),t(10401),t(49900),t(88762),t(22739),t(20543),t(67477),t(78533),t(74653),t(91091),t(58943),t(70737),t(8487),t(17817),t(90814),t(15459),t(61847),t(16796),t(16955),t(22401),t(77894),t(55187),t(8586),t(44509),t(69814),t(11305),t(62259),t(44790),t(5909),t(60669),t(48208),t(51589),t(97546),t(9801),t(53523),t(42911),t(46826),t(45433),t(54732),t(2710);let R=class extends f.a{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return v(e)}readIncidents(e){return v(e)}readPointBarriers(e,r){return v(r.barriers)}readPolylineBarriers(e){return v(e)}readPolygonBarriers(e){return v(e)}readRoutes(e){return function(e){return e.features.map((r=>{const t=m.Z.fromJSON(e.spatialReference),i=y.Z.fromJSON(r);return(0,a.i)(i.geometry)&&(i.geometry.spatialReference=t),i}))}(e)}};(0,i._)([(0,s.Cb)({type:[B.Z]})],R.prototype,"directions",void 0),(0,i._)([(0,s.Cb)({type:[h.Z]})],R.prototype,"facilities",void 0),(0,i._)([(0,d.r)("facilities")],R.prototype,"readFacilities",null),(0,i._)([(0,s.Cb)({type:[h.Z]})],R.prototype,"incidents",void 0),(0,i._)([(0,d.r)("incidents")],R.prototype,"readIncidents",null),(0,i._)([(0,s.Cb)({type:[g.Z]})],R.prototype,"messages",void 0),(0,i._)([(0,s.Cb)({type:[h.Z]})],R.prototype,"pointBarriers",void 0),(0,i._)([(0,d.r)("pointBarriers",["barriers"])],R.prototype,"readPointBarriers",null),(0,i._)([(0,s.Cb)({type:[C.Z]})],R.prototype,"polylineBarriers",void 0),(0,i._)([(0,d.r)("polylineBarriers")],R.prototype,"readPolylineBarriers",null),(0,i._)([(0,s.Cb)({type:[_.Z]})],R.prototype,"polygonBarriers",void 0),(0,i._)([(0,d.r)("polygonBarriers")],R.prototype,"readPolygonBarriers",null),(0,i._)([(0,s.Cb)({type:[y.Z]})],R.prototype,"routes",void 0),(0,i._)([(0,d.r)("routes")],R.prototype,"readRoutes",null),R=(0,i._)([(0,o.j)("esri.rest.support.ClosestFacilitySolveResult")],R);const Z=R;t(94751),t(64560),t(24204),t(69997),t(53785),t(95587);const P=(0,l.c)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var A=t(658);let N=class extends A.Z{constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const i=[],s=[],a={},o={},l=(0,c.p)(e),{path:y}=l;r.incidents&&r.incidents.features&&(0,p.et)(r.incidents.features,s,"incidents.features",a),r.facilities&&r.facilities.features&&(0,p.et)(r.facilities.features,s,"facilities.features",a),r.pointBarriers&&r.pointBarriers.features&&(0,p.et)(r.pointBarriers.features,s,"pointBarriers.features",a),r.polylineBarriers&&r.polylineBarriers.features&&(0,p.et)(r.polylineBarriers.features,s,"polylineBarriers.features",a),r.polygonBarriers&&r.polygonBarriers.features&&(0,p.et)(r.polygonBarriers.features,s,"polygonBarriers.features",a);const f=await(0,u.aX)(s);for(const e in a){const r=a[e];i.push(e),o[e]=f.slice(r[0],r[1])}if((0,p.Wf)(o,i)){let e=null;try{e=await(0,p.bI)(y,r.apiKey,t)}catch{}e&&!e.hasZ&&(0,p.ef)(o,i)}for(const e in o)o[e].forEach(((t,i)=>{r.get(e)[i].geometry=t}));const d={...t,query:{...l.query,...P.toQueryParams(r),f:"json"}},{data:m}=await(0,n.default)(`${y}/solveClosestFacility`,d);return Z.fromJSON(m)}(this.url,e,r)}};(0,i._)([(0,s.Cb)()],N.prototype,"url",void 0),N=(0,i._)([(0,o.j)("esri.tasks.ClosestFacilityTask")],N);const S=N}}]);