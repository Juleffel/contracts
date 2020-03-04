goog.provide('multis.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.utils');
multis.subs.reg_sub_db = (function multis$subs$reg_sub_db(var_args){
var G__40703 = arguments.length;
switch (G__40703) {
case 1:
return multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1 = (function (db_path){
var G__40705 = db_path;
var G__40706 = (function (db,_){
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(db_path) : db.call(null,db_path));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40705,G__40706) : re_frame.core.reg_sub.call(null,G__40705,G__40706));
}));

(multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$2 = (function (event_name,db_path){
var G__40707 = event_name;
var G__40708 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40707,G__40708) : re_frame.core.reg_sub.call(null,G__40707,G__40708));
}));

(multis.subs.reg_sub_db.cljs$lang$maxFixedArity = 2);

var G__40709_40868 = new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958);
var G__40710_40869 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40709_40868,G__40710_40869) : re_frame.core.reg_sub.call(null,G__40709_40868,G__40710_40869));
var G__40712_40874 = new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329);
var G__40713_40875 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40712_40874,G__40713_40875) : re_frame.core.reg_sub.call(null,G__40712_40874,G__40713_40875));
multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965));
var G__40715_40879 = new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575);
var G__40716_40880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40717_40881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null)], null);
var G__40718_40882 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40715_40879,G__40716_40880,G__40717_40881,G__40718_40882) : re_frame.core.reg_sub.call(null,G__40715_40879,G__40716_40880,G__40717_40881,G__40718_40882));
var G__40727_40885 = new cljs.core.Keyword(null,"new-recipient-address-valid?","new-recipient-address-valid?",-1523867837);
var G__40728_40886 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40729_40887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null);
var G__40730_40888 = (function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v),(42));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40727_40885,G__40728_40886,G__40729_40887,G__40730_40888) : re_frame.core.reg_sub.call(null,G__40727_40885,G__40728_40886,G__40729_40887,G__40730_40888));
var G__40732_40899 = new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003);
var G__40733_40900 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40734_40901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null)], null);
var G__40735_40902 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40732_40899,G__40733_40900,G__40734_40901,G__40735_40902) : re_frame.core.reg_sub.call(null,G__40732_40899,G__40733_40900,G__40734_40901,G__40735_40902));
var G__40737_40907 = new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548);
var G__40738_40908 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40739_40909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null)], null);
var G__40740_40910 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40737_40907,G__40738_40908,G__40739_40909,G__40740_40910) : re_frame.core.reg_sub.call(null,G__40737_40907,G__40738_40908,G__40739_40909,G__40740_40910));
var G__40743_40911 = new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015);
var G__40744_40912 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40745_40913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null)], null);
var G__40746_40914 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40743_40911,G__40744_40912,G__40745_40913,G__40746_40914) : re_frame.core.reg_sub.call(null,G__40743_40911,G__40744_40912,G__40745_40913,G__40746_40914));
var G__40754_40922 = new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927);
var G__40755_40923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40756_40924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null)], null);
var G__40757_40925 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40754_40922,G__40755_40923,G__40756_40924,G__40757_40925) : re_frame.core.reg_sub.call(null,G__40754_40922,G__40755_40923,G__40756_40924,G__40757_40925));
var G__40759_40926 = new cljs.core.Keyword(null,"stream-values","stream-values",1710399854);
var G__40760_40927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40761_40928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null);
var G__40762_40929 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40763_40930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null);
var G__40764_40931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40765_40932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null);
var G__40766_40933 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40767_40934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null);
var G__40768_40935 = (function (p__40769){
var vec__40772 = p__40769;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40772,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40772,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40772,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40772,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),u,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049),r,new cljs.core.Keyword(null,"amount","amount",364489504),(a | (0)),new cljs.core.Keyword(null,"duration","duration",1444101068),(d | (0))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__40759_40926,G__40760_40927,G__40761_40928,G__40762_40929,G__40763_40930,G__40764_40931,G__40765_40932,G__40766_40933,G__40767_40934,G__40768_40935) : re_frame.core.reg_sub.call(null,G__40759_40926,G__40760_40927,G__40761_40928,G__40762_40929,G__40763_40930,G__40764_40931,G__40765_40932,G__40766_40933,G__40767_40934,G__40768_40935));
var G__40783_40943 = new cljs.core.Keyword(null,"stream-values-valid?","stream-values-valid?",497467954);
var G__40784_40944 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40785_40945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__40786_40946 = (function (p__40789){
var map__40790 = p__40789;
var map__40790__$1 = (((((!((map__40790 == null))))?(((((map__40790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40790):map__40790);
var user_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40790__$1,new cljs.core.Keyword(null,"user-address","user-address",-2070986675));
var recipient_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40790__$1,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40790__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40790__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return multis.utils.stream_values_valid_QMARK_(user_address,recipient_address,amount,duration);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40783_40943,G__40784_40944,G__40785_40945,G__40786_40946) : re_frame.core.reg_sub.call(null,G__40783_40943,G__40784_40944,G__40785_40945,G__40786_40946));
var G__40795_40951 = new cljs.core.Keyword(null,"stream-values-filled?","stream-values-filled?",-2063992178);
var G__40796_40952 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40797_40953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__40798_40954 = (function (p__40799){
var map__40800 = p__40799;
var map__40800__$1 = (((((!((map__40800 == null))))?(((((map__40800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40800):map__40800);
var user_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"user-address","user-address",-2070986675));
var recipient_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var and__4174__auto__ = user_address;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = recipient_address;
if(cljs.core.truth_(and__4174__auto____$1)){
return ((((0) < amount)) && (((0) < duration)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40795_40951,G__40796_40952,G__40797_40953,G__40798_40954) : re_frame.core.reg_sub.call(null,G__40795_40951,G__40796_40952,G__40797_40953,G__40798_40954));
var G__40811_40965 = new cljs.core.Keyword(null,"stream-values-enough-tokens?","stream-values-enough-tokens?",-171312077);
var G__40812_40966 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40813_40967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__40814_40968 = (function (p__40815){
var map__40816 = p__40815;
var map__40816__$1 = (((((!((map__40816 == null))))?(((((map__40816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40816):map__40816);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40816__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40816__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (amount >= ((3600) * duration));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40811_40965,G__40812_40966,G__40813_40967,G__40814_40968) : re_frame.core.reg_sub.call(null,G__40811_40965,G__40812_40966,G__40813_40967,G__40814_40968));
var G__40823_40977 = new cljs.core.Keyword(null,"stream-values-mod-ok?","stream-values-mod-ok?",-627729389);
var G__40824_40978 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__40825_40979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__40826_40980 = (function (p__40828){
var map__40830 = p__40828;
var map__40830__$1 = (((((!((map__40830 == null))))?(((((map__40830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40830):map__40830);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(amount,((3600) * duration)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__40823_40977,G__40824_40978,G__40825_40979,G__40826_40980) : re_frame.core.reg_sub.call(null,G__40823_40977,G__40824_40978,G__40825_40979,G__40826_40980));
multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-contract-instance","token-contract-instance",2098598897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"MintToken","MintToken",-218028453),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"adding-stream","adding-stream",442448041));
var G__40841_40982 = new cljs.core.Keyword(null,"streams","streams",1465783789);
var G__40842_40983 = (function (db){
return cljs.core.vals(new cljs.core.Keyword(null,"streams","streams",1465783789).cljs$core$IFn$_invoke$arity$1(db));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40841_40982,G__40842_40983) : re_frame.core.reg_sub.call(null,G__40841_40982,G__40842_40983));
var G__40846_40984 = new cljs.core.Keyword(null,"stream","stream",1534941648);
var G__40847_40985 = (function (db,p__40849){
var vec__40850 = p__40849;
var stream_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40850,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"streams","streams",1465783789),stream_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__40846_40984,G__40847_40985) : re_frame.core.reg_sub.call(null,G__40846_40984,G__40847_40985));

//# sourceMappingURL=multis.subs.js.map
