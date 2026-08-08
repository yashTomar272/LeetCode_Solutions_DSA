/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length)return false
    let map1=new Map()
    let map2=new Map()

    for(let i=0;i<s.length;i++){
        let sword=s[i]
        let tword=t[i]
        if(map1.has(sword) && map1.get(sword)!==tword)return false
        if(map2.has(tword) && map2.get(tword)!==sword)return false
        map1.set(sword,tword)
        map2.set(tword,sword)
    }
    return true
};