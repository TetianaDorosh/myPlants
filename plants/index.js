// let mark = 100;
// const assessment = {
//   "Вёрстка валидная": 10,
//   "Вёрстка семантическая": 20,
//   "Вёрстка соответствует макету": 38,
//   "Требования к css": 12,
//   "Интерактивность, реализуемая через css": 20,

//   result: function () {
//     const resultArr = Object.values(this).filter(
//       (item) => typeof item === "number"
//     );
//     const result = resultArr.reduce((prev, item) => {
//       return (prev = prev + item);
//     }, 0);
//     return result;
//   },
// };

// for (item in assessment) {
//   typeof assessment[item] === "number"
//     ? console.log(`${item} - ${assessment[item]}`)
//     : "";
// }

// console.log(`My self-assessment is: ${assessment.result()} points`);

//Код для ссылки в меню. Активная ссылка выделяется красным цветом.

const link = document.querySelector(".header__nav-list");
const allLinks = document.querySelectorAll(".header__nav-link");

function handleClick(event) {
  allLinks.forEach((item) => {
    item.classList.remove("header__nav-item_link-color");
  });
  event.target.classList.add("header__nav-item_link-color");
}
link.addEventListener("click", handleClick);

//Код для гамбургер-меню

const hamb = document.querySelector(".humburger_icon");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close_item");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.add("opened");
  body.classList.toggle("noscroll");
}

close.addEventListener("click", closeOnClick);

const menu = document.querySelector(".popup_menu");
const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("opened");
  body.classList.remove("noscroll");
}

//Самооценка

console.log(`Самооценка работы:\n
Вёрстка соответствует макету. Ширина экрана 768px: 24;\n
Вёрстка соответствует макету. Ширина экрана 380px: 20;\n
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки: 15;\n
На ширине экрана 380рх и меньше реализовано адаптивное меню: 18;\n
Всего баллов за работу: 77`);
