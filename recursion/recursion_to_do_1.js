function rSigma(value){
    // Negative value check.
    if(value <= 0){
        return 0;
    }

    var intVal = Math.ceil(value);
    return intVal + rSigma(intVal-1);
}

console.log("=== 1 ===");
console.log(rSigma(5));
console.log(rSigma(2.5));
console.log(rSigma(-1));

function rFact(value){
    var intVal = Math.floor(value);

    // Negative value check.
    if(intVal <= 0){
        return 0;
    }
    else if(intVal == 1){
        return 1;
    }
    else{
        return intVal * rFact(intVal-1);
    }
}

console.log("=== 2 ===");
console.log(rFact(5));
console.log(rFact(3.5));
console.log(rFact(-1));

function floodFill(canvas2D, startXY, newColor){
    let xCoord=startXY[0], yCoord=startXY[1];
    // Get the original color. This is needed for the flood fill.
    let origColor = canvas2D[yCoord][xCoord];
    // Change the pixel to the new color.
    canvas2D[yCoord][xCoord] = newColor;
    // Now change the adjacent pixels if they were the same original color.
    // Up
    if (yCoord > 0){
        if (canvas2D[yCoord-1][xCoord] == origColor){
            floodFill(canvas2D, [xCoord, yCoord-1], newColor);
        }
    }
    // Left
    if (xCoord > 0){
        if (canvas2D[yCoord][xCoord-1] == origColor){
            floodFill(canvas2D, [xCoord-1, yCoord], newColor);
        }
    }
    // Down
    if (yCoord < canvas2D.length-1){
        if (canvas2D[yCoord+1][xCoord] == origColor){
            floodFill(canvas2D, [xCoord, yCoord+1], newColor);
        }
    }
    // Right
    if (xCoord < canvas2D[yCoord].length-1){
        if (canvas2D[yCoord][xCoord+1] == origColor){
            floodFill(canvas2D, [xCoord+1, yCoord], newColor);
        }
    }
    return;
}

console.log("=== 3 ===");
let myCanvas = [[3, 2, 3, 4, 3],
                [2, 3, 3, 4, 0],
                [7, 3, 3, 5, 3],
                [6, 5, 3, 4, 1],
                [1, 2, 3, 3, 3]];

for (var row in myCanvas){
    console.log(myCanvas[row]);
}

floodFill(myCanvas, [2,2], 1);

console.log("");
for (var row in myCanvas){
    console.log(myCanvas[row]);
}