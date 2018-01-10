'use strict';


var userName ,
    currentAnswer;

userName = prompt('Hello! What is your name?');
console.log('User\'s name: ' , userName); 

alert('Hello '+ userName +', this is a quiz about me. Please guess whether the following things about me are true or not, by typing yes or no for each question.');

currentAnswer = prompt('Do you think I have ever been scuba diving?');
currentAnswer = currentAnswer.toLowerCase();
if( currentAnswer === 'yes' || currentAnswer === 'y'){
console.log('scuba answer is yes');
alert( 'That\'s correct! I\'ve been scuba diving many times.')
} else if( currentAnswer === 'no' || currentAnswer === 'n'){
    console.log('scuba answer is no');
    alert( 'That\'s incorrect. I\'ve been scuba diving many times.')
} else {
    alert('I dont understand that. For the next question, please answer yes or no.')
}