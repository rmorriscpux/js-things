// For use with node. prompt, prompt-sync should be installed.
const prompt = require("prompt-sync")();

function printBoard(boardArray){
    console.log("Tic Tac Toe");
    console.log(" " + boardArray[0][0] + " | " + boardArray[0][1] + " | " + boardArray[0][2] + " ");
    console.log("-----------");
    console.log(" " + boardArray[1][0] + " | " + boardArray[1][1] + " | " + boardArray[1][2] + " ");
    console.log("-----------");
    console.log(" " + boardArray[2][0] + " | " + boardArray[2][1] + " | " + boardArray[2][2] + " ");
}

let boardArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

let winConditions = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[2,0],[1,1],[0,2]]
];

// printBoard(boardArray);
// console.log(Math.floor(22/10));

var activePlayer = "X";
var winner = false;

for (var turn = 0; turn < 9; turn++){
    winner = false;
    printBoard(boardArray);
    console.log(activePlayer + "'s turn.");
    // Select a square.
    var row = -1, col = -1;
    while(row < 1 || row > 3 || isNaN(row)){
        row = parseInt(prompt("Enter a Row(1-3): "));
    }
    while(col < 1 || col > 3 || isNaN(col)){
        col = parseInt(prompt("Enter a Column(1-3): "));
    }
    
    // Add to board if blank, otherwise don't and continue.
    if (boardArray[row-1][col-1] == " "){
        boardArray[row-1][col-1] = activePlayer;
    }
    else{
        console.log("Space already taken!");
        turn--;
        continue;
    }

    // printBoard(boardArray);
    // Evaluate board.
    for (var line in winConditions){
        if (boardArray[winConditions[line][0][0]][winConditions[line][0][1]] == activePlayer &&
            boardArray[winConditions[line][1][0]][winConditions[line][1][1]] == activePlayer &&
            boardArray[winConditions[line][2][0]][winConditions[line][2][1]] == activePlayer){
            winner = true;
            break;
        }
    }

    // End if won.
    if (winner){
        printBoard(boardArray);
        console.log(activePlayer + " WINS!");
        break;
    }

    // Change player.
    activePlayer = (activePlayer == "X") ? "O" : "X";
}

if (!winner){
    printBoard(boardArray);
    console.log("DRAW!");
}