function isCreditCardValid(digitArr){
    if (digitArr.length > 19 || digitArr.length < 13){
        return false;
    }

    var checksum = 0;
    // Every other position starting from second-to-last, double value and subtract 9 if greater than 9, then add.
    for (var i = digitArr.length-2; i >= 0; i=i-2){
        var curNum = digitArr[i] * 2;
        if (curNum > 9){
            curNum -= 9;
        }
        checksum += curNum;
    }
    // The rest, just add.
    for (var i = digitArr.length-1; i >= 0; i=i-2){
        checksum += digitArr[i];
    }
    return checksum % 10 == 0;
}

console.log(isCreditCardValid([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]));