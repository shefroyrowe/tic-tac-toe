const player1 = document.getElementById('player1name');
const player2 = document.getElementById('player2name');
const display = document.getElementById('display');

//track player moves
const Gameboard = (() => {
    //track player moves
    const gameboard = [];
    //winning possibilities for each player
    const winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8]
    ];

    return { gameboard, winningMoves };
})();


//logic to control game flow
const PlayGame = (() => {
    const { gameboard, winningMoves } = Gameboard;
    const gameBoxes = document.querySelectorAll('.game-box');
    let mark_X = [];
    let mark_O = [];
    let player1Score = 0;
    let player2Score = 0;
    let playerTurn = 'player1';
    let roundWon = false;

    //listen for click on game board to asign player mark
    gameBoxes.forEach(box => box.addEventListener("click", () => {
        if (box.textContent === '' && playerTurn === 'player1') {

            box.textContent = 'X';
            gameboard[Number(box.id)] = 'X';
            mark_X.push(Number(box.id));
            console.log(gameboard);
            console.log('x @', mark_X)

            playerTurn = 'player2';
            display.textContent = `${player2.value || 'Player2'}'s move`;
        }
        if (box.textContent === '' && playerTurn === 'player2') {
            box.textContent = 'O';
            gameboard[Number(box.id)] = 'O';
            mark_O.push(Number(box.id));
            console.log(gameboard);
            console.log('o @', mark_O)

            playerTurn = 'player1'
            display.textContent = `${player1.value || 'Player1'}'s move`;
        }

        //find winner/ game draw logic
        winningMoves.forEach(subArr => {
                if (subArr.every(value => mark_X.includes(value))) {
                    console.log('X winns!');
                }
                if (subArr.every(value => mark_O.includes(value))) {                   
                    console.log('O winns!');
                    
                }
                //check if all player moves add up to all 9 gameboard indexes to call a draw
                if ((mark_X.length + mark_O.length) === 9) {
                        console.log('It\'s a draw!');
                }
        });
    }));

})();//end playgame() iife



/*
    on start game button click clear input fields and show gamegrid/board 

    include a button to start/restart the game 
*/