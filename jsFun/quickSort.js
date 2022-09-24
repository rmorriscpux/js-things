// Sorting of array with unique values.
function quickSort( numArray ) {
    if( numArray.length <= 1 ) {
        return numArray;
    }

    const pivot = numArray[Math.floor(numArray.length/2)];

    let i = 0, j = numArray.length-1, temp;

    while( i != j ) {
        while( numArray[i] < pivot ){
            i++;
        }
        while( numArray[j] > pivot ){
            j--;
        }
        if( i != j ){
            temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp;
        }
    }

    const left = quickSort(numArray.slice(0, j)), right = quickSort(numArray.slice(j+1));
    const sortedArray = left.concat([pivot], right);

    return sortedArray;
}

/* Time Complexity
O(N^2)
Θ(N log N)
Ω(N log N)
*/

console.log(quickSort([9, 0, 8, 1, 7, 2, 6, 3, 5, 4]));