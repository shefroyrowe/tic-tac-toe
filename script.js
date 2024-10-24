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
    let player1Score = 0;
    let player2Score = 0;
    let playerTurn = 'player1';

    //listen for click on game board to asign player mark
    gameBoxes.forEach(box => box.addEventListener("click", () => {
        if (box.textContent === '' && playerTurn === 'player1') {
            box.textContent = 'X';
            gameboard.push('x');
            console.log(gameboard);
            playerTurn = 'player2';
            display.textContent = `${player2.value}'s move`;
        }
        if (box.textContent === '' && playerTurn === 'player2') {
            box.textContent = 'O';
            gameboard.push('O');
            console.log(gameboard);
            playerTurn = 'player1'
            display.textContent = `${player1.value}'s move`;
        }
    }));

    //find winner
})();//end playgame()



/*
    on start game button click clear input fields and show gamegrid/board 

    Clean up the interface to allow players to put in their names, 
    include a button to start/restart the game and add a display 
    element that shows the results upon game end!
*/