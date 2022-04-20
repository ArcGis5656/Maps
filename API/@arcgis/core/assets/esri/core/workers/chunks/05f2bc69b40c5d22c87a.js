"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4403,2058],{64403:(e,t,r)=>{r.r(t),r.d(t,{M:()=>c,S:()=>k,a:()=>g,f:()=>E,i:()=>L,s:()=>b});var n,o,s,a,i,l,c,u,d=r(76506),f=r(73173);function h(e){return(0,f.g)(`esri/libs/i3s/${e}`)}let m,p,y;function b(e){const t=e.modifications,r=y._malloc(8*t.length),n=new Float64Array(y.HEAPU8.buffer,r,t.length);for(let e=0;e<t.length;++e)n[e]=t[e];y.setModifications(e.context,r,t.length,e.isGeodetic),y._free(r)}function w(e,t){if(!y)return null;const{context:r,localOrigin:n,globalTrafo:o,mbs:s,obb:a,elevationOffset:i,geometryBuffer:c,geometryDescriptor:u,indexToVertexProjector:f,vertexToRenderProjector:h}=e,m=y._malloc(c.byteLength),p=y._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(y.HEAPU8.buffer,m,c.byteLength);b.set(new Uint8Array(c));const w=new Float64Array(y.HEAPU8.buffer,p,33);v(w,n);let g=w.byteOffset+3*w.BYTES_PER_ELEMENT,E=new Float64Array(w.buffer,g);v(E,o),g+=16*w.BYTES_PER_ELEMENT,E=new Float64Array(w.buffer,g),v(E,s),g+=4*w.BYTES_PER_ELEMENT,(0,d.i)(a)&&(E=new Float64Array(w.buffer,g),v(E,a.center),g+=3*w.BYTES_PER_ELEMENT,E=new Float64Array(w.buffer,g),v(E,a.halfSize),g+=3*w.BYTES_PER_ELEMENT,E=new Float64Array(w.buffer,g),v(E,a.quaternion));const T=u,L={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:T.featureIndex},O=y.process(r,!!e.obb,m,b.byteLength,T,L,p,i,f,h,e.normalReferenceFrame);if(y._free(p),y._free(m),O.error.length>0)throw`i3s.wasm: ${O.error}`;if(O.discarded)return null;const k=O.componentOffsets.length>0?(0,d.s)(O.componentOffsets):null,S=O.featureIds.length>0?(0,d.s)(O.featureIds):null,q=(0,d.s)(O.interleavedVertedData).buffer,C=O.indicesType===l.Int16?(0,d.s)(new Uint16Array(O.indices.buffer,O.indices.byteOffset,O.indices.byteLength/2)):(0,d.s)(new Uint32Array(O.indices.buffer,O.indices.byteOffset,O.indices.byteLength/4)),P=(0,d.s)(O.positions),x=O.positionIndicesType===l.Int16?(0,d.s)(new Uint16Array(O.positionIndices.buffer,O.positionIndices.byteOffset,O.positionIndices.byteLength/2)):(0,d.s)(new Uint32Array(O.positionIndices.buffer,O.positionIndices.byteOffset,O.positionIndices.byteLength/4)),_={layout:e.layouts[0],interleavedVertexData:q,indices:C,hasColors:O.hasColors,hasModifications:O.hasModifications,positionData:{data:P,indices:x}};return S&&t.push(S.buffer),k&&t.push(k.buffer),t.push(q),t.push(C.buffer),t.push(P.buffer),t.push(x.buffer),{componentOffsets:k,featureIds:S,transformedGeometry:_,obb:O.obb}}function g(e){return 0===e?o.Unmodified:1===e?o.PotentiallyModified:2===e?o.Culled:o.Unknown}function E(e){const{context:t,buffer:r}=e,n=y._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(y.HEAPU8.buffer,n,o),a=new Float64Array(r);s.set(a),y.filterOBBs(t,n,o),a.set(s),y._free(n)}function T(e){y&&y.destroy(e)}function v(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function L(){return y?Promise.resolve():(p||(p=(m||(m=new Promise((e=>r.e(2599).then(r.bind(r,92599)).then((e=>e.i)).then((({default:t})=>{const r=t({locateFile:h,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>Promise.reject(e)))),m).then((e=>{y=e,p=null}))),p)}r(68681),(u=n||(n={}))[u.Unmodified=0]="Unmodified",u[u.Culled=1]="Culled",u[u.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(o||(o={})),function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(s||(s={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(i||(i={})),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(l||(l={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(c||(c={}));const O={transform:w,destroy:T},k=Object.freeze({__proto__:null,process:async function(e){await L();const t=[e.geometryBuffer];return{result:w(e,t),transferList:t}},dracoDecompressPointCloudData:async function(e){var t;await L();const r=[e.geometryBuffer],{geometryBuffer:n}=e,o=n.byteLength,s=y._malloc(o),a=new Uint8Array(y.HEAPU8.buffer,s,o);a.set(new Uint8Array(n));const i=y.dracoDecompressPointCloudData(s,a.byteLength);if(y._free(s),i.error.length>0)throw`i3s.wasm: ${i.error}`;const l=(null==(t=i.featureIds)?void 0:t.length)>0?(0,d.s)(i.featureIds):null,c=(0,d.s)(i.positions);return l&&r.push(l.buffer),r.push(c.buffer),{result:{positions:c,featureIds:l},transferList:r}},filterObbsForModifications:async function(e){await L(),E(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}},setModifications:async function(e){await L(),b(e)},setLegacySchema:async function(e){await L(),y.setLegacySchema(e.context,e.jsonSchema)},destroyContext:function(e){T(e)},setModificationsSync:b,interpretObbModificationResults:g,filterObbsForModificationsSync:E,initialize:L,test:O})},73173:(e,t,r)=>{r.d(t,{g:()=>l});var n=r(31450),o=(r(82058),r(60991)),s=r(92143),a=r(32101);const i=s.L.getLogger("esri.assets");function l(e){if(!n.Z.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o.Z("assets:path-not-set","config.assetsPath is not set");return(0,a.v_)(n.Z.assetsPath,e)}},68681:(e,t,r)=>{function n(){return[0,0,0,0]}function o(e,t,r,n){return[e,t,r,n]}function s(e,t){return new Float64Array(e,t,4)}r.d(t,{a:()=>s,c:()=>n,f:()=>o}),o(1,1,1,1)},82058:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h,l:()=>d,r:()=>x,s:()=>u});var n=r(31450),o=r(88762),s=r(60991),a=r(76506),i=r(50406),l=r(32101);r(71552),r(92143),r(40642);const c=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function u(e){const t=(0,l.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!c.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function d(e,t,r=!1,n){return new Promise(((o,s)=>{if((0,i.Hc)(n))return void s(f());let l=()=>{d(),s(new Error(`Unable to load ${t}`))},c=()=>{const t=e;d(),o(t)},u=()=>{if(!e)return;const t=e;d(),t.src="",s(f())};const d=()=>{(0,a.h)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",c)),l=null,c=null,e=null,(0,a.i)(n)&&n.removeEventListener("abort",u),u=null,r&&URL.revokeObjectURL(t)};(0,a.i)(n)&&n.addEventListener("abort",u),(0,a.h)("esri-image-decode")?e.decode().then(c,l):(e.addEventListener("error",l),e.addEventListener("load",c))}))}function f(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}async function h(e,t){var c;const d=(0,l.HK)(e),f=(0,l.jc)(e);f||d||(e=(0,l.Fv)(e));const b={url:e,requestOptions:{...(0,a.u)(t)}};let w=(0,l.oh)(e);if(w){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=L("request:interceptor",e,t)}if((n instanceof Error||n instanceof s.Z)&&(r=L("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(w,b);if(null!=e)return{data:e,getHeader:E,requestOptions:b.requestOptions,url:b.url};w.after||w.error||(w=null)}if(e=b.url,"image"===(t=b.requestOptions).responseType){if((0,a.h)("host-webworker")||(0,a.h)("host-node"))throw L("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),b)}else if(d)throw L("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),b);if("head"===t.method){if(t.body)throw L("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),b);if(d||f)throw L("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),b)}if(await async function(){(0,a.h)("host-webworker")?m||(m=await r.e(9768).then(r.bind(r,89768))):h._abortableFetch||(h._abortableFetch=globalThis.fetch.bind(globalThis))}(),m)return m.execute(e,t);const g=new AbortController;(0,i.fu)(t,(()=>g.abort()));const T={controller:g,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:w,params:b,redoRequest:!1,useIdentity:p.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},v=await async function(e){var t,r;let s,a;await async function(e){const t=e.params.url,r=e.params.requestOptions,s=e.controller.signal,a=r.body;let l=null,c=null,d=null;if(y&&"HTMLFormElement"in globalThis&&(a instanceof FormData?l=a:a instanceof HTMLFormElement&&(c=a,l=new FormData(c))),"string"==typeof a&&(d=a),e.fetchOptions={cache:r.cacheBust&&!h._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:s},(l||d)&&(e.fetchOptions.body=l||d),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||l&&l.get&&l.get("token")||c&&c.elements.token),!e.hasToken&&n.Z.apiKey&&u(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!k(t)&&!(0,i.Hc)(s)){let n;"immediate"===r.authMode?(await O(),n=await o.id.getCredential(t,{signal:s}),e.credential=n):"no-prompt"===r.authMode?(await O(),n=await o.id.getCredential(t,{prompt:!1,signal:s}).catch((()=>{})),e.credential=n):o.id&&(n=o.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[s,a]=await S(e)}while(!await C(e,s,a))}catch(t){const r=L("request:server",t,e.params,s);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const c=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(c)&&!e.hasToken&&!e.credentialToken&&null!=(t=a)&&null!=(r=t.user)&&r.username&&!(0,l.kl)(c)){const e=(0,l.P$)(c,!0);e&&p.trustedServers.push(e)}const d=e.credential;if(d&&o.id){const e=o.id.findServerInfo(d.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,d.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:a,getHeader:s?e=>s.headers.get(e):E,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(T);return null==(c=w)||null==c.after||c.after(v),v}let m;const p=n.Z.request,y="FormData"in globalThis,b=[499,498,403,401],w=["COM_0056","COM_0057","SB_0008"],g=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],E=()=>null,T=Symbol();function v(e){const t=(0,l.P$)(e);return!t||t.endsWith(".arcgis.com")||h._corsServers.includes(t)||(0,l.kl)(t)}function L(e,t,r,n){let o="Error";const l={url:r.url,requestOptions:r.requestOptions,getHeader:E,ssl:!1};if(t instanceof s.Z)return t.details?(t.details=(0,a.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=l,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(o=s),e&&(l.getHeader=e),l.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,l.subCode=t.subcode,l.messageCode=t.messageCode,"string"==typeof t.details?l.messages=[t.details]:l.messages=t.details,l.raw=T in t?t[T]:t}return(0,i.D_)(t)?(0,i.zE)():new s.Z(e,o,l)}async function O(){o.id||await Promise.all([r.e(6229),r.e(1566)]).then(r.bind(r,71566))}function k(e){return g.some((t=>t.test(e)))}async function S(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,s=(0,l.jc)(t)||(0,l.HK)(t),c=r.responseType||"json",u=s?0:null!=r.timeout?r.timeout:p.timeout;let d=!1;if(!s){e.useSSL&&(t=(0,l.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,l.ZN)(t,"request.preventCache",Date.now()));let s={...r.query};e.credentialToken&&(s.token=e.credentialToken);let i=(0,l.B7)(s);(0,a.h)("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const c=t.length+1+i.length;let u;d="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||c>p.maxUrlLength;const f=r.useProxy||!!(0,l.ed)(t);if(f){const e=(0,l.b7)(t);u=e.path,!d&&u.length+1+c>p.maxUrlLength&&(d=!0),e.query&&(s={...e.query,...s})}if("HEAD"===n.method&&(d||f)){if(d){if(c>p.maxUrlLength)throw L("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw L("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(f)throw L("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(d?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,l.fl)(t,s):(n.body=(0,l.B7)(s),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,l.fl)(t,s),f&&(e.useProxy=!0,t=`${u}?${t}`),s.token&&y&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",s.token):e.append("token",s.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,l.D6)(t,(0,l.TI)()))if((0,l.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let f,m,b=0,w=!1;u>0&&(b=setTimeout((()=>{w=!0,e.controller.abort()}),u));try{if("native-request-init"===r.responseType)m=n,m.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||d||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!s&&!e.useProxy&&p.proxyUrl&&!v(t)){if(f=await h._abortableFetch(t,n),e.useProxy||function(e){const t=(0,l.P$)(e);t&&!h._corsServers.includes(t)&&h._corsServers.push(t)}(t),"native"===r.responseType)m=f;else if("HEAD"!==n.method)if(f.ok){switch(c){case"array-buffer":m=await f.arrayBuffer();break;case"blob":case"image":m=await f.blob();break;default:m=await f.text()}if(b&&(clearTimeout(b),b=0),"json"===c||"xml"===c||"document"===c)if(m)switch(c){case"json":m=JSON.parse(m);break;case"xml":m=q(m,"application/xml");break;case"document":m=q(m,"text/html")}else m=null;if(m){if("array-buffer"===c||"blob"===c){const e=f.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&m["blob"===c?"size":"byteLength"]<=750)try{const e=await new Response(m).json();e.error&&(m=e)}catch{}}"image"===c&&m instanceof Blob&&(m=await P(URL.createObjectURL(m),e,!0))}}else m=await f.text()}else m=await P(t,e)}catch(n){if("AbortError"===n.name){if(w)throw new Error("Timeout exceeded");throw(0,i.zE)("Request canceled")}if(!(!f&&n instanceof TypeError&&p.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||v(t))throw n;e.redoRequest=!0,(0,l.tD)({proxyUrl:p.proxyUrl,urlPrefix:(0,l.P$)(t)})}finally{b&&clearTimeout(b)}return[f,m]}function q(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function C(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let s,a,i,l;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[T]=r,s;null!=r&&r.error&&(s=r.error),s&&(a=Number(s.code),i=s.hasOwnProperty("subcode")?Number(s.subcode):null,l=s.messageCode,l=l&&l.toUpperCase());const c=n.authMode;if(403===a&&(4===i||s.message&&s.message.toLowerCase().indexOf("ssl")>-1&&-1===s.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&-1!==b.indexOf(a)&&!k(e.params.url)&&(403!==a||-1===w.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await O();try{const t=await o.id.getCredential(e.params.url,{error:L("request:server",s,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=null,e.credentialToken=null,!1;s=t}}if(s)throw s;return!0}function P(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,d(o,e,r,n)}h._abortableFetch=null,h._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const x=Object.freeze({__proto__:null,default:h})}}]);