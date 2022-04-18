// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/languageUtils","../../core/number"],function(p,b,q){function n(g,f,k){if("undefined"===typeof k||0===+k)return Math[g](f);f=+f;k=+k;if(isNaN(f)||"number"!==typeof k||0!==k%1)return NaN;f=f.toString().split("e");f=Math[g](+(f[0]+"e"+(f[1]?+f[1]-k:-k)));f=f.toString().split("e");return+(f[0]+"e"+(f[1]?+f[1]+k:k))}p.registerFunctions=function(g,f){function k(d,e,c){d=b.toNumber(d);return isNaN(d)?d:isNaN(e)||isNaN(c)||e>c?NaN:d<e?e:d>c?c:d}g.number=function(d,e){return f(d,
e,function(c,h,a){b.pcCheck(a,1,2);c=a[0];return b.isNumber(c)?c:null===c?0:b.isDate(c)||b.isBoolean(c)?Number(c):b.isArray(c)?NaN:""===c||void 0===c?Number(c):b.isString(c)?void 0!==a[1]?(a=b.multiReplace(a[1],"\u2030",""),a=b.multiReplace(a,"\u00a4",""),q.parse(c,{pattern:a})):Number(c.trim()):Number(c)})};g.abs=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.abs(b.toNumber(a[0]))})};g.acos=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.acos(b.toNumber(a[0]))})};
g.asin=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.asin(b.toNumber(a[0]))})};g.atan=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.atan(b.toNumber(a[0]))})};g.atan2=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,2,2);return Math.atan2(b.toNumber(a[0]),b.toNumber(a[1]))})};g.ceil=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,2);return 2===a.length?(c=b.toNumber(a[1]),isNaN(c)&&(c=0),n("ceil",b.toNumber(a[0]),-1*c)):Math.ceil(b.toNumber(a[0]))})};
g.round=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,2);return 2===a.length?(c=b.toNumber(a[1]),isNaN(c)&&(c=0),n("round",b.toNumber(a[0]),-1*c)):Math.round(b.toNumber(a[0]))})};g.floor=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,2);return 2===a.length?(c=b.toNumber(a[1]),isNaN(c)&&(c=0),n("floor",b.toNumber(a[0]),-1*c)):Math.floor(b.toNumber(a[0]))})};g.cos=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.cos(b.toNumber(a[0]))})};g.isnan=function(d,
e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return"number"===typeof a[0]&&isNaN(a[0])})};g.exp=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.exp(b.toNumber(a[0]))})};g.log=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.log(b.toNumber(a[0]))})};g.pow=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,2,2);return b.toNumber(a[0])**b.toNumber(a[1])})};g.random=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,0,0);return Math.random()})};
g.sin=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.sin(b.toNumber(a[0]))})};g.sqrt=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.sqrt(b.toNumber(a[0]))})};g.tan=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return Math.tan(b.toNumber(a[0]))})};g.defaultvalue=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,2,2);return null===a[0]||""===a[0]||void 0===a[0]?a[1]:a[0]})};g.isempty=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,
1,1);return null===a[0]||""===a[0]||void 0===a[0]?!0:!1})};g["boolean"]=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,1,1);return b.toBoolean(a[0])})};g.constrain=function(d,e){return f(d,e,function(c,h,a){b.pcCheck(a,3,3);c=b.toNumber(a[1]);h=b.toNumber(a[2]);if(b.isArray(a[0])){var l=[];for(var m of a[0])l.push(k(m,c,h));return l}if(b.isImmutableArray(a[0])){m=[];for(l=0;l<a[0].length();l++)m.push(k(a[0].get(l),c,h));return m}return k(a[0],c,h)})}};Object.defineProperty(p,"__esModule",
{value:!0})});