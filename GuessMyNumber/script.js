'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessagge = function(message){
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);


  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No number';
    displayMessagge('⛔️ No number!');


  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    displayMessagge('🎉 Correct Number!!')
    //document.querySelector('.message').textContent = '🎉 Correct Number!!';
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }else if(guess !== secretNumber){
    if(score > 1){
      displayMessagge(guess > secretNumber ? '📈 Too High !!!' : '📉 Too LOW !!!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      displayMessagge('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});


//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High !!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //   document.body.style.backgroundColor = '#222';
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too LOW !!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //   document.body.style.backgroundColor = '#222';
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20; 
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

});