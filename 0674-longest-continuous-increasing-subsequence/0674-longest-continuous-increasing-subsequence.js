/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let current=1
    let max=1
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]<nums[i+1]){
            current++
        }else{
            current=1
        } 
            max=Math.max(max,current)

    }
    return max
};