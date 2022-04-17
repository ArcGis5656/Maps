"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4057],{23761:(e,t,i)=>{i.d(t,{Z:()=>b});var r,a=i(29768),s=i(74569),n=i(86748),l=i(96467),o=i(74673),c=i(76506),u=i(21972),p=i(34250),d=(i(91306),i(17533)),f=i(32422);i(21801),i(40642),i(71552),i(73796),i(97714),i(60947),i(2906),i(23639),i(92143),i(31450),i(86656),i(22723),i(91055),i(6906),i(50406),i(60991),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(15324),i(76996),i(14249),i(60217),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(59465),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(55531),i(30582),i(593),i(85699),i(96055),i(47776),i(18033),i(6331),i(62048),i(4292),i(75626),i(72652),i(29641),i(30493),i(70821),i(82673),i(34229),i(37029),i(63571),i(30776),i(48027),i(54174),i(82426),i(29794),i(63130),i(25696),i(66396),i(42775),i(95834),i(34394),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(98402),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(22739),i(20543),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(8487),i(17817),i(90814),i(15459),i(61847),i(16796),i(16955),i(22401),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589);let m=r=class extends o.a{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,u.g)(),configurable:!0})}normalizeCtorArgs(e,t,i,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:i,popupTemplate:r}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate;if(e&&"defaultPopupTemplate"in t&&(0,c.i)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const i=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",i,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,c.i)(this.geometry)?this.geometry.toJSON():null,symbol:(0,c.i)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new r(this.cloneProperties())}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}cloneProperties(){return{attributes:(0,c.d9)(this.attributes),geometry:(0,c.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,c.d9)(this.symbol),visible:this.visible}}_notifyLayer(e,t,i,r){if(!this.layer||!("graphicChanged"in this.layer))return;const a={graphic:this,property:e,oldValue:t,newValue:i};"attributes"===e&&(a.attributeName=r),this.layer.graphicChanged(a)}};(0,a._)([(0,p.Cb)({value:null})],m.prototype,"attributes",null),(0,a._)([(0,p.Cb)({value:null,types:s.qM,json:{read:f.im}})],m.prototype,"geometry",null),(0,a._)([(0,p.Cb)({type:Boolean})],m.prototype,"isAggregate",void 0),(0,a._)([(0,p.Cb)()],m.prototype,"layer",void 0),(0,a._)([(0,p.Cb)({type:n.Z})],m.prototype,"popupTemplate",void 0),(0,a._)([(0,p.Cb)()],m.prototype,"sourceLayer",void 0),(0,a._)([(0,p.Cb)({value:null,types:l.LB})],m.prototype,"symbol",null),(0,a._)([(0,p.Cb)({type:Boolean,value:!0})],m.prototype,"visible",null),m=r=(0,a._)([(0,d.j)("esri.Graphic")],m),(m||(m={})).generateUID=u.g;const b=m},48190:(e,t,i)=>{function r(e){}i.d(t,{n:()=>r}),i(76506)},85557:(e,t,i)=>{i.d(t,{m:()=>s});var r=i(53785),a=i(89623);const s={inches:(0,r.c)(1,"meters","inches"),feet:(0,r.c)(1,"meters","feet"),"us-feet":(0,r.c)(1,"meters","us-feet"),yards:(0,r.c)(1,"meters","yards"),miles:(0,r.c)(1,"meters","miles"),"nautical-miles":(0,r.c)(1,"meters","nautical-miles"),millimeters:(0,r.c)(1,"meters","millimeters"),centimeters:(0,r.c)(1,"meters","centimeters"),decimeters:(0,r.c)(1,"meters","decimeters"),meters:(0,r.c)(1,"meters","meters"),kilometers:(0,r.c)(1,"meters","kilometers"),"decimal-degrees":1/(0,r.l)(1,"meters",a.e.radius)}},74057:(e,t,i)=>{i.d(t,{PR:()=>w,Lq:()=>m,Km:()=>b,cM:()=>h,ap:()=>y,V3:()=>V,B3:()=>f});var r=i(48027),a=i(23761),s=i(48190),n=i(92143),l=i(76506),o=i(85557),c=i(52228);i(54174),i(82426),i(29794),i(91306),i(31450),i(71552),i(40642),i(74569),i(21801),i(34250),i(86656),i(22723),i(17533),i(60991),i(73796),i(74673),i(21972),i(23639),i(91055),i(6906),i(50406),i(97714),i(60947),i(2906),i(91597),i(86787),i(35132),i(89623),i(84069),i(44567),i(98380),i(92896),i(22781),i(57251),i(32422),i(86748),i(15324),i(76996),i(14249),i(60217),i(29107),i(30574),i(2157),i(25977),i(58076),i(98242),i(7471),i(54414),i(59465),i(1648),i(8925),i(33921),i(3482),i(45154),i(16769),i(55531),i(30582),i(593),i(85699),i(96055),i(47776),i(18033),i(6331),i(62048),i(4292),i(75626),i(72652),i(29641),i(30493),i(70821),i(82673),i(34229),i(37029),i(96467),i(63571),i(30776),i(63130),i(25696),i(66396),i(42775),i(95834),i(34394),i(57150),i(76726),i(20444),i(76393),i(78548),i(2497),i(49906),i(46527),i(11799),i(48649),i(98402),i(9960),i(30823),i(53326),i(92482),i(5853),i(39141),i(32101),i(38742),i(48243),i(34635),i(10401),i(49900),i(88762),i(82058),i(22739),i(20543),i(67477),i(78533),i(74653),i(91091),i(58943),i(70737),i(8487),i(17817),i(90814),i(15459),i(61847),i(16796),i(16955),i(22401),i(77894),i(55187),i(8586),i(44509),i(69814),i(11305),i(62259),i(44790),i(5909),i(60669),i(48208),i(51589),i(53785),i(95587);const u=n.L.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new a.Z,d=Math.PI,f=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function m(e,t,i){const a="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!a)return;if("esri.renderers.visualVariables.ColorVariable"!==a.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof t,n=s?null:t,o=n&&n.attributes;let c=s?t:null;const p=a.field,{ipData:d,hasExpression:f}=a.cache;let m=a.cache.compiledFunc;if(!p&&!f){const e=a.stops;return e&&e[0]&&e[0].color}if("number"!=typeof c)if(f){if(!(0,l.i)(i)||!(0,l.i)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,r=t.getViewInfo(e),s=t.createExecContext(n,r);if(!m){const e=t.createSyntaxTree(a.valueExpression);m=t.createFunction(e),a.cache.compiledFunc=m}c=t.executeFunction(m,s)}else o&&(c=o[p]);const b=a.normalizationField,h=o?parseFloat(o[b]):void 0;if(null!=c&&(!b||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(c/=h);const e=x(c,d);if(e){const t=e[0],s=e[1],n=t===s?a.stops[t].color:r.Z.blendColors(a.stops[t].color,a.stops[s].color,e[2],(0,l.i)(i)?i.color:void 0);return new r.Z(n)}}}function b(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const a="number"==typeof t,s=a?null:t,n=s&&s.attributes;let o=a?t:null;const c=r.field,{ipData:p,hasExpression:d}=r.cache;let f=r.cache.compiledFunc;if(!c&&!d){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof o)if(d){if((0,l.b)(i)||(0,l.b)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,a=t.getViewInfo(e),n=t.createExecContext(s,a);if(!f){const e=t.createSyntaxTree(r.valueExpression);f=t.createFunction(e),r.cache.compiledFunc=f}o=t.executeFunction(f,n)}else n&&(o=n[c]);const m=r.normalizationField,b=n?parseFloat(n[m]):void 0;if(null!=o&&(!m||a||!isNaN(b)&&0!==b)){isNaN(b)||a||(o/=b);const e=x(o,p);if(e){const t=e[0],i=e[1];if(t===i)return r.stops[t].opacity;{const a=r.stops[t].opacity;return a+(r.stops[i].opacity-a)*e[2]}}}}function h(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const a=r.axis||"heading",s="heading"===a&&"arithmetic"===r.rotationType?90:0,n="heading"===a&&"arithmetic"===r.rotationType?-1:1,o="number"==typeof t?null:t,c=o&&o.attributes,p=r.field,{hasExpression:d}=r.cache;let f=r.cache.compiledFunc,m=0;if(!p&&!d)return m;if(d){if((0,l.b)(i)||(0,l.b)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},t=i.arcade.arcadeUtils,a=t.getViewInfo(e),s=t.createExecContext(o,a);if(!f){const e=t.createSyntaxTree(r.valueExpression);f=t.createFunction(e),r.cache.compiledFunc=f}m=t.executeFunction(f,s)}else c&&(m=c[p]||0);return m="number"!=typeof m||isNaN(m)?null:s+n*m,m}function y(e,t,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void u.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const a=function(e,t,i){const r="number"==typeof t,a=r?null:t,s=a&&a.attributes;let n=r?t:null;const{isScaleDriven:o}=e.cache;let p=e.cache.compiledFunc;if(o){const t=(0,l.i)(i)?i.scale:void 0,r=(0,l.i)(i)?i.view:void 0;n=null==t||"3d"===r?function(e){let t=null,i=null;const r=e.stops;return r?(t=r[0].value,i=r[r.length-1].value):(t=e.minDataValue||0,i=e.maxDataValue||0),(t+i)/2}(e):t}else if(!r)switch(e.inputValueType){case"expression":{if((0,l.b)(i)||(0,l.b)(i.arcade))return void u.error("Use of arcade expressions requires an arcade context");const t={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,s=r.getViewInfo(t),o=r.createExecContext(a,s);if(!p){const t=r.createSyntaxTree(e.valueExpression);p=r.createFunction(t),e.cache.compiledFunc=p}n=r.executeFunction(p,o);break}case"field":s&&(n=s[e.field]);break;case"unknown":n=null}if(!(0,c.b)(n))return null;if(r||!e.normalizationField)return n;const d=s?parseFloat(s[e.normalizationField]):null;return(0,c.b)(d)&&0!==d?n/d:null}(r,t,i),s=function(e,t,i,r,a){switch(t.transformationType){case"additive":return function(e,t,i,r){return e+(v(t.minSize,i,r)||t.minDataValue)}(e,t,i,r);case"constant":return function(e,t,i){const r=e.stops;let a=r&&r.length&&r[0].size;return null==a&&(a=e.minSize),v(a,t,i)}(t,i,r);case"clamped-linear":return function(e,t,i,r){const a=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=v(t.minSize,i,r),n=v(t.maxSize,i,r),o=(0,l.i)(r)?r.shape:void 0;if(e<=t.minDataValue)return s;if(e>=t.maxDataValue)return n;if("area"===t.scaleBy&&o){const e="circle"===o,t=e?d*(s/2)**2:s*s,i=t+a*((e?d*(n/2)**2:n*n)-t);return e?2*Math.sqrt(i/d):Math.sqrt(i)}return s+a*(n-s)}(e,t,i,r);case"proportional":return function(e,t,i,r){const a=(0,l.i)(r)?r.shape:void 0,s=e/t.minDataValue,n=v(t.minSize,i,r),o=v(t.maxSize,i,r);let c=null;return c="circle"===a?2*Math.sqrt(s*(n/2)**2):"square"===a||"diamond"===a||"image"===a?Math.sqrt(s*n**2):s*n,g(c,n,o)}(e,t,i,r);case"stops":return function(e,t,i,r,a){const[s,n,l]=x(e,a);if(s===n)return v(t.stops[s].size,i,r);{const e=v(t.stops[s].size,i,r);return e+(v(t.stops[n].size,i,r)-e)*l}}(e,t,i,r,a);case"real-world-size":return function(e,t,i,r){const a=((0,l.i)(r)&&r.resolution?r.resolution:1)*o.m[t.valueUnit],s=v(t.minSize,i,r),n=v(t.maxSize,i,r),{valueRepresentation:c}=t;let u=null;return u="area"===c?2*Math.sqrt(e/d)/a:"radius"===c||"distance"===c?2*e/a:e/a,g(u,s,n)}(e,t,i,r);case"identity":return e;case"unknown":return null}}(a,r,t,i,r.cache.ipData);return null==s||isNaN(s)?0:s}function v(e,t,i){return null==e?null:(0,c.i)(e)?y(e,t,i):(0,c.b)(e)?e:null}function g(e,t,i){return(0,c.b)(i)&&e>i?i:(0,c.b)(t)&&e<t?t:e}function V(e,t,i){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===i||t))return null;const a={scale:t,view:i};let s=v(e.minSize,p,a),n=v(e.maxSize,p,a);if(null!=s||null!=n){if(s>n){const e=n;n=s,s=e}return{minSize:s,maxSize:n}}}function x(e,t){if(!t)return;let i=0,r=t.length-1;return t.some(((t,a)=>e<t?(r=a,!0):(i=a,!1))),[i,r,(e-t[i])/(t[r]-t[i])]}function w(e,t,i){const r=["proportional","proportional","proportional"];for(const a of e){const e=a.useSymbolValue?"symbol-value":y(a,t,i);switch(a.axis){case"width":r[0]=e;break;case"depth":r[1]=e;break;case"height":r[2]=e;break;case"width-and-depth":r[0]=e,r[1]=e;break;case"all":case void 0:case null:r[0]=e,r[1]=e,r[2]=e;break;default:(0,s.n)(a.axis)}}return r}}}]);