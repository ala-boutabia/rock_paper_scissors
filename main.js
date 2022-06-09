function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"];
    let computerChoice = items[Math.floor(Math.random() * items.length)];
    return computerChoice;
}

function playerSelection() {
    let playerChoice = prompt("enter a choice: ");
    return playerChoice;
}

const ps = playerSelection().toLowerCase();
console.log("player choice: ", ps);
const cs = computerPlay().toLowerCase();
console.log("Computer choice: ", cs);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

console.log(playRound(ps, cs));

