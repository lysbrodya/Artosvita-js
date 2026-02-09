(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const d=document.getElementById("header");if(d){const e=d.dataset.button==="true",s=d.dataset.courses==="true";d.innerHTML=`
        <div class="header__container container">
        <a class="logo" href="/index.html">
        <div class="logo-div">          
          <svg class="logo-svg" width="32" height="32">
            <use href="/sprite.svg#icon-logo"></use>
          </svg>
          <p class="logo-title">ART <br />OSVITA</p>
          </div>

        </a>
        <nav class="nav">
          <div class="nav-links">
            <a class="nav-about" href="/src/pages/about.html">ПРО НАС</a>
            <a class="nav-blog" href="/src/pages/blog/blog.html">БЛОГ</a>
          </div>
          ${s?"":'<a class="nav-courses" href="/src/pages/courses/courses.html">КУРСИ</a>'}
        </nav>
        ${e?'<button class="sign-up">ЗАПИСАТИСЯ</button>':""}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
      
`}window.addEventListener("scroll",()=>{const e=document.getElementById("header"),s=e.offsetHeight;window.scrollY>s?e.classList.add("header--scrolled"):e.classList.remove("header--scrolled")});async function w(){return(await fetch("/reviews.json")).json()}function _(e){return e.map(s=>`
    <li class="review-card">
      <div class="review-card__top">
        <img class="review-card__avatar" src="${s.image}" width="96" height="96">
        <div class="review-card__info">
          <p class="review-card__date">${s.date}</p>
          <h4 class="review-card__name">${s.name}</h4>
          <p class="review-card__course">${s.course}</p>
        </div>
      </div>
      <div class="review-card__text">
        <p>${s.text}</p>
      </div>
      <div class="review-card__bottom">
        <div class="review-card__score">
          <span class="score-first">БАЛ:</span>
          <span class="review-card__score-value">${s.score}</span>
        </div>
        <a class="review-card__insta" href="${s.instagram}" target="_blank">
          <svg class="icon-insta" width="40" height="40">
            <use href="/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("")}async function b(){const e=document.querySelector(".slider-track"),s=document.getElementById("next"),o=document.getElementById("prev");if(!e||!s||!o)return;const l=await w();e.innerHTML=_(l);const t=e.children;if(!t.length)return;const r=t[0].cloneNode(!0),i=t[t.length-1].cloneNode(!0);e.appendChild(r),e.insertBefore(i,e.firstChild);let c=1;function a(n=!0){const v=e.children[0],g=getComputedStyle(e),p=parseInt(g.gap)||0,m=v.offsetWidth+p;e.style.transition=n?"transform 0.4s ease":"none",e.style.transform=`translateX(-${c*m}px)`}a(!1),s.onclick=()=>{c++,a()},o.onclick=()=>{c--,a()};let u=0,h=0;e.addEventListener("touchstart",n=>{u=n.touches[0].clientX}),e.addEventListener("touchend",n=>{h=n.changedTouches[0].clientX,f()});function f(){const n=u-h;Math.abs(n)<50||(n>0?s.click():o.click())}e.addEventListener("transitionend",()=>{c===e.children.length-1&&(c=1,a(!1)),c===0&&(c=e.children.length-2,a(!1))})}b();
