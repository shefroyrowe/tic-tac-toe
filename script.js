const gameBoxes = document.querySelectorAll('.game-box');
const player1 = document.getElementById('player1name');
const player2 = document.getElementById('player2name');
const player1Score = document.getElementById('player1score');
const player2Score = document.getElementById('player2score');
const startGame = document.getElementById('start');
const reStartGame = document.getElementById('restart');
const display = document.getElementById('display');
//global to facilitate reset and restart logic
let player1_Score = 0;
let player2_Score = 0;
let gameActive = false;
let roundWon = false;
let gameWon = false;
let playerTurn = 'player1';

//track player moves
const Gameboard = (() => {
    //track player moves
    let gameboard = ['', '', '', '', '', '', '', '', ''];
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

    //store username after input field is cleared
    let playerOneName = [];
    let playerTwoName = [];
    playerOneName.push(player1.value);
    playerTwoName.push(player2.value);

    //listen for click on game board to asign player mark and check wins and draw
    gameBoxes.forEach(box => box.addEventListener("click", () => {
        if (!roundWon) {//stop gameboard input on click if round is won

            if (box.textContent === '' && playerTurn === 'player1') {
                box.textContent = 'X';
                gameboard[Number(box.id)] = 'X';
                playerTurn = 'player2';
                console.log(gameboard);
                display.textContent = `${playerTwoName[0] || 'O'}'s move`;
            }
            if (box.textContent === '' && playerTurn === 'player2') {
                box.textContent = 'O';
                gameboard[Number(box.id)] = 'O';
                playerTurn = 'player1'
                console.log(gameboard);
                display.textContent = `${playerOneName[0] || 'X'}'s move`;
            }
        }//end stop input if statement

        //find winner logic
        winningMoves.forEach(subArr => {
            if (!roundWon) {//stop score update on click if round is won
                //player X win logic
                if (subArr.every((value) => gameboard[value] === 'X')) {

                    display.textContent = `${playerOneName[0] || 'X'} Winns!`;
                    player1_Score++;
                    player1Score.textContent = player1_Score;
                    playerTurn = 'player1';
                    roundWon = true;
                }

                //player O win logic
                if (subArr.every((value) => gameboard[value] === 'O')) {

                    display.textContent = `${playerTwoName[0] || 'O'} Winns!`;
                    player2_Score++;
                    player2Score.textContent = player2_Score;
                    playerTurn = 'player2';
                    roundWon = true;
                }

                //final winners message
                if (player1_Score > 4 || player2_Score > 4) {
                    gameWon = true;
                    if (player1_Score > player2_Score) {
                        display.textContent =
                            `Congratulations! ${playerOneName[0] || 'X'}, the match is yours!`;
                    } else if (player2_Score > player1_Score) {
                        display.textContent =
                            `Congratulations! ${playerTwoName[0] || 'O'}, the match is yours!`;
                    }
                }

                //reset gameboard for next round
                if (roundWon) {
                    gameboard = ['', '', '', '', '', '', '', '', ''];
                }

                //change start button text if one round has been won and after game is won fully
                if (roundWon) {
                    startGame.innerHTML = 'RESTART';
                }
                if (gameWon) {
                    startGame.innerHTML = 'RESET';
                }
                //end change start button text if statements

            } //end stop score update if statement
        });//end find winner for each 

        //check if round is a draw
        if (!gameboard.includes('') && !roundWon) {

            display.textContent = 'It\'s a draw!';
            player1Score.textContent = player1_Score;
            player2Score.textContent = player2_Score;
            playerTurn = 'player1';
            roundWon = true;
            //reset gameboard for next round
            gameboard = ['', '', '', '', '', '', '', '', ''];
        }//end check round draw   

    }));//end play logic for each
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
    //keep playing until a player wins 5 rounds - [ restart logic ]
    if (gameActive && roundWon) {
        gameBoxes.forEach(box => box.innerHTML = '');
        display.textContent = '';
        playerTurn = 'player1';
        roundWon = false;
    }
    //reset after final game won 
    if (gameWon && player1_Score > 4 || gameWon && player2_Score > 4) {
        window.location.reload();
    }
});