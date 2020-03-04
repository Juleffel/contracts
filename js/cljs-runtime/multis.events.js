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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),multis.db.initial_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-user-accounts","app/load-user-accounts",1347870881)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),new cljs.core.Keyword(null,"sablier","sablier",-419543152)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),new cljs.core.Keyword(null,"MintToken","MintToken",-218028453)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","load-user-accounts","app/load-user-accounts",1347870881),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","load-accounts","blockchain/load-accounts",-1585374120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","accounts-loaded","app/accounts-loaded",1844476319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","accounts-loaded","app/accounts-loaded",1844476319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__41036,p__41037){
var map__41038 = p__41036;
var map__41038__$1 = (((((!((map__41038 == null))))?(((((map__41038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41038):map__41038);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41038__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41039 = p__41037;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,path,(function (p1__41035_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accounts,address){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(accounts,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),address], null));
}),p1__41035_SHARP_,addresses);
})),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(addresses)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015)], null),cljs.core.first(addresses)], null):null)], null)], null);
}));
multis.events.no_balance_addresses = (function multis$events$no_balance_addresses(accounts){
var no_balance_accounts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41043_SHARP_){
return ((cljs.core.not(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__41043_SHARP_))) && (((cljs.core.not(new cljs.core.Keyword(null,"balance-fetched","balance-fetched",-460956501).cljs$core$IFn$_invoke$arity$1(p1__41043_SHARP_))) || (cljs.core.not(new cljs.core.Keyword(null,"token-balance-fetched","token-balance-fetched",1413238821).cljs$core$IFn$_invoke$arity$1(p1__41043_SHARP_))))));
}),accounts);
var addresses = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),no_balance_accounts);
return addresses;
});
multis.utils.reg_trigger_raw(new cljs.core.Keyword("app","fill-balances","app/fill-balances",1858079961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-contract-instance","token-contract-instance",2098598897)], null)], null),(function (accounts,token_contract_instance){
var addresses = multis.events.no_balance_addresses(accounts);
if(cljs.core.truth_((function (){var and__4174__auto__ = addresses;
if(cljs.core.truth_(and__4174__auto__)){
return token_contract_instance;
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),addresses], null);
} else {
return null;
}
}));
multis.utils.reg_trigger_raw(new cljs.core.Keyword("app","fill-balances","app/fill-balances",1858079961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-contract-instance","token-contract-instance",2098598897)], null)], null),(function (accounts,token_contract_instance){
var addresses = multis.events.no_balance_addresses(accounts);
if(cljs.core.truth_((function (){var and__4174__auto__ = addresses;
if(cljs.core.truth_(and__4174__auto__)){
return token_contract_instance;
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),addresses], null);
} else {
return null;
}
}));
multis.events.account_addresses = (function multis$events$account_addresses(db,key){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),cljs.core.vals((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(db) : key.call(null,db))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","refresh-balances","app/refresh-balances",1513170833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__41044,_){
var map__41045 = p__41044;
var map__41045__$1 = (((((!((map__41045 == null))))?(((((map__41045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41045):map__41045);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),multis.events.account_addresses(new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),db)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),multis.events.account_addresses(new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-balances","app/get-balances",-139842617),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__41047){
var vec__41048 = p__41047;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41048,(0),null);
var addresses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41048,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function multis$events$iter__41051(s__41052){
return (new cljs.core.LazySeq(null,(function (){
var s__41052__$1 = s__41052;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41052__$1);
if(temp__5735__auto__){
var s__41052__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41052__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41052__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41054 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41053 = (0);
while(true){
if((i__41053 < size__4581__auto__)){
var address = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41053);
cljs.core.chunk_append(b__41054,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),key,address], null));

var G__41176 = (i__41053 + (1));
i__41053 = G__41176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41054),multis$events$iter__41051(cljs.core.chunk_rest(s__41052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41054),null);
}
} else {
var address = cljs.core.first(s__41052__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),key,address], null),multis$events$iter__41051(cljs.core.rest(s__41052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(addresses);
})(),(function (){var iter__4582__auto__ = (function multis$events$iter__41055(s__41056){
return (new cljs.core.LazySeq(null,(function (){
var s__41056__$1 = s__41056;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41056__$1);
if(temp__5735__auto__){
var s__41056__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41056__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41056__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41058 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41057 = (0);
while(true){
if((i__41057 < size__4581__auto__)){
var address = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__41057);
cljs.core.chunk_append(b__41058,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-token-balance","app/get-token-balance",-1165213791),key,address], null));

var G__41177 = (i__41057 + (1));
i__41057 = G__41177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41058),multis$events$iter__41055(cljs.core.chunk_rest(s__41056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41058),null);
}
} else {
var address = cljs.core.first(s__41056__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-token-balance","app/get-token-balance",-1165213791),key,address], null),multis$events$iter__41055(cljs.core.rest(s__41056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(addresses);
})())], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-balance","app/get-balance",-1284347005),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__41059,p__41060){
var map__41061 = p__41059;
var map__41061__$1 = (((((!((map__41061 == null))))?(((((map__41061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41061):map__41061);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41061__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41062 = p__41060;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41062,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41062,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"balance-fetched","balance-fetched",-460956501)], null),true),new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","get-balance","blockchain/get-balance",1183945554),address], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","balance-loaded","app/balance-loaded",1060395966),key,address], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","balance-loaded","app/balance-loaded",1060395966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41066){
var vec__41067 = p__41066;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"eth","eth",1381694970)], null),multis.cljs_web3.from_wei(amount,"ether"));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","get-token-balance","app/get-token-balance",-1165213791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__41070,p__41071){
var map__41072 = p__41070;
var map__41072__$1 = (((((!((map__41072 == null))))?(((((map__41072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41072):map__41072);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41072__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41073 = p__41071;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41073,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41073,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"MintToken","MintToken",-218028453),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"token-balance-fetched","token-balance-fetched",1413238821)], null),true),new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blockchain","get-erc20-balance","blockchain/get-erc20-balance",-673561159),new cljs.core.Keyword(null,"MintToken","MintToken",-218028453),address], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","token-balance-loaded","app/token-balance-loaded",1067659777),key,address], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","token-balance-loaded","app/token-balance-loaded",1067659777),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (db,p__41077){
var vec__41078 = p__41077;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41078,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41078,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41078,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"token","token",-1211463215)], null),amount),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address),new cljs.core.Keyword(null,"mnt","mnt",-1574024431)], null),(amount / (10000000000)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","load-db-contract","app/load-db-contract",-315608466),multis.events.interceptors,(function (p__41081,p__41082){
var map__41083 = p__41081;
var map__41083__$1 = (((((!((map__41083 == null))))?(((((map__41083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41083):map__41083);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41083__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41084 = p__41082;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41084,(0),null);
var map__41088 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name)], null));
var map__41088__$1 = (((((!((map__41088 == null))))?(((((map__41088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41088):map__41088);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"address","address",559499426));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-contract","contract/load-contract",403411945),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),name], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","load-token-abi","app/load-token-abi",-781541495),multis.events.interceptors,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","load-abi","contract/load-abi",2099193746),"token"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","token-abi-loaded","app/token-abi-loaded",1710223239)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","deploy-db-contract","app/deploy-db-contract",-1383277046),multis.events.interceptors,(function (p__41090,p__41091){
var map__41092 = p__41090;
var map__41092__$1 = (((((!((map__41092 == null))))?(((((map__41092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41092):map__41092);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41092__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41093 = p__41091;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41093,(0),null);
var map__41097 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name)], null));
var map__41097__$1 = (((((!((map__41097 == null))))?(((((map__41097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41097):map__41097);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958).cljs$core$IFn$_invoke$arity$1(db))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","fetch-compiled-code","contract/fetch-compiled-code",1075362591),contract_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","deploy-compiled-code","contract/deploy-compiled-code",355338034),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),name], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","contract-instance-loaded","app/contract-instance-loaded",-543287180),multis.events.interceptors,(function (p__41099,p__41100){
var map__41101 = p__41099;
var map__41101__$1 = (((((!((map__41101 == null))))?(((((map__41101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41101):map__41101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41101__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41102 = p__41100;
var contract_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41102,(0),null);
var contract_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41102,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(contract_name),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),contract_instance)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle","app/test-rectangle",2060395263),multis.events.interceptors,(function (_,p__41106){
var vec__41107 = p__41106;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41107,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-contract-fns","rectangle","test-contract-fns/rectangle",-223614999),params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","test-rectangle-resp","app/test-rectangle-resp",811551160)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle-resp","app/test-rectangle-resp",811551160),multis.events.interceptors,(function (db,p__41110){
var vec__41111 = p__41110;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41111,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transaction Rectangle done:",res], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res))], 0));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"txns","txns",-1492102421),new cljs.core.Keyword(null,"rectangle","rectangle",293163262)], null),res);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","test-rectangle-estimate","app/test-rectangle-estimate",-1465758043),multis.events.interceptors,(function (_,p__41114){
var vec__41115 = p__41114;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41115,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-contract-fns","estimate-gas-rectangle","test-contract-fns/estimate-gas-rectangle",1402167342),params], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","log","app/log",-1596464837)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","mint-tokens","app/mint-tokens",1594275757),multis.events.interceptors,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","send-fn","contract/send-fn",-1246565193),new cljs.core.Keyword(null,"MintToken","MintToken",-218028453),"mint",null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","refresh-balances","app/refresh-balances",1513170833)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","log","app/log",-1596464837)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),multis.events.interceptors,(function (p__41118,p__41119){
var map__41120 = p__41118;
var map__41120__$1 = (((((!((map__41120 == null))))?(((((map__41120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41120):map__41120);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41120__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41121 = p__41119;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41121,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"adding-stream","adding-stream",442448041),params),new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","create-stream","sablier/create-stream",-1806822686),params], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-stream-created","app/sablier-stream-created",-2106157704),params], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-created","app/sablier-stream-created",-2106157704),multis.events.interceptors,(function (db,p__41125){
var vec__41126 = p__41125;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41126,(0),null);
var resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41126,(1),null);
var clj_resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var events = cljs.core.vals(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(clj_resp));
var return_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"returnValues","returnValues",778327805),events);
var stream_id = ((cljs.core.last(return_values)["streamId"]) | (0));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.assoc,stream_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stream-resp","stream-resp",-139159900),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword(null,"stream-id","stream-id",23321359),stream_id,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"balance-from","balance-from",-1194655659),(0),new cljs.core.Keyword(null,"balance-to","balance-to",-842534323),(0)], null)),new cljs.core.Keyword(null,"adding-stream","adding-stream",442448041));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-get-balance-from","app/sablier-stream-get-balance-from",964957269),multis.events.interceptors,(function (_,p__41129){
var vec__41130 = p__41129;
var stream_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41130,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41130,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","get-balance","sablier/get-balance",703272240),stream_id,to], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-stream-set-balance-from","app/sablier-stream-set-balance-from",-1584938864),stream_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-get-balance-to","app/sablier-stream-get-balance-to",2066945898),multis.events.interceptors,(function (_,p__41133){
var vec__41134 = p__41133;
var stream_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41134,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41134,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chain","dispatch-chain",-303238044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sablier","get-balance","sablier/get-balance",703272240),stream_id,to], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-stream-set-balance-to","app/sablier-stream-set-balance-to",599658923),stream_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-set-balance-from","app/sablier-stream-set-balance-from",-1584938864),multis.events.interceptors,(function (db,p__41137){
var vec__41138 = p__41137;
var stream_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41138,(0),null);
var balance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41138,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"streams","streams",1465783789),stream_id,new cljs.core.Keyword(null,"balance-from","balance-from",-1194655659)], null),balance);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","sablier-stream-set-balance-to","app/sablier-stream-set-balance-to",599658923),multis.events.interceptors,(function (db,p__41141){
var vec__41142 = p__41141;
var stream_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41142,(0),null);
var balance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41142,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"streams","streams",1465783789),stream_id,new cljs.core.Keyword(null,"balance-to","balance-to",-842534323)], null),balance);
}));
var G__41145_41193 = new cljs.core.Keyword(null,"form-doc","form-doc",873105357);
var G__41146_41194 = (function (db,_){
return new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41145_41193,G__41146_41194) : re_frame.core.reg_sub.call(null,G__41145_41193,G__41146_41194));
var G__41147_41195 = new cljs.core.Keyword(null,"form-value","form-value",-1466863926);
var G__41148_41196 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__41149_41197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null);
var G__41150_41198 = (function (doc,p__41151){
var vec__41152 = p__41151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41152,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41152,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__41147_41195,G__41148_41196,G__41149_41197,G__41150_41198) : re_frame.core.reg_sub.call(null,G__41147_41195,G__41148_41196,G__41149_41197,G__41150_41198));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),(function (db,p__41155){
var vec__41156 = p__41155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41156,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41156,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41156,(2),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null),path),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form-update-value","form-update-value",-1970355900),(function (db,p__41159){
var vec__41160 = p__41159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41160,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41160,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41160,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41160,(3),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","form-submit-create-stream","app/form-submit-create-stream",-62708770),(function (p__41163){
var map__41164 = p__41163;
var map__41164__$1 = (((((!((map__41164 == null))))?(((((map__41164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41164):map__41164);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41164__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__41166 = new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db);
var map__41166__$1 = (((((!((map__41166 == null))))?(((((map__41166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41166):map__41166);
var selected_user_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015));
var selected_recipient_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927));
var stream_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003));
var stream_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41166__$1,new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548));
var now = ((Date.now() / (1000)) | (0));
var start_time = (now + (120));
var stop_time = ((now + (120)) + ((3600) * (stream_duration | (0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"form-doc","form-doc",873105357),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"form-doc","form-doc",873105357).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548)], 0))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),selected_user_account,new cljs.core.Keyword(null,"to","to",192099007),selected_recipient_account,new cljs.core.Keyword(null,"deposit","deposit",-1686435851),stream_amount,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),stop_time], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","error","app/error",-979130411),(function (db,p__41168){
var vec__41169 = p__41168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41169,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41169,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Global error:",error], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"global-error","global-error",894464480),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","log","app/log",-1596464837),(function (db,p__41172){
var vec__41173 = p__41172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41173,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41173,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41173,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log:",title,":",value], 0));

return db;
}));

//# sourceMappingURL=multis.events.js.map
