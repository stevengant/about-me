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

alert(`Thanks ${userName} for playing my guessing game!`)