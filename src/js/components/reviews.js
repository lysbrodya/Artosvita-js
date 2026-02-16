// import { BASE_PATH } from "../utils/paths.js";

const BASE_PATH = location.hostname.includes("github.io") ? "/Artosvita-js" : "";

export async function loadReviews() {
  const res = await fetch(`${BASE_PATH}/reviews.json`);
  return res.json();
}
export function renderReviews(list) {
  return list
    .map(
      (item) => `<li class="review-card">
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
    </li>`
    )
    .join("");
}
