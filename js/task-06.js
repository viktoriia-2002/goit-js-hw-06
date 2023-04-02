// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEL = document.querySelector("#validation-input");
const dataLength = inputEL.getAttribute('data-length');
inputEL.addEventListener("blur", onInput);

function onInput(event) {
  if (event.currentTarget.value.length === Number(dataLength)) {
    inputEL.classList.add("valid");
    inputEL.classList.remove("invalid");
  } else {
    inputEL.classList.add("invalid");
  }
}

