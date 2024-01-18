function findSmallestElement(arr) {
    // your code here
    let smallest = Infinity;
    if(arr && arr.length > 0){
        arr.forEach(number => {
            if(number < smallest){
                smallest = number
            }
        })
        return smallest
    }
    return 0
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1