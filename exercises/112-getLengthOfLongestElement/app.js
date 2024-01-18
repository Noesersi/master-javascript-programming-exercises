function getLengthOfLongestElement(arr) {
    // Your code here
    if( Array.isArray(arr) && arr.length > 0){
        let longest = 0;
        arr.map(word => {
            if(word.length > longest){
                longest = word.length;
            }
        })
        return longest
    }
    return 0
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
