goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__53038 = e.target.readyState;
var fexpr__53037 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__53037.cljs$core$IFn$_invoke$arity$1 ? fexpr__53037.cljs$core$IFn$_invoke$arity$1(G__53038) : fexpr__53037.call(null,G__53038));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53040,handler){
var map__53041 = p__53040;
var map__53041__$1 = (((((!((map__53041 == null))))?(((((map__53041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53041):map__53041);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53041__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53041__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__53039_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__53039_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___53059 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___53059)){
var response_type_53060 = temp__5735__auto___53059;
(this$__$1.responseType = cljs.core.name(response_type_53060));
} else {
}

var seq__53043_53061 = cljs.core.seq(headers);
var chunk__53044_53062 = null;
var count__53045_53063 = (0);
var i__53046_53064 = (0);
while(true){
if((i__53046_53064 < count__53045_53063)){
var vec__53053_53065 = chunk__53044_53062.cljs$core$IIndexed$_nth$arity$2(null,i__53046_53064);
var k_53066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53053_53065,(0),null);
var v_53067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53053_53065,(1),null);
this$__$1.setRequestHeader(k_53066,v_53067);


var G__53068 = seq__53043_53061;
var G__53069 = chunk__53044_53062;
var G__53070 = count__53045_53063;
var G__53071 = (i__53046_53064 + (1));
seq__53043_53061 = G__53068;
chunk__53044_53062 = G__53069;
count__53045_53063 = G__53070;
i__53046_53064 = G__53071;
continue;
} else {
var temp__5735__auto___53072 = cljs.core.seq(seq__53043_53061);
if(temp__5735__auto___53072){
var seq__53043_53073__$1 = temp__5735__auto___53072;
if(cljs.core.chunked_seq_QMARK_(seq__53043_53073__$1)){
var c__4609__auto___53074 = cljs.core.chunk_first(seq__53043_53073__$1);
var G__53075 = cljs.core.chunk_rest(seq__53043_53073__$1);
var G__53076 = c__4609__auto___53074;
var G__53077 = cljs.core.count(c__4609__auto___53074);
var G__53078 = (0);
seq__53043_53061 = G__53075;
chunk__53044_53062 = G__53076;
count__53045_53063 = G__53077;
i__53046_53064 = G__53078;
continue;
} else {
var vec__53056_53079 = cljs.core.first(seq__53043_53073__$1);
var k_53080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53056_53079,(0),null);
var v_53081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53056_53079,(1),null);
this$__$1.setRequestHeader(k_53080,v_53081);


var G__53082 = cljs.core.next(seq__53043_53073__$1);
var G__53083 = null;
var G__53084 = (0);
var G__53085 = (0);
seq__53043_53061 = G__53082;
chunk__53044_53062 = G__53083;
count__53045_53063 = G__53084;
i__53046_53064 = G__53085;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
