/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{a as e,c as t}from"./_commonjsHelpers.js";import{a as i}from"./moment2.js";function r(e,t){for(var i=0;i<t.length;i++){const r=t[i];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(e)}var n,a,o={exports:{}};n=t,a=function(e){function t(e,t,i){var r=" ";return(e%100>=20||e>=100&&e%100==0)&&(r=" de "),e+r+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",ww:"săptămâni",MM:"luni",yy:"ani"}[i]}return e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:t,m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,w:"o săptămână",ww:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}})},a("function"==typeof e?i.exports:n.moment);const s=o.exports,m=Object.freeze(r({__proto__:null,default:s},[o.exports]));export{m as r};
