// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    let arr = []
    if(!obj[key] || !Array.isArray(obj[key])){
        return []
    }
    obj[key].forEach((element) => {
        if(element == 10){
        arr.push(element)
        }})
    return arr
    }
    

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);