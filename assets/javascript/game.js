// Create Array for Psychic (alphabet array)
var computerOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// create array for user previous guesses
var userAttempts = [""]

// establish variables
var wins = 0;
var losses = 0;
var guesses = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guess-text")

// -------------------------------------------

// Comp randomely choose from array (figure out how it keeps chosen number until itsdone)
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // prevent other key hits from affecting game
        computerOptions.indexOf(userGuess) > -1

        // Determines which key was pressed.
        var userGuess = event.key;
        //push to empty array to prevent choices
        var x =  userAttempts.push(userGuess)
    
// create if statement for when you choose right
    // computer chooses new number ??????

    if (userGuess === computerChoice) {
        alert("WINNER WINNER CHICKEN DINNER!")
        wins += wins;
        guesses = 9;
        userAttempts.length = 0
    }
    // create if statment for when you choose wrong
        // decrease guesses
            // if guesses < 0 reset game (firgure out how it chooses new number)
    else {
        guesses -= guesses; 
        if ( guesses === 0){
            alert("YOU LOSE");
            losses += losses;
            guesses = 9;
            userAttempts.length = 0
        }
    }


// display wins and losses and user choice

        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessText.textContent = "Guesses" + guesses;
}