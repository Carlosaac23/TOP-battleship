import { inputName } from './dom.js';
import { startGame } from './functions.js';

export function main() {
  if (!inputName.value) {
    alert('You have to enter a name');
  } else {
    startGame();
  }
}
