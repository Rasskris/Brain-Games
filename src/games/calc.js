import random from 'lodash/random.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '*':
      return firstNum * secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const getGameData = () => {
  const operator = operators[random(0, operators.length - 1)];
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = calculate(operator, firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => runGame(description, getGameData);
