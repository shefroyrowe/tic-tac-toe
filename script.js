//track player moves
const GameoBard = () => {
    const winningMoves = ['012', '345', '678', '036', '147', '258', '048'];
    const gameboard = [];
}

//human vs human logic
const Players = () => {
    const player1 = (name, mark) => {
        let playerName = name;
        let playerMark = mark;
        return { playerName, playerMark };
    }

    const player2 = (name, mark) => {
        let playerName = name;
        let playerMark = mark;
        return { playerName, playerMark };
    }
}

//get random computer guess
const BotPlayerGuess = () => Math.floor(Math.random() * 9)


//logic to control game flow
const PlayGame = (() => {
    const gameBoxes = document.querySelectorAll('.game-box');
    
    //listen for click on game board
    gameBoxes.forEach(box => box.addEventListener("click", () => {
        if (box.textContent === '') {
            box.textContent = 'X';
        }
    }));

})();



/*
    Clean up the interface to allow players to put in their names, 
    include a button to start/restart the game and add a display 
    element that shows the results upon game end!
*/