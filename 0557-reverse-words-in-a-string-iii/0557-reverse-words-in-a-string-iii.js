/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let arr=s.split(" ")

for(let i=0;i<arr.length;i++){
   let word=arr[i].split("")
   let left=0
   let right=word.length-1
while(left<=right){
[word[left],word[right]]=[word[right],word[left]]
left++
right--
}
arr[i]=word.join("")
}
return arr.join(" ")
};