// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define("require exports ../arcade/arcadeCompiler ../arcade/arcadeRuntime ../arcade/parser ../arcade/treeAnalysis ../core/has ../core/promiseUtils".split(" "),function(f,c,g,l,h,q,I,r){function J(a,b){return!0===b.useAsync||!0===a.isAsync?Y(a,b):I("esri-csp-restrictions")?function(d){return l.executeScript(a,d)}:g.compileScript(a,b)}function Y(a,b){if(null===e)throw Error("Async Arcade must be enabled for this script");return I("esri-csp-restrictions")?function(d){return e.executeScript(a,d)}:g.compileScript(a,
b,!0)}function K(a){l.extend(a);g.extend(a,"sync");null===e?v.push(a):(g.extend(a,"async"),e.extend(a))}function w(a,b=[]){return h.parseScript(a,b)}function L(a,b,d=""){return h.validateScript(a,b,d)}function M(a,b,d,k=""){return h.scriptCheck(a,b,d,k)}function N(a,b,d=[]){a=h.parseScript(a,d);return x(a,b)}function x(a,b){if(!0===b.useAsync||!0===a.isAsync){if(null===e)throw Error("Async Arcade must be enabled for this script");return e.executeScript(a,b)}return l.executeScript(a,b)}function y(a,
b){return l.referencesMember(a,b)}function O(a,b){return l.referencesFunction(a,b)}function P(a,b){return h.extractFieldLiterals(a)}function Q(a){return h.extractExpectedFieldLiterals(a)}function t(a,b=[]){void 0===a.usesGeometry&&q.findScriptDependencies(a,b);return!0===a.usesGeometry}function z(){return A?A:A=r.all([new Promise((a,b)=>f(["../geometry/geometryEngine"],a,b)),new Promise((a,b)=>f(["../arcade/functions/geomsync"],a,b))]).then(([a,b])=>{B=!0;b.setGeometryEngine(a);return!0})}function u(){return null!==
C?C:C=g.enableAsyncSupport().then(()=>new Promise((a,b)=>f(["../arcade/arcadeAsyncRuntime"],a,b))).then(a=>{e=a;for(const b of v)e.extend(b),g.extend(b,"async");v=null;return!0})}function R(){return D}function E(){return e?!0:!1}function S(){return B}function F(){return G?G:G=u().then(()=>r.all([new Promise((a,b)=>f(["../arcade/featureSetUtils"],a,b)),new Promise((a,b)=>f(["../arcade/functions/featuresetbase"],a,b)),new Promise((a,b)=>f(["../arcade/functions/featuresetgeom"],a,b)),new Promise((a,
b)=>f(["../arcade/functions/featuresetstats"],a,b)),new Promise((a,b)=>f(["../arcade/functions/featuresetstring"],a,b))]).then(([a,b,d,k,m])=>{T=a;e.extend([b,d,k,m]);g.extend([b,d,k,m],"async");return D=!0}))}function H(a,b=[]){void 0===a.usesFeatureSet&&q.findScriptDependencies(a,b);return!0===a.usesFeatureSet}function U(a,b=[]){void 0===a.isAsync&&q.findScriptDependencies(a,b);return!0===a.isAsync}function Z(a,b){if(b)for(const d of b)if(y(a,d))return!0;return!1}function V(a,b,d=[],k=!1){return r.create((m,
aa)=>{const n="string"===typeof a?w(a):a,p=[];n&&(!1===B&&(t(n)||k)&&p.push(z()),!1===E()&&(!0===n.isAsync||b)&&p.push(u()),!1===D&&(H(n)||Z(n,d))&&p.push(F()));p.length?r.all(p).then(()=>{m(!0)},aa):m(!0)})}function W(a){if(t(a))return!0;a=q.findFunctionCalls(a);let b=!1;for(let d=0;d<a.length;d++)if(-1<ba.indexOf(a[d])){b=!0;break}return b}function X(){return T}const ba="feature angle bearing centroid envelopeintersects extent geometry isselfintersecting ringisclockwise".split(" ");let D=!1,B=!1,
e=null,v=[],A=null,C=null,G=null,T=null;const ca=Object.freeze({__proto__:null,compileScript:J,extend:K,parseScript:w,validateScript:L,scriptCheck:M,parseAndExecuteScript:N,executeScript:x,referencesMember:y,referencesFunction:O,extractFieldLiterals:P,extractExpectedFieldLiterals:Q,scriptUsesGeometryEngine:t,enableGeometrySupport:z,enableAsyncSupport:u,isFeatureSetSupportEnabled:R,isAsyncEnabled:E,isGeometryEnabled:S,enableFeatureSetSupport:F,scriptUsesFeatureSet:H,scriptIsAsync:U,loadScriptDependencies:V,
scriptTouchesGeometry:W,featureSetUtils:X});c.arcade=ca;c.compileScript=J;c.enableAsyncSupport=u;c.enableFeatureSetSupport=F;c.enableGeometrySupport=z;c.executeScript=x;c.extend=K;c.extractExpectedFieldLiterals=Q;c.extractFieldLiterals=P;c.featureSetUtils=X;c.isAsyncEnabled=E;c.isFeatureSetSupportEnabled=R;c.isGeometryEnabled=S;c.loadScriptDependencies=V;c.parseAndExecuteScript=N;c.parseScript=w;c.referencesFunction=O;c.referencesMember=y;c.scriptCheck=M;c.scriptIsAsync=U;c.scriptTouchesGeometry=
W;c.scriptUsesFeatureSet=H;c.scriptUsesGeometryEngine=t;c.validateScript=L});