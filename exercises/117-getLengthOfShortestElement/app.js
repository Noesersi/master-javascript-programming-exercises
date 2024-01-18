function getLengthOfShortestElement(arr) {
    // your code here
    let shortest = Infinity;
    if(arr.length > 0){
        arr.map( word => {
            if(word.length < shortest){
                shortest = word.length
            }
        })
        return shortest
    }
    return 0
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
