'use strict';
var score = 20;
var highscore = 0;
var Snumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = highscore;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.msg').textContent = 'Guess My Number!';
  Snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = ' #222';
});
document.querySelector('.check').addEventListener('click', function () {
  var x = document.querySelector('.guess').value;
  if (score <= 0) {
    document.querySelector('.msg').textContent = 'You lose!';
    document.querySelector('.number').textContent = '⛔';
    x = -1;
  }
  if (x == -1) {
    document.querySelector('.message').textContent = '💥💥 You loose';
  } else if (!x) {
    document.querySelector('.message').textContent = '⛔ No Value';
  } else if (x == Snumber) {
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.message').textContent = '🎉🎊🎊   Correct Number!';
  } else if (x > Snumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '🤦‍♂️🤦‍♂️ Too High!';
  } else if (x < Snumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '🤦‍♂️🤦‍♂️ Too Low!';
  }
});
