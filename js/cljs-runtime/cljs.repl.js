goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49344){
var map__49348 = p__49344;
var map__49348__$1 = (((((!((map__49348 == null))))?(((((map__49348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49348):map__49348);
var m = map__49348__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49348__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49354_49694 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49355_49695 = null;
var count__49356_49696 = (0);
var i__49357_49697 = (0);
while(true){
if((i__49357_49697 < count__49356_49696)){
var f_49698 = chunk__49355_49695.cljs$core$IIndexed$_nth$arity$2(null,i__49357_49697);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49698], 0));


var G__49699 = seq__49354_49694;
var G__49700 = chunk__49355_49695;
var G__49701 = count__49356_49696;
var G__49702 = (i__49357_49697 + (1));
seq__49354_49694 = G__49699;
chunk__49355_49695 = G__49700;
count__49356_49696 = G__49701;
i__49357_49697 = G__49702;
continue;
} else {
var temp__5735__auto___49704 = cljs.core.seq(seq__49354_49694);
if(temp__5735__auto___49704){
var seq__49354_49705__$1 = temp__5735__auto___49704;
if(cljs.core.chunked_seq_QMARK_(seq__49354_49705__$1)){
var c__4609__auto___49706 = cljs.core.chunk_first(seq__49354_49705__$1);
var G__49707 = cljs.core.chunk_rest(seq__49354_49705__$1);
var G__49708 = c__4609__auto___49706;
var G__49709 = cljs.core.count(c__4609__auto___49706);
var G__49710 = (0);
seq__49354_49694 = G__49707;
chunk__49355_49695 = G__49708;
count__49356_49696 = G__49709;
i__49357_49697 = G__49710;
continue;
} else {
var f_49712 = cljs.core.first(seq__49354_49705__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49712], 0));


var G__49716 = cljs.core.next(seq__49354_49705__$1);
var G__49717 = null;
var G__49718 = (0);
var G__49719 = (0);
seq__49354_49694 = G__49716;
chunk__49355_49695 = G__49717;
count__49356_49696 = G__49718;
i__49357_49697 = G__49719;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49721 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49721], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49721)))?cljs.core.second(arglists_49721):arglists_49721)], 0));
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
var seq__49369_49730 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49370_49731 = null;
var count__49371_49732 = (0);
var i__49372_49733 = (0);
while(true){
if((i__49372_49733 < count__49371_49732)){
var vec__49396_49737 = chunk__49370_49731.cljs$core$IIndexed$_nth$arity$2(null,i__49372_49733);
var name_49738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396_49737,(0),null);
var map__49399_49739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396_49737,(1),null);
var map__49399_49740__$1 = (((((!((map__49399_49739 == null))))?(((((map__49399_49739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49399_49739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49399_49739):map__49399_49739);
var doc_49741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49399_49740__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49399_49740__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49738], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49742], 0));

if(cljs.core.truth_(doc_49741)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49741], 0));
} else {
}


var G__49744 = seq__49369_49730;
var G__49745 = chunk__49370_49731;
var G__49746 = count__49371_49732;
var G__49747 = (i__49372_49733 + (1));
seq__49369_49730 = G__49744;
chunk__49370_49731 = G__49745;
count__49371_49732 = G__49746;
i__49372_49733 = G__49747;
continue;
} else {
var temp__5735__auto___49748 = cljs.core.seq(seq__49369_49730);
if(temp__5735__auto___49748){
var seq__49369_49750__$1 = temp__5735__auto___49748;
if(cljs.core.chunked_seq_QMARK_(seq__49369_49750__$1)){
var c__4609__auto___49751 = cljs.core.chunk_first(seq__49369_49750__$1);
var G__49752 = cljs.core.chunk_rest(seq__49369_49750__$1);
var G__49753 = c__4609__auto___49751;
var G__49754 = cljs.core.count(c__4609__auto___49751);
var G__49755 = (0);
seq__49369_49730 = G__49752;
chunk__49370_49731 = G__49753;
count__49371_49732 = G__49754;
i__49372_49733 = G__49755;
continue;
} else {
var vec__49411_49756 = cljs.core.first(seq__49369_49750__$1);
var name_49757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49411_49756,(0),null);
var map__49414_49758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49411_49756,(1),null);
var map__49414_49759__$1 = (((((!((map__49414_49758 == null))))?(((((map__49414_49758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49414_49758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49414_49758):map__49414_49758);
var doc_49760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414_49759__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414_49759__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49757], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49761], 0));

if(cljs.core.truth_(doc_49760)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49760], 0));
} else {
}


var G__49766 = cljs.core.next(seq__49369_49750__$1);
var G__49767 = null;
var G__49768 = (0);
var G__49769 = (0);
seq__49369_49730 = G__49766;
chunk__49370_49731 = G__49767;
count__49371_49732 = G__49768;
i__49372_49733 = G__49769;
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

var seq__49418 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49419 = null;
var count__49420 = (0);
var i__49421 = (0);
while(true){
if((i__49421 < count__49420)){
var role = chunk__49419.cljs$core$IIndexed$_nth$arity$2(null,i__49421);
var temp__5735__auto___49771__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49771__$1)){
var spec_49772 = temp__5735__auto___49771__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49772)], 0));
} else {
}


