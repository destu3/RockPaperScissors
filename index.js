/*
Understand the problem - create a rock paper scissors game that will be played from the console. The opponent will be the computer. Who ever has the highest score at round 5 wins

Plan: GAME STARTS 
      Generate the computers random choice
      Get the users choice from using the build in prompt function.
      compare the choices and decide round winner. Give point to the round winner
      That is the general game loop ^^^ there are 5 rounds so ^^^ happens 5 times 
      On the final round (5th loop iteration) the overall game winner is decided
      The winner is displayed   
      GAME ENDS
*/

let playerScore = 0;
let computerScore = 0;
const choiceButtons = document.querySelectorAll(".choiceButton")
const roundResults = document.querySelector(".roundResults")

//returns/generates random choice value for the computer
function computerChoice(){
    const options = ["Rock","Paper","Scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    return options[randomIndex];
}

//compares computer and player choice and decides a round winner
function playRound(computerSelection, playerSelection){

    let result;
    switch (true) {
        case computerSelection == playerSelection:
            result = `No one won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            break;
        
        case computerSelection == "Rock" && playerSelection == "Paper":
            result = `You won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            playerScore += 1;
            break;
        
        case computerSelection == "Paper" && playerSelection == "Scissors":
            result = `You won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            playerScore += 1;
            break;
    
        case computerSelection == "Scissors" && playerSelection == "Rock":
            result = `You won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            playerScore += 1;
            break;
    
        case computerSelection == "Rock" && playerSelection == "Scissors":
            result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            computerScore += 1;
            break;
    
        case computerSelection == "Paper" && playerSelection == "Rock":
            result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            computerScore += 1;
            break;
        
        case computerSelection == "Scissors" && playerSelection == "Paper":
            result = `Computer won this round, computer chose ${computerSelection} and you chose ${playerSelection}`;
            computerScore += 1;
            break;
    
        default: 
            result = "The value you have entered is not valid, automatic round win for computer"
            computerScore += 1;
            break;
    }
    return result;
}

//main game function. 5 rounds are played
// function game(){
//     for (let i = 1; i <= 5; i++) {
//         console.log(playRound(computerPlay(),playerChoice()));
//         if(i === 5){
//             console.log(`Final results are: You scored ${playerScore} and the Computer scored ${computerScore}`);
            
//             if(computerScore > playerScore){
//                 console.log("The computer takes the W")
//             }
//             else if(computerScore < playerScore){
//                 console.log("Man-kind has defeated technology")
//             }
//             else{
//                 console.log("Mankind and computers are evenly matched ... apparently ")
//             }
//         }
//      }
// }


// for each button of class choiceButton run add an event listener to it and determine what button was clicked and set playerChoice accordingly
choiceButtons.forEach((choiceButton) => {
    choiceButton.addEventListener("click", (e) => {
        let playerChoice = "";
        if (e.currentTarget.classList.contains("rockButton")){
            playerChoice = "Rock";
        }
        else if (e.currentTarget.classList.contains("scissorsButton")){
            playerChoice = "Scissors";
        }
        else{
            playerChoice = "Paper";
        }
        roundResults.textContent = playRound(computerChoice(),playerChoice)
    })
})


//game();