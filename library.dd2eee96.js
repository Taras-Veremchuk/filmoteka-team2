function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"1zJhX":"library.dd2eee96.js","1aYh8":"default-poster.5762cb38.jpg","5UbS1":"index.bc47a1d2.css"}'));var s;s=new URL(a("kyEFX").resolve("1aYh8"),import.meta.url).toString();const c=document.querySelector(".card-set");function i(e){e.preventDefault(),console.log(e)}(new class{constructor(){this.searchQuery="",this.page=1}async fetchMovies(){const e=`https://api.themoviedb.org/3/trending/movie/week?api_key=4c6e55add2f00844e9f979bd7b0fac7c&${new URLSearchParams({page:this.page})}`;localStorage.getItem("MOVIE_GENRES")||this.getGenres();try{const t=await fetch(e),r=await t.json();return this.incrementPage(),console.log(r),r}catch(e){console.error(e)}}async searchMovies(){const e=` https://api.themoviedb.org/3/search/movie?api_key=4c6e55add2f00844e9f979bd7b0fac7c&${new URLSearchParams({page:this.page,query:this.searchQuery})}`;localStorage.getItem("MOVIE_GENRES")||this.getGenres();try{const t=await fetch(e),r=await t.json();return console.log(r),r}catch(e){console.error(e)}}async getGenres(){try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4c6e55add2f00844e9f979bd7b0fac7c"),t=await e.json(),r={};return t.genres.forEach((({id:e,name:t})=>r[e]=t)),localStorage.setItem("MOVIE_GENRES",JSON.stringify(r)),console.log(t),t}catch(e){console.error(e)}}incrementPage(){return this.page+=1}resetPage(){return this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}).fetchMovies().then((function(e){const r=JSON.parse(localStorage.getItem("MOVIE_GENRES")),n=e.results.map((e=>{const{poster_path:n,title:o,genre_ids:a,release_date:c}=e,i=a.map((e=>r[e]));return`<li class="card-set__item movie-card"><a href="" class="movie-card__link"><div class="movie-card__holder"><img src=${n?"https://image.tmdb.org/t/p/w400"+n:t(s)} alt="${o} poster" class="movie-card__img" width="100%"></div><p class="movie-card__title">${o}            \n            </p><p class="movie-card__genre">${i.length<3?i.join(", "):i.slice(0,2).join(", ")+", Other"} | \n                <span class="movie-card__date">${c.slice(0,4)}</span>\n            </p></a></li>`})).join("");c.insertAdjacentHTML("beforeend",n),c.querySelectorAll(".movie-card__link").forEach((e=>e.addEventListener("click",i)))})).catch((e=>console.log("Error: ",e)));
//# sourceMappingURL=library.dd2eee96.js.map