var G__49773 = seq__49418;
var G__49774 = chunk__49419;
var G__49775 = count__49420;
var G__49776 = (i__49421 + (1));
seq__49418 = G__49773;
chunk__49419 = G__49774;
count__49420 = G__49775;
i__49421 = G__49776;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49418);
if(temp__5735__auto____$1){
var seq__49418__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49418__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49418__$1);
var G__49778 = cljs.core.chunk_rest(seq__49418__$1);
var G__49779 = c__4609__auto__;
var G__49780 = cljs.core.count(c__4609__auto__);
var G__49781 = (0);
seq__49418 = G__49778;
chunk__49419 = G__49779;
count__49420 = G__49780;
i__49421 = G__49781;
continue;
} else {
var role = cljs.core.first(seq__49418__$1);
var temp__5735__auto___49785__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49785__$2)){
var spec_49787 = temp__5735__auto___49785__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49787)], 0));
} else {
}


var G__49795 = cljs.core.next(seq__49418__$1);
var G__49796 = null;
var G__49797 = (0);
var G__49798 = (0);
seq__49418 = G__49795;
chunk__49419 = G__49796;
count__49420 = G__49797;
i__49421 = G__49798;
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
var G__49806 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49807 = cljs.core.ex_cause(t);
via = G__49806;
t = G__49807;
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
var map__49470 = datafied_throwable;
var map__49470__$1 = (((((!((map__49470 == null))))?(((((map__49470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49470):map__49470);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49470__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49470__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49470__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49471 = cljs.core.last(via);
var map__49471__$1 = (((((!((map__49471 == null))))?(((((map__49471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49471):map__49471);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49471__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49471__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49471__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49472 = data;
var map__49472__$1 = (((((!((map__49472 == null))))?(((((map__49472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49472):map__49472);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49472__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49473 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49473__$1 = (((((!((map__49473 == null))))?(((((map__49473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49473):map__49473);
var top_data = map__49473__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49473__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49492 = phase;
var G__49492__$1 = (((G__49492 instanceof cljs.core.Keyword))?G__49492.fqn:null);
switch (G__49492__$1) {
case "read-source":
var map__49496 = data;
var map__49496__$1 = (((((!((map__49496 == null))))?(((((map__49496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49496):map__49496);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49504 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49504__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49504,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49504);
var G__49504__$2 = (cljs.core.truth_((function (){var fexpr__49510 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49510.cljs$core$IFn$_invoke$arity$1 ? fexpr__49510.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49510.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49504__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49504__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49504__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49504__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49514 = top_data;
var G__49514__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49514);
var G__49514__$2 = (cljs.core.truth_((function (){var fexpr__49516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49516.cljs$core$IFn$_invoke$arity$1 ? fexpr__49516.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49516.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49514__$1);
var G__49514__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49514__$2);
var G__49514__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49514__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49514__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49514__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49521 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49521,(3),null);
var G__49528 = top_data;
var G__49528__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49528,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49528);
var G__49528__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49528__$1);
var G__49528__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49528__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49528__$2);
var G__49528__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49528__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49528__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49528__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49528__$4;
}

break;
case "execution":
var vec__49558 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49558,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49558,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49558,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49558,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49445_SHARP_){
var or__4185__auto__ = (p1__49445_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__49571 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49571.cljs$core$IFn$_invoke$arity$1 ? fexpr__49571.cljs$core$IFn$_invoke$arity$1(p1__49445_SHARP_) : fexpr__49571.call(null,p1__49445_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__49573 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49573__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49573,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49573);
var G__49573__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49573__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49573__$1);
var G__49573__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49573__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49573__$2);
var G__49573__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49573__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49573__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49573__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49573__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49594){
var map__49600 = p__49594;
var map__49600__$1 = (((((!((map__49600 == null))))?(((((map__49600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49600):map__49600);
var triage_data = map__49600__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49629 = phase;
var G__49629__$1 = (((G__49629 instanceof cljs.core.Keyword))?G__49629.fqn:null);
switch (G__49629__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49631 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49632 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49633 = loc;
var G__49634 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49639_49882 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49640_49883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49641_49884 = true;
var _STAR_print_fn_STAR__temp_val__49642_49885 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49641_49884);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49642_49885);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49585_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49585_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49640_49883);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49639_49882);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49631,G__49632,G__49633,G__49634) : format.call(null,G__49631,G__49632,G__49633,G__49634));

break;
case "macroexpansion":
var G__49650 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49651 = cause_type;
var G__49652 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49653 = loc;
var G__49654 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49650,G__49651,G__49652,G__49653,G__49654) : format.call(null,G__49650,G__49651,G__49652,G__49653,G__49654));

break;
case "compile-syntax-check":
var G__49656 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49657 = cause_type;
var G__49658 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49659 = loc;
var G__49660 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49656,G__49657,G__49658,G__49659,G__49660) : format.call(null,G__49656,G__49657,G__49658,G__49659,G__49660));

break;
case "compilation":
var G__49661 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49662 = cause_type;
var G__49663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49664 = loc;
var G__49665 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49661,G__49662,G__49663,G__49664,G__49665) : format.call(null,G__49661,G__49662,G__49663,G__49664,G__49665));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49668 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49669 = symbol;
var G__49670 = loc;
var G__49671 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49672_49912 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49673_49913 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49674_49914 = true;
var _STAR_print_fn_STAR__temp_val__49675_49915 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49674_49914);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49675_49915);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49590_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49590_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49673_49913);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49672_49912);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49668,G__49669,G__49670,G__49671) : format.call(null,G__49668,G__49669,G__49670,G__49671));
} else {
var G__49680 = "Execution error%s at %s(%s).\n%s\n";
var G__49681 = cause_type;
var G__49682 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49683 = loc;
var G__49684 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49680,G__49681,G__49682,G__49683,G__49684) : format.call(null,G__49680,G__49681,G__49682,G__49683,G__49684));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49629__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
