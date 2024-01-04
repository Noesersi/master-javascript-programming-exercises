function getLargestElementAtProperty(obj, key) {
    // your code here
    let array= obj[key];
    if(obj.hasOwnProperty(key) && Array.isArray(array) && array.length > 0){
      return Math.max(...array)
    }
    return []
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
