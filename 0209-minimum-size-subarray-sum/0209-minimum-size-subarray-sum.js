/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i=0
    let j=0
    let sum=0
    let min=Infinity

    while(j<nums.length){
        sum+=nums[j]
        while(sum >= target) {

       let currentLength = j - i + 1
        min=Math.min(min,currentLength)
       
        sum-=nums[i]
        i++
    }

    j++
    }
return min === Infinity ? 0 : min
};