function rFib(index){
    let intIndex = Math.floor(index);
    if(intIndex <= 0){
        return 0;
    }
    else if(intIndex == 1){
        return 1;
    }
    else{
        return rFib(intIndex-1) + rFib(intIndex-2);
    }
}

console.log("=== 1 ===");
console.log([0,1,2,3,4,5,6,7,8,9,10].map(rFib));
console.log(rFib(-1));

function rTrib(index){
    let intIndex = Math.floor(index);
    if(intIndex <= 1){
        return 0;
    }
    else if(intIndex == 2){
        return 1;
    }
    else{
        return rTrib(intIndex-1) + rTrib(intIndex-2) + rTrib(intIndex-3);
    }
}

console.log("=== 2 ===");
console.log([0,1,2,3,4,5,6,7,8,9,10].map(rTrib));
console.log(rTrib(-1));

function ackermann(num1, num2){
    // Condition 1: num1 is 0.
    if (num1 <= 0){
        return num2 + 1;
    }

    // Condition 2: num1 is positive, num2 is 0.
    if (num2 <= 0){
        return ackermann(num1-1, 1);
    }

    // Condition 3: both num1 and num2 are positive.
    return ackermann(num1-1, ackermann(num1, num2-1));
}

console.log("=== 3 ===");
console.log(ackermann(1,1));

function zibonacci(num){
    let index = Math.floor(num);

    // Initial values.
    if(index < 0){
        return 0;
    }
    else if (index == 0 || index == 1){
        return 1;
    }
    else if (index == 2){
        return 2;
    }

    let n = Math.floor(index/2);
    if (index % 2 == 1){ // Odd index
        return zibonacci(n) + zibonacci(n-1) + 1;
    }
    else{ // Even index
        return zibonacci(n) + zibonacci(n+1) + 1;
    }
}

console.log("=== 4 ===");
console.log([0,1,2,3,4,5,6,7,8,9,10].map(zibonacci));
console.log(zibonacci(-1));