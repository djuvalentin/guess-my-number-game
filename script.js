'use strict';
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const messageEl = document.querySelector('.message');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');

let number;
let score;
let highscore = 0;

const init = function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  numberEl.textContent = '?';
  guessEl.value = '';
  scoreEl.textContent = score;
  highscoreEl.textContent = highscore;
  numberEl.style.width = '15rem';
  setBackgroundColor('#222');
  checkBtn.addEventListener('click', checkGuess);
};
const setBackgroundColor = function (color = '#222') {
  bodyEl.style.backgroundColor = color;
};

const setMessage = function (message) {
  messageEl.textContent = message;
};

const checkGuess = function () {
  const guess = +guessEl.value;
  if (score <= 1) {
    setMessage(`You Lost!`);
    return;
  }
  if (guess != number && score >= 1) {
    setMessage(
      guess < number ? `The number is higher!` : `The number is lower!`
    );
    score--;
    scoreEl.textContent = score;
  } else {
    if (highscore < score) highscore = score;
    setMessage(`Correct number!`);
    highscoreEl.textContent = highscore;
    numberEl.textContent = number;
    numberEl.style.width = '25rem';
    setBackgroundColor('#60b347');
    checkBtn.removeEventListener('click', checkGuess);
  }
};

againBtn.addEventListener('click', init);

init();
