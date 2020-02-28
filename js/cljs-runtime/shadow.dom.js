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
return cljs.core.cons((coll[idx]),(function (){var G__48571 = coll;
var G__48572 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48571,G__48572) : shadow.dom.lazy_native_coll_seq.call(null,G__48571,G__48572));
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
var G__48597 = arguments.length;
switch (G__48597) {
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
var G__48605 = arguments.length;
switch (G__48605) {
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
var G__48618 = arguments.length;
switch (G__48618) {
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
var G__48635 = arguments.length;
switch (G__48635) {
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
var G__48641 = arguments.length;
switch (G__48641) {
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
var G__48642 = document;
var G__48643 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48642,G__48643);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48646 = shadow.dom.dom_node(parent);
var G__48647 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48646,G__48647);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48650 = shadow.dom.dom_node(el);
var G__48651 = cls;
return goog.dom.classlist.add(G__48650,G__48651);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48653 = shadow.dom.dom_node(el);
var G__48654 = cls;
return goog.dom.classlist.remove(G__48653,G__48654);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48662 = arguments.length;
switch (G__48662) {
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
var G__48669 = shadow.dom.dom_node(el);
var G__48670 = cls;
return goog.dom.classlist.toggle(G__48669,G__48670);
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
}catch (e48684){if((e48684 instanceof Object)){
var e = e48684;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48684;

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
var seq__48691 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48692 = null;
var count__48693 = (0);
var i__48694 = (0);
while(true){
if((i__48694 < count__48693)){
var el = chunk__48692.cljs$core$IIndexed$_nth$arity$2(null,i__48694);
var handler_49860__$1 = ((function (seq__48691,chunk__48692,count__48693,i__48694,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48691,chunk__48692,count__48693,i__48694,el))
;
var G__48714_49862 = el;
var G__48715_49863 = cljs.core.name(ev);
var G__48716_49864 = handler_49860__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48714_49862,G__48715_49863,G__48716_49864) : shadow.dom.dom_listen.call(null,G__48714_49862,G__48715_49863,G__48716_49864));


var G__49867 = seq__48691;
var G__49868 = chunk__48692;
var G__49869 = count__48693;
var G__49870 = (i__48694 + (1));
seq__48691 = G__49867;
chunk__48692 = G__49868;
count__48693 = G__49869;
i__48694 = G__49870;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48691);
if(temp__5735__auto__){
var seq__48691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48691__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48691__$1);
var G__49876 = cljs.core.chunk_rest(seq__48691__$1);
var G__49877 = c__4609__auto__;
var G__49878 = cljs.core.count(c__4609__auto__);
var G__49879 = (0);
seq__48691 = G__49876;
chunk__48692 = G__49877;
count__48693 = G__49878;
i__48694 = G__49879;
continue;
} else {
var el = cljs.core.first(seq__48691__$1);
var handler_49881__$1 = ((function (seq__48691,chunk__48692,count__48693,i__48694,el,seq__48691__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48691,chunk__48692,count__48693,i__48694,el,seq__48691__$1,temp__5735__auto__))
;
var G__48721_49888 = el;
var G__48722_49889 = cljs.core.name(ev);
var G__48723_49890 = handler_49881__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48721_49888,G__48722_49889,G__48723_49890) : shadow.dom.dom_listen.call(null,G__48721_49888,G__48722_49889,G__48723_49890));


var G__49893 = cljs.core.next(seq__48691__$1);
var G__49894 = null;
var G__49895 = (0);
var G__49896 = (0);
seq__48691 = G__49893;
chunk__48692 = G__49894;
count__48693 = G__49895;
i__48694 = G__49896;
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
var G__48738 = arguments.length;
switch (G__48738) {
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
var G__48752 = shadow.dom.dom_node(el);
var G__48753 = cljs.core.name(ev);
var G__48754 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48752,G__48753,G__48754) : shadow.dom.dom_listen.call(null,G__48752,G__48753,G__48754));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48759 = shadow.dom.dom_node(el);
var G__48760 = cljs.core.name(ev);
var G__48761 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48759,G__48760,G__48761) : shadow.dom.dom_listen_remove.call(null,G__48759,G__48760,G__48761));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48764 = cljs.core.seq(events);
var chunk__48765 = null;
var count__48766 = (0);
var i__48767 = (0);
while(true){
if((i__48767 < count__48766)){
var vec__48785 = chunk__48765.cljs$core$IIndexed$_nth$arity$2(null,i__48767);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48785,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49917 = seq__48764;
var G__49918 = chunk__48765;
var G__49919 = count__48766;
var G__49920 = (i__48767 + (1));
seq__48764 = G__49917;
chunk__48765 = G__49918;
count__48766 = G__49919;
i__48767 = G__49920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48764);
if(temp__5735__auto__){
var seq__48764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48764__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48764__$1);
var G__49926 = cljs.core.chunk_rest(seq__48764__$1);
var G__49927 = c__4609__auto__;
var G__49928 = cljs.core.count(c__4609__auto__);
var G__49929 = (0);
seq__48764 = G__49926;
chunk__48765 = G__49927;
count__48766 = G__49928;
i__48767 = G__49929;
continue;
} else {
var vec__48791 = cljs.core.first(seq__48764__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49933 = cljs.core.next(seq__48764__$1);
var G__49934 = null;
var G__49935 = (0);
var G__49936 = (0);
seq__48764 = G__49933;
chunk__48765 = G__49934;
count__48766 = G__49935;
i__48767 = G__49936;
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
var seq__48798 = cljs.core.seq(styles);
var chunk__48799 = null;
var count__48800 = (0);
var i__48801 = (0);
while(true){
if((i__48801 < count__48800)){
var vec__48824 = chunk__48799.cljs$core$IIndexed$_nth$arity$2(null,i__48801);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48824,(1),null);
var G__48827_49942 = dom;
var G__48828_49943 = cljs.core.name(k);
var G__48829_49944 = (((v == null))?"":v);
goog.style.setStyle(G__48827_49942,G__48828_49943,G__48829_49944);


var G__49946 = seq__48798;
var G__49947 = chunk__48799;
var G__49948 = count__48800;
var G__49949 = (i__48801 + (1));
seq__48798 = G__49946;
chunk__48799 = G__49947;
count__48800 = G__49948;
i__48801 = G__49949;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48798);
if(temp__5735__auto__){
var seq__48798__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48798__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48798__$1);
var G__49955 = cljs.core.chunk_rest(seq__48798__$1);
var G__49956 = c__4609__auto__;
var G__49957 = cljs.core.count(c__4609__auto__);
var G__49958 = (0);
seq__48798 = G__49955;
chunk__48799 = G__49956;
count__48800 = G__49957;
i__48801 = G__49958;
continue;
} else {
var vec__48839 = cljs.core.first(seq__48798__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48839,(1),null);
var G__48843_49962 = dom;
var G__48844_49963 = cljs.core.name(k);
var G__48845_49964 = (((v == null))?"":v);
goog.style.setStyle(G__48843_49962,G__48844_49963,G__48845_49964);


var G__49965 = cljs.core.next(seq__48798__$1);
var G__49966 = null;
var G__49967 = (0);
var G__49968 = (0);
seq__48798 = G__49965;
chunk__48799 = G__49966;
count__48800 = G__49967;
i__48801 = G__49968;
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
var G__48854_49972 = key;
var G__48854_49973__$1 = (((G__48854_49972 instanceof cljs.core.Keyword))?G__48854_49972.fqn:null);
switch (G__48854_49973__$1) {
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
var ks_49980 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_49980,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_49980,"aria-");
}
})())){
el.setAttribute(ks_49980,value);
} else {
(el[ks_49980] = value);
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
var G__48883 = shadow.dom.dom_node(el);
var G__48884 = cls;
return goog.dom.classlist.contains(G__48883,G__48884);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48906){
var map__48908 = p__48906;
var map__48908__$1 = (((((!((map__48908 == null))))?(((((map__48908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48908):map__48908);
var props = map__48908__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48908__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48918 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48922 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48922,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48922;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48932 = arguments.length;
switch (G__48932) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48964){
var vec__48965 = p__48964;
var seq__48966 = cljs.core.seq(vec__48965);
var first__48967 = cljs.core.first(seq__48966);
var seq__48966__$1 = cljs.core.next(seq__48966);
var nn = first__48967;
var first__48967__$1 = cljs.core.first(seq__48966__$1);
var seq__48966__$2 = cljs.core.next(seq__48966__$1);
var np = first__48967__$1;
var nc = seq__48966__$2;
var node = vec__48965;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48979 = nn;
var G__48980 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48979,G__48980) : create_fn.call(null,G__48979,G__48980));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48981 = nn;
var G__48982 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48981,G__48982) : create_fn.call(null,G__48981,G__48982));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48995 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48995,(1),null);
var seq__48998_50003 = cljs.core.seq(node_children);
var chunk__48999_50004 = null;
var count__49000_50005 = (0);
var i__49001_50006 = (0);
while(true){
if((i__49001_50006 < count__49000_50005)){
var child_struct_50007 = chunk__48999_50004.cljs$core$IIndexed$_nth$arity$2(null,i__49001_50006);
var children_50010 = shadow.dom.dom_node(child_struct_50007);
if(cljs.core.seq_QMARK_(children_50010)){
var seq__49056_50011 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50010));
var chunk__49059_50012 = null;
var count__49060_50013 = (0);
var i__49061_50014 = (0);
while(true){
if((i__49061_50014 < count__49060_50013)){
var child_50019 = chunk__49059_50012.cljs$core$IIndexed$_nth$arity$2(null,i__49061_50014);
if(cljs.core.truth_(child_50019)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50019);


var G__50020 = seq__49056_50011;
var G__50021 = chunk__49059_50012;
var G__50022 = count__49060_50013;
var G__50023 = (i__49061_50014 + (1));
seq__49056_50011 = G__50020;
chunk__49059_50012 = G__50021;
count__49060_50013 = G__50022;
i__49061_50014 = G__50023;
continue;
} else {
var G__50024 = seq__49056_50011;
var G__50025 = chunk__49059_50012;
var G__50026 = count__49060_50013;
var G__50027 = (i__49061_50014 + (1));
seq__49056_50011 = G__50024;
chunk__49059_50012 = G__50025;
count__49060_50013 = G__50026;
i__49061_50014 = G__50027;
continue;
}
} else {
var temp__5735__auto___50028 = cljs.core.seq(seq__49056_50011);
if(temp__5735__auto___50028){
var seq__49056_50029__$1 = temp__5735__auto___50028;
if(cljs.core.chunked_seq_QMARK_(seq__49056_50029__$1)){
var c__4609__auto___50032 = cljs.core.chunk_first(seq__49056_50029__$1);
var G__50033 = cljs.core.chunk_rest(seq__49056_50029__$1);
var G__50034 = c__4609__auto___50032;
var G__50035 = cljs.core.count(c__4609__auto___50032);
var G__50036 = (0);
seq__49056_50011 = G__50033;
chunk__49059_50012 = G__50034;
count__49060_50013 = G__50035;
i__49061_50014 = G__50036;
continue;
} else {
var child_50037 = cljs.core.first(seq__49056_50029__$1);
if(cljs.core.truth_(child_50037)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50037);


var G__50038 = cljs.core.next(seq__49056_50029__$1);
var G__50039 = null;
var G__50040 = (0);
var G__50041 = (0);
seq__49056_50011 = G__50038;
chunk__49059_50012 = G__50039;
count__49060_50013 = G__50040;
i__49061_50014 = G__50041;
continue;
} else {
var G__50042 = cljs.core.next(seq__49056_50029__$1);
var G__50043 = null;
var G__50044 = (0);
var G__50045 = (0);
seq__49056_50011 = G__50042;
chunk__49059_50012 = G__50043;
count__49060_50013 = G__50044;
i__49061_50014 = G__50045;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50010);
}


var G__50046 = seq__48998_50003;
var G__50047 = chunk__48999_50004;
var G__50048 = count__49000_50005;
var G__50049 = (i__49001_50006 + (1));
seq__48998_50003 = G__50046;
chunk__48999_50004 = G__50047;
count__49000_50005 = G__50048;
i__49001_50006 = G__50049;
continue;
} else {
var temp__5735__auto___50051 = cljs.core.seq(seq__48998_50003);
if(temp__5735__auto___50051){
var seq__48998_50052__$1 = temp__5735__auto___50051;
if(cljs.core.chunked_seq_QMARK_(seq__48998_50052__$1)){
var c__4609__auto___50053 = cljs.core.chunk_first(seq__48998_50052__$1);
var G__50054 = cljs.core.chunk_rest(seq__48998_50052__$1);
var G__50055 = c__4609__auto___50053;
var G__50056 = cljs.core.count(c__4609__auto___50053);
var G__50057 = (0);
seq__48998_50003 = G__50054;
chunk__48999_50004 = G__50055;
count__49000_50005 = G__50056;
i__49001_50006 = G__50057;
continue;
} else {
var child_struct_50058 = cljs.core.first(seq__48998_50052__$1);
var children_50059 = shadow.dom.dom_node(child_struct_50058);
if(cljs.core.seq_QMARK_(children_50059)){
var seq__49081_50060 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50059));
var chunk__49083_50061 = null;
var count__49084_50062 = (0);
var i__49085_50063 = (0);
while(true){
if((i__49085_50063 < count__49084_50062)){
var child_50065 = chunk__49083_50061.cljs$core$IIndexed$_nth$arity$2(null,i__49085_50063);
if(cljs.core.truth_(child_50065)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50065);


var G__50066 = seq__49081_50060;
var G__50067 = chunk__49083_50061;
var G__50068 = count__49084_50062;
var G__50069 = (i__49085_50063 + (1));
seq__49081_50060 = G__50066;
chunk__49083_50061 = G__50067;
count__49084_50062 = G__50068;
i__49085_50063 = G__50069;
continue;
} else {
var G__50075 = seq__49081_50060;
var G__50076 = chunk__49083_50061;
var G__50077 = count__49084_50062;
var G__50078 = (i__49085_50063 + (1));
seq__49081_50060 = G__50075;
chunk__49083_50061 = G__50076;
count__49084_50062 = G__50077;
i__49085_50063 = G__50078;
continue;
}
} else {
var temp__5735__auto___50080__$1 = cljs.core.seq(seq__49081_50060);
if(temp__5735__auto___50080__$1){
var seq__49081_50081__$1 = temp__5735__auto___50080__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49081_50081__$1)){
var c__4609__auto___50082 = cljs.core.chunk_first(seq__49081_50081__$1);
var G__50083 = cljs.core.chunk_rest(seq__49081_50081__$1);
var G__50084 = c__4609__auto___50082;
var G__50085 = cljs.core.count(c__4609__auto___50082);
var G__50086 = (0);
seq__49081_50060 = G__50083;
chunk__49083_50061 = G__50084;
count__49084_50062 = G__50085;
i__49085_50063 = G__50086;
continue;
} else {
var child_50089 = cljs.core.first(seq__49081_50081__$1);
if(cljs.core.truth_(child_50089)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50089);


var G__50090 = cljs.core.next(seq__49081_50081__$1);
var G__50091 = null;
var G__50092 = (0);
var G__50093 = (0);
seq__49081_50060 = G__50090;
chunk__49083_50061 = G__50091;
count__49084_50062 = G__50092;
i__49085_50063 = G__50093;
continue;
} else {
var G__50094 = cljs.core.next(seq__49081_50081__$1);
var G__50095 = null;
var G__50096 = (0);
var G__50097 = (0);
seq__49081_50060 = G__50094;
chunk__49083_50061 = G__50095;
count__49084_50062 = G__50096;
i__49085_50063 = G__50097;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50059);
}


var G__50100 = cljs.core.next(seq__48998_50052__$1);
var G__50101 = null;
var G__50102 = (0);
var G__50103 = (0);
seq__48998_50003 = G__50100;
chunk__48999_50004 = G__50101;
count__49000_50005 = G__50102;
i__49001_50006 = G__50103;
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
var G__49104 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__49104);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49106 = cljs.core.seq(node);
var chunk__49107 = null;
var count__49108 = (0);
var i__49109 = (0);
while(true){
if((i__49109 < count__49108)){
var n = chunk__49107.cljs$core$IIndexed$_nth$arity$2(null,i__49109);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50116 = seq__49106;
var G__50117 = chunk__49107;
var G__50118 = count__49108;
var G__50119 = (i__49109 + (1));
seq__49106 = G__50116;
chunk__49107 = G__50117;
count__49108 = G__50118;
i__49109 = G__50119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49106);
if(temp__5735__auto__){
var seq__49106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49106__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49106__$1);
var G__50120 = cljs.core.chunk_rest(seq__49106__$1);
var G__50121 = c__4609__auto__;
var G__50122 = cljs.core.count(c__4609__auto__);
var G__50123 = (0);
seq__49106 = G__50120;
chunk__49107 = G__50121;
count__49108 = G__50122;
i__49109 = G__50123;
continue;
} else {
var n = cljs.core.first(seq__49106__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50128 = cljs.core.next(seq__49106__$1);
var G__50129 = null;
var G__50130 = (0);
var G__50131 = (0);
seq__49106 = G__50128;
chunk__49107 = G__50129;
count__49108 = G__50130;
i__49109 = G__50131;
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
var G__49114 = shadow.dom.dom_node(new$);
var G__49115 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__49114,G__49115);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49120 = arguments.length;
switch (G__49120) {
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
var G__49126 = arguments.length;
switch (G__49126) {
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
var G__49142 = arguments.length;
switch (G__49142) {
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
var len__4789__auto___50150 = arguments.length;
var i__4790__auto___50151 = (0);
while(true){
if((i__4790__auto___50151 < len__4789__auto___50150)){
args__4795__auto__.push((arguments[i__4790__auto___50151]));

var G__50152 = (i__4790__auto___50151 + (1));
i__4790__auto___50151 = G__50152;
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
var seq__49164_50153 = cljs.core.seq(nodes);
var chunk__49165_50154 = null;
var count__49166_50155 = (0);
var i__49167_50156 = (0);
while(true){
if((i__49167_50156 < count__49166_50155)){
var node_50157 = chunk__49165_50154.cljs$core$IIndexed$_nth$arity$2(null,i__49167_50156);
fragment.appendChild(shadow.dom._to_dom(node_50157));


var G__50159 = seq__49164_50153;
var G__50160 = chunk__49165_50154;
var G__50161 = count__49166_50155;
var G__50162 = (i__49167_50156 + (1));
seq__49164_50153 = G__50159;
chunk__49165_50154 = G__50160;
count__49166_50155 = G__50161;
i__49167_50156 = G__50162;
continue;
} else {
var temp__5735__auto___50163 = cljs.core.seq(seq__49164_50153);
if(temp__5735__auto___50163){
var seq__49164_50165__$1 = temp__5735__auto___50163;
if(cljs.core.chunked_seq_QMARK_(seq__49164_50165__$1)){
var c__4609__auto___50166 = cljs.core.chunk_first(seq__49164_50165__$1);
var G__50167 = cljs.core.chunk_rest(seq__49164_50165__$1);
var G__50168 = c__4609__auto___50166;
var G__50169 = cljs.core.count(c__4609__auto___50166);
var G__50170 = (0);
seq__49164_50153 = G__50167;
chunk__49165_50154 = G__50168;
count__49166_50155 = G__50169;
i__49167_50156 = G__50170;
continue;
} else {
var node_50171 = cljs.core.first(seq__49164_50165__$1);
fragment.appendChild(shadow.dom._to_dom(node_50171));


var G__50172 = cljs.core.next(seq__49164_50165__$1);
var G__50173 = null;
var G__50174 = (0);
var G__50175 = (0);
seq__49164_50153 = G__50172;
chunk__49165_50154 = G__50173;
count__49166_50155 = G__50174;
i__49167_50156 = G__50175;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49161){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49161));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49187_50179 = cljs.core.seq(scripts);
var chunk__49188_50180 = null;
var count__49189_50181 = (0);
var i__49190_50182 = (0);
while(true){
if((i__49190_50182 < count__49189_50181)){
var vec__49199_50183 = chunk__49188_50180.cljs$core$IIndexed$_nth$arity$2(null,i__49190_50182);
var script_tag_50184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49199_50183,(0),null);
var script_body_50185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49199_50183,(1),null);
eval(script_body_50185);


var G__50187 = seq__49187_50179;
var G__50188 = chunk__49188_50180;
var G__50189 = count__49189_50181;
var G__50190 = (i__49190_50182 + (1));
seq__49187_50179 = G__50187;
chunk__49188_50180 = G__50188;
count__49189_50181 = G__50189;
i__49190_50182 = G__50190;
continue;
} else {
var temp__5735__auto___50191 = cljs.core.seq(seq__49187_50179);
if(temp__5735__auto___50191){
var seq__49187_50194__$1 = temp__5735__auto___50191;
if(cljs.core.chunked_seq_QMARK_(seq__49187_50194__$1)){
var c__4609__auto___50195 = cljs.core.chunk_first(seq__49187_50194__$1);
var G__50196 = cljs.core.chunk_rest(seq__49187_50194__$1);
var G__50197 = c__4609__auto___50195;
var G__50198 = cljs.core.count(c__4609__auto___50195);
var G__50199 = (0);
seq__49187_50179 = G__50196;
chunk__49188_50180 = G__50197;
count__49189_50181 = G__50198;
i__49190_50182 = G__50199;
continue;
} else {
var vec__49203_50200 = cljs.core.first(seq__49187_50194__$1);
var script_tag_50201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203_50200,(0),null);
var script_body_50202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49203_50200,(1),null);
eval(script_body_50202);


var G__50204 = cljs.core.next(seq__49187_50194__$1);
var G__50205 = null;
var G__50206 = (0);
var G__50207 = (0);
seq__49187_50179 = G__50204;
chunk__49188_50180 = G__50205;
count__49189_50181 = G__50206;
i__49190_50182 = G__50207;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49208){
var vec__49210 = p__49208;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49210,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49210,(1),null);
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
var G__49219 = shadow.dom.dom_node(el);
var G__49220 = cls;
return goog.dom.getAncestorByClass(G__49219,G__49220);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49225 = arguments.length;
switch (G__49225) {
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
var G__49227 = shadow.dom.dom_node(el);
var G__49228 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__49227,G__49228);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__49229 = shadow.dom.dom_node(el);
var G__49230 = cljs.core.name(tag);
var G__49231 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__49229,G__49230,G__49231);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__49239 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__49239);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__49240 = shadow.dom.dom_node(dom);
var G__49241 = value;
return goog.dom.forms.setValue(G__49240,G__49241);
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
var seq__49251 = cljs.core.seq(style_keys);
var chunk__49252 = null;
var count__49253 = (0);
var i__49254 = (0);
while(true){
if((i__49254 < count__49253)){
var it = chunk__49252.cljs$core$IIndexed$_nth$arity$2(null,i__49254);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50243 = seq__49251;
var G__50244 = chunk__49252;
var G__50245 = count__49253;
var G__50246 = (i__49254 + (1));
seq__49251 = G__50243;
chunk__49252 = G__50244;
count__49253 = G__50245;
i__49254 = G__50246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49251);
if(temp__5735__auto__){
var seq__49251__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49251__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49251__$1);
var G__50247 = cljs.core.chunk_rest(seq__49251__$1);
var G__50248 = c__4609__auto__;
var G__50249 = cljs.core.count(c__4609__auto__);
var G__50250 = (0);
seq__49251 = G__50247;
chunk__49252 = G__50248;
count__49253 = G__50249;
i__49254 = G__50250;
continue;
} else {
var it = cljs.core.first(seq__49251__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50253 = cljs.core.next(seq__49251__$1);
var G__50254 = null;
var G__50255 = (0);
var G__50256 = (0);
seq__49251 = G__50253;
chunk__49252 = G__50254;
count__49253 = G__50255;
i__49254 = G__50256;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k49258,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__49262 = k49258;
var G__49262__$1 = (((G__49262 instanceof cljs.core.Keyword))?G__49262.fqn:null);
switch (G__49262__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49258,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__49266){
var vec__49267 = p__49266;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49267,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49267,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49257){
var self__ = this;
var G__49257__$1 = this;
return (new cljs.core.RecordIter((0),G__49257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__49273 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__49273(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49259,other49260){
var self__ = this;
var this49259__$1 = this;
return (((!((other49260 == null)))) && ((this49259__$1.constructor === other49260.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49259__$1.x,other49260.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49259__$1.y,other49260.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49259__$1.__extmap,other49260.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__49257){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__49277 = cljs.core.keyword_identical_QMARK_;
var expr__49278 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__49280 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__49281 = expr__49278;
return (pred__49277.cljs$core$IFn$_invoke$arity$2 ? pred__49277.cljs$core$IFn$_invoke$arity$2(G__49280,G__49281) : pred__49277.call(null,G__49280,G__49281));
})())){
return (new shadow.dom.Coordinate(G__49257,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49282 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__49283 = expr__49278;
return (pred__49277.cljs$core$IFn$_invoke$arity$2 ? pred__49277.cljs$core$IFn$_invoke$arity$2(G__49282,G__49283) : pred__49277.call(null,G__49282,G__49283));
})())){
return (new shadow.dom.Coordinate(self__.x,G__49257,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__49257),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__49257){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49257,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49261){
var extmap__4478__auto__ = (function (){var G__49292 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49261,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49261)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49292);
} else {
return G__49292;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49261),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49261),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__49293 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__49293);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__49294 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__49294);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__49295 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__49295);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k49297,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__49305 = k49297;
var G__49305__$1 = (((G__49305 instanceof cljs.core.Keyword))?G__49305.fqn:null);
switch (G__49305__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49297,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__49310){
var vec__49311 = p__49310;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49311,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49311,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49296){
var self__ = this;
var G__49296__$1 = this;
return (new cljs.core.RecordIter((0),G__49296__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__49333 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__49333(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49298,other49299){
var self__ = this;
var this49298__$1 = this;
return (((!((other49299 == null)))) && ((this49298__$1.constructor === other49299.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49298__$1.w,other49299.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49298__$1.h,other49299.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49298__$1.__extmap,other49299.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__49296){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__49339 = cljs.core.keyword_identical_QMARK_;
var expr__49340 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__49342 = new cljs.core.Keyword(null,"w","w",354169001);
var G__49343 = expr__49340;
return (pred__49339.cljs$core$IFn$_invoke$arity$2 ? pred__49339.cljs$core$IFn$_invoke$arity$2(G__49342,G__49343) : pred__49339.call(null,G__49342,G__49343));
})())){
return (new shadow.dom.Size(G__49296,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49345 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__49346 = expr__49340;
return (pred__49339.cljs$core$IFn$_invoke$arity$2 ? pred__49339.cljs$core$IFn$_invoke$arity$2(G__49345,G__49346) : pred__49339.call(null,G__49345,G__49346));
})())){
return (new shadow.dom.Size(self__.w,G__49296,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__49296),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__49296){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49296,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49300){
var extmap__4478__auto__ = (function (){var G__49363 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49300,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49300)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49363);
} else {
return G__49363;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49300),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49300),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__49366 = shadow.dom.dom_node(el);
return goog.style.getSize(G__49366);
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
var G__50344 = (i + (1));
var G__50345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50344;
ret = G__50345;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49402){
var vec__49403 = p__49402;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49403,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49409 = arguments.length;
switch (G__49409) {
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
var G__49422_50357 = new_node;
var G__49423_50358 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__49422_50357,G__49423_50358);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__49431_50361 = new_node;
var G__49432_50362 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__49431_50361,G__49432_50362);

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
var G__50368 = ps;
var G__50369 = (i + (1));
el__$1 = G__50368;
i = G__50369;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__49437 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__49437);
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
var G__49438 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__49438);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__49439 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__49439);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49441 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49441,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49441,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49441,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49450_50381 = cljs.core.seq(props);
var chunk__49451_50382 = null;
var count__49452_50383 = (0);
var i__49453_50384 = (0);
while(true){
if((i__49453_50384 < count__49452_50383)){
var vec__49488_50385 = chunk__49451_50382.cljs$core$IIndexed$_nth$arity$2(null,i__49453_50384);
var k_50386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49488_50385,(0),null);
var v_50387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49488_50385,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50386);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50386),v_50387);


var G__50389 = seq__49450_50381;
var G__50390 = chunk__49451_50382;
var G__50391 = count__49452_50383;
var G__50392 = (i__49453_50384 + (1));
seq__49450_50381 = G__50389;
chunk__49451_50382 = G__50390;
count__49452_50383 = G__50391;
i__49453_50384 = G__50392;
continue;
} else {
var temp__5735__auto___50396 = cljs.core.seq(seq__49450_50381);
if(temp__5735__auto___50396){
var seq__49450_50397__$1 = temp__5735__auto___50396;
if(cljs.core.chunked_seq_QMARK_(seq__49450_50397__$1)){
var c__4609__auto___50398 = cljs.core.chunk_first(seq__49450_50397__$1);
var G__50399 = cljs.core.chunk_rest(seq__49450_50397__$1);
var G__50400 = c__4609__auto___50398;
var G__50401 = cljs.core.count(c__4609__auto___50398);
var G__50402 = (0);
seq__49450_50381 = G__50399;
chunk__49451_50382 = G__50400;
count__49452_50383 = G__50401;
i__49453_50384 = G__50402;
continue;
} else {
var vec__49493_50403 = cljs.core.first(seq__49450_50397__$1);
var k_50404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493_50403,(0),null);
var v_50405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493_50403,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50404);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50404),v_50405);


var G__50408 = cljs.core.next(seq__49450_50397__$1);
var G__50409 = null;
var G__50410 = (0);
var G__50411 = (0);
seq__49450_50381 = G__50408;
chunk__49451_50382 = G__50409;
count__49452_50383 = G__50410;
i__49453_50384 = G__50411;
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
var vec__49529 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49529,(1),null);
var seq__49535_50414 = cljs.core.seq(node_children);
var chunk__49537_50415 = null;
var count__49538_50416 = (0);
var i__49539_50417 = (0);
while(true){
if((i__49539_50417 < count__49538_50416)){
var child_struct_50418 = chunk__49537_50415.cljs$core$IIndexed$_nth$arity$2(null,i__49539_50417);
if((!((child_struct_50418 == null)))){
if(typeof child_struct_50418 === 'string'){
var text_50420 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50420),child_struct_50418].join(''));
} else {
var children_50421 = shadow.dom.svg_node(child_struct_50418);
if(cljs.core.seq_QMARK_(children_50421)){
var seq__49643_50422 = cljs.core.seq(children_50421);
var chunk__49645_50423 = null;
var count__49646_50424 = (0);
var i__49647_50425 = (0);
while(true){
if((i__49647_50425 < count__49646_50424)){
var child_50426 = chunk__49645_50423.cljs$core$IIndexed$_nth$arity$2(null,i__49647_50425);
if(cljs.core.truth_(child_50426)){
node.appendChild(child_50426);


var G__50427 = seq__49643_50422;
var G__50428 = chunk__49645_50423;
var G__50429 = count__49646_50424;
var G__50430 = (i__49647_50425 + (1));
seq__49643_50422 = G__50427;
chunk__49645_50423 = G__50428;
count__49646_50424 = G__50429;
i__49647_50425 = G__50430;
continue;
} else {
var G__50431 = seq__49643_50422;
var G__50432 = chunk__49645_50423;
var G__50433 = count__49646_50424;
var G__50434 = (i__49647_50425 + (1));
seq__49643_50422 = G__50431;
chunk__49645_50423 = G__50432;
count__49646_50424 = G__50433;
i__49647_50425 = G__50434;
continue;
}
} else {
var temp__5735__auto___50436 = cljs.core.seq(seq__49643_50422);
if(temp__5735__auto___50436){
var seq__49643_50437__$1 = temp__5735__auto___50436;
if(cljs.core.chunked_seq_QMARK_(seq__49643_50437__$1)){
var c__4609__auto___50438 = cljs.core.chunk_first(seq__49643_50437__$1);
var G__50439 = cljs.core.chunk_rest(seq__49643_50437__$1);
var G__50440 = c__4609__auto___50438;
var G__50441 = cljs.core.count(c__4609__auto___50438);
var G__50442 = (0);
seq__49643_50422 = G__50439;
chunk__49645_50423 = G__50440;
count__49646_50424 = G__50441;
i__49647_50425 = G__50442;
continue;
} else {
var child_50444 = cljs.core.first(seq__49643_50437__$1);
if(cljs.core.truth_(child_50444)){
node.appendChild(child_50444);


var G__50445 = cljs.core.next(seq__49643_50437__$1);
var G__50447 = null;
var G__50448 = (0);
var G__50449 = (0);
seq__49643_50422 = G__50445;
chunk__49645_50423 = G__50447;
count__49646_50424 = G__50448;
i__49647_50425 = G__50449;
continue;
} else {
var G__50453 = cljs.core.next(seq__49643_50437__$1);
var G__50454 = null;
var G__50455 = (0);
var G__50456 = (0);
seq__49643_50422 = G__50453;
chunk__49645_50423 = G__50454;
count__49646_50424 = G__50455;
i__49647_50425 = G__50456;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50421);
}
}


var G__50459 = seq__49535_50414;
var G__50460 = chunk__49537_50415;
var G__50461 = count__49538_50416;
var G__50462 = (i__49539_50417 + (1));
seq__49535_50414 = G__50459;
chunk__49537_50415 = G__50460;
count__49538_50416 = G__50461;
i__49539_50417 = G__50462;
continue;
} else {
var G__50463 = seq__49535_50414;
var G__50464 = chunk__49537_50415;
var G__50465 = count__49538_50416;
var G__50466 = (i__49539_50417 + (1));
seq__49535_50414 = G__50463;
chunk__49537_50415 = G__50464;
count__49538_50416 = G__50465;
i__49539_50417 = G__50466;
continue;
}
} else {
var temp__5735__auto___50467 = cljs.core.seq(seq__49535_50414);
if(temp__5735__auto___50467){
var seq__49535_50468__$1 = temp__5735__auto___50467;
if(cljs.core.chunked_seq_QMARK_(seq__49535_50468__$1)){
var c__4609__auto___50469 = cljs.core.chunk_first(seq__49535_50468__$1);
var G__50470 = cljs.core.chunk_rest(seq__49535_50468__$1);
var G__50471 = c__4609__auto___50469;
var G__50472 = cljs.core.count(c__4609__auto___50469);
var G__50473 = (0);
seq__49535_50414 = G__50470;
chunk__49537_50415 = G__50471;
count__49538_50416 = G__50472;
i__49539_50417 = G__50473;
continue;
} else {
var child_struct_50474 = cljs.core.first(seq__49535_50468__$1);
if((!((child_struct_50474 == null)))){
if(typeof child_struct_50474 === 'string'){
var text_50477 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50477),child_struct_50474].join(''));
} else {
var children_50478 = shadow.dom.svg_node(child_struct_50474);
if(cljs.core.seq_QMARK_(children_50478)){
var seq__49685_50479 = cljs.core.seq(children_50478);
var chunk__49687_50480 = null;
var count__49688_50481 = (0);
var i__49689_50482 = (0);
while(true){
if((i__49689_50482 < count__49688_50481)){
var child_50483 = chunk__49687_50480.cljs$core$IIndexed$_nth$arity$2(null,i__49689_50482);
if(cljs.core.truth_(child_50483)){
node.appendChild(child_50483);


var G__50484 = seq__49685_50479;
var G__50485 = chunk__49687_50480;
var G__50486 = count__49688_50481;
var G__50487 = (i__49689_50482 + (1));
seq__49685_50479 = G__50484;
chunk__49687_50480 = G__50485;
count__49688_50481 = G__50486;
i__49689_50482 = G__50487;
continue;
} else {
var G__50490 = seq__49685_50479;
var G__50491 = chunk__49687_50480;
var G__50492 = count__49688_50481;
var G__50493 = (i__49689_50482 + (1));
seq__49685_50479 = G__50490;
chunk__49687_50480 = G__50491;
count__49688_50481 = G__50492;
i__49689_50482 = G__50493;
continue;
}
} else {
var temp__5735__auto___50495__$1 = cljs.core.seq(seq__49685_50479);
if(temp__5735__auto___50495__$1){
var seq__49685_50496__$1 = temp__5735__auto___50495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49685_50496__$1)){
var c__4609__auto___50498 = cljs.core.chunk_first(seq__49685_50496__$1);
var G__50499 = cljs.core.chunk_rest(seq__49685_50496__$1);
var G__50500 = c__4609__auto___50498;
var G__50501 = cljs.core.count(c__4609__auto___50498);
var G__50502 = (0);
seq__49685_50479 = G__50499;
chunk__49687_50480 = G__50500;
count__49688_50481 = G__50501;
i__49689_50482 = G__50502;
continue;
} else {
var child_50503 = cljs.core.first(seq__49685_50496__$1);
if(cljs.core.truth_(child_50503)){
node.appendChild(child_50503);


var G__50504 = cljs.core.next(seq__49685_50496__$1);
var G__50505 = null;
var G__50506 = (0);
var G__50507 = (0);
seq__49685_50479 = G__50504;
chunk__49687_50480 = G__50505;
count__49688_50481 = G__50506;
i__49689_50482 = G__50507;
continue;
} else {
var G__50508 = cljs.core.next(seq__49685_50496__$1);
var G__50509 = null;
var G__50510 = (0);
var G__50511 = (0);
seq__49685_50479 = G__50508;
chunk__49687_50480 = G__50509;
count__49688_50481 = G__50510;
i__49689_50482 = G__50511;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50478);
}
}


var G__50517 = cljs.core.next(seq__49535_50468__$1);
var G__50518 = null;
var G__50519 = (0);
var G__50520 = (0);
seq__49535_50414 = G__50517;
chunk__49537_50415 = G__50518;
count__49538_50416 = G__50519;
i__49539_50417 = G__50520;
continue;
} else {
var G__50522 = cljs.core.next(seq__49535_50468__$1);
var G__50523 = null;
var G__50524 = (0);
var G__50525 = (0);
seq__49535_50414 = G__50522;
chunk__49537_50415 = G__50523;
count__49538_50416 = G__50524;
i__49539_50417 = G__50525;
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

var G__49713_50526 = shadow.dom._to_svg;
var G__49714_50527 = "string";
var G__49715_50528 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__49713_50526,G__49714_50527,G__49715_50528);

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

var G__49725_50533 = shadow.dom._to_svg;
var G__49726_50534 = "null";
var G__49727_50535 = (function (_){
return null;
});
goog.object.set(G__49725_50533,G__49726_50534,G__49727_50535);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50540 = arguments.length;
var i__4790__auto___50541 = (0);
while(true){
if((i__4790__auto___50541 < len__4789__auto___50540)){
args__4795__auto__.push((arguments[i__4790__auto___50541]));

var G__50542 = (i__4790__auto___50541 + (1));
i__4790__auto___50541 = G__50542;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49734){
var G__49735 = cljs.core.first(seq49734);
var seq49734__$1 = cljs.core.next(seq49734);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49735,seq49734__$1);
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
var G__49765 = arguments.length;
switch (G__49765) {
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
var G__49782_50545 = shadow.dom.dom_node(el);
var G__49783_50546 = cljs.core.name(event);
var G__49784_50547 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49782_50545,G__49783_50546,G__49784_50547) : shadow.dom.dom_listen.call(null,G__49782_50545,G__49783_50546,G__49784_50547));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__45961__auto___50548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_49792){
var state_val_49793 = (state_49792[(1)]);
if((state_val_49793 === (1))){
var state_49792__$1 = state_49792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49792__$1,(2),once_or_cleanup);
} else {
if((state_val_49793 === (2))){
var inst_49789 = (state_49792[(2)]);
var inst_49790 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49792__$1 = (function (){var statearr_49802 = state_49792;
(statearr_49802[(7)] = inst_49789);

return statearr_49802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49792__$1,inst_49790);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45738__auto__ = null;
var shadow$dom$state_machine__45738__auto____0 = (function (){
var statearr_49805 = [null,null,null,null,null,null,null,null];
(statearr_49805[(0)] = shadow$dom$state_machine__45738__auto__);

(statearr_49805[(1)] = (1));

return statearr_49805;
});
var shadow$dom$state_machine__45738__auto____1 = (function (state_49792){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_49792);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e49808){if((e49808 instanceof Object)){
var ex__45741__auto__ = e49808;
var statearr_49810_50557 = state_49792;
(statearr_49810_50557[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50559 = state_49792;
state_49792 = G__50559;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
shadow$dom$state_machine__45738__auto__ = function(state_49792){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45738__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45738__auto____1.call(this,state_49792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45738__auto____0;
shadow$dom$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45738__auto____1;
return shadow$dom$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_49811 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_49811[(6)] = c__45961__auto___50548);

return statearr_49811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
