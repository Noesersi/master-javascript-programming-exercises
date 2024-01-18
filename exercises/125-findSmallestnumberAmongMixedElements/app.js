function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let smallest= Infinity;
  if (arr.some(element => {
    return typeof element === 'number'
  })) {
      arr.forEach(element =>{
        if(element < smallest){
          smallest = element
        }
      })
      return smallest
  }
  return 0
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
