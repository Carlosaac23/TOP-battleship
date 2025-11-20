export class Ship {
  #length;
  #hits = 0;

  constructor(length) {
    this.#length = length;
  }

  hit() {
    this.#hits++;
  }

  isSunk() {
    return this.#hits === this.#length;
  }

  getLength() {
    return this.#length;
  }
}

export class Gameboard {
  constructor() {
    this.board = new Array(10).fill(null).map(() => {
      return new Array(10)
        .fill(null)
        .map(() => ({ state: 'empty', ship: null }));
    });
  }

  // position is an array [row, col]
  placeShip(ship, position, orientation) {
    const [row, col] = position;

    if (
      (orientation === 'horizontal' &&
        col + ship.getLength() >= this.board.length) ||
      (orientation === 'vertical' &&
        row + ship.getLength() >= this.board.length)
    ) {
      throw new Error('Invalid position');
    }

    for (let i = 0; i < ship.getLength(); i++) {
      const currentRow = orientation === 'vertical' ? row + i : row;
      const currentCol = orientation === 'horizontal' ? col + i : col;

      const cell = this.getCell(currentRow, currentCol);

      cell.state = 'ship';
      cell.ship = ship;
    }
  }

  getCell(row, col) {
    return this.board[row][col];
  }

  receiveAttack(row, col) {
    const cell = this.getCell(row, col);

    if (cell.state === 'ship') {
      cell.state = 'hit';
      cell.ship.hit();
      return cell.state;
    } else if (cell.state === 'empty') {
      cell.state = 'miss';
      return cell.state;
    }
  }
}

export class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }

  attack(enemyBoard, row, col) {
    return enemyBoard.receiveAttack(row, col);
  }
}

export class ComputerPlayer {
  constructor() {
    this.board = new Gameboard();
  }

  attack(enemyBoard) {
    const randomRow = Math.floor(Math.random() * 10);
    const randomCol = Math.floor(Math.random() * 10);
    return enemyBoard.receiveAttack(randomRow, randomCol);
  }
}
