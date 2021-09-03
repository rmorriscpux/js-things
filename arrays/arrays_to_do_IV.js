// 1. Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain
//  a method that will randomize the order of an array’s elements. Let’s create shuffle(arr),
// to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?
function shuffle(arr){
    var temp, randNum;
    for (var i = arr.length; i > 1; i--){
        randNum = Math.floor(Math.random() * i); // Number from 0 to i-1.
        temp = arr[i-1];
        arr[i-1] = arr[randNum];
        arr[randNum] = temp;
    }
    return;
}

console.log("=== 1 ===");
let numArray1 = [1,2,3,4,5,6,7,8,9,10];
shuffle(numArray1);
console.log(numArray1);

// Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).
// Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
function removeRange(arr, min, max){
    // Input cleanse.
    if (min > max) return;
    min = (min < 0) ? 0 : min;
    max = (max >= arr.length) ? arr.length - 1 : max;

    // Know how many values we're removing.
    let diff = max - min + 1;
    // Shift values back.
    for (i = max + 1; i < arr.length; i++){
        arr[i-diff] = arr[i];
    }
    // Shrink array.
    arr.length -= diff;
    return;
}

console.log("=== 2 ===");
let numArray2 = [20, 30, 40, 50, 60, 70];
removeRange(numArray2, 4, 2);
console.log(numArray2);

// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values.
// If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements
// not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]
function intermediateSums(arr){
    var sum = 0; count = 0;
    for (var i = 0; i < arr.length; i++){
        count++;
        sum += arr[i];
        // When we've summed 10 values, add to the array, then reset.
        if (count == 10){
            i++;
            arr.splice(i, 0, sum);
            count = 0;
            sum = 0;
        }
    }
    if (count != 0){  // We have extra. Sum them and add to the end.
        arr[arr.length] = sum;
    }
    return;
}

console.log("=== 3 ===");
let numArray3 = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
intermediateSums(numArray3);
console.log(numArray3);

// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order.
// Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
function doubleTrouble(arr){
    for (var i = arr.length-1; i >= 0; i--){
        arr.splice(i+1, 0, arr[i]);
    }
    return;
}

console.log("=== 4 ===");
let array4 = [4,"Ulysses",42,false];
doubleTrouble(array4);
console.log(array4);

// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array,
// at alternating indices starting with first array. Extra values from either array should be included afterward.
// Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].
// Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!
function zipIt(arr1, arr2, makeNewArray){
    // Will return a new array if true, will zip into arr1 if false.
    if (makeNewArray){
        let newArray = [];
        let maxLength = (arr1.length > arr2.length) ? arr1.length : arr2.length;
        for (var i = 0; i < maxLength; i++){
            // Add from arr1 if value is available.
            if (i < arr1.length){
                newArray[newArray.length] = arr1[i];
            }
            // Add from arr2 if value is available.
            if (i < arr2.length){
                newArray[newArray.length] = arr2[i];
            }
        }
        return newArray;
    }
    else{
        // Remember the base array lengths.
        let arr1BaseLen = arr1.length;
        let arr2BaseLen = arr2.length;
        // Put arr2 values in at every 2i+1 position of arr1, until arr1 or arr2 is exhausted. Then fill arr1 with the remainder of arr2 if necessary.
        for (var i = 0; i < arr2BaseLen; i++){
            if (i < arr1BaseLen){
                arr1.splice(2*i+1, 0, arr2[i]);
            }
            else{
                arr1[arr1.length] = arr2[i];
            }
        }
        return;
    }
}

console.log("=== 5 ===");
let numArr5_1 = [1,2,3,4,5,6,7];
let numArr5_2 = [10,20,30,40];
console.log(zipIt(numArr5_1, numArr5_2, true));
zipIt(numArr5_1, numArr5_2, false);
console.log(numArr5_1);