/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let nums2=[]
 let sum=0
 for(let i=0;i<nums.length;i++){
  sum+=nums[i]
  nums2.push(sum)
 }
 return nums2  
};