/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   while(num>=10){
    let str=num.toString()
    let sum=0
    for(let i=0;i<str.length;i++){
        sum+=Number(str[i])
    }
    num=sum
   } 
   return num
};