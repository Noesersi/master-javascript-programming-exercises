// Write your function here
function removeElement(arr, discarder) {
    return arr.filter((element) => {
       return element !== discarder
    })
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); //