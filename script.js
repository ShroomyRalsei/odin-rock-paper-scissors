//Set initial scores to 0//
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock-button');

const paperButton = document.querySelector('#paper-button');

const scissorsButton = document.querySelector('#scissors-button');

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
/*Only run if player move is rock, paper or scissors. Play round (player, computer) > if player and computer move are equal, alert “that’s a tie!”.

else if player move is rock, nest scenarios for each computer move and put alerts for the results, else if player move is paper, nest scenarios for each computer move and put alerts for the results, else if player move is scissors, nest scenarios for each computer move and put alerts for the results.
*/
function playRound(playerMove, computerMove) {
    if(playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
        if (playerMove === computerMove) {
        alert("That's a tie! Try again!");
        }
        else if (playerMove === "rock") {
            if (computerMove === "paper") {
                return "loss";
            }
            else if (computerMove === "scissors") {
                return "win";
            }
        }
        else if (playerMove === "paper") {
            if (computerMove === "scissors") {
                return "loss";
            }
            else if (computerMove === "rock") {
                return "win";
            }
        }
        else if (playerMove === "scissors") {
            if (computerMove === "rock") {
                return "loss";
            }
            else if (computerMove === "paper") {
                return "win";
            }
        }
    }
}