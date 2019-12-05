'use strict';
debugger;
console.log('js is working');

alert('Welcome to my site! Please complete this short quiz about me');
var userName = prompt('But first, please tell me your name?');
console.log('users name is' + userName);
alert('Welcome ' + userName + '!');

var score = 0;
var Q1 = function () {
  var answer1 = prompt('Do I live in Bellevue?');
  console.log('user entered' + answer1);
  if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert('Correct!');
    score += 1;
  } else {
    alert('Incorrect');
  }
}
// Q1();

var Q2 = function () {
  var answer2 = prompt('Am I from New York?');
  console.log('user entered' + answer2);
  if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
    alert('Correct!');
    score += 1;
  } else {
    alert('Incorrect');
  }
}
// Q2();

var Q3 = function () {
  var answer3 = prompt('Am I a Lab Technician?');
  console.log('user entered' + answer3);
  if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
    alert('Correct!');
    score += 1;
  } else {
    alert('Incorrect');
  }
}
// Q3();

var Q4 = function () {
  var answer4 = prompt('Do I use Unity for game development?');
  console.log('user entered' + answer4);
  if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
    alert('Correct!');
    score += 1;
  } else {
    alert('Incorrect');
  }
};
// Q4();

var Q5 = function () {
  var answer5 = prompt('Is my goal to become a football commentary engineer?');
  console.log('user entered' + answer5);
  if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
    alert('Correct!');
    score += 1;
  } else {
    alert('Incorrect');
  }
};
// Q5();

//multiple choice
var MQ1 = function () {
  var answers = ['France', 'Russia', 'Bolivia', 'Brazil', 'England', 'Zambia'];
  for (var i = 0; i < answers.length; i = i + 1) {
    console.log(answers[i]);
  }
  alert('What country is first in my top ten places to visit?');
  var userAnswer = prompt('Please choose one ' + answers);
  if (userAnswer === answers[1]) {
    alert('Yay! Correct!');
    score += 1;
  } else {
    alert('Sorry, wrong answer :(');
  }
};
// MQ1();


// number guessing
var NQ1 = function () {
  var trys = 4;
  var guess = prompt('Guess a number (1-10)');
  function newPrompt() {
    guess = prompt('Guess a number (1-10)');
  }
  var correctNum = '7';
  for (trys = 4; trys > 0; trys = trys - 1) {
    if (guess === correctNum) {
      console.log('user entered correct num');
      alert('You guessed correctly!');
      break;
    } else if (guess !== correctNum) {
      console.log('user entered incorrect num');
      if (guess < correctNum)
        alert('go higher!');
      else if (guess > correctNum) {
        alert('go lower');
      }
      newPrompt();
    }
  }
}
// NQ1();

var test = function () {
  Q1(); Q2(); Q3(); Q4(); MQ1(); NQ1();
}
test();

console.log('user score is' + score);
alert('Your score is ' + score + ' , Thank you ' + userName + ' for completing this quiz, have a nice day!');
