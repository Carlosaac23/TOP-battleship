import { Ship } from './classes.js';
import {
  computerBoard,
  computerContainer,
  computerPlayer,
  finishGameBtn,
  gameContainer,
  humanPlayer,
  inputName,
  inputNameContainer,
  playerBoard,
  playerContainer,
  playerName,
  restartGameBtn,
  startGameBtn,
} from './dom.js';

function renderPlayerBoard() {
  playerContainer.style.display = 'flex';
  playerName.textContent = inputName.value;
  playerBoard.innerHTML = ''; // Prevent re-render again the board after finish the game
  playerBoard.style.display = 'grid';

  const playerGameboard = humanPlayer.board.board;
  playerGameboard.forEach(row => {
    const boardEl = document.createElement('div');

    row.forEach(cell => {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell', `cell-${cell.state}`);
      boardEl.appendChild(cellEl);
      playerBoard.appendChild(boardEl);
    });
  });
}

function renderComputerBoard() {
  computerContainer.style.display = 'flex';
  computerBoard.innerHTML = ''; // Prevent re-render again the board after finish the game
  computerBoard.style.display = 'grid';

  const computerGameboard = computerPlayer.board.board;
  computerGameboard.forEach((row, rowIndex) => {
    const boardEl = document.createElement('div');
    console.log(row);

    row.forEach((cell, cellIndex) => {
      const cellEl = document.createElement('div');
      const cellClass =
        cell.state === 'ship' ? 'cell-empty' : `cell-${cell.state}`;
      cellEl.classList.add('cell', cellClass);
      boardEl.appendChild(cellEl);
      computerBoard.appendChild(boardEl);
      console.log(cellEl);
      cellEl.addEventListener('click', () =>
        attackEnemyShip(rowIndex, cellIndex)
      );
    });
  });
}

export function startGame() {
  startGameBtn.style.display = 'none';
  restartGameBtn.style.display = 'block';
  finishGameBtn.style.display = 'block';
  gameContainer.style.display = 'flex';
  inputNameContainer.style.display = 'none';

  placeShipRandomly(humanPlayer.board);
  placeShipRandomly(computerPlayer.board);
  renderPlayerBoard();
  renderComputerBoard();
}

export function finishGame() {
  gameContainer.style.display = 'none';
  startGameBtn.style.display = 'block';
  inputName.value = '';
  inputNameContainer.style.display = 'flex';
  humanPlayer.board.reset();
  computerPlayer.board.reset();
}

function restartGame() {}

function placeShipRandomly(board) {
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const cruiser = new Ship(3);
  const submarine = new Ship(3);
  const destroyer = new Ship(2);
  const ships = [carrier, battleship, cruiser, submarine, destroyer];

  ships.forEach(ship => {
    let placed = false;

    while (!placed) {
      try {
        const MAX_ROW_COL_BOARD = 10;
        const randomRow = Math.floor(Math.random() * MAX_ROW_COL_BOARD);
        const randomCol = Math.floor(Math.random() * MAX_ROW_COL_BOARD);
        const orientations = ['vertical', 'horizontal'];
        const randomOrientation =
          orientations[Math.floor(Math.random() * orientations.length)];
        board.placeShip(ship, [randomRow, randomCol], randomOrientation);
        placed = true;
      } catch (error) {
        console.error(error);
      }
    }
  });
}

function attackEnemyShip(rowIndex, colIndex) {
  humanPlayer.attack(computerPlayer.board, rowIndex, colIndex);
  renderComputerBoard();
  computerPlayer.attack(humanPlayer.board);
  renderPlayerBoard();
}
