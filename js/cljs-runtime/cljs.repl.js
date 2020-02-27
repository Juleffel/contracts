goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50857){
var map__50858 = p__50857;
var map__50858__$1 = (((((!((map__50858 == null))))?(((((map__50858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50858):map__50858);
var m = map__50858__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50858__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50860_51112 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50861_51113 = null;
var count__50862_51114 = (0);
var i__50863_51115 = (0);
while(true){
if((i__50863_51115 < count__50862_51114)){
var f_51116 = chunk__50861_51113.cljs$core$IIndexed$_nth$arity$2(null,i__50863_51115);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51116], 0));


var G__51117 = seq__50860_51112;
var G__51118 = chunk__50861_51113;
var G__51119 = count__50862_51114;
var G__51120 = (i__50863_51115 + (1));
seq__50860_51112 = G__51117;
chunk__50861_51113 = G__51118;
count__50862_51114 = G__51119;
i__50863_51115 = G__51120;
continue;
} else {
var temp__5735__auto___51121 = cljs.core.seq(seq__50860_51112);
if(temp__5735__auto___51121){
var seq__50860_51122__$1 = temp__5735__auto___51121;
if(cljs.core.chunked_seq_QMARK_(seq__50860_51122__$1)){
var c__4609__auto___51123 = cljs.core.chunk_first(seq__50860_51122__$1);
var G__51124 = cljs.core.chunk_rest(seq__50860_51122__$1);
var G__51125 = c__4609__auto___51123;
var G__51126 = cljs.core.count(c__4609__auto___51123);
var G__51127 = (0);
seq__50860_51112 = G__51124;
chunk__50861_51113 = G__51125;
count__50862_51114 = G__51126;
i__50863_51115 = G__51127;
continue;
} else {
var f_51128 = cljs.core.first(seq__50860_51122__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51128], 0));


var G__51129 = cljs.core.next(seq__50860_51122__$1);
var G__51130 = null;
var G__51131 = (0);
var G__51132 = (0);
seq__50860_51112 = G__51129;
chunk__50861_51113 = G__51130;
count__50862_51114 = G__51131;
i__50863_51115 = G__51132;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51133 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51133], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51133)))?cljs.core.second(arglists_51133):arglists_51133)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50865_51135 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50866_51136 = null;
var count__50867_51137 = (0);
var i__50868_51138 = (0);
while(true){
if((i__50868_51138 < count__50867_51137)){
var vec__50879_51139 = chunk__50866_51136.cljs$core$IIndexed$_nth$arity$2(null,i__50868_51138);
var name_51140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50879_51139,(0),null);
var map__50882_51141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50879_51139,(1),null);
var map__50882_51142__$1 = (((((!((map__50882_51141 == null))))?(((((map__50882_51141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50882_51141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50882_51141):map__50882_51141);
var doc_51143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882_51142__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882_51142__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51140], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51144], 0));

if(cljs.core.truth_(doc_51143)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51143], 0));
} else {
}


var G__51145 = seq__50865_51135;
var G__51146 = chunk__50866_51136;
var G__51147 = count__50867_51137;
var G__51148 = (i__50868_51138 + (1));
seq__50865_51135 = G__51145;
chunk__50866_51136 = G__51146;
count__50867_51137 = G__51147;
i__50868_51138 = G__51148;
continue;
} else {
var temp__5735__auto___51149 = cljs.core.seq(seq__50865_51135);
if(temp__5735__auto___51149){
var seq__50865_51151__$1 = temp__5735__auto___51149;
if(cljs.core.chunked_seq_QMARK_(seq__50865_51151__$1)){
var c__4609__auto___51152 = cljs.core.chunk_first(seq__50865_51151__$1);
var G__51153 = cljs.core.chunk_rest(seq__50865_51151__$1);
var G__51154 = c__4609__auto___51152;
var G__51155 = cljs.core.count(c__4609__auto___51152);
var G__51156 = (0);
seq__50865_51135 = G__51153;
chunk__50866_51136 = G__51154;
count__50867_51137 = G__51155;
i__50868_51138 = G__51156;
continue;
} else {
var vec__50884_51157 = cljs.core.first(seq__50865_51151__$1);
var name_51158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50884_51157,(0),null);
var map__50887_51159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50884_51157,(1),null);
var map__50887_51160__$1 = (((((!((map__50887_51159 == null))))?(((((map__50887_51159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50887_51159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50887_51159):map__50887_51159);
var doc_51161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50887_51160__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50887_51160__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51158], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51162], 0));

if(cljs.core.truth_(doc_51161)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51161], 0));
} else {
}


var G__51164 = cljs.core.next(seq__50865_51151__$1);
var G__51165 = null;
var G__51166 = (0);
var G__51167 = (0);
seq__50865_51135 = G__51164;
chunk__50866_51136 = G__51165;
count__50867_51137 = G__51166;
i__50868_51138 = G__51167;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50889 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50890 = null;
var count__50891 = (0);
var i__50892 = (0);
while(true){
if((i__50892 < count__50891)){
var role = chunk__50890.cljs$core$IIndexed$_nth$arity$2(null,i__50892);
var temp__5735__auto___51168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51168__$1)){
var spec_51169 = temp__5735__auto___51168__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51169)], 0));
} else {
}


