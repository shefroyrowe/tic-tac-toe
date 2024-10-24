const player1name = document.getElementById('player1name');
const player2name = document.getElementById('player2name');

//track player moves
const GameoBard = () => {
    const winningMoves = ['012', '345', '678', '036', '147', '258', '048'];
    const gameboard = [];
}


//logic to control game flow
const PlayGame = (() => {
    const gameBoxes = document.querySelectorAll('.game-box');
    const player1 = player1name.value;
    const player2 = player2name.value;
    let player1Score = 0;
    let player2Score = 0;
    let playerTurn = '';
    
    //listen for click on game board
    gameBoxes.forEach(box => box.addEventListener("click", () => {
        if (!box.textContent === '' && playerTurn === 'player1') {
            box.textContent = 'X';
        }
        if (!box.textContent === '' && playerTurn === 'player2') {
            box.textContent = 'O';
        }
    }));

})(); //end PlayGame IIFE



/*
    on start game button click clear input fields and show gamegrid/board 

    Clean up the interface to allow players to put in their names, 
    include a button to start/restart the game and add a display 
    element that shows the results upon game end!
*/