goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53064 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53065 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53065);

try{try{var seq__53068 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53069 = null;
var count__53070 = (0);
var i__53071 = (0);
while(true){
if((i__53071 < count__53070)){
var vec__53087 = chunk__53069.cljs$core$IIndexed$_nth$arity$2(null,i__53071);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087,(1),null);
var temp__5733__auto___53217 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53217)){
var effect_fn_53218 = temp__5733__auto___53217;
(effect_fn_53218.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53218.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53218.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53219 = seq__53068;
var G__53220 = chunk__53069;
var G__53221 = count__53070;
var G__53222 = (i__53071 + (1));
seq__53068 = G__53219;
chunk__53069 = G__53220;
count__53070 = G__53221;
i__53071 = G__53222;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53068);
if(temp__5735__auto__){
var seq__53068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53068__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53068__$1);
var G__53228 = cljs.core.chunk_rest(seq__53068__$1);
var G__53229 = c__4609__auto__;
var G__53230 = cljs.core.count(c__4609__auto__);
var G__53231 = (0);
seq__53068 = G__53228;
chunk__53069 = G__53229;
count__53070 = G__53230;
i__53071 = G__53231;
continue;
} else {
var vec__53095 = cljs.core.first(seq__53068__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53095,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53095,(1),null);
var temp__5733__auto___53232 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53232)){
var effect_fn_53233 = temp__5733__auto___53232;
(effect_fn_53233.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53233.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53233.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53240 = cljs.core.next(seq__53068__$1);
var G__53241 = null;
var G__53242 = (0);
var G__53243 = (0);
seq__53068 = G__53240;
chunk__53069 = G__53241;
count__53070 = G__53242;
i__53071 = G__53243;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52489__auto___53244 = re_frame.interop.now();
var duration__52490__auto___53245 = (end__52489__auto___53244 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52490__auto___53245,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52489__auto___53244);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53064);
}} else {
var seq__53099 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53100 = null;
var count__53101 = (0);
var i__53102 = (0);
while(true){
if((i__53102 < count__53101)){
var vec__53118 = chunk__53100.cljs$core$IIndexed$_nth$arity$2(null,i__53102);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53118,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53118,(1),null);
var temp__5733__auto___53248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53248)){
var effect_fn_53249 = temp__5733__auto___53248;
(effect_fn_53249.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53249.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53249.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53250 = seq__53099;
var G__53251 = chunk__53100;
var G__53252 = count__53101;
var G__53253 = (i__53102 + (1));
seq__53099 = G__53250;
chunk__53100 = G__53251;
count__53101 = G__53252;
i__53102 = G__53253;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53099);
if(temp__5735__auto__){
var seq__53099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53099__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53099__$1);
var G__53256 = cljs.core.chunk_rest(seq__53099__$1);
var G__53257 = c__4609__auto__;
var G__53258 = cljs.core.count(c__4609__auto__);
var G__53259 = (0);
seq__53099 = G__53256;
chunk__53100 = G__53257;
count__53101 = G__53258;
i__53102 = G__53259;
continue;
} else {
var vec__53127 = cljs.core.first(seq__53099__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53127,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53127,(1),null);
var temp__5733__auto___53262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53262)){
var effect_fn_53263 = temp__5733__auto___53262;
(effect_fn_53263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53263.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53264 = cljs.core.next(seq__53099__$1);
var G__53265 = null;
var G__53266 = (0);
var G__53267 = (0);
seq__53099 = G__53264;
chunk__53100 = G__53265;
count__53101 = G__53266;
i__53102 = G__53267;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53131 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53132 = null;
var count__53133 = (0);
var i__53134 = (0);
while(true){
if((i__53134 < count__53133)){
var map__53146 = chunk__53132.cljs$core$IIndexed$_nth$arity$2(null,i__53134);
var map__53146__$1 = (((((!((map__53146 == null))))?(((((map__53146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53146):map__53146);
var effect = map__53146__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53146__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53146__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53131,chunk__53132,count__53133,i__53134,map__53146,map__53146__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53131,chunk__53132,count__53133,i__53134,map__53146,map__53146__$1,effect,ms,dispatch))
,ms);
}


var G__53268 = seq__53131;
var G__53269 = chunk__53132;
var G__53270 = count__53133;
var G__53271 = (i__53134 + (1));
seq__53131 = G__53268;
chunk__53132 = G__53269;
count__53133 = G__53270;
i__53134 = G__53271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53131);
if(temp__5735__auto__){
var seq__53131__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53131__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53131__$1);
var G__53302 = cljs.core.chunk_rest(seq__53131__$1);
var G__53303 = c__4609__auto__;
var G__53304 = cljs.core.count(c__4609__auto__);
var G__53305 = (0);
seq__53131 = G__53302;
chunk__53132 = G__53303;
count__53133 = G__53304;
i__53134 = G__53305;
continue;
} else {
var map__53161 = cljs.core.first(seq__53131__$1);
var map__53161__$1 = (((((!((map__53161 == null))))?(((((map__53161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53161):map__53161);
var effect = map__53161__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53161__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53161__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__53131,chunk__53132,count__53133,i__53134,map__53161,map__53161__$1,effect,ms,dispatch,seq__53131__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__53131,chunk__53132,count__53133,i__53134,map__53161,map__53161__$1,effect,ms,dispatch,seq__53131__$1,temp__5735__auto__))
,ms);
}


var G__53311 = cljs.core.next(seq__53131__$1);
var G__53312 = null;
var G__53313 = (0);
var G__53314 = (0);
seq__53131 = G__53311;
chunk__53132 = G__53312;
count__53133 = G__53313;
i__53134 = G__53314;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53166 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53167 = null;
var count__53168 = (0);
var i__53169 = (0);
while(true){
if((i__53169 < count__53168)){
var event = chunk__53167.cljs$core$IIndexed$_nth$arity$2(null,i__53169);
re_frame.router.dispatch(event);


var G__53330 = seq__53166;
var G__53331 = chunk__53167;
var G__53332 = count__53168;
var G__53333 = (i__53169 + (1));
seq__53166 = G__53330;
chunk__53167 = G__53331;
count__53168 = G__53332;
i__53169 = G__53333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53166);
if(temp__5735__auto__){
var seq__53166__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53166__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53166__$1);
var G__53338 = cljs.core.chunk_rest(seq__53166__$1);
var G__53339 = c__4609__auto__;
var G__53340 = cljs.core.count(c__4609__auto__);
var G__53341 = (0);
seq__53166 = G__53338;
chunk__53167 = G__53339;
count__53168 = G__53340;
i__53169 = G__53341;
continue;
} else {
var event = cljs.core.first(seq__53166__$1);
re_frame.router.dispatch(event);


var G__53346 = cljs.core.next(seq__53166__$1);
var G__53347 = null;
var G__53348 = (0);
var G__53349 = (0);
seq__53166 = G__53346;
chunk__53167 = G__53347;
count__53168 = G__53348;
i__53169 = G__53349;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53177 = cljs.core.seq(value);
var chunk__53178 = null;
var count__53179 = (0);
var i__53180 = (0);
while(true){
if((i__53180 < count__53179)){
var event = chunk__53178.cljs$core$IIndexed$_nth$arity$2(null,i__53180);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53353 = seq__53177;
var G__53354 = chunk__53178;
var G__53355 = count__53179;
var G__53356 = (i__53180 + (1));
seq__53177 = G__53353;
chunk__53178 = G__53354;
count__53179 = G__53355;
i__53180 = G__53356;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53177);
if(temp__5735__auto__){
var seq__53177__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53177__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53177__$1);
var G__53357 = cljs.core.chunk_rest(seq__53177__$1);
var G__53358 = c__4609__auto__;
var G__53359 = cljs.core.count(c__4609__auto__);
var G__53360 = (0);
seq__53177 = G__53357;
chunk__53178 = G__53358;
count__53179 = G__53359;
i__53180 = G__53360;
continue;
} else {
var event = cljs.core.first(seq__53177__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53361 = cljs.core.next(seq__53177__$1);
var G__53362 = null;
var G__53363 = (0);
var G__53364 = (0);
seq__53177 = G__53361;
chunk__53178 = G__53362;
count__53179 = G__53363;
i__53180 = G__53364;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
