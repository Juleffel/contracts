goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.date');
goog.require('goog.date.duration');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__45144_SHARP_){
return p1__45144_SHARP_.getDate();
});
var M = (function (p1__45145_SHARP_){
return (p1__45145_SHARP_.getMonth() + (1));
});
var y = (function (p1__45146_SHARP_){
return p1__45146_SHARP_.getYear();
});
var h = (function (p1__45147_SHARP_){
var hr = cljs.core.mod(p1__45147_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});
var a = (function (p1__45149_SHARP_){
if((p1__45149_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});
var A = (function (p1__45150_SHARP_){
if((p1__45150_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});
var H = (function (p1__45151_SHARP_){
return p1__45151_SHARP_.getHours();
});
var m = (function (p1__45152_SHARP_){
return p1__45152_SHARP_.getMinutes();
});
var s = (function (p1__45154_SHARP_){
return p1__45154_SHARP_.getSeconds();
});
var S = (function (p1__45155_SHARP_){
return p1__45155_SHARP_.getMilliseconds();
});
var Z = (function (p1__45156_SHARP_){
return p1__45156_SHARP_.getTimezoneOffsetString();
});
var doy = (function (p1__45157_SHARP_){
return p1__45157_SHARP_.getDayOfYear();
});
var dow = (function (p1__45158_SHARP_){
return p1__45158_SHARP_.getDay();
});
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,(function (p1__45171_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__45171_SHARP_));
}),Z,s,(function (p1__45175_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(p1__45175_SHARP_.getWeekNumber());
}),(function (p1__45166_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__45180 = (M(p1__45166_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__45180) : cljs_time.format.months.call(null,G__45180));
})());
}),y,dow,(function (p1__45173_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__45173_SHARP_));
}),doy,(function (p1__45174_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__45174_SHARP_),(3));
}),(function (p1__45162_SHARP_){
var G__45182 = dow(p1__45162_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__45182) : cljs_time.format.days.call(null,G__45182));
}),(function (p1__45169_SHARP_){
return cljs.core.mod(y(p1__45169_SHARP_),(100));
}),M,(function (p1__45172_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__45172_SHARP_));
}),S,(function (p1__45165_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__45165_SHARP_));
}),(function (p1__45163_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__45188 = dow(p1__45163_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__45188) : cljs_time.format.days.call(null,G__45188));
})());
}),Z,H,doy,(function (p1__45159_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__45159_SHARP_));
}),a,(function (p1__45170_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__45170_SHARP_));
}),(function (p1__45161_SHARP_){
var d__$1 = d(p1__45161_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45190 = d__$1;
switch (G__45190) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
}),y,A,(function (p1__45164_SHARP_){
var G__45191 = dow(p1__45164_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__45191) : cljs_time.format.days.call(null,G__45191));
}),h,y,m,(function (p1__45168_SHARP_){
return cljs.core.mod(y(p1__45168_SHARP_),(100));
}),doy,(function (p1__45167_SHARP_){
var G__45192 = (M(p1__45167_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__45192) : cljs_time.format.months.call(null,G__45192));
})]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__45197 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45197,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45197,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45197,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45197,(3),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = sign;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = hh;
if(cljs.core.truth_(and__4174__auto____$1)){
return mm;
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var sign_45501__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__45200_45502 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45196_SHARP_){
return parseInt(p1__45196_SHARP_,(10));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_45503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45200_45502,(0),null);
var mm_45504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45200_45502,(1),null);
var adjusted_45505 = (function (){var G__45203 = (function (){var G__45205 = d;
var G__45206 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_45503__$1);
return (sign_45501__$1.cljs$core$IFn$_invoke$arity$2 ? sign_45501__$1.cljs$core$IFn$_invoke$arity$2(G__45205,G__45206) : sign_45501__$1.call(null,G__45205,G__45206));
})();
var G__45204 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_45504__$1);
return (sign_45501__$1.cljs$core$IFn$_invoke$arity$2 ? sign_45501__$1.cljs$core$IFn$_invoke$arity$2(G__45203,G__45204) : sign_45501__$1.call(null,G__45203,G__45204));
})();
d.setTime(adjusted_45505.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__45207_SHARP_){
return parseInt(p1__45207_SHARP_,(10));
});
var assoc_fn = (function (kw){
return (function (p1__45208_SHARP_,p2__45209_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45208_SHARP_,kw,parse_int(p2__45209_SHARP_));
});
});
var y = assoc_fn(new cljs.core.Keyword(null,"years","years",-1298579689));
var d = assoc_fn(new cljs.core.Keyword(null,"days","days",-1394072564));
var M = (function (p1__45210_SHARP_,p2__45211_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45210_SHARP_,new cljs.core.Keyword(null,"months","months",-45571637),(parse_int(p2__45211_SHARP_) - (1)));
});
var h = (function (p1__45212_SHARP_,p2__45213_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45212_SHARP_,new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.mod(parse_int(p2__45213_SHARP_),(12)));
});
var a = (function (p__45222,x){
var map__45223 = p__45222;
var map__45223__$1 = (((((!((map__45223 == null))))?(((((map__45223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45223):map__45223);
var date = map__45223__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45223__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
if(cljs.core.truth_((function (){var G__45227 = clojure.string.lower_case(x);
var fexpr__45226 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null);
return (fexpr__45226.cljs$core$IFn$_invoke$arity$1 ? fexpr__45226.cljs$core$IFn$_invoke$arity$1(G__45227) : fexpr__45226.call(null,G__45227));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,new cljs.core.Keyword(null,"hours","hours",58380855),(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});
var H = assoc_fn(new cljs.core.Keyword(null,"hours","hours",58380855));
var m = assoc_fn(new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var s = assoc_fn(new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var S = assoc_fn(new cljs.core.Keyword(null,"millis","millis",-1338288387));
var MMM = (function (p1__45216_SHARP_,p2__45215_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45215_SHARP_)].join('')),m__$1);
}),cljs_time.format.months));
return M(p1__45216_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1))));
});
var MMMM = (function (p1__45217_SHARP_,p2__45218_SHARP_){
return M(p1__45217_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__45218_SHARP_) + (1))));
});
var skip = (function() { 
var G__45516__delegate = function (x,args){
return x;
};
var G__45516 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__45517__i = 0, G__45517__a = new Array(arguments.length -  1);
while (G__45517__i < G__45517__a.length) {G__45517__a[G__45517__i] = arguments[G__45517__i + 1]; ++G__45517__i;}
  args = new cljs.core.IndexedSeq(G__45517__a,0,null);
} 
return G__45516__delegate.call(this,x,args);};
G__45516.cljs$lang$maxFixedArity = 1;
G__45516.cljs$lang$applyTo = (function (arglist__45519){
var x = cljs.core.first(arglist__45519);
var args = cljs.core.rest(arglist__45519);
return G__45516__delegate(x,args);
});
G__45516.cljs$core$IFn$_invoke$arity$variadic = G__45516__delegate;
return G__45516;
})()
;
var tz = (function (p1__45219_SHARP_,p2__45220_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45219_SHARP_,new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),p2__45220_SHARP_);
});
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months)),")"].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days),")"].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)),")"].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days)),")"].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days),")"].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months),")"].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",-1298579689),(function (p1__45232_SHARP_,p2__45233_SHARP_){
return p1__45232_SHARP_.setYear(p2__45233_SHARP_);
}),new cljs.core.Keyword(null,"months","months",-45571637),(function (p1__45234_SHARP_,p2__45235_SHARP_){
return p1__45234_SHARP_.setMonth(p2__45235_SHARP_);
}),new cljs.core.Keyword(null,"days","days",-1394072564),(function (p1__45236_SHARP_,p2__45237_SHARP_){
return p1__45236_SHARP_.setDate(p2__45237_SHARP_);
}),new cljs.core.Keyword(null,"hours","hours",58380855),(function (p1__45238_SHARP_,p2__45239_SHARP_){
return p1__45238_SHARP_.setHours(p2__45239_SHARP_);
}),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(function (p1__45240_SHARP_,p2__45241_SHARP_){
return p1__45240_SHARP_.setMinutes(p2__45241_SHARP_);
}),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(function (p1__45242_SHARP_,p2__45243_SHARP_){
return p1__45242_SHARP_.setSeconds(p2__45243_SHARP_);
}),new cljs.core.Keyword(null,"millis","millis",-1338288387),(function (p1__45244_SHARP_,p2__45245_SHARP_){
return p1__45244_SHARP_.setMilliseconds(p2__45245_SHARP_);
}),new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","A","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters)))),")"].join(''));
cljs_time.format.old_string_replace = (function cljs_time$format$old_string_replace(s,match,replacement){
return s.replace((new RegExp(match.source,"g")),replacement);
});
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern(cljs_time.format.old_string_replace(cljs_time.format.old_string_replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__45254_SHARP_){
return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__45254_SHARP_) : cljs_time.format.date_parsers.call(null,p1__45254_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__45553__delegate = function (date,p__45272){
var vec__45274 = p__45272;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(0),null);
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.format.old_string_replace(fmts,/'([^']+)'/,(function (x,s){
if(((cljs.core.seq(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.last(x))))){
var map__45282 = cljs.core.deref(a);
var map__45282__$1 = (((((!((map__45282 == null))))?(((((map__45282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45282):map__45282);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45282__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var k = ["&&&&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace","replace",-786587770),k], null),cljs.core.constantly(s));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null),cljs.core.inc);

return k;
} else {
return x;
}
})),cljs.core.re_pattern((function (){var G__45296 = cljs_time.format.date_format_pattern.source;
if(cljs.core.truth_(new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)))){
return ["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.keys(new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)))),")|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45296)].join('');
} else {
return G__45296;
}
})()),(function (p1__45265_SHARP_){
var fexpr__45307 = (function (){var fexpr__45309 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formatters,formatter_overrides,new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))], 0));
return (fexpr__45309.cljs$core$IFn$_invoke$arity$1 ? fexpr__45309.cljs$core$IFn$_invoke$arity$1(p1__45265_SHARP_) : fexpr__45309.call(null,p1__45265_SHARP_));
})();
return (fexpr__45307.cljs$core$IFn$_invoke$arity$1 ? fexpr__45307.cljs$core$IFn$_invoke$arity$1(date) : fexpr__45307.call(null,date));
})], null);
};
var G__45553 = function (date,var_args){
var p__45272 = null;
if (arguments.length > 1) {
var G__45555__i = 0, G__45555__a = new Array(arguments.length -  1);
while (G__45555__i < G__45555__a.length) {G__45555__a[G__45555__i] = arguments[G__45555__i + 1]; ++G__45555__i;}
  p__45272 = new cljs.core.IndexedSeq(G__45555__a,0,null);
} 
return G__45553__delegate.call(this,date,p__45272);};
G__45553.cljs$lang$maxFixedArity = 1;
G__45553.cljs$lang$applyTo = (function (arglist__45556){
var date = cljs.core.first(arglist__45556);
var p__45272 = cljs.core.rest(arglist__45556);
return G__45553__delegate(date,p__45272);
});
G__45553.cljs$core$IFn$_invoke$arity$variadic = G__45553__delegate;
return G__45553;
})()
;
});
cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__45318 = arguments.length;
switch (G__45318) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
}));

