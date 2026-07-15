/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s=s.split("")
   const vowels = "aeiouAEIOU";
  let i=0
  let j=s.length-1
  while(i<j){
    if(!vowels.includes(s[i])) i++
    else if(!vowels.includes(s[j])) j--
    else{
        [s[i],s[j]]=[s[j],s[i]]
        i++
        j--
    }
  }
  return s.join("")
};