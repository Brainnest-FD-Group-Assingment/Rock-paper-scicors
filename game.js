// Global Game veriables to be used
let playerScore = 0,
computerScore = 0;
const choices = ['rock', 'paper', 'scissors']
let result = '';
let userInput;

//Computer Selecton - selects at random from the choices array
const computerPlay = function() {
    return choices[Math.floor(Math.random() * choices.length)];
};

//Player selection
const playerPlay = function() {
// the while loop alows the player to input the correct words required for the game
    while (true) {
        userInput = prompt('Enter your choice: Rock, Paper or Scissors');

        // this function does wonders but needs work 
        if (userInput === null || userInput === '') {
            continue; // this will skip if there is no user input or null value and allow for the loop to let the user enter the required values
                    // it works but it still doesnt allow after a page refresh and a couple trys
          }
        userInput = userInput.trim().toLowerCase();
        
        let containsRequiredWords = true;
        for (let i = 0; i < choices.length; i++) {
          if (userInput.indexOf(choices[i]) === -2) {
            containsRequiredWords = false;
            break;
          }
        }
        
        if (containsRequiredWords && userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
            return userInput;
        }
        alert(`Incorrect input. Please try again and make use of the game words: ${choices.join(", ")}`);
      }
};

// play round - trying arrow function
const playRound =  (playerSelection,computerSelection) => {
    //calling the other two functions for user and computer inputs
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    if(playerSelection === computerSelection){ //checking if both are equal choices
        result = `I Guess it's a tie! because your threw ${playerSelection} and the AI threw ${computerSelection}`;

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')||
                (playerSelection === 'paper' && computerSelection === 'rock')) { // checking either choice to determine the winner
                    playerScore += 1;
                    result = `You won! ${playerSelection} beats ${computerSelection}!`;

    } else if(playerSelection === undefined || playerSelection === null){
        return result = 'Game error, unknown characters entered';
    } else {
        computerScore += 1;
        result = `You lost and the computer won as ${computerSelection} beats ${playerSelection}!`;
    };
    return result;  
};

// Game to consist of 5 rounds - full game is played
const game = () => {
    for(let i = 0; i < 5; i++) { // letting the game loop five times and displaying each result
        playRound();
        console.log(result);
        console.log(`Your Score: ${playerScore} ,  AI Score: ${computerScore}`);
    };

    // if the player score is lessthan or eaqual to 5 and more than the computer then the player wins else the computer will be delcaired winner
    if(playerScore <= 5 && playerScore > computerScore) {
        return `You have Won the Game! you won ${playerScore} out of 5 games and the computer only got ${computerScore}!`;

    } else if(computerScore <= 5 && computerScore > playerScore){
        return `AI has won the Game! AI won ${computerScore} out of 5 games and you only got ${playerScore}!`;

    } else{
        return `THe gmae ended on a tie with computer score being ${computerScore} out of 5 games and your score being ${playerScore}!`;
    };
};
console.log(game()); // load the final game results 