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
        result = `Player won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
    }
    else if(computerSelection == "Paper" && playerSelection == "Scissors")
    {
        result = `Player won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Rock")
    {
        result = `Player won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
    }
    else if(computerSelection == "Rock" && playerSelection == "Scissors")
    {
        result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
    }
    else if(computerSelection == "Paper" && playerSelection == "Rock")
    {
        result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
    }
    else if(computerSelection == "Scissors" && playerSelection == "Paper")
    {
        result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
    }

    return result;
}

console.log(playRound(computerPlay(),playerChoice()));