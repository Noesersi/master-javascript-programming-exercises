function computeSumBetween(num1, num2) {
    // your code here
    if(num1 >= num2)return 0

    let difference= num2-num1;
    let sum= 0;
    for(let i=0; i < difference; i++){
        sum += (num1+i)
    }
    return sum
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
