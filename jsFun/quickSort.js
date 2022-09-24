// Sorting of array with unique values.
function quickSort( numArray ) {
    if( numArray.length <= 1 ) {
        return numArray;
    }

    const arrayToSort = [ ...numArray ];

    const pivot = arrayToSort[Math.floor(arrayToSort.length/2)];

    let i = 0, j = arrayToSort.length-1, temp;

    while( i != j ) {
        while( arrayToSort[i] < pivot ){
            i++;
        }
        while( arrayToSort[j] > pivot ){
            j--;
        }
        if( i != j ){
            temp = arrayToSort[i];
            arrayToSort[i] = arrayToSort[j];
            arrayToSort[j] = temp;
        }
    }

    const left = quickSort(arrayToSort.slice(0, j)), right = quickSort(arrayToSort.slice(j+1));
    const sortedArray = left.concat([pivot], right);

    return sortedArray;
}

/* Time Complexity
O(N^2)
Θ(N log N)
Ω(N log N)
*/

const numArr = [9, 0, 8, 1, 7, 2, 6, 3, 5, 4];
console.log(quickSort(numArr));
console.log(numArr);