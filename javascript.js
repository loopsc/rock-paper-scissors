let humanScore = 0;
let computerScore = 0;

// Returns the choice from the computer as a string
function getComputerChoice() {
  randomNumber = Math.random();
  testingNumber = 0.9;

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


buttons.addEventListener('click', (e) => {

  switch(e.target.id) {
    case 'rock-btn':
      playRound('rock',getComputerChoice())
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      break
    case 'paper-btn':
      playRound('paper',getComputerChoice())
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      break
    case 'scissors-btn':
      playRound('scissors',getComputerChoice())
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      break
  }
})

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      result.textContent = 'Draw'
    } else if (computerChoice == "paper") {
      computerScore++;
      result.textContent = "Unluggy. Pahper beats Rack";
    } else {
      humanScore++;
      result.textContent = "Noice! Rack beats Skazzors";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      result.textContent = "Draw";
    } else if (computerChoice == "scissors") {
      computerScore++;
      result.textContent = "Unluggy! Skazzors beats Pahper";
    } else {
      humanScore++;
      result.textContent = "Noice! Pahper beats Rack";
    }
  } else {
    if (computerChoice == "scissors") {
      result.textContent = "Draw";
    } else if (computerChoice == "rock") {
      computerScore++;
      result.textContent = "Unluggy! Rock beats Skazzors";
    } else {
      humanScore++;
      result.textContent = "Noice! Skazzors beats Pahper";
    }
  }
}