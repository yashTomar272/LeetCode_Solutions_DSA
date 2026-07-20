/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum=0
  let i=0
  let j=0
  for(j=0;j<k;j++){
    sum+=nums[j]
  }  
  let max=sum
  while(j<nums.length){
    sum+=nums[j]
    sum-=nums[i]
    j++
    i++
    max=Math.max(max,sum)
  }
  return max/k
};