import _ from 'lodash';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const question = _.random(2, 100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default () => runGame(description, getGameData);
