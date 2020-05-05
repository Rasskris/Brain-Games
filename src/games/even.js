import _ from 'lodash';
import runGame from '../index.js';

const isEvenNum = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = _.random(1, 100);
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, getGameData);
