function isEvenWithoutModulo(num) {
    // your code here
    if((num & 1)=== 1){
        return false
    }else{
        return true
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
