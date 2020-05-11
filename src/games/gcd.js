import random from 'lodash/random.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getGameData = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => runGame(description, getGameData);
