function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let array = obj[key];
    if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0  ){
      return array.map(e => e ** 2)
    }
    return []
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
