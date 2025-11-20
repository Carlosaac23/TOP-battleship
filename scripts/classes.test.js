import { ComputerPlayer, Gameboard, Player, Ship } from './classes.js';

// Testing Ship class
test('A new ship should not be sunk', () => {
  const ship = new Ship(3);
  const isSunk = ship.isSunk();

  expect(isSunk).toBe(false);
});

test('A ship with length of three and one hit should not be sunk', () => {
  const ship = new Ship(3);
  // Receive a hit
  ship.hit();
  const isSunk = ship.isSunk();

  expect(isSunk).toBe(false);
});

test('A ship with length of three and three hits should be sunk', () => {
  const ship = new Ship(3);
  // Hit the ship three times
  ship.hit();
  ship.hit();
  ship.hit();
  const isSunk = ship.isSunk();

  expect(isSunk).toBe(true);
});

// Testing Gameboard class
test('Place a horizontal ship of length 3 in a valid position', () => {
  const ship = new Ship(3);
  const board = new Gameboard();

  board.placeShip(ship, [2, 3], 'horizontal');
  const cell1 = board.getCell(2, 3);
  const cell2 = board.getCell(2, 4);
  const cell3 = board.getCell(2, 5);

  expect(cell1.state).toBe('ship');
  expect(cell1.ship).toBe(ship);

  expect(cell2.state).toBe('ship');
  expect(cell2.ship).toBe(ship);

  expect(cell3.state).toBe('ship');
  expect(cell3.ship).toBe(ship);
});

test('Place a vertical ship of length 4 in a valid position', () => {
  const ship = new Ship(4);
  const board = new Gameboard();

  board.placeShip(ship, [3, 4], 'vertical');
  const cell1 = board.getCell(3, 4);
  const cell2 = board.getCell(4, 4);
  const cell3 = board.getCell(5, 4);
  const cell4 = board.getCell(6, 4);

  expect(cell1.state).toBe('ship');
  expect(cell1.ship).toBe(ship);

  expect(cell2.state).toBe('ship');
  expect(cell2.ship).toBe(ship);

  expect(cell3.state).toBe('ship');
  expect(cell3.ship).toBe(ship);

  expect(cell4.state).toBe('ship');
  expect(cell4.ship).toBe(ship);
});

test('Place a ship of length 3 in a invalid position', () => {
  const ship = new Ship(3);
  const board = new Gameboard();

  expect(() => {
    board.placeShip(ship, [10, 11], 'vertical');
  }).toThrow('Invalid position');
});

test('Hitting a ship', () => {
  const ship = new Ship(1);
  const board = new Gameboard();

  board.placeShip(ship, [4, 6], 'horizontal');
  const result = board.receiveAttack(4, 6);

  // Verify the method returns 'hit' string
  expect(result).toBe('hit');

  // Verify cell state changed
  const cell = board.getCell(4, 6);
  expect(cell.state).toBe('hit');

  // Verify if ship is sunk because it's length is one a received one shot
  expect(ship.isSunk()).toBe(true);
});

test('Hitting an empty cell', () => {
  const ship = new Ship(2);
  const board = new Gameboard();

  board.placeShip(ship, [4, 6], 'vertical');
  const result = board.receiveAttack(8, 7);

  // Verify the method returns 'miss' string
  expect(result).toBe('miss');

  // Verify cell state changed
  const cell = board.getCell(8, 7);
  expect(cell.state).toBe('miss');
});

// Testing Player class
test('A player should have a name and a gameboard', () => {
  const player = new Player('Carlos');

  expect(player.name).toBe('Carlos');
  expect(player.board).toBeInstanceOf(Gameboard);
});

test('A player can attack other player', () => {
  const player1 = new Player('John');
  const player2 = new Player('Ramsey');
  const ship = new Ship(2);

  // Player2 place a ship
  player2.board.placeShip(ship, [4, 5], 'horizontal');

  // Player1 attack that ship
  // attack method receives (oponentBoard, oponent coordinates -> row, col)
  const attack = player1.attack(player2.board, 4, 5);

  expect(attack).toBe('hit');
});

test('A player can attack other player (a miss hit)', () => {
  const player1 = new Player('John');
  const player2 = new Player('Ramsey');
  const ship = new Ship(3);

  // Player2 place a ship
  player2.board.placeShip(ship, [2, 5], 'horizontal');

  // Player1 attack other ceel
  const attack = player1.attack(player2.board, 7, 8);

  expect(attack).toBe('miss');
});

// Testing ComputerPlayer class
test('A computerPlayer should have a gameboard', () => {
  const computerPlayer = new ComputerPlayer();

  expect(computerPlayer.board).toBeInstanceOf(Gameboard);
});

test('Computer can attack', () => {
  const humanPlayer = new Player('Carlos');
  const computerPlayer = new ComputerPlayer();
  const ship = new Ship(3);

  humanPlayer.board.placeShip(ship, [0, 0], 'horizontal');

  const result = computerPlayer.attack(humanPlayer.board);

  expect(['hit', 'miss']).toContain(result);
});
