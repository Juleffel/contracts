goog.provide('re_frisk.devtool');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frisk.drag');
goog.require('re_frame.core');
goog.require('re_frisk.debugger_page');
goog.require('cognitect.transit');
goog.require('re_frisk.data');
goog.require('re_frisk_shell.re_com.views');
goog.require('re_frisk_shell.frisk');
goog.require('re_frisk.style');
re_frisk.devtool.ua = window.navigator.userAgent;
re_frisk.devtool.ie_QMARK_ = (function (){var or__4185__auto__ = cljs.core.re_find(/MSIE /,re_frisk.devtool.ua);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.re_find(/Trident\//,re_frisk.devtool.ua);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core.re_find(/Edge\//,re_frisk.devtool.ua);
}
}
})();
re_frisk.devtool.export_json = (function re_frisk$devtool$export_json(){
var temp__5733__auto__ = cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlerForForeign","handlerForForeign",-44914005),(function (_,___$1){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (___$2){
return "ForeignType";
}),(function (___$2){
return "";
}));
})], null)),cljs.core.deref(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data))));
if(cljs.core.truth_(temp__5733__auto__)){
var str = temp__5733__auto__;
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).saveAs((new Blob((new Array(str)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/json"], null))),"app-db.json");
} else {
return null;
}
});
re_frisk.devtool.json_on_change = (function re_frisk$devtool$json_on_change(event){
var rdr = (new FileReader());
(rdr.onload = (function (p1__46808_SHARP_){
cljs.core.reset_BANG_(re_frisk.data.re_frame_events,cljs.core.PersistentVector.EMPTY);

var G__46811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),p1__46808_SHARP_.target.result)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__46811) : re_frame.core.dispatch.call(null,G__46811));
}));

return rdr.readAsText((event.target.files[(0)]));
});
re_frisk.devtool.reagent_debugger_shell = (function re_frisk$devtool$reagent_debugger_shell(re_frame_data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46812_SHARP_,p2__46813_SHARP_){
return cljs.core.assoc_in(p1__46812_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__46813_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.style.frisk_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(re_frame_data)], null))], null)], null);
});
});
re_frisk.devtool.on_window_unload = (function re_frisk$devtool$on_window_unload(){
reagent.dom.unmount_component_at_node(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132),true);
});
re_frisk.devtool.mount = (function re_frisk$devtool$mount(w,d){
var app = d.getElementById("app");
var re_frame_QMARK_ = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data));
var doc = document;
goog.object.set(w,"onunload",re_frisk.devtool.on_window_unload);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),d,new cljs.core.Keyword(null,"win","win",-1624642689),w,new cljs.core.Keyword(null,"app","app",-560961707),app], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"re-frisk-debugger",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"json-file-field",new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.devtool.json_on_change,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = re_frame_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data))),false);
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.main,re_frisk.data.re_frame_data,re_frisk.data.re_frame_events,re_frisk.data.deb_data,d,(function (){
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).getElementById("json-file-field").click();
}),re_frisk.devtool.export_json], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.reagent_debugger_shell,re_frisk.data.re_frame_data], null))], null)], null),app);
});
re_frisk.devtool.open_debugger_window = (function re_frisk$devtool$open_debugger_window(){
var map__46823 = new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data));
var map__46823__$1 = (((((!((map__46823 == null))))?(((((map__46823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46823):map__46823);
var ext_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46823__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46823__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var w = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = ext_width;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = ext_height;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
var d = w.document;
d.open();

d.write(re_frisk.debugger_page.html_doc);

var G__46826_46863 = w;
var G__46827_46864 = "onload";
var G__46828_46865 = (function (){
return re_frisk.devtool.mount(w,d);
});
goog.object.set(G__46826_46863,G__46827_46864,G__46828_46865);

return d.close();
});
re_frisk.devtool.visibility_button = (function re_frisk$devtool$visibility_button(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
re_frisk.devtool.re_frisk_panel = (function re_frisk$devtool$re_frisk_panel(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46868 = arguments.length;
var i__4790__auto___46869 = (0);
while(true){
if((i__4790__auto___46869 < len__4789__auto___46868)){
args__4795__auto__.push((arguments[i__4790__auto___46869]));

var G__46870 = (i__4790__auto___46869 + (1));
i__4790__auto___46869 = G__46870;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frisk.devtool.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frisk.devtool.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46831_SHARP_,p2__46832_SHARP_){
return cljs.core.assoc_in(p1__46831_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__46832_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return (function() { 
var G__46875__delegate = function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1], null))], null);
};
var G__46875 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__46877__i = 0, G__46877__a = new Array(arguments.length -  0);
while (G__46877__i < G__46877__a.length) {G__46877__a[G__46877__i] = arguments[G__46877__i + 0]; ++G__46877__i;}
  data__$1 = new cljs.core.IndexedSeq(G__46877__a,0,null);
} 
return G__46875__delegate.call(this,data__$1);};
G__46875.cljs$lang$maxFixedArity = 0;
G__46875.cljs$lang$applyTo = (function (arglist__46878){
var data__$1 = cljs.core.seq(arglist__46878);
return G__46875__delegate(data__$1);
});
G__46875.cljs$core$IFn$_invoke$arity$variadic = G__46875__delegate;
return G__46875;
})()
;
}));

(re_frisk.devtool.re_frisk_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.devtool.re_frisk_panel.cljs$lang$applyTo = (function (seq46833){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46833));
}));

re_frisk.devtool.re_frisk_shell = (function re_frisk$devtool$re_frisk_shell(p__46841){
var map__46842 = p__46841;
var map__46842__$1 = (((((!((map__46842 == null))))?(((((map__46842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46842):map__46842);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46842__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46842__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46842__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46842__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.style.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resize","resize",297367086),"both",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], 0));
var height__$1 = (cljs.core.truth_((function (){var and__4174__auto__ = re_frisk.devtool.ie_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(height);
} else {
return and__4174__auto__;
}
})())?(200):height);
var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804),height__$1,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null):null)], 0));
var style__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style__$1,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null):null)], 0));
if(cljs.core.truth_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.drag.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x);
} else {
}

if(cljs.core.truth_(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.drag.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),y);
} else {
}

return (function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.drag.draggable))),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.drag.draggable))),"px"].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999)], null),(cljs.core.truth_((function (){var or__4185__auto__ = re_frisk.devtool.ie_QMARK_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.drag.draggable)));
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px",new cljs.core.Keyword(null,"right","right",-452581833),"20px"], null):null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.style.re_frisk_button_style,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),re_frisk.drag.mouse_down_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.visibility_button,new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data))),(function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))));
})], null),"re-frisk"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.style.arrow_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),"\u2197"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.re_frisk_panel,cljs.core.deref(re_frisk.data.re_frame_data)], null)], null):null)], null);
} else {
return null;
}
});
});

//# sourceMappingURL=re_frisk.devtool.js.map
