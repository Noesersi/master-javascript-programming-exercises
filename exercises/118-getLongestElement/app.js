function getLongestElement(arr) {
    // your code here
    let longest = '';
    if(arr && arr.length > 0){
        arr.forEach(element => {
            if(element.length > longest.length){
                longest = element
            }
        });
        return longest
    }
    return ''
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
