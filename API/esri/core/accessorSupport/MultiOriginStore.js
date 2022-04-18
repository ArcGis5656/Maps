// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../lang","../maybe","./PropertyOrigin"],function(k,m,f){return function(){function g(){this._propertyOriginMap=new Map;this._originStores=Array(f.OriginIdNum);this._values=new Map;this.multipleOriginsSupported=!0}var e=g.prototype;e.clone=function(a){const b=new g;var c=this._originStores[f.OriginId.DEFAULTS];c&&c.forEach((d,h)=>{b.set(h,k.clone(d),f.OriginId.DEFAULTS)});for(let d=f.OriginId.SERVICE;d<f.OriginIdNum;d++)(c=this._originStores[d])&&c.forEach((h,l)=>{a&&a.has(l)||b.set(l,k.clone(h),
d)});return b};e.get=function(a,b){return(b=void 0===b?this._values:this._originStores[b])?b.get(a):void 0};e.keys=function(a){return(a=null==a?this._values:this._originStores[a])?[...a.keys()]:[]};e.set=function(a,b,c=f.OriginId.USER){var d=this._originStores[c];d||(d=new Map,this._originStores[c]=d);d.set(a,b);return!this._values.has(a)||m.assumeNonNull(this._propertyOriginMap.get(a))<=c?(d=this._values.get(a),this._values.set(a,b),this._propertyOriginMap.set(a,c),d!==b):!1};e.delete=function(a,
b=f.OriginId.USER){var c=this._originStores[b];if(c){var d=c.get(a);c.delete(a);if(this._values.has(a)&&this._propertyOriginMap.get(a)===b)for(this._values.delete(a),--b;0<=b;b--)if((c=this._originStores[b])&&c.has(a)){this._values.set(a,c.get(a));this._propertyOriginMap.set(a,b);break}return d}};e.has=function(a,b){return(b=void 0===b?this._values:this._originStores[b])?b.has(a):!1};e.revert=function(a,b){for(;0<b&&!this.has(a,b);)--b;var c=this._originStores[b];c=c&&c.get(a);const d=this._values.get(a);
this._values.set(a,c);this._propertyOriginMap.set(a,b);return d!==c};e.originOf=function(a){return this._propertyOriginMap.get(a)||f.OriginId.DEFAULTS};e.forEach=function(a){this._values.forEach(a)};return g}()});