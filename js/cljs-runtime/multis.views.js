goog.provide('multis.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent_forms.core');
multis.views._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
multis.views._GT_evt = re_frame.core.dispatch;
multis.views.form_events = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get","get",1683182755),(function (path){
var G__54094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),path], null);
return (multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1 ? multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1(G__54094) : multis.views._LT_sub.call(null,G__54094));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (path,value){
var G__54095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),path,value], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54095) : multis.views._GT_evt.call(null,G__54095));
}),new cljs.core.Keyword(null,"doc","doc",1913296891),(function (){
var G__54096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-doc","form-doc",873105357)], null);
return (multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1 ? multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1(G__54096) : multis.views._LT_sub.call(null,G__54096));
})], null);
multis.views.form_new_recipient_template = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__54097_SHARP_){
p1__54097_SHARP_.preventDefault();

var G__54098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","form-submit-new-recipient","app/form-submit-new-recipient",2015349978)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54098) : multis.views._GT_evt.call(null,G__54098));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-recipient-address","new-recipient-address",1717776575),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a recipient address (0x...)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Add new recipient"], null)], null)], null);
multis.views.form_new_recipient = (function multis$views$form_new_recipient(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,multis.views.form_new_recipient_template,multis.views.form_events], null);
});
multis.views.account_row = (function multis$views$account_row(p__54099,selected_key){
var map__54100 = p__54099;
var map__54100__$1 = (((((!((map__54100 == null))))?(((((map__54100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54100):map__54100);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54100__$1,new cljs.core.Keyword(null,"address","address",559499426));
var eth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54100__$1,new cljs.core.Keyword(null,"eth","eth",1381694970));
var text = (cljs.core.truth_(eth)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(eth)," ETH"].join(''):address);
var selected_address = (function (){var G__54102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-value","form-value",-1466863926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_key], null)], null);
return (multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1 ? multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1(G__54102) : multis.views._LT_sub.call(null,G__54102));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.account-row","div.account-row",84662136),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54103 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-set-value","form-set-value",1925489340),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_key], null),address], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54103) : multis.views._GT_evt.call(null,G__54103));
}),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_address,address))?"selected":null)], null)], null),text], null);
});
multis.views.accounts_list_component = (function multis$views$accounts_list_component(accounts,selected_key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts-list","div.accounts-list",311599418),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (account){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.account_row,account,selected_key], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(account)], null));
}),accounts)], null);
});
multis.views.user_accounts_component = (function multis$views$user_accounts_component(){
var temp__5733__auto__ = (function (){var G__54104 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958)], null);
return (multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1 ? multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1(G__54104) : multis.views._LT_sub.call(null,G__54104));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var accounts = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts","div.accounts",-1744229615),((((1) < cljs.core.count(accounts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts__title","div.accounts__title",-1870388720),"List of your accounts"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts__title","div.accounts__title",-1870388720),"Your account"], null)),multis.views.accounts_list_component(accounts,new cljs.core.Keyword(null,"selected-user-account","selected-user-account",-102720015))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts","div.accounts",-1744229615),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts__title","div.accounts__title",-1870388720),"Please install Metamask first"], null)], null);
}
});
multis.views.recipients_component = (function multis$views$recipients_component(){
var accounts = (function (){var G__54105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329)], null);
return (multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1 ? multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1(G__54105) : multis.views._LT_sub.call(null,G__54105));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts","div.accounts",-1744229615),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accounts__title","div.accounts__title",-1870388720),"Recipients"], null),multis.views.accounts_list_component(accounts,new cljs.core.Keyword(null,"selected-recipient-account","selected-recipient-account",-216522927)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.form_new_recipient], null)], null);
});
multis.views.stream_form_template = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stream-inputs","div.stream-inputs",371202326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Stream "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.input-inline","input.input.input-inline",-1444401981),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stream-amount","stream-amount",2062367003),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"1000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," tokens over "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.input-inline","input.input.input-inline",-1444401981),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stream-duration","stream-duration",-719342548),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"24"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," hours "], null)], null);
multis.views.stream_form = (function multis$views$stream_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.stream-form","form.stream-form",-591305450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__54106_SHARP_){
p1__54106_SHARP_.preventDefault();

var G__54107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","form-submit-create-stream","app/form-submit-create-stream",-62708770)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54107) : multis.views._GT_evt.call(null,G__54107));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stream-form__title","div.stream-form__title",180736488),"Stream tokens"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,multis.views.stream_form_template,multis.views.form_events], null),(function (){var stream_valid_QMARK_ = (function (){var G__54108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stream-values-valid?","stream-values-valid?",497467954)], null);
return (multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1 ? multis.views._LT_sub.cljs$core$IFn$_invoke$arity$1(G__54108) : multis.views._LT_sub.call(null,G__54108));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.button","input.button",1491210167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Stream",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(stream_valid_QMARK_)], null)], null);
})()], null);
});
multis.views.now = (function multis$views$now(){
return ((Date.now() / (1000)) | (0));
});
multis.views.test_buttons = (function multis$views$test_buttons(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.refresh-accounts","div.refresh-accounts",-1185248417),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","load-accounts","app/load-accounts",-358575003)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54109) : multis.views._GT_evt.call(null,G__54109));
})], null),"Refresh accounts"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.deploy-contract","div.deploy-contract",1840138730),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","deploy-db-contract","app/deploy-db-contract",-1383277046),"test"], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54110) : multis.views._GT_evt.call(null,G__54110));
})], null),"Deploy contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.test-txn","div.test-txn",-348220520),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","test-rectangle-estimate","app/test-rectangle-estimate",-1465758043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(3)], null)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54111) : multis.views._GT_evt.call(null,G__54111));
})], null),"Estimate gas for test transaction"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.test-txn","div.test-txn",-348220520),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","test-rectangle","app/test-rectangle",2060395263),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(3)], null)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54112) : multis.views._GT_evt.call(null,G__54112));
})], null),"Test transaction"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.load-accounts-contracts","div.load-accounts-contracts",-1118996233),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","get-accounts-contracts","app/get-accounts-contracts",-2059806885)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54113) : multis.views._GT_evt.call(null,G__54113));
})], null),"Load accounts contracts"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stream","div.stream",568052984),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__54114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sablier-create-stream","app/sablier-create-stream",1793081846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"from","from",1815293044),"0x681FbA7ceF62673C01184cFa832CE3CE298d7e86",new cljs.core.Keyword(null,"to","to",192099007),"0x8d8ddefafdf23feea24a6de9b3940ea6e5f54a3d",new cljs.core.Keyword(null,"deposit","deposit",-1686435851),"60000",new cljs.core.Keyword(null,"start-time","start-time",814801386),(multis.views.now() + (120)),new cljs.core.Keyword(null,"stop-time","stop-time",-749575378),((multis.views.now() + (120)) + (60))], null)], null);
return (multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1 ? multis.views._GT_evt.cljs$core$IFn$_invoke$arity$1(G__54114) : multis.views._GT_evt.call(null,G__54114));
})], null),"Stream tokens"], null)], null)], null);
});
multis.views.stream_tokens_component = (function multis$views$stream_tokens_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.stream-tokens","section.stream-tokens",1270970505),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.user_accounts_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.recipients_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.stream_form], null)], null)], null);
});
multis.views.root_component = (function multis$views$root_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Multis interview - Julien Fleury"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.stream_tokens_component], null)], null);
});

//# sourceMappingURL=multis.views.js.map
