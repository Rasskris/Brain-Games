import readlineSync from 'readline-sync';

const runGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(description);

  const attemtCount = 3;

  for (let i = 0; i < attemtCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `Sorry, "${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export default runGame;
