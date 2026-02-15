import { loadReviews, renderReviews } from "./reviews.js";

export async function initSlider() {
  const track = document.querySelector(".slider-track");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const slider = document.querySelector(".slider");

  // Если на странице нет слайдера — выходим
  if (!track || !next || !prev) return;

  // Рендер карточек
  const reviews = await loadReviews();
  const course = document.querySelector(".course-name")?.textContent.trim();
  const filteredReviews = course ? reviews.filter((r) => r.course === course) : reviews;
  track.innerHTML = renderReviews(filteredReviews);
  function getVisibleCards() {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }
  const cards = track.children;
  if (!cards.length) return;
  const visible = getVisibleCards();
  if (cards.length <= visible) {
    next.style.display = "none";
    prev.style.display = "none";
    // track.style.justifyContent = "center";
    return;
  }
  // ===== CLONES =====
  const firstClone = cards[0].cloneNode(true);
  const lastClone = cards[cards.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);

  // ===== STATE =====
  let index = 1;

  // ===== SLIDER =====
  function updateSlider(animate = true) {
    const card = track.children[0];

    const style = getComputedStyle(track);
    const gap = parseInt(style.gap) || 0;

    const cardWidth = card.offsetWidth + gap;

    track.style.transition = animate ? "transform 0.4s ease" : "none";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  updateSlider(false);

  // ===== BUTTONS =====
  next.onclick = () => {
    index++;
    updateSlider();
  };

  prev.onclick = () => {
    index--;
    updateSlider();
  };

  // ===== TOUCH =====
  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const diff = startX - endX;
    if (Math.abs(diff) < 50) return;

    if (diff > 0) next.click();
    else prev.click();
  }

  // ===== INFINITE =====
  track.addEventListener("transitionend", () => {
    if (index === track.children.length - 1) {
      index = 1;
      updateSlider(false);
    }

    if (index === 0) {
      index = track.children.length - 2;
      updateSlider(false);
    }
  });
}
