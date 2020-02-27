goog.provide('multis.web3_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.cljs_web3');
multis.web3_fx.fn_dispatch = (function multis$web3_fx$fn_dispatch(var_args){
var G__54179 = arguments.length;
switch (G__54179) {
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
var G__54248__delegate = function (args_fn){
var G__54180_54249 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(evt,args_base,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args_fn], 0)));
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54180_54249) : re_frame.core.dispatch.call(null,G__54180_54249));

return null;
};
var G__54248 = function (var_args){
var args_fn = null;
if (arguments.length > 0) {
var G__54250__i = 0, G__54250__a = new Array(arguments.length -  0);
while (G__54250__i < G__54250__a.length) {G__54250__a[G__54250__i] = arguments[G__54250__i + 0]; ++G__54250__i;}
  args_fn = new cljs.core.IndexedSeq(G__54250__a,0,null);
} 
return G__54248__delegate.call(this,args_fn);};
G__54248.cljs$lang$maxFixedArity = 0;
G__54248.cljs$lang$applyTo = (function (arglist__54251){
var args_fn = cljs.core.seq(arglist__54251);
return G__54248__delegate(args_fn);
});
G__54248.cljs$core$IFn$_invoke$arity$variadic = G__54248__delegate;
return G__54248;
})()
;
}));

(multis.web3_fx.fn_dispatch.cljs$lang$maxFixedArity = 2);

