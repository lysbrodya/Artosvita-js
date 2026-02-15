import { initHeader } from "../js/components/header.js";
import { initMobileMenu } from "../js/components/mobileMenu.js";
import { initSlider } from "../js/components/slider.js";
import { initCurriculum } from "../js/components/curriculum.js";
import { initScrollHeader } from "../js/features/scrollHeader.js";
import { modal } from "./components/modal.js";

initHeader();
modal();
initSlider();
initCurriculum();
initScrollHeader();
// document.addEventListener("DOMContentLoaded", () => {
//   modal();
// });
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
});

// function comp(array1, array2) {
//   //your code here
//   if (!array1 || !array2) return false;
//   if (array1.length !== array2.length) return false;
//   let i = 0;
//   let sort1 = [...array1].sort((a, b) => a - b);
//   let sort2 = [...array2].sort((a, b) => a - b);
//   return sort1.every((el, i) => el * el === sort2[i]);
// }
// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
//   )
// );

// Math.sqrt()
// function comp(array1, array2) {
//   return (
//     array2.sort((a, b) => a - b).toString() ===
//     array1
//       .sort((a, b) => a - b)
//       .map((el) => el * el)
//       .toString()
//   );
// }
// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
//   )
// );
