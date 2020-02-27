goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47673 = coll;
var G__47674 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47673,G__47674) : shadow.dom.lazy_native_coll_seq.call(null,G__47673,G__47674));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47703 = arguments.length;
switch (G__47703) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47708 = arguments.length;
switch (G__47708) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47715 = arguments.length;
switch (G__47715) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47722 = arguments.length;
switch (G__47722) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47734 = arguments.length;
switch (G__47734) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47735 = document;
var G__47736 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47735,G__47736);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47739 = shadow.dom.dom_node(parent);
var G__47740 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47739,G__47740);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47742 = shadow.dom.dom_node(el);
var G__47743 = cls;
return goog.dom.classlist.add(G__47742,G__47743);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47744 = shadow.dom.dom_node(el);
var G__47745 = cls;
return goog.dom.classlist.remove(G__47744,G__47745);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47748 = arguments.length;
switch (G__47748) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47749 = shadow.dom.dom_node(el);
var G__47750 = cls;
return goog.dom.classlist.toggle(G__47749,G__47750);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47753){if((e47753 instanceof Object)){
var e = e47753;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47753;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47763 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47764 = null;
var count__47765 = (0);
var i__47766 = (0);
while(true){
if((i__47766 < count__47765)){
var el = chunk__47764.cljs$core$IIndexed$_nth$arity$2(null,i__47766);
var handler_48370__$1 = ((function (seq__47763,chunk__47764,count__47765,i__47766,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47763,chunk__47764,count__47765,i__47766,el))
;
var G__47780_48371 = el;
var G__47781_48372 = cljs.core.name(ev);
var G__47782_48373 = handler_48370__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47780_48371,G__47781_48372,G__47782_48373) : shadow.dom.dom_listen.call(null,G__47780_48371,G__47781_48372,G__47782_48373));


var G__48375 = seq__47763;
var G__48376 = chunk__47764;
var G__48377 = count__47765;
var G__48378 = (i__47766 + (1));
seq__47763 = G__48375;
chunk__47764 = G__48376;
count__47765 = G__48377;
i__47766 = G__48378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47763);
if(temp__5735__auto__){
var seq__47763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47763__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47763__$1);
var G__48380 = cljs.core.chunk_rest(seq__47763__$1);
var G__48381 = c__4609__auto__;
var G__48382 = cljs.core.count(c__4609__auto__);
var G__48383 = (0);
seq__47763 = G__48380;
chunk__47764 = G__48381;
count__47765 = G__48382;
i__47766 = G__48383;
continue;
} else {
var el = cljs.core.first(seq__47763__$1);
var handler_48384__$1 = ((function (seq__47763,chunk__47764,count__47765,i__47766,el,seq__47763__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47763,chunk__47764,count__47765,i__47766,el,seq__47763__$1,temp__5735__auto__))
;
var G__47783_48386 = el;
var G__47784_48387 = cljs.core.name(ev);
var G__47785_48388 = handler_48384__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47783_48386,G__47784_48387,G__47785_48388) : shadow.dom.dom_listen.call(null,G__47783_48386,G__47784_48387,G__47785_48388));


var G__48389 = cljs.core.next(seq__47763__$1);
var G__48390 = null;
var G__48391 = (0);
var G__48392 = (0);
seq__47763 = G__48389;
chunk__47764 = G__48390;
count__47765 = G__48391;
i__47766 = G__48392;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47790 = arguments.length;
switch (G__47790) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47795 = shadow.dom.dom_node(el);
var G__47796 = cljs.core.name(ev);
var G__47797 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47795,G__47796,G__47797) : shadow.dom.dom_listen.call(null,G__47795,G__47796,G__47797));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47801 = shadow.dom.dom_node(el);
var G__47802 = cljs.core.name(ev);
var G__47803 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47801,G__47802,G__47803) : shadow.dom.dom_listen_remove.call(null,G__47801,G__47802,G__47803));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47804 = cljs.core.seq(events);
var chunk__47805 = null;
var count__47806 = (0);
var i__47807 = (0);
while(true){
if((i__47807 < count__47806)){
var vec__47816 = chunk__47805.cljs$core$IIndexed$_nth$arity$2(null,i__47807);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48401 = seq__47804;
var G__48402 = chunk__47805;
var G__48403 = count__47806;
var G__48404 = (i__47807 + (1));
seq__47804 = G__48401;
chunk__47805 = G__48402;
count__47806 = G__48403;
i__47807 = G__48404;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47804);
if(temp__5735__auto__){
var seq__47804__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47804__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47804__$1);
var G__48405 = cljs.core.chunk_rest(seq__47804__$1);
var G__48406 = c__4609__auto__;
var G__48407 = cljs.core.count(c__4609__auto__);
var G__48408 = (0);
seq__47804 = G__48405;
chunk__47805 = G__48406;
count__47806 = G__48407;
i__47807 = G__48408;
continue;
} else {
var vec__47819 = cljs.core.first(seq__47804__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48409 = cljs.core.next(seq__47804__$1);
var G__48410 = null;
var G__48411 = (0);
var G__48412 = (0);
seq__47804 = G__48409;
chunk__47805 = G__48410;
count__47806 = G__48411;
i__47807 = G__48412;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47824 = cljs.core.seq(styles);
var chunk__47825 = null;
var count__47826 = (0);
var i__47827 = (0);
while(true){
if((i__47827 < count__47826)){
var vec__47843 = chunk__47825.cljs$core$IIndexed$_nth$arity$2(null,i__47827);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47843,(1),null);
var G__47847_48418 = dom;
var G__47848_48419 = cljs.core.name(k);
var G__47849_48420 = (((v == null))?"":v);
goog.style.setStyle(G__47847_48418,G__47848_48419,G__47849_48420);


var G__48422 = seq__47824;
var G__48423 = chunk__47825;
var G__48424 = count__47826;
var G__48425 = (i__47827 + (1));
seq__47824 = G__48422;
chunk__47825 = G__48423;
count__47826 = G__48424;
i__47827 = G__48425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47824);
if(temp__5735__auto__){
var seq__47824__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47824__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47824__$1);
var G__48427 = cljs.core.chunk_rest(seq__47824__$1);
var G__48428 = c__4609__auto__;
var G__48429 = cljs.core.count(c__4609__auto__);
var G__48430 = (0);
seq__47824 = G__48427;
chunk__47825 = G__48428;
count__47826 = G__48429;
i__47827 = G__48430;
continue;
} else {
var vec__47854 = cljs.core.first(seq__47824__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47854,(1),null);
var G__47858_48431 = dom;
var G__47859_48432 = cljs.core.name(k);
var G__47860_48433 = (((v == null))?"":v);
goog.style.setStyle(G__47858_48431,G__47859_48432,G__47860_48433);


var G__48434 = cljs.core.next(seq__47824__$1);
var G__48435 = null;
var G__48436 = (0);
var G__48437 = (0);
seq__47824 = G__48434;
chunk__47825 = G__48435;
count__47826 = G__48436;
i__47827 = G__48437;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47866_48438 = key;
var G__47866_48439__$1 = (((G__47866_48438 instanceof cljs.core.Keyword))?G__47866_48438.fqn:null);
switch (G__47866_48439__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48444 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48444,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48444,"aria-");
}
})())){
el.setAttribute(ks_48444,value);
} else {
(el[ks_48444] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47870 = shadow.dom.dom_node(el);
var G__47871 = cls;
return goog.dom.classlist.contains(G__47870,G__47871);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47872){
var map__47873 = p__47872;
var map__47873__$1 = (((((!((map__47873 == null))))?(((((map__47873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47873):map__47873);
var props = map__47873__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47875 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47878 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47878,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47878;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47881 = arguments.length;
switch (G__47881) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47888){
var vec__47889 = p__47888;
var seq__47890 = cljs.core.seq(vec__47889);
var first__47891 = cljs.core.first(seq__47890);
var seq__47890__$1 = cljs.core.next(seq__47890);
var nn = first__47891;
var first__47891__$1 = cljs.core.first(seq__47890__$1);
var seq__47890__$2 = cljs.core.next(seq__47890__$1);
var np = first__47891__$1;
var nc = seq__47890__$2;
var node = vec__47889;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47894 = nn;
var G__47895 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47894,G__47895) : create_fn.call(null,G__47894,G__47895));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47896 = nn;
var G__47897 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47896,G__47897) : create_fn.call(null,G__47896,G__47897));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47900 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(1),null);
var seq__47903_48465 = cljs.core.seq(node_children);
var chunk__47904_48466 = null;
var count__47905_48467 = (0);
var i__47906_48468 = (0);
while(true){
if((i__47906_48468 < count__47905_48467)){
var child_struct_48469 = chunk__47904_48466.cljs$core$IIndexed$_nth$arity$2(null,i__47906_48468);
var children_48470 = shadow.dom.dom_node(child_struct_48469);
if(cljs.core.seq_QMARK_(children_48470)){
var seq__47933_48471 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48470));
var chunk__47935_48472 = null;
var count__47936_48473 = (0);
var i__47937_48474 = (0);
while(true){
if((i__47937_48474 < count__47936_48473)){
var child_48475 = chunk__47935_48472.cljs$core$IIndexed$_nth$arity$2(null,i__47937_48474);
if(cljs.core.truth_(child_48475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48475);


var G__48477 = seq__47933_48471;
var G__48478 = chunk__47935_48472;
var G__48479 = count__47936_48473;
var G__48480 = (i__47937_48474 + (1));
seq__47933_48471 = G__48477;
chunk__47935_48472 = G__48478;
count__47936_48473 = G__48479;
i__47937_48474 = G__48480;
continue;
} else {
var G__48481 = seq__47933_48471;
var G__48482 = chunk__47935_48472;
var G__48483 = count__47936_48473;
var G__48484 = (i__47937_48474 + (1));
seq__47933_48471 = G__48481;
chunk__47935_48472 = G__48482;
count__47936_48473 = G__48483;
i__47937_48474 = G__48484;
continue;
}
} else {
var temp__5735__auto___48486 = cljs.core.seq(seq__47933_48471);
if(temp__5735__auto___48486){
var seq__47933_48487__$1 = temp__5735__auto___48486;
if(cljs.core.chunked_seq_QMARK_(seq__47933_48487__$1)){
var c__4609__auto___48488 = cljs.core.chunk_first(seq__47933_48487__$1);
var G__48489 = cljs.core.chunk_rest(seq__47933_48487__$1);
var G__48490 = c__4609__auto___48488;
var G__48491 = cljs.core.count(c__4609__auto___48488);
var G__48492 = (0);
seq__47933_48471 = G__48489;
chunk__47935_48472 = G__48490;
count__47936_48473 = G__48491;
i__47937_48474 = G__48492;
continue;
} else {
var child_48493 = cljs.core.first(seq__47933_48487__$1);
if(cljs.core.truth_(child_48493)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48493);


var G__48494 = cljs.core.next(seq__47933_48487__$1);
var G__48495 = null;
var G__48496 = (0);
var G__48497 = (0);
seq__47933_48471 = G__48494;
chunk__47935_48472 = G__48495;
count__47936_48473 = G__48496;
i__47937_48474 = G__48497;
continue;
} else {
var G__48498 = cljs.core.next(seq__47933_48487__$1);
var G__48499 = null;
var G__48500 = (0);
var G__48501 = (0);
seq__47933_48471 = G__48498;
chunk__47935_48472 = G__48499;
count__47936_48473 = G__48500;
i__47937_48474 = G__48501;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48470);
}


var G__48502 = seq__47903_48465;
var G__48503 = chunk__47904_48466;
var G__48504 = count__47905_48467;
var G__48505 = (i__47906_48468 + (1));
seq__47903_48465 = G__48502;
chunk__47904_48466 = G__48503;
count__47905_48467 = G__48504;
i__47906_48468 = G__48505;
continue;
} else {
var temp__5735__auto___48516 = cljs.core.seq(seq__47903_48465);
if(temp__5735__auto___48516){
var seq__47903_48517__$1 = temp__5735__auto___48516;
if(cljs.core.chunked_seq_QMARK_(seq__47903_48517__$1)){
var c__4609__auto___48518 = cljs.core.chunk_first(seq__47903_48517__$1);
var G__48519 = cljs.core.chunk_rest(seq__47903_48517__$1);
var G__48520 = c__4609__auto___48518;
var G__48521 = cljs.core.count(c__4609__auto___48518);
var G__48522 = (0);
seq__47903_48465 = G__48519;
chunk__47904_48466 = G__48520;
count__47905_48467 = G__48521;
i__47906_48468 = G__48522;
continue;
} else {
var child_struct_48523 = cljs.core.first(seq__47903_48517__$1);
var children_48524 = shadow.dom.dom_node(child_struct_48523);
if(cljs.core.seq_QMARK_(children_48524)){
var seq__47947_48525 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48524));
var chunk__47949_48526 = null;
var count__47950_48527 = (0);
var i__47951_48528 = (0);
while(true){
if((i__47951_48528 < count__47950_48527)){
var child_48529 = chunk__47949_48526.cljs$core$IIndexed$_nth$arity$2(null,i__47951_48528);
if(cljs.core.truth_(child_48529)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48529);


var G__48537 = seq__47947_48525;
var G__48538 = chunk__47949_48526;
var G__48539 = count__47950_48527;
var G__48540 = (i__47951_48528 + (1));
seq__47947_48525 = G__48537;
chunk__47949_48526 = G__48538;
count__47950_48527 = G__48539;
i__47951_48528 = G__48540;
continue;
} else {
var G__48541 = seq__47947_48525;
var G__48542 = chunk__47949_48526;
var G__48543 = count__47950_48527;
var G__48544 = (i__47951_48528 + (1));
seq__47947_48525 = G__48541;
chunk__47949_48526 = G__48542;
count__47950_48527 = G__48543;
i__47951_48528 = G__48544;
continue;
}
} else {
var temp__5735__auto___48545__$1 = cljs.core.seq(seq__47947_48525);
if(temp__5735__auto___48545__$1){
var seq__47947_48546__$1 = temp__5735__auto___48545__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47947_48546__$1)){
var c__4609__auto___48547 = cljs.core.chunk_first(seq__47947_48546__$1);
var G__48548 = cljs.core.chunk_rest(seq__47947_48546__$1);
var G__48549 = c__4609__auto___48547;
var G__48550 = cljs.core.count(c__4609__auto___48547);
var G__48551 = (0);
seq__47947_48525 = G__48548;
chunk__47949_48526 = G__48549;
count__47950_48527 = G__48550;
i__47951_48528 = G__48551;
continue;
} else {
var child_48552 = cljs.core.first(seq__47947_48546__$1);
if(cljs.core.truth_(child_48552)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48552);


var G__48553 = cljs.core.next(seq__47947_48546__$1);
var G__48554 = null;
var G__48555 = (0);
var G__48556 = (0);
seq__47947_48525 = G__48553;
chunk__47949_48526 = G__48554;
count__47950_48527 = G__48555;
i__47951_48528 = G__48556;
continue;
} else {
var G__48557 = cljs.core.next(seq__47947_48546__$1);
var G__48558 = null;
var G__48559 = (0);
var G__48560 = (0);
seq__47947_48525 = G__48557;
chunk__47949_48526 = G__48558;
count__47950_48527 = G__48559;
i__47951_48528 = G__48560;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48524);
}


var G__48568 = cljs.core.next(seq__47903_48517__$1);
var G__48569 = null;
var G__48570 = (0);
var G__48571 = (0);
seq__47903_48465 = G__48568;
chunk__47904_48466 = G__48569;
count__47905_48467 = G__48570;
i__47906_48468 = G__48571;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__47970 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47970);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47974 = cljs.core.seq(node);
var chunk__47975 = null;
var count__47976 = (0);
var i__47977 = (0);
while(true){
if((i__47977 < count__47976)){
var n = chunk__47975.cljs$core$IIndexed$_nth$arity$2(null,i__47977);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48575 = seq__47974;
var G__48576 = chunk__47975;
var G__48577 = count__47976;
var G__48578 = (i__47977 + (1));
seq__47974 = G__48575;
chunk__47975 = G__48576;
count__47976 = G__48577;
i__47977 = G__48578;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47974);
if(temp__5735__auto__){
var seq__47974__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47974__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47974__$1);
var G__48579 = cljs.core.chunk_rest(seq__47974__$1);
var G__48580 = c__4609__auto__;
var G__48581 = cljs.core.count(c__4609__auto__);
var G__48582 = (0);
seq__47974 = G__48579;
chunk__47975 = G__48580;
count__47976 = G__48581;
i__47977 = G__48582;
continue;
} else {
var n = cljs.core.first(seq__47974__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48583 = cljs.core.next(seq__47974__$1);
var G__48584 = null;
var G__48585 = (0);
var G__48586 = (0);
seq__47974 = G__48583;
chunk__47975 = G__48584;
count__47976 = G__48585;
i__47977 = G__48586;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__47984 = shadow.dom.dom_node(new$);
var G__47985 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47984,G__47985);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47987 = arguments.length;
switch (G__47987) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47989 = arguments.length;
switch (G__47989) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47994 = arguments.length;
switch (G__47994) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48590 = arguments.length;
var i__4790__auto___48591 = (0);
while(true){
if((i__4790__auto___48591 < len__4789__auto___48590)){
args__4795__auto__.push((arguments[i__4790__auto___48591]));

var G__48592 = (i__4790__auto___48591 + (1));
i__4790__auto___48591 = G__48592;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47999_48593 = cljs.core.seq(nodes);
var chunk__48000_48594 = null;
var count__48001_48595 = (0);
var i__48002_48596 = (0);
while(true){
if((i__48002_48596 < count__48001_48595)){
var node_48597 = chunk__48000_48594.cljs$core$IIndexed$_nth$arity$2(null,i__48002_48596);
fragment.appendChild(shadow.dom._to_dom(node_48597));


var G__48598 = seq__47999_48593;
var G__48599 = chunk__48000_48594;
var G__48600 = count__48001_48595;
var G__48601 = (i__48002_48596 + (1));
seq__47999_48593 = G__48598;
chunk__48000_48594 = G__48599;
count__48001_48595 = G__48600;
i__48002_48596 = G__48601;
continue;
} else {
var temp__5735__auto___48602 = cljs.core.seq(seq__47999_48593);
if(temp__5735__auto___48602){
var seq__47999_48603__$1 = temp__5735__auto___48602;
if(cljs.core.chunked_seq_QMARK_(seq__47999_48603__$1)){
var c__4609__auto___48604 = cljs.core.chunk_first(seq__47999_48603__$1);
var G__48605 = cljs.core.chunk_rest(seq__47999_48603__$1);
var G__48606 = c__4609__auto___48604;
var G__48607 = cljs.core.count(c__4609__auto___48604);
var G__48608 = (0);
seq__47999_48593 = G__48605;
chunk__48000_48594 = G__48606;
count__48001_48595 = G__48607;
i__48002_48596 = G__48608;
continue;
} else {
var node_48609 = cljs.core.first(seq__47999_48603__$1);
fragment.appendChild(shadow.dom._to_dom(node_48609));


var G__48610 = cljs.core.next(seq__47999_48603__$1);
var G__48611 = null;
var G__48612 = (0);
var G__48613 = (0);
seq__47999_48593 = G__48610;
chunk__48000_48594 = G__48611;
count__48001_48595 = G__48612;
i__48002_48596 = G__48613;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47998){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47998));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48005_48614 = cljs.core.seq(scripts);
var chunk__48006_48615 = null;
var count__48007_48616 = (0);
var i__48008_48617 = (0);
while(true){
if((i__48008_48617 < count__48007_48616)){
var vec__48021_48618 = chunk__48006_48615.cljs$core$IIndexed$_nth$arity$2(null,i__48008_48617);
var script_tag_48619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48021_48618,(0),null);
var script_body_48620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48021_48618,(1),null);
eval(script_body_48620);


var G__48621 = seq__48005_48614;
var G__48622 = chunk__48006_48615;
var G__48623 = count__48007_48616;
var G__48624 = (i__48008_48617 + (1));
seq__48005_48614 = G__48621;
chunk__48006_48615 = G__48622;
count__48007_48616 = G__48623;
i__48008_48617 = G__48624;
continue;
} else {
var temp__5735__auto___48625 = cljs.core.seq(seq__48005_48614);
if(temp__5735__auto___48625){
var seq__48005_48626__$1 = temp__5735__auto___48625;
if(cljs.core.chunked_seq_QMARK_(seq__48005_48626__$1)){
var c__4609__auto___48627 = cljs.core.chunk_first(seq__48005_48626__$1);
var G__48628 = cljs.core.chunk_rest(seq__48005_48626__$1);
var G__48629 = c__4609__auto___48627;
var G__48630 = cljs.core.count(c__4609__auto___48627);
var G__48631 = (0);
seq__48005_48614 = G__48628;
chunk__48006_48615 = G__48629;
count__48007_48616 = G__48630;
i__48008_48617 = G__48631;
continue;
} else {
var vec__48028_48632 = cljs.core.first(seq__48005_48626__$1);
var script_tag_48633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48028_48632,(0),null);
var script_body_48634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48028_48632,(1),null);
eval(script_body_48634);


var G__48635 = cljs.core.next(seq__48005_48626__$1);
var G__48636 = null;
var G__48637 = (0);
var G__48638 = (0);
seq__48005_48614 = G__48635;
chunk__48006_48615 = G__48636;
count__48007_48616 = G__48637;
i__48008_48617 = G__48638;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48031){
var vec__48032 = p__48031;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48032,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48032,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48040 = shadow.dom.dom_node(el);
var G__48041 = cls;
return goog.dom.getAncestorByClass(G__48040,G__48041);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48046 = arguments.length;
switch (G__48046) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48049 = shadow.dom.dom_node(el);
var G__48050 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48049,G__48050);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48053 = shadow.dom.dom_node(el);
var G__48054 = cljs.core.name(tag);
var G__48055 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48053,G__48054,G__48055);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48058 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48058);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48060 = shadow.dom.dom_node(dom);
var G__48061 = value;
return goog.dom.forms.setValue(G__48060,G__48061);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48074 = cljs.core.seq(style_keys);
var chunk__48076 = null;
var count__48077 = (0);
var i__48078 = (0);
while(true){
if((i__48078 < count__48077)){
var it = chunk__48076.cljs$core$IIndexed$_nth$arity$2(null,i__48078);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48643 = seq__48074;
var G__48644 = chunk__48076;
var G__48645 = count__48077;
var G__48646 = (i__48078 + (1));
seq__48074 = G__48643;
chunk__48076 = G__48644;
count__48077 = G__48645;
i__48078 = G__48646;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48074);
if(temp__5735__auto__){
var seq__48074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48074__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48074__$1);
var G__48647 = cljs.core.chunk_rest(seq__48074__$1);
var G__48648 = c__4609__auto__;
var G__48649 = cljs.core.count(c__4609__auto__);
var G__48650 = (0);
seq__48074 = G__48647;
chunk__48076 = G__48648;
count__48077 = G__48649;
i__48078 = G__48650;
continue;
} else {
var it = cljs.core.first(seq__48074__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48651 = cljs.core.next(seq__48074__$1);
var G__48652 = null;
var G__48653 = (0);
var G__48654 = (0);
seq__48074 = G__48651;
chunk__48076 = G__48652;
count__48077 = G__48653;
i__48078 = G__48654;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48084,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48092 = k48084;
var G__48092__$1 = (((G__48092 instanceof cljs.core.Keyword))?G__48092.fqn:null);
switch (G__48092__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48084,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48094){
var vec__48095 = p__48094;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48095,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48095,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48083){
var self__ = this;
var G__48083__$1 = this;
return (new cljs.core.RecordIter((0),G__48083__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48099 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48099(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48085,other48086){
var self__ = this;
var this48085__$1 = this;
return (((!((other48086 == null)))) && ((this48085__$1.constructor === other48086.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48085__$1.x,other48086.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48085__$1.y,other48086.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48085__$1.__extmap,other48086.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48083){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48101 = cljs.core.keyword_identical_QMARK_;
var expr__48102 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48104 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48105 = expr__48102;
return (pred__48101.cljs$core$IFn$_invoke$arity$2 ? pred__48101.cljs$core$IFn$_invoke$arity$2(G__48104,G__48105) : pred__48101.call(null,G__48104,G__48105));
})())){
return (new shadow.dom.Coordinate(G__48083,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48106 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48107 = expr__48102;
return (pred__48101.cljs$core$IFn$_invoke$arity$2 ? pred__48101.cljs$core$IFn$_invoke$arity$2(G__48106,G__48107) : pred__48101.call(null,G__48106,G__48107));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48083,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48083),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48083){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48083,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48089){
var extmap__4478__auto__ = (function (){var G__48108 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48089,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48108);
} else {
return G__48108;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48089),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48089),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48111 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48111);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48114 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48114);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48118 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48118);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48121,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48132 = k48121;
var G__48132__$1 = (((G__48132 instanceof cljs.core.Keyword))?G__48132.fqn:null);
switch (G__48132__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48121,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48134){
var vec__48136 = p__48134;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48136,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48136,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48120){
var self__ = this;
var G__48120__$1 = this;
return (new cljs.core.RecordIter((0),G__48120__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48146 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48146(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48122,other48123){
var self__ = this;
var this48122__$1 = this;
return (((!((other48123 == null)))) && ((this48122__$1.constructor === other48123.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48122__$1.w,other48123.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48122__$1.h,other48123.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48122__$1.__extmap,other48123.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48120){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48150 = cljs.core.keyword_identical_QMARK_;
var expr__48151 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48153 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48154 = expr__48151;
return (pred__48150.cljs$core$IFn$_invoke$arity$2 ? pred__48150.cljs$core$IFn$_invoke$arity$2(G__48153,G__48154) : pred__48150.call(null,G__48153,G__48154));
})())){
return (new shadow.dom.Size(G__48120,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48157 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48158 = expr__48151;
return (pred__48150.cljs$core$IFn$_invoke$arity$2 ? pred__48150.cljs$core$IFn$_invoke$arity$2(G__48157,G__48158) : pred__48150.call(null,G__48157,G__48158));
})())){
return (new shadow.dom.Size(self__.w,G__48120,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48120),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48120){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48120,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48125){
var extmap__4478__auto__ = (function (){var G__48162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48125,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48125)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48162);
} else {
return G__48162;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48125),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48125),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48165 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48165);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__48677 = (i + (1));
var G__48678 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48677;
ret = G__48678;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48181){
var vec__48182 = p__48181;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48182,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48187 = arguments.length;
switch (G__48187) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48193_48684 = new_node;
var G__48194_48685 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48193_48684,G__48194_48685);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48197_48686 = new_node;
var G__48198_48687 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48197_48686,G__48198_48687);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48688 = ps;
var G__48689 = (i + (1));
el__$1 = G__48688;
i = G__48689;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48203 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48203);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48209 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48209);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48211 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48211);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48213 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48218_48692 = cljs.core.seq(props);
var chunk__48219_48693 = null;
var count__48220_48694 = (0);
var i__48221_48695 = (0);
while(true){
if((i__48221_48695 < count__48220_48694)){
var vec__48233_48696 = chunk__48219_48693.cljs$core$IIndexed$_nth$arity$2(null,i__48221_48695);
var k_48697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48233_48696,(0),null);
var v_48698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48233_48696,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48697);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48697),v_48698);


var G__48699 = seq__48218_48692;
var G__48700 = chunk__48219_48693;
var G__48701 = count__48220_48694;
var G__48702 = (i__48221_48695 + (1));
seq__48218_48692 = G__48699;
chunk__48219_48693 = G__48700;
count__48220_48694 = G__48701;
i__48221_48695 = G__48702;
continue;
} else {
var temp__5735__auto___48703 = cljs.core.seq(seq__48218_48692);
if(temp__5735__auto___48703){
var seq__48218_48704__$1 = temp__5735__auto___48703;
if(cljs.core.chunked_seq_QMARK_(seq__48218_48704__$1)){
var c__4609__auto___48705 = cljs.core.chunk_first(seq__48218_48704__$1);
var G__48707 = cljs.core.chunk_rest(seq__48218_48704__$1);
var G__48708 = c__4609__auto___48705;
var G__48709 = cljs.core.count(c__4609__auto___48705);
var G__48710 = (0);
seq__48218_48692 = G__48707;
chunk__48219_48693 = G__48708;
count__48220_48694 = G__48709;
i__48221_48695 = G__48710;
continue;
} else {
var vec__48239_48711 = cljs.core.first(seq__48218_48704__$1);
var k_48712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239_48711,(0),null);
var v_48713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239_48711,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48712);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48712),v_48713);


var G__48714 = cljs.core.next(seq__48218_48704__$1);
var G__48715 = null;
var G__48716 = (0);
var G__48717 = (0);
seq__48218_48692 = G__48714;
chunk__48219_48693 = G__48715;
count__48220_48694 = G__48716;
i__48221_48695 = G__48717;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48249 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(1),null);
var seq__48252_48718 = cljs.core.seq(node_children);
var chunk__48254_48719 = null;
var count__48255_48720 = (0);
var i__48256_48721 = (0);
while(true){
if((i__48256_48721 < count__48255_48720)){
var child_struct_48722 = chunk__48254_48719.cljs$core$IIndexed$_nth$arity$2(null,i__48256_48721);
if((!((child_struct_48722 == null)))){
if(typeof child_struct_48722 === 'string'){
var text_48723 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48723),child_struct_48722].join(''));
} else {
var children_48724 = shadow.dom.svg_node(child_struct_48722);
if(cljs.core.seq_QMARK_(children_48724)){
var seq__48270_48725 = cljs.core.seq(children_48724);
var chunk__48272_48726 = null;
var count__48273_48727 = (0);
var i__48274_48728 = (0);
while(true){
if((i__48274_48728 < count__48273_48727)){
var child_48729 = chunk__48272_48726.cljs$core$IIndexed$_nth$arity$2(null,i__48274_48728);
if(cljs.core.truth_(child_48729)){
node.appendChild(child_48729);


var G__48730 = seq__48270_48725;
var G__48731 = chunk__48272_48726;
var G__48732 = count__48273_48727;
var G__48733 = (i__48274_48728 + (1));
seq__48270_48725 = G__48730;
chunk__48272_48726 = G__48731;
count__48273_48727 = G__48732;
i__48274_48728 = G__48733;
continue;
} else {
var G__48734 = seq__48270_48725;
var G__48735 = chunk__48272_48726;
var G__48736 = count__48273_48727;
var G__48737 = (i__48274_48728 + (1));
seq__48270_48725 = G__48734;
chunk__48272_48726 = G__48735;
count__48273_48727 = G__48736;
i__48274_48728 = G__48737;
continue;
}
} else {
var temp__5735__auto___48739 = cljs.core.seq(seq__48270_48725);
if(temp__5735__auto___48739){
var seq__48270_48740__$1 = temp__5735__auto___48739;
if(cljs.core.chunked_seq_QMARK_(seq__48270_48740__$1)){
var c__4609__auto___48742 = cljs.core.chunk_first(seq__48270_48740__$1);
var G__48743 = cljs.core.chunk_rest(seq__48270_48740__$1);
var G__48744 = c__4609__auto___48742;
var G__48745 = cljs.core.count(c__4609__auto___48742);
var G__48746 = (0);
seq__48270_48725 = G__48743;
chunk__48272_48726 = G__48744;
count__48273_48727 = G__48745;
i__48274_48728 = G__48746;
continue;
} else {
var child_48747 = cljs.core.first(seq__48270_48740__$1);
if(cljs.core.truth_(child_48747)){
node.appendChild(child_48747);


var G__48748 = cljs.core.next(seq__48270_48740__$1);
var G__48749 = null;
var G__48750 = (0);
var G__48751 = (0);
seq__48270_48725 = G__48748;
chunk__48272_48726 = G__48749;
count__48273_48727 = G__48750;
i__48274_48728 = G__48751;
continue;
} else {
var G__48752 = cljs.core.next(seq__48270_48740__$1);
var G__48753 = null;
var G__48754 = (0);
var G__48755 = (0);
seq__48270_48725 = G__48752;
chunk__48272_48726 = G__48753;
count__48273_48727 = G__48754;
i__48274_48728 = G__48755;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48724);
}
}


var G__48756 = seq__48252_48718;
var G__48757 = chunk__48254_48719;
var G__48758 = count__48255_48720;
var G__48759 = (i__48256_48721 + (1));
seq__48252_48718 = G__48756;
chunk__48254_48719 = G__48757;
count__48255_48720 = G__48758;
i__48256_48721 = G__48759;
continue;
} else {
var G__48760 = seq__48252_48718;
var G__48761 = chunk__48254_48719;
var G__48762 = count__48255_48720;
var G__48763 = (i__48256_48721 + (1));
seq__48252_48718 = G__48760;
chunk__48254_48719 = G__48761;
count__48255_48720 = G__48762;
i__48256_48721 = G__48763;
continue;
}
} else {
var temp__5735__auto___48764 = cljs.core.seq(seq__48252_48718);
if(temp__5735__auto___48764){
var seq__48252_48765__$1 = temp__5735__auto___48764;
if(cljs.core.chunked_seq_QMARK_(seq__48252_48765__$1)){
var c__4609__auto___48766 = cljs.core.chunk_first(seq__48252_48765__$1);
var G__48767 = cljs.core.chunk_rest(seq__48252_48765__$1);
var G__48768 = c__4609__auto___48766;
var G__48769 = cljs.core.count(c__4609__auto___48766);
var G__48770 = (0);
seq__48252_48718 = G__48767;
chunk__48254_48719 = G__48768;
count__48255_48720 = G__48769;
i__48256_48721 = G__48770;
continue;
} else {
var child_struct_48771 = cljs.core.first(seq__48252_48765__$1);
if((!((child_struct_48771 == null)))){
if(typeof child_struct_48771 === 'string'){
var text_48773 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48773),child_struct_48771].join(''));
} else {
var children_48774 = shadow.dom.svg_node(child_struct_48771);
if(cljs.core.seq_QMARK_(children_48774)){
var seq__48277_48775 = cljs.core.seq(children_48774);
var chunk__48279_48776 = null;
var count__48280_48777 = (0);
var i__48281_48778 = (0);
while(true){
if((i__48281_48778 < count__48280_48777)){
var child_48779 = chunk__48279_48776.cljs$core$IIndexed$_nth$arity$2(null,i__48281_48778);
if(cljs.core.truth_(child_48779)){
node.appendChild(child_48779);


var G__48780 = seq__48277_48775;
var G__48781 = chunk__48279_48776;
var G__48782 = count__48280_48777;
var G__48783 = (i__48281_48778 + (1));
seq__48277_48775 = G__48780;
chunk__48279_48776 = G__48781;
count__48280_48777 = G__48782;
i__48281_48778 = G__48783;
continue;
} else {
var G__48784 = seq__48277_48775;
var G__48785 = chunk__48279_48776;
var G__48786 = count__48280_48777;
var G__48787 = (i__48281_48778 + (1));
seq__48277_48775 = G__48784;
chunk__48279_48776 = G__48785;
count__48280_48777 = G__48786;
i__48281_48778 = G__48787;
continue;
}
} else {
var temp__5735__auto___48792__$1 = cljs.core.seq(seq__48277_48775);
if(temp__5735__auto___48792__$1){
var seq__48277_48793__$1 = temp__5735__auto___48792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48277_48793__$1)){
var c__4609__auto___48794 = cljs.core.chunk_first(seq__48277_48793__$1);
var G__48795 = cljs.core.chunk_rest(seq__48277_48793__$1);
var G__48796 = c__4609__auto___48794;
var G__48797 = cljs.core.count(c__4609__auto___48794);
var G__48798 = (0);
seq__48277_48775 = G__48795;
chunk__48279_48776 = G__48796;
count__48280_48777 = G__48797;
i__48281_48778 = G__48798;
continue;
} else {
var child_48800 = cljs.core.first(seq__48277_48793__$1);
if(cljs.core.truth_(child_48800)){
node.appendChild(child_48800);


var G__48801 = cljs.core.next(seq__48277_48793__$1);
var G__48802 = null;
var G__48803 = (0);
var G__48804 = (0);
seq__48277_48775 = G__48801;
chunk__48279_48776 = G__48802;
count__48280_48777 = G__48803;
i__48281_48778 = G__48804;
continue;
} else {
var G__48805 = cljs.core.next(seq__48277_48793__$1);
var G__48806 = null;
var G__48807 = (0);
var G__48808 = (0);
seq__48277_48775 = G__48805;
chunk__48279_48776 = G__48806;
count__48280_48777 = G__48807;
i__48281_48778 = G__48808;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48774);
}
}


var G__48809 = cljs.core.next(seq__48252_48765__$1);
var G__48810 = null;
var G__48811 = (0);
var G__48812 = (0);
seq__48252_48718 = G__48809;
chunk__48254_48719 = G__48810;
count__48255_48720 = G__48811;
i__48256_48721 = G__48812;
continue;
} else {
var G__48813 = cljs.core.next(seq__48252_48765__$1);
var G__48814 = null;
var G__48815 = (0);
var G__48816 = (0);
seq__48252_48718 = G__48813;
chunk__48254_48719 = G__48814;
count__48255_48720 = G__48815;
i__48256_48721 = G__48816;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48292_48817 = shadow.dom._to_svg;
var G__48293_48818 = "string";
var G__48294_48819 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48292_48817,G__48293_48818,G__48294_48819);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48298_48820 = shadow.dom._to_svg;
var G__48299_48821 = "null";
var G__48300_48822 = (function (_){
return null;
});
goog.object.set(G__48298_48820,G__48299_48821,G__48300_48822);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48823 = arguments.length;
var i__4790__auto___48824 = (0);
while(true){
if((i__4790__auto___48824 < len__4789__auto___48823)){
args__4795__auto__.push((arguments[i__4790__auto___48824]));

var G__48825 = (i__4790__auto___48824 + (1));
i__4790__auto___48824 = G__48825;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48303){
var G__48304 = cljs.core.first(seq48303);
var seq48303__$1 = cljs.core.next(seq48303);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48304,seq48303__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48311 = arguments.length;
switch (G__48311) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48316_48827 = shadow.dom.dom_node(el);
var G__48317_48828 = cljs.core.name(event);
var G__48318_48829 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48316_48827,G__48317_48828,G__48318_48829) : shadow.dom.dom_listen.call(null,G__48316_48827,G__48317_48828,G__48318_48829));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46042__auto___48830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_48324){
var state_val_48325 = (state_48324[(1)]);
if((state_val_48325 === (1))){
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48324__$1,(2),once_or_cleanup);
} else {
if((state_val_48325 === (2))){
var inst_48321 = (state_48324[(2)]);
var inst_48322 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48324__$1 = (function (){var statearr_48328 = state_48324;
(statearr_48328[(7)] = inst_48321);

return statearr_48328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48324__$1,inst_48322);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45867__auto__ = null;
var shadow$dom$state_machine__45867__auto____0 = (function (){
var statearr_48331 = [null,null,null,null,null,null,null,null];
(statearr_48331[(0)] = shadow$dom$state_machine__45867__auto__);

(statearr_48331[(1)] = (1));

return statearr_48331;
});
var shadow$dom$state_machine__45867__auto____1 = (function (state_48324){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_48324);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e48332){if((e48332 instanceof Object)){
var ex__45870__auto__ = e48332;
var statearr_48333_48831 = state_48324;
(statearr_48333_48831[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48832 = state_48324;
state_48324 = G__48832;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
shadow$dom$state_machine__45867__auto__ = function(state_48324){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45867__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45867__auto____1.call(this,state_48324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45867__auto____0;
shadow$dom$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45867__auto____1;
return shadow$dom$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_48336 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_48336[(6)] = c__46042__auto___48830);

return statearr_48336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
