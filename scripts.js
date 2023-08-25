//gameboard state tracker
const gameBoard = ['','','','','','','','',''];

//track which player has made a move
let playerTurn = 'playerOne';
let playerMark = '';




//get, record and display player move
function displayControl(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.addEventListener('click', (e)=>{
            let { target } = e;

            //store player moves to compare with winning
            let indexes = [], i;
            for(i = 0; i < gameBoard.length; i++){
                if (gameBoard[i] === 'X')
                indexes.push(i);
            }
            console.log(indexes);//remove me !!

                if(playerTurn === 'playerOne' && target.textContent === ''){
                    playerTurn = 'playerTwo';
                    playerMark = 'X';

                    cell.textContent = playerMark;
                    

                    if(gameBoard[target.id] === ''){
                        gameBoard[target.id] = playerMark;
                        
                    }
                } else if(playerTurn === 'playerTwo' && target.textContent === ''){
                    playerTurn = 'playerOne';
                    playerMark = 'O';

                    cell.textContent = playerMark;
                    

                    if(gameBoard[target.id] === ''){
                        gameBoard[target.id] = playerMark;
                        console.log(gameBoard);//remove me !!!
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
gameOver();//function call



