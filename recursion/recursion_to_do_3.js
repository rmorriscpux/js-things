// Recursive Binary Search

function binarySearch(arr, findVal){
    var index = Math.floor(arr.length/2);
    // Check value at midpoint index.
    if (arr[index] == findVal){
        return true;
    }
    // Value not found.
    if (findVal < arr[index]){ // findVal is before the midpoint.
        if(index == 0){ // At beginning. We know that the findVal is not in arr
            return false;
        }
        else{
            return binarySearch(arr.slice(0, index), findVal);
        }
    }
    else{ // findVal is after the midpoint.
        if(index == arr.length-1){ // At end. We know that the findVal is not in arr
            return false;
        }
        else{
            return binarySearch(arr.slice(index+1), findVal);
        }
    }
}

console.log("==== 1 ====");
let myArray1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
console.log(binarySearch(myArray1, 4));

// Greatest Common Factor

function rGCF(num1, num2){
    if(num1 == num2){
        return num1;
    }
    else if(num1 < num2){
        return rGCF(num1, num2-num1);
    }
    else{
        return rGCF(num1-num2, num2);
    }
}

console.log("==== 2 ====");
console.log(rGCF(121, 44));

// Tarai
function tarai(x,y,z,callCount){
    callCount[0]++;
    if (x <= y){
        return y;
    }
    else{
        return tarai(tarai(x-1,y,z,callCount),tarai(y-1,z,x,callCount),tarai(z-1,x,y,callCount),callCount);
    }
}

console.log("==== 3 ====");
let myCallCount = [0];
console.log(tarai(10,2,9,myCallCount));
console.log(myCallCount[0]);


