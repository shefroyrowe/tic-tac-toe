//NOT FINISHED!!!!!!!!

const gameBoard = ['', '', '', '', '', '', '', '', ''];


function playerMove() {
    let playerTurn = 'player1';
    const player1 = 'X';
    const player2 = 'O';

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
    return { gameCells };
}
playerMove();

function displayControl() {
    let gameCells = document.querySelectorAll('.cell');
    } 
displayControl();
