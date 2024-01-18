// Write your function here
function countAllCharacters(string){
    let result = {}
    if(string.length > 0){
        for(let i = 0; i < string.length; i++){
        let character = string.charAt(i);
        result[character] = (result[character] || 0) + 1;
    }
    return result
    }
    return {}
}

let output = countAllCharacters('juliette');
console.log(output);