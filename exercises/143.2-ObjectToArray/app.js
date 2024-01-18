function listAllValues(obj) {
  // your code here
  let result = []
  for(let key in obj){
    result.push(obj[key])
  }
  return result
  
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
