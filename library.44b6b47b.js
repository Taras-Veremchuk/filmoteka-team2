function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,r){var o,s;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var c={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)c[t[r]]=e[t[r]]},s=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"1zJhX":"library.44b6b47b.js","1aYh8":"default-poster.ff5560e1.jpg","5UbS1":"index.7596f186.css"}'));new URL(s("kyEFX").resolve("1aYh8"),import.meta.url).toString();const c=document.querySelector("#switch"),a=document.querySelector(".theme"),i=document.querySelector("footer"),l=document.querySelector(".footer__container"),n=document.querySelectorAll(".movie-card__title"),d=document.querySelectorAll(".movie-card__genre");"true"===localStorage.getItem("isDark")?(document.body.classList.add("dark"),a.classList.add("active"),c.classList.add("active"),i.classList.add("active"),l.classList.add("footer--dark"),n.forEach((e=>{e.classList.add("active")})),d.forEach((e=>{e.classList.add("active")}))):(document.body.classList.remove("dark"),a.classList.remove("active"),c.classList.remove("active"),i.classList.remove("active"),l.classList.remove("footer--dark"),n.forEach((e=>{e.classList.remove("active")})),d.forEach((e=>{e.classList.remove("active")}))),document.querySelector("#theme").addEventListener("click",(()=>{const e=document.body.classList.toggle("dark");a.classList.toggle("active"),c.classList.toggle("active"),i.classList.toggle("active"),l.classList.toggle("footer--dark"),n.forEach((e=>{e.classList.toggle("active")})),d.forEach((e=>{e.classList.toggle("active")})),(e=>{localStorage.setItem("isDark",e)})(e)}));
//# sourceMappingURL=library.44b6b47b.js.map