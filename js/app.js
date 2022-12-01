"use strict"

let userName = prompt('Hi! What\'s your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions yes/no (or y/n)`);

function questionOne(){
  let questionOneGuess = prompt('Do I have two kids?').toLowerCase();

  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert("Yeah, you got it!");
  } else if(questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert("Nope. Wrong answer.");
  }
}
questionOne();

function questionTwo() {
  let questionTwoGuess = prompt('Do I have four dogs?').toLowerCase();

  if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert("Yeah, you got it!");
  } else if(questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert("Nope. Wrong answer.");
  }
}
questionTwo();

function questionThree() {
  let questionThreeGuess = prompt('Do I like pickled beets?').toLowerCase();

  if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert("Yeah, you got it!");
  } else if(questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert("Nope. Wrong answer.");
  }
}

questionThree();

function questionFour() {
  let questionFourGuess = prompt('Do I enjoy snowboarding?').toLowerCase();

  if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
    alert("Yeah, you got it!");
  } else if(questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert("Nope. Wrong answer.");
  }
}
questionFour();

function questionFive() {
  let questionFiveGuess = prompt('Is coding fun?').toLowerCase();

  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert("Heck yeah it is! High fives!!");
  } else if(questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert("Nope. Wrong answer.")
  }
}
questionFive();

// QUESTION SIX
// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.


// DONE: Set a number for user to guess.
let myNum = 8;



// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// collabed with Liam Grist and Brendan Moore


// DONE: It should give the user exactly four opportunities to get the correct answer.
let guessNum = 4;

// assign answer to variable myNum and initialize guessNum to zero
function questionSix() {
  while(guessNum > 0) {

    // DONE: Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
    let questionSixGuess = +prompt('I\'m thinking of a number between 1 and 10. Can you guess it in 4 tries?');

    // DONE: Indicate user got it right.
    if (questionSixGuess === myNum) {
      alert(`That's great ${userName}! You got it!`);
      break;

    // DONE: Indicate if “too low”.
    } else if (questionSixGuess < myNum) {
      alert(`You're guess is too low ${userName}. Guess again.`);
      // DONE: Indicates through an alert if the guess is “too high” 

    } else if (questionSixGuess > myNum) {
      alert(`Your guess is too high ${userName}. Guess again.`);

    } 
    guessNum--;

  }
}
questionSix();

alert(`The correct answer was ${myNum}`);


// QUESTION SEVEN



// TODO: they run out of attempts.

// Consider using a loop of some sort for this question.
// collabed with Liam Grist and Brendan Moore
function questionSeven() {
  let dreamVaca = ['egypt', 'ireland', 'sweden', 'beliz', 'switzerland', 'alaska'];

  // DONE: Give the user 6 attempts to guess the correct answer
  for(let i = 0; i < 6; i++) {

    // DONE: Add a 7th question that has multiple possible correct answers that are stored in an array.
    let questionSevenGuess = prompt('Now can you guess where I want to vacation?').toLowerCase();
    let correct = false;
    for (let j = 0; j < dreamVaca.length; j++) {

      if(questionSevenGuess === dreamVaca[j]) {
        alert('Yes! That\'s one of my places!')
        score++;
        correct = true;
        break;
      }
    
      questionSevenGuess--;
    }
    if (correct === false) {
      alert('Sorry that\'s not one of my places.'); 
      // DONE: The guesses will end once the user guesses a correct answer 
    } else if(correct === true) {
      alert(`Yeah, you guessed one of my dream vacations ${userName}!`);
      break;
    }
  }
}
questionSeven();
// DONE: Display all the possible correct answers to the user.
alert(`Thanks for playing ${userName}! My dream vacations are ${dreamVaca}.`);
