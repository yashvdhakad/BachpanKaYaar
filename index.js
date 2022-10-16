const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));

var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("Aur meri jaan, kya pukara jaye tumhe? ");
console.log(chalk.blue("Bhot swaagat hai tumhara " + userName + "!"));
console.log("------------------------------");

var introAns = readlineSync.question("Chalo ab tum itna door humse milne aa hi gaye ho to dekhte hain tum kitna acha jaante ho humein. Taiyaar ho? (Hai khud par bharosa then Type 'han'.) ");
if (introAns === "han") {
  console.log("------------------------------");
  console.log("Yeh kuch rules hain, inko dhyan mein rakhna boss!");
  var rules = ['1. First five question will be for level 1 and you need to score 5/5 to get into level 2.', '2. Take screenshot of your score and send it to me.'];
  for (i = 0; i < rules.length; i++) {
    console.log(chalk.magenta(rules[i]));
  }
} else {
  console.log("Chal koi na, next time khelenge fir.")
}
console.log("------------------------------");

var rulesAns = readlineSync.question("To ab khel shuru kare? (Type 'han' to get started) ");
if (rulesAns === "han") {
  console.log("------------------------------");
  console.log(chalk.red("Chaliye Agni Pariksha shuru karte hain!"));
  console.log("------------------------------");
} else {
  console.log("Chalo pehli fursat mein niklo ab.")
}


var highScore = [
  {
    name: 'Devu',
    score: 2
  },
  {
    name: 'Billa',
    score: 1
  }
]

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log("Right!")
    score++;
  } else {
    console.log("Wrong!");
  }
  console.log("Your current score is: " + chalk.green.bold(score));
  console.log("------------------------------");
}

var questions = [{
  question: '1. Humari dosti ki shuruaat kitne saal pehle hui thi? ',
  answer: '14'
}, {
  question: '2. Jab hum pehli baar mile the tab humari age kitni thi? ',
  answer: '8'
}, {
  question: '3. Tum mujhe bachpan mein kya kehkar bulate the? ',
  answer: 'chotu'
}, {
  question: '4. Humara bachpan mein sabse pasandida khel konsa tha? ',
  answer: 'cricket'
}, {
  question: '5. Hum kiss school mein sath padte the? ',
  answer: 'mdjain'
}, {
  question: '6. Kya hum bachpan mein ek dusre se jhagda karte the? ',
  answer: 'han'
}, {
  question: '7. Hum konsa social media use karte the uss samay? ',
  answer: 'fb'
}, {
  question: '8. Kya naam tha uss ladki ka jisse hum dono ne mutually baat ki thi? ',
  answer: 'deeksha'
}, {
  question: '9. 1-10 tak ke scale par tumhe kya lagta hai tum mere liye kaha ho? ',
  answer: '8'
}];

for (i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}

console.log(chalk.red.bold("Oooooo yeah! You've scored: " + score));
console.log("-----------------------------------------------------------");

if (score > highScore[0].score) {
  console.log(chalk.blue.bold("Bhot bhadhayi " + userName + " bhai. Tumne sabse zyada score kiya hai aur buss tum hi ho mere sache sakha!"));

  console.log("Check out the highest score makers before you: ");
  for (i = 0; i < highScore.length; i++) {
    var currentScore = highScore[i];
    console.log(currentScore.name, currentScore.score);
  }
} else if (score === highScore[0].score) {
  console.log("Oh it's a tie match. Tumne " + highScore[0].name + " ke barabar score kiya hai!")
} else { }
console.log("Check out the highest score makers before you: ");
for (i = 0; i < highScore.length; i++) {
  var currentScore = highScore[i];
  console.log(currentScore.name, currentScore.score);
}