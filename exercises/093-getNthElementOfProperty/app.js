// Write your function here
function getNthElementOfProperty(obj, key, nth) {
    if( !obj[key] || !Array.isArray(obj[key])){
        return undefined
    }
    return obj[key][nth]
}
let obj = {
    key: [1,4]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);