var G__51170 = seq__50889;
var G__51171 = chunk__50890;
var G__51172 = count__50891;
var G__51173 = (i__50892 + (1));
seq__50889 = G__51170;
chunk__50890 = G__51171;
count__50891 = G__51172;
i__50892 = G__51173;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50889);
if(temp__5735__auto____$1){
var seq__50889__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50889__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50889__$1);
var G__51179 = cljs.core.chunk_rest(seq__50889__$1);
var G__51180 = c__4609__auto__;
var G__51181 = cljs.core.count(c__4609__auto__);
var G__51182 = (0);
seq__50889 = G__51179;
chunk__50890 = G__51180;
count__50891 = G__51181;
i__50892 = G__51182;
continue;
} else {
var role = cljs.core.first(seq__50889__$1);
var temp__5735__auto___51183__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51183__$2)){
var spec_51184 = temp__5735__auto___51183__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51184)], 0));
} else {
}


var G__51185 = cljs.core.next(seq__50889__$1);
var G__51186 = null;
var G__51187 = (0);
var G__51188 = (0);
seq__50889 = G__51185;
chunk__50890 = G__51186;
count__50891 = G__51187;
i__50892 = G__51188;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51192 = cljs.core.ex_cause(t);
via = G__51191;
t = G__51192;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50916 = datafied_throwable;
var map__50916__$1 = (((((!((map__50916 == null))))?(((((map__50916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50916):map__50916);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50916__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50917 = cljs.core.last(via);
var map__50917__$1 = (((((!((map__50917 == null))))?(((((map__50917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50917):map__50917);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50918 = data;
var map__50918__$1 = (((((!((map__50918 == null))))?(((((map__50918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50918):map__50918);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50919 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50919__$1 = (((((!((map__50919 == null))))?(((((map__50919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50919):map__50919);
var top_data = map__50919__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50938 = phase;
var G__50938__$1 = (((G__50938 instanceof cljs.core.Keyword))?G__50938.fqn:null);
switch (G__50938__$1) {
case "read-source":
var map__50948 = data;
var map__50948__$1 = (((((!((map__50948 == null))))?(((((map__50948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50948):map__50948);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50951 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50951);
var G__50951__$2 = (cljs.core.truth_((function (){var fexpr__50954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50954.cljs$core$IFn$_invoke$arity$1 ? fexpr__50954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50951__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50951__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50951__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50957 = top_data;
var G__50957__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50957,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50957);
var G__50957__$2 = (cljs.core.truth_((function (){var fexpr__50962 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50962.cljs$core$IFn$_invoke$arity$1 ? fexpr__50962.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50962.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50957__$1);
var G__50957__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50957__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50957__$2);
var G__50957__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50957__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50957__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50957__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50957__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50966 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50966,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50966,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50966,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50966,(3),null);
var G__50970 = top_data;
var G__50970__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50970,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50970);
var G__50970__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50970__$1);
var G__50970__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50970__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50970__$2);
var G__50970__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50970__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50970__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50970__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50970__$4;
}

break;
case "execution":
var vec__50976 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50976,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50976,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50976,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50976,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50911_SHARP_){
var or__4185__auto__ = (p1__50911_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50993 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50993.cljs$core$IFn$_invoke$arity$1 ? fexpr__50993.cljs$core$IFn$_invoke$arity$1(p1__50911_SHARP_) : fexpr__50993.call(null,p1__50911_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50997 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50997__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50997,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50997);
var G__50997__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50997__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50997__$1);
var G__50997__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50997__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50997__$2);
var G__50997__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50997__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50997__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50997__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50997__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50938__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51031){
var map__51032 = p__51031;
var map__51032__$1 = (((((!((map__51032 == null))))?(((((map__51032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51032):map__51032);
var triage_data = map__51032__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51032__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51056 = phase;
var G__51056__$1 = (((G__51056 instanceof cljs.core.Keyword))?G__51056.fqn:null);
switch (G__51056__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51060 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51061 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51062 = loc;
var G__51063 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51064_51202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51065_51203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51066_51204 = true;
var _STAR_print_fn_STAR__temp_val__51067_51205 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51066_51204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51067_51205);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51027_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51027_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51065_51203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51064_51202);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51060,G__51061,G__51062,G__51063) : format.call(null,G__51060,G__51061,G__51062,G__51063));

break;
case "macroexpansion":
var G__51076 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51077 = cause_type;
var G__51078 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51079 = loc;
var G__51080 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51076,G__51077,G__51078,G__51079,G__51080) : format.call(null,G__51076,G__51077,G__51078,G__51079,G__51080));

break;
case "compile-syntax-check":
var G__51081 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51082 = cause_type;
var G__51083 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51084 = loc;
var G__51085 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51081,G__51082,G__51083,G__51084,G__51085) : format.call(null,G__51081,G__51082,G__51083,G__51084,G__51085));

break;
case "compilation":
var G__51090 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51091 = cause_type;
var G__51092 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51093 = loc;
var G__51094 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51090,G__51091,G__51092,G__51093,G__51094) : format.call(null,G__51090,G__51091,G__51092,G__51093,G__51094));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51095 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51096 = symbol;
var G__51097 = loc;
var G__51098 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51099_51212 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51100_51213 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51101_51214 = true;
var _STAR_print_fn_STAR__temp_val__51102_51215 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51101_51214);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51102_51215);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51028_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51028_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51100_51213);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51099_51212);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51095,G__51096,G__51097,G__51098) : format.call(null,G__51095,G__51096,G__51097,G__51098));
} else {
var G__51103 = "Execution error%s at %s(%s).\n%s\n";
var G__51104 = cause_type;
var G__51105 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51106 = loc;
var G__51107 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51103,G__51104,G__51105,G__51106,G__51107) : format.call(null,G__51103,G__51104,G__51105,G__51106,G__51107));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51056__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
