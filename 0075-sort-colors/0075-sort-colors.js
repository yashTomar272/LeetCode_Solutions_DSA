/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low=0
    let med=0
    let high=nums.length-1
    while(med<=high){
        if(nums[med]==0){
            [nums[low],nums[med]]=[nums[med],nums[low]]
            med++
            low++
        }
        else if(nums[med]==1)med++
        else {
             [nums[high],nums[med]]=[nums[med],nums[high]]
             high--
        }
    }
    return nums
};