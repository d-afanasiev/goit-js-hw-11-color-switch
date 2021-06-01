const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  containerForButton: document.querySelector(".js-button"),
  addBgColorId: 0,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.containerForButton.addEventListener("click", randomColorFromBody);

function randomColorFromBody(e) {
  if (e.target.dataset.action === "start") {
    refs.addBgColorId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, 5)];
      e.target.disabled = true;
    }, 1000);
    e.target.disabled = false;
  } else {
    clearInterval(refs.addBgColorId);
    e.currentTarget.firstElementChild.disabled = false;
  }
}