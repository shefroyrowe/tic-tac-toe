const gameBoxes = document.querySelectorAll('.game-box');
const player1 = document.getElementById('player1name');
const player2 = document.getElementById('player2name');
const player1Score = document.getElementById('player1score');
const player2Score = document.getElementById('player2score');
const startGame = document.getElementById('start');
const reStartGame = document.getElementById('restart');
const display = document.getElementById('display');
//track index of each payers moves on gameboard
let mark_X = [];
let mark_O = [];
let player1_Score = 0;
let player2_Score = 0;
let gameActive = false;
let roundWon = false;
let gameWon = false;
let playerTurn = 'player1';

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
        [0, 4, 8],
        [2, 4, 6]
    ];

    return { gameboard, winningMoves };
})();//=> iife

//logic to control game flow
const PlayGame = () => {
    let { gameboard, winningMoves } = Gameboard;

    //store username while input field is cleared
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
                }
                if (subArr.every(value => mark_O.includes(value))) {
                    display.textContent = `${playerTwoName[0] || 'O'} Winns!`;
                    player2_Score++;
                    player2Score.textContent = player2_Score;
                    playerTurn = 'player2';
                    roundWon = true;
                }

                //check if all player moves add up to all 9 gameboard indexes to call a draw
                if ((mark_X.length + mark_O.length) === 9) {
                    display.textContent = 'It\'s a draw!';
                    player1Score.textContent = player1_Score;
                    player2Score.textContent = player2_Score;
                    playerTurn = 'player1';
                    roundWon = true;
                }

                //final winners message
                if (player1_Score > 4 || player2_Score > 4) {
                    gameWon = true;
                    if (player1_Score > player2_Score) {
                        display.textContent = `Congratulations! ${playerOneName[0] || 'X'}, the match is yours!`;
                    } else if (player2_Score > player1_Score) {
                        display.textContent = `Congratulations! ${playerTwoName[0] || 'O'}, the match is yours!`;
                    }
                }

                //change start button text if one round has been won
                if (roundWon) {
                    startGame.innerHTML = 'RESTART';
                }
                if (gameWon) {
                    startGame.innerHTML = 'RESET';
                }

            } //end stop score update if statement
        });//end find winner for each
    }));//play logic for each
};//end playgame function


//start - restart event listener
startGame.addEventListener("click", () => {
    //initial start logic
    if (!gameActive && !roundWon) {
        PlayGame();
        player1.value = '';
        player2.value = '';
        player1.disabled = true;
        player2.disabled = true;
        gameActive = true;
        gameWon = false;
        display.textContent = 'GONG YI TANPAI !! (Play 5 rounds)';
    }
    //keep playing until 5 rounds - restart logic
    if (gameActive && roundWon) {
        let { gameboard } = Gameboard;
        gameBoxes.forEach(box => box.innerHTML = '');
        roundWon = false;
        mark_X = [];
        mark_O = [];
        gameboard = [];
        display.textContent = '';
        playerTurn = 'player1';
    }
    //reset after final game won logic
    if (gameWon && player1_Score > 4 || gameWon && player2_Score > 4) {
        window.location.reload();
    }
});