goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46059 = arguments.length;
switch (G__46059) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46062 = (function (f,blockable,meta46063){
this.f = f;
this.blockable = blockable;
this.meta46063 = meta46063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46064,meta46063__$1){
var self__ = this;
var _46064__$1 = this;
return (new cljs.core.async.t_cljs$core$async46062(self__.f,self__.blockable,meta46063__$1));
}));

(cljs.core.async.t_cljs$core$async46062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46064){
var self__ = this;
var _46064__$1 = this;
return self__.meta46063;
}));

(cljs.core.async.t_cljs$core$async46062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46063","meta46063",-1351347132,null)], null);
}));

(cljs.core.async.t_cljs$core$async46062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46062");

(cljs.core.async.t_cljs$core$async46062.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46062.
 */
cljs.core.async.__GT_t_cljs$core$async46062 = (function cljs$core$async$__GT_t_cljs$core$async46062(f__$1,blockable__$1,meta46063){
return (new cljs.core.async.t_cljs$core$async46062(f__$1,blockable__$1,meta46063));
});

}

return (new cljs.core.async.t_cljs$core$async46062(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46096 = arguments.length;
switch (G__46096) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46107 = arguments.length;
switch (G__46107) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46146 = arguments.length;
switch (G__46146) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48451 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48451) : fn1.call(null,val_48451));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48451) : fn1.call(null,val_48451));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46161 = arguments.length;
switch (G__46161) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___48489 = n;
var x_48490 = (0);
while(true){
if((x_48490 < n__4666__auto___48489)){
(a[x_48490] = x_48490);

var G__48495 = (x_48490 + (1));
x_48490 = G__48495;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46178 = (function (flag,meta46179){
this.flag = flag;
this.meta46179 = meta46179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46180,meta46179__$1){
var self__ = this;
var _46180__$1 = this;
return (new cljs.core.async.t_cljs$core$async46178(self__.flag,meta46179__$1));
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46180){
var self__ = this;
var _46180__$1 = this;
return self__.meta46179;
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46179","meta46179",-258440304,null)], null);
}));

(cljs.core.async.t_cljs$core$async46178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46178");

(cljs.core.async.t_cljs$core$async46178.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46178.
 */
cljs.core.async.__GT_t_cljs$core$async46178 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46178(flag__$1,meta46179){
return (new cljs.core.async.t_cljs$core$async46178(flag__$1,meta46179));
});

}

return (new cljs.core.async.t_cljs$core$async46178(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46202 = (function (flag,cb,meta46203){
this.flag = flag;
this.cb = cb;
this.meta46203 = meta46203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46204,meta46203__$1){
var self__ = this;
var _46204__$1 = this;
return (new cljs.core.async.t_cljs$core$async46202(self__.flag,self__.cb,meta46203__$1));
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46204){
var self__ = this;
var _46204__$1 = this;
return self__.meta46203;
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46203","meta46203",376182584,null)], null);
}));

(cljs.core.async.t_cljs$core$async46202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46202");

(cljs.core.async.t_cljs$core$async46202.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46202.
 */
cljs.core.async.__GT_t_cljs$core$async46202 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46202(flag__$1,cb__$1,meta46203){
return (new cljs.core.async.t_cljs$core$async46202(flag__$1,cb__$1,meta46203));
});

}

return (new cljs.core.async.t_cljs$core$async46202(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46217_SHARP_){
var G__46232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46217_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46232) : fret.call(null,G__46232));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46218_SHARP_){
var G__46233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46218_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46233) : fret.call(null,G__46233));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48526 = (i + (1));
i = G__48526;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48530 = arguments.length;
var i__4790__auto___48532 = (0);
while(true){
if((i__4790__auto___48532 < len__4789__auto___48530)){
args__4795__auto__.push((arguments[i__4790__auto___48532]));

var G__48534 = (i__4790__auto___48532 + (1));
i__4790__auto___48532 = G__48534;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46258){
var map__46259 = p__46258;
var map__46259__$1 = (((((!((map__46259 == null))))?(((((map__46259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46259):map__46259);
var opts = map__46259__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46246){
var G__46247 = cljs.core.first(seq46246);
var seq46246__$1 = cljs.core.next(seq46246);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46247,seq46246__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46272 = arguments.length;
switch (G__46272) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45961__auto___48552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46303){
var state_val_46304 = (state_46303[(1)]);
if((state_val_46304 === (7))){
var inst_46298 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46305_48553 = state_46303__$1;
(statearr_46305_48553[(2)] = inst_46298);

(statearr_46305_48553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (1))){
var state_46303__$1 = state_46303;
var statearr_46306_48555 = state_46303__$1;
(statearr_46306_48555[(2)] = null);

(statearr_46306_48555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (4))){
var inst_46281 = (state_46303[(7)]);
var inst_46281__$1 = (state_46303[(2)]);
var inst_46282 = (inst_46281__$1 == null);
var state_46303__$1 = (function (){var statearr_46307 = state_46303;
(statearr_46307[(7)] = inst_46281__$1);

return statearr_46307;
})();
if(cljs.core.truth_(inst_46282)){
var statearr_46308_48567 = state_46303__$1;
(statearr_46308_48567[(1)] = (5));

} else {
var statearr_46309_48568 = state_46303__$1;
(statearr_46309_48568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (13))){
var state_46303__$1 = state_46303;
var statearr_46310_48569 = state_46303__$1;
(statearr_46310_48569[(2)] = null);

(statearr_46310_48569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (6))){
var inst_46281 = (state_46303[(7)]);
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46303__$1,(11),to,inst_46281);
} else {
if((state_val_46304 === (3))){
var inst_46300 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46303__$1,inst_46300);
} else {
if((state_val_46304 === (12))){
var state_46303__$1 = state_46303;
var statearr_46311_48570 = state_46303__$1;
(statearr_46311_48570[(2)] = null);

(statearr_46311_48570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (2))){
var state_46303__$1 = state_46303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46303__$1,(4),from);
} else {
if((state_val_46304 === (11))){
var inst_46291 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
if(cljs.core.truth_(inst_46291)){
var statearr_46312_48574 = state_46303__$1;
(statearr_46312_48574[(1)] = (12));

} else {
var statearr_46313_48575 = state_46303__$1;
(statearr_46313_48575[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (9))){
var state_46303__$1 = state_46303;
var statearr_46314_48577 = state_46303__$1;
(statearr_46314_48577[(2)] = null);

(statearr_46314_48577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (5))){
var state_46303__$1 = state_46303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46315_48578 = state_46303__$1;
(statearr_46315_48578[(1)] = (8));

} else {
var statearr_46316_48579 = state_46303__$1;
(statearr_46316_48579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (14))){
var inst_46296 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46317_48580 = state_46303__$1;
(statearr_46317_48580[(2)] = inst_46296);

(statearr_46317_48580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (10))){
var inst_46288 = (state_46303[(2)]);
var state_46303__$1 = state_46303;
var statearr_46318_48585 = state_46303__$1;
(statearr_46318_48585[(2)] = inst_46288);

(statearr_46318_48585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46304 === (8))){
var inst_46285 = cljs.core.async.close_BANG_(to);
var state_46303__$1 = state_46303;
var statearr_46324_48586 = state_46303__$1;
(statearr_46324_48586[(2)] = inst_46285);

(statearr_46324_48586[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_46332 = [null,null,null,null,null,null,null,null];
(statearr_46332[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_46332[(1)] = (1));

return statearr_46332;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_46303){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46303);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46338){if((e46338 instanceof Object)){
var ex__45741__auto__ = e46338;
var statearr_46343_48588 = state_46303;
(statearr_46343_48588[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46338;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48589 = state_46303;
state_46303 = G__48589;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_46303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_46303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46351 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46351[(6)] = c__45961__auto___48552);

return statearr_46351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46376){
var vec__46377 = p__46376;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46377,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46377,(1),null);
var job = vec__46377;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45961__auto___48592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46384){
var state_val_46385 = (state_46384[(1)]);
if((state_val_46385 === (1))){
var state_46384__$1 = state_46384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46384__$1,(2),res,v);
} else {
if((state_val_46385 === (2))){
var inst_46381 = (state_46384[(2)]);
var inst_46382 = cljs.core.async.close_BANG_(res);
var state_46384__$1 = (function (){var statearr_46387 = state_46384;
(statearr_46387[(7)] = inst_46381);

return statearr_46387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46384__$1,inst_46382);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0 = (function (){
var statearr_46388 = [null,null,null,null,null,null,null,null];
(statearr_46388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__);

(statearr_46388[(1)] = (1));

return statearr_46388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1 = (function (state_46384){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46384);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46389){if((e46389 instanceof Object)){
var ex__45741__auto__ = e46389;
var statearr_46390_48599 = state_46384;
(statearr_46390_48599[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48602 = state_46384;
state_46384 = G__48602;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = function(state_46384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1.call(this,state_46384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46391 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46391[(6)] = c__45961__auto___48592);

return statearr_46391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46393){
var vec__46394 = p__46393;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46394,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46394,(1),null);
var job = vec__46394;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___48607 = n;
var __48608 = (0);
while(true){
if((__48608 < n__4666__auto___48607)){
var G__46400_48609 = type;
var G__46400_48610__$1 = (((G__46400_48609 instanceof cljs.core.Keyword))?G__46400_48609.fqn:null);
switch (G__46400_48610__$1) {
case "compute":
var c__45961__auto___48612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48608,c__45961__auto___48612,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async){
return (function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = ((function (__48608,c__45961__auto___48612,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async){
return (function (state_46413){
var state_val_46414 = (state_46413[(1)]);
if((state_val_46414 === (1))){
var state_46413__$1 = state_46413;
var statearr_46415_48616 = state_46413__$1;
(statearr_46415_48616[(2)] = null);

(statearr_46415_48616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (2))){
var state_46413__$1 = state_46413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46413__$1,(4),jobs);
} else {
if((state_val_46414 === (3))){
var inst_46411 = (state_46413[(2)]);
var state_46413__$1 = state_46413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46413__$1,inst_46411);
} else {
if((state_val_46414 === (4))){
var inst_46403 = (state_46413[(2)]);
var inst_46404 = process(inst_46403);
var state_46413__$1 = state_46413;
if(cljs.core.truth_(inst_46404)){
var statearr_46416_48619 = state_46413__$1;
(statearr_46416_48619[(1)] = (5));

} else {
var statearr_46417_48629 = state_46413__$1;
(statearr_46417_48629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (5))){
var state_46413__$1 = state_46413;
var statearr_46418_48630 = state_46413__$1;
(statearr_46418_48630[(2)] = null);

(statearr_46418_48630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (6))){
var state_46413__$1 = state_46413;
var statearr_46420_48631 = state_46413__$1;
(statearr_46420_48631[(2)] = null);

(statearr_46420_48631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (7))){
var inst_46409 = (state_46413[(2)]);
var state_46413__$1 = state_46413;
var statearr_46421_48632 = state_46413__$1;
(statearr_46421_48632[(2)] = inst_46409);

(statearr_46421_48632[(1)] = (3));


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
});})(__48608,c__45961__auto___48612,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async))
;
return ((function (__48608,switch__45737__auto__,c__45961__auto___48612,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0 = (function (){
var statearr_46422 = [null,null,null,null,null,null,null];
(statearr_46422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__);

(statearr_46422[(1)] = (1));

return statearr_46422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1 = (function (state_46413){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46413);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46423){if((e46423 instanceof Object)){
var ex__45741__auto__ = e46423;
var statearr_46424_48636 = state_46413;
(statearr_46424_48636[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48637 = state_46413;
state_46413 = G__48637;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = function(state_46413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1.call(this,state_46413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__;
})()
;})(__48608,switch__45737__auto__,c__45961__auto___48612,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async))
})();
var state__45963__auto__ = (function (){var statearr_46425 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46425[(6)] = c__45961__auto___48612);

return statearr_46425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
});})(__48608,c__45961__auto___48612,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async))
);


break;
case "async":
var c__45961__auto___48638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48608,c__45961__auto___48638,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async){
return (function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = ((function (__48608,c__45961__auto___48638,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async){
return (function (state_46439){
var state_val_46440 = (state_46439[(1)]);
if((state_val_46440 === (1))){
var state_46439__$1 = state_46439;
var statearr_46441_48640 = state_46439__$1;
(statearr_46441_48640[(2)] = null);

(statearr_46441_48640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46440 === (2))){
var state_46439__$1 = state_46439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46439__$1,(4),jobs);
} else {
if((state_val_46440 === (3))){
var inst_46437 = (state_46439[(2)]);
var state_46439__$1 = state_46439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46439__$1,inst_46437);
} else {
if((state_val_46440 === (4))){
var inst_46429 = (state_46439[(2)]);
var inst_46430 = async(inst_46429);
var state_46439__$1 = state_46439;
if(cljs.core.truth_(inst_46430)){
var statearr_46442_48644 = state_46439__$1;
(statearr_46442_48644[(1)] = (5));

} else {
var statearr_46443_48645 = state_46439__$1;
(statearr_46443_48645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46440 === (5))){
var state_46439__$1 = state_46439;
var statearr_46444_48648 = state_46439__$1;
(statearr_46444_48648[(2)] = null);

(statearr_46444_48648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46440 === (6))){
var state_46439__$1 = state_46439;
var statearr_46445_48649 = state_46439__$1;
(statearr_46445_48649[(2)] = null);

(statearr_46445_48649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46440 === (7))){
var inst_46435 = (state_46439[(2)]);
var state_46439__$1 = state_46439;
var statearr_46448_48652 = state_46439__$1;
(statearr_46448_48652[(2)] = inst_46435);

(statearr_46448_48652[(1)] = (3));


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
});})(__48608,c__45961__auto___48638,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async))
;
return ((function (__48608,switch__45737__auto__,c__45961__auto___48638,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0 = (function (){
var statearr_46449 = [null,null,null,null,null,null,null];
(statearr_46449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__);

(statearr_46449[(1)] = (1));

return statearr_46449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1 = (function (state_46439){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46439);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46451){if((e46451 instanceof Object)){
var ex__45741__auto__ = e46451;
var statearr_46452_48663 = state_46439;
(statearr_46452_48663[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48668 = state_46439;
state_46439 = G__48668;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = function(state_46439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1.call(this,state_46439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__;
})()
;})(__48608,switch__45737__auto__,c__45961__auto___48638,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async))
})();
var state__45963__auto__ = (function (){var statearr_46454 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46454[(6)] = c__45961__auto___48638);

return statearr_46454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
});})(__48608,c__45961__auto___48638,G__46400_48609,G__46400_48610__$1,n__4666__auto___48607,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46400_48610__$1)].join('')));

}

var G__48675 = (__48608 + (1));
__48608 = G__48675;
continue;
} else {
}
break;
}

var c__45961__auto___48676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46476){
var state_val_46477 = (state_46476[(1)]);
if((state_val_46477 === (7))){
var inst_46472 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
var statearr_46482_48679 = state_46476__$1;
(statearr_46482_48679[(2)] = inst_46472);

(statearr_46482_48679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (1))){
var state_46476__$1 = state_46476;
var statearr_46483_48682 = state_46476__$1;
(statearr_46483_48682[(2)] = null);

(statearr_46483_48682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (4))){
var inst_46457 = (state_46476[(7)]);
var inst_46457__$1 = (state_46476[(2)]);
var inst_46458 = (inst_46457__$1 == null);
var state_46476__$1 = (function (){var statearr_46485 = state_46476;
(statearr_46485[(7)] = inst_46457__$1);

return statearr_46485;
})();
if(cljs.core.truth_(inst_46458)){
var statearr_46486_48683 = state_46476__$1;
(statearr_46486_48683[(1)] = (5));

} else {
var statearr_46488_48685 = state_46476__$1;
(statearr_46488_48685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (6))){
var inst_46462 = (state_46476[(8)]);
var inst_46457 = (state_46476[(7)]);
var inst_46462__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46464 = [inst_46457,inst_46462__$1];
var inst_46465 = (new cljs.core.PersistentVector(null,2,(5),inst_46463,inst_46464,null));
var state_46476__$1 = (function (){var statearr_46490 = state_46476;
(statearr_46490[(8)] = inst_46462__$1);

return statearr_46490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46476__$1,(8),jobs,inst_46465);
} else {
if((state_val_46477 === (3))){
var inst_46474 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46476__$1,inst_46474);
} else {
if((state_val_46477 === (2))){
var state_46476__$1 = state_46476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46476__$1,(4),from);
} else {
if((state_val_46477 === (9))){
var inst_46469 = (state_46476[(2)]);
var state_46476__$1 = (function (){var statearr_46492 = state_46476;
(statearr_46492[(9)] = inst_46469);

return statearr_46492;
})();
var statearr_46493_48688 = state_46476__$1;
(statearr_46493_48688[(2)] = null);

(statearr_46493_48688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (5))){
var inst_46460 = cljs.core.async.close_BANG_(jobs);
var state_46476__$1 = state_46476;
var statearr_46496_48690 = state_46476__$1;
(statearr_46496_48690[(2)] = inst_46460);

(statearr_46496_48690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (8))){
var inst_46462 = (state_46476[(8)]);
var inst_46467 = (state_46476[(2)]);
var state_46476__$1 = (function (){var statearr_46497 = state_46476;
(statearr_46497[(10)] = inst_46467);

return statearr_46497;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46476__$1,(9),results,inst_46462);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0 = (function (){
var statearr_46498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__);

(statearr_46498[(1)] = (1));

return statearr_46498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1 = (function (state_46476){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46476);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46499){if((e46499 instanceof Object)){
var ex__45741__auto__ = e46499;
var statearr_46500_48695 = state_46476;
(statearr_46500_48695[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48699 = state_46476;
state_46476 = G__48699;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = function(state_46476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1.call(this,state_46476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46501 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46501[(6)] = c__45961__auto___48676);

return statearr_46501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


var c__45961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46546){
var state_val_46547 = (state_46546[(1)]);
if((state_val_46547 === (7))){
var inst_46541 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
var statearr_46548_48703 = state_46546__$1;
(statearr_46548_48703[(2)] = inst_46541);

(statearr_46548_48703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (20))){
var state_46546__$1 = state_46546;
var statearr_46549_48704 = state_46546__$1;
(statearr_46549_48704[(2)] = null);

(statearr_46549_48704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (1))){
var state_46546__$1 = state_46546;
var statearr_46551_48713 = state_46546__$1;
(statearr_46551_48713[(2)] = null);

(statearr_46551_48713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (4))){
var inst_46505 = (state_46546[(7)]);
var inst_46505__$1 = (state_46546[(2)]);
var inst_46506 = (inst_46505__$1 == null);
var state_46546__$1 = (function (){var statearr_46552 = state_46546;
(statearr_46552[(7)] = inst_46505__$1);

return statearr_46552;
})();
if(cljs.core.truth_(inst_46506)){
var statearr_46553_48717 = state_46546__$1;
(statearr_46553_48717[(1)] = (5));

} else {
var statearr_46554_48719 = state_46546__$1;
(statearr_46554_48719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (15))){
var inst_46521 = (state_46546[(8)]);
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46546__$1,(18),to,inst_46521);
} else {
if((state_val_46547 === (21))){
var inst_46536 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
var statearr_46555_48720 = state_46546__$1;
(statearr_46555_48720[(2)] = inst_46536);

(statearr_46555_48720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (13))){
var inst_46538 = (state_46546[(2)]);
var state_46546__$1 = (function (){var statearr_46556 = state_46546;
(statearr_46556[(9)] = inst_46538);

return statearr_46556;
})();
var statearr_46557_48733 = state_46546__$1;
(statearr_46557_48733[(2)] = null);

(statearr_46557_48733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (6))){
var inst_46505 = (state_46546[(7)]);
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46546__$1,(11),inst_46505);
} else {
if((state_val_46547 === (17))){
var inst_46530 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
if(cljs.core.truth_(inst_46530)){
var statearr_46560_48735 = state_46546__$1;
(statearr_46560_48735[(1)] = (19));

} else {
var statearr_46561_48740 = state_46546__$1;
(statearr_46561_48740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (3))){
var inst_46543 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46546__$1,inst_46543);
} else {
if((state_val_46547 === (12))){
var inst_46515 = (state_46546[(10)]);
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46546__$1,(14),inst_46515);
} else {
if((state_val_46547 === (2))){
var state_46546__$1 = state_46546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46546__$1,(4),results);
} else {
if((state_val_46547 === (19))){
var state_46546__$1 = state_46546;
var statearr_46562_48749 = state_46546__$1;
(statearr_46562_48749[(2)] = null);

(statearr_46562_48749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (11))){
var inst_46515 = (state_46546[(2)]);
var state_46546__$1 = (function (){var statearr_46565 = state_46546;
(statearr_46565[(10)] = inst_46515);

return statearr_46565;
})();
var statearr_46566_48751 = state_46546__$1;
(statearr_46566_48751[(2)] = null);

(statearr_46566_48751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (9))){
var state_46546__$1 = state_46546;
var statearr_46568_48755 = state_46546__$1;
(statearr_46568_48755[(2)] = null);

(statearr_46568_48755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (5))){
var state_46546__$1 = state_46546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46569_48756 = state_46546__$1;
(statearr_46569_48756[(1)] = (8));

} else {
var statearr_46571_48758 = state_46546__$1;
(statearr_46571_48758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (14))){
var inst_46521 = (state_46546[(8)]);
var inst_46521__$1 = (state_46546[(2)]);
var inst_46522 = (inst_46521__$1 == null);
var inst_46523 = cljs.core.not(inst_46522);
var state_46546__$1 = (function (){var statearr_46572 = state_46546;
(statearr_46572[(8)] = inst_46521__$1);

return statearr_46572;
})();
if(inst_46523){
var statearr_46573_48762 = state_46546__$1;
(statearr_46573_48762[(1)] = (15));

} else {
var statearr_46574_48763 = state_46546__$1;
(statearr_46574_48763[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (16))){
var state_46546__$1 = state_46546;
var statearr_46575_48770 = state_46546__$1;
(statearr_46575_48770[(2)] = false);

(statearr_46575_48770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (10))){
var inst_46512 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
var statearr_46576_48774 = state_46546__$1;
(statearr_46576_48774[(2)] = inst_46512);

(statearr_46576_48774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (18))){
var inst_46527 = (state_46546[(2)]);
var state_46546__$1 = state_46546;
var statearr_46581_48780 = state_46546__$1;
(statearr_46581_48780[(2)] = inst_46527);

(statearr_46581_48780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46547 === (8))){
var inst_46509 = cljs.core.async.close_BANG_(to);
var state_46546__$1 = state_46546;
var statearr_46588_48784 = state_46546__$1;
(statearr_46588_48784[(2)] = inst_46509);

(statearr_46588_48784[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0 = (function (){
var statearr_46596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__);

(statearr_46596[(1)] = (1));

return statearr_46596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1 = (function (state_46546){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46546);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46602){if((e46602 instanceof Object)){
var ex__45741__auto__ = e46602;
var statearr_46603_48788 = state_46546;
(statearr_46603_48788[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48794 = state_46546;
state_46546 = G__48794;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__ = function(state_46546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1.call(this,state_46546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46610 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46610[(6)] = c__45961__auto__);

return statearr_46610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));

return c__45961__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46626 = arguments.length;
switch (G__46626) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46641 = arguments.length;
switch (G__46641) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46648 = arguments.length;
switch (G__46648) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45961__auto___48850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46674){
var state_val_46675 = (state_46674[(1)]);
if((state_val_46675 === (7))){
var inst_46670 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46677_48851 = state_46674__$1;
(statearr_46677_48851[(2)] = inst_46670);

(statearr_46677_48851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (1))){
var state_46674__$1 = state_46674;
var statearr_46678_48853 = state_46674__$1;
(statearr_46678_48853[(2)] = null);

(statearr_46678_48853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (4))){
var inst_46651 = (state_46674[(7)]);
var inst_46651__$1 = (state_46674[(2)]);
var inst_46652 = (inst_46651__$1 == null);
var state_46674__$1 = (function (){var statearr_46680 = state_46674;
(statearr_46680[(7)] = inst_46651__$1);

return statearr_46680;
})();
if(cljs.core.truth_(inst_46652)){
var statearr_46681_48861 = state_46674__$1;
(statearr_46681_48861[(1)] = (5));

} else {
var statearr_46682_48862 = state_46674__$1;
(statearr_46682_48862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (13))){
var state_46674__$1 = state_46674;
var statearr_46685_48863 = state_46674__$1;
(statearr_46685_48863[(2)] = null);

(statearr_46685_48863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (6))){
var inst_46651 = (state_46674[(7)]);
var inst_46657 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46651) : p.call(null,inst_46651));
var state_46674__$1 = state_46674;
if(cljs.core.truth_(inst_46657)){
var statearr_46687_48869 = state_46674__$1;
(statearr_46687_48869[(1)] = (9));

} else {
var statearr_46690_48870 = state_46674__$1;
(statearr_46690_48870[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (3))){
var inst_46672 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46674__$1,inst_46672);
} else {
if((state_val_46675 === (12))){
var state_46674__$1 = state_46674;
var statearr_46693_48873 = state_46674__$1;
(statearr_46693_48873[(2)] = null);

(statearr_46693_48873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (2))){
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46674__$1,(4),ch);
} else {
if((state_val_46675 === (11))){
var inst_46651 = (state_46674[(7)]);
var inst_46661 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46674__$1,(8),inst_46661,inst_46651);
} else {
if((state_val_46675 === (9))){
var state_46674__$1 = state_46674;
var statearr_46695_48881 = state_46674__$1;
(statearr_46695_48881[(2)] = tc);

(statearr_46695_48881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (5))){
var inst_46654 = cljs.core.async.close_BANG_(tc);
var inst_46655 = cljs.core.async.close_BANG_(fc);
var state_46674__$1 = (function (){var statearr_46697 = state_46674;
(statearr_46697[(8)] = inst_46654);

return statearr_46697;
})();
var statearr_46698_48885 = state_46674__$1;
(statearr_46698_48885[(2)] = inst_46655);

(statearr_46698_48885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (14))){
var inst_46668 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
var statearr_46699_48889 = state_46674__$1;
(statearr_46699_48889[(2)] = inst_46668);

(statearr_46699_48889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (10))){
var state_46674__$1 = state_46674;
var statearr_46700_48892 = state_46674__$1;
(statearr_46700_48892[(2)] = fc);

(statearr_46700_48892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46675 === (8))){
var inst_46663 = (state_46674[(2)]);
var state_46674__$1 = state_46674;
if(cljs.core.truth_(inst_46663)){
var statearr_46702_48893 = state_46674__$1;
(statearr_46702_48893[(1)] = (12));

} else {
var statearr_46703_48894 = state_46674__$1;
(statearr_46703_48894[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_46704 = [null,null,null,null,null,null,null,null,null];
(statearr_46704[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_46704[(1)] = (1));

return statearr_46704;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_46674){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46674);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46705){if((e46705 instanceof Object)){
var ex__45741__auto__ = e46705;
var statearr_46706_48900 = state_46674;
(statearr_46706_48900[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48902 = state_46674;
state_46674 = G__48902;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_46674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_46674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46707 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46707[(6)] = c__45961__auto___48850);

return statearr_46707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46733){
var state_val_46734 = (state_46733[(1)]);
if((state_val_46734 === (7))){
var inst_46728 = (state_46733[(2)]);
var state_46733__$1 = state_46733;
var statearr_46735_48916 = state_46733__$1;
(statearr_46735_48916[(2)] = inst_46728);

(statearr_46735_48916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (1))){
var inst_46712 = init;
var state_46733__$1 = (function (){var statearr_46737 = state_46733;
(statearr_46737[(7)] = inst_46712);

return statearr_46737;
})();
var statearr_46738_48921 = state_46733__$1;
(statearr_46738_48921[(2)] = null);

(statearr_46738_48921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (4))){
var inst_46715 = (state_46733[(8)]);
var inst_46715__$1 = (state_46733[(2)]);
var inst_46716 = (inst_46715__$1 == null);
var state_46733__$1 = (function (){var statearr_46739 = state_46733;
(statearr_46739[(8)] = inst_46715__$1);

return statearr_46739;
})();
if(cljs.core.truth_(inst_46716)){
var statearr_46742_48927 = state_46733__$1;
(statearr_46742_48927[(1)] = (5));

} else {
var statearr_46743_48929 = state_46733__$1;
(statearr_46743_48929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (6))){
var inst_46715 = (state_46733[(8)]);
var inst_46719 = (state_46733[(9)]);
var inst_46712 = (state_46733[(7)]);
var inst_46719__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46712,inst_46715) : f.call(null,inst_46712,inst_46715));
var inst_46720 = cljs.core.reduced_QMARK_(inst_46719__$1);
var state_46733__$1 = (function (){var statearr_46744 = state_46733;
(statearr_46744[(9)] = inst_46719__$1);

return statearr_46744;
})();
if(inst_46720){
var statearr_46746_48935 = state_46733__$1;
(statearr_46746_48935[(1)] = (8));

} else {
var statearr_46747_48938 = state_46733__$1;
(statearr_46747_48938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (3))){
var inst_46730 = (state_46733[(2)]);
var state_46733__$1 = state_46733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46733__$1,inst_46730);
} else {
if((state_val_46734 === (2))){
var state_46733__$1 = state_46733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46733__$1,(4),ch);
} else {
if((state_val_46734 === (9))){
var inst_46719 = (state_46733[(9)]);
var inst_46712 = inst_46719;
var state_46733__$1 = (function (){var statearr_46748 = state_46733;
(statearr_46748[(7)] = inst_46712);

return statearr_46748;
})();
var statearr_46751_48951 = state_46733__$1;
(statearr_46751_48951[(2)] = null);

(statearr_46751_48951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (5))){
var inst_46712 = (state_46733[(7)]);
var state_46733__$1 = state_46733;
var statearr_46752_48952 = state_46733__$1;
(statearr_46752_48952[(2)] = inst_46712);

(statearr_46752_48952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (10))){
var inst_46726 = (state_46733[(2)]);
var state_46733__$1 = state_46733;
var statearr_46753_48957 = state_46733__$1;
(statearr_46753_48957[(2)] = inst_46726);

(statearr_46753_48957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (8))){
var inst_46719 = (state_46733[(9)]);
var inst_46722 = cljs.core.deref(inst_46719);
var state_46733__$1 = state_46733;
var statearr_46754_48962 = state_46733__$1;
(statearr_46754_48962[(2)] = inst_46722);

(statearr_46754_48962[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45738__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45738__auto____0 = (function (){
var statearr_46756 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46756[(0)] = cljs$core$async$reduce_$_state_machine__45738__auto__);

(statearr_46756[(1)] = (1));

return statearr_46756;
});
var cljs$core$async$reduce_$_state_machine__45738__auto____1 = (function (state_46733){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46733);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46757){if((e46757 instanceof Object)){
var ex__45741__auto__ = e46757;
var statearr_46758_48978 = state_46733;
(statearr_46758_48978[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48983 = state_46733;
state_46733 = G__48983;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45738__auto__ = function(state_46733){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45738__auto____1.call(this,state_46733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45738__auto____0;
cljs$core$async$reduce_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45738__auto____1;
return cljs$core$async$reduce_$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46760 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46760[(6)] = c__45961__auto__);

return statearr_46760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));

return c__45961__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46767){
var state_val_46768 = (state_46767[(1)]);
if((state_val_46768 === (1))){
var inst_46762 = cljs.core.async.reduce(f__$1,init,ch);
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46767__$1,(2),inst_46762);
} else {
if((state_val_46768 === (2))){
var inst_46764 = (state_46767[(2)]);
var inst_46765 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46764) : f__$1.call(null,inst_46764));
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46767__$1,inst_46765);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45738__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45738__auto____0 = (function (){
var statearr_46770 = [null,null,null,null,null,null,null];
(statearr_46770[(0)] = cljs$core$async$transduce_$_state_machine__45738__auto__);

(statearr_46770[(1)] = (1));

return statearr_46770;
});
var cljs$core$async$transduce_$_state_machine__45738__auto____1 = (function (state_46767){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46767);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46771){if((e46771 instanceof Object)){
var ex__45741__auto__ = e46771;
var statearr_46772_49015 = state_46767;
(statearr_46772_49015[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49016 = state_46767;
state_46767 = G__49016;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45738__auto__ = function(state_46767){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45738__auto____1.call(this,state_46767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45738__auto____0;
cljs$core$async$transduce_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45738__auto____1;
return cljs$core$async$transduce_$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46773 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46773[(6)] = c__45961__auto__);

return statearr_46773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));

return c__45961__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46776 = arguments.length;
switch (G__46776) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46802){
var state_val_46803 = (state_46802[(1)]);
if((state_val_46803 === (7))){
var inst_46784 = (state_46802[(2)]);
var state_46802__$1 = state_46802;
var statearr_46804_49029 = state_46802__$1;
(statearr_46804_49029[(2)] = inst_46784);

(statearr_46804_49029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (1))){
var inst_46778 = cljs.core.seq(coll);
var inst_46779 = inst_46778;
var state_46802__$1 = (function (){var statearr_46806 = state_46802;
(statearr_46806[(7)] = inst_46779);

return statearr_46806;
})();
var statearr_46807_49041 = state_46802__$1;
(statearr_46807_49041[(2)] = null);

(statearr_46807_49041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (4))){
var inst_46779 = (state_46802[(7)]);
var inst_46782 = cljs.core.first(inst_46779);
var state_46802__$1 = state_46802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46802__$1,(7),ch,inst_46782);
} else {
if((state_val_46803 === (13))){
var inst_46796 = (state_46802[(2)]);
var state_46802__$1 = state_46802;
var statearr_46808_49047 = state_46802__$1;
(statearr_46808_49047[(2)] = inst_46796);

(statearr_46808_49047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (6))){
var inst_46787 = (state_46802[(2)]);
var state_46802__$1 = state_46802;
if(cljs.core.truth_(inst_46787)){
var statearr_46809_49048 = state_46802__$1;
(statearr_46809_49048[(1)] = (8));

} else {
var statearr_46810_49049 = state_46802__$1;
(statearr_46810_49049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (3))){
var inst_46800 = (state_46802[(2)]);
var state_46802__$1 = state_46802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46802__$1,inst_46800);
} else {
if((state_val_46803 === (12))){
var state_46802__$1 = state_46802;
var statearr_46811_49050 = state_46802__$1;
(statearr_46811_49050[(2)] = null);

(statearr_46811_49050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (2))){
var inst_46779 = (state_46802[(7)]);
var state_46802__$1 = state_46802;
if(cljs.core.truth_(inst_46779)){
var statearr_46812_49052 = state_46802__$1;
(statearr_46812_49052[(1)] = (4));

} else {
var statearr_46813_49053 = state_46802__$1;
(statearr_46813_49053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (11))){
var inst_46793 = cljs.core.async.close_BANG_(ch);
var state_46802__$1 = state_46802;
var statearr_46814_49055 = state_46802__$1;
(statearr_46814_49055[(2)] = inst_46793);

(statearr_46814_49055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (9))){
var state_46802__$1 = state_46802;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46817_49063 = state_46802__$1;
(statearr_46817_49063[(1)] = (11));

} else {
var statearr_46818_49064 = state_46802__$1;
(statearr_46818_49064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (5))){
var inst_46779 = (state_46802[(7)]);
var state_46802__$1 = state_46802;
var statearr_46820_49068 = state_46802__$1;
(statearr_46820_49068[(2)] = inst_46779);

(statearr_46820_49068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (10))){
var inst_46798 = (state_46802[(2)]);
var state_46802__$1 = state_46802;
var statearr_46821_49071 = state_46802__$1;
(statearr_46821_49071[(2)] = inst_46798);

(statearr_46821_49071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46803 === (8))){
var inst_46779 = (state_46802[(7)]);
var inst_46789 = cljs.core.next(inst_46779);
var inst_46779__$1 = inst_46789;
var state_46802__$1 = (function (){var statearr_46822 = state_46802;
(statearr_46822[(7)] = inst_46779__$1);

return statearr_46822;
})();
var statearr_46823_49078 = state_46802__$1;
(statearr_46823_49078[(2)] = null);

(statearr_46823_49078[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_46824 = [null,null,null,null,null,null,null,null];
(statearr_46824[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_46824[(1)] = (1));

return statearr_46824;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_46802){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46802);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e46825){if((e46825 instanceof Object)){
var ex__45741__auto__ = e46825;
var statearr_46826_49079 = state_46802;
(statearr_46826_49079[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49080 = state_46802;
state_46802 = G__49080;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_46802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_46802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_46827 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_46827[(6)] = c__45961__auto__);

return statearr_46827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));

return c__45961__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46832 = (function (ch,cs,meta46833){
this.ch = ch;
this.cs = cs;
this.meta46833 = meta46833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46834,meta46833__$1){
var self__ = this;
var _46834__$1 = this;
return (new cljs.core.async.t_cljs$core$async46832(self__.ch,self__.cs,meta46833__$1));
}));

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46834){
var self__ = this;
var _46834__$1 = this;
return self__.meta46833;
}));

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46832.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46833","meta46833",-1829149481,null)], null);
}));

(cljs.core.async.t_cljs$core$async46832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46832");

(cljs.core.async.t_cljs$core$async46832.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46832.
 */
cljs.core.async.__GT_t_cljs$core$async46832 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46832(ch__$1,cs__$1,meta46833){
return (new cljs.core.async.t_cljs$core$async46832(ch__$1,cs__$1,meta46833));
});

}

return (new cljs.core.async.t_cljs$core$async46832(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45961__auto___49110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_46973){
var state_val_46974 = (state_46973[(1)]);
if((state_val_46974 === (7))){
var inst_46969 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_46976_49111 = state_46973__$1;
(statearr_46976_49111[(2)] = inst_46969);

(statearr_46976_49111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (20))){
var inst_46871 = (state_46973[(7)]);
var inst_46883 = cljs.core.first(inst_46871);
var inst_46884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46883,(0),null);
var inst_46885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46883,(1),null);
var state_46973__$1 = (function (){var statearr_46977 = state_46973;
(statearr_46977[(8)] = inst_46884);

return statearr_46977;
})();
if(cljs.core.truth_(inst_46885)){
var statearr_46978_49112 = state_46973__$1;
(statearr_46978_49112[(1)] = (22));

} else {
var statearr_46979_49113 = state_46973__$1;
(statearr_46979_49113[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (27))){
var inst_46838 = (state_46973[(9)]);
var inst_46915 = (state_46973[(10)]);
var inst_46921 = (state_46973[(11)]);
var inst_46913 = (state_46973[(12)]);
var inst_46921__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46913,inst_46915);
var inst_46922 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46921__$1,inst_46838,done);
var state_46973__$1 = (function (){var statearr_46981 = state_46973;
(statearr_46981[(11)] = inst_46921__$1);

return statearr_46981;
})();
if(cljs.core.truth_(inst_46922)){
var statearr_46982_49116 = state_46973__$1;
(statearr_46982_49116[(1)] = (30));

} else {
var statearr_46983_49117 = state_46973__$1;
(statearr_46983_49117[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (1))){
var state_46973__$1 = state_46973;
var statearr_46984_49118 = state_46973__$1;
(statearr_46984_49118[(2)] = null);

(statearr_46984_49118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (24))){
var inst_46871 = (state_46973[(7)]);
var inst_46890 = (state_46973[(2)]);
var inst_46891 = cljs.core.next(inst_46871);
var inst_46849 = inst_46891;
var inst_46850 = null;
var inst_46851 = (0);
var inst_46852 = (0);
var state_46973__$1 = (function (){var statearr_46985 = state_46973;
(statearr_46985[(13)] = inst_46852);

(statearr_46985[(14)] = inst_46849);

(statearr_46985[(15)] = inst_46851);

(statearr_46985[(16)] = inst_46850);

(statearr_46985[(17)] = inst_46890);

return statearr_46985;
})();
var statearr_46986_49121 = state_46973__$1;
(statearr_46986_49121[(2)] = null);

(statearr_46986_49121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (39))){
var state_46973__$1 = state_46973;
var statearr_46991_49122 = state_46973__$1;
(statearr_46991_49122[(2)] = null);

(statearr_46991_49122[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (4))){
var inst_46838 = (state_46973[(9)]);
var inst_46838__$1 = (state_46973[(2)]);
var inst_46840 = (inst_46838__$1 == null);
var state_46973__$1 = (function (){var statearr_46992 = state_46973;
(statearr_46992[(9)] = inst_46838__$1);

return statearr_46992;
})();
if(cljs.core.truth_(inst_46840)){
var statearr_46993_49123 = state_46973__$1;
(statearr_46993_49123[(1)] = (5));

} else {
var statearr_46994_49125 = state_46973__$1;
(statearr_46994_49125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (15))){
var inst_46852 = (state_46973[(13)]);
var inst_46849 = (state_46973[(14)]);
var inst_46851 = (state_46973[(15)]);
var inst_46850 = (state_46973[(16)]);
var inst_46867 = (state_46973[(2)]);
var inst_46868 = (inst_46852 + (1));
var tmp46987 = inst_46849;
var tmp46988 = inst_46851;
var tmp46989 = inst_46850;
var inst_46849__$1 = tmp46987;
var inst_46850__$1 = tmp46989;
var inst_46851__$1 = tmp46988;
var inst_46852__$1 = inst_46868;
var state_46973__$1 = (function (){var statearr_46995 = state_46973;
(statearr_46995[(13)] = inst_46852__$1);

(statearr_46995[(14)] = inst_46849__$1);

(statearr_46995[(15)] = inst_46851__$1);

(statearr_46995[(18)] = inst_46867);

(statearr_46995[(16)] = inst_46850__$1);

return statearr_46995;
})();
var statearr_46996_49127 = state_46973__$1;
(statearr_46996_49127[(2)] = null);

(statearr_46996_49127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (21))){
var inst_46894 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47001_49131 = state_46973__$1;
(statearr_47001_49131[(2)] = inst_46894);

(statearr_47001_49131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (31))){
var inst_46921 = (state_46973[(11)]);
var inst_46925 = done(null);
var inst_46926 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46921);
var state_46973__$1 = (function (){var statearr_47002 = state_46973;
(statearr_47002[(19)] = inst_46925);

return statearr_47002;
})();
var statearr_47003_49133 = state_46973__$1;
(statearr_47003_49133[(2)] = inst_46926);

(statearr_47003_49133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (32))){
var inst_46912 = (state_46973[(20)]);
var inst_46914 = (state_46973[(21)]);
var inst_46915 = (state_46973[(10)]);
var inst_46913 = (state_46973[(12)]);
var inst_46928 = (state_46973[(2)]);
var inst_46929 = (inst_46915 + (1));
var tmp46997 = inst_46912;
var tmp46998 = inst_46914;
var tmp46999 = inst_46913;
var inst_46912__$1 = tmp46997;
var inst_46913__$1 = tmp46999;
var inst_46914__$1 = tmp46998;
var inst_46915__$1 = inst_46929;
var state_46973__$1 = (function (){var statearr_47004 = state_46973;
(statearr_47004[(22)] = inst_46928);

(statearr_47004[(20)] = inst_46912__$1);

(statearr_47004[(21)] = inst_46914__$1);

(statearr_47004[(10)] = inst_46915__$1);

(statearr_47004[(12)] = inst_46913__$1);

return statearr_47004;
})();
var statearr_47005_49140 = state_46973__$1;
(statearr_47005_49140[(2)] = null);

(statearr_47005_49140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (40))){
var inst_46941 = (state_46973[(23)]);
var inst_46945 = done(null);
var inst_46946 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46941);
var state_46973__$1 = (function (){var statearr_47006 = state_46973;
(statearr_47006[(24)] = inst_46945);

return statearr_47006;
})();
var statearr_47007_49143 = state_46973__$1;
(statearr_47007_49143[(2)] = inst_46946);

(statearr_47007_49143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (33))){
var inst_46932 = (state_46973[(25)]);
var inst_46934 = cljs.core.chunked_seq_QMARK_(inst_46932);
var state_46973__$1 = state_46973;
if(inst_46934){
var statearr_47009_49144 = state_46973__$1;
(statearr_47009_49144[(1)] = (36));

} else {
var statearr_47010_49145 = state_46973__$1;
(statearr_47010_49145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (13))){
var inst_46861 = (state_46973[(26)]);
var inst_46864 = cljs.core.async.close_BANG_(inst_46861);
var state_46973__$1 = state_46973;
var statearr_47011_49149 = state_46973__$1;
(statearr_47011_49149[(2)] = inst_46864);

(statearr_47011_49149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (22))){
var inst_46884 = (state_46973[(8)]);
var inst_46887 = cljs.core.async.close_BANG_(inst_46884);
var state_46973__$1 = state_46973;
var statearr_47012_49150 = state_46973__$1;
(statearr_47012_49150[(2)] = inst_46887);

(statearr_47012_49150[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (36))){
var inst_46932 = (state_46973[(25)]);
var inst_46936 = cljs.core.chunk_first(inst_46932);
var inst_46937 = cljs.core.chunk_rest(inst_46932);
var inst_46938 = cljs.core.count(inst_46936);
var inst_46912 = inst_46937;
var inst_46913 = inst_46936;
var inst_46914 = inst_46938;
var inst_46915 = (0);
var state_46973__$1 = (function (){var statearr_47013 = state_46973;
(statearr_47013[(20)] = inst_46912);

(statearr_47013[(21)] = inst_46914);

(statearr_47013[(10)] = inst_46915);

(statearr_47013[(12)] = inst_46913);

return statearr_47013;
})();
var statearr_47015_49152 = state_46973__$1;
(statearr_47015_49152[(2)] = null);

(statearr_47015_49152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (41))){
var inst_46932 = (state_46973[(25)]);
var inst_46948 = (state_46973[(2)]);
var inst_46949 = cljs.core.next(inst_46932);
var inst_46912 = inst_46949;
var inst_46913 = null;
var inst_46914 = (0);
var inst_46915 = (0);
var state_46973__$1 = (function (){var statearr_47016 = state_46973;
(statearr_47016[(20)] = inst_46912);

(statearr_47016[(21)] = inst_46914);

(statearr_47016[(27)] = inst_46948);

(statearr_47016[(10)] = inst_46915);

(statearr_47016[(12)] = inst_46913);

return statearr_47016;
})();
var statearr_47017_49156 = state_46973__$1;
(statearr_47017_49156[(2)] = null);

(statearr_47017_49156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (43))){
var state_46973__$1 = state_46973;
var statearr_47018_49158 = state_46973__$1;
(statearr_47018_49158[(2)] = null);

(statearr_47018_49158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (29))){
var inst_46957 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47019_49160 = state_46973__$1;
(statearr_47019_49160[(2)] = inst_46957);

(statearr_47019_49160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (44))){
var inst_46966 = (state_46973[(2)]);
var state_46973__$1 = (function (){var statearr_47020 = state_46973;
(statearr_47020[(28)] = inst_46966);

return statearr_47020;
})();
var statearr_47021_49163 = state_46973__$1;
(statearr_47021_49163[(2)] = null);

(statearr_47021_49163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (6))){
var inst_46904 = (state_46973[(29)]);
var inst_46903 = cljs.core.deref(cs);
var inst_46904__$1 = cljs.core.keys(inst_46903);
var inst_46905 = cljs.core.count(inst_46904__$1);
var inst_46906 = cljs.core.reset_BANG_(dctr,inst_46905);
var inst_46911 = cljs.core.seq(inst_46904__$1);
var inst_46912 = inst_46911;
var inst_46913 = null;
var inst_46914 = (0);
var inst_46915 = (0);
var state_46973__$1 = (function (){var statearr_47023 = state_46973;
(statearr_47023[(20)] = inst_46912);

(statearr_47023[(29)] = inst_46904__$1);

(statearr_47023[(30)] = inst_46906);

(statearr_47023[(21)] = inst_46914);

(statearr_47023[(10)] = inst_46915);

(statearr_47023[(12)] = inst_46913);

return statearr_47023;
})();
var statearr_47024_49168 = state_46973__$1;
(statearr_47024_49168[(2)] = null);

(statearr_47024_49168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (28))){
var inst_46912 = (state_46973[(20)]);
var inst_46932 = (state_46973[(25)]);
var inst_46932__$1 = cljs.core.seq(inst_46912);
var state_46973__$1 = (function (){var statearr_47025 = state_46973;
(statearr_47025[(25)] = inst_46932__$1);

return statearr_47025;
})();
if(inst_46932__$1){
var statearr_47026_49169 = state_46973__$1;
(statearr_47026_49169[(1)] = (33));

} else {
var statearr_47027_49171 = state_46973__$1;
(statearr_47027_49171[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (25))){
var inst_46914 = (state_46973[(21)]);
var inst_46915 = (state_46973[(10)]);
var inst_46918 = (inst_46915 < inst_46914);
var inst_46919 = inst_46918;
var state_46973__$1 = state_46973;
if(cljs.core.truth_(inst_46919)){
var statearr_47028_49176 = state_46973__$1;
(statearr_47028_49176[(1)] = (27));

} else {
var statearr_47029_49177 = state_46973__$1;
(statearr_47029_49177[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (34))){
var state_46973__$1 = state_46973;
var statearr_47031_49179 = state_46973__$1;
(statearr_47031_49179[(2)] = null);

(statearr_47031_49179[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (17))){
var state_46973__$1 = state_46973;
var statearr_47032_49184 = state_46973__$1;
(statearr_47032_49184[(2)] = null);

(statearr_47032_49184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (3))){
var inst_46971 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46973__$1,inst_46971);
} else {
if((state_val_46974 === (12))){
var inst_46899 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47033_49185 = state_46973__$1;
(statearr_47033_49185[(2)] = inst_46899);

(statearr_47033_49185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (2))){
var state_46973__$1 = state_46973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46973__$1,(4),ch);
} else {
if((state_val_46974 === (23))){
var state_46973__$1 = state_46973;
var statearr_47034_49186 = state_46973__$1;
(statearr_47034_49186[(2)] = null);

(statearr_47034_49186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (35))){
var inst_46955 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47035_49194 = state_46973__$1;
(statearr_47035_49194[(2)] = inst_46955);

(statearr_47035_49194[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (19))){
var inst_46871 = (state_46973[(7)]);
var inst_46875 = cljs.core.chunk_first(inst_46871);
var inst_46876 = cljs.core.chunk_rest(inst_46871);
var inst_46877 = cljs.core.count(inst_46875);
var inst_46849 = inst_46876;
var inst_46850 = inst_46875;
var inst_46851 = inst_46877;
var inst_46852 = (0);
var state_46973__$1 = (function (){var statearr_47037 = state_46973;
(statearr_47037[(13)] = inst_46852);

(statearr_47037[(14)] = inst_46849);

(statearr_47037[(15)] = inst_46851);

(statearr_47037[(16)] = inst_46850);

return statearr_47037;
})();
var statearr_47038_49198 = state_46973__$1;
(statearr_47038_49198[(2)] = null);

(statearr_47038_49198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (11))){
var inst_46849 = (state_46973[(14)]);
var inst_46871 = (state_46973[(7)]);
var inst_46871__$1 = cljs.core.seq(inst_46849);
var state_46973__$1 = (function (){var statearr_47039 = state_46973;
(statearr_47039[(7)] = inst_46871__$1);

return statearr_47039;
})();
if(inst_46871__$1){
var statearr_47040_49202 = state_46973__$1;
(statearr_47040_49202[(1)] = (16));

} else {
var statearr_47041_49206 = state_46973__$1;
(statearr_47041_49206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (9))){
var inst_46901 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47042_49207 = state_46973__$1;
(statearr_47042_49207[(2)] = inst_46901);

(statearr_47042_49207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (5))){
var inst_46847 = cljs.core.deref(cs);
var inst_46848 = cljs.core.seq(inst_46847);
var inst_46849 = inst_46848;
var inst_46850 = null;
var inst_46851 = (0);
var inst_46852 = (0);
var state_46973__$1 = (function (){var statearr_47043 = state_46973;
(statearr_47043[(13)] = inst_46852);

(statearr_47043[(14)] = inst_46849);

(statearr_47043[(15)] = inst_46851);

(statearr_47043[(16)] = inst_46850);

return statearr_47043;
})();
var statearr_47045_49214 = state_46973__$1;
(statearr_47045_49214[(2)] = null);

(statearr_47045_49214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (14))){
var state_46973__$1 = state_46973;
var statearr_47046_49215 = state_46973__$1;
(statearr_47046_49215[(2)] = null);

(statearr_47046_49215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (45))){
var inst_46963 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47047_49216 = state_46973__$1;
(statearr_47047_49216[(2)] = inst_46963);

(statearr_47047_49216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (26))){
var inst_46904 = (state_46973[(29)]);
var inst_46959 = (state_46973[(2)]);
var inst_46960 = cljs.core.seq(inst_46904);
var state_46973__$1 = (function (){var statearr_47048 = state_46973;
(statearr_47048[(31)] = inst_46959);

return statearr_47048;
})();
if(inst_46960){
var statearr_47049_49217 = state_46973__$1;
(statearr_47049_49217[(1)] = (42));

} else {
var statearr_47050_49218 = state_46973__$1;
(statearr_47050_49218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (16))){
var inst_46871 = (state_46973[(7)]);
var inst_46873 = cljs.core.chunked_seq_QMARK_(inst_46871);
var state_46973__$1 = state_46973;
if(inst_46873){
var statearr_47051_49221 = state_46973__$1;
(statearr_47051_49221[(1)] = (19));

} else {
var statearr_47052_49222 = state_46973__$1;
(statearr_47052_49222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (38))){
var inst_46952 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47054_49224 = state_46973__$1;
(statearr_47054_49224[(2)] = inst_46952);

(statearr_47054_49224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (30))){
var state_46973__$1 = state_46973;
var statearr_47055_49226 = state_46973__$1;
(statearr_47055_49226[(2)] = null);

(statearr_47055_49226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (10))){
var inst_46852 = (state_46973[(13)]);
var inst_46850 = (state_46973[(16)]);
var inst_46860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46850,inst_46852);
var inst_46861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46860,(0),null);
var inst_46862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46860,(1),null);
var state_46973__$1 = (function (){var statearr_47056 = state_46973;
(statearr_47056[(26)] = inst_46861);

return statearr_47056;
})();
if(cljs.core.truth_(inst_46862)){
var statearr_47057_49233 = state_46973__$1;
(statearr_47057_49233[(1)] = (13));

} else {
var statearr_47058_49237 = state_46973__$1;
(statearr_47058_49237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (18))){
var inst_46897 = (state_46973[(2)]);
var state_46973__$1 = state_46973;
var statearr_47059_49238 = state_46973__$1;
(statearr_47059_49238[(2)] = inst_46897);

(statearr_47059_49238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (42))){
var state_46973__$1 = state_46973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46973__$1,(45),dchan);
} else {
if((state_val_46974 === (37))){
var inst_46941 = (state_46973[(23)]);
var inst_46838 = (state_46973[(9)]);
var inst_46932 = (state_46973[(25)]);
var inst_46941__$1 = cljs.core.first(inst_46932);
var inst_46942 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46941__$1,inst_46838,done);
var state_46973__$1 = (function (){var statearr_47061 = state_46973;
(statearr_47061[(23)] = inst_46941__$1);

return statearr_47061;
})();
if(cljs.core.truth_(inst_46942)){
var statearr_47062_49242 = state_46973__$1;
(statearr_47062_49242[(1)] = (39));

} else {
var statearr_47063_49243 = state_46973__$1;
(statearr_47063_49243[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46974 === (8))){
var inst_46852 = (state_46973[(13)]);
var inst_46851 = (state_46973[(15)]);
var inst_46854 = (inst_46852 < inst_46851);
var inst_46855 = inst_46854;
var state_46973__$1 = state_46973;
if(cljs.core.truth_(inst_46855)){
var statearr_47064_49247 = state_46973__$1;
(statearr_47064_49247[(1)] = (10));

} else {
var statearr_47065_49248 = state_46973__$1;
(statearr_47065_49248[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45738__auto__ = null;
var cljs$core$async$mult_$_state_machine__45738__auto____0 = (function (){
var statearr_47066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47066[(0)] = cljs$core$async$mult_$_state_machine__45738__auto__);

(statearr_47066[(1)] = (1));

return statearr_47066;
});
var cljs$core$async$mult_$_state_machine__45738__auto____1 = (function (state_46973){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_46973);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e47068){if((e47068 instanceof Object)){
var ex__45741__auto__ = e47068;
var statearr_47069_49249 = state_46973;
(statearr_47069_49249[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49250 = state_46973;
state_46973 = G__49250;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45738__auto__ = function(state_46973){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45738__auto____1.call(this,state_46973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45738__auto____0;
cljs$core$async$mult_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45738__auto____1;
return cljs$core$async$mult_$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_47070 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_47070[(6)] = c__45961__auto___49110);

return statearr_47070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47072 = arguments.length;
switch (G__47072) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49270 = arguments.length;
var i__4790__auto___49271 = (0);
while(true){
if((i__4790__auto___49271 < len__4789__auto___49270)){
args__4795__auto__.push((arguments[i__4790__auto___49271]));

var G__49272 = (i__4790__auto___49271 + (1));
i__4790__auto___49271 = G__49272;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47084){
var map__47085 = p__47084;
var map__47085__$1 = (((((!((map__47085 == null))))?(((((map__47085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47085):map__47085);
var opts = map__47085__$1;
var statearr_47090_49274 = state;
(statearr_47090_49274[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47091_49275 = state;
(statearr_47091_49275[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47092_49276 = state;
(statearr_47092_49276[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47080){
var G__47081 = cljs.core.first(seq47080);
var seq47080__$1 = cljs.core.next(seq47080);
var G__47082 = cljs.core.first(seq47080__$1);
var seq47080__$2 = cljs.core.next(seq47080__$1);
var G__47083 = cljs.core.first(seq47080__$2);
var seq47080__$3 = cljs.core.next(seq47080__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47081,G__47082,G__47083,seq47080__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47100 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47101){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47101 = meta47101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47102,meta47101__$1){
var self__ = this;
var _47102__$1 = this;
return (new cljs.core.async.t_cljs$core$async47100(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47101__$1));
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47102){
var self__ = this;
var _47102__$1 = this;
return self__.meta47101;
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47100.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47101","meta47101",693287779,null)], null);
}));

(cljs.core.async.t_cljs$core$async47100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47100");

(cljs.core.async.t_cljs$core$async47100.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47100.
 */
cljs.core.async.__GT_t_cljs$core$async47100 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47100(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47101){
return (new cljs.core.async.t_cljs$core$async47100(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47101));
});

}

return (new cljs.core.async.t_cljs$core$async47100(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45961__auto___49307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_47229){
var state_val_47230 = (state_47229[(1)]);
if((state_val_47230 === (7))){
var inst_47135 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
var statearr_47235_49308 = state_47229__$1;
(statearr_47235_49308[(2)] = inst_47135);

(statearr_47235_49308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (20))){
var inst_47148 = (state_47229[(7)]);
var state_47229__$1 = state_47229;
var statearr_47239_49309 = state_47229__$1;
(statearr_47239_49309[(2)] = inst_47148);

(statearr_47239_49309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (27))){
var state_47229__$1 = state_47229;
var statearr_47243_49314 = state_47229__$1;
(statearr_47243_49314[(2)] = null);

(statearr_47243_49314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (1))){
var inst_47122 = (state_47229[(8)]);
var inst_47122__$1 = calc_state();
var inst_47124 = (inst_47122__$1 == null);
var inst_47125 = cljs.core.not(inst_47124);
var state_47229__$1 = (function (){var statearr_47246 = state_47229;
(statearr_47246[(8)] = inst_47122__$1);

return statearr_47246;
})();
if(inst_47125){
var statearr_47247_49319 = state_47229__$1;
(statearr_47247_49319[(1)] = (2));

} else {
var statearr_47248_49320 = state_47229__$1;
(statearr_47248_49320[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (24))){
var inst_47200 = (state_47229[(9)]);
var inst_47185 = (state_47229[(10)]);
var inst_47176 = (state_47229[(11)]);
var inst_47200__$1 = (inst_47176.cljs$core$IFn$_invoke$arity$1 ? inst_47176.cljs$core$IFn$_invoke$arity$1(inst_47185) : inst_47176.call(null,inst_47185));
var state_47229__$1 = (function (){var statearr_47253 = state_47229;
(statearr_47253[(9)] = inst_47200__$1);

return statearr_47253;
})();
if(cljs.core.truth_(inst_47200__$1)){
var statearr_47254_49325 = state_47229__$1;
(statearr_47254_49325[(1)] = (29));

} else {
var statearr_47255_49326 = state_47229__$1;
(statearr_47255_49326[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (4))){
var inst_47138 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47138)){
var statearr_47258_49327 = state_47229__$1;
(statearr_47258_49327[(1)] = (8));

} else {
var statearr_47260_49328 = state_47229__$1;
(statearr_47260_49328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (15))){
var inst_47169 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47169)){
var statearr_47262_49329 = state_47229__$1;
(statearr_47262_49329[(1)] = (19));

} else {
var statearr_47263_49330 = state_47229__$1;
(statearr_47263_49330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (21))){
var inst_47174 = (state_47229[(12)]);
var inst_47174__$1 = (state_47229[(2)]);
var inst_47176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47174__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47174__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47174__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47229__$1 = (function (){var statearr_47267 = state_47229;
(statearr_47267[(11)] = inst_47176);

(statearr_47267[(12)] = inst_47174__$1);

(statearr_47267[(13)] = inst_47177);

return statearr_47267;
})();
return cljs.core.async.ioc_alts_BANG_(state_47229__$1,(22),inst_47178);
} else {
if((state_val_47230 === (31))){
var inst_47208 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47208)){
var statearr_47269_49334 = state_47229__$1;
(statearr_47269_49334[(1)] = (32));

} else {
var statearr_47270_49335 = state_47229__$1;
(statearr_47270_49335[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (32))){
var inst_47184 = (state_47229[(14)]);
var state_47229__$1 = state_47229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47229__$1,(35),out,inst_47184);
} else {
if((state_val_47230 === (33))){
var inst_47174 = (state_47229[(12)]);
var inst_47148 = inst_47174;
var state_47229__$1 = (function (){var statearr_47274 = state_47229;
(statearr_47274[(7)] = inst_47148);

return statearr_47274;
})();
var statearr_47276_49336 = state_47229__$1;
(statearr_47276_49336[(2)] = null);

(statearr_47276_49336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (13))){
var inst_47148 = (state_47229[(7)]);
var inst_47157 = inst_47148.cljs$lang$protocol_mask$partition0$;
var inst_47158 = (inst_47157 & (64));
var inst_47160 = inst_47148.cljs$core$ISeq$;
var inst_47161 = (cljs.core.PROTOCOL_SENTINEL === inst_47160);
var inst_47162 = ((inst_47158) || (inst_47161));
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47162)){
var statearr_47285_49337 = state_47229__$1;
(statearr_47285_49337[(1)] = (16));

} else {
var statearr_47287_49338 = state_47229__$1;
(statearr_47287_49338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (22))){
var inst_47185 = (state_47229[(10)]);
var inst_47184 = (state_47229[(14)]);
var inst_47183 = (state_47229[(2)]);
var inst_47184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47183,(0),null);
var inst_47185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47183,(1),null);
var inst_47186 = (inst_47184__$1 == null);
var inst_47187 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47185__$1,change);
var inst_47188 = ((inst_47186) || (inst_47187));
var state_47229__$1 = (function (){var statearr_47295 = state_47229;
(statearr_47295[(10)] = inst_47185__$1);

(statearr_47295[(14)] = inst_47184__$1);

return statearr_47295;
})();
if(cljs.core.truth_(inst_47188)){
var statearr_47298_49347 = state_47229__$1;
(statearr_47298_49347[(1)] = (23));

} else {
var statearr_47299_49349 = state_47229__$1;
(statearr_47299_49349[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (36))){
var inst_47174 = (state_47229[(12)]);
var inst_47148 = inst_47174;
var state_47229__$1 = (function (){var statearr_47301 = state_47229;
(statearr_47301[(7)] = inst_47148);

return statearr_47301;
})();
var statearr_47306_49351 = state_47229__$1;
(statearr_47306_49351[(2)] = null);

(statearr_47306_49351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (29))){
var inst_47200 = (state_47229[(9)]);
var state_47229__$1 = state_47229;
var statearr_47312_49352 = state_47229__$1;
(statearr_47312_49352[(2)] = inst_47200);

(statearr_47312_49352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (6))){
var state_47229__$1 = state_47229;
var statearr_47319_49353 = state_47229__$1;
(statearr_47319_49353[(2)] = false);

(statearr_47319_49353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (28))){
var inst_47195 = (state_47229[(2)]);
var inst_47197 = calc_state();
var inst_47148 = inst_47197;
var state_47229__$1 = (function (){var statearr_47326 = state_47229;
(statearr_47326[(15)] = inst_47195);

(statearr_47326[(7)] = inst_47148);

return statearr_47326;
})();
var statearr_47327_49359 = state_47229__$1;
(statearr_47327_49359[(2)] = null);

(statearr_47327_49359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (25))){
var inst_47224 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
var statearr_47330_49360 = state_47229__$1;
(statearr_47330_49360[(2)] = inst_47224);

(statearr_47330_49360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (34))){
var inst_47221 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
var statearr_47332_49362 = state_47229__$1;
(statearr_47332_49362[(2)] = inst_47221);

(statearr_47332_49362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (17))){
var state_47229__$1 = state_47229;
var statearr_47335_49364 = state_47229__$1;
(statearr_47335_49364[(2)] = false);

(statearr_47335_49364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (3))){
var state_47229__$1 = state_47229;
var statearr_47337_49365 = state_47229__$1;
(statearr_47337_49365[(2)] = false);

(statearr_47337_49365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (12))){
var inst_47226 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47229__$1,inst_47226);
} else {
if((state_val_47230 === (2))){
var inst_47122 = (state_47229[(8)]);
var inst_47127 = inst_47122.cljs$lang$protocol_mask$partition0$;
var inst_47128 = (inst_47127 & (64));
var inst_47129 = inst_47122.cljs$core$ISeq$;
var inst_47130 = (cljs.core.PROTOCOL_SENTINEL === inst_47129);
var inst_47131 = ((inst_47128) || (inst_47130));
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47131)){
var statearr_47339_49367 = state_47229__$1;
(statearr_47339_49367[(1)] = (5));

} else {
var statearr_47340_49368 = state_47229__$1;
(statearr_47340_49368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (23))){
var inst_47184 = (state_47229[(14)]);
var inst_47190 = (inst_47184 == null);
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47190)){
var statearr_47344_49373 = state_47229__$1;
(statearr_47344_49373[(1)] = (26));

} else {
var statearr_47345_49374 = state_47229__$1;
(statearr_47345_49374[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (35))){
var inst_47211 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
if(cljs.core.truth_(inst_47211)){
var statearr_47346_49380 = state_47229__$1;
(statearr_47346_49380[(1)] = (36));

} else {
var statearr_47347_49381 = state_47229__$1;
(statearr_47347_49381[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (19))){
var inst_47148 = (state_47229[(7)]);
var inst_47171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47148);
var state_47229__$1 = state_47229;
var statearr_47351_49382 = state_47229__$1;
(statearr_47351_49382[(2)] = inst_47171);

(statearr_47351_49382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (11))){
var inst_47148 = (state_47229[(7)]);
var inst_47153 = (inst_47148 == null);
var inst_47154 = cljs.core.not(inst_47153);
var state_47229__$1 = state_47229;
if(inst_47154){
var statearr_47355_49388 = state_47229__$1;
(statearr_47355_49388[(1)] = (13));

} else {
var statearr_47356_49389 = state_47229__$1;
(statearr_47356_49389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (9))){
var inst_47122 = (state_47229[(8)]);
var state_47229__$1 = state_47229;
var statearr_47358_49391 = state_47229__$1;
(statearr_47358_49391[(2)] = inst_47122);

(statearr_47358_49391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (5))){
var state_47229__$1 = state_47229;
var statearr_47359_49400 = state_47229__$1;
(statearr_47359_49400[(2)] = true);

(statearr_47359_49400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (14))){
var state_47229__$1 = state_47229;
var statearr_47361_49406 = state_47229__$1;
(statearr_47361_49406[(2)] = false);

(statearr_47361_49406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (26))){
var inst_47185 = (state_47229[(10)]);
var inst_47192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47185);
var state_47229__$1 = state_47229;
var statearr_47362_49408 = state_47229__$1;
(statearr_47362_49408[(2)] = inst_47192);

(statearr_47362_49408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (16))){
var state_47229__$1 = state_47229;
var statearr_47365_49410 = state_47229__$1;
(statearr_47365_49410[(2)] = true);

(statearr_47365_49410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (38))){
var inst_47217 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
var statearr_47367_49416 = state_47229__$1;
(statearr_47367_49416[(2)] = inst_47217);

(statearr_47367_49416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (30))){
var inst_47185 = (state_47229[(10)]);
var inst_47176 = (state_47229[(11)]);
var inst_47177 = (state_47229[(13)]);
var inst_47203 = cljs.core.empty_QMARK_(inst_47176);
var inst_47204 = (inst_47177.cljs$core$IFn$_invoke$arity$1 ? inst_47177.cljs$core$IFn$_invoke$arity$1(inst_47185) : inst_47177.call(null,inst_47185));
var inst_47205 = cljs.core.not(inst_47204);
var inst_47206 = ((inst_47203) && (inst_47205));
var state_47229__$1 = state_47229;
var statearr_47370_49417 = state_47229__$1;
(statearr_47370_49417[(2)] = inst_47206);

(statearr_47370_49417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (10))){
var inst_47122 = (state_47229[(8)]);
var inst_47143 = (state_47229[(2)]);
var inst_47144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47143,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47143,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47143,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47148 = inst_47122;
var state_47229__$1 = (function (){var statearr_47376 = state_47229;
(statearr_47376[(16)] = inst_47145);

(statearr_47376[(17)] = inst_47146);

(statearr_47376[(18)] = inst_47144);

(statearr_47376[(7)] = inst_47148);

return statearr_47376;
})();
var statearr_47378_49424 = state_47229__$1;
(statearr_47378_49424[(2)] = null);

(statearr_47378_49424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (18))){
var inst_47166 = (state_47229[(2)]);
var state_47229__$1 = state_47229;
var statearr_47379_49428 = state_47229__$1;
(statearr_47379_49428[(2)] = inst_47166);

(statearr_47379_49428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (37))){
var state_47229__$1 = state_47229;
var statearr_47381_49430 = state_47229__$1;
(statearr_47381_49430[(2)] = null);

(statearr_47381_49430[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47230 === (8))){
var inst_47122 = (state_47229[(8)]);
var inst_47140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47122);
var state_47229__$1 = state_47229;
var statearr_47382_49433 = state_47229__$1;
(statearr_47382_49433[(2)] = inst_47140);

(statearr_47382_49433[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45738__auto__ = null;
var cljs$core$async$mix_$_state_machine__45738__auto____0 = (function (){
var statearr_47388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47388[(0)] = cljs$core$async$mix_$_state_machine__45738__auto__);

(statearr_47388[(1)] = (1));

return statearr_47388;
});
var cljs$core$async$mix_$_state_machine__45738__auto____1 = (function (state_47229){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_47229);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e47389){if((e47389 instanceof Object)){
var ex__45741__auto__ = e47389;
var statearr_47391_49435 = state_47229;
(statearr_47391_49435[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49436 = state_47229;
state_47229 = G__49436;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45738__auto__ = function(state_47229){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45738__auto____1.call(this,state_47229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45738__auto____0;
cljs$core$async$mix_$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45738__auto____1;
return cljs$core$async$mix_$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_47393 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_47393[(6)] = c__45961__auto___49307);

return statearr_47393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47412 = arguments.length;
switch (G__47412) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47436 = arguments.length;
switch (G__47436) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47429_SHARP_){
if(cljs.core.truth_((p1__47429_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47429_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47429_SHARP_.call(null,topic)))){
return p1__47429_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47429_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47450 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47451){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47451 = meta47451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47452,meta47451__$1){
var self__ = this;
var _47452__$1 = this;
return (new cljs.core.async.t_cljs$core$async47450(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47451__$1));
}));

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47452){
var self__ = this;
var _47452__$1 = this;
return self__.meta47451;
}));

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47450.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47451","meta47451",-176576771,null)], null);
}));

(cljs.core.async.t_cljs$core$async47450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47450");

(cljs.core.async.t_cljs$core$async47450.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47450.
 */
cljs.core.async.__GT_t_cljs$core$async47450 = (function cljs$core$async$__GT_t_cljs$core$async47450(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47451){
return (new cljs.core.async.t_cljs$core$async47450(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47451));
});

}

return (new cljs.core.async.t_cljs$core$async47450(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45961__auto___49555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_47573){
var state_val_47574 = (state_47573[(1)]);
if((state_val_47574 === (7))){
var inst_47569 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47583_49568 = state_47573__$1;
(statearr_47583_49568[(2)] = inst_47569);

(statearr_47583_49568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (20))){
var state_47573__$1 = state_47573;
var statearr_47584_49570 = state_47573__$1;
(statearr_47584_49570[(2)] = null);

(statearr_47584_49570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (1))){
var state_47573__$1 = state_47573;
var statearr_47587_49572 = state_47573__$1;
(statearr_47587_49572[(2)] = null);

(statearr_47587_49572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (24))){
var inst_47548 = (state_47573[(7)]);
var inst_47561 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47548);
var state_47573__$1 = state_47573;
var statearr_47589_49574 = state_47573__$1;
(statearr_47589_49574[(2)] = inst_47561);

(statearr_47589_49574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (4))){
var inst_47490 = (state_47573[(8)]);
var inst_47490__$1 = (state_47573[(2)]);
var inst_47492 = (inst_47490__$1 == null);
var state_47573__$1 = (function (){var statearr_47592 = state_47573;
(statearr_47592[(8)] = inst_47490__$1);

return statearr_47592;
})();
if(cljs.core.truth_(inst_47492)){
var statearr_47594_49582 = state_47573__$1;
(statearr_47594_49582[(1)] = (5));

} else {
var statearr_47595_49583 = state_47573__$1;
(statearr_47595_49583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (15))){
var inst_47541 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47603_49584 = state_47573__$1;
(statearr_47603_49584[(2)] = inst_47541);

(statearr_47603_49584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (21))){
var inst_47566 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47606 = state_47573;
(statearr_47606[(9)] = inst_47566);

return statearr_47606;
})();
var statearr_47607_49592 = state_47573__$1;
(statearr_47607_49592[(2)] = null);

(statearr_47607_49592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (13))){
var inst_47520 = (state_47573[(10)]);
var inst_47523 = cljs.core.chunked_seq_QMARK_(inst_47520);
var state_47573__$1 = state_47573;
if(inst_47523){
var statearr_47610_49605 = state_47573__$1;
(statearr_47610_49605[(1)] = (16));

} else {
var statearr_47612_49612 = state_47573__$1;
(statearr_47612_49612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (22))){
var inst_47557 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
if(cljs.core.truth_(inst_47557)){
var statearr_47617_49615 = state_47573__$1;
(statearr_47617_49615[(1)] = (23));

} else {
var statearr_47618_49617 = state_47573__$1;
(statearr_47618_49617[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (6))){
var inst_47548 = (state_47573[(7)]);
var inst_47490 = (state_47573[(8)]);
var inst_47553 = (state_47573[(11)]);
var inst_47548__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47490) : topic_fn.call(null,inst_47490));
var inst_47552 = cljs.core.deref(mults);
var inst_47553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47552,inst_47548__$1);
var state_47573__$1 = (function (){var statearr_47624 = state_47573;
(statearr_47624[(7)] = inst_47548__$1);

(statearr_47624[(11)] = inst_47553__$1);

return statearr_47624;
})();
if(cljs.core.truth_(inst_47553__$1)){
var statearr_47625_49627 = state_47573__$1;
(statearr_47625_49627[(1)] = (19));

} else {
var statearr_47628_49628 = state_47573__$1;
(statearr_47628_49628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (25))){
var inst_47563 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47630_49630 = state_47573__$1;
(statearr_47630_49630[(2)] = inst_47563);

(statearr_47630_49630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (17))){
var inst_47520 = (state_47573[(10)]);
var inst_47530 = cljs.core.first(inst_47520);
var inst_47532 = cljs.core.async.muxch_STAR_(inst_47530);
var inst_47533 = cljs.core.async.close_BANG_(inst_47532);
var inst_47535 = cljs.core.next(inst_47520);
var inst_47502 = inst_47535;
var inst_47503 = null;
var inst_47504 = (0);
var inst_47505 = (0);
var state_47573__$1 = (function (){var statearr_47635 = state_47573;
(statearr_47635[(12)] = inst_47533);

(statearr_47635[(13)] = inst_47502);

(statearr_47635[(14)] = inst_47504);

(statearr_47635[(15)] = inst_47505);

(statearr_47635[(16)] = inst_47503);

return statearr_47635;
})();
var statearr_47637_49649 = state_47573__$1;
(statearr_47637_49649[(2)] = null);

(statearr_47637_49649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (3))){
var inst_47571 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47573__$1,inst_47571);
} else {
if((state_val_47574 === (12))){
var inst_47543 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47642_49655 = state_47573__$1;
(statearr_47642_49655[(2)] = inst_47543);

(statearr_47642_49655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (2))){
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47573__$1,(4),ch);
} else {
if((state_val_47574 === (23))){
var state_47573__$1 = state_47573;
var statearr_47644_49667 = state_47573__$1;
(statearr_47644_49667[(2)] = null);

(statearr_47644_49667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (19))){
var inst_47490 = (state_47573[(8)]);
var inst_47553 = (state_47573[(11)]);
var inst_47555 = cljs.core.async.muxch_STAR_(inst_47553);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47573__$1,(22),inst_47555,inst_47490);
} else {
if((state_val_47574 === (11))){
var inst_47520 = (state_47573[(10)]);
var inst_47502 = (state_47573[(13)]);
var inst_47520__$1 = cljs.core.seq(inst_47502);
var state_47573__$1 = (function (){var statearr_47647 = state_47573;
(statearr_47647[(10)] = inst_47520__$1);

return statearr_47647;
})();
if(inst_47520__$1){
var statearr_47653_49676 = state_47573__$1;
(statearr_47653_49676[(1)] = (13));

} else {
var statearr_47655_49677 = state_47573__$1;
(statearr_47655_49677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (9))){
var inst_47545 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47660_49678 = state_47573__$1;
(statearr_47660_49678[(2)] = inst_47545);

(statearr_47660_49678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (5))){
var inst_47499 = cljs.core.deref(mults);
var inst_47500 = cljs.core.vals(inst_47499);
var inst_47501 = cljs.core.seq(inst_47500);
var inst_47502 = inst_47501;
var inst_47503 = null;
var inst_47504 = (0);
var inst_47505 = (0);
var state_47573__$1 = (function (){var statearr_47662 = state_47573;
(statearr_47662[(13)] = inst_47502);

(statearr_47662[(14)] = inst_47504);

(statearr_47662[(15)] = inst_47505);

(statearr_47662[(16)] = inst_47503);

return statearr_47662;
})();
var statearr_47663_49691 = state_47573__$1;
(statearr_47663_49691[(2)] = null);

(statearr_47663_49691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (14))){
var state_47573__$1 = state_47573;
var statearr_47674_49692 = state_47573__$1;
(statearr_47674_49692[(2)] = null);

(statearr_47674_49692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (16))){
var inst_47520 = (state_47573[(10)]);
var inst_47525 = cljs.core.chunk_first(inst_47520);
var inst_47526 = cljs.core.chunk_rest(inst_47520);
var inst_47527 = cljs.core.count(inst_47525);
var inst_47502 = inst_47526;
var inst_47503 = inst_47525;
var inst_47504 = inst_47527;
var inst_47505 = (0);
var state_47573__$1 = (function (){var statearr_47678 = state_47573;
(statearr_47678[(13)] = inst_47502);

(statearr_47678[(14)] = inst_47504);

(statearr_47678[(15)] = inst_47505);

(statearr_47678[(16)] = inst_47503);

return statearr_47678;
})();
var statearr_47681_49693 = state_47573__$1;
(statearr_47681_49693[(2)] = null);

(statearr_47681_49693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (10))){
var inst_47502 = (state_47573[(13)]);
var inst_47504 = (state_47573[(14)]);
var inst_47505 = (state_47573[(15)]);
var inst_47503 = (state_47573[(16)]);
var inst_47510 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47503,inst_47505);
var inst_47511 = cljs.core.async.muxch_STAR_(inst_47510);
var inst_47512 = cljs.core.async.close_BANG_(inst_47511);
var inst_47513 = (inst_47505 + (1));
var tmp47669 = inst_47502;
var tmp47670 = inst_47504;
var tmp47671 = inst_47503;
var inst_47502__$1 = tmp47669;
var inst_47503__$1 = tmp47671;
var inst_47504__$1 = tmp47670;
var inst_47505__$1 = inst_47513;
var state_47573__$1 = (function (){var statearr_47688 = state_47573;
(statearr_47688[(17)] = inst_47512);

(statearr_47688[(13)] = inst_47502__$1);

(statearr_47688[(14)] = inst_47504__$1);

(statearr_47688[(15)] = inst_47505__$1);

(statearr_47688[(16)] = inst_47503__$1);

return statearr_47688;
})();
var statearr_47690_49711 = state_47573__$1;
(statearr_47690_49711[(2)] = null);

(statearr_47690_49711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (18))){
var inst_47538 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47692_49720 = state_47573__$1;
(statearr_47692_49720[(2)] = inst_47538);

(statearr_47692_49720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (8))){
var inst_47504 = (state_47573[(14)]);
var inst_47505 = (state_47573[(15)]);
var inst_47507 = (inst_47505 < inst_47504);
var inst_47508 = inst_47507;
var state_47573__$1 = state_47573;
if(cljs.core.truth_(inst_47508)){
var statearr_47693_49723 = state_47573__$1;
(statearr_47693_49723[(1)] = (10));

} else {
var statearr_47695_49724 = state_47573__$1;
(statearr_47695_49724[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_47698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47698[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_47698[(1)] = (1));

return statearr_47698;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_47573){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_47573);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e47700){if((e47700 instanceof Object)){
var ex__45741__auto__ = e47700;
var statearr_47701_49729 = state_47573;
(statearr_47701_49729[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49736 = state_47573;
state_47573 = G__49736;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_47573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_47573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_47708 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_47708[(6)] = c__45961__auto___49555);

return statearr_47708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47714 = arguments.length;
switch (G__47714) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47717 = arguments.length;
switch (G__47717) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47721 = arguments.length;
switch (G__47721) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45961__auto___49777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_47760){
var state_val_47761 = (state_47760[(1)]);
if((state_val_47761 === (7))){
var state_47760__$1 = state_47760;
var statearr_47762_49786 = state_47760__$1;
(statearr_47762_49786[(2)] = null);

(statearr_47762_49786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (1))){
var state_47760__$1 = state_47760;
var statearr_47763_49799 = state_47760__$1;
(statearr_47763_49799[(2)] = null);

(statearr_47763_49799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (4))){
var inst_47724 = (state_47760[(7)]);
var inst_47726 = (inst_47724 < cnt);
var state_47760__$1 = state_47760;
if(cljs.core.truth_(inst_47726)){
var statearr_47764_49800 = state_47760__$1;
(statearr_47764_49800[(1)] = (6));

} else {
var statearr_47765_49801 = state_47760__$1;
(statearr_47765_49801[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (15))){
var inst_47756 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
var statearr_47766_49803 = state_47760__$1;
(statearr_47766_49803[(2)] = inst_47756);

(statearr_47766_49803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (13))){
var inst_47749 = cljs.core.async.close_BANG_(out);
var state_47760__$1 = state_47760;
var statearr_47767_49804 = state_47760__$1;
(statearr_47767_49804[(2)] = inst_47749);

(statearr_47767_49804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (6))){
var state_47760__$1 = state_47760;
var statearr_47768_49809 = state_47760__$1;
(statearr_47768_49809[(2)] = null);

(statearr_47768_49809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (3))){
var inst_47758 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47760__$1,inst_47758);
} else {
if((state_val_47761 === (12))){
var inst_47746 = (state_47760[(8)]);
var inst_47746__$1 = (state_47760[(2)]);
var inst_47747 = cljs.core.some(cljs.core.nil_QMARK_,inst_47746__$1);
var state_47760__$1 = (function (){var statearr_47770 = state_47760;
(statearr_47770[(8)] = inst_47746__$1);

return statearr_47770;
})();
if(cljs.core.truth_(inst_47747)){
var statearr_47772_49812 = state_47760__$1;
(statearr_47772_49812[(1)] = (13));

} else {
var statearr_47773_49813 = state_47760__$1;
(statearr_47773_49813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (2))){
var inst_47723 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47724 = (0);
var state_47760__$1 = (function (){var statearr_47774 = state_47760;
(statearr_47774[(7)] = inst_47724);

(statearr_47774[(9)] = inst_47723);

return statearr_47774;
})();
var statearr_47775_49814 = state_47760__$1;
(statearr_47775_49814[(2)] = null);

(statearr_47775_49814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (11))){
var inst_47724 = (state_47760[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47760,(10),Object,null,(9));
var inst_47733 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47724) : chs__$1.call(null,inst_47724));
var inst_47734 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47724) : done.call(null,inst_47724));
var inst_47735 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47733,inst_47734);
var state_47760__$1 = state_47760;
var statearr_47776_49819 = state_47760__$1;
(statearr_47776_49819[(2)] = inst_47735);


cljs.core.async.impl.ioc_helpers.process_exception(state_47760__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (9))){
var inst_47724 = (state_47760[(7)]);
var inst_47737 = (state_47760[(2)]);
var inst_47738 = (inst_47724 + (1));
var inst_47724__$1 = inst_47738;
var state_47760__$1 = (function (){var statearr_47777 = state_47760;
(statearr_47777[(7)] = inst_47724__$1);

(statearr_47777[(10)] = inst_47737);

return statearr_47777;
})();
var statearr_47778_49820 = state_47760__$1;
(statearr_47778_49820[(2)] = null);

(statearr_47778_49820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (5))){
var inst_47744 = (state_47760[(2)]);
var state_47760__$1 = (function (){var statearr_47780 = state_47760;
(statearr_47780[(11)] = inst_47744);

return statearr_47780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47760__$1,(12),dchan);
} else {
if((state_val_47761 === (14))){
var inst_47746 = (state_47760[(8)]);
var inst_47751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47746);
var state_47760__$1 = state_47760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47760__$1,(16),out,inst_47751);
} else {
if((state_val_47761 === (16))){
var inst_47753 = (state_47760[(2)]);
var state_47760__$1 = (function (){var statearr_47782 = state_47760;
(statearr_47782[(12)] = inst_47753);

return statearr_47782;
})();
var statearr_47783_49825 = state_47760__$1;
(statearr_47783_49825[(2)] = null);

(statearr_47783_49825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (10))){
var inst_47728 = (state_47760[(2)]);
var inst_47729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47760__$1 = (function (){var statearr_47784 = state_47760;
(statearr_47784[(13)] = inst_47728);

return statearr_47784;
})();
var statearr_47785_49826 = state_47760__$1;
(statearr_47785_49826[(2)] = inst_47729);


cljs.core.async.impl.ioc_helpers.process_exception(state_47760__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (8))){
var inst_47742 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
var statearr_47786_49828 = state_47760__$1;
(statearr_47786_49828[(2)] = inst_47742);

(statearr_47786_49828[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_47787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47787[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_47787[(1)] = (1));

return statearr_47787;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_47760){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_47760);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e47790){if((e47790 instanceof Object)){
var ex__45741__auto__ = e47790;
var statearr_47791_49829 = state_47760;
(statearr_47791_49829[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49831 = state_47760;
state_47760 = G__49831;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_47760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_47760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_47792 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_47792[(6)] = c__45961__auto___49777);

return statearr_47792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47795 = arguments.length;
switch (G__47795) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45961__auto___49837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_47827){
var state_val_47828 = (state_47827[(1)]);
if((state_val_47828 === (7))){
var inst_47806 = (state_47827[(7)]);
var inst_47807 = (state_47827[(8)]);
var inst_47806__$1 = (state_47827[(2)]);
var inst_47807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47806__$1,(0),null);
var inst_47808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47806__$1,(1),null);
var inst_47809 = (inst_47807__$1 == null);
var state_47827__$1 = (function (){var statearr_47831 = state_47827;
(statearr_47831[(7)] = inst_47806__$1);

(statearr_47831[(9)] = inst_47808);

(statearr_47831[(8)] = inst_47807__$1);

return statearr_47831;
})();
if(cljs.core.truth_(inst_47809)){
var statearr_47832_49841 = state_47827__$1;
(statearr_47832_49841[(1)] = (8));

} else {
var statearr_47833_49842 = state_47827__$1;
(statearr_47833_49842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (1))){
var inst_47796 = cljs.core.vec(chs);
var inst_47797 = inst_47796;
var state_47827__$1 = (function (){var statearr_47834 = state_47827;
(statearr_47834[(10)] = inst_47797);

return statearr_47834;
})();
var statearr_47835_49843 = state_47827__$1;
(statearr_47835_49843[(2)] = null);

(statearr_47835_49843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (4))){
var inst_47797 = (state_47827[(10)]);
var state_47827__$1 = state_47827;
return cljs.core.async.ioc_alts_BANG_(state_47827__$1,(7),inst_47797);
} else {
if((state_val_47828 === (6))){
var inst_47823 = (state_47827[(2)]);
var state_47827__$1 = state_47827;
var statearr_47840_49844 = state_47827__$1;
(statearr_47840_49844[(2)] = inst_47823);

(statearr_47840_49844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (3))){
var inst_47825 = (state_47827[(2)]);
var state_47827__$1 = state_47827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47827__$1,inst_47825);
} else {
if((state_val_47828 === (2))){
var inst_47797 = (state_47827[(10)]);
var inst_47799 = cljs.core.count(inst_47797);
var inst_47800 = (inst_47799 > (0));
var state_47827__$1 = state_47827;
if(cljs.core.truth_(inst_47800)){
var statearr_47842_49846 = state_47827__$1;
(statearr_47842_49846[(1)] = (4));

} else {
var statearr_47844_49847 = state_47827__$1;
(statearr_47844_49847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (11))){
var inst_47797 = (state_47827[(10)]);
var inst_47816 = (state_47827[(2)]);
var tmp47841 = inst_47797;
var inst_47797__$1 = tmp47841;
var state_47827__$1 = (function (){var statearr_47845 = state_47827;
(statearr_47845[(11)] = inst_47816);

(statearr_47845[(10)] = inst_47797__$1);

return statearr_47845;
})();
var statearr_47846_49848 = state_47827__$1;
(statearr_47846_49848[(2)] = null);

(statearr_47846_49848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (9))){
var inst_47807 = (state_47827[(8)]);
var state_47827__$1 = state_47827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47827__$1,(11),out,inst_47807);
} else {
if((state_val_47828 === (5))){
var inst_47821 = cljs.core.async.close_BANG_(out);
var state_47827__$1 = state_47827;
var statearr_47849_49850 = state_47827__$1;
(statearr_47849_49850[(2)] = inst_47821);

(statearr_47849_49850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (10))){
var inst_47819 = (state_47827[(2)]);
var state_47827__$1 = state_47827;
var statearr_47850_49851 = state_47827__$1;
(statearr_47850_49851[(2)] = inst_47819);

(statearr_47850_49851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47828 === (8))){
var inst_47806 = (state_47827[(7)]);
var inst_47808 = (state_47827[(9)]);
var inst_47807 = (state_47827[(8)]);
var inst_47797 = (state_47827[(10)]);
var inst_47811 = (function (){var cs = inst_47797;
var vec__47802 = inst_47806;
var v = inst_47807;
var c = inst_47808;
return (function (p1__47793_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47793_SHARP_);
});
})();
var inst_47812 = cljs.core.filterv(inst_47811,inst_47797);
var inst_47797__$1 = inst_47812;
var state_47827__$1 = (function (){var statearr_47854 = state_47827;
(statearr_47854[(10)] = inst_47797__$1);

return statearr_47854;
})();
var statearr_47855_49859 = state_47827__$1;
(statearr_47855_49859[(2)] = null);

(statearr_47855_49859[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_47856 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47856[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_47856[(1)] = (1));

return statearr_47856;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_47827){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_47827);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e47860){if((e47860 instanceof Object)){
var ex__45741__auto__ = e47860;
var statearr_47861_49861 = state_47827;
(statearr_47861_49861[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49866 = state_47827;
state_47827 = G__49866;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_47827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_47827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_47862 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_47862[(6)] = c__45961__auto___49837);

return statearr_47862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47871 = arguments.length;
switch (G__47871) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45961__auto___49901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_47907){
var state_val_47908 = (state_47907[(1)]);
if((state_val_47908 === (7))){
var inst_47889 = (state_47907[(7)]);
var inst_47889__$1 = (state_47907[(2)]);
var inst_47890 = (inst_47889__$1 == null);
var inst_47891 = cljs.core.not(inst_47890);
var state_47907__$1 = (function (){var statearr_47919 = state_47907;
(statearr_47919[(7)] = inst_47889__$1);

return statearr_47919;
})();
if(inst_47891){
var statearr_47920_49903 = state_47907__$1;
(statearr_47920_49903[(1)] = (8));

} else {
var statearr_47921_49904 = state_47907__$1;
(statearr_47921_49904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (1))){
var inst_47884 = (0);
var state_47907__$1 = (function (){var statearr_47922 = state_47907;
(statearr_47922[(8)] = inst_47884);

return statearr_47922;
})();
var statearr_47926_49909 = state_47907__$1;
(statearr_47926_49909[(2)] = null);

(statearr_47926_49909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (4))){
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47907__$1,(7),ch);
} else {
if((state_val_47908 === (6))){
var inst_47902 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47927_49910 = state_47907__$1;
(statearr_47927_49910[(2)] = inst_47902);

(statearr_47927_49910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (3))){
var inst_47904 = (state_47907[(2)]);
var inst_47905 = cljs.core.async.close_BANG_(out);
var state_47907__$1 = (function (){var statearr_47928 = state_47907;
(statearr_47928[(9)] = inst_47904);

return statearr_47928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47907__$1,inst_47905);
} else {
if((state_val_47908 === (2))){
var inst_47884 = (state_47907[(8)]);
var inst_47886 = (inst_47884 < n);
var state_47907__$1 = state_47907;
if(cljs.core.truth_(inst_47886)){
var statearr_47929_49923 = state_47907__$1;
(statearr_47929_49923[(1)] = (4));

} else {
var statearr_47930_49925 = state_47907__$1;
(statearr_47930_49925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (11))){
var inst_47884 = (state_47907[(8)]);
var inst_47894 = (state_47907[(2)]);
var inst_47895 = (inst_47884 + (1));
var inst_47884__$1 = inst_47895;
var state_47907__$1 = (function (){var statearr_47931 = state_47907;
(statearr_47931[(10)] = inst_47894);

(statearr_47931[(8)] = inst_47884__$1);

return statearr_47931;
})();
var statearr_47933_49937 = state_47907__$1;
(statearr_47933_49937[(2)] = null);

(statearr_47933_49937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (9))){
var state_47907__$1 = state_47907;
var statearr_47937_49938 = state_47907__$1;
(statearr_47937_49938[(2)] = null);

(statearr_47937_49938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (5))){
var state_47907__$1 = state_47907;
var statearr_47938_49941 = state_47907__$1;
(statearr_47938_49941[(2)] = null);

(statearr_47938_49941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (10))){
var inst_47899 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47939_49950 = state_47907__$1;
(statearr_47939_49950[(2)] = inst_47899);

(statearr_47939_49950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (8))){
var inst_47889 = (state_47907[(7)]);
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47907__$1,(11),out,inst_47889);
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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_47940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47940[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_47940[(1)] = (1));

return statearr_47940;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_47907){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_47907);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e47941){if((e47941 instanceof Object)){
var ex__45741__auto__ = e47941;
var statearr_47942_49974 = state_47907;
(statearr_47942_49974[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49977 = state_47907;
state_47907 = G__49977;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_47907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_47907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_47943 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_47943[(6)] = c__45961__auto___49901);

return statearr_47943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47949 = (function (f,ch,meta47950){
this.f = f;
this.ch = ch;
this.meta47950 = meta47950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47951,meta47950__$1){
var self__ = this;
var _47951__$1 = this;
return (new cljs.core.async.t_cljs$core$async47949(self__.f,self__.ch,meta47950__$1));
}));

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47951){
var self__ = this;
var _47951__$1 = this;
return self__.meta47950;
}));

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47956 = (function (f,ch,meta47950,_,fn1,meta47957){
this.f = f;
this.ch = ch;
this.meta47950 = meta47950;
this._ = _;
this.fn1 = fn1;
this.meta47957 = meta47957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47958,meta47957__$1){
var self__ = this;
var _47958__$1 = this;
return (new cljs.core.async.t_cljs$core$async47956(self__.f,self__.ch,self__.meta47950,self__._,self__.fn1,meta47957__$1));
}));

(cljs.core.async.t_cljs$core$async47956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47958){
var self__ = this;
var _47958__$1 = this;
return self__.meta47957;
}));

(cljs.core.async.t_cljs$core$async47956.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47956.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47948_SHARP_){
var G__47959 = (((p1__47948_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47948_SHARP_) : self__.f.call(null,p1__47948_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47959) : f1.call(null,G__47959));
});
}));

(cljs.core.async.t_cljs$core$async47956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47950","meta47950",1329986809,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47949","cljs.core.async/t_cljs$core$async47949",492934767,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47957","meta47957",1964261711,null)], null);
}));

(cljs.core.async.t_cljs$core$async47956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47956");

(cljs.core.async.t_cljs$core$async47956.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47956.
 */
cljs.core.async.__GT_t_cljs$core$async47956 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47956(f__$1,ch__$1,meta47950__$1,___$2,fn1__$1,meta47957){
return (new cljs.core.async.t_cljs$core$async47956(f__$1,ch__$1,meta47950__$1,___$2,fn1__$1,meta47957));
});

}

return (new cljs.core.async.t_cljs$core$async47956(self__.f,self__.ch,self__.meta47950,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47963 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47963) : self__.f.call(null,G__47963));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47950","meta47950",1329986809,null)], null);
}));

(cljs.core.async.t_cljs$core$async47949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47949");

(cljs.core.async.t_cljs$core$async47949.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47949.
 */
cljs.core.async.__GT_t_cljs$core$async47949 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47949(f__$1,ch__$1,meta47950){
return (new cljs.core.async.t_cljs$core$async47949(f__$1,ch__$1,meta47950));
});

}

return (new cljs.core.async.t_cljs$core$async47949(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47968 = (function (f,ch,meta47969){
this.f = f;
this.ch = ch;
this.meta47969 = meta47969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47970,meta47969__$1){
var self__ = this;
var _47970__$1 = this;
return (new cljs.core.async.t_cljs$core$async47968(self__.f,self__.ch,meta47969__$1));
}));

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47970){
var self__ = this;
var _47970__$1 = this;
return self__.meta47969;
}));

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47969","meta47969",-719918065,null)], null);
}));

(cljs.core.async.t_cljs$core$async47968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47968");

(cljs.core.async.t_cljs$core$async47968.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47968.
 */
cljs.core.async.__GT_t_cljs$core$async47968 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47968(f__$1,ch__$1,meta47969){
return (new cljs.core.async.t_cljs$core$async47968(f__$1,ch__$1,meta47969));
});

}

return (new cljs.core.async.t_cljs$core$async47968(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47976 = (function (p,ch,meta47977){
this.p = p;
this.ch = ch;
this.meta47977 = meta47977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47978,meta47977__$1){
var self__ = this;
var _47978__$1 = this;
return (new cljs.core.async.t_cljs$core$async47976(self__.p,self__.ch,meta47977__$1));
}));

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47978){
var self__ = this;
var _47978__$1 = this;
return self__.meta47977;
}));

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47977","meta47977",-332913887,null)], null);
}));

(cljs.core.async.t_cljs$core$async47976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47976");

(cljs.core.async.t_cljs$core$async47976.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47976.
 */
cljs.core.async.__GT_t_cljs$core$async47976 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47976(p__$1,ch__$1,meta47977){
return (new cljs.core.async.t_cljs$core$async47976(p__$1,ch__$1,meta47977));
});

}

return (new cljs.core.async.t_cljs$core$async47976(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47989 = arguments.length;
switch (G__47989) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45961__auto___50064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_48010){
var state_val_48011 = (state_48010[(1)]);
if((state_val_48011 === (7))){
var inst_48006 = (state_48010[(2)]);
var state_48010__$1 = state_48010;
var statearr_48013_50074 = state_48010__$1;
(statearr_48013_50074[(2)] = inst_48006);

(statearr_48013_50074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (1))){
var state_48010__$1 = state_48010;
var statearr_48017_50079 = state_48010__$1;
(statearr_48017_50079[(2)] = null);

(statearr_48017_50079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (4))){
var inst_47992 = (state_48010[(7)]);
var inst_47992__$1 = (state_48010[(2)]);
var inst_47993 = (inst_47992__$1 == null);
var state_48010__$1 = (function (){var statearr_48018 = state_48010;
(statearr_48018[(7)] = inst_47992__$1);

return statearr_48018;
})();
if(cljs.core.truth_(inst_47993)){
var statearr_48019_50087 = state_48010__$1;
(statearr_48019_50087[(1)] = (5));

} else {
var statearr_48020_50088 = state_48010__$1;
(statearr_48020_50088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (6))){
var inst_47992 = (state_48010[(7)]);
var inst_47997 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47992) : p.call(null,inst_47992));
var state_48010__$1 = state_48010;
if(cljs.core.truth_(inst_47997)){
var statearr_48021_50098 = state_48010__$1;
(statearr_48021_50098[(1)] = (8));

} else {
var statearr_48023_50099 = state_48010__$1;
(statearr_48023_50099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (3))){
var inst_48008 = (state_48010[(2)]);
var state_48010__$1 = state_48010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48010__$1,inst_48008);
} else {
if((state_val_48011 === (2))){
var state_48010__$1 = state_48010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48010__$1,(4),ch);
} else {
if((state_val_48011 === (11))){
var inst_48000 = (state_48010[(2)]);
var state_48010__$1 = state_48010;
var statearr_48027_50104 = state_48010__$1;
(statearr_48027_50104[(2)] = inst_48000);

(statearr_48027_50104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (9))){
var state_48010__$1 = state_48010;
var statearr_48028_50108 = state_48010__$1;
(statearr_48028_50108[(2)] = null);

(statearr_48028_50108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (5))){
var inst_47995 = cljs.core.async.close_BANG_(out);
var state_48010__$1 = state_48010;
var statearr_48029_50112 = state_48010__$1;
(statearr_48029_50112[(2)] = inst_47995);

(statearr_48029_50112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (10))){
var inst_48003 = (state_48010[(2)]);
var state_48010__$1 = (function (){var statearr_48030 = state_48010;
(statearr_48030[(8)] = inst_48003);

return statearr_48030;
})();
var statearr_48031_50114 = state_48010__$1;
(statearr_48031_50114[(2)] = null);

(statearr_48031_50114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48011 === (8))){
var inst_47992 = (state_48010[(7)]);
var state_48010__$1 = state_48010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48010__$1,(11),out,inst_47992);
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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_48032 = [null,null,null,null,null,null,null,null,null];
(statearr_48032[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_48032[(1)] = (1));

return statearr_48032;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_48010){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_48010);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e48033){if((e48033 instanceof Object)){
var ex__45741__auto__ = e48033;
var statearr_48034_50127 = state_48010;
(statearr_48034_50127[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50134 = state_48010;
state_48010 = G__50134;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_48010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_48010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_48035 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_48035[(6)] = c__45961__auto___50064);

return statearr_48035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48038 = arguments.length;
switch (G__48038) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_48104){
var state_val_48105 = (state_48104[(1)]);
if((state_val_48105 === (7))){
var inst_48100 = (state_48104[(2)]);
var state_48104__$1 = state_48104;
var statearr_48106_50139 = state_48104__$1;
(statearr_48106_50139[(2)] = inst_48100);

(statearr_48106_50139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (20))){
var inst_48070 = (state_48104[(7)]);
var inst_48081 = (state_48104[(2)]);
var inst_48082 = cljs.core.next(inst_48070);
var inst_48056 = inst_48082;
var inst_48057 = null;
var inst_48058 = (0);
var inst_48059 = (0);
var state_48104__$1 = (function (){var statearr_48107 = state_48104;
(statearr_48107[(8)] = inst_48081);

(statearr_48107[(9)] = inst_48057);

(statearr_48107[(10)] = inst_48056);

(statearr_48107[(11)] = inst_48058);

(statearr_48107[(12)] = inst_48059);

return statearr_48107;
})();
var statearr_48108_50144 = state_48104__$1;
(statearr_48108_50144[(2)] = null);

(statearr_48108_50144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (1))){
var state_48104__$1 = state_48104;
var statearr_48109_50145 = state_48104__$1;
(statearr_48109_50145[(2)] = null);

(statearr_48109_50145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (4))){
var inst_48045 = (state_48104[(13)]);
var inst_48045__$1 = (state_48104[(2)]);
var inst_48046 = (inst_48045__$1 == null);
var state_48104__$1 = (function (){var statearr_48110 = state_48104;
(statearr_48110[(13)] = inst_48045__$1);

return statearr_48110;
})();
if(cljs.core.truth_(inst_48046)){
var statearr_48111_50146 = state_48104__$1;
(statearr_48111_50146[(1)] = (5));

} else {
var statearr_48112_50147 = state_48104__$1;
(statearr_48112_50147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (15))){
var state_48104__$1 = state_48104;
var statearr_48116_50148 = state_48104__$1;
(statearr_48116_50148[(2)] = null);

(statearr_48116_50148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (21))){
var state_48104__$1 = state_48104;
var statearr_48117_50149 = state_48104__$1;
(statearr_48117_50149[(2)] = null);

(statearr_48117_50149[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (13))){
var inst_48057 = (state_48104[(9)]);
var inst_48056 = (state_48104[(10)]);
var inst_48058 = (state_48104[(11)]);
var inst_48059 = (state_48104[(12)]);
var inst_48066 = (state_48104[(2)]);
var inst_48067 = (inst_48059 + (1));
var tmp48113 = inst_48057;
var tmp48114 = inst_48056;
var tmp48115 = inst_48058;
var inst_48056__$1 = tmp48114;
var inst_48057__$1 = tmp48113;
var inst_48058__$1 = tmp48115;
var inst_48059__$1 = inst_48067;
var state_48104__$1 = (function (){var statearr_48118 = state_48104;
(statearr_48118[(9)] = inst_48057__$1);

(statearr_48118[(14)] = inst_48066);

(statearr_48118[(10)] = inst_48056__$1);

(statearr_48118[(11)] = inst_48058__$1);

(statearr_48118[(12)] = inst_48059__$1);

return statearr_48118;
})();
var statearr_48119_50158 = state_48104__$1;
(statearr_48119_50158[(2)] = null);

(statearr_48119_50158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (22))){
var state_48104__$1 = state_48104;
var statearr_48120_50164 = state_48104__$1;
(statearr_48120_50164[(2)] = null);

(statearr_48120_50164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (6))){
var inst_48045 = (state_48104[(13)]);
var inst_48054 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48045) : f.call(null,inst_48045));
var inst_48055 = cljs.core.seq(inst_48054);
var inst_48056 = inst_48055;
var inst_48057 = null;
var inst_48058 = (0);
var inst_48059 = (0);
var state_48104__$1 = (function (){var statearr_48121 = state_48104;
(statearr_48121[(9)] = inst_48057);

(statearr_48121[(10)] = inst_48056);

(statearr_48121[(11)] = inst_48058);

(statearr_48121[(12)] = inst_48059);

return statearr_48121;
})();
var statearr_48122_50176 = state_48104__$1;
(statearr_48122_50176[(2)] = null);

(statearr_48122_50176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (17))){
var inst_48070 = (state_48104[(7)]);
var inst_48074 = cljs.core.chunk_first(inst_48070);
var inst_48075 = cljs.core.chunk_rest(inst_48070);
var inst_48076 = cljs.core.count(inst_48074);
var inst_48056 = inst_48075;
var inst_48057 = inst_48074;
var inst_48058 = inst_48076;
var inst_48059 = (0);
var state_48104__$1 = (function (){var statearr_48123 = state_48104;
(statearr_48123[(9)] = inst_48057);

(statearr_48123[(10)] = inst_48056);

(statearr_48123[(11)] = inst_48058);

(statearr_48123[(12)] = inst_48059);

return statearr_48123;
})();
var statearr_48124_50192 = state_48104__$1;
(statearr_48124_50192[(2)] = null);

(statearr_48124_50192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (3))){
var inst_48102 = (state_48104[(2)]);
var state_48104__$1 = state_48104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48104__$1,inst_48102);
} else {
if((state_val_48105 === (12))){
var inst_48090 = (state_48104[(2)]);
var state_48104__$1 = state_48104;
var statearr_48125_50203 = state_48104__$1;
(statearr_48125_50203[(2)] = inst_48090);

(statearr_48125_50203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (2))){
var state_48104__$1 = state_48104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48104__$1,(4),in$);
} else {
if((state_val_48105 === (23))){
var inst_48098 = (state_48104[(2)]);
var state_48104__$1 = state_48104;
var statearr_48126_50208 = state_48104__$1;
(statearr_48126_50208[(2)] = inst_48098);

(statearr_48126_50208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (19))){
var inst_48085 = (state_48104[(2)]);
var state_48104__$1 = state_48104;
var statearr_48127_50209 = state_48104__$1;
(statearr_48127_50209[(2)] = inst_48085);

(statearr_48127_50209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (11))){
var inst_48070 = (state_48104[(7)]);
var inst_48056 = (state_48104[(10)]);
var inst_48070__$1 = cljs.core.seq(inst_48056);
var state_48104__$1 = (function (){var statearr_48128 = state_48104;
(statearr_48128[(7)] = inst_48070__$1);

return statearr_48128;
})();
if(inst_48070__$1){
var statearr_48129_50213 = state_48104__$1;
(statearr_48129_50213[(1)] = (14));

} else {
var statearr_48130_50214 = state_48104__$1;
(statearr_48130_50214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (9))){
var inst_48092 = (state_48104[(2)]);
var inst_48093 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48104__$1 = (function (){var statearr_48132 = state_48104;
(statearr_48132[(15)] = inst_48092);

return statearr_48132;
})();
if(cljs.core.truth_(inst_48093)){
var statearr_48133_50224 = state_48104__$1;
(statearr_48133_50224[(1)] = (21));

} else {
var statearr_48134_50228 = state_48104__$1;
(statearr_48134_50228[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (5))){
var inst_48048 = cljs.core.async.close_BANG_(out);
var state_48104__$1 = state_48104;
var statearr_48135_50229 = state_48104__$1;
(statearr_48135_50229[(2)] = inst_48048);

(statearr_48135_50229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (14))){
var inst_48070 = (state_48104[(7)]);
var inst_48072 = cljs.core.chunked_seq_QMARK_(inst_48070);
var state_48104__$1 = state_48104;
if(inst_48072){
var statearr_48136_50233 = state_48104__$1;
(statearr_48136_50233[(1)] = (17));

} else {
var statearr_48137_50235 = state_48104__$1;
(statearr_48137_50235[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (16))){
var inst_48088 = (state_48104[(2)]);
var state_48104__$1 = state_48104;
var statearr_48138_50239 = state_48104__$1;
(statearr_48138_50239[(2)] = inst_48088);

(statearr_48138_50239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48105 === (10))){
var inst_48057 = (state_48104[(9)]);
var inst_48059 = (state_48104[(12)]);
var inst_48064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48057,inst_48059);
var state_48104__$1 = state_48104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48104__$1,(13),out,inst_48064);
} else {
if((state_val_48105 === (18))){
var inst_48070 = (state_48104[(7)]);
var inst_48079 = cljs.core.first(inst_48070);
var state_48104__$1 = state_48104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48104__$1,(20),out,inst_48079);
} else {
if((state_val_48105 === (8))){
var inst_48058 = (state_48104[(11)]);
var inst_48059 = (state_48104[(12)]);
var inst_48061 = (inst_48059 < inst_48058);
var inst_48062 = inst_48061;
var state_48104__$1 = state_48104;
if(cljs.core.truth_(inst_48062)){
var statearr_48142_50251 = state_48104__$1;
(statearr_48142_50251[(1)] = (10));

} else {
var statearr_48143_50252 = state_48104__$1;
(statearr_48143_50252[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45738__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45738__auto____0 = (function (){
var statearr_48144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45738__auto__);

(statearr_48144[(1)] = (1));

return statearr_48144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45738__auto____1 = (function (state_48104){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_48104);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e48145){if((e48145 instanceof Object)){
var ex__45741__auto__ = e48145;
var statearr_48146_50265 = state_48104;
(statearr_48146_50265[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50266 = state_48104;
state_48104 = G__50266;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45738__auto__ = function(state_48104){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45738__auto____1.call(this,state_48104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45738__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45738__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_48147 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_48147[(6)] = c__45961__auto__);

return statearr_48147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));

return c__45961__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48153 = arguments.length;
switch (G__48153) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48155 = arguments.length;
switch (G__48155) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48157 = arguments.length;
switch (G__48157) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45961__auto___50274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_48195){
var state_val_48196 = (state_48195[(1)]);
if((state_val_48196 === (7))){
var inst_48184 = (state_48195[(2)]);
var state_48195__$1 = state_48195;
var statearr_48203_50279 = state_48195__$1;
(statearr_48203_50279[(2)] = inst_48184);

(statearr_48203_50279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (1))){
var inst_48158 = null;
var state_48195__$1 = (function (){var statearr_48204 = state_48195;
(statearr_48204[(7)] = inst_48158);

return statearr_48204;
})();
var statearr_48205_50280 = state_48195__$1;
(statearr_48205_50280[(2)] = null);

(statearr_48205_50280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (4))){
var inst_48161 = (state_48195[(8)]);
var inst_48161__$1 = (state_48195[(2)]);
var inst_48168 = (inst_48161__$1 == null);
var inst_48171 = cljs.core.not(inst_48168);
var state_48195__$1 = (function (){var statearr_48206 = state_48195;
(statearr_48206[(8)] = inst_48161__$1);

return statearr_48206;
})();
if(inst_48171){
var statearr_48207_50281 = state_48195__$1;
(statearr_48207_50281[(1)] = (5));

} else {
var statearr_48216_50282 = state_48195__$1;
(statearr_48216_50282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (6))){
var state_48195__$1 = state_48195;
var statearr_48223_50283 = state_48195__$1;
(statearr_48223_50283[(2)] = null);

(statearr_48223_50283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (3))){
var inst_48186 = (state_48195[(2)]);
var inst_48187 = cljs.core.async.close_BANG_(out);
var state_48195__$1 = (function (){var statearr_48224 = state_48195;
(statearr_48224[(9)] = inst_48186);

return statearr_48224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48195__$1,inst_48187);
} else {
if((state_val_48196 === (2))){
var state_48195__$1 = state_48195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48195__$1,(4),ch);
} else {
if((state_val_48196 === (11))){
var inst_48161 = (state_48195[(8)]);
var inst_48178 = (state_48195[(2)]);
var inst_48158 = inst_48161;
var state_48195__$1 = (function (){var statearr_48231 = state_48195;
(statearr_48231[(10)] = inst_48178);

(statearr_48231[(7)] = inst_48158);

return statearr_48231;
})();
var statearr_48232_50287 = state_48195__$1;
(statearr_48232_50287[(2)] = null);

(statearr_48232_50287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (9))){
var inst_48161 = (state_48195[(8)]);
var state_48195__$1 = state_48195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48195__$1,(11),out,inst_48161);
} else {
if((state_val_48196 === (5))){
var inst_48158 = (state_48195[(7)]);
var inst_48161 = (state_48195[(8)]);
var inst_48173 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48161,inst_48158);
var state_48195__$1 = state_48195;
if(inst_48173){
var statearr_48236_50290 = state_48195__$1;
(statearr_48236_50290[(1)] = (8));

} else {
var statearr_48237_50291 = state_48195__$1;
(statearr_48237_50291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (10))){
var inst_48181 = (state_48195[(2)]);
var state_48195__$1 = state_48195;
var statearr_48238_50294 = state_48195__$1;
(statearr_48238_50294[(2)] = inst_48181);

(statearr_48238_50294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48196 === (8))){
var inst_48158 = (state_48195[(7)]);
var tmp48233 = inst_48158;
var inst_48158__$1 = tmp48233;
var state_48195__$1 = (function (){var statearr_48240 = state_48195;
(statearr_48240[(7)] = inst_48158__$1);

return statearr_48240;
})();
var statearr_48241_50295 = state_48195__$1;
(statearr_48241_50295[(2)] = null);

(statearr_48241_50295[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_48242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48242[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_48242[(1)] = (1));

return statearr_48242;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_48195){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_48195);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e48243){if((e48243 instanceof Object)){
var ex__45741__auto__ = e48243;
var statearr_48244_50299 = state_48195;
(statearr_48244_50299[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50300 = state_48195;
state_48195 = G__50300;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_48195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_48195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_48245 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_48245[(6)] = c__45961__auto___50274);

return statearr_48245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48250 = arguments.length;
switch (G__48250) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45961__auto___50303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_48288){
var state_val_48289 = (state_48288[(1)]);
if((state_val_48289 === (7))){
var inst_48284 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48290_50305 = state_48288__$1;
(statearr_48290_50305[(2)] = inst_48284);

(statearr_48290_50305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (1))){
var inst_48251 = (new Array(n));
var inst_48252 = inst_48251;
var inst_48253 = (0);
var state_48288__$1 = (function (){var statearr_48291 = state_48288;
(statearr_48291[(7)] = inst_48252);

(statearr_48291[(8)] = inst_48253);

return statearr_48291;
})();
var statearr_48292_50309 = state_48288__$1;
(statearr_48292_50309[(2)] = null);

(statearr_48292_50309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (4))){
var inst_48256 = (state_48288[(9)]);
var inst_48256__$1 = (state_48288[(2)]);
var inst_48257 = (inst_48256__$1 == null);
var inst_48258 = cljs.core.not(inst_48257);
var state_48288__$1 = (function (){var statearr_48293 = state_48288;
(statearr_48293[(9)] = inst_48256__$1);

return statearr_48293;
})();
if(inst_48258){
var statearr_48294_50310 = state_48288__$1;
(statearr_48294_50310[(1)] = (5));

} else {
var statearr_48295_50311 = state_48288__$1;
(statearr_48295_50311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (15))){
var inst_48278 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48296_50314 = state_48288__$1;
(statearr_48296_50314[(2)] = inst_48278);

(statearr_48296_50314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (13))){
var state_48288__$1 = state_48288;
var statearr_48297_50315 = state_48288__$1;
(statearr_48297_50315[(2)] = null);

(statearr_48297_50315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (6))){
var inst_48253 = (state_48288[(8)]);
var inst_48274 = (inst_48253 > (0));
var state_48288__$1 = state_48288;
if(cljs.core.truth_(inst_48274)){
var statearr_48298_50320 = state_48288__$1;
(statearr_48298_50320[(1)] = (12));

} else {
var statearr_48299_50321 = state_48288__$1;
(statearr_48299_50321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (3))){
var inst_48286 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48288__$1,inst_48286);
} else {
if((state_val_48289 === (12))){
var inst_48252 = (state_48288[(7)]);
var inst_48276 = cljs.core.vec(inst_48252);
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48288__$1,(15),out,inst_48276);
} else {
if((state_val_48289 === (2))){
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48288__$1,(4),ch);
} else {
if((state_val_48289 === (11))){
var inst_48268 = (state_48288[(2)]);
var inst_48269 = (new Array(n));
var inst_48252 = inst_48269;
var inst_48253 = (0);
var state_48288__$1 = (function (){var statearr_48300 = state_48288;
(statearr_48300[(10)] = inst_48268);

(statearr_48300[(7)] = inst_48252);

(statearr_48300[(8)] = inst_48253);

return statearr_48300;
})();
var statearr_48301_50326 = state_48288__$1;
(statearr_48301_50326[(2)] = null);

(statearr_48301_50326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (9))){
var inst_48252 = (state_48288[(7)]);
var inst_48266 = cljs.core.vec(inst_48252);
var state_48288__$1 = state_48288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48288__$1,(11),out,inst_48266);
} else {
if((state_val_48289 === (5))){
var inst_48261 = (state_48288[(11)]);
var inst_48256 = (state_48288[(9)]);
var inst_48252 = (state_48288[(7)]);
var inst_48253 = (state_48288[(8)]);
var inst_48260 = (inst_48252[inst_48253] = inst_48256);
var inst_48261__$1 = (inst_48253 + (1));
var inst_48262 = (inst_48261__$1 < n);
var state_48288__$1 = (function (){var statearr_48302 = state_48288;
(statearr_48302[(11)] = inst_48261__$1);

(statearr_48302[(12)] = inst_48260);

return statearr_48302;
})();
if(cljs.core.truth_(inst_48262)){
var statearr_48303_50336 = state_48288__$1;
(statearr_48303_50336[(1)] = (8));

} else {
var statearr_48304_50337 = state_48288__$1;
(statearr_48304_50337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (14))){
var inst_48281 = (state_48288[(2)]);
var inst_48282 = cljs.core.async.close_BANG_(out);
var state_48288__$1 = (function (){var statearr_48306 = state_48288;
(statearr_48306[(13)] = inst_48281);

return statearr_48306;
})();
var statearr_48307_50338 = state_48288__$1;
(statearr_48307_50338[(2)] = inst_48282);

(statearr_48307_50338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (10))){
var inst_48272 = (state_48288[(2)]);
var state_48288__$1 = state_48288;
var statearr_48308_50339 = state_48288__$1;
(statearr_48308_50339[(2)] = inst_48272);

(statearr_48308_50339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48289 === (8))){
var inst_48261 = (state_48288[(11)]);
var inst_48252 = (state_48288[(7)]);
var tmp48305 = inst_48252;
var inst_48252__$1 = tmp48305;
var inst_48253 = inst_48261;
var state_48288__$1 = (function (){var statearr_48309 = state_48288;
(statearr_48309[(7)] = inst_48252__$1);

(statearr_48309[(8)] = inst_48253);

return statearr_48309;
})();
var statearr_48310_50340 = state_48288__$1;
(statearr_48310_50340[(2)] = null);

(statearr_48310_50340[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_48311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48311[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_48311[(1)] = (1));

return statearr_48311;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_48288){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_48288);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e48312){if((e48312 instanceof Object)){
var ex__45741__auto__ = e48312;
var statearr_48313_50343 = state_48288;
(statearr_48313_50343[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50346 = state_48288;
state_48288 = G__50346;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_48288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_48288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_48322 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_48322[(6)] = c__45961__auto___50303);

return statearr_48322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48327 = arguments.length;
switch (G__48327) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45961__auto___50356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45962__auto__ = (function (){var switch__45737__auto__ = (function (state_48369){
var state_val_48370 = (state_48369[(1)]);
if((state_val_48370 === (7))){
var inst_48365 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48371_50359 = state_48369__$1;
(statearr_48371_50359[(2)] = inst_48365);

(statearr_48371_50359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (1))){
var inst_48328 = [];
var inst_48329 = inst_48328;
var inst_48330 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48369__$1 = (function (){var statearr_48372 = state_48369;
(statearr_48372[(7)] = inst_48330);

(statearr_48372[(8)] = inst_48329);

return statearr_48372;
})();
var statearr_48373_50367 = state_48369__$1;
(statearr_48373_50367[(2)] = null);

(statearr_48373_50367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (4))){
var inst_48333 = (state_48369[(9)]);
var inst_48333__$1 = (state_48369[(2)]);
var inst_48334 = (inst_48333__$1 == null);
var inst_48335 = cljs.core.not(inst_48334);
var state_48369__$1 = (function (){var statearr_48374 = state_48369;
(statearr_48374[(9)] = inst_48333__$1);

return statearr_48374;
})();
if(inst_48335){
var statearr_48375_50370 = state_48369__$1;
(statearr_48375_50370[(1)] = (5));

} else {
var statearr_48376_50372 = state_48369__$1;
(statearr_48376_50372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (15))){
var inst_48359 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48377_50373 = state_48369__$1;
(statearr_48377_50373[(2)] = inst_48359);

(statearr_48377_50373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (13))){
var state_48369__$1 = state_48369;
var statearr_48378_50374 = state_48369__$1;
(statearr_48378_50374[(2)] = null);

(statearr_48378_50374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (6))){
var inst_48329 = (state_48369[(8)]);
var inst_48354 = inst_48329.length;
var inst_48355 = (inst_48354 > (0));
var state_48369__$1 = state_48369;
if(cljs.core.truth_(inst_48355)){
var statearr_48379_50376 = state_48369__$1;
(statearr_48379_50376[(1)] = (12));

} else {
var statearr_48380_50377 = state_48369__$1;
(statearr_48380_50377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (3))){
var inst_48367 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48369__$1,inst_48367);
} else {
if((state_val_48370 === (12))){
var inst_48329 = (state_48369[(8)]);
var inst_48357 = cljs.core.vec(inst_48329);
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48369__$1,(15),out,inst_48357);
} else {
if((state_val_48370 === (2))){
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48369__$1,(4),ch);
} else {
if((state_val_48370 === (11))){
var inst_48333 = (state_48369[(9)]);
var inst_48337 = (state_48369[(10)]);
var inst_48347 = (state_48369[(2)]);
var inst_48348 = [];
var inst_48349 = inst_48348.push(inst_48333);
var inst_48329 = inst_48348;
var inst_48330 = inst_48337;
var state_48369__$1 = (function (){var statearr_48383 = state_48369;
(statearr_48383[(11)] = inst_48347);

(statearr_48383[(12)] = inst_48349);

(statearr_48383[(7)] = inst_48330);

(statearr_48383[(8)] = inst_48329);

return statearr_48383;
})();
var statearr_48384_50388 = state_48369__$1;
(statearr_48384_50388[(2)] = null);

(statearr_48384_50388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (9))){
var inst_48329 = (state_48369[(8)]);
var inst_48345 = cljs.core.vec(inst_48329);
var state_48369__$1 = state_48369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48369__$1,(11),out,inst_48345);
} else {
if((state_val_48370 === (5))){
var inst_48330 = (state_48369[(7)]);
var inst_48333 = (state_48369[(9)]);
var inst_48337 = (state_48369[(10)]);
var inst_48337__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48333) : f.call(null,inst_48333));
var inst_48338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48337__$1,inst_48330);
var inst_48339 = cljs.core.keyword_identical_QMARK_(inst_48330,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48340 = ((inst_48338) || (inst_48339));
var state_48369__$1 = (function (){var statearr_48387 = state_48369;
(statearr_48387[(10)] = inst_48337__$1);

return statearr_48387;
})();
if(cljs.core.truth_(inst_48340)){
var statearr_48388_50406 = state_48369__$1;
(statearr_48388_50406[(1)] = (8));

} else {
var statearr_48389_50407 = state_48369__$1;
(statearr_48389_50407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (14))){
var inst_48362 = (state_48369[(2)]);
var inst_48363 = cljs.core.async.close_BANG_(out);
var state_48369__$1 = (function (){var statearr_48393 = state_48369;
(statearr_48393[(13)] = inst_48362);

return statearr_48393;
})();
var statearr_48394_50412 = state_48369__$1;
(statearr_48394_50412[(2)] = inst_48363);

(statearr_48394_50412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (10))){
var inst_48352 = (state_48369[(2)]);
var state_48369__$1 = state_48369;
var statearr_48395_50413 = state_48369__$1;
(statearr_48395_50413[(2)] = inst_48352);

(statearr_48395_50413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48370 === (8))){
var inst_48333 = (state_48369[(9)]);
var inst_48337 = (state_48369[(10)]);
var inst_48329 = (state_48369[(8)]);
var inst_48342 = inst_48329.push(inst_48333);
var tmp48391 = inst_48329;
var inst_48329__$1 = tmp48391;
var inst_48330 = inst_48337;
var state_48369__$1 = (function (){var statearr_48396 = state_48369;
(statearr_48396[(7)] = inst_48330);

(statearr_48396[(14)] = inst_48342);

(statearr_48396[(8)] = inst_48329__$1);

return statearr_48396;
})();
var statearr_48399_50419 = state_48369__$1;
(statearr_48399_50419[(2)] = null);

(statearr_48399_50419[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45738__auto__ = null;
var cljs$core$async$state_machine__45738__auto____0 = (function (){
var statearr_48401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48401[(0)] = cljs$core$async$state_machine__45738__auto__);

(statearr_48401[(1)] = (1));

return statearr_48401;
});
var cljs$core$async$state_machine__45738__auto____1 = (function (state_48369){
while(true){
var ret_value__45739__auto__ = (function (){try{while(true){
var result__45740__auto__ = switch__45737__auto__(state_48369);
if(cljs.core.keyword_identical_QMARK_(result__45740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45740__auto__;
}
break;
}
}catch (e48402){if((e48402 instanceof Object)){
var ex__45741__auto__ = e48402;
var statearr_48403_50435 = state_48369;
(statearr_48403_50435[(5)] = ex__45741__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50443 = state_48369;
state_48369 = G__50443;
continue;
} else {
return ret_value__45739__auto__;
}
break;
}
});
cljs$core$async$state_machine__45738__auto__ = function(state_48369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45738__auto____1.call(this,state_48369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45738__auto____0;
cljs$core$async$state_machine__45738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45738__auto____1;
return cljs$core$async$state_machine__45738__auto__;
})()
})();
var state__45963__auto__ = (function (){var statearr_48404 = (f__45962__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45962__auto__.cljs$core$IFn$_invoke$arity$0() : f__45962__auto__.call(null));
(statearr_48404[(6)] = c__45961__auto___50356);

return statearr_48404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45963__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