(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.format","formatter","cljs-time.format/formatter",1104417384)], null));
}));

(cljs_time.format.formatter.cljs$lang$maxFixedArity = 2);

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format-str","format-str",695206156),fmts,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.format","formatter","cljs-time.format/formatter",1104417384)], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714),new cljs.core.Keyword(null,"message","message",-406056002),cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"default-year","default-year",1658037695),default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),new cljs.core.Keyword(null,"hour-minute","hour-minute",-1164421312),new cljs.core.Keyword(null,"t-time","t-time",-42016318),new cljs.core.Keyword(null,"basic-ordinal-date","basic-ordinal-date",243220162),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",870271683),new cljs.core.Keyword(null,"weekyear-week-day","weekyear-week-day",-740233533),new cljs.core.Keyword(null,"week-date-time","week-date-time",540228836),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",1937143076),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604),new cljs.core.Keyword(null,"date-time","date-time",177938180),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",-1720654076),new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),new cljs.core.Keyword(null,"basic-week-date","basic-week-date",1775847845),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",-424650106),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671),new cljs.core.Keyword(null,"year-month-day","year-month-day",-415594169),new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),new cljs.core.Keyword(null,"rfc822","rfc822",-404628697),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",-425334775),new cljs.core.Keyword(null,"basic-ordinal-date-time","basic-ordinal-date-time",1054564521),new cljs.core.Keyword(null,"ordinal-date","ordinal-date",-77899447),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",-1253038551),new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"basic-week-date-time","basic-week-date-time",-502077622),new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),new cljs.core.Keyword(null,"basic-time","basic-time",-923134899),new cljs.core.Keyword(null,"hour-minute-second","hour-minute-second",-1906654770),new cljs.core.Keyword(null,"ordinal-date-time","ordinal-date-time",-1386753458),new cljs.core.Keyword(null,"ordinal-date-time-no-ms","ordinal-date-time-no-ms",-1539005490),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1209749775),new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",990689905),new cljs.core.Keyword(null,"basic-week-date-time-no-ms","basic-week-date-time-no-ms",-2043113679),new cljs.core.Keyword(null,"basic-date","basic-date",1566551506),new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),new cljs.core.Keyword(null,"local-date","local-date",1829761428),new cljs.core.Keyword(null,"basic-ordinal-date-time-no-ms","basic-ordinal-date-time-no-ms",-395135436),new cljs.core.Keyword(null,"year-month","year-month",735283381),new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),new cljs.core.Keyword(null,"week-date","week-date",-1176745129),new cljs.core.Keyword(null,"date-hour","date-hour",-344234471),new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",-1565419364),new cljs.core.Keyword(null,"week-date-time-no-ms","week-date-time-no-ms",-1226853060),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",-899402179),new cljs.core.Keyword(null,"mysql","mysql",-1431590210),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",191791391)],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"date-element-parser","date-element-parser",2072167040),null,new cljs.core.Keyword(null,"date-parser","date-parser",-981534587),null,new cljs.core.Keyword(null,"local-time","local-time",-1873195290),null,new cljs.core.Keyword(null,"date-opt-time","date-opt-time",-1507102105),null,new cljs.core.Keyword(null,"time-parser","time-parser",-1636511536),null,new cljs.core.Keyword(null,"date-time-parser","date-time-parser",-656147568),null,new cljs.core.Keyword(null,"local-date","local-date",1829761428),null,new cljs.core.Keyword(null,"local-date-opt-time","local-date-opt-time",1178432599),null,new cljs.core.Keyword(null,"time-element-parser","time-element-parser",-2042883205),null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;

