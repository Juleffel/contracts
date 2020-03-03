goog.provide('re_frisk_shell.re_com.ui');
goog.require('cljs.core');
re_frisk_shell.re_com.ui.small_button = (function re_frisk_shell$re_com$ui$small_button(var_args){
var G__43565 = arguments.length;
switch (G__43565) {
case 1:
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,label);
}));

(re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2 = (function (p__43573,label){
var map__43574 = p__43573;
var map__43574__$1 = (((((!((map__43574 == null))))?(((((map__43574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43574):map__43574);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43574__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-xs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
}));

(re_frisk_shell.re_com.ui.small_button.cljs$lang$maxFixedArity = 2);

re_frisk_shell.re_com.ui.big_button = (function re_frisk_shell$re_com$ui$big_button(style,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-lg",new cljs.core.Keyword(null,"style","style",-496642736),style], null),label], null);
});
re_frisk_shell.re_com.ui.scroller = (function re_frisk_shell$re_com$ui$scroller(var_args){
var G__43580 = arguments.length;
switch (G__43580) {
case 1:
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$1 = (function (div){
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,div);
}));

(re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2 = (function (attr,div){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attr)], 0))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"style","style",-496642736))], 0)),div], null);
}));

(re_frisk_shell.re_com.ui.scroller.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=re_frisk_shell.re_com.ui.js.map
