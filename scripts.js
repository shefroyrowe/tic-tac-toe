//gameboard state tracker
const gameBoard = ['','','','','','','','',''];

//track which player has made a move
let userTurn = 'playerOne';

//players
const playerOneMark = 'X';
const playerTwoMark = 'O';

//get, record and display player move
function displayControl(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.addEventListener('click', (e)=>{
            let { target } = e;

                if(userTurn === 'playerOne' && target.textContent === ''){
                    userTurn = 'playerTwo';

                    cell.textContent = playerOneMark;
                    console.log(target.id);//REMOVE ME!!

                    if(gameBoard[target.id] === ''){
                        gameBoard[target.id] = playerOneMark;
                        console.log(gameBoard);//REMOVE ME!!
                    }
                } else if(userTurn === 'playerTwo' && target.textContent === ''){
                    userTurn = 'playerOne';

                    cell.textContent = playerTwoMark;
                    console.log(target.id);//REMOVE ME!!

                    if(gameBoard[target.id] === ''){
                        gameBoard[target.id] = playerTwoMark;
                        console.log(gameBoard);//REMOVE ME!!
                    }
                }
        });
    });
}
displayControl();//function call

//game over condition
function gameOver(){
    const winningMoves = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
}
gameOver();

