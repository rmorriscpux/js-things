function minToFront(numArr){
    // Omitted: input type check.
    if (numArr.length <= 1){
        return;
    }

    var lowestIndex = 0;
    for (var i = 1; i < numArr.length; i++){
        if(numArr[i] < numArr[lowestIndex]){
            lowestIndex = i;
        }
    }
    var lowestVal = numArr[lowestIndex];
    for (var i = lowestIndex; i > 0; i--){
        numArr[i] = numArr[i-1];
    }
    numArr[0] = lowestVal;
    return;
}

let myArray = [4, 2, 1, 3, 5];
minToFront(myArray);
console.log(myArray);