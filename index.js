
function add7(number){
  return number + 7;
}

function multiply(a, b){
  return a * b;
}

function capitalize(word){
let firstLetter = word.charAt(0); // isolates first letter of word
let firstLetterCap = firstLetter.toUpperCase(); // turns first letter of word to upper case
let remainingLetters = word.slice(1).toLowerCase(); // puts remaining letters in container and converts them to lower case
let capitalizedWord = firstLetterCap + remainingLetters; // adds first letter of word and remaining letters together
return capitalizedWord;
}

function lastLetter(string){
  return string[string.length - 1];
}

console.log(capitalize('GENERAL'))