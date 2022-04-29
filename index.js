function computerPlay(){
    const options = ["Rock","Paper","Scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    return options[randomIndex];
}

function playerChoice(){
    const choice = prompt("Your turn, choose between rock paper and scissors");
    return choice;
}

console.log(`Computer chose ${computerPlay()}`);
console.log(`You chose ${playerChoice()}`);
