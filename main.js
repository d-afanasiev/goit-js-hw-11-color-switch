const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const NOTIFICATION_DELAY = 1000;
let timeoutId = null;

const refs = {
  containerForButton: document.querySelector(".js-button"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.containerForButton.addEventListener("click", randomColorFromBody);

function randomColorFromBody(e) {
  if (e.target.dataset.action === "start") {
    timeoutId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, 5)];
      e.target.disabled = true;
    }, NOTIFICATION_DELAY);
    e.target.disabled = false;
  } else {
    clearInterval(timeoutId);
    e.currentTarget.firstElementChild.disabled = false;
  }
}
