"use strict";

const counterValue = document.querySelector("#counter-value");
const decreaseButton = document.querySelector("#decrease-button");
const increaseButton = document.querySelector("#increase-button");
const resetButton = document.querySelector("#reset-button");

let count = 0;

function renderCounter() {
    counterValue.textContent = String(count);
}

function decreaseCounter() {
    count -= 1;
    renderCounter();
}

function increaseCounter() {
    count += 1;
    renderCounter();
}

function resetCounter () {
    count = 0;
    renderCounter();
}

decreaseButton.addEventListener("click", decreaseCounter);
increaseButton.addEventListener("click", increaseCounter);
resetButton.addEventListener("click", resetCounter);
renderCounter();