// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],function(h,p){let q=function(){function g(){this._key="";this._keyDirty=!1;this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[];this._parameterNames||(this._parameterNames=[])}g.prototype.snapshot=function(){const a=this._parameterNames,e={key:this.key};for(const b of a)e[b]=this[b];return e};p._createClass(g,[{key:"key",get:function(){this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,
this._parameterBits));return this._key}}]);return g}();h.ShaderTechniqueConfiguration=q;h.parameter=function(g={}){return(a,e)=>{var b,l;a._parameterNames=null!=(b=a._parameterNames)?b:[];a._parameterNames.push(e);const k=a._parameterNames.length-1;b=Math.ceil(Math.log2(g.count||2));const d=null!=(l=a._parameterBits)?l:[0];let c=0;for(;16<d[c]+b;)c++,c>=d.length&&d.push(0);a._parameterBits=d;const m=d[c],n=(1<<b)-1<<m;d[c]+=b;Object.defineProperty(a,e,{get(){return this[k]},set(f){if(this[k]!==f&&
(this[k]=f,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~n|+f<<m&n,"number"!==typeof f&&"boolean"!==typeof f))throw"Configuration value for "+e+" must be boolean or number, got "+typeof f;}})}};Object.defineProperty(h,"__esModule",{value:!0})});