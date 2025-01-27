// Randomly returns a string: rock, paper or scissors
function getComputerChoice(){
    randomNumber = Math.random()
    if (randomNumber <= 0.33){
        console.log(randomNumber)
        return 'rock';
    }
    else if(0.33 < randomNumber && randomNumber < 0.66){
        console.log(randomNumber)
        return 'paper'
    }
    else{
        console.log(randomNumber)
        return 'scissors'
    }
}

console.log(getComputerChoice())