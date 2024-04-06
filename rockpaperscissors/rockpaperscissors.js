// create a function that tells the computer to select rock, paper or scissors randomly.
function getComputerChoice(){
   let arr = ['rock', 'paper', 'scissors']; // place random items in one variable via an array
   return (arr[(Math.floor(Math.random() * arr.length))]); // tell computer to access variable and pick random string. 
}

console.log(getComputerChoice());