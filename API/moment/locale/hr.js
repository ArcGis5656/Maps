//>>built
(function(d,c){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?c(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],c):c(d.moment)})(this,function(d){function c(a,e,f){var b=a+" ";switch(f){case "ss":return 1===a?b+"sekunda":2===a||3===a||4===a?b+"sekunde":b+"sekundi";case "m":return e?"jedna minuta":"jedne minute";case "mm":return 1===a?b+"minuta":2===a||3===a||4===a?b+"minute":b+"minuta";case "h":return e?"jedan sat":"jednog sata";
case "hh":return 1===a?b+"sat":2===a||3===a||4===a?b+"sata":b+"sati";case "dd":return 1===a?b+"dan":b+"dana";case "MM":return 1===a?b+"mjesec":2===a||3===a||4===a?b+"mjeseca":b+"mjeseci";case "yy":return 1===a?b+"godina":2===a||3===a||4===a?b+"godine":b+"godina"}}return d.defineLocale("hr",{months:{format:"sije\u010dnja velja\u010de o\u017eujka travnja svibnja lipnja srpnja kolovoza rujna listopada studenoga prosinca".split(" "),standalone:"sije\u010danj velja\u010da o\u017eujak travanj svibanj lipanj srpanj kolovoz rujan listopad studeni prosinac".split(" ")},
monthsShort:"sij. velj. o\u017eu. tra. svi. lip. srp. kol. ruj. lis. stu. pro.".split(" "),monthsParseExact:!0,weekdays:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),weekdaysShort:"ned. pon. uto. sri. \u010det. pet. sub.".split(" "),weekdaysMin:"ne po ut sr \u010de pe su".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"Do MMMM YYYY",LLL:"Do MMMM YYYY H:mm",LLLL:"dddd, Do MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",
nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:return"[pro\u0161lu] [nedjelju] [u] LT";case 3:return"[pro\u0161lu] [srijedu] [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",
past:"prije %s",s:"par sekundi",ss:c,m:c,mm:c,h:c,hh:c,d:"dan",dd:c,M:"mjesec",MM:c,y:"godinu",yy:c},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})});