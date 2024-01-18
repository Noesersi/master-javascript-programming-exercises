function modulo(num1, num2) {
    // Tu código aquí
    if (isNaN(num1) || isNaN(num2)) return NaN;

    if (num1 >= 0) {
        while (num1 >= num2) {
            num1 -= num2;
        }
        return num1;
    } else {
        let numNegative = -num1;
        while (numNegative >= num2) {
            numNegative -= num2;
        }
        return num1 < 0 ? -numNegative : numNegative;
    }
}

let output = modulo(-13, 5);
console.log(output); // --> -3
