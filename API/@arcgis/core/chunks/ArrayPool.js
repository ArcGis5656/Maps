/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class e{constructor(e,t,i,s=1,o=0){if(this.ctor=e,this.acquireFunction=t,this.releaseFunction=i,this.allocationSize=s,this._pool=new Array(o),this._initialSize=o,this.ctor)for(let e=0;e<o;e++)this._pool[e]=new this.ctor;this.allocationSize=Math.max(s,1)}destroy(){this.prune(0)}acquire(...t){let i;if(e.test.disabled)i=new this.ctor;else{if(0===this._pool.length){const e=this.allocationSize;for(let t=0;t<e;t++)this._pool[t]=new this.ctor}i=this._pool.pop()}return this.acquireFunction?this.acquireFunction(i,...t):function(e){return e&&e.acquire&&"function"==typeof e.acquire}(i)&&i.acquire(...t),i}release(t){t&&!e.test.disabled&&(this.releaseFunction?this.releaseFunction(t):function(e){return e&&e.release&&"function"==typeof e.release}(t)&&t.release(),this._pool.push(t))}prune(e=this._initialSize){if(!(e>=this._pool.length)){for(let t=e;t<this._pool.length;++t){const e=this._pool[t];this._dispose(e)}this._pool.length=e}}_dispose(e){e.dispose&&"function"==typeof e.dispose&&e.dispose()}}function t(e){e.length=0}e.test={disabled:!1};class i{constructor(i=50,s=50){this._pool=new e(Array,void 0,t,s,i)}acquire(){return this._pool.acquire()}release(e){this._pool.release(e)}prune(){this._pool.prune(0)}static acquire(){return s.acquire()}static release(e){return s.release(e)}static prune(){s.prune()}}const s=new i(100);export{i as A,e as O};
