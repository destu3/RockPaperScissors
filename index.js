let playerScore = 0;
let computerScore= 0;

game();

function computerPlay(){
    const options = ["Rock","Paper","Scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    return options[randomIndex];
}

function playerChoice(){
    const choice = prompt("Your turn, choose between rock paper and scissors");
    return choice;
}

function playRound(computerSelection, playerSelection){

    let result;
    if(computerSelection == playerSelection)
    {
        result = `No one won this round, computer chose ${computerSelection} and you chose ${playerSelection}`
    }
    else if(computerSelection == "Rock" && playerSelection == "Paper")
    {
        result = `You won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
        playerScore += 1;
    }
    else if(computerSelection == "Paper" && playerSelection == "Scissors")
    {
        result = `You won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
        playerScore += 1;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Rock")
    {
        result = `You won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
        playerScore += 1;
    }
    else if(computerSelection == "Rock" && playerSelection == "Scissors")
    {
        result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
        computerScore += 1;
    }
    else if(computerSelection == "Paper" && playerSelection == "Rock")
    {
        result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
        computerScore += 1;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Paper")
    {
        result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
        computerScore += 1;
    }

    return result;
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(),playerChoice()));
        if(i === 4){
            console.log(`Final results are: You scored ${playerScore},  Computer scored ${computerScore}`);
            
            if(computerScore > playerScore){
                console.log("The computer remains Triumphant")
            }
            else if(computerScore < playerScore){
                console.log("Man-kind has defeated technology")
            }
            else{
                console.log("Mankind and computers are evenly matched ... apparently ")
            }
        }
     }
}