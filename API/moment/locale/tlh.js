//>>built
(function(e,c){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?c(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],c):c(e.moment)})(this,function(e){function c(a,b,h,f){b=Math.floor(a%1E3/100);f=Math.floor(a%100/10);a%=10;var d="";0<b&&(d+=g[b]+"vatlh");0<f&&(d+=(""!==d?" ":"")+g[f]+"maH");0<a&&(d+=(""!==d?" ":"")+g[a]);a=""===d?"pagh":d;switch(h){case "ss":return a+" lup";case "mm":return a+" tup";case "hh":return a+" rep";case "dd":return a+
" jaj";case "MM":return a+" jar";case "yy":return a+" DIS"}}var g="pagh wa\u2019 cha\u2019 wej loS vagh jav Soch chorgh Hut".split(" ");return e.defineLocale("tlh",{months:"tera\u2019 jar wa\u2019;tera\u2019 jar cha\u2019;tera\u2019 jar wej;tera\u2019 jar loS;tera\u2019 jar vagh;tera\u2019 jar jav;tera\u2019 jar Soch;tera\u2019 jar chorgh;tera\u2019 jar Hut;tera\u2019 jar wa\u2019maH;tera\u2019 jar wa\u2019maH wa\u2019;tera\u2019 jar wa\u2019maH cha\u2019".split(";"),monthsShort:"jar wa\u2019;jar cha\u2019;jar wej;jar loS;jar vagh;jar jav;jar Soch;jar chorgh;jar Hut;jar wa\u2019maH;jar wa\u2019maH wa\u2019;jar wa\u2019maH cha\u2019".split(";"),
monthsParseExact:!0,weekdays:"lojmItjaj DaSjaj povjaj ghItlhjaj loghjaj buqjaj ghInjaj".split(" "),weekdaysShort:"lojmItjaj DaSjaj povjaj ghItlhjaj loghjaj buqjaj ghInjaj".split(" "),weekdaysMin:"lojmItjaj DaSjaj povjaj ghItlhjaj loghjaj buqjaj ghInjaj".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa\u2019leS] LT",nextWeek:"LLL",lastDay:"[wa\u2019Hu\u2019] LT",
lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(a){var b=a;return b=-1!==a.indexOf("jaj")?b.slice(0,-3)+"leS":-1!==a.indexOf("jar")?b.slice(0,-3)+"waQ":-1!==a.indexOf("DIS")?b.slice(0,-3)+"nem":b+" pIq"},past:function(a){var b=a;return b=-1!==a.indexOf("jaj")?b.slice(0,-3)+"Hu\u2019":-1!==a.indexOf("jar")?b.slice(0,-3)+"wen":-1!==a.indexOf("DIS")?b.slice(0,-3)+"ben":b+" ret"},s:"puS lup",ss:c,m:"wa\u2019 tup",mm:c,h:"wa\u2019 rep",hh:c,d:"wa\u2019 jaj",dd:c,M:"wa\u2019 jar",MM:c,y:"wa\u2019 DIS",
yy:c},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});