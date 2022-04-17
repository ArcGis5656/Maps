/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{a as e,c as o}from"./_commonjsHelpers.js";import{a as r}from"./moment2.js";function s(e,o){for(var r=0;r<o.length;r++){const s=o[r];if("string"!=typeof s&&!Array.isArray(s))for(const o in s)if("default"!==o&&!(o in e)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(e,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}return Object.freeze(e)}var t,a,n={exports:{}};t=o,a=function(e){var o="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),r="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),s=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],t=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,s){return e?/-MMM-/.test(s)?r[e.month()]:o[e.month()]:o},monthsRegex:t,monthsShortRegex:t,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:s,longMonthsParse:s,shortMonthsParse:s,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}})},a("function"==typeof e?r.exports:t.moment);const i=n.exports,m=Object.freeze(s({__proto__:null,default:i},[n.exports]));export{m as e};
