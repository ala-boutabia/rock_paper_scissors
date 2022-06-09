var choices = ["Rock", "Paper", "Scissors"];

function computerPlay(items) {
    let computerChoice = items[Math.floor(Math.random() * items.length)];
    return computerChoice;
}

var cp = computerPlay(choices).toLowerCase();
console.log("Computer choice: ", cp);

function playerSelection(cp) {
    let playerChoice = prompt("enter a choice: ").toLowerCase();
    console.log("player choice: ", playerChoice)
    if (playerChoice === "paper" && cp === "rock") {
        return "you lose";
    }

}


console.log(playerSelection(cp));
