/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let arr=word.split("")
    let i=0
   let j = word.indexOf(ch)
    while(i<=j){
        
            [arr[i],arr[j]]=[arr[j],arr[i]]
        
        i++
        j--
    }
    return arr.join("")
};