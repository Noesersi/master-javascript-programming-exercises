function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if( obj[key] && obj[key][index] && Array.isArray(obj[key]) && obj[key].length > 0){
        return obj[key][index]
    }
    return undefined

}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
