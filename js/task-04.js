const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', function () {
    counterValue--;
    counterValueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
    counterValue++;
    counterValueEl.textContent = counterValue;
});

console.log(decrementBtn);
console.log(incrementBtn);
console.log('counterValue');
