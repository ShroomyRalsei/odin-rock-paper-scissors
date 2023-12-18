function startGame() {
    //variable player input is equal to the inputted value in prompt with text “Choose your move”//
    const playerInput = prompt("Choose your move");

    //Set player selection to player input in lower case//
    const playerSelection = playerInput.toLowerCase();
    //Computer selection is the result of the computer choice//
    const computerSelection = getComputerChoice();
    //Nest play round with player and comp move args, executing it and receiving its result, and then returning it//
    return playRound(playerSelection, computerSelection);
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
        //nest additional startGame function and then return the result of the extra game//
        return startGame();
        }
        else if (playerMove === "rock") {
            if (computerMove === "paper") {
                alert("You lose!");
                return "loss";
            }
            else if (computerMove === "scissors") {
                alert("You win!");
                return "win";
            }
        }
        else if (playerMove === "paper") {
            if (computerMove === "scissors") {
                alert("You lose!");
                return "loss";
            }
            else if (computerMove === "rock") {
                alert("You win!");
                return "win";
            }
        }
        else if (playerMove === "scissors") {
            if (computerMove === "rock") {
                alert("You lose!");
                return "loss";
            }
            else if (computerMove === "paper") {
                alert("You win!");
                return "win";
            }
        }
    }
}