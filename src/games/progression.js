import random from 'lodash/random.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (start, step, progressionLength) => {
  const progression = [];
  for (let current = start; progression.length < progressionLength; current += step) {
    progression.push(current);
  }
  return progression;
};

const getGameData = () => {
  const start = random(1, 100);
  const step = random(1, 10);
  const progressionLength = 10;
  const index = random(1, progressionLength - 1);
  const progression = makeProgression(start, step, progressionLength);
  const correctAnswer = progression.splice(index, 1, '..');
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => runGame(description, getGameData);
