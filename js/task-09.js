function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
});
