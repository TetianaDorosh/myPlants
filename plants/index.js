let mark = 100;
const assessment = {
  "Вёрстка валидная": 10,
  "Вёрстка семантическая": 20,
  "Вёрстка соответствует макету": 38,
  "Требования к css": 12,
  "Интерактивность, реализуемая через css": 20,

  result: function () {
    const resultArr = Object.values(this).filter(
      (item) => typeof item === "number"
    );
    const result = resultArr.reduce((prev, item) => {
      return (prev = prev + item);
    }, 0);
    return result;
  },
};

for (item in assessment) {
  typeof assessment[item] === "number"
    ? console.log(`${item} - ${assessment[item]}`)
    : "";
}

console.log(`My self-assessment is: ${assessment.result()} points`);

const link = document.querySelector(".header__nav-list");
const allLinks = document.querySelectorAll(".header__nav-link");

function handleClick(event) {
  allLinks.forEach((item) => {
    item.classList.remove("header__nav-item_link-color");
  });
  event.target.classList.add("header__nav-item_link-color");
}
link.addEventListener("click", handleClick);
