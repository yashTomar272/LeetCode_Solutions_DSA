/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        let k=0
        let j=words[i].length-1
        let str=""
        let isPalindrome = true
while(k<j){
    if(words[i][k]!==words[i][j]){
        isPalindrome = false
        break
    }
    k++
    j--
}
if(isPalindrome)
return words[i]
    }
    return ""
};