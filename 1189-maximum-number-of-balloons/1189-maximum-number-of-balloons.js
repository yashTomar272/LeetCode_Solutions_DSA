/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map=new Map()
    for(let ch of text){
  map.set(ch,(map.get(ch)||0)+1)
}
let balloon="balloon"
let mapBalloon=new Map()
for (let ch of balloon) {
    mapBalloon.set(ch, (mapBalloon.get(ch) || 0) + 1);
}
let result=Infinity
for(let [key,value] of mapBalloon){
    let available=map.get(key)||0
    let count=Math.floor(available/value)
    result=Math.min(result,count)
}
return result
};