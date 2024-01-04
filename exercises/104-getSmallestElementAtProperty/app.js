function getSmallestElementAtProperty(obj, key) {
    // your code here
    let array= obj[key];
    if(obj.hasOwnProperty(key) && Array.isArray(array) && array.length > 0){
      return Math.min(...array)
    }
    return []
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
