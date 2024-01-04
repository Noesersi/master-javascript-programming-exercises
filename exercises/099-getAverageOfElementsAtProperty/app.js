function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(Array.isArray(obj[key]) && obj[key].length !== 0){
    return obj[key].reduce((acumulador, i) => acumulador + i)/ obj[key].length
  }

  return 0
}
let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);