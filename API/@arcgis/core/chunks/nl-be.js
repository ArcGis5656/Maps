/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{a as e,c as a}from"./_commonjsHelpers.js";import{a as r}from"./moment2.js";function t(e,a){for(var r=0;r<a.length;r++){const t=a[r];if("string"!=typeof t&&!Array.isArray(t))for(const a in t)if("default"!==a&&!(a in e)){const r=Object.getOwnPropertyDescriptor(t,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>t[a]})}}return Object.freeze(e)}var n,o,s={exports:{}};n=a,o=function(e){var a="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),r="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),t=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],n=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,t){return e?/-MMM-/.test(t)?r[e.month()]:a[e.month()]:a},monthsRegex:n,monthsShortRegex:n,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:t,longMonthsParse:t,shortMonthsParse:t,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})},o("function"==typeof e?r.exports:n.moment);const i=s.exports,m=Object.freeze(t({__proto__:null,default:i},[s.exports]));export{m as n};
