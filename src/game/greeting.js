import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have you name? ');
  return `Hello, ${userName}`;
};
export default greeting;
