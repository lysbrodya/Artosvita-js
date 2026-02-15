const mobileMenuHTML = `
<div class="backdrop is-hidden">
  <div class="mobile-menu">
    <button type="button" class="mobile-menu-close-button">
      <svg class="menu-close" width="18" height="18">
        <use href="/svg/icon-close.svg"></use>
      </svg>
    </button>

    <nav class="mobile__nav">
      <ul class="mobile__nav__list">
        <li class="mobile__nav__item">
          <a class="mobile__nav__link active" href="/src/pages/courses/courses.html">КУРСИ</a>
        </li>
        <li class="mobile__nav__item">
          <a class="mobile__nav__link" href="/src/pages/blog/blog.html">БЛОГ</a>
        </li>
        <li class="mobile__nav__item">
          <a class="mobile__nav__link" href="/src/pages/about.html">ПРО ПРОЕКТ</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`;

export function initMobileMenu() {
  document.body.insertAdjacentHTML("beforeend", mobileMenuHTML);

  const backdrop = document.querySelector(".backdrop");
  const openBtn = document.querySelector(".mob-menu");
  const closeBtn = document.querySelector(".mobile-menu-close-button");

  if (!backdrop || !openBtn || !closeBtn) return;

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) toggleMenu();
  });

  function toggleMenu() {
    backdrop.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
}
