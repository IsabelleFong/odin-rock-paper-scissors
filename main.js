function getComputerChoice() {
    // Returns a random number between 0 and 2
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // Returns 0 if the player loses, 1 if it's a tie, and 2 if the player wins
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 1;
        }
        else if (computerSelection === 'paper') {
            return 0;
        }
        else {
            return 2;
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 2;
        }
        else if (computerSelection === 'paper') {
            return 1;
        }
        else {
            return 0;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 0;
        }
        else if (computerSelection === 'paper') {
            return 2;
        }
        else {
            return 1;
        }
    }
}

function capitalizeFirstLetter(selection) {
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        let playerSelection = '';

        do {
            playerSelection = prompt('Enter rock, paper, or scissors');
        }
        while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors');

        const computerSelection = getComputerChoice();
        const playerSelectionCap = capitalizeFirstLetter(playerSelection);
        const computerSelectionCap = capitalizeFirstLetter(computerSelection);

        // Play the round and update the scores
        switch (playRound(playerSelection, computerSelection)) {
            case 0:
                console.log(`You Lose! ${computerSelectionCap} beats ${playerSelectionCap}`);
                computerScore++;
                break;
            case 1:
                console.log(`It\'s a Tie!`);
                break;
            case 2:
                console.log(`You Win! ${playerSelectionCap} beats ${computerSelectionCap}`);
                playerScore++;
                break;
        }
    }

    // Print the final scores
    if (playerScore > computerScore) {
        console.log('You Win!');
    }
    else if (playerScore < computerScore) {
        console.log('You Lose!');
    }
    else {
        console.log('It\'s a Tie!');
    }
}

playGame();