function fromListToObject(array) {
  // your code here
  let object = {};
  array.forEach(arr => {
    object[arr[0]] = arr[1];
  })
  return object
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
