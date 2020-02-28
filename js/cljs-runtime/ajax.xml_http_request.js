goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__53522 = e.target.readyState;
var fexpr__53521 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__53521.cljs$core$IFn$_invoke$arity$1 ? fexpr__53521.cljs$core$IFn$_invoke$arity$1(G__53522) : fexpr__53521.call(null,G__53522));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53557,handler){
var map__53558 = p__53557;
var map__53558__$1 = (((((!((map__53558 == null))))?(((((map__53558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53558):map__53558);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53558__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53558__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__53556_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__53556_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___53617 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___53617)){
var response_type_53618 = temp__5735__auto___53617;
(this$__$1.responseType = cljs.core.name(response_type_53618));
} else {
}

var seq__53568_53619 = cljs.core.seq(headers);
var chunk__53569_53620 = null;
var count__53570_53621 = (0);
var i__53571_53622 = (0);
while(true){
if((i__53571_53622 < count__53570_53621)){
var vec__53585_53623 = chunk__53569_53620.cljs$core$IIndexed$_nth$arity$2(null,i__53571_53622);
var k_53624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53585_53623,(0),null);
var v_53625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53585_53623,(1),null);
this$__$1.setRequestHeader(k_53624,v_53625);


var G__53626 = seq__53568_53619;
var G__53627 = chunk__53569_53620;
var G__53628 = count__53570_53621;
var G__53629 = (i__53571_53622 + (1));
seq__53568_53619 = G__53626;
chunk__53569_53620 = G__53627;
count__53570_53621 = G__53628;
i__53571_53622 = G__53629;
continue;
} else {
var temp__5735__auto___53633 = cljs.core.seq(seq__53568_53619);
if(temp__5735__auto___53633){
var seq__53568_53634__$1 = temp__5735__auto___53633;
if(cljs.core.chunked_seq_QMARK_(seq__53568_53634__$1)){
var c__4609__auto___53635 = cljs.core.chunk_first(seq__53568_53634__$1);
var G__53636 = cljs.core.chunk_rest(seq__53568_53634__$1);
var G__53637 = c__4609__auto___53635;
var G__53638 = cljs.core.count(c__4609__auto___53635);
var G__53639 = (0);
seq__53568_53619 = G__53636;
chunk__53569_53620 = G__53637;
count__53570_53621 = G__53638;
i__53571_53622 = G__53639;
continue;
} else {
var vec__53597_53640 = cljs.core.first(seq__53568_53634__$1);
var k_53641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53597_53640,(0),null);
var v_53642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53597_53640,(1),null);
this$__$1.setRequestHeader(k_53641,v_53642);


var G__53643 = cljs.core.next(seq__53568_53634__$1);
var G__53644 = null;
var G__53645 = (0);
var G__53646 = (0);
seq__53568_53619 = G__53643;
chunk__53569_53620 = G__53644;
count__53570_53621 = G__53645;
i__53571_53622 = G__53646;
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
