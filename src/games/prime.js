import random from 'lodash/random.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let div = 2; div < num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = random(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default () => runGame(description, getGameData);
