/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{a as e}from"./enums4.js";import{c as t}from"./MaterialKey.js";import"../core/Error.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./alignmentUtils.js";function r(e){if("line-marker"===e.type){var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function a(e){return hydrateKey(e)}function s(s,l,n){if(!s)return null;switch(s.type){case"simple-fill":case"picture-fill":return function(s,l,n){const i=l.supportsOutlineFills,o=t(e.FILL,{...l,isOutlinedFill:i}),c=n?a(o):o,u=s.clone(),m=u.outline;l.supportsOutlineFills||(u.outline=null);const h={materialKey:c,hash:u.hash(),isOutlinedFill:!!l.supportsOutlineFills,...r(u)};if(l.supportsOutlineFills)return h;const p=[];if(p.push(h),m){const s=t(e.LINE,{...l,isOutline:!0}),i={materialKey:n?a(s):s,hash:m.hash(),...r(m)};p.push(i)}return{type:"composite-symbol",layers:p,hash:p.reduce(((e,t)=>t.hash+e),"")}}(s,l,n);case"simple-marker":case"picture-marker":return function(s,l,n){const i=t(e.MARKER,l),o=n?a(i):i,c=r(s);return{materialKey:o,hash:s.hash(),...c,angle:s.angle,maxVVSize:l.maxVVSize}}(s,l,n);case"simple-line":return function(s,l,n){const i=t(e.LINE,l),o=n?a(i):i,c=s.clone(),u=c.marker;c.marker=null;const m=[];if(m.push({materialKey:o,hash:c.hash(),...r(c)}),u){var h;const s=t(e.MARKER,l),i=n?a(s):s;u.color=null!=(h=u.color)?h:c.color,m.push({materialKey:i,hash:u.hash(),lineWidth:c.width,...r(u)})}return{type:"composite-symbol",layers:m,hash:m.reduce(((e,t)=>t.hash+e),"")}}(s,l,n);case"text":return function(s,l,n){const i=t(e.TEXT,l),o=n?a(i):i,c=r(s);return{materialKey:o,hash:s.hash(),...c,angle:s.angle,maxVVSize:l.maxVVSize}}(s,l,n);case"label":return function(r,s,l){const n=r.toJSON(),i=t(e.LABEL,{...s,placement:n.labelPlacement});return{materialKey:l?a(i):i,hash:r.hash(),...n,labelPlacement:n.labelPlacement}}(s,l,n);case"cim":return{type:"cim",rendererKey:l.vvFlags,data:s.data,maxVVSize:l.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:l.vvFlags,data:s,maxVVSize:l.maxVVSize};case"web-style":return{...r(s),type:"web-style",hash:s.hash(),rendererKey:l.vvFlags,maxVVSize:l.maxVVSize};default:throw new Error(`symbol not supported ${s.type}`)}}export{s as createSymbolSchema};