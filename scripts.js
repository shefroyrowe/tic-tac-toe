
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let playerTurn = 'player1';
let currentPlayer = () => {
    if (playerTurn === 'player1') {
        return player1;
    } else if (playerTurn === 'player2') {
        return player2;
    }

    return playerTurn;
};
const player1 = 'X', player2 = 'O';




function playerMove() {

    let gameCells = document.querySelectorAll('.cell');
    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;


            if (gameBoard[target.id] === '' && playerTurn === 'player1') {
                playerTurn = 'player2';
                gameBoard[target.id] = player1;
                console.log(gameBoard);
            }

            if (gameBoard[target.id] === '' && playerTurn === 'player2') {
                playerTurn = 'player1';
                gameBoard[target.id] = player2;
                console.log(gameBoard);
            }
        });

    });
    return { gameCells, playerTurn, player1, currentPlayer };
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

    statusDisplay.textContent = `Player ${currentPlayer()}'s turn`;
    return { statusDisplay };
}
displayControl();


function findWinner() {
    let { gameCells } = playerMove();
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

    let board = gameBoard;
    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;

            for(let i = 0; i <= 7; i++){
                let winOps = winOptions[i];
                let winOpsA = winOps[0];
                let winOpsB = winOps[1];
                let winOpsC = winOps[2];
                
                if (target.textContent === player1 && target.id === winOpsA ||
                    target.textContent === player1 && target.id === winOpsB ||
                    target.textContent === player1 && target.id === winOpsC) {
                    console.log(`player ${player1} made a move @ ${target.id}`);
            
                }
            }
        });
    });
   
    
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



