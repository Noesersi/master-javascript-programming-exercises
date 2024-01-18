function computeFactorialOfN(n) {
    // your code here
    if (n === 0 || n === 1) return 1;
    let num= 1;
    for(let i= 1; i < n+1; i++){
        num *= i;
        console.log(i)
    }
    return num
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
