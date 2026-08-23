/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
   
   let dup=0
   let miss=0
let map=new Map()
for(let i=0;i<nums.length;i++){
  map.set(nums[i],(map.get(nums[i]) || 0)+1)
}
for(let i=1;i<=nums.length;i++){
  if(map.get(i)===2){
  dup=i
  }
  if(map.get(i)===undefined){
    miss=i
  }
}

return [dup,miss]
};