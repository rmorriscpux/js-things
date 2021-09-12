function rSquares(value){
    if (value < 1){
        return;
    }

    if (value % 2 == 1){
        rSquares(value - 2);
        console.log(value * value);
        return;
    }
    else{
        console.log(value * value);
        rSquares(value - 2);
        return;
    }
}

function risingSquares(value){
    // Make integer.
    var intValue = parseInt(value);

    if(intValue % 2 == 1){
        rSquares(intValue);
        rSquares(intValue - 1);
    }
    else{
        rSquares(intValue - 1);
        rSquares(intValue);
    }
    return
}

console.log("=== 1 ===");
risingSquares(8);

function binStrExpand(binStr){
    let solutions = [];
    rBinStrExpand(binStr, "", solutions);
    return solutions;
}

function rBinStrExpand(binStr, subStr, solutions){
    if(subStr.length == binStr.length){
        solutions.push(subStr);
        return;
    }

    // Current index is 0 or ?.
    if(binStr[subStr.length] == "0" || binStr[subStr.length] == "?"){
        rBinStrExpand(binStr, subStr + "0", solutions);
    }
    // Current index is 1 or ?.
    if(binStr[subStr.length] == "1" || binStr[subStr.length] == "?"){
        rBinStrExpand(binStr, subStr + "1", solutions);
    }
}

console.log("=== 2 ===");
console.log(binStrExpand("0?1?"));

function stringAnagrams(inputString){
    let solutions = [];
    rStringAnagrams(inputString, "", solutions);
    return solutions;
}

function rStringAnagrams(inStr, buildStr, solutions){
    if (inStr.length == 0){
        solutions.push(buildStr);
        return;
    }

    for (var i = 0; i < inStr.length; i++){
        // Get all the remaining characters not including the current character.
        var subStr = inStr.slice(0,i) + inStr.slice(i+1);
        rStringAnagrams(subStr, buildStr + inStr.charAt(i), solutions);
    }

    return;
}

console.log("=== 3 ===");
console.log(stringAnagrams("lim"));

function climbingStairs(numSteps){
    numSteps = parseInt(numSteps);
    let solutions = [];
    rClimbingStairs(numSteps, [], solutions);
    return solutions;
}

function rClimbingStairs(numSteps, stepArray, solutions){
    if(numSteps == 0){
        solutions.push(stepArray);
        return;
    }

    if (numSteps >= 2){
        rClimbingStairs(numSteps - 2, stepArray.concat([2]), solutions);
    }

    rClimbingStairs(numSteps - 1, stepArray.concat([1]), solutions);

    return;
}

// ClimbingStairs2(): End with a right step.
function climbingStairs2(numSteps){
    numSteps = parseInt(numSteps);
    let solutions = [];
    rClimbingStairs2(numSteps, [], solutions);
    return solutions;
}

function rClimbingStairs2(numSteps, stepArray, solutions){
    if(numSteps == 0){
        if (stepArray.length % 2 == 0){
            solutions.push(stepArray);
        }
        return;
    }

    if (numSteps >= 2){
        rClimbingStairs2(numSteps - 2, stepArray.concat([2]), solutions);
    }

    rClimbingStairs2(numSteps - 1, stepArray.concat([1]), solutions);

    return;
}

// climbingStairs3(): Number of steps on left and right feet are equal.
function climbingStairs3(numSteps){
    numSteps = parseInt(numSteps);
    let solutions = [];
    rClimbingStairs3(numSteps, [], 0, 0, true, solutions);
    return solutions;
}

function rClimbingStairs3(numSteps, stepArray, left, right, leftStep, solutions){
    if(numSteps == 0){
        if (left == right) // Same number of steps take on left and right feet.
            solutions.push(stepArray);
        return;
    }

    if(leftStep){
        if (numSteps >= 2){
            rClimbingStairs3(numSteps - 2, stepArray.concat([2]), left + 2, right, false, solutions);
        }

        rClimbingStairs3(numSteps - 1, stepArray.concat([1]), left + 1, right, false, solutions);
    }
    else{
        if (numSteps >= 2){
            rClimbingStairs3(numSteps - 2, stepArray.concat([2]), left, right + 2, true, solutions);
        }

        rClimbingStairs3(numSteps - 1, stepArray.concat([1]), left, right + 1, true, solutions);
    }

    return;
}

console.log("=== 4 ===");
console.log(climbingStairs(4));
console.log(climbingStairs2(4));
console.log(climbingStairs3(4));