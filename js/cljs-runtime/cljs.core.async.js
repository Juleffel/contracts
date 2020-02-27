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
var G__46100 = arguments.length;
switch (G__46100) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46101 = (function (f,blockable,meta46102){
this.f = f;
this.blockable = blockable;
this.meta46102 = meta46102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46103,meta46102__$1){
var self__ = this;
var _46103__$1 = this;
return (new cljs.core.async.t_cljs$core$async46101(self__.f,self__.blockable,meta46102__$1));
}));

(cljs.core.async.t_cljs$core$async46101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46103){
var self__ = this;
var _46103__$1 = this;
return self__.meta46102;
}));

(cljs.core.async.t_cljs$core$async46101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46102","meta46102",-1837620274,null)], null);
}));

(cljs.core.async.t_cljs$core$async46101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46101");

(cljs.core.async.t_cljs$core$async46101.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46101.
 */
cljs.core.async.__GT_t_cljs$core$async46101 = (function cljs$core$async$__GT_t_cljs$core$async46101(f__$1,blockable__$1,meta46102){
return (new cljs.core.async.t_cljs$core$async46101(f__$1,blockable__$1,meta46102));
});

}

return (new cljs.core.async.t_cljs$core$async46101(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46106 = arguments.length;
switch (G__46106) {
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
var G__46108 = arguments.length;
switch (G__46108) {
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
var G__46110 = arguments.length;
switch (G__46110) {
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
var val_47540 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47540) : fn1.call(null,val_47540));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47540) : fn1.call(null,val_47540));
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
var G__46112 = arguments.length;
switch (G__46112) {
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
var n__4666__auto___47551 = n;
var x_47552 = (0);
while(true){
if((x_47552 < n__4666__auto___47551)){
(a[x_47552] = x_47552);

var G__47554 = (x_47552 + (1));
x_47552 = G__47554;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46113 = (function (flag,meta46114){
this.flag = flag;
this.meta46114 = meta46114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46115,meta46114__$1){
var self__ = this;
var _46115__$1 = this;
return (new cljs.core.async.t_cljs$core$async46113(self__.flag,meta46114__$1));
}));

(cljs.core.async.t_cljs$core$async46113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46115){
var self__ = this;
var _46115__$1 = this;
return self__.meta46114;
}));

(cljs.core.async.t_cljs$core$async46113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46114","meta46114",-1070841654,null)], null);
}));

(cljs.core.async.t_cljs$core$async46113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46113");

(cljs.core.async.t_cljs$core$async46113.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46113.
 */
cljs.core.async.__GT_t_cljs$core$async46113 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46113(flag__$1,meta46114){
return (new cljs.core.async.t_cljs$core$async46113(flag__$1,meta46114));
});

}

return (new cljs.core.async.t_cljs$core$async46113(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46116 = (function (flag,cb,meta46117){
this.flag = flag;
this.cb = cb;
this.meta46117 = meta46117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46118,meta46117__$1){
var self__ = this;
var _46118__$1 = this;
return (new cljs.core.async.t_cljs$core$async46116(self__.flag,self__.cb,meta46117__$1));
}));

(cljs.core.async.t_cljs$core$async46116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46118){
var self__ = this;
var _46118__$1 = this;
return self__.meta46117;
}));

(cljs.core.async.t_cljs$core$async46116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46117","meta46117",2103160345,null)], null);
}));

(cljs.core.async.t_cljs$core$async46116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46116");

(cljs.core.async.t_cljs$core$async46116.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46116.
 */
cljs.core.async.__GT_t_cljs$core$async46116 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46116(flag__$1,cb__$1,meta46117){
return (new cljs.core.async.t_cljs$core$async46116(flag__$1,cb__$1,meta46117));
});

}

