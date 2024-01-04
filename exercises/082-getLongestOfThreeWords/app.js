function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longest = Math.max(word1.length, word2.length, word3.length)
    if (longest == word1.length) {
        return word1
    } else if (longest == word2.length) {
        return word2
    } else {
        return word3
    }
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
