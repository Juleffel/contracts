goog.provide('multis.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.utils');
multis.subs.reg_sub_db = (function multis$subs$reg_sub_db(var_args){
var G__53753 = arguments.length;
switch (G__53753) {
case 1:
return multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53826 = arguments.length;
var i__4790__auto___53827 = (0);
while(true){
if((i__4790__auto___53827 < len__4789__auto___53826)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53827]));

var G__53828 = (i__4790__auto___53827 + (1));
i__4790__auto___53827 = G__53828;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1 = (function (db_path){
var G__53756 = db_path;
var G__53757 = (function (db,_){
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(db_path) : db.call(null,db_path));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53756,G__53757) : re_frame.core.reg_sub.call(null,G__53756,G__53757));
}));

(multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$variadic = (function (event_name,db_path){
var G__53759 = event_name;
var G__53760 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53759,G__53760) : re_frame.core.reg_sub.call(null,G__53759,G__53760));
}));

/** @this {Function} */
(multis.subs.reg_sub_db.cljs$lang$applyTo = (function (seq53751){
var G__53752 = cljs.core.first(seq53751);
var seq53751__$1 = cljs.core.next(seq53751);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53752,seq53751__$1);
}));

(multis.subs.reg_sub_db.cljs$lang$maxFixedArity = (1));

var G__53762_53839 = new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958);
var G__53763_53840 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53762_53839,G__53763_53840) : re_frame.core.reg_sub.call(null,G__53762_53839,G__53763_53840));
var G__53765_53842 = new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329);
var G__53766_53843 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53765_53842,G__53766_53843) : re_frame.core.reg_sub.call(null,G__53765_53842,G__53766_53843));
multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965));
var G__53767_53845 = new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575);
var G__53768_53846 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53769_53847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null)], null);
var G__53770_53848 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53767_53845,G__53768_53846,G__53769_53847,G__53770_53848) : re_frame.core.reg_sub.call(null,G__53767_53845,G__53768_53846,G__53769_53847,G__53770_53848));
var G__53771_53852 = new cljs.core.Keyword(null,"new-recipient-address-valid?","new-recipient-address-valid?",-1523867837);
var G__53772_53853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53773_53854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null);
var G__53774_53855 = (function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v),(42));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53771_53852,G__53772_53853,G__53773_53854,G__53774_53855) : re_frame.core.reg_sub.call(null,G__53771_53852,G__53772_53853,G__53773_53854,G__53774_53855));
var G__53775_53859 = new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003);
var G__53776_53860 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53777_53861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null)], null);
var G__53778_53862 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53775_53859,G__53776_53860,G__53777_53861,G__53778_53862) : re_frame.core.reg_sub.call(null,G__53775_53859,G__53776_53860,G__53777_53861,G__53778_53862));
var G__53781_53864 = new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548);
var G__53782_53865 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53783_53866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null)], null);
var G__53784_53867 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53781_53864,G__53782_53865,G__53783_53866,G__53784_53867) : re_frame.core.reg_sub.call(null,G__53781_53864,G__53782_53865,G__53783_53866,G__53784_53867));
var G__53786_53869 = new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015);
var G__53787_53870 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53788_53871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null)], null);
var G__53789_53872 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53786_53869,G__53787_53870,G__53788_53871,G__53789_53872) : re_frame.core.reg_sub.call(null,G__53786_53869,G__53787_53870,G__53788_53871,G__53789_53872));
var G__53790_53879 = new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927);
var G__53791_53880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53792_53881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null)], null);
var G__53793_53882 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53790_53879,G__53791_53880,G__53792_53881,G__53793_53882) : re_frame.core.reg_sub.call(null,G__53790_53879,G__53791_53880,G__53792_53881,G__53793_53882));
var G__53795_53883 = new cljs.core.Keyword(null,"stream-values","stream-values",1710399854);
var G__53796_53884 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53797_53885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null);
var G__53798_53886 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53799_53887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null);
var G__53800_53888 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53801_53889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null);
var G__53802_53890 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53803_53891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null);
var G__53804_53892 = (function (p__53809){
var vec__53810 = p__53809;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53810,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53810,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53810,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53810,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),u,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049),r,new cljs.core.Keyword(null,"amount","amount",364489504),(a | (0)),new cljs.core.Keyword(null,"duration","duration",1444101068),(d | (0))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53795_53883,G__53796_53884,G__53797_53885,G__53798_53886,G__53799_53887,G__53800_53888,G__53801_53889,G__53802_53890,G__53803_53891,G__53804_53892) : re_frame.core.reg_sub.call(null,G__53795_53883,G__53796_53884,G__53797_53885,G__53798_53886,G__53799_53887,G__53800_53888,G__53801_53889,G__53802_53890,G__53803_53891,G__53804_53892));
var G__53816_53902 = new cljs.core.Keyword(null,"stream-values-valid?","stream-values-valid?",497467954);
var G__53817_53903 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53818_53904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__53819_53905 = (function (p__53820){
var map__53821 = p__53820;
var map__53821__$1 = (((((!((map__53821 == null))))?(((((map__53821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53821):map__53821);
var user_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53821__$1,new cljs.core.Keyword(null,"user-address","user-address",-2070986675));
var recipient_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53821__$1,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53821__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53821__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return multis.utils.stream_values_valid_QMARK_(user_address,recipient_address,amount,duration);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53816_53902,G__53817_53903,G__53818_53904,G__53819_53905) : re_frame.core.reg_sub.call(null,G__53816_53902,G__53817_53903,G__53818_53904,G__53819_53905));

//# sourceMappingURL=multis.subs.js.map
