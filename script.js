const computerSelection = function () {
    const compChoices = ["rock", "paper", "scissors"];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
};

const playerSelection = function () {
    return prompt("Choose: Rock, Paper or Scissors!").toLowerCase();
};

function playRound(playerSelection, computerSelection) {
    console.log(`computer selection is ${computerSelection}`);
    console.log(`player selection is ${playerSelection}`);

    if ((playerSelection === computerSelection)) {
        return "It's a draw!!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win!!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return "You lose!!";
    };
};


console.log(playRound(playerSelection(), computerSelection()));