document.getElementById("start").addEventListener("click", function(){
    var losses = 0;
    var wins = 0;
    var guesses = 9;
    var guessed = [];

function gameover (){
    confirm("Game Over");
      losses=0
      wins=0
      guesses=9
      guessed=[];
}
  //hides the instructions to start playing the game

  document.getElementById("start").innerHTML = "";
  start();
  function start(){

    //game over conditional
    if (guesses === 0){
      gameover();
    }

    //random number generator
    var compChoice = (Math.floor(Math.random()*25)+1);
      console.log(compChoice);
      
    //string containing all of the computer choices
    var letterChoices = "abcdefghijklmnopqrstuvwxyz";

    //grabs the letter at the location the random number dictates
    var compChoiceChar = letterChoices.charAt(compChoice);
      console.log(compChoiceChar);

    //This defines the userInput var as a key press which is then hoisted to the conditional above
    document.onkeyup = function (event) {
      var userInput = event.key;
        console.log(userInput);
      

    //conditional logic to compare the user input to the computer choice
    if(userInput === compChoiceChar) {
      
      wins++
      document.getElementById("wins").innerHTML = wins.toString();      
        console.log(wins);    
        guesses=9;
    }

    else {
      
      losses++
      document.getElementById("losses").innerHTML= losses.toString();
      guesses--
      document.getElementById("guesses").innerHTML = guesses.toString();
        console.log(losses);      
      guessed.push(userInput);
      document.getElementById("guessed").innerHTML=guessed.toString()
    }
    

    start();

  }  
}
})

