goog.provide('multis.db');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('multis.cljs_web3');
multis.db.type_QMARK_ = (function multis$db$type_QMARK_(t){
return (function (obj){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.type(obj));
});
});
multis.db.make_gen = (function multis$db$make_gen(f){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.int_QMARK_)], 0));
});
});
multis.db.get_web3 = (function multis$db$get_web3(){
try{return multis.cljs_web3.create_web3_rinkeby();
}catch (e54183){var e = e54183;
return ["Caught exception while create Web3: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
}});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","web3","multis.db/web3",-202305174),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("multis.db","type?","multis.db/type?",-554273642,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.core.list(new cljs.core.Symbol("multis.db","make-gen","multis.db/make-gen",760042438,null),new cljs.core.Symbol("multis.db","get-web3","multis.db/get-web3",1023854164,null))),cljs.spec.alpha.with_gen(multis.db.type_QMARK_(cljs.core.any_QMARK_),multis.db.make_gen(multis.db.get_web3)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","provides-web3?","multis.db/provides-web3?",-906399068),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","name","multis.db/name",906547391),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","address","multis.db/address",-637741260),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","abi","multis.db/abi",1089952519),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","bin","multis.db/bin",740666756),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","instance","multis.db/instance",-109070600),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","contract","multis.db/contract",-139172165),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.db","name","multis.db/name",906547391),new cljs.core.Keyword("multis.db","address","multis.db/address",-637741260),new cljs.core.Keyword("multis.db","abi","multis.db/abi",1089952519),new cljs.core.Keyword("multis.db","bin","multis.db/bin",740666756),new cljs.core.Keyword("multis.db","instance","multis.db/instance",-109070600)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.db","name","multis.db/name",906547391),new cljs.core.Keyword("multis.db","address","multis.db/address",-637741260),new cljs.core.Keyword("multis.db","abi","multis.db/abi",1089952519),new cljs.core.Keyword("multis.db","bin","multis.db/bin",740666756),new cljs.core.Keyword("multis.db","instance","multis.db/instance",-109070600)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54194){
return cljs.core.map_QMARK_(G__54194);
}),(function (G__54194){
return cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"name","name",1843675177));
}),(function (G__54194){
return cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"address","address",559499426));
}),(function (G__54194){
return cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"abi","abi",-1999451499));
}),(function (G__54194){
return cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"bin","bin",-200999690));
}),(function (G__54194){
return cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"instance","instance",-2121349050));
})], null),(function (G__54194){
return ((cljs.core.map_QMARK_(G__54194)) && (cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"name","name",1843675177))) && (cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"address","address",559499426))) && (cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"abi","abi",-1999451499))) && (cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"bin","bin",-200999690))) && (cljs.core.contains_QMARK_(G__54194,new cljs.core.Keyword(null,"instance","instance",-2121349050))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.db","name","multis.db/name",906547391),new cljs.core.Keyword("multis.db","address","multis.db/address",-637741260),new cljs.core.Keyword("multis.db","abi","multis.db/abi",1089952519),new cljs.core.Keyword("multis.db","bin","multis.db/bin",740666756),new cljs.core.Keyword("multis.db","instance","multis.db/instance",-109070600)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"address","address",559499426))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"abi","abi",-1999451499))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"bin","bin",-200999690))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"instance","instance",-2121349050)))], null),null])));
multis.db.initial_db = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"web3","web3",-879451640),multis.db.get_web3(),new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"test",new cljs.core.Keyword(null,"address","address",559499426),"0x681FbA7ceF62673C01184cFa832CE3CE298d7e86"], null),new cljs.core.Keyword(null,"sablier","sablier",-419543152),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sablier",new cljs.core.Keyword(null,"address","address",559499426),"0xc04Ad234E01327b24a831e3718DBFcbE245904CC"], null),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"token",new cljs.core.Keyword(null,"address","address",559499426),"0x8888580490b4CECA0c86e6F85E08F36cd181D80c"], null)], null),new cljs.core.Keyword(null,"user-accounts","user-accounts",-1069398958),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"recipient-accounts","recipient-accounts",235535329),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"form-doc","form-doc",873105357),cljs.core.PersistentArrayMap.EMPTY], null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("multis.db","db-spec","multis.db/db-spec",-789044848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.db","web3","multis.db/web3",-202305174)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.db","web3","multis.db/web3",-202305174)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54262){
return cljs.core.map_QMARK_(G__54262);
}),(function (G__54262){
return cljs.core.contains_QMARK_(G__54262,new cljs.core.Keyword(null,"web3","web3",-879451640));
})], null),(function (G__54262){
return ((cljs.core.map_QMARK_(G__54262)) && (cljs.core.contains_QMARK_(G__54262,new cljs.core.Keyword(null,"web3","web3",-879451640))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("multis.db","web3","multis.db/web3",-202305174)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640)))], null),null])));

//# sourceMappingURL=multis.db.js.map