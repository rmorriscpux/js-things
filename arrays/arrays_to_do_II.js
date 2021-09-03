// 1. Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length,
// with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr){
    var temp;
    for (var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-(i+1)];
        arr[arr.length-(i+1)] = temp;
    }
    return;
}
console.log("=== 1 ===")
let someArray1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
reverse(someArray1);
console.log(someArray1);

// 2. Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount.
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost.
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotate(arr, shiftBy){
    // Right Shift
    var temp;
    if (shiftBy > 0){
        for (var shift = 0; shift < shiftBy; shift++){
            temp = arr[arr.length-1];
            for (var i = arr.length-1; i > 0; i--){
                arr[i] = arr[i-1];
            }
            arr[0] = temp;
        }
    }
    // Left Shift
    else{
        for (var shift = 0; shift < Math.abs(shiftBy); shift++){
            temp = arr[0];
            for (var i = 0; i < arr.length-1; i++){
                arr[i] = arr[i+1];
            }
            arr[arr.length-1] = temp;
        }
    }
    return;
}
console.log("=== 2 ===");
let someArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(someArray2);
rotate(someArray2, 2);
console.log(someArray2);
rotate(someArray2, -3);
console.log(someArray2);

// 3. Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range.
// Given arr and values min and max, retain only the array values between min and max.
// Work in-place: return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr, min, max){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < min || arr[i] > max){
            // Replace all after with the value after it.
            for (var j = i+1; j < arr.length; j++){
                arr[j-1] = arr[j];
            }
            arr.length--;
        }
    }
    return;
}
console.log("=== 3 ===");
let someArray3 = [1, 2, 6, 9, 15, 4, 2, 18];
filterRange(someArray3, 2, 10);
console.log(someArray3);

// 4. Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays.
// Return a new array containing the first array's elements, followed by the second array's elements.
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr1, arr2){
    let newArr = [];
    for (var i = 0; i < arr1.length; i++){
        newArr[newArr.length] = arr1[i];
    }
    for (var i = 0; i < arr2.length; i++){
        newArr[newArr.length] = arr2[i];
    }
    return newArr;
}
console.log("=== 4 ===");
let a1 = ['a', 'b'];
let a2 = [1, 2, 3];
console.log(arrConcat(a1, a2));
console.log(a1);
console.log(a2);