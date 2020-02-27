goog.provide('multis.web3_events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('multis.web3_fx');
multis.web3_events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__40065){
var vec__40066 = p__40065;
var seq__40067 = cljs.core.seq(vec__40066);
var first__40068 = cljs.core.first(seq__40067);
var seq__40067__$1 = cljs.core.next(seq__40067);
var vec__40069 = first__40068;
var seq__40070 = cljs.core.seq(vec__40069);
var first__40071 = cljs.core.first(seq__40070);
var seq__40070__$1 = cljs.core.next(seq__40070);
var f_ev = first__40071;
var r_evs = seq__40070__$1;
var first__40068__$1 = cljs.core.first(seq__40067__$1);
var seq__40067__$2 = cljs.core.next(seq__40067__$1);
var on_error = first__40068__$1;
var args = seq__40067__$2;
if(r_evs){
var G__40072 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),r_evs,on_error], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_error], 0));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40072) : re_frame.core.dispatch.call(null,G__40072));
} else {
var G__40073 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40073) : re_frame.core.dispatch.call(null,G__40073));
}
}));
var G__40074_40201 = new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044);
var G__40075_40202 = (function (p__40076){
var vec__40077 = p__40076;
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40077,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40077,(1),null);
var G__40080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),events,on_error], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40080) : re_frame.core.dispatch.call(null,G__40080));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40074_40201,G__40075_40202) : re_frame.core.reg_fx.call(null,G__40074_40201,G__40075_40202));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","load-accounts","blockchain/load-accounts",-1585374120),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__40081,p__40082){
var map__40083 = p__40081;
var map__40083__$1 = (((((!((map__40083 == null))))?(((((map__40083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40083):map__40083);
var map__40084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40084__$1 = (((((!((map__40084 == null))))?(((((map__40084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40084):map__40084);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40084__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__40085 = p__40082;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40085,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__40090,p__40091){
var map__40092 = p__40090;
var map__40092__$1 = (((((!((map__40092 == null))))?(((((map__40092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40092):map__40092);
var map__40093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40093__$1 = (((((!((map__40093 == null))))?(((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40093):map__40093);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40093__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__40094 = p__40091;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),multis.web3_events.interceptors,(function (_,p__40099){
var vec__40100 = p__40099;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40100,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".abi"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__40103 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__40103) : ajax.core.json_response_format.call(null,G__40103));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),multis.web3_events.interceptors,(function (p__40104,p__40105){
var map__40106 = p__40104;
var map__40106__$1 = (((((!((map__40106 == null))))?(((((map__40106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40106):map__40106);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40106__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40107 = p__40105;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107,(0),null);
var abi_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107,(3),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),multis.web3_events.interceptors,(function (_,p__40111){
var vec__40112 = p__40111;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40112,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40112,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract instance not found at address",address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You should update db.contract.address with one of your addresses and then dispatch event :contract/load-db-contract"], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),multis.web3_events.interceptors,(function (_,p__40115){
var vec__40116 = p__40115;
var json_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40116,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40116,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40116,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_name),".json"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__40119 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__40119) : ajax.core.json_response_format.call(null,G__40119));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
multis.web3_events.extract_from_combined_json = (function multis$web3_events$extract_from_combined_json(combined_json,contract_name){
var map__40120 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(combined_json,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".sol:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name)].join(''))], null));
var map__40120__$1 = (((((!((map__40120 == null))))?(((((map__40120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40120):map__40120);
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40120__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40120__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abi,bin], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),multis.web3_events.interceptors,(function (p__40122,p__40123){
var map__40124 = p__40122;
var map__40124__$1 = (((((!((map__40124 == null))))?(((((map__40124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40124):map__40124);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40124__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40125 = p__40123;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(1),null);
var contracts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(4),null);
var vec__40129 = multis.web3_events.extract_from_combined_json(contracts,contract_name);
var abi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40129,(0),null);
var bin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40129,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"gas","gas",-139961463),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.Keyword(null,"on-error","on-error",1728533530)],[address,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848)], null),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),(4500000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),on_success], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722)], null),JSON.parse(abi),bin,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),multis.web3_events.interceptors,(function (_,p__40132){
var vec__40133 = p__40132;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),multis.web3_events.interceptors,(function (p__40136,p__40137){
var map__40138 = p__40136;
var map__40138__$1 = (((((!((map__40138 == null))))?(((((map__40138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40138):map__40138);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40138__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40139 = p__40137;
var map__40142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(0),null);
var map__40142__$1 = (((((!((map__40142 == null))))?(((((map__40142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40142):map__40142);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40142__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40142__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(2),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),multis.web3_events.interceptors,(function (p__40145,p__40146){
var map__40147 = p__40145;
var map__40147__$1 = (((((!((map__40147 == null))))?(((((map__40147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40147):map__40147);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40148 = p__40146;
var map__40151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148,(0),null);
var map__40151__$1 = (((((!((map__40151 == null))))?(((((map__40151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40151):map__40151);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40151__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40151__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40148,(2),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","get-token-contract","contract/get-token-contract",-597690349),multis.web3_events.interceptors,(function (p__40154,p__40155){
var map__40156 = p__40154;
var map__40156__$1 = (((((!((map__40156 == null))))?(((((map__40156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40156):map__40156);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40156__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40157 = p__40155;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"abi","abi",-1999451499),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"token-abi","token-abi",-124585965).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),address], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),multis.web3_events.interceptors,(function (p__40161,p__40162){
var map__40163 = p__40161;
var map__40163__$1 = (((((!((map__40163 == null))))?(((((map__40163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40163):map__40163);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40163__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40164 = p__40162;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token-contract","token-contract",-462969778),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),deposit,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),multis.web3_events.interceptors,(function (p__40168,p__40169){
var map__40170 = p__40168;
var map__40170__$1 = (((((!((map__40170 == null))))?(((((map__40170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40170):map__40170);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40171 = p__40169;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(2),null);
var start_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(3),null);
var stop_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(4),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(5),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(6),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40171,(7),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"token-address","token-address",872304132),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"to","to",192099007)],[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"address","address",559499426)], null)),start_time,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),on_success,stop_time,from,deposit,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})(),to])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),multis.web3_events.interceptors,(function (_,p__40175){
var vec__40176 = p__40175;
var map__40179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40176,(0),null);
var map__40179__$1 = (((((!((map__40179 == null))))?(((((map__40179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40179):map__40179);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40176,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40176,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),from,to,deposit], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),from,to,deposit,start_time,stop_time], null),on_success], null),on_error], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40181){
var vec__40182 = p__40181;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-confirmation"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40185){
var vec__40186 = p__40185;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40186,(0),null);
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40186,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-send"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40189){
var vec__40190 = p__40189;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-hash"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40193){
var vec__40194 = p__40193;
var receipt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40194,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-receipt"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([receipt], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__40197){
var vec__40198 = p__40197;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-error"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));

return db;
}));

//# sourceMappingURL=multis.web3_events.js.map
