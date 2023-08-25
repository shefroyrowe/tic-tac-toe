//gameboard state tracker
const gameBoard = ['','','','','','','','',''];

let userTurn = 'playerOne';

const playerOneMark = 'X';
const playerTwoMark = 'O';

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