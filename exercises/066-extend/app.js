let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for(let letra in obj2){
        if(!obj1.hasOwnProperty(letra)){
            obj1[letra] = obj2[letra]
        }
    }
    return obj1

}
extend(obj1,obj2)
console.log(obj1)