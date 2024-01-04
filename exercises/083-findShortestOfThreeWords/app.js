function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let shortest = Math.min(word1.length, word2.length, word3.length)
    if (shortest == word1.length) {
        return word1
    } else if (shortest == word2.length) {
        return word2
    } else {
        return word3
    }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
