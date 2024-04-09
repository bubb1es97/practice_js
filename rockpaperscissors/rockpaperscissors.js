// create a function that tells the computer to select rock, paper or scissors randomly.
function getComputerChoice(){
   let arr = ['Rock', 'Paper', 'Scissors']; // place random items in one variable via an array
   return (arr[(Math.floor(Math.random() * arr.length))]); // tell computer to access variable and pick random string. 
}

// console.log(getComputerChoice());
// console.log(getComputerChoice());

function caseSensitive(word){
   let firstLetter = word.charAt(0); // isolates first letter of word
   let firstLetterCap = firstLetter.toUpperCase(); // turns first letter of word to upper case
   let remainingLetters = word.slice(1).toLowerCase(); // puts remaining letters in container and converts them to lower case
   let capitalizedWord = firstLetterCap + remainingLetters; // adds first letter of word and remaining letters together
   return capitalizedWord;
}
// create a function that plays a single round of Rock Paper 
// Scissors.
// two parameters - the playerSelection and computerSelection
// return a string that declares the winner or tie of the round
const playerSelection = caseSensitive("rock"); // attached caseSensitive function here bc it was not activating in playRound function
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
   
   // caseSensitive(playerSelection); --> Idk why, but playerSelection is not filtering through this function.
   
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
 
//  console.log(playRound(playerSelection, computerSelection));
 



//Write a NEW function called playGame(). Use the previous function inside 
// of this one to play a five round game that keeps score and reports a 
//winner or loser at the end.

function playGame(){
   let userScore = 0;
   let comScore = 0;
   for (let i = 0; i < 5; i++){
      if(playRound(playerSelection, computerSelection) === 'You Win! Paper beats Rock.' 
         || playRound(playerSelection, computerSelection) === 'You Win! Scissors beats Paper.'
         || playRound(playerSelection, computerSelection) === 'You Win! Rock beats Scissors.') {
            userScore += 1;
      }else if(playRound(playerSelection, computerSelection) === 'You Lose! Paper beats Rock.'
         || playRound(playerSelection, computerSelection) === 'You Lose! Scissors beats Paper.'
         || playRound(playerSelection, computerSelection) === 'You Lose! Rock beats Scissors.'){
            comScore += 1;}

      // console.log(playRound(playerSelection, computerSelection));
      console.log(userScore + ' userScore');
      console.log(comScore + ' comScore');
   }
 
  
   if(comScore > userScore){
      console.log('YOU LOST')
   } else if (userScore > comScore){
      console.log('CONGRATS YOU WIN!')
   }else console.log(`It's a Tie!`);

}

playGame();





// function keepScore(){
//    let userScore = 0;
//    let comScore = 0;
//    for (let i = 0; i < 5; i++){
//       if(playRound(playerSelection, computerSelection) === 'You Win! Paper beats Rock.' 
//          || playRound(playerSelection, computerSelection) === 'You Win! Scissors beats Paper.'
//          || playRound(playerSelection, computerSelection) === 'You Win! Rock beats Scissors.') {
//             userScore += 1;
//       }else if(playRound(playerSelection, computerSelection) === 'You Lose! Paper beats Rock.'
//          || playRound(playerSelection, computerSelection) === 'You Lose! Scissors beats Paper.'
//          || playRound(playerSelection, computerSelection) === 'You Lose! Rock beats Scissors.'){
//             comScore += 1;}

//       console.log(playRound(playerSelection, computerSelection));
//       console.log(userScore + ' userScore');
//       console.log(comScore + ' comScore');
//    }
 
  
//    if(comScore === 5){
//       console.log('YOU LOST')
//    } else if (userScore === 5){
//       console.log('CONGRATS YOU WIN!')
//    }
// }
// keepScore();
