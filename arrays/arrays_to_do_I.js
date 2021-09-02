// Arrays passed by reference so this works.

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(modArray, value) {
    for (var i = modArray.length; i > 0; i = i-1){
        modArray[i] = modArray[i-1];
    }
    modArray[0] = value;
    return;
}

// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(modArray) {
    let poppedVal = modArray[0];
    for (var i = 0; i < modArray.length-1; i = i+1){
        modArray[i] = modArray[i+1];
    }
    modArray.pop();
    return poppedVal;
}

// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(modArray, pos, value) {
    if (pos < 0 || pos > modArray.length){
        return;
    }

    for (var i = modArray.length; i > pos; i = i-1){
        modArray[i] = modArray[i-1];
    }
    modArray[pos] = value;
    return;
}

// 4. Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop().
// Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(modArray, pos) {
    if (pos < 0 || pos >= modArray.length){
        return;
    }

    let poppedVal = modArray[pos];
    for (var i = pos; i < modArray.length-1; i = i+1){
        modArray[i] = modArray[i+1];
    }
    modArray.pop();
    return poppedVal;
}

// 5. Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42].
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(modArray) {
    var temp;
    for(var i = 1; i < modArray.length; i = i+2){
        temp = modArray[i];
        modArray[i] = modArray[i-1];
        modArray[i-1] = temp;
    }
    return;
}

// 6. Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources.
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values.
// Because array elements are already in order, all duplicate values will be grouped together.
// As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.
function removeDuplicates(modArray) {
    for(var i = modArray.length-1; i > 0; i = i-1){
        if (modArray[i] == modArray[i-1]){
            removeAt(modArray, i);
        }
    }
    return;
}

console.log("=== 1 ===");
let myArray1 = ["1st", "2nd", "3rd"];
pushFront(myArray1, "New 1st");
console.log(myArray1);

console.log("=== 2 ===");
let myArray2 = ["1st", "2nd", "3rd"];
let val2 = popFront(myArray2);
console.log(val2);
console.log(myArray2);

console.log("=== 3 ===");
let myArray3 = ["1st", "2nd", "3rd", "4th"];
insertAt(myArray3, 2, "5th");
console.log(myArray3);

console.log("=== 4 ===");
let myArray4 = ["1st", "2nd", "3rd", "4th"];
let val4 = removeAt(myArray4, 0);
console.log(val4);
console.log(myArray4);

console.log("=== 5 ===");
let myArray5 = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"];
swapPairs(myArray5);
console.log(myArray5);

console.log("=== 6 ===");
let myArray6 = ["alpha", "beta", "beta", "gamma", "gamma", "gamma", "delta"];
removeDuplicates(myArray6);
console.log(myArray6);