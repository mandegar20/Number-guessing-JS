'use strict';

// console.log(document);
// Selection of HTML Element
const message = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const number = document.querySelector('.number');
const guessInput = document.querySelector('#guess-input');

// text content
message.textContent = '🎉 Correct Number';
labelScore.textContent = 'You dont have any score Lol🤣';
number.textContent = 12;
guessInput.value = 12;

console.log(guessInput);
