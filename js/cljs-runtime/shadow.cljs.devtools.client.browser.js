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
var len__4789__auto___51992 = arguments.length;
var i__4790__auto___51993 = (0);
while(true){
if((i__4790__auto___51993 < len__4789__auto___51992)){
args__4795__auto__.push((arguments[i__4790__auto___51993]));

var G__51995 = (i__4790__auto___51993 + (1));
i__4790__auto___51993 = G__51995;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51619){
var G__51620 = cljs.core.first(seq51619);
var seq51619__$1 = cljs.core.next(seq51619);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51620,seq51619__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__51634){
var map__51635 = p__51634;
var map__51635__$1 = (((((!((map__51635 == null))))?(((((map__51635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51635):map__51635);
var src = map__51635__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51635__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51635__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__51641 = cljs.core.seq(sources);
var chunk__51642 = null;
var count__51643 = (0);
var i__51644 = (0);
while(true){
if((i__51644 < count__51643)){
var map__51662 = chunk__51642.cljs$core$IIndexed$_nth$arity$2(null,i__51644);
var map__51662__$1 = (((((!((map__51662 == null))))?(((((map__51662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51662):map__51662);
var src = map__51662__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51662__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51662__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51662__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51662__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51665){var e_52039 = e51665;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52039);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52039.message)].join('')));
}

var G__52040 = seq__51641;
var G__52041 = chunk__51642;
var G__52042 = count__51643;
var G__52043 = (i__51644 + (1));
seq__51641 = G__52040;
chunk__51642 = G__52041;
count__51643 = G__52042;
i__51644 = G__52043;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51641);
if(temp__5735__auto__){
var seq__51641__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51641__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51641__$1);
var G__52044 = cljs.core.chunk_rest(seq__51641__$1);
var G__52045 = c__4609__auto__;
var G__52046 = cljs.core.count(c__4609__auto__);
var G__52047 = (0);
seq__51641 = G__52044;
chunk__51642 = G__52045;
count__51643 = G__52046;
i__51644 = G__52047;
continue;
} else {
var map__51672 = cljs.core.first(seq__51641__$1);
var map__51672__$1 = (((((!((map__51672 == null))))?(((((map__51672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51672):map__51672);
var src = map__51672__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51674){var e_52048 = e51674;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52048);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52048.message)].join('')));
}

var G__52050 = cljs.core.next(seq__51641__$1);
var G__52051 = null;
var G__52052 = (0);
var G__52053 = (0);
seq__51641 = G__52050;
chunk__51642 = G__52051;
count__51643 = G__52052;
i__51644 = G__52053;
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
var seq__51679 = cljs.core.seq(js_requires);
var chunk__51680 = null;
var count__51681 = (0);
var i__51682 = (0);
while(true){
if((i__51682 < count__51681)){
var js_ns = chunk__51680.cljs$core$IIndexed$_nth$arity$2(null,i__51682);
var require_str_52054 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52054);


var G__52055 = seq__51679;
var G__52056 = chunk__51680;
var G__52057 = count__51681;
var G__52058 = (i__51682 + (1));
seq__51679 = G__52055;
chunk__51680 = G__52056;
count__51681 = G__52057;
i__51682 = G__52058;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51679);
if(temp__5735__auto__){
var seq__51679__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51679__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51679__$1);
var G__52063 = cljs.core.chunk_rest(seq__51679__$1);
var G__52064 = c__4609__auto__;
var G__52065 = cljs.core.count(c__4609__auto__);
var G__52066 = (0);
seq__51679 = G__52063;
chunk__51680 = G__52064;
count__51681 = G__52065;
i__51682 = G__52066;
continue;
} else {
var js_ns = cljs.core.first(seq__51679__$1);
var require_str_52069 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52069);


var G__52070 = cljs.core.next(seq__51679__$1);
var G__52071 = null;
var G__52072 = (0);
var G__52073 = (0);
seq__51679 = G__52070;
chunk__51680 = G__52071;
count__51681 = G__52072;
i__51682 = G__52073;
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
var G__51685 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__51685) : callback.call(null,G__51685));
} else {
var G__51686 = shadow.cljs.devtools.client.env.files_url();
var G__51687 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__51688 = "POST";
var G__51689 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__51690 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51686,G__51687,G__51688,G__51689,G__51690);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__51692){
var map__51693 = p__51692;
var map__51693__$1 = (((((!((map__51693 == null))))?(((((map__51693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51693):map__51693);
var msg = map__51693__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51693__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51693__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__51697 = info;
var map__51697__$1 = (((((!((map__51697 == null))))?(((((map__51697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51697):map__51697);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51697__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51697__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51700(s__51701){
return (new cljs.core.LazySeq(null,(function (){
var s__51701__$1 = s__51701;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51701__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51707 = cljs.core.first(xs__6292__auto__);
var map__51707__$1 = (((((!((map__51707 == null))))?(((((map__51707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51707):map__51707);
var src = map__51707__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51707__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51707__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__51701__$1,map__51707,map__51707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51697,map__51697__$1,sources,compiled,map__51693,map__51693__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51700_$_iter__51702(s__51703){
return (new cljs.core.LazySeq(null,((function (s__51701__$1,map__51707,map__51707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51697,map__51697__$1,sources,compiled,map__51693,map__51693__$1,msg,info,reload_info){
return (function (){
var s__51703__$1 = s__51703;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51703__$1);
if(temp__5735__auto____$1){
var s__51703__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51703__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51703__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51705 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51704 = (0);
while(true){
if((i__51704 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51704);
cljs.core.chunk_append(b__51705,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52083 = (i__51704 + (1));
i__51704 = G__52083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51705),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51700_$_iter__51702(cljs.core.chunk_rest(s__51703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51705),null);
}
} else {
var warning = cljs.core.first(s__51703__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51700_$_iter__51702(cljs.core.rest(s__51703__$2)));
}
} else {
return null;
}
break;
}
});})(s__51701__$1,map__51707,map__51707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51697,map__51697__$1,sources,compiled,map__51693,map__51693__$1,msg,info,reload_info))
,null,null));
});})(s__51701__$1,map__51707,map__51707__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51697,map__51697__$1,sources,compiled,map__51693,map__51693__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51700(cljs.core.rest(s__51701__$1)));
} else {
var G__52091 = cljs.core.rest(s__51701__$1);
s__51701__$1 = G__52091;
continue;
}
} else {
var G__52092 = cljs.core.rest(s__51701__$1);
s__51701__$1 = G__52092;
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
var seq__51713_52093 = cljs.core.seq(warnings);
var chunk__51714_52094 = null;
var count__51715_52095 = (0);
var i__51716_52096 = (0);
while(true){
if((i__51716_52096 < count__51715_52095)){
var map__51725_52097 = chunk__51714_52094.cljs$core$IIndexed$_nth$arity$2(null,i__51716_52096);
var map__51725_52098__$1 = (((((!((map__51725_52097 == null))))?(((((map__51725_52097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51725_52097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51725_52097):map__51725_52097);
var w_52099 = map__51725_52098__$1;
var msg_52100__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51725_52098__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51725_52098__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51725_52098__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51725_52098__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52103)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52101),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52102),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52100__$1)].join(''));


var G__52105 = seq__51713_52093;
var G__52106 = chunk__51714_52094;
var G__52107 = count__51715_52095;
var G__52108 = (i__51716_52096 + (1));
seq__51713_52093 = G__52105;
chunk__51714_52094 = G__52106;
count__51715_52095 = G__52107;
i__51716_52096 = G__52108;
continue;
} else {
var temp__5735__auto___52109 = cljs.core.seq(seq__51713_52093);
if(temp__5735__auto___52109){
var seq__51713_52110__$1 = temp__5735__auto___52109;
if(cljs.core.chunked_seq_QMARK_(seq__51713_52110__$1)){
var c__4609__auto___52111 = cljs.core.chunk_first(seq__51713_52110__$1);
var G__52112 = cljs.core.chunk_rest(seq__51713_52110__$1);
var G__52113 = c__4609__auto___52111;
var G__52114 = cljs.core.count(c__4609__auto___52111);
var G__52115 = (0);
seq__51713_52093 = G__52112;
chunk__51714_52094 = G__52113;
count__51715_52095 = G__52114;
i__51716_52096 = G__52115;
continue;
} else {
var map__51727_52116 = cljs.core.first(seq__51713_52110__$1);
var map__51727_52117__$1 = (((((!((map__51727_52116 == null))))?(((((map__51727_52116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51727_52116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51727_52116):map__51727_52116);
var w_52118 = map__51727_52117__$1;
var msg_52119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51727_52117__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51727_52117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51727_52117__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51727_52117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52122)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52120),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52121),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52119__$1)].join(''));


var G__52130 = cljs.core.next(seq__51713_52110__$1);
var G__52131 = null;
var G__52132 = (0);
var G__52133 = (0);
seq__51713_52093 = G__52130;
chunk__51714_52094 = G__52131;
count__51715_52095 = G__52132;
i__51716_52096 = G__52133;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51734){
var map__51735 = p__51734;
var map__51735__$1 = (((((!((map__51735 == null))))?(((((map__51735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51735):map__51735);
var src = map__51735__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51735__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51740){
var map__51741 = p__51740;
var map__51741__$1 = (((((!((map__51741 == null))))?(((((map__51741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51741):map__51741);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51741__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51743){
var map__51744 = p__51743;
var map__51744__$1 = (((((!((map__51744 == null))))?(((((map__51744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51744):map__51744);
var rc = map__51744__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51744__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__51691_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51691_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__51759){
var map__51761 = p__51759;
var map__51761__$1 = (((((!((map__51761 == null))))?(((((map__51761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51761):map__51761);
var msg = map__51761__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51761__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51764 = cljs.core.seq(updates);
var chunk__51766 = null;
var count__51767 = (0);
var i__51768 = (0);
while(true){
if((i__51768 < count__51767)){
var path = chunk__51766.cljs$core$IIndexed$_nth$arity$2(null,i__51768);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51821_52151 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51824_52152 = null;
var count__51825_52153 = (0);
var i__51826_52154 = (0);
while(true){
if((i__51826_52154 < count__51825_52153)){
var node_52155 = chunk__51824_52152.cljs$core$IIndexed$_nth$arity$2(null,i__51826_52154);
var path_match_52156 = shadow.cljs.devtools.client.browser.match_paths(node_52155.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52156)){
var new_link_52157 = (function (){var G__51845 = node_52155.cloneNode(true);
G__51845.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52156),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51845;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52156], 0));

goog.dom.insertSiblingAfter(new_link_52157,node_52155);

goog.dom.removeNode(node_52155);


var G__52158 = seq__51821_52151;
var G__52159 = chunk__51824_52152;
var G__52160 = count__51825_52153;
var G__52161 = (i__51826_52154 + (1));
seq__51821_52151 = G__52158;
chunk__51824_52152 = G__52159;
count__51825_52153 = G__52160;
i__51826_52154 = G__52161;
continue;
} else {
var G__52162 = seq__51821_52151;
var G__52163 = chunk__51824_52152;
var G__52164 = count__51825_52153;
var G__52165 = (i__51826_52154 + (1));
seq__51821_52151 = G__52162;
chunk__51824_52152 = G__52163;
count__51825_52153 = G__52164;
i__51826_52154 = G__52165;
continue;
}
} else {
var temp__5735__auto___52167 = cljs.core.seq(seq__51821_52151);
if(temp__5735__auto___52167){
var seq__51821_52168__$1 = temp__5735__auto___52167;
if(cljs.core.chunked_seq_QMARK_(seq__51821_52168__$1)){
var c__4609__auto___52169 = cljs.core.chunk_first(seq__51821_52168__$1);
var G__52170 = cljs.core.chunk_rest(seq__51821_52168__$1);
var G__52171 = c__4609__auto___52169;
var G__52172 = cljs.core.count(c__4609__auto___52169);
var G__52173 = (0);
seq__51821_52151 = G__52170;
chunk__51824_52152 = G__52171;
count__51825_52153 = G__52172;
i__51826_52154 = G__52173;
continue;
} else {
var node_52174 = cljs.core.first(seq__51821_52168__$1);
var path_match_52175 = shadow.cljs.devtools.client.browser.match_paths(node_52174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52175)){
var new_link_52178 = (function (){var G__51846 = node_52174.cloneNode(true);
G__51846.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51846;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52175], 0));

goog.dom.insertSiblingAfter(new_link_52178,node_52174);

goog.dom.removeNode(node_52174);


var G__52181 = cljs.core.next(seq__51821_52168__$1);
var G__52182 = null;
var G__52183 = (0);
var G__52184 = (0);
seq__51821_52151 = G__52181;
chunk__51824_52152 = G__52182;
count__51825_52153 = G__52183;
i__51826_52154 = G__52184;
continue;
} else {
var G__52187 = cljs.core.next(seq__51821_52168__$1);
var G__52188 = null;
var G__52189 = (0);
var G__52190 = (0);
seq__51821_52151 = G__52187;
chunk__51824_52152 = G__52188;
count__51825_52153 = G__52189;
i__51826_52154 = G__52190;
continue;
}
}
} else {
}
}
break;
}


var G__52191 = seq__51764;
var G__52192 = chunk__51766;
var G__52193 = count__51767;
var G__52194 = (i__51768 + (1));
seq__51764 = G__52191;
chunk__51766 = G__52192;
count__51767 = G__52193;
i__51768 = G__52194;
continue;
} else {
var G__52195 = seq__51764;
var G__52196 = chunk__51766;
var G__52197 = count__51767;
var G__52198 = (i__51768 + (1));
seq__51764 = G__52195;
chunk__51766 = G__52196;
count__51767 = G__52197;
i__51768 = G__52198;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51764);
if(temp__5735__auto__){
var seq__51764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51764__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51764__$1);
var G__52199 = cljs.core.chunk_rest(seq__51764__$1);
var G__52200 = c__4609__auto__;
var G__52201 = cljs.core.count(c__4609__auto__);
var G__52202 = (0);
seq__51764 = G__52199;
chunk__51766 = G__52200;
count__51767 = G__52201;
i__51768 = G__52202;
continue;
} else {
var path = cljs.core.first(seq__51764__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51848_52205 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51851_52206 = null;
var count__51852_52207 = (0);
var i__51853_52208 = (0);
while(true){
if((i__51853_52208 < count__51852_52207)){
var node_52209 = chunk__51851_52206.cljs$core$IIndexed$_nth$arity$2(null,i__51853_52208);
var path_match_52210 = shadow.cljs.devtools.client.browser.match_paths(node_52209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52210)){
var new_link_52212 = (function (){var G__51868 = node_52209.cloneNode(true);
G__51868.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51868;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52210], 0));

goog.dom.insertSiblingAfter(new_link_52212,node_52209);

goog.dom.removeNode(node_52209);


var G__52216 = seq__51848_52205;
var G__52217 = chunk__51851_52206;
var G__52218 = count__51852_52207;
var G__52219 = (i__51853_52208 + (1));
seq__51848_52205 = G__52216;
chunk__51851_52206 = G__52217;
count__51852_52207 = G__52218;
i__51853_52208 = G__52219;
continue;
} else {
var G__52222 = seq__51848_52205;
var G__52223 = chunk__51851_52206;
var G__52224 = count__51852_52207;
var G__52225 = (i__51853_52208 + (1));
seq__51848_52205 = G__52222;
chunk__51851_52206 = G__52223;
count__51852_52207 = G__52224;
i__51853_52208 = G__52225;
continue;
}
} else {
var temp__5735__auto___52226__$1 = cljs.core.seq(seq__51848_52205);
if(temp__5735__auto___52226__$1){
var seq__51848_52227__$1 = temp__5735__auto___52226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51848_52227__$1)){
var c__4609__auto___52228 = cljs.core.chunk_first(seq__51848_52227__$1);
var G__52229 = cljs.core.chunk_rest(seq__51848_52227__$1);
var G__52230 = c__4609__auto___52228;
var G__52231 = cljs.core.count(c__4609__auto___52228);
var G__52232 = (0);
seq__51848_52205 = G__52229;
chunk__51851_52206 = G__52230;
count__51852_52207 = G__52231;
i__51853_52208 = G__52232;
continue;
} else {
var node_52233 = cljs.core.first(seq__51848_52227__$1);
var path_match_52234 = shadow.cljs.devtools.client.browser.match_paths(node_52233.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52234)){
var new_link_52235 = (function (){var G__51877 = node_52233.cloneNode(true);
G__51877.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52234),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51877;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52234], 0));

goog.dom.insertSiblingAfter(new_link_52235,node_52233);

goog.dom.removeNode(node_52233);


var G__52238 = cljs.core.next(seq__51848_52227__$1);
var G__52239 = null;
var G__52240 = (0);
var G__52241 = (0);
seq__51848_52205 = G__52238;
chunk__51851_52206 = G__52239;
count__51852_52207 = G__52240;
i__51853_52208 = G__52241;
continue;
} else {
var G__52242 = cljs.core.next(seq__51848_52227__$1);
var G__52243 = null;
var G__52244 = (0);
var G__52245 = (0);
seq__51848_52205 = G__52242;
chunk__51851_52206 = G__52243;
count__51852_52207 = G__52244;
i__51853_52208 = G__52245;
continue;
}
}
} else {
}
}
break;
}


var G__52246 = cljs.core.next(seq__51764__$1);
var G__52247 = null;
var G__52248 = (0);
var G__52249 = (0);
seq__51764 = G__52246;
chunk__51766 = G__52247;
count__51767 = G__52248;
i__51768 = G__52249;
continue;
} else {
var G__52252 = cljs.core.next(seq__51764__$1);
var G__52253 = null;
var G__52254 = (0);
var G__52255 = (0);
seq__51764 = G__52252;
chunk__51766 = G__52253;
count__51767 = G__52254;
i__51768 = G__52255;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__51884){
var map__51886 = p__51884;
var map__51886__$1 = (((((!((map__51886 == null))))?(((((map__51886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51886):map__51886);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51886__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51886__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__51890,done){
var map__51892 = p__51890;
var map__51892__$1 = (((((!((map__51892 == null))))?(((((map__51892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51892):map__51892);
var msg = map__51892__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51892__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51892__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51892__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51892__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51896){
var map__51897 = p__51896;
var map__51897__$1 = (((((!((map__51897 == null))))?(((((map__51897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51897):map__51897);
var src = map__51897__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51897__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e51899){var e = e51899;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__51900,done){
var map__51901 = p__51900;
var map__51901__$1 = (((((!((map__51901 == null))))?(((((map__51901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51901):map__51901);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51901__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__51907){
var map__51908 = p__51907;
var map__51908__$1 = (((((!((map__51908 == null))))?(((((map__51908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51908):map__51908);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51908__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51908__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__51914,done){
var map__51915 = p__51914;
var map__51915__$1 = (((((!((map__51915 == null))))?(((((map__51915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51915):map__51915);
var msg = map__51915__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51915__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51917_52276 = type;
var G__51917_52277__$1 = (((G__51917_52276 instanceof cljs.core.Keyword))?G__51917_52276.fqn:null);
switch (G__51917_52277__$1) {
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
var G__51920 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__51921 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__51922 = "POST";
var G__51923 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__51924 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51920,G__51921,G__51922,G__51923,G__51924);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__51932 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__51931 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__51931.cljs$core$IFn$_invoke$arity$1 ? fexpr__51931.cljs$core$IFn$_invoke$arity$1(G__51932) : fexpr__51931.call(null,G__51932));
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
}catch (e51945){var e = e51945;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___52303 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___52303)){
var s_52304 = temp__5735__auto___52303;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_52304.onclose = (function (e){
return null;
}));

s_52304.close();

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
