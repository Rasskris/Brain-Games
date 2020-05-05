import _ from 'lodash';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const progression = (start, step) => {
  const arr = [];
  const progressionLength = 10;
  for (let i = start; arr.length < progressionLength; i += step) {
    arr.push(i);
  }
  return arr;
};

const getGameData = () => {
  const start = _.random(1, 100);
  const step = _.random(1, 10);
  const index = _.random(1, 9);
  const newArr = progression(start, step);
  const removeChar = newArr.splice(index, 1, '..');
  const correctAnswer = removeChar;
  const question = newArr.join(' ');
  return [question, String(correctAnswer)];
};

export default () => runGame(description, getGameData);
