/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
     let mid=s.length/2

  let a=s.slice(0,mid)
  let b=s.slice(mid)
  let countA=0
  let countB=0
  let vowels="aeiouAEIOU"
   for(let i=0;i<mid;i++){
   if(vowels.includes(a[i])){
      countA++
   }
   if(vowels.includes(b[i])){
      countB++
   }
   }
   return countA==countB
};