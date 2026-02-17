(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const r=location.hostname.includes("github.io")?"/Artosvita-js":"";function $(){const e=document.getElementById("header");if(!e)return;const t=e.dataset.button==="true",n=e.dataset.courses==="true";e.innerHTML=`
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
          ${n?"":`<a class="nav-courses" href="${r}/src/pages/courses/courses.html">КУРСИ</a>`}
        </nav>
        ${t?'<button class="sign-up" data-modal-open>ЗАПИСАТИСЯ</button>':""}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="${r}/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
  `}const g=location.hostname.includes("github.io")?"/Artosvita-js":"",k=`
<div class="backdrop is-hidden">
  <div class="mobile-menu">
    <button type="button" class="mobile-menu-close-button">
      <svg class="menu-close" width="18" height="18">
        <use href="${g}/svg/icon-close.svg"></use>
      </svg>
    </button>

    <nav class="mobile__nav">
      <ul class="mobile__nav__list">
        <li class="mobile__nav__item">
          <a class="mobile__nav__link active" href="${g}/src/pages/courses/courses.html">КУРСИ</a>
        </li>
        <li class="mobile__nav__item">
          <a class="mobile__nav__link" href="${g}/src/pages/blog/blog.html">БЛОГ</a>
        </li>
        <li class="mobile__nav__item">
          <a class="mobile__nav__link" href="${g}/src/pages/about.html">ПРО ПРОЕКТ</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`;function E(){document.body.insertAdjacentHTML("beforeend",k);const e=document.querySelector(".backdrop"),t=document.querySelector(".mob-menu"),n=document.querySelector(".mobile-menu-close-button");if(!e||!t||!n)return;t.addEventListener("click",o),n.addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()});function o(){e.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}}const m=location.hostname.includes("github.io")?"/Artosvita-js":"";async function A(){return(await fetch(`${m}/reviews.json`)).json()}function S(e){return e.map(t=>`<li class="review-card">
      <div class="review-card__top">
        <img class="review-card__avatar" 
          srcset="
            ${m}/images/reviews/${t.image}-96.jpg 1x,
            ${m}/images/reviews/${t.image}-192.jpg 2x
              "
         src="${m}/images/reviews/${t.image}-96.jpg" 
         alt="фото випускника"
         width="96" 
         height="96" 
         loading="lazy">
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
            <use href="${m}/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </li>`).join("")}async function j(){const e=document.querySelector(".slider-track"),t=document.getElementById("next"),n=document.getElementById("prev");if(document.querySelector(".slider"),!e||!t||!n)return;const o=await A(),s=document.querySelector(".course-name")?.textContent.trim(),a=s?o.filter(l=>l.course===s):o;e.innerHTML=S(a);function c(){return window.innerWidth>=1200?3:window.innerWidth>=768?2:1}const d=e.children;if(!d.length)return;const f=c();if(d.length<=f){t.style.display="none",n.style.display="none";return}const p=d[0].cloneNode(!0),b=d[d.length-1].cloneNode(!0);e.appendChild(p),e.insertBefore(b,e.firstChild);let i=1;function u(l=!0){const y=e.children[0],w=getComputedStyle(e),L=parseInt(w.gap)||0,x=y.offsetWidth+L;e.style.transition=l?"transform 0.4s ease":"none",e.style.transform=`translateX(-${i*x}px)`}u(!1),t.onclick=()=>{i++,u()},n.onclick=()=>{i--,u()};let h=0,v=0;e.addEventListener("touchstart",l=>{h=l.touches[0].clientX}),e.addEventListener("touchend",l=>{v=l.changedTouches[0].clientX,_()});function _(){const l=h-v;Math.abs(l)<50||(l>0?t.click():n.click())}e.addEventListener("transitionend",()=>{i===e.children.length-1&&(i=1,u(!1)),i===0&&(i=e.children.length-2,u(!1))})}function M(){document.querySelectorAll(".module-btn").forEach(e=>{e.addEventListener("click",()=>{e.closest(".curriculum-moduls-item").classList.toggle("open")})})}function B(){const e=document.getElementById("header");e&&window.addEventListener("scroll",()=>{const t=e.offsetHeight;window.scrollY>t?e.classList.add("header--scrolled"):e.classList.remove("header--scrolled")})}const H=location.hostname.includes("github.io")?"/Artosvita-js":"",T=`
<div class="modal-menu is-hidden" data-modal>
      <div class="modal">
        <button class="modal-btn" data-modal-close type="button">
          <svg class="modal-icon" width="18" height="18">
            <use href="${H}/svg/icon-close.svg"></use>
          </svg>
        </button>
        <p class="form-title">ЗАПИС НА КУРС</p>
        <form class="modal-form">
          <label for="name" class="form-lable"
            ><input
              type="text"
              name="user_name"
              class="form-input"
              id="name"
              placeholder="Ваше ім'я"
              minlength="2"
              maxlength="12"
            />
          </label>
          <label for="last-name" class="form-lable"
            ><input
              type="text"
              name="last-name"
              class="form-input"
              id="last-name"
              placeholder="Ваше призвище"
              minlength="2"
              maxlength="12"
            />
          </label>
          <label for="phone" class="form-lable">
            <input
              type="tel"
              name="phone"
              class="form-input"
              id="phone"
              placeholder="Ваш номер телефону"
              minlength="9"
              maxlength="13"
            />
          </label>
          <label for="nikname" class="form-lable">
            <input type="text" name="nikname" class="form-input" id="nikname" placeholder="Ваш нікнєйм у Telegram" />
          </label>
          <label for="courses" class="form-lable">
            <select id="courses" name="courses" class="select">
              <option value="2d">Курс 2D композиції</option>
              <option value="art">Курс Академічного рисунку</option>
            </select></label
          >

          <label for="message" class="form-lable-textarea">
            <textarea
              class="form-textarea"
              rows="3"
              name="user_message"
              id="message"
              placeholder="Якщо маєте запитання, напишіть Ваше повідомлення!"
            ></textarea>
          </label>
          <label class="checkbox-label">
            <input class="checkbox" type="checkbox" name="user_agry" /><span class="checkbox-icon"></span>Я погоджуюсь з
            Умовами використання та політикою Конфіденційності Art Osvita</label
          >
          <!-- <label class="checkbox-label" for="user_agry">
            <input class="checkbox" type="checkbox" name="user_agry" id="user_agry" /><span class="text-radio"
              >Я погоджуюсь з Умовами використання та політикою Конфіденційності Art Osvita</span
            >
          </label> -->
          <button class="button modal-button" type="submit">Надіслати</button>
        </form>
      </div>
    </div>
`;function O(){document.body.insertAdjacentHTML("beforeend",T);const e=document.querySelector("[data-modal]"),t=document.querySelectorAll("[data-modal-open]"),n=document.querySelector("[data-modal-close]");if(!e||!t||!n)return;t.forEach(s=>{s.addEventListener("click",o)}),n.addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()});function o(){e.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}}function q(){const e=document.getElementById("tg-bots");e&&(e.innerHTML=`      
    <a href="https://t.me/maryartosvita" target="_blank">
        <img 
            srcset="
            /images/smole-img/bot-m-80.jpg 1x,
            /images/smole-img/bot-m-160.jpg 2x
              "
        
         src="./images/smole-img/bot-m-160.jpg" 
         alt="бот" 
         width="80" 
         height="80" 
         loading="lazy"
    />
    </a>
    <a href="https://t.me/vstup_artosvita" target="_blank">
        <img 
            srcset="
            /images/smole-img/bot-vstup-80.jpg 1x,
            /images/smole-img/bot-vstup-160.jpg 2x
              "
        
         src="./images/smole-img/bot-vstup-160.jpg" 
         alt="бот" 
         width="80" 
         height="80" 
         loading="lazy"
    />
      </a>`)}$();j();M();B();q();document.addEventListener("DOMContentLoaded",()=>{E()});document.addEventListener("DOMContentLoaded",()=>{O()});
