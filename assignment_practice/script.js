
const options = document.getElementsByClassName('btn');
const playBtn = document.getElementById('play')
const roundNumber = document.getElementById('round-number')
const playerChoiceParagraph = document.getElementById('player-choice')
const computerChoiceParagraph = document.getElementById('computer-choice')
const winnerOfRound = document.getElementById('winner-of-round')
const overallWinner = document.getElementById('overall-winner')
const playerScoreAccumulated = document.getElementById('player-score-accumulated')
const computerScoreAccumulated = document.getElementById('computer-score-accumulated')
const roundsTotal = document.getElementById('rounds-total')
const score = document.getElementsByClassName('score')

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let numberOfRounds = 1;
let gameChoice
let whoGetsAPoint

console.log(playerScore, computerScore)
console.log(computerScoreAccumulated, playerScoreAccumulated)

//COMPUTER SELECTION---------------------------------------------------------------

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3)

  switch(randomNum) {
    case 0:
      gameChoice = 'Rock'
      break;
    case 1:
      gameChoice = 'Paper'
      break;
    case 2:
      gameChoice = 'Scissors'
  }
  return gameChoice
}

// let computerSelection = computerPlay()
console.log(computerSelection)

function showComputerSelection(selection) {
  computerChoiceParagraph.textContent = `The computer chooses: ${selection}!`
}

//USER SELECTION ---------------------------------------------------------------------

for (let i = 0 ; i < options.length; i++) {
  options[i].addEventListener('click' , function() {
    chooseWeapon(options[i].id)
  }) ; 
} 

function chooseWeapon(weapon) {
  if(weapon === 'rock') {
    playerSelection = 'Rock'
  } else if(weapon === 'paper') {
    playerSelection = 'Paper'
  } else if(weapon === 'scissors') {
    playerSelection = 'Scissors'
  }
  showPlayerSelection(playerSelection)
}

function showPlayerSelection(selection) {
  playerChoiceParagraph.textContent = `You choose: ${selection}!`
}

//PLAYROUND ----------------------------------------------------------------------

function playRound(playerSelection, computerSelection) {
  
  let lowerCasePlayerSelection = playerSelection.toLowerCase();
  let lowerCaseComputerSelection = computerSelection.toLowerCase()

  if(lowerCasePlayerSelection === 'rock' && lowerCaseComputerSelection ==='scissors') {
    winnerOfRound.textContent = 'You win! Rock beats scissors'
    whoGetsAPoint = 'player'
  } else if (lowerCasePlayerSelection === 'scissors' && lowerCaseComputerSelection ==='paper') {
    winnerOfRound.textContent =  'You win! Scissors beats paper'
    whoGetsAPoint = 'player'
  } else if (lowerCasePlayerSelection === 'paper' && lowerCaseComputerSelection ==='rock') {
    winnerOfRound.textContent = 'You win! Paper beats rock'
    whoGetsAPoint = 'player'
  } else if (lowerCasePlayerSelection === 'scissors' && lowerCaseComputerSelection ==='rock') {
    winnerOfRound.textContent = 'You lose! Rock beats scissors'
    whoGetsAPoint = 'computer'
  } else if (lowerCasePlayerSelection === 'rock' && lowerCaseComputerSelection ==='paper') {
    winnerOfRound.textContent = 'You lose! Paper beats rock'
    whoGetsAPoint = 'computer'
  } else if (lowerCasePlayerSelection === 'paper' && lowerCaseComputerSelection ==='scissors') {
    winnerOfRound.textContent = 'You lose! Scissors beats paper'
    whoGetsAPoint = 'computer'
  } else if(lowerCasePlayerSelection === lowerCaseComputerSelection) {
    winnerOfRound.textContent = 'Its a tie!!'
    whoGetsAPoint = 'none'
  } else {
    winnerOfRound.textContent = 'Error. Please make sure your spelling is correct'
    whoGetsAPoint = 'error'
  }

}

function clearRound() {
  playerChoiceParagraph.textContent = ''
  computerChoiceParagraph.textContent = ''
  winnerOfRound.textContent = ''
}

//HANDLE SCORING AND ROUNDS -------------------------------------------------------------

function addScoring(winner) {
  if(winner === 'player') {
    playerScore += 1
    playerScoreAccumulated.textContent = playerScore
  } else if(winner === 'computer') {
    computerScore += 1
    computerScoreAccumulated.textContent = computerScore
  } 
  console.log( playerScore, computerScore)
}

function handleRound() {
  if(whoGetsAPoint === 'error') {
    numberOfRounds += 0;
  } else {
    numberOfRounds += 1
  }
  roundsTotal.textContent = numberOfRounds
  roundNumber.textContent = `Round ${numberOfRounds}`
}

function round() {
  playRound(playerSelection, computerSelection)
  handleRound()
  addScoring(whoGetsAPoint)
  computerChoiceParagraph.textContent = ''
  playerChoiceParagraph.textContent = ''
}

//HANLE OVERALL WINNER -------------------------------------------------------------------

function handleWinner() {
  clearRound()

  if(playerScore === 5 || computerScore === 5) {
    if(playerScore > computerScore) {
      overallWinner.textContent =  `You win with ${playerScore} points! The computer only got ${computerScore} points.`
    } else if(computerScore > playerScore) {
      overallWinner.textContent = `You lose! You only got ${playerScore} points and the computer got ${computerScore} points!`
      }
      setTimeout(clearAll, 5000)
    }
  }

//PLAYGAME --------------------------------------------------------------------

function playGame() {
  computerSelection = computerPlay()
  showComputerSelection(computerSelection)
  setTimeout( round, 1000)
  setTimeout(handleWinner, 2000)
}

//TO RESTART -----------------------------------------------------------------------

function clearAll() {
  numberOfRounds = 1
  computerScore = 0
  playerScore = 0
  playerChoiceParagraph.textContent = ''
  computerChoiceParagraph.textContent = ''
  winnerOfRound.textContent = ''
  overallWinner.textContent = ''
  playerScoreAccumulated.textContent = 0
  computerScoreAccumulated.textContent = 0
  roundsTotal.textContent = 0
  roundNumber.textContent = 'Round 1'
}

//LETS GO! --------------------------------------------------------------------------

playBtn.addEventListener('click', function() {
  playGame()
})
