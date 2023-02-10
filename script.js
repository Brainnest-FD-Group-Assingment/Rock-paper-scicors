
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
  console.log(`Computer chooses: ${gameChoice}`)
  return gameChoice
}

console.log(computerSelection)

function showComputerSelection(selection) {
  computerChoiceParagraph.textContent = `The computer chooses: ${selection}!`
}

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
  console.log(`You choose: ${playerSelection}`)
}

function showPlayerSelection(selection) {
  playerChoiceParagraph.textContent = `You choose: ${selection}!`
}

function playRound(playerSelection, computerSelection) {
  let lowerCasePlayerSelection = playerSelection.toLowerCase();
  let lowerCaseComputerSelection = computerSelection.toLowerCase()

  if((lowerCasePlayerSelection === 'rock' && lowerCaseComputerSelection === 'scissors') ||
    (lowerCasePlayerSelection === 'scissors' && lowerCaseComputerSelection === 'paper') ||
    (lowerCasePlayerSelection === 'paper' && lowerCaseComputerSelection === 'rock')) {
      whoGetsAPoint = 'player'
      winnerOfRound.textContent = `You win! ${lowerCasePlayerSelection} beats ${lowerCaseComputerSelection}!!`
    } else if (lowerCasePlayerSelection === lowerCaseComputerSelection) {
      winnerOfRound.textContent = 'Its a tie!!'
      whoGetsAPoint = 'none'
    } else if (lowerCasePlayerSelection === undefined || lowerCasePlayerSelection === null) {
      winnerOfRound.textContent = 'Game error, unknown characters entered';
    } else {
      whoGetsAPoint = 'computer'
      winnerOfRound.textContent = `You lose! ${lowerCaseComputerSelection} beats ${lowerCasePlayerSelection}!!`
    }
    console.log(`Winner: ${whoGetsAPoint}`)
}

function clearRound() {
  playerChoiceParagraph.textContent = ''
  computerChoiceParagraph.textContent = ''
  winnerOfRound.textContent = ''
}

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

function handleWinner() {
  clearRound()

  if(playerScore === 5 || computerScore === 5) {
    if(playerScore > computerScore) {
      overallWinner.textContent =  `You win with ${playerScore} points! The computer only got ${computerScore} points.`
      console.log(`Overall winner: You!!`)
    } else if(computerScore > playerScore) {
      overallWinner.textContent = `You lose! You only got ${playerScore} points and the computer got ${computerScore} points!`
      console.log(`Overall winner: Computer`)
      }
      setTimeout(clearAll, 5000)
    }
  }

function playGame() {
  computerSelection = computerPlay()
  showComputerSelection(computerSelection)
  setTimeout( round, 1000)
  setTimeout(handleWinner, 2000)
}

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

playBtn.addEventListener('click', function() {
  playGame()
})
