// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy),
// preserving non-negatives’ order. As always, do not use built-in array functions.
function removeNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            for (var j = i+1; j < arr.length; j++){
                arr[j-1] = arr[j];
            }
            arr.length--;
        }
    }
    return arr;
}
console.log("=== 1 ===");
let someArray1 = [-1, 0, 4, -2, 8, -3];
removeNegatives(someArray1);
console.log(someArray1);

// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.
function secondToLast(arr){
    if (arr.length < 2){
        return null;
    }

    return arr[arr.length-2];
}
console.log("=== 2 ===");
console.log(secondToLast(['hello', 2, 16, 'what', 1]));
console.log(secondToLast([16]));

// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
function secondLargest(arr){
    if (arr.length < 2){
        return null;
    }

    var first, second;
    if (arr[0] > arr[1]){
        first = arr[0];
        second = arr[1];
    }
    else{
        first = arr[1];
        second = arr[0];
    }

    for (var i = 2; i < arr.length; i++){
        if (arr[i] > second){
            second = arr[i];
            if (first < second){
                var temp = first;
                first = second;
                second = temp;
            }
        }
    }

    return second;
}
console.log("=== 3 ===");
console.log(secondLargest([42,1,4,Math.PI,7]));
console.log(secondLargest([3]));
console.log(secondLargest([1,4,Math.PI,7,42]));

// Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.
function nthToLast(arr, n){
    if (arr.length < n){
        return null;
    }

    return arr[arr.length-n];
}
console.log("=== 4 ===")
console.log(nthToLast(['hello', 2, 16, 'what', 1],3));
console.log(nthToLast([16],2));

// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element,
// where (N-1) elements are larger. Return null if needed.
function nthLargest(arr, n){
    if (arr.length < n || n < 1){
        return null;
    }

    // Find absolute max.
    var curMax = arr[0];
    var maxCounter = 0, nCounter = 0;
    for (var i = 0; i < arr.length; i++){
        // First pass, get the count of the absolute highest.
        if (arr[i] > curMax){
            curMax = arr[i];
            maxCounter = 1;
        }   
        else if (arr[i] == curMax){
            maxCounter++;
        }
    }
    // Check if we have enough. If we do, return curMax.
    nCounter += maxCounter;
    if (nCounter >= n){
        return curMax;
    }
    // Continue until nCounter is high enough.
    var lastMax = curMax;
    while (nCounter < n){
        // Get a temporary value in the array that is less than the last max value. Doesn't matter what it is as long as it's lower.
        for (var i = 0; i < arr.length; i++){
            if (arr[i] < lastMax){
                curMax = arr[i];
                break;
            }
        }
        // Now get the count of the next highest value and add it.
        maxCounter = 0;
        for (var i = 0; i < arr.length; i++){
            if (arr[i] < lastMax){
                if (arr[i] > curMax){
                    curMax = arr[i];
                    maxCounter = 1;
                }
                else if (arr[i] == curMax){
                    maxCounter++;
                }
            }
        }
        lastMax = curMax;
        nCounter += maxCounter;
    }
    // After the loop, we should have the Nth highest value.
    return curMax;
}
console.log("=== 5 ===");
let numArray5 = [10, 9, 4, 7, 6, 5, 9, 3, 10, 1];
console.log(nthLargest(numArray5, 9));


// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away.
// Array [-1,7,3] would represent three buildings:
// first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story).
// You are situated at street level. Return array containing heights of buildings you can see, in order.
// Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
function skylineHeights(arr){
    skyline = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            if (skyline.length == 0){
                skyline[0] = arr[i];
            }
            else if(arr[i] > skyline[skyline.length-1]){
                skyline[skyline.length] = arr[i];
            }
        }
    }
    return skyline;
}
console.log("=== 6 ===");
console.log(skylineHeights([-1, 1, 3, 2, 7]));