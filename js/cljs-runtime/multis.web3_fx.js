goog.provide('multis.web3_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.cljs_web3');
multis.web3_fx.fn_dispatch = (function multis$web3_fx$fn_dispatch(var_args){
var G__40729 = arguments.length;
switch (G__40729) {
case 1:
return multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1 = (function (evt){
if(cljs.core.truth_(evt)){
return multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$2(evt,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
}));

(multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$2 = (function (evt,args_base){
return (function() { 
var G__40925__delegate = function (args_fn){
var G__40751_40926 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(evt,args_base,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_fn], 0)));
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40751_40926) : re_frame.core.dispatch.call(null,G__40751_40926));

return null;
};
var G__40925 = function (var_args){
var args_fn = null;
if (arguments.length > 0) {
var G__40927__i = 0, G__40927__a = new Array(arguments.length -  0);
while (G__40927__i < G__40927__a.length) {G__40927__a[G__40927__i] = arguments[G__40927__i + 0]; ++G__40927__i;}
  args_fn = new cljs.core.IndexedSeq(G__40927__a,0,null);
} 
return G__40925__delegate.call(this,args_fn);};
G__40925.cljs$lang$maxFixedArity = 0;
G__40925.cljs$lang$applyTo = (function (arglist__40928){
var args_fn = cljs.core.seq(arglist__40928);
return G__40925__delegate(args_fn);
});
G__40925.cljs$core$IFn$_invoke$arity$variadic = G__40925__delegate;
return G__40925;
})()
;
}));

(multis.web3_fx.fn_dispatch.cljs$lang$maxFixedArity = 2);

