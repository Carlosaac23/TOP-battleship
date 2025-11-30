import { ComputerPlayer, Player } from './classes.js';
import { finishGame, restartGame } from './functions.js';
import { main } from './main.js';

export const gameContainer = document.querySelector('.game-container');
export const playerContainer = document.querySelector('.player__container');
export const playerName = document.querySelector('.player__container-name');
export const playerBoard = document.querySelector('.player__container-board');

export const computerContainer = document.querySelector('.computer__container');
export const computerBoard = document.querySelector(
  '.computer__container-board'
);

export const startGameBtn = document.querySelector('.start-game-btn');
export const bottomButtonsContainer = document.querySelector('.bottom-buttons');
export const restartGameBtn = document.querySelector('.restart-game-btn');
export const finishGameBtn = document.querySelector('.finish-game-btn');

startGameBtn.addEventListener('click', main);
finishGameBtn.addEventListener('click', finishGame);
restartGameBtn.addEventListener('click', restartGame);

export const inputNameContainer = document.querySelector('.name-container');
export const inputName = document.querySelector('.name-input');

export const humanPlayer = new Player(inputName.value);
export const computerPlayer = new ComputerPlayer();
