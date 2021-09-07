function median(arr){
    // Insertion Sort
    for (i = 1; i < arr.length; i++){
        for (j = i; j > 0; j--){
            if (arr[j] < arr[j-1]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    if (arr.length % 2 == 1){
        return arr[(arr.length-1) / 2];
    }
    else{
        return Math.floor((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2);
    }
}

function tacoTruck(coordArr){
    let xArray = [], yArray = [];
    // Split the coordinates.
    for (var i = 0; i < coordArr.length; i++){
        xArray[i] = coordArr[i][0];
        yArray[i] = coordArr[i][1];
    }
    let xMedian = median(xArray);
    let yMedian = median(yArray);

    return [xMedian, yMedian];
}

let customers = [ [10,0], [-1,-10], [2,4], [5, -1] ];
let location = tacoTruck(customers);
console.log(customers);
console.log(location);