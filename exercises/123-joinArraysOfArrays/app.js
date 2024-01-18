function joinArrayOfArrays(arr) {
  // your code here
  let fullArr= []
  let newFull = fullArr.concat(...arr)
  
  return newFull
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
