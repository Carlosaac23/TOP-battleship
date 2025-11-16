export class Ship {
  constructor(length) {
    this.length = length;
  }

  #hits = 0;

  hit() {
    this.#hits++;
  }

  isSunk() {
    return this.#hits === this.length;
  }
}

export class Gameboard {
  constructor() {}

  receiveAttack() {}
}

export class Player {
  constructor() {}
}
