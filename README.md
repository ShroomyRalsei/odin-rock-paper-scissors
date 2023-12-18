# odin-rock-paper-scissors
Welcome! This is the first JavaScript project on The Odin Project's curriculum, which is basically rock paper scissors but on a page.

This webpage gives you three buttons to press: Rock, paper or scissors, and depending on which one you pick, the computer will make its choice randomly and then the winner will be determined, with the result being displayed and the score being updated accordingly.

Inside the code, the first 2 variables (playerScore and computerScore) start out as 0.

Then there's 4 variables associated to HTML element nodes in the index file (the 1st one is associated to the result and score container div, and the other 3 are associated to the buttons).

Followed by those 4 variables are event listeners for each button, which will execute the playRound function, passing in the player's choice and also the computer's choice, and finally displaying the result.

Then there's the getComputerChoice function, which chooses a random number, and based on the result, it'll set the computer's choice.

The playRound function takes both the player and computer's choices and compares them, then returning a result based on who won or if it was a tie.

The displayResult function sets sets two constant variables that create paragraph elements (one for the result of the game and the other shows the score). Then, it checks if the result container div for the result and score is empty, and if not, it empties the container before continuing. Then, depending on the result of the game, it'll say you won and increase your score, or say the computer won and increase the comp's score, or it'll say you tied and give neither a point. Finally, it sets the text for the score count and nests the score and result inside the container div.