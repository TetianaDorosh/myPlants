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

//Реализация гамбургер-меню

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

//outside click in hamburger

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__content")) {
    closeOnClick();
  }
});

//Аккордеон

const arrows = document.querySelectorAll(".price__button-arrow");
const contents = document.querySelectorAll(".prices__button-content");
const buttons = document.querySelectorAll(".prices__button");

// let accordeon = function (arrow, content, button) {
//   arrow.addEventListener("click", function () {
//     content.classList.toggle("opened");
//     button.classList.toggle("prices__button_active");
//   });
// };

let closePanel = function (arrow, content, button) {
  content.classList.remove("opened");
  button.classList.remove("prices__button_active");
  arrow.src = "./media/accordion_btn.svg";
};

let accordeon = function (arrow, content, button) {
  button.addEventListener("click", function () {
    //if element opened, we close this element and content
    if (this.classList.contains("prices__button_active")) {
      this.classList.remove("prices__button_active");
      content.classList.remove("opened");
      arrow.src = "./media/accordion_btn.svg";
    } else {
      //else we close every panel
      for (let i = 0; i < arrows.length; i++) {
        closePanel(arrows[i], contents[i], buttons[i]);
      }
      //we open clicked element
      this.classList.add("prices__button_active");
      content.classList.add("opened");
      arrow.src = "./media/arrow_btn_opened.png";
    }
  });
};

for (let i = 0; i < arrows.length; i++) {
  accordeon(arrows[i], contents[i], buttons[i]);
}

//Смена фокуса в услугах

const gardenButton = document.querySelector(".garden-button");
const lawnButton = document.querySelector(".lawn-button");
const plantButton = document.querySelector(".plant-button");
const serviceButtons = document.querySelectorAll(".service-button");
const plantCards = document.querySelectorAll(".plant");
const gardenCards = document.querySelectorAll(".garden");
const lawnCards = document.querySelectorAll(".lawn");
let activeButtons = [0, 0, 0];

for (let i = 0; i < serviceButtons.length; i++) {
  serviceButtons[i].addEventListener("click", function () {
    if (
      activeButtons[i] === 0 &&
      activeButtons.filter((x) => x === 1).length < 2
    ) {
      activeButtons[i] = 1;
      serviceButtons[i].classList.add("active");
    } else {
      activeButtons[i] = 0;
      serviceButtons[i].classList.remove("active");
    }

    let gardenActive = gardenButton.classList.contains("active");
    let lawnActive = lawnButton.classList.contains("active");
    let plantActive = plantButton.classList.contains("active");

    if (gardenActive && !lawnActive && !plantActive) {
      lawnCards.forEach(addBlur);
      plantCards.forEach(addBlur);
    } else if (gardenActive && lawnActive && !plantActive) {
      lawnCards.forEach(removeBlur);
    } else if (gardenActive && !lawnActive && plantActive) {
      lawnCards.forEach(addBlur);
      plantCards.forEach(removeBlur);
    }

    if (!gardenActive && lawnActive && !plantActive) {
      gardenCards.forEach(addBlur);
      plantCards.forEach(addBlur);
    } else if (!gardenActive && lawnActive && plantActive) {
      plantCards.forEach(removeBlur);
    } else if (gardenActive && lawnActive && !plantActive) {
      plantCards.forEach(addBlur);
      gardenCards.forEach(removeBlur);
    }

    if (!gardenActive && !lawnActive && plantActive) {
      gardenCards.forEach(addBlur);
      lawnCards.forEach(addBlur);
    } else if (!gardenActive && lawnActive && plantActive) {
      lawnCards.forEach(removeBlur);
    } else if (gardenActive && !lawnActive && plantActive) {
      lawnCards.forEach(addBlur);
      gardenCards.forEach(removeBlur);
    }

    if (!gardenActive && !lawnActive && !plantActive) {
      lawnCards.forEach(removeBlur);
      gardenCards.forEach(removeBlur);
      plantCards.forEach(removeBlur);
    }
  });
}

const addBlur = function (item) {
  item.classList.add("blur");
};

const removeBlur = function (item) {
  item.classList.remove("blur");
};

// Реализация селекта

const contactsDropDown = document.querySelector(".select-arrow");
const select = document.querySelector(".select");
const selectButton = document.querySelector(".contacts__content-button");
const cityCard = document.querySelector(".city-card");

contactsDropDown.addEventListener("click", function () {
  select.classList.toggle("hidden");
  if (select.classList.contains("hidden")) {
    selectButton.classList.remove("contacts__content-button_active");
    contactsDropDown.classList.remove("select-arrow_active");
  } else {
    selectButton.classList.add("contacts__content-button_active");
    contactsDropDown.classList.add("select-arrow_active");
  }
  for (let i = 0; i < cityCards.length; i++) {
    closeCard(cityCards[i]);
  }
  cityName.textContent = "City";
});

const cities = document.querySelectorAll(".city");
const cityCards = document.querySelectorAll(".city-card");
const cityName = document.querySelector(".contacts__button-title");

let selectFunction = function (city, card) {
  city.addEventListener("click", function () {
    card.classList.toggle("city-card_opened");
    select.classList.add("hidden");
    cityName.textContent = city.textContent;
  });
};

for (let i = 0; i < cities.length; i++) {
  selectFunction(cities[i], cityCards[i]);
}

let closeCard = function (card) {
  card.classList.remove("city-card_opened");
};

console.log("New repository");
