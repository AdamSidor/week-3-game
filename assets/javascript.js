//array
var lettersGuessed = [];
var message = "Guess what letter I'm thinking of";
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"];
var letterToGuess = '';
var gameOver = false;
var winCount = 0;
var lossCount = 0;
var guesses = 9;




  // Captures Key Clicks
document.onkeyup = function (event){

    
// Determines which exact key was selected. Make it lowercase


  lettersGuessed.push(String.fromCharCode(event.keyCode).toLowerCase());

  document.getElementById('guessesStr').innerHTML='Your guesses so far: ' + lettersGuessed;
  

  

//determines if correct letter guessed

  //var letterToGuess = true;
  //for (var i = 0; i < letterToGuess.length; i++)



 // Create code to randomly select letter (Computer)
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log(letterToGuess)


 var userGuess= 
 String.fromCharCode(event.keyCode).toLowerCase();
lettersGuessed.push(userGuess);


    //determines wins, losses, and guesses left

if (userGuess === 'letterToGuess') {
  	winCount++
  } 

  else {
    guesses--
  }
  

 if (guesses === 0) {
    lossCount++
  }
}



	//create a loop to start a new game