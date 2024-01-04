// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let array = obj[key];

    if (Array.isArray(array)) {
        return array.filter(element => element < 100);
    }

    return [];
}

let obj = {
    key: [1000, 20, 50, 500]
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);
