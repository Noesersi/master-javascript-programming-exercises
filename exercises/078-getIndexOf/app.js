// Write your function here
function getIndexOf(character, string){
    for(i=0; i<string.length; i++){
        if(string[i] != ' ' && string[i]== character){
            return i
        }if(!string.includes(character))return -1
    }
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output);