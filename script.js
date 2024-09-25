const choices = ["rock", "paper", "scissors"];
let rock = document.getElementById("rockBtn");
let paper = document.getElementById("paperBtn");
let scissors = document.getElementById("scissorsBtn");
letplayerchoice = document.getElementById("playerChoice");
let output = document.getElementById("output");
let random = Math.floor(Math.random() * 3);
computerChoice = random
console.log(computerChoice);

const playerWins = playerChoice => {
    return (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    );
}

const play = playerChoice => {
    
    if (playerWins(playerChoice)) {
        console.log("player:" + playerChoice);
        console.log("computer:" + computerChoice);
        output.innerHTML = "Result: You Won!!!"
    } else if (playerChoice === computerChoice) {
        output.innerHTML = "Result: It's a Tie"
        console.log("player:" + playerChoice);
        console.log("computer:" + computerChoice);
    }
    else {
        output.innerHTML = "Result: You Lose"
        console.log("player:" + playerChoice);
        console.log("computer:" + computerChoice);
    }

    random = Math.floor(Math.random() * 3);
    computerChoice = choices[random];
}

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));


