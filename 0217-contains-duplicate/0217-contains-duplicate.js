/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
  for(let ch of nums){
    set.add(ch)
  }
  return set.size===nums.length?false:true
};