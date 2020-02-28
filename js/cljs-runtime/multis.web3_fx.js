goog.provide('multis.web3_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.cljs_web3');
multis.web3_fx.fn_dispatch = (function multis$web3_fx$fn_dispatch(var_args){
var G__53824 = arguments.length;
switch (G__53824) {
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
var G__53963__delegate = function (args_fn){
var G__53829_53964 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(evt,args_base,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_fn], 0)));
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53829_53964) : re_frame.core.dispatch.call(null,G__53829_53964));

return null;
};
var G__53963 = function (var_args){
var args_fn = null;
if (arguments.length > 0) {
var G__53968__i = 0, G__53968__a = new Array(arguments.length -  0);
while (G__53968__i < G__53968__a.length) {G__53968__a[G__53968__i] = arguments[G__53968__i + 0]; ++G__53968__i;}
  args_fn = new cljs.core.IndexedSeq(G__53968__a,0,null);
} 
return G__53963__delegate.call(this,args_fn);};
G__53963.cljs$lang$maxFixedArity = 0;
G__53963.cljs$lang$applyTo = (function (arglist__53969){
var args_fn = cljs.core.seq(arglist__53969);
return G__53963__delegate(args_fn);
});
G__53963.cljs$core$IFn$_invoke$arity$variadic = G__53963__delegate;
return G__53963;
})()
;
}));

(multis.web3_fx.fn_dispatch.cljs$lang$maxFixedArity = 2);

var G__53831_53970 = new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142);
var G__53832_53971 = (function (p__53835){
var map__53837 = p__53835;
var map__53837__$1 = (((((!((map__53837 == null))))?(((((map__53837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53837):map__53837);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
try{return multis.cljs_web3.get_accounts(web3,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_failure));
}catch (e53841){var e = e53841;
var fexpr__53844 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_failure);
return (fexpr__53844.cljs$core$IFn$_invoke$arity$1 ? fexpr__53844.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53844.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53831_53970,G__53832_53971) : re_frame.core.reg_fx.call(null,G__53831_53970,G__53832_53971));
var G__53849_53975 = new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603);
var G__53850_53976 = (function (p__53856){
var map__53857 = p__53856;
var map__53857__$1 = (((((!((map__53857 == null))))?(((((map__53857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53857):map__53857);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53857__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53857__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53857__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53857__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.get_balance(web3,address,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e53863){var e = e53863;
var fexpr__53868 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53868.cljs$core$IFn$_invoke$arity$1 ? fexpr__53868.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53868.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53849_53975,G__53850_53976) : re_frame.core.reg_fx.call(null,G__53849_53975,G__53850_53976));
var G__53874_53979 = new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245);
var G__53875_53980 = (function (p__53876){
var map__53877 = p__53876;
var map__53877__$1 = (((((!((map__53877 == null))))?(((((map__53877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53877):map__53877);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var on_tx_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_confirmation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809));
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var contract = multis.cljs_web3.contract_new(web3,abi,bin,address,gas);
return multis.cljs_web3.contract_deploy(contract,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_error),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_hash),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_send),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_receipt),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_confirmation),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_complete)], null));
}catch (e53893){var e = e53893;
var fexpr__53894 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53894.cljs$core$IFn$_invoke$arity$1 ? fexpr__53894.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53894.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53874_53979,G__53875_53980) : re_frame.core.reg_fx.call(null,G__53874_53979,G__53875_53980));
var G__53897_53994 = new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687);
var G__53898_53995 = (function (p__53899){
var map__53900 = p__53899;
var map__53900__$1 = (((((!((map__53900 == null))))?(((((map__53900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53900):map__53900);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53900__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var contract_instance = multis.cljs_web3.get_contract(web3,abi,address);
var fexpr__53910 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success);
return (fexpr__53910.cljs$core$IFn$_invoke$arity$1 ? fexpr__53910.cljs$core$IFn$_invoke$arity$1(contract_instance) : fexpr__53910.call(null,contract_instance));
}catch (e53906){var e = e53906;
var fexpr__53907 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53907.cljs$core$IFn$_invoke$arity$1 ? fexpr__53907.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53907.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53897_53994,G__53898_53995) : re_frame.core.reg_fx.call(null,G__53897_53994,G__53898_53995));
var G__53913_53997 = new cljs.core.Keyword("web3","fn-estimate-gas","web3/fn-estimate-gas",987897369);
var G__53915_53998 = (function (p__53916){
var map__53917 = p__53916;
var map__53917__$1 = (((((!((map__53917 == null))))?(((((map__53917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53917):map__53917);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"address","address",559499426));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53917__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.fn_estimate_gas(contract,address,gas,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e53920){var e = e53920;
var fexpr__53921 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53921.cljs$core$IFn$_invoke$arity$1 ? fexpr__53921.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53921.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53913_53997,G__53915_53998) : re_frame.core.reg_fx.call(null,G__53913_53997,G__53915_53998));
var G__53922_54087 = new cljs.core.Keyword("web3","const-fn-call","web3/const-fn-call",1067239681);
var G__53923_54088 = (function (p__53924){
var map__53925 = p__53924;
var map__53925__$1 = (((((!((map__53925 == null))))?(((((map__53925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53925):map__53925);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.const_fn_call(contract,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e53930){var e = e53930;
var fexpr__53931 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53931.cljs$core$IFn$_invoke$arity$1 ? fexpr__53931.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53931.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53922_54087,G__53923_54088) : re_frame.core.reg_fx.call(null,G__53922_54087,G__53923_54088));
var G__53932_54101 = new cljs.core.Keyword("web3","fn-send","web3/fn-send",-1959616870);
var G__53933_54102 = (function (p__53934){
var map__53935 = p__53934;
var map__53935__$1 = (((((!((map__53935 == null))))?(((((map__53935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53935):map__53935);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"address","address",559499426));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53935__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.fn_send(contract,address,gas,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e53937){var e = e53937;
var fexpr__53939 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53939.cljs$core$IFn$_invoke$arity$1 ? fexpr__53939.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53939.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53932_54101,G__53933_54102) : re_frame.core.reg_fx.call(null,G__53932_54101,G__53933_54102));
var G__53941_54123 = new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133);
var G__53942_54124 = (function (p__53943){
var map__53944 = p__53943;
var map__53944__$1 = (((((!((map__53944 == null))))?(((((map__53944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53944):map__53944);
var token_contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"token-contract","token-contract",-462969778));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.approve_tx(token_contract,from,to,deposit,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e53946){var e = e53946;
var fexpr__53947 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53947.cljs$core$IFn$_invoke$arity$1 ? fexpr__53947.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53947.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53941_54123,G__53942_54124) : re_frame.core.reg_fx.call(null,G__53941_54123,G__53942_54124));
var G__53948_54145 = new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388);
var G__53949_54146 = (function (p__53952){
var map__53953 = p__53952;
var map__53953__$1 = (((((!((map__53953 == null))))?(((((map__53953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53953):map__53953);
var token_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"token-address","token-address",872304132));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var sablier_contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53953__$1,new cljs.core.Keyword(null,"to","to",192099007));
try{return multis.cljs_web3.sablier_create_stream(sablier_contract,token_address,from,to,deposit,start_time,stop_time,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e53955){var e = e53955;
var fexpr__53956 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__53956.cljs$core$IFn$_invoke$arity$1 ? fexpr__53956.cljs$core$IFn$_invoke$arity$1(e) : fexpr__53956.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53948_54145,G__53949_54146) : re_frame.core.reg_fx.call(null,G__53948_54145,G__53949_54146));

//# sourceMappingURL=multis.web3_fx.js.map
