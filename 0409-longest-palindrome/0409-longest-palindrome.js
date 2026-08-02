/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   let map=new Map()
   let ans=0
   let hasOdd=false
   for(let ch of s){
   map.set(ch, (map.get(ch) || 0) + 1);
   } 
   for(let [key,value] of map){
    if(value%2==0) ans+=value
    else{
        ans+=value-1
        hasOdd=true
    }
    
   }
   if(hasOdd){
        ans+=1
    }
   return ans
};