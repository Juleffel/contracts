goog.provide('multis.web3_events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('multis.web3_fx');
multis.web3_events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__54009){
var vec__54011 = p__54009;
var seq__54012 = cljs.core.seq(vec__54011);
var first__54013 = cljs.core.first(seq__54012);
var seq__54012__$1 = cljs.core.next(seq__54012);
var vec__54014 = first__54013;
var seq__54015 = cljs.core.seq(vec__54014);
var first__54016 = cljs.core.first(seq__54015);
var seq__54015__$1 = cljs.core.next(seq__54015);
var f_ev = first__54016;
var r_evs = seq__54015__$1;
var first__54013__$1 = cljs.core.first(seq__54012__$1);
var seq__54012__$2 = cljs.core.next(seq__54012__$1);
var on_error = first__54013__$1;
var args = seq__54012__$2;
if(r_evs){
var G__54020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),r_evs,on_error], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_error], 0));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54020) : re_frame.core.dispatch.call(null,G__54020));
} else {
var G__54022 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54022) : re_frame.core.dispatch.call(null,G__54022));
}
}));
var G__54024_54295 = new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044);
var G__54025_54296 = (function (p__54029){
var vec__54032 = p__54029;
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54032,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54032,(1),null);
var G__54037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),events,on_error], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54037) : re_frame.core.dispatch.call(null,G__54037));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54024_54295,G__54025_54296) : re_frame.core.reg_fx.call(null,G__54024_54295,G__54025_54296));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","load-accounts","blockchain/load-accounts",-1585374120),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__54038,p__54039){
var map__54041 = p__54038;
var map__54041__$1 = (((((!((map__54041 == null))))?(((((map__54041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54041):map__54041);
var map__54042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__54042__$1 = (((((!((map__54042 == null))))?(((((map__54042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54042):map__54042);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54042__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__54043 = p__54039;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54043,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54043,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__54058,p__54059){
var map__54060 = p__54058;
var map__54060__$1 = (((((!((map__54060 == null))))?(((((map__54060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54060):map__54060);
var map__54061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54060__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__54061__$1 = (((((!((map__54061 == null))))?(((((map__54061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54061):map__54061);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54061__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__54062 = p__54059;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54062,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54062,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54062,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),multis.web3_events.interceptors,(function (_,p__54070){
var vec__54072 = p__54070;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54072,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54072,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54072,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".abi"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__54076 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__54076) : ajax.core.json_response_format.call(null,G__54076));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),multis.web3_events.interceptors,(function (p__54080,p__54081){
var map__54082 = p__54080;
var map__54082__$1 = (((((!((map__54082 == null))))?(((((map__54082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54082):map__54082);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54082__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54083 = p__54081;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54083,(0),null);
var abi_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54083,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54083,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54083,(3),null);
var temp__5735__auto__ = cljs.core.clj__GT_js(abi_clj);
if(cljs.core.truth_(temp__5735__auto__)){
var abi = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"abi","abi",-1999451499),abi,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),address], null);
}
})()], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),multis.web3_events.interceptors,(function (_,p__54093){
var vec__54094 = p__54093;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54094,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54094,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract instance not found at address",address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You should update db.contract.address with one of your addresses and then dispatch event :contract/load-db-contract"], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),multis.web3_events.interceptors,(function (_,p__54097){
var vec__54098 = p__54097;
var json_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54098,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54098,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54098,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_name),".json"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__54103 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__54103) : ajax.core.json_response_format.call(null,G__54103));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
multis.web3_events.extract_from_combined_json = (function multis$web3_events$extract_from_combined_json(combined_json,contract_name){
var map__54116 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(combined_json,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".sol:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name)].join(''))], null));
var map__54116__$1 = (((((!((map__54116 == null))))?(((((map__54116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54116):map__54116);
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54116__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54116__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abi,bin], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),multis.web3_events.interceptors,(function (p__54131,p__54132){
var map__54133 = p__54131;
var map__54133__$1 = (((((!((map__54133 == null))))?(((((map__54133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54133):map__54133);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54133__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54134 = p__54132;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(1),null);
var contracts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(4),null);
var vec__54147 = multis.web3_events.extract_from_combined_json(contracts,contract_name);
var abi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54147,(0),null);
var bin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54147,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"gas","gas",-139961463),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.Keyword(null,"on-error","on-error",1728533530)],[address,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848)], null),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),(4500000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),on_success], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722)], null),JSON.parse(abi),bin,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),multis.web3_events.interceptors,(function (_,p__54154){
var vec__54156 = p__54154;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54156,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54156,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract created:",contract_instance,(contract_instance["options"])], 0));

var temp__5735__auto__ = (contract_instance["options"]["address"]);
if(cljs.core.truth_(temp__5735__auto__)){
var address = temp__5735__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract deployed at",address], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,contract_instance)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),multis.web3_events.interceptors,(function (p__54159,p__54160){
var map__54161 = p__54159;
var map__54161__$1 = (((((!((map__54161 == null))))?(((((map__54161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54161):map__54161);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54161__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54162 = p__54160;
var map__54165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54162,(0),null);
var map__54165__$1 = (((((!((map__54165 == null))))?(((((map__54165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54165):map__54165);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54165__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54165__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54162,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54162,(2),null);
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var contract_instance = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","const-fn-call","web3/const-fn-call",1067239681),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"contract","contract",798152745),contract_instance,new cljs.core.Keyword(null,"func","func",-238706040),"rectangle",new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),multis.web3_events.interceptors,(function (p__54175,p__54176){
var map__54177 = p__54175;
var map__54177__$1 = (((((!((map__54177 == null))))?(((((map__54177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54177):map__54177);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54178 = p__54176;
var map__54181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54178,(0),null);
var map__54181__$1 = (((((!((map__54181 == null))))?(((((map__54181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54181):map__54181);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54178,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54178,(2),null);
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var contract_instance = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","fn-estimate-gas","web3/fn-estimate-gas",987897369),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contract","contract",798152745),contract_instance,new cljs.core.Keyword(null,"address","address",559499426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contract","contract",798152745),new cljs.core.Keyword(null,"address","address",559499426)], null)),new cljs.core.Keyword(null,"gas","gas",-139961463),(450000),new cljs.core.Keyword(null,"func","func",-238706040),"rectangle",new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","get-token-contract","contract/get-token-contract",-597690349),multis.web3_events.interceptors,(function (p__54189,p__54190){
var map__54194 = p__54189;
var map__54194__$1 = (((((!((map__54194 == null))))?(((((map__54194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54194):map__54194);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54194__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54195 = p__54190;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54195,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54195,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54195,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"abi","abi",-1999451499),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),address], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),multis.web3_events.interceptors,(function (p__54204,p__54205){
var map__54206 = p__54204;
var map__54206__$1 = (((((!((map__54206 == null))))?(((((map__54206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54206):map__54206);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54206__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54207 = p__54205;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54207,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54207,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54207,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54207,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54207,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token-contract","token-contract",-462969778),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),deposit,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx-to-sablier","contract/approve-tx-to-sablier",-217843356),multis.web3_events.interceptors,(function (p__54215,p__54216){
var map__54217 = p__54215;
var map__54217__$1 = (((((!((map__54217 == null))))?(((((map__54217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54217):map__54217);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54218 = p__54216;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218,(0),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54218,(3),null);
var sablier_address = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"address","address",559499426)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),from,sablier_address,deposit,on_success,on_error], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),multis.web3_events.interceptors,(function (p__54228,p__54229){
var map__54230 = p__54228;
var map__54230__$1 = (((((!((map__54230 == null))))?(((((map__54230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54230):map__54230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54230__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54231 = p__54229;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(2),null);
var start_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(3),null);
var stop_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(4),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(5),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(6),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54231,(7),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"token-address","token-address",872304132),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"to","to",192099007)],[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"address","address",559499426)], null)),start_time,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),on_success,stop_time,from,deposit,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})(),to])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),multis.web3_events.interceptors,(function (_,p__54245){
var vec__54246 = p__54245;
var map__54249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54246,(0),null);
var map__54249__$1 = (((((!((map__54249 == null))))?(((((map__54249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54249):map__54249);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54249__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54249__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54249__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54249__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54249__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54246,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54246,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx-to-sablier","contract/approve-tx-to-sablier",-217843356),from,deposit], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),from,to,deposit,start_time,stop_time], null),on_success], null),on_error], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__54255){
var vec__54260 = p__54255;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54260,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-confirmation"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__54263){
var vec__54264 = p__54263;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54264,(0),null);
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54264,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-send"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__54270){
var vec__54271 = p__54270;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54271,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-hash"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__54277){
var vec__54278 = p__54277;
var receipt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54278,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-receipt"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([receipt], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__54285){
var vec__54286 = p__54285;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-error"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));

return db;
}));

//# sourceMappingURL=multis.web3_events.js.map
