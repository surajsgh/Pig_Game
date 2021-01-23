'use strict';

// Selecting Elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const currentScore0Element = document.querySelector('#current--0');
const currentScore1Element = document.querySelector('#current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const btnHoldElement = document.querySelector('.btn--hold');

// Scores of player one and player two in the array respectively
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Starting Condition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Dice Rolling Functionality
btnRollElement.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice roll
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for rolled one
  if (dice != 1) {
    //   Add dice to the current score.
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // Switch to the next player
    switchPlayer();
  }
});

btnHoldElement.addEventListener('click', function () {
  // 1. Add player score to the current score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check whether the current score is equal to or more than 100
  if (scores[activePlayer] >= 20) {
    // 3. Finish the game if the condition is true
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // 4. Switch to the other player.
    switchPlayer();
  }
});
