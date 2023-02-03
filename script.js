function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3)
  let gameChoice;
  switch(randomNum) {
    case 0:
      gameChoice = 'rock'
      break;
    case 1:
      gameChoice = 'paper'
      break;
    case 2:
      gameChoice = 'scissors'
  }

  return gameChoice
}


function playRound(playerSelection, computerSelection) {
  lowerCasePlayerSelection = playerSelection.toLowerCase();
  lowerCaseComputerSelection = computerSelection.toLowerCase()

  if(lowerCasePlayerSelection === 'rock' && lowerCaseComputerSelection ==='scissors') {
    return 'You win! Rock beats scissors'
  } else if (lowerCasePlayerSelection === 'scissors' && lowerCaseComputerSelection ==='paper') {
    return 'You win! Scissors beats paper'
  } else if (lowerCasePlayerSelection === 'paper' && lowerCaseComputerSelection ==='rock') {
    return 'You win! Paper beats rock'
  } else if (lowerCasePlayerSelection === 'scissors' && lowerCaseComputerSelection ==='rock') {
    return 'You lose! Rock beats scissors'
  } else if (lowerCasePlayerSelection === 'rock' && lowerCaseComputerSelection ==='paper') {
    return 'You lose! Paper beats rock'
  } else if (lowerCasePlayerSelection === 'paper' && lowerCaseComputerSelection ==='scissors') {
    return 'You lose! Scissors beats paper'
  } else if(lowerCasePlayerSelection === lowerCaseComputerSelection) {
    return 'Its a tie!!'
  } else {
    return 'Error. Please make sure your spelling is correct'
  }
}

let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

function addScoring(round) {
  if(round.includes('You win')) {
    playerScore += 1
  } else if(round.includes('You lose')) {
    computerScore += 1
  } 
  console.log(playerScore, computerScore)
}

function handleRound(round) {
  console.log(round)
  if(round.includes('Error')) {
    roundNumber += 0;
  } else {
    roundNumber += 1
  }
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    console.log(`Round ${roundNumber}`)
    const computerSelection = computerPlay();
    const playerSelection = prompt('Rock, paper or scissors?')
    let round = playRound(playerSelection, computerSelection);
    
    handleRound(round)
    addScoring(round)
  }

  if(playerScore > computerScore) {
    return `You win with ${playerScore} points! The computer only got ${computerScore} points.`
  } else if(computerScore > playerScore) {
    return `You lose! You only got ${playerScore} points and the computer got ${computerScore} points!`
  }
}

console.log(playGame())