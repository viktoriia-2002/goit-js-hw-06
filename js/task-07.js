// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

/* <input id="font-size-control" type="range" min="16" max="96" />
<span id="text">Abracadabra!</span> */

const inputEL = document.querySelector("#font-size-control");
const textEL = document.querySelector("#text");

inputEL.addEventListener("input", onInput);

function onInput(event) {
  textEL.style.fontSize = event.currentTarget.value + "px";
}
