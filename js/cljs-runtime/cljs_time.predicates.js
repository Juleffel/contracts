goog.provide('cljs_time.predicates');
goog.require('cljs.core');
goog.require('cljs_time.core');
cljs_time.predicates.monday_QMARK_ = (function cljs_time$predicates$monday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(1));
});
cljs_time.predicates.tuesday_QMARK_ = (function cljs_time$predicates$tuesday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(2));
});
cljs_time.predicates.wednesday_QMARK_ = (function cljs_time$predicates$wednesday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(3));
});
cljs_time.predicates.thursday_QMARK_ = (function cljs_time$predicates$thursday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(4));
});
cljs_time.predicates.friday_QMARK_ = (function cljs_time$predicates$friday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(5));
});
cljs_time.predicates.saturday_QMARK_ = (function cljs_time$predicates$saturday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(6));
});
cljs_time.predicates.sunday_QMARK_ = (function cljs_time$predicates$sunday_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(date_time),(7));
});
cljs_time.predicates.weekend_QMARK_ = (function cljs_time$predicates$weekend_QMARK_(date_time){
return ((cljs_time.predicates.saturday_QMARK_(date_time)) || (cljs_time.predicates.sunday_QMARK_(date_time)));
});
cljs_time.predicates.weekday_QMARK_ = (function cljs_time$predicates$weekday_QMARK_(date_time){
return (!(cljs_time.predicates.weekend_QMARK_(date_time)));
});
cljs_time.predicates.january_QMARK_ = (function cljs_time$predicates$january_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(1));
});
cljs_time.predicates.february_QMARK_ = (function cljs_time$predicates$february_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(2));
});
cljs_time.predicates.march_QMARK_ = (function cljs_time$predicates$march_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(3));
});
cljs_time.predicates.april_QMARK_ = (function cljs_time$predicates$april_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(4));
});
cljs_time.predicates.may_QMARK_ = (function cljs_time$predicates$may_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(5));
});
cljs_time.predicates.june_QMARK_ = (function cljs_time$predicates$june_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(6));
});
cljs_time.predicates.july_QMARK_ = (function cljs_time$predicates$july_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(7));
});
cljs_time.predicates.august_QMARK_ = (function cljs_time$predicates$august_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(8));
});
cljs_time.predicates.september_QMARK_ = (function cljs_time$predicates$september_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(9));
});
cljs_time.predicates.october_QMARK_ = (function cljs_time$predicates$october_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(10));
});
cljs_time.predicates.november_QMARK_ = (function cljs_time$predicates$november_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(11));
});
cljs_time.predicates.december_QMARK_ = (function cljs_time$predicates$december_QMARK_(date_time){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time),(12));
});

//# sourceMappingURL=cljs_time.predicates.js.map
