import _ from 'lodash';
import runGame from '../index.js';

const evenNum = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const getGameData = () => {
  const question = _.random(100);
  const correctAnswer = evenNum(question);
  return [question, correctAnswer];
};

export default () => runGame(description, getGameData);
