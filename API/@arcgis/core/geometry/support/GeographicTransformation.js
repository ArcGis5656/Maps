/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import t from"./GeographicTransformationStep.js";class s{constructor(s){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,s&&s.steps)for(const i of s.steps)i instanceof t?this.steps.push(i):this.steps.push(new t({wkid:i.wkid,wkt:i.wkt,isInverse:i.isInverse}))}static cacheKey(t,s){return[void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==s.wkid&&null!==s.wkid?s.wkid.toString():"-1",void 0!==s.wkt&&null!==s.wkt?s.wkt.toString():""].join(",")}static fromGE(i){const e=new s;let n="";for(const s of i.steps){const i=t.fromGE(s);e.steps.push(i),n+=i.uid.toString()+","}return e._cached_projection={},e._gtlistentry=null,e._chain=n,e}getInverse(){const t=new s;t.steps=[];for(let s=this.steps.length-1;s>=0;s--){const i=this.steps[s];t.steps.push(i.getInverse())}return t}getGTListEntry(){let t="";for(const s of this.steps)t+=s.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry}assignCachedGe(t,i,e){this._cached_projection[s.cacheKey(t,i)]=e}getCachedGeTransformation(t,i){let e="";for(const t of this.steps)e+=t.uid.toString()+",";e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e);const n=this._cached_projection[s.cacheKey(t,i)];return void 0===n?null:n}}export{s as default};
