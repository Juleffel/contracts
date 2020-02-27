goog.provide('multis.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.utils');
multis.subs.reg_sub_db = (function multis$subs$reg_sub_db(var_args){
var G__53211 = arguments.length;
switch (G__53211) {
case 1:
return multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53333 = arguments.length;
var i__4790__auto___53334 = (0);
while(true){
if((i__4790__auto___53334 < len__4789__auto___53333)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53334]));

var G__53336 = (i__4790__auto___53334 + (1));
i__4790__auto___53334 = G__53336;
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
var G__53212 = db_path;
var G__53213 = (function (db,_){
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(db_path) : db.call(null,db_path));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53212,G__53213) : re_frame.core.reg_sub.call(null,G__53212,G__53213));
}));

(multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$variadic = (function (event_name,db_path){
var G__53253 = event_name;
var G__53254 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,db_path);
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53253,G__53254) : re_frame.core.reg_sub.call(null,G__53253,G__53254));
}));

/** @this {Function} */
(multis.subs.reg_sub_db.cljs$lang$applyTo = (function (seq53209){
var G__53210 = cljs.core.first(seq53209);
var seq53209__$1 = cljs.core.next(seq53209);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53210,seq53209__$1);
}));

(multis.subs.reg_sub_db.cljs$lang$maxFixedArity = (1));

var G__53260_53341 = new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958);
var G__53261_53342 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53260_53341,G__53261_53342) : re_frame.core.reg_sub.call(null,G__53260_53341,G__53261_53342));
var G__53262_53345 = new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329);
var G__53263_53346 = (function (db,_){
return cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53262_53345,G__53263_53346) : re_frame.core.reg_sub.call(null,G__53262_53345,G__53263_53346));
multis.subs.reg_sub_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965));
var G__53268_53347 = new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575);
var G__53269_53348 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53270_53349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null)], null);
var G__53271_53350 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53268_53347,G__53269_53348,G__53270_53349,G__53271_53350) : re_frame.core.reg_sub.call(null,G__53268_53347,G__53269_53348,G__53270_53349,G__53271_53350));
var G__53275_53351 = new cljs.core.Keyword(null,"new-recipient-address-valid?","new-recipient-address-valid?",-1523867837);
var G__53276_53352 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53277_53353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null);
var G__53278_53354 = (function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v),(42));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53275_53351,G__53276_53352,G__53277_53353,G__53278_53354) : re_frame.core.reg_sub.call(null,G__53275_53351,G__53276_53352,G__53277_53353,G__53278_53354));
var G__53285_53357 = new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003);
var G__53286_53358 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53287_53359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null)], null);
var G__53288_53360 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53285_53357,G__53286_53358,G__53287_53359,G__53288_53360) : re_frame.core.reg_sub.call(null,G__53285_53357,G__53286_53358,G__53287_53359,G__53288_53360));
var G__53289_53361 = new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548);
var G__53290_53362 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53291_53363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null)], null);
var G__53292_53364 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53289_53361,G__53290_53362,G__53291_53363,G__53292_53364) : re_frame.core.reg_sub.call(null,G__53289_53361,G__53290_53362,G__53291_53363,G__53292_53364));
var G__53294_53365 = new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015);
var G__53295_53366 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53296_53367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null)], null);
var G__53297_53368 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53294_53365,G__53295_53366,G__53296_53367,G__53297_53368) : re_frame.core.reg_sub.call(null,G__53294_53365,G__53295_53366,G__53296_53367,G__53297_53368));
var G__53300_53371 = new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927);
var G__53301_53372 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53302_53373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null)], null);
var G__53303_53374 = (function (v){
return v;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53300_53371,G__53301_53372,G__53302_53373,G__53303_53374) : re_frame.core.reg_sub.call(null,G__53300_53371,G__53301_53372,G__53302_53373,G__53303_53374));
var G__53306_53403 = new cljs.core.Keyword(null,"stream-values","stream-values",1710399854);
var G__53307_53404 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53308_53405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null);
var G__53309_53406 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53310_53407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null);
var G__53311_53408 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53312_53409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003)], null);
var G__53313_53410 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53314_53411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], null);
var G__53315_53412 = (function (p__53318){
var vec__53320 = p__53318;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53320,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53320,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53320,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53320,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),u,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049),r,new cljs.core.Keyword(null,"amount","amount",364489504),(a | (0)),new cljs.core.Keyword(null,"duration","duration",1444101068),(d | (0))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__53306_53403,G__53307_53404,G__53308_53405,G__53309_53406,G__53310_53407,G__53311_53408,G__53312_53409,G__53313_53410,G__53314_53411,G__53315_53412) : re_frame.core.reg_sub.call(null,G__53306_53403,G__53307_53404,G__53308_53405,G__53309_53406,G__53310_53407,G__53311_53408,G__53312_53409,G__53313_53410,G__53314_53411,G__53315_53412));
var G__53323_53413 = new cljs.core.Keyword(null,"stream-values-valid?","stream-values-valid?",497467954);
var G__53324_53414 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53325_53415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values","stream-values",1710399854)], null);
var G__53326_53416 = (function (p__53327){
var map__53328 = p__53327;
var map__53328__$1 = (((((!((map__53328 == null))))?(((((map__53328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53328):map__53328);
var user_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53328__$1,new cljs.core.Keyword(null,"user-address","user-address",-2070986675));
var recipient_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53328__$1,new cljs.core.Keyword(null,"recipient-address","recipient-address",1388330049));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53328__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53328__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return multis.utils.stream_values_valid_QMARK_(user_address,recipient_address,amount,duration);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53323_53413,G__53324_53414,G__53325_53415,G__53326_53416) : re_frame.core.reg_sub.call(null,G__53323_53413,G__53324_53414,G__53325_53415,G__53326_53416));

//# sourceMappingURL=multis.subs.js.map
