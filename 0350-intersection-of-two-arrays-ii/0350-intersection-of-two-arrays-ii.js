/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   let map=new Map()
    let result=[]
    for(let ch of nums1){
         map.set(ch,(map.get(ch)||0)+1) 
    }
    
    for(let ch of nums2){
      if(map.has(ch) && map.get(ch)>0){
        result.push(ch)
       map.set(ch,(map.get(ch)-1))
      }
    }
    return result
};