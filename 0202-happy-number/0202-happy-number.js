/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set=new Set()
    while(n!==1){
if(set.has(n))return false
set.add(n)
let str=n.toString()
let sum=0
for(let ch of str){
let digit=Number(ch)
sum+=digit*digit
}
n=sum
    }
return true
};