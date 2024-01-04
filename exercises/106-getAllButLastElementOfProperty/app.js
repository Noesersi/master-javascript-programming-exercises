function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if(obj[key] && Array.isArray(obj[key]) && obj[key].length > 0){
      let array = obj[key];
      array.pop()
      return array
    }
    return []
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
