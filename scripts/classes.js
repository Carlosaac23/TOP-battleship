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
  placeShip(ship, position, orientation) {}

  getCell(row, col) {
    return this.board[row][col];
  }

  receiveAttack() {}
}

export class Player {
  constructor() {}
}
