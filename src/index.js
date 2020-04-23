import readlineSync from 'readline-sync';

let userName = '';

export const getName = () => {
  console.log('Welcome to the Brain Games!\n');
  userName = readlineSync.question('May I have you name? ');
  return `Hello, ${userName}!\n`;
};

const evenNum = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRandom = () => {
  const min = 1;
  const max = 100;
  const random = Math.floor(Math.random() * (max - min) + 1);
  return random;
};

export const evenGame = () => {
  console.log(getName());
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const checkNum = evenNum(num);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkNum === answer) {
      console.log('Correct!');
    } else {
      return `Sorry, "${answer}" is wrong answer ;(. Correct answer was "${checkNum}".\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
