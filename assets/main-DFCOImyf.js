(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l="/Artosvita-js/assets/bcg_hero-BWzFskTa.png",d="/Artosvita-js/assets/bcg_advantages-BvB-58Xv.png";document.documentElement.style.setProperty("--bcg-hero",`url('${l}')`);document.documentElement.style.setProperty("--bcg-advantages",`url('${d}')`);const r=location.hostname.includes("github.io")?"/Artosvita-js":"",n=document.getElementById("header");if(n){const o=n.dataset.button==="true",s=n.dataset.courses==="true";n.innerHTML=`
        <div class="header__container container">
        <a class="logo" href="${r}/index.html">
        <div class="logo-div">          
          <svg class="logo-svg" width="32" height="32">
            <use href="${r}/sprite.svg#icon-logo"></use>
          </svg>
          <p class="logo-title">ART <br />OSVITA</p>
          </div>

        </a>
        <nav class="nav">
          <div class="nav-links">
            <a class="nav-about" href="${r}/src/pages/about.html">ПРО НАС</a>
            <a class="nav-blog" href="${r}/src/pages/blog/blog.html">БЛОГ</a>
          </div>
          ${s?"":`<a class="nav-courses" href="${r}/src/pages/courses/courses.html">КУРСИ</a>`}
        </nav>
        ${o?'<button class="sign-up">ЗАПИСАТИСЯ</button>':""}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="${r}/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
      
`}window.addEventListener("scroll",()=>{const o=document.getElementById("header"),s=o.offsetHeight;window.scrollY>s?o.classList.add("header--scrolled"):o.classList.remove("header--scrolled")});
