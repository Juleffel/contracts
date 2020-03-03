goog.provide('re_frisk.data');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.data !== 'undefined') && (typeof re_frisk.data.initialized !== 'undefined')){
} else {
re_frisk.data.initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.data !== 'undefined') && (typeof re_frisk.data.re_frame_data !== 'undefined')){
} else {
re_frisk.data.re_frame_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.data !== 'undefined') && (typeof re_frisk.data.app_db_prev_event !== 'undefined')){
} else {
re_frisk.data.app_db_prev_event = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.data !== 'undefined') && (typeof re_frisk.data.re_frame_events !== 'undefined')){
} else {
re_frisk.data.re_frame_events = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.data !== 'undefined') && (typeof re_frisk.data.deb_data !== 'undefined')){
} else {
re_frisk.data.deb_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132),true], null));
}

//# sourceMappingURL=re_frisk.data.js.map
