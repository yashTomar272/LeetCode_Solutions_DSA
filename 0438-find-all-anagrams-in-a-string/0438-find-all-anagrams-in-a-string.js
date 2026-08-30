/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map=new Map()
let map2=new Map()
let result=[]
let isAnagram = true
for(let ch  of p){
    map.set(ch,(map.get(ch)||0)+1)
}
let i=0
let j=0
for( j=0;j<p.length;j++){
   map2.set(s[j],(map2.get(s[j])||0)+1)
}
for (let [key, value] of map) {
    if(map2.get(key)!==value){
isAnagram = false 
break
    }
    
}
if(isAnagram) result.push(i)

    while(j<s.length){
map2.set(s[i], map2.get(s[i]) - 1)

 map2.set(s[j],(map2.get(s[j])||0)+1)
 j++
 i++
 isAnagram = true 
 for (let [key, value] of map) {
    if(map2.get(key)!==value){
isAnagram = false 
break
    }
   
}
if(isAnagram) result.push(i)
}


return result
};