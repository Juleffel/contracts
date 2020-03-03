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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","accounts-loaded","app/accounts-loaded",1844476319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__44133,p__44134){
var map__44135 = p__44133;
var map__44135__$1 = (((((!((map__44135 == null))))?(((((map__44135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44135):map__44135);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44135__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44136 = p__44134;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44136,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44136,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path,(function (p1__44132_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accounts,address){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accounts,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null));
}),p1__44132_SHARP_,addresses);
})),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(addresses)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null),cljs.core.first(addresses)], null):null)], null)], null);
}));
multis.events.no_balance_addresses = (function multis$events$no_balance_addresses(accounts){
var no_balance_accounts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44140_SHARP_){
return ((cljs.core.not(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__44140_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"balance-fetched","balance-fetched",-460956501).cljs$core$IFn$_invoke$arity$1(p1__44140_SHARP_))));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","refresh-balances","app/refresh-balances",1513170833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__44141,_){
var map__44142 = p__44141;
var map__44142__$1 = (((((!((map__44142 == null))))?(((((map__44142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44142):map__44142);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44142__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),multis.events.account_addresses(new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),db)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),multis.events.account_addresses(new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__44144){
var vec__44145 = p__44144;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44145,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44145,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var iter__4582__auto__ = (function multis$events$iter__44148(s__44149){
return (new cljs.core.LazySeq(null,(function (){
var s__44149__$1 = s__44149;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44149__$1);
if(temp__5735__auto__){
var s__44149__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44149__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44149__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44151 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44150 = (0);
while(true){
if((i__44150 < size__4581__auto__)){
var address = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__44150);
cljs.core.chunk_append(b__44151,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),key,address], null));

var G__44251 = (i__44150 + (1));
i__44150 = G__44251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44151),multis$events$iter__44148(cljs.core.chunk_rest(s__44149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44151),null);
}
} else {
var address = cljs.core.first(s__44149__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),key,address], null),multis$events$iter__44148(cljs.core.rest(s__44149__$2)));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__44152,p__44153){
var map__44154 = p__44152;
var map__44154__$1 = (((((!((map__44154 == null))))?(((((map__44154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44154):map__44154);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44154__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44155 = p__44153;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44155,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44155,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"balance-fetched","balance-fetched",-460956501)], null),true),new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),address], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","balance-loaded","app/balance-loaded",1060395966),key,address], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","balance-loaded","app/balance-loaded",1060395966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__44159){
var vec__44160 = p__44159;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44160,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44160,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44160,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"eth","eth",1381694970)], null),multis.cljs_web3.from_wei(amount,"ether"));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),multis.events.interceptors,(function (p__44163,p__44164){
var map__44165 = p__44163;
var map__44165__$1 = (((((!((map__44165 == null))))?(((((map__44165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44165):map__44165);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44165__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44166 = p__44164;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44166,(0),null);
var map__44170 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name)], null));
var map__44170__$1 = (((((!((map__44170 == null))))?(((((map__44170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44170):map__44170);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44170__$1,new cljs.core.Keyword(null,"address","address",559499426));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),name], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","load-token-abi","app/load-token-abi",-781541495),multis.events.interceptors,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),"token"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","token-abi-loaded","app/token-abi-loaded",1710223239)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","deploy-db-contract","app/deploy-db-contract",-1383277046),multis.events.interceptors,(function (p__44172,p__44173){
var map__44174 = p__44172;
var map__44174__$1 = (((((!((map__44174 == null))))?(((((map__44174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44174):map__44174);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44174__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44175 = p__44173;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44175,(0),null);
var map__44179 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name)], null));
var map__44179__$1 = (((((!((map__44179 == null))))?(((((map__44179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44179):map__44179);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44179__$1,new cljs.core.Keyword(null,"address","address",559499426));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),"combined"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),name,address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),name], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),multis.events.interceptors,(function (p__44181,p__44182){
var map__44183 = p__44181;
var map__44183__$1 = (((((!((map__44183 == null))))?(((((map__44183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44183):map__44183);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44183__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44184 = p__44182;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44184,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contract instance loaded."], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),contract_instance)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle","app/test-rectangle",2060395263),multis.events.interceptors,(function (_,p__44188){
var vec__44189 = p__44188;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44189,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","test-rectangle-resp","app/test-rectangle-resp",811551160)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle-resp","app/test-rectangle-resp",811551160),multis.events.interceptors,(function (db,p__44192){
var vec__44193 = p__44192;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44193,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction Rectangle done:",res], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res))], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txns","txns",-1492102421),new cljs.core.Keyword(null,"rectangle","rectangle",293163262)], null),res);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle-estimate","app/test-rectangle-estimate",-1465758043),multis.events.interceptors,(function (_,p__44196){
var vec__44197 = p__44196;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44197,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","log","app/log",-1596464837)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),multis.events.interceptors,(function (_,p__44200){
var vec__44201 = p__44200;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44201,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),params], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-stream-created","app/sablier-stream-created",-2106157704),params], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-created","app/sablier-stream-created",-2106157704),multis.events.interceptors,(function (db,p__44204){
var vec__44205 = p__44204;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44205,(0),null);
var resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44205,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,resp], null));
}));
var G__44208_44255 = new cljs.core.Keyword(null,"form-doc","form-doc",873105357);
var G__44209_44256 = (function (db,_){
return new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__44208_44255,G__44209_44256) : re_frame.core.reg_sub.call(null,G__44208_44255,G__44209_44256));
var G__44210_44257 = new cljs.core.Keyword(null,"form-value","form-value",-1466863926);
var G__44211_44258 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__44212_44259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null);
var G__44213_44260 = (function (doc,p__44214){
var vec__44215 = p__44214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44215,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44215,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__44210_44257,G__44211_44258,G__44212_44259,G__44213_44260) : re_frame.core.reg_sub.call(null,G__44210_44257,G__44211_44258,G__44212_44259,G__44213_44260));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),(function (db,p__44218){
var vec__44219 = p__44218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(2),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null),path),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-update-value","form-update-value",-1970355900),(function (db,p__44222){
var vec__44223 = p__44222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44223,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44223,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44223,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44223,(3),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","form-submit-create-stream","app/form-submit-create-stream",-62708770),(function (p__44226){
var map__44227 = p__44226;
var map__44227__$1 = (((((!((map__44227 == null))))?(((((map__44227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44227):map__44227);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44227__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__44229 = new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db);
var map__44229__$1 = (((((!((map__44229 == null))))?(((((map__44229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44229):map__44229);
var selected_user_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44229__$1,new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015));
var selected_recipient_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44229__$1,new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927));
var stream_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44229__$1,new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003));
var stream_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44229__$1,new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548));
var now = ((Date.now() / (1000)) | (0));
var start_time = (now + (120));
var stop_time = ((now + (120)) + ((3600) * (stream_duration | (0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"form-doc","form-doc",873105357),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], 0))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),selected_user_account,new cljs.core.Keyword(null,"to","to",192099007),selected_recipient_account,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),stream_amount,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),stop_time], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","error","app/error",-979130411),(function (db,p__44231){
var vec__44232 = p__44231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44232,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44232,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Global error:",error], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"global-error","global-error",894464480),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","log","app/log",-1596464837),(function (db,p__44235){
var vec__44236 = p__44235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log:",title,":",value], 0));

return db;
}));

//# sourceMappingURL=multis.events.js.map
