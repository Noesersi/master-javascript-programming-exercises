
function getLargestElement(arr) {
  // your code here
  if(arr && Array.isArray(arr) && arr.length > 0){
    return Math.max(...arr)
  }
  return 0
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;