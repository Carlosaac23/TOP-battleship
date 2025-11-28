import { ComputerPlayer, Player } from './classes.js';

const startGameBtn = document.querySelector('.start-game-btn');
const playerContainer = document.querySelector('.player__container');
const playerName = document.querySelector('.player__container-name');
const playerBoard = document.querySelector('.player__container-board');

const computerContainer = document.querySelector('.computer__container');
const computerBoard = document.querySelector('.computer__container-board');

const restartGameBtn = document.querySelector('.restart-game-btn');

startGameBtn.addEventListener('click', startGame);

function renderPlayerBoard() {
  const testPlayer = new Player('Carlos');
  playerContainer.style.display = 'flex';
  playerName.textContent = testPlayer.name;
  playerBoard.style.display = 'grid';

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
}

function renderComputerBoard() {
  const testComputerPlayer = new ComputerPlayer();
  computerContainer.style.display = 'flex';
  computerBoard.style.display = 'grid';

  const computerGameboard = testComputerPlayer.board.board;
  computerGameboard.forEach(row => {
    const boardEl = document.createElement('div');
    console.log(row);

    row.forEach(cell => {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.textContent = cell.state;
      boardEl.appendChild(cellEl);
      computerBoard.appendChild(boardEl);
    });
  });
}

function startGame() {
  startGameBtn.style.display = 'none';
  restartGameBtn.style.display = 'block';

  renderPlayerBoard();
  renderComputerBoard();
}
