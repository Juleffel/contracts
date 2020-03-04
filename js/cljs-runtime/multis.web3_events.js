goog.provide('multis.web3_events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('multis.web3_fx');
multis.web3_events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__40711){
var vec__40719 = p__40711;
var seq__40720 = cljs.core.seq(vec__40719);
var first__40721 = cljs.core.first(seq__40720);
var seq__40720__$1 = cljs.core.next(seq__40720);
var vec__40722 = first__40721;
var seq__40723 = cljs.core.seq(vec__40722);
var first__40724 = cljs.core.first(seq__40723);
var seq__40723__$1 = cljs.core.next(seq__40723);
var f_ev = first__40724;
var r_evs = seq__40723__$1;
var first__40721__$1 = cljs.core.first(seq__40720__$1);
var seq__40720__$2 = cljs.core.next(seq__40720__$1);
var on_error = first__40721__$1;
var args = seq__40720__$2;
if(r_evs){
var G__40736 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),r_evs,on_error], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_error], 0));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40736) : re_frame.core.dispatch.call(null,G__40736));
} else {
var G__40742 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(f_ev,args));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40742) : re_frame.core.dispatch.call(null,G__40742));
}
}));
var G__40748_41033 = new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044);
var G__40749_41034 = (function (p__40750){
var vec__40751 = p__40750;
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40751,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40751,(1),null);
var G__40758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-chain","following-event","dispatch-chain/following-event",284826254),events,on_error], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40758) : re_frame.core.dispatch.call(null,G__40758));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40748_41033,G__40749_41034) : re_frame.core.reg_fx.call(null,G__40748_41033,G__40749_41034));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","load-accounts","blockchain/load-accounts",-1585374120),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__40770,p__40771){
var map__40776 = p__40770;
var map__40776__$1 = (((((!((map__40776 == null))))?(((((map__40776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40776):map__40776);
var map__40778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40778__$1 = (((((!((map__40778 == null))))?(((((map__40778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40778):map__40778);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40778__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__40780 = p__40771;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40780,(0),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40780,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__40802,p__40803){
var map__40804 = p__40802;
var map__40804__$1 = (((((!((map__40804 == null))))?(((((map__40804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40804):map__40804);
var map__40805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40804__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40805__$1 = (((((!((map__40805 == null))))?(((((map__40805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40805):map__40805);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40805__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var vec__40806 = p__40803;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),multis.web3_events.interceptors,(function (_,p__40819){
var vec__40820 = p__40819;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40820,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40820,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40820,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".abi"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__40829 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__40829) : ajax.core.json_response_format.call(null,G__40829));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),multis.web3_events.interceptors,(function (p__40833,p__40834){
var map__40835 = p__40833;
var map__40835__$1 = (((((!((map__40835 == null))))?(((((map__40835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40835):map__40835);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40836 = p__40834;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40836,(0),null);
var abi_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40836,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40836,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40836,(3),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","load-contract-fail","contract/load-contract-fail",217577030),multis.web3_events.interceptors,(function (_,p__40854){
var vec__40855 = p__40854;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40855,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40855,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract instance not found at address",address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["You should update db.contract.address with one of your addresses and then dispatch event :contract/load-db-contract"], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),multis.web3_events.interceptors,(function (_,p__40860){
var vec__40861 = p__40860;
var json_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40861,(0),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40861,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40861,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["./contracts/build/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(json_name),".json"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__40864 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__40864) : ajax.core.json_response_format.call(null,G__40864));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
multis.web3_events.extract_from_combined_json = (function multis$web3_events$extract_from_combined_json(combined_json,contract_name){
var map__40870 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(combined_json,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name),".sol:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_name)].join(''))], null));
var map__40870__$1 = (((((!((map__40870 == null))))?(((((map__40870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40870):map__40870);
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40870__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40870__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abi,bin], null);
});
multis.web3_events.extract_from_zeppelin_json = (function multis$web3_events$extract_from_zeppelin_json(json){
var map__40877 = json;
var map__40877__$1 = (((((!((map__40877 == null))))?(((((map__40877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40877):map__40877);
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40877__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bytecode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40877__$1,new cljs.core.Keyword(null,"bytecode","bytecode",-835261950));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abi,bytecode], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),multis.web3_events.interceptors,(function (p__40889,p__40890){
var map__40891 = p__40889;
var map__40891__$1 = (((((!((map__40891 == null))))?(((((map__40891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40891):map__40891);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40892 = p__40890;
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40892,(0),null);
var json = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40892,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40892,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40892,(3),null);
var vec__40896 = multis.web3_events.extract_from_zeppelin_json(json);
var abi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40896,(0),null);
var bin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40896,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"gas","gas",-139961463),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.Keyword(null,"on-error","on-error",1728533530)],[address,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848)], null),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),(4500000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),on_success], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722)], null),cljs.core.clj__GT_js(abi),bin,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","deployed","contract/deployed",394036004),multis.web3_events.interceptors,(function (_,p__40903){
var vec__40904 = p__40903;
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","send-fn","contract/send-fn",-1246565193),multis.web3_events.interceptors,(function (p__40915,p__40916){
var map__40917 = p__40915;
var map__40917__$1 = (((((!((map__40917 == null))))?(((((map__40917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40917):map__40917);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40917__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40918 = p__40916;
var contract_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40918,(0),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40918,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40918,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40918,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40918,(4),null);
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),contract_key,new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var contract_instance = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","fn-send","web3/fn-send",-1959616870),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contract","contract",798152745),contract_instance,new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"gas","gas",-139961463),(450000),new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"args","args",1315556576),params,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","const-fn-call","contract/const-fn-call",564033272),multis.web3_events.interceptors,(function (p__40936,p__40937){
var map__40938 = p__40936;
var map__40938__$1 = (((((!((map__40938 == null))))?(((((map__40938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40938):map__40938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40938__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40939 = p__40937;
var contract_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(0),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(4),null);
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),contract_key,new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var contract_instance = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","const-fn-call","web3/const-fn-call",1067239681),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"contract","contract",798152745),contract_instance,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"args","args",1315556576),params,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","get-erc20-balance","blockchain/get-erc20-balance",-673561159),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__40947){
var vec__40948 = p__40947;
var contract_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40948,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","const-fn-call","contract/const-fn-call",564033272),contract_key,"balanceOf",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null),on_success,on_error], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","get-balance","sablier/get-balance",703272240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__40955){
var vec__40956 = p__40955;
var stream_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40956,(0),null);
var who = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40956,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40956,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40956,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","const-fn-call","contract/const-fn-call",564033272),new cljs.core.Keyword(null,"sablier","sablier",-419543152),"balanceOf",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stream_id,who], null),on_success,on_error], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),multis.web3_events.interceptors,(function (_,p__40959){
var vec__40960 = p__40959;
var map__40963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40960,(0),null);
var map__40963__$1 = (((((!((map__40963 == null))))?(((((map__40963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40963):map__40963);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40963__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40963__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40960,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40960,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","const-fn-call","contract/const-fn-call",564033272),new cljs.core.Keyword(null,"test","test",577538877),"rectangle",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),on_success,on_error], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),multis.web3_events.interceptors,(function (p__40969,p__40970){
var map__40971 = p__40969;
var map__40971__$1 = (((((!((map__40971 == null))))?(((((map__40971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40971):map__40971);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40971__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40972 = p__40970;
var map__40975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40972,(0),null);
var map__40975__$1 = (((((!((map__40975 == null))))?(((((map__40975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40975):map__40975);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40975__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40975__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40972,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40972,(2),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),multis.web3_events.interceptors,(function (p__40986,p__40987){
var map__40988 = p__40986;
var map__40988__$1 = (((((!((map__40988 == null))))?(((((map__40988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40988):map__40988);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40988__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40989 = p__40987;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(2),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(3),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"token-contract","token-contract",-462969778),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),deposit,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})()], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("contract","approve-tx-to-sablier","contract/approve-tx-to-sablier",-217843356),multis.web3_events.interceptors,(function (p__40993,p__40994){
var map__40995 = p__40993;
var map__40995__$1 = (((((!((map__40995 == null))))?(((((map__40995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40995):map__40995);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40995__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40996 = p__40994;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40996,(0),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40996,(1),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40996,(2),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40996,(3),null);
var sablier_address = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"address","address",559499426)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx","contract/approve-tx",954055444),from,sablier_address,deposit,on_success,on_error], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),multis.web3_events.interceptors,(function (p__41000,p__41001){
var map__41002 = p__41000;
var map__41002__$1 = (((((!((map__41002 == null))))?(((((map__41002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41002):map__41002);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41002__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41003 = p__41001;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(1),null);
var deposit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(2),null);
var start_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(3),null);
var stop_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(4),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(5),null);
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(6),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003,(7),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"token-address","token-address",872304132),new cljs.core.Keyword(null,"start-time","start-time",814801386),new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"deposit","deposit",-1686435851),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"to","to",192099007)],[cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"address","address",559499426)], null)),start_time,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)),on_success,stop_time,from,deposit,(function (){var or__4185__auto__ = on_error;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","error","app/error",-979130411)], null);
}
})(),to])], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),multis.web3_events.interceptors,(function (_,p__41007){
var vec__41008 = p__41007;
var map__41011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41008,(0),null);
var map__41011__$1 = (((((!((map__41011 == null))))?(((((map__41011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41011):map__41011);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41011__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var on_success = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41008,(1),null);
var on_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41008,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","approve-tx-to-sablier","contract/approve-tx-to-sablier",-217843356),from,deposit], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream-call","sablier/create-stream-call",-570066916),from,to,deposit,start_time,stop_time], null),on_success], null),on_error], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-confirmation","blockchain/tx-confirmation",-1027064722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41013){
var vec__41014 = p__41013;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41014,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-confirmation"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-send","blockchain/tx-send",641148048),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41017){
var vec__41018 = p__41017;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41018,(0),null);
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41018,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-send"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-hash","blockchain/tx-hash",1643892244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41021){
var vec__41022 = p__41021;
var transaction_hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41022,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-hash"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([transaction_hash], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-receipt","blockchain/tx-receipt",-294422963),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41025){
var vec__41026 = p__41025;
var receipt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41026,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-receipt"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([receipt], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("blockchain","tx-error","blockchain/tx-error",1835148848),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41029){
var vec__41030 = p__41029;
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41030,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tx-error"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error], 0));

return db;
}));

//# sourceMappingURL=multis.web3_events.js.map
