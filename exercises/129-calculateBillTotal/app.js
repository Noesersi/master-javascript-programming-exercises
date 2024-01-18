function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = (9.5/100) * preTaxAndTipAmount;
    let tip = (15/100) * preTaxAndTipAmount;
    return tip + tax + preTaxAndTipAmount
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
