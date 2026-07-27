/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr=[]
    let count=0
    for(let i=0;i<n;i++){
        arr[count]=nums[i]
        arr[count+1]=nums[i+n]
        count+=2
    }
    return arr
};