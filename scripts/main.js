import { ComputerPlayer, Player } from './classes.js';

const btn = document.querySelector('.start-game');
const playerContainer = document.querySelector('.player__container');
const playerName = document.querySelector('.player__container-name');
const playerBoard = document.querySelector('.player__container-board');

const computerContainer = document.querySelector('.computer__container');

btn.addEventListener('click', startGame);

function startGame() {
  const testPlayer = new Player('Carlos');
  const testComputerPlayer = new ComputerPlayer();
  btn.style.display = 'none';
  playerContainer.style.display = 'flex';
  computerContainer.style.display = 'flex';
  playerName.textContent = testPlayer.name;
  playerBoard.style.display = 'grid';

  const gameboard = testPlayer.board.board;
  console.log(gameboard);
  gameboard.forEach(row => {
    const boardEl = document.createElement('div');

    row.forEach(cell => {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.textContent = cell.state;
      boardEl.appendChild(cellEl);
      playerBoard.appendChild(boardEl);
    });
  });
}
