/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map=new Map()
let i=0
let j=0
let max=0
while(j < fruits.length) {
    map.set(fruits[j],(map.get(fruits[j])||0)+1)
while(map.size > 2) {

   map.set(fruits[i],(map.get(fruits[i])||0)-1)

    if(map.get(fruits[i])==0){
        map.delete(fruits[i])
    }

    i++
}
let currentLength = j - i + 1

max = Math.max(max, currentLength)
j++
}
return max
};