var G__54181_54252 = new cljs.core.Keyword("web3","get-accounts","web3/get-accounts",-248449142);
var G__54182_54253 = (function (p__54184){
var map__54185 = p__54184;
var map__54185__$1 = (((((!((map__54185 == null))))?(((((map__54185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54185):map__54185);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
try{return multis.cljs_web3.get_accounts(web3,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_failure));
}catch (e54187){var e = e54187;
var fexpr__54188 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_failure);
return (fexpr__54188.cljs$core$IFn$_invoke$arity$1 ? fexpr__54188.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54188.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54181_54252,G__54182_54253) : re_frame.core.reg_fx.call(null,G__54181_54252,G__54182_54253));
var G__54189_54254 = new cljs.core.Keyword("web3","get-balance","web3/get-balance",-1287367603);
var G__54190_54255 = (function (p__54191){
var map__54192 = p__54191;
var map__54192__$1 = (((((!((map__54192 == null))))?(((((map__54192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54192):map__54192);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54192__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54192__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54192__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54192__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.get_balance(web3,address,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e54195){var e = e54195;
var fexpr__54196 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54196.cljs$core$IFn$_invoke$arity$1 ? fexpr__54196.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54196.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54189_54254,G__54190_54255) : re_frame.core.reg_fx.call(null,G__54189_54254,G__54190_54255));
var G__54197_54256 = new cljs.core.Keyword("web3","deploy-contract","web3/deploy-contract",-784335245);
var G__54198_54257 = (function (p__54199){
var map__54200 = p__54199;
var map__54200__$1 = (((((!((map__54200 == null))))?(((((map__54200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54200):map__54200);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var on_tx_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_confirmation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809));
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54200__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var contract = multis.cljs_web3.contract_new(web3,abi,bin,address,gas);
return multis.cljs_web3.contract_deploy(contract,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_error),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_hash),new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_send),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_receipt),new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_confirmation),new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_tx_complete)], null));
}catch (e54202){var e = e54202;
var fexpr__54203 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54203.cljs$core$IFn$_invoke$arity$1 ? fexpr__54203.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54203.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54197_54256,G__54198_54257) : re_frame.core.reg_fx.call(null,G__54197_54256,G__54198_54257));
var G__54204_54258 = new cljs.core.Keyword("web3","get-contract","web3/get-contract",845953687);
var G__54205_54259 = (function (p__54206){
var map__54207 = p__54206;
var map__54207__$1 = (((((!((map__54207 == null))))?(((((map__54207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54207):map__54207);
var web3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var abi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var contract_instance = multis.cljs_web3.get_contract(web3,abi,address);
var fexpr__54211 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success);
return (fexpr__54211.cljs$core$IFn$_invoke$arity$1 ? fexpr__54211.cljs$core$IFn$_invoke$arity$1(contract_instance) : fexpr__54211.call(null,contract_instance));
}catch (e54209){var e = e54209;
var fexpr__54210 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54210.cljs$core$IFn$_invoke$arity$1 ? fexpr__54210.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54210.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54204_54258,G__54205_54259) : re_frame.core.reg_fx.call(null,G__54204_54258,G__54205_54259));
var G__54212_54260 = new cljs.core.Keyword("web3","fn-estimate-gas","web3/fn-estimate-gas",987897369);
var G__54213_54261 = (function (p__54214){
var map__54215 = p__54214;
var map__54215__$1 = (((((!((map__54215 == null))))?(((((map__54215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54215):map__54215);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"address","address",559499426));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.fn_estimate_gas(contract,address,gas,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e54217){var e = e54217;
var fexpr__54218 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54218.cljs$core$IFn$_invoke$arity$1 ? fexpr__54218.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54218.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54212_54260,G__54213_54261) : re_frame.core.reg_fx.call(null,G__54212_54260,G__54213_54261));
var G__54219_54263 = new cljs.core.Keyword("web3","const-fn-call","web3/const-fn-call",1067239681);
var G__54220_54264 = (function (p__54221){
var map__54222 = p__54221;
var map__54222__$1 = (((((!((map__54222 == null))))?(((((map__54222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54222):map__54222);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.const_fn_call(contract,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e54224){var e = e54224;
var fexpr__54225 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54225.cljs$core$IFn$_invoke$arity$1 ? fexpr__54225.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54225.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54219_54263,G__54220_54264) : re_frame.core.reg_fx.call(null,G__54219_54263,G__54220_54264));
var G__54226_54265 = new cljs.core.Keyword("web3","fn-send","web3/fn-send",-1959616870);
var G__54227_54266 = (function (p__54228){
var map__54229 = p__54228;
var map__54229__$1 = (((((!((map__54229 == null))))?(((((map__54229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54229):map__54229);
var contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"address","address",559499426));
var gas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"gas","gas",-139961463));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.fn_send(contract,address,gas,func,args,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e54231){var e = e54231;
var fexpr__54232 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54232.cljs$core$IFn$_invoke$arity$1 ? fexpr__54232.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54232.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54226_54265,G__54227_54266) : re_frame.core.reg_fx.call(null,G__54226_54265,G__54227_54266));
var G__54233_54267 = new cljs.core.Keyword("web3","approve-tx","web3/approve-tx",1457277133);
var G__54234_54268 = (function (p__54235){
var map__54236 = p__54235;
var map__54236__$1 = (((((!((map__54236 == null))))?(((((map__54236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54236):map__54236);
var token_contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"token-contract","token-contract",-462969778));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"to","to",192099007));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54236__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return multis.cljs_web3.approve_tx(token_contract,from,to,deposit,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e54238){var e = e54238;
var fexpr__54239 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54239.cljs$core$IFn$_invoke$arity$1 ? fexpr__54239.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54239.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54233_54267,G__54234_54268) : re_frame.core.reg_fx.call(null,G__54233_54267,G__54234_54268));
var G__54240_54269 = new cljs.core.Keyword("web3","sablier-create-stream","web3/sablier-create-stream",1788382388);
var G__54241_54270 = (function (p__54242){
var map__54243 = p__54242;
var map__54243__$1 = (((((!((map__54243 == null))))?(((((map__54243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54243):map__54243);
var token_address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"token-address","token-address",872304132));
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var sablier_contract = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"sablier-contract","sablier-contract",-146240341));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var stop_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var deposit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54243__$1,new cljs.core.Keyword(null,"to","to",192099007));
try{return multis.cljs_web3.sablier_create_stream(sablier_contract,token_address,from,to,deposit,start_time,stop_time,multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_success),multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error));
}catch (e54245){var e = e54245;
var fexpr__54246 = multis.web3_fx.fn_dispatch.cljs$core$IFn$_invoke$arity$1(on_error);
return (fexpr__54246.cljs$core$IFn$_invoke$arity$1 ? fexpr__54246.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54246.call(null,e));
}});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54240_54269,G__54241_54270) : re_frame.core.reg_fx.call(null,G__54240_54269,G__54241_54270));

//# sourceMappingURL=multis.web3_fx.js.map
