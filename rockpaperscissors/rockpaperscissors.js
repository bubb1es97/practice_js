// create a function that tells the computer to select rock, paper or scissors randomly.
function getComputerChoice(){
   let arr = ['Rock', 'Paper', 'Scissors']; // place random items in one variable via an array
   return (arr[(Math.floor(Math.random() * arr.length))]); // tell computer to access variable and pick random string. 
}


function caseSensitive(word){
   let firstLetter = word.charAt(0); // isolates first letter of word
   let firstLetterCap = firstLetter.toUpperCase(); // turns first letter of word to upper case
   let remainingLetters = word.slice(1).toLowerCase(); // puts remaining letters in container and converts them to lower case
   let capitalizedWord = firstLetterCap + remainingLetters; // adds first letter of word and remaining letters together
   return capitalizedWord;
}
// let test = 'hungry';
// console.log(caseSensitive(test));

// create a function that plays a single round of Rock Paper 
// Scissors.
// two parameters - the playerSelection and computerSelection
// return a string that declares the winner or tie of the round
// "You Lose! Paper beats Rock".

function playRound(playerSelection, computerSelection){
   
   // caseSensitive(playerSelection);
   
   if (playerSelection === 'Paper' && computerSelection === 'Rock'
      || playerSelection === 'Scissors' && computerSelection === 'Paper'
      || playerSelection === 'Rock' && computerSelection === 'Scissors'){  
         return 'You Win!'
   }
   if (computerSelection === 'Paper' && playerSelection === 'Rock'
   || computerSelection === 'Scissors' && playerSelection === 'Paper'
   || computerSelection === 'Rock' && playerSelection === 'Scissors'){
      return 'You Lose!'
   }
   
   else return `It's A Tie!`;
}
 
 const playerSelection = caseSensitive("SciSSors");
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));
