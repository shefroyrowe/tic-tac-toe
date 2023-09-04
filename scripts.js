
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const player1 = 'X', player2 = 'O';

let playerTurn = 'player1';
let currentPlayer = () => {
    let { statusDisplay } = displayControl();
    if (playerTurn === 'player1') {
        statusDisplay.textContent = `Player X's turn`;
        return player1;
    } else if (playerTurn === 'player2') {
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
                playerTurn = 'player2';
                gameBoard[target.id] = player1;
                currentPlayer();
                findWinner();
                console.log(gameBoard);
            }

            if (gameBoard[target.id] === '' && playerTurn === 'player2') {
                playerTurn = 'player1';
                gameBoard[target.id] = player2;
                currentPlayer();
                findWinner();
                console.log(gameBoard);
            }
        });

    });
    return { gameCells, playerTurn, player1, player2 };
}
playerMove();


function displayControl() {

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

    return { statusDisplay };
}
displayControl();


function findWinner() {
    const winOptions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < 3; i++){
        if(gameBoard[0].includes(player1) && 
           gameBoard[1].includes(player1) &&
           gameBoard[2].includes(player1)){
           console.log(`win move`);
  }
    }
}
findWinner();



function playGame() {
    let { statusDisplay } = displayControl();
    let { gameCells } = playerMove();

    gameActive = true;
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    playerTurn = 'player1';
    statusDisplay.textContent = `Player ${currentPlayer()}'s turn`;
    gameCells.forEach(cell => cell.textContent = '');
}



