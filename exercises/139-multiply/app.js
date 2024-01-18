
function multiply(num1, num2) {
    // your code here
    if(num1 < 0 && num2 < 0)
    {
        let positive1 = -num1;
        let positive2 = -num2;
        let result=0;
        for(let i=0; i < positive2; i++){
            result += positive1
        }
        return result;
    }
    if(num1 < 0 && num2 > 0){
        let positive1 = -num1;
        let positive2 = num2;
        let result=0;
        for(let i=0; i < positive2; i++){
            result += positive1
        }
        return -result;
    }
    if(num1 > 0 && num2 < 0){
        let positive1 = num1;
        let positive2 = -num2;
        let result=0;
        for(let i=0; i < positive2; i++){
            result += positive1
        }
        return -result;
    }
    let number=0;
    for(let i=0; i < num2; i++){
        number += num1
    }
    return number;
    
}

let output = multiply(4, 7);
console.log(output); // --> 28
