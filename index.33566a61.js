!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}})),i.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(e,t,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&n.call(x,i)&&(w=x);var _=m.prototype=g.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,i,a,c){var u=f(e[o],e,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,u(_,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(L.prototype),u(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(_),u(_,c,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("b636u",(function(r,n){e(r.exports,"default",(function(){return s}));var o=i("bpxeT"),a=i("8MBJY"),c=i("a2hTj"),u=i("2TvXO"),s=function(){"use strict";function e(){t(a)(this,e),this.searchQuery="",this.page=1}return t(c)(e,[{key:"fetchMovies",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,o,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",n=new URLSearchParams({page:e.page}),o="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&").concat(n),localStorage.getItem("MOVIE_GENRES")||e.getGenres(),t.prev=4,t.next=7,fetch(o);case 7:return i=t.sent,t.next=10,i.json();case 10:return a=t.sent,e.incrementPage(),console.log(a),t.abrupt("return",a);case 16:t.prev=16,t.t0=t.catch(4),console.error(t.t0);case 19:case"end":return t.stop()}}),r,null,[[4,16]])})))()}},{key:"searchMovies",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,o,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",n=new URLSearchParams({page:e.page,query:e.searchQuery}),o=" https://api.themoviedb.org/3/search/movie?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&").concat(n),localStorage.getItem("MOVIE_GENRES")||e.getGenres(),t.prev=4,t.next=7,fetch(o);case 7:return i=t.sent,t.next=10,i.json();case 10:return a=t.sent,console.log(a),t.abrupt("return",a);case 15:t.prev=15,t.t0=t.catch(4),console.error(t.t0);case 18:case"end":return t.stop()}}),r,null,[[4,15]])})))()}},{key:"getGenres",value:function(){return t(o)(t(u).mark((function e(){var r,n,o,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",r="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c"),e.prev=2,e.next=5,fetch(r);case 5:return n=e.sent,e.next=8,n.json();case 8:return o=e.sent,i={},o.genres.forEach((function(e){var t=e.id,r=e.name;return i[t]=r})),localStorage.setItem("MOVIE_GENRES",JSON.stringify(i)),console.log(o),e.abrupt("return",o);case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))()}},{key:"incrementPage",value:function(){return this.page+=1}},{key:"resetPage",value:function(){return this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),e}()})),i.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),i.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),i.register("6f6o8",(function(e,r){var n=i("b636u"),o=i("bDCjx"),a=document.querySelector(".card-set");function c(e){e.preventDefault(),console.log(e)}(new(0,n.default)).fetchMovies().then((function(e){var r=JSON.parse(localStorage.getItem("MOVIE_GENRES")),n=e.results.map((function(e){var n=e.poster_path,i=e.title,a=e.genre_ids,c=e.release_date,u=a.map((function(e){return r[e]}));return'<li class="card-set__item movie-card"><a href="" class="movie-card__link"><div class="movie-card__holder"><img src='.concat(n?"https://image.tmdb.org/t/p/w400"+n:t(o),' alt="').concat(i,' poster" class="movie-card__img" width="100%"></div><p class="movie-card__title">').concat(i,'            \n            </p><p class="movie-card__genre">').concat(u.length<3?u.join(", "):u.slice(0,2).join(", ")+", Other",' | \n                <span class="movie-card__date">').concat(c.slice(0,4),"</span>\n            </p></a></li>")})).join("");a.insertAdjacentHTML("beforeend",n),a.querySelectorAll(".movie-card__link").forEach((function(e){return e.addEventListener("click",c)}))})).catch((function(e){return console.log("Error: ",e)}))})),i.register("bDCjx",(function(e,t){e.exports=i("aNJCr").getBundleURL("2hvCh")+i("iE7OH").resolve("6ihl4")})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"2hvCh":"index.33566a61.js","6ihl4":"default-poster.5762cb38.jpg"}'))}();
//# sourceMappingURL=index.33566a61.js.map