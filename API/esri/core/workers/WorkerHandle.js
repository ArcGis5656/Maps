// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../arrayUtils ../handleUtils ../Logger ../maybe ../promiseUtils ./workers".split(" "),function(k,l,m,n,g,p,q,r){const t=g.getLogger("esri.core.workers.WorkerHandle");g=function(){function h(a,b,c,e={}){this._mainMethod=b;this._listeners=[];this._promise=r.open(a,{...e,schedule:c}).then(f=>{if(void 0===this._thread){this._thread=f;this._promise=null;e.hasInitialize&&this.broadcast({},"initialize");for(const u of this._listeners)this._connectListener(u)}else f.close()});
this._promise.catch(f=>t.error(`Failed to initialize ${a} worker: ${f}`))}var d=h.prototype;d.on=function(a,b){const c={removed:!1,eventName:a,callback:b,threadHandle:null};this._listeners.push(c);this._connectListener(c);return n.makeHandle(()=>{c.removed=!0;m.remove(this._listeners,c);this._thread&&p.isSome(c.threadHandle)&&c.threadHandle.remove()})};d.destroy=function(){this._thread&&(this._thread.close(),this._thread=null);this._promise=null};d.invoke=function(a,b){return this.invokeMethod(this._mainMethod,
a,b)};d.invokeMethod=function(a,b,c){if(this._thread){const e=this.getTransferList(b,a);return this._thread.invoke(a,b,{transferList:e,signal:c})}return this._promise?this._promise.then(()=>{q.throwIfAborted(c);return this.invokeMethod(a,b,c)}):Promise.reject(null)};d.broadcast=function(a,b){return this._thread?Promise.all(this._thread.broadcast(b,a)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(a,b)):Promise.reject()};d._connectListener=function(a){this._thread&&this._thread.on(a.eventName,
a.callback).then(b=>{a.removed||(a.threadHandle=b)})};l._createClass(h,[{key:"promise",get:function(){return this._promise}}]);return h}();k.WorkerHandle=g;Object.defineProperty(k,"__esModule",{value:!0})});