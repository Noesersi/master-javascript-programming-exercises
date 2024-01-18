function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length > 0){
   let result = arr.reduce((prev, post) => prev * post)
   return result
  }
  return 0
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
