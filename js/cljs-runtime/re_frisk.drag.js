goog.provide('re_frisk.drag');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('goog.events.EventType');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.drag !== 'undefined') && (typeof re_frisk.drag.draggable !== 'undefined')){
} else {
re_frisk.drag.draggable = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.drag.get_client_rect = (function re_frisk$drag$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
re_frisk.drag.mouse_move_handler = (function re_frisk$drag$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_(re_frisk.drag.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
re_frisk.drag.mouse_up_handler = (function re_frisk$drag$mouse_up_handler(on_move){
return (function re_frisk$drag$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk.drag.mouse_down_handler = (function re_frisk$drag$mouse_down_handler(e){
var map__43125 = re_frisk.drag.get_client_rect(e);
var map__43125__$1 = (((((!((map__43125 == null))))?(((((map__43125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43125):map__43125);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43125__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43125__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = re_frisk.drag.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__43141 = window;
var G__43142 = goog.events.EventType.MOUSEUP;
var G__43143 = re_frisk.drag.mouse_up_handler(on_move);
return goog.events.listen(G__43141,G__43142,G__43143);
});

//# sourceMappingURL=re_frisk.drag.js.map
