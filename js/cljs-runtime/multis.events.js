goog.provide('multis.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('multis.cljs_web3');
goog.require('multis.web3_events');
goog.require('multis.utils');
goog.require('multis.db');
multis.events.trace = (function multis$events$trace(b){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0));

return b;
});
multis.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","initialise-db","app/initialise-db",-533973347),(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),multis.db.initial_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-user-accounts","app/load-user-accounts",1347870881)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),new cljs.core.Keyword(null,"sablier","sablier",-419543152)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),new cljs.core.Keyword(null,"token","token",-1211463215)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","load-user-accounts","app/load-user-accounts",1347870881),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","load-accounts","blockchain/load-accounts",-1585374120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","accounts-loaded","app/accounts-loaded",1844476319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","accounts-loaded","app/accounts-loaded",1844476319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__54302,p__54303){
var map__54304 = p__54302;
var map__54304__$1 = (((((!((map__54304 == null))))?(((((map__54304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54304):map__54304);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54304__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54305 = p__54303;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54305,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54305,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path,(function (p1__54301_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accounts,address){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accounts,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null));
}),p1__54301_SHARP_,addresses);
})),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(addresses)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null),cljs.core.first(addresses)], null):null)], null)], null);
}));
multis.events.no_balance_addresses = (function multis$events$no_balance_addresses(accounts){
var no_balance_accounts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54312_SHARP_){
return ((cljs.core.not(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__54312_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"balance-fetched","balance-fetched",-460956501).cljs$core$IFn$_invoke$arity$1(p1__54312_SHARP_))));
}),accounts);
var addresses = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),no_balance_accounts);
return addresses;
});
multis.utils.reg_trigger_raw(new cljs.core.Keyword("app","fill-balances","app/fill-balances",1858079961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)], null)], null),(function (accounts){
var temp__5735__auto__ = multis.events.no_balance_addresses(accounts);
if(cljs.core.truth_(temp__5735__auto__)){
var addresses = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),addresses], null);
} else {
return null;
}
}));
multis.utils.reg_trigger_raw(new cljs.core.Keyword("app","fill-balances","app/fill-balances",1858079961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)], null)], null),(function (accounts){
var temp__5735__auto__ = multis.events.no_balance_addresses(accounts);
if(cljs.core.truth_(temp__5735__auto__)){
var addresses = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),addresses], null);
} else {
return null;
}
}));
multis.events.account_addresses = (function multis$events$account_addresses(db,key){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),cljs.core.vals((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(db) : key.call(null,db))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","refresh-balances","app/refresh-balances",1513170833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__54314,_){
var map__54315 = p__54314;
var map__54315__$1 = (((((!((map__54315 == null))))?(((((map__54315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54315):map__54315);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54315__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),multis.events.account_addresses(new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),db)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),multis.events.account_addresses(new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__54324){
var vec__54325 = p__54324;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54325,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54325,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var iter__4582__auto__ = (function multis$events$iter__54330(s__54331){
return (new cljs.core.LazySeq(null,(function (){
var s__54331__$1 = s__54331;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54331__$1);
if(temp__5735__auto__){
var s__54331__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54331__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54331__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54333 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54332 = (0);
while(true){
if((i__54332 < size__4581__auto__)){
var address = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54332);
cljs.core.chunk_append(b__54333,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),key,address], null));

var G__54486 = (i__54332 + (1));
i__54332 = G__54486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54333),multis$events$iter__54330(cljs.core.chunk_rest(s__54331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54333),null);
}
} else {
var address = cljs.core.first(s__54331__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),key,address], null),multis$events$iter__54330(cljs.core.rest(s__54331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(addresses);
})()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__54334,p__54335){
var map__54336 = p__54334;
var map__54336__$1 = (((((!((map__54336 == null))))?(((((map__54336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54336):map__54336);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54336__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54337 = p__54335;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54337,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54337,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"balance-fetched","balance-fetched",-460956501)], null),true),new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),address], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","balance-loaded","app/balance-loaded",1060395966),key,address], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","balance-loaded","app/balance-loaded",1060395966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__54347){
var vec__54348 = p__54347;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54348,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54348,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54348,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"eth","eth",1381694970)], null),multis.cljs_web3.from_wei(amount,"ether"));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),multis.events.interceptors,(function (p__54352,p__54353){
var map__54355 = p__54352;
var map__54355__$1 = (((((!((map__54355 == null))))?(((((map__54355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54355):map__54355);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54355__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54356 = p__54353;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54356,(0),null);
var map__54366 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name)], null));
var map__54366__$1 = (((((!((map__54366 == null))))?(((((map__54366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54366):map__54366);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54366__$1,new cljs.core.Keyword(null,"address","address",559499426));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),name], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","load-token-abi","app/load-token-abi",-781541495),multis.events.interceptors,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),"token"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","token-abi-loaded","app/token-abi-loaded",1710223239)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","deploy-db-contract","app/deploy-db-contract",-1383277046),multis.events.interceptors,(function (p__54371,p__54372){
var map__54373 = p__54371;
var map__54373__$1 = (((((!((map__54373 == null))))?(((((map__54373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54373):map__54373);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54373__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54374 = p__54372;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54374,(0),null);
var map__54380 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name)], null));
var map__54380__$1 = (((((!((map__54380 == null))))?(((((map__54380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54380):map__54380);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54380__$1,new cljs.core.Keyword(null,"address","address",559499426));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),"combined"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),name,address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),name], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),multis.events.interceptors,(function (p__54382,p__54383){
var map__54384 = p__54382;
var map__54384__$1 = (((((!((map__54384 == null))))?(((((map__54384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54384):map__54384);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54384__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__54385 = p__54383;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54385,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54385,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract instance loaded."], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),contract_instance)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle","app/test-rectangle",2060395263),multis.events.interceptors,(function (_,p__54392){
var vec__54393 = p__54392;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54393,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","test-rectangle-resp","app/test-rectangle-resp",811551160)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle-resp","app/test-rectangle-resp",811551160),multis.events.interceptors,(function (db,p__54398){
var vec__54399 = p__54398;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction Rectangle done:",res], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res))], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txns","txns",-1492102421),new cljs.core.Keyword(null,"rectangle","rectangle",293163262)], null),res);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle-estimate","app/test-rectangle-estimate",-1465758043),multis.events.interceptors,(function (_,p__54406){
var vec__54407 = p__54406;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54407,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","log","app/log",-1596464837)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),multis.events.interceptors,(function (_,p__54418){
var vec__54419 = p__54418;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),params], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-stream-created","app/sablier-stream-created",-2106157704),params], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-created","app/sablier-stream-created",-2106157704),multis.events.interceptors,(function (db,p__54426){
var vec__54427 = p__54426;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54427,(0),null);
var resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54427,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,resp], null));
}));
var G__54430_54528 = new cljs.core.Keyword(null,"form-doc","form-doc",873105357);
var G__54431_54529 = (function (db,_){
return new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54430_54528,G__54431_54529) : re_frame.core.reg_sub.call(null,G__54430_54528,G__54431_54529));
var G__54432_54530 = new cljs.core.Keyword(null,"form-value","form-value",-1466863926);
var G__54433_54531 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54434_54532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null);
var G__54435_54533 = (function (doc,p__54436){
var vec__54438 = p__54436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54438,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54438,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54432_54530,G__54433_54531,G__54434_54532,G__54435_54533) : re_frame.core.reg_sub.call(null,G__54432_54530,G__54433_54531,G__54434_54532,G__54435_54533));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),(function (db,p__54443){
var vec__54444 = p__54443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54444,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54444,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54444,(2),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null),path),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-update-value","form-update-value",-1970355900),(function (db,p__54447){
var vec__54451 = p__54447;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54451,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54451,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54451,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54451,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null),path),f,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","form-submit-new-recipient","app/form-submit-new-recipient",2015349978),(function (db){
var address = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357),new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(address),(42))){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"address","address",559499426)], null),address),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357),new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)], null),address),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357),new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575)], null),"");
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","form-submit-create-stream","app/form-submit-create-stream",-62708770),(function (p__54457){
var map__54459 = p__54457;
var map__54459__$1 = (((((!((map__54459 == null))))?(((((map__54459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54459):map__54459);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54459__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__54461 = new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db);
var map__54461__$1 = (((((!((map__54461 == null))))?(((((map__54461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54461):map__54461);
var selected_user_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015));
var selected_recipient_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927));
var stream_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003));
var stream_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54461__$1,new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548));
var now = ((Date.now() / (1000)) | (0));
var start_time = (now + (120));
var stop_time = ((now + (120)) + ((3600) * (stream_duration | (0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"form-doc","form-doc",873105357),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], 0))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),selected_user_account,new cljs.core.Keyword(null,"to","to",192099007),selected_recipient_account,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),stream_amount,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),stop_time], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","error","app/error",-979130411),(function (db,p__54464){
var vec__54465 = p__54464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54465,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54465,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Global error:",error], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"global-error","global-error",894464480),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","log","app/log",-1596464837),(function (db,p__54468){
var vec__54470 = p__54468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54470,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54470,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54470,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log:",title,":",value], 0));

return db;
}));

//# sourceMappingURL=multis.events.js.map
