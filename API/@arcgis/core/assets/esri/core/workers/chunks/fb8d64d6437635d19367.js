"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9768],{89768:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>o});var a=s(60991),r=s(76506);let n;function o(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const o=(0,r.u)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then((async r=>{let l,i,u,c,b;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(l=new Blob([r.data]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),c=n.readAsText(l),"json"!==s)))){try{i=JSON.parse(c||null)}catch(r){const s={...r,url:e,requestOptions:t};throw new a.Z("request:server",r.message,s)}if(i.error){const s={...i.error,url:e,requestOptions:t};throw new a.Z("request:server",i.error.message,s)}}}else"native"===s&&(r.data.signal=o,u=await fetch(r.data.url,r.data));switch(s){case"blob":b=l;break;case"json":b=i;break;case"native":b=u;break;case"text":b=c;break;default:b=r.data}return{data:b,requestOptions:t,ssl:r.ssl,url:e}}))}s(92143),s(31450),s(71552),s(40642)}}]);