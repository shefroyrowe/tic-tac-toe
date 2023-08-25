//gameboard state tracker
const gameBoard = ['','','','','','','','',''];

let userTurn = true;
let userMark = 'X';

function displayControl(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.addEventListener('click', (e)=>{
            let { target } = e;

            for(let i = 0; i < gameBoard.length; i++){
                if(userTurn === true && target.textContent === ''){
                    cell.textContent = userMark;
                    console.log(target.id);//REMOVE ME!!

                    if(gameBoard[target.id] === ''){
                        gameBoard[target.id] = userMark;
                        console.log(gameBoard);//REMOVE ME!!
                    }
                }
            }
        });
    });
}

displayControl();