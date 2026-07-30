/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word=s.trim().split(" ")
    let lastWodLength=word[word.length-1].length
    return lastWodLength
};