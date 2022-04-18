// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers"],function(f,g){let h=function(){function e(a,b,c){this._initialVelocity=a;this._stopVelocity=b;this._friction=c;this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}var d=e.prototype;d.isFinished=function(a){return a>this.duration};d.value=function(a){return this.valueFromInitialVelocity(this._initialVelocity,a)};d.valueDelta=function(a,b){const c=this.value(a);return this.value(a+
b)-c};d.valueFromInitialVelocity=function(a,b){b=Math.min(b,this.duration);const c=1-this.friction;return a*(c**b-1)/Math.log(c)};g._createClass(e,[{key:"duration",get:function(){return this._duration}},{key:"friction",get:function(){return this._friction}}]);return e}();f.Momentum=h;Object.defineProperty(f,"__esModule",{value:!0})});