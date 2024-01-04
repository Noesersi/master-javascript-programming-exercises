// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    let arrr = obj[key];
    if(Array.isArray(obj[key])){
        return arrr.filter(e => e > 10)
        }
        return []
    }


let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);