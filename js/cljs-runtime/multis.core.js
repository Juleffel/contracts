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
var G__41178_41188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","initialise-db","app/initialise-db",-533973347)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__41178_41188) : re_frame.core.dispatch_sync.call(null,G__41178_41188));
var action__40137__auto___41189 = (function (params__40138__auto__){
if(cljs.core.map_QMARK_(params__40138__auto__)){
var map__41179 = params__40138__auto__;
var map__41179__$1 = (((((!((map__41179 == null))))?(((((map__41179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41179):map__41179);
return null;
} else {
if(cljs.core.vector_QMARK_(params__40138__auto__)){
var vec__41181 = params__40138__auto__;
return null;
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__40137__auto___41189);

if((typeof multis !== 'undefined') && (typeof multis.core !== 'undefined') && (typeof multis.core.history !== 'undefined')){
} else {
multis.core.history = (function (){var G__41184 = (new goog.History());
var G__41185_41190 = G__41184;
var G__41186_41191 = goog.history.EventType.NAVIGATE;
var G__41187_41192 = (function (event){
return secretary.core.dispatch_BANG_(event.token);
});
goog.events.listen(G__41185_41190,G__41186_41191,G__41187_41192);

G__41184.setEnabled(true);

return G__41184;
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
