(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const y="/Artosvita-js/assets/bcg_hero-BWzFskTa.png",$="/Artosvita-js/assets/bcg_advantages-BvB-58Xv.png";document.documentElement.style.setProperty("--bcg-hero",`url('${y}')`);document.documentElement.style.setProperty("--bcg-advantages",`url('${$}')`);const c=location.hostname.includes("github.io")?"/Artosvita-js":"",u=document.getElementById("header");if(u){const e=u.dataset.button==="true",t=u.dataset.courses==="true";u.innerHTML=`
        <div class="header__container container">
        <a class="logo" href="${c}/index.html">
        <div class="logo-div">          
          <svg class="logo-svg" width="32" height="32">
            <use href="${c}/sprite.svg#icon-logo"></use>
          </svg>
          <p class="logo-title">ART <br />OSVITA</p>
          </div>

        </a>
        <nav class="nav">
          <div class="nav-links">
            <a class="nav-about" href="${c}/src/pages/about.html">ПРО НАС</a>
            <a class="nav-blog" href="${c}/src/pages/blog/blog.html">БЛОГ</a>
          </div>
          ${t?"":`<a class="nav-courses" href="${c}/src/pages/courses/courses.html">КУРСИ</a>`}
        </nav>
        ${e?'<button class="sign-up">ЗАПИСАТИСЯ</button>':""}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="${c}/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
      
`}window.addEventListener("scroll",()=>{const e=document.getElementById("header"),t=e.offsetHeight;window.scrollY>t?e.classList.add("header--scrolled"):e.classList.remove("header--scrolled")});async function E(){return(await fetch(`${c}/reviews.json`)).json()}function L(e){return e.map(t=>`
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
            <use href="${c}/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("")}async function A(){const e=document.querySelector(".slider-track"),t=document.getElementById("next"),i=document.getElementById("prev");if(!e||!t||!i)return;const l=await E(),s=document.querySelector("h1")?.textContent.trim(),r=s?l.filter(n=>n.course===s):l;e.innerHTML=L(r);const o=e.children;if(!o.length)return;const g=o[0].cloneNode(!0),f=o[o.length-1].cloneNode(!0);e.appendChild(g),e.insertBefore(f,e.firstChild);let a=1;function d(n=!0){const m=e.children[0],_=getComputedStyle(e),w=parseInt(_.gap)||0,b=m.offsetWidth+w;e.style.transition=n?"transform 0.4s ease":"none",e.style.transform=`translateX(-${a*b}px)`}d(!1),t.onclick=()=>{a++,d()},i.onclick=()=>{a--,d()};let v=0,h=0;e.addEventListener("touchstart",n=>{v=n.touches[0].clientX}),e.addEventListener("touchend",n=>{h=n.changedTouches[0].clientX,p()});function p(){const n=v-h;Math.abs(n)<50||(n>0?t.click():i.click())}e.addEventListener("transitionend",()=>{a===e.children.length-1&&(a=1,d(!1)),a===0&&(a=e.children.length-2,d(!1))})}A();document.querySelectorAll(".module-btn").forEach(e=>{e.addEventListener("click",()=>{e.closest(".curriculum-moduls-item").classList.toggle("open")})});
