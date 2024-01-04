function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let result = []
    let array = obj[key];
    if(Array.isArray(obj[key]) && obj[key].length !== 0){
      array.forEach(element => {
        if(element.length % 2 === 0){
          result.push(element)
        }
      });
      return result
    }
    return []
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
