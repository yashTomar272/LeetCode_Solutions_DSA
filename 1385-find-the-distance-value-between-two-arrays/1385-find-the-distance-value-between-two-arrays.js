/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let i=0
   let count=0
   
   while(i<arr1.length){
    let valid=true
    for(let j=0;j<arr2.length;j++){
        let diff=Math.abs(arr1[i] - arr2[j])
if(diff<=d){
valid=false
break
}
    }
    if(valid) count++
i++
   }
   return count
};