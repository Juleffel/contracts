goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('re_frame.subs');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
goog.require('re_frisk.diff');
re_frisk.core.app_db_diff = (function re_frisk$core$app_db_diff(){
return re_frisk.diff.diff(cljs.core.deref(re_frisk.data.app_db_prev_event),cljs.core.deref(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data))));
});
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"contexts","contexts",4351546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)),cljs.core.first(value));
var indx = cljs.core.count(cljs.core.deref(re_frisk.data.re_frame_events));
var diff = re_frisk.core.app_db_diff();
cljs.core.reset_BANG_(re_frisk.data.app_db_prev_event,cljs.core.deref(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.data.re_frame_events,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4185__auto__ = cntx;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"event","event",301435442),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"indx","indx",1571035590),indx], 0)));
});
re_frisk.core.re_frame_sub = (function re_frisk$core$re_frame_sub(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46994 = arguments.length;
var i__4790__auto___46995 = (0);
while(true){
if((i__4790__auto___46995 < len__4789__auto___46994)){
args__4795__auto__.push((arguments[i__4790__auto___46995]));

var G__46996 = (i__4790__auto___46995 + (1));
i__4790__auto___46995 = G__46996;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"id-handler","id-handler",1013135509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46894_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first(p1__46894_SHARP_)],[cljs.core.deref(cljs.core.second(p1__46894_SHARP_))]);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46895_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.ffirst(p1__46895_SHARP_)),new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709))) || ((cljs.core.second(p1__46895_SHARP_) == null)));
}),cljs.core.deref(re_frame.subs.query__GT_reaction)))));
}));

(re_frisk.core.re_frame_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.re_frame_sub.cljs$lang$applyTo = (function (seq46896){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46896));
}));

re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

(onbeforeunload = (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stopped!");
} else {
return null;
}
}));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.re_frisk_shell,params], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46997 = arguments.length;
var i__4790__auto___46998 = (0);
while(true){
if((i__4790__auto___46998 < len__4789__auto___46997)){
args__4795__auto__.push((arguments[i__4790__auto___46998]));

var G__46999 = (i__4790__auto___46998 + (1));
i__4790__auto___46998 = G__46999;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46914){
var vec__46917 = p__46914;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46917,(0),null);
if(cljs.core.truth_(cljs.core.deref(re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.data.initialized,true);

if(cljs.core.truth_(re_frame.core.reg_sub)){
var G__46920_47000 = new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709);
var G__46921_47001 = (function (db,_){
return db;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46920_47000,G__46921_47001) : re_frame.core.reg_sub.call(null,G__46920_47000,G__46921_47001));
} else {
re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),(function (db,_){
return reagent.ratom.make_reaction((function (){
return cljs.core.deref(db);
}));
})], 0));
}

cljs.core.reset_BANG_(re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-db","app-db",865606302),(function (){var G__46926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46926) : re_frame.core.subscribe.call(null,G__46926));
})(),new cljs.core.Keyword(null,"id-handler","id-handler",1013135509),reagent.core.atom.cljs$core$IFn$_invoke$arity$1("not connected")], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",-1818938470),opts);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}

if(cljs.core.truth_(re_frame.subs.query__GT_reaction)){
cljs.core.add_watch(re_frame.db.app_db,new cljs.core.Keyword(null,"re-frisk-watcher","re-frisk-watcher",1126824275),re_frisk.core.re_frame_sub);

re_frisk.core.re_frame_sub();
} else {
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
}));

(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq46909){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46909));
}));

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47002 = arguments.length;
var i__4790__auto___47003 = (0);
while(true){
if((i__4790__auto___47003 < len__4789__auto___47002)){
args__4795__auto__.push((arguments[i__4790__auto___47003]));

var G__47004 = (i__4790__auto___47003 + (1));
i__4790__auto___47003 = G__47004;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref(re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first(params));
}
}));

(re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq46931){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46931));
}));

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = (function (){var G__46942 = new cljs.core.Keyword(null,"id","id",-1388402092);
var G__46943 = new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",1102368726);
var G__46944 = new cljs.core.Keyword(null,"before","before",-1633692388);
var G__46945 = (function (context){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
});
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__46942,G__46943,G__46944,G__46945) : re_frame.core.__GT_interceptor.call(null,G__46942,G__46943,G__46944,G__46945));
})();
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.set(events));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46949_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__46949_SHARP_],[(function (){var G__46953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46949_SHARP_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46953) : re_frame.core.subscribe.call(null,G__46953));
})()]);
}),subs)));

var seq__46954 = cljs.core.seq(subs);
var chunk__46955 = null;
var count__46956 = (0);
var i__46957 = (0);
while(true){
if((i__46957 < count__46956)){
var s = chunk__46955.cljs$core$IIndexed$_nth$arity$2(null,i__46957);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),(function (){var G__46966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46966) : re_frame.core.subscribe.call(null,G__46966));
})());


var G__47021 = seq__46954;
var G__47022 = chunk__46955;
var G__47023 = count__46956;
var G__47024 = (i__46957 + (1));
seq__46954 = G__47021;
chunk__46955 = G__47022;
count__46956 = G__47023;
i__46957 = G__47024;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46954);
if(temp__5735__auto__){
var seq__46954__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46954__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46954__$1);
var G__47025 = cljs.core.chunk_rest(seq__46954__$1);
var G__47026 = c__4609__auto__;
var G__47027 = cljs.core.count(c__4609__auto__);
var G__47028 = (0);
seq__46954 = G__47025;
chunk__46955 = G__47026;
count__46956 = G__47027;
i__46957 = G__47028;
continue;
} else {
var s = cljs.core.first(seq__46954__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),(function (){var G__46971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46971) : re_frame.core.subscribe.call(null,G__46971));
})());


var G__47029 = cljs.core.next(seq__46954__$1);
var G__47030 = null;
var G__47031 = (0);
var G__47032 = (0);
seq__46954 = G__47029;
chunk__46955 = G__47030;
count__46956 = G__47031;
i__46957 = G__47032;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view], 0));
} else {
return null;
}
});
var G__46978_47033 = new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246);
var G__46979_47034 = (function (_,p__46981){
var vec__46982 = p__46981;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(1),null);
return value;
});
var fexpr__46977_47035 = (function (){var or__4185__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return re_frame.core.register_handler;
}
})();
(fexpr__46977_47035.cljs$core$IFn$_invoke$arity$2 ? fexpr__46977_47035.cljs$core$IFn$_invoke$arity$2(G__46978_47033,G__46979_47034) : fexpr__46977_47035.call(null,G__46978_47033,G__46979_47034));

//# sourceMappingURL=re_frisk.core.js.map
