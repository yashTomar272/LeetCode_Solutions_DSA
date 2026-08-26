/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let arr=String(k).split("").map(Number)
    
let i=num.length-1
let j=arr.length-1
let carry=0
while(i>=0 || j>=0|| carry>0){
let sum=0

let digit1=i>=0?num[i]:0
let digit2=j>=0?arr[j]:0
sum=digit1+digit2+carry
if (i >= 0) {
    num[i] = sum % 10;   
} else {
    num.unshift(sum % 10); 
}
carry=Math.floor(sum/10)
i--
j--
}
return num
};