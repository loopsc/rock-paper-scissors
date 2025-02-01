let humanScore = 0;
let computerScore = 0;

// Returns the choice from the computer as a string
function getComputerChoice() {
  randomNumber = Math.random();
  testingNumber = 0.9;

  if (randomNumber <= 0.33) {
    botResult.textContent = 'Computer chose: rock'
    return "rock";
    
  } else if (0.33 < randomNumber && randomNumber < 0.66) {
    botResult.textContent = 'Computer chose: paper'
    return "paper";
  } else {
    botResult.textContent = 'Computer chose: scissors'
    return "scissors";
  }
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const result = document.querySelector('#result');
const botResult = document.querySelector('#bot-result')

const buttons = document.querySelector('#button-container');

buttons.addEventListener('click', (e) => {

  switch(e.target.id) {
    case 'rock-btn':
      playRound('rock',getComputerChoice())
      break
    case 'paper-btn':
      playRound('paper',getComputerChoice())
      break
    case 'scissors-btn':
      playRound('scissors',getComputerChoice())
      break
  }
})


// rockBtn.addEventListener("click", () => {
//   playRound('rock',getComputerChoice())
// });

// paperBtn.addEventListener("click", () => {
//   playRound('paper',getComputerChoice())
// });

// scissorsBtn.addEventListener("click", () => {
//   playRound('scissors',getComputerChoice())
// });

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      // return "draw";
      result.textContent = 'draw'
    } else if (computerChoice == "paper") {
      computerScore++;
      result.textContent = "You lose, paper beats rock";
    } else {
      humanScore++;
      result.textContent = "You win, rock beats scissors";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      result.textContent = "draw";
    } else if (computerChoice == "scissors") {
      computerScore++;
      result.textContent = "You lose, scissors beats paper";
    } else {
      humanScore++;
      result.textContent = "You win, paper beats rock";
    }
  } else {
    if (computerChoice == "scissors") {
      result.textContent = "draw";
    } else if (computerChoice == "rock") {
      computerScore++;
      result.textContent = "You lose, rock beats scissors";
    } else {
      humanScore++;
      result.textContent = "You win, scissors beats paper";
    }
  }
}