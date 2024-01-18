function transformFirstAndLast(array) {
  // your code here
  let object = {}
  object[array[0]] = array[array.length -1];
  return object
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
