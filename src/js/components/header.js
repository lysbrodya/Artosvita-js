// import { BASE_PATH } from "../utils/paths.js";

const BASE_PATH = location.hostname.includes("github.io") ? "/Artosvita-js" : "";

export function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const withButton = header.dataset.button === "true";
  const withOutCouses = header.dataset.courses === "true";

  header.innerHTML = `
    <div class="header__container container">
        <a class="logo" href="${BASE_PATH}/index.html">
        <div class="logo-div">          
          <svg class="logo-svg" width="32" height="32">
            <use href="${BASE_PATH}/sprite.svg#icon-logo"></use>
          </svg>
          <p class="logo-title">ART <br />OSVITA</p>
          </div>

        </a>
        <nav class="nav">
          <div class="nav-links">
            <a class="nav-about" href="${BASE_PATH}/src/pages/about.html">ПРО НАС</a>
            <a class="nav-blog" href="${BASE_PATH}/src/pages/blog/blog.html">БЛОГ</a>
          </div>
          ${withOutCouses ? `` : `<a class="nav-courses" href="${BASE_PATH}/src/pages/courses/courses.html">КУРСИ</a>`}
        </nav>
        ${withButton ? `<button class="sign-up" data-modal-open>ЗАПИСАТИСЯ</button>` : ``}
              <button class="mob-menu" type="button">
<div type="button" class="mob-menu__border">
        <svg class="mob-menu__icon" width="40" height="32">
          <use href="${BASE_PATH}/sprite.svg#icon-menu"></use>
        </svg>
        </div>
      </button>
      </div>
  `;
}
