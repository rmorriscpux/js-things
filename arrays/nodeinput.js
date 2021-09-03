const prompt = require("prompt-sync")();
var row = -1;
while(row < 1 || row > 3 || isNaN(row)){
    row = parseInt(prompt("Enter a row. "));
    console.log(typeof row);
}

console.log("Hello! " + row);