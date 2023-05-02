!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequired7c6=a),a.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("6f6o8",(function(n,r){t(n.exports,"renderMovies",(function(){return i}));var o=a("beR9g");function i(t){var n=JSON.parse(localStorage.getItem("MOVIE_GENRES"));return t.map((function(t){var r=t.poster_path,a=t.title,i=t.id,c=t.genre_ids,s=void 0===c?[]:c,l=t.release_date,u=void 0===l?"":l,d=s.map((function(t){return n[t]}));return'<li class="card-set__item movie-card"><a href="#?" class="movie-card__link" data-id='.concat(i,'><div class="movie-card__holder"><img src=').concat(r?"https://image.tmdb.org/t/p/w400"+r:e(o),' alt="').concat(a,' poster" class="movie-card__img" width="100%"></div>\n        <p class="movie-card__title">').concat(a,'\n            </p><p class="movie-card__genre">').concat(d.length<3?d.join(", "):d.slice(0,2).join(", ")+", Other"," ").concat(d.length&&u?"|":"",'\n                <span class="movie-card__date">').concat(u.slice(0,4),"</span>\n            </p></a></li>")})).join("")}})),a.register("beR9g",(function(t,e){t.exports=a("aNJCr").getBundleURL("7nwxg")+a("iE7OH").resolve("6ihl4")})),a.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a.register("e3SQQ",(function(n,r){t(n.exports,"default",(function(){return u}));var o=a("bpxeT"),i=a("8MBJY"),c=a("a2hTj"),s=a("2TvXO"),l=a("diaKp"),u=function(){"use strict";function t(){e(i)(this,t),this.searchQuery="",this.page=1}return e(c)(t,[{key:"fetchMovies",value:function(){var t=this;return e(o)(e(s).mark((function n(){var r,o,a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,l.showSpinner)(),"4c6e55add2f00844e9f979bd7b0fac7c",r=new URLSearchParams({page:t.page}),o="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&").concat(r),localStorage.getItem("MOVIE_GENRES")||t.getGenres(),e.prev=5,e.next=8,fetch(o);case 8:return a=e.sent,e.next=11,a.json();case 11:return i=e.sent,localStorage.removeItem("CURRENT_ITEMS"),localStorage.setItem("CURRENT_ITEMS",JSON.stringify(i)),t.incrementPage(),console.log(i),e.abrupt("return",i);case 19:e.prev=19,e.t0=e.catch(5),console.error(e.t0);case 22:case"end":return e.stop()}}),n,null,[[5,19]])})))()}},{key:"searchMovies",value:function(){var t=this;return e(o)(e(s).mark((function n(){var r,o,a,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,l.showSpinner)(),"4c6e55add2f00844e9f979bd7b0fac7c",r=new URLSearchParams({page:t.page,query:t.searchQuery}),o=" https://api.themoviedb.org/3/search/movie?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c","&").concat(r),localStorage.getItem("MOVIE_GENRES")||t.getGenres(),e.prev=5,e.next=8,fetch(o);case 8:return a=e.sent,e.next=11,a.json();case 11:return i=e.sent,localStorage.removeItem("CURRENT_ITEMS"),localStorage.setItem("CURRENT_ITEMS",JSON.stringify(i)),console.log(i),e.abrupt("return",i);case 18:e.prev=18,e.t0=e.catch(5),console.error(e.t0);case 21:case"end":return e.stop()}}),n,null,[[5,18]])})))()}},{key:"getGenres",value:function(){return e(o)(e(s).mark((function t(){var n,r,o,a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"4c6e55add2f00844e9f979bd7b0fac7c",n="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("4c6e55add2f00844e9f979bd7b0fac7c"),t.prev=2,t.next=5,fetch(n);case 5:return r=t.sent,t.next=8,r.json();case 8:return o=t.sent,a={},o.genres.forEach((function(t){var e=t.id,n=t.name;return a[e]=n})),localStorage.setItem("MOVIE_GENRES",JSON.stringify(a)),console.log(o),t.abrupt("return",o);case 16:t.prev=16,t.t0=t.catch(2),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})))()}},{key:"incrementPage",value:function(){return this.page+=1}},{key:"resetPage",value:function(){return this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),t}()})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}})),a.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,r){e&&n(t.prototype,e);r&&n(t,r);return t}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new M(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return I()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?m:h,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",m="completed",p={};function g(){}function v(){}function w(){}var b={};s(b,a,(function(){return this}));var y=Object.getPrototypeOf,k=y&&y(y(T([])));k&&k!==n&&r.call(k,a)&&(b=k);var _=w.prototype=g.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=w,s(_,"constructor",w),s(w,"constructor",v),v.displayName=s(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(S.prototype),s(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new S(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),s(_,c,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("diaKp",(function(e,n){function r(){document.querySelector(".spiner-box").classList.remove("spinner--hidden")}function o(){document.querySelector(".spiner-box").classList.add("spinner--hidden")}t(e.exports,"showSpinner",(function(){return r})),t(e.exports,"hideSpinner",(function(){return o}))})),a.register("4Nugj",(function(e,n){t(e.exports,"refs",(function(){return r}));var r={searchForm:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadeMoreBtn:document.querySelector('button[type="submit"]'),cardSetEl:document.querySelector(".card-set"),btnWatchAdd:document.querySelector(".add-watch"),btnQuechAdd:document.querySelector(".add-que"),libraryWatchedList:document.querySelector(".watched-library-list"),libraryQueList:document.querySelector(".que-library-list"),movieModal:document.querySelector(".modal")}})),a.register("fYmpR",(function(n,r){t(n.exports,"openModal",(function(){return s}));var o=a("4Nugj"),i=a("beR9g"),c=a("gYn5q");function s(t,n){var r=t.find((function(t){return t.id==n}));localStorage.getItem("QUEUE_MOVIES")||localStorage.setItem("QUEUE_MOVIES",JSON.stringify([])),localStorage.getItem("WATCHED_MOVIES")||localStorage.setItem("WATCHED_MOVIES",JSON.stringify([])),function(t){var n,r,a=t.poster_path,c=t.title,s=t.id,l=t.genre_ids,u=void 0===l?[]:l,d=(t.release_date,t.overview),h=t.vote_average,f=t.vote_count,m=t.popularity,p=t.original_title,g="https://image.tmdb.org/t/p/w400",v=JSON.parse(localStorage.getItem("MOVIE_GENRES")),w=u.map((function(t){return v[t]}));o.refs.movieModal.innerHTML='<button class="btn-modal-close" type="button"></button>\n  <div class="modal-movie"> <img src='.concat(a?g+a:e(i),' alt="').concat(c,' poster" class="modal-movie__img"></div>\n     <div class="modal__content">\n      <h2 class=\'modal__title\'>').concat(c,"</h2>\n    <table class='modal-info'>\n      <tr>\n        <td class='modal-info__title'>Vote / Votes</td>\n        <td class='modal-info__value'>\n          <span class='modal-info__rate'>").concat(h?null==h?void 0:h.toFixed(1):"?","</span>\n          /\n          <span class='modal-info__rate'>").concat(f,"</span>\n        </td>\n      </tr>\n      <tr>\n        <td class='modal-info__title'>Popularity</td>\n        <td class='modal-info__value'>").concat(null==m?void 0:m.toFixed(1),"</td>\n      </tr>\n      <tr>\n        <td class='modal-info__title'>Original Title</td>\n        <td class='modal-info__value'>").concat(p,"</td>\n      </tr>\n      <tr>\n        <td class='modal-info__title'>Genre</td>\n        <td class='modal-movie-info__value'>").concat(w.join(", "),"</td>\n      </tr>\n    </table>\n    <div class='modal-about'>\n      <h3 class='modal-about__title'>About</h3>\n      <p class='modal-about__desc'>").concat(d,'</p>\n    </div>\n    <div class="modal__text"></div>\n    <div class="modal-movie-btn">\n      <button type="button" class="btn-modal btn-modal__watched" data-id=').concat(s,">").concat((null===(n=localStorage.getItem("WATCHED_MOVIES"))||void 0===n?void 0:n.includes(s))?"REMOVE FROM WATCHED":"ADD TO WATCHED",'</button>\n      <button type="button" class="btn-modal btn-modal__queue" data-id=').concat(s,">").concat((null===(r=localStorage.getItem("QUEUE_MOVIES"))||void 0===r?void 0:r.includes(s))?"REMOVE FROM QUEUE":"ADD TO QUEUE","</button>\n    </div>\n  </div>")}(r),o.refs.movieModal.parentElement.classList.toggle("is-hidden"),document.addEventListener("keydown",l),o.refs.movieModal.parentElement.addEventListener("click",l),o.refs.movieModal.querySelector(".btn-modal__watched").addEventListener("click",(function(t){var e=JSON.parse(localStorage.getItem("WATCHED_MOVIES")),o=e.findIndex((function(t){return t.id==n}));-1==o?e.unshift(r):e.splice(o,1);localStorage.setItem("WATCHED_MOVIES",JSON.stringify(e)),t.target.textContent="ADD TO WATCHED"===t.target.textContent?"REMOVE FROM WATCHED":"ADD TO WATCHED",c.default.refreshMarkup()})),o.refs.movieModal.querySelector(".btn-modal__queue").addEventListener("click",(function(t){var e=JSON.parse(localStorage.getItem("QUEUE_MOVIES")),o=e.findIndex((function(t){return t.id==n}));-1==o?e.push(r):e.splice(o,1);t.target.textContent="ADD TO QUEUE"===t.target.textContent?"REMOVE FROM QUEUE":"ADD TO QUEUE",localStorage.setItem("QUEUE_MOVIES",JSON.stringify(e)),c.default.refreshMarkup()}))}function l(t){(t.target.classList.contains("backdrop")||t.target.classList.contains("btn-modal-close")||"Escape"===t.key)&&(o.refs.movieModal.parentElement.classList.add("is-hidden"),document.removeEventListener("keydown",l),t.currentTarget.removeEventListener("click",l))}})),a.register("gYn5q",(function(n,r){t(n.exports,"default",(function(){return l}));var o=a("8MBJY"),i=a("a2hTj"),c=a("6f6o8"),s=a("4Nugj"),l=new(function(){"use strict";function t(){e(o)(this,t)}return e(i)(t,[{key:"refreshMarkup",value:function(){"queue"!==this.currentField?"watched"===this.currentField&&this.showWatched():this.showQueue()}},{key:"showQueue",value:function(){var t=JSON.parse(localStorage.getItem("QUEUE_MOVIES"));if(t){var e="";if(this.filmName){var n,r=this;if((null===(n=this.filmName)||void 0===n?void 0:n.length)<2)return;var o=t.filter((function(t){return t.title.toLowerCase().includes(r.filmName)}));e=(0,c.renderMovies)(o)}else e=(0,c.renderMovies)(t);s.refs.cardSetEl.innerHTML=e,this.currentField="queue"}}},{key:"showWatched",value:function(){var t=JSON.parse(localStorage.getItem("WATCHED_MOVIES"));if(t){var e="";if(this.filmName){var n,r=this;if((null===(n=this.filmName)||void 0===n?void 0:n.length)<2)return;var o=t.filter((function(t){return t.title.toLowerCase().includes(r.filmName)}));e=(0,c.renderMovies)(o)}else e=(0,c.renderMovies)(t);s.refs.cardSetEl.innerHTML=e,this.currentField="watched"}}},{key:"showAll",value:function(t){this.filmName=null==t?void 0:t.toLowerCase().trim(),"queue"!==this.currentField?"watched"===this.currentField&&this.showWatched():this.showQueue()}}]),t}())})),a.register("9VC5X",(function(t,e){var n=document.querySelector("#switch"),r=document.querySelector(".theme"),o=document.querySelector("footer"),a=document.querySelector(".footer__container"),i=document.querySelectorAll(".movie-card__title"),c=document.querySelectorAll(".movie-card__genre"),s=document.querySelector(".anim-stars");"true"===localStorage.getItem("isDark")?(document.body.classList.add("dark"),r.classList.add("active"),n.classList.add("active"),o.classList.add("active"),a.classList.add("footer--dark"),s.classList.add("stars"),i.forEach((function(t){t.classList.add("active")})),c.forEach((function(t){t.classList.add("active")}))):(document.body.classList.remove("dark"),r.classList.remove("active"),n.classList.remove("active"),o.classList.remove("active"),a.classList.remove("footer--dark"),s.classList.remove("stars"),i.forEach((function(t){t.classList.remove("active")})),c.forEach((function(t){t.classList.remove("active")}))),document.querySelector("#theme").addEventListener("click",(function(){var t=document.body.classList.toggle("dark");r.classList.toggle("active"),n.classList.toggle("active"),o.classList.toggle("active"),a.classList.toggle("footer--dark"),s.classList.toggle("stars"),i.forEach((function(t){t.classList.toggle("active")})),c.forEach((function(t){t.classList.toggle("active")})),function(t){localStorage.setItem("isDark",t)}(t)}))})),a.register("kyBSd",(function(t,e){var n,r=a("dyT35"),o=(n='\n    <div class="main-team">\n    <span class="close">&times;</span>',[{name:" Taras Veremchuk",github:"https://github.com/",photo_path:"img/team-img/taras.png",linkedin:"https://www.linkedin.com/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"Team Lead"},{name:"Anna Kucherenko",github:"https://github.com/FireAnna",photo_path:"img/team-img/anna.png",linkedin:"https://www.linkedin.com/in/anna-k-92798226b/ ",facebook:"https://www.facebook.com/profile.php?id=100009926686415",insta:"https://www.instagram.com/a.ku4erenk0/",role:"GoIT student"},{name:"Nataliia Dubinska",github:"https://github.com/SambykaLight?tab=repositories",photo_path:"img/team-img/sambyka.png",linkedin:"https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin",facebook:"https://www.facebook.com/nataliia.dubinska",insta:"https://www.instagram.com",role:"GoIT student"},{name:"Denys Astafiev",github:"https://github.com/denius97",photo_path:"img/team-img/den.png",linkedin:"https://www.linkedin.com/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"GoIT student"},{name:"Iryna Pytska",github:"https://github.com/irina77676e",photo_path:"img/team-img/ira.png",linkedin:"https://www.linkedin.com/in/iryna-pytska-5485a9235/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/i_pytskaya/",role:"GoIT student"},{name:"Ksysha Vashchenko",github:"https://github.com/",photo_path:"img/team-img/ksenia.png",linkedin:"https://www.linkedin.com/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"GoIT Student"},{name:"Yevhenii Doroshenko",github:"https://github.com/YevheniiDoroshenko88",photo_path:"img/team-img/eugen.png",linkedin:"https://www.linkedin.com/in/yevhenii-doroshenko-baba26270",facebook:"https://www.facebook.com/",insta:"https://instagram.com/doroshenko.zhenya?igshid=YmMyMTA2M2Y=",role:"GoIT Student"},{name:"Roman Lastovetskyi",github:"https://github.com/R0m5",photo_path:"img/team-img/roma.png",linkedin:"https://www.linkedin.com/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"Scrum Master"},{name:"Vladyslav Pavlenko",github:"https://github.com/VladyslavDmytrovychPavlenko",photo_path:"img/team-img/vlad.png",linkedin:"linkedin.com/in/vladyslav-pavlenko-180b4b270",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"GoIT student"},{name:"Julia Dymarets",github:"https://github.com/",photo_path:"img/team-img/yulia.png",linkedin:"https://www.linkedin.com/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"GoIT student"},{name:" Albina Kokoieva",github:"https://github.com/AlbinaFox",photo_path:"img/team-img/albina.png",linkedin:" https://www.linkedin.com/in/albina-kokoieva-4b7a25270/",facebook:"https://www.facebook.com/",insta:" https://instagram.com/albina.kokoieva_?igshid=YmMyMTA2M2Y=",role:"GoIT student"},{name:"Nazariy Kulyk",github:"https://github.com/Nazar-kulyk",photo_path:"img/team-img/nazariy.png",linkedin:"www.linkedin.com/in/nazariy-kulyk-28b84225b",facebook:"https://www.facebook.com/",insta:"https://instagram.com/nazar_kulyk?igshid=YmMyMTA2M2Y=",role:"GoIT student"},{name:"Roman Lebedynskyi",github:"https://github.com/",photo_path:"img/team-img/romanlebed.png",linkedin:"https://www.linkedin.com/",facebook:"https://www.facebook.com/",insta:"https://www.instagram.com/",role:"GoIT student"},{name:"Repeta Dalai Lama",github:" https://github.com/luxplanjay",photo_path:"img/team-img/repeta.png",linkedin:"https://www.linkedin.com/in/alex-repeta/",facebook:"https://www.facebook.com/profile.php?id=100013719586629",insta:"https://www.instagram.com/alexander.repeta/",role:"Team Lead"}].forEach((function(t){t.name&&(n+='<div class="team-modal">\n        <div class="profile-card">\n        <div class="img">\n          <img\n            src="'.concat(t.photo_path,'"\n            width="60"\n          />\n        </div>\n        <div class="caption">\n          <h3>').concat(t.name,"</h3>\n          <p>").concat(t.role,'</p>\n          <div class="social">\n            <a\n                  class="sosial-links"\n                  href="').concat(t.facebook,'"\n                  target="_blank"\n                  rel="noopener noreferrer"\n                >\n                  <svg class="social-icon" width="30" height="30">\n                    <use href="svg/sprite-team.svg#icon-facebook"></use>\n                  </svg>\n                </a>\n            <a\n                  class="sosial-link"\n                  href="').concat(t.insta,'"\n                  target="_blank"\n                  rel="noopener noreferrer"\n                >\n                  <svg class="social-icon" width="30" height="30">\n                    <use href="svg/sprite-team.svg#icon-instagram"></use>\n                  </svg>\n                </a>\n            <a\n                  class="sosial-links"\n                  href="').concat(t.github,'"\n                  target="_blank"\n                  rel="noopener noreferrer"\n                >\n                  <svg class="social-icon" width="30" height="30">\n                    <use href="svg/sprite-team.svg#icon-github"></use>\n                  </svg>\n                </a>\n            <a\n                  class="sosial-link"\n                  href="').concat(t.linkedin,'"\n                  target="_blank"\n                  rel="noopener noreferrer"\n                >\n                  <svg class="social-icon" width="30" height="30">\n                    <use href="svg/sprite-team.svg#icon-linkedin"></use>\n                  </svg>\n                </a>\n          </div>\n        </div>\n      </div>\n      </div>\n      '))})),n=n.slice(0,-23));document.querySelector(".js-team-modal").addEventListener("click",(function(t){function e(t){console.log(t.target.nodeName),("Escape"===t.code||t.target.classList.contains("close"))&&(i.close(),document.removeEventListener("keydown",e),document.removeEventListener("click",e))}t.preventDefault(),i.show(),document.addEventListener("keydown",e),document.addEventListener("click",e)}));var i=r.create(o)})),a.register("dyT35",(function(t,e){t.exports=function t(e,n,r){function o(i,c){if(!n[i]){if(!e[i]){var s=void 0;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[i]={exports:{}};e[i][0].call(u.exports,(function(t){return o(e[i][1][t]||t)}),u,u.exports,t,e,n,r)}return n[i].exports}for(var a=void 0,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},a=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=a,n.create=function(t,e){var n=function(t,e){var n=r('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return a.appendChild(t)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),s=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),i=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&i()}));var c={element:function(){return n},visible:function(){return a(n)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(c)}))},close:i};return c}},{}]},{},[1])(1)})),a("iE7OH").register(JSON.parse('{"7nwxg":"library.9d3762a4.js","6ihl4":"default-poster.ff5560e1.jpg","5UbS1":"index.9aee11b4.css"}'))}();
//# sourceMappingURL=library.9d3762a4.js.map