return (new cljs.core.async.t_cljs$core$async46116(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46119_SHARP_){
var G__46121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46119_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46121) : fret.call(null,G__46121));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46120_SHARP_){
var G__46122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46120_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46122) : fret.call(null,G__46122));
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
var G__47583 = (i + (1));
i = G__47583;
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
var len__4789__auto___47588 = arguments.length;
var i__4790__auto___47589 = (0);
while(true){
if((i__4790__auto___47589 < len__4789__auto___47588)){
args__4795__auto__.push((arguments[i__4790__auto___47589]));

var G__47591 = (i__4790__auto___47589 + (1));
i__4790__auto___47589 = G__47591;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46125){
var map__46126 = p__46125;
var map__46126__$1 = (((((!((map__46126 == null))))?(((((map__46126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46126):map__46126);
var opts = map__46126__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46123){
var G__46124 = cljs.core.first(seq46123);
var seq46123__$1 = cljs.core.next(seq46123);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46124,seq46123__$1);
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
var G__46129 = arguments.length;
switch (G__46129) {
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
var c__46042__auto___47603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46153){
var state_val_46154 = (state_46153[(1)]);
if((state_val_46154 === (7))){
var inst_46149 = (state_46153[(2)]);
var state_46153__$1 = state_46153;
var statearr_46155_47606 = state_46153__$1;
(statearr_46155_47606[(2)] = inst_46149);

(statearr_46155_47606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (1))){
var state_46153__$1 = state_46153;
var statearr_46156_47607 = state_46153__$1;
(statearr_46156_47607[(2)] = null);

(statearr_46156_47607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (4))){
var inst_46132 = (state_46153[(7)]);
var inst_46132__$1 = (state_46153[(2)]);
var inst_46133 = (inst_46132__$1 == null);
var state_46153__$1 = (function (){var statearr_46157 = state_46153;
(statearr_46157[(7)] = inst_46132__$1);

return statearr_46157;
})();
if(cljs.core.truth_(inst_46133)){
var statearr_46158_47608 = state_46153__$1;
(statearr_46158_47608[(1)] = (5));

} else {
var statearr_46159_47609 = state_46153__$1;
(statearr_46159_47609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (13))){
var state_46153__$1 = state_46153;
var statearr_46160_47610 = state_46153__$1;
(statearr_46160_47610[(2)] = null);

(statearr_46160_47610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (6))){
var inst_46132 = (state_46153[(7)]);
var state_46153__$1 = state_46153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46153__$1,(11),to,inst_46132);
} else {
if((state_val_46154 === (3))){
var inst_46151 = (state_46153[(2)]);
var state_46153__$1 = state_46153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46153__$1,inst_46151);
} else {
if((state_val_46154 === (12))){
var state_46153__$1 = state_46153;
var statearr_46161_47614 = state_46153__$1;
(statearr_46161_47614[(2)] = null);

(statearr_46161_47614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (2))){
var state_46153__$1 = state_46153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46153__$1,(4),from);
} else {
if((state_val_46154 === (11))){
var inst_46142 = (state_46153[(2)]);
var state_46153__$1 = state_46153;
if(cljs.core.truth_(inst_46142)){
var statearr_46162_47616 = state_46153__$1;
(statearr_46162_47616[(1)] = (12));

} else {
var statearr_46163_47617 = state_46153__$1;
(statearr_46163_47617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (9))){
var state_46153__$1 = state_46153;
var statearr_46164_47620 = state_46153__$1;
(statearr_46164_47620[(2)] = null);

(statearr_46164_47620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (5))){
var state_46153__$1 = state_46153;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46165_47623 = state_46153__$1;
(statearr_46165_47623[(1)] = (8));

} else {
var statearr_46166_47624 = state_46153__$1;
(statearr_46166_47624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (14))){
var inst_46147 = (state_46153[(2)]);
var state_46153__$1 = state_46153;
var statearr_46167_47625 = state_46153__$1;
(statearr_46167_47625[(2)] = inst_46147);

(statearr_46167_47625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (10))){
var inst_46139 = (state_46153[(2)]);
var state_46153__$1 = state_46153;
var statearr_46168_47626 = state_46153__$1;
(statearr_46168_47626[(2)] = inst_46139);

(statearr_46168_47626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46154 === (8))){
var inst_46136 = cljs.core.async.close_BANG_(to);
var state_46153__$1 = state_46153;
var statearr_46169_47627 = state_46153__$1;
(statearr_46169_47627[(2)] = inst_46136);

(statearr_46169_47627[(1)] = (10));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_46170 = [null,null,null,null,null,null,null,null];
(statearr_46170[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_46170[(1)] = (1));

return statearr_46170;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_46153){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46153);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46171){if((e46171 instanceof Object)){
var ex__45870__auto__ = e46171;
var statearr_46172_47632 = state_46153;
(statearr_46172_47632[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47633 = state_46153;
state_46153 = G__47633;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_46153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_46153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46173 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46173[(6)] = c__46042__auto___47603);

return statearr_46173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var process = (function (p__46174){
var vec__46175 = p__46174;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46175,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46175,(1),null);
var job = vec__46175;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46042__auto___47646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46182){
var state_val_46183 = (state_46182[(1)]);
if((state_val_46183 === (1))){
var state_46182__$1 = state_46182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46182__$1,(2),res,v);
} else {
if((state_val_46183 === (2))){
var inst_46179 = (state_46182[(2)]);
var inst_46180 = cljs.core.async.close_BANG_(res);
var state_46182__$1 = (function (){var statearr_46184 = state_46182;
(statearr_46184[(7)] = inst_46179);

return statearr_46184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46182__$1,inst_46180);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0 = (function (){
var statearr_46185 = [null,null,null,null,null,null,null,null];
(statearr_46185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__);

(statearr_46185[(1)] = (1));

return statearr_46185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1 = (function (state_46182){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46182);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46186){if((e46186 instanceof Object)){
var ex__45870__auto__ = e46186;
var statearr_46187_47653 = state_46182;
(statearr_46187_47653[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47654 = state_46182;
state_46182 = G__47654;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = function(state_46182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1.call(this,state_46182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46188 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46188[(6)] = c__46042__auto___47646);

return statearr_46188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46189){
var vec__46190 = p__46189;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46190,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46190,(1),null);
var job = vec__46190;
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
var n__4666__auto___47655 = n;
var __47656 = (0);
while(true){
if((__47656 < n__4666__auto___47655)){
var G__46193_47657 = type;
var G__46193_47658__$1 = (((G__46193_47657 instanceof cljs.core.Keyword))?G__46193_47657.fqn:null);
switch (G__46193_47658__$1) {
case "compute":
var c__46042__auto___47660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47656,c__46042__auto___47660,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async){
return (function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = ((function (__47656,c__46042__auto___47660,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async){
return (function (state_46206){
var state_val_46207 = (state_46206[(1)]);
if((state_val_46207 === (1))){
var state_46206__$1 = state_46206;
var statearr_46208_47661 = state_46206__$1;
(statearr_46208_47661[(2)] = null);

(statearr_46208_47661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (2))){
var state_46206__$1 = state_46206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46206__$1,(4),jobs);
} else {
if((state_val_46207 === (3))){
var inst_46204 = (state_46206[(2)]);
var state_46206__$1 = state_46206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46206__$1,inst_46204);
} else {
if((state_val_46207 === (4))){
var inst_46196 = (state_46206[(2)]);
var inst_46197 = process(inst_46196);
var state_46206__$1 = state_46206;
if(cljs.core.truth_(inst_46197)){
var statearr_46209_47662 = state_46206__$1;
(statearr_46209_47662[(1)] = (5));

} else {
var statearr_46210_47663 = state_46206__$1;
(statearr_46210_47663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (5))){
var state_46206__$1 = state_46206;
var statearr_46211_47664 = state_46206__$1;
(statearr_46211_47664[(2)] = null);

(statearr_46211_47664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (6))){
var state_46206__$1 = state_46206;
var statearr_46212_47665 = state_46206__$1;
(statearr_46212_47665[(2)] = null);

(statearr_46212_47665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (7))){
var inst_46202 = (state_46206[(2)]);
var state_46206__$1 = state_46206;
var statearr_46213_47666 = state_46206__$1;
(statearr_46213_47666[(2)] = inst_46202);

(statearr_46213_47666[(1)] = (3));


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
});})(__47656,c__46042__auto___47660,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async))
;
return ((function (__47656,switch__45866__auto__,c__46042__auto___47660,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0 = (function (){
var statearr_46214 = [null,null,null,null,null,null,null];
(statearr_46214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__);

(statearr_46214[(1)] = (1));

return statearr_46214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1 = (function (state_46206){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46206);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46215){if((e46215 instanceof Object)){
var ex__45870__auto__ = e46215;
var statearr_46216_47667 = state_46206;
(statearr_46216_47667[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47669 = state_46206;
state_46206 = G__47669;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = function(state_46206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1.call(this,state_46206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__;
})()
;})(__47656,switch__45866__auto__,c__46042__auto___47660,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async))
})();
var state__46044__auto__ = (function (){var statearr_46217 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46217[(6)] = c__46042__auto___47660);

return statearr_46217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
});})(__47656,c__46042__auto___47660,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async))
);


break;
case "async":
var c__46042__auto___47675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47656,c__46042__auto___47675,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async){
return (function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = ((function (__47656,c__46042__auto___47675,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async){
return (function (state_46230){
var state_val_46231 = (state_46230[(1)]);
if((state_val_46231 === (1))){
var state_46230__$1 = state_46230;
var statearr_46232_47676 = state_46230__$1;
(statearr_46232_47676[(2)] = null);

(statearr_46232_47676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (2))){
var state_46230__$1 = state_46230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46230__$1,(4),jobs);
} else {
if((state_val_46231 === (3))){
var inst_46228 = (state_46230[(2)]);
var state_46230__$1 = state_46230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46230__$1,inst_46228);
} else {
if((state_val_46231 === (4))){
var inst_46220 = (state_46230[(2)]);
var inst_46221 = async(inst_46220);
var state_46230__$1 = state_46230;
if(cljs.core.truth_(inst_46221)){
var statearr_46233_47679 = state_46230__$1;
(statearr_46233_47679[(1)] = (5));

} else {
var statearr_46234_47680 = state_46230__$1;
(statearr_46234_47680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (5))){
var state_46230__$1 = state_46230;
var statearr_46235_47681 = state_46230__$1;
(statearr_46235_47681[(2)] = null);

(statearr_46235_47681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (6))){
var state_46230__$1 = state_46230;
var statearr_46236_47683 = state_46230__$1;
(statearr_46236_47683[(2)] = null);

(statearr_46236_47683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46231 === (7))){
var inst_46226 = (state_46230[(2)]);
var state_46230__$1 = state_46230;
var statearr_46237_47684 = state_46230__$1;
(statearr_46237_47684[(2)] = inst_46226);

(statearr_46237_47684[(1)] = (3));


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
});})(__47656,c__46042__auto___47675,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async))
;
return ((function (__47656,switch__45866__auto__,c__46042__auto___47675,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0 = (function (){
var statearr_46238 = [null,null,null,null,null,null,null];
(statearr_46238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__);

(statearr_46238[(1)] = (1));

return statearr_46238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1 = (function (state_46230){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46230);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46239){if((e46239 instanceof Object)){
var ex__45870__auto__ = e46239;
var statearr_46240_47685 = state_46230;
(statearr_46240_47685[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47686 = state_46230;
state_46230 = G__47686;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = function(state_46230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1.call(this,state_46230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__;
})()
;})(__47656,switch__45866__auto__,c__46042__auto___47675,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async))
})();
var state__46044__auto__ = (function (){var statearr_46241 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46241[(6)] = c__46042__auto___47675);

return statearr_46241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
});})(__47656,c__46042__auto___47675,G__46193_47657,G__46193_47658__$1,n__4666__auto___47655,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46193_47658__$1)].join('')));

}

var G__47690 = (__47656 + (1));
__47656 = G__47690;
continue;
} else {
}
break;
}

var c__46042__auto___47691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46263){
var state_val_46264 = (state_46263[(1)]);
if((state_val_46264 === (7))){
var inst_46259 = (state_46263[(2)]);
var state_46263__$1 = state_46263;
var statearr_46265_47693 = state_46263__$1;
(statearr_46265_47693[(2)] = inst_46259);

(statearr_46265_47693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46264 === (1))){
var state_46263__$1 = state_46263;
var statearr_46266_47694 = state_46263__$1;
(statearr_46266_47694[(2)] = null);

(statearr_46266_47694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46264 === (4))){
var inst_46244 = (state_46263[(7)]);
var inst_46244__$1 = (state_46263[(2)]);
var inst_46245 = (inst_46244__$1 == null);
var state_46263__$1 = (function (){var statearr_46267 = state_46263;
(statearr_46267[(7)] = inst_46244__$1);

return statearr_46267;
})();
if(cljs.core.truth_(inst_46245)){
var statearr_46268_47696 = state_46263__$1;
(statearr_46268_47696[(1)] = (5));

} else {
var statearr_46269_47699 = state_46263__$1;
(statearr_46269_47699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46264 === (6))){
var inst_46249 = (state_46263[(8)]);
var inst_46244 = (state_46263[(7)]);
var inst_46249__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46251 = [inst_46244,inst_46249__$1];
var inst_46252 = (new cljs.core.PersistentVector(null,2,(5),inst_46250,inst_46251,null));
var state_46263__$1 = (function (){var statearr_46270 = state_46263;
(statearr_46270[(8)] = inst_46249__$1);

return statearr_46270;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46263__$1,(8),jobs,inst_46252);
} else {
if((state_val_46264 === (3))){
var inst_46261 = (state_46263[(2)]);
var state_46263__$1 = state_46263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46263__$1,inst_46261);
} else {
if((state_val_46264 === (2))){
var state_46263__$1 = state_46263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46263__$1,(4),from);
} else {
if((state_val_46264 === (9))){
var inst_46256 = (state_46263[(2)]);
var state_46263__$1 = (function (){var statearr_46271 = state_46263;
(statearr_46271[(9)] = inst_46256);

return statearr_46271;
})();
var statearr_46272_47702 = state_46263__$1;
(statearr_46272_47702[(2)] = null);

(statearr_46272_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46264 === (5))){
var inst_46247 = cljs.core.async.close_BANG_(jobs);
var state_46263__$1 = state_46263;
var statearr_46273_47704 = state_46263__$1;
(statearr_46273_47704[(2)] = inst_46247);

(statearr_46273_47704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46264 === (8))){
var inst_46249 = (state_46263[(8)]);
var inst_46254 = (state_46263[(2)]);
var state_46263__$1 = (function (){var statearr_46274 = state_46263;
(statearr_46274[(10)] = inst_46254);

return statearr_46274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46263__$1,(9),results,inst_46249);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0 = (function (){
var statearr_46275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__);

(statearr_46275[(1)] = (1));

return statearr_46275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1 = (function (state_46263){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46263);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46276){if((e46276 instanceof Object)){
var ex__45870__auto__ = e46276;
var statearr_46277_47705 = state_46263;
(statearr_46277_47705[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47706 = state_46263;
state_46263 = G__47706;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = function(state_46263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1.call(this,state_46263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46278 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46278[(6)] = c__46042__auto___47691);

return statearr_46278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


var c__46042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46316){
var state_val_46317 = (state_46316[(1)]);
if((state_val_46317 === (7))){
var inst_46312 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
var statearr_46318_47709 = state_46316__$1;
(statearr_46318_47709[(2)] = inst_46312);

(statearr_46318_47709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (20))){
var state_46316__$1 = state_46316;
var statearr_46319_47710 = state_46316__$1;
(statearr_46319_47710[(2)] = null);

(statearr_46319_47710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (1))){
var state_46316__$1 = state_46316;
var statearr_46320_47711 = state_46316__$1;
(statearr_46320_47711[(2)] = null);

(statearr_46320_47711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (4))){
var inst_46281 = (state_46316[(7)]);
var inst_46281__$1 = (state_46316[(2)]);
var inst_46282 = (inst_46281__$1 == null);
var state_46316__$1 = (function (){var statearr_46321 = state_46316;
(statearr_46321[(7)] = inst_46281__$1);

return statearr_46321;
})();
if(cljs.core.truth_(inst_46282)){
var statearr_46322_47712 = state_46316__$1;
(statearr_46322_47712[(1)] = (5));

} else {
var statearr_46323_47713 = state_46316__$1;
(statearr_46323_47713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (15))){
var inst_46294 = (state_46316[(8)]);
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46316__$1,(18),to,inst_46294);
} else {
if((state_val_46317 === (21))){
var inst_46307 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
var statearr_46324_47716 = state_46316__$1;
(statearr_46324_47716[(2)] = inst_46307);

(statearr_46324_47716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (13))){
var inst_46309 = (state_46316[(2)]);
var state_46316__$1 = (function (){var statearr_46325 = state_46316;
(statearr_46325[(9)] = inst_46309);

return statearr_46325;
})();
var statearr_46326_47717 = state_46316__$1;
(statearr_46326_47717[(2)] = null);

(statearr_46326_47717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (6))){
var inst_46281 = (state_46316[(7)]);
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46316__$1,(11),inst_46281);
} else {
if((state_val_46317 === (17))){
var inst_46302 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
if(cljs.core.truth_(inst_46302)){
var statearr_46327_47718 = state_46316__$1;
(statearr_46327_47718[(1)] = (19));

} else {
var statearr_46328_47719 = state_46316__$1;
(statearr_46328_47719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (3))){
var inst_46314 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46316__$1,inst_46314);
} else {
if((state_val_46317 === (12))){
var inst_46291 = (state_46316[(10)]);
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46316__$1,(14),inst_46291);
} else {
if((state_val_46317 === (2))){
var state_46316__$1 = state_46316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46316__$1,(4),results);
} else {
if((state_val_46317 === (19))){
var state_46316__$1 = state_46316;
var statearr_46329_47721 = state_46316__$1;
(statearr_46329_47721[(2)] = null);

(statearr_46329_47721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (11))){
var inst_46291 = (state_46316[(2)]);
var state_46316__$1 = (function (){var statearr_46330 = state_46316;
(statearr_46330[(10)] = inst_46291);

return statearr_46330;
})();
var statearr_46331_47723 = state_46316__$1;
(statearr_46331_47723[(2)] = null);

(statearr_46331_47723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (9))){
var state_46316__$1 = state_46316;
var statearr_46332_47724 = state_46316__$1;
(statearr_46332_47724[(2)] = null);

(statearr_46332_47724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (5))){
var state_46316__$1 = state_46316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46333_47725 = state_46316__$1;
(statearr_46333_47725[(1)] = (8));

} else {
var statearr_46334_47726 = state_46316__$1;
(statearr_46334_47726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (14))){
var inst_46294 = (state_46316[(8)]);
var inst_46294__$1 = (state_46316[(2)]);
var inst_46295 = (inst_46294__$1 == null);
var inst_46296 = cljs.core.not(inst_46295);
var state_46316__$1 = (function (){var statearr_46335 = state_46316;
(statearr_46335[(8)] = inst_46294__$1);

return statearr_46335;
})();
if(inst_46296){
var statearr_46336_47727 = state_46316__$1;
(statearr_46336_47727[(1)] = (15));

} else {
var statearr_46337_47728 = state_46316__$1;
(statearr_46337_47728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (16))){
var state_46316__$1 = state_46316;
var statearr_46338_47729 = state_46316__$1;
(statearr_46338_47729[(2)] = false);

(statearr_46338_47729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (10))){
var inst_46288 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
var statearr_46339_47730 = state_46316__$1;
(statearr_46339_47730[(2)] = inst_46288);

(statearr_46339_47730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (18))){
var inst_46299 = (state_46316[(2)]);
var state_46316__$1 = state_46316;
var statearr_46340_47731 = state_46316__$1;
(statearr_46340_47731[(2)] = inst_46299);

(statearr_46340_47731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46317 === (8))){
var inst_46285 = cljs.core.async.close_BANG_(to);
var state_46316__$1 = state_46316;
var statearr_46341_47732 = state_46316__$1;
(statearr_46341_47732[(2)] = inst_46285);

(statearr_46341_47732[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0 = (function (){
var statearr_46342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__);

(statearr_46342[(1)] = (1));

return statearr_46342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1 = (function (state_46316){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46316);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46343){if((e46343 instanceof Object)){
var ex__45870__auto__ = e46343;
var statearr_46344_47737 = state_46316;
(statearr_46344_47737[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47738 = state_46316;
state_46316 = G__47738;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__ = function(state_46316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1.call(this,state_46316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46345 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46345[(6)] = c__46042__auto__);

return statearr_46345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));

return c__46042__auto__;
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
var G__46347 = arguments.length;
switch (G__46347) {
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
var G__46349 = arguments.length;
switch (G__46349) {
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
var G__46351 = arguments.length;
switch (G__46351) {
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
var c__46042__auto___47752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46377){
var state_val_46378 = (state_46377[(1)]);
if((state_val_46378 === (7))){
var inst_46373 = (state_46377[(2)]);
var state_46377__$1 = state_46377;
var statearr_46379_47754 = state_46377__$1;
(statearr_46379_47754[(2)] = inst_46373);

(statearr_46379_47754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (1))){
var state_46377__$1 = state_46377;
var statearr_46380_47755 = state_46377__$1;
(statearr_46380_47755[(2)] = null);

(statearr_46380_47755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (4))){
var inst_46354 = (state_46377[(7)]);
var inst_46354__$1 = (state_46377[(2)]);
var inst_46355 = (inst_46354__$1 == null);
var state_46377__$1 = (function (){var statearr_46381 = state_46377;
(statearr_46381[(7)] = inst_46354__$1);

return statearr_46381;
})();
if(cljs.core.truth_(inst_46355)){
var statearr_46382_47756 = state_46377__$1;
(statearr_46382_47756[(1)] = (5));

} else {
var statearr_46383_47757 = state_46377__$1;
(statearr_46383_47757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (13))){
var state_46377__$1 = state_46377;
var statearr_46384_47758 = state_46377__$1;
(statearr_46384_47758[(2)] = null);

(statearr_46384_47758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (6))){
var inst_46354 = (state_46377[(7)]);
var inst_46360 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46354) : p.call(null,inst_46354));
var state_46377__$1 = state_46377;
if(cljs.core.truth_(inst_46360)){
var statearr_46385_47759 = state_46377__$1;
(statearr_46385_47759[(1)] = (9));

} else {
var statearr_46386_47760 = state_46377__$1;
(statearr_46386_47760[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (3))){
var inst_46375 = (state_46377[(2)]);
var state_46377__$1 = state_46377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46377__$1,inst_46375);
} else {
if((state_val_46378 === (12))){
var state_46377__$1 = state_46377;
var statearr_46387_47761 = state_46377__$1;
(statearr_46387_47761[(2)] = null);

(statearr_46387_47761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (2))){
var state_46377__$1 = state_46377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46377__$1,(4),ch);
} else {
if((state_val_46378 === (11))){
var inst_46354 = (state_46377[(7)]);
var inst_46364 = (state_46377[(2)]);
var state_46377__$1 = state_46377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46377__$1,(8),inst_46364,inst_46354);
} else {
if((state_val_46378 === (9))){
var state_46377__$1 = state_46377;
var statearr_46388_47762 = state_46377__$1;
(statearr_46388_47762[(2)] = tc);

(statearr_46388_47762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (5))){
var inst_46357 = cljs.core.async.close_BANG_(tc);
var inst_46358 = cljs.core.async.close_BANG_(fc);
var state_46377__$1 = (function (){var statearr_46389 = state_46377;
(statearr_46389[(8)] = inst_46357);

return statearr_46389;
})();
var statearr_46390_47767 = state_46377__$1;
(statearr_46390_47767[(2)] = inst_46358);

(statearr_46390_47767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (14))){
var inst_46371 = (state_46377[(2)]);
var state_46377__$1 = state_46377;
var statearr_46391_47768 = state_46377__$1;
(statearr_46391_47768[(2)] = inst_46371);

(statearr_46391_47768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (10))){
var state_46377__$1 = state_46377;
var statearr_46392_47772 = state_46377__$1;
(statearr_46392_47772[(2)] = fc);

(statearr_46392_47772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46378 === (8))){
var inst_46366 = (state_46377[(2)]);
var state_46377__$1 = state_46377;
if(cljs.core.truth_(inst_46366)){
var statearr_46393_47773 = state_46377__$1;
(statearr_46393_47773[(1)] = (12));

} else {
var statearr_46394_47774 = state_46377__$1;
(statearr_46394_47774[(1)] = (13));

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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_46395 = [null,null,null,null,null,null,null,null,null];
(statearr_46395[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_46395[(1)] = (1));

return statearr_46395;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_46377){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46377);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46396){if((e46396 instanceof Object)){
var ex__45870__auto__ = e46396;
var statearr_46397_47778 = state_46377;
(statearr_46397_47778[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47779 = state_46377;
state_46377 = G__47779;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_46377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_46377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46398 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46398[(6)] = c__46042__auto___47752);

return statearr_46398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var c__46042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46419){
var state_val_46420 = (state_46419[(1)]);
if((state_val_46420 === (7))){
var inst_46415 = (state_46419[(2)]);
var state_46419__$1 = state_46419;
var statearr_46421_47786 = state_46419__$1;
(statearr_46421_47786[(2)] = inst_46415);

(statearr_46421_47786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (1))){
var inst_46399 = init;
var state_46419__$1 = (function (){var statearr_46422 = state_46419;
(statearr_46422[(7)] = inst_46399);

return statearr_46422;
})();
var statearr_46423_47787 = state_46419__$1;
(statearr_46423_47787[(2)] = null);

(statearr_46423_47787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (4))){
var inst_46402 = (state_46419[(8)]);
var inst_46402__$1 = (state_46419[(2)]);
var inst_46403 = (inst_46402__$1 == null);
var state_46419__$1 = (function (){var statearr_46424 = state_46419;
(statearr_46424[(8)] = inst_46402__$1);

return statearr_46424;
})();
if(cljs.core.truth_(inst_46403)){
var statearr_46425_47789 = state_46419__$1;
(statearr_46425_47789[(1)] = (5));

} else {
var statearr_46426_47791 = state_46419__$1;
(statearr_46426_47791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (6))){
var inst_46406 = (state_46419[(9)]);
var inst_46399 = (state_46419[(7)]);
var inst_46402 = (state_46419[(8)]);
var inst_46406__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46399,inst_46402) : f.call(null,inst_46399,inst_46402));
var inst_46407 = cljs.core.reduced_QMARK_(inst_46406__$1);
var state_46419__$1 = (function (){var statearr_46427 = state_46419;
(statearr_46427[(9)] = inst_46406__$1);

return statearr_46427;
})();
if(inst_46407){
var statearr_46428_47792 = state_46419__$1;
(statearr_46428_47792[(1)] = (8));

} else {
var statearr_46429_47793 = state_46419__$1;
(statearr_46429_47793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (3))){
var inst_46417 = (state_46419[(2)]);
var state_46419__$1 = state_46419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46419__$1,inst_46417);
} else {
if((state_val_46420 === (2))){
var state_46419__$1 = state_46419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46419__$1,(4),ch);
} else {
if((state_val_46420 === (9))){
var inst_46406 = (state_46419[(9)]);
var inst_46399 = inst_46406;
var state_46419__$1 = (function (){var statearr_46430 = state_46419;
(statearr_46430[(7)] = inst_46399);

return statearr_46430;
})();
var statearr_46431_47794 = state_46419__$1;
(statearr_46431_47794[(2)] = null);

(statearr_46431_47794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (5))){
var inst_46399 = (state_46419[(7)]);
var state_46419__$1 = state_46419;
var statearr_46432_47798 = state_46419__$1;
(statearr_46432_47798[(2)] = inst_46399);

(statearr_46432_47798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (10))){
var inst_46413 = (state_46419[(2)]);
var state_46419__$1 = state_46419;
var statearr_46433_47799 = state_46419__$1;
(statearr_46433_47799[(2)] = inst_46413);

(statearr_46433_47799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46420 === (8))){
var inst_46406 = (state_46419[(9)]);
var inst_46409 = cljs.core.deref(inst_46406);
var state_46419__$1 = state_46419;
var statearr_46434_47800 = state_46419__$1;
(statearr_46434_47800[(2)] = inst_46409);

(statearr_46434_47800[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45867__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45867__auto____0 = (function (){
var statearr_46435 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46435[(0)] = cljs$core$async$reduce_$_state_machine__45867__auto__);

(statearr_46435[(1)] = (1));

return statearr_46435;
});
var cljs$core$async$reduce_$_state_machine__45867__auto____1 = (function (state_46419){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46419);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46436){if((e46436 instanceof Object)){
var ex__45870__auto__ = e46436;
var statearr_46437_47808 = state_46419;
(statearr_46437_47808[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47812 = state_46419;
state_46419 = G__47812;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45867__auto__ = function(state_46419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45867__auto____1.call(this,state_46419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45867__auto____0;
cljs$core$async$reduce_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45867__auto____1;
return cljs$core$async$reduce_$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46438 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46438[(6)] = c__46042__auto__);

return statearr_46438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));

return c__46042__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46444){
var state_val_46445 = (state_46444[(1)]);
if((state_val_46445 === (1))){
var inst_46439 = cljs.core.async.reduce(f__$1,init,ch);
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46444__$1,(2),inst_46439);
} else {
if((state_val_46445 === (2))){
var inst_46441 = (state_46444[(2)]);
var inst_46442 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46441) : f__$1.call(null,inst_46441));
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46444__$1,inst_46442);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45867__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45867__auto____0 = (function (){
var statearr_46446 = [null,null,null,null,null,null,null];
(statearr_46446[(0)] = cljs$core$async$transduce_$_state_machine__45867__auto__);

(statearr_46446[(1)] = (1));

return statearr_46446;
});
var cljs$core$async$transduce_$_state_machine__45867__auto____1 = (function (state_46444){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46444);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46447){if((e46447 instanceof Object)){
var ex__45870__auto__ = e46447;
var statearr_46448_47822 = state_46444;
(statearr_46448_47822[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47823 = state_46444;
state_46444 = G__47823;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45867__auto__ = function(state_46444){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45867__auto____1.call(this,state_46444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45867__auto____0;
cljs$core$async$transduce_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45867__auto____1;
return cljs$core$async$transduce_$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46449 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46449[(6)] = c__46042__auto__);

return statearr_46449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));

return c__46042__auto__;
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
var G__46451 = arguments.length;
switch (G__46451) {
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
var c__46042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46476){
var state_val_46477 = (state_46476[(1)]);
if((state_val_46477 === (7))){
var inst_46458 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
var statearr_46478_47835 = state_46476__$1;
(statearr_46478_47835[(2)] = inst_46458);

(statearr_46478_47835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (1))){
var inst_46452 = cljs.core.seq(coll);
var inst_46453 = inst_46452;
var state_46476__$1 = (function (){var statearr_46479 = state_46476;
(statearr_46479[(7)] = inst_46453);

return statearr_46479;
})();
var statearr_46480_47842 = state_46476__$1;
(statearr_46480_47842[(2)] = null);

(statearr_46480_47842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (4))){
var inst_46453 = (state_46476[(7)]);
var inst_46456 = cljs.core.first(inst_46453);
var state_46476__$1 = state_46476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46476__$1,(7),ch,inst_46456);
} else {
if((state_val_46477 === (13))){
var inst_46470 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
var statearr_46481_47846 = state_46476__$1;
(statearr_46481_47846[(2)] = inst_46470);

(statearr_46481_47846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (6))){
var inst_46461 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
if(cljs.core.truth_(inst_46461)){
var statearr_46482_47850 = state_46476__$1;
(statearr_46482_47850[(1)] = (8));

} else {
var statearr_46483_47851 = state_46476__$1;
(statearr_46483_47851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (3))){
var inst_46474 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46476__$1,inst_46474);
} else {
if((state_val_46477 === (12))){
var state_46476__$1 = state_46476;
var statearr_46484_47852 = state_46476__$1;
(statearr_46484_47852[(2)] = null);

(statearr_46484_47852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (2))){
var inst_46453 = (state_46476[(7)]);
var state_46476__$1 = state_46476;
if(cljs.core.truth_(inst_46453)){
var statearr_46485_47853 = state_46476__$1;
(statearr_46485_47853[(1)] = (4));

} else {
var statearr_46486_47857 = state_46476__$1;
(statearr_46486_47857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (11))){
var inst_46467 = cljs.core.async.close_BANG_(ch);
var state_46476__$1 = state_46476;
var statearr_46487_47861 = state_46476__$1;
(statearr_46487_47861[(2)] = inst_46467);

(statearr_46487_47861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (9))){
var state_46476__$1 = state_46476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46488_47862 = state_46476__$1;
(statearr_46488_47862[(1)] = (11));

} else {
var statearr_46489_47863 = state_46476__$1;
(statearr_46489_47863[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (5))){
var inst_46453 = (state_46476[(7)]);
var state_46476__$1 = state_46476;
var statearr_46490_47864 = state_46476__$1;
(statearr_46490_47864[(2)] = inst_46453);

(statearr_46490_47864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (10))){
var inst_46472 = (state_46476[(2)]);
var state_46476__$1 = state_46476;
var statearr_46491_47865 = state_46476__$1;
(statearr_46491_47865[(2)] = inst_46472);

(statearr_46491_47865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46477 === (8))){
var inst_46453 = (state_46476[(7)]);
var inst_46463 = cljs.core.next(inst_46453);
var inst_46453__$1 = inst_46463;
var state_46476__$1 = (function (){var statearr_46492 = state_46476;
(statearr_46492[(7)] = inst_46453__$1);

return statearr_46492;
})();
var statearr_46493_47867 = state_46476__$1;
(statearr_46493_47867[(2)] = null);

(statearr_46493_47867[(1)] = (2));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_46494 = [null,null,null,null,null,null,null,null];
(statearr_46494[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_46494[(1)] = (1));

return statearr_46494;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_46476){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46476);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46495){if((e46495 instanceof Object)){
var ex__45870__auto__ = e46495;
var statearr_46496_47868 = state_46476;
(statearr_46496_47868[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47869 = state_46476;
state_46476 = G__47869;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_46476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_46476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46497 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46497[(6)] = c__46042__auto__);

return statearr_46497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));

return c__46042__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46498 = (function (ch,cs,meta46499){
this.ch = ch;
this.cs = cs;
this.meta46499 = meta46499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46500,meta46499__$1){
var self__ = this;
var _46500__$1 = this;
return (new cljs.core.async.t_cljs$core$async46498(self__.ch,self__.cs,meta46499__$1));
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46500){
var self__ = this;
var _46500__$1 = this;
return self__.meta46499;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46499","meta46499",1931458690,null)], null);
}));

(cljs.core.async.t_cljs$core$async46498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46498");

(cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46498.
 */
cljs.core.async.__GT_t_cljs$core$async46498 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46498(ch__$1,cs__$1,meta46499){
return (new cljs.core.async.t_cljs$core$async46498(ch__$1,cs__$1,meta46499));
});

}

return (new cljs.core.async.t_cljs$core$async46498(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46042__auto___47879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46635){
var state_val_46636 = (state_46635[(1)]);
if((state_val_46636 === (7))){
var inst_46631 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46637_47882 = state_46635__$1;
(statearr_46637_47882[(2)] = inst_46631);

(statearr_46637_47882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (20))){
var inst_46534 = (state_46635[(7)]);
var inst_46546 = cljs.core.first(inst_46534);
var inst_46547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46546,(0),null);
var inst_46548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46546,(1),null);
var state_46635__$1 = (function (){var statearr_46638 = state_46635;
(statearr_46638[(8)] = inst_46547);

return statearr_46638;
})();
if(cljs.core.truth_(inst_46548)){
var statearr_46639_47883 = state_46635__$1;
(statearr_46639_47883[(1)] = (22));

} else {
var statearr_46640_47884 = state_46635__$1;
(statearr_46640_47884[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (27))){
var inst_46503 = (state_46635[(9)]);
var inst_46583 = (state_46635[(10)]);
var inst_46578 = (state_46635[(11)]);
var inst_46576 = (state_46635[(12)]);
var inst_46583__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46576,inst_46578);
var inst_46584 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46583__$1,inst_46503,done);
var state_46635__$1 = (function (){var statearr_46641 = state_46635;
(statearr_46641[(10)] = inst_46583__$1);

return statearr_46641;
})();
if(cljs.core.truth_(inst_46584)){
var statearr_46642_47885 = state_46635__$1;
(statearr_46642_47885[(1)] = (30));

} else {
var statearr_46643_47886 = state_46635__$1;
(statearr_46643_47886[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (1))){
var state_46635__$1 = state_46635;
var statearr_46644_47887 = state_46635__$1;
(statearr_46644_47887[(2)] = null);

(statearr_46644_47887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (24))){
var inst_46534 = (state_46635[(7)]);
var inst_46553 = (state_46635[(2)]);
var inst_46554 = cljs.core.next(inst_46534);
var inst_46512 = inst_46554;
var inst_46513 = null;
var inst_46514 = (0);
var inst_46515 = (0);
var state_46635__$1 = (function (){var statearr_46645 = state_46635;
(statearr_46645[(13)] = inst_46513);

(statearr_46645[(14)] = inst_46553);

(statearr_46645[(15)] = inst_46512);

(statearr_46645[(16)] = inst_46514);

(statearr_46645[(17)] = inst_46515);

return statearr_46645;
})();
var statearr_46646_47892 = state_46635__$1;
(statearr_46646_47892[(2)] = null);

(statearr_46646_47892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (39))){
var state_46635__$1 = state_46635;
var statearr_46650_47893 = state_46635__$1;
(statearr_46650_47893[(2)] = null);

(statearr_46650_47893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (4))){
var inst_46503 = (state_46635[(9)]);
var inst_46503__$1 = (state_46635[(2)]);
var inst_46504 = (inst_46503__$1 == null);
var state_46635__$1 = (function (){var statearr_46651 = state_46635;
(statearr_46651[(9)] = inst_46503__$1);

return statearr_46651;
})();
if(cljs.core.truth_(inst_46504)){
var statearr_46652_47898 = state_46635__$1;
(statearr_46652_47898[(1)] = (5));

} else {
var statearr_46653_47899 = state_46635__$1;
(statearr_46653_47899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (15))){
var inst_46513 = (state_46635[(13)]);
var inst_46512 = (state_46635[(15)]);
var inst_46514 = (state_46635[(16)]);
var inst_46515 = (state_46635[(17)]);
var inst_46530 = (state_46635[(2)]);
var inst_46531 = (inst_46515 + (1));
var tmp46647 = inst_46513;
var tmp46648 = inst_46512;
var tmp46649 = inst_46514;
var inst_46512__$1 = tmp46648;
var inst_46513__$1 = tmp46647;
var inst_46514__$1 = tmp46649;
var inst_46515__$1 = inst_46531;
var state_46635__$1 = (function (){var statearr_46654 = state_46635;
(statearr_46654[(13)] = inst_46513__$1);

(statearr_46654[(15)] = inst_46512__$1);

(statearr_46654[(18)] = inst_46530);

(statearr_46654[(16)] = inst_46514__$1);

(statearr_46654[(17)] = inst_46515__$1);

return statearr_46654;
})();
var statearr_46655_47907 = state_46635__$1;
(statearr_46655_47907[(2)] = null);

(statearr_46655_47907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (21))){
var inst_46557 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46659_47908 = state_46635__$1;
(statearr_46659_47908[(2)] = inst_46557);

(statearr_46659_47908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (31))){
var inst_46583 = (state_46635[(10)]);
var inst_46587 = done(null);
var inst_46588 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46583);
var state_46635__$1 = (function (){var statearr_46660 = state_46635;
(statearr_46660[(19)] = inst_46587);

return statearr_46660;
})();
var statearr_46661_47915 = state_46635__$1;
(statearr_46661_47915[(2)] = inst_46588);

(statearr_46661_47915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (32))){
var inst_46577 = (state_46635[(20)]);
var inst_46578 = (state_46635[(11)]);
var inst_46576 = (state_46635[(12)]);
var inst_46575 = (state_46635[(21)]);
var inst_46590 = (state_46635[(2)]);
var inst_46591 = (inst_46578 + (1));
var tmp46656 = inst_46577;
var tmp46657 = inst_46576;
var tmp46658 = inst_46575;
var inst_46575__$1 = tmp46658;
var inst_46576__$1 = tmp46657;
var inst_46577__$1 = tmp46656;
var inst_46578__$1 = inst_46591;
var state_46635__$1 = (function (){var statearr_46662 = state_46635;
(statearr_46662[(20)] = inst_46577__$1);

(statearr_46662[(11)] = inst_46578__$1);

(statearr_46662[(22)] = inst_46590);

(statearr_46662[(12)] = inst_46576__$1);

(statearr_46662[(21)] = inst_46575__$1);

return statearr_46662;
})();
var statearr_46663_47916 = state_46635__$1;
(statearr_46663_47916[(2)] = null);

(statearr_46663_47916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (40))){
var inst_46603 = (state_46635[(23)]);
var inst_46607 = done(null);
var inst_46608 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46603);
var state_46635__$1 = (function (){var statearr_46664 = state_46635;
(statearr_46664[(24)] = inst_46607);

return statearr_46664;
})();
var statearr_46665_47917 = state_46635__$1;
(statearr_46665_47917[(2)] = inst_46608);

(statearr_46665_47917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (33))){
var inst_46594 = (state_46635[(25)]);
var inst_46596 = cljs.core.chunked_seq_QMARK_(inst_46594);
var state_46635__$1 = state_46635;
if(inst_46596){
var statearr_46666_47918 = state_46635__$1;
(statearr_46666_47918[(1)] = (36));

} else {
var statearr_46667_47919 = state_46635__$1;
(statearr_46667_47919[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (13))){
var inst_46524 = (state_46635[(26)]);
var inst_46527 = cljs.core.async.close_BANG_(inst_46524);
var state_46635__$1 = state_46635;
var statearr_46668_47920 = state_46635__$1;
(statearr_46668_47920[(2)] = inst_46527);

(statearr_46668_47920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (22))){
var inst_46547 = (state_46635[(8)]);
var inst_46550 = cljs.core.async.close_BANG_(inst_46547);
var state_46635__$1 = state_46635;
var statearr_46669_47927 = state_46635__$1;
(statearr_46669_47927[(2)] = inst_46550);

(statearr_46669_47927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (36))){
var inst_46594 = (state_46635[(25)]);
var inst_46598 = cljs.core.chunk_first(inst_46594);
var inst_46599 = cljs.core.chunk_rest(inst_46594);
var inst_46600 = cljs.core.count(inst_46598);
var inst_46575 = inst_46599;
var inst_46576 = inst_46598;
var inst_46577 = inst_46600;
var inst_46578 = (0);
var state_46635__$1 = (function (){var statearr_46670 = state_46635;
(statearr_46670[(20)] = inst_46577);

(statearr_46670[(11)] = inst_46578);

(statearr_46670[(12)] = inst_46576);

(statearr_46670[(21)] = inst_46575);

return statearr_46670;
})();
var statearr_46671_47928 = state_46635__$1;
(statearr_46671_47928[(2)] = null);

(statearr_46671_47928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (41))){
var inst_46594 = (state_46635[(25)]);
var inst_46610 = (state_46635[(2)]);
var inst_46611 = cljs.core.next(inst_46594);
var inst_46575 = inst_46611;
var inst_46576 = null;
var inst_46577 = (0);
var inst_46578 = (0);
var state_46635__$1 = (function (){var statearr_46672 = state_46635;
(statearr_46672[(20)] = inst_46577);

(statearr_46672[(11)] = inst_46578);

(statearr_46672[(27)] = inst_46610);

(statearr_46672[(12)] = inst_46576);

(statearr_46672[(21)] = inst_46575);

return statearr_46672;
})();
var statearr_46673_47929 = state_46635__$1;
(statearr_46673_47929[(2)] = null);

(statearr_46673_47929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (43))){
var state_46635__$1 = state_46635;
var statearr_46674_47930 = state_46635__$1;
(statearr_46674_47930[(2)] = null);

(statearr_46674_47930[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (29))){
var inst_46619 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46675_47931 = state_46635__$1;
(statearr_46675_47931[(2)] = inst_46619);

(statearr_46675_47931[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (44))){
var inst_46628 = (state_46635[(2)]);
var state_46635__$1 = (function (){var statearr_46676 = state_46635;
(statearr_46676[(28)] = inst_46628);

return statearr_46676;
})();
var statearr_46677_47932 = state_46635__$1;
(statearr_46677_47932[(2)] = null);

(statearr_46677_47932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (6))){
var inst_46567 = (state_46635[(29)]);
var inst_46566 = cljs.core.deref(cs);
var inst_46567__$1 = cljs.core.keys(inst_46566);
var inst_46568 = cljs.core.count(inst_46567__$1);
var inst_46569 = cljs.core.reset_BANG_(dctr,inst_46568);
var inst_46574 = cljs.core.seq(inst_46567__$1);
var inst_46575 = inst_46574;
var inst_46576 = null;
var inst_46577 = (0);
var inst_46578 = (0);
var state_46635__$1 = (function (){var statearr_46678 = state_46635;
(statearr_46678[(20)] = inst_46577);

(statearr_46678[(30)] = inst_46569);

(statearr_46678[(11)] = inst_46578);

(statearr_46678[(12)] = inst_46576);

(statearr_46678[(29)] = inst_46567__$1);

(statearr_46678[(21)] = inst_46575);

return statearr_46678;
})();
var statearr_46679_47939 = state_46635__$1;
(statearr_46679_47939[(2)] = null);

(statearr_46679_47939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (28))){
var inst_46594 = (state_46635[(25)]);
var inst_46575 = (state_46635[(21)]);
var inst_46594__$1 = cljs.core.seq(inst_46575);
var state_46635__$1 = (function (){var statearr_46680 = state_46635;
(statearr_46680[(25)] = inst_46594__$1);

return statearr_46680;
})();
if(inst_46594__$1){
var statearr_46681_47940 = state_46635__$1;
(statearr_46681_47940[(1)] = (33));

} else {
var statearr_46682_47941 = state_46635__$1;
(statearr_46682_47941[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (25))){
var inst_46577 = (state_46635[(20)]);
var inst_46578 = (state_46635[(11)]);
var inst_46580 = (inst_46578 < inst_46577);
var inst_46581 = inst_46580;
var state_46635__$1 = state_46635;
if(cljs.core.truth_(inst_46581)){
var statearr_46683_47942 = state_46635__$1;
(statearr_46683_47942[(1)] = (27));

} else {
var statearr_46684_47943 = state_46635__$1;
(statearr_46684_47943[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (34))){
var state_46635__$1 = state_46635;
var statearr_46685_47944 = state_46635__$1;
(statearr_46685_47944[(2)] = null);

(statearr_46685_47944[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (17))){
var state_46635__$1 = state_46635;
var statearr_46686_47945 = state_46635__$1;
(statearr_46686_47945[(2)] = null);

(statearr_46686_47945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (3))){
var inst_46633 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46635__$1,inst_46633);
} else {
if((state_val_46636 === (12))){
var inst_46562 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46687_47946 = state_46635__$1;
(statearr_46687_47946[(2)] = inst_46562);

(statearr_46687_47946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (2))){
var state_46635__$1 = state_46635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46635__$1,(4),ch);
} else {
if((state_val_46636 === (23))){
var state_46635__$1 = state_46635;
var statearr_46688_47953 = state_46635__$1;
(statearr_46688_47953[(2)] = null);

(statearr_46688_47953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (35))){
var inst_46617 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46689_47954 = state_46635__$1;
(statearr_46689_47954[(2)] = inst_46617);

(statearr_46689_47954[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (19))){
var inst_46534 = (state_46635[(7)]);
var inst_46538 = cljs.core.chunk_first(inst_46534);
var inst_46539 = cljs.core.chunk_rest(inst_46534);
var inst_46540 = cljs.core.count(inst_46538);
var inst_46512 = inst_46539;
var inst_46513 = inst_46538;
var inst_46514 = inst_46540;
var inst_46515 = (0);
var state_46635__$1 = (function (){var statearr_46690 = state_46635;
(statearr_46690[(13)] = inst_46513);

(statearr_46690[(15)] = inst_46512);

(statearr_46690[(16)] = inst_46514);

(statearr_46690[(17)] = inst_46515);

return statearr_46690;
})();
var statearr_46691_47955 = state_46635__$1;
(statearr_46691_47955[(2)] = null);

(statearr_46691_47955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (11))){
var inst_46534 = (state_46635[(7)]);
var inst_46512 = (state_46635[(15)]);
var inst_46534__$1 = cljs.core.seq(inst_46512);
var state_46635__$1 = (function (){var statearr_46692 = state_46635;
(statearr_46692[(7)] = inst_46534__$1);

return statearr_46692;
})();
if(inst_46534__$1){
var statearr_46693_47956 = state_46635__$1;
(statearr_46693_47956[(1)] = (16));

} else {
var statearr_46694_47957 = state_46635__$1;
(statearr_46694_47957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (9))){
var inst_46564 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46695_47958 = state_46635__$1;
(statearr_46695_47958[(2)] = inst_46564);

(statearr_46695_47958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (5))){
var inst_46510 = cljs.core.deref(cs);
var inst_46511 = cljs.core.seq(inst_46510);
var inst_46512 = inst_46511;
var inst_46513 = null;
var inst_46514 = (0);
var inst_46515 = (0);
var state_46635__$1 = (function (){var statearr_46696 = state_46635;
(statearr_46696[(13)] = inst_46513);

(statearr_46696[(15)] = inst_46512);

(statearr_46696[(16)] = inst_46514);

(statearr_46696[(17)] = inst_46515);

return statearr_46696;
})();
var statearr_46697_47959 = state_46635__$1;
(statearr_46697_47959[(2)] = null);

(statearr_46697_47959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (14))){
var state_46635__$1 = state_46635;
var statearr_46698_47960 = state_46635__$1;
(statearr_46698_47960[(2)] = null);

(statearr_46698_47960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (45))){
var inst_46625 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46699_47961 = state_46635__$1;
(statearr_46699_47961[(2)] = inst_46625);

(statearr_46699_47961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (26))){
var inst_46567 = (state_46635[(29)]);
var inst_46621 = (state_46635[(2)]);
var inst_46622 = cljs.core.seq(inst_46567);
var state_46635__$1 = (function (){var statearr_46700 = state_46635;
(statearr_46700[(31)] = inst_46621);

return statearr_46700;
})();
if(inst_46622){
var statearr_46701_47962 = state_46635__$1;
(statearr_46701_47962[(1)] = (42));

} else {
var statearr_46702_47963 = state_46635__$1;
(statearr_46702_47963[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (16))){
var inst_46534 = (state_46635[(7)]);
var inst_46536 = cljs.core.chunked_seq_QMARK_(inst_46534);
var state_46635__$1 = state_46635;
if(inst_46536){
var statearr_46703_47964 = state_46635__$1;
(statearr_46703_47964[(1)] = (19));

} else {
var statearr_46704_47965 = state_46635__$1;
(statearr_46704_47965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (38))){
var inst_46614 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46705_47966 = state_46635__$1;
(statearr_46705_47966[(2)] = inst_46614);

(statearr_46705_47966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (30))){
var state_46635__$1 = state_46635;
var statearr_46706_47967 = state_46635__$1;
(statearr_46706_47967[(2)] = null);

(statearr_46706_47967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (10))){
var inst_46513 = (state_46635[(13)]);
var inst_46515 = (state_46635[(17)]);
var inst_46523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46513,inst_46515);
var inst_46524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46523,(0),null);
var inst_46525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46523,(1),null);
var state_46635__$1 = (function (){var statearr_46707 = state_46635;
(statearr_46707[(26)] = inst_46524);

return statearr_46707;
})();
if(cljs.core.truth_(inst_46525)){
var statearr_46708_47968 = state_46635__$1;
(statearr_46708_47968[(1)] = (13));

} else {
var statearr_46709_47969 = state_46635__$1;
(statearr_46709_47969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (18))){
var inst_46560 = (state_46635[(2)]);
var state_46635__$1 = state_46635;
var statearr_46710_47971 = state_46635__$1;
(statearr_46710_47971[(2)] = inst_46560);

(statearr_46710_47971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (42))){
var state_46635__$1 = state_46635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46635__$1,(45),dchan);
} else {
if((state_val_46636 === (37))){
var inst_46603 = (state_46635[(23)]);
var inst_46594 = (state_46635[(25)]);
var inst_46503 = (state_46635[(9)]);
var inst_46603__$1 = cljs.core.first(inst_46594);
var inst_46604 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46603__$1,inst_46503,done);
var state_46635__$1 = (function (){var statearr_46711 = state_46635;
(statearr_46711[(23)] = inst_46603__$1);

return statearr_46711;
})();
if(cljs.core.truth_(inst_46604)){
var statearr_46712_47973 = state_46635__$1;
(statearr_46712_47973[(1)] = (39));

} else {
var statearr_46713_47978 = state_46635__$1;
(statearr_46713_47978[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46636 === (8))){
var inst_46514 = (state_46635[(16)]);
var inst_46515 = (state_46635[(17)]);
var inst_46517 = (inst_46515 < inst_46514);
var inst_46518 = inst_46517;
var state_46635__$1 = state_46635;
if(cljs.core.truth_(inst_46518)){
var statearr_46714_47979 = state_46635__$1;
(statearr_46714_47979[(1)] = (10));

} else {
var statearr_46715_47980 = state_46635__$1;
(statearr_46715_47980[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45867__auto__ = null;
var cljs$core$async$mult_$_state_machine__45867__auto____0 = (function (){
var statearr_46716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46716[(0)] = cljs$core$async$mult_$_state_machine__45867__auto__);

(statearr_46716[(1)] = (1));

return statearr_46716;
});
var cljs$core$async$mult_$_state_machine__45867__auto____1 = (function (state_46635){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46635);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46717){if((e46717 instanceof Object)){
var ex__45870__auto__ = e46717;
var statearr_46718_47981 = state_46635;
(statearr_46718_47981[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47982 = state_46635;
state_46635 = G__47982;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45867__auto__ = function(state_46635){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45867__auto____1.call(this,state_46635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45867__auto____0;
cljs$core$async$mult_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45867__auto____1;
return cljs$core$async$mult_$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46719 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46719[(6)] = c__46042__auto___47879);

return statearr_46719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var G__46721 = arguments.length;
switch (G__46721) {
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
var len__4789__auto___47990 = arguments.length;
var i__4790__auto___47991 = (0);
while(true){
if((i__4790__auto___47991 < len__4789__auto___47990)){
args__4795__auto__.push((arguments[i__4790__auto___47991]));

var G__47992 = (i__4790__auto___47991 + (1));
i__4790__auto___47991 = G__47992;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46726){
var map__46727 = p__46726;
var map__46727__$1 = (((((!((map__46727 == null))))?(((((map__46727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46727):map__46727);
var opts = map__46727__$1;
var statearr_46729_47995 = state;
(statearr_46729_47995[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46730_47996 = state;
(statearr_46730_47996[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46731_47997 = state;
(statearr_46731_47997[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46722){
var G__46723 = cljs.core.first(seq46722);
var seq46722__$1 = cljs.core.next(seq46722);
var G__46724 = cljs.core.first(seq46722__$1);
var seq46722__$2 = cljs.core.next(seq46722__$1);
var G__46725 = cljs.core.first(seq46722__$2);
var seq46722__$3 = cljs.core.next(seq46722__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46723,G__46724,G__46725,seq46722__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46732 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46733){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46733 = meta46733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46734,meta46733__$1){
var self__ = this;
var _46734__$1 = this;
return (new cljs.core.async.t_cljs$core$async46732(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46733__$1));
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46734){
var self__ = this;
var _46734__$1 = this;
return self__.meta46733;
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46732.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46733","meta46733",1114849556,null)], null);
}));

(cljs.core.async.t_cljs$core$async46732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46732");

(cljs.core.async.t_cljs$core$async46732.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46732.
 */
cljs.core.async.__GT_t_cljs$core$async46732 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46732(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46733){
return (new cljs.core.async.t_cljs$core$async46732(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46733));
});

}

return (new cljs.core.async.t_cljs$core$async46732(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46042__auto___48003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46836){
var state_val_46837 = (state_46836[(1)]);
if((state_val_46837 === (7))){
var inst_46751 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46838_48004 = state_46836__$1;
(statearr_46838_48004[(2)] = inst_46751);

(statearr_46838_48004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (20))){
var inst_46763 = (state_46836[(7)]);
var state_46836__$1 = state_46836;
var statearr_46839_48009 = state_46836__$1;
(statearr_46839_48009[(2)] = inst_46763);

(statearr_46839_48009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (27))){
var state_46836__$1 = state_46836;
var statearr_46840_48013 = state_46836__$1;
(statearr_46840_48013[(2)] = null);

(statearr_46840_48013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (1))){
var inst_46738 = (state_46836[(8)]);
var inst_46738__$1 = calc_state();
var inst_46740 = (inst_46738__$1 == null);
var inst_46741 = cljs.core.not(inst_46740);
var state_46836__$1 = (function (){var statearr_46841 = state_46836;
(statearr_46841[(8)] = inst_46738__$1);

return statearr_46841;
})();
if(inst_46741){
var statearr_46842_48014 = state_46836__$1;
(statearr_46842_48014[(1)] = (2));

} else {
var statearr_46843_48015 = state_46836__$1;
(statearr_46843_48015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (24))){
var inst_46787 = (state_46836[(9)]);
var inst_46796 = (state_46836[(10)]);
var inst_46810 = (state_46836[(11)]);
var inst_46810__$1 = (inst_46787.cljs$core$IFn$_invoke$arity$1 ? inst_46787.cljs$core$IFn$_invoke$arity$1(inst_46796) : inst_46787.call(null,inst_46796));
var state_46836__$1 = (function (){var statearr_46844 = state_46836;
(statearr_46844[(11)] = inst_46810__$1);

return statearr_46844;
})();
if(cljs.core.truth_(inst_46810__$1)){
var statearr_46845_48019 = state_46836__$1;
(statearr_46845_48019[(1)] = (29));

} else {
var statearr_46846_48020 = state_46836__$1;
(statearr_46846_48020[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (4))){
var inst_46754 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46754)){
var statearr_46847_48024 = state_46836__$1;
(statearr_46847_48024[(1)] = (8));

} else {
var statearr_46848_48025 = state_46836__$1;
(statearr_46848_48025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (15))){
var inst_46781 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46781)){
var statearr_46849_48026 = state_46836__$1;
(statearr_46849_48026[(1)] = (19));

} else {
var statearr_46850_48027 = state_46836__$1;
(statearr_46850_48027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (21))){
var inst_46786 = (state_46836[(12)]);
var inst_46786__$1 = (state_46836[(2)]);
var inst_46787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46786__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46786__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46786__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46836__$1 = (function (){var statearr_46851 = state_46836;
(statearr_46851[(13)] = inst_46788);

(statearr_46851[(9)] = inst_46787);

(statearr_46851[(12)] = inst_46786__$1);

return statearr_46851;
})();
return cljs.core.async.ioc_alts_BANG_(state_46836__$1,(22),inst_46789);
} else {
if((state_val_46837 === (31))){
var inst_46818 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46818)){
var statearr_46852_48035 = state_46836__$1;
(statearr_46852_48035[(1)] = (32));

} else {
var statearr_46853_48036 = state_46836__$1;
(statearr_46853_48036[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (32))){
var inst_46795 = (state_46836[(14)]);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46836__$1,(35),out,inst_46795);
} else {
if((state_val_46837 === (33))){
var inst_46786 = (state_46836[(12)]);
var inst_46763 = inst_46786;
var state_46836__$1 = (function (){var statearr_46854 = state_46836;
(statearr_46854[(7)] = inst_46763);

return statearr_46854;
})();
var statearr_46855_48037 = state_46836__$1;
(statearr_46855_48037[(2)] = null);

(statearr_46855_48037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (13))){
var inst_46763 = (state_46836[(7)]);
var inst_46770 = inst_46763.cljs$lang$protocol_mask$partition0$;
var inst_46771 = (inst_46770 & (64));
var inst_46772 = inst_46763.cljs$core$ISeq$;
var inst_46773 = (cljs.core.PROTOCOL_SENTINEL === inst_46772);
var inst_46774 = ((inst_46771) || (inst_46773));
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46774)){
var statearr_46856_48038 = state_46836__$1;
(statearr_46856_48038[(1)] = (16));

} else {
var statearr_46857_48039 = state_46836__$1;
(statearr_46857_48039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (22))){
var inst_46796 = (state_46836[(10)]);
var inst_46795 = (state_46836[(14)]);
var inst_46794 = (state_46836[(2)]);
var inst_46795__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46794,(0),null);
var inst_46796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46794,(1),null);
var inst_46797 = (inst_46795__$1 == null);
var inst_46798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46796__$1,change);
var inst_46799 = ((inst_46797) || (inst_46798));
var state_46836__$1 = (function (){var statearr_46858 = state_46836;
(statearr_46858[(10)] = inst_46796__$1);

(statearr_46858[(14)] = inst_46795__$1);

return statearr_46858;
})();
if(cljs.core.truth_(inst_46799)){
var statearr_46859_48042 = state_46836__$1;
(statearr_46859_48042[(1)] = (23));

} else {
var statearr_46860_48043 = state_46836__$1;
(statearr_46860_48043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (36))){
var inst_46786 = (state_46836[(12)]);
var inst_46763 = inst_46786;
var state_46836__$1 = (function (){var statearr_46861 = state_46836;
(statearr_46861[(7)] = inst_46763);

return statearr_46861;
})();
var statearr_46862_48044 = state_46836__$1;
(statearr_46862_48044[(2)] = null);

(statearr_46862_48044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (29))){
var inst_46810 = (state_46836[(11)]);
var state_46836__$1 = state_46836;
var statearr_46863_48047 = state_46836__$1;
(statearr_46863_48047[(2)] = inst_46810);

(statearr_46863_48047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (6))){
var state_46836__$1 = state_46836;
var statearr_46864_48048 = state_46836__$1;
(statearr_46864_48048[(2)] = false);

(statearr_46864_48048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (28))){
var inst_46806 = (state_46836[(2)]);
var inst_46807 = calc_state();
var inst_46763 = inst_46807;
var state_46836__$1 = (function (){var statearr_46865 = state_46836;
(statearr_46865[(7)] = inst_46763);

(statearr_46865[(15)] = inst_46806);

return statearr_46865;
})();
var statearr_46866_48051 = state_46836__$1;
(statearr_46866_48051[(2)] = null);

(statearr_46866_48051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (25))){
var inst_46832 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46867_48052 = state_46836__$1;
(statearr_46867_48052[(2)] = inst_46832);

(statearr_46867_48052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (34))){
var inst_46830 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46868_48056 = state_46836__$1;
(statearr_46868_48056[(2)] = inst_46830);

(statearr_46868_48056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (17))){
var state_46836__$1 = state_46836;
var statearr_46869_48057 = state_46836__$1;
(statearr_46869_48057[(2)] = false);

(statearr_46869_48057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (3))){
var state_46836__$1 = state_46836;
var statearr_46870_48059 = state_46836__$1;
(statearr_46870_48059[(2)] = false);

(statearr_46870_48059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (12))){
var inst_46834 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46836__$1,inst_46834);
} else {
if((state_val_46837 === (2))){
var inst_46738 = (state_46836[(8)]);
var inst_46743 = inst_46738.cljs$lang$protocol_mask$partition0$;
var inst_46744 = (inst_46743 & (64));
var inst_46745 = inst_46738.cljs$core$ISeq$;
var inst_46746 = (cljs.core.PROTOCOL_SENTINEL === inst_46745);
var inst_46747 = ((inst_46744) || (inst_46746));
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46747)){
var statearr_46871_48062 = state_46836__$1;
(statearr_46871_48062[(1)] = (5));

} else {
var statearr_46872_48063 = state_46836__$1;
(statearr_46872_48063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (23))){
var inst_46795 = (state_46836[(14)]);
var inst_46801 = (inst_46795 == null);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46801)){
var statearr_46873_48064 = state_46836__$1;
(statearr_46873_48064[(1)] = (26));

} else {
var statearr_46874_48065 = state_46836__$1;
(statearr_46874_48065[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (35))){
var inst_46821 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46821)){
var statearr_46875_48066 = state_46836__$1;
(statearr_46875_48066[(1)] = (36));

} else {
var statearr_46876_48067 = state_46836__$1;
(statearr_46876_48067[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (19))){
var inst_46763 = (state_46836[(7)]);
var inst_46783 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46763);
var state_46836__$1 = state_46836;
var statearr_46877_48068 = state_46836__$1;
(statearr_46877_48068[(2)] = inst_46783);

(statearr_46877_48068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (11))){
var inst_46763 = (state_46836[(7)]);
var inst_46767 = (inst_46763 == null);
var inst_46768 = cljs.core.not(inst_46767);
var state_46836__$1 = state_46836;
if(inst_46768){
var statearr_46878_48069 = state_46836__$1;
(statearr_46878_48069[(1)] = (13));

} else {
var statearr_46879_48070 = state_46836__$1;
(statearr_46879_48070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (9))){
var inst_46738 = (state_46836[(8)]);
var state_46836__$1 = state_46836;
var statearr_46880_48071 = state_46836__$1;
(statearr_46880_48071[(2)] = inst_46738);

(statearr_46880_48071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (5))){
var state_46836__$1 = state_46836;
var statearr_46881_48072 = state_46836__$1;
(statearr_46881_48072[(2)] = true);

(statearr_46881_48072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (14))){
var state_46836__$1 = state_46836;
var statearr_46882_48073 = state_46836__$1;
(statearr_46882_48073[(2)] = false);

(statearr_46882_48073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (26))){
var inst_46796 = (state_46836[(10)]);
var inst_46803 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46796);
var state_46836__$1 = state_46836;
var statearr_46883_48075 = state_46836__$1;
(statearr_46883_48075[(2)] = inst_46803);

(statearr_46883_48075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (16))){
var state_46836__$1 = state_46836;
var statearr_46884_48079 = state_46836__$1;
(statearr_46884_48079[(2)] = true);

(statearr_46884_48079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (38))){
var inst_46826 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46885_48080 = state_46836__$1;
(statearr_46885_48080[(2)] = inst_46826);

(statearr_46885_48080[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (30))){
var inst_46788 = (state_46836[(13)]);
var inst_46787 = (state_46836[(9)]);
var inst_46796 = (state_46836[(10)]);
var inst_46813 = cljs.core.empty_QMARK_(inst_46787);
var inst_46814 = (inst_46788.cljs$core$IFn$_invoke$arity$1 ? inst_46788.cljs$core$IFn$_invoke$arity$1(inst_46796) : inst_46788.call(null,inst_46796));
var inst_46815 = cljs.core.not(inst_46814);
var inst_46816 = ((inst_46813) && (inst_46815));
var state_46836__$1 = state_46836;
var statearr_46886_48081 = state_46836__$1;
(statearr_46886_48081[(2)] = inst_46816);

(statearr_46886_48081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (10))){
var inst_46738 = (state_46836[(8)]);
var inst_46759 = (state_46836[(2)]);
var inst_46760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46759,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46759,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46759,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46763 = inst_46738;
var state_46836__$1 = (function (){var statearr_46887 = state_46836;
(statearr_46887[(16)] = inst_46761);

(statearr_46887[(17)] = inst_46762);

(statearr_46887[(7)] = inst_46763);

(statearr_46887[(18)] = inst_46760);

return statearr_46887;
})();
var statearr_46888_48082 = state_46836__$1;
(statearr_46888_48082[(2)] = null);

(statearr_46888_48082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (18))){
var inst_46778 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46889_48087 = state_46836__$1;
(statearr_46889_48087[(2)] = inst_46778);

(statearr_46889_48087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (37))){
var state_46836__$1 = state_46836;
var statearr_46890_48088 = state_46836__$1;
(statearr_46890_48088[(2)] = null);

(statearr_46890_48088[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (8))){
var inst_46738 = (state_46836[(8)]);
var inst_46756 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46738);
var state_46836__$1 = state_46836;
var statearr_46891_48090 = state_46836__$1;
(statearr_46891_48090[(2)] = inst_46756);

(statearr_46891_48090[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__45867__auto__ = null;
var cljs$core$async$mix_$_state_machine__45867__auto____0 = (function (){
var statearr_46892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46892[(0)] = cljs$core$async$mix_$_state_machine__45867__auto__);

(statearr_46892[(1)] = (1));

return statearr_46892;
});
var cljs$core$async$mix_$_state_machine__45867__auto____1 = (function (state_46836){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46836);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e46893){if((e46893 instanceof Object)){
var ex__45870__auto__ = e46893;
var statearr_46894_48091 = state_46836;
(statearr_46894_48091[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48093 = state_46836;
state_46836 = G__48093;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45867__auto__ = function(state_46836){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45867__auto____1.call(this,state_46836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45867__auto____0;
cljs$core$async$mix_$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45867__auto____1;
return cljs$core$async$mix_$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_46895 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_46895[(6)] = c__46042__auto___48003);

return statearr_46895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var G__46897 = arguments.length;
switch (G__46897) {
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
var G__46900 = arguments.length;
switch (G__46900) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46898_SHARP_){
if(cljs.core.truth_((p1__46898_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46898_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46898_SHARP_.call(null,topic)))){
return p1__46898_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46898_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46901 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46902){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46902 = meta46902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46903,meta46902__$1){
var self__ = this;
var _46903__$1 = this;
return (new cljs.core.async.t_cljs$core$async46901(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46902__$1));
}));

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46903){
var self__ = this;
var _46903__$1 = this;
return self__.meta46902;
}));

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46902","meta46902",1654432605,null)], null);
}));

(cljs.core.async.t_cljs$core$async46901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46901");

(cljs.core.async.t_cljs$core$async46901.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46901.
 */
cljs.core.async.__GT_t_cljs$core$async46901 = (function cljs$core$async$__GT_t_cljs$core$async46901(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46902){
return (new cljs.core.async.t_cljs$core$async46901(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46902));
});

}

return (new cljs.core.async.t_cljs$core$async46901(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46042__auto___48109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_46975){
var state_val_46976 = (state_46975[(1)]);
if((state_val_46976 === (7))){
var inst_46971 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
var statearr_46977_48110 = state_46975__$1;
(statearr_46977_48110[(2)] = inst_46971);

(statearr_46977_48110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (20))){
var state_46975__$1 = state_46975;
var statearr_46978_48112 = state_46975__$1;
(statearr_46978_48112[(2)] = null);

(statearr_46978_48112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (1))){
var state_46975__$1 = state_46975;
var statearr_46979_48113 = state_46975__$1;
(statearr_46979_48113[(2)] = null);

(statearr_46979_48113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (24))){
var inst_46954 = (state_46975[(7)]);
var inst_46963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46954);
var state_46975__$1 = state_46975;
var statearr_46980_48115 = state_46975__$1;
(statearr_46980_48115[(2)] = inst_46963);

(statearr_46980_48115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (4))){
var inst_46906 = (state_46975[(8)]);
var inst_46906__$1 = (state_46975[(2)]);
var inst_46907 = (inst_46906__$1 == null);
var state_46975__$1 = (function (){var statearr_46981 = state_46975;
(statearr_46981[(8)] = inst_46906__$1);

return statearr_46981;
})();
if(cljs.core.truth_(inst_46907)){
var statearr_46982_48116 = state_46975__$1;
(statearr_46982_48116[(1)] = (5));

} else {
var statearr_46983_48117 = state_46975__$1;
(statearr_46983_48117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (15))){
var inst_46948 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
var statearr_46984_48119 = state_46975__$1;
(statearr_46984_48119[(2)] = inst_46948);

(statearr_46984_48119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (21))){
var inst_46968 = (state_46975[(2)]);
var state_46975__$1 = (function (){var statearr_46985 = state_46975;
(statearr_46985[(9)] = inst_46968);

return statearr_46985;
})();
var statearr_46986_48124 = state_46975__$1;
(statearr_46986_48124[(2)] = null);

(statearr_46986_48124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (13))){
var inst_46930 = (state_46975[(10)]);
var inst_46932 = cljs.core.chunked_seq_QMARK_(inst_46930);
var state_46975__$1 = state_46975;
if(inst_46932){
var statearr_46987_48126 = state_46975__$1;
(statearr_46987_48126[(1)] = (16));

} else {
var statearr_46988_48127 = state_46975__$1;
(statearr_46988_48127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (22))){
var inst_46960 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
if(cljs.core.truth_(inst_46960)){
var statearr_46989_48128 = state_46975__$1;
(statearr_46989_48128[(1)] = (23));

} else {
var statearr_46990_48129 = state_46975__$1;
(statearr_46990_48129[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (6))){
var inst_46906 = (state_46975[(8)]);
var inst_46954 = (state_46975[(7)]);
var inst_46956 = (state_46975[(11)]);
var inst_46954__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46906) : topic_fn.call(null,inst_46906));
var inst_46955 = cljs.core.deref(mults);
var inst_46956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46955,inst_46954__$1);
var state_46975__$1 = (function (){var statearr_46991 = state_46975;
(statearr_46991[(7)] = inst_46954__$1);

(statearr_46991[(11)] = inst_46956__$1);

return statearr_46991;
})();
if(cljs.core.truth_(inst_46956__$1)){
var statearr_46992_48130 = state_46975__$1;
(statearr_46992_48130[(1)] = (19));

} else {
var statearr_46993_48131 = state_46975__$1;
(statearr_46993_48131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (25))){
var inst_46965 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
var statearr_46994_48133 = state_46975__$1;
(statearr_46994_48133[(2)] = inst_46965);

(statearr_46994_48133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (17))){
var inst_46930 = (state_46975[(10)]);
var inst_46939 = cljs.core.first(inst_46930);
var inst_46940 = cljs.core.async.muxch_STAR_(inst_46939);
var inst_46941 = cljs.core.async.close_BANG_(inst_46940);
var inst_46942 = cljs.core.next(inst_46930);
var inst_46916 = inst_46942;
var inst_46917 = null;
var inst_46918 = (0);
var inst_46919 = (0);
var state_46975__$1 = (function (){var statearr_46995 = state_46975;
(statearr_46995[(12)] = inst_46941);

(statearr_46995[(13)] = inst_46919);

(statearr_46995[(14)] = inst_46918);

(statearr_46995[(15)] = inst_46917);

(statearr_46995[(16)] = inst_46916);

return statearr_46995;
})();
var statearr_46996_48135 = state_46975__$1;
(statearr_46996_48135[(2)] = null);

(statearr_46996_48135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (3))){
var inst_46973 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46975__$1,inst_46973);
} else {
if((state_val_46976 === (12))){
var inst_46950 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
var statearr_46997_48139 = state_46975__$1;
(statearr_46997_48139[(2)] = inst_46950);

(statearr_46997_48139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (2))){
var state_46975__$1 = state_46975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46975__$1,(4),ch);
} else {
if((state_val_46976 === (23))){
var state_46975__$1 = state_46975;
var statearr_46998_48140 = state_46975__$1;
(statearr_46998_48140[(2)] = null);

(statearr_46998_48140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (19))){
var inst_46906 = (state_46975[(8)]);
var inst_46956 = (state_46975[(11)]);
var inst_46958 = cljs.core.async.muxch_STAR_(inst_46956);
var state_46975__$1 = state_46975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46975__$1,(22),inst_46958,inst_46906);
} else {
if((state_val_46976 === (11))){
var inst_46930 = (state_46975[(10)]);
var inst_46916 = (state_46975[(16)]);
var inst_46930__$1 = cljs.core.seq(inst_46916);
var state_46975__$1 = (function (){var statearr_46999 = state_46975;
(statearr_46999[(10)] = inst_46930__$1);

return statearr_46999;
})();
if(inst_46930__$1){
var statearr_47000_48141 = state_46975__$1;
(statearr_47000_48141[(1)] = (13));

} else {
var statearr_47001_48142 = state_46975__$1;
(statearr_47001_48142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (9))){
var inst_46952 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
var statearr_47002_48143 = state_46975__$1;
(statearr_47002_48143[(2)] = inst_46952);

(statearr_47002_48143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (5))){
var inst_46913 = cljs.core.deref(mults);
var inst_46914 = cljs.core.vals(inst_46913);
var inst_46915 = cljs.core.seq(inst_46914);
var inst_46916 = inst_46915;
var inst_46917 = null;
var inst_46918 = (0);
var inst_46919 = (0);
var state_46975__$1 = (function (){var statearr_47003 = state_46975;
(statearr_47003[(13)] = inst_46919);

(statearr_47003[(14)] = inst_46918);

(statearr_47003[(15)] = inst_46917);

(statearr_47003[(16)] = inst_46916);

return statearr_47003;
})();
var statearr_47004_48144 = state_46975__$1;
(statearr_47004_48144[(2)] = null);

(statearr_47004_48144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (14))){
var state_46975__$1 = state_46975;
var statearr_47008_48145 = state_46975__$1;
(statearr_47008_48145[(2)] = null);

(statearr_47008_48145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (16))){
var inst_46930 = (state_46975[(10)]);
var inst_46934 = cljs.core.chunk_first(inst_46930);
var inst_46935 = cljs.core.chunk_rest(inst_46930);
var inst_46936 = cljs.core.count(inst_46934);
var inst_46916 = inst_46935;
var inst_46917 = inst_46934;
var inst_46918 = inst_46936;
var inst_46919 = (0);
var state_46975__$1 = (function (){var statearr_47009 = state_46975;
(statearr_47009[(13)] = inst_46919);

(statearr_47009[(14)] = inst_46918);

(statearr_47009[(15)] = inst_46917);

(statearr_47009[(16)] = inst_46916);

return statearr_47009;
})();
var statearr_47010_48147 = state_46975__$1;
(statearr_47010_48147[(2)] = null);

(statearr_47010_48147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (10))){
var inst_46919 = (state_46975[(13)]);
var inst_46918 = (state_46975[(14)]);
var inst_46917 = (state_46975[(15)]);
var inst_46916 = (state_46975[(16)]);
var inst_46924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46917,inst_46919);
var inst_46925 = cljs.core.async.muxch_STAR_(inst_46924);
var inst_46926 = cljs.core.async.close_BANG_(inst_46925);
var inst_46927 = (inst_46919 + (1));
var tmp47005 = inst_46918;
var tmp47006 = inst_46917;
var tmp47007 = inst_46916;
var inst_46916__$1 = tmp47007;
var inst_46917__$1 = tmp47006;
var inst_46918__$1 = tmp47005;
var inst_46919__$1 = inst_46927;
var state_46975__$1 = (function (){var statearr_47011 = state_46975;
(statearr_47011[(13)] = inst_46919__$1);

(statearr_47011[(14)] = inst_46918__$1);

(statearr_47011[(15)] = inst_46917__$1);

(statearr_47011[(17)] = inst_46926);

(statearr_47011[(16)] = inst_46916__$1);

return statearr_47011;
})();
var statearr_47012_48148 = state_46975__$1;
(statearr_47012_48148[(2)] = null);

(statearr_47012_48148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (18))){
var inst_46945 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
var statearr_47013_48149 = state_46975__$1;
(statearr_47013_48149[(2)] = inst_46945);

(statearr_47013_48149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46976 === (8))){
var inst_46919 = (state_46975[(13)]);
var inst_46918 = (state_46975[(14)]);
var inst_46921 = (inst_46919 < inst_46918);
var inst_46922 = inst_46921;
var state_46975__$1 = state_46975;
if(cljs.core.truth_(inst_46922)){
var statearr_47014_48155 = state_46975__$1;
(statearr_47014_48155[(1)] = (10));

} else {
var statearr_47015_48156 = state_46975__$1;
(statearr_47015_48156[(1)] = (11));

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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47016[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47016[(1)] = (1));

return statearr_47016;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_46975){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_46975);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47017){if((e47017 instanceof Object)){
var ex__45870__auto__ = e47017;
var statearr_47018_48159 = state_46975;
(statearr_47018_48159[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48160 = state_46975;
state_46975 = G__48160;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_46975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_46975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47019 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47019[(6)] = c__46042__auto___48109);

return statearr_47019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var G__47021 = arguments.length;
switch (G__47021) {
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
var G__47023 = arguments.length;
switch (G__47023) {
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
var G__47025 = arguments.length;
switch (G__47025) {
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
var c__46042__auto___48166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47064){
var state_val_47065 = (state_47064[(1)]);
if((state_val_47065 === (7))){
var state_47064__$1 = state_47064;
var statearr_47066_48167 = state_47064__$1;
(statearr_47066_48167[(2)] = null);

(statearr_47066_48167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (1))){
var state_47064__$1 = state_47064;
var statearr_47067_48168 = state_47064__$1;
(statearr_47067_48168[(2)] = null);

(statearr_47067_48168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (4))){
var inst_47028 = (state_47064[(7)]);
var inst_47030 = (inst_47028 < cnt);
var state_47064__$1 = state_47064;
if(cljs.core.truth_(inst_47030)){
var statearr_47068_48169 = state_47064__$1;
(statearr_47068_48169[(1)] = (6));

} else {
var statearr_47069_48170 = state_47064__$1;
(statearr_47069_48170[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (15))){
var inst_47060 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
var statearr_47070_48171 = state_47064__$1;
(statearr_47070_48171[(2)] = inst_47060);

(statearr_47070_48171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (13))){
var inst_47053 = cljs.core.async.close_BANG_(out);
var state_47064__$1 = state_47064;
var statearr_47071_48172 = state_47064__$1;
(statearr_47071_48172[(2)] = inst_47053);

(statearr_47071_48172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (6))){
var state_47064__$1 = state_47064;
var statearr_47072_48173 = state_47064__$1;
(statearr_47072_48173[(2)] = null);

(statearr_47072_48173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (3))){
var inst_47062 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47064__$1,inst_47062);
} else {
if((state_val_47065 === (12))){
var inst_47050 = (state_47064[(8)]);
var inst_47050__$1 = (state_47064[(2)]);
var inst_47051 = cljs.core.some(cljs.core.nil_QMARK_,inst_47050__$1);
var state_47064__$1 = (function (){var statearr_47073 = state_47064;
(statearr_47073[(8)] = inst_47050__$1);

return statearr_47073;
})();
if(cljs.core.truth_(inst_47051)){
var statearr_47074_48174 = state_47064__$1;
(statearr_47074_48174[(1)] = (13));

} else {
var statearr_47075_48179 = state_47064__$1;
(statearr_47075_48179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (2))){
var inst_47027 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47028 = (0);
var state_47064__$1 = (function (){var statearr_47076 = state_47064;
(statearr_47076[(7)] = inst_47028);

(statearr_47076[(9)] = inst_47027);

return statearr_47076;
})();
var statearr_47077_48180 = state_47064__$1;
(statearr_47077_48180[(2)] = null);

(statearr_47077_48180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (11))){
var inst_47028 = (state_47064[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47064,(10),Object,null,(9));
var inst_47037 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47028) : chs__$1.call(null,inst_47028));
var inst_47038 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47028) : done.call(null,inst_47028));
var inst_47039 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47037,inst_47038);
var state_47064__$1 = state_47064;
var statearr_47078_48185 = state_47064__$1;
(statearr_47078_48185[(2)] = inst_47039);


cljs.core.async.impl.ioc_helpers.process_exception(state_47064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (9))){
var inst_47028 = (state_47064[(7)]);
var inst_47041 = (state_47064[(2)]);
var inst_47042 = (inst_47028 + (1));
var inst_47028__$1 = inst_47042;
var state_47064__$1 = (function (){var statearr_47079 = state_47064;
(statearr_47079[(10)] = inst_47041);

(statearr_47079[(7)] = inst_47028__$1);

return statearr_47079;
})();
var statearr_47080_48188 = state_47064__$1;
(statearr_47080_48188[(2)] = null);

(statearr_47080_48188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (5))){
var inst_47048 = (state_47064[(2)]);
var state_47064__$1 = (function (){var statearr_47081 = state_47064;
(statearr_47081[(11)] = inst_47048);

return statearr_47081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47064__$1,(12),dchan);
} else {
if((state_val_47065 === (14))){
var inst_47050 = (state_47064[(8)]);
var inst_47055 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47050);
var state_47064__$1 = state_47064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47064__$1,(16),out,inst_47055);
} else {
if((state_val_47065 === (16))){
var inst_47057 = (state_47064[(2)]);
var state_47064__$1 = (function (){var statearr_47082 = state_47064;
(statearr_47082[(12)] = inst_47057);

return statearr_47082;
})();
var statearr_47083_48189 = state_47064__$1;
(statearr_47083_48189[(2)] = null);

(statearr_47083_48189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (10))){
var inst_47032 = (state_47064[(2)]);
var inst_47033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47064__$1 = (function (){var statearr_47084 = state_47064;
(statearr_47084[(13)] = inst_47032);

return statearr_47084;
})();
var statearr_47085_48190 = state_47064__$1;
(statearr_47085_48190[(2)] = inst_47033);


cljs.core.async.impl.ioc_helpers.process_exception(state_47064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (8))){
var inst_47046 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
var statearr_47086_48191 = state_47064__$1;
(statearr_47086_48191[(2)] = inst_47046);

(statearr_47086_48191[(1)] = (5));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47087[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47087[(1)] = (1));

return statearr_47087;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47064){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47064);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47088){if((e47088 instanceof Object)){
var ex__45870__auto__ = e47088;
var statearr_47089_48192 = state_47064;
(statearr_47089_48192[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48195 = state_47064;
state_47064 = G__48195;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47090 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47090[(6)] = c__46042__auto___48166);

return statearr_47090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var G__47093 = arguments.length;
switch (G__47093) {
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
var c__46042__auto___48199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47125){
var state_val_47126 = (state_47125[(1)]);
if((state_val_47126 === (7))){
var inst_47104 = (state_47125[(7)]);
var inst_47105 = (state_47125[(8)]);
var inst_47104__$1 = (state_47125[(2)]);
var inst_47105__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47104__$1,(0),null);
var inst_47106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47104__$1,(1),null);
var inst_47107 = (inst_47105__$1 == null);
var state_47125__$1 = (function (){var statearr_47127 = state_47125;
(statearr_47127[(9)] = inst_47106);

(statearr_47127[(7)] = inst_47104__$1);

(statearr_47127[(8)] = inst_47105__$1);

return statearr_47127;
})();
if(cljs.core.truth_(inst_47107)){
var statearr_47128_48200 = state_47125__$1;
(statearr_47128_48200[(1)] = (8));

} else {
var statearr_47129_48201 = state_47125__$1;
(statearr_47129_48201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (1))){
var inst_47094 = cljs.core.vec(chs);
var inst_47095 = inst_47094;
var state_47125__$1 = (function (){var statearr_47130 = state_47125;
(statearr_47130[(10)] = inst_47095);

return statearr_47130;
})();
var statearr_47131_48202 = state_47125__$1;
(statearr_47131_48202[(2)] = null);

(statearr_47131_48202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (4))){
var inst_47095 = (state_47125[(10)]);
var state_47125__$1 = state_47125;
return cljs.core.async.ioc_alts_BANG_(state_47125__$1,(7),inst_47095);
} else {
if((state_val_47126 === (6))){
var inst_47121 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
var statearr_47132_48204 = state_47125__$1;
(statearr_47132_48204[(2)] = inst_47121);

(statearr_47132_48204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (3))){
var inst_47123 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47125__$1,inst_47123);
} else {
if((state_val_47126 === (2))){
var inst_47095 = (state_47125[(10)]);
var inst_47097 = cljs.core.count(inst_47095);
var inst_47098 = (inst_47097 > (0));
var state_47125__$1 = state_47125;
if(cljs.core.truth_(inst_47098)){
var statearr_47134_48205 = state_47125__$1;
(statearr_47134_48205[(1)] = (4));

} else {
var statearr_47135_48206 = state_47125__$1;
(statearr_47135_48206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (11))){
var inst_47095 = (state_47125[(10)]);
var inst_47114 = (state_47125[(2)]);
var tmp47133 = inst_47095;
var inst_47095__$1 = tmp47133;
var state_47125__$1 = (function (){var statearr_47136 = state_47125;
(statearr_47136[(11)] = inst_47114);

(statearr_47136[(10)] = inst_47095__$1);

return statearr_47136;
})();
var statearr_47137_48207 = state_47125__$1;
(statearr_47137_48207[(2)] = null);

(statearr_47137_48207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (9))){
var inst_47105 = (state_47125[(8)]);
var state_47125__$1 = state_47125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47125__$1,(11),out,inst_47105);
} else {
if((state_val_47126 === (5))){
var inst_47119 = cljs.core.async.close_BANG_(out);
var state_47125__$1 = state_47125;
var statearr_47138_48208 = state_47125__$1;
(statearr_47138_48208[(2)] = inst_47119);

(statearr_47138_48208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (10))){
var inst_47117 = (state_47125[(2)]);
var state_47125__$1 = state_47125;
var statearr_47139_48210 = state_47125__$1;
(statearr_47139_48210[(2)] = inst_47117);

(statearr_47139_48210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47126 === (8))){
var inst_47095 = (state_47125[(10)]);
var inst_47106 = (state_47125[(9)]);
var inst_47104 = (state_47125[(7)]);
var inst_47105 = (state_47125[(8)]);
var inst_47109 = (function (){var cs = inst_47095;
var vec__47100 = inst_47104;
var v = inst_47105;
var c = inst_47106;
return (function (p1__47091_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47091_SHARP_);
});
})();
var inst_47110 = cljs.core.filterv(inst_47109,inst_47095);
var inst_47095__$1 = inst_47110;
var state_47125__$1 = (function (){var statearr_47140 = state_47125;
(statearr_47140[(10)] = inst_47095__$1);

return statearr_47140;
})();
var statearr_47141_48212 = state_47125__$1;
(statearr_47141_48212[(2)] = null);

(statearr_47141_48212[(1)] = (2));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47142[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47142[(1)] = (1));

return statearr_47142;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47125){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47125);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47143){if((e47143 instanceof Object)){
var ex__45870__auto__ = e47143;
var statearr_47144_48216 = state_47125;
(statearr_47144_48216[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48217 = state_47125;
state_47125 = G__48217;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47145 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47145[(6)] = c__46042__auto___48199);

return statearr_47145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
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
var G__47147 = arguments.length;
switch (G__47147) {
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
var c__46042__auto___48226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47171){
var state_val_47172 = (state_47171[(1)]);
if((state_val_47172 === (7))){
var inst_47153 = (state_47171[(7)]);
var inst_47153__$1 = (state_47171[(2)]);
var inst_47154 = (inst_47153__$1 == null);
var inst_47155 = cljs.core.not(inst_47154);
var state_47171__$1 = (function (){var statearr_47173 = state_47171;
(statearr_47173[(7)] = inst_47153__$1);

return statearr_47173;
})();
if(inst_47155){
var statearr_47174_48230 = state_47171__$1;
(statearr_47174_48230[(1)] = (8));

} else {
var statearr_47175_48231 = state_47171__$1;
(statearr_47175_48231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (1))){
var inst_47148 = (0);
var state_47171__$1 = (function (){var statearr_47176 = state_47171;
(statearr_47176[(8)] = inst_47148);

return statearr_47176;
})();
var statearr_47177_48232 = state_47171__$1;
(statearr_47177_48232[(2)] = null);

(statearr_47177_48232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (4))){
var state_47171__$1 = state_47171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47171__$1,(7),ch);
} else {
if((state_val_47172 === (6))){
var inst_47166 = (state_47171[(2)]);
var state_47171__$1 = state_47171;
var statearr_47178_48236 = state_47171__$1;
(statearr_47178_48236[(2)] = inst_47166);

(statearr_47178_48236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (3))){
var inst_47168 = (state_47171[(2)]);
var inst_47169 = cljs.core.async.close_BANG_(out);
var state_47171__$1 = (function (){var statearr_47179 = state_47171;
(statearr_47179[(9)] = inst_47168);

return statearr_47179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47171__$1,inst_47169);
} else {
if((state_val_47172 === (2))){
var inst_47148 = (state_47171[(8)]);
var inst_47150 = (inst_47148 < n);
var state_47171__$1 = state_47171;
if(cljs.core.truth_(inst_47150)){
var statearr_47180_48237 = state_47171__$1;
(statearr_47180_48237[(1)] = (4));

} else {
var statearr_47181_48238 = state_47171__$1;
(statearr_47181_48238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (11))){
var inst_47148 = (state_47171[(8)]);
var inst_47158 = (state_47171[(2)]);
var inst_47159 = (inst_47148 + (1));
var inst_47148__$1 = inst_47159;
var state_47171__$1 = (function (){var statearr_47182 = state_47171;
(statearr_47182[(10)] = inst_47158);

(statearr_47182[(8)] = inst_47148__$1);

return statearr_47182;
})();
var statearr_47183_48242 = state_47171__$1;
(statearr_47183_48242[(2)] = null);

(statearr_47183_48242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (9))){
var state_47171__$1 = state_47171;
var statearr_47184_48243 = state_47171__$1;
(statearr_47184_48243[(2)] = null);

(statearr_47184_48243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (5))){
var state_47171__$1 = state_47171;
var statearr_47185_48244 = state_47171__$1;
(statearr_47185_48244[(2)] = null);

(statearr_47185_48244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (10))){
var inst_47163 = (state_47171[(2)]);
var state_47171__$1 = state_47171;
var statearr_47186_48245 = state_47171__$1;
(statearr_47186_48245[(2)] = inst_47163);

(statearr_47186_48245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47172 === (8))){
var inst_47153 = (state_47171[(7)]);
var state_47171__$1 = state_47171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47171__$1,(11),out,inst_47153);
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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47187[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47187[(1)] = (1));

return statearr_47187;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47171){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47171);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47188){if((e47188 instanceof Object)){
var ex__45870__auto__ = e47188;
var statearr_47189_48247 = state_47171;
(statearr_47189_48247[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48248 = state_47171;
state_47171 = G__48248;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47190 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47190[(6)] = c__46042__auto___48226);

return statearr_47190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47192 = (function (f,ch,meta47193){
this.f = f;
this.ch = ch;
this.meta47193 = meta47193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47194,meta47193__$1){
var self__ = this;
var _47194__$1 = this;
return (new cljs.core.async.t_cljs$core$async47192(self__.f,self__.ch,meta47193__$1));
}));

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47194){
var self__ = this;
var _47194__$1 = this;
return self__.meta47193;
}));

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47195 = (function (f,ch,meta47193,_,fn1,meta47196){
this.f = f;
this.ch = ch;
this.meta47193 = meta47193;
this._ = _;
this.fn1 = fn1;
this.meta47196 = meta47196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47197,meta47196__$1){
var self__ = this;
var _47197__$1 = this;
return (new cljs.core.async.t_cljs$core$async47195(self__.f,self__.ch,self__.meta47193,self__._,self__.fn1,meta47196__$1));
}));

(cljs.core.async.t_cljs$core$async47195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47197){
var self__ = this;
var _47197__$1 = this;
return self__.meta47196;
}));

(cljs.core.async.t_cljs$core$async47195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47191_SHARP_){
var G__47198 = (((p1__47191_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47191_SHARP_) : self__.f.call(null,p1__47191_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47198) : f1.call(null,G__47198));
});
}));

(cljs.core.async.t_cljs$core$async47195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47193","meta47193",69487868,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47192","cljs.core.async/t_cljs$core$async47192",177827361,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47196","meta47196",1342059347,null)], null);
}));

(cljs.core.async.t_cljs$core$async47195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47195");

(cljs.core.async.t_cljs$core$async47195.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47195.
 */
cljs.core.async.__GT_t_cljs$core$async47195 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47195(f__$1,ch__$1,meta47193__$1,___$2,fn1__$1,meta47196){
return (new cljs.core.async.t_cljs$core$async47195(f__$1,ch__$1,meta47193__$1,___$2,fn1__$1,meta47196));
});

}

return (new cljs.core.async.t_cljs$core$async47195(self__.f,self__.ch,self__.meta47193,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47199 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47199) : self__.f.call(null,G__47199));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47193","meta47193",69487868,null)], null);
}));

(cljs.core.async.t_cljs$core$async47192.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47192");

(cljs.core.async.t_cljs$core$async47192.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47192");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47192.
 */
cljs.core.async.__GT_t_cljs$core$async47192 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47192(f__$1,ch__$1,meta47193){
return (new cljs.core.async.t_cljs$core$async47192(f__$1,ch__$1,meta47193));
});

}

return (new cljs.core.async.t_cljs$core$async47192(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47200 = (function (f,ch,meta47201){
this.f = f;
this.ch = ch;
this.meta47201 = meta47201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47202,meta47201__$1){
var self__ = this;
var _47202__$1 = this;
return (new cljs.core.async.t_cljs$core$async47200(self__.f,self__.ch,meta47201__$1));
}));

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47202){
var self__ = this;
var _47202__$1 = this;
return self__.meta47201;
}));

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47201","meta47201",-2003082811,null)], null);
}));

(cljs.core.async.t_cljs$core$async47200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47200");

(cljs.core.async.t_cljs$core$async47200.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47200.
 */
cljs.core.async.__GT_t_cljs$core$async47200 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47200(f__$1,ch__$1,meta47201){
return (new cljs.core.async.t_cljs$core$async47200(f__$1,ch__$1,meta47201));
});

}

return (new cljs.core.async.t_cljs$core$async47200(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47203 = (function (p,ch,meta47204){
this.p = p;
this.ch = ch;
this.meta47204 = meta47204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47205,meta47204__$1){
var self__ = this;
var _47205__$1 = this;
return (new cljs.core.async.t_cljs$core$async47203(self__.p,self__.ch,meta47204__$1));
}));

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47205){
var self__ = this;
var _47205__$1 = this;
return self__.meta47204;
}));

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47204","meta47204",284106008,null)], null);
}));

(cljs.core.async.t_cljs$core$async47203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47203");

(cljs.core.async.t_cljs$core$async47203.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47203.
 */
cljs.core.async.__GT_t_cljs$core$async47203 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47203(p__$1,ch__$1,meta47204){
return (new cljs.core.async.t_cljs$core$async47203(p__$1,ch__$1,meta47204));
});

}

return (new cljs.core.async.t_cljs$core$async47203(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47207 = arguments.length;
switch (G__47207) {
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
var c__46042__auto___48283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47228){
var state_val_47229 = (state_47228[(1)]);
if((state_val_47229 === (7))){
var inst_47224 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
var statearr_47230_48284 = state_47228__$1;
(statearr_47230_48284[(2)] = inst_47224);

(statearr_47230_48284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (1))){
var state_47228__$1 = state_47228;
var statearr_47231_48285 = state_47228__$1;
(statearr_47231_48285[(2)] = null);

(statearr_47231_48285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (4))){
var inst_47210 = (state_47228[(7)]);
var inst_47210__$1 = (state_47228[(2)]);
var inst_47211 = (inst_47210__$1 == null);
var state_47228__$1 = (function (){var statearr_47232 = state_47228;
(statearr_47232[(7)] = inst_47210__$1);

return statearr_47232;
})();
if(cljs.core.truth_(inst_47211)){
var statearr_47233_48286 = state_47228__$1;
(statearr_47233_48286[(1)] = (5));

} else {
var statearr_47234_48287 = state_47228__$1;
(statearr_47234_48287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (6))){
var inst_47210 = (state_47228[(7)]);
var inst_47215 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47210) : p.call(null,inst_47210));
var state_47228__$1 = state_47228;
if(cljs.core.truth_(inst_47215)){
var statearr_47235_48288 = state_47228__$1;
(statearr_47235_48288[(1)] = (8));

} else {
var statearr_47236_48289 = state_47228__$1;
(statearr_47236_48289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (3))){
var inst_47226 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47228__$1,inst_47226);
} else {
if((state_val_47229 === (2))){
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47228__$1,(4),ch);
} else {
if((state_val_47229 === (11))){
var inst_47218 = (state_47228[(2)]);
var state_47228__$1 = state_47228;
var statearr_47237_48290 = state_47228__$1;
(statearr_47237_48290[(2)] = inst_47218);

(statearr_47237_48290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (9))){
var state_47228__$1 = state_47228;
var statearr_47238_48291 = state_47228__$1;
(statearr_47238_48291[(2)] = null);

(statearr_47238_48291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (5))){
var inst_47213 = cljs.core.async.close_BANG_(out);
var state_47228__$1 = state_47228;
var statearr_47239_48295 = state_47228__$1;
(statearr_47239_48295[(2)] = inst_47213);

(statearr_47239_48295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (10))){
var inst_47221 = (state_47228[(2)]);
var state_47228__$1 = (function (){var statearr_47240 = state_47228;
(statearr_47240[(8)] = inst_47221);

return statearr_47240;
})();
var statearr_47241_48296 = state_47228__$1;
(statearr_47241_48296[(2)] = null);

(statearr_47241_48296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47229 === (8))){
var inst_47210 = (state_47228[(7)]);
var state_47228__$1 = state_47228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47228__$1,(11),out,inst_47210);
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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47242 = [null,null,null,null,null,null,null,null,null];
(statearr_47242[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47242[(1)] = (1));

return statearr_47242;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47228){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47228);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47243){if((e47243 instanceof Object)){
var ex__45870__auto__ = e47243;
var statearr_47244_48297 = state_47228;
(statearr_47244_48297[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48301 = state_47228;
state_47228 = G__48301;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47245 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47245[(6)] = c__46042__auto___48283);

return statearr_47245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47247 = arguments.length;
switch (G__47247) {
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
var c__46042__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47309){
var state_val_47310 = (state_47309[(1)]);
if((state_val_47310 === (7))){
var inst_47305 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47311_48305 = state_47309__$1;
(statearr_47311_48305[(2)] = inst_47305);

(statearr_47311_48305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (20))){
var inst_47275 = (state_47309[(7)]);
var inst_47286 = (state_47309[(2)]);
var inst_47287 = cljs.core.next(inst_47275);
var inst_47261 = inst_47287;
var inst_47262 = null;
var inst_47263 = (0);
var inst_47264 = (0);
var state_47309__$1 = (function (){var statearr_47312 = state_47309;
(statearr_47312[(8)] = inst_47261);

(statearr_47312[(9)] = inst_47262);

(statearr_47312[(10)] = inst_47286);

(statearr_47312[(11)] = inst_47264);

(statearr_47312[(12)] = inst_47263);

return statearr_47312;
})();
var statearr_47313_48306 = state_47309__$1;
(statearr_47313_48306[(2)] = null);

(statearr_47313_48306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (1))){
var state_47309__$1 = state_47309;
var statearr_47314_48307 = state_47309__$1;
(statearr_47314_48307[(2)] = null);

(statearr_47314_48307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (4))){
var inst_47250 = (state_47309[(13)]);
var inst_47250__$1 = (state_47309[(2)]);
var inst_47251 = (inst_47250__$1 == null);
var state_47309__$1 = (function (){var statearr_47315 = state_47309;
(statearr_47315[(13)] = inst_47250__$1);

return statearr_47315;
})();
if(cljs.core.truth_(inst_47251)){
var statearr_47316_48309 = state_47309__$1;
(statearr_47316_48309[(1)] = (5));

} else {
var statearr_47317_48310 = state_47309__$1;
(statearr_47317_48310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (15))){
var state_47309__$1 = state_47309;
var statearr_47321_48312 = state_47309__$1;
(statearr_47321_48312[(2)] = null);

(statearr_47321_48312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (21))){
var state_47309__$1 = state_47309;
var statearr_47322_48313 = state_47309__$1;
(statearr_47322_48313[(2)] = null);

(statearr_47322_48313[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (13))){
var inst_47261 = (state_47309[(8)]);
var inst_47262 = (state_47309[(9)]);
var inst_47264 = (state_47309[(11)]);
var inst_47263 = (state_47309[(12)]);
var inst_47271 = (state_47309[(2)]);
var inst_47272 = (inst_47264 + (1));
var tmp47318 = inst_47261;
var tmp47319 = inst_47262;
var tmp47320 = inst_47263;
var inst_47261__$1 = tmp47318;
var inst_47262__$1 = tmp47319;
var inst_47263__$1 = tmp47320;
var inst_47264__$1 = inst_47272;
var state_47309__$1 = (function (){var statearr_47323 = state_47309;
(statearr_47323[(8)] = inst_47261__$1);

(statearr_47323[(14)] = inst_47271);

(statearr_47323[(9)] = inst_47262__$1);

(statearr_47323[(11)] = inst_47264__$1);

(statearr_47323[(12)] = inst_47263__$1);

return statearr_47323;
})();
var statearr_47324_48314 = state_47309__$1;
(statearr_47324_48314[(2)] = null);

(statearr_47324_48314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (22))){
var state_47309__$1 = state_47309;
var statearr_47325_48315 = state_47309__$1;
(statearr_47325_48315[(2)] = null);

(statearr_47325_48315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (6))){
var inst_47250 = (state_47309[(13)]);
var inst_47259 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47250) : f.call(null,inst_47250));
var inst_47260 = cljs.core.seq(inst_47259);
var inst_47261 = inst_47260;
var inst_47262 = null;
var inst_47263 = (0);
var inst_47264 = (0);
var state_47309__$1 = (function (){var statearr_47326 = state_47309;
(statearr_47326[(8)] = inst_47261);

(statearr_47326[(9)] = inst_47262);

(statearr_47326[(11)] = inst_47264);

(statearr_47326[(12)] = inst_47263);

return statearr_47326;
})();
var statearr_47327_48319 = state_47309__$1;
(statearr_47327_48319[(2)] = null);

(statearr_47327_48319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (17))){
var inst_47275 = (state_47309[(7)]);
var inst_47279 = cljs.core.chunk_first(inst_47275);
var inst_47280 = cljs.core.chunk_rest(inst_47275);
var inst_47281 = cljs.core.count(inst_47279);
var inst_47261 = inst_47280;
var inst_47262 = inst_47279;
var inst_47263 = inst_47281;
var inst_47264 = (0);
var state_47309__$1 = (function (){var statearr_47328 = state_47309;
(statearr_47328[(8)] = inst_47261);

(statearr_47328[(9)] = inst_47262);

(statearr_47328[(11)] = inst_47264);

(statearr_47328[(12)] = inst_47263);

return statearr_47328;
})();
var statearr_47329_48326 = state_47309__$1;
(statearr_47329_48326[(2)] = null);

(statearr_47329_48326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (3))){
var inst_47307 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47309__$1,inst_47307);
} else {
if((state_val_47310 === (12))){
var inst_47295 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47330_48327 = state_47309__$1;
(statearr_47330_48327[(2)] = inst_47295);

(statearr_47330_48327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (2))){
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47309__$1,(4),in$);
} else {
if((state_val_47310 === (23))){
var inst_47303 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47331_48329 = state_47309__$1;
(statearr_47331_48329[(2)] = inst_47303);

(statearr_47331_48329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (19))){
var inst_47290 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47332_48330 = state_47309__$1;
(statearr_47332_48330[(2)] = inst_47290);

(statearr_47332_48330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (11))){
var inst_47261 = (state_47309[(8)]);
var inst_47275 = (state_47309[(7)]);
var inst_47275__$1 = cljs.core.seq(inst_47261);
var state_47309__$1 = (function (){var statearr_47333 = state_47309;
(statearr_47333[(7)] = inst_47275__$1);

return statearr_47333;
})();
if(inst_47275__$1){
var statearr_47334_48334 = state_47309__$1;
(statearr_47334_48334[(1)] = (14));

} else {
var statearr_47335_48335 = state_47309__$1;
(statearr_47335_48335[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (9))){
var inst_47297 = (state_47309[(2)]);
var inst_47298 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47309__$1 = (function (){var statearr_47336 = state_47309;
(statearr_47336[(15)] = inst_47297);

return statearr_47336;
})();
if(cljs.core.truth_(inst_47298)){
var statearr_47337_48337 = state_47309__$1;
(statearr_47337_48337[(1)] = (21));

} else {
var statearr_47338_48338 = state_47309__$1;
(statearr_47338_48338[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (5))){
var inst_47253 = cljs.core.async.close_BANG_(out);
var state_47309__$1 = state_47309;
var statearr_47339_48339 = state_47309__$1;
(statearr_47339_48339[(2)] = inst_47253);

(statearr_47339_48339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (14))){
var inst_47275 = (state_47309[(7)]);
var inst_47277 = cljs.core.chunked_seq_QMARK_(inst_47275);
var state_47309__$1 = state_47309;
if(inst_47277){
var statearr_47340_48340 = state_47309__$1;
(statearr_47340_48340[(1)] = (17));

} else {
var statearr_47341_48341 = state_47309__$1;
(statearr_47341_48341[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (16))){
var inst_47293 = (state_47309[(2)]);
var state_47309__$1 = state_47309;
var statearr_47342_48342 = state_47309__$1;
(statearr_47342_48342[(2)] = inst_47293);

(statearr_47342_48342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47310 === (10))){
var inst_47262 = (state_47309[(9)]);
var inst_47264 = (state_47309[(11)]);
var inst_47269 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47262,inst_47264);
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47309__$1,(13),out,inst_47269);
} else {
if((state_val_47310 === (18))){
var inst_47275 = (state_47309[(7)]);
var inst_47284 = cljs.core.first(inst_47275);
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47309__$1,(20),out,inst_47284);
} else {
if((state_val_47310 === (8))){
var inst_47264 = (state_47309[(11)]);
var inst_47263 = (state_47309[(12)]);
var inst_47266 = (inst_47264 < inst_47263);
var inst_47267 = inst_47266;
var state_47309__$1 = state_47309;
if(cljs.core.truth_(inst_47267)){
var statearr_47343_48343 = state_47309__$1;
(statearr_47343_48343[(1)] = (10));

} else {
var statearr_47344_48344 = state_47309__$1;
(statearr_47344_48344[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45867__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45867__auto____0 = (function (){
var statearr_47345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47345[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45867__auto__);

(statearr_47345[(1)] = (1));

return statearr_47345;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45867__auto____1 = (function (state_47309){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47309);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47346){if((e47346 instanceof Object)){
var ex__45870__auto__ = e47346;
var statearr_47347_48345 = state_47309;
(statearr_47347_48345[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48346 = state_47309;
state_47309 = G__48346;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45867__auto__ = function(state_47309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45867__auto____1.call(this,state_47309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45867__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45867__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47348 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47348[(6)] = c__46042__auto__);

return statearr_47348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));

return c__46042__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47350 = arguments.length;
switch (G__47350) {
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
var G__47352 = arguments.length;
switch (G__47352) {
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
var G__47354 = arguments.length;
switch (G__47354) {
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
var c__46042__auto___48353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47378){
var state_val_47379 = (state_47378[(1)]);
if((state_val_47379 === (7))){
var inst_47373 = (state_47378[(2)]);
var state_47378__$1 = state_47378;
var statearr_47380_48354 = state_47378__$1;
(statearr_47380_48354[(2)] = inst_47373);

(statearr_47380_48354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (1))){
var inst_47355 = null;
var state_47378__$1 = (function (){var statearr_47381 = state_47378;
(statearr_47381[(7)] = inst_47355);

return statearr_47381;
})();
var statearr_47382_48356 = state_47378__$1;
(statearr_47382_48356[(2)] = null);

(statearr_47382_48356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (4))){
var inst_47358 = (state_47378[(8)]);
var inst_47358__$1 = (state_47378[(2)]);
var inst_47359 = (inst_47358__$1 == null);
var inst_47360 = cljs.core.not(inst_47359);
var state_47378__$1 = (function (){var statearr_47383 = state_47378;
(statearr_47383[(8)] = inst_47358__$1);

return statearr_47383;
})();
if(inst_47360){
var statearr_47384_48357 = state_47378__$1;
(statearr_47384_48357[(1)] = (5));

} else {
var statearr_47385_48358 = state_47378__$1;
(statearr_47385_48358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (6))){
var state_47378__$1 = state_47378;
var statearr_47386_48359 = state_47378__$1;
(statearr_47386_48359[(2)] = null);

(statearr_47386_48359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (3))){
var inst_47375 = (state_47378[(2)]);
var inst_47376 = cljs.core.async.close_BANG_(out);
var state_47378__$1 = (function (){var statearr_47387 = state_47378;
(statearr_47387[(9)] = inst_47375);

return statearr_47387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47378__$1,inst_47376);
} else {
if((state_val_47379 === (2))){
var state_47378__$1 = state_47378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47378__$1,(4),ch);
} else {
if((state_val_47379 === (11))){
var inst_47358 = (state_47378[(8)]);
var inst_47367 = (state_47378[(2)]);
var inst_47355 = inst_47358;
var state_47378__$1 = (function (){var statearr_47388 = state_47378;
(statearr_47388[(10)] = inst_47367);

(statearr_47388[(7)] = inst_47355);

return statearr_47388;
})();
var statearr_47389_48361 = state_47378__$1;
(statearr_47389_48361[(2)] = null);

(statearr_47389_48361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (9))){
var inst_47358 = (state_47378[(8)]);
var state_47378__$1 = state_47378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47378__$1,(11),out,inst_47358);
} else {
if((state_val_47379 === (5))){
var inst_47355 = (state_47378[(7)]);
var inst_47358 = (state_47378[(8)]);
var inst_47362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47358,inst_47355);
var state_47378__$1 = state_47378;
if(inst_47362){
var statearr_47391_48362 = state_47378__$1;
(statearr_47391_48362[(1)] = (8));

} else {
var statearr_47392_48363 = state_47378__$1;
(statearr_47392_48363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (10))){
var inst_47370 = (state_47378[(2)]);
var state_47378__$1 = state_47378;
var statearr_47393_48364 = state_47378__$1;
(statearr_47393_48364[(2)] = inst_47370);

(statearr_47393_48364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47379 === (8))){
var inst_47355 = (state_47378[(7)]);
var tmp47390 = inst_47355;
var inst_47355__$1 = tmp47390;
var state_47378__$1 = (function (){var statearr_47394 = state_47378;
(statearr_47394[(7)] = inst_47355__$1);

return statearr_47394;
})();
var statearr_47395_48366 = state_47378__$1;
(statearr_47395_48366[(2)] = null);

(statearr_47395_48366[(1)] = (2));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47396[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47396[(1)] = (1));

return statearr_47396;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47378){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47378);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47397){if((e47397 instanceof Object)){
var ex__45870__auto__ = e47397;
var statearr_47398_48367 = state_47378;
(statearr_47398_48367[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48368 = state_47378;
state_47378 = G__48368;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47399 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47399[(6)] = c__46042__auto___48353);

return statearr_47399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47401 = arguments.length;
switch (G__47401) {
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
var c__46042__auto___48374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47439){
var state_val_47440 = (state_47439[(1)]);
if((state_val_47440 === (7))){
var inst_47435 = (state_47439[(2)]);
var state_47439__$1 = state_47439;
var statearr_47441_48379 = state_47439__$1;
(statearr_47441_48379[(2)] = inst_47435);

(statearr_47441_48379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (1))){
var inst_47402 = (new Array(n));
var inst_47403 = inst_47402;
var inst_47404 = (0);
var state_47439__$1 = (function (){var statearr_47442 = state_47439;
(statearr_47442[(7)] = inst_47404);

(statearr_47442[(8)] = inst_47403);

return statearr_47442;
})();
var statearr_47443_48385 = state_47439__$1;
(statearr_47443_48385[(2)] = null);

(statearr_47443_48385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (4))){
var inst_47407 = (state_47439[(9)]);
var inst_47407__$1 = (state_47439[(2)]);
var inst_47408 = (inst_47407__$1 == null);
var inst_47409 = cljs.core.not(inst_47408);
var state_47439__$1 = (function (){var statearr_47444 = state_47439;
(statearr_47444[(9)] = inst_47407__$1);

return statearr_47444;
})();
if(inst_47409){
var statearr_47445_48393 = state_47439__$1;
(statearr_47445_48393[(1)] = (5));

} else {
var statearr_47446_48394 = state_47439__$1;
(statearr_47446_48394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (15))){
var inst_47429 = (state_47439[(2)]);
var state_47439__$1 = state_47439;
var statearr_47447_48396 = state_47439__$1;
(statearr_47447_48396[(2)] = inst_47429);

(statearr_47447_48396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (13))){
var state_47439__$1 = state_47439;
var statearr_47448_48397 = state_47439__$1;
(statearr_47448_48397[(2)] = null);

(statearr_47448_48397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (6))){
var inst_47404 = (state_47439[(7)]);
var inst_47425 = (inst_47404 > (0));
var state_47439__$1 = state_47439;
if(cljs.core.truth_(inst_47425)){
var statearr_47449_48398 = state_47439__$1;
(statearr_47449_48398[(1)] = (12));

} else {
var statearr_47450_48399 = state_47439__$1;
(statearr_47450_48399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (3))){
var inst_47437 = (state_47439[(2)]);
var state_47439__$1 = state_47439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47439__$1,inst_47437);
} else {
if((state_val_47440 === (12))){
var inst_47403 = (state_47439[(8)]);
var inst_47427 = cljs.core.vec(inst_47403);
var state_47439__$1 = state_47439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47439__$1,(15),out,inst_47427);
} else {
if((state_val_47440 === (2))){
var state_47439__$1 = state_47439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47439__$1,(4),ch);
} else {
if((state_val_47440 === (11))){
var inst_47419 = (state_47439[(2)]);
var inst_47420 = (new Array(n));
var inst_47403 = inst_47420;
var inst_47404 = (0);
var state_47439__$1 = (function (){var statearr_47451 = state_47439;
(statearr_47451[(7)] = inst_47404);

(statearr_47451[(10)] = inst_47419);

(statearr_47451[(8)] = inst_47403);

return statearr_47451;
})();
var statearr_47452_48400 = state_47439__$1;
(statearr_47452_48400[(2)] = null);

(statearr_47452_48400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (9))){
var inst_47403 = (state_47439[(8)]);
var inst_47417 = cljs.core.vec(inst_47403);
var state_47439__$1 = state_47439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47439__$1,(11),out,inst_47417);
} else {
if((state_val_47440 === (5))){
var inst_47412 = (state_47439[(11)]);
var inst_47404 = (state_47439[(7)]);
var inst_47403 = (state_47439[(8)]);
var inst_47407 = (state_47439[(9)]);
var inst_47411 = (inst_47403[inst_47404] = inst_47407);
var inst_47412__$1 = (inst_47404 + (1));
var inst_47413 = (inst_47412__$1 < n);
var state_47439__$1 = (function (){var statearr_47453 = state_47439;
(statearr_47453[(11)] = inst_47412__$1);

(statearr_47453[(12)] = inst_47411);

return statearr_47453;
})();
if(cljs.core.truth_(inst_47413)){
var statearr_47454_48413 = state_47439__$1;
(statearr_47454_48413[(1)] = (8));

} else {
var statearr_47455_48415 = state_47439__$1;
(statearr_47455_48415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (14))){
var inst_47432 = (state_47439[(2)]);
var inst_47433 = cljs.core.async.close_BANG_(out);
var state_47439__$1 = (function (){var statearr_47457 = state_47439;
(statearr_47457[(13)] = inst_47432);

return statearr_47457;
})();
var statearr_47458_48417 = state_47439__$1;
(statearr_47458_48417[(2)] = inst_47433);

(statearr_47458_48417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (10))){
var inst_47423 = (state_47439[(2)]);
var state_47439__$1 = state_47439;
var statearr_47459_48421 = state_47439__$1;
(statearr_47459_48421[(2)] = inst_47423);

(statearr_47459_48421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47440 === (8))){
var inst_47412 = (state_47439[(11)]);
var inst_47403 = (state_47439[(8)]);
var tmp47456 = inst_47403;
var inst_47403__$1 = tmp47456;
var inst_47404 = inst_47412;
var state_47439__$1 = (function (){var statearr_47460 = state_47439;
(statearr_47460[(7)] = inst_47404);

(statearr_47460[(8)] = inst_47403__$1);

return statearr_47460;
})();
var statearr_47461_48426 = state_47439__$1;
(statearr_47461_48426[(2)] = null);

(statearr_47461_48426[(1)] = (2));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47462[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47462[(1)] = (1));

return statearr_47462;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47439){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47439);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47463){if((e47463 instanceof Object)){
var ex__45870__auto__ = e47463;
var statearr_47464_48440 = state_47439;
(statearr_47464_48440[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48442 = state_47439;
state_47439 = G__48442;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47465 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47465[(6)] = c__46042__auto___48374);

return statearr_47465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47467 = arguments.length;
switch (G__47467) {
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
var c__46042__auto___48445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46043__auto__ = (function (){var switch__45866__auto__ = (function (state_47509){
var state_val_47510 = (state_47509[(1)]);
if((state_val_47510 === (7))){
var inst_47505 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
var statearr_47511_48446 = state_47509__$1;
(statearr_47511_48446[(2)] = inst_47505);

(statearr_47511_48446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (1))){
var inst_47468 = [];
var inst_47469 = inst_47468;
var inst_47470 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47509__$1 = (function (){var statearr_47512 = state_47509;
(statearr_47512[(7)] = inst_47470);

(statearr_47512[(8)] = inst_47469);

return statearr_47512;
})();
var statearr_47513_48447 = state_47509__$1;
(statearr_47513_48447[(2)] = null);

(statearr_47513_48447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (4))){
var inst_47473 = (state_47509[(9)]);
var inst_47473__$1 = (state_47509[(2)]);
var inst_47474 = (inst_47473__$1 == null);
var inst_47475 = cljs.core.not(inst_47474);
var state_47509__$1 = (function (){var statearr_47514 = state_47509;
(statearr_47514[(9)] = inst_47473__$1);

return statearr_47514;
})();
if(inst_47475){
var statearr_47515_48448 = state_47509__$1;
(statearr_47515_48448[(1)] = (5));

} else {
var statearr_47516_48449 = state_47509__$1;
(statearr_47516_48449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (15))){
var inst_47499 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
var statearr_47517_48450 = state_47509__$1;
(statearr_47517_48450[(2)] = inst_47499);

(statearr_47517_48450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (13))){
var state_47509__$1 = state_47509;
var statearr_47518_48451 = state_47509__$1;
(statearr_47518_48451[(2)] = null);

(statearr_47518_48451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (6))){
var inst_47469 = (state_47509[(8)]);
var inst_47494 = inst_47469.length;
var inst_47495 = (inst_47494 > (0));
var state_47509__$1 = state_47509;
if(cljs.core.truth_(inst_47495)){
var statearr_47519_48453 = state_47509__$1;
(statearr_47519_48453[(1)] = (12));

} else {
var statearr_47520_48454 = state_47509__$1;
(statearr_47520_48454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (3))){
var inst_47507 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47509__$1,inst_47507);
} else {
if((state_val_47510 === (12))){
var inst_47469 = (state_47509[(8)]);
var inst_47497 = cljs.core.vec(inst_47469);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47509__$1,(15),out,inst_47497);
} else {
if((state_val_47510 === (2))){
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47509__$1,(4),ch);
} else {
if((state_val_47510 === (11))){
var inst_47477 = (state_47509[(10)]);
var inst_47473 = (state_47509[(9)]);
var inst_47487 = (state_47509[(2)]);
var inst_47488 = [];
var inst_47489 = inst_47488.push(inst_47473);
var inst_47469 = inst_47488;
var inst_47470 = inst_47477;
var state_47509__$1 = (function (){var statearr_47521 = state_47509;
(statearr_47521[(11)] = inst_47489);

(statearr_47521[(7)] = inst_47470);

(statearr_47521[(12)] = inst_47487);

(statearr_47521[(8)] = inst_47469);

return statearr_47521;
})();
var statearr_47522_48457 = state_47509__$1;
(statearr_47522_48457[(2)] = null);

(statearr_47522_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (9))){
var inst_47469 = (state_47509[(8)]);
var inst_47485 = cljs.core.vec(inst_47469);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47509__$1,(11),out,inst_47485);
} else {
if((state_val_47510 === (5))){
var inst_47470 = (state_47509[(7)]);
var inst_47477 = (state_47509[(10)]);
var inst_47473 = (state_47509[(9)]);
var inst_47477__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47473) : f.call(null,inst_47473));
var inst_47478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47477__$1,inst_47470);
var inst_47479 = cljs.core.keyword_identical_QMARK_(inst_47470,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47480 = ((inst_47478) || (inst_47479));
var state_47509__$1 = (function (){var statearr_47523 = state_47509;
(statearr_47523[(10)] = inst_47477__$1);

return statearr_47523;
})();
if(cljs.core.truth_(inst_47480)){
var statearr_47524_48460 = state_47509__$1;
(statearr_47524_48460[(1)] = (8));

} else {
var statearr_47525_48461 = state_47509__$1;
(statearr_47525_48461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (14))){
var inst_47502 = (state_47509[(2)]);
var inst_47503 = cljs.core.async.close_BANG_(out);
var state_47509__$1 = (function (){var statearr_47527 = state_47509;
(statearr_47527[(13)] = inst_47502);

return statearr_47527;
})();
var statearr_47528_48462 = state_47509__$1;
(statearr_47528_48462[(2)] = inst_47503);

(statearr_47528_48462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (10))){
var inst_47492 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
var statearr_47529_48463 = state_47509__$1;
(statearr_47529_48463[(2)] = inst_47492);

(statearr_47529_48463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (8))){
var inst_47477 = (state_47509[(10)]);
var inst_47473 = (state_47509[(9)]);
var inst_47469 = (state_47509[(8)]);
var inst_47482 = inst_47469.push(inst_47473);
var tmp47526 = inst_47469;
var inst_47469__$1 = tmp47526;
var inst_47470 = inst_47477;
var state_47509__$1 = (function (){var statearr_47530 = state_47509;
(statearr_47530[(7)] = inst_47470);

(statearr_47530[(8)] = inst_47469__$1);

(statearr_47530[(14)] = inst_47482);

return statearr_47530;
})();
var statearr_47531_48464 = state_47509__$1;
(statearr_47531_48464[(2)] = null);

(statearr_47531_48464[(1)] = (2));


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
var cljs$core$async$state_machine__45867__auto__ = null;
var cljs$core$async$state_machine__45867__auto____0 = (function (){
var statearr_47532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47532[(0)] = cljs$core$async$state_machine__45867__auto__);

(statearr_47532[(1)] = (1));

return statearr_47532;
});
var cljs$core$async$state_machine__45867__auto____1 = (function (state_47509){
while(true){
var ret_value__45868__auto__ = (function (){try{while(true){
var result__45869__auto__ = switch__45866__auto__(state_47509);
if(cljs.core.keyword_identical_QMARK_(result__45869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45869__auto__;
}
break;
}
}catch (e47533){if((e47533 instanceof Object)){
var ex__45870__auto__ = e47533;
var statearr_47534_48476 = state_47509;
(statearr_47534_48476[(5)] = ex__45870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48485 = state_47509;
state_47509 = G__48485;
continue;
} else {
return ret_value__45868__auto__;
}
break;
}
});
cljs$core$async$state_machine__45867__auto__ = function(state_47509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45867__auto____1.call(this,state_47509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45867__auto____0;
cljs$core$async$state_machine__45867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45867__auto____1;
return cljs$core$async$state_machine__45867__auto__;
})()
})();
var state__46044__auto__ = (function (){var statearr_47535 = (f__46043__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46043__auto__.cljs$core$IFn$_invoke$arity$0() : f__46043__auto__.call(null));
(statearr_47535[(6)] = c__46042__auto___48445);

return statearr_47535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46044__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
