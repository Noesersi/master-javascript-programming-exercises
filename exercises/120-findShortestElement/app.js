function findShortestElement(arr) {
    // your code here
    let smallest = 'sdfasdgggggggggggggggggggggggggggggggggggggggggggggggggggggggg';
    if(arr && Array.isArray(arr) && arr.length > 0){
        for(let word of arr){
            if( smallest.length > word.length ){
                smallest = word
            }
        }
        return smallest
    }
    return ''
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'