/**
 * @interface
 */
cljs_time.format.IDateMap = function(){};

cljs_time.format.date_map = (function cljs_time$format$date_map(date){
if((((!((date == null)))) && ((!((date.cljs_time$format$IDateMap$date_map$arity$1 == null)))))){
return date.cljs_time$format$IDateMap$date_map$arity$1(date);
} else {
var x__4487__auto__ = (((date == null))?null:date);
var m__4488__auto__ = (cljs_time.format.date_map[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(date) : m__4488__auto__.call(null,date));
} else {
var m__4485__auto__ = (cljs_time.format.date_map["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(date) : m__4485__auto__.call(null,date));
} else {
throw cljs.core.missing_protocol("IDateMap.date-map",date);
}
}
}
});

(goog.date.Date.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1)], null);
}));

(goog.date.DateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"millis","millis",-1338288387),(0)], null);
}));

(goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"years","years",-1298579689),(0),new cljs.core.Keyword(null,"months","months",-45571637),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(1),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"millis","millis",-1338288387),(0),new cljs.core.Keyword(null,"time-zone","time-zone",-1838760002),null], null);
}));
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor$,p__45350,s){
var map__45351 = p__45350;
var map__45351__$1 = (((((!((map__45351 == null))))?(((((map__45351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45351):map__45351);
var fmt = map__45351__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351__$1,new cljs.core.Keyword(null,"default-year","default-year",1658037695));
if(cljs.core.seq(s)){
} else {
throw (new Error("Assert failed: (seq s)"));
}

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45354){
var vec__45355 = p__45354;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
}),(parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(s) : parse_fn.call(null,s))));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor$((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs_time.format.date_map(d),new cljs.core.Keyword(null,"years","years",-1298579689),(function (){var or__4185__auto__ = default_year;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__45348_SHARP_,p2__45349_SHARP_){
return (p1__45348_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__45348_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__45349_SHARP_) : p1__45348_SHARP_.call(null,d,p2__45349_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (date,p__45361){
var vec__45362 = p__45361;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45362,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45362,(1),null);
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
}),empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parser-no-match","parser-no-match",1748518307)], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__45366 = arguments.length;
switch (G__45366) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
}));

(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4582__auto__ = (function cljs_time$format$iter__45367(s__45368){
return (new cljs.core.LazySeq(null,(function (){
var s__45368__$1 = s__45368;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45368__$1);
if(temp__5735__auto__){
var s__45368__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45368__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45368__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45370 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45369 = (0);
while(true){
if((i__45369 < size__4581__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45369);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e45371){var _ = e45371;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__45370,d);

var G__45611 = (i__45369 + (1));
i__45369 = G__45611;
continue;
} else {
var G__45612 = (i__45369 + (1));
i__45369 = G__45612;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45370),cljs_time$format$iter__45367(cljs.core.chunk_rest(s__45368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45370),null);
}
} else {
var f = cljs.core.first(s__45368__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e45372){var _ = e45372;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__45367(cljs.core.rest(s__45368__$2)));
} else {
var G__45617 = cljs.core.rest(s__45368__$2);
s__45368__$1 = G__45617;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
}));

(cljs_time.format.parse.cljs$lang$maxFixedArity = 2);

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__45375 = arguments.length;
switch (G__45375) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
}));

(cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4582__auto__ = (function cljs_time$format$iter__45379(s__45380){
return (new cljs.core.LazySeq(null,(function (){
var s__45380__$1 = s__45380;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45380__$1);
if(temp__5735__auto__){
var s__45380__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45380__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45380__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45382 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45381 = (0);
while(true){
if((i__45381 < size__4581__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45381);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e45383){if((e45383 instanceof Error)){
var _ = e45383;
return null;
} else {
throw e45383;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__45382,d);

var G__45619 = (i__45381 + (1));
i__45381 = G__45619;
continue;
} else {
var G__45620 = (i__45381 + (1));
i__45381 = G__45620;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45382),cljs_time$format$iter__45379(cljs.core.chunk_rest(s__45380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45382),null);
}
} else {
var f = cljs.core.first(s__45380__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e45384){if((e45384 instanceof Error)){
var _ = e45384;
return null;
} else {
throw e45384;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__45379(cljs.core.rest(s__45380__$2)));
} else {
var G__45625 = cljs.core.rest(s__45380__$2);
s__45380__$1 = G__45625;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
}));

(cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2);

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__45386 = arguments.length;
switch (G__45386) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
}));

(cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4582__auto__ = (function cljs_time$format$iter__45388(s__45389){
return (new cljs.core.LazySeq(null,(function (){
var s__45389__$1 = s__45389;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45389__$1);
if(temp__5735__auto__){
var s__45389__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45389__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45389__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45391 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45390 = (0);
while(true){
if((i__45390 < size__4581__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45390);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e45396){if((e45396 instanceof Error)){
var _ = e45396;
return null;
} else {
throw e45396;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__45391,d);

var G__45631 = (i__45390 + (1));
i__45390 = G__45631;
continue;
} else {
var G__45632 = (i__45390 + (1));
i__45390 = G__45632;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45391),cljs_time$format$iter__45388(cljs.core.chunk_rest(s__45389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45391),null);
}
} else {
var f = cljs.core.first(s__45389__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e45397){if((e45397 instanceof Error)){
var _ = e45397;
return null;
} else {
throw e45397;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__45388(cljs.core.rest(s__45389__$2)));
} else {
var G__45634 = cljs.core.rest(s__45389__$2);
s__45389__$1 = G__45634;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
}));

(cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2);

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__45399,dt){
var map__45400 = p__45399;
var map__45400__$1 = (((((!((map__45400 == null))))?(((((map__45400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45400):map__45400);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45400__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45400__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var fexpr__45402 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__45402.cljs$core$IFn$_invoke$arity$1 ? fexpr__45402.cljs$core$IFn$_invoke$arity$1(dt) : fexpr__45402.call(null,dt));
})());
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__45404,dt){
var map__45405 = p__45404;
var map__45405__$1 = (((((!((map__45405 == null))))?(((((map__45405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45405):map__45405);
var fmt = map__45405__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45405__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45405__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__45411 = dt;
var G__45412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__45410 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__45410.cljs$core$IFn$_invoke$arity$2 ? fexpr__45410.cljs$core$IFn$_invoke$arity$2(G__45411,G__45412) : fexpr__45410.call(null,G__45411,G__45412));
})());
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__45414,dt){
var map__45415 = p__45414;
var map__45415__$1 = (((((!((map__45415 == null))))?(((((map__45415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45415):map__45415);
var fmt = map__45415__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45415__$1,new cljs.core.Keyword(null,"format-str","format-str",695206156));
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45415__$1,new cljs.core.Keyword(null,"formatters","formatters",-1875637118));
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__45418 = dt;
var G__45419 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__45417 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__45417.cljs$core$IFn$_invoke$arity$2 ? fexpr__45417.cljs$core$IFn$_invoke$arity$2(G__45418,G__45419) : fexpr__45417.call(null,G__45418,G__45419));
})());
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__45421 = arguments.length;
switch (G__45421) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
}));

(cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__45428 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__45430 = null;
var count__45431 = (0);
var i__45432 = (0);
while(true){
if((i__45432 < count__45431)){
var p = chunk__45430.cljs$core$IIndexed$_nth$arity$2(null,i__45432);
var fmt_45659 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_45659,dt)], 0))], 0));


var G__45660 = seq__45428;
var G__45661 = chunk__45430;
var G__45662 = count__45431;
var G__45663 = (i__45432 + (1));
seq__45428 = G__45660;
chunk__45430 = G__45661;
count__45431 = G__45662;
i__45432 = G__45663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45428);
if(temp__5735__auto__){
var seq__45428__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45428__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45428__$1);
var G__45664 = cljs.core.chunk_rest(seq__45428__$1);
var G__45665 = c__4609__auto__;
var G__45666 = cljs.core.count(c__4609__auto__);
var G__45667 = (0);
seq__45428 = G__45664;
chunk__45430 = G__45665;
count__45431 = G__45666;
i__45432 = G__45667;
continue;
} else {
var p = cljs.core.first(seq__45428__$1);
var fmt_45669 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_45669,dt)], 0))], 0));


var G__45672 = cljs.core.next(seq__45428__$1);
var G__45673 = null;
var G__45674 = (0);
var G__45675 = (0);
seq__45428 = G__45672;
chunk__45430 = G__45673;
count__45431 = G__45674;
i__45432 = G__45675;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((((!((instant == null)))) && ((!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__4487__auto__ = (((instant == null))?null:instant);
var m__4488__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__4488__auto__.call(null,instant));
} else {
var m__4485__auto__ = (cljs_time.format.instant__GT_map["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__4485__auto__.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__45455 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__45455);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),millis], null);
});
(goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
}));

(cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
}));

(cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__45471 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__45471__$1 = (((G__45471 instanceof cljs.core.Keyword))?G__45471.fqn:null);
switch (G__45471__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45471__$1)].join('')));

}
}));

//# sourceMappingURL=cljs_time.format.js.map
