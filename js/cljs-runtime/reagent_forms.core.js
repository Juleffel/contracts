goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.scroll_to = (function reagent_forms$core$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__53801 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53801,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53801,(1),null);
return (list_elem.scrollTop = (offset_top - ((2) * item_height)));
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(1)),/\./);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.cursor_for_id = cljs.core.memoize((function (doc,id){
return reagent.core.cursor(doc,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id)));
}));
reagent_forms.core.run_events = (function reagent_forms$core$run_events(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53805_SHARP_,p2__53804_SHARP_){
var or__4185__auto__ = (p2__53804_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p2__53804_SHARP_.cljs$core$IFn$_invoke$arity$4(id,path,value,p1__53805_SHARP_) : p2__53804_SHARP_.call(null,id,path,value,p1__53805_SHARP_));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p1__53805_SHARP_;
}
}),doc,events);
});
reagent_forms.core.mk_update_fn = (function reagent_forms$core$mk_update_fn(doc,events){
return (function (id,update_fn,value){
var result = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),(function (current_value){
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(current_value,value) : update_fn.call(null,current_value,value));
}));
if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
cljs.core.reset_BANG_((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),value);

if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__53806 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__53806) : wrapper.call(null,G__53806));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__53807 = id;
var G__53808 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53807,G__53808) : save_BANG_.call(null,G__53807,G__53808));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__53809 = id;
var G__53810 = update_fn;
var G__53811 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__53809,G__53810,G__53811) : update_BANG_.call(null,G__53809,G__53810,G__53811));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__53812,node){
var map__53813 = p__53812;
var map__53813__$1 = (((((!((map__53813 == null))))?(((((map__53813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53813):map__53813);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53813__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53813__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53813__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var in_fn = temp__5733__auto__;
return reagent_forms.core.wrap_get_fn(get,in_fn);
} else {
return get;
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_save_fn(save_BANG_,out_fn);
} else {
return save_BANG_;
}
})(),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_update_fn(update_BANG_,out_fn);
} else {
return update_BANG_;
}
})()], null);
});
reagent_forms.core.set_disabled = (function reagent_forms$core$set_disabled(attrs,update_disabled_QMARK_){
if(cljs.core.truth_((function (){var and__4174__auto__ = update_disabled_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!((new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (p1__53815_SHARP_){
if(cljs.core.fn_QMARK_(p1__53815_SHARP_)){
return (p1__53815_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__53815_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__53815_SHARP_.call(null));
} else {
return p1__53815_SHARP_;
}
}));
} else {
return attrs;
}
});
reagent_forms.core.call_attr = (function reagent_forms$core$call_attr(doc,attr){
var doc__$1 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
if(cljs.core.fn_QMARK_(attr)){
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(doc__$1) : attr.call(null,doc__$1));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc__$1,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(attr) : reagent_forms.core.id__GT_path.call(null,attr)));
}
});
reagent_forms.core.update_class = (function reagent_forms$core$update_class(attrs,classes){
if(cljs.core.truth_(cljs.core.not_empty(classes))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__53817_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(((typeof p1__53817_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53817_SHARP_], null):p1__53817_SHARP_),classes)));
}));
} else {
return attrs;
}
});
reagent_forms.core.update_attrs = (function reagent_forms$core$update_attrs(p__53819,doc){
var map__53820 = p__53819;
var map__53820__$1 = (((((!((map__53820 == null))))?(((((map__53820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53820):map__53820);
var attrs = map__53820__$1;
var set_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53820__$1,new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473));
var or__4185__auto__ = (cljs.core.truth_(set_attributes)?(function (){var G__53824 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
var G__53825 = attrs;
return (set_attributes.cljs$core$IFn$_invoke$arity$2 ? set_attributes.cljs$core$IFn$_invoke$arity$2(G__53824,G__53825) : set_attributes.call(null,G__53824,G__53825));
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return attrs;
}
});
reagent_forms.core.set_validation_class = (function reagent_forms$core$set_validation_class(attrs,doc){
var temp__5733__auto__ = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var valid = temp__5733__auto__;
return reagent_forms.core.update_class(attrs,reagent_forms.core.call_attr(doc,valid));
} else {
return attrs;
}
});
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"fmt","fmt",332300772),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694),new cljs.core.Keyword(null,"out-fn","out-fn",747295447),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"save-fn","save-fn",383840986),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"postamble","postamble",-500033366),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"date-format","date-format",-557196721),new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568),new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473)], 0));
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.format_type !== 'undefined')){
} else {
reagent_forms.core.format_type = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53827 = cljs.core.get_global_hierarchy;
return (fexpr__53827.cljs$core$IFn$_invoke$arity$0 ? fexpr__53827.cljs$core$IFn$_invoke$arity$0() : fexpr__53827.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),(function (field_type,_){
if(cljs.core.truth_((function (){var fexpr__53828 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null);
return (fexpr__53828.cljs$core$IFn$_invoke$arity$1 ? fexpr__53828.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__53828.call(null,field_type));
})())){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_(((cljs.core.not(isNaN(parseFloat(value))))?fmt:false))){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind !== 'undefined')){
} else {
reagent_forms.core.bind = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53829 = cljs.core.get_global_hierarchy;
return (fexpr__53829.cljs$core$IFn$_invoke$arity$0 ? fexpr__53829.cljs$core$IFn$_invoke$arity$0() : fexpr__53829.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),(function (p__53830,_){
var map__53831 = p__53830;
var map__53831__$1 = (((((!((map__53831 == null))))?(((((map__53831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53831):map__53831);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53831__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_((function (){var fexpr__53833 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__53833.cljs$core$IFn$_invoke$arity$1 ? fexpr__53833.cljs$core$IFn$_invoke$arity$1(field) : fexpr__53833.call(null,field));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__53838,p__53839){
var map__53840 = p__53838;
var map__53840__$1 = (((((!((map__53840 == null))))?(((((map__53840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53840):map__53840);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53840__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53840__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53840__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__53841 = p__53839;
var map__53841__$1 = (((((!((map__53841 == null))))?(((((map__53841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53841):map__53841);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53841__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53841__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__4185__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53837_SHARP_){
var G__53844 = id;
var G__53845 = (function (){var G__53846 = field;
var G__53847 = reagent_forms.core.value_of(p1__53837_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__53846,G__53847) : reagent_forms.core.format_type.call(null,G__53846,G__53847));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53844,G__53845) : save_BANG_.call(null,G__53844,G__53845));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__53848,p__53849){
var map__53850 = p__53848;
var map__53850__$1 = (((((!((map__53850 == null))))?(((((map__53850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53850):map__53850);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__53851 = p__53849;
var map__53851__$1 = (((((!((map__53851 == null))))?(((((map__53851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53851):map__53851);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53851__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53851__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__53854 = id;
var G__53855 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53854,G__53855) : save_BANG_.call(null,G__53854,G__53855));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54115 = arguments.length;
var i__4790__auto___54116 = (0);
while(true){
if((i__4790__auto___54116 < len__4789__auto___54115)){
args__4795__auto__.push((arguments[i__4790__auto___54116]));

var G__54117 = (i__4790__auto___54116 + (1));
i__4790__auto___54116 = G__54117;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__53859,opts,p__53860){
var vec__53861 = p__53859;
var seq__53862 = cljs.core.seq(vec__53861);
var first__53863 = cljs.core.first(seq__53862);
var seq__53862__$1 = cljs.core.next(seq__53862);
var type = first__53863;
var first__53863__$1 = cljs.core.first(seq__53862__$1);
var seq__53862__$2 = cljs.core.next(seq__53862__$1);
var attrs = first__53863__$1;
var body = seq__53862__$2;
var vec__53864 = p__53860;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53864,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0))], 0))], null),body);
}));

(reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq53856){
var G__53857 = cljs.core.first(seq53856);
var seq53856__$1 = cljs.core.next(seq53856);
var G__53858 = cljs.core.first(seq53856__$1);
var seq53856__$2 = cljs.core.next(seq53856__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53857,G__53858,seq53856__$2);
}));

if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.init_field !== 'undefined')){
} else {
reagent_forms.core.init_field = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53867 = cljs.core.get_global_hierarchy;
return (fexpr__53867.cljs$core$IFn$_invoke$arity$0 ? fexpr__53867.cljs$core$IFn$_invoke$arity$0() : fexpr__53867.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),(function (p__53868,_){
var vec__53869 = p__53868;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53869,(0),null);
var map__53872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53869,(1),null);
var map__53872__$1 = (((((!((map__53872 == null))))?(((((map__53872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53872):map__53872);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__53874 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__53874.cljs$core$IFn$_invoke$arity$1 ? fexpr__53874.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__53874.call(null,field__$1));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__53875,p__53876){
var vec__53877 = p__53875;
var seq__53878 = cljs.core.seq(vec__53877);
var first__53879 = cljs.core.first(seq__53878);
var seq__53878__$1 = cljs.core.next(seq__53878);
var type = first__53879;
var first__53879__$1 = cljs.core.first(seq__53878__$1);
var seq__53878__$2 = cljs.core.next(seq__53878__$1);
var attrs = first__53879__$1;
var body = seq__53878__$2;
var map__53880 = p__53876;
var map__53880__$1 = (((((!((map__53880 == null))))?(((((map__53880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53880):map__53880);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__53882,p__53883){
var vec__53884 = p__53882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53884,(0),null);
var map__53887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53884,(1),null);
var map__53887__$1 = (((((!((map__53887 == null))))?(((((map__53887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53887):map__53887);
var attrs = map__53887__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53887__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__53884;
var map__53888 = p__53883;
var map__53888__$1 = (((((!((map__53888 == null))))?(((((map__53888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53888):map__53888);
var opts = map__53888__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__53893,p__53894){
var vec__53895 = p__53893;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53895,(0),null);
var map__53898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53895,(1),null);
var map__53898__$1 = (((((!((map__53898 == null))))?(((((map__53898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53898):map__53898);
var attrs = map__53898__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53898__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53898__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__53899 = p__53894;
var map__53899__$1 = (((((!((map__53899 == null))))?(((((map__53899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53899):map__53899);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53899__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53899__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53891_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__53891_SHARP_));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__53892_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__53902 = id;
var G__53903 = (function (){var G__53904 = new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
var G__53905 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__53892_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__53904,G__53905) : reagent_forms.core.format_type.call(null,G__53904,G__53905));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53902,G__53903) : save_BANG_.call(null,G__53902,G__53903));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__53909,p__53910){
var vec__53911 = p__53909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53911,(0),null);
var map__53914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53911,(1),null);
var map__53914__$1 = (((((!((map__53914 == null))))?(((((map__53914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53914):map__53914);
var attrs = map__53914__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53914__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"save-fn","save-fn",383840986));
var map__53915 = p__53910;
var map__53915__$1 = (((((!((map__53915 == null))))?(((((map__53915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53915):map__53915);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53915__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:(function (p1__53906_SHARP_){
return reagent_forms.datepicker.format_date(p1__53906_SHARP_,reagent_forms.datepicker.parse_format(date_format));
}));
var selected_date = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__4185__auto__ = selected_month;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var save_value = (cljs.core.truth_(save_fn)?(function (p1__53907_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__53907_SHARP_) : update_BANG_.call(null,id,save_fn,p1__53907_SHARP_));
}):(function (p1__53908_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__53908_SHARP_) : save_BANG_.call(null,id,p1__53908_SHARP_));
}));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(expanded_QMARK_,false);
}
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5733__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__5733__auto__)){
var date = temp__5733__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(date) : fmt.call(null,date));
} else {
return "";
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);

return cljs.core.deref(dom_node).focus();
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,(function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
}),save_value,inline,lang], null)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
})], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__53918,p__53919){
var vec__53920 = p__53918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53920,(0),null);
var map__53923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53920,(1),null);
var map__53923__$1 = (((((!((map__53923 == null))))?(((((map__53923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53923):map__53923);
var attrs = map__53923__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__53920;
var map__53924 = p__53919;
var map__53924__$1 = (((((!((map__53924 == null))))?(((((map__53924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53924):map__53924);
var opts = map__53924__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53924__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4185__auto__ = checked;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)));
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__53927,p__53928){
var vec__53929 = p__53927;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53929,(0),null);
var map__53932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53929,(1),null);
var map__53932__$1 = (((((!((map__53932 == null))))?(((((map__53932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53932):map__53932);
var attrs = map__53932__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__53933 = p__53928;
var map__53933__$1 = (((((!((map__53933 == null))))?(((((map__53933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53933):map__53933);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53933__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(value) : fmt.call(null,value));
} else {
if(cljs.core.truth_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
}
})()], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__53936,p__53937){
var vec__53938 = p__53936;
var seq__53939 = cljs.core.seq(vec__53938);
var first__53940 = cljs.core.first(seq__53939);
var seq__53939__$1 = cljs.core.next(seq__53939);
var type = first__53940;
var first__53940__$1 = cljs.core.first(seq__53939__$1);
var seq__53939__$2 = cljs.core.next(seq__53939__$1);
var map__53941 = first__53940__$1;
var map__53941__$1 = (((((!((map__53941 == null))))?(((((map__53941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53941):map__53941);
var attrs = map__53941__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53941__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53941__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53941__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__53939__$2;
var map__53942 = p__53937;
var map__53942__$1 = (((((!((map__53942 == null))))?(((((map__53942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53942):map__53942);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53942__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53942__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53942__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__53945 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__53945) : event.call(null,G__53945));
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body):null):(function (){var temp__5733__auto__ = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__5733__auto__)){
var message = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__4185__auto__ = touch_event;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
})]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__53946,p__53947){
var vec__53948 = p__53946;
var seq__53949 = cljs.core.seq(vec__53948);
var first__53950 = cljs.core.first(seq__53949);
var seq__53949__$1 = cljs.core.next(seq__53949);
var type = first__53950;
var first__53950__$1 = cljs.core.first(seq__53949__$1);
var seq__53949__$2 = cljs.core.next(seq__53949__$1);
var map__53951 = first__53950__$1;
var map__53951__$1 = (((((!((map__53951 == null))))?(((((map__53951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53951):map__53951);
var attrs = map__53951__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53951__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__53949__$2;
var map__53952 = p__53947;
var map__53952__$1 = (((((!((map__53952 == null))))?(((((map__53952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53952):map__53952);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53952__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53952__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53952__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__4185__auto__ = checked;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
})], null)], 0))], null),body));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__53959,p__53960){
var vec__53961 = p__53959;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53961,(0),null);
var map__53964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53961,(1),null);
var map__53964__$1 = (((((!((map__53964 == null))))?(((((map__53964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53964):map__53964);
var attrs = map__53964__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53964__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53964__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53964__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"get-index","get-index",440051606));
var map__53965 = p__53960;
var map__53965__$1 = (((((!((map__53965 == null))))?(((((map__53965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53965):map__53965);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections__$1 = (function (){var or__4185__auto__ = selections;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__4185__auto__ = get_index;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.constantly((-1));
}
})();
var choose_selected = (function (){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.not_empty(cljs.core.deref(selections__$1));
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(selected_index) > (-1));
} else {
return and__4174__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections__$1),cljs.core.deref(selected_index));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);
} else {
return null;
}
});
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[input_placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs),(function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
}),(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if((!(cljs.core.iterable_QMARK_(v)))){
return v;
} else {
return cljs.core.first(v);
}
})(),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));
}
}),new cljs.core.Keyword(null,"text","text",-1790561697),input_class,(function (p1__53955_SHARP_){
var temp__5735__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__53955_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__53968 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__53968) : data_source.call(null,G__53968));
})());

var G__53969_54133 = id;
var G__53970_54134 = reagent_forms.core.value_of(p1__53955_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53969_54133,G__53970_54134) : save_BANG_.call(null,G__53969_54133,G__53970_54134));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
}),(function (p1__53956_SHARP_){
var G__53971 = p1__53956_SHARP_.which;
switch (G__53971) {
case (38):
p1__53956_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.deref(typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (cljs.core.deref(selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);

return reagent_forms.core.scroll_to(p1__53956_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__53956_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(function (){var G__53972 = new cljs.core.Keyword(null,"all","all",892129742);
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__53972) : data_source.call(null,G__53972));
})());

cljs.core.reset_BANG_(selected_index,(function (){var G__53973 = clojure.string.trim(reagent_forms.core.value_of(p1__53956_SHARP_));
var G__53974 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__53973,G__53974) : get_index__$1.call(null,G__53973,G__53974));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__53956_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__53975_54136 = id;
var G__53976_54137 = reagent_forms.core.value_of(p1__53956_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53975_54136,G__53976_54137) : save_BANG_.call(null,G__53975_54136,G__53976_54137));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__53956_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__53956_SHARP_.preventDefault();

return choose_selected();

break;
case (27):
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));

break;
default:
return "default";

}
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(selections__$1));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.deref(typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,false);
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__53957_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__53957_SHARP_.target.getAttribute("tabIndex")));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__53958_SHARP_){
p1__53958_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
})], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
}),cljs.core.deref(selections__$1)))], null)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__53978,p__53979){
var vec__53980 = p__53978;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53980,(0),null);
var map__53983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53980,(1),null);
var map__53983__$1 = (((((!((map__53983 == null))))?(((((map__53983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53983):map__53983);
var attrs = map__53983__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53983__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__53984 = p__53979;
var map__53984__$1 = (((((!((map__53984 == null))))?(((((map__53984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53984):map__53984);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53984__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53977_SHARP_){
var G__53987 = id;
var G__53988 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__53977_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53987,G__53988) : save_BANG_.call(null,G__53987,G__53988));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__53990,p__53991){
var vec__53992 = p__53990;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53992,(0),null);
var map__53995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53992,(1),null);
var map__53995__$1 = (((((!((map__53995 == null))))?(((((map__53995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53995):map__53995);
var attrs = map__53995__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53995__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__53996 = p__53991;
var map__53996__$1 = (((((!((map__53996 == null))))?(((((map__53996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53996):map__53996);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53996__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53996__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53989_SHARP_){
var G__53999 = id;
var G__54000 = p1__53989_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__53999,G__54000) : save_BANG_.call(null,G__53999,G__54000));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__54001,p__54002,selections,field,id){
var vec__54003 = p__54001;
var seq__54004 = cljs.core.seq(vec__54003);
var first__54005 = cljs.core.first(seq__54004);
var seq__54004__$1 = cljs.core.next(seq__54004);
var type = first__54005;
var first__54005__$1 = cljs.core.first(seq__54004__$1);
var seq__54004__$2 = cljs.core.next(seq__54004__$1);
var map__54006 = first__54005__$1;
var map__54006__$1 = (((((!((map__54006 == null))))?(((((map__54006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54006):map__54006);
var attrs = map__54006__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54006__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var body = seq__54004__$2;
var map__54007 = p__54002;
var map__54007__$1 = (((((!((map__54007 == null))))?(((((map__54007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54007):map__54007);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54007__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54007__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__54014 = id;
var G__54015 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54014,G__54015) : save_BANG_.call(null,G__54014,G__54015));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__54016 = id;
var G__54017 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54016,G__54017) : save_BANG_.call(null,G__54016,G__54017));
}
});
return (function (){
var disabled_QMARK_ = ((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
var button_or_input_QMARK_ = (function (){var t = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(type),(0),(5));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"butto")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"input")));
})();
var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"active":null),(cljs.core.truth_((function (){var and__4174__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!(button_or_input_QMARK_));
} else {
return and__4174__auto__;
}
})())?"disabled":null)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",-2030961996),class$,(function (){var or__4185__auto__ = touch_event;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(cljs.core.truth_(disabled_QMARK_)?null:handle_click_BANG_)]),reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)], 0)),((button_or_input_QMARK_)?null:new cljs.core.Keyword(null,"disabled","disabled",-1529784218))),body], null);
});
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__54018){
var map__54019 = p__54018;
var map__54019__$1 = (((((!((map__54019 == null))))?(((((map__54019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54019):map__54019);
var ks = map__54019__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54019__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__54021){
var vec__54022 = p__54021;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54022,(0),null);
var map__54025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54022,(1),null);
var map__54025__$1 = (((((!((map__54025 == null))))?(((((map__54025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54025):map__54025);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54025__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
}),cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__54029,p__54030){
var vec__54031 = p__54029;
var seq__54032 = cljs.core.seq(vec__54031);
var first__54033 = cljs.core.first(seq__54032);
var seq__54032__$1 = cljs.core.next(seq__54032);
var type = first__54033;
var first__54033__$1 = cljs.core.first(seq__54032__$1);
var seq__54032__$2 = cljs.core.next(seq__54032__$1);
var map__54034 = first__54033__$1;
var map__54034__$1 = (((((!((map__54034 == null))))?(((((map__54034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54034):map__54034);
var attrs = map__54034__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__54032__$2;
var map__54035 = p__54030;
var map__54035__$1 = (((((!((map__54035 == null))))?(((((map__54035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54035):map__54035);
var opts = map__54035__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54035__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
}),selection_items__$1);
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,(function (p1__54027_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54038){
var vec__54039 = p__54038;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54039,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),p1__54027_SHARP_));
}));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54028_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__54028_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var visible_QMARK_ = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible_QMARK_);
} else {
return true;
}
}),selectors)));
});
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__54042,p__54043){
var vec__54044 = p__54042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54044,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54044,(1),null);
var field = vec__54044;
var map__54047 = p__54043;
var map__54047__$1 = (((((!((map__54047 == null))))?(((((map__54047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54047):map__54047);
var opts = map__54047__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__54049,p__54050){
var vec__54051 = p__54049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54051,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54051,(1),null);
var field = vec__54051;
var map__54054 = p__54050;
var map__54054__$1 = (((((!((map__54054 == null))))?(((((map__54054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54054):map__54054);
var opts = map__54054__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reagent_forms$core$map_options_$_iter__54056(s__54057){
return (new cljs.core.LazySeq(null,(function (){
var s__54057__$1 = s__54057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54057__$1);
if(temp__5735__auto__){
var s__54057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54058 = (0);
while(true){
if((i__54058 < size__4581__auto__)){
var vec__54060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54058);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54060,(0),null);
var map__54063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54060,(1),null);
var map__54063__$1 = (((((!((map__54063 == null))))?(((((map__54063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54063):map__54063);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54060,(2),null);
cljs.core.chunk_append(b__54059,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null));

var G__54138 = (i__54058 + (1));
i__54058 = G__54138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54059),reagent_forms$core$map_options_$_iter__54056(cljs.core.chunk_rest(s__54057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54059),null);
}
} else {
var vec__54065 = cljs.core.first(s__54057__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54065,(0),null);
var map__54068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54065,(1),null);
var map__54068__$1 = (((((!((map__54068 == null))))?(((((map__54068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54068):map__54068);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54068__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54065,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null),reagent_forms$core$map_options_$_iter__54056(cljs.core.rest(s__54057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54070_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__54070_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__54073,p__54074){
var vec__54075 = p__54073;
var seq__54076 = cljs.core.seq(vec__54075);
var first__54077 = cljs.core.first(seq__54076);
var seq__54076__$1 = cljs.core.next(seq__54076);
var type = first__54077;
var first__54077__$1 = cljs.core.first(seq__54076__$1);
var seq__54076__$2 = cljs.core.next(seq__54076__$1);
var map__54078 = first__54077__$1;
var map__54078__$1 = (((((!((map__54078 == null))))?(((((map__54078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54078):map__54078);
var attrs = map__54078__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__54076__$2;
var map__54079 = p__54074;
var map__54079__$1 = (((((!((map__54079 == null))))?(((((map__54079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54079):map__54079);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54079__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54079__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54079__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
var G__54082_54139 = id;
var G__54083_54140 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54082_54139,G__54083_54140) : save_BANG_.call(null,G__54082_54139,G__54083_54140));

return (function (){
var update_disabled_QMARK___53792__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__53793__auto__ = clojure.walk.postwalk((function (c__53794__auto__){
if(cljs.core.map_QMARK_(c__53794__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__53794__auto__,doc),doc),update_disabled_QMARK___53792__auto__));
} else {
return c__53794__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54071_SHARP_){
var G__54084 = id;
var G__54085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__54071_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54084,G__54085) : save_BANG_.call(null,G__54084,G__54085));
})], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54072_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__54072_SHARP_));
if(cljs.core.truth_(temp__5733__auto__)){
var visible = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible);
} else {
return true;
}
}),options__$1))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__53795__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__53795__auto__))){
return body__53793__auto__;
} else {
return null;
}
} else {
return body__53793__auto__;
}
});
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),new cljs.core.Keyword(null,"field","field",-1302436500))));
});
reagent_forms.core.make_form = (function reagent_forms$core$make_form(form,opts){
return clojure.walk.postwalk((function (node){
if(reagent_forms.core.field_QMARK_(node)){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1) : reagent_forms.core.init_field.call(null,node,opts__$1));
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
}),form);
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind_fields !== 'undefined')){
} else {
/**
 * Creates data bindings between the form fields and the supplied atom or calls
 *         the supplied functions (when `doc` is a map) on events triggered by fields.
 *         form - the form template with the fields
 *         doc - the document that the fields will be bound to
 *         events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54086 = cljs.core.get_global_hierarchy;
return (fexpr__54086.cljs$core$IFn$_invoke$arity$0 ? fexpr__54086.cljs$core$IFn$_invoke$arity$0() : fexpr__54086.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind-fields"),(function() { 
var G__54141__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__54141 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__54142__i = 0, G__54142__a = new Array(arguments.length -  2);
while (G__54142__i < G__54142__a.length) {G__54142__a[G__54142__i] = arguments[G__54142__i + 2]; ++G__54142__i;}
  ___$1 = new cljs.core.IndexedSeq(G__54142__a,0,null);
} 
return G__54141__delegate.call(this,_,doc,___$1);};
G__54141.cljs$lang$maxFixedArity = 2;
G__54141.cljs$lang$applyTo = (function (arglist__54143){
var _ = cljs.core.first(arglist__54143);
arglist__54143 = cljs.core.next(arglist__54143);
var doc = cljs.core.first(arglist__54143);
var ___$1 = cljs.core.rest(arglist__54143);
return G__54141__delegate(_,doc,___$1);
});
G__54141.cljs$core$IFn$_invoke$arity$variadic = G__54141__delegate;
return G__54141;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMap,(function (form,opts){
var form__$1 = reagent_forms.core.make_form(form,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"get","get",1683182755),(function (get){
return (function (id){
var G__54087 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__54087) : get.call(null,G__54087));
});
})),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (save_BANG_){
return (function (id,value){
var G__54088 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__54089 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54088,G__54089) : save_BANG_.call(null,G__54088,G__54089));
});
})),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (update_BANG_){
return (function (id,save_fn,value){
var G__54090 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__54091 = save_fn;
var G__54092 = value;
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__54090,G__54091,G__54092) : update_BANG_.call(null,G__54090,G__54091,G__54092));
});
})));
return (function (){
return form__$1;
});
}));
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__54144__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__54093_SHARP_){
return cljs.core.deref((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,p1__54093_SHARP_) : reagent_forms.core.cursor_for_id.call(null,doc,p1__54093_SHARP_)));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn(doc,events),new cljs.core.Keyword(null,"update!","update!",-1453508586),reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts);
return (function (){
return form__$1;
});
};
var G__54144 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__54145__i = 0, G__54145__a = new Array(arguments.length -  2);
while (G__54145__i < G__54145__a.length) {G__54145__a[G__54145__i] = arguments[G__54145__i + 2]; ++G__54145__i;}
  events = new cljs.core.IndexedSeq(G__54145__a,0,null);
} 
return G__54144__delegate.call(this,form,doc,events);};
G__54144.cljs$lang$maxFixedArity = 2;
G__54144.cljs$lang$applyTo = (function (arglist__54146){
var form = cljs.core.first(arglist__54146);
arglist__54146 = cljs.core.next(arglist__54146);
var doc = cljs.core.first(arglist__54146);
var events = cljs.core.rest(arglist__54146);
return G__54144__delegate(form,doc,events);
});
G__54144.cljs$core$IFn$_invoke$arity$variadic = G__54144__delegate;
return G__54144;
})()
);

//# sourceMappingURL=reagent_forms.core.js.map
