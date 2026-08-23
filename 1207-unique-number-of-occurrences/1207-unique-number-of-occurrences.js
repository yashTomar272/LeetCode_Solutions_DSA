/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map=new Map()
    let set=new Set()
    for(let ch of arr){
        map.set(ch,(map.get(ch)||0)+1)
    }
    for(let [key,value] of map){
        if(!set.has(value)){
            set.add(value)
        }
    }
    return set.size==map.size
};