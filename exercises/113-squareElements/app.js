function squareElements(arr) {
  // your code here
  let newArr = arr.map(number => {
    return number ** 2
  })

  return newArr
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
