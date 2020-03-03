goog.provide('multis.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.utils');
multis.subs.reg_sub_db = (function multis$subs$reg_sub_db(var_args){
var G__43782 = arguments.length;
switch (G__43782) {
case 1:
return multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___43858 = arguments.length;
var i__4790__auto___43859 = (0);
while(true){
if((i__4790__auto___43859 < len__4789__auto___43858)){
args_arr__4810__auto__.push((arguments[i__4790__auto___43859]));

var G__43860 = (i__4790__auto___43859 + (1));
i__4790__auto___43859 = G__43860;
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
var G__43783 = db_path;
var G__43784 = (function (db,_){
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(db_path) : db.call(null,db_path));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43783,G__43784) : re_frame.core.reg_sub.call(null,G__43783,G__43784));
}));

(multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$variadic = (function (event_name,db_path){
var G__43785 = event_name;
var G__43786 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43785,G__43786) : re_frame.core.reg_sub.call(null,G__43785,G__43786));
}));

/** @this {Function} */
(multis.subs.reg_sub_db.cljs$lang$applyTo = (function (seq43780){
var G__43781 = cljs.core.first(seq43780);
var seq43780__$1 = cljs.core.next(seq43780);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43781,seq43780__$1);
}));

(multis.subs.reg_sub_db.cljs$lang$maxFixedArity = (1));

var G__43787_43861 = new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958);
var G__43788_43862 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43787_43861,G__43788_43862) : re_frame.core.reg_sub.call(null,G__43787_43861,G__43788_43862));
var G__43789_43863 = new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329);
var G__43790_43864 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__43789_43863,G__43790_43864) : re_frame.core.reg_sub.call(null,G__43789_43863,G__43790_43864));
multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965));
var G__43791_43866 = new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575);
var G__43792_43867 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43793_43868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null)], null);
var G__43794_43869 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43791_43866,G__43792_43867,G__43793_43868,G__43794_43869) : re_frame.core.reg_sub.call(null,G__43791_43866,G__43792_43867,G__43793_43868,G__43794_43869));
var G__43795_43872 = new cljs.core.Keyword(null,"new-recipient-address-valid?","new-recipient-address-valid?",-1523867837);
var G__43796_43873 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43797_43874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null);
var G__43798_43875 = (function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v),(42));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43795_43872,G__43796_43873,G__43797_43874,G__43798_43875) : re_frame.core.reg_sub.call(null,G__43795_43872,G__43796_43873,G__43797_43874,G__43798_43875));
var G__43799_43879 = new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003);
var G__43800_43880 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43801_43881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null)], null);
var G__43802_43882 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43799_43879,G__43800_43880,G__43801_43881,G__43802_43882) : re_frame.core.reg_sub.call(null,G__43799_43879,G__43800_43880,G__43801_43881,G__43802_43882));
var G__43803_43884 = new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548);
var G__43804_43885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43805_43886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null)], null);
var G__43806_43887 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43803_43884,G__43804_43885,G__43805_43886,G__43806_43887) : re_frame.core.reg_sub.call(null,G__43803_43884,G__43804_43885,G__43805_43886,G__43806_43887));
var G__43807_43891 = new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015);
var G__43808_43892 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43809_43893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null)], null);
var G__43810_43894 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43807_43891,G__43808_43892,G__43809_43893,G__43810_43894) : re_frame.core.reg_sub.call(null,G__43807_43891,G__43808_43892,G__43809_43893,G__43810_43894));
var G__43811_43895 = new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927);
var G__43812_43896 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43813_43897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null)], null);
var G__43814_43898 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43811_43895,G__43812_43896,G__43813_43897,G__43814_43898) : re_frame.core.reg_sub.call(null,G__43811_43895,G__43812_43896,G__43813_43897,G__43814_43898));
var G__43815_43899 = new cljs.core.Keyword(null,"stream-values","stream-values",1710399854);
var G__43816_43900 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43817_43901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null);
var G__43818_43902 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43819_43903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null);
var G__43820_43904 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43821_43905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null);
var G__43822_43906 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43823_43907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null);
var G__43824_43908 = (function (p__43825){
var vec__43826 = p__43825;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43826,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43826,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43826,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43826,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),u,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049),r,new cljs.core.Keyword(null,"amount","amount",364489504),(a | (0)),new cljs.core.Keyword(null,"duration","duration",1444101068),(d | (0))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__43815_43899,G__43816_43900,G__43817_43901,G__43818_43902,G__43819_43903,G__43820_43904,G__43821_43905,G__43822_43906,G__43823_43907,G__43824_43908) : re_frame.core.reg_sub.call(null,G__43815_43899,G__43816_43900,G__43817_43901,G__43818_43902,G__43819_43903,G__43820_43904,G__43821_43905,G__43822_43906,G__43823_43907,G__43824_43908));
var G__43829_43911 = new cljs.core.Keyword(null,"stream-values-valid?","stream-values-valid?",497467954);
var G__43830_43912 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43831_43913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__43832_43914 = (function (p__43833){
var map__43834 = p__43833;
var map__43834__$1 = (((((!((map__43834 == null))))?(((((map__43834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43834):map__43834);
var user_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,new cljs.core.Keyword(null,"user-address","user-address",-2070986675));
var recipient_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return multis.utils.stream_values_valid_QMARK_(user_address,recipient_address,amount,duration);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43829_43911,G__43830_43912,G__43831_43913,G__43832_43914) : re_frame.core.reg_sub.call(null,G__43829_43911,G__43830_43912,G__43831_43913,G__43832_43914));
var G__43836_43918 = new cljs.core.Keyword(null,"stream-values-filled?","stream-values-filled?",-2063992178);
var G__43837_43919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43838_43920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__43839_43921 = (function (p__43840){
var map__43841 = p__43840;
var map__43841__$1 = (((((!((map__43841 == null))))?(((((map__43841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43841):map__43841);
var user_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43841__$1,new cljs.core.Keyword(null,"user-address","user-address",-2070986675));
var recipient_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43841__$1,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43841__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43841__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43836_43918,G__43837_43919,G__43838_43920,G__43839_43921) : re_frame.core.reg_sub.call(null,G__43836_43918,G__43837_43919,G__43838_43920,G__43839_43921));
var G__43843_43922 = new cljs.core.Keyword(null,"stream-values-enough-tokens?","stream-values-enough-tokens?",-171312077);
var G__43844_43923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43845_43924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__43846_43925 = (function (p__43847){
var map__43848 = p__43847;
var map__43848__$1 = (((((!((map__43848 == null))))?(((((map__43848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43848):map__43848);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43848__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43848__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (amount >= ((3600) * duration));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43843_43922,G__43844_43923,G__43845_43924,G__43846_43925) : re_frame.core.reg_sub.call(null,G__43843_43922,G__43844_43923,G__43845_43924,G__43846_43925));
var G__43850_43926 = new cljs.core.Keyword(null,"stream-values-mod-ok?","stream-values-mod-ok?",-627729389);
var G__43851_43927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__43852_43928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__43853_43929 = (function (p__43854){
var map__43855 = p__43854;
var map__43855__$1 = (((((!((map__43855 == null))))?(((((map__43855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43855):map__43855);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43855__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43855__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(amount,((3600) * duration)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__43850_43926,G__43851_43927,G__43852_43928,G__43853_43929) : re_frame.core.reg_sub.call(null,G__43850_43926,G__43851_43927,G__43852_43928,G__43853_43929));

//# sourceMappingURL=multis.subs.js.map
