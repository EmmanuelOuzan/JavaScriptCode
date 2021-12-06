let board = [];

const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
]

let boardGame = document.getElementById('board')
boardGame.addEventListener('click', clickOnCell);
let currentPlayer = {
    name: "player 1",
    shape: "X",
    style: "css_x"
}

function clickOnCell(e) {
    // check witch cell pressed
    let index = Number(e.target.id.slice(4))
    // if exist
    board[index] = currentPlayer.shape;
    e.target.classList.add(currentPlayer.style)
    // save step
    console.log(board);
    let isWin = checkWin(index)
    if (isWin) {
        alert(currentPlayer.name + ' is the winner!!!')
        //winner(currentPlayer);
    }
    // turn
}

function checkWin(index) {
    // index = 1                       // c = [0,1,2] 
    let comb = combinations.filter(c => c.includes(index))
    // comb = [  [0,1,2] , [1, 4, 7] ]
    for (c of comb) {
        // c = [0,1,2]  // p = 0
        // if (board[c[0]] == currentPlayer.shape &&
        //     board[c[1]] == currentPlayer.shape &&
        //     board[c[2]] == currentPlayer.shape)

            if (c.every(p => board[p] == currentPlayer.shape)) {
                return true;
            }
    }
}