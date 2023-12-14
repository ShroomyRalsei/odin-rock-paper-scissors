function startGame() {
    //variable player input is equal to the inputted value in prompt with text “Choose your move”//
    const playerInput = prompt("Choose your move");

    //Set player selection to player input in lower case//
    const playerSelection = playerInput.toLowerCase();

    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
}

//Get computer move//
function getComputerChoice() {
    //Choose random number//
    const randomNumber = Math.random();
    //If random number is between 2/3 and 1, return scissors, if between ⅓ and ⅔, return paper, else, rock.//
    if (randomNumber < 1 && randomNumber > 2/3) {
        return "scissors";
    }
    else if (randomNumber < 2/3 && randomNumber > 1/3) {
        return "paper";
    }
    else {
        return "rock";
    }
}
/*Only run if player move is rock, paper or scissors. Play round (player, computer) > if player and computer move are equal, alert “that’s a tie!” and execute start game function.

else if player move is rock, nest scenarios for each computer move and put alerts for the results, else if player move is paper, nest scenarios for each computer move and put alerts for the results, else if player move is scissors, nest scenarios for each computer move and put alerts for the results.
*/
function playRound(playerMove, computerMove) {
    if(playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
        if (playerMove === computerMove) {
        alert("That's a tie! Try again!");
        startGame();
        }
        else if (playerMove === "rock") {
            if (computerMove === "paper") {
                alert("You lose!")
            }
            else if (computerMove === "scissors") {
                alert("You win!")
            }
        }
        else if (playerMove === "paper") {
            if (computerMove === "scissors") {
                alert("You lose!")
            }
            else if (computerMove === "rock") {
                alert("You win!")
            }
        }
        else if (playerMove === "scissors") {
            if (computerMove === "rock") {
                alert("You lose!")
            }
            else if (computerMove === "paper") {
                alert("You win!")
            }
        }
    }
}