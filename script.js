'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';

    //When the playes guesses the correct number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When player guesses too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      //decrease score by 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }

    //When pleayer guesses too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low..';
      //decrease score by 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
