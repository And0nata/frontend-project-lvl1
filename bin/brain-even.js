import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name1 = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name1}!`);
let correctAnswer = 0;
function getRandomInt() {
  return Math.floor(Math.random() * 100);
};
if(correctAnswer<3) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let number = getRandomInt();
  console.log(`Question: ${number()}`);
  const answer = readlineSync.question('Your answer: ');
  if((answer=='yes' && number%2==0)||(answer=='no' && number%2!=0)) {
      correctAnswer++;
      console.log('Correct!');
  } else {
      if(answer=='yes' && number%2!=0) {
          console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
      }
      if(answer=='no' && number%2==0) {
          console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
      }
     console.log(`Let's try again, ${name1}!`);
    };
console.log(`Congratulations, ${name1}!`);