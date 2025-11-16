export class Ship {
  constructor(length, hit, sunk) {
    this.length = length;
    this.hit = hit;
    this.sunk = sunk;
  }

  hit() {}

  isSunk() {}
}

export class Gameboard {
  constructor() {}

  receiveAttack() {}
}

export class Player {
  constructor() {}
}
