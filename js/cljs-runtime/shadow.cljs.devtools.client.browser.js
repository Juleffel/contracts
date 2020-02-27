goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49812 = arguments.length;
var i__4790__auto___49813 = (0);
while(true){
if((i__4790__auto___49813 < len__4789__auto___49812)){
args__4795__auto__.push((arguments[i__4790__auto___49813]));

var G__49814 = (i__4790__auto___49813 + (1));
i__4790__auto___49813 = G__49814;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49626){
var G__49627 = cljs.core.first(seq49626);
var seq49626__$1 = cljs.core.next(seq49626);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49627,seq49626__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49628){
var map__49629 = p__49628;
var map__49629__$1 = (((((!((map__49629 == null))))?(((((map__49629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49629):map__49629);
var src = map__49629__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49634 = cljs.core.seq(sources);
var chunk__49635 = null;
var count__49636 = (0);
var i__49637 = (0);
while(true){
if((i__49637 < count__49636)){
var map__49649 = chunk__49635.cljs$core$IIndexed$_nth$arity$2(null,i__49637);
var map__49649__$1 = (((((!((map__49649 == null))))?(((((map__49649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49649):map__49649);
var src = map__49649__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49649__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49649__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49649__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49649__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49651){var e_49817 = e49651;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49817);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49817.message)].join('')));
}

var G__49818 = seq__49634;
var G__49819 = chunk__49635;
var G__49820 = count__49636;
var G__49821 = (i__49637 + (1));
seq__49634 = G__49818;
chunk__49635 = G__49819;
count__49636 = G__49820;
i__49637 = G__49821;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49634);
if(temp__5735__auto__){
var seq__49634__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49634__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49634__$1);
var G__49822 = cljs.core.chunk_rest(seq__49634__$1);
var G__49823 = c__4609__auto__;
var G__49824 = cljs.core.count(c__4609__auto__);
var G__49825 = (0);
seq__49634 = G__49822;
chunk__49635 = G__49823;
count__49636 = G__49824;
i__49637 = G__49825;
continue;
} else {
var map__49652 = cljs.core.first(seq__49634__$1);
var map__49652__$1 = (((((!((map__49652 == null))))?(((((map__49652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49652):map__49652);
var src = map__49652__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49654){var e_49826 = e49654;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49826);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49826.message)].join('')));
}

var G__49828 = cljs.core.next(seq__49634__$1);
var G__49829 = null;
var G__49830 = (0);
var G__49831 = (0);
seq__49634 = G__49828;
chunk__49635 = G__49829;
count__49636 = G__49830;
i__49637 = G__49831;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49655 = cljs.core.seq(js_requires);
var chunk__49656 = null;
var count__49657 = (0);
var i__49658 = (0);
while(true){
if((i__49658 < count__49657)){
var js_ns = chunk__49656.cljs$core$IIndexed$_nth$arity$2(null,i__49658);
var require_str_49832 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49832);


var G__49833 = seq__49655;
var G__49834 = chunk__49656;
var G__49835 = count__49657;
var G__49836 = (i__49658 + (1));
seq__49655 = G__49833;
chunk__49656 = G__49834;
count__49657 = G__49835;
i__49658 = G__49836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49655);
if(temp__5735__auto__){
var seq__49655__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49655__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49655__$1);
var G__49837 = cljs.core.chunk_rest(seq__49655__$1);
var G__49838 = c__4609__auto__;
var G__49839 = cljs.core.count(c__4609__auto__);
var G__49840 = (0);
seq__49655 = G__49837;
chunk__49656 = G__49838;
count__49657 = G__49839;
i__49658 = G__49840;
continue;
} else {
var js_ns = cljs.core.first(seq__49655__$1);
var require_str_49841 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49841);


var G__49842 = cljs.core.next(seq__49655__$1);
var G__49843 = null;
var G__49844 = (0);
var G__49845 = (0);
seq__49655 = G__49842;
chunk__49656 = G__49843;
count__49657 = G__49844;
i__49658 = G__49845;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__49659 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49659) : callback.call(null,G__49659));
} else {
var G__49660 = shadow.cljs.devtools.client.env.files_url();
var G__49661 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49662 = "POST";
var G__49663 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49664 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49660,G__49661,G__49662,G__49663,G__49664);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49667){
var map__49668 = p__49667;
var map__49668__$1 = (((((!((map__49668 == null))))?(((((map__49668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49668):map__49668);
var msg = map__49668__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49670 = info;
var map__49670__$1 = (((((!((map__49670 == null))))?(((((map__49670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49670):map__49670);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49670__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49670__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49673(s__49674){
return (new cljs.core.LazySeq(null,(function (){
var s__49674__$1 = s__49674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49674__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49679 = cljs.core.first(xs__6292__auto__);
var map__49679__$1 = (((((!((map__49679 == null))))?(((((map__49679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49679):map__49679);
var src = map__49679__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49674__$1,map__49679,map__49679__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49670,map__49670__$1,sources,compiled,map__49668,map__49668__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49673_$_iter__49675(s__49676){
return (new cljs.core.LazySeq(null,((function (s__49674__$1,map__49679,map__49679__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49670,map__49670__$1,sources,compiled,map__49668,map__49668__$1,msg,info,reload_info){
return (function (){
var s__49676__$1 = s__49676;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49676__$1);
if(temp__5735__auto____$1){
var s__49676__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49676__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49676__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49678 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49677 = (0);
while(true){
if((i__49677 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49677);
cljs.core.chunk_append(b__49678,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49848 = (i__49677 + (1));
i__49677 = G__49848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49678),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49673_$_iter__49675(cljs.core.chunk_rest(s__49676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49678),null);
}
} else {
var warning = cljs.core.first(s__49676__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49673_$_iter__49675(cljs.core.rest(s__49676__$2)));
}
} else {
return null;
}
break;
}
});})(s__49674__$1,map__49679,map__49679__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49670,map__49670__$1,sources,compiled,map__49668,map__49668__$1,msg,info,reload_info))
,null,null));
});})(s__49674__$1,map__49679,map__49679__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49670,map__49670__$1,sources,compiled,map__49668,map__49668__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49673(cljs.core.rest(s__49674__$1)));
} else {
var G__49850 = cljs.core.rest(s__49674__$1);
s__49674__$1 = G__49850;
continue;
}
} else {
var G__49851 = cljs.core.rest(s__49674__$1);
s__49674__$1 = G__49851;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__49681_49852 = cljs.core.seq(warnings);
var chunk__49682_49853 = null;
var count__49683_49854 = (0);
var i__49684_49855 = (0);
while(true){
if((i__49684_49855 < count__49683_49854)){
var map__49689_49856 = chunk__49682_49853.cljs$core$IIndexed$_nth$arity$2(null,i__49684_49855);
var map__49689_49857__$1 = (((((!((map__49689_49856 == null))))?(((((map__49689_49856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49689_49856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49689_49856):map__49689_49856);
var w_49858 = map__49689_49857__$1;
var msg_49859__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689_49857__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689_49857__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689_49857__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689_49857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49862)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49860),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49861),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49859__$1)].join(''));


var G__49863 = seq__49681_49852;
var G__49864 = chunk__49682_49853;
var G__49865 = count__49683_49854;
var G__49866 = (i__49684_49855 + (1));
seq__49681_49852 = G__49863;
chunk__49682_49853 = G__49864;
count__49683_49854 = G__49865;
i__49684_49855 = G__49866;
continue;
} else {
var temp__5735__auto___49868 = cljs.core.seq(seq__49681_49852);
if(temp__5735__auto___49868){
var seq__49681_49869__$1 = temp__5735__auto___49868;
if(cljs.core.chunked_seq_QMARK_(seq__49681_49869__$1)){
var c__4609__auto___49870 = cljs.core.chunk_first(seq__49681_49869__$1);
var G__49871 = cljs.core.chunk_rest(seq__49681_49869__$1);
var G__49872 = c__4609__auto___49870;
var G__49873 = cljs.core.count(c__4609__auto___49870);
var G__49874 = (0);
seq__49681_49852 = G__49871;
chunk__49682_49853 = G__49872;
count__49683_49854 = G__49873;
i__49684_49855 = G__49874;
continue;
} else {
var map__49691_49875 = cljs.core.first(seq__49681_49869__$1);
var map__49691_49876__$1 = (((((!((map__49691_49875 == null))))?(((((map__49691_49875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49691_49875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49691_49875):map__49691_49875);
var w_49877 = map__49691_49876__$1;
var msg_49878__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49691_49876__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49691_49876__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49691_49876__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49691_49876__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49881)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49879),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49880),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49878__$1)].join(''));


var G__49882 = cljs.core.next(seq__49681_49869__$1);
var G__49883 = null;
var G__49884 = (0);
var G__49885 = (0);
seq__49681_49852 = G__49882;
chunk__49682_49853 = G__49883;
count__49683_49854 = G__49884;
i__49684_49855 = G__49885;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49693){
var map__49694 = p__49693;
var map__49694__$1 = (((((!((map__49694 == null))))?(((((map__49694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49694):map__49694);
var src = map__49694__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49696){
var map__49697 = p__49696;
var map__49697__$1 = (((((!((map__49697 == null))))?(((((map__49697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49697):map__49697);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49697__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49699){
var map__49700 = p__49699;
var map__49700__$1 = (((((!((map__49700 == null))))?(((((map__49700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49700):map__49700);
var rc = map__49700__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49665_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49665_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49708){
var map__49709 = p__49708;
var map__49709__$1 = (((((!((map__49709 == null))))?(((((map__49709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49709):map__49709);
var msg = map__49709__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49711 = cljs.core.seq(updates);
var chunk__49713 = null;
var count__49714 = (0);
var i__49715 = (0);
while(true){
if((i__49715 < count__49714)){
var path = chunk__49713.cljs$core$IIndexed$_nth$arity$2(null,i__49715);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49745_49889 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49748_49890 = null;
var count__49749_49891 = (0);
var i__49750_49892 = (0);
while(true){
if((i__49750_49892 < count__49749_49891)){
var node_49893 = chunk__49748_49890.cljs$core$IIndexed$_nth$arity$2(null,i__49750_49892);
var path_match_49894 = shadow.cljs.devtools.client.browser.match_paths(node_49893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49894)){
var new_link_49895 = (function (){var G__49756 = node_49893.cloneNode(true);
G__49756.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49756;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49894], 0));

goog.dom.insertSiblingAfter(new_link_49895,node_49893);

goog.dom.removeNode(node_49893);


var G__49896 = seq__49745_49889;
var G__49897 = chunk__49748_49890;
var G__49898 = count__49749_49891;
var G__49899 = (i__49750_49892 + (1));
seq__49745_49889 = G__49896;
chunk__49748_49890 = G__49897;
count__49749_49891 = G__49898;
i__49750_49892 = G__49899;
continue;
} else {
var G__49900 = seq__49745_49889;
var G__49901 = chunk__49748_49890;
var G__49902 = count__49749_49891;
var G__49903 = (i__49750_49892 + (1));
seq__49745_49889 = G__49900;
chunk__49748_49890 = G__49901;
count__49749_49891 = G__49902;
i__49750_49892 = G__49903;
continue;
}
} else {
var temp__5735__auto___49904 = cljs.core.seq(seq__49745_49889);
if(temp__5735__auto___49904){
var seq__49745_49905__$1 = temp__5735__auto___49904;
if(cljs.core.chunked_seq_QMARK_(seq__49745_49905__$1)){
var c__4609__auto___49906 = cljs.core.chunk_first(seq__49745_49905__$1);
var G__49907 = cljs.core.chunk_rest(seq__49745_49905__$1);
var G__49908 = c__4609__auto___49906;
var G__49909 = cljs.core.count(c__4609__auto___49906);
var G__49910 = (0);
seq__49745_49889 = G__49907;
chunk__49748_49890 = G__49908;
count__49749_49891 = G__49909;
i__49750_49892 = G__49910;
continue;
} else {
var node_49911 = cljs.core.first(seq__49745_49905__$1);
var path_match_49912 = shadow.cljs.devtools.client.browser.match_paths(node_49911.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49912)){
var new_link_49914 = (function (){var G__49758 = node_49911.cloneNode(true);
G__49758.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49912),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49758;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49912], 0));

goog.dom.insertSiblingAfter(new_link_49914,node_49911);

goog.dom.removeNode(node_49911);


var G__49915 = cljs.core.next(seq__49745_49905__$1);
var G__49916 = null;
var G__49917 = (0);
var G__49918 = (0);
seq__49745_49889 = G__49915;
chunk__49748_49890 = G__49916;
count__49749_49891 = G__49917;
i__49750_49892 = G__49918;
continue;
} else {
var G__49919 = cljs.core.next(seq__49745_49905__$1);
var G__49920 = null;
var G__49921 = (0);
var G__49922 = (0);
seq__49745_49889 = G__49919;
chunk__49748_49890 = G__49920;
count__49749_49891 = G__49921;
i__49750_49892 = G__49922;
continue;
}
}
} else {
}
}
break;
}


var G__49923 = seq__49711;
var G__49924 = chunk__49713;
var G__49925 = count__49714;
var G__49926 = (i__49715 + (1));
seq__49711 = G__49923;
chunk__49713 = G__49924;
count__49714 = G__49925;
i__49715 = G__49926;
continue;
} else {
var G__49927 = seq__49711;
var G__49928 = chunk__49713;
var G__49929 = count__49714;
var G__49930 = (i__49715 + (1));
seq__49711 = G__49927;
chunk__49713 = G__49928;
count__49714 = G__49929;
i__49715 = G__49930;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49711);
if(temp__5735__auto__){
var seq__49711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49711__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49711__$1);
var G__49931 = cljs.core.chunk_rest(seq__49711__$1);
var G__49932 = c__4609__auto__;
var G__49933 = cljs.core.count(c__4609__auto__);
var G__49934 = (0);
seq__49711 = G__49931;
chunk__49713 = G__49932;
count__49714 = G__49933;
i__49715 = G__49934;
continue;
} else {
var path = cljs.core.first(seq__49711__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49759_49935 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49762_49936 = null;
var count__49763_49937 = (0);
var i__49764_49938 = (0);
while(true){
if((i__49764_49938 < count__49763_49937)){
var node_49939 = chunk__49762_49936.cljs$core$IIndexed$_nth$arity$2(null,i__49764_49938);
var path_match_49940 = shadow.cljs.devtools.client.browser.match_paths(node_49939.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49940)){
var new_link_49941 = (function (){var G__49771 = node_49939.cloneNode(true);
G__49771.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49940),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49771;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49940], 0));

goog.dom.insertSiblingAfter(new_link_49941,node_49939);

goog.dom.removeNode(node_49939);


var G__49943 = seq__49759_49935;
var G__49944 = chunk__49762_49936;
var G__49945 = count__49763_49937;
var G__49946 = (i__49764_49938 + (1));
seq__49759_49935 = G__49943;
chunk__49762_49936 = G__49944;
count__49763_49937 = G__49945;
i__49764_49938 = G__49946;
continue;
} else {
var G__49947 = seq__49759_49935;
var G__49948 = chunk__49762_49936;
var G__49949 = count__49763_49937;
var G__49950 = (i__49764_49938 + (1));
seq__49759_49935 = G__49947;
chunk__49762_49936 = G__49948;
count__49763_49937 = G__49949;
i__49764_49938 = G__49950;
continue;
}
} else {
var temp__5735__auto___49951__$1 = cljs.core.seq(seq__49759_49935);
if(temp__5735__auto___49951__$1){
var seq__49759_49952__$1 = temp__5735__auto___49951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49759_49952__$1)){
var c__4609__auto___49953 = cljs.core.chunk_first(seq__49759_49952__$1);
var G__49954 = cljs.core.chunk_rest(seq__49759_49952__$1);
var G__49955 = c__4609__auto___49953;
var G__49956 = cljs.core.count(c__4609__auto___49953);
var G__49957 = (0);
seq__49759_49935 = G__49954;
chunk__49762_49936 = G__49955;
count__49763_49937 = G__49956;
i__49764_49938 = G__49957;
continue;
} else {
var node_49958 = cljs.core.first(seq__49759_49952__$1);
var path_match_49959 = shadow.cljs.devtools.client.browser.match_paths(node_49958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49959)){
var new_link_49960 = (function (){var G__49772 = node_49958.cloneNode(true);
G__49772.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49772;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49959], 0));

goog.dom.insertSiblingAfter(new_link_49960,node_49958);

goog.dom.removeNode(node_49958);


var G__49961 = cljs.core.next(seq__49759_49952__$1);
var G__49962 = null;
var G__49963 = (0);
var G__49964 = (0);
seq__49759_49935 = G__49961;
chunk__49762_49936 = G__49962;
count__49763_49937 = G__49963;
i__49764_49938 = G__49964;
continue;
} else {
var G__49965 = cljs.core.next(seq__49759_49952__$1);
var G__49966 = null;
var G__49967 = (0);
var G__49968 = (0);
seq__49759_49935 = G__49965;
chunk__49762_49936 = G__49966;
count__49763_49937 = G__49967;
i__49764_49938 = G__49968;
continue;
}
}
} else {
}
}
break;
}


var G__49969 = cljs.core.next(seq__49711__$1);
var G__49970 = null;
var G__49971 = (0);
var G__49972 = (0);
seq__49711 = G__49969;
chunk__49713 = G__49970;
count__49714 = G__49971;
i__49715 = G__49972;
continue;
} else {
var G__49973 = cljs.core.next(seq__49711__$1);
var G__49974 = null;
var G__49975 = (0);
var G__49976 = (0);
seq__49711 = G__49973;
chunk__49713 = G__49974;
count__49714 = G__49975;
i__49715 = G__49976;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49775){
var map__49776 = p__49775;
var map__49776__$1 = (((((!((map__49776 == null))))?(((((map__49776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49776):map__49776);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49776__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49778,done){
var map__49780 = p__49778;
var map__49780__$1 = (((((!((map__49780 == null))))?(((((map__49780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49780):map__49780);
var msg = map__49780__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49782){
var map__49783 = p__49782;
var map__49783__$1 = (((((!((map__49783 == null))))?(((((map__49783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49783):map__49783);
var src = map__49783__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e49785){var e = e49785;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49787,done){
var map__49788 = p__49787;
var map__49788__$1 = (((((!((map__49788 == null))))?(((((map__49788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49788):map__49788);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49788__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49791){
var map__49792 = p__49791;
var map__49792__$1 = (((((!((map__49792 == null))))?(((((map__49792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49792):map__49792);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49792__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49792__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49794,done){
var map__49796 = p__49794;
var map__49796__$1 = (((((!((map__49796 == null))))?(((((map__49796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49796):map__49796);
var msg = map__49796__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49796__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49798_49981 = type;
var G__49798_49982__$1 = (((G__49798_49981 instanceof cljs.core.Keyword))?G__49798_49981.fqn:null);
switch (G__49798_49982__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__49800 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49801 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49802 = "POST";
var G__49803 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49804 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49800,G__49801,G__49802,G__49803,G__49804);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49806 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49805 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49805.cljs$core$IFn$_invoke$arity$1 ? fexpr__49805.cljs$core$IFn$_invoke$arity$1(G__49806) : fexpr__49805.call(null,G__49806));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e49809){var e = e49809;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___49988 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___49988)){
var s_49989 = temp__5735__auto___49988;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_49989.onclose = (function (e){
return null;
}));

s_49989.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
