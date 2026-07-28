/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n=nums.length
    let ans=new Array(n)
    
    let leftProduct=1
    for(let i=0;i<n;i++){
        ans[i]=leftProduct
        leftProduct*=nums[i]
    }

    let rightProduct=1
    for(let i=n-1;i>=0;i--){
        ans[i]*=rightProduct
        rightProduct*=nums[i]
    }
    return ans
};