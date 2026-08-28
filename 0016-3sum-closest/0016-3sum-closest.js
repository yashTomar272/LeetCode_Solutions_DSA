/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
 let closeset=100000
    for(let k=0;k<=nums.length-3;k++){
        let i=k+1
        let j=nums.length-1
      
         
        while(i<j){
            let sum=nums[k]+nums[i]+nums[j]
            if(Math.abs(target-sum)<Math.abs(target-closeset)){
                closeset=sum
            }
            if(sum<target) i++
            else j--
        }
    }
    return closeset
};