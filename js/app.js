'use strict';

var userName ,
  currentAnswer,
  correctAnswers = 0;

userName = prompt('Hello! What is your name?');
console.log('User\'s name: ' , userName);

alert('Hello ' + userName + ', this is a quiz game about me. There are 7 questions. For the first 5 questions, please guess whether the following things about me are true or not, by typing yes or no for each question.');

// Question 1
function question1() {
  currentAnswer = prompt('1. Do you think I have ever been scuba diving?');
  currentAnswer = currentAnswer.toLowerCase();
  if( currentAnswer === 'yes' || currentAnswer === 'y'){
    console.log('scuba answer is yes');
    alert( 'That\'s correct! I\'ve been scuba diving many times.');
    correctAnswers++;
  } else if( currentAnswer === 'no' || currentAnswer === 'n'){
    console.log('scuba answer is no');
    alert( 'That\'s incorrect. I\'ve been scuba diving many times.');
  } else {
    alert('I dont understand that. For the next question, please answer yes or no.');
  }
  console.log( 'Correct answers: ' + correctAnswers );
}

// Question 2
function question2() {
  currentAnswer = prompt('2. Do you think I have ever been skydiving?');
  currentAnswer = currentAnswer.toLowerCase();
  if( currentAnswer === 'yes' || currentAnswer === 'y'){
    console.log('skydiving answer is yes');
    alert( 'That\'s incorrect. I\'ve never really been skydiving. I\'ve done simulated skydiving in a wind tunnel though, and that\'s really fun!' );
  } else if( currentAnswer === 'no' || currentAnswer === 'n'){
    console.log('skydiving answer is no');
    alert( 'That\'s correct. I\'ve never really been skydiving. I\'ve done simulated skydiving in a wind tunnel though, and that\'s really fun!');
    correctAnswers++;
  } else {
    alert('I dont understand that. For the next question, please answer yes or no.');
  }
  console.log( 'Correct answers: ' + correctAnswers );
}

// Question 3
function question3() {
  currentAnswer = prompt('3. Do you think I am an avid video gamer?');
  currentAnswer = currentAnswer.toLowerCase();
  if( currentAnswer === 'yes' || currentAnswer === 'y'){
    console.log('gamer answer is yes');
    alert( 'No, not really. Most games are fun for a bit but then I lose interest. Exception: puzzle games. Portal and Portal 2 are my favorites!')
  } else if( currentAnswer === 'no' || currentAnswer === 'n'){
    console.log('gamer answer is no');
    alert( 'That\'s correct. Most games are fun for a bit but then I lose interest. Exception: puzzle games. Portal and Portal 2 are my favorites!');
    correctAnswers++;
  } else {
    alert('I dont understand that. For the next question, please answer yes or no.');
  }
  console.log( 'Correct answers: ' + correctAnswers );
}

// Question 4
function question4() {
  currentAnswer = prompt('4. Do you think I\'m a Star Wars fan?');
  currentAnswer = currentAnswer.toLowerCase();
  if( currentAnswer === 'yes' || currentAnswer === 'y'){
    console.log('Star Wars answer is yes');
    alert( 'Yep! Love it.');
    correctAnswers++;
  } else if( currentAnswer === 'no' || currentAnswer === 'n'){
    console.log('Star Wars  answer is no');
    alert( 'That\'s incorrect. I\'ve always loved Star Wars.');
  } else {
    alert('I dont understand that. For the next question, please answer yes or no.');
  }
  console.log( 'Correct answers: ' + correctAnswers );
}

// Question 5
function question5() {
  currentAnswer = prompt('5. Do you think I have ever performed on stage with Macklemore?');
  currentAnswer = currentAnswer.toLowerCase();
  if( currentAnswer === 'yes' || currentAnswer === 'y'){
    console.log('Macklemore answer is yes');
    alert( 'Nah, that\'s not true.');
  } else if( currentAnswer === 'no' || currentAnswer === 'n'){
    console.log('Macklemore answer is no');
    alert( 'Haha, you\'re right, I\'ve never done that.');
    correctAnswers++;
  } else {
    alert('I dont understand that.');
  }
  console.log( 'Correct answers: ' + correctAnswers );
}

// Question 6
var myNumber = 8;
var allowedGuesses = 4;
currentAnswer = prompt('6. Guess what number I\'m thinking of? You have ' + allowedGuesses + ' guesses.');
for(var i = 0; i < allowedGuesses; i++){
  currentAnswer = parseInt(currentAnswer);
  console.log('User guessed number ' + currentAnswer );
  if( currentAnswer === myNumber){
    alert( 'Correct! The number was ' + myNumber );
    correctAnswers++;
    break;
  } else if(i === allowedGuesses - 1){
    alert( 'Incorrect, and that\'s all the guesses allowed. The number was ' + myNumber + '.' );
  } else if( currentAnswer < myNumber ){
    currentAnswer = prompt( 'The answer is higher than that. Please guess again.' );
  } else if( currentAnswer > myNumber ){
    currentAnswer = prompt( 'The answer is lower than that. Please guess again.' );
  } else {
    currentAnswer = prompt( 'I dont understand that. Please guess again.' );
  }
}
console.log( 'Correct answers: ' + correctAnswers );

// Question 7
var myStates = [' Maryland', ' New Mexico', ' California', ' Hawaii'];
console.log('Number of states: ' + myStates.length);
var remainingGuesses = 6;
currentAnswer = prompt('7. Can you guess a state that I have lived in besides Washington? You have ' + remainingGuesses + ' guesses.');
while(remainingGuesses > 0){
  console.log('Remaining guesses: ' + remainingGuesses );
  console.log('User guessed ' + currentAnswer );
  currentAnswer = ' ' + currentAnswer.toLowerCase();
  var j = 0;
  var correctFlag = false;
  while(j < myStates.length) {
    var currentState = myStates[j].toLowerCase();
    if (currentAnswer === currentState){
      correctFlag = true;
      alert('Correct!\nStates I have lived in besides Washington are: ' + myStates + '.');
      correctAnswers++;
      break;
    }
    j++;
  }
  if (correctFlag){
    console.log('State question was answered correctly');
    break;
  }
  remainingGuesses--;
  if(remainingGuesses > 0) {
    currentAnswer = prompt('No, guess again.');
  }
  else {
    alert('Incorrect, and that\'s all the guesses allowed.\nStates I have lived in besides Washington are: ' + myStates + '.');
  }
}

question1();
question2();
question3();
question4();
question5();


console.log( 'Correct answers: ' + correctAnswers );

alert('Thanks for playing the About Me game, ' + userName + '! You got ' + correctAnswers + ' correct answers out of 7.');

