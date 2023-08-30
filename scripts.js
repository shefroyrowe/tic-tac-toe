
const gameBoard = ['', '', '', '', '', '', '', '', ''];


function playerMove() {

    let playerTurn = 'player1';
    let player1Moves = [], player2Moves = [];
    const player1 = 'X', player2 = 'O';



    let gameCells = document.querySelectorAll('.cell');
    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;

            if (gameBoard[target.id] === '' && playerTurn === 'player1') {

                playerTurn = 'player2';
                gameBoard[target.id] = player1;
                player1Moves.push(target.id);
                console.log(gameBoard);
                console.log(player1Moves);
            }

            if (gameBoard[target.id] === '' && playerTurn === 'player2') {

                playerTurn = 'player1';
                gameBoard[target.id] = player2;
                player2Moves.push(target.id);
                console.log(gameBoard);
                console.log(player2Moves);
            }



        });
    });
    return { gameCells };
}
playerMove();


function displayControl() {

    let { gameCells } = playerMove();

    gameCells.forEach(function (cell) {
        cell.addEventListener('click', (e) => {
            let { target } = e;

            if (gameBoard[target.id] !== '') {
                target.textContent = gameBoard[target.id];
            }
        });
    });
}
displayControl();


function findWinner() {
    const winOptions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [2, 5, 8]
    ]

}

findWinner();