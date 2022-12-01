"use strict"

let userName = prompt('Hi! What\'s your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions yes/no (or y/n)`);

let questionOneGuess = prompt('Do I have two kids?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert("Yeah, you got it!");
} else if(questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert("Nope. Wrong answer.")
} 
let questionTwoGuess = prompt('Do I have four dogs?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  alert("Yeah, you got it!");
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert("Nope. Wrong answer.")
} 
let questionThreeGuess = prompt('Do I like pickled beets?').toLowerCase();

if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert("Yeah, you got it!");
} else if(questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert("Nope. Wrong answer.")
} 
let questionFourGuess = prompt('Do I enjoy snowboarding?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
  alert("Yeah, you got it!");
} else if(questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert("Nope. Wrong answer.")
} 
let questionFiveGuess = prompt('Is coding fun?').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert("Heck yeah it is! High fives!!");
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert("Nope. Wrong answer.")
}


// QUESTION SIX
// assign answer to variable myNum and initialize guessNum to zero
let myNum = 8;
let guessNum = 4;

while(guessNum > 0) {

  let questionSixGuess = prompt('I\'m thinking of a number between 1 and 10. Can you guess it in 4 tries?');

  if (parseInt(questionSixGuess) === myNum) {
    alert(`That's great ${userName}! You got it!`);
    break;

  } else if (questionSixGuess < myNum) {
    alert(`You're guess is too low ${userName}. Guess again.`);

  } else if (questionSixGuess > myNum) {
    alert(`Your guess is too high ${userName}. Guess again.`);

  } 
  guessNum--;

}
alert(`The correct answer was ${myNum}`);


// QUESTION SIX
// collabed with Liam Grist and Brendan Moore
let dreamVaca = ['egypt', 'ireland', 'sweden', 'beliz', 'switzerland', 'alaska'];

for(let i = 0; i < 6; i++) {
  let questionSevenGuess = prompt('Now can you guess where I want to vacation?').toLowerCase();
  let correct = false;
  for (let j = 0; j < dreamVaca.length; j++) {
    console.log(dreamVaca[j]);
    console.log(questionSevenGuess);
    if(questionSevenGuess === dreamVaca[j]) {
      correct = true;
      break;
    }
   
    questionSevenGuess--;
  }
  if (correct === false) {
    alert('Sorry that\'s not one of my places.'); 
  } else if(correct === true) {
    alert(`Yeah, you guessed one of my dream vacations ${userName}!`);
    break;
  }
}
alert(`Thanks for playing ${userName}!`);