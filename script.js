const attemptsField = document.getElementById("attempts");
const attemptsLeft = document.getElementById("attemptsLeft");
const currentAttempt = document.getElementById("currentAttempt");
const result = document.getElementById("result");
const form1 = document.querySelector(".f1");
const form2 = document.querySelector(".f2");

let counter = 1; // Variable para contar los intentos
let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100

form2.style.display = "none";
result.style.display = "none";



function startGame() {
    const attValue = attemptsField.value;
    form1.style.display = "none";
    form2.style.display = "block";
    currentAttempt.textContent = `Current Attempt: ${counter}`;
    attemptsLeft.textContent = `Attempts Left: ${attValue}`;
}

function back() {
    form1.style.display = "block";
    form2.style.display = "none";
}

function game() {
    form1.style.display = "none";
    form2.style.display = "none";
    result.style.display = "block";
}
