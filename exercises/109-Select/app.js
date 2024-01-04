// Write your functio

function select(arr, obj){
    let resultado = {}
    arr.forEach(e => {
        if(obj[e]){
            resultado[e] = obj[e]
        }
    })
    return resultado
}
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output);