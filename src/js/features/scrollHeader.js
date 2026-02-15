export function initScrollHeader() {
  const headerElement = document.getElementById("header");
  if (!headerElement) return;

  window.addEventListener("scroll", () => {
    const headerHeight = headerElement.offsetHeight;

    if (window.scrollY > headerHeight) {
      headerElement.classList.add("header--scrolled");
    } else {
      headerElement.classList.remove("header--scrolled");
    }
  });
}
