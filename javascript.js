let humanScore = 0;
let computerScore = 0;
let rounds = 0

// Returns the choice from the computer as a string
function getComputerChoice() {
  randomNumber = Math.random();
  // testingNumber = 0.9;

  if (randomNumber <= 0.33) {
    botResult.textContent = 'Computer chose: Rack'
    return "rock";
    
  } else if (0.33 < randomNumber && randomNumber < 0.66) {
    botResult.textContent = 'Computer chose: Pahper'
    return "paper";
  } else {
    botResult.textContent = 'Computer chose: Skazzors'
    return "scissors";
  }
}

const result = document.querySelector('#result')
const botResult = document.querySelector('#bot-result')
const buttons = document.querySelector('#button-container')
const playerScore = document.querySelector('#player-score')
const compScore = document.querySelector('#comp-score')
const round = document.querySelector('#round')


buttons.addEventListener('click', (e) => {

  switch(e.target.id) {
    case 'rock-btn':
      playRound('rock',getComputerChoice())
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      round.textContent = rounds;
      break
    case 'paper-btn':
      playRound('paper',getComputerChoice())
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      round.textContent = rounds;
      break
    case 'scissors-btn':
      playRound('scissors',getComputerChoice())
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      round.textContent = rounds;
      break
  }
})

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    rounds += 1
    if (computerChoice == "rock") {
      result.textContent = 'Draw'
      result.style.color = 'black'
    } else if (computerChoice == "paper") {
      computerScore++;
      result.textContent = "Unluggy. Pahper beats Rack";
      result.style.color = 'red'
    } else {
      humanScore++;
      result.textContent = "Noice! Rack beats Skazzors";
      result.style.color = 'green'
    }
  } else if (humanChoice == "paper") {
    rounds += 1
    if (computerChoice == "paper") {
      result.textContent = "Draw";
      result.style.color = 'black'
    } else if (computerChoice == "scissors") {
      computerScore++;
      result.textContent = "Unluggy! Skazzors beats Pahper";
      result.style.color = 'red'
    } else {
      humanScore++;
      result.textContent = "Noice! Pahper beats Rack";
      result.style.color = 'green'
    }
  } else {
    rounds += 1
    if (computerChoice == "scissors") {
      result.textContent = "Draw";
      result.style.color = 'black'
    } else if (computerChoice == "rock") {
      computerScore++;
      result.textContent = "Unluggy! Rock beats Skazzors";
      result.style.color = 'red'
    } else {
      humanScore++;
      result.textContent = "Noice! Skazzors beats Pahper";
      result.style.color = 'green'
    }
  }
}