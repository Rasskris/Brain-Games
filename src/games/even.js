import random from 'lodash/random.js';
import runGame from '../index.js';

const isEvenNum = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = random(1, 100);
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default () => runGame(description, getGameData);
