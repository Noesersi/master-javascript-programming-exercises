function isOddWithoutModulo(num) {
    // your code here
    if((num & 1)=== 1){
        return true
    }else{
        return false
    }
    
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
