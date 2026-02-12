import bcgHero from "../public/images/bcg/bcg_hero.png";
import bcgAdvantages from "../public/images/bcg/bcg_advantages.png";

// Устанавливаем CSS переменные для картинок
document.documentElement.style.setProperty("--bcg-hero", `url('${bcgHero}')`);
document.documentElement.style.setProperty("--bcg-advantages", `url('${bcgAdvantages}')`);

const BASE_PATH = location.hostname.includes("github.io") ? "/Artosvita-js" : "";

const header = document.getElementById("header");
if (header) {
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
        ${withButton ? `<button class="sign-up">ЗАПИСАТИСЯ</button>` : ``}
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

// Убирать фон header при скролле на высоту header
window.addEventListener("scroll", () => {
  const headerElement = document.getElementById("header");
  const headerHeight = headerElement.offsetHeight;
  const scrollY = window.scrollY;

  if (scrollY > headerHeight) {
    headerElement.classList.add("header--scrolled");
  } else {
    headerElement.classList.remove("header--scrolled");
  }
});

// import reviews from "./styles/reviews.json";
async function loadReviews() {
  const res = await fetch(`${BASE_PATH}/reviews.json`);
  return res.json();
}
function renderReviews(list) {
  return list
    .map(
      (item) => `
    <li class="review-card">
      <div class="review-card__top">
        <img class="review-card__avatar" src="${item.image}" width="96" height="96">
        <div class="review-card__info">
          <p class="review-card__date">${item.date}</p>
          <h4 class="review-card__name">${item.name}</h4>
          <p class="review-card__course">${item.course}</p>
        </div>
      </div>
      <div class="review-card__text">
        <p>${item.text}</p>
      </div>
      <div class="review-card__bottom">
        <div class="review-card__score">
          <span class="score-first">БАЛ:</span>
          <span class="review-card__score-value">${item.score}</span>
        </div>
        <a class="review-card__insta" href="${item.instagram}" target="_blank">
          <svg class="icon-insta" width="40" height="40">
            <use href="${BASE_PATH}/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </li>
  `
    )
    .join("");
}

async function initSlider() {
  const track = document.querySelector(".slider-track");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  // Если на странице нет слайдера — выходим
  if (!track || !next || !prev) return;

  // Рендер карточек
  const reviews = await loadReviews();
  const course = document.querySelector("h1")?.textContent.trim();
  const filteredReviews = course ? reviews.filter((r) => r.course === course) : reviews;
  track.innerHTML = renderReviews(filteredReviews);

  const cards = track.children;
  if (!cards.length) return;

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

initSlider();
// curriculum-moduls
document.querySelectorAll(".module-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".curriculum-moduls-item").classList.toggle("open");
  });
});
// function SeriesSum(n) {
//   // Happy Coding ^_^
//   let sum = 0;
//   let adin = 1;
//   for (let index = 0; index < n; index++) {
//     n === 0 ? (sum = 0) : (sum += 1 / adin);
//     if (n === 1) {
//       return (sum = "1.00");
//     }
//     adin += 3;
//   }
//   return sum.toFixed(2).toString();
// }
// function SeriesSum(n) {
//   let s = 0;
//   for (let i = 0; i < n; i++) {
//     s += 1 / (1 + i * 3);
//   }

//   return s.toFixed(2);
// }
// console.log(SeriesSum(1));
// function rentalCarCost(d) {
//   // Your solution here
//   return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// }
// console.log(rentalCarCost(7));
// function repeatStr(n, s) {
//   let sum = "";
//   for (let i = 0; i < n; i++) {
//     sum += s;
//   }
//   return sum;
// }
// // console.log(repeatStr(0, "hello"));
// function sumTwoSmallestNumbers(numbers) {
//   // Code here
//   let [a, b] = numbers.sort((a, b) => a - b);
//   console.log(numbers);
//   console.log(a, b);
//   return numbers[0] + numbers[1];
// }
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// function sumMix(x) {
//   let sum = 0;
//   x.forEach((element) => {
//     sum += Number(element);
//   });
//   return sum;
// }

// console.log(sumMix([9, 3, "7", "3"]));
