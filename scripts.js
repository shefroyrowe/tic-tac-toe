
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOn = true;

const player1 = 'X', player2 = 'O';
let playerTurn = 'player1', player1Points = 0, player2Points = 0;

const currentPlayer = () => {
    let { statusDisplay } = displayControl();

    if (playerTurn === 'player1') {
        statusDisplay.textContent = `Player X's turn`;
        return player1;
    }

    if (playerTurn === 'player2') {
        statusDisplay.textContent = `Player O's turn`;
        return player2;
    }

    return playerTurn;
};





function playerMove() {

    let gameCells = document.querySelectorAll('.cell');
    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;


            if (gameBoard[target.id] === '' && playerTurn === 'player1') {
                gameBoard[target.id] = player1;
                findWinner();
                playerTurn = 'player2';
            }

            if (gameBoard[target.id] === '' && playerTurn === 'player2') {
                gameBoard[target.id] = player2;
                findWinner();
                playerTurn = 'player1';
            }
        });

    });
    return { gameCells, playerTurn, player1, player2 };
}
playerMove();


function displayControl() {
    let player1Score = document.getElementById('p1-points');
    let player2Score = document.getElementById('p2-points');
    let statusDisplay = document.querySelector('.game-status');
    let { gameCells } = playerMove();

    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;

            if (gameBoard[target.id] !== '') {
                target.textContent = gameBoard[target.id];
            }
        });
    });

    return { statusDisplay, player1Score, player2Score };
}
displayControl();


function findWinner() {
    let { player1Score } = displayControl();
    let { player2Score } = displayControl();
    let { statusDisplay } = displayControl();

    if (gameBoard[0].includes(currentPlayer()) &&
        gameBoard[1].includes(currentPlayer()) &&
        gameBoard[2].includes(currentPlayer()) ||
        gameBoard[3].includes(currentPlayer()) &&
        gameBoard[4].includes(currentPlayer()) &&
        gameBoard[5].includes(currentPlayer()) ||
        gameBoard[6].includes(currentPlayer()) &&
        gameBoard[7].includes(currentPlayer()) &&
        gameBoard[8].includes(currentPlayer()) ||
        gameBoard[0].includes(currentPlayer()) &&
        gameBoard[3].includes(currentPlayer()) &&
        gameBoard[6].includes(currentPlayer()) ||
        gameBoard[1].includes(currentPlayer()) &&
        gameBoard[4].includes(currentPlayer()) &&
        gameBoard[7].includes(currentPlayer()) ||
        gameBoard[2].includes(currentPlayer()) &&
        gameBoard[5].includes(currentPlayer()) &&
        gameBoard[8].includes(currentPlayer()) ||
        gameBoard[0].includes(currentPlayer()) &&
        gameBoard[4].includes(currentPlayer()) &&
        gameBoard[8].includes(currentPlayer()) ||
        gameBoard[2].includes(currentPlayer()) &&
        gameBoard[4].includes(currentPlayer()) &&
        gameBoard[6].includes(currentPlayer())) {

            if(currentPlayer() === player1 && gameOn === true){
                player1Points++;

                player1Score.textContent = player1Points;
                statusDisplay.textContent = `Player ${player1} wins!`;
                gameOn = false;
            }else if(currentPlayer() === player2 && gameOn === true){
                player2Points++;
        
                player2Score.textContent = player2Points;
                statusDisplay.textContent = `Player ${player2} wins!`;
                gameOn = false;
            }
    }
    if (gameBoard.includes('') === false && gameOn === true) {
        statusDisplay.textContent = `Game draw!`;
        gameOn = false;
    }
  

}




function playGame() {
    let { statusDisplay } = displayControl();
    let { gameCells } = playerMove();

    gameOn = true;
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    playerTurn = 'player1';
    statusDisplay.textContent = `Player ${currentPlayer()}'s turn`;
    gameCells.forEach(cell => cell.textContent = '');
}



