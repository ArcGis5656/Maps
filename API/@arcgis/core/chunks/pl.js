/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{a as e,c as t}from"./_commonjsHelpers.js";import{a as r}from"./moment2.js";function i(e,t){for(var r=0;r<t.length;r++){const i=t[r];if("string"!=typeof i&&!Array.isArray(i))for(const t in i)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(i,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>i[t]})}}return Object.freeze(e)}var s,n,a={exports:{}};s=t,n=function(e){var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),r="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),i=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^paź/i,/^lis/i,/^gru/i];function s(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function n(e,t,r){var i=e+" ";switch(r){case"ss":return i+(s(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return i+(s(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return i+(s(e)?"godziny":"godzin");case"ww":return i+(s(e)?"tygodnie":"tygodni");case"MM":return i+(s(e)?"miesiące":"miesięcy");case"yy":return i+(s(e)?"lata":"lat")}}return e.defineLocale("pl",{months:function(e,i){return e?/D MMMM/.test(i)?r[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:n,m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",w:"tydzień",ww:n,M:"miesiąc",MM:n,y:"rok",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})},n("function"==typeof e?r.exports:s.moment);const o=a.exports,d=Object.freeze(i({__proto__:null,default:o},[a.exports]));export{d as p};
