!function(){var e={59:function(){const{body:e}=document,t=document.querySelector(".theme-button");t.addEventListener("click",(()=>{t.classList.toggle("theme-button--dark"),e.classList.toggle("dark"),localStorage.setItem("saved-theme",e.classList.contains("dark")?"dark":"light"),localStorage.setItem("saved-icon",t.classList.contains("theme-button--dark")?"dark":"light")}));const o=localStorage.getItem("saved-theme"),a=localStorage.getItem("saved-icon");o&&(e.classList["dark"===o?"add":"remove"]("dark"),t.classList["dark"===a?"add":"remove"]("theme-button--dark"))},821:function(){const e=document.querySelector(".form-area"),t=document.querySelectorAll(".form-area__input"),o=document.querySelector(".form-area__comment"),a=document.querySelector(".form-area__button"),r=document.querySelector(".modal"),c=document.querySelector(".modal__body-button"),s=Array.from(t);s.push(o);e&&(e.addEventListener("input",((e,t)=>{let o;return(...a)=>{clearTimeout(o),o=setTimeout((()=>e.apply(this,a)),t)}})((()=>{const e=s.every((e=>""!==e.value.trim()));a.disabled=!e}),500)),e.addEventListener("submit",(e=>{e.preventDefault(),r.classList.add("modal--active")})),c.addEventListener("click",(()=>{r.classList.remove("modal--active")})))},593:function(){const e=document.querySelectorAll(".observed-section"),t=document.querySelectorAll(".nav-list__accordion.active .inner-nav__link");if(e.length>0){const o=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){"active",t.forEach((e=>e.classList.remove("active")));(o=t,a=e.target.id,Array.from(o).find((e=>e.dataset.link===a))).classList.add("active")}var o,a}))}),{threshold:.5});e.forEach((e=>o.observe(e)))}},242:function(){const e=document.querySelector(".progress__meter--active"),t=document.querySelector(".progress-label__label");let o=0;const a=()=>{o+=1,100===o&&(o=0),e.style.width=`${o}%`,t.textContent=`${o}%`};e&&(t.textContent=`${e.getAttribute("value")}%`,setInterval(a,70))}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a].call(c.exports,c,c.exports,o),c.exports}!function(){"use strict";o(59),o(821);const e=window.location.pathname;let t;try{t=e.match(/\/([^\/]+)\.html$/)[1]}catch(e){t="/"}var a=t;const r=document.querySelector(".header__logo-link"),c=document.querySelector(".footer__social-list"),s=document.querySelector(".header__menu-link--mission");if(["/","index"].includes(a)||(r.href="index.html",c.classList.remove("footer__social-list--active")),"mission"===a&&s.classList.add("header__menu-link--active"),!["/","index","mission"].includes(a)){const e=document.querySelector(".nav-list");e.querySelector(`[data-code=${a}]`).classList.add("active"),e.querySelector(`[data-active=${a}]`).classList.add("active"),e.addEventListener("click",(t=>{if(!t.target||!t.target.classList.contains("nav-list__button"))return;t.target.classList.toggle("active");const o=e.querySelector(`[data-active=${t.target.dataset.code}]`);o&&o.classList.toggle("active")}))}o(593),o(242)}()}();