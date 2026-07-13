/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let majority=nums[0]
   let freq=1
   for(let i=1;i<nums.length;i++){
    if(freq===0){
        majority=nums[i]
    }
    freq+=nums[i]===majority?1:-1
   }
   return majority
};