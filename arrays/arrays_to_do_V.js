function average(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function balancePoint(arr){
    var sumLeft = 0, sumRight = 0;
    var hasBalance = false;

    for (var i = 1; i < arr.length; i++){
        sumLeft = 0;
        sumRight = 0;
        // sumLeft
        for (var j = 0; j < i; j++){
            sumLeft += arr[j];
        }
        // sumRight
        for (var j = i; j < arr.length; j++){
            sumRight += arr[j];
        }
        // Compare
        if (sumLeft == sumRight){
            hasBalance = true;
            break;
        }
    }

    return hasBalance;
}

function balanceIndex(arr){
    var sumLeft = 0; sumRight = 0;
    var index = -1;

    for (var i = 0; i < arr.length; i++){
        sumLeft = 0;
        sumRight = 0;
        // sumLeft
        for (var j = 0; j < i; j++){
            sumLeft += arr[j];
        }
        // sumRight
        for (var j = i+1; j < arr.length; j++){
            sumRight += arr[j];
        }
        // Compare
        if (sumLeft == sumRight){
            index = i;
            break;
        }
    }

    return index;
}

console.log("=== 1 ===");
console.log(average([1,2,3,4,10]));

console.log("=== 2 ===");
console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([1,2,4,2,1]));

console.log("=== 3 ===");
console.log(balanceIndex([-2,5,7,0,3]));
console.log(balanceIndex([9,9]));