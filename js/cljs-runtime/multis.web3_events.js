goog.provide('multis.web3_events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('multis.web3_fx');
multis.web3_events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__40746){
var vec__40747 = p__40746;
var seq__40748 = cljs.core.seq(vec__40747);
var first__40749 = cljs.core.first(seq__40748);
var seq__40748__$1 = cljs.core.next(seq__40748);
var vec__40750 = first__40749;
var seq__40751 = cljs.core.seq(vec__40750);
var first__40752 = cljs.core.first(seq__40751);
var seq__40751__$1 = cljs.core.next(seq__40751);
var f_ev = first__40752;
var r_evs = seq__40751__$1;
var first__40749__$1 = cljs.core.first(seq__40748__$1);
var seq__40748__$2 = cljs.core.next(seq__40748__$1);
var on_error = first__40749__$1;
var args = seq__40748__$2;
if(r_evs){
var G__40753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),r_evs,on_error], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_error], 0));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40753) : re_frame.core.dispatch.call(null,G__40753));
} else {
var G__40754 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40754) : re_frame.core.dispatch.call(null,G__40754));
}
}));
var G__40755_40889 = new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044);
var G__40756_40890 = (function (p__40757){
var vec__40758 = p__40757;
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40758,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40758,(1),null);
var G__40761 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),events,on_error], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40761) : re_frame.core.dispatch.call(null,G__40761));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40755_40889,G__40756_40890) : re_frame.core.reg_fx.call(null,G__40755_40889,G__40756_40890));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","load-accounts","blockchain/load-accounts",-1585374120),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__40762,p__40763){
var map__40764 = p__40762;
var map__40764__$1 = (((((!((map__40764 == null))))?(((((map__40764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40764):map__40764);
var map__40765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40764__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40765__$1 = (((((!((map__40765 == null))))?(((((map__40765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40765):map__40765);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40765__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__40766 = p__40763;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40766,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40766,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__40771,p__40772){
var map__40773 = p__40771;
var map__40773__$1 = (((((!((map__40773 == null))))?(((((map__40773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40773):map__40773);
var map__40774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40773__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40774__$1 = (((((!((map__40774 == null))))?(((((map__40774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40774):map__40774);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40774__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__40775 = p__40772;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40775,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40775,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40775,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),multis.web3_events.interceptors,(function (_,p__40780){
var vec__40781 = p__40780;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40781,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40781,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40781,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".abi"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__40784 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__40784) : ajax.core.json_response_format.call(null,G__40784));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),multis.web3_events.interceptors,(function (p__40785,p__40786){
var map__40787 = p__40785;
var map__40787__$1 = (((((!((map__40787 == null))))?(((((map__40787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40787):map__40787);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40787__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40788 = p__40786;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40788,(0),null);
var abi_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40788,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40788,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40788,(3),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),multis.web3_events.interceptors,(function (_,p__40792){
var vec__40793 = p__40792;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40793,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40793,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract instance not found at address",address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You should update db.contract.address with one of your addresses and then dispatch event :contract/load-db-contract"], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),multis.web3_events.interceptors,(function (_,p__40796){
var vec__40797 = p__40796;
var json_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40797,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40797,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40797,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_name),".json"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__40800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__40800) : ajax.core.json_response_format.call(null,G__40800));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
multis.web3_events.extract_from_combined_json = (function multis$web3_events$extract_from_combined_json(combined_json,contract_name){
var map__40801 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(combined_json,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".sol:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name)].join(''))], null));
var map__40801__$1 = (((((!((map__40801 == null))))?(((((map__40801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40801):map__40801);
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40801__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40801__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abi,bin], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),multis.web3_events.interceptors,(function (p__40803,p__40804){
var map__40805 = p__40803;
var map__40805__$1 = (((((!((map__40805 == null))))?(((((map__40805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40805):map__40805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40805__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40806 = p__40804;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(1),null);
var contracts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(4),null);
var vec__40810 = multis.web3_events.extract_from_combined_json(contracts,contract_name);
var abi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40810,(0),null);
var bin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40810,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"gas","gas",-139961463),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.Keyword(null,"on-error","on-error",1728533530)],[address,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848)], null),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),(4500000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),on_success], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722)], null),JSON.parse(abi),bin,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),multis.web3_events.interceptors,(function (_,p__40813){
var vec__40814 = p__40813;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40814,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40814,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),multis.web3_events.interceptors,(function (p__40817,p__40818){
var map__40819 = p__40817;
var map__40819__$1 = (((((!((map__40819 == null))))?(((((map__40819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40819):map__40819);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40819__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40820 = p__40818;
var map__40823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40820,(0),null);
var map__40823__$1 = (((((!((map__40823 == null))))?(((((map__40823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40823):map__40823);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40823__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40823__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40820,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40820,(2),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),multis.web3_events.interceptors,(function (p__40826,p__40827){
var map__40828 = p__40826;
var map__40828__$1 = (((((!((map__40828 == null))))?(((((map__40828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40828):map__40828);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40829 = p__40827;
var map__40832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40829,(0),null);
var map__40832__$1 = (((((!((map__40832 == null))))?(((((map__40832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40832):map__40832);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40832__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40832__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40829,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40829,(2),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","get-token-contract","contract/get-token-contract",-597690349),multis.web3_events.interceptors,(function (p__40835,p__40836){
var map__40837 = p__40835;
var map__40837__$1 = (((((!((map__40837 == null))))?(((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40837):map__40837);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40837__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40838 = p__40836;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40838,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40838,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40838,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"abi","abi",-1999451499),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),address], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),multis.web3_events.interceptors,(function (p__40842,p__40843){
var map__40844 = p__40842;
var map__40844__$1 = (((((!((map__40844 == null))))?(((((map__40844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40844):map__40844);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40844__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40845 = p__40843;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40845,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40845,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40845,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40845,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40845,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token-contract","token-contract",-462969778),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),deposit,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx-to-sablier","contract/approve-tx-to-sablier",-217843356),multis.web3_events.interceptors,(function (p__40849,p__40850){
var map__40851 = p__40849;
var map__40851__$1 = (((((!((map__40851 == null))))?(((((map__40851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40851):map__40851);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40851__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40852 = p__40850;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40852,(0),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40852,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40852,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40852,(3),null);
var sablier_address = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"address","address",559499426)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),from,sablier_address,deposit,on_success,on_error], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),multis.web3_events.interceptors,(function (p__40856,p__40857){
var map__40858 = p__40856;
var map__40858__$1 = (((((!((map__40858 == null))))?(((((map__40858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40858):map__40858);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40859 = p__40857;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(2),null);
var start_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(3),null);
var stop_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(4),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(5),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(6),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40859,(7),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"token-address","token-address",872304132),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"to","to",192099007)],[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"address","address",559499426)], null)),start_time,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),on_success,stop_time,from,deposit,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})(),to])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),multis.web3_events.interceptors,(function (_,p__40863){
var vec__40864 = p__40863;
var map__40867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864,(0),null);
var map__40867__$1 = (((((!((map__40867 == null))))?(((((map__40867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40867):map__40867);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40864,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx-to-sablier","contract/approve-tx-to-sablier",-217843356),from,deposit], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),from,to,deposit,start_time,stop_time], null),on_success], null),on_error], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40869){
var vec__40870 = p__40869;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40870,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-confirmation"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40873){
var vec__40874 = p__40873;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40874,(0),null);
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40874,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-send"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40877){
var vec__40878 = p__40877;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40878,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-hash"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40881){
var vec__40882 = p__40881;
var receipt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40882,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-receipt"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([receipt], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40885){
var vec__40886 = p__40885;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40886,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-error"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));

return db;
}));

//# sourceMappingURL=multis.web3_events.js.map
