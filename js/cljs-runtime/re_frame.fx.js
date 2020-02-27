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
var _STAR_current_trace_STAR__orig_val__52076 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52077 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52077);

try{try{var seq__52078 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52079 = null;
var count__52080 = (0);
var i__52081 = (0);
while(true){
if((i__52081 < count__52080)){
var vec__52088 = chunk__52079.cljs$core$IIndexed$_nth$arity$2(null,i__52081);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52088,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52088,(1),null);
var temp__5733__auto___52171 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52171)){
var effect_fn_52172 = temp__5733__auto___52171;
(effect_fn_52172.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52172.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52172.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52173 = seq__52078;
var G__52174 = chunk__52079;
var G__52175 = count__52080;
var G__52176 = (i__52081 + (1));
seq__52078 = G__52173;
chunk__52079 = G__52174;
count__52080 = G__52175;
i__52081 = G__52176;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52078);
if(temp__5735__auto__){
var seq__52078__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52078__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52078__$1);
var G__52177 = cljs.core.chunk_rest(seq__52078__$1);
var G__52178 = c__4609__auto__;
var G__52179 = cljs.core.count(c__4609__auto__);
var G__52180 = (0);
seq__52078 = G__52177;
chunk__52079 = G__52178;
count__52080 = G__52179;
i__52081 = G__52180;
continue;
} else {
var vec__52104 = cljs.core.first(seq__52078__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(1),null);
var temp__5733__auto___52181 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52181)){
var effect_fn_52182 = temp__5733__auto___52181;
(effect_fn_52182.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52182.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52182.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52183 = cljs.core.next(seq__52078__$1);
var G__52184 = null;
var G__52185 = (0);
var G__52186 = (0);
seq__52078 = G__52183;
chunk__52079 = G__52184;
count__52080 = G__52185;
i__52081 = G__52186;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51833__auto___52187 = re_frame.interop.now();
var duration__51834__auto___52188 = (end__51833__auto___52187 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51834__auto___52188,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51833__auto___52187);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52076);
}} else {
var seq__52107 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52108 = null;
var count__52109 = (0);
var i__52110 = (0);
while(true){
if((i__52110 < count__52109)){
var vec__52117 = chunk__52108.cljs$core$IIndexed$_nth$arity$2(null,i__52110);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52117,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52117,(1),null);
var temp__5733__auto___52189 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52189)){
var effect_fn_52190 = temp__5733__auto___52189;
(effect_fn_52190.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52190.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52190.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52191 = seq__52107;
var G__52192 = chunk__52108;
var G__52193 = count__52109;
var G__52194 = (i__52110 + (1));
seq__52107 = G__52191;
chunk__52108 = G__52192;
count__52109 = G__52193;
i__52110 = G__52194;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52107);
if(temp__5735__auto__){
var seq__52107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52107__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52107__$1);
var G__52195 = cljs.core.chunk_rest(seq__52107__$1);
var G__52196 = c__4609__auto__;
var G__52197 = cljs.core.count(c__4609__auto__);
var G__52198 = (0);
seq__52107 = G__52195;
chunk__52108 = G__52196;
count__52109 = G__52197;
i__52110 = G__52198;
continue;
} else {
var vec__52120 = cljs.core.first(seq__52107__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52120,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52120,(1),null);
var temp__5733__auto___52199 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52199)){
var effect_fn_52200 = temp__5733__auto___52199;
(effect_fn_52200.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52200.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52200.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52201 = cljs.core.next(seq__52107__$1);
var G__52202 = null;
var G__52203 = (0);
var G__52204 = (0);
seq__52107 = G__52201;
chunk__52108 = G__52202;
count__52109 = G__52203;
i__52110 = G__52204;
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
var seq__52126 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52127 = null;
var count__52128 = (0);
var i__52129 = (0);
while(true){
if((i__52129 < count__52128)){
var map__52139 = chunk__52127.cljs$core$IIndexed$_nth$arity$2(null,i__52129);
var map__52139__$1 = (((((!((map__52139 == null))))?(((((map__52139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52139):map__52139);
var effect = map__52139__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52126,chunk__52127,count__52128,i__52129,map__52139,map__52139__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52126,chunk__52127,count__52128,i__52129,map__52139,map__52139__$1,effect,ms,dispatch))
,ms);
}


var G__52205 = seq__52126;
var G__52206 = chunk__52127;
var G__52207 = count__52128;
var G__52208 = (i__52129 + (1));
seq__52126 = G__52205;
chunk__52127 = G__52206;
count__52128 = G__52207;
i__52129 = G__52208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52126);
if(temp__5735__auto__){
var seq__52126__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52126__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52126__$1);
var G__52209 = cljs.core.chunk_rest(seq__52126__$1);
var G__52210 = c__4609__auto__;
var G__52211 = cljs.core.count(c__4609__auto__);
var G__52212 = (0);
seq__52126 = G__52209;
chunk__52127 = G__52210;
count__52128 = G__52211;
i__52129 = G__52212;
continue;
} else {
var map__52142 = cljs.core.first(seq__52126__$1);
var map__52142__$1 = (((((!((map__52142 == null))))?(((((map__52142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52142):map__52142);
var effect = map__52142__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52142__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52142__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52126,chunk__52127,count__52128,i__52129,map__52142,map__52142__$1,effect,ms,dispatch,seq__52126__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52126,chunk__52127,count__52128,i__52129,map__52142,map__52142__$1,effect,ms,dispatch,seq__52126__$1,temp__5735__auto__))
,ms);
}


var G__52213 = cljs.core.next(seq__52126__$1);
var G__52214 = null;
var G__52215 = (0);
var G__52216 = (0);
seq__52126 = G__52213;
chunk__52127 = G__52214;
count__52128 = G__52215;
i__52129 = G__52216;
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
var seq__52145 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52146 = null;
var count__52147 = (0);
var i__52148 = (0);
while(true){
if((i__52148 < count__52147)){
var event = chunk__52146.cljs$core$IIndexed$_nth$arity$2(null,i__52148);
re_frame.router.dispatch(event);


var G__52217 = seq__52145;
var G__52218 = chunk__52146;
var G__52219 = count__52147;
var G__52220 = (i__52148 + (1));
seq__52145 = G__52217;
chunk__52146 = G__52218;
count__52147 = G__52219;
i__52148 = G__52220;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52145);
if(temp__5735__auto__){
var seq__52145__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52145__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52145__$1);
var G__52221 = cljs.core.chunk_rest(seq__52145__$1);
var G__52222 = c__4609__auto__;
var G__52223 = cljs.core.count(c__4609__auto__);
var G__52224 = (0);
seq__52145 = G__52221;
chunk__52146 = G__52222;
count__52147 = G__52223;
i__52148 = G__52224;
continue;
} else {
var event = cljs.core.first(seq__52145__$1);
re_frame.router.dispatch(event);


var G__52225 = cljs.core.next(seq__52145__$1);
var G__52226 = null;
var G__52227 = (0);
var G__52228 = (0);
seq__52145 = G__52225;
chunk__52146 = G__52226;
count__52147 = G__52227;
i__52148 = G__52228;
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
var seq__52154 = cljs.core.seq(value);
var chunk__52155 = null;
var count__52156 = (0);
var i__52157 = (0);
while(true){
if((i__52157 < count__52156)){
var event = chunk__52155.cljs$core$IIndexed$_nth$arity$2(null,i__52157);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52229 = seq__52154;
var G__52230 = chunk__52155;
var G__52231 = count__52156;
var G__52232 = (i__52157 + (1));
seq__52154 = G__52229;
chunk__52155 = G__52230;
count__52156 = G__52231;
i__52157 = G__52232;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52154);
if(temp__5735__auto__){
var seq__52154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52154__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52154__$1);
var G__52233 = cljs.core.chunk_rest(seq__52154__$1);
var G__52234 = c__4609__auto__;
var G__52235 = cljs.core.count(c__4609__auto__);
var G__52236 = (0);
seq__52154 = G__52233;
chunk__52155 = G__52234;
count__52156 = G__52235;
i__52157 = G__52236;
continue;
} else {
var event = cljs.core.first(seq__52154__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52237 = cljs.core.next(seq__52154__$1);
var G__52238 = null;
var G__52239 = (0);
var G__52240 = (0);
seq__52154 = G__52237;
chunk__52155 = G__52238;
count__52156 = G__52239;
i__52157 = G__52240;
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
