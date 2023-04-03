'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//player infos
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  //switch turns
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = 0;
    //Generating the Dice
    //if score is 90 it will be only 1 or 2
    if (scores[activePlayer] > 90) {
      dice += Math.trunc(Math.random() * 2) + 1;
    } else {
      dice += Math.trunc(Math.random() * 6) + 1;
      console.log('iabsd');
    }

    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1
    if (dice !== 1) {
      //add dice to score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Check if player score is >= 100
    if (scores[activePlayer] >= 20) {
      //finish game
      playing = false;
      document.getElementById(`name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } WINS`;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
    //switch player
  }

  btnNew.addEventListener('click', function () {
    //reset frontend
    document.getElementById(`name--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    }`;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;

    //setting active player to player 1
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    //reset backend
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  });
});
