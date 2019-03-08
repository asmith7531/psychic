document.getElementById("start").addEventListener("click", function(){



  //hides the instructions to start playing the game
  document.getElementById("start").innerHTML = "";

  start();

  function start(){

    var losses = 0;

    var wins = 0;
  
    var guesses = 9;

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

      alert(userInput);


    //conditional logic to compare the user input to the computer choice
    if(userInput === compChoiceChar) {
   
      alert("You Win!");

      wins++

      document.getElementById("wins").innerHTML = wins.toString();
      
        console.log(wins);
    
    }
    else {

      alert("You Lose...");

      losses++

      document.getElementById("losses").innerHTML= losses.toString();

      guesses--

      document.getElementById("guesses").innerHTML = guesses.toString();

        console.log(losses);
      
      document.getElementById("guessed").innerHTML = userInput.toString();

    }

    start();

  }  
}
})

