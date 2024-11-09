"use strict";

var score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreElement();
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  }
}
*/

var isAutoPlaying = false;
var intervalId; //const autoPlay = () => {
//};

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      var playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', function () {
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', function () {
  playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', function () {
  playGame('scissors');
});
document.body.addEventListener('keydown', function (event) {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

function playGame(playerMove) {
  var computerMove = pickComputerMove();
  var result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = "You\n<img src=\"images/".concat(playerMove, "-emoji.png\" class=\"move-icon\" alt=\"You\">\n<img src=\"images/").concat(computerMove, "-emoji.png\" class=\"move-icon\" alt=\"ComputerMove\">\nComputer");
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = "Wins: ".concat(score.wins, ", Losses: ").concat(score.losses, ", Ties: ").concat(score.ties);
}

function pickComputerMove() {
  var randomNumber = Math.random();
  var computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
//# sourceMappingURL=12-rock-paper-scissors .dev.js.map
