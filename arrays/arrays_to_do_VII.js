function flatten(arr){
    for (var i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            var toSplit = arr[i];
            arr.splice(i, 1)
            for (var j = 0; j < toSplit.length; j++){
                arr.splice(i+j, 0, toSplit[j]);
            }
        }
    }
}

console.log("=== 1 ===");
var testArray1 = [1, [2, [3, [4, 5]], 6], [], 7];
flatten(testArray1);
console.log(testArray1);

function removeDupes1(arr){
    let newArray = [];
    for (var i in arr){
        if (!newArray.includes(arr[i])){
            newArray[newArray.length] = arr[i];
        }
    }
    return newArray;
}

function removeDupes3(arr){
    for (var i = 0; i < arr.length; i++){
        for ( var j = i+1; j < arr.length; ){
            if(arr[i] == arr[j]){
                arr.splice(j, 1);
            }
            else{
                j++;
            }
        }
    }
}

function removeDupes4(arr){
    valueList = {};
    for(var i in arr){
        if (valueList.hasOwnProperty(arr[i])){
            arr.splice(i, 1);
        }
        else{
            valueList[arr[i]] = true;
        }
    }
}

console.log("=== 2 ===");
console.log(removeDupes1([1,2,1,3,4,2]));
let testArray3 = [1,2,1,3,4,2];
removeDupes3(testArray3);
console.log(testArray3);
let testArray3SingLoop = [1,2,1,3,4,2];
removeDupes4(testArray3SingLoop);
console.log(testArray3SingLoop);

function getMode1(arr){
    valueList = {};
    for(var i in arr){
        if (valueList.hasOwnProperty(arr[i]))
        {
            valueList[arr[i]]++;
        }
        else
        {
            valueList[arr[i]] = 1;
        }
    }
    var modeVal, modeAmt = 0;
    for (val in valueList){
        if (valueList[val] > modeAmt){
            modeAmt = valueList[val];
            modeVal = val;
        }
    }
    return modeVal;
}

function getMode2(arr){
    var modeVal, modeAmt = 0;
    for(var i = 0; i < arr.length; i++){
        var iCount = 1;
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                iCount++;
            }
        }
        if (iCount > modeAmt){
            modeAmt = iCount;
            modeVal = arr[i];
        }
    }
    return modeVal;
}

console.log("=== 3 ===");
console.log(getMode1([4,3,2,1,3,2,1,2,1,1]));
console.log(getMode2([4,3,2,1,3,2,1,2,1,1]));

function arrBufferCopy1(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals){
    for (var i = 0; i < numVals; i++){
        if (sourceStartIdx + i >= sourceArr.length || destStartIdx + i >= destArr.length){
            break;
        }
        destArr[destStartIdx + i] = sourceArr[sourceStartIdx + i];
    }
    return;
}

function arrBufferCopy2(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals){
    for (var i = 0; i < numVals; i++){
        destArr[(destStartIdx + i) % destArr.length] = sourceArr[(sourceStartIdx + i) % sourceArr.length];
    }
    return;
}

function arrBufferCopy3(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals){
    var maxWrite = destArr.length - destStartIdx < numVals ? destArr.length - destStartIdx : numVals;
    for (var i = 0; i < maxWrite; i++){
        destArr[(destStartIdx + i) % destArr.length] = sourceArr[(sourceStartIdx + i) % sourceArr.length];
    }
    return;
}

function arrBufferCopy4(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals){
    // Get beginning and end for both.
    var sourceEndIdx = sourceArr.length < sourceStartIdx + numVals ? sourceArr.length : sourceStartIdx + numVals;
    var destEndIdx = destStartIdx + sourceEndIdx - sourceStartIdx;
    // Lenthen destArr if necessary.
    if (destEndIdx > destArr.length){
        destArr.length = destEndIdx;
    }
    // Now overwrite. startDiff value determines the direction.
    let startDiff = destStartIdx - sourceStartIdx;
    if (startDiff > 0){ // destination array starts after source array. Go right-to-left.
        for (var i = sourceEndIdx-1; i >= sourceStartIdx; i--){
            destArr[i + diff] = sourceArr[i];
        }
    }
    else{ // destination array starts before source array. Go left-to-right.
        for (var i = sourceStartIdx; i < sourceEndIdx; i++){
            destArr[i + diff] = sourceArr[i];
        }
    }
    return;
}