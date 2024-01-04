function removeOddValues(obj) {
    // your code here
  for(let prop in obj){
    if(typeof(obj[prop]) == 'number' && obj[prop] %2 !=0){
      delete obj[prop]
    }
  }
  return obj
}

let obj = {
  a: 2,
  b: 3,
  c: 7
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
