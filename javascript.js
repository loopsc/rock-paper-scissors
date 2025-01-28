let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNumber = Math.random();
  testingNumber = 0.9;

  if (randomNumber <= 0.33) {
    // console.log(randomNumber)
    return "rock";
  } else if (0.33 < randomNumber && randomNumber < 0.66) {
    // console.log(randomNumber)
    return "paper";
  } else {
    // console.log(randomNumber)
    return "scissors";
  }
}

function getHumanChoice() {
  do {
    humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (humanChoice == "rock") {
      return "rock";
    } else if (humanChoice == "paper") {
      return "paper";
    } else if (humanChoice == "scissors") {
      return "scissors";
    } else {
      console.log("invalid input. try again");
    }
  } while (
    humanChoice != "rock" ||
    humanChoice != "paper" ||
    humanChoice != "scissors"
  );
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      return "draw";
    } else if (computerChoice == "paper") {
      computerScore++;
      return "You lose, paper beats rock";
    } else {
      humanScore++;
      return "You win, rock beats scissors";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      return "draw";
    } else if (computerChoice == "scissors") {
      computerScore++;
      return "You lose, scissors beats paper";
    } else {
      humanScore++;
      return "You win, paper beats rock";
    }
  } else {
    if (computerChoice == "scissors") {
      return "draw";
    } else if (computerChoice == "rock") {
      computerScore++;
      return "You lose, rock beats scissors";
    } else {
      humanScore++;
      return "You win, scissors beats paper";
    }
  }
}


  for(i = 0; i < 5; i++){
    const compSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
  
    // getComputerChoice()
    console.log("Human choice: " + humanSelection);
    console.log("Comp choice: " + compSelection);
  
    console.log(playRound(humanSelection, compSelection));
    console.log("human score: " + humanScore);
    console.log("comp score: " + computerScore);
  }



