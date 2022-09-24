// Calculate Prime

Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

Number.prototype.isPrimeFast = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log('Original');
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log('----------');

const quickStart = performance.now();
primeCount = 0;
num = 2;
while( primeCount < 1e4 ) {
    if( num.isPrimeFast() ) {
        primeCount++;
    }
    num++;
}
console.log(`With Square Root`);
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - quickStart} milliseconds to run`);

// Fibonnaci

// recursive - O(N!)
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative - O(N) - Faster
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

// String Reverse
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
// Quicker Single loop function.
function reverseString( inputStr ) {
    let outStr = "";
    for ( let i=inputStr.length-1; i>=0; i-- ) {
        outStr = outStr.concat(inputStr[i]);
    }
    return outStr;
}
const reversed2 = reverseString(story);
console.log(reversed1);
console.log(reversed2);