var G__40752_40929 = new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142);
var G__40753_40930 = (function (p__40754){
var map__40755 = p__40754;
var map__40755__$1 = (((((!((map__40755 == null))))?(((((map__40755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40755):map__40755);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40755__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40755__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40755__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
try{return multis.cljs_web3.get_accounts(web3,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_failure));
}catch (e40758){var e = e40758;
var fexpr__40759 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_failure);
return (fexpr__40759.cljs$core$IFn$_invoke$arity$1 ? fexpr__40759.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40759.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40752_40929,G__40753_40930) : re_frame.core.reg_fx.call(null,G__40752_40929,G__40753_40930));
var G__40760_40935 = new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603);
var G__40761_40936 = (function (p__40762){
var map__40763 = p__40762;
var map__40763__$1 = (((((!((map__40763 == null))))?(((((map__40763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40763):map__40763);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40763__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40763__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40763__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40763__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.get_balance(web3,address,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e40769){var e = e40769;
var fexpr__40772 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40772.cljs$core$IFn$_invoke$arity$1 ? fexpr__40772.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40772.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40760_40935,G__40761_40936) : re_frame.core.reg_fx.call(null,G__40760_40935,G__40761_40936));
var G__40776_40945 = new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245);
var G__40777_40946 = (function (p__40780){
var map__40781 = p__40780;
var map__40781__$1 = (((((!((map__40781 == null))))?(((((map__40781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40781):map__40781);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var on_tx_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_confirmation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809));
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var contract = multis.cljs_web3.contract_new(web3,abi,bin,address,gas);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245),abi,bin,address,gas], 0));

return multis.cljs_web3.contract_deploy(contract,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_error),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_hash),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_send),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_receipt),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_confirmation),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_complete)], null));
}catch (e40791){var e = e40791;
var fexpr__40795 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40795.cljs$core$IFn$_invoke$arity$1 ? fexpr__40795.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40795.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40776_40945,G__40777_40946) : re_frame.core.reg_fx.call(null,G__40776_40945,G__40777_40946));
var G__40799_40981 = new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687);
var G__40800_40982 = (function (p__40801){
var map__40802 = p__40801;
var map__40802__$1 = (((((!((map__40802 == null))))?(((((map__40802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40802):map__40802);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40802__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var contract_instance = multis.cljs_web3.get_contract(web3,abi,address);
var fexpr__40813 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success);
return (fexpr__40813.cljs$core$IFn$_invoke$arity$1 ? fexpr__40813.cljs$core$IFn$_invoke$arity$1(contract_instance) : fexpr__40813.call(null,contract_instance));
}catch (e40810){var e = e40810;
var fexpr__40811 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40811.cljs$core$IFn$_invoke$arity$1 ? fexpr__40811.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40811.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40799_40981,G__40800_40982) : re_frame.core.reg_fx.call(null,G__40799_40981,G__40800_40982));
var G__40818_41003 = new cljs.core.Keyword("web3","fn-estimate-gas","web3/fn-estimate-gas",987897369);
var G__40819_41004 = (function (p__40824){
var map__40825 = p__40824;
var map__40825__$1 = (((((!((map__40825 == null))))?(((((map__40825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40825):map__40825);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"address","address",559499426));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.fn_estimate_gas(contract,address,gas,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e40837){var e = e40837;
var fexpr__40838 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40838.cljs$core$IFn$_invoke$arity$1 ? fexpr__40838.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40838.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40818_41003,G__40819_41004) : re_frame.core.reg_fx.call(null,G__40818_41003,G__40819_41004));
var G__40844_41023 = new cljs.core.Keyword("web3","const-fn-call","web3/const-fn-call",1067239681);
var G__40845_41024 = (function (p__40846){
var map__40858 = p__40846;
var map__40858__$1 = (((((!((map__40858 == null))))?(((((map__40858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40858):map__40858);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.const_fn_call(contract,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e40867){var e = e40867;
var fexpr__40868 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40868.cljs$core$IFn$_invoke$arity$1 ? fexpr__40868.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40868.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40844_41023,G__40845_41024) : re_frame.core.reg_fx.call(null,G__40844_41023,G__40845_41024));
var G__40869_41033 = new cljs.core.Keyword("web3","fn-send","web3/fn-send",-1959616870);
var G__40870_41034 = (function (p__40875){
var map__40876 = p__40875;
var map__40876__$1 = (((((!((map__40876 == null))))?(((((map__40876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40876):map__40876);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"address","address",559499426));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40876__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.fn_send(contract,address,gas,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e40883){var e = e40883;
var fexpr__40884 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40884.cljs$core$IFn$_invoke$arity$1 ? fexpr__40884.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40884.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40869_41033,G__40870_41034) : re_frame.core.reg_fx.call(null,G__40869_41033,G__40870_41034));
var G__40892_41043 = new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133);
var G__40893_41044 = (function (p__40894){
var map__40895 = p__40894;
var map__40895__$1 = (((((!((map__40895 == null))))?(((((map__40895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40895):map__40895);
var token_contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"token-contract","token-contract",-462969778));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.approve_tx(token_contract,from,to,deposit,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e40897){var e = e40897;
var fexpr__40898 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40898.cljs$core$IFn$_invoke$arity$1 ? fexpr__40898.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40898.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40892_41043,G__40893_41044) : re_frame.core.reg_fx.call(null,G__40892_41043,G__40893_41044));
var G__40903_41049 = new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388);
var G__40904_41050 = (function (p__40905){
var map__40907 = p__40905;
var map__40907__$1 = (((((!((map__40907 == null))))?(((((map__40907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40907):map__40907);
var token_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"token-address","token-address",872304132));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var sablier_contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"to","to",192099007));
try{return multis.cljs_web3.sablier_create_stream(sablier_contract,token_address,from,to,deposit,start_time,stop_time,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e40915){var e = e40915;
var fexpr__40916 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__40916.cljs$core$IFn$_invoke$arity$1 ? fexpr__40916.cljs$core$IFn$_invoke$arity$1(e) : fexpr__40916.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__40903_41049,G__40904_41050) : re_frame.core.reg_fx.call(null,G__40903_41049,G__40904_41050));

//# sourceMappingURL=multis.web3_fx.js.map
