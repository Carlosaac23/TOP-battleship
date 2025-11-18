import { Gameboard, Ship } from './classes.js';

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
