import { Ship } from './classes.js';

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
