import { ComputerPlayer, Player } from './classes.js';

const startGameBtn = document.querySelector('.start-game-btn');
const playerContainer = document.querySelector('.player__container');
const playerName = document.querySelector('.player__container-name');
const playerBoard = document.querySelector('.player__container-board');

const computerContainer = document.querySelector('.computer__container');
const computerBoard = document.querySelector('.computer__container.board');

const restartGameBtn = document.querySelector('.restart-game-btn');

startGameBtn.addEventListener('click', startGame);

function startGame() {
  const testPlayer = new Player('Carlos');
  const testComputerPlayer = new ComputerPlayer();
  startGameBtn.style.display = 'none';
  playerContainer.style.display = 'flex';
  computerContainer.style.display = 'flex';
  playerName.textContent = testPlayer.name;
  playerBoard.style.display = 'grid';
  restartGameBtn.style.display = 'block';

  const playerGameboard = testPlayer.board.board;
  playerGameboard.forEach(row => {
    const boardEl = document.createElement('div');

    row.forEach(cell => {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.textContent = cell.state;
      boardEl.appendChild(cellEl);
      playerBoard.appendChild(boardEl);
    });
  });

  const computerGameboard = testComputerPlayer.board.board;
  computerGameboard.forEach(row => {
    const boardEl = document.createElement('div');
    console.log(boardEl);
    console.log(row);

    row.forEach(cell => {
      console.log(cell);
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.textContent = cell.state;
      boardEl.appendChild(cellEl);
      computerBoard.appendChild(boardEl);
    });
  });
}
