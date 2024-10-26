const gameBoxes = document.querySelectorAll('.game-box');
const player1 = document.getElementById('player1name');
const player2 = document.getElementById('player2name');
const player1Score = document.getElementById('player1score');
const player2Score = document.getElementById('player2score');
const startGame = document.getElementById('start');
const reStartGame = document.getElementById('restart');
const display = document.getElementById('display');
let mark_X = [];
let mark_O = [];
let player1_Score = 0;
let player2_Score = 0;
let gameActive = false;
let gameWon = false;
let roundWon = false;

//track player moves
const Gameboard = (() => {
    //track player moves
    let gameboard = [];
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
const PlayGame = () => {
    let { gameboard, winningMoves } = Gameboard;
    let playerTurn = 'player1';

    //helper variables
    let playerOneName = [];
    let playerTwoName = [];

    playerOneName.push(player1.value);
    playerTwoName.push(player2.value);

    //listen for click on game board to asign player mark and check wins and draw
    gameBoxes.forEach(box => box.addEventListener("click", () => {
        //stop input if round is won or drawn
        if (!roundWon) {

            if (box.textContent === '' && playerTurn === 'player1') {

                box.textContent = 'X';
                gameboard.push('X');
                mark_X.push(Number(box.id));
                playerTurn = 'player2';
                display.textContent = `${playerTwoName[0] || 'O'}'s move`;
            }
            if (box.textContent === '' && playerTurn === 'player2') {

                box.textContent = 'O';
                gameboard.push('O');
                mark_O.push(Number(box.id));
                playerTurn = 'player1'
                display.textContent = `${playerOneName[0] || 'X'}'s move`;
            }
        }//end stop input if statement


        //find winner/ game draw logic
        winningMoves.forEach(subArr => {
            //stop score update if round is won or drawn
            if (!roundWon) {

                if (subArr.every(value => mark_X.includes(value))) {
                    display.textContent = `${playerOneName[0] || 'X'} Winns!`;
                    player1_Score++;
                    player1Score.textContent = player1_Score;
                    playerTurn = 'player1';
                    roundWon = true;
                    //gameActive = false;
                }
                if (subArr.every(value => mark_O.includes(value))) {
                    display.textContent = `${playerTwoName[0] || 'O'} Winns!`;
                    player2_Score++;
                    player2Score.textContent = player2_Score;
                    playerTurn = 'player2';
                    roundWon = true;
                    //gameActive = false;
                }
                //check if all player moves add up to all 9 gameboard indexes to call a draw
                if ((mark_X.length + mark_O.length) === 9) {
                    display.textContent = 'It\'s a draw!';
                    player1Score.textContent = player1_Score;
                    player2Score.textContent = player2_Score;
                    playerTurn = 'player1';
                    roundWon = true;
                    //gameActive = false;
                }

                if (roundWon) {
                    startGame.innerHTML = 'RESTART';
                } else if (gameWon) {
                    startGame.innerHTML = 'START';
                }

            } //end stop score update if statement

        });//end find winner for each

    }));//play logic for each
   

};//end playgame function


startGame.addEventListener("click", () => {

    if (!gameActive && !roundWon) {
        PlayGame();
        player1.value = '';
        player2.value = '';
        gameActive = true;
    }

    if (gameActive && roundWon) {
        let { gameboard } = Gameboard;

        gameBoxes.forEach(box => box.innerHTML = '');
        roundWon = false;
        playerOneName = [];
        playerTwoName = [];
        mark_X = [];
        mark_O = [];
        gameboard = [];
    }
});

//reStartGame.addEventListener("click", () => {});


/*
use a loop to play game for five rounds
 show gamegrid/board 

    include a button to start/[ restart ] the game 
    use modal for start
*/