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
// create a function named "playRound" that plays a single round of Rock Paper 
// Scissors.
// two parameters - the playerSelection and computerSelection
// return a string that declares the winner or tie of the round

function playRound(playerSelection){
    // caseSensitive(playerSelection); --> Idk why, but playerSelection is not filtering through this function.
   // console.log(computerSelection);
    computerSelection = getComputerChoice();
   
   if (playerSelection === 'Paper' && computerSelection === 'Rock'){
      return 'You Win! Paper beats Rock.'
   } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
      return 'You Win! Scissors beats Paper.'
   } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){  
         return 'You Win! Rock beats Scissors.'
   } else if (computerSelection === 'Paper' && playerSelection === 'Rock'){
      return 'You Lose! Paper beats Rock.'
   } else if (computerSelection === 'Scissors' && playerSelection === 'Paper'){
      return 'You Lose! Scissors beats Paper.'
   } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'){
      return 'You Lose! Rock beats Scissors.'
   }
   else return `It's A Tie!`;
}
const playerSelection = caseSensitive(prompt('Please choose rock, paper or scissors')); // attached caseSensitive function here bc it was not activating in playRound function
// const computerSelection = getComputerChoice(); // --> this is where the getComputerChoice breaks


//Write a NEW function called playGame(). Use the previous function inside 
// of this one to play a five round game that keeps score and reports a 
//winner or loser at the end. 
// I realize the playGame function is basically the playRound function with a loop added
// It was my best attempt to add score and create a five round game with the console.

function playGame(){
   let userScore = 0;
   let comScore = 0;
   for(i = 0; i < 5; i++){
       if (playerSelection === 'Paper' && getComputerChoice() === 'Rock'){
      console.log('You Win! Paper beats Rock.');
      console.log(userScore += 1);
       } else if (playerSelection === 'Scissors' && getComputerChoice() === 'Paper'){
      console.log('You Win! Scissors beats Paper.');
      console.log(userScore += 1);
       } else if (playerSelection === 'Rock' && getComputerChoice() === 'Scissors'){  
         console.log('You Win! Rock beats Scissors.');
         console.log(userScore += 1)
       } else if (getComputerChoice() === 'Paper' && playerSelection === 'Rock'){
      console.log('You Lose! Paper beats Rock.');
      console.log(comScore += 1);
       } else if (getComputerChoice() === 'Scissors' && playerSelection === 'Paper'){
      console.log('You Lose! Scissors beats Paper.');
      console.log(comScore += 1);
       } else if (getComputerChoice() === 'Rock' && playerSelection === 'Scissors'){
      console.log('You Lose! Rock beats Scissors.')
      console.log(comScore += 1);
       }
       else console.log(`It's A Tie!`);
    }
      
    if(comScore > userScore){
       console.log('YOU LOST! GAME OVER')
    } else if (userScore > comScore){
       console.log('CONGRATS YOU WON!')
    }else if(userScore === comScore){
       console.log('DRAW!');
    }
}

playGame();
// keepScore was my "dummy" function I bounced different syntax off of.
function keepScore(){
   for (let i = 0; i < 5; i++){
    console.log(playRound(playerSelection));
   }
}