import readlineSync from 'readline-sync';

let userName = '';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have you name? ');
  return `Hello, ${userName}!`;
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
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const checkNum = evenNum(num);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkNum === answer) {
      console.log('Correct!');
    } else {
      return `"${answer}" is wrong answer ;(. Correct answer was "${checkNum}". Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
