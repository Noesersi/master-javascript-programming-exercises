// Write your function here
function getOddLengthWordsAtProperty(obj,key){
    let arr = obj[key];
    if(Array.isArray(obj[key])){
        return arr.filter(e => e.length % 2 !== 0)
    }
    return []
}
let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); 