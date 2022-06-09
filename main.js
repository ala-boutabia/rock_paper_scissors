function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"];
    let computerChoice = items[Math.floor(Math.random() * items.length)];
    return computerChoice;
}

function playerSelection() {
    let playerChoice = prompt("enter a choice: ");
    return playerChoice;
}

//const ps = playerSelection().toLowerCase();

//const cs = computerPlay().toLowerCase();


function playRound(computerSelection, playerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

// console.log(playRound(ps, cs));

function round() {
    for (let i = 0; i < 5; i++) {
        let a = computerPlay().toLowerCase();
        //console.log("computer", a);
        let b = playerSelection().toLowerCase();
        //console.log("player", b)
        let c = playRound(a, b)
        console.log(`Round ${i + 1}: ${c}`);
    }
}

console.log(round());
