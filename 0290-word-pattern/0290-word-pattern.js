/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words=s.split(" ")
    if(pattern.length!==words.length)return false
    let map1=new Map()
    let map2=new Map()

    for(let i=0;i<pattern.length;i++){
        let p=pattern[i]
        let word=words[i]
        if(map1.has(p)&&map1.get(p)!==word) return false
        if(map2.has(word)&&map2.get(word)!==p) return false
        map1.set(p,word)
        map2.set(word,p)
    }
    return true
};