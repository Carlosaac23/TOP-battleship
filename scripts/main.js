import { ComputerPlayer, Player } from './classes.js';

const btn = document.querySelector('.start-game');
const container = document.querySelector('.game-container');
btn.addEventListener('click', startGame);

function startGame() {
  const testPlayer = new Player('Carlos');
  const testComputerPlayer = new ComputerPlayer();
  btn.style.display = 'none';
  const gameboard = testPlayer.board.board;
  console.log(gameboard);
  gameboard.forEach(row => {
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');
    row.forEach(cell => {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.textContent = cell.state;
      boardEl.appendChild(cellEl);
      container.appendChild(boardEl);
    });
  });
}
