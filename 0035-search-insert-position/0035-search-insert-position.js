/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let first=0
    let second=nums.length-1
    while(first<=second){
        let mid=Math.floor((first+second)/2)
        if(nums[mid]==target) return mid
        else if(nums[mid]>target) second=mid-1
        else if(nums[mid]<target) first=mid+1
    }
return first
};