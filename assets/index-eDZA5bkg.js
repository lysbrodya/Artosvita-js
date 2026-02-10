(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const r=document.getElementById("header");if(r){const o=r.dataset.button==="true",t=r.dataset.courses==="true";r.innerHTML=`
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
        ${o?'<button class="sign-up">ЗАПИСАТИСЯ</button>':""}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
      
`}window.addEventListener("scroll",()=>{const o=document.getElementById("header"),t=o.offsetHeight;window.scrollY>t?o.classList.add("header--scrolled"):o.classList.remove("header--scrolled")});
