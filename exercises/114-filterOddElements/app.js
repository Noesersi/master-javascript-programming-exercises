
function filterOddElements(arr) {
  // your code here
  let newArr = arr.filter( number => {
    if(number % 2 !== 0){
      return number
    }
  })
  return newArr
  
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
