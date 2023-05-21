'use strict';

// console.log(document);
// Selection of HTML Element
const message = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const labelHighScore = document.querySelector('.label-highscore');
const container = document.querySelector('.container');
const againBtn = document.querySelector('.again');
// =========================text content
// message.textContent = '🎉 Correct Number';
// labelScore.textContent = 'You dont have any score Lol🤣';

// =========================value
// guessInput.value = 10;
// console.log(guessInput.value);

// ======================== event handler

// ======================== Varaible
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
  console.log(guessInput.value);

  if (!guessInput.value) {
    console.log('NO Number!!');
    message.textContent = '⛔ No Number!!';
    score--;
    labelScore.textContent = `💯 Score: ${score}`;
  } else if (guessInput.value > randomNumber) {
    message.textContent = '📈 Too High';
    score--;
    labelScore.textContent = `💯 Score: ${score}`;
  } else if (guessInput.value < randomNumber) {
    message.textContent = '📉 Too Low';
    score--;
    labelScore.textContent = `💯 Score: ${score}`;
  } else if (Number(guessInput.value) === randomNumber) {
    message.textContent = '🎉 Congratulations';
    number.textContent = randomNumber;
    container.style.backgroundColor = '#f34d81';

    if (score > highScore) {
      highScore = score;
      labelHighScore.textContent = `🥇 Highscore ${highScore}`;
    }
  }
});

againBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  message.textContent = 'Start guessing...';
  score = 20;
  labelScore.textContent = `💯 Score: ${score}`;
  container.style.backgroundColor = '#333';
  number.textContent = '?';
  guessInput.value = '';
});
