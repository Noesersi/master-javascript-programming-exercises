// Write your function here
function computeAverageOfNumbers(array){
    if(array.length !== 0){
        const initialValue = 0;
        const reduced = array.reduce((acumulator, currentValue) => acumulator+currentValue, initialValue,)
        return reduced/ array.length
    }else return 0
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);