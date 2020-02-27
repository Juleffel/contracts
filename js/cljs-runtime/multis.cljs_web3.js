goog.provide('multis.cljs_web3');
goog.require('cljs.core');
multis.cljs_web3.baseGas = (450000);
multis.cljs_web3.create_web3 = (function multis$cljs_web3$create_web3(url){
return (new Web3(url));
});
multis.cljs_web3.create_web3_ganache = (function multis$cljs_web3$create_web3_ganache(){
return multis.cljs_web3.create_web3("http://localhost:8545/");
});
multis.cljs_web3.create_web3_rinkeby = (function multis$cljs_web3$create_web3_rinkeby(){
var constructor$ = (Web3["providers"]["HttpProvider"]);
var rinkeby_provider = (new constructor$("https://rinkeby.infura.io/v3/c9b01e8832f64a60a0c8a26997f89466"));
var given_provider = (Web3["givenProvider"]);
return multis.cljs_web3.create_web3((function (){var or__4185__auto__ = given_provider;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return rinkeby_provider;
}
})());
});
multis.cljs_web3.eth = (function multis$cljs_web3$eth(web3){
return (web3["eth"]);
});
multis.cljs_web3.from_wei = (function multis$cljs_web3$from_wei(number,unit){
return (Web3["utils"]).fromWei(number,unit);
});
multis.cljs_web3.get_accounts = (function multis$cljs_web3$get_accounts(web3,on_success,on_failure){
var G__54149 = multis.cljs_web3.eth(web3).requestAccounts();
G__54149.then((function (p1__54147_SHARP_){
var G__54150 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__54147_SHARP_);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__54150) : on_success.call(null,G__54150));
}),(function (p1__54148_SHARP_){
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(p1__54148_SHARP_) : on_failure.call(null,p1__54148_SHARP_));
}));

return G__54149;
});
multis.cljs_web3.get_balance = (function multis$cljs_web3$get_balance(web3,address,on_success,on_failure){
var G__54153 = multis.cljs_web3.eth(web3).getBalance(address);
G__54153.then((function (p1__54151_SHARP_){
var G__54154 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__54151_SHARP_);
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(G__54154) : on_success.call(null,G__54154));
}),(function (p1__54152_SHARP_){
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(p1__54152_SHARP_) : on_failure.call(null,p1__54152_SHARP_));
}));

return G__54153;
});
multis.cljs_web3.contract_new = (function multis$cljs_web3$contract_new(web3,abi,bin,address,gas){
try{return (new (multis.cljs_web3.eth(web3)["Contract"])(abi,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gas","gas",-139961463),gas,new cljs.core.Keyword(null,"gasPrice","gasPrice",1310400873),"20000000000",new cljs.core.Keyword(null,"data","data",-232669377),bin,new cljs.core.Keyword(null,"from","from",1815293044),address], null))));
}catch (e54155){var e = e54155;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not create contract",abi,bin,address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return null;
}});
multis.cljs_web3.call_if_defined = (function multis$cljs_web3$call_if_defined(symb,func){
return (function() { 
var G__54174__delegate = function (args){
if(cljs.core.truth_(func)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
} else {
return null;
}
};
var G__54174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54175__i = 0, G__54175__a = new Array(arguments.length -  0);
while (G__54175__i < G__54175__a.length) {G__54175__a[G__54175__i] = arguments[G__54175__i + 0]; ++G__54175__i;}
  args = new cljs.core.IndexedSeq(G__54175__a,0,null);
} 
return G__54174__delegate.call(this,args);};
G__54174.cljs$lang$maxFixedArity = 0;
G__54174.cljs$lang$applyTo = (function (arglist__54176){
var args = cljs.core.seq(arglist__54176);
return G__54174__delegate(args);
});
G__54174.cljs$core$IFn$_invoke$arity$variadic = G__54174__delegate;
return G__54174;
})()
;
});
multis.cljs_web3.get_contract = (function multis$cljs_web3$get_contract(web3,abi,address){
return (new (multis.cljs_web3.eth(web3)["Contract"])(abi,address));
});
multis.cljs_web3.contract_deploy = (function multis$cljs_web3$contract_deploy(contract,p__54156){
var map__54157 = p__54156;
var map__54157__$1 = (((((!((map__54157 == null))))?(((((map__54157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54157):map__54157);
var on_tx_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var on_tx_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-tx-send","on-tx-send",588081292));
var on_tx_receipt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_confirmation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-tx-confirmation","on-tx-confirmation",1836637809));
var on_tx_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-tx-complete","on-tx-complete",-1906763123));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{var txn = contract.deploy();
var send_promise = txn.send(multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"tx-send","tx-send",-116081092),on_tx_send));
var G__54161 = send_promise;
G__54161.on("error",multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"error","error",-978969032),on_tx_error));

G__54161.on("transactionHash",multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"transactionHash","transactionHash",-497623837),on_tx_hash));

G__54161.on("receipt",multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"receipt","receipt",1871350913),on_tx_receipt));

