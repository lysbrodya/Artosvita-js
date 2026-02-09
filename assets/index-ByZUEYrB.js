(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const d=document.getElementById("header");if(d){const e=d.dataset.button==="true",t=d.dataset.courses==="true";d.innerHTML=`
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
          ${t?"":'<a class="nav-courses" href="/src/pages/courses/courses.html">КУРСИ</a>'}
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
      
`}window.addEventListener("scroll",()=>{const e=document.getElementById("header"),t=e.offsetHeight;window.scrollY>t?e.classList.add("header--scrolled"):e.classList.remove("header--scrolled")});async function w(){return(await fetch("/src/styles/reviews.json")).json()}function _(e){return e.map(t=>`
    <li class="review-card">
      <div class="review-card__top">
        <img class="review-card__avatar" src="${t.image}" width="96" height="96">
        <div class="review-card__info">
          <p class="review-card__date">${t.date}</p>
          <h4 class="review-card__name">${t.name}</h4>
          <p class="review-card__course">${t.course}</p>
        </div>
      </div>
      <div class="review-card__text">
        <p>${t.text}</p>
      </div>
      <div class="review-card__bottom">
        <div class="review-card__score">
          <span class="score-first">БАЛ:</span>
          <span class="review-card__score-value">${t.score}</span>
        </div>
        <a class="review-card__insta" href="${t.instagram}" target="_blank">
          <svg class="icon-insta" width="40" height="40">
            <use href="/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("")}async function y(){const e=document.querySelector(".slider-track"),t=document.getElementById("next"),o=document.getElementById("prev");if(!e||!t||!o)return;const l=await w();e.innerHTML=_(l);const s=e.children;if(!s.length)return;const r=s[0].cloneNode(!0),i=s[s.length-1].cloneNode(!0);e.appendChild(r),e.insertBefore(i,e.firstChild);let c=1;function a(n=!0){const v=e.children[0],g=getComputedStyle(e),p=parseInt(g.gap)||0,m=v.offsetWidth+p;e.style.transition=n?"transform 0.4s ease":"none",e.style.transform=`translateX(-${c*m}px)`}a(!1),t.onclick=()=>{c++,a()},o.onclick=()=>{c--,a()};let u=0,h=0;e.addEventListener("touchstart",n=>{u=n.touches[0].clientX}),e.addEventListener("touchend",n=>{h=n.changedTouches[0].clientX,f()});function f(){const n=u-h;Math.abs(n)<50||(n>0?t.click():o.click())}e.addEventListener("transitionend",()=>{c===e.children.length-1&&(c=1,a(!1)),c===0&&(c=e.children.length-2,a(!1))})}y();
