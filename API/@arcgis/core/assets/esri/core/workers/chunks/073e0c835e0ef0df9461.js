"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3706],{58142:(n,e,i)=>{function o(n){var e;const i=n.layer;return"floorInfo"in i&&null!=(e=i.floorInfo)&&e.floorField&&"floors"in n.view?r(n.view.floors,i.floorInfo.floorField):null}function l(n,e){var i;return"floorInfo"in e&&null!=(i=e.floorInfo)&&i.floorField?r(n,e.floorInfo.floorField):null}function t(n,e){const{definitionExpression:i}=e;return n?i?`(${i}) AND (${n})`:n:i}function r(n,e){if(null==n||!n.length)return null;const i=n.filter((n=>""!==n)).map((n=>`'${n}'`));return i.push("''"),`${e} IN (${i.join(",")}) OR ${e} IS NULL`}i.d(e,{a:()=>o,c:()=>t,g:()=>l})},69997:(n,e,i)=>{i.d(e,{g:()=>l});var o=i(53785);function l(n,e){const i=e||n.extent,l=n.width,t=(0,o.g)(i&&i.spatialReference);return i&&l?i.width/l*t*o.i*96:0}},52228:(n,e,i)=>{var o,l;function t(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function r(n){return null!=n&&!isNaN(n)&&isFinite(n)}function a(n){return n.valueExpression?o.Expression:n.field&&"string"==typeof n.field?o.Field:o.Unknown}function u(n,e){const i=e||a(n),t=n.valueUnit||"unknown";return i===o.Unknown?l.Constant:n.stops?l.Stops:null!=n.minSize&&null!=n.maxSize&&null!=n.minDataValue&&null!=n.maxDataValue?l.ClampedLinear:"unknown"===t?null!=n.minSize&&null!=n.minDataValue?n.minSize&&n.minDataValue?l.Proportional:l.Additive:l.Identity:l.RealWorldSize}i.d(e,{I:()=>o,T:()=>l,a:()=>u,b:()=>r,g:()=>a,i:()=>t}),function(n){n.Unknown="unknown",n.Expression="expression",n.Field="field"}(o||(o={})),function(n){n.Unknown="unknown",n.Stops="stops",n.ClampedLinear="clamped-linear",n.Proportional="proportional",n.Additive="additive",n.Constant="constant",n.Identity="identity",n.RealWorldSize="real-world-size"}(l||(l={}))}}]);