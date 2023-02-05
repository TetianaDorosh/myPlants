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
const popup = document.querySelector(".popup__content");
const close = document.querySelector(".close_item");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler() {
  popup.classList.add("opened");
  body.classList.add("noscroll");
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

//outside click

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__content")) {
    closeOnClick();
  }
});

//Самооценка

console.log(`Самооценка работы:\n
Вёрстка соответствует макету. Ширина экрана 768px: 24;\n
Вёрстка соответствует макету. Ширина экрана 380px: 20;\n
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки: 15;\n
На ширине экрана 380рх и меньше реализовано адаптивное меню: 18;\n
Всего баллов за работу: 77`);

//Аккордеон

const arrows = document.querySelectorAll(".price__button-arrow");
const contents = document.querySelectorAll(".prices__button-content");

let accordeon = function (arrow, content) {
  arrow.addEventListener("click", function () {
    content.classList.toggle("opened");
  });
};

for (let i = 0; i < arrows.length; i++) {
  accordeon(arrows[i], contents[i]);
}

//Смена фокуса в услугах

const gardenButton = document.querySelector(".garden-button");
const lawnButton = document.querySelector(".lawn-button");
const plantButton = document.querySelector(".plant-button");
const plantCards = document.querySelectorAll(".plant");
const gardenCards = document.querySelectorAll(".garden");
const lawnCards = document.querySelectorAll(".lawn");
const activeCards = [];

//When garden is not active, we need to make it active by adding blur other cards which are not active.
// If activecards not empty

// gardenButton.addEventListener("click", function () {
//   if (activeCards.includes(gardenCards)) {
//     activeCards.pop(gardenCards);
//     if (activeCards !== []) {
//       gardenCards.forEach(addBlur);
//     } else {
//       gardenCards.forEach(removeBlur);
//       lawnCards.forEach(removeBlur);
//       plantCards.forEach(removeBlur);
//     }
//   } else {
//     if (!activeCards.includes(plantCards)) {
//       plantCards.forEach(addBlur);
//     }
//     if (!activeCards.includes(lawnCards)) {
//       lawnCards.forEach(addBlur);
//     }
//     activeCards.push(gardenCards);
//     gardenCards.forEach(removeBlur);
//   }
// });

gardenButton.addEventListener("click", function () {
  if (lawnButton.classList.contains("active")) {
    gardenCards.forEach(cardHandle);
  }
  if (plantButton.classList.contains("active")) {
    gardenCards.forEach(cardHandle);
  } else {
    plantCards.forEach(cardHandle);
    lawnCards.forEach(cardHandle);
  }
  gardenButton.classList.toggle("active");
});

lawnButton.addEventListener("click", function () {
  if (gardenButton.classList.contains("active")) {
    lawnCards.forEach(cardHandle);
  }
  if (plantButton.classList.contains("active")) {
    lawnCards.forEach(cardHandle);
  } else {
    plantCards.forEach(cardHandle);
    gardenCards.forEach(cardHandle);
  }
  lawnButton.classList.toggle("active");
});

plantButton.addEventListener("click", function () {
  if (gardenButton.classList.contains("active")) {
    plantCards.forEach(cardHandle);
  }
  if (lawnButton.classList.contains("active")) {
    plantCards.forEach(cardHandle);
  } else {
    gardenCards.forEach(cardHandle);
    lawnCards.forEach(cardHandle);
  }
  plantButton.classList.toggle("active");
});

const cardHandle = function (item) {
  item.classList.toggle("blur");
};

// function checkActive(item) {
//   if (item.classList.contains("active")) {
//     activeCards.push(item);
//   } else {
//     activeCards.pop(item);
//   }
// }

// const addBlur = function (item) {
//   item.classList.add("blur");
// };

const removeBlur = function (item) {
  item.classList.remove("blur");
};

// for (let i = 0; i < arrows.length; i++) {
//   arrows[i].addEventListener("click", function () {
//     console.log("arrow pressed");
//   });
// }

// arrow.addEventListener("click", () => {
//   content.classList.toggle("opened");
// });

// arrow.addEventListener("click", showContent);

// function showContent() {
//   content.classList.toggle("opened");
// }

// Реализация селекта

const contactsDropDown = document.querySelector(".select-arrow");
const select = document.querySelector(".select");

contactsDropDown.addEventListener("click", function () {
  console.log("Кнопка работает");
  select.classList.toggle("hidden");
});

// Самооценка Plants#3

console.log(`Самооценка работы Plants#3:\n
При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service: 20/50;\n
Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах: 20/50;\n
В разделе contacts реализован select с выбором городов: 0/25;\n

Всего баллов за работу: 40`);
