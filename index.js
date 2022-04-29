function computerPlay(){
    const options = ["Rock","Paper","Scissors"]
    const randomIndex = Math.round(Math.random() * 2)
    return options[randomIndex];
}
console.log(computerPlay());