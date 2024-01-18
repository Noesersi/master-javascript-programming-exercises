function multiplyBetween(num1, num2) {
    // your code here
    if(num1 >= num2)return 0
    let numOfProducts = (num2 - num1);
    let finalProduct = 1;
    for (let i = 0; i < numOfProducts; i++) {
        finalProduct *= num1+i
        console.log(finalProduct)
      }
      return finalProduct
    
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
