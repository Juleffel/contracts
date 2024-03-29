goog.provide('multis.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
multis.utils.triggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
multis.utils.add_trigger = (function multis$utils$add_trigger(id,trigger){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(multis.utils.triggers,(function (p1__40727_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40727_SHARP_,id,trigger);
}));
});
multis.utils.get_trigger = (function multis$utils$get_trigger(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(multis.utils.triggers),id);
});
multis.utils.remove_trigger = (function multis$utils$remove_trigger(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(multis.utils.triggers,(function (p1__40730_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40730_SHARP_,id);
}));
});
multis.utils.reg_trigger_raw = (function multis$utils$reg_trigger_raw(id,subs,func){
var trigger = reagent.core.track_BANG_((function (){
var subs_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe),subs);
var event = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,subs_values);
if(cljs.core.truth_(event)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
return null;
}
}));
return multis.utils.add_trigger(id,trigger);
});
multis.utils.reg_trigger = (function multis$utils$reg_trigger(id,subs,event){
return multis.utils.reg_trigger_raw(id,subs,(function() { 
var G__40778__delegate = function (subs_values){
if(cljs.core.every_QMARK_(cljs.core.identity,subs_values)){
return event;
} else {
return null;
}
};
var G__40778 = function (var_args){
var subs_values = null;
if (arguments.length > 0) {
var G__40782__i = 0, G__40782__a = new Array(arguments.length -  0);
while (G__40782__i < G__40782__a.length) {G__40782__a[G__40782__i] = arguments[G__40782__i + 0]; ++G__40782__i;}
  subs_values = new cljs.core.IndexedSeq(G__40782__a,0,null);
} 
return G__40778__delegate.call(this,subs_values);};
G__40778.cljs$lang$maxFixedArity = 0;
G__40778.cljs$lang$applyTo = (function (arglist__40784){
var subs_values = cljs.core.seq(arglist__40784);
return G__40778__delegate(subs_values);
});
G__40778.cljs$core$IFn$_invoke$arity$variadic = G__40778__delegate;
return G__40778;
})()
);
});
multis.utils.unreg_trigger = (function multis$utils$unreg_trigger(id){
reagent.core.dispose_BANG_(multis.utils.get_trigger(id));

return multis.utils.remove_trigger(id);
});
multis.utils.stream_values_valid_QMARK_ = (function multis$utils$stream_values_valid_QMARK_(user_address,recipient_address,amount,duration){
var and__4174__auto__ = user_address;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = recipient_address;
if(cljs.core.truth_(and__4174__auto____$1)){
return ((((0) < amount)) && (((0) < duration)) && ((amount >= ((3600) * duration))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(amount,((3600) * duration)),(0))));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});

//# sourceMappingURL=multis.utils.js.map
