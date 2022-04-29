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
        console.log("It was a tie");
    }
    else if(computerSelection == "Rock" && playerSelection == "Paper")
    {
        result = "Player wins this one";
    }
    else if(computerSelection == "Paper" && playerSelection == "Scissors")
    {
        result = "Player wins this one";
    }
    else if(computerSelection == "Scissors" && playerSelection == "Rock")
    {
        result = "Player wins this one";
    }
    else if(computerSelection == "Rock" && playerSelection == "Scissors")
    {
        result = "Computer wins this one";
    }
    else if(computerSelection == "Paper" && playerSelection == "Rock")
    {
        result = "Player wins this one";
    }
    else if(computerSelection == "Scissors" && playerSelection == "Paper")
    {
        result = "Player wins this one";
    }

    return result;
}