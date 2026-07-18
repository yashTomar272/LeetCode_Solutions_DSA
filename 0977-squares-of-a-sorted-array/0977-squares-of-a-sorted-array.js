/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result=new Array(nums.length)
    let i=0
    let j=nums.length-1
    let k=nums.length-1
    while(i<=j){
    let first=Math.abs(nums[i])
    let second=Math.abs(nums[j])
     
     if(first<second){
        result[k]=second*second
        j--
        k--
     }else{
         result[k]=first*first
         i++
         k--
     }
    }
    return result
};