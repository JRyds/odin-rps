const computerSelection = function () {
    const compChoices = ["rock", "paper", "scissors"];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
};

// const playerSelection = function () {
//     return prompt("Choose: Rock, Paper or Scissors!").toLowerCase();
// };

// function playRound(playerSelection, computerSelection) {
//     console.log(`computer selection is ${computerSelection}`);
//     console.log(`player selection is ${playerSelection}`);
//
//     if ((playerSelection === computerSelection)) {
//         return "D";
//     } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
//         return "W";
//     } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
//         return "L";
//     };
// };


// function game() {
//     //keep score
//     let playerScore = 0;
//     let computerScore = 0;
//
//     //play 5 rounds
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(playerSelection(), computerSelection());
//         if (result === "D") {
//             continue;
//         } else if (result === "W") {
//             playerScore = playerScore + 1;
//         } else if (result === "L") {
//             computerScore = computerScore + 1;
//         }
//     }
//
//
//     //reports winner
//
//     if (playerScore > computerScore) {
//         alert("Player Wins!!")
//     } else if (computerScore > playerScore) {
//         alert("Computer Wins!!")
//     }
//
//
// }
// game();