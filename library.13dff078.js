!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},r.parcelRequired7c6=a),a.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)a[e[r]]=t[e[r]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("6f6o8",(function(r,n){t(r.exports,"renderMovies",(function(){return i}));var o=a("beR9g");function i(t){var r=JSON.parse(localStorage.getItem("MOVIE_GENRES"));return t.map((function(t){var n=t.poster_path,a=t.title,i=t.id,c=t.genre_ids,s=void 0===c?[]:c,l=t.release_date,u=void 0===l?"":l,d=s.map((function(t){return r[t]}));return'<li class="card-set__item movie-card"><a href="#?" class="movie-card__link" data-id='.concat(i,'><div class="movie-card__holder"><img src=').concat(n?"https://image.tmdb.org/t/p/w400"+n:e(o),' alt="').concat(a,' poster" class="movie-card__img" width="100%"></div>\n        <p class="movie-card__title">').concat(a,'\n            </p><p class="movie-card__genre">').concat(d.length<3?d.join(", "):d.slice(0,2).join(", ")+", Other"," ").concat(d.length&&u?"|":"",'\n                <span class="movie-card__date">').concat(u.slice(0,4),"</span>\n            </p></a></li>")})).join("")}})),a.register("beR9g",(function(t,e){t.exports=a("aNJCr").getBundleURL("7nwxg")+a("iE7OH").resolve("6ihl4")})),a.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a.register("e3SQQ",(function(r,n){t(r.exports,"default",(function(){return l}));var o=a("bpxeT"),i=a("8MBJY"),c=a("a2hTj"),s=a("2TvXO"),l=function(){"use strict";function t(){e(i)(this,t),this.searchQuery="",this.page=1}return e(c)(t,[{key:"fetchMovies",value:function(){var t=this;return e(o)(e(s).mark((function r(){var n,o,a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",n=new URLSearchParams({page:t.page}),o="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&").concat(n),localStorage.getItem("MOVIE_GENRES")||t.getGenres(),e.prev=4,e.next=7,fetch(o);case 7:return a=e.sent,e.next=10,a.json();case 10:return i=e.sent,localStorage.removeItem("CURRENT_ITEMS"),localStorage.setItem("CURRENT_ITEMS",JSON.stringify(i)),t.incrementPage(),console.log(i),e.abrupt("return",i);case 18:e.prev=18,e.t0=e.catch(4),console.error(e.t0);case 21:case"end":return e.stop()}}),r,null,[[4,18]])})))()}},{key:"searchMovies",value:function(){var t=this;return e(o)(e(s).mark((function r(){var n,o,a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",n=new URLSearchParams({page:t.page,query:t.searchQuery}),o=" https://api.themoviedb.org/3/search/movie?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&").concat(n),localStorage.getItem("MOVIE_GENRES")||t.getGenres(),e.prev=4,e.next=7,fetch(o);case 7:return a=e.sent,e.next=10,a.json();case 10:return i=e.sent,localStorage.removeItem("CURRENT_ITEMS"),localStorage.setItem("CURRENT_ITEMS",JSON.stringify(i)),console.log(i),e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:case"end":return e.stop()}}),r,null,[[4,17]])})))()}},{key:"getGenres",value:function(){return e(o)(e(s).mark((function t(){var r,n,o,a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",r="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c"),t.prev=2,t.next=5,fetch(r);case 5:return n=t.sent,t.next=8,n.json();case 8:return o=t.sent,a={},o.genres.forEach((function(t){var e=t.id,r=t.name;return a[e]=r})),localStorage.setItem("MOVIE_GENRES",JSON.stringify(a)),console.log(o),t.abrupt("return",o);case 16:t.prev=16,t.t0=t.catch(2),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})))()}},{key:"incrementPage",value:function(){return this.page+=1}},{key:"resetPage",value:function(){return this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),t}()})),a.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}}})),a.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(t,e){"use strict";function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return t}})),a.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",v="completed",p={};function g(){}function m(){}function y(){}var E={};s(E,a,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(I([])));b&&b!==r&&n.call(b,a)&&(E=b);var S=y.prototype=g.prototype=Object.create(E);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=y,s(S,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},w(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(S),s(S,c,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("4Nugj",(function(e,r){t(e.exports,"refs",(function(){return n}));var n={searchForm:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadeMoreBtn:document.querySelector('button[type="submit"]'),cardSetEl:document.querySelector(".card-set"),btnWatchAdd:document.querySelector(".add-watch"),btnQuechAdd:document.querySelector(".add-que"),libraryWatchedList:document.querySelector(".watched-library-list"),libraryQueList:document.querySelector(".que-library-list"),movieModal:document.querySelector(".modal")}})),a.register("fYmpR",(function(r,n){t(r.exports,"openModal",(function(){return s}));var o=a("4Nugj"),i=a("beR9g"),c=a("gYn5q");function s(t,r){var n=t.find((function(t){return t.id==r}));localStorage.getItem("QUEUE_MOVIES")||localStorage.setItem("QUEUE_MOVIES",JSON.stringify([])),localStorage.getItem("WATCHED_MOVIES")||localStorage.setItem("WATCHED_MOVIES",JSON.stringify([])),function(t){var r,n,a=t.poster_path,c=t.title,s=t.id,l=t.genre_ids,u=void 0===l?[]:l,d=(t.release_date,t.overview),f=t.vote_average,h=t.vote_count,v=t.popularity,p=t.original_title,g="https://image.tmdb.org/t/p/w400",m=JSON.parse(localStorage.getItem("MOVIE_GENRES")),y=u.map((function(t){return m[t]}));o.refs.movieModal.innerHTML='<button class="btn-modal-close" type="button"></button>\n  <div class="modal-movie"> <img src='.concat(a?g+a:e(i),' alt="').concat(c,' poster" class="modal-movie__img"></div>\n     <div class="modal__content">\n      <h2 class=\'modal__title\'>').concat(c,"</h2>\n    <table class='modal-info'>\n      <tr>\n        <td class='modal-info__title'>Vote / Votes</td>\n        <td class='modal-info__value'>\n          <span class='modal-info__rate'>").concat(f?null==f?void 0:f.toFixed(1):"?","</span>\n          /\n          <span class='modal-info__rate'>").concat(h,"</span>\n        </td>\n      </tr>\n      <tr>\n        <td class='modal-info__title'>Popularity</td>\n        <td class='modal-info__value'>").concat(null==v?void 0:v.toFixed(1),"</td>\n      </tr>\n      <tr>\n        <td class='modal-info__title'>Original Title</td>\n        <td class='modal-info__value'>").concat(p,"</td>\n      </tr>\n      <tr>\n        <td class='modal-info__title'>Genre</td>\n        <td class='modal-movie-info__value'>").concat(y.join(", "),"</td>\n      </tr>\n    </table>\n    <div class='modal-about'>\n      <h3 class='modal-about__title'>About</h3>\n      <p class='modal-about__desc'>").concat(d,'</p>\n    </div>\n    <div class="modal__text"></div>\n    <div class="modal-movie-btn">\n      <button type="button" class="btn-modal btn-modal__watched" data-id=').concat(s,">").concat((null===(r=localStorage.getItem("WATCHED_MOVIES"))||void 0===r?void 0:r.includes(s))?"REMOVE FROM WATCHED":"ADD TO WATCHED",'</button>\n      <button type="button" class="btn-modal btn-modal__queue" data-id=').concat(s,">").concat((null===(n=localStorage.getItem("QUEUE_MOVIES"))||void 0===n?void 0:n.includes(s))?"REMOVE FROM QUEUE":"ADD TO QUEUE","</button>\n    </div>\n  </div>")}(n),o.refs.movieModal.parentElement.classList.toggle("is-hidden"),document.addEventListener("keydown",l),o.refs.movieModal.parentElement.addEventListener("click",l),o.refs.movieModal.querySelector(".btn-modal__watched").addEventListener("click",(function(t){var e=JSON.parse(localStorage.getItem("WATCHED_MOVIES")),o=e.findIndex((function(t){return t.id==r}));-1==o?e.unshift(n):e.splice(o,1);localStorage.setItem("WATCHED_MOVIES",JSON.stringify(e)),t.target.textContent="ADD TO WATCHED"===t.target.textContent?"REMOVE FROM WATCHED":"ADD TO WATCHED",c.default.refreshMarkup()})),o.refs.movieModal.querySelector(".btn-modal__queue").addEventListener("click",(function(t){var e=JSON.parse(localStorage.getItem("QUEUE_MOVIES")),o=e.findIndex((function(t){return t.id==r}));-1==o?e.push(n):e.splice(o,1);t.target.textContent="ADD TO QUEUE"===t.target.textContent?"REMOVE FROM QUEUE":"ADD TO QUEUE",localStorage.setItem("QUEUE_MOVIES",JSON.stringify(e)),c.default.refreshMarkup()}))}function l(t){(t.target.classList.contains("backdrop")||t.target.classList.contains("btn-modal-close")||"Escape"===t.key)&&(o.refs.movieModal.parentElement.classList.add("is-hidden"),document.removeEventListener("keydown",l),t.currentTarget.removeEventListener("click",l))}})),a.register("gYn5q",(function(r,n){t(r.exports,"default",(function(){return l}));var o=a("8MBJY"),i=a("a2hTj"),c=a("6f6o8"),s=a("4Nugj"),l=new(function(){"use strict";function t(){e(o)(this,t)}return e(i)(t,[{key:"currentField",get:function(){return this.field},set:function(t){this.field=t}},{key:"refreshMarkup",value:function(){"queue"!==this.field?"watched"===this.field&&this.showWatched():this.showQueue()}},{key:"showQueue",value:function(){var t=(0,c.renderMovies)(JSON.parse(localStorage.getItem("QUEUE_MOVIES")));s.refs.cardSetEl.innerHTML=t,this.currentField="queue"}},{key:"showWatched",value:function(){var t=(0,c.renderMovies)(JSON.parse(localStorage.getItem("WATCHED_MOVIES")));s.refs.cardSetEl.innerHTML=t,this.currentField="watched"}}]),t}())})),a.register("9VC5X",(function(t,e){var r=document.querySelector("#switch"),n=document.querySelector(".theme"),o=document.querySelector("footer"),a=document.querySelector(".footer__container"),i=document.querySelectorAll(".movie-card__title"),c=document.querySelectorAll(".movie-card__genre"),s=document.querySelector(".anim-stars");"true"===localStorage.getItem("isDark")?(document.body.classList.add("dark"),n.classList.add("active"),r.classList.add("active"),o.classList.add("active"),a.classList.add("footer--dark"),s.classList.add("stars"),i.forEach((function(t){t.classList.add("active")})),c.forEach((function(t){t.classList.add("active")}))):(document.body.classList.remove("dark"),n.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"),a.classList.remove("footer--dark"),s.classList.remove("stars"),i.forEach((function(t){t.classList.remove("active")})),c.forEach((function(t){t.classList.remove("active")}))),document.querySelector("#theme").addEventListener("click",(function(){var t=document.body.classList.toggle("dark");n.classList.toggle("active"),r.classList.toggle("active"),o.classList.toggle("active"),a.classList.toggle("footer--dark"),s.classList.toggle("stars"),i.forEach((function(t){t.classList.toggle("active")})),c.forEach((function(t){t.classList.toggle("active")})),function(t){localStorage.setItem("isDark",t)}(t)}))})),a("iE7OH").register(JSON.parse('{"7nwxg":"library.13dff078.js","6ihl4":"default-poster.ff5560e1.jpg"}'))}();
//# sourceMappingURL=library.13dff078.js.map
