/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map=new Map()
    let sum=0
    for(let ch of nums){
     map.set(ch,(map.get(ch)||0)+1)
    }
    for(let [key,value] of map){
       if(value==1){
        sum+=key
       }
    }
    return sum
};