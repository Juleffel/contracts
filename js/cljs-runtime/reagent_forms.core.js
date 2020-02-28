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
var vec__54389 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54389,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54389,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54397_SHARP_,p2__54396_SHARP_){
var or__4185__auto__ = (p2__54396_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p2__54396_SHARP_.cljs$core$IFn$_invoke$arity$4(id,path,value,p1__54397_SHARP_) : p2__54396_SHARP_.call(null,id,path,value,p1__54397_SHARP_));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p1__54397_SHARP_;
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
var G__54437 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__54437) : wrapper.call(null,G__54437));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__54441 = id;
var G__54442 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54441,G__54442) : save_BANG_.call(null,G__54441,G__54442));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__54448 = id;
var G__54449 = update_fn;
var G__54450 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__54448,G__54449,G__54450) : update_BANG_.call(null,G__54448,G__54449,G__54450));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__54454,node){
var map__54455 = p__54454;
var map__54455__$1 = (((((!((map__54455 == null))))?(((((map__54455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54455):map__54455);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54455__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54455__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54455__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54455__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (p1__54458_SHARP_){
if(cljs.core.fn_QMARK_(p1__54458_SHARP_)){
return (p1__54458_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__54458_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__54458_SHARP_.call(null));
} else {
return p1__54458_SHARP_;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__54463_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(((typeof p1__54463_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54463_SHARP_], null):p1__54463_SHARP_),classes)));
}));
} else {
return attrs;
}
});
reagent_forms.core.update_attrs = (function reagent_forms$core$update_attrs(p__54469,doc){
var map__54473 = p__54469;
var map__54473__$1 = (((((!((map__54473 == null))))?(((((map__54473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54473):map__54473);
var attrs = map__54473__$1;
var set_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54473__$1,new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473));
var or__4185__auto__ = (cljs.core.truth_(set_attributes)?(function (){var G__54477 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
var G__54478 = attrs;
return (set_attributes.cljs$core$IFn$_invoke$arity$2 ? set_attributes.cljs$core$IFn$_invoke$arity$2(G__54477,G__54478) : set_attributes.call(null,G__54477,G__54478));
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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54479 = cljs.core.get_global_hierarchy;
return (fexpr__54479.cljs$core$IFn$_invoke$arity$0 ? fexpr__54479.cljs$core$IFn$_invoke$arity$0() : fexpr__54479.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),(function (field_type,_){
if(cljs.core.truth_((function (){var fexpr__54480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null);
return (fexpr__54480.cljs$core$IFn$_invoke$arity$1 ? fexpr__54480.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__54480.call(null,field_type));
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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54482 = cljs.core.get_global_hierarchy;
return (fexpr__54482.cljs$core$IFn$_invoke$arity$0 ? fexpr__54482.cljs$core$IFn$_invoke$arity$0() : fexpr__54482.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),(function (p__54483,_){
var map__54484 = p__54483;
var map__54484__$1 = (((((!((map__54484 == null))))?(((((map__54484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54484):map__54484);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54484__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_((function (){var fexpr__54487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__54487.cljs$core$IFn$_invoke$arity$1 ? fexpr__54487.cljs$core$IFn$_invoke$arity$1(field) : fexpr__54487.call(null,field));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__54489,p__54490){
var map__54491 = p__54489;
var map__54491__$1 = (((((!((map__54491 == null))))?(((((map__54491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54491):map__54491);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__54492 = p__54490;
var map__54492__$1 = (((((!((map__54492 == null))))?(((((map__54492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54492):map__54492);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54492__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54492__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__4185__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54488_SHARP_){
var G__54495 = id;
var G__54496 = (function (){var G__54497 = field;
var G__54498 = reagent_forms.core.value_of(p1__54488_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__54497,G__54498) : reagent_forms.core.format_type.call(null,G__54497,G__54498));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54495,G__54496) : save_BANG_.call(null,G__54495,G__54496));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__54499,p__54500){
var map__54501 = p__54499;
var map__54501__$1 = (((((!((map__54501 == null))))?(((((map__54501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54501):map__54501);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__54502 = p__54500;
var map__54502__$1 = (((((!((map__54502 == null))))?(((((map__54502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54502):map__54502);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54502__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54502__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__54505 = id;
var G__54506 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54505,G__54506) : save_BANG_.call(null,G__54505,G__54506));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54781 = arguments.length;
var i__4790__auto___54782 = (0);
while(true){
if((i__4790__auto___54782 < len__4789__auto___54781)){
args__4795__auto__.push((arguments[i__4790__auto___54782]));

var G__54783 = (i__4790__auto___54782 + (1));
i__4790__auto___54782 = G__54783;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__54510,opts,p__54511){
var vec__54512 = p__54510;
var seq__54513 = cljs.core.seq(vec__54512);
var first__54514 = cljs.core.first(seq__54513);
var seq__54513__$1 = cljs.core.next(seq__54513);
var type = first__54514;
var first__54514__$1 = cljs.core.first(seq__54513__$1);
var seq__54513__$2 = cljs.core.next(seq__54513__$1);
var attrs = first__54514__$1;
var body = seq__54513__$2;
var vec__54515 = p__54511;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54515,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0))], 0))], null),body);
}));

(reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq54507){
var G__54508 = cljs.core.first(seq54507);
var seq54507__$1 = cljs.core.next(seq54507);
var G__54509 = cljs.core.first(seq54507__$1);
var seq54507__$2 = cljs.core.next(seq54507__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54508,G__54509,seq54507__$2);
}));

if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.init_field !== 'undefined')){
} else {
reagent_forms.core.init_field = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54519 = cljs.core.get_global_hierarchy;
return (fexpr__54519.cljs$core$IFn$_invoke$arity$0 ? fexpr__54519.cljs$core$IFn$_invoke$arity$0() : fexpr__54519.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),(function (p__54520,_){
var vec__54522 = p__54520;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(0),null);
var map__54525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54522,(1),null);
var map__54525__$1 = (((((!((map__54525 == null))))?(((((map__54525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54525):map__54525);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__54527 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
return (fexpr__54527.cljs$core$IFn$_invoke$arity$1 ? fexpr__54527.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__54527.call(null,field__$1));
})())){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__54534,p__54535){
var vec__54536 = p__54534;
var seq__54537 = cljs.core.seq(vec__54536);
var first__54538 = cljs.core.first(seq__54537);
var seq__54537__$1 = cljs.core.next(seq__54537);
var type = first__54538;
var first__54538__$1 = cljs.core.first(seq__54537__$1);
var seq__54537__$2 = cljs.core.next(seq__54537__$1);
var attrs = first__54538__$1;
var body = seq__54537__$2;
var map__54539 = p__54535;
var map__54539__$1 = (((((!((map__54539 == null))))?(((((map__54539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54539):map__54539);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__54542,p__54543){
var vec__54544 = p__54542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544,(0),null);
var map__54547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54544,(1),null);
var map__54547__$1 = (((((!((map__54547 == null))))?(((((map__54547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54547):map__54547);
var attrs = map__54547__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54547__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__54544;
var map__54548 = p__54543;
var map__54548__$1 = (((((!((map__54548 == null))))?(((((map__54548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54548):map__54548);
var opts = map__54548__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54548__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__54553,p__54554){
var vec__54555 = p__54553;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54555,(0),null);
var map__54558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54555,(1),null);
var map__54558__$1 = (((((!((map__54558 == null))))?(((((map__54558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54558):map__54558);
var attrs = map__54558__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__54559 = p__54554;
var map__54559__$1 = (((((!((map__54559 == null))))?(((((map__54559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54559):map__54559);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54559__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54559__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54551_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__54551_SHARP_));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__54552_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__54562 = id;
var G__54563 = (function (){var G__54564 = new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
var G__54565 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__54552_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__54564,G__54565) : reagent_forms.core.format_type.call(null,G__54564,G__54565));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54562,G__54563) : save_BANG_.call(null,G__54562,G__54563));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__54570,p__54571){
var vec__54572 = p__54570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54572,(0),null);
var map__54575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54572,(1),null);
var map__54575__$1 = (((((!((map__54575 == null))))?(((((map__54575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54575):map__54575);
var attrs = map__54575__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54575__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"save-fn","save-fn",383840986));
var map__54576 = p__54571;
var map__54576__$1 = (((((!((map__54576 == null))))?(((((map__54576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54576):map__54576);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:(function (p1__54566_SHARP_){
return reagent_forms.datepicker.format_date(p1__54566_SHARP_,reagent_forms.datepicker.parse_format(date_format));
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
var save_value = (cljs.core.truth_(save_fn)?(function (p1__54568_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__54568_SHARP_) : update_BANG_.call(null,id,save_fn,p1__54568_SHARP_));
}):(function (p1__54569_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__54569_SHARP_) : save_BANG_.call(null,id,p1__54569_SHARP_));
}));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.core.dom_node(this$).firstChild.firstChild);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
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
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
})], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__54581,p__54582){
var vec__54583 = p__54581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54583,(0),null);
var map__54586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54583,(1),null);
var map__54586__$1 = (((((!((map__54586 == null))))?(((((map__54586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54586):map__54586);
var attrs = map__54586__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__54583;
var map__54587 = p__54582;
var map__54587__$1 = (((((!((map__54587 == null))))?(((((map__54587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54587):map__54587);
var opts = map__54587__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54587__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)], 0)));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)));
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__54590,p__54591){
var vec__54592 = p__54590;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592,(0),null);
var map__54595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592,(1),null);
var map__54595__$1 = (((((!((map__54595 == null))))?(((((map__54595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54595):map__54595);
var attrs = map__54595__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54595__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__54596 = p__54591;
var map__54596__$1 = (((((!((map__54596 == null))))?(((((map__54596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54596):map__54596);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
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
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__54599,p__54600){
var vec__54601 = p__54599;
var seq__54602 = cljs.core.seq(vec__54601);
var first__54603 = cljs.core.first(seq__54602);
var seq__54602__$1 = cljs.core.next(seq__54602);
var type = first__54603;
var first__54603__$1 = cljs.core.first(seq__54602__$1);
var seq__54602__$2 = cljs.core.next(seq__54602__$1);
var map__54604 = first__54603__$1;
var map__54604__$1 = (((((!((map__54604 == null))))?(((((map__54604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54604):map__54604);
var attrs = map__54604__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54604__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__54602__$2;
var map__54605 = p__54600;
var map__54605__$1 = (((((!((map__54605 == null))))?(((((map__54605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54605):map__54605);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__54608 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__54608) : event.call(null,G__54608));
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
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__54609,p__54610){
var vec__54611 = p__54609;
var seq__54612 = cljs.core.seq(vec__54611);
var first__54613 = cljs.core.first(seq__54612);
var seq__54612__$1 = cljs.core.next(seq__54612);
var type = first__54613;
var first__54613__$1 = cljs.core.first(seq__54612__$1);
var seq__54612__$2 = cljs.core.next(seq__54612__$1);
var map__54614 = first__54613__$1;
var map__54614__$1 = (((((!((map__54614 == null))))?(((((map__54614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54614):map__54614);
var attrs = map__54614__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__54612__$2;
var map__54615 = p__54610;
var map__54615__$1 = (((((!((map__54615 == null))))?(((((map__54615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54615):map__54615);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54615__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54615__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
})], null)], 0))], null),body));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__54622,p__54623){
var vec__54624 = p__54622;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(0),null);
var map__54627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54624,(1),null);
var map__54627__$1 = (((((!((map__54627 == null))))?(((((map__54627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54627):map__54627);
var attrs = map__54627__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54627__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54627__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54627__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"get-index","get-index",440051606));
var map__54628 = p__54623;
var map__54628__$1 = (((((!((map__54628 == null))))?(((((map__54628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54628):map__54628);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
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
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
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
}),new cljs.core.Keyword(null,"text","text",-1790561697),input_class,(function (p1__54618_SHARP_){
var temp__5735__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__54618_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__54631 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__54631) : data_source.call(null,G__54631));
})());

var G__54632_54796 = id;
var G__54633_54797 = reagent_forms.core.value_of(p1__54618_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54632_54796,G__54633_54797) : save_BANG_.call(null,G__54632_54796,G__54633_54797));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
}),(function (p1__54619_SHARP_){
var G__54634 = p1__54619_SHARP_.which;
switch (G__54634) {
case (38):
p1__54619_SHARP_.preventDefault();

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

return reagent_forms.core.scroll_to(p1__54619_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__54619_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(function (){var G__54635 = new cljs.core.Keyword(null,"all","all",892129742);
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__54635) : data_source.call(null,G__54635));
})());

cljs.core.reset_BANG_(selected_index,(function (){var G__54636 = clojure.string.trim(reagent_forms.core.value_of(p1__54619_SHARP_));
var G__54637 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__54636,G__54637) : get_index__$1.call(null,G__54636,G__54637));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__54619_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__54638_54799 = id;
var G__54639_54800 = reagent_forms.core.value_of(p1__54619_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54638_54799,G__54639_54800) : save_BANG_.call(null,G__54638_54799,G__54639_54800));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__54619_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__54619_SHARP_.preventDefault();

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__54620_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__54620_SHARP_.target.getAttribute("tabIndex")));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__54621_SHARP_){
p1__54621_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
})], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
}),cljs.core.deref(selections__$1)))], null)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__54641,p__54642){
var vec__54643 = p__54641;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54643,(0),null);
var map__54646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54643,(1),null);
var map__54646__$1 = (((((!((map__54646 == null))))?(((((map__54646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54646):map__54646);
var attrs = map__54646__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__54647 = p__54642;
var map__54647__$1 = (((((!((map__54647 == null))))?(((((map__54647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54647):map__54647);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54647__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54647__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54640_SHARP_){
var G__54650 = id;
var G__54651 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__54640_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54650,G__54651) : save_BANG_.call(null,G__54650,G__54651));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__54653,p__54654){
var vec__54655 = p__54653;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54655,(0),null);
var map__54658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54655,(1),null);
var map__54658__$1 = (((((!((map__54658 == null))))?(((((map__54658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54658):map__54658);
var attrs = map__54658__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54658__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__54659 = p__54654;
var map__54659__$1 = (((((!((map__54659 == null))))?(((((map__54659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54659):map__54659);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54659__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54652_SHARP_){
var G__54662 = id;
var G__54663 = p1__54652_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54662,G__54663) : save_BANG_.call(null,G__54662,G__54663));
})], null),attrs], 0))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__54664,p__54665,selections,field,id){
var vec__54666 = p__54664;
var seq__54667 = cljs.core.seq(vec__54666);
var first__54668 = cljs.core.first(seq__54667);
var seq__54667__$1 = cljs.core.next(seq__54667);
var type = first__54668;
var first__54668__$1 = cljs.core.first(seq__54667__$1);
var seq__54667__$2 = cljs.core.next(seq__54667__$1);
var map__54669 = first__54668__$1;
var map__54669__$1 = (((((!((map__54669 == null))))?(((((map__54669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54669):map__54669);
var attrs = map__54669__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var body = seq__54667__$2;
var map__54670 = p__54665;
var map__54670__$1 = (((((!((map__54670 == null))))?(((((map__54670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54670):map__54670);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__54677 = id;
var G__54678 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54677,G__54678) : save_BANG_.call(null,G__54677,G__54678));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__54679 = id;
var G__54680 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54679,G__54680) : save_BANG_.call(null,G__54679,G__54680));
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
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__54681){
var map__54682 = p__54681;
var map__54682__$1 = (((((!((map__54682 == null))))?(((((map__54682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54682):map__54682);
var ks = map__54682__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__54684){
var vec__54685 = p__54684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54685,(0),null);
var map__54688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54685,(1),null);
var map__54688__$1 = (((((!((map__54688 == null))))?(((((map__54688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54688):map__54688);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
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
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__54692,p__54693){
var vec__54694 = p__54692;
var seq__54695 = cljs.core.seq(vec__54694);
var first__54696 = cljs.core.first(seq__54695);
var seq__54695__$1 = cljs.core.next(seq__54695);
var type = first__54696;
var first__54696__$1 = cljs.core.first(seq__54695__$1);
var seq__54695__$2 = cljs.core.next(seq__54695__$1);
var map__54697 = first__54696__$1;
var map__54697__$1 = (((((!((map__54697 == null))))?(((((map__54697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54697):map__54697);
var attrs = map__54697__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54697__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__54695__$2;
var map__54698 = p__54693;
var map__54698__$1 = (((((!((map__54698 == null))))?(((((map__54698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54698):map__54698);
var opts = map__54698__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54698__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54698__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
}),selection_items__$1);
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,(function (p1__54690_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54701){
var vec__54702 = p__54701;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54702,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),p1__54690_SHARP_));
}));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54691_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__54691_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var visible_QMARK_ = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible_QMARK_);
} else {
return true;
}
}),selectors)));
});
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__54705,p__54706){
var vec__54707 = p__54705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54707,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54707,(1),null);
var field = vec__54707;
var map__54710 = p__54706;
var map__54710__$1 = (((((!((map__54710 == null))))?(((((map__54710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54710):map__54710);
var opts = map__54710__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54710__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__54712,p__54713){
var vec__54714 = p__54712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54714,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54714,(1),null);
var field = vec__54714;
var map__54717 = p__54713;
var map__54717__$1 = (((((!((map__54717 == null))))?(((((map__54717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54717):map__54717);
var opts = map__54717__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
}
});
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reagent_forms$core$map_options_$_iter__54719(s__54720){
return (new cljs.core.LazySeq(null,(function (){
var s__54720__$1 = s__54720;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__54720__$1);
if(temp__5735__auto__){
var s__54720__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54720__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__54720__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__54722 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__54721 = (0);
while(true){
if((i__54721 < size__4581__auto__)){
var vec__54723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__54721);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54723,(0),null);
var map__54726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54723,(1),null);
var map__54726__$1 = (((((!((map__54726 == null))))?(((((map__54726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54726):map__54726);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54726__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54723,(2),null);
cljs.core.chunk_append(b__54722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null));

var G__54801 = (i__54721 + (1));
i__54721 = G__54801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54722),reagent_forms$core$map_options_$_iter__54719(cljs.core.chunk_rest(s__54720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54722),null);
}
} else {
var vec__54728 = cljs.core.first(s__54720__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54728,(0),null);
var map__54731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54728,(1),null);
var map__54731__$1 = (((((!((map__54731 == null))))?(((((map__54731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54731):map__54731);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54728,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null),reagent_forms$core$map_options_$_iter__54719(cljs.core.rest(s__54720__$2)));
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
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54733_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__54733_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__54736,p__54737){
var vec__54738 = p__54736;
var seq__54739 = cljs.core.seq(vec__54738);
var first__54740 = cljs.core.first(seq__54739);
var seq__54739__$1 = cljs.core.next(seq__54739);
var type = first__54740;
var first__54740__$1 = cljs.core.first(seq__54739__$1);
var seq__54739__$2 = cljs.core.next(seq__54739__$1);
var map__54741 = first__54740__$1;
var map__54741__$1 = (((((!((map__54741 == null))))?(((((map__54741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54741):map__54741);
var attrs = map__54741__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__54739__$2;
var map__54742 = p__54737;
var map__54742__$1 = (((((!((map__54742 == null))))?(((((map__54742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54742):map__54742);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
var G__54745_54802 = id;
var G__54746_54803 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54745_54802,G__54746_54803) : save_BANG_.call(null,G__54745_54802,G__54746_54803));

return (function (){
var update_disabled_QMARK___54362__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__54363__auto__ = clojure.walk.postwalk((function (c__54364__auto__){
if(cljs.core.map_QMARK_(c__54364__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__54364__auto__,doc),doc),update_disabled_QMARK___54362__auto__));
} else {
return c__54364__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54734_SHARP_){
var G__54747 = id;
var G__54748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__54734_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54747,G__54748) : save_BANG_.call(null,G__54747,G__54748));
})], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54735_SHARP_){
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__54735_SHARP_));
if(cljs.core.truth_(temp__5733__auto__)){
var visible = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible);
} else {
return true;
}
}),options__$1))], null));
var temp__5733__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__54365__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__54365__auto__))){
return body__54363__auto__;
} else {
return null;
}
} else {
return body__54363__auto__;
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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54749 = cljs.core.get_global_hierarchy;
return (fexpr__54749.cljs$core$IFn$_invoke$arity$0 ? fexpr__54749.cljs$core$IFn$_invoke$arity$0() : fexpr__54749.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind-fields"),(function() { 
var G__54804__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__54804 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__54805__i = 0, G__54805__a = new Array(arguments.length -  2);
while (G__54805__i < G__54805__a.length) {G__54805__a[G__54805__i] = arguments[G__54805__i + 2]; ++G__54805__i;}
  ___$1 = new cljs.core.IndexedSeq(G__54805__a,0,null);
} 
return G__54804__delegate.call(this,_,doc,___$1);};
G__54804.cljs$lang$maxFixedArity = 2;
G__54804.cljs$lang$applyTo = (function (arglist__54806){
var _ = cljs.core.first(arglist__54806);
arglist__54806 = cljs.core.next(arglist__54806);
var doc = cljs.core.first(arglist__54806);
var ___$1 = cljs.core.rest(arglist__54806);
return G__54804__delegate(_,doc,___$1);
});
G__54804.cljs$core$IFn$_invoke$arity$variadic = G__54804__delegate;
return G__54804;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMap,(function (form,opts){
var form__$1 = reagent_forms.core.make_form(form,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"get","get",1683182755),(function (get){
return (function (id){
var G__54750 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__54750) : get.call(null,G__54750));
});
})),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (save_BANG_){
return (function (id,value){
var G__54751 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__54752 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__54751,G__54752) : save_BANG_.call(null,G__54751,G__54752));
});
})),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (update_BANG_){
return (function (id,save_fn,value){
var G__54753 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__54754 = save_fn;
var G__54755 = value;
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__54753,G__54754,G__54755) : update_BANG_.call(null,G__54753,G__54754,G__54755));
});
})));
return (function (){
return form__$1;
});
}));
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__54807__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__54756_SHARP_){
return cljs.core.deref((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,p1__54756_SHARP_) : reagent_forms.core.cursor_for_id.call(null,doc,p1__54756_SHARP_)));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn(doc,events),new cljs.core.Keyword(null,"update!","update!",-1453508586),reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts);
return (function (){
return form__$1;
});
};
var G__54807 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__54808__i = 0, G__54808__a = new Array(arguments.length -  2);
while (G__54808__i < G__54808__a.length) {G__54808__a[G__54808__i] = arguments[G__54808__i + 2]; ++G__54808__i;}
  events = new cljs.core.IndexedSeq(G__54808__a,0,null);
} 
return G__54807__delegate.call(this,form,doc,events);};
G__54807.cljs$lang$maxFixedArity = 2;
G__54807.cljs$lang$applyTo = (function (arglist__54809){
var form = cljs.core.first(arglist__54809);
arglist__54809 = cljs.core.next(arglist__54809);
var doc = cljs.core.first(arglist__54809);
var events = cljs.core.rest(arglist__54809);
return G__54807__delegate(form,doc,events);
});
G__54807.cljs$core$IFn$_invoke$arity$variadic = G__54807__delegate;
return G__54807;
})()
);

//# sourceMappingURL=reagent_forms.core.js.map