G__54161.on("confirmation",multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"confirmation","confirmation",-634977782),on_tx_confirmation));

G__54161.then(multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"complete","complete",-500388775),on_tx_complete),multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"complete-error","complete-error",-1971460442),on_error));

return G__54161;
}catch (e54159){var e = e54159;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not deploy contract"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

var fexpr__54160_54177 = multis.cljs_web3.call_if_defined(new cljs.core.Keyword(null,"complete-error","complete-error",-1971460442),on_error);
(fexpr__54160_54177.cljs$core$IFn$_invoke$arity$1 ? fexpr__54160_54177.cljs$core$IFn$_invoke$arity$1(e) : fexpr__54160_54177.call(null,e));

return null;
}});
multis.cljs_web3.const_fn_call = (function multis$cljs_web3$const_fn_call(contract,func,args,on_success,on_error){
try{var methods$ = (contract["methods"]);
var contract_func = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.js_invoke,methods$,func),args);
var call_promise = contract_func.call();
var G__54165 = call_promise;
G__54165.then((function (p1__54162_SHARP_){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(p1__54162_SHARP_) : on_success.call(null,p1__54162_SHARP_));
}),(function (p1__54163_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(p1__54163_SHARP_) : on_error.call(null,p1__54163_SHARP_));
}));

return G__54165;
}catch (e54164){var e = e54164;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not call contract fn",func], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

(on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(e) : on_error.call(null,e));

return null;
}});
multis.cljs_web3.fn_send = (function multis$cljs_web3$fn_send(contract,address,gas,func,args,on_success,on_error){
try{var methods$ = (contract["methods"]);
var contract_func = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.js_invoke,methods$,func),args);
var send_promise = contract_func.send(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),address,new cljs.core.Keyword(null,"gas","gas",-139961463),gas], null)));
var G__54169 = send_promise;
G__54169.then((function (p1__54166_SHARP_){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(p1__54166_SHARP_) : on_success.call(null,p1__54166_SHARP_));
}),(function (p1__54167_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(p1__54167_SHARP_) : on_error.call(null,p1__54167_SHARP_));
}));

return G__54169;
}catch (e54168){var e = e54168;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not send contract fn",func,"at address",address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

(on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(e) : on_error.call(null,e));

return null;
}});
multis.cljs_web3.fn_estimate_gas = (function multis$cljs_web3$fn_estimate_gas(contract,address,gas,func,args,on_success,on_error){
try{var methods$ = (contract["methods"]);
var contract_func = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.js_invoke,methods$,func),args);
var promise = contract_func.estimateGas(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),address,new cljs.core.Keyword(null,"gas","gas",-139961463),gas], null)));
var G__54173 = promise;
G__54173.then((function (p1__54170_SHARP_){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(p1__54170_SHARP_) : on_success.call(null,p1__54170_SHARP_));
}),(function (p1__54171_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(p1__54171_SHARP_) : on_error.call(null,p1__54171_SHARP_));
}));

return G__54173;
}catch (e54172){var e = e54172;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not estimate gas for contract fn",func,"at address",address], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

(on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(e) : on_error.call(null,e));

return null;
}});
multis.cljs_web3.approve_tx = (function multis$cljs_web3$approve_tx(token_contract,from,to,deposit,on_success,on_error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["approve-tx",token_contract,from,to,deposit], 0));

return multis.cljs_web3.fn_send(token_contract,from,(4500000),"approve",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,deposit], null),on_success,on_error);
});
multis.cljs_web3.sablier_create_stream = (function multis$cljs_web3$sablier_create_stream(sablier_contract,token_address,from,to,deposit,start_time,stop_time,on_success,on_error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sablier-create-stream",sablier_contract,token_address,from,to,deposit,start_time,stop_time], 0));

return multis.cljs_web3.fn_send(sablier_contract,from,(4500000),"createStream",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,deposit,token_address,start_time,stop_time], null),on_success,on_error);
});

//# sourceMappingURL=multis.cljs_web3.js.map
