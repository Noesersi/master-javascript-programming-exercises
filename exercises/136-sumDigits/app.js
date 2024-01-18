function sumDigits(num) {
    // your code here
    let sum = 0;
    let stringNumber = num.toString().split('');
    console.log(stringNumber)

    if (num < 0) {
        stringNumber[0] += stringNumber[1];
        stringNumber.splice(1,1)
    }
    console.log(stringNumber)
    for(let i=0; i < stringNumber.length; i++){
        sum += Number(stringNumber[i])
    }
    return sum

}

let output = sumDigits(-316);
console.log(output); // --> 4
