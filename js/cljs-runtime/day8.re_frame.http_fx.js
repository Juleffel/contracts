goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__53140){
var vec__53141 = p__53140;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53141,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53141,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__53144 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__53144);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__53150){
var map__53151 = p__53150;
var map__53151__$1 = (((((!((map__53151 == null))))?(((((map__53151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53151):map__53151);
var request = map__53151__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53151__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53151__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__53148_SHARP_){
var G__53168 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__53148_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53168) : re_frame.core.dispatch.call(null,G__53168));
}),(function (p1__53149_SHARP_){
var G__53175 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__53149_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53175) : re_frame.core.dispatch.call(null,G__53175));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__53176 = cljs.core.seq(seq_request_maps);
var chunk__53177 = null;
var count__53178 = (0);
var i__53179 = (0);
while(true){
if((i__53179 < count__53178)){
var request__$1 = chunk__53177.cljs$core$IIndexed$_nth$arity$2(null,i__53179);
var G__53182_53186 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53182_53186) : ajax.core.ajax_request.call(null,G__53182_53186));


var G__53187 = seq__53176;
var G__53188 = chunk__53177;
var G__53189 = count__53178;
var G__53190 = (i__53179 + (1));
seq__53176 = G__53187;
chunk__53177 = G__53188;
count__53178 = G__53189;
i__53179 = G__53190;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53176);
if(temp__5735__auto__){
var seq__53176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53176__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53176__$1);
var G__53191 = cljs.core.chunk_rest(seq__53176__$1);
var G__53192 = c__4609__auto__;
var G__53193 = cljs.core.count(c__4609__auto__);
var G__53194 = (0);
seq__53176 = G__53191;
chunk__53177 = G__53192;
count__53178 = G__53193;
i__53179 = G__53194;
continue;
} else {
var request__$1 = cljs.core.first(seq__53176__$1);
var G__53183_53195 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53183_53195) : ajax.core.ajax_request.call(null,G__53183_53195));


var G__53196 = cljs.core.next(seq__53176__$1);
var G__53197 = null;
var G__53198 = (0);
var G__53199 = (0);
seq__53176 = G__53196;
chunk__53177 = G__53197;
count__53178 = G__53198;
i__53179 = G__53199;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__53184_53200 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__53185_53201 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53184_53200,G__53185_53201) : re_frame.core.reg_fx.call(null,G__53184_53200,G__53185_53201));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
