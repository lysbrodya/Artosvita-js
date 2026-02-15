export function modal() {
  const modal = document.querySelector("[data-modal]");
  const openModalBtn = document.querySelectorAll("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  if (!modal || !openModalBtn || !closeModalBtn) return;

  openModalBtn.forEach((btn) => {
    btn.addEventListener("click", toggleMenu);
  });
  closeModalBtn.addEventListener("click", toggleMenu);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) toggleMenu();
  });

  function toggleMenu() {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
}
