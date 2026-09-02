/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let map=new Map()
    let map2=new Map()
let i=0
let j=0
let match = true
if (s1.length > s2.length) {
    return false
}
    for(j=0;j<s1.length;j++){
     map2.set(s1[j],(map2.get(s1[j])||0)+1)
     map.set(s2[j],(map.get(s2[j])||0)+1)
    }
    for (let [key, value] of map2) {
    if (map.get(key) !== value) {
        match = false
        break
    }
}
if (match) {
    return true
}
    while(j<s2.length){
map.set(s2[i],(map.get(s2[i]))-1)
map.set(s2[j],(map.get(s2[j])||0)+1)
match=true
     for (let [key, value] of map2) {
    if (map.get(key) !== value) {
        match = false
        break
    }
}
if (match) {
    return true
}
i++
j++
    }
    return false  
};