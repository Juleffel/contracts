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
var G__54778_54791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","initialise-db","app/initialise-db",-533973347)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__54778_54791) : re_frame.core.dispatch_sync.call(null,G__54778_54791));
var action__52520__auto___54792 = (function (params__52521__auto__){
if(cljs.core.map_QMARK_(params__52521__auto__)){
var map__54779 = params__52521__auto__;
var map__54779__$1 = (((((!((map__54779 == null))))?(((((map__54779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54779):map__54779);
return null;
} else {
if(cljs.core.vector_QMARK_(params__52521__auto__)){
var vec__54784 = params__52521__auto__;
return null;
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__52520__auto___54792);

if((typeof multis !== 'undefined') && (typeof multis.core !== 'undefined') && (typeof multis.core.history !== 'undefined')){
} else {
multis.core.history = (function (){var G__54787 = (new goog.History());
var G__54788_54793 = G__54787;
var G__54789_54794 = goog.history.EventType.NAVIGATE;
var G__54790_54795 = (function (event){
return secretary.core.dispatch_BANG_(event.token);
});
goog.events.listen(G__54788_54793,G__54789_54794,G__54790_54795);

G__54787.setEnabled(true);

return G__54787;
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
