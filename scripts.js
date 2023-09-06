//store user moves and track index on click
let gameBoard = ['', '', '', '', '', '', '', '', ''];

//tells game when to break operations
let gameOn = true;

//helper variables to track each player through the game
const player1 = 'X', player2 = 'O';
let playerTurn = player1, player1Points = 0, player2Points = 0;

//function to decide who moved and append symbol to correct 
//gameboard index and gameboard cell display
function playerMove() {
    let gameCells = document.querySelectorAll('.cell');
    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;
            
            //if gameboard index is empty assign user symbol
            if (gameBoard[target.id] === '' &&
                playerTurn === player1 && gameOn) {
                gameBoard[target.id] = player1;
                target.textContent = player1;

                findWinner();//search for a win after every move
                playerTurn = player2;
            }

            if (gameBoard[target.id] === '' &&
                playerTurn === player2 && gameOn) {
                gameBoard[target.id] = player2;
                target.textContent = player2;

                findWinner();//search for a win after every move
                playerTurn = player1;
            }
        });

    });
    return { gameCells, player1, player2 };
}
playerMove();

//function to store elemets needed for announcement displays
function displayControl() {
    let player1Score = document.getElementById('p1-points');
    let player2Score = document.getElementById('p2-points');
    let statusDisplay = document.querySelector('.game-status');
   
    //tell user who's move it is next
    if(playerTurn === player1){
        statusDisplay.textContent = `Player [${player2}'s] turn`;
    }else if(playerTurn === player2){
        statusDisplay.textContent = `Player [${player1}'s] turn`;
    }

    return { statusDisplay, player1Score, player2Score };
}

//function to locate wins and draws
function findWinner() {
    let { player1Score } = displayControl();
    let { player2Score } = displayControl();
    let { statusDisplay } = displayControl();

    //win conditions block
    if (gameBoard[0].includes(playerTurn) &&
        gameBoard[1].includes(playerTurn) &&
        gameBoard[2].includes(playerTurn) ||
        gameBoard[3].includes(playerTurn) &&
        gameBoard[4].includes(playerTurn) &&
        gameBoard[5].includes(playerTurn) ||
        gameBoard[6].includes(playerTurn) &&
        gameBoard[7].includes(playerTurn) &&
        gameBoard[8].includes(playerTurn) ||
        gameBoard[0].includes(playerTurn) &&
        gameBoard[3].includes(playerTurn) &&
        gameBoard[6].includes(playerTurn) ||
        gameBoard[1].includes(playerTurn) &&
        gameBoard[4].includes(playerTurn) &&
        gameBoard[7].includes(playerTurn) ||
        gameBoard[2].includes(playerTurn) &&
        gameBoard[5].includes(playerTurn) &&
        gameBoard[8].includes(playerTurn) ||
        gameBoard[0].includes(playerTurn) &&
        gameBoard[4].includes(playerTurn) &&
        gameBoard[8].includes(playerTurn) ||
        gameBoard[2].includes(playerTurn) &&
        gameBoard[4].includes(playerTurn) &&
        gameBoard[6].includes(playerTurn)) {

        if (playerTurn === player1 && gameOn) {
            statusDisplay.textContent = `Player [${player1}] wins!`;
            player1Points++;
            player1Score.textContent = player1Points;
            gameOn = false;
        } 
        if (player1Points === 3) {
            statusDisplay.textContent = `Player [${player1}] TAKES THE GAME!!`;
            gameOn = false;
        }
        
        else if (playerTurn === player2 && gameOn) {
            statusDisplay.textContent = `Player [${player2}] wins!`;
            player2Points++;
            player2Score.textContent = player2Points;
            gameOn = false;
        }

        if (player2Points === 3) {
            statusDisplay.textContent = `Player [${player2}] TAKES THE GAME!!`;
            gameOn = false;
        }
    }

    if (gameBoard.includes('') === false && gameOn) {
        statusDisplay.textContent = `Game draw!`;
        gameOn = false;
    }
}

//reset and clear game on click of 'clear' button
function clearGame() {
    let { player1Score } = displayControl();
    let { player2Score } = displayControl();
    let { statusDisplay } = displayControl();
    let { gameCells } = playerMove();

        gameOn = true;
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        playerTurn = player1;
        statusDisplay.textContent = `Player [${playerTurn}'s] turn`;
        gameCells.forEach(cell => cell.textContent = '');

        //if any player reaches three wins, reset scores
        if(player1Points === 3 || player2Points === 3){
            player1Score.textContent = '';
            player2Score.textContent = '';
        }
}



