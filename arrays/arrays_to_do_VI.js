// Truncate array between two indices.
function truncArray(arr, minIndex, maxIndex){
    var newArray = [];
    for (var i = minIndex; i <= maxIndex; i++){
        newArray.push(arr[i]);
    }
    return newArray;
}

// Binary search a sorted array.
function binarySearch(arr, value){
    pivotIndex = Math.floor(arr.length / 2);
    if (arr[pivotIndex] == value){
        return true;
    }
    else{
        if (pivotIndex == 0){
            return false;
        }
        else{
            if (arr[pivotIndex] > value){
                return binarySearch(truncArray(arr, 0, pivotIndex-1), value);
            }
            else{
                return binarySearch(truncArray(arr, pivotIndex+1, arr.length-1), value);
            }
        }
    }
}



console.log("=== 1 ===")
let testArray1 = [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16];
console.log(binarySearch(testArray1, 6));
console.log(binarySearch(testArray1, 14));
console.log(binarySearch(testArray1, -4));
console.log(binarySearch(testArray1, 3));
console.log(binarySearch(testArray1, 15));
console.log(binarySearch(testArray1, -10));

function minOfSortedRotated(arr){
    if(arr.length == 1){
        return arr[0];
    }
    else if (arr.length == 2){
        return arr[0] < arr[1] ? arr[0] : arr[1];
    }
    else{
        // Split the array into two parts.
        let leftArray = truncArray(arr, 0, Math.floor(arr.length / 2) - 1);
        let rightArray = truncArray(arr, Math.floor(arr.length / 2), arr.length-1)

        if(leftArray[0] < leftArray[leftArray.length-1] && rightArray[0] < rightArray[rightArray.length-1]){
            // Narrowed it down to the 0 index of leftArray or rightArray.
            // This covers cases where both sides by themselves are sorted.
            return leftArray[0] < rightArray[0] ? leftArray[0] : rightArray[0];
        }
        else if(leftArray[0] > leftArray[leftArray.length-1]){
            // Lowest value is somewhere in leftArray. 
            return minOfSortedRotated(leftArray);
        }
        else{
            // Lowest value is somewhere is rightArray.
            return minOfSortedRotated(rightArray);
        }
    }
}

console.log("=== 2 ===");
let testArray2Alpha = ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"];
let testArray2Num = [4, 6, 8, 10, 12, 14, 16, -4, -2, 0, 2];
console.log(minOfSortedRotated(testArray2Alpha));
console.log(minOfSortedRotated(testArray2Num));

function truncString(str, min, max){
    var newStr = "";
    for (var i = min; i <= max; i++){
        newStr += str[i];
    }
    return newStr;
}

// Binary search a sorted string.
function binarySearchString(str, value){
    pivotIndex = Math.floor(str.length / 2);
    if (str[pivotIndex] == value){
        return true;
    }
    else{
        if (pivotIndex == 0){
            return false;
        }
        else{
            if (str[pivotIndex] > value){
                return binarySearchString(truncString(str, 0, pivotIndex-1), value);
            }
            else{
                return binarySearchString(truncString(str, pivotIndex+1, str.length-1), value);
            }
        }
    }
}

console.log("=== 3 ===");
console.log(binarySearchString(" &-0379DEFXZ[abcz|", "6"));
console.log(binarySearchString(" &-0379DEFXZ[abcz|", "c"));