goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__54010){
var vec__54017 = p__54010;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54017,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54017,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__54021 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__54021);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__54031){
var map__54033 = p__54031;
var map__54033__$1 = (((((!((map__54033 == null))))?(((((map__54033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54033):map__54033);
var request = map__54033__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54033__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54033__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__54023_SHARP_){
var G__54040 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__54023_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54040) : re_frame.core.dispatch.call(null,G__54040));
}),(function (p1__54026_SHARP_){
var G__54047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__54026_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__54047) : re_frame.core.dispatch.call(null,G__54047));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__54050 = cljs.core.seq(seq_request_maps);
var chunk__54051 = null;
var count__54052 = (0);
var i__54053 = (0);
while(true){
if((i__54053 < count__54052)){
var request__$1 = chunk__54051.cljs$core$IIndexed$_nth$arity$2(null,i__54053);
var G__54068_54108 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__54068_54108) : ajax.core.ajax_request.call(null,G__54068_54108));


var G__54111 = seq__54050;
var G__54112 = chunk__54051;
var G__54113 = count__54052;
var G__54114 = (i__54053 + (1));
seq__54050 = G__54111;
chunk__54051 = G__54112;
count__54052 = G__54113;
i__54053 = G__54114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54050);
if(temp__5735__auto__){
var seq__54050__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54050__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__54050__$1);
var G__54117 = cljs.core.chunk_rest(seq__54050__$1);
var G__54118 = c__4609__auto__;
var G__54119 = cljs.core.count(c__4609__auto__);
var G__54120 = (0);
seq__54050 = G__54117;
chunk__54051 = G__54118;
count__54052 = G__54119;
i__54053 = G__54120;
continue;
} else {
var request__$1 = cljs.core.first(seq__54050__$1);
var G__54077_54122 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__54077_54122) : ajax.core.ajax_request.call(null,G__54077_54122));


var G__54125 = cljs.core.next(seq__54050__$1);
var G__54126 = null;
var G__54127 = (0);
var G__54128 = (0);
seq__54050 = G__54125;
chunk__54051 = G__54126;
count__54052 = G__54127;
i__54053 = G__54128;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__54078_54129 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__54079_54130 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__54078_54129,G__54079_54130) : re_frame.core.reg_fx.call(null,G__54078_54129,G__54079_54130));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
