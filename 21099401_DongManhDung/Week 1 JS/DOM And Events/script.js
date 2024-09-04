const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");

const guestInput = document.querySelector(".guess");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
let  secretNumber = Math.trunc(Math.random() * 20) + 1;
let point = 20;
let highscore = 0;

checkBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#fff";
  if (!guestInput.value) {
    message.textContent = "No number";
    message.style.color = "red";
  } else if (guestInput.value < 1 || guestInput.value > 20) {
    message.textContent = "Number from 1 to 20. Try again";
    message.style.color = "red";
  } else if (guestInput.value == secretNumber) {
    number.textContent = secretNumber;
    message.textContent = "Correct Number";
    message.style.color = "green";
    // document.querySelector('body').style.backgroundColor = "#222";
    if (point > highscore) {
      highscore = point;
      score.textContent = highscore;
    }
  } else if (guestInput.value != secretNumber) {
    number.textContent = secretNumber;
    message.style.color = "red";
    if (point > 1) {
      if (guestInput.value > secretNumber) {
        message.textContent = guestInput.value + " > " + secretNumber + " : Too high";
      } else {
        message.textContent = guestInput.value + " < " + secretNumber + " : Too low";
      }
      point--;
      score.textContent = point;
    } else {
      message.textContent = "You lost the game!";
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
    number.textContent = ""; //Need to fix: New Random Number and play again
    message.textContent = "Start guessing....";
    score.textContent = 20;
    guestInput.value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
});

