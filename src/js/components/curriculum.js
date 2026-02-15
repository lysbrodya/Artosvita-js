export function initCurriculum() {
  document.querySelectorAll(".module-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".curriculum-moduls-item").classList.toggle("open");
    });
  });
}
