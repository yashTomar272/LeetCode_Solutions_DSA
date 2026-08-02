/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0
    let j=0
    let set=new Set()
    let ans=0
    while(i<s.length){
        if(set.has(s[i])){
            set.delete(s[j])
            j++
        }else{
            set.add(s[i])
            ans=Math.max(ans,i-j+1)
            i++
        }
      
    }
      return ans
};