//array
var lettersGuessed = [];
lettersGuessed.push(lettersGuessed);
var guessesStr = lettersGuessed.join(',');
var message = "Guess what letter I'm thinking of";
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"];
var letterToGuess = '';
var gameOver = false;
var wins = 0;
var losses = 0;
var guesses = 9;


//to reset game
function resetGame() {

}



  // Captures Key Clicks
document.onkeyup = function (event){

    
// Determines which exact key was selected. Make it lowercase


  lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();

  document.getElementById('guessesStr').innerHTML='Your guesses so far: ' + lettersGuessed;
  lettersGuessed.appendchild() = 'Your guesses so far';

  }

//determines if correct letter guessed

  var letterToGuess = true;
  for (var i = 0; i < letterToGuess.length; i++)



 // Create code to randomly select letter (Computer)
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];




    //determines wins, losses, and guesses left
function psychicGame(char) {
if (userGuess === 'letterToGuess') {
   	wins( +=1);
   } 

if (userGuess !== 'letterToGuess') {
    guesses( -=1); 

} else if (guessCount === 0)
    losses( +=1);
}



	//create a loop to start a new game