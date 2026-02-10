(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const b="/Artosvita-js/assets/bcg_hero-BWzFskTa.png",w="/Artosvita-js/assets/bcg_advantages-BvB-58Xv.png";document.documentElement.style.setProperty("--bcg-hero",`url('${b}')`);document.documentElement.style.setProperty("--bcg-advantages",`url('${w}')`);const o=location.hostname.includes("github.io")?"/Artosvita-js":"",u=document.getElementById("header");if(u){const e=u.dataset.button==="true",s=u.dataset.courses==="true";u.innerHTML=`
        <div class="header__container container">
        <a class="logo" href="${o}/index.html">
        <div class="logo-div">          
          <svg class="logo-svg" width="32" height="32">
            <use href="${o}/sprite.svg#icon-logo"></use>
          </svg>
          <p class="logo-title">ART <br />OSVITA</p>
          </div>

        </a>
        <nav class="nav">
          <div class="nav-links">
            <a class="nav-about" href="${o}/src/pages/about.html">ПРО НАС</a>
            <a class="nav-blog" href="${o}/src/pages/blog/blog.html">БЛОГ</a>
          </div>
          ${s?"":`<a class="nav-courses" href="${o}/src/pages/courses/courses.html">КУРСИ</a>`}
        </nav>
        ${e?'<button class="sign-up">ЗАПИСАТИСЯ</button>':""}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="${o}/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
      
`}window.addEventListener("scroll",()=>{const e=document.getElementById("header"),s=e.offsetHeight;window.scrollY>s?e.classList.add("header--scrolled"):e.classList.remove("header--scrolled")});async function y(){return(await fetch(`${o}/reviews.json`)).json()}function $(e){return e.map(s=>`
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
            <use href="${o}/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("")}async function E(){const e=document.querySelector(".slider-track"),s=document.getElementById("next"),a=document.getElementById("prev");if(!e||!s||!a)return;const d=await y();e.innerHTML=$(d);const t=e.children;if(!t.length)return;const r=t[0].cloneNode(!0),i=t[t.length-1].cloneNode(!0);e.appendChild(r),e.insertBefore(i,e.firstChild);let c=1;function l(n=!0){const f=e.children[0],p=getComputedStyle(e),m=parseInt(p.gap)||0,_=f.offsetWidth+m;e.style.transition=n?"transform 0.4s ease":"none",e.style.transform=`translateX(-${c*_}px)`}l(!1),s.onclick=()=>{c++,l()},a.onclick=()=>{c--,l()};let v=0,h=0;e.addEventListener("touchstart",n=>{v=n.touches[0].clientX}),e.addEventListener("touchend",n=>{h=n.changedTouches[0].clientX,g()});function g(){const n=v-h;Math.abs(n)<50||(n>0?s.click():a.click())}e.addEventListener("transitionend",()=>{c===e.children.length-1&&(c=1,l(!1)),c===0&&(c=e.children.length-2,l(!1))})}E();
