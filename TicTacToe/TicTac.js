// Creating the board
let board = [];

// Looking at the possible wins.
const combinations = [
    // rows
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    // columes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal line
    [2, 4, 6],
    [0, 4, 8],
]
// Creation of the players
let player1 = {
    name: 'first_player',
    shape: 'X',
    style: "css_x"
}
let player2 = {
    name: 'second_player',
    shape: 'O',
    style: "css_o"
}

// Targeting the board as an element and keeping it for quicker reference
let boardGame = document.getElementById('board');

// Creating a listener for the board. So when I click it , it will react.
boardGame.addEventListener('click', clickOnCell);

// an example player
let currentPlayer = {
    name: "player 1",
    shape: "X",
    style: "css_x"
}

function clickOnCell(e) {
    // check which cell pressed
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