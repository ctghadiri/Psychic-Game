// Create Array for Psychic (alphabet array)
var computerOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// create array for previous guesses
var userAttempts = [""]

// establish variables
var wins = 0;
var losses = 0;
var guesses = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// -------------------------------------------

// Comp randomely choose from array
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
// math.floor

// I choose 
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // prevent other key hits from affecting game
        computerOptions.indexOf(userGuess) > -1

        // Determines which key was pressed.
        var userGuess = event.key;
    }
// create if statement for when you choose right
    // increase wins
    // reset guesses 
    // computer chooses new number

    if (userGuess === computerChoice) {
        wins += wins;
        guesses = 9;

    }
    else {
        guesses -= guesses;
        if ( guesses < 0){
            alert("YOU LOSE");
            losses += losses;
        }
    }

// create if statment for when you choose wrong
    // decrease guesses
        // if guesses > 0
        // if guesses < 0 reset game
        //push to empty array to prevent choices
