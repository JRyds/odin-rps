const buttons = document.querySelectorAll('.choice');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.result');
const playAgainButton = document.querySelector('.play-again');

let playerScore = 0;
let computerScore = 0;
let round = 1;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        if (playerScore === 5) {
            resultDisplay.textContent = 'You win!';
            playAgainButton.style.display = 'inline-block';
            disableButtons();
        } else {
            resultDisplay.textContent = `Round ${round}: You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        if (computerScore === 5) {
            resultDisplay.textContent = 'Computer wins!';
            playAgainButton.style.display = 'inline-block';
            disableButtons();
        } else {
            resultDisplay.textContent = `Round ${round}: You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    round++;
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function enableButtons() {
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    round = 1;
    playAgainButton.style.display = 'none';
    enableButtons();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

playAgainButton.addEventListener('click', resetGame);
