'use strict';
console.log('js is working');

alert('Welcome to my site! Please complete this short quiz about me');
var userName = prompt('But first, please tell me your name?');
console.log('users name is' + userName);
alert('Welcome ' + userName + '!');


var answer1 = prompt('Do I live in Bellevue?');
console.log('user entered' + answer1);
if(answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n'){
  alert('Correct!');
}else{
  alert('Incorrect');
}

var answer2 = prompt('Am I from New York?');
console.log('user entered' + answer2);
if(answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n'){
  alert('Correct!');
}else{
  alert('Incorrect');
}

var answer3 = prompt('Am I a Lab Technician?');
console.log('user entered' + answer3);
if(answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y'){
  alert('Correct!');
}else{
  alert('Incorrect');
}

var answer4 = prompt('Do I use Unity for game development?');
console.log('user entered' + answer4);
if(answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
  alert('Correct!');
}else{
  alert('Incorrect');
}

var answer5 = prompt('Is my goal to become a football commentary engineer?');
console.log('user entered' + answer5);
if(answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n'){
  alert('Correct!');
}else{
  alert('Incorrect');
}

alert('Thank you ' + userName + ' for completing this quiz, have a nice day!');




