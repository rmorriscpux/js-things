function rListLength(listNode){
    if(listNode.next == null){
        return 1;
    }
    else{
        return 1 + rListLength(listNode.next);
    }
}

function maxGrapes(arr){
    var max = 0, pivot = 0;
    // Get the absolute max.
    for (i in arr){
        if (arr[i] > max){
            max = arr[i];
            pivot = i;
        }
    }

    var leftMax = 0; rightMax = 0;
    // We now know we are not taking any grapes immediately adjacent, so do the function on subsets before and after those.
    if (pivot > 1){
        leftMax = maxGrapes(arr.slice(0, pivot-1));
    }

    if (pivot < arr.length-2){
        rightMax = maxGrapes(arr.slice(pivot+2, arr.length));
    }

    return max + leftMax + rightMax;
}

function collatz(startNum, iterCount){
    let startInt = Math.floor(startNum);
    if(startInt <= 0){
        return 0;
    }
    // Endpoint.
    iterCount[0]++;
    if(startInt == 1){
        return 1;
    }

    if(startInt % 2 == 1){ // Odd value.
        return collatz(startInt * 3 + 1, iterCount);
    }
    else{ // Even value.
        return collatz(startInt / 2, iterCount);
    }
}

let myCount = [0];
var maxCount = 0, maxStart = 0;
for (var i = 1; i <= 1000000; i++){
    myCount[0] = 0;
    collatz(i, myCount);
    if (myCount[0] > maxCount){
        maxCount = myCount[0];
        maxStart = i;
    }
}
console.log(maxCount, maxStart);