goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__45948){
var map__45950 = p__45948;
var map__45950__$1 = (((((!((map__45950 == null))))?(((((map__45950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45950):map__45950);
var args = map__45950__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__45956 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4185__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__45956,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__45956,external_model_value));
} else {
return G__45956;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__45965,event){
var map__45966 = p__45965;
var map__45966__$1 = (((((!((map__45966 == null))))?(((((map__45966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45966):map__45966);
var state = map__45966__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45966__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45966__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__45969 = event;
var G__45969__$1 = (((G__45969 instanceof cljs.core.Keyword))?G__45969.fqn:null);
switch (G__45969__$1) {
case "input-text-blurred":
var and__4174__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4174__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not((function (){var or__4185__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45969__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__45978,event){
var map__45979 = p__45978;
var map__45979__$1 = (((((!((map__45979 == null))))?(((((map__45979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45979):map__45979);
var state = map__45979__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45979__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__45981 = event;
var G__45981__$1 = (((G__45981 instanceof cljs.core.Keyword))?G__45981.fqn:null);
switch (G__45981__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__45984,new_value){
var map__45986 = p__45984;
var map__45986__$1 = (((((!((map__45986 == null))))?(((((map__45986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45986):map__45986);
var state = map__45986__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45986__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__46000,suggestion){
var map__46001 = p__46000;
var map__46001__$1 = (((((!((map__46001 == null))))?(((((map__46001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46001):map__46001);
var state = map__46001__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46001__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__46003 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46003,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__46003;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__46013,index){
var map__46015 = p__46013;
var map__46015__$1 = (((((!((map__46015 == null))))?(((((map__46015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46015):map__46015);
var state = map__46015__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46015__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__46020 = state;
var G__46020__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46020,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__46020__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__46020__$1,suggestion):G__46020__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__46020__$2,suggestion);
} else {
return G__46020__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__46026,index){
var map__46028 = p__46026;
var map__46028__$1 = (((((!((map__46028 == null))))?(((((map__46028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46028):map__46028);
var state = map__46028__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46028__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__46037){
var map__46039 = p__46037;
var map__46039__$1 = (((((!((map__46039 == null))))?(((((map__46039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46039):map__46039);
var state = map__46039__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46039__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__46041 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__46041,suggestion_active_index);
} else {
return G__46041;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__46049){
var map__46051 = p__46049;
var map__46051__$1 = (((((!((map__46051 == null))))?(((((map__46051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46051):map__46051);
var state = map__46051__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46051__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46051__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__46054 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__46054,re_com.typeahead.wrap(((function (){var or__4185__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__46054;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__46058){
var map__46059 = p__46058;
var map__46059__$1 = (((((!((map__46059 == null))))?(((((map__46059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46059):map__46059);
var state = map__46059__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46059__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46059__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__46067 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__46067,re_com.typeahead.wrap(((function (){var or__4185__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__46067;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__46069 = state;
var G__46069__$1 = re_com.typeahead.clear_suggestions(G__46069)
;
var G__46069__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46069__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__46069__$2,null);
} else {
return G__46069__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__46080){
var map__46081 = p__46080;
var map__46081__$1 = (((((!((map__46081 == null))))?(((((map__46081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46081):map__46081);
var state = map__46081__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46081__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46081__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__46089 = state;
if(cljs.core.truth_(((cljs.core.not(displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
return re_com.typeahead.update_model(G__46089,input_text);
} else {
return G__46089;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = (function (){var G__46099 = text;
var G__46100 = (function (p1__46098_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__46098_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__46099,G__46100) : data_source.call(null,G__46099,G__46100));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__45258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45259__auto__ = (function (){var switch__45128__auto__ = (function (state_46143){
var state_val_46144 = (state_46143[(1)]);
if((state_val_46144 === (1))){
var state_46143__$1 = state_46143;
var statearr_46148_46399 = state_46143__$1;
(statearr_46148_46399[(2)] = null);

(statearr_46148_46399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46144 === (2))){
var state_46143__$1 = state_46143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46143__$1,(4),c_search);
} else {
if((state_val_46144 === (3))){
var inst_46140 = (state_46143[(2)]);
var state_46143__$1 = state_46143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46143__$1,inst_46140);
} else {
if((state_val_46144 === (4))){
var inst_46120 = (state_46143[(7)]);
var inst_46120__$1 = (state_46143[(2)]);
var inst_46122 = cljs.core.deref(state_atom);
var inst_46123 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_46122);
var inst_46124 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_46120__$1);
var state_46143__$1 = (function (){var statearr_46152 = state_46143;
(statearr_46152[(7)] = inst_46120__$1);

(statearr_46152[(8)] = inst_46123);

return statearr_46152;
})();
if(inst_46124){
var statearr_46153_46400 = state_46143__$1;
(statearr_46153_46400[(1)] = (5));

} else {
var statearr_46154_46401 = state_46143__$1;
(statearr_46154_46401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46144 === (5))){
var inst_46126 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var state_46143__$1 = state_46143;
var statearr_46155_46402 = state_46143__$1;
(statearr_46155_46402[(2)] = inst_46126);

(statearr_46155_46402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46144 === (6))){
var inst_46120 = (state_46143[(7)]);
var inst_46123 = (state_46143[(8)]);
var inst_46128 = re_com.typeahead.search_data_source_BANG_(inst_46123,state_atom,inst_46120);
var state_46143__$1 = state_46143;
var statearr_46156_46403 = state_46143__$1;
(statearr_46156_46403[(2)] = inst_46128);

(statearr_46156_46403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46144 === (7))){
var inst_46130 = (state_46143[(2)]);
var state_46143__$1 = (function (){var statearr_46157 = state_46143;
(statearr_46157[(9)] = inst_46130);

return statearr_46157;
})();
var statearr_46158_46404 = state_46143__$1;
(statearr_46158_46404[(2)] = null);

(statearr_46158_46404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto____0 = (function (){
var statearr_46163 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46163[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto__);

(statearr_46163[(1)] = (1));

return statearr_46163;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto____1 = (function (state_46143){
while(true){
var ret_value__45130__auto__ = (function (){try{while(true){
var result__45131__auto__ = switch__45128__auto__(state_46143);
if(cljs.core.keyword_identical_QMARK_(result__45131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45131__auto__;
}
break;
}
}catch (e46164){if((e46164 instanceof Object)){
var ex__45132__auto__ = e46164;
var statearr_46165_46409 = state_46143;
(statearr_46165_46409[(5)] = ex__45132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46410 = state_46143;
state_46143 = G__46410;
continue;
} else {
return ret_value__45130__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto__ = function(state_46143){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto____1.call(this,state_46143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__45129__auto__;
})()
})();
var state__45260__auto__ = (function (){var statearr_46166 = (f__45259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45259__auto__.cljs$core$IFn$_invoke$arity$0() : f__45259__auto__.call(null));
(statearr_46166[(6)] = c__45258__auto__);

return statearr_46166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45260__auto__);
}));

return c__45258__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__46174 = cljs.core.deref(state_atom);
var map__46174__$1 = (((((!((map__46174 == null))))?(((((map__46174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46174):map__46174);
var state = map__46174__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46174__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46174__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_(new_text)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__46167_SHARP_){
var G__46176 = p1__46167_SHARP_;
var G__46176__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46176,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__46176__$1,new_text);
} else {
return G__46176__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__46178 = cljs.core._EQ_;
var expr__46179 = event.which;
if(cljs.core.truth_((pred__46178.cljs$core$IFn$_invoke$arity$2 ? pred__46178.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__46179) : pred__46178.call(null,goog.events.KeyCodes.UP,expr__46179)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__46178.cljs$core$IFn$_invoke$arity$2 ? pred__46178.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__46179) : pred__46178.call(null,goog.events.KeyCodes.DOWN,expr__46179)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__46178.cljs$core$IFn$_invoke$arity$2 ? pred__46178.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__46179) : pred__46178.call(null,goog.events.KeyCodes.ENTER,expr__46179)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__46178.cljs$core$IFn$_invoke$arity$2 ? pred__46178.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__46179) : pred__46178.call(null,goog.events.KeyCodes.ESC,expr__46179)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_((pred__46178.cljs$core$IFn$_invoke$arity$2 ? pred__46178.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__46179) : pred__46178.call(null,goog.events.KeyCodes.TAB,expr__46179)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46475 = arguments.length;
var i__4790__auto___46476 = (0);
while(true){
if((i__4790__auto___46476 < len__4789__auto___46475)){
args__4795__auto__.push((arguments[i__4790__auto___46476]));

var G__46477 = (i__4790__auto___46476 + (1));
i__4790__auto___46476 = G__46477;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__46203){
var map__46204 = p__46203;
var map__46204__$1 = (((((!((map__46204 == null))))?(((((map__46204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46204):map__46204);
var args = map__46204__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__46206 = re_com.typeahead.make_typeahead_state(args);
var map__46206__$1 = (((((!((map__46206 == null))))?(((((map__46206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46206):map__46206);
var state = map__46206__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46206__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46206__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__46493__delegate = function (p__46212){
var map__46215 = p__46212;
var map__46215__$1 = (((((!((map__46215 == null))))?(((((map__46215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46215):map__46215);
var args__$1 = map__46215__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46215__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__46217 = cljs.core.deref(state_atom);
var map__46217__$1 = (((((!((map__46217 == null))))?(((((map__46217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46217):map__46217);
var state__$1 = map__46217__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4185__auto__ = width;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4582__auto__ = (function re_com$typeahead$iter__46225(s__46226){
return (new cljs.core.LazySeq(null,(function (){
var s__46226__$1 = s__46226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46226__$1);
if(temp__5735__auto__){
var s__46226__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46226__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46226__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46228 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46227 = (0);
while(true){
if((i__46227 < size__4581__auto__)){
var vec__46232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__46227);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46232,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__46228,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__46227,selected_QMARK_,vec__46232,i,s,c__4580__auto__,size__4581__auto__,b__46228,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__46227,selected_QMARK_,vec__46232,i,s,c__4580__auto__,size__4581__auto__,b__46228,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__46227,selected_QMARK_,vec__46232,i,s,c__4580__auto__,size__4581__auto__,b__46228,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args){
return (function (p1__46194_SHARP_){
p1__46194_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__46227,selected_QMARK_,vec__46232,i,s,c__4580__auto__,size__4581__auto__,b__46228,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__46514 = (i__46227 + (1));
i__46227 = G__46514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46228),re_com$typeahead$iter__46225(cljs.core.chunk_rest(s__46226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46228),null);
}
} else {
var vec__46240 = cljs.core.first(s__46226__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46240,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46240,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__46240,i,s,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__46240,i,s,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__46240,i,s,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args){
return (function (p1__46194_SHARP_){
p1__46194_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__46240,i,s,s__46226__$2,temp__5735__auto__,map__46217,map__46217__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46215,map__46215__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46206,map__46206__$1,state,c_search,c_input,state_atom,input_text_model,map__46204,map__46204__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__46225(cljs.core.rest(s__46226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__46493 = function (var_args){
var p__46212 = null;
if (arguments.length > 0) {
var G__46521__i = 0, G__46521__a = new Array(arguments.length -  0);
while (G__46521__i < G__46521__a.length) {G__46521__a[G__46521__i] = arguments[G__46521__i + 0]; ++G__46521__i;}
  p__46212 = new cljs.core.IndexedSeq(G__46521__a,0,null);
} 
return G__46493__delegate.call(this,p__46212);};
G__46493.cljs$lang$maxFixedArity = 0;
G__46493.cljs$lang$applyTo = (function (arglist__46522){
var p__46212 = cljs.core.seq(arglist__46522);
return G__46493__delegate(p__46212);
});
G__46493.cljs$core$IFn$_invoke$arity$variadic = G__46493__delegate;
return G__46493;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq46195){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46195));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__45258__auto___46523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45259__auto__ = (function (){var switch__45128__auto__ = (function (state_46309){
var state_val_46310 = (state_46309[(1)]);
if((state_val_46310 === (7))){
var inst_46258 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46311_46525 = state_46309__$1;
(statearr_46311_46525[(2)] = inst_46258);

(statearr_46311_46525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (1))){
var inst_46253 = null;
var state_46309__$1 = (function (){var statearr_46312 = state_46309;
(statearr_46312[(7)] = inst_46253);

return statearr_46312;
})();
var statearr_46313_46529 = state_46309__$1;
(statearr_46313_46529[(2)] = null);

(statearr_46313_46529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (4))){
var state_46309__$1 = state_46309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46309__$1,(7),in$);
} else {
if((state_val_46310 === (15))){
var inst_46294 = (state_46309[(2)]);
var state_46309__$1 = (function (){var statearr_46326 = state_46309;
(statearr_46326[(8)] = inst_46294);

return statearr_46326;
})();
var statearr_46327_46530 = state_46309__$1;
(statearr_46327_46530[(2)] = null);

(statearr_46327_46530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (13))){
var inst_46279 = (state_46309[(9)]);
var inst_46296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46279,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_46309__$1 = state_46309;
if(inst_46296){
var statearr_46330_46532 = state_46309__$1;
(statearr_46330_46532[(1)] = (16));

} else {
var statearr_46333_46533 = state_46309__$1;
(statearr_46333_46533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (6))){
var inst_46262 = (state_46309[(10)]);
var inst_46261 = (state_46309[(2)]);
var inst_46262__$1 = cljs.core.async.timeout(ms);
var inst_46273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46274 = [in$,inst_46262__$1];
var inst_46275 = (new cljs.core.PersistentVector(null,2,(5),inst_46273,inst_46274,null));
var state_46309__$1 = (function (){var statearr_46335 = state_46309;
(statearr_46335[(10)] = inst_46262__$1);

(statearr_46335[(11)] = inst_46261);

return statearr_46335;
})();
return cljs.core.async.ioc_alts_BANG_(state_46309__$1,(8),inst_46275);
} else {
if((state_val_46310 === (17))){
var state_46309__$1 = state_46309;
var statearr_46337_46535 = state_46309__$1;
(statearr_46337_46535[(2)] = null);

(statearr_46337_46535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (3))){
var inst_46307 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46309__$1,inst_46307);
} else {
if((state_val_46310 === (12))){
var inst_46261 = (state_46309[(11)]);
var state_46309__$1 = state_46309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46309__$1,(15),out,inst_46261);
} else {
if((state_val_46310 === (2))){
var inst_46253 = (state_46309[(7)]);
var inst_46255 = (inst_46253 == null);
var state_46309__$1 = state_46309;
if(cljs.core.truth_(inst_46255)){
var statearr_46344_46536 = state_46309__$1;
(statearr_46344_46536[(1)] = (4));

} else {
var statearr_46345_46537 = state_46309__$1;
(statearr_46345_46537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (11))){
var inst_46304 = (state_46309[(2)]);
var inst_46253 = inst_46304;
var state_46309__$1 = (function (){var statearr_46347 = state_46309;
(statearr_46347[(7)] = inst_46253);

return statearr_46347;
})();
var statearr_46348_46538 = state_46309__$1;
(statearr_46348_46538[(2)] = null);

(statearr_46348_46538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (9))){
var inst_46277 = (state_46309[(12)]);
var inst_46288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46277,(0),null);
var inst_46289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46277,(1),null);
var state_46309__$1 = (function (){var statearr_46351 = state_46309;
(statearr_46351[(13)] = inst_46289);

return statearr_46351;
})();
var statearr_46354_46540 = state_46309__$1;
(statearr_46354_46540[(2)] = inst_46288);

(statearr_46354_46540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (5))){
var inst_46253 = (state_46309[(7)]);
var state_46309__$1 = state_46309;
var statearr_46355_46541 = state_46309__$1;
(statearr_46355_46541[(2)] = inst_46253);

(statearr_46355_46541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (14))){
var inst_46302 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46356_46542 = state_46309__$1;
(statearr_46356_46542[(2)] = inst_46302);

(statearr_46356_46542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (16))){
var inst_46278 = (state_46309[(14)]);
var state_46309__$1 = state_46309;
var statearr_46357_46546 = state_46309__$1;
(statearr_46357_46546[(2)] = inst_46278);

(statearr_46357_46546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (10))){
var inst_46262 = (state_46309[(10)]);
var inst_46279 = (state_46309[(9)]);
var inst_46291 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46279,inst_46262);
var state_46309__$1 = state_46309;
if(inst_46291){
var statearr_46358_46550 = state_46309__$1;
(statearr_46358_46550[(1)] = (12));

} else {
var statearr_46359_46552 = state_46309__$1;
(statearr_46359_46552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (18))){
var inst_46300 = (state_46309[(2)]);
var state_46309__$1 = state_46309;
var statearr_46360_46554 = state_46309__$1;
(statearr_46360_46554[(2)] = inst_46300);

(statearr_46360_46554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46310 === (8))){
var inst_46279 = (state_46309[(9)]);
var inst_46277 = (state_46309[(12)]);
var inst_46277__$1 = (state_46309[(2)]);
var inst_46278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46277__$1,(0),null);
var inst_46279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46277__$1,(1),null);
var inst_46282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46279__$1,in$);
var state_46309__$1 = (function (){var statearr_46361 = state_46309;
(statearr_46361[(9)] = inst_46279__$1);

(statearr_46361[(14)] = inst_46278);

(statearr_46361[(12)] = inst_46277__$1);

return statearr_46361;
})();
if(inst_46282){
var statearr_46362_46556 = state_46309__$1;
(statearr_46362_46556[(1)] = (9));

} else {
var statearr_46363_46557 = state_46309__$1;
(statearr_46363_46557[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__45129__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__45129__auto____0 = (function (){
var statearr_46364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46364[(0)] = re_com$typeahead$debounce_$_state_machine__45129__auto__);

(statearr_46364[(1)] = (1));

return statearr_46364;
});
var re_com$typeahead$debounce_$_state_machine__45129__auto____1 = (function (state_46309){
while(true){
var ret_value__45130__auto__ = (function (){try{while(true){
var result__45131__auto__ = switch__45128__auto__(state_46309);
if(cljs.core.keyword_identical_QMARK_(result__45131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45131__auto__;
}
break;
}
}catch (e46365){if((e46365 instanceof Object)){
var ex__45132__auto__ = e46365;
var statearr_46366_46565 = state_46309;
(statearr_46366_46565[(5)] = ex__45132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46566 = state_46309;
state_46309 = G__46566;
continue;
} else {
return ret_value__45130__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__45129__auto__ = function(state_46309){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__45129__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__45129__auto____1.call(this,state_46309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__45129__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__45129__auto____0;
re_com$typeahead$debounce_$_state_machine__45129__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__45129__auto____1;
return re_com$typeahead$debounce_$_state_machine__45129__auto__;
})()
})();
var state__45260__auto__ = (function (){var statearr_46367 = (f__45259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45259__auto__.cljs$core$IFn$_invoke$arity$0() : f__45259__auto__.call(null));
(statearr_46367[(6)] = c__45258__auto___46523);

return statearr_46367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45260__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
