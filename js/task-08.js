// апиши скрипт управління формою логіна.
// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
const refs = {
  inputEl: document.querySelector(".login-form"),
  loginEl: document.querySelector('input[name="email"]'),
  passwordEl: document.querySelector('input[name="password"]'),
};

refs.inputEl.addEventListener("submit", onInputSubmit);

function onInputSubmit(event) {
  event.preventDefault();
  const login = refs.loginEl.value;
  const password = refs.passwordEl.value;

  console.log(`Login: ${login}, Password: ${password}`);
  event.currentTarget.reset();

  if (!refs.loginEl.value || !refs.passwordEl.value) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
}
