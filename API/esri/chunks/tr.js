// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.22/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(l,h,m){var e={};(function(f,g){(function(d,b){"function"===typeof h.commonjsRequire?b(m.moment$1.exports):b(d.moment)})(h.commonjsGlobal,function(d){var b={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'\u00fcnc\u00fc",4:"'\u00fcnc\u00fc",100:"'\u00fcnc\u00fc",6:"'nc\u0131",9:"'uncu",10:"'uncu",30:"'uncu",60:"'\u0131nc\u0131",90:"'\u0131nc\u0131"};return d.defineLocale("tr",{months:"Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),
monthsShort:"Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),weekdays:"Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),weekdaysShort:"Paz Pts Sal \u00c7ar Per Cum Cts".split(" "),weekdaysMin:"Pz Pt Sa \u00c7a Pe Cu Ct".split(" "),meridiem:function(a,c,k){return 12>a?k?"\u00f6\u00f6":"\u00d6\u00d6":k?"\u00f6s":"\u00d6S"},meridiemParse:/\u00f6\u00f6|\u00d6\u00d6|\u00f6s|\u00d6S/,isPM:function(a){return"\u00f6s"===a||"\u00d6S"===a},longDateFormat:{LT:"HH:mm",
LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\u00fcn saat] LT",nextDay:"[yar\u0131n saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[d\u00fcn] LT",lastWeek:"[ge\u00e7en] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \u00f6nce",s:"birka\u00e7 saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g\u00fcn",dd:"%d g\u00fcn",w:"bir hafta",ww:"%d hafta",M:"bir ay",
MM:"%d ay",y:"bir y\u0131l",yy:"%d y\u0131l"},ordinal:function(a,c){switch(c){case "d":case "D":case "Do":case "DD":return a;default:if(0===a)return a+"'\u0131nc\u0131";c=a%10;return a+(b[c]||b[a%100-c]||b[100<=a?100:null])}},week:{dow:1,doy:7}})})})();e=Object.freeze(function(f,g){for(var d=0;d<g.length;d++){const b=g[d];if("string"!==typeof b&&!Array.isArray(b))for(const a in b)if("default"!==a&&!(a in f)){const c=Object.getOwnPropertyDescriptor(b,a);c&&Object.defineProperty(f,a,c.get?c:{enumerable:!0,
get:()=>b[a]})}}return Object.freeze(f)}({__proto__:null,default:e},[e]));l.tr=e});