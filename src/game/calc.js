import _ from 'lodash';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[_.random(0, operators.length - 1)];
  const firstNum = _.random(100);
  const secondNum = _.random(100);
  const question = `${firstNum} ${operator} ${secondNum}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      break;
    default:
  }
  return [question, String(correctAnswer)];
};

export default () => runGame(description, getGameData);
