/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
   people=people.sort((a,b)=>a-b)
let i=0
let j=people.length-1
let count=0
while(i<=j){
let sum=people[i]+people[j]
if(sum<=limit) {
    count++
    i++
    j--
}
else{
    count++
    j--
}

}
return count 
};