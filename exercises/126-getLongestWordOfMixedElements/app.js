function getLongestWordOfMixedElements(arr) {
    // your code here
    let longest= ''
    if(arr.some( element => {
        return typeof element === 'string'
    })){
        arr.forEach(element =>{
            if(element.length > longest ) longest = element;
        })
        return longest
    }
    return ''
}

let output = getLongestWordOfMixedElements([3000, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
