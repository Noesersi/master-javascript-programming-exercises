function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortest = 'sflknaslkfnlksnflkdsnfklnklnlkkkkkkkkkkkkkkssss'
    if (arr.some(element => {
        return typeof element === 'string'
    })) {
        arr.forEach(element => {
            if(element.length < shortest.length) {
                shortest = element
            }
        })
        return shortest
    }
    return ''
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
