
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOn = true;
const player1 = 'X', player2 = 'O';
let playerTurn = player1, player1Points = 0, player2Points = 0;

function playerMove() {
    let gameCells = document.querySelectorAll('.cell');
    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;

            if (gameBoard[target.id] === '' &&
                playerTurn === player1 && gameOn) {
                gameBoard[target.id] = player1;
                target.textContent = player1;
                findWinner();
                playerTurn = player2;
                console.log(gameBoard);
            }

            if (gameBoard[target.id] === '' &&
                playerTurn === player2 && gameOn) {
                gameBoard[target.id] = player2;
                target.textContent = player2;
                findWinner();
                playerTurn = player1;
                console.log(gameBoard);
            }
        });

    });
    return { gameCells, player1, player2 };
}
playerMove();


function displayControl() {
    let player1Score = document.getElementById('p1-points');
    let player2Score = document.getElementById('p2-points');
    let statusDisplay = document.querySelector('.game-status');
   
    if(playerTurn === player1){
        statusDisplay.textContent = `Player ${player2}'s turn`;
    }else if(playerTurn === player2){
        statusDisplay.textContent = `Player ${player1}'s turn`;
    }

    return { statusDisplay, player1Score, player2Score };
}


function findWinner() {
    let { player1Score } = displayControl();
    let { player2Score } = displayControl();
    let { statusDisplay } = displayControl();

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
            statusDisplay.textContent = `Player ${player1} wins!`;
            player1Points++;
            player1Score.textContent = player1Points;
            gameOn = false;


            //if (player1Points === 3) {
                //statusDisplay.textContent = `Player ${player1} wins!`;
           // }
        } else if (playerTurn === player2 && gameOn) {
            statusDisplay.textContent = `Player ${player2} wins!`;
            player2Points++;
            player2Score.textContent = player2Points;
            gameOn = false;

            //if (player2Points === 3) {
                //statusDisplay.textContent = `Player ${player2} wins!`;
            //}
        }
    }

    if (gameBoard.includes('') === false && gameOn) {
        statusDisplay.textContent = `Game draw!`;
        gameOn = false;
    }
}

function clearGame() {
    let { statusDisplay } = displayControl();
    let { gameCells } = playerMove();

        gameOn = true;
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        playerTurn = player1;
        statusDisplay.textContent = `Player ${playerTurn}'s turn`;
        gameCells.forEach(cell => cell.textContent = '');
}



