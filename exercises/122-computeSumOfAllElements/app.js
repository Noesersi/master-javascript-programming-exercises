function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((ant, post) => {
    return ant + post
  })
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
