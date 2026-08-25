/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
num1=num1.split("")
num2=num2.split("")
let i=num1.length-1
let j=num2.length-1
let arr=[]
let carry=0
while(i>=0 ||j>=0|| carry > 0){
    let digit1=i>=0?Number(num1[i]):0
    let digit2=j>=0?Number(num2[j]):0
    let sum=0
    sum=digit1+digit2+carry
    arr.push(sum%10)
    carry=Math.floor(sum / 10)
    i--
    j--
}
return arr.reverse().join("")
};