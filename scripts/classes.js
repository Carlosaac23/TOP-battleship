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
  constructor() {}

  // initialPosition is an array [row, col]
  placeShip(ship, initialPosition, direction) {}

  getCell(row, col) {}

  receiveAttack() {}
}

export class Player {
  constructor() {}
}
