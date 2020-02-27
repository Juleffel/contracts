goog.provide('multis.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
goog.require('devtools.core');
goog.require('day8.re_frame.http_fx');
goog.require('multis.db');
goog.require('multis.subs');
goog.require('multis.events');
goog.require('multis.views');
goog.require('goog.History');
goog.require('goog.history.EventType');
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();
cljs.core.enable_console_print_BANG_();
var G__40203_40213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","initialise-db","app/initialise-db",-533973347)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__40203_40213) : re_frame.core.dispatch_sync.call(null,G__40203_40213));
var action__39984__auto___40214 = (function (params__39985__auto__){
if(cljs.core.map_QMARK_(params__39985__auto__)){
var map__40204 = params__39985__auto__;
var map__40204__$1 = (((((!((map__40204 == null))))?(((((map__40204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40204):map__40204);
return null;
} else {
if(cljs.core.vector_QMARK_(params__39985__auto__)){
var vec__40206 = params__39985__auto__;
return null;
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__39984__auto___40214);

if((typeof multis !== 'undefined') && (typeof multis.core !== 'undefined') && (typeof multis.core.history !== 'undefined')){
} else {
multis.core.history = (function (){var G__40209 = (new goog.History());
var G__40210_40215 = G__40209;
var G__40211_40216 = goog.history.EventType.NAVIGATE;
var G__40212_40217 = (function (event){
return secretary.core.dispatch_BANG_(event.token);
});
goog.events.listen(G__40210_40215,G__40211_40216,G__40212_40217);

G__40209.setEnabled(true);

return G__40209;
})();
}
multis.core.render = (function multis$core$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multis.views.root_component], null),document.getElementById("app"));
});
multis.core.clear_cache_and_render_BANG_ = (function multis$core$clear_cache_and_render_BANG_(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return multis.core.render();
});
multis.core.main = (function multis$core$main(){
return multis.core.render();
});
goog.exportSymbol('multis.core.main', multis.core.main);

//# sourceMappingURL=multis.core.js.map
