/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set=new Set(nums1)
 let result=[]
 
for(let ch of nums2){
  if(set.has(ch) ){
  result.push(ch)
  set.delete(ch)
  }
}
return result
};